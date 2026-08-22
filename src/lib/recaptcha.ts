export function getCleanSecretKey() {
  const raw = process.env.RECAPTCHA_SECRET_KEY;
  if (!raw) return '';
  return raw.replace(/^['"]|['"]$/g, '').trim();
}

export async function verifyRecaptcha(token: string, action?: string) {
  const secretKey = getCleanSecretKey();

  // Fallback for development if keys are not configured yet
  if (!secretKey || secretKey === 'your_recaptcha_secret_key_here') {
    console.warn('⚠️ RECAPTCHA_SECRET_KEY is not set. Skipping reCAPTCHA verification.');
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
      const errorCodes: string[] = data['error-codes'] || [];
      console.error('❌ reCAPTCHA verification failed with error codes:', errorCodes);

      // Handle browser-error (unregistered domain or key mismatch)
      if (errorCodes.includes('browser-error')) {
        console.error(
          '💡 DIAGNOSTIC: "browser-error" means the domain (e.g. merceque.vercel.app) is not listed under "Domains" in your Google reCAPTCHA v3 Admin Console, or the build was not redeployed after setting NEXT_PUBLIC_RECAPTCHA_SITE_KEY.'
        );

        // Allow localhost testing seamlessly during development
        if (process.env.NODE_ENV === 'development') {
          console.warn('⚠️ Development mode active: Allowing form submission despite local browser-error.');
          return { success: true, score: 1.0 };
        }

        return {
          success: false,
          error: 'reCAPTCHA domain error: Please add "merceque.vercel.app" to Domains in Google reCAPTCHA Console and Redeploy on Vercel.',
        };
      }

      if (errorCodes.includes('invalid-input-secret')) {
        return {
          success: false,
          error: 'reCAPTCHA Secret Key is invalid. Please check RECAPTCHA_SECRET_KEY in Vercel.',
        };
      }

      return {
        success: false,
        error: `reCAPTCHA verification failed (${errorCodes.join(', ') || 'unknown error'})`,
      };
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
    return { success: false, error: 'reCAPTCHA verification server error' };
  }
}
