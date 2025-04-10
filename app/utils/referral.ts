/**
 * Utility functions for handling agency referral parameters
 */

// Cookie name for storing the referral source
export const REFERRAL_COOKIE_NAME = 'next_move_referral';

// Valid referral sources
export type ReferralSource = 'next' | 'move' | null;

/**
 * Check if a string is a valid referral source
 */
export function isValidReferralSource(source: string | null): source is ReferralSource {
  return source === 'next' || source === 'move';
}

/**
 * Get the referral source from cookies
 */
export function getReferralSource(): ReferralSource {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${REFERRAL_COOKIE_NAME}=`)) {
      const value = cookie.substring(REFERRAL_COOKIE_NAME.length + 1);
      return isValidReferralSource(value) ? value : null;
    }
  }
  return null;
}

/**
 * Set the referral source in cookies
 */
export function setReferralSource(source: ReferralSource): void {
  if (typeof document === 'undefined') return;
  
  // Set cookie that expires in 30 days
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 30);
  
  if (source) {
    document.cookie = `${REFERRAL_COOKIE_NAME}=${source};expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`;
  } else {
    // Clear the cookie if source is null
    document.cookie = `${REFERRAL_COOKIE_NAME}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
  }
}

/**
 * Check URL for referral parameter and store it if present
 */
export function checkAndStoreReferral(): void {
  if (typeof window === 'undefined') return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const referralParam = urlParams.get('r');
  
  if (isValidReferralSource(referralParam)) {
    setReferralSource(referralParam);
  }
}
