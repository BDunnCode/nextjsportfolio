import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const recipientEmail = process.env.RECIPIENT_EMAIL

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Form Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);
  console.log("Recipient Email:", recipientEmail);
    
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p><strong>From:</strong> ${email}</p>
        <p>Thank you for contacting us!</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
