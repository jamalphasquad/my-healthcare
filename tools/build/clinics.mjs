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
     state: 'Kuala Lumpur',                         // 'Kuala Lumpur' or 'Selangor'
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
export const daily = (a, b) => Object.fromEntries([0, 1, 2, 3, 4, 5, 6].map((d) => [d, [[a, b]]]));
export const weekdays = (a, b) => Object.fromEntries([0, 1, 2, 3, 4, 5, 6].map((d) => [d, d === 0 || d === 6 ? [] : [[a, b]]]));

export const NETWORKS = {
  // careclinics: { name: 'CareClinics', url: 'https://…', blurb: 'One or two sentences about the network.' },
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

export const CLINICS = [];

// Kuala Lumpur neighbourhoods shown as "coming soon" until they have listings.
export const COMING_SOON = ['Bukit Bintang', 'Cheras', 'Desa Pandan', 'Kepong', 'Bangsar', 'Mont Kiara'];
