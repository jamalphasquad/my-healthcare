// Landing pages generated from the clinic data:
//   area pages     /clinics/<area>/          e.g. /clinics/mont-kiara/
//   service pages  /clinics/<service>/       e.g. /clinics/open-sunday/  (only when 2+ clinics qualify)
//   network pages  /clinics/<network>/       e.g. /clinics/klinik-segara/
import { head, header, footer, crumbs, crumbsLd, write, esc, abs, ORG, WEBSITE, SITE, LAYOUT } from './lib.mjs';
import { clinicCard, rangeText, firstPage, pagedList, pager, listedText, summaryHours, guideLinks } from './pages.mjs';
import { nearestClinics, kmText } from './clinic-data.mjs';
import { AREA_INFO } from './areas.mjs';

const MIN_CLINICS = 2;
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const slugify = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const cut = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(' ', n - 1)).replace(/[,·:–-]\s*$/, ''));
const plural = (n, one, many = one + 's') => `${n} ${n === 1 ? one : many}`;
const list = (names) => (names.length <= 1 ? names.join('') : `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`);
const time = (m) => { if (m >= 1440) return 'midnight'; const h = Math.floor(m / 60), mm = m % 60; return `${h % 12 || 12}${mm ? ':' + String(mm).padStart(2, '0') : ''}${h < 12 ? 'am' : 'pm'}`; };

// --- hours helpers -------------------------------------------------------------------
const closing = (h, d) => (h && h[d] && h[d].length ? h[d][h[d].length - 1][1] : null);
const latestClose = (h) => Math.max(...[0, 1, 2, 3, 4, 5, 6].map((d) => closing(h, d) || 0));
const opensOn = (c, d) => !!(c.hours && c.hours[d] && c.hours[d].length);
const weekendDays = (c) => [6, 0].filter((d) => opensOn(c, d));
const dayHours = (c, d) => (c.hours ? rangeText(c.hours[d]) : 'Call to confirm');
// Bilingual title: people search for both "clinics in Cheras" and "klinik Cheras". Longest option that fits.
const placeTitle = (label, where) => [`Clinics in ${where} (Klinik ${label}): Hours & Phone`, `Clinics in ${label} (Klinik ${label}): Hours & Phone`, `Clinics in ${where}: Hours & Phone`, `Clinics in ${label}: Hours & Phone`, `Clinics in ${label}`].find((t) => t.length <= 60);
const hoursTable = (cs, first) => `<h2 id="hours"${first ? ' style="margin-top:0"' : ''}>Opening hours at a glance</h2>
<div class="table-wrap"><table><thead><tr><th>Clinic</th><th>Address</th><th>Opening hours</th></tr></thead><tbody>
${cs.map((c) => `<tr><td><a href="/clinics/${c.slug}/">${esc(c.name)}</a></td><td>${esc(c.addressLine)}</td><td>${esc(summaryHours(c.hours))}</td></tr>`).join('\n')}
</tbody></table></div>
<p>Hours can change on public holidays and during Ramadan, so call the clinic before you go.</p>`;
// Questions people search for about clinics in a place, answered from the listings.
function placeFaqs(label, here, pool) {
  const weekend = pool.filter((c) => weekendDays(c).length);
  const late = pool.filter((c) => c.hours && latestClose(c.hours) >= 1200).sort((x, y) => latestClose(y.hours) - latestClose(x.hours));
  return [
    [`Which clinics are in ${label}?`, here.map((c) => `<a href="/clinics/${c.slug}/">${esc(c.name)}</a>${c.addressLine ? `, ${esc(c.addressLine)}` : ''}`).join('; ') + '.'],
    [`Is there a clinic open on weekends in or near ${label}?`, weekend.length
      ? `${list(weekend.map((c) => `${esc(c.name)} (${weekendDays(c).map((d) => DAYS[d]).join(' and ')})`))} ${weekend.length > 1 ? 'have' : 'has'} weekend hours.`
      : `None of the listed clinics in or near ${esc(label)} open at weekends. See our list of <a href="/clinics/open-saturday/">clinics open on Saturday</a>.`],
    ...(late.length ? [[`Which clinic near ${label} is open latest?`, `${esc(late[0].name)} is open until ${time(latestClose(late[0].hours))} on some days. Check the clinic page for each day’s hours.`]] : []),
  ];
}

