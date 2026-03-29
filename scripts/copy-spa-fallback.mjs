/**
 * GitHub Pages returns 404 for deep links to client routes unless a 404.html exists.
 * Copy the built index so the SPA shell loads and React Router can handle the path.
 */
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const index = join(root, 'dist', 'index.html');
const fallback = join(root, 'dist', '404.html');
copyFileSync(index, fallback);
console.log('Wrote dist/404.html for GitHub Pages SPA routing.');
