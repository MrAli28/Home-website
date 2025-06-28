import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from a .env file at project root (if present)
load_dotenv()


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-h3m4k5l6m7n8o9p0q1r2s3t4u5v6w7x8y9z0a1b2c3d4e5f6g7'

# SECURITY WARNING: don't run with debug turned on in production!
# Set debug mode based on environment variable
DEBUG = os.environ.get('DJANGO_DEBUG', 'False') == 'True'

# Allow all hosts for Railway deployment
ALLOWED_HOSTS = ['*']

# Get PORT from environment variable or use default 8000
PORT = int(os.environ.get('PORT', 8000))

CSRF_TRUSTED_ORIGINS = [
    'http://127.0.0.1:8000',
    'http://localhost:8000',
    'http://127.0.0.1:56434',
    'http://127.0.0.1:58768',
    'http://127.0.0.1:60776',
    'http://127.0.0.1:64553',
    'http://127.0.0.1:58008',
    'http://127.0.0.1:64260',
]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'services',  # Our main app
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'home_services_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'home_services_project.wsgi.application'

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

# Media files (Uploaded files)
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Simplified static file serving for production
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# -------------------- Email / SMTP configuration --------------------
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False
EMAIL_TIMEOUT = 10
EMAIL_HOST_USER = 'thehomefixuk@gmail.com'
EMAIL_HOST_PASSWORD = 'fasaoxbivmfmzhdp'
DEFAULT_FROM_EMAIL = 'thehomefixuk@gmail.com'
EMAIL_SSL_CERTFILE = None
EMAIL_SSL_KEYFILE = None
SERVER_EMAIL = 'thehomefixuk@gmail.com'
EMAIL_FILE_PATH = os.path.join(BASE_DIR, 'sent_emails')

# Admin email addresses for booking notifications
ADMIN_EMAILS = [
    'alyasghar719@gmail.com',
    'abdullahshafiq146@gmail.com'
]
# -------------------------------------------------------------------


# Authentication settings
LOGIN_URL = '/login/'
LOGIN_REDIRECT_URL = '/dashboard/'
LOGOUT_REDIRECT_URL = '/'  

# Custom authentication backends
AUTHENTICATION_BACKENDS = [
    'services.backends.EmailOrUsernameModelBackend',  # Our custom backend
    'django.contrib.auth.backends.ModelBackend',  # Default backend
]
