#!/bin/bash

# Vercel deployment script
echo "Deploying to Vercel..."

# Load environment variables from .env.local
if [ -f .env.local ]; then
    echo "Loading environment variables from .env.local"
    export $(grep -v '^#' .env.local | xargs)
else
    echo "Warning: .env.local file not found"
fi

# Build the deployment command
DEPLOY_CMD="vercel"

# Add environment variables to the command
[ ! -z "$MONGODB_URI" ] && DEPLOY_CMD="$DEPLOY_CMD --env MONGODB_URI=\"$MONGODB_URI\""
[ ! -z "$EMAIL_USER" ] && DEPLOY_CMD="$DEPLOY_CMD --env EMAIL_USER=\"$EMAIL_USER\""
[ ! -z "$EMAIL_PASSWORD" ] && DEPLOY_CMD="$DEPLOY_CMD --env EMAIL_PASSWORD=\"$EMAIL_PASSWORD\""
[ ! -z "$BASE_URL" ] && DEPLOY_CMD="$DEPLOY_CMD --env BASE_URL=\"$BASE_URL\""
[ ! -z "$ADMIN_USER" ] && DEPLOY_CMD="$DEPLOY_CMD --env ADMIN_USER=\"$ADMIN_USER\""
[ ! -z "$ADMIN_PASSWORD" ] && DEPLOY_CMD="$DEPLOY_CMD --env ADMIN_PASSWORD=\"$ADMIN_PASSWORD\""

# Check if production flag is provided
if [ "$1" == "--prod" ]; then
    DEPLOY_CMD="$DEPLOY_CMD --prod"
    echo "Deploying to production..."
else
    echo "Deploying to preview environment..."
fi

# Execute the deployment
echo "Running: $DEPLOY_CMD"
eval $DEPLOY_CMD

echo "Deployment complete!" 