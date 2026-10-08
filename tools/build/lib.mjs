import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const SITE = {
  name: 'MalaysiaHealthcare.my',
  url: 'https://malaysiahealthcare.my',
  locale: 'en_MY',
  lang: 'en-MY',
  year: 2026,
  updated: '2026-10-08',
};
const META = JSON.parse(fs.readFileSync(new URL('./imgmeta.json', import.meta.url)));
// Output goes to the repository root (two levels up) unless OUT is set.
export const OUT = process.env.OUT || fileURLToPath(new URL('../../', import.meta.url));

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const abs = (p) => SITE.url + p;

export function img(name, alt, o = {}) {
  const m = META[name];
  if (!m) throw new Error('No image ' + name);
  const largest = m.widths[m.widths.length - 1];
  const def = m.widths.includes(960) ? 960 : largest;
  const srcset = m.widths.map((w) => `/assets/img/${name}-${w}.webp ${w}w`).join(', ');
  const h = Math.round((m.h * def) / m.w);
  return `<img src="/assets/img/${name}-${def}.webp" srcset="${srcset}" sizes="${o.sizes || '(max-width: 760px) 100vw, 50vw'}" alt="${esc(alt)}" width="${def}" height="${h}"${o.eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"${o.cls ? ` class="${o.cls}"` : ''}>`;
}
export const ogImg = (name) => abs(`/assets/img/${name}-og.jpg`);
export function preloadImg(name, sizes) {
  const m = META[name];
  const srcset = m.widths.map((w) => `/assets/img/${name}-${w}.webp ${w}w`).join(', ');
  return `<link rel="preload" as="image" type="image/webp" imagesrcset="${srcset}" imagesizes="${sizes}">`;
}

export function head(p) {
  const url = abs(p.path);
  const ld = p.ld ? `<script type="application/ld+json">${JSON.stringify(p.ld)}</script>` : '';
  return `<!DOCTYPE html>
<html lang="${SITE.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en-MY" href="${url}">
<link rel="alternate" hreflang="x-default" href="${url}">
<meta name="robots" content="${p.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
<meta name="theme-color" content="#2F5D50">
<meta name="geo.region" content="${p.geo?.region || 'MY-10'}">
<meta name="geo.placename" content="${esc(p.geo?.place || 'Klang Valley, Selangor')}">
${p.geo?.pos ? `<meta name="geo.position" content="${p.geo.pos[0]};${p.geo.pos[1]}">\n<meta name="ICBM" content="${p.geo.pos[0]}, ${p.geo.pos[1]}">\n` : ''}<meta property="og:type" content="${p.ogType || 'website'}">
<meta property="og:locale" content="${SITE.locale}">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(p.ogTitle || p.title)}">
<meta property="og:description" content="${esc(p.ogDesc || p.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImg(p.image || 'kl-skyline')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(p.imageAlt || 'Kuala Lumpur skyline')}">
${p.article ? `<meta property="article:published_time" content="${p.article.published}">\n<meta property="article:modified_time" content="${p.article.modified}">\n<meta property="article:section" content="${esc(p.article.section)}">\n` : ''}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.ogTitle || p.title)}">
<meta name="twitter:description" content="${esc(p.ogDesc || p.desc)}">
<meta name="twitter:image" content="${ogImg(p.image || 'kl-skyline')}">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&amp;family=Figtree:wght@400;500;600&amp;display=swap">
<link rel="stylesheet" href="/assets/css/site.css?v=2">
${p.preload || ''}${ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="page">
`;
}

