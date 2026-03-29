/** Public folder URLs on GitHub Pages (`base` is `/Website/`). */
export function publicUrl(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}
