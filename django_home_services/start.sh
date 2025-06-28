#!/bin/bash

# Exit on error
set -o errexit

# Run migrations
python manage.py migrate

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Start Gunicorn
exec gunicorn home_services_project.wsgi:application \
    --bind 0.0.0.0:${PORT:-8000} \
    --workers 3 \
    --log-level=info \
    --access-logfile - \
    --error-logfile -
