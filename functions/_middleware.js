// Cloudflare Pages middleware: send www.healthcaredirectory.my to the bare domain,
// keeping the path and query string, so search engines see one canonical host.
// _routes.json (written by the build) keeps static assets out of this function.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.slice(4);
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
