// Articles published 27 October 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-10-27';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const OCT_2026_C = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'budget-2027-health-malaysia',
    title: 'Budget 2027 and your health: what changes for patients in Kuala Lumpur',
    crumb: 'Budget 2027 and your health',
    desc: 'What Budget 2027 means for patients: MediAsas, help with medical bills, free screening, shorter waits, elderly care, KL daycare centres and tax relief.',
    excerpt: 'Budget 2027 gives the Health Ministry RM47.7 billion. What actually changes for patients in KL: medical bills, insurance, screening, waiting times, elderly care and tax relief.',
    standfirst: 'Budget 2027 gives the Health Ministry RM47.7 billion, up from RM46.5 billion this year. Most of the headlines are about doctors’ posts and hospital repairs. Here is what changes for you as a patient, carer or taxpayer in Kuala Lumpur.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: false,
    image: 'stethoscope-desk', imageAlt: 'A stethoscope hanging from a shelf in a clinic',
    keyPoints: [
      'The Health Ministry’s budget rises to RM47.7 billion in 2027, up from RM46.5 billion.',
      'MediAsas, an affordable basic medical insurance plan, launches in January 2027. EPF members under 55 can pay for it from Akaun Sejahtera.',
      'The Medical Assistance Fund for people who can’t afford treatment grows from RM40 million to RM60 million. PeKa B40 continues with RM80 million.',
      'Free thalassaemia screening is extended to the husbands and children of carriers.',
      'Two DBKL buildings in Taman Desa and Cheras will become senior daycare centres, and service tax on elderly care falls from 8% to 6%.',
      'The Madani Medical Scheme for minor illnesses at private GP clinics has no allocation in the 2027 estimates.',
    ],
    sections: [
      { id: 'at-a-glance', h: 'Budget 2027 health measures at a glance', tocLabel: 'At a glance', html: `<p>Budget 2027 was tabled on 9 October 2026. These are the measures most likely to affect patients and families:</p>
<div class="table-wrap"><table>
<thead><tr><th>Measure</th><th>What it means for you</th></tr></thead>
<tbody>
<tr><td>MediAsas</td><td>Basic medical insurance or takaful from January 2027, payable from EPF Akaun Sejahtera</td></tr>
<tr><td>Medical Assistance Fund</td><td>RM60 million (from RM40 million) for patients who can’t afford treatment</td></tr>
<tr><td>PeKa B40</td><td>RM80 million for free screening and treatment support for STR recipients aged 40+</td></tr>
<tr><td>Thalassaemia screening</td><td>Free for husbands and children of carriers</td></tr>
<tr><td>Outsourcing to private hospitals</td><td>RM200 million to send government patients to other facilities and shorten waits</td></tr>
<tr><td>Private hospital bills</td><td>Standard, transparent charge categories from 2027</td></tr>
<tr><td>Elderly care</td><td>Service tax cut from 8% to 6%; two new senior daycare centres in KL</td></tr>
<tr><td>Tax relief</td><td>Medical relief extended to postnatal care; parents’ relief covers all care costs</td></tr>
</tbody></table></div>
<p>Most of these take effect in 2027. Tax changes still need to be passed in the Finance Bill.</p>` },
      { id: 'paying', h: 'Help with paying for treatment', tocLabel: 'Help with bills', html: `<ul>
<li><strong>Medical Assistance Fund (Tabung Bantuan Perubatan):</strong> increased from RM40 million to RM60 million. It helps patients at government hospitals who can’t afford treatment or medical devices. Ask the hospital’s medical social work unit how to apply.</li>
<li><strong>PeKa B40:</strong> RM80 million, the same as in 2026. Sumbangan Tunai Rahmah (STR) recipients aged 40 and above, and their spouses, get free health screening, help with medical devices, and incentives to complete cancer treatment. Eligibility is automatic.</li>
<li><strong>MySalam:</strong> the free takaful protection scheme for lower-income Malaysians continues in 2027.</li>
<li><strong>Care aid for bedridden patients:</strong> the monthly aid for bedridden persons with disabilities and chronically ill patients rises from RM500 to RM600.</li>
</ul>
<div class="box box--pink" role="note"><span class="box__title">The Madani Medical Scheme</span><p style="font-size:16px;line-height:1.6">The Madani Medical Scheme (Skim Perubatan Madani) subsidised visits to private GP clinics for minor illnesses such as fever, diarrhoea and headaches for lower-income Malaysians. Its funding was halved to RM50 million in 2026, and CodeBlue reports it has no allocation in the Health Ministry’s 2027 estimates. The government has not announced an end date. If you rely on it, ask your clinic whether it is still accepting the scheme. Government health clinics (Klinik Kesihatan) remain a low-cost option for minor illnesses.</p></div>` },
      { id: 'insurance', h: 'MediAsas and private hospital bills', tocLabel: 'Insurance and bills', html: `<p><strong>MediAsas</strong> is a basic medical insurance and takaful plan that launches in <strong>January 2027</strong>. It is designed to be affordable for people who have no medical cover or have dropped a plan they could no longer pay for. Under Budget 2027:</p>
<ul>
<li>EPF members <strong>under 55</strong> can pay MediAsas premiums from their <strong>Akaun Sejahtera</strong>.</li>
<li>Companies with fewer than 75 staff get a <strong>RM200 subsidy</strong> for each employee’s first-year premium, for up to 50 employees. About 200,000 workers are expected to benefit.</li>
<li>Hospitals will be paid by diagnosis and type of treatment (Diagnosis Related Groups), which aims to make costs more predictable.</li>
</ul>
<p>Separately, from 2027 <strong>private hospitals must use standard, transparent charge categories</strong> on their bills, so patients can see and compare what they are paying for.</p>
<p>See our full guide: <a href="/articles/mediasas-malaysia/">MediAsas explained: cover, premiums and who it suits</a>.</p>` },
      { id: 'waiting', h: 'Shorter waits at government hospitals', tocLabel: 'Waiting times', html: `<ul>
<li><strong>Outsourcing to other facilities:</strong> the allocation for sending government patients elsewhere rises to RM200 million. It now includes using private facilities, including operating theatres, and covers expanded newborn screening, prenatal genetic tests and rehabilitation.</li>
<li><strong>More specialists:</strong> retired government specialists and private specialists can work sessions at government hospitals on more flexible terms and for longer.</li>
<li><strong>More permanent doctors:</strong> more than 9,000 contract doctors will be offered permanent posts in 2027. The monthly incentive for about 47,000 nurses and paramedics with post-basic training doubles from RM100 to RM200.</li>
<li><strong>Ambulances and equipment:</strong> more than RM770 million for medical equipment, including 400 new ambulances and upgraded haemodialysis facilities.</li>
</ul>
<p>The new ambulances matter. In 2025, only about a third of the most urgent emergency calls were reached within the 15-minute target. In an emergency, always call <a href="tel:999">999</a>. If you are unsure whether you need an ambulance, see our guide to <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
      { id: 'screening', h: 'Screening, fertility and vaccines', tocLabel: 'Screening and vaccines', html: `<ul>
<li><strong>Thalassaemia:</strong> free screening at Ministry of Health facilities is extended to the <strong>husbands and children of carriers</strong>. Thalassaemia is an inherited blood disorder. Two carriers have a 1 in 4 chance in each pregnancy of having a child with thalassaemia major, who needs lifelong blood transfusions. Screening helps couples know their risk. See our <a href="/articles/thalassaemia-screening-malaysia/">thalassaemia screening guide</a>.</li>
<li><strong>Fertility (BuAi programme):</strong> subsidised fertility treatment (intrauterine insemination) for 2,000 couples through LPPKN, and men’s wellness services for 42,000 people.</li>
<li><strong>HPV vaccine:</strong> the school programme for about 230,000 Year 6 girls moves to a vaccine that covers nine HPV types instead of two. See our <a href="/articles/hpv-vaccine-malaysia/">HPV vaccine guide</a>.</li>
<li><strong>Drivers:</strong> commercial vehicle drivers get PERKESO health screening vouchers worth up to RM30.</li>
<li><strong>Mobile clinics:</strong> 10 university teaching hospitals will run screening and mobile clinics for lower-income, vulnerable and rural communities.</li>
</ul>
<p>For free screening you can already use, see <a href="/articles/free-health-screening-malaysia/">free health screening in Malaysia 2026</a>.</p>` },
      { id: 'elderly', h: 'Elderly care', html: `<ul>
<li><strong>Service tax on elderly care</strong> falls from 8% to 6% from 1 January 2027, and care fees of up to RM96,000 a year are fully exempt from service tax.</li>
<li><strong>Two senior daycare centres in Kuala Lumpur:</strong> two DBKL buildings, at the Anjung Kelana homeless transformation centre in Taman Desa and the Cheras temporary market, will be upgraded into senior daycare centres. Opening dates have not been announced.</li>
<li><strong>Getting around KL:</strong> 22 km of covered walkways, including links from homes to clinics, and buggies for older visitors at Tugu Negara, the Perdana Botanical Gardens and Carcosa.</li>
<li><strong>Bantuan Warga Emas:</strong> RM1.3 billion for about 200,000 recipients. A Senior Citizens Bill is also planned.</li>
</ul>
${figure('caregiver-wheelchair', 'A carer pushing an older man in a wheelchair outdoors', 'Budget 2027 extends tax relief to all care costs for parents and grandparents, not only medical bills.')}` },
      { id: 'kl', h: 'What it means for Kuala Lumpur', tocLabel: 'Kuala Lumpur', html: `<p>None of the four new health facilities named in the budget speech are in Kuala Lumpur. They are in Johor, Kuching, Gerik and Rembau. For KL residents, the most visible changes are likely to be:</p>
<ul>
<li><strong>Hospital Kuala Lumpur (HKL)</strong> is one of 16 hospitals rolling out a full Hospital Information System in 2027, with RM200 million for the initiative. HKL’s director said the aim is a fully computerised hospital, so patients don’t have to repeat their medical history at every stage of care. Lift replacement is under way, and electrical and IT upgrades are planned.</li>
<li><strong>Linked medical records:</strong> a separate RM1 billion investment by the Malaysian Communications and Multimedia Commission (MCMC) will connect electronic records across 150 hospitals and 2,488 health clinics under a “one person, one record” approach, with telehealth services.</li>
<li><strong>Repairs and air-conditioning:</strong> RM1.2 billion for maintaining public hospitals and clinics nationwide, including new air-conditioning at 600 Ministry of Health clinic facilities.</li>
<li>The two senior daycare centres in Taman Desa and Cheras, and new covered walkways.</li>
</ul>` },
      { id: 'tax', h: 'Tax relief changes for 2027', tocLabel: 'Tax relief', html: `<p>These apply from the 2027 year of assessment, once passed in the Finance Bill:</p>
<ul>
<li><strong>Medical expenses relief</strong> is extended to <strong>postnatal care</strong>. News reports say the overall limit stays at RM10,000, with postnatal care capped at RM3,000 within it. Vaccinations, health screening, dental treatment and fertility treatment remain claimable.</li>
<li><strong>Relief for parents and grandparents</strong> now covers all care expenses, not only medical treatment.</li>
<li><strong>Individual relief</strong> rises from RM9,000 to RM12,000.</li>
</ul>
<p>Keep receipts for medical, screening, vaccination and care expenses. Check the final rules with LHDN before filing.</p>` },
      { id: 'what-to-do', h: 'What you can do now', tocLabel: 'What to do now', html: `<ol>
<li><strong>If you are 40 or over,</strong> check whether you qualify for free screening through PeKa B40 or PERKESO, and book it before the year ends.</li>
<li><strong>If you have no medical insurance,</strong> or are struggling with premiums, compare your current plan with MediAsas when insurers publish prices. Don’t cancel an existing policy until new cover is in place.</li>
<li><strong>If thalassaemia runs in your family,</strong> ask your Klinik Kesihatan about free screening for your spouse and children.</li>
<li><strong>If you care for an older parent,</strong> keep receipts for care costs, which can be claimed under the expanded relief from 2027.</li>
</ol>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic near you',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'GP clinics can do health screening, explain your results and refer you to a specialist. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, with opening hours and directions.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/cheras/', 'Clinics in Cheras'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['How much does the Health Ministry get in Budget 2027?', 'RM47.7 billion, up from about RM46.5 billion in 2026, an increase of RM1.18 billion.'],
      ['When does MediAsas start?', 'January 2027. EPF members under 55 can pay MediAsas premiums from their Akaun Sejahtera, and small companies get a RM200 subsidy per employee for the first year.'],
      ['Who can get free thalassaemia screening under Budget 2027?', 'Free screening at Ministry of Health facilities is extended to the husbands and children of thalassaemia carriers. Ask at your nearest Klinik Kesihatan.'],
      ['Is the Madani Medical Scheme continuing in 2027?', 'CodeBlue reports that the scheme has no allocation in the Health Ministry’s 2027 estimates, after its funding was halved in 2026. No end date has been announced, so check with your clinic.'],
      ['Are there new senior daycare centres in Kuala Lumpur?', 'Yes. Two DBKL buildings, in Taman Desa and at the Cheras temporary market, will be upgraded into senior daycare centres. Opening dates have not been announced.'],
      ['What medical tax relief changes in 2027?', 'Medical expenses relief is extended to postnatal care, and parents’ relief covers all care expenses, not only medical bills. These still need to be passed in the Finance Bill.'],
    ],
    sources: [
      ['Ministry of Finance — Budget 2027 speech (9 Oct 2026)', 'https://belanjawan.mof.gov.my/pdf/belanjawan2027/ucapan/ub27.pdf'],
      ['Ministry of Finance — Budget 2027 summary (Touchpoint)', 'https://belanjawan.mof.gov.my/pdf/belanjawan2027/ucapan/touchpoint-budget-bm.pdf'],
      ['Bernama — Health Ministry gets RM47.7 bln to strengthen healthcare services (9 Oct 2026)', 'https://www.bernama.com/en/general/news.php?id=2617970'],
      ['Bernama — Budget 2027: nine new health facilities, RM1.2 bln for upgrades (9 Oct 2026)', 'https://www.bernama.com/en/general/news.php?id=2617726'],
      ['The Star — Budget 2027: nine new health facilities, RM1.2bil for upgrades (9 Oct 2026)', 'https://www.thestar.com.my/news/nation/2026/10/09/budget-2027-nine-new-health-facilities-rm12bil-for-upgrades'],
      ['CodeBlue — Government abolishes Madani Medical Scheme under Budget 2027 (9 Oct 2026)', 'https://codeblue.galencentre.org/2026/10/government-abolishes-madani-medical-scheme-under-budget-2027/'],
      ['CodeBlue — Budget 2027: RM200 MediAsas premium subsidies for 200,000 workers (Oct 2026)', 'https://codeblue.galencentre.org/2026/10/budget-2027-rm200-mediasas-premium-subsidies-for-200000-workers-in-first-year/'],
      ['Bernama — HKL plans facility upgrades and digital health system (10 Oct 2026)', 'https://bernama.com/en/general/news.php?id=2618163'],
      ['RinggitPlus — Budget 2027: what changes for your money in 2027', 'https://ringgitplus.com/en/blog/budget-2027/budget-2027-what-changes-for-your-money-in-2027.html'],
      ['SAYS — All the healthcare reforms proposed under Budget 2027', 'https://says.com/my/news/list-all-healthcare-reforms-proposed-budget-2027-benefit-you'],
    ],
    related: ['peka-b40-malaysia', 'mediasas-malaysia', 'free-health-screening-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'mediasas-malaysia',
    title: 'MediAsas explained: Malaysia’s basic medical insurance plan from January 2027',
    crumb: 'MediAsas explained',
    desc: 'MediAsas launches in January 2027. Teras vs Fleksi, annual limits, deductibles, what’s covered and excluded, premiums, EPF Akaun Sejahtera and who it suits.',
    excerpt: 'MediAsas is a basic medical insurance and takaful plan launching in January 2027. Teras and Fleksi compared, what it covers, the main exclusions, expected premiums and who it suits.',
    standfirst: 'After years of steep medical insurance price rises, MediAsas is meant to give Malaysians a simpler, more affordable plan for hospital bills. It launches in January 2027. Here is how it works, what it covers and leaves out, what it is likely to cost, and whether it suits you.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: false,
    image: 'doctor-tablet', imageAlt: 'A doctor reading patient records on a tablet',
    keyPoints: [
      'MediAsas is a standardised basic medical insurance and takaful plan backed by Bank Negara Malaysia and the Ministry of Finance. It launches nationwide in January 2027.',
      'There are two versions: Teras, with an annual limit of RM100,000 (RM150,000 from age 60) and a small deductible, and Fleksi, with a RM300,000 limit and a RM10,000 deductible, meant to top up employer cover.',
      'It is voluntary and fully underwritten. Pre-existing conditions are not covered, and there are 35 main exclusions.',
      'Final premiums have not been published. The government has indicated about RM60 to RM550 a month, depending on age.',
      'EPF members under 55 can pay premiums from Akaun Sejahtera. Don’t cancel an existing plan until new cover is in place.',
    ],
    sections: [
      { id: 'why', h: 'Why MediAsas was created', tocLabel: 'Why it exists', html: `<p>Medical costs in Malaysia rose about 15% in 2024, and many insurers raised premiums sharply. Bank Negara Malaysia (BNM) stepped in with interim measures in December 2024, asking insurers to spread increases over at least three years. Even so, about <strong>340,000 medical policies were surrendered</strong> between January 2024 and June 2025, according to BNM’s white paper on medical insurance.</p>
<p>MediAsas, first called the “Base MHIT plan”, is the result. It is a simple, standard plan, the same at every provider, with cost-sharing and hospital payment rules designed to keep premiums affordable over the long term.</p>` },
      { id: 'teras-fleksi', h: 'Teras and Fleksi: the two plans', tocLabel: 'Teras vs Fleksi', html: `<p>MediAsas comes in two versions, each offered as conventional insurance or as takaful. These figures are from BNM’s pilot programme. BNM says benefits may change in the final version launched in January 2027.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>MediAsas Teras</th><th>MediAsas Fleksi</th></tr></thead>
<tbody>
<tr><td>Who it is for</td><td>People with no other medical cover</td><td>People with employer or other cover who want protection for large bills</td></tr>
<tr><td>Annual limit</td><td>RM100,000 (RM150,000 from age 60)</td><td>RM300,000</td></tr>
<tr><td>Lifetime limit</td><td>None</td><td>None</td></tr>
<tr><td>Deductible</td><td>RM500 per illness or injury (RM1,000 from age 60) at network hospitals</td><td>RM10,000 a year at network hospitals, RM15,000 elsewhere</td></tr>
<tr><td>Outside the hospital network</td><td>Deductible plus 20% co-payment, capped at RM3,000</td><td>Higher deductible</td></tr>
<tr><td>No deductible for</td><td>Government hospitals, emergencies and outpatient cancer treatment</td><td>No waivers</td></tr>
</tbody></table></div>
<p>A <strong>deductible</strong> is the amount you pay yourself before the plan pays. A <strong>co-payment</strong> is a share of the bill you pay on top. Both help keep premiums lower.</p>` },
      { id: 'covered', h: 'What MediAsas covers', tocLabel: 'What it covers', html: `<ul>
<li><strong>Hospital stays:</strong> a shared room (two or four beds), intensive care, surgery and day surgery, and ambulance. You can upgrade to a single room, but you pay the difference.</li>
<li><strong>Before and after hospital:</strong> tests and consultations up to 30 days before admission and 90 days after, including physiotherapy, home nursing and the GP visit that referred you.</li>
<li><strong>Cancer:</strong> outpatient cancer treatment such as chemotherapy and radiotherapy.</li>
<li><strong>Some outpatient care at hospitals:</strong> dengue, influenza, bronchitis and pneumonia, up to RM3,000 a year.</li>
</ul>
<p>It does not cover treatment overseas, and there is no no-claim bonus.</p>
${figure('gp-consultation', 'A doctor talking with a patient in a consultation room', 'MediAsas also pays for the GP visit that refers you to hospital, and for follow-up after discharge.')}` },
      { id: 'excluded', h: 'What it doesn’t cover', tocLabel: 'Exclusions', html: `<p>BNM lists 35 main exclusions. The most important are:</p>
<ul>
<li><strong>Pre-existing conditions</strong>, and congenital or hereditary conditions</li>
<li>Mental and nervous disorders</li>
<li>Pregnancy, childbirth and fertility treatment</li>
<li>Dental treatment, spectacles and eye surgery to correct vision</li>
<li>Cosmetic surgery and weight management</li>
<li>Implanted devices such as pacemakers and hearing aids</li>
<li>Sexually transmitted infections, including HIV</li>
<li>Self-harm, substance misuse and hazardous sports</li>
</ul>
<p>There is also a <strong>30-day waiting period</strong> for illness (accidents are covered straight away) and a <strong>120-day waiting period</strong> for specified illnesses. Read the full list of exclusions in the policy before you buy.</p>` },
      { id: 'eligibility', h: 'Who can buy it', tocLabel: 'Who can buy it', html: `<ul>
<li><strong>Age:</strong> you can join from birth up to age 70, and renew each year up to age 85.</li>
<li><strong>Residency:</strong> the pilot was limited to Malaysian citizens. BNM says permanent residents and foreigners living in Malaysia will be able to join at the national launch.</li>
<li><strong>Health questions:</strong> MediAsas is fully underwritten. You must answer a health questionnaire honestly, and the insurer can decline you, charge more, or exclude a condition. BNM has said some well-managed conditions may be accepted.</li>
<li><strong>One plan only:</strong> you can hold only one MediAsas policy at a time. If you cancel it, you must go through underwriting again to rejoin.</li>
</ul>
<p>If you didn’t disclose something by mistake, the insurer can’t dispute a claim on that basis after seven years, except for fraud, deliberate non-disclosure, or major illnesses such as cancer, organ failure and serious heart disease that existed before cover started.</p>` },
      { id: 'cost', h: 'How much will it cost?', tocLabel: 'Cost', html: `<p><strong>Final premiums have not been published.</strong> The government has indicated a range of about <strong>RM60 to RM550 a month</strong>, depending on your age when you join, with the lowest premiums for younger people. Insurers will publish prices closer to the January 2027 launch.</p>
<p>Premiums are not guaranteed. They rise as you get older, and can be reviewed for everyone in the plan based on how the whole MediAsas pool performs, with at least 30 days’ written notice. Your premium does not go up just because you made a claim. BNM plans an independent governance board to review prices each year.</p>
<p><strong>Ways to pay under Budget 2027:</strong></p>
<ul>
<li>EPF members <strong>under 55</strong> can pay premiums from <strong>Akaun Sejahtera</strong> (Account 2).</li>
<li>Companies with <strong>fewer than 75 staff</strong> get <strong>RM200 off each employee’s first-year premium</strong>, for up to 50 employees. How employers claim this has not yet been announced.</li>
</ul>
<p>Premiums may also qualify for income tax relief on medical insurance, subject to LHDN’s rules.</p>` },
      { id: 'drg', h: 'How hospitals are paid, and why it matters', tocLabel: 'How hospitals are paid', html: `<p>MediAsas network hospitals are paid a set amount for each type of diagnosis and treatment, known as <strong>Diagnosis Related Groups (DRG)</strong>, instead of item by item. This aims to stop costs rising unpredictably, which keeps premiums stable.</p>
<p>For you, the deductible and limits stay the same. BNM’s example: a hospital stay for food poisoning billed at RM12,000 might be paid at RM10,000 under DRG. Separately, Budget 2027 requires all private hospitals to use standard, transparent charge categories on bills from 2027.</p>` },
      { id: 'should-you', h: 'Should you get MediAsas?', tocLabel: 'Is it right for you?', html: `<ul>
<li><strong>You have no medical cover:</strong> Teras is designed for you. Compare prices when they are published in early 2027.</li>
<li><strong>You only have employer cover:</strong> employer plans usually end when you leave the job and may have low limits. Fleksi is designed to sit on top for large bills.</li>
<li><strong>You already have a personal plan:</strong> BNM says MediAsas is meant to complement existing cover, not replace it. Compare limits, room and board, exclusions and premiums carefully. Your current plan may cover conditions MediAsas excludes, especially if you have developed a condition since you bought it.</li>
<li><strong>You are on a low income:</strong> PeKa B40 and MySalam already give free protection to eligible Malaysians. Government hospitals remain heavily subsidised.</li>
</ul>
<div class="box box--pink" role="note"><span class="box__title">Don’t cancel your current plan first</span><p style="font-size:16px;line-height:1.6">If you cancel an existing policy, any condition you have developed since it started is likely to count as pre-existing under MediAsas and won’t be covered. Only change plans once new cover has been approved and you have compared what you would lose.</p></div>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a GP before you need a hospital',
    clinicsTocLabel: 'Find a GP',
    clinicsIntro: 'A regular GP can manage most illnesses, refer you to a specialist when you need one, and give you the referral letter many insurers ask for. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, with opening hours and directions.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['When does MediAsas start?', 'MediAsas launches nationwide in January 2027. A pilot with six insurers and takaful operators and 10 private hospitals ran in the Klang Valley from July 2026.'],
      ['How much is MediAsas a month?', 'Final premiums have not been published. The government has indicated about RM60 to RM550 a month, depending on your age when you join.'],
      ['What is the difference between MediAsas Teras and Fleksi?', 'Teras is a basic plan with an annual limit of RM100,000 (RM150,000 from age 60) and a deductible of RM500 per illness at network hospitals. Fleksi has a RM300,000 limit and a RM10,000 yearly deductible, and is meant to top up employer cover.'],
      ['Does MediAsas cover pre-existing conditions?', 'No. MediAsas is fully underwritten and excludes pre-existing conditions. Some well-managed conditions may be accepted at the insurer’s discretion.'],
      ['Can I use EPF to pay for MediAsas?', 'Yes, if you are under 55. Budget 2027 allows EPF members to pay MediAsas premiums from Akaun Sejahtera.'],
      ['Should I cancel my current medical insurance for MediAsas?', 'Not without comparing carefully and getting new cover approved first. Conditions you developed after buying your current plan would likely be excluded as pre-existing under MediAsas.'],
    ],
    sources: [
      ['Bank Negara Malaysia — MediAsas FAQs, pilot programme (29 Jul 2026)', 'https://www.bnm.gov.my/documents/20124/22555060/MediAsas_Pilot_FAQs_Customers.pdf'],
      ['Bank Negara Malaysia — Resetting medical insurance and takaful: white paper (22 Jan 2026)', 'https://www.bnm.gov.my/-/mhitreset'],
      ['The Star — Finance Ministry unveils MediAsas health insurance pilot (6 Jul 2026)', 'https://www.thestar.com.my/news/nation/2026/07/06/finance-ministry-unveils-039mediasas039-health-insurance-pilot-to-begin-end-of-july'],
      ['The Star — Bank Negara plans governance framework to keep MediAsas sustainable (29 Jul 2026)', 'https://www.thestar.com.my/business/business-news/2026/07/29/bank-negara-plans-to-set-up-governance-framework-to-keep-mediasas-sustainable-and-affordable'],
      ['RinggitPlus — MediAsas Teras and Fleksi set to launch with deductibles from RM500 (29 Sep 2026)', 'https://ringgitplus.com/en/blog/event/mediasas-teras-and-fleksi-set-to-launch-with-deductibles-from-rm500.html'],
      ['Lowyat.NET — Budget 2027: MediAsas to launch in January (9 Oct 2026)', 'https://www.lowyat.net/2026/406897/budget-2027-mediasas-to-launch-january/'],
      ['The Star — LIAM welcomes RM200 MediAsas subsidy for SME employees (9 Oct 2026)', 'https://www.thestar.com.my/business/business-news/2026/10/09/liam-welcomes-rm200-mediasas-subsidy-for-eligible-sme-employees'],
      ['CodeBlue — Budget 2027: RM200 MediAsas premium subsidies for 200,000 workers (Oct 2026)', 'https://codeblue.galencentre.org/2026/10/budget-2027-rm200-mediasas-premium-subsidies-for-200000-workers-in-first-year/'],
      ['Ministry of Finance — Budget 2027 speech (9 Oct 2026)', 'https://belanjawan.mof.gov.my/pdf/belanjawan2027/ucapan/ub27.pdf'],
      ['RinggitPlus — Premium hikes drive over 340,000 medical insurance cancellations (27 Jan 2026)', 'https://ringgitplus.com/en/blog/personal-finance-news/premium-hikes-drive-over-340000-medical-insurance-cancellations.html'],
      ['CodeBlue — Bank Negara caps medical insurance premium hikes at 10% for most policyholders (Dec 2024)', 'https://codeblue.galencentre.org/2024/12/bank-negara-caps-medical-insurance-premium-hikes-at-10-for-most-policyholders/'],
    ],
    related: ['budget-2027-health-malaysia', 'clinic-or-emergency-department', 'free-health-screening-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'world-diabetes-day-2026-kl',
    title: 'World Diabetes Day 2026: how and where to get your blood sugar checked in KL',
    crumb: 'World Diabetes Day 2026',
    desc: 'World Diabetes Day is on 14 November. Which blood sugar test to ask for, Malaysia’s cut-offs for diabetes and prediabetes, free tests in KL and what to do next.',
    excerpt: 'World Diabetes Day falls on Saturday 14 November. Which test to ask for, what the numbers mean under Malaysian guidelines, free ways to get tested in KL, and what to do if you have prediabetes.',
    standfirst: 'Two in five Malaysian adults with diabetes don’t know they have it. This year’s World Diabetes Day, on Saturday 14 November, is about acting early. Here is which blood sugar test to ask for, what the results mean under Malaysian guidelines, and where to get tested in Kuala Lumpur, often for free.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Diabetes mellitus', 'Kencing manis'],
    image: 'healthy-salad', imageAlt: 'A table of salad, fruit and vegetables in small bowls',
    keyPoints: [
      'World Diabetes Day is on Saturday 14 November 2026. The theme for 2026–27 is “Early action on diabetes”.',
      '15.6% of Malaysian adults have diabetes, and two in five of them don’t know it.',
      'Malaysia diagnoses diabetes at an HbA1c of 6.3% or above, lower than the 6.5% used in many other countries. 5.7% to 6.2% is prediabetes.',
      'A finger-prick reading is only a first screen. Diabetes is confirmed with a blood test from a vein, usually repeated.',
      'Free tests are available at Klinik Kesihatan (book in MySejahtera), through PeKa B40 and PERKESO, and at Diabetes Malaysia’s KL event on 14 November.',
    ],
    sections: [
      { id: 'theme', h: 'This year’s theme: early action', tocLabel: 'Early action', html: `<p>The International Diabetes Federation has chosen <strong>“Early action on diabetes”</strong> as the World Diabetes Day theme for 2026 and 2027. It focuses on finding diabetes sooner and lowering the risk for people who don’t have it yet. Globally, about 1 in 9 adults has diabetes, and up to half already have complications by the time they are diagnosed.</p>
<p>In Malaysia, the National Health and Morbidity Survey (NHMS) 2023 found diabetes in <strong>15.6% of adults</strong>, about 3.6 million people. <strong>Two in five</strong> didn’t know they had it, and more than half of those who did know didn’t have their blood sugar under control. On 6 October 2026, the Health Minister told Parliament that more than 80% of adults aged 18 to 29 with diabetes are undiagnosed. We covered those figures in <a href="/articles/undiagnosed-diabetes-high-blood-pressure-young-adults/">undiagnosed diabetes and high blood pressure in young Malaysians</a>.</p>` },
      { id: 'who', h: 'Who should get tested', tocLabel: 'Who should get tested', html: `<p>Malaysia’s Clinical Practice Guidelines recommend a blood sugar test for everyone from <strong>age 30</strong>, repeated every year if normal. Get tested <strong>earlier</strong>, at any adult age, if you:</p>
<ul>
<li>have a BMI over 23 (lower than the international overweight cut-off of 25, because Asians tend to develop diabetes at lower weights)</li>
<li>have a parent, brother or sister with diabetes</li>
<li>had diabetes in pregnancy</li>
<li>have polycystic ovary syndrome (PCOS), heart disease, or abnormal cholesterol</li>
<li>are mostly inactive, or take medicines such as long-term steroids</li>
</ul>
<p>If you have prediabetes, you should be tested every year.</p>
${figure('glucometer', 'A blood glucose meter and test strips on a table', 'A finger-prick glucose test is a useful first check, but it can’t diagnose diabetes on its own.')}` },
      { id: 'tests', h: 'Which test to ask for', tocLabel: 'Which test', html: `<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>How it works</th><th>Fasting?</th></tr></thead>
<tbody>
<tr><td>HbA1c</td><td>Shows your average blood sugar over the last 2–3 months</td><td>No</td></tr>
<tr><td>Fasting plasma glucose</td><td>Blood sugar after an overnight fast</td><td>Yes, at least 8 hours</td></tr>
<tr><td>Oral glucose tolerance test (OGTT)</td><td>Blood sugar before and 2 hours after a 75 g glucose drink</td><td>Yes; plain water only, rest during the test</td></tr>
<tr><td>Finger-prick (capillary) glucose</td><td>A quick screen with a glucometer</td><td>Either</td></tr>
</tbody></table></div>
<p><strong>HbA1c</strong> is the most convenient, because you don’t need to fast. It is less reliable if you are anaemic, have kidney disease, take iron supplements or steroids, or have a haemoglobin variant such as thalassaemia trait. Your doctor may use a glucose test instead.</p>
<p>A <strong>finger-prick test</strong> at a pharmacy, event or at home is only a first screen. If it reads 5.6 mmol/L or higher fasting, or 7.8 mmol/L or higher at any time, see a doctor for a proper blood test.</p>` },
      { id: 'results', h: 'What your results mean', tocLabel: 'Your results', html: `<p>These are the cut-offs in Malaysia’s Clinical Practice Guidelines (2020), for blood taken from a vein:</p>
<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>Normal</th><th>Prediabetes</th><th>Diabetes</th></tr></thead>
<tbody>
<tr><td>HbA1c</td><td>Below 5.7%</td><td>5.7% to 6.2%</td><td>6.3% or above</td></tr>
<tr><td>Fasting glucose</td><td>Below 6.1 mmol/L</td><td>6.1 to 6.9 mmol/L</td><td>7.0 mmol/L or above</td></tr>
<tr><td>2 hours after glucose drink (OGTT)</td><td>Below 7.8 mmol/L</td><td>7.8 to 11.0 mmol/L</td><td>11.1 mmol/L or above</td></tr>
<tr><td>Random glucose</td><td>—</td><td>—</td><td>11.1 mmol/L or above, with symptoms</td></tr>
</tbody></table></div>
<p>Malaysia uses an HbA1c of <strong>6.3%</strong> to diagnose diabetes, lower than the 6.5% used in many countries. Local research found 6.5% would miss too many Malaysians with diabetes.</p>
<p>If you have <strong>no symptoms</strong>, diabetes is diagnosed only after <strong>two abnormal results</strong>, either two different tests on the same blood sample or the same test on two occasions. One abnormal result is enough if you also have symptoms such as thirst, passing a lot of urine, or weight loss.</p>` },
      { id: 'prediabetes', h: 'If you have prediabetes', tocLabel: 'Prediabetes', html: `<p>Prediabetes means your blood sugar is higher than normal but not yet in the diabetes range. This is where early action works best. In a large US trial, a lifestyle programme cut the number of people with prediabetes who went on to develop type 2 diabetes by <strong>58%</strong>, and by 71% in people over 60.</p>
<p>Malaysian guidelines recommend:</p>
<ul>
<li><strong>Losing at least 7% of your body weight</strong> if you are overweight. For a 75 kg person, that is about 5 kg.</li>
<li><strong>At least 150 minutes of activity a week</strong>, such as brisk walking for 30 minutes on five days.</li>
<li>Cutting sweet drinks and refined carbohydrates. Fill half your plate with vegetables, a quarter with protein and a quarter with whole grains, following the Suku-Suku Separuh guide.</li>
<li>A blood sugar test every year. Your doctor may also suggest medicine if your risk is high.</li>
</ul>
${figure('morning-walk', 'People walking in a park in the morning', 'Thirty minutes of brisk walking on five days a week meets the activity target for preventing diabetes.')}` },
      { id: 'free', h: 'Free and low-cost tests in Kuala Lumpur', tocLabel: 'Free tests in KL', html: `<ul>
<li><strong>Klinik Kesihatan:</strong> government health clinics offer free blood sugar, blood pressure, BMI and cholesterol checks under the National Health Screening Initiative. Book in the <strong>MySejahtera</strong> app under Appointments, then NHSI. Your results appear in the app. More than 2.65 million people have been screened since 2022.</li>
<li><strong>PeKa B40:</strong> free screening, including blood sugar, for Sumbangan Tunai Rahmah recipients aged 40 and above, and their spouses. Check your eligibility with your IC number on the PeKa B40 website.</li>
<li><strong>PERKESO Health Screening Programme:</strong> a free, one-time screening for PERKESO contributors aged 40 to 59, booked through the SEHATi app.</li>
<li><strong>Diabetes Malaysia’s KL event:</strong> Diabetes Malaysia lists a World Diabetes Day state event in Kuala Lumpur on <strong>Saturday 14 November, 9am to 4pm</strong>. The venue had not been announced at the time of writing. Call Diabetes Malaysia on <a href="tel:+60379574062">03-7957 4062</a> for details.</li>
</ul>
<p>For more on these programmes, see <a href="/articles/free-health-screening-malaysia/">free health screening in Malaysia 2026</a>. Any GP clinic can also do an HbA1c or fasting glucose test.</p>` },
      { id: 'urgent', h: 'When high blood sugar is an emergency', tocLabel: 'Emergency signs', html: `<p>Very high blood sugar can cause diabetic ketoacidosis (DKA) or a hyperosmolar state (HHS). Both are medical emergencies, and they are sometimes the first sign of undiagnosed diabetes, especially in older people.</p>
<div class="box box--pink" role="note"><span class="box__title">Go to an emergency department or call 999 if someone has</span><ul><li>Vomiting or stomach pain with high blood sugar</li><li>Fast or deep breathing, or a fast heartbeat</li><li>Fruity-smelling breath</li><li>Drowsiness or confusion</li><li>Extreme thirst and passing a lot of urine, with weakness</li></ul></div>
<p>Don’t drive yourself. See our guide to <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a blood sugar test',
    clinicsTocLabel: 'Where to get tested',
    clinicsIntro: 'Any GP clinic can do an HbA1c or fasting glucose test and explain your results. Ask whether you need to fast before you go. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-sunday/', 'Clinics open on Sunday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['When is World Diabetes Day 2026?', 'Saturday 14 November 2026. The theme for 2026 and 2027 is “Early action on diabetes”.'],
      ['What HbA1c level means diabetes in Malaysia?', 'An HbA1c of 6.3% or above, confirmed by a second abnormal result if you have no symptoms. An HbA1c of 5.7% to 6.2% is prediabetes.'],
      ['Do I need to fast for a diabetes test?', 'Not for an HbA1c test. For a fasting glucose test or an oral glucose tolerance test, fast for at least 8 hours beforehand. Plain water is fine.'],
      ['Can a glucometer diagnose diabetes?', 'No. A finger-prick reading is a first screen only. If it is high, a doctor will confirm with a blood test from a vein, such as fasting glucose, HbA1c or an OGTT.'],
      ['Where can I get a free diabetes test in KL?', 'At government health clinics (book through MySejahtera under NHSI), through PeKa B40 if you are an STR recipient aged 40+, or through PERKESO’s screening programme if you are a contributor aged 40–59.'],
      ['Can prediabetes be reversed?', 'Often, yes. Losing at least 7% of body weight and doing 150 minutes of activity a week can bring blood sugar back to normal and greatly lowers the risk of type 2 diabetes.'],
    ],
    sources: [
      ['World Diabetes Day — Early action on diabetes (2026–27 campaign)', 'https://worlddiabetesday.org/'],
      ['International Diabetes Federation — World Diabetes Day 2026: how to get involved', 'https://idf.org/news-and-resources/webinars/world-diabetes-day-2026-how-to-get-involved/'],
      ['CodeBlue — NHMS 2023: over two million adults live with three NCDs (28 May 2024)', 'https://codeblue.galencentre.org/2024/05/over-two-million-adults-in-malaysia-live-with-three-ncds-nhms-2023/'],
      ['The Star — Over 80% of young Malaysians with diabetes, hypertension unaware (6 Oct 2026)', 'https://www.thestar.com.my/news/nation/2026/10/06/over-80-of-young-malaysians-with-diabetes-hypertension-unaware-of-condition-says-dr-dzulkefly'],
      ['MOH — Clinical Practice Guidelines: Management of Type 2 Diabetes Mellitus, 6th edition (2020)', 'https://mems.my/wp-content/uploads/2021/01/CPG_T2DM_6thEdition_2020.pdf'],
      ['CDC — National Diabetes Prevention Program', 'https://www.cdc.gov/diabetes/hcp/lifestyle-change-program/index.html'],
      ['Bernama — NHSI health screening via MySejahtera (28 Jul 2026)', 'https://www.bernama.com/en/general/news.php?id=2586840'],
      ['MyGOV — PeKa B40', 'https://www.malaysia.gov.my/topics/peka-b40'],
      ['PERKESO — Health Screening Programme', 'https://www.perkeso.gov.my/images/hebahan/HSP-ProgramSaringanKesihatanPERKESO2025.pdf'],
      ['Diabetes Malaysia — WDD state event, Kuala Lumpur (14 Nov 2026)', 'https://diabetesmalaysia.org.my/events/wdd-state-event-kuala-lumpur/'],
      ['NHS — High blood sugar (hyperglycaemia) (reviewed Mar 2026)', 'https://www.nhs.uk/conditions/high-blood-sugar-hyperglycaemia/'],
    ],
    related: ['normal-blood-sugar-level-malaysia', 'undiagnosed-diabetes-high-blood-pressure-young-adults', 'free-health-screening-malaysia'],
  },
];
