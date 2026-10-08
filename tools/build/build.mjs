import fs from 'node:fs';
import { SITE, write, img, abs } from './lib.mjs';
import { home, clinicsIndex, clinicPage, articlesIndex, articlePage } from './pages.mjs';
import { staticPages } from './static-pages.mjs';
import { CLINICS, AREAS, SERVICES, NETWORK, COMING_SOON } from './clinics.mjs';
import { NEWS } from './articles-news.mjs';
import { GUIDES } from './articles-guides.mjs';
import { SEO } from './seo.mjs';

const TOPICS = [['prevention', 'Dengue & haze'], ['heart-diabetes', 'Heart & diabetes'], ['womens-health', "Women's health"], ['mental-wellbeing', 'Mental wellbeing'], ['clinic-guides', 'Clinic guides']];

const ARTICLES = [...NEWS, ...GUIDES];
const fill = (html) => html.replace(/\{\{img:([^|]+)\|([^}]+)\}\}/g, (_, n, alt) => img(n, alt, { sizes: '(max-width: 760px) 100vw, 700px' }));
for (const a of ARTICLES) {
  for (const s of a.sections) s.html = fill(s.html);
  const text = [a.standfirst, ...(a.keyPoints || []), ...a.sections.map((s) => s.h + ' ' + s.html), ...(a.faqs || []).flat()].join(' ').replace(/<[^>]+>/g, ' ');
  a.words = text.split(/\s+/).filter(Boolean).length;
  a.mins = Math.max(3, Math.round(a.words / 200));
}
ARTICLES.find((a) => a.slug === 'breast-cancer-screening-malaysia').clinicsFilter = 'womens';
for (const a of ARTICLES) if (SEO[a.slug]) [a.seoTitle, a.desc] = SEO[a.slug];
for (const c of CLINICS) if (SEO[c.slug]) [c.seoTitle, c.seoDesc] = SEO[c.slug];

const ctx = { clinics: CLINICS, areas: AREAS, services: SERVICES, articles: ARTICLES, topics: TOPICS, network: NETWORK };
home({ ...ctx, faqs: FAQS(), featuredSlug: 'breast-cancer-screening-malaysia', comingSoon: COMING_SOON });
clinicsIndex(ctx);
for (const c of CLINICS) clinicPage(c, ctx);
articlesIndex({ ...ctx, featuredSlug: 'dengue-klang-valley-first-three-days' });
for (const a of ARTICLES) articlePage(a, ctx);
staticPages(TOPICS);

// sitemap + robots
const urls = [
  ['/', '1.0', 'weekly'], ['/clinics/', '0.9', 'weekly'], ['/articles/', '0.9', 'daily'],
  ...CLINICS.map((c) => [`/clinics/${c.slug}/`, '0.8', 'monthly', c.image]),
  ...ARTICLES.map((a) => [`/articles/${a.slug}/`, '0.7', 'monthly', a.image, a.modified]),
  ['/about/', '0.4', 'yearly'], ['/contact/', '0.4', 'yearly'], ['/privacy/', '0.2', 'yearly'],
];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(([p, pr, cf, im, mod]) => `  <url><loc>${abs(p)}</loc><lastmod>${mod || SITE.updated}</lastmod><changefreq>${cf}</changefreq><priority>${pr}</priority>${im ? `<image:image><image:loc>${abs(`/assets/img/${im}-og.jpg`)}</image:loc></image:image>` : ''}</url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /404.html\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log('built', ARTICLES.length, 'articles,', CLINICS.length, 'clinics;', ARTICLES.map((a) => a.slug + ':' + a.words).join(' '));

function FAQS() {
  return [
    ['What number do I call in a medical emergency in Malaysia?', 'Call <a href="tel:999">999</a> from any phone. From a mobile phone, <a href="tel:112">112</a> also connects you to emergency services.'],
    ['Which clinics near Kelana Jaya, Subang and Sungai Buloh are open late?', 'MediPulih Klinik Subang Perdana (Shah Alam) and MediPulih Klinik Seri Pristana (Sungai Buloh) list hours of 8am to 11pm every day. MediPulih Klinik Kelana Jaya is open on weekdays, 8am to 5pm. Use the “Open now” switch above to see which clinics are open right now.'],
    ['Do I need a referral to see a specialist?', 'Private specialist centres in the Klang Valley usually accept appointments without a referral, although some insurers ask for a GP letter. Government hospitals generally require a referral for specialist clinics.'],
    ['Can I get free health screening in Selangor or Kuala Lumpur?', 'Yes, if you are eligible. PERKESO contributors aged 40–59 can book free screening through the SEHATi app, PeKa B40 covers eligible lower-income Malaysians aged 40 and over, and LPPKN offers free or subsidised mammograms for women aged 40–70. See our <a href="/articles/undiagnosed-diabetes-high-blood-pressure-young-adults/">screening guide</a>.'],
    ['How do I get my clinic listed?', 'Listing is free. <a href="/contact/">Send us</a> your clinic details and registration information, and we will check them before publishing.'],
  ];
}
