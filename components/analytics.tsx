"use client";

import Script from "next/script";
import { GA_ID, GOOGLE_ADS_ID } from "@/lib/gtag";

/**
 * Carrega o gtag.js e configura GA4 e Google Ads (quando os IDs estiverem definidos
 * em NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_GOOGLE_ADS_ID). Sem esses envs, não renderiza nada —
 * seguro de manter no layout mesmo antes de ter as contas configuradas.
 */
export function Analytics() {
  const ids = [GA_ID, GOOGLE_ADS_ID].filter(Boolean) as string[];

  if (ids.length === 0) return null;

  const loaderId = ids[0];

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
          ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
