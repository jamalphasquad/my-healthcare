const daily = (a, b) => Object.fromEntries([0, 1, 2, 3, 4, 5, 6].map((d) => [d, [[a, b]]]));
const weekdays = (a, b) => Object.fromEntries([0, 1, 2, 3, 4, 5, 6].map((d) => [d, d === 0 || d === 6 ? [] : [[a, b]]]));

export const NETWORK = {
  name: 'MediPulih Klinik',
  url: 'https://klinikmedipulih.com/',
  blurb: 'MediPulih Klinik is a family GP network run by MediPulih Group Sdn. Bhd. and part of Bloom Healthcare Group. Since 2024 it has grown to more than 20 branches across Selangor, Kuala Lumpur, Putrajaya, Negeri Sembilan and Melaka, focusing on affordable, family-friendly general practice. Network hotline: <a href="tel:+60320225771">03-2022 5771</a>.',
};

export const SERVICES = [
  ['gp', 'General practice'],
  ['chronic', 'Chronic disease care'],
  ['children', 'Children & elderly'],
  ['womens', "Women's health & antenatal"],
  ['screening', 'Health screening'],
  ['vaccination', 'Vaccinations'],
  ['minor-surgery', 'Minor surgery & wound care'],
  ['circumcision', 'Circumcision (sunat)'],
  ['occupational', 'Occupational health'],
  ['mental', 'Mental health counselling'],
];

const HOURS_NOTE = 'Hours from the clinic’s Google Business Profile, checked October 2026. Some insurer panel lists show different hours, so please call ahead to confirm, especially late in the evening and on public holidays.';

