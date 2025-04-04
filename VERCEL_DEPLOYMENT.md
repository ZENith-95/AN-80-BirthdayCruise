# Vercel Deployment Guide

This document explains how to deploy the Birthday Cruise website on Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Set Up Environment Variables in Vercel

Before deploying, you need to configure environment variables in Vercel:

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on "New Project"
3. Import your Git repository
4. Before deploying, click on "Environment Variables" and add the following:

| Name                     | Value                                        | Description                          |
| ------------------------ | -------------------------------------------- | ------------------------------------ |
| `MONGODB_URI`            | `mongodb+srv://username:password@cluster...` | Your MongoDB connection string       |
| `EMAIL_USER`             | `your-email@gmail.com`                       | Gmail account for sending emails     |
| `EMAIL_PASSWORD`         | `your-app-password`                          | Gmail app password                   |
| `NEXT_PUBLIC_BASE_URL`   | `https://your-domain.vercel.app`             | Your deployed app URL                |
| `ADMIN_USER`             | `admin`                                      | Admin username (server-side auth)    |
| `ADMIN_PASSWORD`         | `your-secure-password`                       | Admin password (server-side auth)    |
| `NEXT_PUBLIC_ADMIN_USER` | `admin`                                      | Admin username for UI display (safe) |

5. Click "Deploy"

> **Important Security Note**: Never use environment variables with `NEXT_PUBLIC_` prefix for sensitive information like passwords, as these are exposed to the browser.

### 2. Deployment Using Vercel CLI

If you're using the Vercel CLI for deployment:

```bash
# Install Vercel CLI if you haven't already
npm install -g vercel

# Deploy with environment variables
vercel --env MONGODB_URI="mongodb+srv://username:password@cluster..." \
       --env EMAIL_USER="your-email@gmail.com" \
       --env EMAIL_PASSWORD="your-app-password" \
       --env NEXT_PUBLIC_BASE_URL="https://your-domain.vercel.app" \
       --env ADMIN_USER="admin" \
       --env ADMIN_PASSWORD="your-secure-password" \
       --env NEXT_PUBLIC_ADMIN_USER="admin"
```

### 3. Verify Deployment

After deployment completes:

1. Visit your new Vercel URL
2. Navigate to `/admin/login` to verify the admin dashboard works
3. Test the booking functionality to ensure it saves to the database

### 4. Troubleshooting Common Issues

#### MongoDB Connection Issues

If you encounter database connection errors:

1. Verify your MongoDB Atlas connection string is correct
2. Ensure your IP address is whitelisted in MongoDB Atlas
   - Go to Atlas → Network Access → Add IP Address → Add Current IP Address
   - For Vercel deployments, you may need to allow access from anywhere (`0.0.0.0/0`)

#### Email Sending Issues

If emails aren't sending:

1. Verify your Gmail credentials
2. Make sure you're using an App Password, not your regular password
3. Check Vercel logs for any errors
4. Try the test endpoint: `https://your-domain.vercel.app/api/test-email`

#### Build Errors

If you encounter build errors:

1. Check the Vercel build logs
2. Ensure all required environment variables are set
3. Verify your code compiles locally with `npm run build`

### 5. Custom Domain Setup (Optional)

To use a custom domain:

1. Go to your Vercel project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS settings

### 6. Continuous Deployment

Vercel automatically sets up continuous deployment from your Git repository. Any push to the main branch will trigger a new deployment.

## Important Notes

- The application uses server-side authentication for the admin area, which is more secure than client-side authentication.
- Email functionality depends on Gmail's SMTP service, which has usage limits. For higher volume, consider upgrading to a dedicated email service like SendGrid or Mailgun.
- MongoDB connections are handled gracefully during build time, but ensure your database is properly configured for production use.

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/solutions/nextjs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
