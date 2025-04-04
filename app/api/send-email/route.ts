import { NextRequest, NextResponse } from "next/server";

// Import nodemailer with a type assertion to bypass TypeScript error
const nodemailer = require("nodemailer") as any;

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Configure email transport with Gmail-specific settings
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail service instead of custom SMTP settings
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASSWORD || "",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { to, subject, html } = (await req.json()) as EmailPayload;

    if (!to || !subject || !html) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Attempting to send email to:", to);

    // Send email with enhanced error handling
    try {
      // Verify connection configuration first
      await transporter.verify();

      // Send the email
      const result = await transporter.sendMail({
        from: `"Birthday Cruise" <${process.env.EMAIL_USER}>`, // Use EMAIL_USER instead of EMAIL_FROM
        to,
        subject,
        html,
      });
      console.log(
        "Email sent successfully to:",
        to,
        "messageId:",
        result.messageId
      );
    } catch (emailError: any) {
      console.error("Detailed email error:", emailError);
      throw new Error(`Email sending failed: ${emailError.message}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in email API route:", error);

    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
