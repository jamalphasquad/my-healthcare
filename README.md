# MalaysiaHealthcare.my

This is a static website for clinics and health awareness in Kuala Lumpur and the Klang Valley. The published site is plain HTML, CSS and JavaScript with no runtime dependencies. The HTML pages are generated from content files by a small Node script in `tools/build/` (Node 18+, no npm packages).

## Structure

```
index.html                     Home: hero search, awareness, clinic directory, articles, neighbourhoods, FAQ
clinics/                       Clinic directory + one page per clinic (MedicalClinic schema, map, hours)
articles/                      Blog index + one folder per article (Article/MedicalWebPage schema)
about/  contact/  privacy/     Editorial policy, contact & list-your-clinic, PDPA notice
404.html                       Not-found page (noindex)
assets/css/site.css            All styles (design tokens at the top)
assets/js/site.js              Progressive enhancement: filters, "open now" (GMT+8), search, TOC, share
assets/img/                    Self-hosted Pixabay photos: WebP at 480/960/1600w + 1200×630 OG JPGs
sitemap.xml  robots.txt  site.webmanifest  favicon.*
tools/                         Build script, image helper and SEO checker (not part of the site)
```

URLs are clean folders (`/clinics/medipulih-klinik-kelana-jaya/`). The site works on any static host, such as Netlify, Vercel, Cloudflare Pages, GitHub Pages or S3. Point the host's custom 404 at `/404.html`. If you deploy the whole repo, exclude `tools/` and `README.md` from the published files.

## Local preview

```bash
python -m http.server 8765
```

Then open <http://localhost:8765>.

## Before launch

- **Newsletter:** set `data-endpoint` on `.js-newsletter` forms to a Formspree, Buttondown or similar URL. Until then the form tells visitors sign-ups open soon.
- **Contact email:** `hello@malaysiahealthcare.my` is a placeholder. Create the mailbox or change it in `contact/` and `privacy/`.
- **Clinic hours:** taken from each clinic's Google Business Profile (October 2026). Some insurer panel lists show different hours, so confirm with MediPulih.
- **Search Console:** verify the domain and submit `https://malaysiahealthcare.my/sitemap.xml`.

## Editing content

The HTML files are generated, so edit the sources in `tools/build/`, not the HTML. Hand edits to generated pages are overwritten on the next build.

| File | What it holds |
|---|---|
| `clinics.mjs` | Clinic details: address, phone, hours, services, panels, FAQs, and the area filters |
| `articles-news.mjs` | News-based health articles |
| `articles-guides.mjs` | Everyday guides and clinic guides |
| `seo.mjs` | Search titles (60 characters or fewer) and meta descriptions (155 or fewer). The build fails if one is too long. |
| `pages.mjs` | Page templates: home, clinics, clinic page, blog, article |
| `static-pages.mjs` | About, Contact, Privacy and 404 |
| `lib.mjs` | Shared `<head>` (meta tags, Open Graph), header, footer and the responsive image helper |
| `build.mjs` | Builds every page, plus `sitemap.xml` and `robots.txt` |

Rebuild, then check every page for broken links, invalid JSON-LD, missing alt text and title or description lengths:

```bash
node tools/build/build.mjs
python tools/check.py
```

### Adding an article

Copy an entry in `articles-news.mjs` or `articles-guides.mjs` and give it a new `slug`. Add its title and description to `seo.mjs`, then rebuild. The new article appears on the blog, in the sitemap and in "Keep reading" automatically. Inside article HTML, `{{img:name|Alt text}}` inserts a responsive image.

### Adding a clinic

Add an entry to `CLINICS` in `clinics.mjs`. Hours are keyed by weekday (0 = Sunday), with `[openMinute, closeMinute]` ranges. For example, `{"1":[[480,1020]]}` means Monday, 8am–5pm. Add the clinic's title and description to `seo.mjs`, then rebuild. The new clinic gets a page, a directory card, an area filter and structured data. The footer clinic links are in `lib.mjs`.

### Adding an image

```bash
pip install pillow
python tools/add-image.py path/to/photo.jpg image-name
```

This writes the WebP sizes and the social-share image to `assets/img/` and registers them in `tools/build/imgmeta.json`. You can then use `image: 'image-name'` in content.

Images come from Pixabay under the Pixabay Content License, which needs no attribution. Captions still credit Pixabay.
