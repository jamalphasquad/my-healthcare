// Articles published 31 October 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-10-31';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const OCT_2026_G = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'peka-b40-malaysia',
    title: 'PeKa B40 (PeKa Sihat): who qualifies, free screening, benefits and how to check',
    crumb: 'PeKa B40',
    desc: 'PeKa B40 eligibility (kelayakan), how to check (semakan), the free health screening, RM20,000 medical device aid and other benefits, plus mySalam and PERKESO screening.',
    excerpt: 'If you receive STR and are 40 or over, you can get a free health screening at a private GP clinic, plus help with medical devices and cancer treatment costs. Who qualifies for PeKa B40, how to check, what the screening includes, and the other schemes you may be entitled to.',
    standfirst: 'PeKa B40 is the government’s health scheme for lower-income Malaysians aged 40 and above. It pays for a free health screening at a panel clinic and helps with the cost of medical devices, cancer treatment and travel to hospital. In 2025, almost half of the people screened found a health problem they didn’t know about. Here is how it works, and how it fits with mySalam and PERKESO screening.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: false,
    about: ['PeKa B40', 'Skim Peduli Kesihatan untuk Kumpulan B40', 'mySalam'],
    image: 'clinic-waiting-room', imageAlt: 'A bright clinic waiting room with red sofas and a large potted plant',
    keyPoints: [
      'PeKa B40 is for Sumbangan Tunai Rahmah (STR) recipients and their spouses aged 40 and above. There is no need to register: just bring your MyKad to a panel clinic.',
      'The free screening covers a check-up, blood tests for diabetes (HbA1c), cholesterol and kidney function, a urine test and a mental health check, with a second visit to go through the results.',
      'Other benefits: medical device aid of up to RM20,000, a RM1,000 incentive for completing cancer treatment, and help with transport costs.',
      'Check your eligibility at kelayakan.pekab40.com.my. The scheme is being renamed PeKa Sihat, with the same benefits.',
      'mySalam (critical illness and hospital income) continues in 2027. PERKESO offers separate free screening to contributors aged 40 to 59.',
    ],
    sections: [
      { id: 'what', h: 'What is PeKa B40?', tocLabel: 'What PeKa B40 is', html: `<p><strong>PeKa B40</strong> (Skim Peduli Kesihatan untuk Kumpulan B40) is a Ministry of Health scheme, run by ProtectHealth Corporation since April 2019, to help lower-income Malaysians catch diseases such as diabetes, high blood pressure and kidney disease early, and to ease the cost of treatment.</p>
<p>On 16 October 2026, the government announced that PeKa B40 will be renamed <strong>PeKa Sihat</strong>. The benefits stay the same, and the Ministry of Health will announce the details. Budget 2027 allocates RM80 million to the scheme.</p>
<p>The screening matters: of the 328,302 people screened in 2025, <strong>44.5% had at least one health problem that hadn’t been detected before</strong>.</p>` },
      { id: 'eligibility', h: 'Who qualifies? (Kelayakan PeKa B40)', tocLabel: 'Who qualifies', html: `<ul>
<li>You receive <strong>Sumbangan Tunai Rahmah (STR)</strong>, or you are the registered spouse of an STR recipient, <strong>and</strong></li>
<li>you are a Malaysian aged <strong>40 or above</strong>.</li>
</ul>
<p>You don’t need to apply or register separately. If you are eligible, you can go straight to a PeKa B40 panel clinic with your MyKad.</p>` },
      { id: 'check', h: 'How to check your eligibility (Semakan PeKa B40)', tocLabel: 'How to check', html: `<ol>
<li>Go to the official eligibility checker at <a href="https://kelayakan.pekab40.com.my/semakan-kelayakan" target="_blank" rel="noopener">kelayakan.pekab40.com.my</a>.</li>
<li>Enter your MyKad number.</li>
<li>If you are eligible, find a panel clinic using the <a href="https://bms.pekab40.com.my/provider" target="_blank" rel="noopener">PeKa B40 provider search</a>, or look for the PeKa sticker at your local clinic.</li>
</ol>
<p>Only use the official websites, and never pay anyone to “register” you for PeKa B40: the scheme is free and there is nothing to register for.</p>` },
      { id: 'benefits', h: 'The four PeKa B40 benefits', tocLabel: 'Benefits', html: `<div class="table-wrap"><table>
<thead><tr><th>Benefit</th><th>What you get</th></tr></thead>
<tbody>
<tr><td>1. Health screening</td><td>A free check-up and tests at a panel clinic (details below)</td></tr>
<tr><td>2. Medical device aid</td><td>Up to <strong>RM20,000</strong> for devices in 10 categories. Applied for by a Ministry of Health specialist for patients treated at government hospitals, after you have done the screening</td></tr>
<tr><td>3. Cancer treatment completion incentive</td><td><strong>RM1,000</strong>: RM300 when you start treatment and RM700 when you complete it</td></tr>
<tr><td>4. Transport incentive</td><td>Up to <strong>RM500</strong> in Peninsular Malaysia, or up to <strong>RM1,000</strong> in Sabah, Sarawak and Labuan, for people receiving benefit 2 or 3</td></tr>
</tbody></table></div>` },
      { id: 'screening', h: 'What the free health screening includes', tocLabel: 'The screening', html: `<p>The screening takes <strong>two visits</strong> to the same clinic. You don’t need to fast.</p>
<ul>
<li><strong>First visit:</strong> questions about your health and your family’s medical history, a mental health screening questionnaire, and a physical examination (including blood pressure and weight). Women may have a clinical breast examination, and men at risk a prostate check. Blood is taken for a full blood count, <strong>HbA1c</strong> (for diabetes), <strong>cholesterol</strong> and <strong>kidney function</strong>, plus a urine test.</li>
<li><strong>Second visit:</strong> the doctor goes through your results, gives advice, and refers you for treatment if anything needs follow-up.</li>
</ul>
<p>If your results show a problem, don’t ignore it. Diabetes, high blood pressure and high cholesterol usually have no symptoms until they cause damage. See our guides to <a href="/articles/normal-blood-sugar-level-malaysia/">normal blood sugar and HbA1c levels</a> and <a href="/articles/blood-pressure-cholesterol-malaysia/">blood pressure and cholesterol</a>.</p>
${figure('blood-sample', 'A gloved hand holding a blood sample tube', 'The PeKa B40 screening includes blood tests for diabetes, cholesterol and kidney function.')}` },
      { id: 'mysalam', h: 'mySalam: critical illness and hospital income', tocLabel: 'mySalam', html: `<p><strong>mySalam</strong> is a separate free protection scheme for STR recipients and their spouses, up to age 65, run through a trust fund under the Ministry of Finance. The Budget 2027 speech confirmed it will continue in 2027.</p>
<ul>
<li><strong>Up to RM8,000</strong>, paid once, if you are diagnosed with one of 50 critical illnesses.</li>
<li><strong>RM50 a day</strong> in income replacement when you are admitted to a government hospital, for up to 14 days (RM700) a year.</li>
<li>Help with <strong>medical devices</strong> of up to RM30,000.</li>
</ul>
<p>By the end of 2025, about 1.88 million people had received mySalam payouts, totalling RM1.42 billion. Check your status and how to claim on the official <a href="https://www.mysalam.com.my/" target="_blank" rel="noopener">mySalam website</a>.</p>` },
      { id: 'madani', h: 'What happened to Skim Perubatan Madani?', tocLabel: 'Skim Perubatan Madani', html: `<p><strong>Skim Perubatan Madani (SPM)</strong> began in June 2023 and let STR recipients see a private GP for minor illnesses such as coughs, colds, diarrhoea and minor wounds, up to RM250 a year for a household, RM125 for a senior living alone and RM75 for a single adult. From February 2024 it ran in 10 districts only, including Kuala Lumpur, Petaling, Klang, Gombak and Hulu Langat.</p>
<p>Its budget was halved to RM50 million for 2026, and the scheme was <strong>reportedly not funded in Budget 2027</strong>. The Ministry of Health hasn’t issued a closure notice, so check <a href="https://www.protecthealth.com.my/" target="_blank" rel="noopener">ProtectHealth</a> or MySejahtera for the latest before you go. Klinik Kesihatan remain the lowest-cost option for everyday illness.</p>` },
      { id: 'perkeso', h: 'PERKESO free health screening (for workers)', tocLabel: 'PERKESO screening', html: `<p>If you work and contribute to PERKESO (SOCSO), you may qualify for its free <strong>Health Screening Programme (HSP)</strong>, separate from PeKa B40:</p>
<ul>
<li><strong>Who:</strong> Malaysian citizens aged <strong>40 to 59</strong> who are active contributors under the Invalidity Scheme, with at least 12 months of contributions.</li>
<li><strong>What:</strong> a physical examination, mental health screening, blood tests (including HbA1c, cholesterol, kidney and liver function), a urine test, and a Pap smear and mammogram for women.</li>
<li><strong>How:</strong> check your eligibility and book a panel clinic in PERKESO’s <a href="https://sehati.perkeso.gov.my/" target="_blank" rel="noopener">SEHATi</a> app or portal.</li>
</ul>
<p>The results show why it matters: among workers screened from 2023 to 2025, about 19% had diabetes and more than 17% had high blood pressure. For other free options, see our guide to <a href="/articles/free-health-screening-malaysia/">free health screening in Malaysia</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a PeKa B40 or PERKESO panel clinic',
    clinicsTocLabel: 'Panel clinics',
    clinicsIntro: 'Our directory shows clinics that list PeKa B40 and PERKESO screening among their panels, with opening hours and directions. Panels can change, so call the clinic before you go, and use the official PeKa B40 provider search for the full list of more than 5,000 panel clinics nationwide.',
    clinicLinks: [['/clinics/peka-b40-clinics/', 'PeKa B40 panel clinics'], ['/clinics/perkeso-panel-clinics/', 'PERKESO panel clinics'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['Who is eligible for PeKa B40?', 'Malaysians aged 40 and above who receive Sumbangan Tunai Rahmah (STR), and their registered spouses aged 40 and above. There is no separate registration.'],
      ['How do I check if I qualify for PeKa B40?', 'Enter your MyKad number on the official checker at kelayakan.pekab40.com.my. If eligible, bring your MyKad to a PeKa B40 panel clinic.'],
      ['Is the PeKa B40 health screening free?', 'Yes. The screening, including blood and urine tests and the follow-up visit, is free for eligible people at panel clinics.'],
      ['Do I need to fast before the PeKa B40 screening?', 'No. The blood tests used, including HbA1c for diabetes, don’t require fasting.'],
      ['What is PeKa Sihat?', 'PeKa Sihat is the new name for PeKa B40, announced in October 2026. The benefits remain the same, and the Ministry of Health will announce further details.'],
      ['How much is the PeKa B40 medical device aid?', 'Up to RM20,000 for devices in 10 categories, applied for by a Ministry of Health specialist for patients at government hospitals, after the person has done the PeKa B40 screening.'],
      ['Is mySalam still available?', 'Yes. The Budget 2027 speech confirmed mySalam continues in 2027 for STR recipients and their spouses up to age 65, with up to RM8,000 for critical illness and RM50 a day for hospital stays.'],
      ['Who can get PERKESO’s free health screening?', 'Malaysian PERKESO contributors aged 40 to 59 who are active under the Invalidity Scheme with at least 12 months of contributions. Check and book in the SEHATi app.'],
    ],
    sources: [
      ['ProtectHealth Corporation — PeKa B40', 'https://protecthealth.com.my/peka-b40/'],
      ['ProtectHealth Corporation — Skim Perubatan Madani (fee schedule, May 2025)', 'https://protecthealth.com.my/skimperubatanMadani'],
      ['Prime Minister’s Office — Budget 2027 speech (9 Oct 2026)', 'https://www.pmo.gov.my/en/speeches-en/speech-the-fifth-madani-budget-2027-by-yab-pm/'],
      ['The Star — PeKa B40 to be rebranded as PeKa Sihat, says Fahmi (16 Oct 2026)', 'https://www.thestar.com.my/news/nation/2026/10/16/peka-b40-to-be-rebranded-as-pekasihat-says-fahmi'],
      ['CodeBlue — PeKa B40 screenings reveal undiagnosed conditions among almost half of participants (30 Sep 2026)', 'https://codeblue.galencentre.org/2026/09/peka-b40-screenings-reveal-undiagnosed-conditions-among-almost-half-of-participants/'],
      ['CodeBlue — Government abolishes Madani Medical Scheme under Budget 2027 (9 Oct 2026)', 'https://codeblue.galencentre.org/2026/10/government-abolishes-madani-medical-scheme-under-budget-2027/'],
      ['Malay Mail — mySalam payouts of RM1.42b to Malaysians, says minister (12 Jun 2026)', 'https://www.malaymail.com/news/malaysia/2026/06/12/hospitalisation-critical-illness-and-medical-device-aid-among-rm142b-mysalam-payouts-to-malaysians-says-minister/223523'],
      ['PERKESO — Health Screening Programme (HSP 3.0) leaflet', 'https://www.mma.org.my/web/wp-content/uploads/Risalah-HSP-3.0.pdf'],
      ['Bernama — PERKESO health screening findings (May 2026)', 'https://www.bernama.com/bm/news.php?id=2574936'],
    ],
    related: ['free-health-screening-malaysia', 'budget-2027-health-malaysia', 'normal-blood-sugar-level-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'normal-blood-sugar-level-malaysia',
    title: 'Normal blood sugar levels and HbA1c: charts, prediabetes and early signs of diabetes',
    crumb: 'Normal blood sugar levels',
    desc: 'Normal blood sugar levels in mmol/L, HbA1c normal range, prediabetes and diabetes cut-offs under Malaysian guidelines, targets, low sugar and early signs of diabetes.',
    excerpt: 'What is a normal blood sugar level, and what does your HbA1c result mean? Clear charts using Malaysia’s own guideline cut-offs, the early signs of diabetes (tanda kencing manis), targets if you have diabetes, and when to get tested.',
    standfirst: 'About 1 in 6 Malaysian adults has diabetes, and 2 in 5 of them don’t know it. A simple blood test can tell you whether your sugar is normal, in the prediabetes range, or high enough to be diabetes. Here are the numbers doctors in Malaysia use, and what to do about your result.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Blood glucose', 'HbA1c', 'Diabetes mellitus', 'Kencing manis'],
    image: 'glucometer', imageAlt: 'A blood glucose meter and test strips used for a fingerprick sugar test',
    keyPoints: [
      'Normal fasting blood sugar is below 6.1 mmol/L, and a normal HbA1c is below 5.7%.',
      'Malaysia diagnoses diabetes at an HbA1c of 6.3% or more, lower than the 6.5% used by WHO and the American Diabetes Association. Fasting sugar of 7.0 mmol/L or more also means diabetes.',
      'Prediabetes is a fasting sugar of 6.1–6.9 mmol/L or an HbA1c of 5.7–6.2%. It usually has no symptoms, and can often be reversed.',
      'Warning signs include thirst, passing a lot of urine, waking at night to urinate, tiredness, weight loss and itching or infections around the genitals. Many people have no symptoms at all.',
      'Malaysian guidelines advise testing from age 30, yearly, and earlier if you are overweight or have a risk factor.',
    ],
    sections: [
      { id: 'chart', h: 'Normal blood sugar levels chart (Malaysia)', tocLabel: 'Blood sugar chart', html: `<p>These are the cut-offs in Malaysia’s <em>Clinical Practice Guidelines on the Management of Type 2 Diabetes Mellitus</em> (6th edition), for blood taken from a vein and tested in a laboratory.</p>
<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>Normal</th><th>Prediabetes</th><th>Diabetes</th></tr></thead>
<tbody>
<tr><td>Fasting blood sugar (8+ hours without food)</td><td>Below 6.1 mmol/L</td><td>6.1–6.9 mmol/L</td><td>7.0 mmol/L or more</td></tr>
<tr><td>2 hours after a glucose drink (OGTT)</td><td>Below 7.8 mmol/L</td><td>7.8–11.0 mmol/L</td><td>11.1 mmol/L or more</td></tr>
<tr><td>HbA1c</td><td>Below 5.7%</td><td>5.7–6.2%</td><td>6.3% or more</td></tr>
<tr><td>Random blood sugar (any time)</td><td>–</td><td>–</td><td>11.1 mmol/L or more</td></tr>
</tbody></table></div>
<p><strong>mmol/L or mg/dL?</strong> Malaysia uses mmol/L. To convert, multiply by 18: for example, 7.0 mmol/L is about 126 mg/dL, and 11.1 mmol/L is about 200 mg/dL. HbA1c is shown as a percentage, or sometimes in mmol/mol (6.3% is 45 mmol/mol).</p>
<div class="box box--pink" role="note"><span class="box__title">Why Malaysia uses 6.3%, not 6.5%</span><p style="font-size:16px;line-height:1.6">The World Health Organization and the American Diabetes Association diagnose diabetes at an HbA1c of 6.5%. A large Malaysian study found that 6.5% missed too many people with diabetes here, so the Malaysian guideline uses <strong>6.3%</strong>, which works across Malay, Chinese and Indian Malaysians. Malaysia also counts a fasting sugar from <strong>6.1 mmol/L</strong> as prediabetes, like WHO, while the American Diabetes Association uses 5.6 mmol/L. So an online chart from another country may not match what your doctor tells you.</p></div>` },
      { id: 'hba1c', h: 'What is HbA1c, and what is the normal range?', tocLabel: 'HbA1c', html: `<p>HbA1c (glycated haemoglobin) shows your <strong>average blood sugar over the past 2 to 3 months</strong>, by measuring how much sugar has stuck to your red blood cells. You don’t need to fast for it, and one result isn’t thrown off by what you ate yesterday.</p>
<ul>
<li><strong>Below 5.7%:</strong> normal.</li>
<li><strong>5.7% to 6.2%:</strong> prediabetes. Your doctor may suggest an oral glucose tolerance test to check further.</li>
<li><strong>6.3% or above:</strong> diabetes, confirmed with a second test if you have no symptoms.</li>
<li><strong>If you have diabetes:</strong> the usual target is <strong>below 7.0%</strong> (see targets below).</li>
</ul>
<p>The test must be done in a laboratory using a standardised method. The quick fingerprick HbA1c machines some clinics use are fine for monitoring diabetes, but Malaysian guidelines say they shouldn’t be used to diagnose it.</p>` },
      { id: 'prediabetes', h: 'Prediabetes: the warning stage', tocLabel: 'Prediabetes', html: `<p>Prediabetes means your blood sugar is higher than normal but not yet in the diabetes range. It almost never causes symptoms, but without changes many people go on to develop type 2 diabetes.</p>
<p>The good news is that it can often be reversed. Losing 5–10% of your body weight if you are overweight, being active for at least 150 minutes a week, and cutting down on sugary drinks, white rice portions and refined snacks all lower your risk. If you have prediabetes, get your blood sugar checked <strong>every year</strong>.</p>
${figure('healthy-salad', 'A colourful bowl of fresh salad with vegetables', 'Small, lasting changes to meals and activity can bring prediabetes back to normal.')}` },
      { id: 'signs', h: 'Early signs of diabetes (tanda kencing manis)', tocLabel: 'Early signs', html: `<p>Up to half of people with diabetes have <strong>no symptoms</strong>. In Malaysia’s National Health and Morbidity Survey 2023, <strong>15.6%</strong> of adults (about 3.6 million people) had diabetes, and 5.9% didn’t know it. Among diabetics aged 18 to 29, 84% hadn’t been diagnosed. When symptoms do appear, they include:</p>
<ul>
<li>feeling very thirsty</li>
<li>passing a lot of urine, and waking up at night to urinate</li>
<li>feeling tired and lethargic</li>
<li>feeling hungry more often</li>
<li>losing weight without trying</li>
<li>itching around the vagina, or soreness and swelling at the tip of the penis, often from repeated yeast infections</li>
<li>blurred vision, cuts that heal slowly, and frequent skin or urine infections</li>
</ul>
<p>If you have these signs, see a doctor for a blood test rather than waiting. Read more in our guide to <a href="/articles/undiagnosed-diabetes-high-blood-pressure-young-adults/">undiagnosed diabetes in young adults</a>.</p>` },
      { id: 'targets', h: 'Blood sugar targets if you have diabetes', tocLabel: 'Targets with diabetes', html: `<div class="table-wrap"><table>
<thead><tr><th>Measure</th><th>Target for most adults with type 2 diabetes</th></tr></thead>
<tbody>
<tr><td>Fasting or before meals</td><td>4.4–7.0 mmol/L</td></tr>
<tr><td>After meals (at least 90 minutes after eating)</td><td>4.4–8.5 mmol/L</td></tr>
<tr><td>HbA1c</td><td>Below 7.0%</td></tr>
</tbody></table></div>
<p>Your doctor will set a target that suits you. A tighter HbA1c target of 6.5% or below may suit younger, newly diagnosed people at low risk of low sugar. A less strict target of 7.1–8.0% is safer for older people, those with serious heart or kidney disease or dementia, or those who have had severe low sugar episodes.</p>` },
      { id: 'low', h: 'Low blood sugar (hypoglycaemia)', tocLabel: 'Low blood sugar', html: `<p>For people on diabetes medicines, especially insulin or certain tablets, blood sugar can drop too low. Hypoglycaemia is a reading <strong>below 3.9 mmol/L</strong>, and below 3.0 mmol/L is more serious. Signs include shaking, sweating, a fast heartbeat, hunger, confusion and irritability.</p>
<div class="box box--pink" role="note"><span class="box__title">What to do for low sugar</span><p style="font-size:16px;line-height:1.6">Take <strong>15 g of fast-acting sugar</strong>, such as half a glass of fruit juice or regular (not diet) soft drink, or 3 teaspoons of sugar in water. Recheck after 15 minutes, and repeat until your reading is above 3.9 mmol/L, then eat a snack or meal. If someone is drowsy, confused or unconscious, don’t give food or drink by mouth: call <a href="tel:999">999</a>.</p></div>` },
      { id: 'testing', h: 'Who should get tested, and how often', tocLabel: 'Who should test', html: `<ul>
<li><strong>Everyone from age 30</strong>, and every year after that if the result is normal. This is earlier and more often than in some other countries, because diabetes is so common in Malaysia.</li>
<li><strong>At any age</strong> if your BMI is 23 or more, or your waist is 80 cm or more (women) or 90 cm or more (men), <strong>plus</strong> any risk factor: a parent, brother or sister with diabetes, high blood pressure, heart disease, low HDL or high triglycerides, PCOS, an inactive lifestyle, diabetes in a past pregnancy, or a baby born weighing 4 kg or more.</li>
<li><strong>Every year</strong> if you have prediabetes.</li>
<li><strong>Children and teenagers</strong> who are overweight and have a risk factor, from puberty or age 10.</li>
</ul>
<p>Free screening is available at Klinik Kesihatan, and through PeKa B40 if you receive STR and are 40 or over. See our guides to <a href="/articles/free-health-screening-malaysia/">free health screening</a> and <a href="/articles/peka-b40-malaysia/">PeKa B40</a>.</p>` },
      { id: 'meters', h: 'Home glucometer vs lab test', tocLabel: 'Glucometer vs lab', html: `<p>A home glucometer uses a drop of blood from your fingertip. It is very useful for monitoring diabetes day to day, but it is less precise than a laboratory test: good meters can still be about 15% out. Heat and humidity can also affect strips, so store them as instructed.</p>
<p>A fingerprick result is a <strong>screening</strong> result only. If a random fingerprick reading is <strong>7.8 mmol/L or more</strong>, or a fasting reading is <strong>5.6 mmol/L or more</strong>, Malaysian guidelines say you should have a proper blood test from a vein (fasting sugar, OGTT or HbA1c) to confirm.</p>
<p><strong>Is one test enough to diagnose diabetes?</strong> If you have symptoms, one high result from a vein blood test can be enough. If you don’t, a second abnormal result is needed, either a repeat test on another day or a glucose and HbA1c from the same sample.</p>` },
      { id: 'pregnancy', h: 'Blood sugar in pregnancy', tocLabel: 'Pregnancy', html: `<p>Diabetes can also develop during pregnancy (gestational diabetes). In Malaysia, it is diagnosed with a glucose tolerance test if the fasting level is <strong>5.1 mmol/L or more</strong> or the 2-hour level is <strong>7.8 mmol/L or more</strong>. Women with risk factors are tested at their first antenatal visit, and women aged 25 or over are tested at 24–28 weeks. HbA1c isn’t used to diagnose it. Track your key dates with our <a href="/articles/pregnancy-due-date-calculator-malaysia/">pregnancy due date calculator</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get your blood sugar checked',
    clinicsTocLabel: 'Get tested',
    clinicsIntro: 'Most GP clinics can test your blood sugar and HbA1c, often while you wait for a fingerprick result or within a day or two for a lab result. Our directory lists GP clinics and clinics offering health screening across Kuala Lumpur, Selangor and other states, including clinics on the PeKa B40 panel.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/peka-b40-clinics/', 'PeKa B40 panel clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What is a normal blood sugar level?', 'Under Malaysian guidelines, a normal fasting blood sugar is below 6.1 mmol/L, and below 7.8 mmol/L two hours after a glucose drink. A normal HbA1c is below 5.7%.'],
      ['What is the normal HbA1c range?', 'Below 5.7% is normal. 5.7% to 6.2% is prediabetes, and 6.3% or above is diabetes in Malaysia. For people with diabetes, the usual target is below 7.0%.'],
      ['Why is the HbA1c cut-off for diabetes 6.3% in Malaysia?', 'A Malaysian study found that the 6.5% cut-off used by WHO and the American Diabetes Association missed too many people with diabetes here, so the Malaysian guideline uses 6.3%.'],
      ['What blood sugar level is diabetes?', 'A fasting blood sugar of 7.0 mmol/L or more, a level of 11.1 mmol/L or more two hours after a glucose drink or at any time with symptoms, or an HbA1c of 6.3% or more. Without symptoms, a second test is needed to confirm.'],
      ['What are the early signs of diabetes (tanda kencing manis)?', 'Thirst, passing a lot of urine, waking at night to urinate, tiredness, hunger, unexplained weight loss, and itching or infections around the genitals. Many people have no symptoms, so regular testing matters.'],
      ['What blood sugar level is too low?', 'Below 3.9 mmol/L is low (hypoglycaemia), and below 3.0 mmol/L is more serious. Take 15 g of fast-acting sugar, recheck after 15 minutes, and call 999 if the person is drowsy or unconscious.'],
      ['How to convert mmol/L to mg/dL?', 'Multiply mmol/L by 18. For example, 5.5 mmol/L is about 99 mg/dL and 7.0 mmol/L is about 126 mg/dL.'],
      ['At what age should I check my blood sugar?', 'Malaysian guidelines advise testing from age 30, then yearly. Test earlier if you are overweight and have a risk factor such as a family history of diabetes or high blood pressure.'],
    ],
    sources: [
      ['Ministry of Health Malaysia et al. — Clinical Practice Guidelines: Management of Type 2 Diabetes Mellitus, 6th edition (2020)', 'https://mems.my/wp-content/uploads/2021/03/CPG-T2DM_6th-Edition-2020_210226.pdf'],
      ['Ministry of Health Malaysia — Clinical Practice Guidelines: Management of Diabetes in Pregnancy (2017)', 'https://mymahtas2.moh.gov.my/files/CPG%20Management%20of%20Diabetes%20in%20Pregnancy%20(1).pdf'],
      ['Institute for Public Health — National Health and Morbidity Survey 2023: NCD research highlights (2024)', 'https://moh-idepository.nih.gov.my/uploadbahan/NCD.pdf'],
      ['CodeBlue — Over two million adults in Malaysia live with three NCDs: NHMS 2023 (28 May 2024)', 'https://codeblue.galencentre.org/2024/05/over-two-million-adults-in-malaysia-live-with-three-ncds-nhms-2023/'],
      ['PubMed Central — Blood glucose meter accuracy and the ISO 15197 standard', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5951056'],
      ['American Diabetes Association — Standards of Care in Diabetes 2026: Diagnosis and classification', 'https://doi.org/10.2337/dc26-S002'],
      ['NHS — Diabetes symptoms', 'https://www.nhs.uk/conditions/diabetes/'],
    ],
    related: ['world-diabetes-day-2026-kl', 'undiagnosed-diabetes-high-blood-pressure-young-adults', 'peka-b40-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'fomema-medical-check-up',
    title: 'FOMEMA medical check-up: tests, fees, results and appeals explained',
    crumb: 'FOMEMA check-up',
    desc: 'The FOMEMA medical examination for foreign workers in Malaysia: who needs it, what is tested, 2026 fees with SST, how to check results online, and how appeals work.',
    excerpt: 'Every foreign worker and domestic helper in Peninsular Malaysia must pass a FOMEMA medical examination, now every year. What it tests, how much it costs in 2026, how employers check results, what “unsuitable” means, and how appeals work.',
    standfirst: 'FOMEMA is the compulsory medical examination for foreign workers and domestic helpers in Peninsular Malaysia and Labuan. Since December 2023 it is needed every year, and it now includes more tests. Here is what employers and workers need to know about the exam, the fees, the results and appeals.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: false,
    about: ['FOMEMA', 'Foreign worker medical examination'],
    image: 'doctor-notes', imageAlt: 'A doctor in blue gloves writing notes on a clipboard',
    keyPoints: [
      'FOMEMA examines blue-collar foreign workers (PLKS permit holders) and foreign domestic helpers. Expatriates and international students use different systems.',
      'Since 16 December 2023, every foreign worker must pass the exam every year, before each permit renewal.',
      'The exam includes a medical history, physical examination, chest X-ray, blood tests (including HIV, hepatitis B and C, syphilis and malaria) and urine tests for drugs and pregnancy.',
      'From 25 May 2026 the fee is RM226.56 for men and RM237.36 for women, including 8% SST and a RM3 convenience fee. The employer registers and pays.',
      'Results go to Immigration within about 7 working days. Employers check them on the FOMEMA portal. Some unsuitable results can be appealed within 2 weeks.',
    ],
    sections: [
      { id: 'what', h: 'What is FOMEMA?', tocLabel: 'What FOMEMA is', html: `<p><strong>FOMEMA</strong> is the company appointed by the Government in 1997 to run the compulsory health screening of legal foreign workers, under the supervision of the Ministry of Health. The aim is to make sure workers are fit to work and to stop infectious diseases, such as tuberculosis, from spreading.</p>
<p>FOMEMA covers <strong>Peninsular Malaysia and Labuan</strong>, through about 3,100 panel clinics and 140 laboratories. Foreign worker applications in Sabah and Sarawak are handled under those states’ own arrangements, so check with the state Immigration office there.</p>
<p>Its official website is now <a href="https://fomema2u.com.my/" target="_blank" rel="noopener">fomema2u.com.my</a>, and employers use the <a href="https://portal.fomema.my/" target="_blank" rel="noopener">FOMEMA portal</a> to register workers and see results.</p>` },
      { id: 'who', h: 'Who needs a FOMEMA check-up, and when', tocLabel: 'Who needs it', html: `<ul>
<li><strong>Foreign workers</strong> on a Temporary Employment Visit Pass (PLKS), in sectors such as manufacturing, construction, plantations, agriculture and services.</li>
<li><strong>Foreign domestic helpers.</strong></li>
<li><strong>Not</strong> expatriates on employment passes, and <strong>not</strong> international students, who have a separate medical screening through Education Malaysia Global Services (EMGS).</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>When</th><th>What is needed</th></tr></thead>
<tbody>
<tr><td>Before coming to Malaysia</td><td>A pre-departure medical exam in the worker’s home country</td></tr>
<tr><td>After arrival</td><td>The employer registers the worker with FOMEMA promptly (FOMEMA asks within 72 hours), and the exam must be done within 30 days</td></tr>
<tr><td>Every year</td><td>A FOMEMA exam before each permit renewal. Employers can register up to 3 months before the permit expires</td></tr>
</tbody></table></div>
<p>Before December 2023, workers were examined yearly for the first 3 years and then every other year. Since <strong>16 December 2023</strong>, the exam is needed <strong>every year</strong> for all foreign workers. Since 7 September 2026, employers must also confirm the worker’s accommodation address before registration can go ahead.</p>` },
      { id: 'tests', h: 'What the FOMEMA medical examination tests', tocLabel: 'What is tested', html: `<ul>
<li><strong>Medical history and physical examination</strong> by a FOMEMA panel doctor, including blood pressure.</li>
<li><strong>Chest X-ray</strong>, mainly to look for tuberculosis (TB).</li>
<li><strong>Blood tests</strong> for HIV, hepatitis B, syphilis and malaria, and blood group. <strong>Hepatitis C</strong> and <strong>filariasis</strong> were added in December 2023.</li>
<li><strong>Urine tests</strong> for drugs (including opiates and cannabis, with <strong>methamphetamine</strong> added in December 2023), pregnancy in women, and sugar and protein.</li>
</ul>
<p>Conditions that can make a worker <strong>unsuitable</strong> include infectious diseases such as TB (including old TB that could become active again), hepatitis B and C, HIV, syphilis, malaria, filariasis and leprosy, as well as cancer, epilepsy, serious psychiatric illness, drug use and pregnancy. Chronic conditions such as high blood pressure, diabetes, heart disease, asthma and kidney disease may also lead to an unsuitable result, or to a monitoring programme.</p>
<p>According to FOMEMA figures cited by the Malaysian Medical Association, in 2023 the screening detected more than 6,400 cases of TB and more than 3,300 cases of hepatitis B among foreign workers, which is why the checks matter for public health. See our guide to a <a href="/articles/persistent-cough-malaysia/">cough that won’t go away</a> for the signs of TB.</p>
${figure('blood-sample', 'A gloved hand holding a blood sample tube', 'Blood tests in the FOMEMA exam include HIV, hepatitis B and C, syphilis and malaria.')}` },
      { id: 'fees', h: 'FOMEMA fees in 2026', tocLabel: 'Fees', html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Male worker</th><th>Female worker</th></tr></thead>
<tbody>
<tr><td>Examination fee</td><td>RM207.00</td><td>RM217.00</td></tr>
<tr><td>8% SST</td><td>RM16.56</td><td>RM17.36</td></tr>
<tr><td>Convenience fee</td><td>RM3.00</td><td>RM3.00</td></tr>
<tr><td><strong>Total</strong></td><td><strong>RM226.56</strong></td><td><strong>RM237.36</strong></td></tr>
</tbody></table></div>
<p>The fees went up from RM190 (male) and RM207 (female) on 16 December 2023, when the new tests were added, and SST was added from <strong>25 May 2026</strong>. If a registration is cancelled, RM29.16 (RM27 plus SST) is kept and the rest refunded. These fees apply in Peninsular Malaysia and Labuan.</p>
<p>The employer registers the worker and pays the fee through the FOMEMA portal.</p>` },
      { id: 'process', h: 'Step by step: from registration to results', tocLabel: 'Step by step', html: `<ol>
<li><strong>Register and pay:</strong> the employer, or a registered agency, registers the worker on the FOMEMA portal and pays the fee.</li>
<li><strong>Choose a clinic:</strong> the employer picks a FOMEMA panel clinic. Find one on the <a href="https://fomema2u.com.my/" target="_blank" rel="noopener">FOMEMA website</a> under “Find Your Nearest Clinic”, or in our directory below.</li>
<li><strong>Attend the exam:</strong> the worker brings their passport and registration details. The clinic does the examination and takes blood and urine samples. The chest X-ray is done at a FOMEMA-registered X-ray facility, which may be at the same clinic.</li>
<li><strong>Certification:</strong> the results are reviewed and sent electronically to the Immigration Department, usually within <strong>7 working days</strong>.</li>
</ol>
<p>A FOMEMA result is valid for <strong>180 days</strong>.</p>` },
      { id: 'results', h: 'How to check FOMEMA results online', tocLabel: 'Check results', html: `<p>Results are checked by the <strong>employer</strong>:</p>
<ol>
<li>Log in to the <a href="https://portal.fomema.my/" target="_blank" rel="noopener">FOMEMA portal</a>.</li>
<li>Open <strong>“Medical Result”</strong>.</li>
<li>Search by worker code or passport number (up to 10 workers at a time).</li>
</ol>
<p>The result shows <strong>Suitable</strong> or <strong>Unsuitable</strong>. For an unsuitable result, the “Reason” column explains why, and the employer can print an unsuitable letter. There is no official public search for workers, so be careful of unofficial websites asking for passport numbers.</p>` },
      { id: 'appeal', h: 'Unsuitable results and appeals', tocLabel: 'Appeals', html: `<p>If a worker is found <strong>unsuitable</strong>, they can’t continue working in Malaysia. The employer must apply to the Immigration Department for a Check Out Memo and send the worker home.</p>
<p>Some results can be appealed. FOMEMA emails the employer if a case is appealable:</p>
<ul>
<li>Register the appeal on the FOMEMA portal <strong>within 2 weeks</strong> of certification, and submit any extra test results within 4 weeks, or the case is closed.</li>
<li>An appeal committee meets weekly. The process takes about 30 days from payment.</li>
<li>Some chronic conditions, such as diabetes or high blood pressure, can be cleared under a <strong>6-month monitoring programme</strong>. Workers who decline monitoring or miss the final check must be repatriated.</li>
<li>Since <strong>20 July 2026</strong>, syphilis can be appealed, with treatment and a 6-month monitoring programme.</li>
</ul>
<p><strong>Not appealable:</strong> TB confirmed on chest X-ray, malaria, pregnancy, HIV and hepatitis B. A mismatched blood group needs a new registration rather than an appeal.</p>` },
      { id: 'tips', h: 'Tips for employers and workers', tocLabel: 'Tips', html: `<ul>
<li>Register early: up to 3 months before the permit expires, so there is time for an appeal if needed.</li>
<li>Make sure the worker’s passport details match the registration exactly.</li>
<li>Tell the doctor about any medicines the worker takes, and bring records of known conditions such as diabetes or high blood pressure.</li>
<li>Workers with a long cough, fever, night sweats or weight loss should see a doctor before the exam, as TB is treatable.</li>
<li>Only use the official FOMEMA website and portal, and never pay anyone who offers to “guarantee” a result.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a FOMEMA panel clinic',
    clinicsTocLabel: 'FOMEMA clinics',
    clinicsIntro: 'Our directory lists clinics that are on the FOMEMA panel, including clinics with FOMEMA X-ray facilities, with opening hours and directions. Panels can change, so check the clinic on the official FOMEMA website before you register.',
    clinicLinks: [['/clinics/fomema-clinics/', 'FOMEMA panel clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['What is FOMEMA?', 'FOMEMA is the company appointed by the Government to run the compulsory medical examination of foreign workers and domestic helpers in Peninsular Malaysia and Labuan, under the supervision of the Ministry of Health.'],
      ['How much is the FOMEMA fee in 2026?', 'From 25 May 2026, RM226.56 for a male worker and RM237.36 for a female worker, including the exam fee (RM207 or RM217), 8% SST and a RM3 convenience fee.'],
      ['How often is the FOMEMA check-up needed?', 'Every year. Since 16 December 2023, all foreign workers must pass a FOMEMA exam before each permit renewal, as well as within 30 days of arriving in Malaysia.'],
      ['What does FOMEMA test for?', 'A medical history, physical examination, chest X-ray, blood tests for HIV, hepatitis B and C, syphilis, malaria and filariasis, and urine tests for drugs, pregnancy, sugar and protein.'],
      ['How do I check FOMEMA results online?', 'The employer logs in to the FOMEMA portal, opens “Medical Result” and searches by worker code or passport number. Results usually reach Immigration within 7 working days.'],
      ['Can an unsuitable FOMEMA result be appealed?', 'Some can. If FOMEMA says the case is appealable, register the appeal on the portal within 2 weeks of certification. TB confirmed on X-ray, malaria, pregnancy, HIV and hepatitis B can’t be appealed.'],
      ['How long is a FOMEMA result valid?', '180 days.'],
      ['Do international students need FOMEMA?', 'No. International students have a separate medical screening through Education Malaysia Global Services (EMGS) at EMGS panel clinics.'],
    ],
    sources: [
      ['FOMEMA — Foreign worker’s medical examination FAQ', 'https://fomema2u.com.my/employer-agency/frequent-asked-questions-and-forms/foreign-workers-medical-examination/'],
      ['FOMEMA — SST implementation (May 2026)', 'https://fomema2u.com.my/employer-agency/frequent-asked-questions-and-forms/sst-implementation/'],
      ['FOMEMA — Appeal process and monitoring programmes FAQ', 'https://fomema2u.com.my/employer-agency/frequent-asked-questions-and-forms/fomema-appeal-process-monitoring-programmes/'],
      ['FOMEMA — Guidelines', 'https://fomema2u.com.my/employer-agency/guidelines/'],
      ['Immigration Department of Malaysia — Foreign worker', 'https://www.imi.gov.my/index.php/en/main-services/foreign-worker/'],
      ['Immigration Department of Malaysia — Foreign domestic helper', 'https://www.imi.gov.my/index.php/en/main-services/foreign-domestic-helper-fdh/'],
      ['New Straits Times — FOMEMA annual screening and new tests from Dec 16 (Dec 2023)', 'https://www.nst.com.my/news/nation/2023/12/994917/'],
      ['The Star — Unmasking hidden health hazards with annual tests (16 May 2024)', 'https://www.thestar.com.my/news/nation/2024/05/16/unmasking-hidden-health-hazards-with-annual-tests'],
      ['The Star — Foreign worker registration to get new address check (5 Sep 2026)', 'https://www.thestar.com.my/news/nation/2026/09/05/foreign-worker-registration-to-get-new-address-check'],
      ['CodeBlue — MMA on additional foreign worker medical screening (30 Jan 2024)', 'https://codeblue.galencentre.org/2024/01/additional-foreign-worker-medical-screening-necessary-to-protect-the-population-against-import-of-communicable-diseases-mma/'],
      ['EMGS — Medical screening for international students', 'https://visa.educationmalaysia.gov.my/guidelines/medical-screening'],
    ],
    related: ['persistent-cough-malaysia', 'free-health-screening-malaysia', 'hiv-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'psoriasis-malaysia',
    title: 'Psoriasis: symptoms, scalp psoriasis, triggers and treatment in Malaysia',
    crumb: 'Psoriasis',
    desc: 'What psoriasis looks like, scalp psoriasis vs dandruff, psoriasis vs kurap, triggers, psoriatic arthritis, and treatment in Malaysia from creams to biologics.',
    excerpt: 'Thick, scaly patches that keep coming back may be psoriasis. How to recognise it (including on the scalp and nails), how it differs from dandruff and kurap, what makes it flare, and the treatments available in Malaysia.',
    standfirst: 'Psoriasis is a long-term immune condition that causes thick, scaly patches of skin, most often on the scalp, elbows, knees and lower back. It isn’t contagious, and while there is no cure, today’s treatments can clear the skin for most people. Here is how to recognise it and how it is treated in Malaysia.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Psoriasis', 'Psoriatic arthritis'],
    image: 'medic-stethoscope', imageAlt: 'A doctor in blue scrubs and safety glasses holding a stethoscope',
    keyPoints: [
      'Psoriasis is an immune-mediated skin disease, not an infection. You can’t catch it or pass it on by touch.',
      'Plaque psoriasis, with thick, well-defined, scaly patches, accounts for 80–90% of cases. On brown skin, plaques often look dark brown, purple or grey rather than red.',
      'Stress, infections such as strep throat, smoking, alcohol, weight gain, skin injury and some medicines can trigger flares.',
      'About 1 in 5 people with psoriasis develop psoriatic arthritis. See a doctor about swollen joints, a “sausage” finger or toe, or morning stiffness.',
      'Treatment goes step by step: moisturisers and creams, then light therapy, then tablets or injections. Biologic injections are given in government dermatology clinics.',
    ],
    sections: [
      { id: 'what', h: 'What is psoriasis?', tocLabel: 'What psoriasis is', html: `<p>Psoriasis is a <strong>chronic, immune-mediated inflammatory disease</strong> that mainly affects the skin and joints. An overactive immune system speeds up the growth of skin cells, which build up into thick, scaly patches called plaques. It runs in families, and usually comes and goes in flares throughout life.</p>
<p>It is <strong>not contagious</strong>. You can’t catch psoriasis from touching someone, sharing a towel or swimming in the same pool.</p>
<p>In Malaysia, a study of primary care records in Johor Bahru, quoted in the Ministry of Health’s 2024 psoriasis guideline, found that about <strong>3 in every 1,000 people</strong> (0.34%) have psoriasis, with higher rates among Indians (0.54%) than Malays (0.38%) and Chinese (0.29%). The Malaysian Psoriasis Registry, which follows more than 8,800 patients, shows symptoms typically start in the <strong>30s</strong>, with a second peak in the 60s. Children can get it too. About 1 in 4 patients has a family member with psoriasis.</p>` },
      { id: 'symptoms', h: 'Symptoms: what psoriasis looks like', tocLabel: 'Symptoms', html: `<ul>
<li><strong>Thick, raised, scaly plaques</strong> with sharp edges, often on both sides of the body, on the scalp, elbows, knees, lower back and buttock crease.</li>
<li><strong>Colour depends on skin tone.</strong> On lighter skin, plaques look pink or red with silvery-white scale. On brown skin, they often look <strong>dark brown, purple or greyish</strong>, and can leave dark or light marks for 3 to 12 months after they clear.</li>
<li><strong>Itch:</strong> more than 3 in 4 Malaysian patients in the registry report itching.</li>
<li><strong>Nail changes:</strong> small pits on the nails, or nails lifting away from the nail bed. More than half of Malaysian adults with psoriasis have nail involvement.</li>
</ul>
<p><strong>Types of psoriasis:</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>What it looks like</th></tr></thead>
<tbody>
<tr><td>Plaque (the most common, 80–90%)</td><td>Thick, scaly, well-defined patches on the scalp, elbows, knees and back</td></tr>
<tr><td>Guttate</td><td>Many small, drop-shaped spots, often appearing suddenly in children and young adults after a strep throat infection</td></tr>
<tr><td>Inverse (flexural)</td><td>Smooth, shiny patches without much scale in skin folds: armpits, groin, under the breasts</td></tr>
<tr><td>Pustular</td><td>Pus-filled spots that aren’t infected, on the palms and soles or, rarely, all over the body</td></tr>
<tr><td>Erythrodermic</td><td>Rare: red, inflamed skin over most of the body. This is an emergency</td></tr>
</tbody></table></div>` },
      { id: 'scalp', h: 'Scalp psoriasis or dandruff?', tocLabel: 'Scalp psoriasis', html: `<p>About 1 in 3 Malaysian adults with psoriasis have it on the scalp, face or genitals. Scalp psoriasis is often mistaken for dandruff (seborrhoeic dermatitis), and the two can occur together.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Scalp psoriasis</th><th>Dandruff / seborrhoeic dermatitis</th></tr></thead>
<tbody>
<tr><td>Scale</td><td>Thick, dry, silvery, stuck on</td><td>Greasy, yellowish, flakes off easily</td></tr>
<tr><td>Edges</td><td>Sharp, raised plaques</td><td>Less defined</td></tr>
<tr><td>Spread</td><td>Often goes past the hairline onto the forehead, neck or behind the ears</td><td>Usually stays within the scalp, eyebrows and sides of the nose</td></tr>
<tr><td>Elsewhere</td><td>Often plaques on elbows, knees or nails too</td><td>Usually no plaques elsewhere</td></tr>
</tbody></table></div>
<p>Medicated scalp gels, coal tar shampoos and combination steroid and vitamin D gels prescribed by a doctor work better than ordinary anti-dandruff shampoo for scalp psoriasis. Don’t pick or scratch off the scale, as injuring the skin can make psoriasis worse.</p>` },
      { id: 'look-alikes', h: 'Psoriasis, kurap (ringworm) or eczema?', tocLabel: 'Psoriasis or kurap?', html: `<ul>
<li><strong>Kurap (ringworm, tinea)</strong> is a fungal infection. It usually forms an itchy ring with a clearer centre and a scaly, spreading edge, and is often on one side of the body. A doctor can confirm it by looking at a skin scraping under a microscope.</li>
<li><strong>Eczema</strong> tends to have less sharply defined edges, often appears in the inner elbows and behind the knees, and is usually itchier. Psoriasis plaques are thicker and more often on the outer elbows and knees. See our guide to <a href="/articles/itchy-skin-eczema-hives-malaysia/">itchy skin, eczema and hives</a>.</li>
</ul>
<div class="box box--pink" role="note"><span class="box__title">Be careful with steroid creams and “miracle” creams</span><p style="font-size:16px;line-height:1.6">Steroid creams used on a fungal infection can hide it and help it spread, so get a diagnosis before treating a rash for weeks. Avoid unregistered creams sold online or at markets: the Ministry of Health has found steroids such as betamethasone hidden in some cosmetics, which can thin and damage the skin. Check that a product is registered on the <a href="https://www.npra.gov.my/" target="_blank" rel="noopener">NPRA website</a> or the NPRA Product Status app.</p></div>` },
      { id: 'triggers', h: 'What triggers psoriasis flares?', tocLabel: 'Triggers', html: `<ul>
<li><strong>Stress:</strong> the most common trigger reported by Malaysian patients (about 2 in 3).</li>
<li><strong>Infections:</strong> especially strep throat, which can set off guttate psoriasis. See our guide to <a href="/articles/persistent-cough-malaysia/">coughs and chest infections</a>.</li>
<li><strong>Skin injury:</strong> cuts, scratches, insect bites or sunburn can cause new plaques at the injured spot (the Koebner phenomenon).</li>
<li><strong>Smoking, alcohol and weight gain.</strong></li>
<li><strong>Some medicines:</strong> including certain blood pressure tablets (beta-blockers and ACE inhibitors), lithium, antimalarials, some anti-inflammatory painkillers (NSAIDs), and stopping oral steroids suddenly. Never stop a prescribed medicine on your own; ask your doctor whether it could be a trigger.</li>
</ul>
<p>Some sunlight often helps psoriasis, but about 3 in 10 Malaysian patients say <strong>too much sun</strong> makes it worse. Avoid sunburn.</p>` },
      { id: 'arthritis', h: 'Psoriatic arthritis: check your joints', tocLabel: 'Psoriatic arthritis', html: `<p>About <strong>1 in 5 people</strong> with psoriasis develop psoriatic arthritis (19% in the Malaysian registry), and many cases go undiagnosed. In most Malaysian patients, the skin problem comes first and the joints later. Untreated, it can permanently damage joints, so the Ministry of Health guideline recommends checking for it at least once a year.</p>
<p>See a doctor if you have:</p>
<ul>
<li>painful, swollen joints, especially in the fingers and toes</li>
<li>a whole finger or toe swollen like a sausage (dactylitis)</li>
<li>pain where tendons attach to bone, such as the back of the heel</li>
<li>back pain and stiffness that is worse in the morning and better with movement, or morning stiffness lasting more than 30 minutes</li>
</ul>` },
      { id: 'health', h: 'Psoriasis, your heart, weight and mood', tocLabel: 'Linked conditions', html: `<p>Psoriasis isn’t only skin deep. The inflammation affects the whole body, and people with psoriasis, especially moderate to severe psoriasis, have a higher risk of heart attack and stroke. Among Malaysian adults in the psoriasis registry:</p>
<ul>
<li><strong>63%</strong> were overweight or obese</li>
<li><strong>29%</strong> had high blood pressure</li>
<li><strong>23%</strong> had high cholesterol</li>
<li><strong>19%</strong> had diabetes</li>
</ul>
<p>It is worth having your blood pressure, cholesterol and blood sugar checked regularly. See our guides to <a href="/articles/blood-pressure-cholesterol-malaysia/">blood pressure and cholesterol</a> and <a href="/articles/normal-blood-sugar-level-malaysia/">normal blood sugar levels</a>. Psoriasis is also linked to depression and anxiety, and more than 1 in 3 Malaysian patients say it has a very large effect on their quality of life. If it is getting you down, tell your doctor. See our guide to <a href="/articles/anxiety-malaysia/">anxiety</a>.</p>` },
      { id: 'treatment', h: 'Psoriasis treatment in Malaysia', tocLabel: 'Treatment', html: `<p>The Ministry of Health’s guideline, <em>Management of Psoriasis</em> (2nd edition, 2024), sets out treatment step by step. The aim is clear or almost clear skin (less than 3% of the body affected) and little effect on daily life within 12 to 16 weeks.</p>
<ol>
<li><strong>Moisturisers every day</strong>, to soften scale and reduce itch.</li>
<li><strong>Creams and ointments</strong> for mild psoriasis: steroid creams are first-line. Doctors may add a vitamin D cream (calcipotriol, alone or combined with a steroid), coal tar, salicylic acid to lift scale, or dithranol for stubborn plaques. Gentler non-steroid creams are used on the face and skin folds.</li>
<li><strong>Light therapy (narrowband UVB phototherapy)</strong> for more widespread psoriasis, given 2 to 3 times a week at hospital dermatology units. It is not available at every centre.</li>
<li><strong>Tablets</strong> such as methotrexate (the most commonly used), acitretin or ciclosporin, for moderate to severe psoriasis. They need regular blood tests. Acitretin must not be taken by women who may become pregnant without reliable contraception.</li>
<li><strong>Biologic injections and newer oral treatments</strong>, which target specific parts of the immune system, for severe psoriasis or when other treatments haven’t worked. Biologics are given in government dermatology clinics. Cost is a barrier, and funding can come from sources such as the civil service scheme for government staff, hospital funds or medical aid funds.</li>
</ol>
<p>Psoriasis is considered moderate to severe if it covers more than 10% of your body (your palm and fingers are about 1%), affects the face, scalp, palms, soles or genitals, or seriously affects your daily life. In those cases, you may need light therapy, tablets or injections rather than creams alone.</p>
${figure('treatment-room', 'A clean, white clinic treatment room with an examination couch', 'Most mild psoriasis can be managed by a GP. Widespread or stubborn psoriasis is referred to a hospital dermatology clinic.')}` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<ul>
<li>You have a scaly rash that hasn’t gone away, and you aren’t sure what it is.</li>
<li>Your psoriasis isn’t improving after 12 weeks of creams, or covers a large area.</li>
<li>It affects your face, scalp, hands, feet or genitals, or is affecting your sleep, work or mood.</li>
<li>You have joint pain, swelling or morning stiffness.</li>
</ul>
<p>A GP or Klinik Kesihatan can diagnose and treat most mild psoriasis, check for related conditions, and refer you to a government hospital dermatology clinic if you need specialist care.</p>
<div class="box box--pink" role="note"><span class="box__title">Get urgent medical help</span><p style="font-size:16px;line-height:1.6">Go to a hospital emergency department if your skin suddenly becomes red and inflamed over most of your body, or you develop widespread pus-filled spots with fever, chills or feeling very unwell. These rare forms of psoriasis can be dangerous.</p></div>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor about psoriasis',
    clinicsTocLabel: 'See a doctor',
    clinicsIntro: 'A GP is a good first step for a rash that keeps coming back. They can confirm whether it is psoriasis, start treatment, check your blood pressure, sugar and cholesterol, and refer you to a dermatologist if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open in the evening and at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['Is psoriasis contagious?', 'No. Psoriasis is caused by the immune system, not an infection. You can’t catch it or pass it to others by touch, sharing towels or swimming.'],
      ['Can psoriasis be cured?', 'There is no cure yet, but treatment can clear or nearly clear the skin for most people. Psoriasis tends to come and go, so many people need ongoing or repeated treatment.'],
      ['How do I know if it is scalp psoriasis or dandruff?', 'Scalp psoriasis has thick, dry, silvery scale with sharp edges that often spreads past the hairline, and there are often plaques elsewhere on the body. Dandruff has greasy, yellowish flakes that come off easily.'],
      ['Is it psoriasis or kurap (ringworm)?', 'Kurap is a fungal infection that usually forms an itchy ring with a clearer centre and a spreading edge. Psoriasis plaques are thick and scaly throughout, often on both elbows or knees. A doctor can check a skin scraping to be sure.'],
      ['What triggers psoriasis?', 'Common triggers include stress, infections such as strep throat, skin injury, smoking, alcohol, weight gain and some medicines, including certain blood pressure tablets and lithium.'],
      ['What is psoriatic arthritis?', 'It is joint inflammation linked to psoriasis, affecting about 1 in 5 people with psoriasis. Signs include swollen, painful joints, a swollen “sausage” finger or toe, heel pain and morning stiffness. See a doctor early to prevent joint damage.'],
      ['Are biologic injections available in Malaysia?', 'Yes. Several biologics and newer oral treatments are used in Malaysia, including in government dermatology clinics, for severe psoriasis or when other treatments haven’t worked.'],
    ],
    sources: [
      ['Ministry of Health Malaysia (MaHTAS) — Clinical Practice Guidelines: Management of Psoriasis, 2nd edition (2024)', 'https://mymahtas2.moh.gov.my/files/e-CPG%20Psoriasis2024_Merge-1_8_25.pdf'],
      ['Dermatological Society of Malaysia — Twelfth Report of the Malaysian Psoriasis Registry 2020–2022 (2024)', 'https://dermatology.org.my/DermReg/AnnualReports/12th-MPR-Report.pdf'],
      ['American Academy of Dermatology — Psoriasis: causes', 'https://www.aad.org/public/diseases/psoriasis/what/causes'],
      ['American Academy of Dermatology — Psoriasis in skin of colour', 'https://www.aad.org/public/diseases/psoriasis/treatment/could-have/skin-color'],
      ['Mayo Clinic — Scalp psoriasis vs seborrhoeic dermatitis', 'https://www.mayoclinic.org/diseases-conditions/Psoriasis/expert-answers/scalp-Psoriasis/faq-20058544'],
      ['DermNet — Tinea corporis', 'https://dermnetnz.org/topics/tinea-corporis-pathology'],
      ['NPRA — Press release on a cosmetic product containing betamethasone (June 2023)', 'https://npra.gov.my/easyarticles/images/users/1052/2023%20Jun/06-2023.pdf'],
    ],
    related: ['itchy-skin-eczema-hives-malaysia', 'acne-malaysia', 'blood-pressure-cholesterol-malaysia'],
  },
];
