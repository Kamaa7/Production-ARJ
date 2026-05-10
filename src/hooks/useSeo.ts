import { useEffect } from "react";

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  jsonLd?: Record<string, unknown>;
  /** Makes canonical, og:url, and og:image absolute for consistent indexing. */
  siteOrigin?: string;
};

const ensureMeta = (key: "name" | "property", value: string) => {
  const selector = `meta[${key}="${value}"]`;
  let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(key, value);
    document.head.appendChild(meta);
  }
  return meta;
};

export const useSeo = ({ title, description, path, jsonLd, siteOrigin }: SeoConfig) => {
  useEffect(() => {
    document.title = title;

    ensureMeta("name", "description").setAttribute("content", description);
    ensureMeta("property", "og:title").setAttribute("content", title);
    ensureMeta("property", "og:description").setAttribute("content", description);
    ensureMeta("name", "twitter:title").setAttribute("content", title);
    ensureMeta("name", "twitter:description").setAttribute("content", description);

    const origin = siteOrigin?.replace(/\/$/, "");
    const canonicalHref = origin
      ? `${origin}${path ?? "/"}`
      : path
        ? `${window.location.origin}${path}`
        : window.location.href;

    if (origin) {
      ensureMeta("property", "og:url").setAttribute("content", canonicalHref);
      ensureMeta("property", "og:image").setAttribute("content", `${origin}/arj-mark.png?v=arj3`);
    }
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    const scriptId = "arj-json-ld";
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const currentScript = document.getElementById(scriptId);
      if (currentScript) {
        currentScript.remove();
      }
    };
  }, [title, description, path, jsonLd, siteOrigin]);
};
