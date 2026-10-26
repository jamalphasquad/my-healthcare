/* Clinic listings.

   Only `slug`, `name` and `areaLabel` are required. Every other field is optional, so a
   clinic can be published with incomplete details and filled in later; the pages hide
   whatever is missing (no phone → no Call button, no hours → "call to confirm", and so on).

   Hours: keyed by weekday (0 = Sunday), each an array of [openMinute, closeMinute].
   Leave `hours` out entirely if they are not confirmed yet.

   Template (copy into CLINICS and fill in what you know):

   {
     slug: 'careclinics-bukit-bintang',            // URL: /clinics/careclinics-bukit-bintang/
     name: 'Klinik CareClinics Bukit Bintang',
     network: 'careclinics',                        // key in NETWORKS below (optional)
     areaLabel: 'Bukit Bintang',                    // neighbourhood shown on cards and filters
     areaSlug: 'bukit-bintang',                     // optional, derived from areaLabel
     locality: 'Kuala Lumpur',                      // city / town
     state: 'Kuala Lumpur',                         // state name, e.g. 'Selangor', 'Johor'
     street: '88 Jalan Alor',
     postcode: '50200',
     phone: '03-0000 0000', phoneIntl: '+60300000000',
     whatsapp: '+60120000000',
     geo: [3.1456, 101.7085],                       // lat, lng
     mapsUrl: 'https://www.google.com/maps/...',    // optional, generated from the address
     booking: 'https://...',                        // online booking page
     hours: weekdays(540, 1260),                    // or daily(...), or a custom object
     hoursNote: 'Hours may differ on public holidays.',
     serviceKeys: ['gp', 'vaccination'],            // keys from SERVICES, used by the filters
     services: [{ name: 'General practice', note: 'Walk-in care' }],
     tags: ['Open late'],                           // short chips on the card
     cardSpec: 'Family GP',                         // label above the clinic name
     image: 'clinic-waiting-room', imageAlt: 'Illustrative photo: ...',
     intro: 'One or two sentences about the clinic.',
     about: '<h2 id="about">About this clinic</h2><p>…</p>',
     gettingThere: 'Five minutes’ walk from Bukit Bintang MRT.',
     faqs: [['Question?', 'Answer.']],
     areaServed: ['Bukit Bintang', 'Pudu'],
   }
*/
import { CARECLINICS } from './careclinics-data.mjs';

export const daily = (a, b) => Object.fromEntries([0, 1, 2, 3, 4, 5, 6].map((d) => [d, [[a, b]]]));
export const weekdays = (a, b) => Object.fromEntries([0, 1, 2, 3, 4, 5, 6].map((d) => [d, d === 0 || d === 6 ? [] : [[a, b]]]));

// Weekday / Saturday / Sunday hours in minutes, e.g. wk([[540, 1020]], [[540, 780]]) = Mon–Fri 9am–5pm, Sat 9am–1pm.
export const wk = (weekday, sat = [], sun = []) => Object.fromEntries([0, 1, 2, 3, 4, 5, 6].map((d) => [d, d === 0 ? sun : d === 6 ? sat : weekday]));

export const NETWORKS = {
  careclinics: {
    name: 'CareClinics',
    url: 'https://careclinics.com.my/',
    blurb: 'CareClinics is a network of family clinics run by Careclinics Healthcare Services Sdn Bhd since 2003, with branches in the Klang Valley, Negeri Sembilan, Melaka, Johor, Perak and Penang. Several branches are open 24 hours. Hours and services vary by branch, so check the branch page or call before you go.',
  },
  segara: {
    name: 'Klinik Segara',
    blurb: 'Klinik Segara is a group of general practice clinics sharing the Klinik Segara name, with branches across Kuala Lumpur and nearby Petaling Jaya, Subang Jaya, Puchong, Ampang and Cheras. Hours vary by branch, and several are office-hours clinics in commercial buildings, so check the branch page before you go.',
  },
  enhanze: {
    name: 'Enhanze',
    url: 'https://enhanzeclinic.com/',
    blurb: 'Enhanze is a medical aesthetics clinic run by Aesthetic Medical Services Sdn Bhd since 2001, led by Medical Director Dato’ Dr N. Sutina Nordin. Its main clinic is at Phileo Damansara in Petaling Jaya, and Luminous Clinic is its branch at Pavilion Kuala Lumpur.',
  },
};

