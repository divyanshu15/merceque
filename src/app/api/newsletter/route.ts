import { NextResponse } from 'next/server';
import { sendEmailNotification } from '@/lib/email';
import { verifyRecaptcha } from '@/lib/recaptcha';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, gRecaptchaToken } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Verify Google reCAPTCHA v3 token
    const recaptcha = await verifyRecaptcha(gRecaptchaToken, 'newsletter_form');
    if (!recaptcha.success) {
      return NextResponse.json(
        { error: recaptcha.error || 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Send email notification to personal email via Resend
    await sendEmailNotification({
      subject: `🌱 New Newsletter Subscription: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #1a2b1f; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <h2 style="color: #2b4433; margin-top: 0; border-bottom: 2px solid #2b4433; padding-bottom: 8px;">New Newsletter Subscriber</h2>
          <p style="font-size: 16px;">A new user has subscribed to the Merceque newsletter:</p>
          <p style="font-size: 18px; font-weight: bold; color: #2b4433;"><a href="mailto:${email}">${email}</a></p>
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #e2e8f0;"/>
          <p style="font-size: 12px; color: #718096; margin-bottom: 0;">Sent via Merceque Newsletter Subscription Form (reCAPTCHA Protected)</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
