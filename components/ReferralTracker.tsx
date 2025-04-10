'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { checkAndStoreReferral } from '../app/utils/referral';

/**
 * Client component that checks for referral parameters in the URL
 * and stores them in cookies when the page loads or URL changes
 */
export default function ReferralTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Check for referral parameter and store it on initial load
    checkAndStoreReferral();
  }, []);
  
  // Also check when URL parameters change
  useEffect(() => {
    // Check for referral parameter and store it when URL changes
    checkAndStoreReferral();
  }, [pathname, searchParams]);

  // This component doesn't render anything
  return null;
}
