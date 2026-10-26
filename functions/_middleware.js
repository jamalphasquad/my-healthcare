// Cloudflare Pages middleware: keep one canonical host for search engines.
// - www.healthcaredirectory.my            -> 301 to healthcaredirectory.my (path and query kept)
// - healthcaredirectory.pages.dev         -> 301 to healthcaredirectory.my
// - <hash>.healthcaredirectory.pages.dev  -> served, but marked noindex (deploy previews)
// _routes.json (written by the build) keeps static assets out of this function.
const CANONICAL = 'healthcaredirectory.my';
const PAGES_HOST = 'healthcaredirectory.pages.dev';

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === `www.${CANONICAL}` || url.hostname === PAGES_HOST) {
    url.hostname = CANONICAL;
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  const res = await next();
  if (url.hostname.endsWith(`.${PAGES_HOST}`)) {
    const out = new Response(res.body, res);
    out.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return out;
  }
  return res;
}
