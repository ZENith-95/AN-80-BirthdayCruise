# Birthday Cruise Website

A celebratory website for Anastasie's 80th birthday cruise, featuring booking functionality, event information, and email notifications.

## Features

- Responsive design with smooth animations
- Booking form with validation
- Email notifications for bookings
- MongoDB database integration
- Admin dashboard for booking management

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Email**: Nodemailer
- **Form Handling**: React Hook Form with validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB database (local or Atlas)

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd anastasie-nervais-birthday
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory based on `.env.local.example`:

```
# MongoDB connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/birthday-cruise

# Base URL for API calls (server-side only)
BASE_URL=http://localhost:3000

# Email service configuration
EMAIL_SERVER=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-email-password
EMAIL_FROM=noreply@birthdaycruise.com

# Admin credentials
ADMIN_USER=admin
ADMIN_PASSWORD=secure_password
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel Deployment

This project is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure the environment variables in the Vercel dashboard
3. Deploy

### Other Platforms

For other platforms, make sure to:

1. Build the project with `npm run build`
2. Set all required environment variables
3. Start the server with `npm start`

## Admin Access

The admin dashboard is available at `/admin/bookings`, protected by basic authentication.

## Environment Variables

| Variable         | Description                        |
| ---------------- | ---------------------------------- |
| `MONGODB_URI`    | MongoDB connection string          |
| `BASE_URL`       | Base URL for server-side API calls |
| `EMAIL_SERVER`   | SMTP server for emails             |
| `EMAIL_PORT`     | SMTP port                          |
| `EMAIL_SECURE`   | Whether to use TLS                 |
| `EMAIL_USER`     | SMTP username                      |
| `EMAIL_PASSWORD` | SMTP password                      |
| `EMAIL_FROM`     | From email address                 |
| `ADMIN_USER`     | Admin username                     |
| `ADMIN_PASSWORD` | Admin password                     |

## License

This project is licensed under the MIT License.
