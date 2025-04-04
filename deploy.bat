@echo off
echo Deploying to Vercel...

REM Check if Vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
  echo Vercel CLI not found. Please install it using: npm install -g vercel
  exit /b 1
)

REM Build the deployment command
set DEPLOY_CMD=vercel

REM Check if production flag is provided
if "%1"=="--prod" (
  set DEPLOY_CMD=%DEPLOY_CMD% --prod
  echo Deploying to production...
) else (
  echo Deploying to preview environment...
)

REM Execute Vercel deployment with environment variables from .env.local
echo You'll be prompted to enter values for environment variables during deployment.
echo Please have your MongoDB connection string and email credentials ready.
echo.
echo Running: %DEPLOY_CMD%
%DEPLOY_CMD%

echo.
echo Deployment complete!
echo.
echo Don't forget to set up your environment variables in the Vercel dashboard:
echo - MONGODB_URI
echo - EMAIL_USER
echo - EMAIL_PASSWORD
echo - NEXT_PUBLIC_BASE_URL
echo - ADMIN_USER
echo - ADMIN_PASSWORD
echo - NEXT_PUBLIC_ADMIN_USER
echo.
echo IMPORTANT: Never use NEXT_PUBLIC_ prefix for passwords or other sensitive data! 