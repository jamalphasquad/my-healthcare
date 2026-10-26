// Tell IndexNow search engines (Bing, Yandex, Seznam, Naver; DuckDuckGo and Ecosia use Bing)
// about every URL in the live sitemap. Run after deploying:
//
//   node tools/indexnow.mjs            # all sitemap URLs
//   node tools/indexnow.mjs /clinics/  # only URLs containing "/clinics/"
//
// The key file https://healthcaredirectory.my/<key>.txt must be live first (the build writes it).
import { SITE } from './build/lib.mjs';

const filter = process.argv[2] || '';
const key = SITE.indexNowKey;
const host = new URL(SITE.url).host;
const keyLocation = `${SITE.url}/${key}.txt`;

const live = await fetch(keyLocation).then((r) => (r.ok ? r.text() : ''));
if (live.trim() !== key) throw new Error(`Key file not live at ${keyLocation}; deploy first.`);

const xml = await fetch(`${SITE.url}/sitemap.xml`).then((r) => r.text());
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.includes(filter));
if (!urlList.length) throw new Error('No URLs to submit.');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});
// 200 = accepted, 202 = accepted (key pending validation); 4xx = problem with the request
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status} ${res.statusText}`);
if (res.status >= 400) console.log(await res.text());
