import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const SITE = {
  name: 'HealthcareDirectory.my',
  url: 'https://healthcaredirectory.my',
  email: 'hello@healthcaredirectory.my',
  locale: 'en_MY',
  lang: 'en-MY',
  year: 2026,
  updated: '2026-10-26',
  // IndexNow key (Bing, Yandex, Seznam, Naver). The build publishes /<key>.txt; tools/indexnow.mjs submits URLs.
  indexNowKey: 'c18b6333843ce1b5889de1d4c23eef1e',
  // Search console verification codes, added once you have them (or verify Google by DNS TXT in Cloudflare).
  googleVerification: '',
  bingVerification: '',
};
// Brand as shown in the header and footer: "HealthcareDirectory" + accent ".my"
const BRAND = 'HealthcareDirectory<span>.my</span>';
// Set by build.mjs so the footer can link to the areas that have clinics.
export const LAYOUT = { areas: [], services: [] };
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
${SITE.googleVerification ? `<meta name="google-site-verification" content="${SITE.googleVerification}">
` : ''}${SITE.bingVerification ? `<meta name="msvalidate.01" content="${SITE.bingVerification}">
` : ''}
<meta name="geo.region" content="${p.geo?.region || 'MY-14'}">
<meta name="geo.placename" content="${esc(p.geo?.place || 'Kuala Lumpur')}">
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
<link rel="stylesheet" href="/assets/css/site.css?v=6">
${p.preload || ''}${ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="page">
`;
}

const NAV = [
  ['/clinics/', 'Clinics', 'clinics'],
  ['/articles/', 'Articles', 'articles'],
  ['/#awareness', 'Awareness', 'awareness'],
  ['/#areas', 'Areas', 'areas'],
];
const ICON_SEARCH = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
const ICON_CLOSE = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';

// Search box markup shared by the header pill and the mobile popup.
// Without JavaScript the form simply submits to /search/?q=…
function searchForm(id, o = {}) {
  return `<form class="${o.cls}" action="/search/" method="get" role="search" data-search="${id}"${o.attrs || ''}>
<label class="sr-only" for="${id}-q">Search ${SITE.name}</label>
<span class="hs__icon">${ICON_SEARCH}</span>
<input id="${id}-q" class="hs__input" type="search" name="q" placeholder="${o.placeholder || 'Search health topics'}" autocomplete="off" spellcheck="false" enterkeyhint="search" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="${id}-list">
${o.kbd ? '<kbd class="hs__kbd" aria-hidden="true">/</kbd>' : ''}${o.close ? `<button type="button" class="hs__close" data-search-close aria-label="Close search">${ICON_CLOSE}</button>` : ''}
<div class="hs__panel" ${o.inline ? '' : 'hidden'}><ul class="hs__list" id="${id}-list" role="listbox" aria-label="Search results"></ul></div>
</form>`;
}

export function header(active, o = {}) {
  return `<div class="topbar"><div class="wrap">
<span>Medical emergency? Call <a href="tel:999"><strong>999</strong></a> &middot; from mobile, <a href="tel:112"><strong>112</strong></a></span>
<span class="muted">Serving KL, Selangor &amp; beyond</span>
</div></div>
<header class="site-header">
<div class="wrap nav">
<a class="brand" href="/" aria-label="${SITE.name} home"><span class="brand__mark" aria-hidden="true">h</span><span class="brand__name">${BRAND}</span></a>
${o.noHeaderSearch ? '<span class="hs hs--spacer"></span>' : searchForm('hs', { cls: 'hs', kbd: true })}
<nav class="nav__links" id="nav-links" aria-label="Main">
${NAV.map(([h, l, k]) => `<a href="${h}"${k === active ? ' aria-current="page"' : ''}>${l}</a>`).join('\n')}
<a class="btn" href="/clinics/">Find a clinic</a>
</nav>
<button class="icon-btn search-btn" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="search-modal" aria-label="Search"${o.noHeaderSearch ? ' hidden' : ''}>${ICON_SEARCH}</button>
<button class="icon-btn nav__toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Menu"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
</div>
${o.progress ? '<div class="progress" aria-hidden="true"></div>' : ''}
</header>
${o.noHeaderSearch ? '' : `<div class="smodal" id="search-modal" role="dialog" aria-modal="true" aria-label="Search the site" hidden>
<div class="smodal__backdrop" data-search-close></div>
<div class="smodal__box">
${searchForm('ms', { cls: 'hs hs--modal', close: true, inline: true, placeholder: 'Search clinics, articles, topics' })}
</div>
</div>`}
<main id="main">
`;
}

export function footer(topics) {
  return `</main>
<footer class="footer">
<div class="wrap footer__grid">
<div class="stack g12">
<span class="footer__brand">${BRAND}</span>
<p>An independent directory of clinics and a health awareness guide for Malaysia.</p>
<p>Medical emergency: call <a href="tel:999">999</a> (or <a href="tel:112">112</a> from a mobile).</p>
</div>
<nav aria-label="Clinics">
<span class="h">Clinics</span>
${LAYOUT.areas.slice(0, 5).map((a) => `<a href="${a.href}">${esc(a.label)}</a>`).join('\n')}
${LAYOUT.services.slice(0, 3).map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join('\n')}
<a href="/clinics/">All clinics</a>
<a href="/contact/#list">List your clinic</a>
</nav>
<nav aria-label="Topics">
<span class="h">Topics</span>
${topics.map(([slug, label]) => `<a href="/articles/#topic-${slug}">${label}</a>`).join('\n')}
</nav>
<nav aria-label="Site">
<span class="h">${SITE.name}</span>
<a href="/about/">About &amp; editorial policy</a>
<a href="/contact/">Contact</a>
<a href="/search/">Search</a>
<a href="/privacy/">Privacy (PDPA)</a>
</nav>
</div>
<div class="wrap footer__base">
<span>Information is for general awareness and does not replace advice from a registered medical practitioner.</span>
<span>&copy; ${SITE.year} ${SITE.name} &middot; Malaysia</span>
</div>
</footer>
</div>
<script src="/assets/js/site.js?v=5" defer></script>
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
  email: SITE.email,
  areaServed: [
    { '@type': 'City', name: 'Kuala Lumpur' },
    { '@type': 'Country', name: 'Malaysia' },
  ],
};
export const WEBSITE = {
  '@type': 'WebSite',
  '@id': SITE.url + '/#website',
  url: SITE.url + '/',
  name: SITE.name,
  inLanguage: SITE.lang,
  publisher: { '@id': SITE.url + '/#org' },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: SITE.url + '/search/?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const longDate = (iso) => { const [y, m, d] = iso.split('-').map(Number); return `${d} ${MONTHS[m - 1]} ${y}`; };
export const shortDate = (iso) => { const [y, m, d] = iso.split('-').map(Number); return `${d} ${MONTHS[m - 1].slice(0, 3)} ${y}`; };
