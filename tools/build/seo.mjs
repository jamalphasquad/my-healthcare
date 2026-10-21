// Search titles (≤60 chars) and meta descriptions (≤155 chars), kept in one place.
export const SEO = {
  'weight-loss-injections-malaysia': ['Weight-Loss Injections Malaysia: Ozempic, Wegovy, Mounjaro', 'Which weight-loss injections are registered in Malaysia, who they are for, side effects and why buying pens online is risky. Updated October 2026.'],
  'skin-boosters-malaysia': ['Skin Boosters Malaysia: Profhilo, Rejuran & Juvelook Guide', 'What skin boosters like Profhilo, Rejuran and Juvelook do, how many sessions you need, risks, typical costs and how to check a clinic is legal.'],
  'flu-vaccine-malaysia': ['Flu Vaccine Malaysia 2026: Who Needs It, Cost & Free Shots', 'Who should get a flu vaccine in Malaysia, the best time, typical private clinic costs, free shots for seniors via MySejahtera, and side effects.'],
  'haze-air-quality-klang-valley': ['Haze in the Klang Valley: API Levels, Masks & Health Tips', 'Haze has pushed air quality to unhealthy levels across Selangor and KL. What the API means, who is most at risk, which masks work and when to see a doctor.'],
  'dengue-klang-valley-first-three-days': ['Dengue in the Klang Valley: First 3 Days & Warning Signs', 'Dengue cases have surged in Selangor and KL in 2026. Early symptoms, warning signs that need A&E, safe home care and where to get a blood test.'],
  'breast-cancer-screening-malaysia': ['Breast Cancer Screening in Malaysia & Free Mammograms', 'Half of breast cancers in Malaysia are found late. Self-checks and mammograms explained, plus free or subsidised mammograms in Selangor and KL.'],
  'world-mental-health-day-2026-malaysia': ['World Mental Health Day 2026: Malaysian Helplines & Tips', 'Calls to Talian HEAL 15555 have tripled since 2023. How to check in on yourself and others, Malaysian helplines to save, and how a GP can help.'],
  'undiagnosed-diabetes-high-blood-pressure-young-adults': ['Undiagnosed Diabetes & High BP in Young Malaysians', 'Over 80% of Malaysians aged 18–29 with diabetes or high blood pressure don’t know it. Which checks you need, and how to get screened for free.'],
  'check-blood-pressure-at-home': ['How to Check Blood Pressure at Home: 5-Minute Routine', 'Measure blood pressure correctly at home, following Malaysia’s hypertension guidelines: the right monitor, how to sit, when to measure, what it means.'],
  'clinic-or-emergency-department': ['Clinic or Emergency Department? When to Call 999 in Malaysia', 'When to call 999, when to go to an emergency department, and when a GP clinic is the right choice. A calm guide for families in the Klang Valley.'],
  home: ['Clinic Directory for Kuala Lumpur | HealthcareDirectory.my', 'Find clinics in Kuala Lumpur with opening hours, phone numbers and directions, plus calm, practical health articles written for Malaysians.'],
  clinics: ['Clinics in Kuala Lumpur: Hours, Phone & Directions', 'Kuala Lumpur clinic directory: opening hours, phone numbers, services and directions for neighbourhood clinics across KL, with new areas added monthly.'],
  articles: ['Health Articles for Malaysians | HealthcareDirectory.my', 'Health articles for Kuala Lumpur readers: dengue, haze, breast screening, blood pressure and mental wellbeing, based on KKM and WHO advice.'],
  privacy: ['Privacy Notice (PDPA) | HealthcareDirectory.my', 'How HealthcareDirectory.my collects, uses and protects personal data under Malaysia’s Personal Data Protection Act 2010 (PDPA), and your rights.'],
};
for (const [k, [t, d]] of Object.entries(SEO)) {
  if (t.length > 60 || d.length > 155) throw new Error(`SEO too long: ${k} (${t.length}/${d.length})`);
}
