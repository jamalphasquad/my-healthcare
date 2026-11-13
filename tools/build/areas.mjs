// Local context for each area page (/clinics/<areaSlug>/). Keyed by the clinic's areaSlug.
// Areas without an entry still get a page, with a generic intro. Keep facts verifiable.
// Optional local-guide fields: title and desc (SEO overrides), public (government clinics, dental
// clinics and hospitals; mark the nearest 24-hour emergency department with emergency: true),
// publicIntro, faqs ([question, answer]) and sources ([title, url]) for the public facility details.
export const AREA_INFO = {
  'jalan-tun-razak': {
    intro: 'Jalan Tun Razak is one of Kuala Lumpur’s main roads, running past The Intermark, Ampang Park and the edge of the KLCC area. Clinics here mostly serve the offices and homes along the road.',
    transit: 'Ampang Park station is served by both the LRT Kelana Jaya line and the MRT Putrajaya line.',
  },
  'mont-kiara': {
    intro: 'Mont Kiara is a residential and commercial neighbourhood in north-west Kuala Lumpur, known for its condominiums, international schools and expatriate families.',
    transit: 'There is no rail station in Mont Kiara itself, so most people drive or use e-hailing.',
  },
  'desa-sri-hartamas': {
    intro: 'Desa Sri Hartamas sits next to Mont Kiara and is known for its rows of shophouse restaurants and cafés, surrounded by condominiums and landed homes.',
    title: 'Klinik Desa Sri Hartamas: Clinics, Hours & Nearby Hospital',
    desc: 'Klinik Desa Sri Hartamas: clinic hours and phone, nearby government clinics in TTDI and Segambut, and Hospital Kuala Lumpur’s 24-hour emergency department.',
    publicIntro: 'There is no government clinic in Desa Sri Hartamas itself. These public facilities nearby are listed by the Kuala Lumpur health department.',
    public: [
      { type: 'Community clinic (Klinik Komuniti)', name: 'Klinik Komuniti TTDI', address: 'Jalan Tun Mohd Fuad, Taman Tun Dr Ismail, 60000 Kuala Lumpur', note: 'Open daily, 9am to 6pm, except major festive days. Tel 03-7722 2364.' },
      { type: 'Health clinic (Klinik Kesihatan)', name: 'Klinik Kesihatan Segambut', address: 'Jalan Segambut, Segambut Jaya, 51200 Kuala Lumpur', note: 'Monday to Friday, 8am to 5pm. Closed at weekends and on public holidays. Tel 03-6258 5960.' },
      { type: 'Government hospital', name: 'Hospital Kuala Lumpur', address: 'Jalan Pahang, 50586 Kuala Lumpur', note: '24-hour emergency department. Tel 03-2615 5555.', emergency: true },
    ],
    faqs: [
      ['Is there a government clinic in Desa Sri Hartamas?', 'Not in Desa Sri Hartamas itself. Nearby, Klinik Komuniti TTDI opens daily from 9am to 6pm, and Klinik Kesihatan Segambut opens on weekdays from 8am to 5pm.'],
    ],
    sources: [['JKWPKL&P — Klinik Komuniti', 'https://jknkl.moh.gov.my/jkwpklp/ms/perkhidmatan/lokasi-fasiliti/klinik-komuniti'], ['JKWPKL&P — Klinik Kesihatan Segambut', 'https://jknkl.moh.gov.my/jkwpklp/ms/klinik-kesihatan-segambut'], ['Hospital Kuala Lumpur — Kecemasan & Trauma', 'https://hkl.moh.gov.my/mengenai-kami/jabatan/perubatan-ii/direktorat-pembedahan/kecemasan-trauma']],
  },
  'solaris-dutamas': {
    intro: 'Solaris Dutamas is a commercial development beside Mont Kiara, home to Publika and blocks of offices, shops and serviced apartments around Jalan Dutamas 1.',
  },
  'damansara-heights': {
    intro: 'Damansara Heights (Bukit Damansara) is an established residential and business area west of the city centre, around Jalan Dungun and Pusat Bandar Damansara.',
    transit: 'Semantan MRT station on the Kajang line serves the Pusat Bandar Damansara side of the area.',
  },
  'kl-sentral': {
    intro: 'KL Sentral is Kuala Lumpur’s main rail hub, surrounded by office towers and hotels. Clinics here mainly serve office workers and travellers.',
    transit: 'KL Sentral station links the LRT, MRT, KL Monorail, KTM Komuter and the KLIA Ekspres airport train.',
  },
  'mutiara-damansara': {
    intro: 'Mutiara Damansara in Petaling Jaya is a busy shopping and office area around The Curve, IKEA and Surian Tower.',
    transit: 'Mutiara Damansara MRT station on the Kajang line is within walking distance of The Curve.',
  },
  'subang-jaya': {
    intro: 'Subang Jaya is a large suburb in Selangor’s Petaling district. The clinic listed here is in SS14, close to the SS15 commercial area.',
  },
  'taman-kinrara': {
    intro: 'Taman Kinrara is a residential township in Puchong, Selangor, on the southern edge of Kuala Lumpur near Bukit Jalil.',
    transit: 'Stations on the LRT Sri Petaling line, such as Kinrara BK5, are a short drive away.',
  },
  ampang: {
    intro: 'Ampang lies on Kuala Lumpur’s eastern edge, in Selangor, and mixes older residential neighbourhoods with commercial centres such as Taman Dagang.',
    title: 'Klinik Ampang: Clinics, Klinik Kesihatan & Weekend Hours',
    desc: 'Klinik Ampang: clinic hours and phone, Klinik Kesihatan Ampang’s evening and weekend hours, the government dental clinic and Hospital Ampang’s emergency.',
    publicIntro: 'These public facilities in Ampang are listed by the Selangor State Health Department.',
    public: [
      { type: 'Health clinic (Klinik Kesihatan)', name: 'Klinik Kesihatan Ampang', address: 'Jalan Mewah 3, Pekan Ampang, 68000 Ampang', note: 'Weekdays 8am to 5pm, with an outpatient clinic until 9pm. Outpatients also on Saturdays, Sundays and public holidays, 9am to 1pm (2026 hours). Tel 03-4292 3332.' },
      { type: 'Government dental clinic', name: 'Klinik Pergigian Ampang', address: 'Taman Ampang Mewah, Jalan Mewah 3, Pekan Ampang, 68000 Ampang', note: 'Tel 03-4280 8724.' },
      { type: 'Government hospital', name: 'Hospital Ampang', address: 'Jalan Mewah Utara, Pandan Mewah, 68000 Ampang', note: '24-hour emergency department. Tel 03-4289 6000.', emergency: true },
    ],
    faqs: [
      ['Is Klinik Kesihatan Ampang open at weekends?', 'Yes. Its 2026 hours include an outpatient clinic on Saturdays, Sundays and public holidays from 9am to 1pm, and on weekday evenings until 9pm. Hours can change, so call 03-4292 3332 first.'],
    ],
    sources: [['JKN Selangor — Klinik Kesihatan Daerah Hulu Langat', 'https://jknselangor.moh.gov.my/index.php/klinik-kesihatan-daerah-hulu-langat'], ['JKN Selangor — Klinik Kesihatan extended hours (2026)', 'https://jknselangor.moh.gov.my/index.php/bahagian/khidmat-kesihatan/klinik-extended-hours'], ['JKN Selangor — Klinik Pergigian Daerah Hulu Langat', 'https://jknselangor.moh.gov.my/index.php/klinik-pergigian-daerah-hulu-langat'], ['Hospital Ampang — Jabatan Kecemasan', 'https://jknselangor.moh.gov.my/hampg/index.php/informasi/senarai-jabatan-perkhidmatan/klinikal/jabatan-kecemasan']],
  },
  cheras: {
    intro: 'The clinic listed here is in Taman Alam Jaya, on the Selangor side of Cheras near Bandar Mahkota Cheras, a residential area south-east of Kuala Lumpur.',
  },
  'phileo-damansara': {
    intro: 'Phileo Damansara is an office development off Jalan Damansara in Section 16, Petaling Jaya, close to the Kuala Lumpur border.',
  },
  'bukit-bintang': {
    intro: 'Bukit Bintang is Kuala Lumpur’s main shopping and entertainment district, home to Pavilion Kuala Lumpur and Jalan Alor.',
    transit: 'Bukit Bintang MRT and Monorail stations are a short walk from Pavilion Kuala Lumpur.',
  },
  cyberjaya: {
    intro: 'Cyberjaya is a planned township in Sepang, Selangor, next to Putrajaya, with technology offices, universities and residential areas.',
    title: 'Klinik Cyberjaya: Clinics, Klinik Kesihatan & Hospital',
    desc: 'Klinik Cyberjaya: clinic hours and phone, Klinik Kesihatan Cyberjaya, the nearest government dental clinic and Hospital Cyberjaya’s 24-hour emergency unit.',
    publicIntro: 'These public facilities are listed by the Selangor State Health Department.',
    public: [
      { type: 'Health clinic (Klinik Kesihatan)', name: 'Klinik Kesihatan Cyberjaya', address: 'Kompleks Kesihatan Cyberjaya Blok I, MKN Embassy Techzone, Jalan Teknokrat 2, Cyber 4, 63000 Cyberjaya', note: 'Tel 03-8311 9300. Call for current opening hours.' },
      { type: 'Government dental clinic', name: 'Klinik Pergigian Dengkil', address: 'Klinik Kesihatan Dengkil, 43800 Dengkil', note: 'There is no government dental clinic listed in Cyberjaya itself. Tel 03-8750 0811.' },
      { type: 'Government hospital', name: 'Hospital Cyberjaya', address: 'Persiaran Multimedia, Cyber 11, 63000 Cyberjaya', note: 'Emergency and trauma department open 24 hours a day. Tel 03-8873 3500.', emergency: true },
    ],
    faqs: [
      ['Is there a government hospital in Cyberjaya?', 'Yes. Hospital Cyberjaya, on Persiaran Multimedia in Cyber 11, has an emergency and trauma department open 24 hours a day.'],
    ],
    sources: [['JKN Selangor — Klinik Kesihatan Daerah Sepang', 'https://jknselangor.moh.gov.my/index.php/klinik-kesihatan-daerah-sepang'], ['JKN Selangor — Klinik Pergigian Daerah Sepang', 'https://jknselangor.moh.gov.my/index.php/klinik-pergigian-daerah-sepang'], ['JKN Selangor — Hospital', 'https://jknselangor.moh.gov.my/index.php/bahagian/khidmat-kesihatan/hospital'], ['Hospital Cyberjaya — Jabatan Kecemasan & Trauma', 'https://jknselangor.moh.gov.my/hcj/index.php/utama/direktorat/pembedahan/jabatan-sokongan-klinikal']],
  },
  'mid-valley': {
    intro: 'Mid Valley City sits between Bangsar and Old Klang Road in Kuala Lumpur, around Mid Valley Megamall, The Gardens Mall and their office towers.',
    title: 'Clinic in Mid Valley KL: Hours, Phone & Klinik Kesihatan',
    desc: 'Clinic in Mid Valley: hours and phone, nearby government clinics and dental clinics in Kerinchi, Petaling Bahagia and Bangsar, and Hospital Kuala Lumpur.',
    publicIntro: 'There is no government clinic inside Mid Valley City. These nearby public facilities are listed by the Kuala Lumpur health department.',
    public: [
      { type: 'Community clinic (Klinik Komuniti)', name: 'Klinik Komuniti Kerinchi', address: 'E-0-1 PPR Kerinchi, Jalan Pantai Permai, 59200 Kuala Lumpur', note: 'Open daily, 9am to 6pm. Tel 03-2240 9406.' },
      { type: 'Health clinic (Klinik Kesihatan)', name: 'Klinik Kesihatan Petaling Bahagia', address: 'Batu 6, Jalan Puchong, 58200 Kuala Lumpur', note: 'Monday to Friday, 8am to 5pm, with its own dental clinic. Tel 03-7782 9355.' },
      { type: 'Government dental clinic', name: 'Klinik Pergigian Bangsar', address: 'Lot 68-03 & 68-04, Jalan Tun Sambanthan, 50470 Kuala Lumpur', note: 'Tel 03-2282 1153.' },
      { type: 'Government hospital', name: 'Hospital Kuala Lumpur', address: 'Jalan Pahang, 50586 Kuala Lumpur', note: '24-hour emergency department. Tel 03-2615 5555.', emergency: true },
    ],
    faqs: [
      ['Is there a government clinic near Mid Valley?', 'Klinik Komuniti Kerinchi opens daily from 9am to 6pm, and Klinik Kesihatan Petaling Bahagia on Jalan Puchong opens on weekdays from 8am to 5pm.'],
    ],
    sources: [['JKWPKL&P — Klinik Komuniti', 'https://jknkl.moh.gov.my/jkwpklp/ms/perkhidmatan/lokasi-fasiliti/klinik-komuniti'], ['JKWPKL&P — Klinik Kesihatan Petaling Bahagia', 'https://jknkl.moh.gov.my/jkwpklp/ms/klinik-kesihatan-petaling-bahagia'], ['JKWPKL&P — Klinik Pergigian', 'https://jknkl.moh.gov.my/jkwpklp/ms/perkhidmatan/lokasi-fasiliti/klinik-pergigian'], ['Hospital Kuala Lumpur — Kecemasan & Trauma', 'https://hkl.moh.gov.my/mengenai-kami/jabatan/perubatan-ii/direktorat-pembedahan/kecemasan-trauma']],
  },
  kajang: {
    intro: 'Kajang is a large town in Hulu Langat, Selangor, south-east of Kuala Lumpur, known for its satay and its growing residential suburbs.',
    title: 'Klinik Kajang: Clinics, Klinik Kesihatan & Hospital (HTPN)',
    desc: 'Klinik Kajang: clinic hours and phone, Klinik Kesihatan Kajang’s evening and Saturday hours, the government dental clinic and HTPN’s emergency department.',
    publicIntro: 'These public facilities in Kajang are listed by the Selangor State Health Department.',
    public: [
      { type: 'Health clinic (Klinik Kesihatan)', name: 'Klinik Kesihatan Kajang', address: 'Jalan Semenyih, 43000 Kajang', note: 'Weekdays 8am to 5pm, with an outpatient clinic until 9pm. Outpatients on Saturdays, 9am to 1pm. Closed on Sundays and public holidays (2026 hours). Tel 03-8739 5764.' },
      { type: 'Government dental clinic', name: 'Klinik Pergigian Kajang', address: 'Poliklinik Komuniti Kajang, Jalan Semenyih, Kajang', note: 'Tel 03-8734 0390.' },
      { type: 'Government hospital', name: 'Hospital Tengku Permaisuri Norashikin (HTPN)', address: 'Jalan Semenyih, 43000 Kajang', note: 'Formerly Hospital Kajang. Emergency and trauma department open 24 hours a day. Tel 03-8913 3333.', emergency: true },
    ],
    faqs: [
      ['What is the new name of Hospital Kajang?', 'Hospital Kajang is now listed by the Selangor State Health Department as Hospital Tengku Permaisuri Norashikin (HTPN), on Jalan Semenyih. Its emergency department is open 24 hours.'],
      ['Is Klinik Kesihatan Kajang open at night?', 'Its 2026 hours include an outpatient clinic on weekday evenings until 9pm, and on Saturdays from 9am to 1pm. It is closed on Sundays and public holidays.'],
    ],
    sources: [['JKN Selangor — Klinik Kesihatan Daerah Hulu Langat', 'https://jknselangor.moh.gov.my/index.php/klinik-kesihatan-daerah-hulu-langat'], ['JKN Selangor — Klinik Kesihatan extended hours (2026)', 'https://jknselangor.moh.gov.my/index.php/bahagian/khidmat-kesihatan/klinik-extended-hours'], ['JKN Selangor — Klinik Pergigian Daerah Hulu Langat', 'https://jknselangor.moh.gov.my/index.php/klinik-pergigian-daerah-hulu-langat'], ['JKN Selangor — Hospital', 'https://jknselangor.moh.gov.my/index.php/bahagian/khidmat-kesihatan/hospital'], ['HTPN — Jabatan Kecemasan dan Trauma', 'https://jknselangor.moh.gov.my/htpn/perkhidmatan/perkhidmatan-perubatan-psikiatri-pembedahan-kecemasan/jabatan-kecemasan-dan-traume.html']],
  },
};
