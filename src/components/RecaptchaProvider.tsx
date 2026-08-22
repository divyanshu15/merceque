"use client";

import Script from 'next/script';
import React from 'react';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export function getCleanSiteKey() {
  const raw = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!raw) return '';
  return raw.replace(/^['"]|['"]$/g, '').trim();
}

export function RecaptchaProvider() {
  const siteKey = getCleanSiteKey();

  if (!siteKey || siteKey === 'your_recaptcha_site_key_here') {
    console.warn('⚠️ RecaptchaProvider: NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing or empty.');
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
  const siteKey = getCleanSiteKey();
  if (!siteKey || siteKey === 'your_recaptcha_site_key_here') {
    console.warn('⚠️ executeRecaptcha: NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing or empty on client.');
    return null;
  }

  if (typeof window === 'undefined') return null;

  // Poll for window.grecaptcha script if it hasn't loaded yet (up to 3 seconds)
  let attempts = 0;
  while (!window.grecaptcha && attempts < 30) {
    await new Promise((res) => setTimeout(res, 100));
    attempts++;
  }

  if (!window.grecaptcha) {
    console.error('❌ executeRecaptcha: Google reCAPTCHA script was not loaded on window.');
    return null;
  }

  return new Promise((resolve) => {
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(siteKey, { action });
        resolve(token);
      } catch (err) {
        console.error('❌ executeRecaptcha error during token generation:', err);
        resolve(null);
      }
    });
  });
}
