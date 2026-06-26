"use client";

import Script from "next/script";

function UmamiClient() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_ID;
  const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SRC;

  if (!websiteId || !scriptUrl) return null;

  return (
    <Script
      src={scriptUrl}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}

export { UmamiClient };