// --- shared page template --------------------------------------------------------------
function page(p) {
  const url = `/clinics/${p.slug}/`;
  const items = [['/', 'Home'], ['/clinics/', 'Clinics'], [url, p.crumb]];
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', '@id': abs(url) + '#page', url: abs(url), name: p.name, description: p.desc, inLanguage: SITE.lang, isPartOf: { '@id': SITE.url + '/#website' }, dateModified: SITE.updated,
        ...(p.geo ? { spatialCoverage: { '@type': 'Place', name: p.place, geo: { '@type': 'GeoCoordinates', latitude: +p.geo[0].toFixed(6), longitude: +p.geo[1].toFixed(6) } } } : {}) },
      { '@type': 'ItemList', name: p.name, numberOfItems: p.clinics.length, itemListElement: firstPage(p.clinics).map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/clinics/${c.slug}/`), name: c.name })) },
      crumbsLd(items),
      ...(p.faqs.length ? [{ '@type': 'FAQPage', mainEntity: p.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) }] : []),
      ORG, WEBSITE,
    ],
  };
  const html = head({
    path: url, title: p.title, desc: p.desc,
    image: p.clinics[0].image, imageAlt: p.clinics[0].imageAlt,
    geo: p.geo ? { region: p.region, place: p.place, pos: p.geo.map((v) => +v.toFixed(5)) } : undefined,
    ld,
  }) + header('clinics') + `
<section class="wrap" style="padding-top:40px">
${crumbs(items)}
<div class="stack g16" style="margin:28px 0 28px;max-width:780px">
<span class="eyebrow">${p.eyebrow}</span>
<h1 class="h-hero" style="font-size:clamp(36px,5vw,58px)">${p.h1}</h1>
<p class="lede">${p.intro}</p>
</div>
<ul class="facts-row" aria-label="At a glance">${p.facts.map((f) => `<li>${f}</li>`).join('')}</ul>
<div data-directory id="list"${pagedList(p.slug, p.clinics)} style="scroll-margin-top:90px;margin-top:36px">
<div class="section-head">
<div class="stack g10"><span class="eyebrow">Clinic list</span><h2 id="list-h" class="h-section" style="font-size:clamp(28px,3vw,38px)">${p.listHeading}</h2></div>
<label class="switch"><input type="checkbox" id="open-now"><span class="switch__track" aria-hidden="true"></span>Open now</label>
</div>
<p class="result-text" aria-live="polite">${listedText(p.clinics)}</p>
<div class="clinic-grid">
${firstPage(p.clinics).map((c) => clinicCard(c)).join('\n')}
</div>
<div class="empty" hidden><p>None of these clinics are open right now.</p><button type="button" class="btn" data-reset>Show all</button></div>
${pager(p.clinics)}<p class="note">Opening status uses Malaysia time (GMT+8) and published hours; please call ahead on public holidays.</p>
</div>
</section>

<section class="band" style="margin-top:56px"><div class="wrap section">
<div class="cp-body">
<div class="prose">
${p.body || ''}
${p.faqs.length ? `<h2 id="faq"${p.body ? '' : ' style="margin-top:0"'}>Frequently asked questions</h2>
<div class="qa">${p.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${a}</p></details>`).join('')}</div>` : ''}
<p style="font-size:14px;color:var(--muted-2)">Listings last checked ${p.checked}. Spotted a change, or run a clinic ${p.where}? <a href="/contact/#list">Tell us</a>.</p>
</div>
<aside class="stack g24" aria-label="Related">
${p.mapQuery ? `<div class="stack g12"><h2 style="font-size:26px">Map</h2>
<iframe class="map" title="Map of ${esc(p.place)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(p.mapQuery)}&amp;output=embed"></iframe></div>` : ''}
${p.nearby?.length ? `<div class="stack g12"><h2 style="font-size:26px">${p.nearbyHeading}</h2>
<div class="mini-clinics">${p.nearby.map(({ c, km }) => `<a href="/clinics/${c.slug}/"${c.hours ? ` data-hours='${JSON.stringify(c.hours)}'` : ''}><span class="a">${esc(c.areaLabel)} &middot; ${kmText(km)} away</span><span class="n">${esc(c.name)}</span><span class="h">${esc(c.hours ? 'See hours' : 'Hours not confirmed yet')}</span></a>`).join('')}</div>
<p style="font-size:13px;color:var(--faint)">Straight-line distances.</p></div>` : ''}
${p.links.map(([h, links]) => links.length ? `<div class="stack g12"><h2 style="font-size:22px">${h}</h2><div class="chips">${links.map(([href, label]) => `<a class="chip" href="${href}">${esc(label)}</a>`).join('')}</div></div>` : '').join('\n')}
</aside>
</div>
</div></section>
` + footer(p.topics);
  write(`clinics/${p.slug}/index.html`, html);
}

