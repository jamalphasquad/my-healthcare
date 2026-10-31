import fs from 'node:fs';
import { SITE, LAYOUT, write, img, abs } from './lib.mjs';
import { home, clinicsIndex, clinicPage, articlesIndex, articlePage, dueDateCalc } from './pages.mjs';
import { staticPages } from './static-pages.mjs';
import { CLINICS as RAW_CLINICS, NETWORKS, SERVICES, COMING_SOON } from './clinics.mjs';
import { normalizeClinic, deriveAreas } from './clinic-data.mjs';
import { NEWS } from './articles-news.mjs';
import { GUIDES } from './articles-guides.mjs';
import { OCT_2026 } from './articles-2026-10.mjs';
import { OCT_2026_B } from './articles-2026-10b.mjs';
import { OCT_2026_C } from './articles-2026-10c.mjs';
import { OCT_2026_D } from './articles-2026-10d.mjs';
import { OCT_2026_E } from './articles-2026-10e.mjs';
import { OCT_2026_F } from './articles-2026-10f.mjs';
import { OCT_2026_G } from './articles-2026-10g.mjs';
import { SEO } from './seo.mjs';
import { GBP } from './gbp.mjs';
import { buildIndex, searchPage } from './search.mjs';
import { buildCollections } from './collections.mjs';

const ARTICLES = [...OCT_2026_G, ...OCT_2026_F, ...OCT_2026_E, ...OCT_2026_D, ...OCT_2026_C, ...OCT_2026_B, ...OCT_2026, ...NEWS, ...GUIDES]; // newest first
// Footer topic links, kept to categories that have at least one article.
const TOPICS = [['prevention', 'Prevention'], ['heart-diabetes', 'Heart & diabetes'], ['weight', 'Weight & metabolism'], ['aesthetics', 'Aesthetics & skin'], ['womens-health', "Women's health"], ['mental-wellbeing', 'Mental wellbeing'], ['guides', 'Guides'], ['clinic-guides', 'Clinic guides']]
  .filter(([cat]) => ARTICLES.some((a) => a.cat === cat));

for (const c of RAW_CLINICS) if (SEO[c.slug]) [c.seoTitle, c.seoDesc] = SEO[c.slug];
for (const c of RAW_CLINICS) if (GBP[c.slug]) Object.assign(c, GBP[c.slug]); // match Google Business Profiles
const CLINICS = RAW_CLINICS.map((c) => normalizeClinic(c, NETWORKS));
const dup = CLINICS.map((c) => c.slug).find((s, i, all) => all.indexOf(s) !== i);
if (dup) throw new Error('Duplicate clinic slug: ' + dup);
const AREAS = deriveAreas(CLINICS);
const comingSoon = COMING_SOON.filter((n) => !AREAS.some((a) => a.label.toLowerCase() === n.toLowerCase()));
LAYOUT.areas = AREAS;

const fill = (html) => html
  .replace(/\{\{img:([^|]+)\|([^}]+)\}\}/g, (_, n, alt) => img(n, alt, { sizes: '(max-width: 760px) 100vw, 700px' }))
  .replace('{{calc:due-date}}', () => dueDateCalc('article-due'));
for (const a of ARTICLES) {
  for (const s of a.sections) s.html = fill(s.html);
  const text = [a.standfirst, ...(a.keyPoints || []), ...a.sections.map((s) => s.h + ' ' + s.html), ...(a.faqs || []).flat()].join(' ').replace(/<[^>]+>/g, ' ');
  a.words = text.split(/\s+/).filter(Boolean).length;
  a.mins = Math.max(3, Math.round(a.words / 200));
}
for (const a of ARTICLES) if (SEO[a.slug]) [a.seoTitle, a.desc] = SEO[a.slug];

