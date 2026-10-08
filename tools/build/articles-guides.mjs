const PUB = '2026-10-08';
const AUTHOR = 'MalaysiaHealthcare.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
const glance = (rows) => `<div class="table-wrap"><table><tbody>${rows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}</tbody></table></div>`;

export const GUIDES = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'check-blood-pressure-at-home',
    title: 'A five-minute routine for checking blood pressure at home',
    crumb: 'Checking blood pressure at home',
    seoTitle: 'How to Check Blood Pressure at Home: A 5-Minute Routine (Malaysia Guide)',
    desc: 'How to measure blood pressure correctly at home, following Malaysia’s Clinical Practice Guidelines: the right monitor, how to sit, when to measure, and what the numbers mean.',
    excerpt: 'How to sit, when to measure, and what numbers to bring to your doctor, following Malaysia’s clinical guidelines.',
    standfirst: 'Nearly three in ten Malaysian adults have high blood pressure, and many do not know it. Measuring at home is easy once you know the routine, and it gives your doctor a far clearer picture than a single clinic reading.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', mins: 5, published: PUB, modified: PUB, author: AUTHOR, medical: true,
    about: ['Hypertension', 'Darah tinggi'],
    image: 'bp-monitor', imageAlt: 'A blood pressure cuff and stethoscope on a white surface',
    keyPoints: [
      'Use a validated, automatic upper-arm monitor with the right cuff size.',
      'Sit quietly with your back and arm supported for a few minutes before measuring.',
      'Take two readings, one minute apart, every morning and evening for up to seven days.',
      'Malaysian guidelines treat an average home reading above 135/85 mmHg as elevated.',
    ],
    sections: [
      { id: 'why', h: 'Why measure at home?', html: `<p>Blood pressure changes through the day, and some people read higher at the clinic simply because they are anxious (“white-coat” hypertension). Others read normal at the clinic but high at home. Malaysia’s Clinical Practice Guidelines on hypertension encourage home monitoring because it helps with diagnosis, empowers patients and can improve how well treatment works.</p>` },
      { id: 'monitor', h: 'Choosing a monitor', html: `<ul>
<li><strong>Upper-arm, automatic.</strong> Wrist and finger monitors are less reliable.</li>
<li><strong>Validated for accuracy.</strong> Ask your pharmacist for a clinically validated model.</li>
<li><strong>The right cuff size.</strong> A cuff that is too small gives falsely high readings. Measure around your upper arm and check the range printed on the cuff.</li>
<li><strong>Memory function</strong> is handy, so you do not have to write every reading down.</li>
</ul>` },
      { id: 'routine', h: 'The five-minute routine', html: `<ol>
<li><strong>Prepare.</strong> No smoking, eating, caffeine or exercise for 30 minutes beforehand. Empty your bladder.</li>
<li><strong>Sit well.</strong> Back supported, feet flat, legs uncrossed, arm resting on a table so the cuff is at heart level.</li>
<li><strong>Rest quietly</strong> for a few minutes. No talking or scrolling.</li>
<li><strong>Measure twice</strong>, at least one minute apart, on bare skin.</li>
<li><strong>Record both readings</strong> straight away, with the date and time.</li>
</ol>
<p>Measure at about the same time <strong>in the morning</strong> (before medicines, if you take them) and <strong>in the evening</strong> (before dinner), for at least three days and ideally seven.</p>
${figure('bp-check-desk', 'A home blood pressure monitor next to an open notebook for recording readings', 'Keep a simple logbook, or use a monitor that stores readings.')}` },
      { id: 'numbers', h: 'What the numbers mean', html: `<p>Ignore the readings from the first day, then average the rest. According to Malaysia’s Clinical Practice Guidelines (Management of Hypertension, 5th edition), an <strong>average home reading above 135/85 mmHg</strong> should be considered elevated. Bring your logbook to your doctor, who will interpret it together with your clinic readings.</p>
<div class="box box--pink" role="note"><span class="box__title">Get help quickly</span><ul><li>See a doctor the same day if readings are repeatedly 180/110 mmHg or higher.</li><li>Call <a href="tel:999">999</a> if a high reading comes with chest pain, breathlessness, weakness on one side, slurred speech or a sudden severe headache.</li></ul></div>` },
      { id: 'next', h: 'Bringing readings to your doctor', html: `<p>Take your logbook or monitor to your next appointment. If you are on treatment, home readings help your doctor adjust your medicines safely. If you have never been diagnosed but your average is high, book a check-up. High blood pressure is very treatable, and lifestyle changes alone often help in the early stages.</p>` },
    ],
    clinicsIntro: 'These clinics in our directory offer blood pressure checks and chronic disease follow-up:',
    faqs: [
      ['What is a normal home blood pressure reading?', 'Malaysia’s hypertension guidelines treat an average home reading above 135/85 mmHg as elevated. Your doctor will advise on your personal target.'],
      ['Are wrist blood pressure monitors accurate?', 'Upper-arm monitors are generally more reliable. If you use a wrist monitor, keep your wrist at heart level and check it against a clinic reading.'],
      ['Should I measure before or after taking my medicine?', 'Measure in the morning before taking your blood pressure medicine, and in the evening before dinner.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical Practice Guidelines: Management of Hypertension, 5th edition (2018)', 'https://mymahtas2.moh.gov.my/files/CPG%20Maagement%20of%20Hypertension%20CPG%202018%20V3.8%20FA.pdf'],
      ['Institute for Public Health — NHMS 2023 fact sheet', 'https://iku.moh.gov.my/images/nhms2023/fact-sheet-nhms-2023.pdf'],
    ],
    related: ['undiagnosed-diabetes-high-blood-pressure-young-adults', 'clinic-or-emergency-department', 'medipulih-klinik-subang-perdana-guide'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'clinic-or-emergency-department',
    title: 'Clinic or emergency department? A simple guide for Klang Valley families',
    crumb: 'Clinic or emergency department?',
    seoTitle: 'Clinic or Emergency Department? When to Call 999 in Malaysia | MalaysiaHealthcare.my',
    desc: 'When to call 999, when to go to a hospital emergency department, and when a GP clinic is the right choice. A calm, practical guide for families in Kuala Lumpur and the Klang Valley.',
    excerpt: 'When to call 999, when to head to the emergency department, and when your neighbourhood GP is the better choice.',
    standfirst: 'When someone is unwell, it is not always obvious where to go. This simple guide helps you choose between calling 999, going to a hospital emergency department, and seeing a GP.',
    cat: 'guides', catLabel: 'Guides', mins: 5, published: PUB, modified: PUB, author: AUTHOR, medical: true,
    image: 'treatment-room', imageAlt: 'A clean, empty clinic treatment room with an examination bed',
    keyPoints: [
      'Call 999 (or 112 from a mobile) for life-threatening emergencies.',
      'Go to an emergency department for urgent problems that cannot wait, such as dengue warning signs.',
      'For most fevers, coughs, minor injuries and ongoing conditions, a GP clinic is faster and better suited.',
    ],
    sections: [
      { id: 'call-999', h: 'Call 999 straight away for', html: `<div class="box box--pink" role="note"><ul>
<li>Chest pain or pressure, especially spreading to the arm, jaw or back</li>
<li>Signs of stroke: face drooping, arm weakness, slurred speech. Note the time symptoms started.</li>
<li>Severe difficulty breathing, or blue lips</li>
<li>Unconsciousness, a seizure, or sudden confusion</li>
<li>Heavy bleeding that will not stop</li>
<li>A severe allergic reaction with swelling of the face or throat</li>
<li>Serious injury, such as after a road accident or a fall from height</li>
</ul></div>
<p>From a mobile phone you can also dial <a href="tel:112">112</a>.</p>` },
      { id: 'emergency', h: 'Go to the emergency department for', html: `<ul>
<li>Dengue warning signs: severe stomach pain, persistent vomiting, bleeding, or drowsiness (see our <a href="/articles/dengue-klang-valley-first-three-days/">dengue guide</a>)</li>
<li>A fever of 38°C or higher in a baby under three months old</li>
<li>Severe abdominal pain</li>
<li>Suspected broken bones, deep cuts or burns</li>
<li>Dehydration in a child who is not passing urine</li>
<li>Heavy bleeding or severe pain in pregnancy</li>
</ul>
<p>Malaysian emergency departments use a <strong>triage colour system</strong> (red, yellow, green). The most urgent patients are seen first, so less urgent cases may wait longer. That is one reason a GP is often quicker for non-urgent problems.</p>` },
      { id: 'gp', h: 'See a GP for', html: `<ul>
<li>Most fevers, coughs, colds and sore throats</li>
<li>A fever lasting more than two days (for a dengue blood test)</li>
<li>Minor cuts, sprains and wound dressing</li>
<li>Rashes, ear pain, urinary symptoms</li>
<li>Diabetes, blood pressure and cholesterol follow-up</li>
<li>Health screening, vaccinations, and medical certificates</li>
<li>Mental health concerns, when there is no immediate danger</li>
</ul>
${figure('doctor-consultation', 'A doctor talking with a patient across a desk', 'A GP can treat most everyday illnesses and refer you to a hospital if needed.')}` },
      { id: 'which-clinic', h: 'Klinik kesihatan or private GP?', html: `<p>Government health clinics (<em>klinik kesihatan</em>) offer low-cost care, especially for long-term conditions, antenatal care and child vaccinations, but they usually keep office hours. Private GP clinics often open into the evening and on weekends, which helps when illness strikes after work. Many accept company panels or insurance, so bring your panel card.</p>` },
      { id: 'bring', h: 'What to bring', html: `<ul><li>MyKad, MyKid or passport</li><li>A list of medicines you take (or the boxes)</li><li>Panel or insurance card</li><li>For children: their health record book</li><li>For pregnancy: your antenatal record book</li></ul>` },
    ],
    clinicsIntro: 'Need a GP today? These neighbourhood clinics are in our directory, with live opening status:',
    faqs: [
      ['What is the emergency number in Malaysia?', 'Dial 999 from any phone. From a mobile phone you can also dial 112.'],
      ['Should I go to a clinic or the emergency department for a high fever?', 'For most adults and older children, a GP clinic is the right first stop. Go to the emergency department for a baby under three months with a fever of 38°C or more, or for dengue warning signs such as severe stomach pain, bleeding or persistent vomiting.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — official portal', 'https://www.moh.gov.my/'],
      ['World Health Organization — Dengue and severe dengue fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue'],
    ],
    related: ['dengue-klang-valley-first-three-days', 'haze-air-quality-klang-valley', 'medipulih-klinik-subang-perdana-guide'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'medipulih-klinik-kelana-jaya-guide',
    clinic: 'medipulih-klinik-kelana-jaya',
    title: 'A weekday GP near Paradigm Mall: a guide to MediPulih Klinik Kelana Jaya',
    crumb: 'MediPulih Klinik Kelana Jaya guide',
    seoTitle: 'MediPulih Klinik Kelana Jaya Guide: GP, Screening & Workplace Health in SS 6',
    desc: 'A practical guide to MediPulih Klinik Kelana Jaya at Kelana Parkview, SS 6, Petaling Jaya: weekday hours, services for office workers and employers, women’s health, panels and tips.',
    excerpt: 'Weekday hours, workplace health services and women’s health at Kelana Parkview, SS 6. Who it suits and what to know before you go.',
    standfirst: 'Tucked into Kelana Parkview in SS 6, this MediPulih branch keeps office hours and focuses on the people who work nearby, with everyday GP care, health screening and workplace health services under one roof.',
    cat: 'clinic-guides', catLabel: 'Clinic guides', mins: 5, published: PUB, modified: PUB, author: AUTHOR,
    image: 'doctor-tablet', imageAlt: 'Illustrative photo: a doctor reviewing patient notes on a tablet',
    caption: 'Illustrative photo, not taken at the clinic',
    keyPoints: [
      'Open Monday to Friday, 8am to 5pm. Closed on weekends.',
      'About 600 m from Paradigm Mall, at Kelana Parkview, Jalan SS 6/2.',
      'Offers pre-employment medicals, occupational health and corporate clinic services, plus women’s health and antenatal care.',
    ],
    sections: [
      { id: 'glance', h: 'At a glance', html: glance([
        ['Address', 'E104–E105 (Ground Floor), Kelana Parkview, No. 1, Jalan SS 6/2, SS 6, 47301 Petaling Jaya, Selangor'],
        ['Hours', 'Monday–Friday 8am–5pm · Saturday & Sunday closed'],
        ['Phone', '<a href="tel:+60123233418">012-323 3418</a>'],
        ['Book online', '<a href="https://app.watson.my/book/medipulih-klinik-kelana-jaya" target="_blank" rel="noopener">Watson booking page</a>'],
        ['Panels', 'KPSB Care, E-MAS, Great Eastern, PRA Assist (check with the clinic)'],
      ]) },
      { id: 'who', h: 'Who it suits', html: `<p>Kelana Jaya’s SS 6 and SS 7 neighbourhoods mix homes, offices, a university and Paradigm Mall. MediPulih’s Kelana Jaya branch is set up for that daytime crowd: it opens at 8am, so you can be seen before work, and closes at 5pm on weekdays. Kelana Jaya and Glenmarie LRT stations are each roughly 1 to 1.5 km away.</p>
<p>Because it is closed on weekends, families who need a doctor on a Saturday night may prefer MediPulih’s <a href="/clinics/medipulih-klinik-subang-perdana/">Subang Perdana branch</a>, which lists hours until 11pm every day.</p>` },
      { id: 'workplace', h: 'Workplace health under one roof', html: `<p>This branch lists the broadest range of workplace services among the MediPulih clinics we cover:</p>
<ul>
<li><strong>Pre-employment and periodic medicals</strong> for new hires and existing staff</li>
<li><strong>Occupational health doctor (OHD) services</strong>, for employers who need medical surveillance of workers exposed to workplace hazards</li>
<li><strong>Factory and corporate in-house clinic</strong> arrangements</li>
<li><strong>Executive health screening</strong> packages</li>
</ul>
<p>If you are an HR manager, call the clinic to discuss packages, panel billing and scheduling for groups.</p>` },
      { id: 'lunchtime-check', h: 'A lunchtime health check is worth it', html: `<p>New figures shared in Parliament in October 2026 show that more than 80% of Malaysians aged 18 to 29 with diabetes or high blood pressure do not know they have it. A quick blood pressure reading and a blood test during your lunch break can catch problems years earlier. Read more in our article on <a href="/articles/undiagnosed-diabetes-high-blood-pressure-young-adults/">undiagnosed diabetes and high blood pressure</a>.</p>
${figure('glucometer', 'Hands using a glucometer to check blood sugar', 'A blood sugar test takes minutes and can be done alongside a routine consultation.')}` },
      { id: 'women', h: 'Women’s health and antenatal care', html: `<p>The Kelana Jaya branch also lists women’s health and antenatal services, including antenatal ultrasound and non-invasive prenatal testing (NIPT). A GP can also do a clinical breast examination and refer you for a mammogram. See our <a href="/articles/breast-cancer-screening-malaysia/">Pink October screening guide</a> for free and subsidised options.</p>` },
      { id: 'tips', h: 'Tips before you go', html: `<ul><li>Bring your MyKad and any panel card or employee ID.</li><li>Fasting blood tests are usually done in the morning, so check whether you need to fast before booking a screening.</li><li>Call ahead before public holidays.</li></ul>` },
    ],
    sources: [
      ['MediPulih Klinik — official website', 'https://klinikmedipulih.com/'],
      ['MediPulih Klinik — panels list', 'https://klinikmedipulih.com/panels/'],
      ['MediPulih Klinik Kelana Jaya — online booking (Watson)', 'https://app.watson.my/book/medipulih-klinik-kelana-jaya'],
      ['Healthcare Asia — More than 80% of young Malaysians with diabetes and hypertension unaware (7 Oct 2026)', 'https://www.healthcareasia.org/2026/more-than-80-of-young-malaysians-with-diabetes-and-hypertension-are-unaware-of-the-condition/'],
    ],
    related: ['undiagnosed-diabetes-high-blood-pressure-young-adults', 'medipulih-klinik-subang-perdana-guide', 'medipulih-klinik-seri-pristana-guide'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'medipulih-klinik-subang-perdana-guide',
    clinic: 'medipulih-klinik-subang-perdana',
    title: 'Late-night GP care in Seksyen U3: a guide to MediPulih Klinik Subang Perdana',
    crumb: 'MediPulih Klinik Subang Perdana guide',
    seoTitle: 'MediPulih Klinik Subang Perdana Guide: Late GP, Sunat & Umrah Vaccines (Shah Alam)',
    desc: 'A practical guide to MediPulih Klinik Subang Perdana in Seksyen U3, Shah Alam: open 8am–11pm daily, with family GP care, circumcision, Haji & Umrah vaccines and Skim Perubatan Madani.',
    excerpt: 'Open until 11pm every day. Fevers, sunat, Haji and Umrah vaccines, and how Skim Perubatan Madani works at this Shah Alam clinic.',
    standfirst: 'Illness rarely keeps office hours. In Taman Subang Perdana, on the Shah Alam side of Subang, this MediPulih branch lists hours from 8am to 11pm every day, with a wide menu of family services.',
    cat: 'clinic-guides', catLabel: 'Clinic guides', mins: 6, published: PUB, modified: PUB, author: AUTHOR,
    image: 'clinic-waiting-room', imageAlt: 'Illustrative photo: a bright, calm clinic waiting area',
    caption: 'Illustrative photo, not taken at the clinic',
    keyPoints: [
      'Open daily from 8am to 11pm, including weekends (call ahead on public holidays).',
      'Lists circumcision (sunat), Haji and Umrah vaccine packages, ultrasound and health screening.',
      'On the Skim Perubatan Madani panel, which covers minor illnesses for eligible STR recipients.',
    ],
    sections: [
      { id: 'glance', h: 'At a glance', html: glance([
        ['Address', '29E (Ground Floor), Jalan Dinar G U3/G, Taman Subang Perdana, Seksyen U3, 40150 Shah Alam, Selangor'],
        ['Hours', 'Daily 8am–11pm'],
        ['Phone', '<a href="tel:+60367348109">03-6734 8109</a>'],
        ['Book online', '<a href="https://app.watson.my/book/medipulih-klinik-subang-perdana" target="_blank" rel="noopener">Watson booking page</a>'],
        ['Panels', 'Skim Perubatan Madani, Healthconnect & Mediexpress, Healthmetrics, AIA Health Services, KPSB Care, E-MAS, Great Eastern, PRA Assist'],
      ]) },
      { id: 'late', h: 'Open late, every day', html: `<p>Children tend to spike a fever at 9pm, not 9am. With published hours until 11pm daily, this branch is one of the more convenient options in the Seksyen U3, Subang Bestari and Subang Airport area for after-work and weekend visits.</p>
<p>That matters this year. Selangor has recorded more dengue cases than any other state in 2026, and the Petaling district was named among the hotspots in August. If a fever lasts more than two days, a GP can arrange a blood test to check your platelets. Our <a href="/articles/dengue-klang-valley-first-three-days/">dengue guide</a> explains the warning signs.</p>` },
      { id: 'sunat', h: 'Circumcision (sunat)', html: `<p>The branch lists circumcision among its services. Many Malaysian families plan a child’s sunat during the school holidays, so slots can fill up quickly. Call ahead to ask about the suitable age, the method used, how to prepare, and aftercare and follow-up visits.</p>` },
      { id: 'umrah', h: 'Haji and Umrah vaccinations', html: `<p>Saudi Arabia requires pilgrims to have a meningococcal (ACYW) vaccination before Umrah or Haj, given at least 10 days before arrival. This clinic offers a Haji and Umrah check-up and vaccine package, and typhoid vaccination. Bring your passport details and ask whether a flu vaccine is also recommended for you, especially if you are older or have a chronic illness.</p>
${figure('vaccination', 'A doctor giving a vaccination in the upper arm', 'Plan travel vaccines at least two weeks before you fly.')}` },
      { id: 'madani', h: 'How Skim Perubatan Madani works', html: `<p>Skim Perubatan Madani is a government scheme, run through ProtectHealth, that lets eligible <strong>Sumbangan Tunai Rahmah (STR)</strong> recipients get treatment for minor acute illnesses, such as fever, cough and cold, diarrhoea, sprains and minor injuries, at registered private GP clinics in selected districts. You do not need to register beforehand: bring your MyKad to the clinic. Benefit limits and participating districts change, so check the latest details on the <a href="https://protecthealth.com.my/skimperubatanmadani" target="_blank" rel="noopener">ProtectHealth website</a> or with the clinic.</p>` },
      { id: 'more', h: 'Other services', html: `<p>The branch also lists chronic disease follow-up, health screening and blood-test packages, abdominal ultrasound, NIPT, minor surgery and wound care, joint injections, ear cleaning, mental health counselling, home visits and a weight-loss programme. At the time of writing it held a 5.0 rating from around 30 Google reviews.</p>` },
    ],
    sources: [
      ['MediPulih Klinik — official website', 'https://klinikmedipulih.com/'],
      ['MediPulih Klinik — panels list', 'https://klinikmedipulih.com/panels/'],
      ['MediPulih Klinik Subang Perdana — online booking (Watson)', 'https://app.watson.my/book/medipulih-klinik-subang-perdana'],
      ['ProtectHealth — Skim Perubatan Madani', 'https://protecthealth.com.my/skimperubatanmadani'],
      ['MyGOV — Skim Perubatan Madani', 'https://www.malaysia.gov.my/topics/skim-perubatan-madani'],
      ['Media Selangor — Petaling and Klang dengue hotspots (4 Aug 2026)', 'https://mediaselangor.com/en/2026/08/388185'],
    ],
    related: ['dengue-klang-valley-first-three-days', 'medipulih-klinik-seri-pristana-guide', 'clinic-or-emergency-department'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'medipulih-klinik-seri-pristana-guide',
    clinic: 'medipulih-klinik-seri-pristana',
    title: 'Family and antenatal care in Sungai Buloh: a guide to MediPulih Klinik Seri Pristana',
    crumb: 'MediPulih Klinik Seri Pristana guide',
    seoTitle: 'MediPulih Klinik Seri Pristana Guide: Family GP & Antenatal Care, Sungai Buloh',
    desc: 'A practical guide to MediPulih Klinik Seri Pristana in Sungai Buloh: open 8am–11pm daily, with family GP care, women’s health and antenatal care, children’s health, panels and tips.',
    excerpt: 'Open 8am to 11pm daily in Seri Pristana, with family GP care, antenatal and women’s health. What to know before your visit.',
    standfirst: 'Seri Pristana and neighbouring Elmina have grown quickly, and young families need a doctor close to home. This MediPulih branch is open from morning until late evening every day, with a focus on family and women’s health.',
    cat: 'clinic-guides', catLabel: 'Clinic guides', mins: 5, published: PUB, modified: PUB, author: AUTHOR,
    image: 'paediatrician', imageAlt: 'Illustrative photo: a doctor listening to a baby’s chest with a stethoscope',
    caption: 'Illustrative photo, not taken at the clinic',
    keyPoints: [
      'Open daily from 8am to 11pm (call ahead on public holidays).',
      'Lists women’s health and antenatal care alongside everyday GP care for adults and children.',
      'The most-reviewed of the three MediPulih branches we list, rated 5.0 from more than 100 Google reviews at the time of writing.',
    ],
    sections: [
      { id: 'glance', h: 'At a glance', html: glance([
        ['Address', 'D-1-35, Jalan SP 11/2, Seri Pristana, 47000 Sungai Buloh, Selangor'],
        ['Hours', 'Daily 8am–11pm'],
        ['Phone', '<a href="tel:+60367325132">03-6732 5132</a> · <a href="tel:+60126338587">012-633 8587</a>'],
        ['Book online', '<a href="https://app.watson.my/book/medipulih-klinik-seri-pristana" target="_blank" rel="noopener">Watson booking page</a>'],
        ['Panels', 'Healthconnect & Mediexpress, KPSB Care, E-MAS, Great Eastern, PRA Assist (check with the clinic)'],
      ]) },
      { id: 'about', h: 'A clinic for a growing township', html: `<p>The clinic is registered with the Malaysian Medical Council as <em>MediPulih Klinik Cawangan Sungai Buloh</em>. Its listed principal practitioner is Dr Mursyidatun Naemah binti Mohamad Nasar, and patient reviews often mention “Dr Naemah” by name. There is no rail station within easy walking distance, so most patients arrive by car or e-hailing.</p>` },
      { id: 'antenatal', h: 'Antenatal care: how a GP fits in', html: `<p>In Malaysia, many mothers register their pregnancy at a government <em>klinik kesihatan</em>, which issues the antenatal record book used throughout pregnancy. Many also see a private GP or obstetrician for extra check-ups, scans or convenience, especially in the evening or at weekends.</p>
<p>The Seri Pristana branch lists women’s health and antenatal care. Bring your antenatal record book to every visit so all your doctors can see the full picture.</p>
<div class="box box--pink" role="note"><span class="box__title">In pregnancy, go to hospital or call 999 for</span><ul><li>Heavy vaginal bleeding or leaking fluid</li><li>Severe abdominal pain or headache, or blurred vision</li><li>Your baby moving much less than usual</li><li>Fits, or difficulty breathing</li></ul></div>` },
      { id: 'haze', h: 'Haze season with young children and bumps', html: `<p>Selangor’s air quality has been in the unhealthy range through early October 2026. Children and pregnant women are among the groups most affected by haze. Keep windows closed when the API is above 100, move play indoors, and see a doctor for wheezing or breathlessness. Our <a href="/articles/haze-air-quality-klang-valley/">haze guide</a> has more practical tips.</p>
${figure('mother-child', 'A mother and young daughter walking together outdoors', 'Save outdoor play for days when the API is below 100.')}` },
      { id: 'children', h: 'Children’s fevers and vaccinations', html: `<p>The branch sees children and lists vaccinations. Children’s routine immunisations under the national programme are free at klinik kesihatan; private clinics also offer optional vaccines and catch-up doses. For a baby under three months with a fever of 38°C or higher, go to a hospital emergency department straight away.</p>` },
    ],
    sources: [
      ['MediPulih Klinik — official website', 'https://klinikmedipulih.com/'],
      ['MediPulih Klinik — panels list', 'https://klinikmedipulih.com/panels/'],
      ['MediPulih Klinik Seri Pristana — online booking (Watson)', 'https://app.watson.my/book/medipulih-klinik-seri-pristana'],
      ['Malaysian Medical Council — MeRITS practitioner register', 'https://merits.mmc.gov.my/'],
      ['Media Selangor — Air quality update (8 Oct 2026)', 'https://mediaselangor.com/en/2026/10/399920'],
    ],
    related: ['haze-air-quality-klang-valley', 'breast-cancer-screening-malaysia', 'medipulih-klinik-kelana-jaya-guide'],
  },
];
