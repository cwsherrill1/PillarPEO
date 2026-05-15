import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
  ogType?: "website" | "article";
  ogImage?: string;
}

const SITE_NAME = "Pillar PEO Advisors";
const BASE_URL = "https://pillarpeo.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const SEOHead = ({ title, description, canonical, jsonLd, ogType = "website", ogImage }: SEOHeadProps) => {
  useEffect(() => {
    // Title
    document.title = `${title} — ${SITE_NAME}`;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // OG tags
    const currentUrl = canonical || `${BASE_URL}${window.location.pathname}`;
    const resolvedImage = ogImage
      ? ogImage.startsWith("http")
        ? ogImage
        : `${BASE_URL}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`
      : DEFAULT_OG_IMAGE;
    const ogTags: Record<string, string> = {
      "og:title": `${title} — ${SITE_NAME}`,
      "og:description": description,
      "og:url": currentUrl,
      "og:type": ogType,
      "og:image": resolvedImage,
      "twitter:title": `${title} — ${SITE_NAME}`,
      "twitter:description": description,
      "twitter:image": resolvedImage,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      const isOg = property.startsWith("og:");
      const selector = isOg
        ? `meta[property="${property}"]`
        : `meta[name="${property}"]`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(isOg ? "property" : "name", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Canonical
    const canonicalUrl = canonical || `${BASE_URL}${window.location.pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    // JSON-LD
    const existingScript = document.querySelector('script[data-seo-jsonld]');
    if (jsonLd) {
      if (existingScript) {
        existingScript.textContent = JSON.stringify(jsonLd);
      } else {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(jsonLd);
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }

    return () => {
      const script = document.querySelector('script[data-seo-jsonld]');
      if (script) script.remove();
    };
  }, [title, description, canonical, jsonLd, ogType, ogImage]);

  return null;
};

export default SEOHead;
