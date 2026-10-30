// Articles published 29 October 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-10-29';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const OCT_2026_E = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'pregnancy-due-date-calculator-malaysia',
    title: 'Pregnancy due date calculator and week-by-week guide for Malaysia',
    crumb: 'Pregnancy due date calculator',
    desc: 'Work out your due date and how many weeks pregnant you are (kiraan minggu hamil), plus antenatal check-ups in Malaysia, warning signs and ectopic pregnancy.',
    excerpt: 'Find your due date and how many weeks pregnant you are, then see what happens at each stage of pregnancy in Malaysia: antenatal check-ups, tests, vaccines and the warning signs to know.',
    standfirst: 'Use the calculator to find your estimated due date and how many weeks pregnant you are. Then read on for what happens at each stage of pregnancy in Malaysia: when to book your first check-up, which tests and vaccines you’ll be offered, and the warning signs that need a doctor straight away.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Pregnancy', 'Kehamilan'],
    image: 'mother-child', imageAlt: 'A mother and daughter sitting together',
    ld: [{ '@type': 'WebApplication', name: 'Pregnancy due date calculator', url: 'https://healthcaredirectory.my/articles/pregnancy-due-date-calculator-malaysia/#calculator', applicationCategory: 'HealthApplication', operatingSystem: 'Any', isAccessibleForFree: true, inLanguage: 'en-MY', offers: { '@type': 'Offer', price: 0, priceCurrency: 'MYR' } }],
    keyPoints: [
      'Your due date is usually worked out as 40 weeks (280 days) from the first day of your last period. An early pregnancy scan gives a more accurate date.',
      'A pregnancy is full term from 39 weeks. Babies born between 37 and 42 weeks are not considered premature or overdue.',
      'Book your first antenatal check-up at a Klinik Kesihatan as soon as you can, ideally before 12 weeks, and bring your pink antenatal book to every visit.',
      'Take folic acid (400 mcg a day) from before pregnancy until at least 12 weeks. The whooping cough (Tdap) jab is free at government clinics at 28 to 32 weeks.',
      'One-sided tummy pain with bleeding or dizziness in early pregnancy can mean an ectopic pregnancy. Get urgent help.',
    ],
    sections: [
      { id: 'calculator', h: 'Due date calculator', tocLabel: 'Calculator', html: `<p>Enter the first day of your last period and your usual cycle length. The calculator shows your estimated due date, how many weeks pregnant you are, and when key check-ups fall.</p>
{{calc:due-date}}` },
      { id: 'how', h: 'How your due date is worked out', tocLabel: 'How it’s worked out', html: `<ul>
<li><strong>From your last period:</strong> the standard method counts <strong>280 days (40 weeks)</strong> from the first day of your last menstrual period. This assumes a 28-day cycle, with ovulation around day 14. If your cycles are usually longer or shorter, the calculator shifts the date by the difference.</li>
<li><strong>From an early scan:</strong> an ultrasound in the first trimester, which measures the baby, is more accurate. If it differs from the date based on your period by more than about a week, doctors usually go by the scan. The Ministry of Health’s perinatal manual says scan dates should be set before 22 weeks.</li>
<li><strong>After IVF:</strong> the due date is set from the embryo transfer date: 261 days after a 5-day embryo transfer, or 263 days after a 3-day transfer.</li>
</ul>
<p>A due date is an estimate. Pregnancy normally lasts between 37 and 42 weeks, and few babies arrive on the exact day.</p>
<div class="table-wrap"><table>
<thead><tr><th>Weeks of pregnancy</th><th>What it’s called</th></tr></thead>
<tbody>
<tr><td>Before 37 weeks</td><td>Preterm (premature)</td></tr>
<tr><td>37 weeks to 38 weeks 6 days</td><td>Early term</td></tr>
<tr><td>39 weeks to 40 weeks 6 days</td><td>Full term</td></tr>
<tr><td>41 weeks to 41 weeks 6 days</td><td>Late term</td></tr>
<tr><td>42 weeks or more</td><td>Post-term</td></tr>
</tbody></table></div>
<p>If your periods are irregular, you stopped the contraceptive pill recently, or you aren’t sure of the date, your doctor will arrange a dating scan.</p>` },
      { id: 'week-by-week', h: 'Pregnancy week by week in Malaysia', tocLabel: 'Week by week', html: `<div class="table-wrap"><table>
<thead><tr><th>Stage</th><th>What usually happens</th></tr></thead>
<tbody>
<tr><td><strong>First trimester</strong><br>up to 12 weeks</td><td>Early signs such as a missed period, nausea and tiredness. Book your first antenatal check-up before 12 weeks. Booking blood and urine tests, and a dating scan if needed. Folic acid and iron.</td></tr>
<tr><td><strong>Second trimester</strong><br>13 to 27 weeks</td><td>Nausea often eases. Check-ups at around 16–20 and 24–26 weeks. A mid-pregnancy scan. A glucose tolerance test at 24–26 weeks if you are at risk of diabetes in pregnancy. You may start to feel the baby move.</td></tr>
<tr><td><strong>Third trimester</strong><br>28 weeks onwards</td><td>More frequent check-ups. Start counting your baby’s kicks from 28 weeks. The free whooping cough (Tdap) vaccine at 28–32 weeks. Plan where you will give birth.</td></tr>
<tr><td><strong>37 to 42 weeks</strong></td><td>Your baby can arrive any time. Weekly check-ups in a first pregnancy. Know the signs of labour, and when to go to hospital.</td></tr>
</tbody></table></div>
${figure('nurse-stethoscope', 'A doctor holding a stethoscope', 'Regular antenatal check-ups pick up problems such as high blood pressure and diabetes in pregnancy early.')}` },
      { id: 'antenatal', h: 'Antenatal care in Malaysia', tocLabel: 'Antenatal care', html: `<p><strong>When and where:</strong> register at your nearest Klinik Kesihatan, or with a private doctor, <strong>as soon as possible, preferably before 12 weeks</strong>. Government clinics give you a pink antenatal record book (Buku Rekod Kesihatan Ibu). Bring it to every appointment, including private ones and when you go into labour.</p>
<p><strong>How many check-ups:</strong> under the Ministry of Health’s Perinatal Care Manual, a healthy first pregnancy has around 10 visits: before 12 weeks, at 16–20, 24–26, 28–30, 32–34 and 35–36 weeks, then weekly from 37 to 40 weeks. Later pregnancies have around 8. You will have more if you have a higher-risk pregnancy.</p>
<p><strong>Colour codes in the pink book:</strong> government clinics tag each pregnancy by risk. <strong>White</strong> means no risk factors, <strong>green</strong> is followed up by a clinic doctor, <strong>yellow</strong> needs a specialist, and <strong>red</strong> needs immediate referral to hospital.</p>
<p><strong>Tests at your first visit</strong> usually include:</p>
<ul>
<li>Blood pressure, weight and a urine test for protein and sugar</li>
<li>Haemoglobin, blood group and Rhesus type</li>
<li>Screening for syphilis and HIV, and for hepatitis B where indicated</li>
<li>Thalassaemia screening if your red blood cells are small. If you are a carrier, your husband is tested too. See our <a href="/articles/thalassaemia-screening-malaysia/">thalassaemia guide</a>.</li>
</ul>
<p><strong>Diabetes in pregnancy:</strong> you’ll be offered a glucose tolerance test if you have risk factors, such as a BMI over 27, diabetes in a close relative, a previous baby weighing 4 kg or more, or diabetes in a previous pregnancy.</p>` },
      { id: 'supplements', h: 'Folic acid, iron and vaccines', tocLabel: 'Supplements and vaccines', html: `<ul>
<li><strong>Folic acid:</strong> 400 micrograms a day, ideally from 3 months before you conceive until at least 12 weeks of pregnancy, to lower the risk of spina bifida. Women with diabetes or a previous baby with a neural tube defect need a higher 5 mg dose from their doctor.</li>
<li><strong>Iron:</strong> anaemia is common in pregnancy in Malaysia, and antenatal clinics routinely give iron supplements.</li>
<li><strong>Whooping cough (Tdap):</strong> free at Ministry of Health clinics since May 2025, given at <strong>28 to 32 weeks</strong>. It passes protection to your baby, who is too young to be vaccinated in the first weeks of life.</li>
<li><strong>Flu vaccine:</strong> recommended in pregnancy by the Ministry of Health. See our <a href="/articles/flu-vaccine-malaysia/">flu vaccine guide</a>.</li>
</ul>` },
      { id: 'early-signs', h: 'Early signs of pregnancy and when to test', tocLabel: 'Early signs', html: `<p>Common early signs, usually from 4 to 6 weeks, include a missed period, light spotting, nausea or vomiting, tiredness, sore breasts, needing to pass urine more often, and a metallic taste.</p>
<p>Home pregnancy tests are most reliable from the <strong>first day of a missed period</strong>. If you don’t know when your period is due, test at least 21 days after unprotected sex. A positive result is almost certainly correct. A negative result is less reliable, so test again a few days later if your period still hasn’t come.</p>` },
      { id: 'ectopic', h: 'Ectopic pregnancy (hamil luar rahim)', tocLabel: 'Ectopic pregnancy', html: `<p>In an ectopic pregnancy, the fertilised egg implants outside the womb, usually in a fallopian tube. It affects about 1 in 90 pregnancies and can’t continue safely. Symptoms usually appear between 4 and 12 weeks:</p>
<ul>
<li>Pain low down in the tummy, often on one side</li>
<li>Vaginal bleeding or a brown, watery discharge</li>
<li>Pain in the tip of the shoulder</li>
<li>Discomfort when passing urine or opening your bowels</li>
</ul>
<p>Risk factors include a previous ectopic pregnancy, pelvic infection, tubal surgery, IVF, becoming pregnant with a coil (IUD) in place, smoking and being over 35.</p>
<div class="box box--pink" role="note"><span class="box__title">Call 999 or go to an emergency department</span><p style="font-size:16px;line-height:1.6">Sudden, severe tummy pain with dizziness, fainting, feeling sick or looking very pale in early pregnancy can mean an ectopic pregnancy has ruptured. This is an emergency.</p></div>` },
      { id: 'warning', h: 'Warning signs later in pregnancy', tocLabel: 'Warning signs', html: `<div class="box box--pink" role="note"><span class="box__title">Contact your clinic or go to hospital straight away if you have</span><ul>
<li>Bleeding from the vagina, or fluid leaking</li>
<li>A severe headache, blurred vision or flashing lights</li>
<li>Sudden swelling of the face, hands or feet</li>
<li>Severe tummy pain, or regular tightenings before 37 weeks</li>
<li>A fever of 38°C or more, or severe vomiting</li>
<li>Your baby moving less than usual, or fewer than 10 movements in 12 hours from 28 weeks</li>
<li>A fit, or sudden breathlessness</li>
</ul></div>
<p>A fever in pregnancy can also be dengue, which needs prompt assessment. See our guide to <a href="/articles/dengue-klang-valley-first-three-days/">dengue warning signs</a>.</p>` },
      { id: 'malaysia', h: 'Pregnancy in Malaysia: the numbers', tocLabel: 'The numbers', html: `<p>Malaysia recorded <strong>396,175 live births in 2025</strong>, 4.5% fewer than in 2024, and the fertility rate fell to a record low of 1.5 children per woman, according to the Department of Statistics. Maternal deaths fell to <strong>20.4 per 100,000 live births</strong> in 2025, from 24.3 in 2024.</p>
<p>Under the Employment Act, working mothers are entitled to <strong>98 days of maternity leave</strong>, and married fathers to <strong>7 days of paid paternity leave</strong>, subject to conditions.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to start antenatal care',
    clinicsTocLabel: 'Where to start',
    clinicsIntro: 'Your nearest Klinik Kesihatan provides antenatal care and the pink antenatal book. Many private GP clinics can confirm a pregnancy, arrange early blood tests and refer you to an obstetrician. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['How do I calculate how many weeks pregnant I am? (Kiraan minggu hamil)', 'Count the weeks from the first day of your last period. You are counted as pregnant from that date, about two weeks before conception. The calculator above does this for you and adjusts for your cycle length.'],
      ['How accurate is a due date calculator?', 'It gives an estimate. Pregnancy normally lasts 37 to 42 weeks, and few babies arrive on the exact day. An ultrasound scan in early pregnancy gives a more accurate due date, and your doctor will use it if it differs from your period date.'],
      ['When should I go for my first antenatal check-up in Malaysia?', 'As soon as possible, preferably before 12 weeks. Register at your nearest Klinik Kesihatan or see a private doctor, and keep your pink antenatal book with you.'],
      ['What are the signs of an ectopic pregnancy (hamil luar rahim)?', 'Pain low in the tummy, often on one side, vaginal bleeding or brown discharge, shoulder-tip pain, and discomfort when passing urine or opening your bowels, usually between 4 and 12 weeks. Sudden severe pain with dizziness or fainting is an emergency.'],
      ['When can I take a pregnancy test?', 'Most home tests are reliable from the first day of a missed period. If you aren’t sure when your period is due, test at least 21 days after unprotected sex.'],
      ['Is the Tdap vaccine free for pregnant women in Malaysia?', 'Yes. Since May 2025, Ministry of Health clinics offer the whooping cough (Tdap) vaccine free to pregnant women at 28 to 32 weeks.'],
    ],
    sources: [
      ['Ministry of Health — Perinatal Care Manual, 4th edition (2020)', 'https://hq.moh.gov.my/bpkk/images/PERINATAL_CARE_MANUAL_4th_Edition_2020_11Mei2023.pdf'],
      ['Ministry of Health — Buku Rekod Kesihatan Ibu (antenatal record, 2020 revision)', 'https://hq.moh.gov.my/bpkk/images/3.Penerbitan/2.Orang_Awam/6.Kesihatan_Ibu/PDF/3.GARIS_PANDUAN/3_rekod_kesihatan_ibu_kik_1_b_96_pindaan_2020.pdf'],
      ['MyGOV — Health of pregnant mothers', 'https://www.malaysia.gov.my/my/topics/kesihatan-ibu-hamil'],
      ['The Star — Free Tdap vaccination for pregnant women at 28–32 weeks (27 May 2025)', 'https://www.thestar.com.my/news/nation/2025/05/27/free-tdap-vaccination-offer-to-pregnant-women-at-28-32-weeks'],
      ['MyHEALTH — Vitamins and supplements for pregnant mothers', 'http://myhealth.moh.gov.my/en/vitamins-health-supplements-pregnant-mothers/'],
      ['ACOG Committee Opinion 700 — Methods for estimating the due date (2017)', 'https://pubmed.ncbi.nlm.nih.gov/28426621/'],
      ['ACOG/SMFM Committee Opinion 579 — Definition of term pregnancy (2013)', 'https://pubmed.ncbi.nlm.nih.gov/24150030/'],
      ['NHS — Due date calculator', 'https://www.nhs.uk/pregnancy/finding-out/due-date-calculator/'],
      ['NHS — Signs and symptoms of pregnancy (Jul 2026)', 'https://www.nhs.uk/pregnancy/trying-for-a-baby/signs-and-symptoms-of-pregnancy/'],
      ['NHS — Doing a pregnancy test', 'https://www.nhs.uk/pregnancy/trying-for-a-baby/doing-a-pregnancy-test/'],
      ['NHS — Ectopic pregnancy', 'https://www.nhs.uk/conditions/ectopic-pregnancy/'],
      ['NHS — Pregnancy symptoms you need to get help for (Jun 2026)', 'https://www.nhs.uk/pregnancy/common-symptoms/pregnancy-symptoms-you-need-to-get-help-for/'],
      ['Department of Statistics Malaysia — Vital Statistics, Malaysia 2026 (15 Oct 2026)', 'https://www.dosm.gov.my/portal-main/release-content/vital-statistics-malaysia2026'],
      ['Department of Statistics Malaysia — Maternal deaths (open data)', 'https://storage.dosm.gov.my/demography/death_maternal.csv'],
      ['Skrine — Employment (Amendment) Act 2022 comes into force', 'https://www.skrine.com/insights/alerts/december-2022/employment-amendment-act-2022-comes-into-force-on'],
    ],
    related: ['baby-vaccination-schedule-malaysia', 'thalassaemia-screening-malaysia', 'flu-vaccine-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'baby-vaccination-schedule-malaysia',
    title: 'Baby and child vaccination schedule in Malaysia: what each jab is for, and what to expect',
    crumb: 'Baby vaccination schedule',
    desc: 'The National Immunisation Programme schedule from birth to 15 years, what the 6-in-1 vaccine protects against, side effects after jabs, and optional vaccines.',
    excerpt: 'Malaysia’s free childhood vaccines, age by age: what your baby gets at birth, 2, 3 and 5 months, what the 6-in-1 jab covers, normal side effects, when to call a doctor, and optional extras.',
    standfirst: 'Malaysia’s National Immunisation Programme protects children against 13 serious diseases, free at government clinics. Here is the schedule from birth to age 15, what each vaccine is for, what to expect after the jabs, and which optional vaccines private clinics offer.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Vaccination', 'Imunisasi'],
    image: 'paediatrician', imageAlt: 'A doctor listening to a baby’s chest with a stethoscope',
    keyPoints: [
      'National Immunisation Programme vaccines are free for Malaysian children at government health clinics (Klinik Kesihatan).',
      'At 2, 3 and 5 months, babies get the 6-in-1 vaccine, which protects against diphtheria, tetanus, whooping cough, polio, Hib and hepatitis B, with a booster at 18 months.',
      'Pneumococcal vaccine is given at 4 and 6 months with a booster at 15 months, and MMR at 9 and 12 months.',
      'Fever, fussiness and a sore leg for a day or two are common. Seek urgent help for a fit, a very high fever, or signs of an allergic reaction.',
      'Measles cases nearly doubled to 3,791 in 2024, and young babies died of whooping cough in 2023. Keep to the schedule, and catch up on missed doses.',
    ],
    sections: [
      { id: 'schedule', h: 'The National Immunisation Programme schedule', tocLabel: 'The schedule', html: `<p>This is the Ministry of Health schedule, as published on the government’s MyGOV portal in 2026:</p>
<div class="table-wrap"><table>
<thead><tr><th>Age</th><th>Vaccine</th><th>Protects against</th></tr></thead>
<tbody>
<tr><td>Birth</td><td>BCG; hepatitis B (within 24 hours)</td><td>Tuberculosis; hepatitis B</td></tr>
<tr><td>2 months</td><td>6-in-1 (dose 1)</td><td>Diphtheria, tetanus, whooping cough, polio, Hib, hepatitis B</td></tr>
<tr><td>3 months</td><td>6-in-1 (dose 2)</td><td>As above</td></tr>
<tr><td>4 months</td><td>Pneumococcal (dose 1)</td><td>Pneumonia, meningitis and blood infections caused by pneumococcus</td></tr>
<tr><td>5 months</td><td>6-in-1 (dose 3)</td><td>As above</td></tr>
<tr><td>6 months</td><td>Pneumococcal (dose 2); measles (Sabah only)</td><td>Pneumococcus; measles</td></tr>
<tr><td>9 months</td><td>MMR (dose 1); Japanese encephalitis (Sarawak only)</td><td>Measles, mumps, rubella; Japanese encephalitis</td></tr>
<tr><td>12 months</td><td>MMR (dose 2)</td><td>Measles, mumps, rubella</td></tr>
<tr><td>15 months</td><td>Pneumococcal booster</td><td>Pneumococcus</td></tr>
<tr><td>18 months</td><td>6-in-1 booster</td><td>Diphtheria, tetanus, whooping cough, polio, Hib, hepatitis B</td></tr>
<tr><td>21 months</td><td>Japanese encephalitis booster (Sarawak only)</td><td>Japanese encephalitis</td></tr>
<tr><td>7 years</td><td>DT booster</td><td>Diphtheria, tetanus</td></tr>
<tr><td>Year 6 (girls)</td><td>HPV (single dose)</td><td>The virus behind most cervical cancers</td></tr>
<tr><td>15 years</td><td>Tetanus booster</td><td>Tetanus</td></tr>
</tbody></table></div>
<p>Your child’s clinic may adjust timing, for example for premature babies. Babies still have growth and development checks at 1 and 6 months, even where no vaccine is due.</p>` },
      { id: 'six-in-one', h: 'What is the 6-in-1 vaccine?', tocLabel: 'The 6-in-1 vaccine', html: `<p>Since November 2020, Malaysia has used a <strong>hexavalent (6-in-1) vaccine</strong>, which combines protection against six diseases in one injection: diphtheria, tetanus, pertussis (whooping cough), polio, <em>Haemophilus influenzae</em> type b (Hib) and hepatitis B. It replaced an older 5-in-1 vaccine plus separate hepatitis B shots, cutting the number of injections a baby needs.</p>
<p>Parents often search for it by brand name, such as “Hexaxim”, which is one brand of 6-in-1 vaccine. The government programme and private clinics may use different brands. They protect against the same six diseases.</p>
${figure('vaccination', 'A vaccine injection being given in the upper arm', 'Babies have their first 6-in-1 vaccine at 2 months, then at 3 and 5 months, with a booster at 18 months.')}` },
      { id: 'why', h: 'Why keeping to the schedule matters', tocLabel: 'Why it matters', html: `<p>Vaccine-preventable diseases are returning where coverage slips:</p>
<ul>
<li><strong>Measles</strong> cases rose from 2,002 in 2023 to <strong>3,791 in 2024</strong>, and 44% of cases were in children under 5. Although national coverage is high, only 62% of districts reached the 95% MMR coverage needed to stop outbreaks.</li>
<li><strong>Whooping cough</strong> killed <strong>43 babies under 5 months old in 2023</strong>, babies too young to be fully vaccinated. That is why the vaccine is now offered free in pregnancy too.</li>
<li>Recorded vaccine refusals rose from 637 in 2013 to 1,603 in 2016.</li>
</ul>
<p>Vaccines give the best protection when given on time. If your child has missed a dose, talk to your clinic about catching up. In most cases a delayed dose is simply given, and the course doesn’t need to start again.</p>` },
      { id: 'side-effects', h: 'What to expect after the jabs', tocLabel: 'Side effects', html: `<p>Most reactions are mild and settle within 2 to 3 days:</p>
<ul>
<li>Redness, swelling, soreness or a small lump where the injection was given</li>
<li>A mild fever</li>
<li>Fussiness, sleepiness or a poor appetite for a day or so</li>
</ul>
<p>Offer extra feeds and cuddles, and dress your baby lightly. If your baby has a fever and seems uncomfortable, ask the clinic or a pharmacist about <strong>paracetamol</strong>, dosed by weight. Never give aspirin to children.</p>
<div class="box box--pink" role="note"><span class="box__title">Get urgent medical help if your child</span><ul>
<li>Has a fit (seizure)</li>
<li>Has a temperature of 39°C or higher, or seems very unwell</li>
<li>Cries non-stop for 3 hours or more</li>
<li>Has signs of an allergic reaction: swelling of the face or lips, difficulty breathing, or a widespread rash. Call 999.</li>
</ul></div>
<p>A fit caused by fever (a febrile seizure) is frightening, but usually stops on its own and doesn’t cause lasting harm. Always get your child checked afterwards.</p>` },
      { id: 'where', h: 'Where to get vaccines, and what they cost', tocLabel: 'Where and cost', html: `<ul>
<li><strong>Government health clinics (Klinik Kesihatan):</strong> all National Immunisation Programme vaccines are free for Malaysian children. Non-citizens pay a fee.</li>
<li><strong>Private clinics:</strong> can give the same vaccines for a fee, and often offer optional extras.</li>
<li><strong>Records:</strong> keep your child’s health record book safe, as it is needed for primary school registration. For babies born from July 2022, vaccination records also appear in MySejahtera.</li>
</ul>
<p><strong>Optional vaccines</strong> commonly offered privately, which are not part of the free programme, include rotavirus, chickenpox (varicella), influenza, hepatitis A, meningococcal and typhoid vaccines, and pneumococcal vaccines covering more strains. Ask your doctor which are worth considering for your child. Flu vaccines for children are covered in our <a href="/articles/flu-vaccine-malaysia/">flu vaccine guide</a>.</p>` },
      { id: 'pregnancy', h: 'Vaccines in pregnancy protect your baby too', tocLabel: 'Vaccines in pregnancy', html: `<p>Since May 2025, Ministry of Health clinics offer the <strong>whooping cough (Tdap) vaccine free to pregnant women at 28 to 32 weeks</strong>. Antibodies pass to the baby and protect them in the first weeks of life, before their own 6-in-1 doses start. The flu vaccine is also recommended in pregnancy. See our <a href="/articles/pregnancy-due-date-calculator-malaysia/">pregnancy guide and due date calculator</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to vaccinate your child',
    clinicsTocLabel: 'Where to vaccinate',
    clinicsIntro: 'Free National Immunisation Programme vaccines are given at your nearest Klinik Kesihatan. Many private GP clinics also give childhood and optional vaccines. Call ahead to check stock. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-sunday/', 'Clinics open on Sunday']],
    faqs: [
      ['Which vaccines does a baby get at 2 months in Malaysia? (Vaksin bayi 2 bulan)', 'The first dose of the 6-in-1 vaccine, which protects against diphtheria, tetanus, whooping cough, polio, Hib and hepatitis B. Further doses follow at 3 and 5 months, with a booster at 18 months.'],
      ['What is Hexaxim for? (Hexaxim vaksin apa)', 'Hexaxim is one brand of 6-in-1 (hexavalent) vaccine. It protects against diphtheria, tetanus, whooping cough, polio, Hib and hepatitis B. The government programme gives a 6-in-1 vaccine free at 2, 3, 5 and 18 months.'],
      ['Are baby vaccines free in Malaysia?', 'Yes. National Immunisation Programme vaccines are free for Malaysian children at government health clinics. Private clinics charge for the same vaccines and for optional ones.'],
      ['Is fever normal after a baby’s vaccination?', 'A mild fever and fussiness for a day or two is common. Seek urgent help for a fit, a temperature of 39°C or more, non-stop crying for 3 hours or more, or signs of an allergic reaction.'],
      ['What if my child missed a vaccine?', 'Talk to your clinic about catching up. In most cases the missed dose is simply given late, and the course doesn’t need to restart.'],
      ['Is the rotavirus vaccine free in Malaysia?', 'No. Rotavirus, chickenpox, influenza and some other vaccines aren’t part of the free national programme, but are available at private clinics.'],
    ],
    sources: [
      ['MyGOV — Child immunisation programme and MOH schedule (2026)', 'https://www.malaysia.gov.my/en/categories/health/babies-and-children/child-immunisation-programme'],
      ['CodeBlue — Malaysia updates child immunisation schedule with hexavalent vaccine (17 Nov 2020)', 'https://codeblue.galencentre.org/2020/11/malaysia-updates-child-immunisation-schedule-with-hexavalent-vaccine/'],
      ['The Star — Malaysia to continue hepatitis B birth dose vaccine (24 Dec 2025)', 'https://www.thestar.com.my/news/nation/2025/12/24/malaysia-to-continue-hepatitis-b-birth-dose-vaccine'],
      ['The Star — Year Six HPV shots (11 Jan 2026)', 'https://www.thestar.com.my/news/nation/2026/01/11/year-six-hpv-shots-to-bolster-fight-against-cancer'],
      ['Kamaruzaman et al. — Childhood immunisation in Malaysia, Epidemiology & Infection (2025)', 'https://doi.org/10.1017/S095026882500024X'],
      ['Galen Centre — Measles cases in Malaysia, 2020–2024 (Aug 2025)', 'https://ova.galencentre.org/cases-of-measles-in-malaysia-increased-by-693-1-from-2020-to-2024/'],
      ['The Star — Nationwide measles-rubella vaccination campaign (2 Aug 2025)', 'https://www.thestar.com.my/news/nation/2025/08/02/malaysia-launches-nationwide-measles-rubella-vaccination-campaign-to-combat-rising-infections'],
      ['data.gov.my — Infant immunisation coverage (Oct 2026)', 'https://storage.data.gov.my/healthcare/infant_immunisation.csv'],
      ['The Star — Free Tdap vaccination for pregnant women (26 May 2025)', 'https://www.thestar.com.my/news/nation/2025/05/26/health-ministry-offers-free-tdap-vaccination-for-pregnant-women'],
      ['UKHSA — What to expect after vaccinations (2025)', 'https://assets.publishing.service.gov.uk/media/6970be7dec1d126584b9ef34/UKHSA_13530_What-to-expect-after-vaccination_04_A4_WEB.pdf'],
      ['US CDC — DTaP vaccine information statement', 'https://www.cdc.gov/vaccines/hcp/current-vis/dtap.html'],
      ['Utusan — Child immunisation records in MySejahtera (Jul 2022)', 'https://www.utusan.com.my/nasional/2022/07/akses-rekod-imunisasi-kanak-kanak-kesihatan-di-mysejahtera/'],
    ],
    related: ['pregnancy-due-date-calculator-malaysia', 'hfmd-children-malaysia', 'hpv-vaccine-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'gout-malaysia',
    title: 'Gout in Malaysia: symptoms, uric acid levels, foods to limit and treatment',
    crumb: 'Gout',
    desc: 'Gout symptoms and attacks, what your uric acid level means, foods and drinks that raise the risk, treatment that prevents flares, and gout vs pseudogout.',
    excerpt: 'Gout causes sudden, severe joint pain, often in the big toe at night. What your uric acid level means, which foods and drinks trigger attacks, why painkillers alone aren’t enough, and how gout differs from pseudogout.',
    standfirst: 'Gout is one of the most painful kinds of arthritis, and doctors in Malaysia say they are seeing it in younger adults. An attack usually comes on suddenly, often in the big toe at night. Here is what causes it, what your uric acid test means, and the long-term treatment that stops attacks coming back.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Gout', 'Gout (asid urik)'],
    image: 'fresh-vegetables', imageAlt: 'Fresh broccoli, tomatoes, cucumber and red peppers on a wooden table',
    keyPoints: [
      'Gout is caused by uric acid crystals in a joint. Attacks usually start suddenly, often at night, with severe pain, redness and swelling, most often in the big toe.',
      'A uric acid level above 408 µmol/L (6.8 mg/dL) is high, but a high level alone doesn’t mean gout, and the level can be normal during an attack.',
      'Alcohol, sugary drinks, red meat, some seafood and excess weight raise the risk. Some blood pressure medicines can too.',
      'Attacks are treated with colchicine, anti-inflammatories or steroids. People with repeated attacks need long-term uric acid-lowering medicine, aiming for below 360 µmol/L.',
      'Don’t stop uric acid-lowering medicine during an attack, and never try to drain gout lumps (tophi) yourself.',
    ],
    sections: [
      { id: 'what', h: 'What is gout?', html: `<p>Gout happens when <strong>uric acid</strong>, a waste product the body makes when it breaks down substances called purines, builds up in the blood and forms needle-like crystals in a joint. The immune system attacks the crystals, causing sudden, intense inflammation.</p>
<p>There are no national figures on how common gout is in Malaysia. Hospital studies show it usually starts between the ages of 30 and 60 and mostly affects men. Specialists say they are seeing more young adults with gout, linked to rising obesity, and nearly half of Malaysians are overweight.</p>` },
      { id: 'symptoms', h: 'Gout symptoms: what an attack feels like', tocLabel: 'Symptoms', html: `<ul>
<li><strong>Sudden, severe pain</strong> in one joint, often starting at night and peaking within 24 hours. Many people describe it as throbbing, burning or like being stabbed.</li>
<li>The joint becomes <strong>red, hot and swollen</strong>, and too painful to touch, even with a bedsheet.</li>
<li>The <strong>big toe</strong> is the most common site, followed by the midfoot and ankle. Knees, wrists, hands and elbows can also be affected.</li>
<li>Some people have a fever during an attack.</li>
</ul>
<p>Attacks usually settle within a week or two, but without treatment they tend to come back more often and affect more joints. Over time, firm white or yellow lumps called <strong>tophi</strong> can form under the skin, at the toes, ears, elbows and fingers.</p>
<div class="box box--pink" role="note"><span class="box__title">Don’t drain gout lumps yourself</span><p style="font-size:16px;line-height:1.6">Puncturing a tophus at home can cause a serious, even life-threatening, infection. See a doctor if a lump is painful, open or leaking. Also see a doctor urgently for a hot, swollen joint with a high fever, as it could be a joint infection.</p></div>` },
      { id: 'uric-acid', h: 'What your uric acid level means', tocLabel: 'Uric acid levels', html: `<div class="table-wrap"><table>
<thead><tr><th>Uric acid level</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>Above 408 µmol/L (6.8 mg/dL)</td><td>High (hyperuricaemia): crystals can start to form</td></tr>
<tr><td>Below 360 µmol/L (6 mg/dL)</td><td>Treatment target for people on uric acid-lowering medicine</td></tr>
<tr><td>Below 300 µmol/L (5 mg/dL)</td><td>Target for severe gout, such as with tophi or frequent attacks</td></tr>
</tbody></table></div>
<p>Reference ranges vary slightly between laboratories, so check the range printed on your report.</p>
<ul>
<li><strong>A high level isn’t the same as gout.</strong> Many people with high uric acid never get an attack, and Malaysian guidelines don’t recommend treating high uric acid without symptoms.</li>
<li><strong>The level can be normal during an attack.</strong> Doctors may repeat the test two or more weeks after the attack settles.</li>
</ul>` },
      { id: 'causes', h: 'What causes gout, and foods to limit', tocLabel: 'Causes and foods', html: `<p>Things that raise the risk of gout, according to the Ministry of Health’s gout guidelines:</p>
<ul>
<li>Being overweight</li>
<li>Alcohol, including beer</li>
<li>Sugar-sweetened drinks and fruit juice</li>
<li>Red meat, organ meats and some seafood, such as anchovies, sardines and shellfish</li>
<li>Some medicines, including diuretics (“water pills”) and some blood pressure medicines</li>
<li>Kidney disease, diabetes, a family history of gout, and being male or past menopause</li>
</ul>
<p><strong>Foods that may help:</strong> dairy products are linked to a lower risk, and purines from plant foods such as beans and vegetables don’t raise it. Cherries may lower the chance of attacks, but the evidence is limited. Losing weight, drinking enough water and cutting alcohol and sweet drinks all help.</p>
<p>Don’t stop any prescribed medicine, including low-dose aspirin for your heart, without talking to your doctor. They can switch blood pressure medicines if needed.</p>` },
      { id: 'treatment', h: 'Treating gout', tocLabel: 'Treatment', html: `<p><strong>During an attack:</strong> your doctor may prescribe colchicine, an anti-inflammatory painkiller (NSAID), or a steroid. Rest the joint, raise it, and apply an ice pack wrapped in a towel for up to 20 minutes. Start treatment as early as you can.</p>
<p><strong>Preventing attacks:</strong> painkillers treat the pain, but not the cause. People with repeated attacks, tophi or kidney stones usually need <strong>long-term uric acid-lowering medicine</strong>, most often allopurinol, to bring the level below the target.</p>
<ul>
<li>It is started at a low dose and increased slowly, with regular blood tests.</li>
<li>Doctors often add a low-dose anti-inflammatory for the first 3 to 6 months, as attacks can briefly increase when treatment starts.</li>
<li><strong>Keep taking it during an attack</strong>, and long term. Stopping is the most common reason treatment fails. In one Malaysian clinic, only about a third of patients reached their target.</li>
<li>Rarely, allopurinol causes a serious skin reaction. Stop it and see a doctor at once if you get a rash, blisters or mouth sores.</li>
</ul>
${figure('doctor-consultation', 'A doctor talking with a patient in a consultation room', 'Long-term uric acid-lowering treatment needs regular check-ups and blood tests.')}` },
      { id: 'pseudogout', h: 'Gout or pseudogout?', html: `<p>Pseudogout (calcium pyrophosphate deposition disease) causes similar sudden, painful, swollen joints, but it is caused by <strong>calcium crystals</strong>, not uric acid. It is more common in people over 60, most often affects the <strong>knee</strong>, and attacks last 1 to 2 weeks. It doesn’t respond to uric acid-lowering medicine. A doctor can tell them apart by testing fluid from the joint, or from X-ray findings.</p>` },
      { id: 'complications', h: 'Why gout needs long-term care', tocLabel: 'Complications', html: `<p>Untreated gout can lead to permanent joint damage, tophi, kidney stones and kidney disease. People with gout also have higher rates of heart disease, diabetes and high blood pressure, so a check of your <a href="/articles/check-blood-pressure-at-home/">blood pressure</a>, blood sugar, cholesterol and kidney function is part of good gout care.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get gout treated',
    clinicsTocLabel: 'Where to get treated',
    clinicsIntro: 'Most gout is diagnosed and managed by GPs, who can treat attacks, check your uric acid and kidney function, and start long-term treatment. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What are the symptoms of gout?', 'Sudden, severe pain in a joint, often the big toe, usually starting at night, with redness, heat and swelling. The joint may be too painful to touch. Some people also have a fever.'],
      ['What uric acid level causes gout?', 'Uric acid above 408 µmol/L (6.8 mg/dL) is high enough for crystals to form, but many people with high levels never get gout. On treatment, the target is below 360 µmol/L (6 mg/dL).'],
      ['What causes gout in the foot? (Punca gout di kaki)', 'Uric acid crystals collect in the joints of the feet, especially the big toe. Risk rises with excess weight, alcohol, sugary drinks, red meat, some seafood, some medicines and kidney disease.'],
      ['What is the difference between gout and pseudogout?', 'Gout is caused by uric acid crystals and often affects the big toe. Pseudogout is caused by calcium crystals, is more common over 60, and usually affects the knee.'],
      ['Should I stop allopurinol during a gout attack?', 'No. Keep taking it as prescribed. Stopping and starting can trigger more attacks. Your doctor will treat the attack separately.'],
      ['Can gout be cured?', 'Gout can be controlled. Keeping uric acid below the target with long-term medicine and lifestyle changes can stop attacks and dissolve tophi over time.'],
    ],
    sources: [
      ['Ministry of Health — Clinical Practice Guidelines: Management of Gout, 2nd edition (2021)', 'https://mymahtas2.moh.gov.my/files/e-CPG_Management_of_Gout_(Second_Edition)%20(3).pdf'],
      ['The Vibes — Nation faces silent public health crisis as gout cases rise sharply (20 May 2025)', 'https://www.thevibes.com/articles/lifestyles/108456/nation-faces-silent-public-health-crisis-as-gout-cases-rise-sharply'],
      ['CodeBlue — Gout: a growing concern for Malaysians (May 2025)', 'https://codeblue.galencentre.org/2025/05/gout-a-growing-concern-and-its-severe-complications-for-malaysians/'],
      ['The Star — “It felt like a sharp needle had just stabbed me” (21 May 2026)', 'https://www.thestar.com.my/news/nation/2026/05/21/it-felt-like-a-sharp-needle-had-just-stabbed-me'],
      ['The Star — Gout patients advised against puncturing lumps themselves (3 Jan 2024)', 'https://www.thestar.com.my/news/nation/2024/01/03/gout-patients-advised-against-puncturing-lumps-themselves'],
      ['NHS — Gout', 'https://www.nhs.uk/conditions/gout/'],
      ['American College of Rheumatology — Gout (Feb 2025)', 'https://rheumatology.org/patients/gout'],
      ['American College of Rheumatology — Calcium pyrophosphate deposition (Feb 2025)', 'https://rheumatology.org/patients/calcium-pyrophosphate-deposition-cppd'],
    ],
    related: ['check-blood-pressure-at-home', 'weight-loss-injections-malaysia', 'world-diabetes-day-2026-kl'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'itchy-skin-eczema-hives-malaysia',
    title: 'Itchy skin in Malaysia: eczema, hives (gegata) and other causes, and when to see a doctor',
    crumb: 'Itchy skin, eczema and hives',
    desc: 'Itchy skin explained: eczema, pompholyx, hives (gegata), heat rash, scabies and fungal rashes. What helps, safe use of steroid creams, and when to see a doctor.',
    excerpt: 'Heat, sweat and stress make itchy skin common in Malaysia. How to tell eczema from hives (gegata), heat rash, scabies and fungal rashes, what treatment helps, and why to avoid creams with hidden steroids.',
    standfirst: 'Itchy skin is one of the most common reasons Malaysians see a doctor or ask a pharmacist for help. It can be eczema, hives (gegata or urticaria), heat rash, scabies or a fungal infection, and each needs different care. Here is how to tell them apart, what helps, and when to see a doctor.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Atopic dermatitis', 'Ekzema'],
    image: 'facial-treatment', imageAlt: 'A doctor examining facial skin in a clinic',
    keyPoints: [
      'Eczema causes dry, itchy, inflamed skin. Moisturising generously every day is the most important treatment.',
      'Hives (gegata, urticaria) are raised, itchy welts that move around and fade within 24 hours. Non-drowsy antihistamines usually help.',
      'Swollen lips or tongue, or difficulty breathing, with hives is an emergency. Call 999.',
      'Steroid creams are safe and effective when used as directed. Avoid “herbal” or unregistered creams, which have been found to contain hidden steroids and mercury.',
      'Itch that is worse at night and affects family members may be scabies, and ring-shaped scaly patches may be a fungal infection. Both need specific treatment.',
    ],
    sections: [
      { id: 'which', h: 'What’s causing your itch?', tocLabel: 'Common causes', html: `<div class="table-wrap"><table>
<thead><tr><th>Condition</th><th>What it looks like</th></tr></thead>
<tbody>
<tr><td>Eczema (atopic dermatitis)</td><td>Dry, red or darker, rough, itchy patches, often in skin creases such as elbows, knees and neck. Comes and goes.</td></tr>
<tr><td>Pompholyx</td><td>Tiny, very itchy blisters on the palms, sides of the fingers and sometimes the soles</td></tr>
<tr><td>Hives (gegata, urticaria)</td><td>Raised, itchy welts that appear suddenly, move around, and each fade within 24 hours</td></tr>
<tr><td>Heat rash (prickly heat)</td><td>Tiny, prickly red spots in sweaty areas, clearing within days when cool</td></tr>
<tr><td>Scabies</td><td>Intense itch, worse at night, with tiny burrows between fingers, on wrists and around the waist. Often several family members.</td></tr>
<tr><td>Ringworm (kurap)</td><td>A ring-shaped, scaly, itchy patch that slowly spreads</td></tr>
<tr><td>Pityriasis versicolor (panau)</td><td>Flat, lighter or darker patches on the chest, back and upper arms, often only mildly itchy</td></tr>
</tbody></table></div>
<p>Because treatments differ, a doctor should check any rash that is spreading, not improving, or keeps coming back.</p>` },
      { id: 'eczema', h: 'Eczema', html: `<p>Atopic eczema is common in Malaysian children. Around 1 in 8 children had symptoms in the past year in Malaysian studies, and most develop it before age 5. Many outgrow it, but it can continue into adulthood.</p>
<p><strong>Triggers:</strong> heat, sweating, sun, soap and detergents, rough fabrics, dust mites and stress. Malaysian guidelines found no link with humidity itself, but hot weather and sweat often make it flare.</p>
<p><strong>What helps:</strong></p>
<ul>
<li><strong>Moisturise generously</strong>, at least twice a day and after bathing, even when the skin looks clear. This is the most important treatment, and it reduces the need for steroid creams.</li>
<li><strong>Use a soap substitute</strong> or gentle, fragrance-free wash, and keep baths and showers short (under 10 minutes), with lukewarm water.</li>
<li><strong>Steroid creams</strong> prescribed by your doctor calm flares. Use the amount and strength advised. A fingertip unit (a line of cream from the tip to the first crease of an adult finger) covers an area the size of two adult palms. Used correctly, they are safe, including for children.</li>
<li>Wear loose cotton clothes, and keep nails short to limit damage from scratching.</li>
</ul>
<p><strong>Supplements:</strong> Malaysian guidelines found too little evidence that probiotics or vitamins B6, D or E help, and evening primrose and borage oil don’t.</p>
${figure('doctor-notes', 'A doctor writing notes on a clipboard during a consultation', 'A doctor can confirm the cause of a rash and prescribe the right strength of treatment.')}` },
      { id: 'hidden-steroids', h: 'Beware creams with hidden steroids', tocLabel: 'Hidden steroids', html: `<p>Some “herbal”, “natural” or “steroid-free” eczema creams sold online contain strong steroids or mercury. In April 2026, the Ministry of Health cancelled two cosmetic products found to contain a steroid and mercury. In July 2026, Singapore’s Health Sciences Authority found a potent steroid in a “zero-steroid” herbal eczema cream bought from a Malaysian seller, after a 12-year-old gained 6 kg and developed stretch marks.</p>
<p>Hidden steroids can thin the skin, and stopping them suddenly can cause a severe flare. Use creams from a doctor or pharmacist, check for a registration number, and if you’ve been using an unregistered cream, see a doctor before stopping it.</p>` },
      { id: 'pompholyx', h: 'Pompholyx', html: `<p>Pompholyx (dyshidrotic eczema) causes crops of small, intensely itchy blisters on the fingers and palms, and sometimes the toes and soles. Episodes usually last 2 to 3 weeks. Triggers include heat and sweating, stress, wet hands, harsh chemicals, and nickel or cobalt.</p>
<p>Use a moisturiser and soap substitute, keep hands dry, and don’t burst the blisters. A doctor may prescribe a short course of steroid cream, or antibiotics if the blisters become infected.</p>` },
      { id: 'hives', h: 'Hives (gegata or urticaria)', tocLabel: 'Hives (gegata)', html: `<p>Hives are raised, itchy welts that can appear anywhere. Each welt fades within 24 hours, but new ones can keep appearing. Hives lasting less than 6 weeks are called acute; longer than 6 weeks is chronic.</p>
<p><strong>Common causes:</strong> viral infections (especially in children), foods such as shellfish, eggs, milk and peanuts, medicines such as antibiotics, aspirin and anti-inflammatory painkillers, and insect stings. In adults, often no cause is found.</p>
<p><strong>Treatment:</strong> a <strong>non-drowsy antihistamine</strong> such as cetirizine or loratadine, available from pharmacies, usually controls hives. For persistent hives, a doctor may increase the dose. Avoid any trigger you identify.</p>
<div class="box box--pink" role="note"><span class="box__title">Call 999 if hives come with</span><ul>
<li>Swelling of the lips, tongue, mouth or throat</li>
<li>Difficulty breathing or swallowing, or wheezing</li>
<li>Pale or blue skin, confusion, dizziness or collapse</li>
</ul><p style="font-size:16px;line-height:1.6">These are signs of anaphylaxis, a severe allergic reaction.</p></div>` },
      { id: 'other', h: 'Heat rash, scabies and fungal rashes', tocLabel: 'Other causes', html: `<ul>
<li><strong>Heat rash</strong> comes from blocked sweat glands. Keep cool, wear loose cotton clothes, and avoid heavy creams. Calamine lotion can soothe it. It usually clears within a few days.</li>
<li><strong>Scabies</strong> is caused by tiny mites and spreads by close skin contact. It needs a prescription treatment, and <strong>everyone in the household</strong> should be treated at the same time, even without symptoms. Itching can continue for 2 to 4 weeks after successful treatment.</li>
<li><strong>Ringworm (kurap)</strong> is a fungal infection, treated with antifungal cream. Steroid creams can make it worse.</li>
<li><strong>Pityriasis versicolor (panau)</strong> is a harmless yeast overgrowth that isn’t contagious, but often comes back in hot, humid weather. Antifungal shampoos and creams help.</li>
</ul>
<p>Itch powders (bedak gatal) may feel soothing, but there is little evidence that they treat any of these conditions.</p>` },
      { id: 'doctor', h: 'When to see a doctor', html: `<ul>
<li>Eczema that is <strong>weeping, crusted, painful or spreading fast</strong>, or comes with fever. These are signs of infection.</li>
<li>Hives that last more than a couple of days, keep coming back, or come with swelling under the skin</li>
<li>A rash that isn’t improving with simple care, or you aren’t sure what it is</li>
<li>Itch that keeps you or your child awake</li>
<li>Any rash in a baby that worries you</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a rash checked',
    clinicsTocLabel: 'Where to get checked',
    clinicsIntro: 'A GP can diagnose most itchy rashes, prescribe the right cream or antihistamine, and refer you to a dermatologist if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-sunday/', 'Clinics open on Sunday']],
    faqs: [
      ['What is gegata?', 'Gegata is a common Malay term for hives (urticaria): raised, itchy welts that appear suddenly and fade within 24 hours. Non-drowsy antihistamines usually help. Swelling of the lips or difficulty breathing is an emergency.'],
      ['What are the symptoms of eczema?', 'Dry, itchy, inflamed skin, often in creases such as the elbows, knees and neck. It can look red on lighter skin and darker brown or grey on darker skin, and comes and goes in flares.'],
      ['What is pompholyx eczema?', 'A type of eczema that causes small, very itchy blisters on the palms and fingers, sometimes the soles. It is often triggered by heat, sweat, stress or contact with metals and chemicals.'],
      ['Are steroid creams safe for eczema?', 'Yes, when used as your doctor directs, at the right strength and amount. Problems usually come from overuse, or from unregistered creams with hidden strong steroids.'],
      ['Do supplements help eczema?', 'Malaysian guidelines found too little evidence for probiotics and vitamins, and evening primrose oil doesn’t help. Daily moisturising remains the most effective step.'],
      ['How do I know if my itch is scabies?', 'Scabies itch is usually worse at night, with tiny lines or spots between the fingers, on the wrists or around the waist, and often several family members itch. See a doctor, as the whole household needs treatment.'],
    ],
    sources: [
      ['Ministry of Health — Clinical Practice Guidelines: Management of Atopic Eczema (2018)', 'https://mymahtas2.moh.gov.my/files/e-CPG%20Management%20of%20Atopic%20Eczema.pdf'],
      ['NHS — Atopic eczema (Sep 2024)', 'https://www.nhs.uk/conditions/atopic-eczema/'],
      ['NHS — Pompholyx (Jul 2026)', 'https://www.nhs.uk/conditions/pompholyx/'],
      ['DermNet — Urticaria: an overview', 'https://dermnetnz.org/topics/urticaria-an-overview'],
      ['American Academy of Dermatology — Urticaria guideline collaboration', 'https://www.aad.org/guidelines/collaborations-urticaria'],
      ['NHS — Hives (Apr 2024)', 'https://www.nhs.uk/conditions/hives/'],
      ['NHS — Heat rash (May 2024)', 'https://www.nhs.uk/conditions/heat-rash-prickly-heat/'],
      ['NHS — Scabies', 'https://www.nhs.uk/conditions/scabies/'],
      ['NHS — Ringworm', 'https://www.nhs.uk/conditions/ringworm/'],
      ['NHS — Pityriasis versicolor (Mar 2026)', 'https://www.nhs.uk/conditions/pityriasis-versicolor/'],
      ['The Star — Health Ministry bans cosmetic products containing scheduled poisons (2 Apr 2026)', 'https://www.thestar.com.my/news/nation/2026/04/02/health-ministry-bans-cosmetic-products-containing-scheduled-poisons'],
      ['Mothership — HSA warns of potent steroid in “zero-steroid” eczema cream (23 Jul 2026)', 'https://mothership.sg/2026/07/hsa-warning-products/'],
    ],
    related: ['acne-malaysia', 'pico-laser-melasma-malaysia', 'hfmd-children-malaysia'],
  },
];
