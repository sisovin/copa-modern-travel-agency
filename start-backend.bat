@echo off
REM Activate Python virtualenv
call venv\Scripts\activate

REM Set environment variables for Django backend
set DJANGO_SETTINGS_MODULE=backend.settings
set DJANGO_SECRET_KEY=your_secret_key
set DJANGO_DEBUG=True
set DATABASE_URL=postgres://user:password@localhost:5432/dbname

REM Start Django backend server
python manage.py runserver
