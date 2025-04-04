import { IBooking } from "@/models/Booking";

export async function sendConfirmationEmail(booking: IBooking) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: booking.email,
          subject: "Booking Confirmation - Anastasie's 80th Birthday Cruise",
          html: generateConfirmationEmailHtml(booking),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return true;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return false;
  }
}

function generateConfirmationEmailHtml(booking: IBooking): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #f97316; margin-bottom: 10px;">Booking Confirmation</h1>
        <p style="font-size: 18px; color: #666;">Anastasie's 80th Birthday Cruise</p>
      </div>
      
      <p>Dear ${booking.name},</p>
      
      <p>Thank you for your cabin reservation for Anastasie's 80th Birthday Cruise! We're excited to have you join us for this special celebration.</p>
      
      <div style="background-color: #f9f9f9; border-left: 4px solid #f97316; padding: 15px; margin: 20px 0;">
        <h2 style="color: #f97316; margin-top: 0;">Booking Details:</h2>
        <ul style="padding-left: 20px;">
          <li><strong>Cabin Type:</strong> ${booking.cabinType}</li>
          <li><strong>Number of Guests:</strong> ${booking.guests}</li>
          <li><strong>Date:</strong> May 11–17, 2025</li>
          <li><strong>Departure:</strong> Miami, Florida</li>
        </ul>
      </div>
      
      <p>We'll be in touch with more details as the cruise date approaches. If you have any questions, please don't hesitate to contact us.</p>
      
      <p>Best regards,<br>The Birthday Cruise Team</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center;">
        <p>This is an automated email. Please do not reply directly to this message.</p>
      </div>
    </div>
  `;
}
