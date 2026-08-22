"use client";

import Script from 'next/script';
import React from 'react';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export function RecaptchaProvider() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey || siteKey === 'your_recaptcha_site_key_here') {
    return null;
  }

  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
      strategy="afterInteractive"
    />
  );
}

export async function executeRecaptcha(action: string): Promise<string | null> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey || siteKey === 'your_recaptcha_site_key_here') {
    return null;
  }

  if (typeof window !== 'undefined' && window.grecaptcha) {
    return new Promise((resolve) => {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(siteKey, { action });
          resolve(token);
        } catch (err) {
          console.error('Failed to execute reCAPTCHA:', err);
          resolve(null);
        }
      });
    });
  }

  return null;
}
