import { head, header, footer, crumbs, crumbsLd, write, ORG, WEBSITE, SITE, longDate } from './lib.mjs';

export function staticPages(topics) {
  const page = (o) => {
    const items = [['/', 'Home'], [o.path, o.crumb]];
    write(o.path.slice(1) + 'index.html',
      head({ path: o.path, title: o.title, desc: o.desc, ld: { '@context': 'https://schema.org', '@graph': [{ '@type': o.type || 'WebPage', url: SITE.url + o.path, name: o.h1, inLanguage: SITE.lang, isPartOf: { '@id': SITE.url + '/#website' } }, crumbsLd(items), ORG, WEBSITE] } }) +
      header(o.active) +
      `<div class="text-page">${crumbs(items)}
<h1>${o.h1}</h1>
<div class="prose">${o.body}</div>
</div>` + footer(topics));
  };

  page({
    path: '/about/', crumb: 'About', h1: 'About MalaysiaHealthcare.my', type: 'AboutPage',
    title: 'About Us & Editorial Policy | MalaysiaHealthcare.my',
    desc: 'Who we are, how we choose clinics for our Klang Valley directory, and how we research and update our health articles for Malaysians.',
    body: `<p>MalaysiaHealthcare.my is an independent guide to everyday healthcare in Kuala Lumpur and the wider Klang Valley. We have two simple aims: help people find a nearby clinic quickly, and share calm, practical health information written for Malaysia.</p>
<h2 id="directory">How the clinic directory works</h2>
<p>We are starting small and growing area by area. Each listing shows the clinic's address, phone number, opening hours and main services, taken from the clinic's own published information and public listings. Opening status (“Open now”) is calculated in Malaysia time (GMT+8) from the published hours. It does not account for public holidays, so please call ahead on cuti umum.</p>
<p>Clinic details can change. If you spot something out of date, please <a href="/contact/">let us know</a> and we will check and correct it.</p>
<h2 id="editorial">Editorial policy for health articles</h2>
<ul>
<li><strong>Official sources first.</strong> We base our articles on guidance from the Ministry of Health Malaysia (KKM), its clinical practice guidelines, the World Health Organization and reputable Malaysian news reports. Each article lists its sources.</li>
<li><strong>Dated and updated.</strong> Every article shows when it was last updated. Health news, case numbers and programmes change, so we revisit articles regularly.</li>
<li><strong>Awareness, not diagnosis.</strong> Our content is for general awareness and does not replace advice from a registered medical practitioner. If you are unwell, please see a doctor.</li>
<li><strong>Clear separation.</strong> Articles about a specific clinic are labelled as clinic guides, so you always know what you are reading.</li>
</ul>
<h2 id="emergency">In an emergency</h2>
<p>Call <a href="tel:999">999</a> from any phone, or <a href="tel:112">112</a> from a mobile. Go to the nearest hospital Emergency Department (Jabatan Kecemasan) for chest pain, difficulty breathing, signs of stroke, heavy bleeding or severe injury.</p>`,
  });

  page({
    path: '/contact/', crumb: 'Contact', h1: 'Contact us & list your clinic', type: 'ContactPage',
    title: 'Contact & List Your Clinic | MalaysiaHealthcare.my',
    desc: 'Get in touch with MalaysiaHealthcare.my, suggest a correction, or list your clinic in our Kuala Lumpur and Klang Valley directory free of charge.',
    body: `<p>We would love to hear from you, whether you have spotted an error, have a story idea, or run a clinic in Kuala Lumpur or the Klang Valley.</p>
<div class="box box--mint"><span class="eyebrow">Email</span><p><a href="mailto:hello@malaysiahealthcare.my">hello@malaysiahealthcare.my</a></p><p>We usually reply within two working days.</p></div>
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
    title: 'Privacy Notice (PDPA) | MalaysiaHealthcare.my',
    desc: 'How MalaysiaHealthcare.my collects, uses and protects personal data under Malaysia’s Personal Data Protection Act 2010 (PDPA), and your rights.',
    body: `<p>Last updated: ${longDate(SITE.updated)}</p>
<p>This notice explains how MalaysiaHealthcare.my handles personal data, in line with Malaysia’s Personal Data Protection Act 2010 (PDPA).</p>
<h2 id="collect">What we collect</h2>
<ul>
<li><strong>Emails you send us.</strong> If you contact us, we keep your message and email address so we can reply.</li>
<li><strong>Newsletter sign-ups.</strong> If you subscribe, we store your email address only to send the newsletter. You can unsubscribe at any time.</li>
<li><strong>Basic usage data.</strong> Like most websites, our hosting provider may log technical data such as IP address and browser type for security and performance.</li>
</ul>
<p>We do not ask for, and you should not send us, medical records or health details.</p>
<h2 id="use">How we use it</h2>
<p>We use personal data only to reply to you, send newsletters you asked for, and keep the website secure. We do not sell personal data.</p>
<h2 id="third">Third-party services</h2>
<p>Pages load fonts from Google Fonts, and clinic pages may show an embedded Google Map. These services may receive your IP address when the content loads. Links to clinics, WhatsApp and maps take you to third-party sites with their own privacy policies.</p>
<h2 id="rights">Your rights</h2>
<p>You may ask to access or correct your personal data, or ask us to stop processing it, by emailing <a href="mailto:hello@malaysiahealthcare.my">hello@malaysiahealthcare.my</a>.</p>`,
  });

  // 404
  write('404.html',
    head({ path: '/404.html', title: 'Page not found | MalaysiaHealthcare.my', desc: 'Sorry, we could not find that page.', noindex: true }) +
    header('') +
    `<div class="text-page" style="text-align:center">
<p class="eyebrow" style="margin-top:40px">Error 404</p>
<h1>We couldn’t find that page.</h1>
<p class="lede" style="margin:0 auto 28px;max-width:520px">It may have moved. Try the clinic directory or our health articles instead.</p>
<div class="cta-row" style="justify-content:center"><a class="btn" href="/clinics/">Find a clinic</a><a class="btn btn--ghost" href="/articles/">Read health articles</a></div>
</div>` + footer(topics));
}
