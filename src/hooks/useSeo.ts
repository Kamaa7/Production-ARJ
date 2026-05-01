import { useEffect } from "react";

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  jsonLd?: Record<string, unknown>;
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

export const useSeo = ({ title, description, path, jsonLd }: SeoConfig) => {
  useEffect(() => {
    document.title = title;

    ensureMeta("name", "description").setAttribute("content", description);
    ensureMeta("property", "og:title").setAttribute("content", title);
    ensureMeta("property", "og:description").setAttribute("content", description);
    const shareImage = `${window.location.origin}/arj-mark.png`;
    ensureMeta("property", "og:image").setAttribute("content", shareImage);
    ensureMeta("name", "twitter:title").setAttribute("content", title);
    ensureMeta("name", "twitter:description").setAttribute("content", description);
    ensureMeta("name", "twitter:image").setAttribute("content", shareImage);

    const canonicalHref = path ? `${window.location.origin}${path}` : window.location.href;
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
  }, [title, description, path, jsonLd]);
};
