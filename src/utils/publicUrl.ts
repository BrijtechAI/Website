/** Public folder URLs; follows Vite `base` (`/` in dev, `./` in production). */
export function publicUrl(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}
