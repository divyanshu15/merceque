export async function verifyRecaptcha(token: string, action?: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // Fallback for development if keys are not configured yet
  if (!secretKey || secretKey === 'your_recaptcha_secret_key_here') {
    console.warn('⚠️ RECAPTCHA_SECRET_KEY is not set. Skipping reCAPTCHA verification for development.');
    return { success: true, score: 1.0 };
  }

  if (!token) {
    return { success: false, error: 'reCAPTCHA token is missing' };
  }

  try {
    const params = new URLSearchParams({
      secret: secretKey,
      response: token,
    });

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await response.json();

    if (!data.success) {
      console.warn('❌ reCAPTCHA verification failed:', data['error-codes']);
      return { success: false, error: data['error-codes'] || 'Verification failed' };
    }

    // reCAPTCHA v3 returns a score between 0.0 (bot) and 1.0 (human)
    const scoreThreshold = 0.5;
    const isHuman = data.score >= scoreThreshold;

    if (!isHuman) {
      console.warn(`⚠️ Low reCAPTCHA score (${data.score}) detected for action: ${action}`);
    }

    return {
      success: isHuman,
      score: data.score,
      action: data.action,
    };
  } catch (err) {
    console.error('❌ reCAPTCHA server error:', err);
    return { success: false, error: 'reCAPTCHA verification error' };
  }
}
