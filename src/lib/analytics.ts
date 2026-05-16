/**
 * GA4 page views for React Router (gtag is loaded in index.html).
 * Override ID via VITE_GA_MEASUREMENT_ID if needed.
 */

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-SZ8T7Y2CRN";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const isAnalyticsEnabled = () => Boolean(GA_MEASUREMENT_ID);

/** Track a page view on client-side navigation. */
export function trackPageView(path: string): void {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    send_to: GA_MEASUREMENT_ID,
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
