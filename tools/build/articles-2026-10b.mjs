// Articles published late October 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-10-26';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const OCT_2026_B = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'free-health-screening-malaysia',
    title: 'Free health screening in Malaysia 2026: PERKESO, PeKa B40, Selangor Saring and more',
    crumb: 'Free health screening in Malaysia',
    desc: 'PERKESO HSP, PeKa B40, Selangor Saring and free checks at Klinik Kesihatan: who qualifies, what is tested, how to book, and what Budget 2027 changes.',
    excerpt: 'Several free health screening programmes run in Malaysia in 2026. Who qualifies for each, what they test, how to book, and which checks you need at your age.',
    standfirst: 'Many Malaysians qualify for a free health check without knowing it. Here is who each programme is for, what it tests, how to book, and which screenings guidelines recommend at your age.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    image: 'blood-sample', imageAlt: 'A blood sample tube being prepared for testing',
    keyPoints: [
      'PERKESO’s Health Screening Programme (HSP 2026) is free, once only, for Malaysian workers aged 40–59 who meet the contribution rules. Check and book in the SEHATi app.',
      'PeKa B40 is free for Sumbangan Tunai Rahmah (STR) recipients aged 40 and above, and their spouses. No registration is needed.',
      'Government health clinics (Klinik Kesihatan) offer free basic checks for blood pressure, blood sugar, cholesterol, BMI and mental health.',
      'Selangor Saring runs free community screening days across the state until December. Register in the SELangkah app.',
      'Budget 2027 keeps PeKa B40 going and adds PERKESO screening vouchers for commercial vehicle drivers.',
    ],
    sections: [
      { id: 'why', h: 'Why get screened if you feel fine?', tocLabel: 'Why get screened', html: `<p>High blood pressure, diabetes and high cholesterol usually cause no symptoms for years. By the time they do, they may already have damaged the heart, kidneys or eyes. Screening finds them early, when they are easier to treat.</p>
<p>Recent Malaysian figures show how common hidden problems are. Among PERKESO contributors screened between 2023 and 2025, mostly aged 40–59, <strong>59.2% were overweight or obese</strong>, about 19% had diabetes and 17.45% had high blood pressure. In PeKa B40’s 2025 screening, <strong>44.37% of participants</strong> had diabetes, high blood pressure or high cholesterol.</p>
${figure('glucometer', 'A blood glucose meter and test strips on a table', 'Blood sugar, blood pressure and cholesterol checks are part of every free screening programme below.')}` },
      { id: 'at-a-glance', h: 'Free screening programmes at a glance', tocLabel: 'Programmes at a glance', html: `<div class="table-wrap"><table>
<thead><tr><th>Programme</th><th>Who it is for</th><th>How to book</th></tr></thead>
<tbody>
<tr><td>PERKESO HSP 2026</td><td>Malaysian workers aged 40–59 who meet PERKESO’s contribution rules, once only</td><td>SEHATi app, then a panel clinic</td></tr>
<tr><td>PeKa B40</td><td>STR recipients aged 40+, and their spouses</td><td>Automatic; go to a PeKa B40 clinic with your MyKad</td></tr>
<tr><td>Klinik Kesihatan (NHSI)</td><td>Everyone; free basic checks</td><td>Walk in, or book through MySejahtera</td></tr>
<tr><td>Selangor Saring</td><td>Selangor residents</td><td>SELangkah app; sessions until December</td></tr>
</tbody></table></div>
<p>Rules can change during the year, so check the official app or website for each programme before you go.</p>` },
      { id: 'perkeso', h: 'PERKESO Health Screening Programme (HSP 2026)', tocLabel: 'PERKESO HSP 2026', html: `<p>PERKESO (SOCSO) offers a free health screening to working Malaysians. The current edition, listed as HSP 2026 in PERKESO’s SEHATi help pages, continues the HSP 3.0 programme that began in 2023.</p>
<p><strong>Who qualifies:</strong></p>
<ul>
<li>Malaysian citizens aged <strong>40 to 59</strong></li>
<li>At least one month of Invalidity Scheme (Skim Keilatan) contributions in the current year, and at least 12 months of contributions in total</li>
<li>You have <strong>not had an HSP screening before</strong>. It is a one-time benefit, not a yearly one.</li>
</ul>
<p><strong>What is tested in 2026:</strong> a physical examination and family history, full blood count, HbA1c (average blood sugar), a fasting cholesterol profile, a urine test and a mental health screening, followed by a review of your results with a doctor. Women are also offered a Pap smear and a mammogram. For a small extra charge you can add blood group, liver and kidney tests.</p>
<p><strong>How to book:</strong> download the <strong>SEHATi</strong> app, check your eligibility and choose a panel clinic. The clinic will confirm your eligibility with your IC number. If you are not eligible, SEHATi also lists paid screening packages for PERKESO contributors.</p>
<p>PERKESO has not published a closing date for 2026, so check the SEHATi app for the latest details.</p>` },
      { id: 'peka-b40', h: 'PeKa B40 (for STR recipients aged 40+)', tocLabel: 'PeKa B40', html: `<p>PeKa B40 is a government scheme run by ProtectHealth for lower-income Malaysians. You qualify if you are a Malaysian aged <strong>40 or above</strong> and receive <strong>Sumbangan Tunai Rahmah (STR)</strong>, or are the spouse of a recipient. Eligibility is automatic, so there is nothing to register.</p>
<p>The free screening covers your health history and risk factors, a physical examination, blood and urine tests, a mental health screening, and a breast examination for women or a prostate examination for men at risk. It is done at private GP clinics registered with PeKa B40. You can check your eligibility with your IC number on the PeKa B40 website.</p>
<p>Since 2019 the scheme has served more than 1.9 million people. Budget 2027 allocates RM80 million to continue it.</p>` },
      { id: 'klinik-kesihatan', h: 'Free checks at government health clinics', tocLabel: 'Klinik Kesihatan', html: `<p>Under the National Health Screening Initiative (NHSI), government health clinics and PeKa B40 clinics offer free basic screening for <strong>blood sugar, blood pressure, BMI, cholesterol and mental health</strong>. If a result is abnormal, you are referred for confirmatory tests and follow-up.</p>
<p>You can walk in to your nearest Klinik Kesihatan or book an appointment through the <strong>MySejahtera</strong> app. Government clinics also run other free or low-cost screenings, such as cervical screening and mammogram referrals for women. See our guide to <a href="/articles/breast-cancer-screening-malaysia/">breast cancer screening and free mammograms</a>.</p>` },
      { id: 'selangor-saring', h: 'Selangor Saring 2026', html: `<p>Selangor Saring is the Selangor state government’s free health screening programme, run with Selcare since 2022. In 2026 it has RM2.5 million in funding and runs <strong>from January to December</strong>, mostly at weekends, across the state’s 56 constituencies.</p>
<p>Depending on your risk, tests at the screening days can include heart, blood pressure, diabetes and kidney checks, screening for breast, cervical, colorectal and prostate cancer, and eye, dental and hearing checks.</p>
<p><strong>How to register:</strong> fill in the screening form in the <strong>SELangkah</strong> app, then choose a location and date. Some sessions accept walk-ins, but booking first is safer. The Selcare helpline is 1-800-22-6600.</p>` },
      { id: 'budget-2027', h: 'What Budget 2027 changes', html: `<p>Budget 2027, tabled on 9 October 2026, includes several screening measures:</p>
<ul>
<li><strong>PeKa B40 continues</strong>, with RM80 million for free screening and treatment support for STR recipients and their spouses aged 40+.</li>
<li><strong>Screening vouchers for commercial vehicle drivers</strong>, worth up to RM30, through PERKESO.</li>
<li><strong>Free <a href="/articles/thalassaemia-screening-malaysia/">thalassaemia screening</a></strong> at MOH facilities extended to the husbands and children of families who carry the gene.</li>
<li>Screening and mobile clinics run by university teaching hospitals for rural and lower-income communities.</li>
</ul>` },
      { id: 'by-age', h: 'Which screenings you need at your age', tocLabel: 'Screenings by age', html: `<p>Malaysia’s Ministry of Health Clinical Practice Guidelines recommend these checks for adults at average risk. Your doctor may advise earlier or more frequent tests if you have risk factors or a family history.</p>
<div class="table-wrap"><table>
<thead><tr><th>Check</th><th>Who and how often</th></tr></thead>
<tbody>
<tr><td>Blood pressure</td><td>All adults over 18, at least once a year</td></tr>
<tr><td>Blood sugar (diabetes)</td><td>From age 30, yearly if normal. Earlier if you are overweight and have another risk factor, or had diabetes in pregnancy</td></tr>
<tr><td>Cholesterol</td><td>All adults over 30. From 18 if you are at high risk, for example with a strong family history</td></tr>
<tr><td>Cervical screening</td><td>Women aged 30–49: HPV test, every 5 years if negative. Pap smear at ages 21–29 and 50–65</td></tr>
<tr><td>Breast (mammogram)</td><td>Every 2 years for women aged 50–74. Earlier for women at high risk</td></tr>
<tr><td>Bowel (colorectal)</td><td>Ages 50–75: a stool test (iFOBT) every year, with colonoscopy if positive</td></tr>
</tbody></table></div>` },
      { id: 'prepare', h: 'How to prepare, and what to do with your results', tocLabel: 'Preparing and results', html: `<ul>
<li><strong>Ask whether you need to fast.</strong> If your tests include a fasting blood test, you will usually be asked not to eat for 8 to 10 hours beforehand. Plain water is fine.</li>
<li><strong>Bring</strong> your MyKad, a list of any medicines you take, and any previous results.</li>
<li><strong>Don’t skip the results review.</strong> A screening only helps if abnormal results are followed up. If a result is borderline or high, ask what the next step is and when to repeat the test.</li>
</ul>
<div class="box box--pink" role="note"><span class="box__title">Screening is not for symptoms</span><p style="font-size:16px;line-height:1.6">If you already have symptoms, such as chest pain, unexplained weight loss, a breast lump or blood in your stool, see a doctor now rather than waiting for a screening day. For chest pain or difficulty breathing, call 999.</p></div>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a health check',
    clinicsTocLabel: 'Where to get checked',
    clinicsIntro: 'If you don’t qualify for a free programme, most GP clinics offer health screening and can explain your results. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open at weekends and around the clock.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-sunday/', 'Clinics open on Sunday'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['Who is eligible for the free PERKESO health screening in 2026?', 'Malaysian citizens aged 40 to 59 with at least one month of Invalidity Scheme contributions this year, at least 12 months in total, and no previous HSP screening. Check your eligibility in the SEHATi app.'],
      ['Can I do the PERKESO health screening every year?', 'No. The HSP is a one-time benefit. If you have already had an HSP screening, PERKESO contributors can book paid packages through the SEHATi app instead.'],
      ['How do I know if I qualify for PeKa B40?', 'If you are a Malaysian aged 40 or above and receive Sumbangan Tunai Rahmah (STR), or are the spouse of a recipient, you qualify automatically. You can check with your IC number on the PeKa B40 website.'],
      ['Is health screening free at Klinik Kesihatan?', 'Yes, basic screening for blood pressure, blood sugar, cholesterol, BMI and mental health is free at government health clinics under the National Health Screening Initiative. You can book through MySejahtera.'],
      ['How do I register for Selangor Saring?', 'Fill in the screening form in the SELangkah app and choose a location and date. Sessions run across Selangor until December 2026, mostly at weekends.'],
    ],
    sources: [
      ['PERKESO SEHATi — HSP 2026 parameters', 'https://help.sehati.my/749948-HSP-2026-Parameters'],
      ['PERKESO SEHATi — Eligibility for the Health Screening Programme', 'https://help.sehati.my/183610-Why-is-the-patient-not-eligible-for-PERKESOs-Health-Screening-Program-HSP-30'],
      ['PERKESO SEHATi — Types of health screening offered to eligible workers', 'https://help.sehati.my/831268-Types-of-health-screening-offered-to-eligible-worker'],
      ['PERKESO SEHATi — HSP paid package', 'https://help.sehati.my/931849-What-is-HSP-Paid-Package'],
      ['The Star — SOCSO screening shows 59.2% of workers overweight or obese (17 May 2026)', 'https://www.thestar.com.my/news/nation/2026/05/17/socso-screening-shows-592-of-workers-overweight-or-obese'],
      ['MyGOV — PeKa B40', 'https://www.malaysia.gov.my/topics/peka-b40'],
      ['The Star — Major find in B40 health screening (14 Jul 2026)', 'https://www.thestar.com.my/news/nation/2026/07/14/major-find-in-b40-health-screening'],
      ['CodeBlue — Budget 2027: ProtectHealth welcomes RM280m for health screening (9 Oct 2026)', 'https://codeblue.galencentre.org/2026/10/budget-2027-protecthealth-welcomes-rm280m-for-health-screening-hospital-outsourcing/'],
      ['Sarawak Tribune / Bernama — Free NHSI screenings offered (6 May 2026)', 'https://www.sarawaktribune.com/free-nhsi-screenings-offered-to-detect-diabetes-hypertension-and-heart-disease/'],
      ['MyGOV — Booking an appointment for a health check (MySejahtera)', 'https://www.malaysia.gov.my/en/digital-services/application-for-booking-an-appointment-for-health-check'],
      ['Media Selangor — Selangor Saring 2026 funding (5 Jul 2026)', 'https://mediaselangor.com/en/2026/07/382862'],
      ['Media Selangor — Selangor Saring schedule 2026 (5 Jun 2026)', 'https://mediaselangor.com/en/2026/06/377497'],
      ['Ministry of Finance — Budget 2027 summary (Touchpoint)', 'https://belanjawan.mof.gov.my/pdf/belanjawan2027/ucapan/touchpoint-budget-bm.pdf'],
      ['Bernama — Health screening vouchers for commercial vehicle drivers (21 Oct 2026)', 'https://www.bernama.com/en/general/news.php?id=2623398'],
      ['MOH — Clinical Practice Guidelines: Management of Hypertension, 5th edition (2018)', 'https://mymahtas2.moh.gov.my/files/CPG%20Maagement%20of%20Hypertension%20CPG%202018%20V3.8%20FA.pdf'],
      ['MOH — Clinical Practice Guidelines: Management of Type 2 Diabetes Mellitus, 6th edition (2020)', 'https://medic.usm.my/images/Anaesthesiology%20and%20Intensive%20Care%20Unit/Guidelines/CPG%20Management%20of%20Type%202%20Diabetes%20Mellitus%206th%20Edition%2020210413.pdf'],
      ['MOH — Clinical Practice Guidelines: Management of Dyslipidaemia, 5th edition (2017)', 'https://mymahtas2.moh.gov.my/files/CPG%20Management%20of%20Dyslipidaemia%202017%20(5th%20Edition).pdf'],
      ['MOH — Guidelines for Primary HPV Testing in Cervical Cancer Screening (2019)', 'https://hq.moh.gov.my/bpkk/images/3.Penerbitan/2.Orang_Awam/5.Kesihatan_Dewasa/2.PDF/3Guidelines_For_Primary_HPV_Testing_In_Cervical_Cancer_Screening_in_Malaysia.pdf'],
      ['MOH — Management of Breast Cancer, 3rd edition, Quick Reference (2019)', 'https://mymahtas2.moh.gov.my/files/QR_Management_of_Breast_Cancer_(Third_Edition)_%20(1).pdf'],
      ['MOH — Clinical Practice Guidelines: Management of Colorectal Carcinoma (2017)', 'https://mymahtas2.moh.gov.my/files/CPG%20Management%20of%20Colorectal%20%20Carcinoma.pdf'],
    ],
    related: ['world-diabetes-day-2026-kl', 'budget-2027-health-malaysia', 'breast-cancer-screening-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'dengue-vaccine-qdenga-malaysia',
    title: 'Dengue vaccine in Malaysia: what Qdenga can and can’t do',
    crumb: 'Dengue vaccine in Malaysia',
    desc: 'Who can get the Qdenga dengue vaccine in Malaysia, how well it works, the DENV-3 caveat, side effects and typical cost. Not in the national programme.',
    excerpt: 'With dengue cases up sharply in 2026, many people are asking about the vaccine. Who can get it, how well it works, the important DENV-3 caveat, and what it costs.',
    standfirst: 'Dengue cases in Malaysia have risen sharply in 2026, and more people are asking about the dengue vaccine. Here is who can have it, how well it protects, an important caveat about this year’s main dengue strain, and what to expect.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Dengue', 'Denggi'],
    image: 'vaccination', imageAlt: 'A vaccine injection being given in the upper arm',
    keyPoints: [
      'Qdenga is the only dengue vaccine available in Malaysia. It is conditionally registered for people aged 4 and above, given as two doses three months apart.',
      'It is not part of the National Immunisation Programme, so it is only available at private clinics and hospitals.',
      'In trials it cut dengue hospitalisations by about 84% over four and a half years.',
      'In people who have never had dengue, it did not protect against DENV-3, the strain driving Malaysia’s 2026 surge. Discuss this with your doctor.',
      'The vaccine does not replace mosquito control or knowing the warning signs of severe dengue.',
    ],
    sections: [
      { id: 'situation', h: 'Dengue in Malaysia in 2026', tocLabel: 'Dengue in 2026', html: `<p>Malaysia recorded <strong>78,225 dengue cases and 68 deaths</strong> between 4 January and 25 October 2026, according to the national iDengue portal. Selangor accounts for the largest share, followed by the Federal Territories and Johor. By early September, cases were 66% higher than in the same period of 2025, and deaths had almost doubled.</p>
<p>The Ministry of Health has linked the rise to a shift in the dominant dengue strain, from <strong>DENV-2 to DENV-3</strong>. That matters when thinking about the vaccine, as explained below.</p>
${figure('aedes-mosquito', 'A close-up of an Aedes mosquito on skin', 'Dengue is spread by Aedes mosquitoes, which bite mostly in the early morning and late afternoon.')}` },
      { id: 'what', h: 'What is the dengue vaccine?', tocLabel: 'What the vaccine is', html: `<p>Qdenga (also known as TAK-003) is a live, weakened vaccine designed to protect against all four types of dengue virus (DENV-1 to DENV-4). It is given as an injection under the skin, in <strong>two doses three months apart</strong>. A booster dose is not currently part of the approved schedule.</p>
<p>Malaysia’s Drug Control Authority gave it <strong>conditional registration in February 2024</strong>. That means the company must keep submitting safety and effectiveness data. A renewal of the conditional registration has been reported from February 2026.</p>
<p>The vaccine is <strong>not in the National Immunisation Programme</strong>. In August 2026, the Health Minister said the Ministry was still studying whether to include it, including a cost-benefit analysis. For now, it is only offered privately.</p>` },
      { id: 'who', h: 'Who can have it, and who should not', tocLabel: 'Who can have it', html: `<p>In Malaysia, it is registered for people <strong>aged 4 and above</strong>, whether or not they have had dengue before. There is little data for people over 60.</p>
<p>The World Health Organization recommends it mainly for children aged 6 to 16 in areas with high dengue transmission, and says people up to 60 with conditions such as diabetes or high blood pressure may also be offered it.</p>
<p><strong>You should not have it if you:</strong></p>
<ul>
<li>are pregnant or breastfeeding (and you should avoid becoming pregnant for at least a month afterwards)</li>
<li>have a weakened immune system, for example from chemotherapy, high-dose steroids or HIV with low immunity</li>
<li>had a severe allergic reaction to a previous dose or to any ingredient</li>
</ul>
<p>If you have a high fever on the day, the vaccination should be delayed.</p>` },
      { id: 'how-well', h: 'How well does it work?', tocLabel: 'How well it works', html: `<p>The main trial followed about 20,000 children aged 4 to 16 in Asia and Latin America. Four and a half years after the second dose, the vaccine had reduced:</p>
<div class="table-wrap"><table>
<thead><tr><th>Group</th><th>Fewer dengue cases</th><th>Fewer hospital admissions</th></tr></thead>
<tbody>
<tr><td>Everyone</td><td>61%</td><td>84%</td></tr>
<tr><td>Had dengue before</td><td>64%</td><td>86%</td></tr>
<tr><td>Never had dengue</td><td>54%</td><td>79%</td></tr>
</tbody></table></div>
<p>Protection was highest in the first year and a half, and lowest in children aged 4 to 5.</p>` },
      { id: 'denv3', h: 'The DENV-3 caveat', html: `<p>Protection was not the same against every dengue type. In people who had <strong>never had dengue</strong>, the trial found good protection against DENV-2 and some against DENV-1, but <strong>no protection against DENV-3</strong>, and too few DENV-4 cases to show any benefit.</p>
<p>The few cases of severe dengue in vaccinated people who had never had dengue were all DENV-3. The difference was not statistically significant, but WHO says a higher risk “cannot be conclusively ruled out”. In people who <strong>had</strong> dengue before, the vaccine did protect against DENV-3, cutting hospital admissions by about three-quarters.</p>
<div class="box box--pink" role="note"><span class="box__title">Why this matters in 2026</span><p style="font-size:16px;line-height:1.6">DENV-3 is now the main dengue type in Malaysia. If you have never had dengue, or don’t know, talk this through with your doctor before deciding. They can explain the likely benefit for you and your family.</p></div>` },
      { id: 'side-effects', h: 'Side effects', html: `<p>Most side effects are mild to moderate, start within two days and last one to three days. They are less common after the second dose. In trials:</p>
<ul>
<li>Pain at the injection site: 50%</li>
<li>Headache: 35%</li>
<li>Muscle aches: 31%</li>
<li>Redness at the injection site: 27%</li>
<li>Feeling unwell or tired: 20–24%</li>
<li>Fever: 11%</li>
</ul>
<p>Severe allergic reactions (anaphylaxis) are rare, so you will be asked to wait at the clinic for a short time afterwards. Because it is a live vaccine, some people briefly have the vaccine virus in their blood, and a dengue test taken soon after vaccination may be positive. Tell the doctor you were recently vaccinated if you need a dengue test.</p>` },
      { id: 'cost', h: 'Cost and where to get it', tocLabel: 'Cost', html: `<p>Because the vaccine is only available privately, each clinic sets its own price. News reports from 2024 to 2026 put the cost of <strong>both doses at roughly RM400 to RM500</strong> in total. Ask for the full price, including the consultation, before your first dose.</p>
<p>Vaccination costs can be claimed under the medical expenses tax relief for vaccinations. Keep your receipt.</p>` },
      { id: 'still-prevent', h: 'Keep preventing bites, even if vaccinated', tocLabel: 'Prevention still matters', html: `<p>No dengue vaccine gives complete protection. Keep doing the basics:</p>
<ul>
<li>Clear standing water around your home every week, including plant saucers, roof gutters and containers.</li>
<li>Use mosquito repellent and cover up during the early morning and late afternoon.</li>
<li>Know the <a href="/articles/dengue-klang-valley-first-three-days/">early symptoms and warning signs of dengue</a>. Severe stomach pain, persistent vomiting, bleeding gums or drowsiness need urgent care.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to ask about the dengue vaccine',
    clinicsTocLabel: 'Where to ask',
    clinicsIntro: 'Many private GP clinics can discuss whether the dengue vaccine is suitable for you and give both doses. Call ahead to check they have it in stock. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, with opening hours and directions.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-sunday/', 'Clinics open on Sunday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['Is the dengue vaccine approved in Malaysia?', 'Yes, conditionally. Qdenga received conditional registration from Malaysia’s Drug Control Authority in February 2024 for people aged 4 and above, and a renewal has been reported from February 2026.'],
      ['Is the dengue vaccine free in Malaysia?', 'No. It is not part of the National Immunisation Programme, so it is only available at private clinics and hospitals. The Health Ministry said in 2026 that it is still studying whether to include it.'],
      ['How much is the dengue vaccine in Malaysia?', 'News reports from 2024 to 2026 put the cost of both doses at roughly RM400 to RM500 in total at private clinics. Prices vary, so ask before booking.'],
      ['Should I get the dengue vaccine if I have never had dengue?', 'Talk to your doctor first. In people who had never had dengue, the vaccine did not protect against DENV-3 in trials, and DENV-3 is the main dengue type in Malaysia in 2026.'],
      ['Can I get dengue after the vaccine?', 'Yes. The vaccine lowers the risk of dengue and especially of hospital admission, but it does not give complete protection. Keep preventing mosquito bites and watch for warning signs.'],
    ],
    sources: [
      ['iDengue — National dengue surveillance portal (accessed 26 Oct 2026)', 'https://idengue.mysa.gov.my/'],
      ['Malay Mail — Dengue cases soar 66%, deaths hit 62 (9 Sep 2026)', 'https://www.malaymail.com/news/malaysia/2026/09/09/dengue-cases-soar-66pc-deaths-hit-62-in-malaysia-almost-double-2025-toll/234576'],
      ['Malay Mail — Dengue cases rise nearly 30% in H1 2026, MOH cites shift to DENV-3 (6 Jul 2026)', 'https://www.malaymail.com/news/malaysia/2026/07/06/dengue-cases-in-malaysia-rise-nearly-30pc-in-h1-2026-moh-says-outbreak-remains-under-control/226482'],
      ['NPRA — Dengue vaccine (Qdenga) frequently asked questions (Feb 2024)', 'https://npra.gov.my/media/attachments/2024/05/21/dengue-vaccine-qdenga---frequently-asked-questions.pdf'],
      ['Takeda — Qdenga Malaysian package insert (2025)', 'https://content.takeda.com/?contenttype=PI&product=QDEN&language=ENG&country=MAL&documentnumber=1'],
      ['WHO — Dengue vaccines: WHO position paper (May 2024)', 'https://www.who.int/publications/i/item/who-wer-9918-203-224'],
      ['Bernama — Health Ministry studying dengue vaccine for national programme (27 Aug 2026)', 'https://www.bernama.com/en/general/news.php?id=2599698'],
      ['CodeBlue — No plans yet for dengue vaccine in national programme (Jul 2025)', 'https://codeblue.galencentre.org/2025/07/no-plans-yet-for-dengue-vaccine-in-national-programme-wolbachia-expansion-in-focus/'],
      ['Frontiers in Public Health — Dengue vaccine introduction in Malaysia (Aug 2026)', 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2026.1807183/full'],
      ['The Star — Dengue surges, vaccines lag (22 Aug 2026)', 'https://www.thestar.com.my/news/nation/2026/08/22/dengue-surges-vaccines-lag'],
      ['CodeBlue — Why Malaysians choose to invest in dengue vaccination (Nov 2024)', 'https://codeblue.galencentre.org/2024/11/why-malaysians-choose-to-invest-in-dengue-vaccination/'],
      ['WHO — Dengue and severe dengue fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue'],
    ],
    related: ['dengue-klang-valley-first-three-days', 'floods-health-risks-malaysia', 'flu-vaccine-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'hpv-vaccine-malaysia',
    title: 'HPV vaccine in Malaysia 2026: the school programme, catch-up options and adults',
    crumb: 'HPV vaccine in Malaysia',
    desc: 'Year 6 girls now get one free HPV dose at school. Catch-up options, vaccines for boys and adults, typical cost, side effects and cervical screening.',
    excerpt: 'From 2026, Year 6 girls get a single free HPV dose at school. What changed, how to catch up if you missed it, options for boys and adults, and why screening still matters.',
    standfirst: 'The HPV vaccine prevents most cervical cancers, and Malaysia’s school programme changed in 2026. Here is who gets it free, what to do if your child missed it, options for boys and adults, and why screening still matters after vaccination.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Human papillomavirus infection', 'Jangkitan HPV'],
    image: 'mother-child', imageAlt: 'A mother and daughter sitting together',
    keyPoints: [
      'From 2026, girls get the HPV vaccine free in Year 6 (age 12) at school, instead of Form 1. The programme now gives a single dose.',
      'Budget 2027 upgrades the school vaccine from the bivalent (2-type) vaccine to the nonavalent (9-type) vaccine.',
      'Girls who missed the school programme can book at government clinics through MySejahtera.',
      'Boys and adult women are not covered by the national programme, but can be vaccinated privately or through subsidised NGO programmes.',
      'Vaccinated women still need cervical screening: an HPV test every 5 years from age 30.',
    ],
    sections: [
      { id: 'why', h: 'Why the HPV vaccine matters', tocLabel: 'Why it matters', html: `<p>Human papillomavirus (HPV) is a very common virus spread through sexual contact. Most infections clear on their own, but long-lasting infection with high-risk types can cause cervical cancer, as well as some cancers of the throat, anus and genitals.</p>
<p>Cervical cancer is one of the most common cancers in Malaysian women. WHO’s cancer agency estimates <strong>1,968 new cases and 964 deaths</strong> a year, making it the third most common cancer in women. The National Cancer Registry, which counts recorded cases, ranks it sixth and found that <strong>47% of cases were diagnosed at stage 3 or 4</strong>, when treatment is harder.</p>
<p>Malaysia aims for 90% of girls to be vaccinated by age 15 by 2030, as part of its plan to eliminate cervical cancer.</p>
${figure('nurse-stethoscope', 'A nurse with a stethoscope in a clinic', 'The vaccine works best when given before any exposure to HPV, which is why it is offered at age 12.')}` },
      { id: 'school', h: 'The school programme: what changed in 2026', tocLabel: 'The school programme', html: `<ul>
<li><strong>Earlier:</strong> from 2026, the free vaccine is given to girls in <strong>Year 6 (age 12)</strong> instead of Form 1 (age 13). The Ministry of Health says this gives protection earlier, in line with WHO advice, and means fewer girls are missed when they change school.</li>
<li><strong>One dose:</strong> Malaysia moved from three doses (2010) to two (2015) to a <strong>single dose</strong>. WHO’s vaccine experts confirmed in October 2026 that one dose is the most efficient approach for girls aged 9 to 14.</li>
<li><strong>A broader vaccine from 2027:</strong> schools currently use a bivalent vaccine, which protects against HPV types 16 and 18, the cause of most cervical cancers. Budget 2027 upgrades this to a <strong>nonavalent (9-type) vaccine</strong> for about 230,000 Year 6 girls.</li>
</ul>
<p>Parents or guardians must give <strong>written consent</strong>. Schools send home the consent form and an information leaflet about a week before vaccination day.</p>` },
      { id: 'missed', h: 'If your daughter missed it', tocLabel: 'Missed the school dose', html: `<p>Between 2020 and 2024, a global vaccine shortage meant many Malaysian girls missed their school dose. First-dose coverage fell from over 95% to about 35% in 2024. The Ministry ran a catch-up programme for these cohorts in schools in 2024 and early 2025.</p>
<p>Girls who missed the school programme, including those in private schools or home-schooled, can <strong>book at a government health clinic through MySejahtera</strong>.</p>
<p>The National Cancer Society Malaysia (NCSM) also runs a subsidised programme in 2026 for <strong>boys and girls aged 9 to 14</strong>, at RM290 per dose at partner clinics.</p>` },
      { id: 'boys-adults', h: 'HPV vaccine for boys and adults', tocLabel: 'Boys and adults', html: `<p>The national programme covers girls only. Boys and adults can be vaccinated at private clinics and hospitals. HPV vaccination helps protect men against genital warts and some cancers, and reduces spread of the virus.</p>
<p>How many doses you need depends on your age and the vaccine used. Under the product label of the nonavalent vaccine, people aged 9 to 14 usually need two doses, and people aged 15 and over usually need three doses over six months. People with weakened immune systems may need more doses. Your doctor will advise on the right schedule.</p>
<p>WHO advises that catch-up vaccination should prioritise young women up to age 25, then up to 30, followed by boys aged 9 to 14. Vaccination works best before any exposure to HPV, so the benefit for older adults is usually smaller.</p>` },
      { id: 'cost', h: 'How much does it cost?', tocLabel: 'Cost', html: `<p>The school programme is free. At private clinics, news reports in 2026 said the HPV vaccine typically costs <strong>around RM500</strong>, depending on the vaccine and clinic, compared with RM290 per dose through NCSM’s subsidised programme for ages 9 to 14. Ask for the total cost of the full course before you start.</p>
<p>Vaccination costs for yourself, your spouse and your children can be claimed under the medical expenses tax relief for vaccinations.</p>` },
      { id: 'screening', h: 'Vaccinated? You still need screening', tocLabel: 'Screening still matters', html: `<p>The vaccine does not protect against every high-risk HPV type, and it does not clear an existing infection. Women should still be screened:</p>
<ul>
<li><strong>Aged 30 to 49:</strong> an HPV test, repeated every 5 years if negative. You can often take the sample yourself.</li>
<li><strong>Aged 21 to 29 and 50 to 65:</strong> a Pap smear.</li>
</ul>
<p>Free options include government health clinics, the Ministry of Health’s ROSE programme at government hospitals, and free HPV tests for eligible women aged 30 to 65 at LPPKN’s Klinik Nur Sejahtera. About 65% of women in the ROSE programme had not been screened in the previous three years.</p>
<div class="box box--pink" role="note"><span class="box__title">See a doctor if you notice</span><ul><li>Bleeding between periods, after sex or after menopause</li><li>Unusual vaginal discharge</li><li>Pelvic pain or pain during sex</li></ul></div>` },
      { id: 'side-effects', h: 'Side effects and safety', html: `<p>The HPV vaccine has been used worldwide for more than 15 years and has a strong safety record. Common side effects are redness, swelling or pain at the injection site. Less common are mild fever, headache or joint pain.</p>
<p>Some young people faint after any injection, so you will be asked to sit for about 15 minutes afterwards. Severe allergic reactions are very rare. The vaccine is not recommended during pregnancy as a precaution. If you become pregnant partway through a course, the remaining doses are given after delivery.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get an HPV vaccine or screening',
    clinicsTocLabel: 'Where to go',
    clinicsIntro: 'Girls covered by the national programme are vaccinated at school or at a government clinic. For boys, adults or private vaccination, most GP clinics can advise on the HPV vaccine and cervical screening. Call ahead to check they have the vaccine in stock. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-sunday/', 'Clinics open on Sunday']],
    faqs: [
      ['Is the HPV vaccine free in Malaysia?', 'Yes, for girls through the school programme, which from 2026 vaccinates girls in Year 6. Girls who missed it can book at a government clinic through MySejahtera. Boys and adults pay at private clinics, or can use subsidised NGO programmes.'],
      ['How many doses of HPV vaccine do Malaysian schoolgirls get?', 'One. The national programme moved to a single-dose schedule, which WHO says is effective for girls aged 9 to 14.'],
      ['Can adults get the HPV vaccine in Malaysia?', 'Yes, at private clinics and hospitals. Adults aged 15 and over usually need three doses. Ask your doctor whether vaccination is likely to benefit you.'],
      ['Can boys get the HPV vaccine in Malaysia?', 'Yes, privately. The national programme covers girls only, but in 2026 the National Cancer Society Malaysia offered subsidised vaccination for boys and girls aged 9 to 14.'],
      ['Do I still need a Pap smear or HPV test if I had the vaccine?', 'Yes. The vaccine does not cover every cancer-causing HPV type. Women aged 30 to 49 should have an HPV test every 5 years, and Pap smears are used at ages 21 to 29 and 50 to 65.'],
    ],
    sources: [
      ['The Star — Year Six HPV shots to bolster fight against cancer (11 Jan 2026)', 'https://www.thestar.com.my/news/nation/2026/01/11/year-six-hpv-shots-to-bolster-fight-against-cancer'],
      ['The Star — Casting out cervical cancer (11 Jan 2026)', 'https://www.thestar.com.my/news/focus/2026/01/11/casting-out-cervical--cancer'],
      ['Ministry of Finance — Budget 2027 summary (Touchpoint)', 'https://belanjawan.mof.gov.my/pdf/belanjawan2027/ucapan/touchpoint-budget-bm.pdf'],
      ['MOH — HPV vaccination in Malaysia, country flyer (Oct 2024)', 'https://stophpv.org/wp-content/uploads/2024/10/Malaysia_CountryFlyer.pdf'],
      ['MOH — National HPV immunisation programme handbook', 'https://hq.moh.gov.my/bpkk/images/3.Penerbitan/1.Kakitangan/3.kesihatan_Sekolah/PDF/garis_panduan_hpv.pdf'],
      ['NST / AFP — WHO experts call to vaccinate girls as young as 4 against HPV (26 Oct 2026)', 'https://www.nst.com.my/amp/lifestyle/heal/2026/10/1563500/call-vaccinate-girls-young-4-against-hpv'],
      ['Free Malaysia Today — The silent threat of HPV (23 Sep 2026)', 'https://www.freemalaysiatoday.com/category/leisure/2026/09/23/the-silent-threat-of-hpv-and-how-to-protect-yourself'],
      ['National Cancer Institute — Malaysia National Cancer Registry Report 2017–2021 (summary)', 'https://nci.moh.gov.my/images/pdf/SUMMARY-OF-MALAYSIA-NATIONAL-CANCER-REGISTRY-REPORT-2017-2021.pdf'],
      ['IARC — GLOBOCAN Malaysia fact sheet', 'https://gco.iarc.who.int/media/globocan/factsheets/populations/458-malaysia-fact-sheet.pdf'],
      ['MOH — Action Plan Towards the Elimination of Cervical Cancer in Malaysia 2021–2030', 'https://www.moh.gov.my/images/04-penerbitan/pelan-strategik/Action_Plan_Towards_The_Elimination_of_Cervical_Cancer_in_Malaysia_2021-2030_ISBN_comp_compressed.pdf'],
      ['MOH — Guidelines for Primary HPV Testing in Cervical Cancer Screening (2019)', 'https://hq.moh.gov.my/bpkk/images/3.Penerbitan/2.Orang_Awam/5.Kesihatan_Dewasa/2.PDF/3Guidelines_For_Primary_HPV_Testing_In_Cervical_Cancer_Screening_in_Malaysia.pdf'],
      ['NCSM Cancer Matters — Over 10,500 women test positive for HPV (7 Jul 2025)', 'https://cancermatters.cancer.org.my/2025/07/07/over-10500-women-test-positive-for-hpv-in-malaysia-as-ministry-urges-greater-screening/'],
      ['LPPKN — Free HPV DNA screening', 'https://www.lppkn.gov.my/lppkngateway/frontend/web/index.php?r=portal/article&menu=81&id=Qm5aWllZZmtnZTZTQ1JqaE1zS0tNZz09'],
      ['European Medicines Agency — Gardasil 9 product information', 'https://www.ema.europa.eu/en/medicines/human/EPAR/gardasil-9'],
      ['Cochrane Malaysia — New research confirms HPV vaccination prevents cervical cancer', 'https://malaysia.cochrane.org/news/penyelidikan-baru-mengesahkan-vaksinasi-hpv-mencegah-kanser-serviks'],
    ],
    related: ['baby-vaccination-schedule-malaysia', 'breast-cancer-screening-malaysia', 'free-health-screening-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'pico-laser-melasma-malaysia',
    title: 'Pico laser for melasma in Malaysia: what it can do, the risks, and the 2026 rules',
    crumb: 'Pico laser for melasma',
    desc: 'What pico laser can and can’t do for melasma, pigmentation and acne scars, risks for Asian skin, the 2026 laser permit rules and how to check a clinic.',
    excerpt: 'Pico laser is heavily advertised for melasma and pigmentation. What the evidence shows, why melasma keeps coming back, the risks for Asian skin, and Malaysia’s new laser rules.',
    standfirst: 'Pico laser is one of the most advertised treatments for melasma and pigmentation in Malaysia. Here is what the evidence actually shows, why melasma keeps coming back, the risks for Asian skin, and how Malaysia’s 2026 rules on aesthetic lasers protect you.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Melasma'],
    image: 'aesthetic-device', imageAlt: 'An aesthetic laser device in a clinic treatment room',
    keyPoints: [
      'Melasma is a long-term skin condition. Treatments can fade it, but none cure it, and it often comes back.',
      'Daily sunscreen, ideally a tinted one with iron oxides, and prescription creams from a doctor are the first-line treatment.',
      'Lasers, including pico lasers, are usually kept for melasma that hasn’t improved with creams. They can make pigmentation worse in darker skin.',
      'Since 1 June 2026, many aesthetic lasers are “designated medical devices” in Malaysia. Operating one without a permit is an offence.',
      'Avoid whitening creams sold online. NPRA has cancelled several in 2026 for containing mercury, hydroquinone or tretinoin.',
    ],
    sections: [
      { id: 'what', h: 'What is melasma?', html: `<p>Melasma is a common condition that causes flat, brown or grey-brown patches, usually on both cheeks, the forehead, upper lip, nose or chin. It is not itchy, infectious or cancerous. It is most common in women aged 20 to 40 and in people with light-brown to brown skin, including many Malaysians.</p>
<p>Triggers include <strong>sunlight</strong> (both UV and visible light), <strong>hormones</strong> such as pregnancy, the contraceptive pill and hormone therapy, and a <strong>family tendency</strong>. Up to half of pregnant women may develop some melasma.</p>
<p>It is easily confused with other pigmentation, which is treated differently:</p>
<ul>
<li><strong>Sunspots</strong> (solar lentigines): separate, well-defined brown spots on sun-damaged skin.</li>
<li><strong>Post-inflammatory hyperpigmentation</strong>: dark marks left after acne, eczema or injury.</li>
<li><strong>Hori’s naevus</strong>: deeper, blue-grey patches, often on the cheeks.</li>
</ul>
<p>Because the right treatment depends on the type, a doctor should diagnose your pigmentation before any laser.</p>` },
      { id: 'recurs', h: 'Why melasma keeps coming back', tocLabel: 'Why it comes back', html: `<p>There is no cure for melasma. Even after a good result, sun exposure or hormonal changes can bring it back, and it often returns after treatment stops. Pregnancy-related melasma may fade after delivery but can return in a later pregnancy.</p>
<p>That is why dermatologists treat melasma as a long-term condition that needs ongoing sun protection and, often, maintenance treatment. Be cautious of any clinic that promises permanent removal.</p>` },
      { id: 'first-line', h: 'Treatments to try first', html: `<ul>
<li><strong>Sun protection every day:</strong> a broad-spectrum sunscreen of SPF 30 or higher. A <strong>tinted sunscreen containing iron oxides</strong> also blocks visible light. In one trial it gave better results than a UV-only sunscreen. Reapply outdoors and wear a hat.</li>
<li><strong>Prescription creams:</strong> creams that combine a lightening agent with a retinoid and a mild steroid are considered the most effective first treatment, improving 60–80% of cases. They must be prescribed and supervised by a doctor, used for limited periods, and avoided in pregnancy.</li>
<li><strong>Other options</strong> your doctor may suggest include azelaic acid, and tablets or creams containing tranexamic acid. Tranexamic acid tablets are a medicine that needs a doctor’s assessment, as they are not suitable for everyone.</li>
</ul>
${figure('facial-treatment', 'A doctor examining facial skin in a clinic', 'A doctor should confirm the type of pigmentation before recommending treatment.')}` },
      { id: 'pico', h: 'What pico laser is, and what it can do', tocLabel: 'What pico laser does', html: `<p>Picosecond (“pico”) lasers fire extremely short pulses of light, measured in trillionths of a second. The pulses shatter pigment mainly through a pressure effect rather than heat, using less energy than older nanosecond (Q-switched) lasers.</p>
<p>The evidence differs by use:</p>
<div class="table-wrap"><table>
<thead><tr><th>Use</th><th>What studies show</th></tr></thead>
<tbody>
<tr><td>Tattoo removal</td><td>Strongest evidence</td></tr>
<tr><td>Melasma</td><td>Can help, especially with the 1064 nm wavelength. Results are often similar to, not better than, prescription creams, and melasma usually returns without maintenance</td></tr>
<tr><td>Acne scars</td><td>Moderate improvement over about six sessions with a fractional lens</td></tr>
<tr><td>Sunspots and freckles</td><td>Often respond well, but are a different condition from melasma</td></tr>
</tbody></table></div>
<p>For melasma, a 2023 analysis of trials found the 1064 nm pico laser effective without significant side effects, while the 755 nm laser was no better than creams and more likely to cause darkening. A 2026 review concluded that no single device is a definitive answer, and that maintenance is crucial.</p>` },
      { id: 'risks', h: 'Risks for Asian and darker skin', tocLabel: 'Risks for Asian skin', html: `<p>Brown skin is more prone to pigment changes after any laser. Possible effects include:</p>
<ul>
<li><strong>Darkening</strong> (post-inflammatory hyperpigmentation), usually temporary but sometimes lasting months.</li>
<li><strong>Rebound melasma</strong>, where melasma comes back darker.</li>
<li><strong>Patchy white spots</strong> (mottled hypopigmentation), reported in about 10% of East Asian patients after repeated low-energy “laser toning”, and linked to too much total energy.</li>
<li>Redness, swelling, blistering and, rarely, scarring or burns, which are more common when an untrained person operates the laser.</li>
</ul>
<p>Avoid sun exposure before and after treatment, and tell the doctor if you are pregnant, take medicines that make the skin sensitive to light, or get cold sores.</p>` },
      { id: 'rules', h: 'Malaysia’s 2026 rules on aesthetic lasers', tocLabel: 'The 2026 laser rules', html: `<p>Since <strong>1 June 2026</strong>, the Medical Device (Designated Medical Device) Order 2026 lists many aesthetic lasers as <strong>designated medical devices</strong>. These include Nd:YAG (532 and 1064 nm), alexandrite, ruby, diode, fractional CO2 and other lasers when used to reduce pigmentation such as melasma and freckles, or for other aesthetic purposes. HIFU devices are also covered.</p>
<p>Under the Medical Device Act 2012, <strong>no one may operate a designated medical device without a permit</strong>. The penalty is a fine of up to RM100,000, up to a year in prison, or both. The Medical Device Authority says operators must have qualifications and skills recognised by the government.</p>
<p>The Ministry of Health’s guidelines also class lasers for pigmentation as an aesthetic medical procedure, to be done by a registered doctor with the right training and credentials, in a registered clinic. A medical-grade laser in a salon or spa is a red flag.</p>` },
      { id: 'check', h: 'How to check a clinic before booking', tocLabel: 'Check the clinic', html: `<ol>
<li><strong>Doctor:</strong> look them up on the Malaysian Medical Council’s <a href="https://merits.mmc.gov.my/" target="_blank" rel="noopener">MeRITS register</a> and ask whether they hold a Letter of Credentialing and Privileging (LCP) for aesthetic procedures.</li>
<li><strong>Clinic:</strong> it should be registered with the Ministry of Health, not a salon or home business.</li>
<li><strong>Device:</strong> ask which laser will be used and check it on the <a href="https://mdar.mda.gov.my/" target="_blank" rel="noopener">MDA medical device register</a>.</li>
<li><strong>Plan:</strong> ask for a diagnosis, the expected number of sessions, the risks for your skin type, what happens if pigmentation gets worse, and a written quote.</li>
</ol>` },
      { id: 'creams', h: 'A warning about whitening creams', tocLabel: 'Whitening creams', html: `<p>Many people with melasma try lightening creams bought online. Some contain hidden ingredients. In 2025 and 2026, the National Pharmaceutical Regulatory Agency (NPRA) cancelled the notification of 20 cosmetic products for containing <strong>mercury</strong>, <strong>hydroquinone</strong> or <strong>tretinoin</strong>. Half of them contained mercury.</p>
<ul>
<li><strong>Mercury</strong> is banned in cosmetics. It can damage the kidneys and nerves, and harm the developing brain of an unborn baby or young child.</li>
<li><strong>Hydroquinone and tretinoin</strong> are medicines in Malaysia, not cosmetic ingredients. They should only be used with a health professional’s advice.</li>
</ul>
<p>Check a product on NPRA’s list of cancelled cosmetics before using it, and stop using any cream that is not properly labelled.</p>
<div class="box box--pink" role="note"><span class="box__title">See a doctor if a patch</span><ul><li>is changing in size, shape or colour</li><li>bleeds, itches or doesn’t heal</li><li>appears on only one side, or looks different from your other marks</li></ul></div>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Finding a doctor for pigmentation',
    clinicsTocLabel: 'Finding a doctor',
    clinicsIntro: 'A GP can diagnose your pigmentation and start first-line treatment, and refer you to a dermatologist if needed. For laser treatment, choose a doctor-led aesthetic clinic and check the doctor, clinic and device first. Our directory lists GP and aesthetic clinics with opening hours and directions.',
    clinicLinks: [['/clinics/aesthetic-clinics/', 'Aesthetic clinics'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/bukit-bintang/', 'Clinics in Bukit Bintang'], ['/clinics/petaling-jaya/', 'Clinics in Petaling Jaya']],
    faqs: [
      ['Can pico laser remove melasma permanently?', 'No. Pico laser can lighten melasma, but no treatment cures it, and melasma often returns, especially with sun exposure or hormonal changes. Ongoing sun protection and maintenance are usually needed.'],
      ['Is pico laser safe for Malaysian skin?', 'It can be, in trained hands with suitable settings. Brown skin has a higher risk of darkening, rebound melasma and white spots after lasers, so a doctor should assess your skin and start cautiously.'],
      ['How many pico laser sessions are needed for melasma?', 'Studies used anywhere from three to about ten sessions, usually several weeks apart, followed by maintenance. Your doctor should give you a plan based on your skin.'],
      ['Who is allowed to do laser treatment in Malaysia?', 'Since 1 June 2026, many aesthetic lasers are designated medical devices, and operating one requires a permit from the Medical Device Authority. MOH guidelines also class laser pigmentation treatment as a medical procedure for trained, registered doctors in registered clinics.'],
      ['What is the best treatment for melasma?', 'Daily broad-spectrum sunscreen, ideally tinted with iron oxides, plus prescription creams supervised by a doctor, is the usual first-line treatment. Lasers are generally kept for melasma that doesn’t respond.'],
    ],
    sources: [
      ['DermNet — Melasma', 'https://dermnetnz.org/topics/melasma'],
      ['British Association of Dermatologists — Melasma patient information leaflet (2024)', 'https://www.skinhealthinfo.org.uk/wp-content/uploads/2018/11/Melasma-PIL-June-2024.pdf'],
      ['American Academy of Dermatology — How to make melasma less noticeable (2023)', 'https://www.aad.org/news/make-melasma-less-noticeable'],
      ['Castanedo-Cazares et al. — Visible light protection in melasma, randomised trial (2014)', 'https://pubmed.ncbi.nlm.nih.gov/24313385/'],
      ['International Delphi consensus on melasma management (2026)', 'https://pubmed.ncbi.nlm.nih.gov/40996222/'],
      ['Meta-analysis — Tranexamic acid for melasma (2024)', 'https://pubmed.ncbi.nlm.nih.gov/38843906/'],
      ['Lee et al. — Low-fluence Q-switched Nd:YAG laser for melasma, systematic review (Medicina, 2022)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9323185/'],
      ['Feng et al. — Picosecond lasers for melasma, meta-analysis (2023)', 'https://pubmed.ncbi.nlm.nih.gov/36897459/'],
      ['Wu, Goldman & Chan — Picosecond lasers: a systematic review (2021)', 'https://pubmed.ncbi.nlm.nih.gov/32282094/'],
      ['Dermatologic Clinics — Lasers and energy devices for melasma (2026)', 'https://pubmed.ncbi.nlm.nih.gov/42303356/'],
      ['American Academy of Dermatology — Laser tattoo removal', 'https://www.aad.org/public/cosmetic/hair-removal/laser-tattoo-removal'],
      ['Medical Device Authority — Medical Device (Designated Medical Device) Order 2026, P.U.(A) 10', 'https://www.mda.gov.my/index.php/documents/ukk/4012-pua10-medical-device-designated-medical-device-order-2026/file'],
      ['Medical Device Authority — Medical Device Act 2012 (Act 737)', 'https://www.mda.gov.my/index.php/documents/regulation/685-medical-device-act-2012-eng/file'],
      ['Berita RTM — Medical Device Order in force on 1 June (9 Jan 2026)', 'https://berita.rtm.gov.my/nasional/senarai-berita-nasional/senarai-artikel/perintah-peranti-perubatan-berkuat-kuasa-pada-1-jun/'],
      ['The Star — Tighter checks urged on aesthetic industry (13 Jul 2026)', 'https://www.thestar.com.my/news/nation/2026/07/13/tighter-checks-urged-on-aesthetic-industry'],
      ['NPRA — Cancellation of notified cosmetic products', 'https://www.npra.gov.my/index.php/en/consumers/safety-information/cancellation-of-notified-cosmetic-products.html'],
      ['KKM / NPRA — Media statement on cosmetics containing scheduled poisons (Nov 2025)', 'https://www.npra.gov.my/easyarticles/images/shared/Press%20Release/Press-release-Nov-2025.pdf'],
    ],
    related: ['itchy-skin-eczema-hives-malaysia', 'skin-boosters-malaysia', 'weight-loss-injections-malaysia'],
  },
];