export const CLINICS = [
  {
    slug: 'medipulih-klinik-kelana-jaya',
    name: 'MediPulih Klinik Kelana Jaya',
    altNames: ['MediPulih Klinik Cawangan Kelana Jaya', 'Klinik MediPulih Kelana Jaya'],
    short: 'MediPulih Kelana Jaya',
    areaSlug: 'kelana-jaya', areaLabel: 'Kelana Jaya', locality: 'Petaling Jaya', district: 'Petaling Jaya', state: 'Selangor',
    street: 'E104–E105 (Ground Floor), Kelana Parkview, No. 1, Jalan SS 6/2, SS 6',
    postcode: '47301',
    addressLine: 'E104–E105, Ground Floor, Kelana Parkview, Jalan SS 6/2, 47301 Petaling Jaya, Selangor',
    phone: '012-323 3418', phoneIntl: '+60123233418', whatsapp: null,
    email: 'medipulihkelanajaya@gmail.com',
    booking: 'https://app.watson.my/book/medipulih-klinik-kelana-jaya',
    geo: [3.1010925, 101.5991139],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=MediPulih+Klinik+Kelana+Jaya&query_place_id=ChIJ0TqtgTlNzDERfk50G4ac7qI',
    mapQuery: 'MediPulih Klinik Kelana Jaya, Kelana Parkview, Jalan SS 6/2, Petaling Jaya',
    hours: weekdays(480, 1020),
    hoursNote: HOURS_NOTE,
    image: 'doctor-tablet', imageAlt: 'Illustrative photo: a doctor reviewing patient notes on a tablet',
    cardSpec: 'GP & workplace health',
    tags: ['Weekdays 8am–5pm', 'Occupational health', 'Antenatal'],
    serviceKeys: ['gp', 'chronic', 'children', 'womens', 'screening', 'vaccination', 'minor-surgery', 'occupational', 'mental'],
    specialties: ['PrimaryCare', 'Obstetric'],
    services: [
      { name: 'General practice', note: 'Fever, cough, infections and everyday illness' },
      { name: 'Chronic disease follow-up', note: 'Diabetes, blood pressure and cholesterol' },
      { name: 'Occupational health', note: 'Pre-employment checks, OHD and factory clinic services' },
      { name: 'Health screening', note: 'Medical, executive and blood-test packages' },
      { name: "Women's health & antenatal", note: 'Including antenatal ultrasound and NIPT' },
      { name: 'Vaccinations', note: 'Adult and travel vaccines' },
      { name: 'Minor surgery & wound care' },
      { name: 'Mental health counselling' },
      { name: 'Corporate & in-house clinic services' },
    ],
    areaServed: ['Kelana Jaya', 'SS 6', 'SS 7', 'Ara Damansara', 'Glenmarie', 'Petaling Jaya'],
    gettingThere: 'At Kelana Parkview in SS 6, about 600 m from Paradigm Mall. Kelana Jaya and Glenmarie LRT stations are each roughly 1–1.5 km away.',
    intro: 'A weekday GP clinic in SS 6, Kelana Jaya, serving nearby offices and families with everyday illness care, health screening, women’s health and occupational health services.',
    seoTitle: 'MediPulih Klinik Kelana Jaya (SS 6, Petaling Jaya): Hours, Phone & Services',
    seoDesc: 'MediPulih Klinik Kelana Jaya at Kelana Parkview, Jalan SS 6/2, Petaling Jaya. Open Mon–Fri 8am–5pm. GP, health screening, antenatal care and occupational health. Call 012-323 3418.',
    about: `<h2 id="about">About this clinic</h2>
<p>MediPulih Klinik Kelana Jaya sits on the ground floor of Kelana Parkview in SS 6, a short drive from Paradigm Mall and the office blocks around Kelana Business Centre and Glenmarie. It keeps office hours, <strong>Monday to Friday, 8am to 5pm</strong>, which suits people who want to see a GP before work, at lunch, or straight from the office.</p>
<p>Alongside walk-in GP care, this branch lists the widest set of workplace services in the MediPulih network: pre-employment medicals, occupational health doctor (OHD) services and corporate in-house clinic arrangements. It also offers women’s health and antenatal care, including antenatal ultrasound.</p>
<h2 id="panels">Panels and payment</h2>
<p>The clinic accepts patients paying directly and is listed on several corporate and insurance panels, including <strong>KPSB Care, E-MAS, Great Eastern and PRA Assist</strong>. Panels change from time to time, so bring your panel card or employee ID and check with the clinic before your visit. You can also <a href="https://app.watson.my/book/medipulih-klinik-kelana-jaya" target="_blank" rel="noopener">book an appointment online</a>.</p>
<h2 id="tips">Before you visit</h2>
<ul>
<li>Bring your MyKad or passport, any panel card, and a list of the medicines you take.</li>
<li>The clinic is closed on weekends. For weekend or late-evening care, the <a href="/clinics/medipulih-klinik-subang-perdana/">Subang Perdana branch</a> lists hours until 11pm daily.</li>
<li>For chest pain, difficulty breathing, signs of stroke or heavy bleeding, call <a href="tel:999">999</a> or go straight to a hospital emergency department.</li>
</ul>`,
    faqs: [
      ['What are the opening hours of MediPulih Klinik Kelana Jaya?', 'The clinic lists Monday to Friday, 8am to 5pm, and is closed on Saturday and Sunday. Please call 012-323 3418 to confirm before public holidays.'],
      ['Where is MediPulih Klinik Kelana Jaya?', 'On the ground floor of Kelana Parkview (units E104–E105), No. 1, Jalan SS 6/2, SS 6, 47301 Petaling Jaya, Selangor, about 600 m from Paradigm Mall.'],
      ['Does the Kelana Jaya branch do pre-employment medicals?', 'Yes. The branch lists occupational health services, including medical screening, occupational health doctor (OHD) services and corporate clinic arrangements. Call ahead for packages and prices.'],
    ],
  },
  {
    slug: 'medipulih-klinik-subang-perdana',
    name: 'MediPulih Klinik Subang Perdana',
    altNames: ['MediPulih Klinik Cawangan Subang Perdana', 'Klinik MediPulih Subang Perdana'],
    short: 'MediPulih Subang Perdana',
    areaSlug: 'subang-perdana', areaLabel: 'Subang Perdana', locality: 'Shah Alam', district: 'Shah Alam (Seksyen U3)', state: 'Selangor',
    street: '29E (Ground Floor), Jalan Dinar G U3/G, Seksyen U3, Taman Subang Perdana',
    postcode: '40150',
    addressLine: '29E, Ground Floor, Jalan Dinar G U3/G, Taman Subang Perdana, Seksyen U3, 40150 Shah Alam, Selangor',
    phone: '03-6734 8109', phoneIntl: '+60367348109', whatsapp: null,
    email: 'mpsubangperdana@gmail.com',
    booking: 'https://app.watson.my/book/medipulih-klinik-subang-perdana',
    geo: [3.1493019, 101.5442502],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=MediPulih+Klinik+Subang+Perdana',
    mapQuery: 'MediPulih Klinik Subang Perdana, Jalan Dinar G U3/G, Shah Alam',
    hours: daily(480, 1380),
    hoursNote: HOURS_NOTE,
    image: 'clinic-waiting-room', imageAlt: 'Illustrative photo: a bright, calm clinic waiting area',
    cardSpec: 'Family GP',
    tags: ['Daily 8am–11pm', 'Circumcision', 'Skim Perubatan Madani'],
    serviceKeys: ['gp', 'chronic', 'children', 'screening', 'vaccination', 'minor-surgery', 'circumcision', 'mental'],
    specialties: ['PrimaryCare'],
    services: [
      { name: 'General practice', note: 'Walk-in care for adults and children' },
      { name: 'Chronic disease follow-up', note: 'Diabetes, blood pressure and cholesterol' },
      { name: 'Children & elderly care' },
      { name: 'Vaccinations', note: 'Including typhoid, and Haji & Umrah vaccine packages' },
      { name: 'Health screening', note: 'Medical, executive and blood-test packages' },
      { name: 'Circumcision (sunat)' },
      { name: 'Minor surgery & wound care', note: 'Including joint injections and ear cleaning' },
      { name: 'Ultrasound (abdomen) & NIPT' },
      { name: 'Mental health counselling' },
      { name: 'Home visits & weight-loss programme' },
    ],
    areaServed: ['Subang Perdana', 'Seksyen U3', 'Subang Bestari', 'Subang Airport area', 'Shah Alam'],
    gettingThere: 'In Taman Subang Perdana, Seksyen U3, Shah Alam, about 2 km from Sultan Abdul Aziz Shah (Subang) Airport and Terminal Skypark Komuter station.',
    intro: 'A family GP clinic in Taman Subang Perdana, Seksyen U3, Shah Alam, open from morning until late evening every day, with vaccinations, health screening, circumcision and chronic disease care.',
    seoTitle: 'MediPulih Klinik Subang Perdana (Seksyen U3, Shah Alam): Hours & Services',
    seoDesc: 'MediPulih Klinik Subang Perdana, Jalan Dinar G U3/G, Shah Alam. Open daily 8am–11pm. Family GP, vaccinations, Haji & Umrah packages, circumcision and screening. Call 03-6734 8109.',
    about: `<h2 id="about">About this clinic</h2>
<p>MediPulih Klinik Subang Perdana is a neighbourhood family clinic in Seksyen U3, on the Shah Alam side of the Subang Airport area. Its published hours are <strong>8am to 11pm, seven days a week</strong>, making it one of the more convenient options nearby for after-work and weekend visits.</p>
<p>Beyond everyday GP care, the branch lists circumcision (sunat), Haji and Umrah vaccine packages, abdominal ultrasound, NIPT, health screening packages and home visits. At the time of writing it held a 5.0 rating from around 30 Google reviews.</p>
<h2 id="panels">Panels and payment</h2>
<p>The clinic accepts walk-in patients paying directly and is listed on panels including <strong>Skim Perubatan Madani, Healthconnect &amp; Mediexpress, Healthmetrics, AIA Health Services, KPSB Care, E-MAS, Great Eastern and PRA Assist</strong>. Bring your panel card or MyKad, and check with the clinic first, because panel arrangements can change. You can also <a href="https://app.watson.my/book/medipulih-klinik-subang-perdana" target="_blank" rel="noopener">book online</a>.</p>
<h2 id="tips">Before you visit</h2>
<ul>
<li>For circumcision and vaccine packages, call ahead to book a slot and ask about preparation.</li>
<li>Pilgrims: Saudi authorities require meningococcal vaccination for Umrah and Haj. Plan your vaccine at least 10 days before you fly.</li>
<li>For chest pain, difficulty breathing, signs of stroke or heavy bleeding, call <a href="tel:999">999</a> or go straight to a hospital emergency department.</li>
</ul>`,
    faqs: [
      ['What time does MediPulih Klinik Subang Perdana open?', 'The clinic lists 8am to 11pm daily, including weekends. Hours can change on public holidays, so call 03-6734 8109 to confirm.'],
      ['Does MediPulih Subang Perdana accept Skim Perubatan Madani?', 'MediPulih’s official panel list shows the Subang Perdana branch on the Skim Perubatan Madani panel. Bring your MyKad and confirm eligibility with the clinic when you arrive.'],
      ['Does the clinic do circumcision (sunat)?', 'Yes. Circumcision is listed among the branch’s services. Call ahead to book and ask about age requirements and preparation.'],
    ],
  },
  {
    slug: 'medipulih-klinik-seri-pristana',
    name: 'MediPulih Klinik Seri Pristana',
    altNames: ['MediPulih Klinik Cawangan Seri Pristana', 'MediPulih Klinik Cawangan Sungai Buloh', 'Klinik MediPulih Seri Pristana'],
    short: 'MediPulih Seri Pristana',
    areaSlug: 'seri-pristana', areaLabel: 'Seri Pristana', locality: 'Sungai Buloh', district: 'Sungai Buloh', state: 'Selangor',
    street: 'D-1-35, Jalan SP 11/2, Seri Pristana',
    postcode: '47000',
    addressLine: 'D-1-35, Jalan SP 11/2, Seri Pristana, 47000 Sungai Buloh, Selangor',
    phone: '03-6732 5132', phoneIntl: '+60367325132', phoneAlt: '012-633 8587', whatsapp: null,
    email: 'mpseripristana@gmail.com',
    booking: 'https://app.watson.my/book/medipulih-klinik-seri-pristana',
    geo: [3.2070225, 101.4740158],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Medipulih+Klinik+Seri+Pristana',
    mapQuery: 'Medipulih Klinik Seri Pristana, Jalan SP 11/2, Sungai Buloh',
    hours: daily(480, 1380),
    hoursNote: HOURS_NOTE,
    image: 'mother-child', imageAlt: 'Illustrative photo: a mother and young daughter walking together outdoors',
    cardSpec: 'Family GP & women’s health',
    tags: ['Daily 8am–11pm', 'Antenatal', 'Family care'],
    serviceKeys: ['gp', 'chronic', 'children', 'womens', 'screening', 'vaccination', 'minor-surgery', 'mental'],
    specialties: ['PrimaryCare', 'Obstetric'],
    services: [
      { name: 'General practice', note: 'Walk-in care for adults and children' },
      { name: "Women's health & antenatal care" },
      { name: 'Chronic disease follow-up', note: 'Diabetes, blood pressure and cholesterol' },
      { name: 'Children & elderly care' },
      { name: 'Vaccinations' },
      { name: 'Health screening', note: 'Medical and blood-test packages' },
      { name: 'Minor surgery & wound care' },
      { name: 'Mental health counselling' },
    ],
    areaServed: ['Seri Pristana', 'Sungai Buloh', 'Elmina', 'Bandar Baru Sungai Buloh'],
    gettingThere: 'In the Seri Pristana township, Sungai Buloh, close to Elmina. There is no rail station within easy walking distance, so most patients come by car or e-hailing.',
    intro: 'A family clinic in Seri Pristana, Sungai Buloh, open from morning until late evening every day, with GP care, women’s health and antenatal care, vaccinations and screening.',
    seoTitle: 'MediPulih Klinik Seri Pristana, Sungai Buloh: Hours, Phone & Services',
    seoDesc: 'MediPulih Klinik Seri Pristana, Jalan SP 11/2, Sungai Buloh. Open daily 8am–11pm. Family GP, women’s health and antenatal care, vaccinations and screening. Call 03-6732 5132.',
    about: `<h2 id="about">About this clinic</h2>
<p>MediPulih Klinik Seri Pristana serves the growing Seri Pristana and Elmina neighbourhoods of Sungai Buloh. It is registered with the Malaysian Medical Council as <em>MediPulih Klinik Cawangan Sungai Buloh</em>, and its listed principal practitioner is Dr Mursyidatun Naemah binti Mohamad Nasar, whom many patients know as “Dr Naemah”.</p>
<p>The branch publishes hours of <strong>8am to 11pm, seven days a week</strong>, and offers everyday GP care alongside women’s health and antenatal care, vaccinations, chronic disease follow-up and health screening. It is the most-reviewed of the three MediPulih branches we list, with a 5.0 rating from more than 100 Google reviews at the time of writing.</p>
<h2 id="panels">Panels and payment</h2>
<p>Walk-in patients can pay directly. The branch is listed on panels including <strong>Healthconnect &amp; Mediexpress, KPSB Care, E-MAS, Great Eastern and PRA Assist</strong>. Panel arrangements change, so please confirm with the clinic before your visit. You can also <a href="https://app.watson.my/book/medipulih-klinik-seri-pristana" target="_blank" rel="noopener">book online</a>. The clinic can also be reached on <a href="tel:+60126338587">012-633 8587</a>.</p>
<h2 id="tips">Before you visit</h2>
<ul>
<li>For antenatal visits, bring your pink antenatal book (buku rekod kesihatan ibu) if you have one, and any previous scan reports.</li>
<li>Bring your MyKad, any panel card, and a list of medicines you take.</li>
<li>For heavy bleeding in pregnancy, severe abdominal pain, chest pain or difficulty breathing, call <a href="tel:999">999</a> or go straight to a hospital emergency department.</li>
</ul>`,
    faqs: [
      ['What are the opening hours of MediPulih Klinik Seri Pristana?', 'The clinic lists 8am to 11pm, every day of the week. Please call 03-6732 5132 to confirm hours on public holidays.'],
      ['Does MediPulih Seri Pristana provide antenatal care?', 'Yes. Women’s health and antenatal care are listed among the branch’s services. Call ahead to book an antenatal appointment.'],
      ['Where is MediPulih Klinik Seri Pristana?', 'At D-1-35, Jalan SP 11/2, Seri Pristana, 47000 Sungai Buloh, Selangor, near Elmina.'],
    ],
  },
];

export const AREAS = CLINICS.map((c) => ({ slug: c.areaSlug, label: c.areaLabel, district: c.district, href: `/clinics/${c.slug}/`, count: 1 }));
export const COMING_SOON = ['Bangsar', 'KLCC', 'Cheras', 'Mont Kiara'];
for (const c of CLINICS) c.network = NETWORK;
