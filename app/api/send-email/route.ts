import { NextRequest, NextResponse } from "next/server";

// Import nodemailer with a type assertion to bypass TypeScript error
const nodemailer = require("nodemailer") as any;

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Configure a test account for development if no credentials are provided
async function createTransporter() {
  // For production, use the configured email service
  if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
    return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // For development/testing - generate a test account
  const testAccount = await nodemailer.createTestAccount();

  // Create a test SMTP service account from ethereal.email
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { to, subject, html } = (await req.json()) as EmailPayload;

    if (!to || !subject || !html) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email with enhanced error handling
    try {
      // Create appropriate transporter based on environment
      const transporter = await createTransporter();

      // Verify connection configuration
      await transporter.verify();

      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER
          ? `"Birthday Cruise" <${process.env.EMAIL_USER}>`
          : '"Birthday Cruise" <test@example.com>',
        to,
        subject,
        html,
      });
    } catch (emailError: any) {
      console.error("Email sending error:", emailError.message);
      throw new Error(`Email sending failed: ${emailError.message}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in email API route:", error.message);

    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
