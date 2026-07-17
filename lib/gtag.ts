export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const GOOGLE_ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/** Dispara um evento genérico para o GA4 (e Google Ads, se configurado). */
export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}

/**
 * Dispara o evento de clique em WhatsApp — usado como conversão em campanhas do Google Ads.
 * `source` identifica de qual parte da página o clique veio (header, hero, services, final_cta...).
 */
export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", { event_category: "engagement", event_label: source });

  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!GOOGLE_ADS_ID || !GOOGLE_ADS_CONVERSION_LABEL) return;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
  });
}