// --- builders ---------------------------------------------------------------------------
export function buildCollections({ clinics, areas, topics, articles }) {
  const out = { areas: [], services: [], networks: [] };
  if (!clinics.length) return out;
  const taken = new Set(clinics.map((c) => c.slug));
  const claim = (slug, what) => { if (taken.has(slug)) throw new Error(`URL clash: /clinics/${slug}/ (${what})`); taken.add(slug); return slug; };
  const checked = new Date(SITE.updated + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

  // Pages say "Kuala Lumpur" while every listing is in the Klang Valley, "Malaysia" once they spread further.
  const klangValley = clinics.every((c) => ['Kuala Lumpur', 'Selangor', 'Putrajaya'].includes(c.state));
  const scope = klangValley ? 'Kuala Lumpur' : 'Malaysia';
  const around = klangValley ? 'in and around Kuala Lumpur' : 'in Kuala Lumpur, Selangor and other states';
  const stateList = list([...new Set(clinics.map((c) => (c.state === 'Pulau Pinang' ? 'Penang' : c.state)))]);

  // ---- service pages (defined first so area pages can link to them)
  const SERVICES = [
    {
      slug: 'open-24-hours', crumb: 'Open 24 hours', name: `24-hour clinics in ${scope}`,
      test: (c) => c.hours && [0, 1, 2, 3, 4, 5, 6].every((d) => (c.hours[d] || []).some(([a, b]) => a === 0 && b >= 1440)),
      eyebrow: 'Klinik 24 jam', h1: 'Clinics open <em>24 hours</em>',
      intro: `GP clinics ${around} that stay open around the clock, every day of the week. Useful for fevers, infections and minor injuries at night. For emergencies, call 999.`,
      title: () => `24-Hour Clinics in ${scope} (Klinik 24 Jam)`,
      desc: (n) => `${n} clinics open 24 hours a day, 7 days a week (klinik 24 jam) ${around}, with addresses, phone numbers and directions.`,
      column: ['State', (c) => (c.state === 'Pulau Pinang' ? 'Penang' : c.state)],
      faqs: () => [
        ['Can I walk in to a 24-hour clinic at night?', 'Yes, 24-hour GP clinics accept walk-ins at any time. Calling first can save a wasted trip, as a doctor may occasionally be away on a home visit or the clinic may be busy.'],
        ['Is a 24-hour clinic the same as an emergency department?', 'No. A 24-hour clinic can treat everyday illness and minor injuries. For chest pain, difficulty breathing, signs of stroke, heavy bleeding or a serious injury, call <a href="tel:999">999</a> or go to a hospital emergency department. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.'],
      ],
    },
    {
      slug: 'open-late', crumb: 'Open late', name: `Clinics open late in ${scope}`,
      test: (c) => c.hours && latestClose(c.hours) >= 1260,
      eyebrow: 'Evening clinics', h1: 'Clinics <em>open late</em>',
      intro: 'When illness can’t wait until morning. Each of these clinics stays open until at least 9pm on some days. Check the table for each clinic’s closing times.',
      title: () => `Clinics Open Late in ${scope} (Until 9pm+)`,
      desc: (n) => `${n} clinics ${around} open until 9pm or later, with closing times for each day, phone numbers and directions.`,
      column: ['Closes', (c) => { const wd = closing(c.hours, 1), sat = closing(c.hours, 6), sun = closing(c.hours, 0); return [`Weekdays ${wd ? time(wd) : 'closed'}`, `Sat ${sat ? time(sat) : 'closed'}`, `Sun ${sun ? time(sun) : 'closed'}`].join(' · '); }],
      faqs: (cs) => {
        const latest = Math.max(...cs.map((c) => latestClose(c.hours)));
        const top = cs.filter((c) => latestClose(c.hours) === latest).map((c) => c.name);
        return [
          ['Which clinic stays open latest?', `${list(top)} ${top.length > 1 ? 'stay' : 'stays'} open until ${time(latest)} on some days. Closing times vary by day, so check the table above.`],
          ['What should I do if a clinic is already closed?', 'For anything serious, such as chest pain, difficulty breathing, signs of stroke or heavy bleeding, call <a href="tel:999">999</a> or go to the nearest hospital emergency department. Our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a> can help you decide.'],
        ];
      },
    },
    {
      slug: 'open-saturday', crumb: 'Open on Saturday', name: `Clinics open on Saturday in ${scope}`,
      test: (c) => opensOn(c, 6),
      eyebrow: 'Weekend clinics', h1: 'Clinics open on <em>Saturday</em>',
      intro: `Clinics ${around} with Saturday hours. Many close earlier than on weekdays, so check the time before you go.`,
      title: () => `Clinics Open on Saturday in ${scope}`,
      desc: (n) => `${n} clinics ${around} open on Saturday, with Saturday opening hours, phone numbers and directions for each.`,
      column: ['Saturday hours', (c) => rangeText(c.hours[6])],
      faqs: (cs) => {
        const allDay = cs.filter((c) => closing(c.hours, 6) >= 1080).map((c) => c.name);
        return [
          ['Which clinics are open on Saturday evening?', allDay.length ? `${list(allDay)} ${allDay.length > 1 ? 'are' : 'is'} open until 6pm or later on Saturdays.` : 'None of the listed clinics are open past 6pm on Saturdays. See the Saturday hours above.'],
          ['Are clinics open on public holidays?', 'Hours on public holidays often differ from normal Saturday hours. Please call the clinic before you go.'],
        ];
      },
    },
    {
      slug: 'open-sunday', crumb: 'Open on Sunday', name: `Clinics open on Sunday in ${scope}`,
      test: (c) => opensOn(c, 0),
      eyebrow: 'Weekend clinics', h1: 'Clinics open on <em>Sunday</em>',
      intro: `Most GP clinics close on Sundays. These clinics ${around} keep Sunday hours.`,
      title: () => `Clinics Open on Sunday in ${scope} (Klinik Buka Ahad)`,
      desc: (n) => `${n} clinics ${around} open on Sunday (klinik buka hari Ahad), with Sunday hours, phone numbers and directions.`,
      column: ['Sunday hours', (c) => rangeText(c.hours[0])],
      faqs: (cs) => [
        ['Which clinics are open on Sunday?', `${list(cs.map((c) => `${c.name} (${rangeText(c.hours[0])})`))}.`],
        ['Are clinics open on public holidays?', 'Many clinics with Sunday hours also open on public holidays, but hours can change. Please call ahead.'],
      ],
    },
    {
      slug: 'aesthetic-clinics', crumb: 'Aesthetic clinics', name: 'Aesthetic clinics in Kuala Lumpur',
      test: (c) => c.serviceKeys.includes('aesthetic'),
      eyebrow: 'Aesthetics & skin', h1: 'Aesthetic clinics in <em>Kuala Lumpur</em>',
      intro: 'Doctor-led clinics offering non-surgical aesthetic treatments such as lasers, fillers, skin treatments and body contouring.',
      title: () => 'Aesthetic Clinics in Kuala Lumpur & Petaling Jaya',
      desc: (n) => `${n} doctor-led aesthetic clinics in Kuala Lumpur and Petaling Jaya offering laser, skin, filler and body treatments. Hours, phone and directions.`,
      column: ['Weekday hours', (c) => dayHours(c, 1)],
      body: `<h2 id="choosing" style="margin-top:0">Choosing an aesthetic clinic</h2>
<ul>
<li><strong>Check the doctor.</strong> Doctors in Malaysia must be registered with the Malaysian Medical Council. You can look them up on the <a href="https://merits.mmc.gov.my/" target="_blank" rel="noopener">MeRITS register</a>.</li>
<li><strong>Start with a consultation.</strong> A good clinic assesses you first and explains the risks, recovery time and expected results before any treatment.</li>
<li><strong>Ask for a written quote.</strong> Prices depend on the treatment, the product used and the number of sessions.</li>
</ul>`,
      faqs: () => [
        ['Do I need a consultation before an aesthetic treatment?', 'Yes. A doctor should assess your skin, medical history and medicines before recommending a treatment. Most clinics book a consultation first.'],
      ],
    },
    {
      slug: 'gp-clinics', crumb: 'GP clinics', name: klangValley ? 'GP clinics in Kuala Lumpur & Selangor' : 'GP clinics in Malaysia',
      test: (c) => c.serviceKeys.includes('gp'),
      eyebrow: 'General practice', h1: klangValley ? 'GP clinics in <em>Kuala Lumpur</em> &amp; nearby' : 'GP clinics in <em>Malaysia</em>',
      intro: `General practice clinics for everyday illness: fevers, coughs, infections, minor injuries and medical certificates, across ${stateList}.`,
      title: () => (klangValley ? 'GP Clinics in Kuala Lumpur & Selangor: Hours & Phone' : 'GP Clinics in KL, Selangor & Malaysia: Hours & Phone'),
      desc: (n) => `${n} GP clinics in ${stateList}, with opening hours, phone numbers and directions.`,
      column: ['Weekday hours', (c) => dayHours(c, 1)],
      faqs: () => [
        ['Do I need an appointment to see a GP?', 'Most GP clinics accept walk-ins. Calling ahead can save waiting time, especially in the evening and at weekends.'],
        ['When should I go to an emergency department instead?', 'Call <a href="tel:999">999</a> or go to a hospital emergency department for chest pain, difficulty breathing, signs of stroke, heavy bleeding or a serious injury. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.'],
      ],
    },
  ];
  // Town pages for places outside Kuala Lumpur with several clinics, e.g. Petaling Jaya.
  const towns = [...new Set(clinics.map((c) => c.locality))].filter((t) => t !== 'Kuala Lumpur');
  for (const t of towns) {
    const st = clinics.find((c) => c.locality === t).state;
    const stName = st === 'Pulau Pinang' ? 'Penang' : st;
    SERVICES.push({
      slug: slugify(t), crumb: t, name: `Clinics in ${t}`,
      test: (c) => c.locality === t,
      eyebrow: esc(stName), h1: `Clinics in <em>${esc(t)}</em>`,
      intro: `Clinics in ${t}, with opening hours, phone numbers and directions.`,
      title: () => placeTitle(t, t),
      desc: () => `Clinics in ${t}${st === t ? '' : `, ${stName}`}: ${list(clinics.filter((c) => c.locality === t).map((c) => c.name))}. Opening hours, phone numbers and directions.`,
      column: ['Area', (c) => c.areaLabel],
      faqs: (cs) => placeFaqs(t, cs, cs),
    });
  }

  const services = SERVICES.map((s) => ({ ...s, clinics: clinics.filter(s.test) })).filter((s) => s.clinics.length >= MIN_CLINICS && !taken.has(s.slug));
  services.forEach((s) => claim(s.slug, 'service page'));
  const serviceLinks = services.map((s) => [`/clinics/${s.slug}/`, s.crumb]);
  LAYOUT.services = serviceLinks; // footer links on every page, including these

  // ---- network pages
  const nets = [...new Map(clinics.filter((c) => c.network).map((c) => [c.network.name, c.network])).values()]
    .map((n) => ({ n, slug: slugify(n.name), clinics: clinics.filter((c) => c.network?.name === n.name) }))
    .filter((x) => x.clinics.length >= MIN_CLINICS);
  nets.forEach((x) => claim(x.slug, 'network page'));
  const networkLinks = nets.map((x) => [`/clinics/${x.slug}/`, `${x.n.name} branches`]);
  const areaLinks = areas.map((a) => [a.href, a.label]);
  areas.forEach((a) => claim(a.slug, 'area page'));

  // ---- area pages
  for (const a of areas) {
    const info = AREA_INFO[a.slug] || {};
    const here = a.clinics;
    const nearby = nearestClinics(a.geo, clinics, { exclude: (c) => c.areaSlug === a.slug, max: 4, within: 6, min: 2 });
    const pool = [...here, ...nearby.filter((r) => r.km <= 6).map((r) => r.c)];
    const svc = [...new Set(here.flatMap((c) => c.services.map((s) => s.name)))];
    const where = `${a.label}${a.locality && a.locality !== a.label ? `, ${a.locality}` : ''}`;
    const faqs = placeFaqs(a.label, here, pool);
    const title = placeTitle(a.label, where);
    const p = {
      slug: a.slug, crumb: a.label, name: `Clinics in ${where}`, place: where, geo: a.geo, region: a.region,
      mapQuery: `${a.label}, ${a.locality}, Malaysia`,
      eyebrow: `${esc(a.locality)} &middot; Neighbourhood guide`,
      h1: `Clinics in <em>${esc(a.label)}</em>`,
      intro: `${esc(info.intro || `Clinics in ${where}.`)} We list ${plural(here.length, 'clinic')} here, with opening hours, phone numbers and directions.`,
      facts: [
        plural(here.length, 'clinic') + ' listed',
        `${plural(here.filter((c) => weekendDays(c).length).length, 'clinic')} open at weekends`,
        svc.length ? `Services: ${esc(svc.slice(0, 3).join(', '))}${svc.length > 3 ? '…' : ''}` : '',
      ].filter(Boolean),
      listHeading: `Clinics in ${esc(a.label)}`,
      body: (info.transit ? `<h2 id="getting-there" style="margin-top:0">Getting there</h2><p>${esc(info.transit)}</p>
` : '') + hoursTable(here, !info.transit),
      faqs, nearby, nearbyHeading: `Other clinics near ${esc(a.label)}`,
      clinics: here, checked, where: `in ${esc(a.label)}`, topics,
      title: cut(title, 60),
      desc: cut(`Clinics in ${where}: ${list(here.map((c) => c.name))}. Opening hours, phone numbers and directions, plus ${plural(nearby.length, 'other clinic')} nearby.${here.length === 1 ? ` Updated ${checked.replace(/^\d+ /, '')}.` : ''}`, 155),
      links: [['Nearby areas', nearby.map(({ c }) => [`/clinics/${c.areaSlug}/`, c.areaLabel]).filter((l, i, all) => all.findIndex((x) => x[0] === l[0]) === i)], ['Browse by need', serviceLinks], ['Health guides', guideLinks(articles, here.every((c) => c.serviceKeys.includes('aesthetic')))]],
    };
    page(p);
    out.areas.push({ slug: a.slug, url: `/clinics/${a.slug}/`, title: p.name, desc: p.desc, image: here[0].image, keywords: [a.label, a.locality, ...here.flatMap((c) => c.areaServed)].join(' ') });
  }

  // ---- service pages
  for (const s of services) {
    const cs = s.clinics;
    const table = s.column ? `<h2 id="table" style="margin-top:0">${esc(s.column[0])} at a glance</h2>
<div class="table-wrap"><table><thead><tr><th>Clinic</th><th>Area</th><th>${esc(s.column[0])}</th></tr></thead><tbody>
${cs.map((c) => `<tr><td><a href="/clinics/${c.slug}/">${esc(c.name)}</a></td><td><a href="/clinics/${c.areaSlug}/">${esc(c.areaLabel)}</a></td><td>${esc(s.column[1](c))}</td></tr>`).join('\n')}
</tbody></table></div>` : '';
    const p = {
      slug: s.slug, crumb: s.crumb, name: s.name, place: scope,
      eyebrow: s.eyebrow, h1: s.h1, intro: s.intro,
      facts: [plural(cs.length, 'clinic') + ' listed', `${plural(new Set(cs.map((c) => c.areaSlug)).size, 'area')}`, `${plural(cs.filter((c) => c.state === 'Kuala Lumpur').length, 'clinic')} in Kuala Lumpur`],
      listHeading: esc(s.name.replace(/ in (Kuala Lumpur|Malaysia).*$/, '')),
      // the first heading on the page gets no top margin
      body: table + (s.body ? (table ? s.body.replace(' style="margin-top:0"', '') : s.body) : ''),
      faqs: s.faqs(cs), clinics: cs, checked, where: 'that fits this list', topics,
      title: cut(s.title(cs.length), 60), desc: cut(s.desc(cs.length), 155),
      links: [['Browse by area', [...new Map(cs.map((c) => [c.areaSlug, [`/clinics/${c.areaSlug}/`, c.areaLabel]])).values()]], ['Browse by need', serviceLinks.filter(([h]) => h !== `/clinics/${s.slug}/`)], ['Health guides', guideLinks(articles, s.slug === 'aesthetic-clinics')]],
    };
    page(p);
    out.services.push({ slug: s.slug, url: `/clinics/${s.slug}/`, label: s.crumb, title: p.name, desc: p.desc, image: cs[0].image, keywords: s.crumb });
  }

  // ---- network pages
  for (const { n, slug, clinics: cs } of nets) {
    const p = {
      slug, crumb: `${n.name} branches`, name: `${n.name} branches`, place: 'Kuala Lumpur',
      eyebrow: 'Clinic network', h1: `<em>${esc(n.name)}</em> branches`,
      intro: n.blurb ? n.blurb.replace(/<[^>]+>/g, '') : `All ${n.name} branches we list, with opening hours and directions.`,
      facts: [plural(cs.length, 'branch', 'branches') + ' listed', `${plural(new Set(cs.map((c) => c.locality)).size, 'town')}`, `${plural(cs.filter((c) => weekendDays(c).length).length, 'branch', 'branches')} open at weekends`],
      listHeading: `All ${esc(n.name)} branches`,
      body: `<h2 id="table" style="margin-top:0">Branch hours at a glance</h2>
<div class="table-wrap"><table><thead><tr><th>Branch</th><th>Area</th><th>Weekdays</th><th>Weekend</th></tr></thead><tbody>
${cs.map((c) => `<tr><td><a href="/clinics/${c.slug}/">${esc(c.name)}</a></td><td><a href="/clinics/${c.areaSlug}/">${esc(c.areaLabel)}</a></td><td>${esc(dayHours(c, 1))}</td><td>${esc(weekendDays(c).length ? weekendDays(c).map((d) => `${DAYS[d].slice(0, 3)} ${rangeText(c.hours[d])}`).join('; ') : 'Closed')}</td></tr>`).join('\n')}
</tbody></table></div>${n.url ? `<p><a href="${n.url}" target="_blank" rel="noopener">Visit the ${esc(n.name)} website</a></p>` : ''}`,
      faqs: [[`How many ${n.name} branches are there?`, `We list ${plural(cs.length, 'branch', 'branches')}: ${list(cs.map((c) => `${esc(c.name)} (${esc(c.areaLabel)})`))}.`]],
      clinics: cs, checked, where: `in the ${esc(n.name)} network`, topics,
      title: cut(`${n.name} Branches: Locations, Hours & Phone`, 60),
      desc: cut(`All ${cs.length} ${n.name} branches in ${list([...new Set(cs.map((c) => (c.state === 'Pulau Pinang' ? 'Penang' : c.state)))])}, with addresses, opening hours, phone numbers and directions for each.`, 155),
      links: [['Branch areas', [...new Map(cs.map((c) => [c.areaSlug, [`/clinics/${c.areaSlug}/`, c.areaLabel]])).values()]], ['Browse by need', serviceLinks], ['Health guides', guideLinks(articles, cs.every((c) => c.serviceKeys.includes('aesthetic')))]],
    };
    page(p);
    out.networks.push({ slug, url: `/clinics/${slug}/`, label: n.name, title: p.name, desc: p.desc, image: cs[0].image, keywords: n.name });
  }

  out.serviceLinks = serviceLinks;
  out.networkLinks = networkLinks;
  out.areaLinks = areaLinks;
  return out;
}
