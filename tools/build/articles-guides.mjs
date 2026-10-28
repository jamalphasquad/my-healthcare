const PUB = '2026-10-08';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
const glance = (rows) => `<div class="table-wrap"><table><tbody>${rows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}</tbody></table></div>`;

export const GUIDES = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'check-blood-pressure-at-home',
    title: 'How to check your blood pressure at home: a five-minute routine',
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
    clinicsMode: 'directory',
    clinicsIntro: "Bring your logbook or monitor to a GP, who can review your readings with you. Our directory lists GP clinics across Kuala Lumpur and nearby Selangor, with opening hours and directions.",
    clinicLinks: [["/clinics/gp-clinics/", "GP clinics"], ["/clinics/open-saturday/", "Clinics open on Saturday"]],
    faqs: [
      ['What is a normal home blood pressure reading?', 'Malaysia’s hypertension guidelines treat an average home reading above 135/85 mmHg as elevated. Your doctor will advise on your personal target.'],
      ['Are wrist blood pressure monitors accurate?', 'Upper-arm monitors are generally more reliable. If you use a wrist monitor, keep your wrist at heart level and check it against a clinic reading.'],
      ['Should I measure before or after taking my medicine?', 'Measure in the morning before taking your blood pressure medicine, and in the evening before dinner.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical Practice Guidelines: Management of Hypertension, 5th edition (2018)', 'https://mymahtas2.moh.gov.my/files/CPG%20Maagement%20of%20Hypertension%20CPG%202018%20V3.8%20FA.pdf'],
      ['Institute for Public Health — NHMS 2023 fact sheet', 'https://iku.moh.gov.my/images/nhms2023/fact-sheet-nhms-2023.pdf'],
    ],
    related: ['undiagnosed-diabetes-high-blood-pressure-young-adults', 'world-diabetes-day-2026-kl', 'clinic-or-emergency-department'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'clinic-or-emergency-department',
    title: 'Clinic or emergency department? A simple guide for Klang Valley families',
    crumb: 'Clinic or emergency department?',
    seoTitle: 'Clinic or Emergency Department? When to Call 999 in Malaysia',
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
    clinicsMode: 'directory',
    clinicsIntro: "Need a GP today? Our directory shows opening hours in Malaysia time, including clinics open late and at weekends.",
    clinicLinks: [["/clinics/open-late/", "Clinics open late"], ["/clinics/open-saturday/", "Clinics open on Saturday"], ["/clinics/open-sunday/", "Clinics open on Sunday"], ["/clinics/gp-clinics/", "GP clinics"]],
    faqs: [
      ['What is the emergency number in Malaysia?', 'Dial 999 from any phone. From a mobile phone you can also dial 112.'],
      ['Should I go to a clinic or the emergency department for a high fever?', 'For most adults and older children, a GP clinic is the right first stop. Go to the emergency department for a baby under three months with a fever of 38°C or more, or for dengue warning signs such as severe stomach pain, bleeding or persistent vomiting.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — official portal', 'https://www.moh.gov.my/'],
      ['World Health Organization — Dengue and severe dengue fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue'],
    ],
    related: ['dengue-klang-valley-first-three-days', 'haze-air-quality-klang-valley', 'check-blood-pressure-at-home'],
  },
];
