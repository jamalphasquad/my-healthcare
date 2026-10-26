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

// Longest title that fits in 60 characters; skips the area when the name already contains it.
function seoTitle(c, locality) {
  const has = (s) => c.name.toLowerCase().includes(s.toLowerCase());
  const place = has(c.areaLabel) ? (has(locality) ? '' : locality) : c.areaLabel;
  const where = place ? `, ${place}` : '';
  const options = [`${c.name}${where}: Hours & Phone`, `${c.name}: Hours & Phone`, `${c.name}${where}`, c.name];
  return options.find((t) => t.length <= 60) || cut(c.name, 60);
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
    seoTitle: c.seoTitle || seoTitle(c, locality),
    seoDesc: c.seoDesc || cut(`${c.name} in ${where}${c.street ? ', ' + c.street : ''}. Opening hours, phone number, services and directions, plus other clinics near ${c.areaLabel}.`, 155),
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
