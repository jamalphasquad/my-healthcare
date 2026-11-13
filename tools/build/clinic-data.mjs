// Fills in defaults for incomplete clinic records and derives the area list.
const slugify = (s) => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const REGION = {
  'kuala lumpur': 'MY-14', 'wilayah persekutuan kuala lumpur': 'MY-14', selangor: 'MY-10', putrajaya: 'MY-16',
  johor: 'MY-01', melaka: 'MY-04', 'negeri sembilan': 'MY-05', 'pulau pinang': 'MY-07', penang: 'MY-07', perak: 'MY-08',
};
// Neutral stock photos for clinics without a photo of their own, picked per clinic so cards vary.
const FALLBACK = [
  ['clinic-waiting-room', 'a bright, calm clinic waiting area'],
  ['treatment-room', 'a clean clinic treatment room'],
  ['doctor-consultation', 'a doctor talking with a patient'],
  ['stethoscope-desk', 'a stethoscope on a doctor’s desk'],
  ['nurse-stethoscope', 'a doctor holding a stethoscope'],
  ['gp-consultation', 'a doctor listening to a patient in a consultation room'],
];
const pick = (slug) => FALLBACK[[...slug].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7) % FALLBACK.length];
const cut = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(' ', n - 1)).replace(/[,·:–-]\s*$/, ''));

// Opening hours as text. Hours are minutes from midnight per weekday (0 = Sunday).
const pretty = (m) => { if (m === 1440 || m === 0) return '12am'; const h = Math.floor(m / 60), mm = m % 60, ap = h < 12 ? 'am' : 'pm', x = h % 12 || 12; return x + (mm ? ':' + String(mm).padStart(2, '0') : '') + ap; };
const is24 = (r) => r && r.length === 1 && r[0][0] === 0 && r[0][1] === 1440;
export const rangeText = (r) => (!r || !r.length ? 'Closed' : is24(r) ? 'Open 24 hours' : r.map(([a, b]) => `${pretty(a)} – ${pretty(b)}`).join(', '));
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

// The most useful thing about a clinic's hours for a search result, or null if nothing stands out.
function hoursHook(hours) {
  if (!hours) return null;
  const days = [0, 1, 2, 3, 4, 5, 6].map((d) => hours[d] || []);
  const open = days.filter((r) => r.length);
  if (open.length === 7 && days.every(is24)) return 'Open 24 Hours';
  const same = open.length === 7 && days.every((r) => JSON.stringify(r) === JSON.stringify(days[0]));
  if (same && days[0].length === 1) return `Open Daily ${pretty(days[0][0][0])}–${pretty(days[0][0][1])}`;
  if (open.length === 7) return 'Open 7 Days';
  if (days[0].length) return 'Open Sunday';
  if (open.some((r) => r.some(([, b]) => b >= 21 * 60))) return 'Open Late';
  return null;
}

// Longest title that fits in 60 characters; skips the area when the name already contains it.
// Leads with what searchers look for (hours that stand out, phone) so the result earns the click.
function seoTitle(c, locality, hours) {
  const has = (s) => c.name.toLowerCase().includes(s.toLowerCase());
  const place = has(c.areaLabel) ? (has(locality) ? '' : locality) : c.areaLabel;
  const where = place ? `, ${place}` : '';
  const hook = hoursHook(hours);
  const options = [
    ...(hook ? [`${c.name}${where}: ${hook}, Phone`, `${c.name}: ${hook}, Phone`, `${c.name}${where}: ${hook}`, `${c.name}: ${hook}`] : []),
    `${c.name}${where}: Hours & Phone`, `${c.name}: Hours & Phone`, `${c.name}${where}`, c.name,
  ];
  return options.find((t) => t.length <= 60) || cut(c.name, 60);
}

// Hours and phone first, as those are what people searching a clinic's name want to know.
function seoDesc(c, where, hours) {
  if (!hours) return cut(`${c.name} in ${where}${c.street ? ', ' + c.street : ''}. Opening hours, phone number, services and directions, plus other clinics near ${c.areaLabel}.`, 155);
  const panelList = ((c.faqs || []).find(([q]) => /^Which panels/.test(q))?.[1] || '').replace(/^The clinic lists /, '').replace(/\. Check with.*$/, '');
  const allDay = [0, 1, 2, 3, 4, 5, 6].every((d) => is24(hours[d]));
  const name = c.name.toLowerCase().includes(c.areaLabel.toLowerCase()) ? c.name : `${c.name}, ${c.areaLabel}`;
  const parts = [`${name}: ${allDay ? 'open 24 hours, 7 days a week' : `open ${summaryHours(hours).replace(/ · /g, ', ')}`}.`];
  if (c.phone) parts.push(`Call ${c.phone}.`);
  // Add detail while it fits in 155 characters, ending on a whole sentence (110 is the minimum the site checker allows).
  const fits = (s) => [...parts, s].join(' ').length <= 155;
  const address = [
    ...(panelList ? [`Address, map, services and panels (${panelList}).`, 'Address, map, services and panels.'] : []),
    'Address, map, services and nearby clinics.', 'Address, map and services.',
  ].find(fits);
  if (address) parts.push(address);
  if (address?.includes('nearby') && parts.join(' ').length < 110) parts[parts.length - 1] = 'Address, map and services.';
  if (!parts[parts.length - 1].includes('nearby')) {
    const directions = [`Directions and other clinics near ${c.areaLabel}.`, 'Directions and nearby clinics.'].find(fits);
    if (directions && parts.join(' ').length < 120) parts.push(directions);
  }
  return cut(parts.join(' '), 155);
}

