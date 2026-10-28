import { createHash } from 'node:crypto';
import { SEO } from './seo.mjs';
import { nearestClinics, kmText } from './clinic-data.mjs';
import { head, header, footer, crumbs, crumbsLd, write, img, preloadImg, esc, abs, ORG, WEBSITE, SITE, longDate, shortDate } from './lib.mjs';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const SCHEMA_DAYS = DAYS.map((d) => 'https://schema.org/' + d);
const hm = (m) => { if (m === 1440) return '23:59'; const h = Math.floor(m / 60), mm = m % 60; return String(h).padStart(2, '0') + ':' + String(mm).padStart(2, '0'); };
const pretty = (m) => { if (m === 1440 || m === 0) return '12am'; const h = Math.floor(m / 60), mm = m % 60, ap = h < 12 ? 'am' : 'pm', x = h % 12 || 12; return x + (mm ? ':' + String(mm).padStart(2, '0') : '') + ap; };
export const rangeText = (r) => (!r || !r.length ? 'Closed' : r.length === 1 && r[0][0] === 0 && r[0][1] === 1440 ? 'Open 24 hours' : r.map(([a, b]) => `${pretty(a)} – ${pretty(b)}`).join(', '));

function hoursSpec(hours) {
  const out = [];
  if (!hours) return out;
  for (let d = 0; d < 7; d++) for (const [a, b] of hours[d] || []) out.push({ '@type': 'OpeningHoursSpecification', dayOfWeek: SCHEMA_DAYS[d], opens: hm(a), closes: hm(b) });
  return out;
}
export function summaryHours(hours) {
  if (!hours) return 'Hours not confirmed yet – please call';
  // group consecutive days (Mon..Sun order) with identical ranges
  const order = [1, 2, 3, 4, 5, 6, 0], short = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const groups = [];
  for (const d of order) {
    const t = rangeText(hours[d]);
    const g = groups[groups.length - 1];
    if (g && g.t === t) g.days.push(d); else groups.push({ t, days: [d] });
  }
  return groups.map((g) => (g.days.length > 1 ? `${short[g.days[0]]}–${short[g.days[g.days.length - 1]]}` : short[g.days[0]]) + ' ' + g.t).join(' · ');
}

// Health guides linked from clinic and area pages, so articles get links from the directory.
const GP_GUIDES = ['clinic-or-emergency-department', 'free-health-screening-malaysia', 'dengue-klang-valley-first-three-days'];
const AESTHETIC_GUIDES = ['pico-laser-melasma-malaysia', 'skin-boosters-malaysia', 'weight-loss-injections-malaysia'];
export const guideLinks = (articles, aesthetic) => (aesthetic ? AESTHETIC_GUIDES : GP_GUIDES)
  .map((s) => articles.find((a) => a.slug === s)).filter(Boolean).map((a) => [`/articles/${a.slug}/`, a.crumb || a.title]);

// Questions people search for about a clinic, answered from its listing, for clinics without their own FAQs.
function listingFaqs(c, sundayPage) {
  if (c.faqs?.length) return c.faqs;
  const out = [];
  if (c.hours) {
    out.push([`What are ${c.short}’s opening hours?`, `${summaryHours(c.hours)}. Hours may differ on public holidays, so please call ahead.`]);
    const sun = c.hours[0]?.length;
    out.push([`Is ${c.short} open on Sunday?`, sun ? `Yes, ${esc(c.short)} is open on Sunday, ${rangeText(c.hours[0])}.` : `No, ${esc(c.short)} is closed on Sundays.${sundayPage ? ' See our list of <a href="/clinics/open-sunday/">clinics open on Sunday</a>.' : ''}`]);
  }
  if (c.street) out.push([`Where is ${c.short}?`, `${esc(c.addressLine)}.${telHref(c) ? ` Call <a href="${telHref(c)}">${esc(c.phone)}</a> before you go.` : ''}`]);
  return out;
}

export function clinicLd(c) {
  return {
    '@type': ['MedicalClinic', 'LocalBusiness'],
    '@id': abs(`/clinics/${c.slug}/#clinic`),
    name: c.name,
    alternateName: c.altNames,
    url: abs(`/clinics/${c.slug}/`),
    image: abs(`/assets/img/${c.image}-og.jpg`),
    ...(c.phoneIntl ? { telephone: c.phoneIntl } : {}),
    address: { '@type': 'PostalAddress', ...(c.street ? { streetAddress: c.street } : {}), addressLocality: c.locality, ...(c.postcode ? { postalCode: c.postcode } : {}), addressRegion: c.state, addressCountry: 'MY' },
    ...(c.geo ? { geo: { '@type': 'GeoCoordinates', latitude: c.geo[0], longitude: c.geo[1] } } : {}),
    hasMap: c.mapsUrl,
    ...(c.hours ? { openingHoursSpecification: hoursSpec(c.hours) } : {}),
    medicalSpecialty: c.specialties || ['PrimaryCare'],
    availableService: c.services.map((s) => ({ '@type': 'MedicalProcedure', name: s.name })).slice(0, 12),
    isAcceptingNewPatients: true,
    ...(c.network ? { parentOrganization: { '@type': 'MedicalOrganization', name: c.network.name, ...(c.network.url ? { url: c.network.url } : {}) } } : {}),
    ...((c.sameAs?.length || c.website) ? { sameAs: [...new Set([...(c.sameAs || []), ...(c.website ? [c.website] : [])])] } : {}),
    areaServed: c.areaServed.map((n) => ({ '@type': 'Place', name: n })),
  };
}

const telHref = (c) => (c.phoneIntl ? 'tel:' + c.phoneIntl.replace(/[^+\d]/g, '') : null);
const hoursAttr = (c) => (c.hours ? ` data-hours='${JSON.stringify(c.hours)}'` : '');
// "careclinics.com.my" or "Facebook page" for a clinic's own website link
const siteLabel = (u) => (/facebook\.com/.test(u) ? 'Facebook page' : u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''));
// "Bangsar, Kuala Lumpur", or just "Kajang" when the area and town are the same
const placeOf = (c) => (c.areaLabel === c.locality ? c.areaLabel : `${c.areaLabel}, ${c.locality}`);
export const miniClinic = (c) => `<a href="/clinics/${c.slug}/"${hoursAttr(c)}><span class="a">${esc(placeOf(c))}</span><span class="n">${esc(c.name)}</span><span class="h">${esc(summaryHours(c.hours))}</span></a>`;
const dirHref = (c) => c.mapsUrl;

