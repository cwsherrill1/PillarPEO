const MEASUREMENT_ID = "G-4JX7T4D8KT";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

let loaded = false;

function loadGtag() {
  if (loaded) return;
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID);
}

export function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/**
 * Loads GA4 lazily: on the first user interaction, or after 3s idle —
 * whichever comes first. Keeps analytics off the critical rendering path.
 */
export function initAnalytics() {
  if (typeof window === "undefined") return;

  const events: Array<keyof WindowEventMap> = ["scroll", "pointerdown", "keydown"];

  const start = () => {
    cleanup();
    loadGtag();
  };

  const timer = window.setTimeout(start, 3000);

  const cleanup = () => {
    window.clearTimeout(timer);
    events.forEach((e) => window.removeEventListener(e, start));
  };

  events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
}

export function trackPageView(path: string) {
  gtag("event", "page_view", { page_path: path });
}
