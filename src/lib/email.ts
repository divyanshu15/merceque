import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailNotification({
  subject,
  html,
}: {
  subject: string;
  html: string;
}) {
  const recipient = process.env.MY_PERSONAL_EMAIL || 'divyanshu150798@gmail.com';

  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠️ RESEND_API_KEY is not set in environment variables.');
    return { success: false, error: 'Missing API key' };
  }

  try {
    const data = await resend.emails.send({
      from: 'Merceque <onboarding@resend.dev>',
      to: [recipient],
      subject: subject,
      html: html,
    });
    return { success: true, data };
  } catch (error) {
    console.error('❌ Failed to send email via Resend:', error);
    return { success: false, error };
  }
}