// Only offer service filters that at least one clinic provides.
const services = SERVICES.filter(([k]) => CLINICS.some((c) => c.serviceKeys.includes(k)));
const ctx = { clinics: CLINICS, areas: AREAS, services, articles: ARTICLES, topics: TOPICS };
// Area, service and network landing pages first, so other pages can link to them.
const coll = buildCollections(ctx);
ctx.coll = coll;
LAYOUT.services = coll.serviceLinks || [];
const collectionPages = [...coll.areas, ...coll.services, ...coll.networks];
home({ ...ctx, faqs: FAQS(), featuredSlug: 'breast-cancer-screening-malaysia', comingSoon });
clinicsIndex(ctx);
for (const c of CLINICS) clinicPage(c, ctx);
articlesIndex({ ...ctx, featuredSlug: 'free-health-screening-malaysia' });
for (const a of ARTICLES) articlePage(a, ctx);
staticPages(TOPICS);
searchPage(TOPICS);
const indexed = buildIndex({ ...ctx, collectionPages });

// sitemap + robots
const urls = [
  ['/', '1.0', 'weekly'], ['/clinics/', '0.9', 'weekly'], ['/articles/', '0.9', 'daily'],
  ...collectionPages.map((x) => [x.url, '0.8', 'weekly', x.image]),
  ...CLINICS.map((c) => [`/clinics/${c.slug}/`, '0.8', 'monthly', c.image]),
  ...ARTICLES.map((a) => [`/articles/${a.slug}/`, '0.7', 'monthly', a.image, a.modified]),
  ['/about/', '0.4', 'yearly'], ['/contact/', '0.4', 'yearly'], ['/privacy/', '0.2', 'yearly'],
];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(([p, pr, cf, im, mod]) => `  <url><loc>${abs(p)}</loc><lastmod>${mod || SITE.updated}</lastmod><changefreq>${cf}</changefreq><priority>${pr}</priority>${im ? `<image:image><image:loc>${abs(`/assets/img/${im}-og.jpg`)}</image:loc></image:image>` : ''}</url>`).join('\n')}
</urlset>
`);
if (SITE.indexNowKey) write(`${SITE.indexNowKey}.txt`, SITE.indexNowKey);
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /404.html\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

// Cloudflare Pages config (not served as pages).
// _headers: caching and security headers. CSS/JS URLs carry ?v=, images keep their names, so they get shorter lifetimes.
write('_headers', `/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=(self)

/assets/img/*
  Cache-Control: public, max-age=2592000

/assets/css/*
  Cache-Control: public, max-age=86400

/assets/js/*
  Cache-Control: public, max-age=86400

/assets/search-index.json
  Cache-Control: public, max-age=3600

/assets/cards/*
  Cache-Control: public, max-age=86400
`);
// _routes.json: only run the www-redirect function (functions/_middleware.js) for pages, not static files.
write('_routes.json', JSON.stringify({ version: 1, include: ['/*'], exclude: ['/assets/*', '/favicon*', '/apple-touch-icon.png', '/site.webmanifest', '/robots.txt', '/sitemap.xml'] }, null, 2) + '\n');
console.log('built', ARTICLES.length, 'articles,', CLINICS.length, 'clinics,', `${coll.areas.length} area / ${coll.services.length} service / ${coll.networks.length} network pages,`, indexed, 'search docs;', ARTICLES.map((a) => a.slug + ':' + a.words).join(' '));

function FAQS() {
  return [
    ['What number do I call in a medical emergency in Malaysia?', 'Call <a href="tel:999">999</a> from any phone. From a mobile phone, <a href="tel:112">112</a> also connects you to emergency services.'],
    ['How do I find a clinic that is open now in Kuala Lumpur?', 'Use the clinic directory above. Each listing shows opening hours in Malaysia time, and the “Open now” switch shows clinics open at this moment. Hours can differ on public holidays, so please call ahead.'],
    ['Do I need a referral to see a specialist?', 'Private specialist centres in Kuala Lumpur usually accept appointments without a referral, although some insurers ask for a GP letter. Government hospitals generally require a referral for specialist clinics.'],
    ['Can I get free health screening in Kuala Lumpur?', 'Yes, if you are eligible. PERKESO contributors aged 40–59 can book free screening through the SEHATi app, PeKa B40 covers eligible lower-income Malaysians aged 40 and over, and LPPKN offers free or subsidised mammograms for women aged 40–70. See our <a href="/articles/undiagnosed-diabetes-high-blood-pressure-young-adults/">screening guide</a>.'],
    ['How do I get my clinic listed?', 'Listing is free. <a href="/contact/#list">Send us</a> your clinic details and registration information, and we will check them before publishing.'],
  ];
}
