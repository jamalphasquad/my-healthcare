// Local context for each area page (/clinics/<areaSlug>/). Keyed by the clinic's areaSlug.
// Areas without an entry still get a page, with a generic intro. Keep facts verifiable.
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
};