const slugOf = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
// Directory filter buttons: neighbourhoods while there are only a few, states once there are many.
// Each card's data-area holds the key the buttons filter on (see site.js).
export function filterGroups(clinics, areas) {
  if (areas.length <= 12) return { kind: 'area', label: 'area', items: areas.map((a) => ({ slug: a.slug, label: a.label })), key: (c) => c.areaSlug };
  const order = ['Kuala Lumpur', 'Selangor', 'Putrajaya', 'Negeri Sembilan', 'Melaka', 'Johor', 'Perak', 'Pulau Pinang'];
  const states = [...new Set(clinics.map((c) => c.state))].sort((a, b) => (order.indexOf(a) + 99 * (order.indexOf(a) < 0)) - (order.indexOf(b) + 99 * (order.indexOf(b) < 0)));
  return { kind: 'state', label: 'state', items: states.map((s) => ({ slug: slugOf(s), label: s === 'Pulau Pinang' ? 'Penang' : s })), key: (c) => slugOf(c.state) };
}

export function clinicCard(c, o = {}) {
  return `<article class="clinic" data-area="${o.key ? o.key(c) : c.areaSlug}" data-services="${c.serviceKeys.join('|')}"${hoursAttr(c)}>
<a class="clinic__media" href="/clinics/${c.slug}/" tabindex="-1" aria-hidden="true">${img(c.image, c.imageAlt, { sizes: '(max-width: 760px) 100vw, 380px' })}<span class="status">${c.hours ? 'See hours' : 'Call to confirm hours'}</span></a>
<div class="clinic__body">
<span class="meta">${esc(c.cardSpec)} &middot; ${esc(c.areaLabel)}</span>
<${o.h || 'h3'} class="clinic__name"><a href="/clinics/${c.slug}/">${esc(c.name)}</a></${o.h || 'h3'}>
${c.addressLine ? `<address class="clinic__addr">${esc(c.addressLine)}</address>` : ''}
<p class="clinic__hours js-today">${esc(summaryHours(c.hours))}</p>
<div class="clinic__tags">${c.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
<div class="clinic__actions">
${telHref(c) ? `<a class="a-line" href="${telHref(c)}">Call</a>\n` : ''}<a class="a-line" href="/clinics/${c.slug}/">Details</a>
<a class="a-fill" href="${dirHref(c)}" target="_blank" rel="noopener">Directions</a>
</div>
</div>
</article>`;
}

// Clinic lists show PAGE_SIZE cards in the HTML. Longer lists get a JSON file of every card,
// pre-rendered (assets/cards/<name>.json), which site.js fetches to filter and paginate.
export const PAGE_SIZE = 12;
export const firstPage = (clinics) => clinics.slice(0, PAGE_SIZE);
// Returns the data-* attributes for the list wrapper ('' when everything fits on one page).
export function pagedList(name, clinics, key) {
  if (clinics.length <= PAGE_SIZE) return '';
  const json = JSON.stringify(clinics.map((c) => clinicCard(c, { key })));
  write(`assets/cards/${name}.json`, json);
  // versioned by content, so the file can be cached
  return ` data-src="/assets/cards/${name}.json?v=${createHash('sha1').update(json).digest('hex').slice(0, 10)}" data-page-size="${PAGE_SIZE}"`;
}
export const pager = (clinics) => (clinics.length > PAGE_SIZE ? '<nav class="pager" aria-label="Clinic result pages" hidden></nav>\n' : '');
export const listedText = (clinics) => `${clinics.length} ${clinics.length === 1 ? 'clinic' : 'clinics'} listed${clinics.length > PAGE_SIZE ? ` &middot; showing 1–${PAGE_SIZE}` : ''}`;

// o.cards: name of the card file (see pagedList); the home page and /clinics/ share 'all'.
export function directory(clinics, areas, services, o = {}) {
  const groups = filterGroups(clinics, areas);
  if (!clinics.length) return `<div id="${o.id || 'directory'}" style="scroll-margin-top:90px">
<div class="section-head"><div class="stack g10"><span class="eyebrow">Clinic directory</span><${o.h || 'h2'} id="cl-h" class="h-section">${o.heading || 'Clinics near you'}</${o.h || 'h2'}></div></div>
<div class="empty"><p>New clinic listings are on their way.</p><span style="color:var(--muted);max-width:520px;line-height:1.6">We are adding clinics across Malaysia now. Run a clinic? Listing is free.</span><a class="btn" href="/contact/#list">List your clinic</a></div>
</div>`;
  return `<div data-directory id="${o.id || 'directory'}"${pagedList(o.cards || 'all', clinics, groups.key)} style="scroll-margin-top:90px">
<div class="section-head">
<div class="stack g10"><span class="eyebrow">Clinic directory</span><${o.h || 'h2'} id="cl-h" class="h-section">${o.heading || 'Clinics near you'}</${o.h || 'h2'}></div>
<label class="switch"><input type="checkbox" id="open-now"><span class="switch__track" aria-hidden="true"></span>Open now</label>
</div>
<div class="chips chips-scroll" role="group" aria-label="Filter by ${groups.label}" style="margin-bottom:12px">
<button type="button" class="chip" data-filter-area="all" aria-pressed="true">${groups.kind === 'state' ? 'All states' : 'All areas'}</button>
${groups.items.map((a) => `<button type="button" class="chip" data-filter-area="${a.slug}" aria-pressed="false">${esc(a.label)}</button>`).join('\n')}
</div>
<div class="chips chips-scroll" role="group" aria-label="Filter by service" style="margin-bottom:28px">
<button type="button" class="chip chip--soft" data-filter-service="all" aria-pressed="true">All services</button>
${services.map(([k, l]) => `<button type="button" class="chip chip--soft" data-filter-service="${k}" aria-pressed="false">${esc(l)}</button>`).join('\n')}
</div>
<p class="result-text" aria-live="polite">${listedText(clinics)}</p>
<div class="clinic-grid">
${firstPage(clinics).map((c) => clinicCard(c, { key: groups.key })).join('\n')}
</div>
<div class="empty" hidden><p>No clinics match these filters yet.</p><button type="button" class="btn" data-reset>Show all clinics</button></div>
${pager(clinics)}<p class="note">Opening status uses Malaysia time (GMT+8) and published hours; please call ahead on public holidays.</p>
</div>`;
}

