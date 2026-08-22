import { NextResponse } from 'next/server';
import { sendEmailNotification } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Send email notification to personal email via Resend
    await sendEmailNotification({
      subject: `📩 New Contact Form Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #1a2b1f; max-width: 600px; border: 1px solid #e2e8f0; rounded: 12px; background: #ffffff;">
          <h2 style="color: #2b4433; margin-top: 0; border-bottom: 2px solid #2b4433; padding-bottom: 8px;">New Contact Us Submission</h2>
          <p style="font-size: 16px; margin-bottom: 8px;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px; margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2b4433; font-weight: bold;">${email}</a></p>
          <p style="font-size: 16px; margin-bottom: 8px;"><strong>Message:</strong></p>
          <div style="background: #f4f6f3; padding: 16px; border-radius: 8px; border-left: 4px solid #2b4433; font-size: 15px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #e2e8f0;"/>
          <p style="font-size: 12px; color: #718096; margin-bottom: 0;">Sent via Merceque Contact Form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