const SEGARA_NOTE = 'Hours from the branch’s Google Maps listing, checked October 2026. Please call ahead on public holidays.';
const segara = (o) => ({
  network: 'segara', cardSpec: 'General practice', serviceKeys: ['gp'],
  services: [{ name: 'General practice', note: 'Walk-in care for everyday illness' }],
  hoursNote: SEGARA_NOTE, ...o,
});
const maps = (name, placeId) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}&query_place_id=${placeId}`;

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
  ['aesthetic', 'Aesthetics & skin'],
  ['weight', 'Weight management'],
];

export const CLINICS = [
  /* ---------------- Klinik Segara: Kuala Lumpur ---------------- */
  segara({
    slug: 'klinik-segara-intermark', name: 'Klinik Segara The Intermark',
    areaLabel: 'Jalan Tun Razak', locality: 'Kuala Lumpur', state: 'Kuala Lumpur',
    street: 'Lot 306, Level 3, The Intermark Mall, 348 Jalan Tun Razak', postcode: '50400',
    phone: '03-2163 2140', phoneIntl: '+60321632140', geo: [3.1616636, 101.720355],
    mapsUrl: maps('Klinik Segara The Intermark', 'ChIJH4n21d83zDER0H40McrX9Yk'),
    hours: wk([[510, 1020]], [[540, 750]]),
    tags: ['Weekdays 8:30am–5pm', 'Sat mornings'],
    intro: 'A general practice clinic on Level 3 of The Intermark Mall on Jalan Tun Razak, open on weekdays and Saturday mornings.',
    gettingThere: 'Inside The Intermark Mall on Jalan Tun Razak, next to Ampang Park station.',
    areaServed: ['Jalan Tun Razak', 'Ampang Park', 'KLCC', 'Kuala Lumpur'],
  }),
  segara({
    slug: 'klinik-segara-mont-kiara', name: 'Klinik Segara Plaza Mont Kiara',
    areaLabel: 'Mont Kiara', locality: 'Kuala Lumpur', state: 'Kuala Lumpur',
    street: 'Unit B-08-06, 8th Floor, Block B, Plaza Mont Kiara, 2 Jalan Kiara', postcode: '50480',
    phone: '03-6411 8007', phoneIntl: '+60364118007', geo: [3.170594, 101.6540468],
    mapsUrl: maps('Klinik Segara Plaza Mont Kiara', 'ChIJt1HFWgBJzDER9QVsisP9v2Q'),
    hours: wk([[540, 1020]], [[540, 780]]),
    tags: ['Weekdays 9am–5pm', 'Sat mornings'],
    intro: 'A general practice clinic on the 8th floor of Block B, Plaza Mont Kiara, open on weekdays and Saturday mornings.',
    areaServed: ['Mont Kiara', 'Sri Hartamas', 'Kuala Lumpur'],
  }),
  segara({
    slug: 'klinik-segara-desa-sri-hartamas', name: 'Klinik Segara Desa Sri Hartamas',
    areaLabel: 'Desa Sri Hartamas', locality: 'Kuala Lumpur', state: 'Kuala Lumpur',
    street: '10 Jalan 27/70A, Desa Sri Hartamas', postcode: '50480',
    phone: '03-2300 0400', phoneIntl: '+60323000400', geo: [3.1620406, 101.6490888],
    mapsUrl: maps('Klinik Segara Desa Sri Hartamas', 'ChIJccLB2BtJzDERbzKmGbYsPSE'),
    hours: wk([[540, 1260]], [[540, 1260]], [[540, 1260]]),
    tags: ['Daily 9am–9pm', 'Open weekends'],
    intro: 'A shophouse general practice clinic in Desa Sri Hartamas, open from 9am to 9pm every day, including weekends.',
    areaServed: ['Desa Sri Hartamas', 'Sri Hartamas', 'Mont Kiara', 'Kuala Lumpur'],
  }),
  segara({
    slug: 'klinik-segara-solaris-dutamas', name: 'Klinik Segara Solaris Dutamas',
    areaLabel: 'Solaris Dutamas', locality: 'Kuala Lumpur', state: 'Kuala Lumpur',
    street: 'D4-G4-6, 1 Jalan Dutamas 1, Solaris Dutamas', postcode: '50480',
    phone: '03-6211 1140', phoneIntl: '+60362111140', geo: [3.1715148, 101.6666263],
    mapsUrl: maps('Klinik Segara Solaris Dutamas', 'ChIJjVbkqWBIzDERD_Jnzyf8MJQ'),
    hours: wk([[540, 780], [840, 1050]], [[540, 780], [840, 870]], [[540, 750]]),
    hoursNote: 'Hours from the branch’s Google Maps listing, checked October 2026, with a 1–2pm lunch break. A partner page lists slightly longer weekend hours, so please call ahead.',
    serviceKeys: ['gp', 'chronic', 'screening', 'minor-surgery', 'weight'],
    services: [
      { name: 'General practice', note: 'Walk-in care for everyday illness' },
      { name: 'Chronic disease care', note: 'Including diabetes and thyroid conditions' },
      { name: 'Blood test packages' },
      { name: 'Minor surgery' },
      { name: 'Weight management' },
      { name: 'Men’s health' },
    ],
    tags: ['Open 7 days', 'Blood tests'],
    intro: 'A general practice clinic on the ground floor of Solaris Dutamas, open seven days a week, with chronic disease care, blood test packages and minor surgery.',
    areaServed: ['Solaris Dutamas', 'Dutamas', 'Segambut', 'Mont Kiara', 'Kuala Lumpur'],
  }),
  segara({
    slug: 'klinik-segara-menara-dungun', name: 'Klinik Segara Menara Dungun',
    areaLabel: 'Damansara Heights', locality: 'Kuala Lumpur', state: 'Kuala Lumpur',
    street: 'G-02, Menara Dungun, 46 Jalan Dungun, Bukit Damansara', postcode: '50490',
    phone: '03-2011 2220', phoneIntl: '+60320112220', geo: [3.1526944, 101.6657291],
    mapsUrl: maps('Klinik Segara Menara Dungun', 'ChIJV1S_OetJzDERONkYrUiZqIw'),
    hours: wk([[540, 1050]]),
    tags: ['Weekdays 9am–5:30pm'],
    intro: 'A general practice clinic on the ground floor of Menara Dungun in Damansara Heights (Bukit Damansara), open on weekdays.',
    areaServed: ['Damansara Heights', 'Bukit Damansara', 'Pusat Bandar Damansara', 'Kuala Lumpur'],
  }),
  segara({
    slug: 'klinik-segara-mercu-uem', name: 'Klinik Segara Mercu UEM',
    areaLabel: 'KL Sentral', locality: 'Kuala Lumpur', state: 'Kuala Lumpur',
    street: 'Lot 2 & 3, Mercu UEM, Jalan Stesen Sentral 5', postcode: '50470',
    phone: '03-2272 2578', phoneIntl: '+60322722578', geo: [3.132504, 101.6836878],
    mapsUrl: maps('Klinik Segara Mercu UEM', 'ChIJpT1VHsBJzDERTVx9nZL6jac'),
    hours: wk([[540, 1020]]),
    tags: ['Weekdays 9am–5pm'],
    intro: 'A general practice clinic in Mercu UEM in the KL Sentral business district, open on weekdays.',
    gettingThere: 'In Mercu UEM on Jalan Stesen Sentral 5, a short walk from KL Sentral station.',
    areaServed: ['KL Sentral', 'Brickfields', 'Kuala Lumpur'],
  }),

  /* ---------------- Klinik Segara: Selangor ---------------- */
  segara({
    slug: 'klinik-segara-the-curve', name: 'Klinik Segara The Curve',
    areaLabel: 'Mutiara Damansara', locality: 'Petaling Jaya', state: 'Selangor',
    street: 'Lot 244E, 2nd Floor, The Curve, Jalan PJU 7/3, Mutiara Damansara', postcode: '47800',
    phone: '03-7725 6370', phoneIntl: '+60377256370', geo: [3.1582551, 101.6107832],
    mapsUrl: maps('Klinik Segara The Curve', 'ChIJdWpDiitPzDERBRGDuWlh5lM'),
    hours: wk([[540, 810], [870, 1140]], [[600, 810], [870, 1020]]),
    hoursNote: 'Hours from the branch’s Google Maps listing, checked October 2026, with a 1:30–2:30pm lunch break. Please call ahead on public holidays.',
    tags: ['Weekdays till 7pm', 'Open Saturdays'],
    intro: 'A general practice clinic on the 2nd floor of The Curve in Mutiara Damansara, open on weekdays until 7pm and on Saturdays.',
    areaServed: ['Mutiara Damansara', 'Kota Damansara', 'Petaling Jaya'],
  }),
  segara({
    slug: 'klinik-segara-surian-tower', name: 'Klinik Segara Surian Tower',
    areaLabel: 'Mutiara Damansara', locality: 'Petaling Jaya', state: 'Selangor',
    street: 'Unit 1.1, 1st Floor, Surian Tower, 1 Jalan PJU 7/3, Mutiara Damansara', postcode: '47810',
    phone: '03-7727 6370', phoneIntl: '+60377276370', geo: [3.1557484, 101.6095601],
    mapsUrl: maps('Klinik Segara Surian Tower', 'ChIJaYilushPzDERUIANJIWw6DM'),
    hours: wk([[540, 810], [870, 1020]]),
    hoursNote: 'Hours from the branch’s Google Maps listing, checked October 2026, with a 1:30–2:30pm lunch break. Please call ahead on public holidays.',
    tags: ['Weekdays 9am–5pm'],
    intro: 'A general practice clinic on the 1st floor of Surian Tower in Mutiara Damansara, open on weekdays.',
    areaServed: ['Mutiara Damansara', 'Petaling Jaya'],
  }),
  segara({
    slug: 'klinik-segara-ss14', name: 'Klinik Segara SS14',
    areaLabel: 'Subang Jaya', locality: 'Subang Jaya', state: 'Selangor',
    street: '76 Jalan SS14/1', postcode: '47500',
    phone: '017-651 3500', phoneIntl: '+60176513500', geo: [3.068499, 101.5864222],
    mapsUrl: maps('Klinik Segara SS14 Subang Jaya', 'ChIJ08QATfFMzDERLl1eEr7W9vI'),
    hours: wk([[540, 1140]], [[540, 900]], [[540, 900]]),
    tags: ['Open 7 days', 'Weekdays till 7pm'],
    intro: 'A general practice clinic in SS14, Subang Jaya, open until 7pm on weekdays and on weekend mornings and early afternoons.',
    areaServed: ['SS14', 'Subang Jaya'],
  }),
  segara({
    slug: 'klinik-segara-taman-kinrara', name: 'Klinik Segara Taman Kinrara',
    areaLabel: 'Taman Kinrara', locality: 'Puchong', state: 'Selangor',
    street: '33A Jalan TK 1/11A, Taman Kinrara Seksyen 1', postcode: '47100',
    phone: '03-8080 2020', phoneIntl: '+60380802020', geo: [3.0635453, 101.6480331],
    mapsUrl: maps('Klinik Segara Taman Kinrara', 'ChIJY_6W2A9LzDERuKXbnyt1vHw'),
    hours: wk([[480, 1260]], [[480, 1020]]),
    tags: ['Weekdays 8am–9pm', 'Open Saturdays'],
    intro: 'A general practice clinic in Taman Kinrara, Puchong, open from 8am to 9pm on weekdays and on Saturdays.',
    areaServed: ['Taman Kinrara', 'Puchong', 'Bukit Jalil'],
  }),
  segara({
    slug: 'klinik-segara-ampang', name: 'Klinik Segara Ampang',
    areaLabel: 'Ampang', locality: 'Ampang', state: 'Selangor',
    street: 'A-09-G, Block A, Pusat Perdagangan Taman Dagang, Jalan Dagang Besar', postcode: '68000',
    phone: '03-4270 7198', phoneIntl: '+60342707198', geo: [3.146455, 101.7563579],
    mapsUrl: maps('Klinik Segara Ampang', 'ChIJebsXEv42zDERLAmqMUVCNkw'),
    hours: wk([[540, 1260]], [[540, 1260]], [[540, 1260]]),
    tags: ['Daily 9am–9pm', 'Open weekends'],
    intro: 'A general practice clinic at Pusat Perdagangan Taman Dagang in Ampang, open from 9am to 9pm every day.',
    areaServed: ['Taman Dagang', 'Ampang'],
  }),
  segara({
    slug: 'klinik-segara-alam-jaya', name: 'Klinik Segara @ Alam Jaya',
    areaLabel: 'Cheras', locality: 'Cheras', state: 'Selangor',
    street: '62 Jalan Alam Jaya 15, Taman Alam Jaya', postcode: '43200',
    phone: '03-9080 5667', phoneIntl: '+60390805667', geo: [3.0797435, 101.764474],
    mapsUrl: maps('Klinik Segara Alam Jaya', 'ChIJ99vtiNM1zDERUSnTPqt4CXU'),
    hours: wk([[540, 1290]], [[540, 870], [1080, 1260]], [[540, 870], [1080, 1260]]),
    hoursNote: 'Hours from the branch’s Google Maps listing, checked October 2026. Its most recent reviews are about a year old, so please call to confirm before visiting.',
    tags: ['Open 7 days', 'Evenings'],
    intro: 'A general practice clinic in Taman Alam Jaya, Cheras (Selangor), open until 9:30pm on weekdays, with morning and evening sessions at weekends.',
    areaServed: ['Taman Alam Jaya', 'Bandar Mahkota Cheras', 'Cheras'],
  }),

  /* ---------------- Enhanze & Luminous ---------------- */
  {
    slug: 'enhanze-phileo-damansara', name: 'Enhanze Medical Aesthetics & Laser Clinic', short: 'Enhanze',
    altNames: ['Enhanze Clinic', 'Enhanze Aesthetic'],
    network: 'enhanze', cardSpec: 'Medical aesthetics',
    areaLabel: 'Phileo Damansara', locality: 'Petaling Jaya', state: 'Selangor',
    street: 'Suite 206, Level 2, Block D, Phileo Damansara 1, Jalan 16/11, off Jalan Damansara', postcode: '46350',
    phone: '03-7960 1788', phoneIntl: '+60379601788', whatsapp: '+60123453779', geo: [3.126224, 101.643736],
    mapsUrl: maps('Enhanze Medical Aesthetics & Laser Clinic', 'ChIJTU2JXmlJzDERdBFJEFuFAN0'),
    hours: wk([[600, 1140]], [[600, 1020]]),
    hoursNote: 'Hours from the clinic’s Google Maps listing, checked October 2026. Treatments are usually by appointment, so please call or WhatsApp first.',
    serviceKeys: ['aesthetic'],
    services: [
      { name: 'Dermal fillers & thread lifts' },
      { name: 'Acne, pigmentation & scar treatment' },
      { name: 'Chemical peels & mesotherapy' },
      { name: 'Laser treatments', note: 'Including laser lipolysis' },
      { name: 'Body contouring & fat reduction' },
      { name: 'Hair treatments' },
      { name: 'Regenerative & hormone therapy' },
    ],
    tags: ['Aesthetics', 'By appointment'],
    image: 'aesthetic-treatment-room', imageAlt: 'Illustrative photo: a treatment chair in a medical aesthetics room',
    intro: 'A non-surgical medical aesthetics clinic at Phileo Damansara, Petaling Jaya, offering skin, laser, anti-ageing and body treatments since 2001.',
    about: `<h2 id="about">About this clinic</h2>