export function postCard(a, o = {}) {
  return `<article class="post" data-cat="${a.cat}">
<a class="post__img" href="/articles/${a.slug}/" tabindex="-1" aria-hidden="true">${img(a.image, a.imageAlt, { sizes: '(max-width: 760px) 100vw, 380px' })}</a>
<span class="meta${a.cat === 'womens-health' ? ' cat-pink' : ''}">${esc(a.catLabel)} &middot; ${a.mins} min read</span>
<${o.h || 'h3'}><a href="/articles/${a.slug}/">${esc(a.title)}</a></${o.h || 'h3'}>
${o.noExcerpt ? '' : `<p>${esc(a.excerpt)}</p>`}
${o.date ? `<time datetime="${a.modified}">${shortDate(a.modified)}</time>` : ''}
</article>`;
}

// Links to the generated area, service and network pages (see collections.mjs).
export function browseLinks(coll, o = {}) {
  if (!coll) return '';
  const groups = [['Browse by need', coll.serviceLinks], ['Browse by area', coll.areaLinks], ['Clinic networks', coll.networkLinks]]
    .filter(([, links]) => links?.length && !(o.skip || []).includes(links));
  if (!groups.length) return '';
  return `<nav class="browse" aria-label="Browse clinics">${groups.map(([h, links]) => `<div class="browse__group"><span class="browse__h">${h}</span><div class="chips">${links.map(([href, label]) => `<a class="chip" href="${href}">${esc(label)}</a>`).join('')}</div></div>`).join('')}</nav>`;
}

