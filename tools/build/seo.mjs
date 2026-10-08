// Search titles (≤60 chars) and meta descriptions (≤155 chars), kept in one place.
export const SEO = {
  'haze-air-quality-klang-valley': ['Haze in the Klang Valley: API Levels, Masks & Health Tips', 'Haze has pushed air quality to unhealthy levels across Selangor and KL. What the API means, who is most at risk, which masks work and when to see a doctor.'],
  'dengue-klang-valley-first-three-days': ['Dengue in the Klang Valley: First 3 Days & Warning Signs', 'Dengue cases have surged in Selangor and KL in 2026. Early symptoms, warning signs that need A&E, safe home care and where to get a blood test.'],
  'breast-cancer-screening-malaysia': ['Breast Cancer Screening in Malaysia & Free Mammograms', 'Half of breast cancers in Malaysia are found late. Self-checks and mammograms explained, plus free or subsidised mammograms in Selangor and KL.'],
  'world-mental-health-day-2026-malaysia': ['World Mental Health Day 2026: Malaysian Helplines & Tips', 'Calls to Talian HEAL 15555 have tripled since 2023. How to check in on yourself and others, Malaysian helplines to save, and how a GP can help.'],
  'undiagnosed-diabetes-high-blood-pressure-young-adults': ['Undiagnosed Diabetes & High BP in Young Malaysians', 'Over 80% of Malaysians aged 18–29 with diabetes or high blood pressure don’t know it. Which checks you need, and how to get screened for free.'],
  'check-blood-pressure-at-home': ['How to Check Blood Pressure at Home: 5-Minute Routine', 'Measure blood pressure correctly at home, following Malaysia’s hypertension guidelines: the right monitor, how to sit, when to measure, what it means.'],
  'clinic-or-emergency-department': ['Clinic or Emergency Department? When to Call 999 in Malaysia', 'When to call 999, when to go to an emergency department, and when a GP clinic is the right choice. A calm guide for families in the Klang Valley.'],
  'medipulih-klinik-kelana-jaya-guide': ['MediPulih Klinik Kelana Jaya Guide: GP & Workplace Health', 'Guide to MediPulih Klinik Kelana Jaya at Kelana Parkview, SS 6: weekday hours, health screening, workplace health, antenatal care and panels.'],
  'medipulih-klinik-subang-perdana-guide': ['MediPulih Subang Perdana Guide: Late GP, Sunat & Umrah Jabs', 'Guide to MediPulih Klinik Subang Perdana, Shah Alam: open 8am–11pm daily, with family GP care, circumcision, Umrah vaccines and Skim Perubatan Madani.'],
  'medipulih-klinik-seri-pristana-guide': ['MediPulih Seri Pristana Guide: Family & Antenatal Care', 'Guide to MediPulih Klinik Seri Pristana, Sungai Buloh: open 8am–11pm daily, with family GP care, women’s health, antenatal care and children’s health.'],
  'medipulih-klinik-kelana-jaya': ['MediPulih Klinik Kelana Jaya, SS 6 PJ: Hours & Services', 'MediPulih Klinik Kelana Jaya, Kelana Parkview, Jalan SS 6/2, Petaling Jaya. Open Mon–Fri 8am–5pm. GP, screening, antenatal and occupational health.'],
  'medipulih-klinik-subang-perdana': ['MediPulih Klinik Subang Perdana, Shah Alam: Hours & Services', 'MediPulih Klinik Subang Perdana, Seksyen U3, Shah Alam. Open daily 8am–11pm. Family GP, vaccinations, circumcision and screening. Tel 03-6734 8109.'],
  'medipulih-klinik-seri-pristana': ['MediPulih Klinik Seri Pristana, Sungai Buloh | Hours & Phone', 'MediPulih Klinik Seri Pristana, Jalan SP 11/2, Sungai Buloh. Open daily 8am–11pm. Family GP, women’s health, antenatal care and vaccinations.'],
  home: ['Clinics in KL & the Klang Valley | MalaysiaHealthcare.my', 'Find clinics in Kuala Lumpur and the Klang Valley with opening hours and directions, plus calm, practical health articles written for Malaysians.'],
  clinics: ['Clinics in Kuala Lumpur & Klang Valley: Hours & Directions', 'Clinics in Kelana Jaya (PJ), Subang Perdana (Shah Alam) and Seri Pristana (Sungai Buloh): opening hours, phone numbers, services and directions.'],
  articles: ['Health Articles for Malaysians | MalaysiaHealthcare.my', 'Health articles for KL and Klang Valley readers: dengue, haze, breast screening, blood pressure and mental wellbeing, based on KKM and WHO advice.'],
  privacy: ['Privacy Notice (PDPA) | MalaysiaHealthcare.my', 'How MalaysiaHealthcare.my collects, uses and protects personal data under Malaysia’s Personal Data Protection Act 2010 (PDPA), and your rights.'],
};
for (const [k, [t, d]] of Object.entries(SEO)) {
  if (t.length > 60 || d.length > 155) throw new Error(`SEO too long: ${k} (${t.length}/${d.length})`);
}