<p>Enhanze is run by Aesthetic Medical Services Sdn Bhd and has offered medical aesthetic treatments since 2001. Its Medical Director is Dato’ Dr N. Sutina Nordin, a Universiti Malaya medical graduate. The clinic focuses on non-surgical treatments for skin, ageing, hair and body shape, and also offers regenerative and hormone therapy.</p>
<p>Enhanze also runs <a href="/clinics/luminous-clinic-pavilion/">Luminous Clinic at Pavilion Kuala Lumpur</a>.</p>
<h2 id="tips">Before you book</h2>
<ul>
<li>Most treatments start with a consultation with a doctor, who will check whether a treatment is suitable for you.</li>
<li>Bring a list of any medicines or supplements you take, and mention allergies or recent procedures.</li>
<li>Prices depend on the treatment and the number of sessions, so ask for a written quote.</li>
</ul>`,
    areaServed: ['Phileo Damansara', 'Section 16', 'Damansara', 'Petaling Jaya', 'Kuala Lumpur'],
  },
  {
    slug: 'luminous-clinic-pavilion', name: 'Luminous Clinic, Pavilion Kuala Lumpur', short: 'Luminous Clinic',
    altNames: ['Luminous Clinic', 'Luminous Integrative Medicine Clinic', 'Luminous Aesthetic & Regenerative Clinic', 'Luminous by Enhanze Clinic'],
    network: 'enhanze', cardSpec: 'Aesthetics & integrative medicine',
    areaLabel: 'Bukit Bintang', locality: 'Kuala Lumpur', state: 'Kuala Lumpur',
    street: 'Lot 7.02.01, Beauty Hall, Level 7, Pavilion Kuala Lumpur, 168 Jalan Bukit Bintang', postcode: '55100',
    phone: '03-2148 2828', phoneIntl: '+60321482828', whatsapp: '+60123282830', geo: [3.1489607, 101.7134125],
    mapsUrl: maps('Luminous Clinic Pavilion Kuala Lumpur', 'ChIJ6_I2yEI3zDERO1Hvw5drJ60'),
    hours: wk([[600, 1140]], [[600, 1020]]),
    hoursNote: 'Hours from the clinic’s Google Maps listing, checked October 2026. Its website and the Pavilion directory list longer daily hours, so please call or WhatsApp to confirm.',
    serviceKeys: ['aesthetic'],
    services: [
      { name: 'Laser & energy-based treatments', note: 'Including Thermage and HIFU' },
      { name: 'Fillers, botox & thread lifts' },
      { name: 'Body contouring', note: 'Including CoolSculpting' },
      { name: 'Hair treatments' },
      { name: 'Regenerative facials' },
      { name: 'Integrative medicine', note: 'Including IV iron, hormone tests and menopause assessment' },
    ],
    tags: ['Aesthetics', 'Pavilion KL'],
    image: 'aesthetic-device', imageAlt: 'Illustrative photo: an aesthetic treatment device in a clinic room',
    intro: 'The Pavilion Kuala Lumpur branch of Enhanze, in the mall’s Beauty Hall on Level 7, offering aesthetic, laser and integrative medicine treatments.',
    about: `<h2 id="about">About this clinic</h2>