/* ------------------------------ HOME ------------------------------ */
export function home({ clinics, areas, services, articles, faqs, topics, featuredSlug, comingSoon, coll }) {
  const featured = articles.find((a) => a.slug === featuredSlug);
  const rest = articles.filter((a) => a !== featured).slice(0, 6);
  const homeCats = [...new Map(rest.map((a) => [a.cat, a.catLabel])).entries()];
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      WEBSITE, ORG,
      { '@type': 'WebPage', '@id': SITE.url + '/#webpage', url: SITE.url + '/', name: 'Clinics in Kuala Lumpur, Selangor and across Malaysia, and health awareness for Malaysians', isPartOf: { '@id': SITE.url + '/#website' }, about: { '@id': SITE.url + '/#org' }, inLanguage: SITE.lang, primaryImageOfPage: abs('/assets/img/kl-skyline-og.jpg') },
      ...(clinics.length ? [{ '@type': 'ItemList', name: 'Clinics in Malaysia', itemListElement: firstPage(clinics).map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/clinics/${c.slug}/`), name: c.name })) }] : []),
      { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) },
    ],
  };
  const html = head({
    path: '/',
    title: SEO.home[0],
    desc: SEO.home[1],
    ogTitle: `Find a clinic near you in KL, Selangor & beyond | ${SITE.name}`,
    ogDesc: 'Clinics by neighbourhood with hours and directions, plus health awareness guides written for Malaysia.',
    image: 'kl-skyline', imageAlt: 'Kuala Lumpur skyline with Menara Kuala Lumpur',
    geo: { region: 'MY-14', place: 'Kuala Lumpur', pos: [3.139, 101.6869] },
    preload: preloadImg('kl-skyline', '(max-width: 960px) 100vw, 560px') + '\n',
    ld,
  }) + header('') + `
<section class="wrap hero" aria-labelledby="hero-h">
<div class="stack g24">
<span class="eyebrow">Malaysia &middot; Clinic directory &amp; health guides</span>
<h1 id="hero-h" class="h-hero">Calm, trusted care, <em>close to home.</em></h1>
<p class="lede" style="max-width:520px">Find a clinic near you in Kuala Lumpur, Selangor and across Malaysia — with opening hours, directions and clear health guidance written for Malaysians.</p>
${clinics.length ? `<form class="finder" id="finder" role="search" aria-label="Find a clinic" action="/clinics/">
<div class="finder__field"><span class="finder__label" id="finder-service-label">I need</span><select id="finder-service" name="service" aria-labelledby="finder-service-label" data-dropdown><option value="all">Any service</option>${services.map(([k, l]) => `<option value="${k}">${esc(l)}</option>`).join('')}</select></div>
<div class="finder__field"><span class="finder__label" id="finder-area-label">Near</span><select id="finder-area" name="area" aria-labelledby="finder-area-label" data-dropdown><option value="all">Anywhere</option>${filterGroups(clinics, areas).items.map((a) => `<option value="${a.slug}">${esc(a.label)}</option>`).join('')}</select></div>
<button class="btn btn--sq" type="submit">Find clinics</button>
</form>` : '<div class="cta-row"><a class="btn" href="/articles/">Read health guides</a><a class="btn btn--ghost" href="/contact/#list">List your clinic</a></div>'}
<div class="trust"><span>Free to use</span><span aria-hidden="true">&middot;</span><span>${clinics.length ? 'Hours shown in Malaysia time' : 'KL clinics coming soon'}</span><span aria-hidden="true">&middot;</span><span>Updated ${longDate(SITE.updated).replace(/^\d+ /, '')}</span></div>
</div>
<div class="hero__media">
${img('kl-skyline', 'Kuala Lumpur skyline with Menara Kuala Lumpur under a blue sky', { eager: true, sizes: '(max-width: 960px) 100vw, 560px' })}
<div class="hero__badge"><span class="pulse" aria-hidden="true"></span><span>${clinics.length ? `<strong class="js-open-count">${clinics.length} ${clinics.length === 1 ? 'clinic' : 'clinics'} listed</strong>` : '<strong>New clinics being added</strong>'}<br><span class="sub">across Kuala Lumpur</span></span></div>
</div>
</section>

<section id="awareness" class="wrap aw" aria-labelledby="aw-h">
<div class="aw__grid">
<article class="aw__card aw__card--pink">
<div class="stack g12">
<span class="eyebrow">This month &middot; Pink October</span>
<h2 id="aw-h">Breast cancer awareness: know your normal, and book a screening.</h2>
<p>A monthly self-check takes five minutes. Find out when to start screening, and which subsidised programmes can help with a mammogram.</p>
</div>
<a class="btn btn--pink" href="/articles/breast-cancer-screening-malaysia/">Read the screening guide</a>
</article>
<article class="aw__card aw__card--mint">
<span class="eyebrow">Seasonal &middot; Dengue</span>
<h3>Ten minutes a week, no standing water.</h3>
<p>Check pots, drains and containers weekly. See a doctor if a fever lasts more than two days.</p>
<a href="/articles/dengue-klang-valley-first-three-days/">Read the dengue guide &rarr;</a>
</article>
</div>
</section>

<section id="clinics" class="band" aria-labelledby="cl-h" style="scroll-margin-top:70px">
<div class="wrap section">
${directory(clinics, areas, services)}
${browseLinks(coll, { skip: [coll?.areaLinks] })}
</div>
</section>

<section id="articles" class="wrap section" aria-labelledby="ar-h" style="padding-top:80px;padding-bottom:80px">
<div class="section-head" style="margin-bottom:32px">
<div class="stack g10"><span class="eyebrow">Health articles</span><h2 id="ar-h" class="h-section">Clear guidance, <em>written for Malaysia.</em></h2></div>
<div class="chips" role="group" aria-label="Filter articles by topic">
<button type="button" class="chip" data-home-cat="all" aria-pressed="true">All</button>
${homeCats.map(([k, l]) => `<button type="button" class="chip" data-home-cat="${k}" aria-pressed="false">${esc(l)}</button>`).join('\n')}
</div>
</div>
<article class="feature">
<a href="/articles/${featured.slug}/" tabindex="-1" aria-hidden="true">${img(featured.image, featured.imageAlt, { sizes: '(max-width: 960px) 100vw, 580px' })}</a>
<div class="stack" style="gap:14px">
<span class="meta${featured.cat === 'womens-health' ? ' cat-pink' : ''}">${esc(featured.catLabel)} &middot; ${featured.mins} min read</span>
<h3><a href="/articles/${featured.slug}/">${esc(featured.title)}</a></h3>
<p>${esc(featured.excerpt)}</p>
<span style="font-size:14px;color:var(--muted-2)">Updated <time datetime="${featured.modified}">${longDate(featured.modified)}</time></span>
</div>
</article>
<div class="post-grid" data-home-posts>
${rest.map((a) => postCard(a)).join('\n')}
</div>
<p style="margin-top:40px"><a class="btn btn--ghost" href="/articles/">See all health articles</a></p>
</section>

<section id="areas" class="areas" aria-labelledby="nb-h">
<div class="wrap areas__grid">
<div class="stack g16">
<span class="eyebrow">By neighbourhood</span>
<h2 id="nb-h">Healthcare close to home, area by area.</h2>
<p>Each neighbourhood lists its clinics, opening hours, and how to get there by LRT, MRT or car. We are adding new areas across Malaysia every month.</p>
${img('kl-city-park', 'Green park in Kuala Lumpur with city towers behind', { sizes: '(max-width: 760px) 100vw, 560px' })}
</div>
<ul class="area-list">
${areas.map((a) => `<li><a href="${a.href}"><span class="name">Clinics in ${esc(a.label)}</span><span class="count">${a.count} ${a.count === 1 ? 'clinic' : 'clinics'} listed &middot; ${esc(a.district)}</span></a></li>`).join('\n')}
${comingSoon.map((n) => `<li><span class="soon"><span class="name">${esc(n)}</span><span class="count">Coming soon</span></span></li>`).join('\n')}
</ul>
</div>
</section>

<section class="faq" aria-labelledby="faq-h">
<h2 id="faq-h">Common questions about finding a clinic</h2>
<div class="qa">
${faqs.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${a}</p></details>`).join('\n')}
</div>
</section>

${newsletter('Awareness campaigns, screening reminders and new clinic listings. No spam.')}
` + footer(topics);
  write('index.html', html);
}

export function newsletter(text) {
  return `<section class="wrap nl" aria-labelledby="nl-h">
<div class="nl__box">
<div class="stack g10"><h2 id="nl-h">One calm health note, every fortnight.</h2><p>${text}</p></div>
<form class="js-newsletter" data-endpoint="" novalidate>
<label class="sr-only" for="nl-email">Email address</label>
<input id="nl-email" type="email" name="email" required placeholder="you@email.com" autocomplete="email">
<button class="btn" type="submit">Subscribe</button>
<p class="nl__msg" role="status" hidden></p>
</form>
</div>
</section>`;
}

/* --------------------------- CLINICS INDEX --------------------------- */
export function clinicsIndex({ clinics, areas, services, topics, coll }) {
  const networks = [...new Map(clinics.filter((c) => c.network).map((c) => [c.network.name, c.network])).values()];
  const items = [['/', 'Home'], ['/clinics/', 'Clinics']];
  const ld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'CollectionPage', url: abs('/clinics/'), name: 'Clinics in Malaysia', inLanguage: SITE.lang, isPartOf: { '@id': SITE.url + '/#website' } },
    ...(clinics.length ? [{ '@type': 'ItemList', itemListElement: firstPage(clinics).map((c, i) => ({ '@type': 'ListItem', position: i + 1, item: clinicLd(c) })) }] : []),
    crumbsLd(items), ORG, WEBSITE] };
  const html = head({
    path: '/clinics/',
    title: SEO.clinics[0],
    desc: SEO.clinics[1],
    image: 'clinic-waiting-room', imageAlt: 'Bright clinic waiting area', ld,
  }) + header('clinics') + `
<section class="wrap" style="padding-top:40px">
${crumbs(items)}
<div class="stack g16" style="margin:28px 0 40px;max-width:760px">
<h1 class="h-hero" style="font-size:clamp(38px,5vw,60px)">Clinics in <em>Malaysia</em></h1>
<p class="lede">Neighbourhood clinics across Kuala Lumpur and Selangor, plus Negeri Sembilan, Melaka, Johor, Perak and Penang, with opening hours, phone numbers and directions. Several are open 24 hours.</p>
</div>
${directory(clinics, areas, services, { h: 'h2', heading: 'All listed clinics' })}
${browseLinks(coll)}
</section>
${networks.filter((n) => n.blurb).map((n, i) => `<section class="wrap section" aria-labelledby="net-h${i}">
<div class="callout-bar" style="padding:32px">
<div class="stack g10" style="max-width:720px"><h2 id="net-h${i}" style="font-size:30px;line-height:1.15">About the ${esc(n.name)} network</h2><p style="color:var(--muted);line-height:1.6">${n.blurb}</p></div>
${n.url ? `<a class="btn" href="${n.url}" target="_blank" rel="noopener">Visit ${esc(n.name)}</a>` : ''}
</div>
</section>`).join('\n') || '<div style="height:72px"></div>'}
` + footer(topics);
  write('clinics/index.html', html);
}

/* --------------------------- CLINIC PAGE --------------------------- */
export function clinicPage(c, { clinics, articles, topics, coll }) {
  const areaUrl = `/clinics/${c.areaSlug}/`;
  const hasArea = !!coll?.areaLinks?.some(([h]) => h === areaUrl);
  const items = [['/', 'Home'], ['/clinics/', 'Clinics'], ...(hasArea ? [[areaUrl, c.areaLabel]] : []), [`/clinics/${c.slug}/`, c.name]];
  const nearby = nearestClinics(c.geo, clinics, { exclude: (x) => x === c, max: 4, within: 5, min: 3 });
  const networkUrl = c.network && coll?.networkLinks?.find(([, label]) => label === `${c.network.name} branches`)?.[0];
  const guide = articles.find((a) => a.clinic === c.slug);
  const faqs = listingFaqs(c, coll?.serviceLinks?.some(([h]) => h === '/clinics/open-sunday/'));
  const faqLd = faqs.length ? [{ '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) }] : [];
  const ld = { '@context': 'https://schema.org', '@graph': [clinicLd(c), { '@type': 'WebPage', url: abs(`/clinics/${c.slug}/`), name: c.name, about: { '@id': abs(`/clinics/${c.slug}/#clinic`) }, inLanguage: SITE.lang, dateModified: SITE.updated }, crumbsLd(items), ...faqLd, ORG, WEBSITE] };
  const mapQ = encodeURIComponent(c.mapQuery || `${c.name}, ${c.addressLine}`);
  const html = head({
    path: `/clinics/${c.slug}/`,
    title: c.seoTitle, desc: c.seoDesc,
    image: c.image, imageAlt: c.imageAlt,
    geo: { region: c.region, place: `${c.areaLabel}, ${c.locality}`, pos: c.geo },
    ld,
  }) + header('clinics') + `
<div class="wrap" style="padding-top:36px">${crumbs(items)}</div>
<section class="wrap cp-head" data-clinic-profile${hoursAttr(c)} aria-labelledby="clinic-h">
<div class="stack g24">
<span class="eyebrow">${esc(c.cardSpec)} &middot; ${esc(placeOf(c))}</span>
<h1 id="clinic-h">${esc(c.name)}</h1>
<p class="lede">${c.intro}</p>
<div class="cta-row">
${telHref(c) ? `<a class="btn" href="${telHref(c)}">Call ${esc(c.phone)}</a>` : ''}
${c.booking ? `<a class="btn${telHref(c) ? ' btn--ghost' : ''}" href="${c.booking}" target="_blank" rel="noopener">Book online</a>` : ''}
${c.whatsapp ? `<a class="btn btn--ghost" href="https://wa.me/${c.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noopener">WhatsApp</a>` : ''}
<a class="btn btn--ghost" href="${dirHref(c)}" target="_blank" rel="noopener">Get directions</a>
</div>
<div class="facts"><dl>
<div class="row"><dt>Status</dt><dd>${c.hours ? '<span class="status" style="position:static;display:inline-flex;padding:0;background:none">See hours below</span> <span class="js-today" style="color:var(--muted-2)"></span>' : 'Hours not confirmed yet – please call ahead'}</dd></div>
<div class="row"><dt>Address</dt><dd><address style="font-style:normal">${esc(c.street || c.areaLabel)},<br>${esc(c.cityLine)}</address></dd></div>
${c.phone ? `<div class="row"><dt>Phone</dt><dd><a href="${telHref(c)}">${esc(c.phone)}</a>${c.whatsapp && c.whatsapp !== c.phone ? `<br>WhatsApp: <a href="https://wa.me/${c.whatsapp.replace(/\D/g, '')}">${esc(c.whatsapp)}</a>` : ''}</dd></div>` : ''}
${c.website ? `<div class="row"><dt>Website</dt><dd><a href="${c.website}" target="_blank" rel="noopener">${esc(siteLabel(c.website))}</a></dd></div>` : ''}
${c.network ? `<div class="row"><dt>Network</dt><dd>${networkUrl ? `<a href="${networkUrl}">${esc(c.network.name)}</a>` : esc(c.network.name)}</dd></div>` : ''}
${c.gettingThere ? `<div class="row"><dt>Getting there</dt><dd>${c.gettingThere}</dd></div>` : ''}
</dl></div>
</div>
<div class="stack g24">
<div class="cp-photo">${img(c.image, c.imageAlt, { eager: true, sizes: '(max-width: 960px) 100vw, 520px' })}</div>
<div class="box box--white">
<span class="eyebrow">Opening hours</span>
${c.hours ? `<table class="hours"><tbody>
${[1, 2, 3, 4, 5, 6, 0].map((d) => `<tr data-day="${d}"><td>${DAYS[d]}</td><td>${rangeText(c.hours[d])}</td></tr>`).join('\n')}
</tbody></table>
<p style="font-size:13px;color:var(--faint)">${c.hoursNote || 'Hours may differ on public holidays. Please call ahead.'}</p>` : '<p style="color:var(--muted);line-height:1.6">We are still confirming this clinic’s opening hours. Please call ahead before visiting.</p>'}
</div>
</div>
</section>

<section class="band"><div class="wrap section">
<div class="cp-body">
<div class="prose">
<h2 id="services" style="margin-top:0">Services at ${esc(c.short)}</h2>
<ul class="service-grid">${c.services.map((s) => `<li>${esc(s.name)}${s.note ? `<span>${esc(s.note)}</span>` : ''}</li>`).join('')}</ul>
${c.about}
${c.incomplete ? '<div class="box box--mint"><span class="eyebrow">Listing in progress</span><p style="font-size:16px;line-height:1.6">Some details for this clinic are still being confirmed. Please call ahead, and <a href="/contact/">let us know</a> if anything has changed.</p></div>' : ''}
${faqs.length ? `<h2 id="faq">Frequently asked questions</h2>
<div class="qa">${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${a}</p></details>`).join('')}</div>` : ''}
<p style="font-size:14px;color:var(--muted-2)">Details last checked ${longDate(SITE.updated)}. Clinic information comes from the clinic's own published details and public listings. Spotted a change? <a href="/contact/">Tell us</a>.</p>
</div>
<aside class="stack g24" aria-label="Map and nearby clinics">
<div class="stack g12"><h2 style="font-size:26px">Location</h2>
<iframe class="map" title="Map showing ${esc(c.name)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${mapQ}&amp;output=embed"></iframe>
<a href="${dirHref(c)}" target="_blank" rel="noopener">Open in Google Maps &rarr;</a></div>
${guide ? `<div class="box box--mint"><span class="eyebrow">Clinic guide</span><a href="/articles/${guide.slug}/" style="font-family:var(--serif);font-size:22px;line-height:1.25;color:var(--ink)">${esc(guide.title)}</a></div>` : ''}
${nearby.length ? `<div class="stack g12"><h2 style="font-size:26px">Nearby clinics</h2>
<div class="mini-clinics">${nearby.map(({ c: o, km }) => `<a href="/clinics/${o.slug}/"${hoursAttr(o)}><span class="a">${esc(o.areaLabel)} &middot; ${kmText(km)} away</span><span class="n">${esc(o.name)}</span><span class="h">${esc(summaryHours(o.hours))}</span></a>`).join('')}</div>
<p style="font-size:13px;color:var(--faint)">Straight-line distances.</p></div>` : ''}
<div class="stack g12"><h2 style="font-size:22px">More clinics</h2><div class="chips">
${hasArea ? `<a class="chip" href="${areaUrl}">Clinics in ${esc(c.areaLabel)}</a>` : ''}
${networkUrl ? `<a class="chip" href="${networkUrl}">All ${esc(c.network.name)} branches</a>` : ''}
${(coll?.serviceLinks || []).map(([href, label]) => `<a class="chip" href="${href}">${esc(label)}</a>`).join('')}
</div></div>
<div class="stack g12"><h2 style="font-size:22px">Health guides</h2><div class="chips">
${guideLinks(articles, c.serviceKeys.includes('aesthetic')).map(([href, label]) => `<a class="chip" href="${href}">${esc(label)}</a>`).join('')}
</div></div>
</aside>
</div>
</div></section>
` + footer(topics);
  write(`clinics/${c.slug}/index.html`, html);
}

/* --------------------------- ARTICLES INDEX --------------------------- */
export function articlesIndex({ articles, topics, featuredSlug }) {
  const items = [['/', 'Home'], ['/articles/', 'Health articles']];
  const featured = articles.find((a) => a.slug === featuredSlug);
  const list = articles.filter((a) => a !== featured);
  const cats = [...new Map(articles.map((a) => [a.cat, a.catLabel])).entries()];
  const ld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Blog', '@id': abs('/articles/#blog'), name: `${SITE.name} Health Articles`, url: abs('/articles/'), inLanguage: SITE.lang, publisher: { '@id': SITE.url + '/#org' },
      blogPost: articles.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: abs(`/articles/${a.slug}/`), datePublished: a.published, dateModified: a.modified, image: abs(`/assets/img/${a.image}-og.jpg`) })) },
    crumbsLd(items), ORG, WEBSITE] };
  const html = head({
    path: '/articles/',
    title: SEO.articles[0],
    desc: SEO.articles[1],
    image: featured.image, imageAlt: featured.imageAlt, ld,
  }) + header('articles') + `
<section class="wrap blog-head" aria-labelledby="blog-h">
${crumbs(items)}
<div class="blog-head__grid">
<div class="stack g16">
<h1 id="blog-h" class="h-hero" style="font-size:clamp(40px,5vw,62px)">Health articles, <em>written for Malaysia.</em></h1>
<p class="lede" style="max-width:540px">Calm, practical guidance based on Ministry of Health and WHO advice — with links to clinics near you.</p>
</div>
<label class="search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B6B66" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg><span class="sr-only">Search articles</span><input id="article-search" type="search" placeholder="Search articles — e.g. dengue, diabetes" autocomplete="off"></label>
</div>
<div class="chips chips-scroll" role="group" aria-label="Topics" style="margin-top:28px">
<button type="button" class="chip" data-cat-filter="all" aria-pressed="true">All</button>
${cats.map(([k, l]) => `<button type="button" class="chip" id="topic-${k}" data-cat-filter="${k}" aria-pressed="false">${esc(l)}</button>`).join('\n')}
</div>
</section>

<section class="wrap" aria-label="Featured article" data-featured style="padding-bottom:56px">
<a class="featured" href="/articles/${featured.slug}/">
${img(featured.image, featured.imageAlt, { sizes: '(max-width: 960px) 100vw, 600px', eager: true })}
<div class="featured__body">
<span class="eyebrow${featured.cat === 'womens-health' ? ' cat-pink' : ''}">Featured &middot; ${esc(featured.catLabel)}</span>
<h2>${esc(featured.title)}</h2>
<p>${esc(featured.excerpt)}</p>
<div class="byline"><span class="avatar" aria-hidden="true">HD</span><span>${esc(featured.author)} &middot; ${featured.mins} min read &middot; ${shortDate(featured.modified)}</span></div>
</div>
</a>
</section>

<section class="wrap" data-blog aria-labelledby="latest-h" style="padding-bottom:72px">
<div class="section-head" style="align-items:baseline;margin-bottom:24px">
<h2 id="latest-h" style="font-size:32px">Latest articles</h2>
<span class="js-count" aria-live="polite" style="font-size:14px;color:var(--muted-2)">${list.length} articles</span>
</div>
<div class="post-grid">
${[featured, ...list].map((a, i) => (i === 0 ? postCard(a, { date: true }).replace('<article class="post"', '<article class="post" data-is-featured') : postCard(a, { date: true }))).join('\n')}
</div>
<div class="empty" hidden><p>No articles match that search yet.</p><button type="button" class="btn" data-blog-reset>Show all articles</button></div>
</section>

<section class="band" aria-labelledby="cal-h"><div class="wrap section stack" style="gap:28px">
<div class="stack g10"><span class="eyebrow">Awareness calendar</span><h2 id="cal-h" class="h-section" style="font-size:clamp(28px,3vw,38px)">Health dates worth marking</h2></div>
<ol class="calendar">
<li style="background:var(--pink-bg)"><span class="d" style="color:var(--pink)">All of October</span><span class="t" style="color:var(--pink-ink)">Pink October</span><span class="s" style="color:var(--pink-muted)">Breast cancer awareness month</span></li>
<li style="background:var(--mint)"><span class="d">10 October</span><span class="t">World Mental Health Day</span><span class="s">Checking in on yourself and others</span></li>
<li style="background:var(--mint-2)"><span class="d">14 November</span><span class="t">World Diabetes Day</span><span class="s">Screening and everyday habits</span></li>
<li style="background:var(--bg)"><span class="d">15 June</span><span class="t">ASEAN Dengue Day</span><span class="s">Clearing breeding sites at home</span></li>
</ol>
</div></section>

${newsletter('New articles, screening reminders and clinic updates. No spam.').replace('class="wrap nl"', 'class="wrap nl" style="padding-top:72px"')}
` + footer(topics);
  // the featured article is shown in the grid only when filtering
  write('articles/index.html', html.replace('<article class="post" data-is-featured', '<article class="post" data-is-featured hidden'));
}

/* --------------------------- ARTICLE PAGE --------------------------- */
export function articlePage(a, { articles, clinics, topics }) {
  const items = [['/', 'Home'], ['/articles/', 'Health articles'], [`/articles/${a.slug}/`, a.crumb || a.title]];
  const url = abs(`/articles/${a.slug}/`);
  const related = (a.related || []).map((s) => articles.find((x) => x.slug === s)).filter(Boolean).slice(0, 3);
  while (related.length < 3) { const n = articles.find((x) => x !== a && !related.includes(x)); if (!n) break; related.push(n); }
  const guideClinic = a.clinic ? clinics.find((c) => c.slug === a.clinic) : null;
  const share = encodeURIComponent(a.title + ' ' + url);
  const picked = a.clinicsPick ? a.clinicsPick.map((s) => clinics.find((c) => c.slug === s)).filter(Boolean) : clinics.filter((c) => !a.clinicsFilter || c.serviceKeys.includes(a.clinicsFilter));
  // By default articles link to directory pages without naming clinics next to the content
  // (MAB guidelines on educational articles). clinicsMode: 'list' names clinics instead.
  const directoryOnly = a.clinicsMode !== 'list';
  const nearby = directoryOnly ? [] : picked.slice(0, a.clinicsLimit || 6);
  const whereHeading = a.clinicsHeading || 'Where to get checked';
  const showClinics = a.clinicsBlock !== false && !guideClinic;
  const toc = [...a.sections.filter((s) => s.toc !== false), ...(a.clinicsBlock !== false && !a.clinic ? [{ id: 'where', h: a.clinicsTocLabel || whereHeading }] : [])];
  const graph = [
    { '@type': a.medical ? 'MedicalWebPage' : 'WebPage', '@id': url + '#page', url, name: a.title, inLanguage: SITE.lang, isPartOf: { '@id': SITE.url + '/#website' }, lastReviewed: a.modified,
      ...(a.about ? { about: { '@type': 'MedicalCondition', name: a.about[0], ...(a.about[1] ? { alternateName: a.about[1] } : {}) } } : {}),
      ...(guideClinic ? { about: { '@id': abs(`/clinics/${guideClinic.slug}/#clinic`) } } : {}),
      audience: { '@type': 'PeopleAudience', geographicArea: { '@type': 'AdministrativeArea', name: 'Kuala Lumpur, Malaysia' } },
      primaryImageOfPage: abs(`/assets/img/${a.image}-og.jpg`) },
    { '@type': a.news ? 'NewsArticle' : 'Article', '@id': url + '#article', headline: a.title, description: a.desc, image: [abs(`/assets/img/${a.image}-og.jpg`)], datePublished: a.published, dateModified: a.modified, articleSection: a.catLabel, wordCount: a.words,
      author: { '@type': 'Organization', name: `${SITE.name} Editorial Team`, url: abs('/about/') }, publisher: { '@id': SITE.url + '/#org' }, mainEntityOfPage: url, inLanguage: SITE.lang,
      ...(a.sources?.length ? { citation: a.sources.map(([t, u]) => ({ '@type': 'CreativeWork', name: t, url: u })) } : {}),
      ...(nearby.length && showClinics ? { mentions: nearby.map((c) => ({ '@id': abs(`/clinics/${c.slug}/#clinic`), '@type': 'MedicalClinic', name: c.name })) } : {}) },
    crumbsLd(items),
    ...(a.faqs?.length ? [{ '@type': 'FAQPage', mainEntity: a.faqs.map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: ans.replace(/<[^>]+>/g, '') } })) }] : []),
    ...(guideClinic ? [clinicLd(guideClinic)] : []),
    ORG, WEBSITE,
  ];
  const html = head({
    path: `/articles/${a.slug}/`, title: a.seoTitle || `${a.title} | ${SITE.name}`, desc: a.desc,
    ogTitle: a.title, ogDesc: a.excerpt, ogType: 'article', image: a.image, imageAlt: a.imageAlt,
    article: { published: a.published, modified: a.modified, section: a.catLabel },
    geo: guideClinic ? { region: guideClinic.region, place: `${guideClinic.areaLabel}, ${guideClinic.locality}`, pos: guideClinic.geo } : undefined,
    preload: preloadImg(a.image, '(max-width: 1200px) 100vw, 1152px') + '\n',
    ld: { '@context': 'https://schema.org', '@graph': graph },
  }) + header('articles', { progress: true }) + `
<article>
<header class="art-head">
${crumbs(items)}
<span class="eyebrow${a.cat === 'womens-health' ? ' cat-pink' : ''}">${esc(a.catLabel)} &middot; ${a.mins} min read</span>
<h1>${esc(a.title)}</h1>
<p class="standfirst">${a.standfirst}</p>
<div class="art-meta">
<div class="who"><span class="avatar" aria-hidden="true">HD</span><span><span>Written by</span><br><strong>${esc(a.author)}</strong></span></div>
<span>Published <time datetime="${a.published}">${longDate(a.published)}</time>${a.modified !== a.published ? ` &middot; Updated <time datetime="${a.modified}">${longDate(a.modified)}</time>` : ''}</span>
</div>
</header>
<figure class="art-hero">
${img(a.image, a.imageAlt, { eager: true, sizes: '(max-width: 1200px) 100vw, 1152px' })}
<figcaption>${esc(a.caption || a.imageAlt)} &middot; Photo: Pixabay</figcaption>
</figure>
<div class="wrap art-layout">
<aside class="toc" aria-label="On this page">
<nav><span class="label">On this page</span>
${toc.map((s) => `<a href="#${s.id}">${esc(s.tocLabel || s.h)}</a>`).join('\n')}
</nav>
<div class="share"><span>Share this ${a.clinic ? 'guide' : 'article'}</span><div>
<a class="pill" href="https://wa.me/?text=${share}" target="_blank" rel="noopener">WhatsApp</a>
<a class="pill" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank" rel="noopener">Facebook</a>
<button class="pill" type="button" data-copy-link="${url}">Copy link</button>
</div></div>
</aside>
<div class="prose">
${a.keyPoints?.length ? `<div class="box box--mint"><span class="eyebrow">Key points</span><ul>${a.keyPoints.map((k) => `<li>${k}</li>`).join('')}</ul></div>` : ''}
${a.sections.map((s) => `<h2 id="${s.id}">${esc(s.h)}</h2>\n${s.html}`).join('\n')}
${showClinics ? `<h2 id="where">${esc(whereHeading)}</h2>
${directoryOnly ? `<p>${a.clinicsIntro || 'Any GP clinic can assess you and arrange tests or referrals. Our directory lists clinics across Kuala Lumpur, Selangor and other states, with opening hours and directions.'}</p>` : nearby.length ? `<p>${a.clinicsIntro || 'Any GP clinic can assess you and arrange tests or referrals. These neighbourhood clinics are listed in our directory:'}</p>
<div class="mini-clinics">${nearby.map(miniClinic).join('')}</div>` : '<p>Any GP clinic can assess you and arrange tests or referrals. Our clinic directory lists opening hours, phone numbers and directions as clinics are added.</p>'}
<a class="btn" href="/clinics/" style="align-self:flex-start">${nearby.length ? 'See all clinics' : 'Browse the clinic directory'}</a>
${a.clinicLinks?.length ? `<div class="chips">${a.clinicLinks.map(([href, label]) => `<a class="chip" href="${href}">${esc(label)}</a>`).join('')}</div>` : ''}` : ''}
${guideClinic ? `<div class="callout-bar"><div class="stack" style="gap:4px"><strong style="font-family:var(--serif);font-size:22px;font-weight:500">${esc(guideClinic.name)}</strong><span style="font-size:15px;color:var(--muted)">${esc(guideClinic.addressLine)}${telHref(guideClinic) ? ` &middot; <a href="${telHref(guideClinic)}">${esc(guideClinic.phone)}</a>` : ''}</span></div><a class="btn" href="/clinics/${guideClinic.slug}/">Hours &amp; directions</a></div>` : ''}
${a.faqs?.length ? `<h2 id="faq">Frequently asked questions</h2><div class="qa">${a.faqs.map(([q, ans]) => `<details><summary>${esc(q)}</summary><p>${ans}</p></details>`).join('')}</div>` : ''}
<div class="sources">
${a.sources?.length ? `<strong>Sources</strong><ol>${a.sources.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join('')}</ol>` : ''}
<span>This article is for general awareness and does not replace advice from a registered medical practitioner. In an emergency, call <a href="tel:999">999</a>.</span>
</div>
</div>
</div>
</article>

<section class="band" aria-labelledby="rel-h" style="border-bottom:0"><div class="wrap" style="padding-top:64px;padding-bottom:72px">
<div class="section-head" style="align-items:baseline;margin-bottom:24px"><h2 id="rel-h" style="font-size:32px">Keep reading</h2><a href="/articles/" style="font-size:15px;font-weight:500">All articles &rarr;</a></div>
<div class="post-grid">${related.map((r) => postCard(r, { noExcerpt: true })).join('\n')}</div>
</div></section>
` + footer(topics);
  write(`articles/${a.slug}/index.html`, html);
}
