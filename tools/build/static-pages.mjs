import { head, header, footer, crumbs, crumbsLd, write, esc, ORG, WEBSITE, SITE, longDate, EDITOR, editorPath, editorLd } from './lib.mjs';

export function staticPages(topics, articles = []) {
  const page = (o) => {
    const items = [['/', 'Home'], ...(o.parent ? [o.parent] : []), [o.path, o.crumb]];
    const main = { '@type': o.type || 'WebPage', url: SITE.url + o.path, name: o.h1, inLanguage: SITE.lang, isPartOf: { '@id': SITE.url + '/#website' }, ...(o.mainEntity ? { mainEntity: o.mainEntity } : {}) };
    write(o.path.slice(1) + 'index.html',
      head({ path: o.path, title: o.title, desc: o.desc, ld: { '@context': 'https://schema.org', '@graph': [main, crumbsLd(items), ORG, WEBSITE] } }) +
      header(o.active) +
      `<div class="text-page">${crumbs(items)}
<h1>${o.h1}</h1>
<div class="prose">${o.body}</div>
</div>` + footer(topics));
  };

  const ed = EDITOR;
  const edLink = ed ? `<a href="${editorPath()}">${esc(ed.name)}</a>` : '';
  page({
    path: '/about/', crumb: 'About', h1: 'About HealthcareDirectory.my', type: 'AboutPage',
    title: 'About Us & Editorial Policy | HealthcareDirectory.my',
    desc: ed
      ? `Who runs HealthcareDirectory.my, how we choose clinics for our directory, and how ${ed.name} checks and updates our health articles.`
      : 'Who we are, how we choose clinics for our directory, and how we research and update our health articles for Malaysians.',
    mainEntity: ed ? { '@id': SITE.url + '/#org' } : undefined,
    body: `<p>HealthcareDirectory.my is an independent directory of clinics and a guide to everyday healthcare in Malaysia, starting with Kuala Lumpur and Selangor. We have two simple aims: help people find a nearby clinic quickly, and share calm, practical health information written for Malaysia.</p>
${ed ? `<h2 id="who">Who runs this site</h2>
<p>HealthcareDirectory.my is run by ${edLink}. ${esc(ed.name.split(' ')[0])} edits every health article and every clinic listing and is the person to contact about anything on the site: <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>` : ''}
<h2 id="directory">How the clinic directory works</h2>
<p>We are starting small and growing area by area. Each listing shows the clinic's address, phone number, opening hours and main services, taken from the clinic's own published information and public listings. Opening status (“Open now”) is calculated in Malaysia time (GMT+8) from the published hours. It does not account for public holidays, so please call ahead on cuti umum.</p>
<p>Listing is free, and clinics cannot pay to be included or to appear higher. Clinic details can change. If you spot something out of date, please <a href="/contact/">let us know</a> and we will check and correct it.</p>
<h2 id="editorial">Editorial policy for health articles</h2>
<ul>
<li><strong>Official sources first.</strong> We base our articles on guidance from the Ministry of Health Malaysia (KKM), its clinical practice guidelines, the World Health Organization and reputable Malaysian news reports. Each article lists its sources, and we only cite pages we have read.</li>
${ed ? `<li><strong>A named editor.</strong> ${edLink} checks every article against its sources and approves it before it is published.</li>\n` : ''}<li><strong>Dated and updated.</strong> Every article shows when it was last updated. Health news, case numbers and programmes change, so we revisit articles regularly.</li>
<li><strong>Awareness, not diagnosis.</strong> Our content is for general awareness and does not replace advice from a registered medical practitioner. If you are unwell, please see a doctor.</li>
<li><strong>Clear separation.</strong> Articles about a specific clinic are labelled as clinic guides, so you always know what you are reading.</li>
</ul>
<h2 id="corrections">Corrections</h2>
<p>If we get something wrong, we fix it. When a correction changes the facts or advice in an article, we update the article and its “Updated” date. To report an error, email <a href="mailto:${SITE.email}">${SITE.email}</a> or use our <a href="/contact/">contact page</a>.</p>
<h2 id="emergency">In an emergency</h2>
<p>Call <a href="tel:999">999</a> from any phone, or <a href="tel:112">112</a> from a mobile. Go to the nearest hospital Emergency Department (Jabatan Kecemasan) for chest pain, difficulty breathing, signs of stroke, heavy bleeding or severe injury.</p>`,
  });

  page({
    path: '/contact/', crumb: 'Contact', h1: 'Contact us & list your clinic', type: 'ContactPage',
    title: 'Contact & List Your Clinic | HealthcareDirectory.my',
    desc: 'Get in touch with HealthcareDirectory.my, suggest a correction, or list your clinic in our Malaysia clinic directory free of charge.',
    body: `<p>We would love to hear from you, whether you have spotted an error, have a story idea, or run a clinic in Malaysia.</p>
<div class="box box--mint"><span class="eyebrow">Email</span><p><a href="mailto:hello@healthcaredirectory.my">hello@healthcaredirectory.my</a></p><p>We usually reply within two working days.</p></div>
<h2 id="list">List your clinic</h2>
<p>Listing is free. Please email us with:</p>
<ul>
<li>Clinic name, full address and postcode</li>
<li>Phone and WhatsApp numbers</li>
<li>Opening hours for each day, including public holidays</li>
<li>Main services (for example GP, women's health, children, health screening, vaccinations)</li>
<li>Your clinic's registration details under the Private Healthcare Facilities and Services Act 1998</li>
</ul>
<p>We check the details against public information before publishing.</p>
<h2 id="medical">Medical questions</h2>
<p>We are not able to give personal medical advice by email. Please speak to a doctor at a clinic near you, or call <a href="tel:999">999</a> in an emergency.</p>`,
  });

  page({
    path: '/privacy/', crumb: 'Privacy', h1: 'Privacy notice (PDPA)',
    title: 'Privacy Notice (PDPA) | HealthcareDirectory.my',
    desc: 'How HealthcareDirectory.my collects, uses and protects personal data under Malaysia’s Personal Data Protection Act 2010 (PDPA), and your rights.',
    body: `<p>Last updated: ${longDate(SITE.updated)}</p>
<p>This notice explains how HealthcareDirectory.my handles personal data, in line with Malaysia’s Personal Data Protection Act 2010 (PDPA).</p>
<h2 id="collect">What we collect</h2>
<ul>
<li><strong>Emails you send us.</strong> If you contact us, we keep your message and email address so we can reply.</li>
<li><strong>Newsletter sign-ups.</strong> If you subscribe, we store your email address only to send the newsletter. You can unsubscribe at any time.</li>
<li><strong>Your location, only if you ask.</strong> When you tap “Near me” or “Use my location”, your browser asks your permission and then shares your approximate position with the page so it can sort clinics by distance. This happens in your browser: your location is not sent to us or stored.</li>
<li><strong>Basic usage data.</strong> Like most websites, our hosting provider may log technical data such as IP address and browser type for security and performance.</li>
</ul>
<p>We do not ask for, and you should not send us, medical records or health details.</p>
<h2 id="use">How we use it</h2>
<p>We use personal data only to reply to you, send newsletters you asked for, and keep the website secure. We do not sell personal data.</p>
<h2 id="third">Third-party services</h2>
<p>Pages load fonts from Google Fonts, and clinic pages may show an embedded Google Map. These services may receive your IP address when the content loads. Links to clinics, WhatsApp and maps take you to third-party sites with their own privacy policies.</p>
<h2 id="rights">Your rights</h2>
<p>You may ask to access or correct your personal data, or ask us to stop processing it, by emailing <a href="mailto:hello@healthcaredirectory.my">hello@healthcaredirectory.my</a>.</p>`,
  });

  // Editor profile: who is behind the articles, linked from every byline.
  if (ed) {
    const recent = articles.slice().sort((x, y) => (y.modified || '').localeCompare(x.modified || ''));
    page({
      path: editorPath(), parent: ['/about/', 'About'], crumb: ed.name, h1: esc(ed.name), type: 'ProfilePage',
      title: `${ed.name}, Editor | HealthcareDirectory.my`.slice(0, 60),
      desc: `${ed.name} edits the HealthcareDirectory.my clinic directory and health articles for Malaysians. Editorial policy, contact and every article edited.`,
      mainEntity: editorLd(),
      body: `<p class="lede">${esc(ed.role)}, HealthcareDirectory.my</p>
${(ed.bio || []).map((p) => `<p>${esc(p)}</p>`).join('\n')}
<p>${esc(ed.name.split(' ')[0])} checks every article on this site against its sources before it is published, and handles corrections. Read our <a href="/about/#editorial">editorial policy</a>, or email <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
${ed.sameAs?.length ? `<p>Elsewhere: ${ed.sameAs.map((u) => `<a href="${u}" rel="me noopener" target="_blank">${esc(new URL(u).hostname.replace(/^www\./, ''))}</a>`).join(' · ')}</p>` : ''}
<h2 id="articles">Articles edited by ${esc(ed.name.split(' ')[0])}</h2>
<ul>${recent.map((a) => `<li><a href="/articles/${a.slug}/">${esc(a.title)}</a> <span style="color:var(--muted-2)">· ${longDate(a.modified || a.published)}</span></li>`).join('')}</ul>`,
    });
  }

  // 404
  write('404.html',
    head({ path: '/404.html', title: 'Page not found | HealthcareDirectory.my', desc: 'Sorry, we could not find that page.', noindex: true }) +
    header('') +
    `<div class="text-page" style="text-align:center">
<p class="eyebrow" style="margin-top:40px">Error 404</p>
<h1>We couldn’t find that page.</h1>
<p class="lede" style="margin:0 auto 28px;max-width:520px">It may have moved. Try the clinic directory or our health articles instead.</p>
<div class="cta-row" style="justify-content:center"><a class="btn" href="/clinics/">Find a clinic</a><a class="btn btn--ghost" href="/articles/">Read health articles</a></div>
</div>` + footer(topics));
}