<p>Luminous Clinic is the Pavilion Kuala Lumpur branch of <a href="/clinics/enhanze-phileo-damansara/">Enhanze</a> (“Luminous by Enhanze Clinic”). It shares Enhanze’s Medical Director, Dato’ Dr N. Sutina Nordin, and several of its doctors. Alongside non-invasive aesthetic and laser treatments, it offers integrative medicine services such as hormone tests and menopause assessments.</p>
<h2 id="tips">Before you book</h2>
<ul>
<li>Most treatments start with a doctor’s consultation to check what is suitable for you.</li>
<li>Bring a list of any medicines or supplements you take, and mention allergies or recent procedures.</li>
<li>Ask for a written quote, as prices depend on the treatment and number of sessions.</li>
</ul>`,
    gettingThere: 'In the Beauty Hall on Level 7 of Pavilion Kuala Lumpur, a short walk from Bukit Bintang MRT and Monorail stations.',
    areaServed: ['Bukit Bintang', 'KLCC', 'Kuala Lumpur'],
  },
  ...CARECLINICS,
];

// Kuala Lumpur neighbourhoods shown as "coming soon" until they have listings.
export const COMING_SOON = ['Bukit Bintang', 'Cheras', 'Desa Pandan', 'Kepong', 'Bangsar', 'Mont Kiara'];
