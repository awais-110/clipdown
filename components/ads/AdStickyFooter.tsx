'use client';

import { useState } from "react";

export function AdStickyFooter({ slot }: { slot: string }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-3 md:hidden">
      <div className="glass-panel flex w-full max-w-sm items-center justify-between rounded-2xl px-4 py-3">
        <div className="text-xs text-text-muted">Sponsored</div>
        <button className="text-xs text-text-muted" onClick={() => setDismissed(true)}>
          Close
        </button>
        <ins className="adsbygoogle block h-[50px] w-[320px]" data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID} data-ad-slot={slot} />
      </div>
    </div>
  );
}
