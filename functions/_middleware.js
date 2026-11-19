// Cloudflare Pages middleware: keep one canonical host for search engines.
// - www.healthcaredirectory.my            -> 301 to healthcaredirectory.my (path and query kept)
// - healthcaredirectory.pages.dev         -> 301 to healthcaredirectory.my
// - <hash>.healthcaredirectory.pages.dev  -> served, but marked noindex (deploy previews)
// - /articles/<old slug>/ (see MOVED)     -> 301 to the article that now covers it
// _routes.json (written by the build) keeps static assets out of this function.
const CANONICAL = 'healthcaredirectory.my';
const PAGES_HOST = 'healthcaredirectory.pages.dev';
// _headers doesn't apply to responses made here, so the redirect sets HSTS itself.
const HSTS = 'max-age=31536000; includeSubDomains';
// Articles merged into another article, or retired (Nov 2026): old slug -> slug that now covers it.
// Handled here rather than in _redirects, because this function runs for every page URL.
const MOVED = {
  'sakit-kepala-sebelah-kiri-kanan-headache-malaysia': 'headaches-malaysia',
  'ubat-sakit-tekak-sore-throat-malaysia': 'tonsillitis-sore-throat-malaysia',
  'sakit-perut-kiri-kanan-abdominal-pain-malaysia': 'stomach-pain-gastric-malaysia',
  'ubat-batuk-cough-medicine-malaysia': 'persistent-cough-malaysia',
  'bacaan-kolesterol-normal-cholesterol-malaysia': 'blood-pressure-cholesterol-malaysia',
  'world-diabetes-day-2026-kl': 'normal-blood-sugar-level-malaysia',
  'world-mental-health-day-2026-malaysia': 'anxiety-malaysia',
  'undiagnosed-diabetes-high-blood-pressure-young-adults': 'free-health-screening-malaysia',
};

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  const old = /^\/articles\/([a-z0-9-]+)(?:\/(?:index\.html)?)?$/.exec(url.pathname);
  const moved = old && Object.hasOwn(MOVED, old[1]) ? `/articles/${MOVED[old[1]]}/` : null;
  if (moved) url.pathname = moved;
  if (moved || url.hostname === `www.${CANONICAL}` || url.hostname === PAGES_HOST) {
    // Deploy previews keep their own host so redirects can be tested there.
    if (!url.hostname.endsWith(`.${PAGES_HOST}`)) url.hostname = CANONICAL;
    url.protocol = 'https:';
    url.port = '';
    return new Response(null, { status: 301, headers: { Location: url.toString(), 'Strict-Transport-Security': HSTS } });
  }
  const res = await next();
  if (url.hostname.endsWith(`.${PAGES_HOST}`)) {
    const out = new Response(res.body, res);
    out.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return out;
  }
  return res;
}
