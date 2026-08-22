import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendEmailNotification } from '@/lib/email';
import { verifyRecaptcha } from '@/lib/recaptcha';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, startupName, enquiry, product, quantity, gRecaptchaToken } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify Google reCAPTCHA v3 token
    const recaptcha = await verifyRecaptcha(gRecaptchaToken, 'catalog_b2b_form');
    if (!recaptcha.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    const orgName = organization || startupName || quantity || 'Not specified';
    const enquiryText = enquiry || product || 'Catalogue Request';

    let order = null;
    try {
      order = await prisma.b2BOrder.create({
        data: {
          name,
          email,
          product: enquiryText,
          quantity: orgName,
        },
      });
    } catch (dbErr) {
      console.warn('⚠️ Database write failed or skipped, proceeding with email delivery:', dbErr);
    }

    // Send email notification via Resend with exact matching variables & labels
    await sendEmailNotification({
      subject: `💼 New B2B Catalogue Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #1a2b1f; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <h2 style="color: #2b4433; margin-top: 0; border-bottom: 2px solid #2b4433; padding-bottom: 8px;">New B2B / Wholesale Inquiry</h2>
          <p style="font-size: 16px; margin-bottom: 12px;"><strong>Full Name:</strong> ${name}</p>
          <p style="font-size: 16px; margin-bottom: 12px;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #2b4433; font-weight: bold;">${email}</a></p>
          <p style="font-size: 16px; margin-bottom: 12px;"><strong>Organization / Startup Name:</strong> ${orgName}</p>
          <p style="font-size: 16px; margin-bottom: 8px;"><strong>Enquiry:</strong></p>
          <div style="background: #f4f6f3; padding: 16px; border-radius: 8px; border-left: 4px solid #2b4433; font-size: 15px; line-height: 1.6;">
            ${enquiryText.replace(/\n/g, '<br/>')}
          </div>
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #e2e8f0;"/>
          <p style="font-size: 12px; color: #718096; margin-bottom: 0;">Sent via Merceque B2B Order & Catalogue Request Form (reCAPTCHA Protected)</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, order }, { status: 201 });
  } catch (error) {
    console.error('B2B Order submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit order inquiry' },
      { status: 500 }
    );
  }
}
