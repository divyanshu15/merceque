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
    return { success: false, error: 'reCAPTCHA token is missing from request' };
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
      console.error('❌ Google reCAPTCHA siteverify failed:', { errorCodes, action });

      if (errorCodes.includes('invalid-input-secret')) {
        return {
          success: false,
          error: 'reCAPTCHA Secret Key is invalid. Check RECAPTCHA_SECRET_KEY in Vercel.',
        };
      }

      if (errorCodes.includes('browser-error') || errorCodes.includes('hostname-mismatch')) {
        // Allow local dev
        if (process.env.NODE_ENV === 'development') {
          console.warn('⚠️ Development mode: Bypassing local domain reCAPTCHA error.');
          return { success: true, score: 1.0 };
        }

        return {
          success: false,
          error: 'reCAPTCHA domain error: Please add "merceque.vercel.app" under Domains in Google reCAPTCHA v3 Console.',
        };
      }

      if (errorCodes.includes('timeout-or-duplicate')) {
        return {
          success: false,
          error: 'reCAPTCHA token expired. Please try submitting again.',
        };
      }

      return {
        success: false,
        error: `reCAPTCHA error: ${errorCodes.join(', ') || 'Verification failed'}`,
      };
    }

    // reCAPTCHA v3 score verification (0.0 = bot, 1.0 = human)
    const scoreThreshold = 0.3; // Standard recommended threshold for form submissions
    const userScore = data.score ?? 1.0;
    const isHuman = userScore >= scoreThreshold;

    if (!isHuman) {
      console.warn(`⚠️ Low reCAPTCHA score (${userScore}) detected for action: ${action}`);
      return {
        success: false,
        error: `Security score low (${userScore}). Submission rejected as automated request.`,
        score: userScore,
      };
    }

    return {
      success: true,
      score: userScore,
      action: data.action,
    };
  } catch (err) {
    console.error('❌ reCAPTCHA server error:', err);
    return { success: false, error: 'reCAPTCHA verification server exception' };
  }
}
