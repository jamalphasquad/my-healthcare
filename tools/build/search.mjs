import { head, header, footer, crumbs, write } from './lib.mjs';
import { rangeText } from './pages.mjs';

const text = (html) => String(html || '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();

// Malay and everyday terms, so "denggi" or "darah tinggi" find the right pages.
const SYNONYMS = [
  [/dengue/i, 'denggi aedes nyamuk mosquito'],
  [/haze|air quality/i, 'jerebu api ipu air pollutant index smoke'],
  [/diabetes|blood sugar/i, 'kencing manis gula hba1c'],
  [/blood pressure|hypertension/i, 'darah tinggi hypertension bp tekanan darah'],
  [/breast|mammogram/i, 'payudara kanser cancer mammogram pink october'],
  [/mental health|depression/i, 'kesihatan mental depression anxiety stress kemurungan'],
  [/circumcision|sunat/i, 'sunat berkhatan khatan circumcision'],
  [/antenatal|pregnan/i, 'mengandung hamil pregnancy antenatal'],
  [/vaccin/i, 'vaksin suntikan jab immunisation'],
  [/emergency|999/i, 'kecemasan emergency a&e hospital'],
  [/clinic/i, 'klinik doctor doktor gp'],
  [/screening/i, 'saringan check-up checkup medical'],
  [/aesthetic|skin|dermal|botox|filler|laser/i, 'aesthetic estetik kecantikan beauty kulit skin botox filler laser facial'],
];
const synonyms = (s) => SYNONYMS.filter(([re]) => re.test(s)).map(([, k]) => k).join(' ');

export function buildIndex({ articles, clinics, collectionPages = [] }) {
  const docs = [];
  for (const a of articles) {
    const gc = a.clinic && clinics.find((c) => c.slug === a.clinic);
    const body = text([...(a.keyPoints || []), ...a.sections.map((s) => s.html), ...(a.faqs || []).flat()].join(' '));
    docs.push({
      type: gc ? 'Clinic guide' : 'Article', cat: gc ? `${gc.areaLabel}, ${gc.locality}` : a.catLabel, title: a.title, url: `/articles/${a.slug}/`, desc: a.excerpt,
      headings: a.sections.map((s) => s.h).join(' · '),
      keywords: [a.catLabel, a.crumb, ...(a.about || []), synonyms(a.title + ' ' + body)].join(' '),
      body,
    });
  }
  for (const c of clinics) {
    const hours = c.hours ? [1, 2, 3, 4, 5, 6, 0].map((d) => rangeText(c.hours[d])).join(' ') : '';
    docs.push({
      type: 'Clinic', cat: `${c.areaLabel}, ${c.locality}`, title: c.name, url: `/clinics/${c.slug}/`, desc: c.intro,
      headings: c.services.map((s) => s.name).join(' · '),
      keywords: [c.areaLabel, c.locality, c.district, c.state, c.postcode, c.phone, c.network?.name, ...(c.altNames || []), ...c.areaServed, ...c.tags, c.cardSpec, synonyms(c.intro + ' clinic ' + c.services.map((s) => s.name).join(' '))].join(' '),
      body: text([c.addressLine, c.gettingThere, hours, ...c.services.map((s) => `${s.name} ${s.note || ''}`), c.about, ...(c.faqs || []).flat()].join(' ')),
    });
  }
  const pages = [
    ['Clinic directory: Kuala Lumpur', '/clinics/', 'All listed clinics with opening hours, phone numbers, services and directions.', 'clinics directory find a clinic near me klinik open now hours'],
    ['Health articles', '/articles/', 'Every health article and clinic guide on HealthcareDirectory.my.', 'articles blog news guides awareness calendar'],
    ['About & editorial policy', '/about/', 'Who we are, how the clinic directory works, and how we research and update our health articles.', 'about us editorial policy sources'],
    ['Contact & list your clinic', '/contact/', 'Get in touch, report a correction, or list your clinic in our directory for free.', 'contact email list your clinic add clinic correction'],
    ['Privacy notice (PDPA)', '/privacy/', 'How we handle personal data under Malaysia’s Personal Data Protection Act 2010.', 'privacy pdpa personal data'],
  ];
  for (const x of collectionPages) docs.push({ type: 'Clinic list', cat: '', title: x.title, url: x.url, desc: x.desc, headings: '', keywords: `${x.keywords} klinik clinics near`, body: '' });
  for (const [title, url, desc, keywords] of pages) docs.push({ type: 'Page', cat: '', title, url, desc, headings: '', keywords, body: '' });
  write('assets/search-index.json', JSON.stringify(docs));
  return docs.length;
}

export function searchPage(topics) {
  write('search/index.html',
    head({ path: '/search/', title: 'Search | HealthcareDirectory.my', desc: 'Search clinics, health articles and guides on HealthcareDirectory.my.', noindex: true }) +
    header('', { noHeaderSearch: true }) +
    `<section class="wrap search-page" data-search-page>
${crumbs([['/', 'Home'], ['/search/', 'Search']])}
<h1 class="h-hero" style="font-size:clamp(36px,4.6vw,54px);margin:24px 0 20px">Search</h1>
<form class="search search--page" action="/search/" method="get" role="search">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B6B66" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
<label class="sr-only" for="sp-q">Search clinics, articles and topics</label>
<input id="sp-q" type="search" name="q" placeholder="Search clinics, articles, topics" autocomplete="off" enterkeyhint="search">
<button class="btn btn--sq" type="submit">Search</button>
</form>
<div class="chips" role="group" aria-label="Filter results" style="margin:22px 0 8px" data-sp-filters hidden></div>
<p class="result-text" aria-live="polite" data-sp-status style="margin-top:16px">Type to search clinics, health articles and guides.</p>
<ol class="sp-results" data-sp-results></ol>
<noscript><p class="lede">Search needs JavaScript. You can browse <a href="/clinics/">all clinics</a> or <a href="/articles/">all articles</a> instead.</p></noscript>
</section>` + footer(topics));
}
