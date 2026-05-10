/** Production site URL (no trailing slash). Override with VITE_SITE_ORIGIN for non-prod builds. */
export const SITE_ORIGIN = (
  (import.meta.env.VITE_SITE_ORIGIN as string | undefined) ?? "https://www.thehouseofarj.store"
).replace(/\/$/, "");

/** Homepage meta description — keep in sync with `index.html` meta tags. */
export const HOME_META_DESCRIPTION =
  "Discover modest clothing culture in India by The House of ARJ. Shop zardozi hijabs, co-ord sets, and elegant festive essentials.";
