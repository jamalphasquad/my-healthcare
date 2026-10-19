// Fills in defaults for incomplete clinic records and derives the area list.
const slugify = (s) => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const REGION = { 'kuala lumpur': 'MY-14', 'wilayah persekutuan kuala lumpur': 'MY-14', selangor: 'MY-10', putrajaya: 'MY-16' };
// Neutral stock photos for clinics without a photo of their own, picked per clinic so cards vary.
const FALLBACK = [
  ['clinic-waiting-room', 'a bright, calm clinic waiting area'],
  ['treatment-room', 'a clean clinic treatment room'],
  ['doctor-consultation', 'a doctor talking with a patient'],
  ['stethoscope-desk', 'a stethoscope on a doctor’s desk'],
  ['nurse-stethoscope', 'a doctor holding a stethoscope'],
];
const pick = (slug) => FALLBACK[[...slug].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7) % FALLBACK.length];
const cut = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(' ', n - 1)).replace(/[,·:–-]\s*$/, ''));

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
    seoTitle: c.seoTitle || cut(`${c.name}, ${c.areaLabel}: Hours & Phone`, 60),
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
  return [...map.values()].map((a) => ({
    ...a,
    count: a.clinics.length,
    href: a.clinics.length === 1 ? `/clinics/${a.clinics[0].slug}/` : `/clinics/#area-${a.slug}`,
  }));
}
