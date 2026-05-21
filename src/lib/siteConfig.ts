/** Production site URL (no trailing slash). Override with VITE_SITE_ORIGIN for non-prod builds. */
export const SITE_ORIGIN = (
  (import.meta.env.VITE_SITE_ORIGIN as string | undefined) ?? "https://www.thehouseofarj.store"
).replace(/\/$/, "");

/** Homepage meta description — keep in sync with `index.html` meta tags. */
export const HOME_META_DESCRIPTION =
  "Discover modest clothing culture in India by The House of ARJ. Shop zardozi hijabs, co-ord sets, and elegant festive essentials.";

/** ARJ atelier WhatsApp (matches Contact / Footer). */
export const ARJ_WHATSAPP_E164 = "919278335862";
export const ARJ_WHATSAPP_URL = `https://wa.me/${ARJ_WHATSAPP_E164}`;
export const ARJ_WHATSAPP_BUY_MESSAGE =
  "Hello The House of ARJ — I would like to buy / enquire about your collection.";
export const ARJ_WHATSAPP_BUY_URL = `${ARJ_WHATSAPP_URL}?text=${encodeURIComponent(ARJ_WHATSAPP_BUY_MESSAGE)}`;
