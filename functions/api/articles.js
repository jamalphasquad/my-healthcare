// Cloudflare Pages Function: GET /api/articles?q=dengue&cat=prevention&page=2[&size=7]
// Filters every article on the server and returns one page of pre-rendered cards, so the
// blog's search and topic filters (and the home page's topic chips) never download the whole library.
// articles-data.json is written by the build (articlesIndex in tools/build/pages.mjs), newest first.
import ARTICLES from './articles-data.json';

const PAGE_SIZE = 12;

export function onRequestGet({ request }) {
  const params = new URL(request.url).searchParams;
  const q = (params.get('q') || '').trim().toLowerCase().slice(0, 100);
  const cat = params.get('cat') || 'all';
  // size: a smaller page, for the home page (never more than PAGE_SIZE)
  const size = Math.min(PAGE_SIZE, Math.max(1, parseInt(params.get('size'), 10) || PAGE_SIZE));
  const matches = ARTICLES.filter((a) => (cat === 'all' || a.cat === cat) && (!q || a.q.includes(q)));
  const pages = Math.max(1, Math.ceil(matches.length / size));
  const page = Math.min(pages, Math.max(1, parseInt(params.get('page'), 10) || 1));
  const cards = matches.slice((page - 1) * size, page * size).map((a) => a.html);
  return Response.json({ total: matches.length, page, pages, cards }, {
    headers: { 'Cache-Control': 'public, max-age=300', 'X-Robots-Tag': 'noindex' },
  });
}
