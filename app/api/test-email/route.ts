import { NextRequest, NextResponse } from "next/server";

// Import nodemailer with a type assertion to bypass TypeScript error
const nodemailer = require("nodemailer") as any;

// Function to create appropriate email transporter
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
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const email = searchParams.get("email") || process.env.EMAIL_USER;

  try {
    // Skip test during build
    if (process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV) {
      return NextResponse.json({
        success: true,
        message: "Test skipped during build/deploy",
      });
    }

    // Create transporter with appropriate settings
    const transporter = await createTransporter();

    // Verify connection
    await transporter.verify();

    // Send test email
    const result = await transporter.sendMail({
      from: process.env.EMAIL_USER
        ? `"Email Test" <${process.env.EMAIL_USER}>`
        : '"Email Test" <test@example.com>',
      to: email,
      subject: "Test Email from Birthday Cruise Website",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #f97316;">Email Test Successful!</h1>
          <p>This is a test email from your Birthday Cruise website.</p>
          <p>If you're receiving this, your email functionality is working correctly!</p>
          <p>Sent at: ${new Date().toLocaleString()}</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
            <p>This is an automated test email.</p>
          </div>
        </div>
      `,
    });

    // If using ethereal test email, include the preview URL
    if (result.messageId && result.messageId.includes("ethereal")) {
      const previewUrl = nodemailer.getTestMessageUrl(result);

      return NextResponse.json({
        success: true,
        message: "Test email sent successfully (using test account)",
        details: {
          messageId: result.messageId,
          recipient: email,
          timestamp: new Date().toISOString(),
          previewUrl: previewUrl,
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully!",
      details: {
        messageId: result.messageId,
        recipient: email,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    console.error("Error sending test email:", error.message);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        config: {
          emailUser: process.env.EMAIL_USER ? "✓ Set" : "✗ Not set",
          emailPass: process.env.EMAIL_PASSWORD ? "✓ Set" : "✗ Not set",
        },
      },
      { status: 500 }
    );
  }
}