export function normalizeClinic(c, networks = {}) {
  for (const k of ['slug', 'name', 'areaLabel']) if (!c[k]) throw new Error(`Clinic is missing "${k}": ${JSON.stringify(c).slice(0, 80)}`);
  const state = c.state || 'Kuala Lumpur';
  const locality = c.locality || 'Kuala Lumpur';
  const cityLine = [c.postcode, locality].filter(Boolean).join(' ') + (state === locality ? '' : `, ${state}`);
  const addressLine = c.addressLine || (c.street ? `${c.street}, ${cityLine}` : `${c.areaLabel}, ${cityLine}`);
  const network = typeof c.network === 'string' ? { key: c.network, ...(networks[c.network] || { name: c.network }) } : c.network || null;
  const services = c.services || (c.serviceKeys || ['gp']).map((k) => ({ name: k === 'gp' ? 'General practice' : k }));
  const hasHours = !!c.hours && Object.values(c.hours).some((r) => r && r.length);
  const where = `${c.areaLabel}, ${locality}`;
  return {
    ...c,
    areaSlug: c.areaSlug || slugify(c.areaLabel),
    locality, state, cityLine, region: REGION[state.toLowerCase()] || 'MY-14',
    district: c.district || locality,
    addressLine,
    short: c.short || c.name,
    network,
    hours: hasHours ? c.hours : null,
    services,
    serviceKeys: c.serviceKeys || ['gp'],
    tags: c.tags || [],
    cardSpec: c.cardSpec || 'General practice',
    image: c.image || pick(c.slug)[0],
    imageAlt: c.image ? c.imageAlt || c.name : `Illustrative photo: ${pick(c.slug)[1]}`,
    areaServed: c.areaServed || [c.areaLabel, locality],
    mapsUrl: c.mapsUrl || 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${c.name}, ${addressLine || where}`),
    intro: c.intro || `A clinic in ${where}. We are still confirming some details for this listing, so please call ahead before visiting.`,
    about: c.about || '',
    incomplete: !(c.phone && hasHours && c.street),
    seoTitle: c.seoTitle || seoTitle(c, locality, hasHours ? c.hours : null),
    seoDesc: c.seoDesc || seoDesc(c, where, hasHours ? c.hours : null),
  };
}

export function deriveAreas(clinics) {
  const map = new Map();
  for (const c of clinics) {
    const a = map.get(c.areaSlug) || { slug: c.areaSlug, label: c.areaLabel, district: c.district, clinics: [] };
    a.clinics.push(c);
    map.set(c.areaSlug, a);
  }
  return [...map.values()].map((a) => {
    const located = a.clinics.filter((c) => c.geo);
    return {
      ...a,
      count: a.clinics.length,
      href: `/clinics/${a.slug}/`,
      locality: a.clinics[0].locality,
      region: a.clinics[0].region,
      // centre of the area's clinics, used for "nearby" lists and the map
      geo: located.length ? [located.reduce((s, c) => s + c.geo[0], 0) / located.length, located.reduce((s, c) => s + c.geo[1], 0) / located.length] : null,
    };
  });
}

// Straight-line distance in km between two [lat, lng] points.
export function distanceKm(a, b) {
  const rad = (d) => (d * Math.PI) / 180;
  const dLat = rad(b[0] - a[0]), dLng = rad(b[1] - a[1]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

// Closest clinics to a point: those within `within` km, or at least `min` of the nearest.
export function nearestClinics(point, clinics, { exclude = () => false, max = 4, within = 6, min = 2 } = {}) {
  if (!point) return [];
  const ranked = clinics.filter((c) => c.geo && !exclude(c)).map((c) => ({ c, km: distanceKm(point, c.geo) })).sort((x, y) => x.km - y.km);
  const close = ranked.filter((r) => r.km <= within);
  return (close.length >= min ? close : ranked.slice(0, min)).slice(0, max);
}
export const kmText = (km) => (km < 1 ? `${Math.round(km * 1000 / 50) * 50} m` : `${km.toFixed(1)} km`);
