// Deploy the site to Cloudflare Pages (project "healthcaredirectory").
//
//   node tools/build/build.mjs   # regenerate pages first
//   node tools/deploy.mjs        # production (main)
//   node tools/deploy.mjs preview  # a *.pages.dev preview only
//
// Copies only the public site files into .deploy/ (never tools/, README.md or .git),
// then runs `wrangler pages deploy`. Needs Wrangler logged in (`wrangler login`).
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const OUT = path.join(ROOT, '.deploy');
const PROJECT = 'healthcaredirectory';
const PUBLIC = [
  'index.html', '404.html', 'about', 'articles', 'clinics', 'contact', 'privacy', 'search', 'assets',
  'favicon.ico', 'favicon.svg', 'favicon-32.png', 'apple-touch-icon.png', 'site.webmanifest',
  'robots.txt', 'sitemap.xml', '_headers', '_routes.json',
];

// IndexNow key file (<32 hex>.txt) written by the build
PUBLIC.push(...fs.readdirSync(ROOT).filter((f) => /^[0-9a-f]{32}\.txt$/.test(f)));

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'dist'), { recursive: true });
for (const item of PUBLIC) {
  const src = path.join(ROOT, item);
  if (!fs.existsSync(src)) throw new Error(`Missing ${item} — run node tools/build/build.mjs first`);
  fs.cpSync(src, path.join(OUT, 'dist', item), { recursive: true });
}
// Pages Functions are compiled from ./functions next to the deploy directory.
fs.cpSync(path.join(ROOT, 'functions'), path.join(OUT, 'functions'), { recursive: true });

const branch = process.argv[2] === 'preview' ? 'preview' : 'main';
execSync(`wrangler pages deploy dist --project-name ${PROJECT} --branch ${branch} --commit-dirty=true`, { cwd: OUT, stdio: 'inherit' });
