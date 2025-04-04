import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const email = searchParams.get("email") || process.env.EMAIL_USER;

  try {
    console.log(`Testing email functionality to: ${email}`);

    // Configure transporter with updated Gmail settings
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail service instead of custom SMTP settings
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
      // Debug logging
      debug: true,
      logger: true,
    });

    // Verify connection before sending
    await transporter.verify();
    console.log("SMTP connection verified successfully");

    // Send test email
    const result = await transporter.sendMail({
      from: `"Email Test" <${process.env.EMAIL_USER}>`, // Use EMAIL_USER instead of EMAIL_FROM
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

    console.log("Email sent successfully:", result);

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
    console.error("Error sending test email:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
        config: {
          service: "gmail",
          user: process.env.EMAIL_USER ? "✓ Set" : "✗ Not set",
          pass: process.env.EMAIL_PASSWORD ? "✓ Set" : "✗ Not set",
        },
        recommendation:
          "Make sure you're using an App Password for Gmail. Regular passwords won't work with SMTP.",
      },
      { status: 500 }
    );
  }
}