const NAV = [
  ['/clinics/', 'Clinics', 'clinics'],
  ['/articles/', 'Health articles', 'articles'],
  ['/#awareness', 'Awareness', 'awareness'],
  ['/#areas', 'Neighbourhoods', 'areas'],
];
export function header(active, o = {}) {
  return `<div class="topbar"><div class="wrap">
<span>Medical emergency? Call <a href="tel:999"><strong>999</strong></a> &middot; from mobile, <a href="tel:112"><strong>112</strong></a></span>
<span class="muted">Serving Kuala Lumpur &amp; the Klang Valley</span>
</div></div>
<header class="site-header">
<nav class="wrap nav" aria-label="Main">
<a class="brand" href="/" aria-label="MalaysiaHealthcare.my home"><span class="brand__mark" aria-hidden="true">m</span><span class="brand__name">MalaysiaHealthcare<span>.my</span></span></a>
<button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Menu"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
<div class="nav__links" id="nav-links">
${NAV.map(([h, l, k]) => `<a href="${h}"${k === active ? ' aria-current="page"' : ''}>${l}</a>`).join('\n')}
<a class="btn" href="/clinics/">Find a clinic</a>
</div>
</nav>
${o.progress ? '<div class="progress" aria-hidden="true"></div>' : ''}
</header>
<main id="main">
`;
}

export function footer(topics) {
  return `</main>
<footer class="footer">
<div class="wrap footer__grid">
<div class="stack g12">
<span class="footer__brand">MalaysiaHealthcare<span>.my</span></span>
<p>An independent guide to clinics and health awareness in Kuala Lumpur and the Klang Valley, Malaysia.</p>
<p>Medical emergency: call <a href="tel:999">999</a> (or <a href="tel:112">112</a> from a mobile).</p>
</div>
<nav aria-label="Clinics">
<span class="h">Clinics</span>
<a href="/clinics/medipulih-klinik-kelana-jaya/">Kelana Jaya</a>
<a href="/clinics/medipulih-klinik-subang-perdana/">Subang Perdana</a>
<a href="/clinics/medipulih-klinik-seri-pristana/">Seri Pristana</a>
<a href="/clinics/">All clinics</a>
</nav>
<nav aria-label="Topics">
<span class="h">Topics</span>
${topics.map(([slug, label]) => `<a href="/articles/#topic-${slug}">${label}</a>`).join('\n')}
</nav>
<nav aria-label="Site">
<span class="h">MalaysiaHealthcare.my</span>
<a href="/about/">About &amp; editorial policy</a>
<a href="/contact/">List your clinic</a>
<a href="/contact/">Contact</a>
<a href="/privacy/">Privacy (PDPA)</a>
</nav>
</div>
<div class="wrap footer__base">
<span>Information is for general awareness and does not replace advice from a registered medical practitioner.</span>
<span>&copy; ${SITE.year} MalaysiaHealthcare.my &middot; Klang Valley, Malaysia</span>
</div>
</footer>
</div>
<script src="/assets/js/site.js?v=2" defer></script>
</body>
</html>
`;
}

export function crumbs(items) {
  return `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items
    .map(([href, label], i) => (i === items.length - 1 ? `<li><span aria-current="page">${esc(label)}</span></li>` : `<li><a href="${href}">${esc(label)}</a></li>`))
    .join('')}</ol></nav>`;
}
export function crumbsLd(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([href, label], i) => ({ '@type': 'ListItem', position: i + 1, name: label, item: abs(href) })),
  };
}

export function write(rel, html) {
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

export const ORG = {
  '@type': 'Organization',
  '@id': SITE.url + '/#org',
  name: SITE.name,
  url: SITE.url + '/',
  logo: { '@type': 'ImageObject', url: SITE.url + '/assets/icon-512.png', width: 512, height: 512 },
  areaServed: [
    { '@type': 'City', name: 'Kuala Lumpur' },
    { '@type': 'State', name: 'Selangor' },
  ],
};
export const WEBSITE = {
  '@type': 'WebSite',
  '@id': SITE.url + '/#website',
  url: SITE.url + '/',
  name: SITE.name,
  inLanguage: SITE.lang,
  publisher: { '@id': SITE.url + '/#org' },
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const longDate = (iso) => { const [y, m, d] = iso.split('-').map(Number); return `${d} ${MONTHS[m - 1]} ${y}`; };
export const shortDate = (iso) => { const [y, m, d] = iso.split('-').map(Number); return `${d} ${MONTHS[m - 1].slice(0, 3)} ${y}`; };
