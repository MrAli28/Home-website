#!/bin/bash

# Exit on error
set -o errexit

# Wait for PostgreSQL to be ready (if using PostgreSQL)
if [ "$DATABASE_URL" ]; then
    echo "Waiting for PostgreSQL..."
    until pg_isready -d "$DATABASE_URL" > /dev/null 2>&1; do
        sleep 2
    done
    echo "PostgreSQL is ready!"
fi

# Run database migrations
echo "Running database migrations..."
python manage.py migrate --noinput

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Create superuser if it doesn't exist
echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser(os.environ.get('DJANGO_SUPERUSER_EMAIL'), os.environ.get('DJANGO_SUPERUSER_PASSWORD')) if not User.objects.filter(is_superuser=True).exists() else None" | python manage.py shell || true

# Start Gunicorn
echo "Starting Gunicorn..."
exec gunicorn home_services_project.wsgi:application \
    --bind 0.0.0.0:${PORT:-8000} \
    --workers 3 \
    --log-level=info \
    --access-logfile - \
    --error-logfile -
