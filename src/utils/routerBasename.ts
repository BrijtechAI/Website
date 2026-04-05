const ROOT_HOSTS = new Set(['brijtech.org', 'www.brijtech.org']);

/**
 * GitHub Pages project URL: `…/github.io/Website/…` → basename `/Website`.
 * Custom domain (brijtech.org): site files are at domain root (`/assets/…`), never use `/Website` basename.
 * Production asset URLs use Vite `base: './'` so `./assets/…` resolves correctly on both hosts.
 */
export function getRouterBasename(): string | undefined {
  if (import.meta.env.DEV) return undefined;
  if (ROOT_HOSTS.has(window.location.hostname)) return undefined;
  const first = window.location.pathname.split('/').filter(Boolean)[0];
  if (!first) return undefined;
  if (first === 'Website' || first === 'website') return `/${first}`;
  return undefined;
}
