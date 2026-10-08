const PUB = '2026-10-08';
const AUTHOR = 'MalaysiaHealthcare.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NEWS = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'haze-air-quality-klang-valley',
    title: 'Haze is back in the Klang Valley: how to protect your family when the API climbs',
    crumb: 'Haze and air quality',
    seoTitle: 'Haze in the Klang Valley (October 2026): API Levels, Masks & Health Tips',
    desc: 'Haze has pushed air quality to unhealthy levels across Selangor and Kuala Lumpur. What the API numbers mean, who is most at risk, which masks work, and when to see a doctor.',
    excerpt: 'Every Selangor monitoring station read “unhealthy” this week. What the API means, which masks help, and how to protect children and older family members.',
    standfirst: 'Smoke from fires in Sumatra and Kalimantan has pushed air quality into the unhealthy range across Selangor and Kuala Lumpur. A few simple habits can make a real difference to how you and your family feel.',
    cat: 'prevention', catLabel: 'Prevention', mins: 7, published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Haze-related respiratory illness'],
    image: 'kl-twin-towers-dusk', imageAlt: 'Kuala Lumpur skyline and the Petronas Twin Towers under a hazy sky at dusk',
    keyPoints: [
      'On 8 October 2026, all six Selangor monitoring stations recorded unhealthy air (API 101–200).',
      'Children, older people, pregnant women and anyone with asthma, COPD or heart disease are most at risk.',
      'Stay indoors with windows closed when the API is above 100, and use a well-fitted N95 mask if you must go out.',
      'See a doctor for wheezing, chest tightness or breathlessness that does not settle. For severe breathing difficulty, call 999.',
    ],
    sections: [
      { id: 'now', h: 'What is happening now', tocLabel: 'What is happening now', html: `<p>At 9am on 8 October 2026, 38 of Malaysia’s 68 air-quality monitoring stations recorded an <strong>unhealthy</strong> Air Pollutant Index (API) reading, between 101 and 200. Every station in Selangor was in that range: Johan Setia (178), Shah Alam (170), Banting (167), Klang (166), Petaling Jaya (165) and Kuala Selangor (155). In and around Kuala Lumpur, Putrajaya read 173, Cheras 172 and Batu Muda 168.</p>
<p>The Department of Environment has linked the haze to fire hotspots across the Strait. On 29 September it reported 327 hotspots in Kalimantan and 191 in Sumatra. Johan Setia came close to “very unhealthy” on 18 September, reaching 198.</p>
<p>The ASEAN weather centre expects haze to stay elevated from October to December 2026. Rain during the inter-monsoon period may bring some relief from late October, but conditions can change quickly from day to day.</p>` },
      { id: 'api', h: 'What the API numbers mean', html: `<p>Check the latest reading for your area on the Department of Environment’s <a href="https://eqms.doe.gov.my/APIMS/main" target="_blank" rel="noopener">APIMS portal</a> before planning time outdoors.</p>
<div class="table-wrap"><table>
<thead><tr><th>API</th><th>Status</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>0–50</td><td>Good</td><td>Normal activities.</td></tr>
<tr><td>51–100</td><td>Moderate</td><td>Sensitive groups should watch for symptoms.</td></tr>
<tr><td>101–200</td><td>Unhealthy</td><td>Cut down outdoor activity, especially for at-risk groups. Schools reportedly stop outdoor activities above 100.</td></tr>
<tr><td>201–300</td><td>Very unhealthy</td><td>Stay indoors as much as possible. Selangor has said schools close at 200.</td></tr>
<tr><td>Above 300</td><td>Hazardous</td><td>Follow official instructions closely.</td></tr>
</tbody></table></div>` },
      { id: 'risk', h: 'Who is most at risk', html: `<p>Haze particles are small enough to reach deep into the lungs. Most healthy adults notice sore eyes, a scratchy throat or a cough. Some people are more likely to become unwell:</p>
<ul>
<li><strong>Children</strong>, who breathe faster and spend more time active outdoors</li>
<li><strong>Older people</strong>, especially those with heart or lung disease</li>
<li><strong>Pregnant women</strong></li>
<li>Anyone with <strong>asthma, COPD, heart disease or diabetes</strong></li>
</ul>
<p>The Ministry of Health has said it expects more asthma attacks and upper respiratory infections during the haze, and has advised high-risk groups to avoid outdoor activity, drink enough water and wear a mask if they have symptoms.</p>` },
      { id: 'protect', h: 'Simple ways to protect your family', html: `<ul>
<li><strong>Keep windows and doors closed</strong> when the API is above 100, and run the air-conditioner on recirculate.</li>
<li><strong>Use an air purifier with a HEPA filter</strong> in the room where you sleep, if you have one.</li>
<li><strong>Move exercise indoors</strong> or postpone it. Save your morning jog in the park for a clearer day.</li>
<li><strong>Drink plenty of water</strong>, which also helps with the heat.</li>
<li><strong>In the car</strong>, set the air-conditioning to recirculate.</li>
<li><strong>Keep medicines ready.</strong> If you have asthma, make sure your reliever inhaler is not expired and your action plan is up to date.</li>
</ul>
${figure('kl-skyline', 'Kuala Lumpur skyline on a clear day', 'On a clear day the view across Kuala Lumpur looks like this. Check the API before heading out.')}` },
      { id: 'masks', h: 'Which masks actually help?', html: `<p>An <strong>N95 mask</strong> (or an equivalent such as KN95) filters fine haze particles much better than a surgical mask, as long as it fits snugly around the nose and chin. A surgical mask still helps with larger particles and is better than nothing.</p>
<p>N95 masks may not fit young children properly, and some people with heart or lung disease find them hard to breathe through. For children, keeping them indoors on high-API days matters more than the mask. If you have a long-term heart or lung condition, ask your doctor before using an N95 for long periods.</p>` },
      { id: 'heat', h: 'Heat is the next challenge', html: `<p>MetMalaysia has put the chance of a “Super El Niño” between October and December 2026 at more than 90%, with the hottest weather expected from February to May 2027. The Ministry of Health recorded 73 heat-related illnesses and 4 deaths nationwide between 1 January and 7 July 2026.</p>
<div class="box box--pink" role="note"><span class="box__title">Call 999 for possible heatstroke</span><ul><li>Very high body temperature with confusion, slurred speech or fainting</li><li>Hot, dry skin, or a seizure</li><li>Move the person somewhere cool, loosen clothing and cool them with water while waiting for help.</li></ul></div>` },
      { id: 'doctor', h: 'When to see a doctor', html: `<p>See a GP if you have a cough, wheeze or sore throat that does not improve within a few days, if your asthma inhaler is needed more often than usual, or if a child seems unusually tired or breathless. Go to an emergency department or call <a href="tel:999">999</a> for severe shortness of breath, chest pain, blue lips or confusion.</p>` },
    ],
    faqs: [
      ['Is it safe to exercise outdoors during haze?', 'When the API is above 100, it is better to exercise indoors or postpone. People with asthma, heart disease or other risk factors should avoid outdoor exertion altogether until air quality improves.'],
      ['Is a surgical mask enough for haze?', 'A surgical mask blocks larger particles but lets many fine haze particles through. A well-fitted N95 or KN95 mask gives much better protection for adults.'],
      ['Where can I check the API for my area?', 'The Department of Environment publishes live readings on its APIMS portal at eqms.doe.gov.my, updated every hour.'],
    ],
    sources: [
      ['Malay Mail — Haze persists as 38 areas record unhealthy API (8 Oct 2026)', 'https://www.malaymail.com/news/malaysia/2026/10/08/haze-persists-as-38-areas-record-unhealthy-api-segamat-highest-at-187/238182'],
      ['Media Selangor — Air quality update (8 Oct 2026)', 'https://mediaselangor.com/en/2026/10/399920'],
      ['The Star — Smoke from Kalimantan, Sumatra hotspots causing haze, says DOE (30 Sep 2026)', 'https://www.thestar.com.my/news/nation/2026/09/30/smoke-from-kalimantan-sumatra-hotspots-causing-haze-in-m039sia-says-doe'],
      ['Free Malaysia Today — Haze worsens in West Malaysia (30 Sep 2026)', 'https://www.freemalaysiatoday.com/category/nation/2026/09/30/haze-worsens-in-west-malaysia-parts-of-klang-valley-worst-hit'],
      ['Media Selangor / Bernama — Health ministry haze preparedness (26 Aug 2026)', 'https://mediaselangor.com/en/2026/08/392503'],
      ['Free Malaysia Today — Over 90% chance of Super El Niño, warns MetMalaysia (18 Aug 2026)', 'https://www.freemalaysiatoday.com/category/nation/2026/08/18/over-90-chance-of-super-el-nino-warns-metmalaysia'],
      ['New Straits Times — 73 heat-related illness cases, four deaths (7 Jul 2026)', 'https://www.nst.com.my/amp/news/nation/2026/07/1482825/health-ministry-records-73-heat-related-illness-cases-four-deaths-jan-1'],
      ['Department of Environment — APIMS', 'https://eqms.doe.gov.my/APIMS/main'],
    ],
    related: ['dengue-klang-valley-first-three-days', 'clinic-or-emergency-department', 'medipulih-klinik-seri-pristana-guide'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'dengue-klang-valley-first-three-days',
    title: 'Dengue in the Klang Valley: what to watch for in the first three days',
    crumb: 'Dengue in the Klang Valley',
    seoTitle: 'Dengue in the Klang Valley 2026: First 3 Days, Warning Signs & Care',
    desc: 'Dengue cases in Selangor and Kuala Lumpur have surged in 2026. Symptoms in the first three days, warning signs that need A&E, safe home care, and where to get a blood test.',
    excerpt: 'Cases are up sharply in Selangor and KL this year. Warning signs, why rest and fluids matter, which painkillers to avoid, and when to go straight to A&E.',
    standfirst: 'Dengue cases have risen sharply across Selangor and Kuala Lumpur in 2026. Most people recover with rest and fluids, but knowing the warning signs, and which painkillers to avoid, makes the difference.',
    cat: 'prevention', catLabel: 'Prevention', mins: 7, published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Dengue fever', 'Demam denggi'],
    image: 'aedes-mosquito', imageAlt: 'Close-up of an Aedes mosquito with black-and-white striped legs',
    caption: 'The Aedes mosquito, which spreads dengue, has distinctive black-and-white markings and bites mostly during the day',
    keyPoints: [
      'Malaysia recorded 65,979 dengue cases by early September 2026, up 66% on the same period last year. Selangor has the most cases of any state.',
      'Dengue usually starts with a sudden high fever, headache and body aches.',
      'The riskiest time is often when the fever <em>starts to come down</em>, around days 3 to 7.',
      'Use paracetamol for fever. Avoid aspirin, ibuprofen and other NSAIDs.',
      'See a doctor for a blood test if a fever lasts more than two days.',
    ],
    sections: [
      { id: 'this-year', h: 'Why 2026 has been a hard dengue year', html: `<p>By epidemiological week 35, Malaysia had recorded <strong>65,979 dengue cases and 62 deaths</strong>, up from 39,616 cases and 32 deaths over the same period in 2025. The Klang Valley has been hit hardest. By mid-August, Selangor had 25,090 cases (up 61%), while Kuala Lumpur and Putrajaya together had 10,316 (up 106%). By 7 October, Selangor’s total for the year had passed 31,000, according to the iDengue portal.</p>
<p>The Ministry of Health has linked the rise to a shift in the dominant virus type from DENV-2 to <strong>DENV-3</strong>, a strain many people have little immunity to, along with erratic weather that alternates heavy rain and heat. More than 70% of mosquito breeding sites found by health officers are in and around homes.</p>` },
      { id: 'what', h: 'What dengue is', html: `<p>Dengue is a viral infection spread by <em>Aedes</em> mosquitoes, which bite mostly during the day. In a dense, humid region like the Klang Valley, they breed easily in small pockets of clean standing water: flower-pot trays, roof gutters, discarded containers.</p>
<p>Many infections are mild. But a small number of people develop severe dengue, which needs hospital care. Knowing what to watch for helps you act at the right time.</p>` },
      { id: 'first-days', h: 'The first three days', html: `<p>Symptoms usually appear 4 to 10 days after a mosquito bite. Common early signs include:</p>
<ul><li>Sudden high fever</li><li>Severe headache and pain behind the eyes</li><li>Muscle and joint pain</li><li>Nausea, vomiting or loss of appetite</li><li>A rash, sometimes appearing a few days in</li></ul>
<p>If a fever lasts more than two days, especially if someone nearby has had dengue, see a GP. A simple blood test (full blood count) helps your doctor track your platelets and hydration.</p>
${figure('blood-sample', 'A gloved hand holding a blood sample tube', 'Your doctor may ask you to return for repeat blood tests over several days.')}` },
      { id: 'warning', h: 'Warning signs', html: `<p>The critical phase often begins as the fever drops. Feeling a little better is not always a sign you are through it.</p>
<aside class="box box--pink" role="note"><span class="box__title">Go to A&amp;E or call 999 if you notice:</span><ul>
<li>Severe stomach pain or persistent vomiting</li><li>Bleeding gums or nose, or blood in vomit or stools</li><li>Fast breathing, or feeling very tired or restless</li><li>Cold, clammy skin, or passing much less urine</li></ul></aside>` },
      { id: 'home-care', h: 'Caring for yourself at home', html: `<p>If your doctor says you can recover at home:</p>
<ul>
<li><strong>Rest</strong> as much as you can, and take time off work or school.</li>
<li><strong>Drink often</strong>: water, oral rehydration salts, clear soups or coconut water.</li>
<li><strong>Use paracetamol</strong> for fever and pain, at the dose on the label.</li>
<li><strong>Avoid aspirin, ibuprofen and other NSAIDs</strong>, which can raise the risk of bleeding.</li>
<li><strong>Keep follow-up appointments</strong>, even if you feel better.</li>
</ul>` },
      { id: 'prevention', h: 'Prevention at home', html: `<p>Ten minutes a week makes a real difference. Walk around your home and empty, scrub or cover anything that holds water: plant trays, pails, pet bowls, roof gutters and air-conditioner drip trays. Use repellent during the day, and wear long sleeves outdoors in the early morning and late afternoon.</p>
<p><strong>Wolbachia mosquitoes:</strong> in some areas, health authorities release mosquitoes carrying <em>Wolbachia</em> bacteria, which reduce the spread of dengue. Officials credited the programme with a 36% drop in Putrajaya’s cases in early 2026.</p>
<p><strong>Vaccine:</strong> the Qdenga dengue vaccine received conditional approval in Malaysia in 2024 for people aged 4 and over, given as two doses three months apart. It is available at private clinics and hospitals but is not part of the national immunisation programme. Ask your doctor whether it suits you.</p>` },
    ],
    clinicsIntro: 'Any GP clinic can assess a fever and arrange a blood test. These neighbourhood clinics are in our directory, two of them open until 11pm daily:',
    faqs: [
      ['Can I take ibuprofen if I think I have dengue?', 'No. Use paracetamol for fever and pain. Ibuprofen, aspirin and other NSAIDs can increase the risk of bleeding in dengue.'],
      ['Is there a dengue vaccine in Malaysia?', 'Yes. Qdenga has conditional approval for people aged 4 and over and is available privately. It is not part of the national immunisation programme, so ask your doctor whether it is suitable for you.'],
      ['How long after a mosquito bite do dengue symptoms start?', 'Usually 4 to 10 days after the bite.'],
    ],
    sources: [
      ['Bernama — Dengue cases rise 66% (9 Sep 2026)', 'https://www.bernama.com/en/general/news.php?id=2605035'],
      ['Reuters via Sowetan — Dengue cases up in Klang Valley, health ministry warns (21 Aug 2026)', 'https://www.sowetan.co.za/news/world/2026-08-21-dengue-fever-cases-up-56-in-klang-valley-health-ministry-warns/'],
      ['New Straits Times — Sharp rise in dengue cases and deaths (6 Jul 2026)', 'https://www.nst.com.my/amp/news/nation/2026/07/1481420/malaysia-records-sharp-rise-dengue-cases-and-deaths'],
      ['iDengue — Ministry of Health dengue portal', 'https://idengue.mysa.gov.my/'],
      ['Malay Mail — Putrajaya dengue cases drop 36.2% (4 May 2026)', 'https://www.malaymail.com/news/malaysia/2026/05/04/putrajaya-dengue-cases-drop-362pc-wolbachia-method-shows-success/218719'],
      ['CodeBlue — No plans yet for dengue vaccine in national programme (Jul 2025)', 'https://codeblue.galencentre.org/2025/07/no-plans-yet-for-dengue-vaccine-in-national-programme-wolbachia-expansion-in-focus/'],
      ['World Health Organization — Dengue and severe dengue fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue'],
    ],
    related: ['haze-air-quality-klang-valley', 'medipulih-klinik-subang-perdana-guide', 'clinic-or-emergency-department'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'breast-cancer-screening-malaysia',
    title: 'When should Malaysian women start breast screening?',
    crumb: 'Breast cancer screening',
    seoTitle: 'Breast Cancer Screening in Malaysia: When to Start & Free Mammograms (2026)',
    desc: 'Half of breast cancers in Malaysia are found at a late stage. Self-checks, clinical exams and mammograms explained, plus free and subsidised mammograms for women in Selangor and KL.',
    excerpt: 'Half of breast cancers in Malaysia are found late. A gentle walkthrough of self-checks, clinical exams and mammograms, and how to get one free or subsidised.',
    standfirst: 'More than half of breast cancers in Malaysia are now found at stage 3 or 4. This Pink October, here is a calm guide to knowing your normal, when to have a mammogram, and how to get one free or subsidised.',
    cat: 'womens-health', catLabel: "Women's health", mins: 7, published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Breast cancer', 'Kanser payudara'],
    image: 'pink-ribbon', imageAlt: 'A pink ribbon, the symbol of breast cancer awareness',
    keyPoints: [
      'In 2017–2021, 50.5% of breast cancers in Malaysia were diagnosed at stage 3 or 4.',
      'Get to know how your breasts normally look and feel, and see a doctor about any change.',
      'Women aged 40–70 may qualify for a free LPPKN mammogram, depending on household income.',
      'PERKESO’s 2026 screening for contributors aged 40–59 includes a mammogram for women.',
    ],
    sections: [
      { id: 'why', h: 'Why early detection matters in Malaysia', html: `<p>Breast cancer is the most common cancer among Malaysian women. The Malaysia National Cancer Registry recorded 29,534 cases between 2017 and 2021, about a third of all cancers in women. Worryingly, <strong>50.5% were found at stage 3 or 4</strong>, up from 47.9% in 2012–2016.</p>
<p>The National Cancer Society Malaysia (NCSM) estimates that fewer than 30% of eligible women have regular mammograms, and about half of breast cancers here are diagnosed before age 50. Cancers found early are far easier to treat, which is why Pink October focuses on screening.</p>` },
      { id: 'normal', h: 'Know your normal', html: `<p>“Breast awareness” simply means knowing how your breasts usually look and feel, so you notice changes. Many women check once a month, a few days after their period ends. See a doctor if you notice:</p>
<ul><li>A new lump or thickening in the breast or armpit</li><li>A change in size or shape</li><li>Dimpling or puckering of the skin</li><li>A nipple that turns inwards, or discharge (especially if bloody)</li><li>A rash or redness around the nipple</li><li>Pain in one area that does not go away</li></ul>
<p>Most lumps are not cancer. But only a doctor can tell, so it is always worth getting checked.</p>` },
      { id: 'mammogram', h: 'Clinical exams and mammograms: who and how often', html: `<p>A <strong>clinical breast examination</strong> is a check by a doctor or trained nurse, and is a good starting point at any age. A <strong>mammogram</strong> is a low-dose X-ray that can find cancers too small to feel.</p>
<p>According to NCSM, the Ministry of Health’s 2022 recommendation is a mammogram every two years for women aged 50 to 74, and a discussion with a doctor about personal risk for women aged 40 to 49. If you have a strong family history of breast or ovarian cancer, talk to your doctor about starting earlier.</p>
${figure('mammogram-machine', 'A mammography machine in a clinic room', 'A mammogram takes about 20 minutes. The squeeze is brief and usually more uncomfortable than painful.')}` },
      { id: 'free', h: 'Free and subsidised mammograms', html: `<div class="table-wrap"><table>
<thead><tr><th>Programme</th><th>Who it is for</th><th>How to apply</th></tr></thead>
<tbody>
<tr><td><strong>LPPKN mammogram programme</strong></td><td>Women aged 40–70. Free for household income of RM10,000 or less, RM50 subsidy above that. Women aged 35–39 with a family history may qualify with a doctor’s referral.</td><td>Apply at <a href="https://mamogram.lppkn.gov.my/" target="_blank" rel="noopener">mamogram.lppkn.gov.my</a> or through Klinik Nur Sejahtera</td></tr>
<tr><td><strong>PERKESO health screening 2026</strong></td><td>Active PERKESO (SOCSO) contributors aged 40–59. Includes a mammogram and Pap smear for women.</td><td>Book through the SEHATi app</td></tr>
<tr><td><strong>Selangor Saring</strong></td><td>Selangor’s free state screening programme, which includes mammograms.</td><td>Register through the SELangkah app</td></tr>
</tbody></table></div>
<p>Several private hospitals in the Klang Valley also run Pink October mammogram promotions until the end of October or November. Eligibility and availability change, so check the latest details before booking.</p>` },
      { id: 'what-happens', h: 'What happens at a mammogram', html: `<p>You will undress from the waist up and stand in front of the machine. Each breast is gently pressed between two plates for a few seconds while the X-ray is taken. Avoid deodorant or talcum powder on the day, as it can show up on the image. Results usually go to the doctor who referred you, who will explain them and arrange any follow-up.</p>` },
    ],
    clinicsIntro: 'A GP can do a clinical breast examination, answer questions about your risk and refer you for a mammogram. These clinics in our directory list women’s health services:',
    faqs: [
      ['At what age should I start having mammograms in Malaysia?', 'NCSM reports that the Ministry of Health recommends a mammogram every two years from 50 to 74, with women aged 40–49 discussing their own risk with a doctor. Women with a strong family history may start earlier.'],
      ['Can I get a free mammogram in Selangor or Kuala Lumpur?', 'Yes, if you are eligible. LPPKN offers free mammograms for women aged 40–70 with household income of RM10,000 or less, PERKESO screening includes mammograms for contributors aged 40–59, and Selangor Saring offers free screening for Selangor residents.'],
      ['Does a lump always mean cancer?', 'No. Most breast lumps are not cancer, but every new lump should be checked by a doctor.'],
    ],
    sources: [
      ['National Cancer Society Malaysia — Late-stage breast cancer diagnoses on the rise (17 Feb 2025)', 'https://cancermatters.cancer.org.my/2025/02/17/late-stage-breast-cancer-diagnoses-on-the-rise-in-malaysia-despite-overall-decline/'],
      ['National Cancer Society Malaysia — Early detection, better survival (6 Oct 2025)', 'https://cancermatters.cancer.org.my/2025/10/06/early-detection-better-survival-malaysias-breast-cancer-challenge/'],
      ['National Cancer Institute — Summary of Malaysia National Cancer Registry Report 2017–2021', 'https://nci.moh.gov.my/images/pdf/SUMMARY-OF-MALAYSIA-NATIONAL-CANCER-REGISTRY-REPORT-2017-2021.pdf'],
      ['LPPKN — Mammogram programme', 'https://mamogram.lppkn.gov.my/'],
      ['Malay Mail — Melaka sees strong uptake of free breast screenings (13 Jun 2026)', 'https://www.malaymail.com/news/malaysia/2026/06/13/melaka-sees-strong-uptake-as-1318-women-get-free-breast-cancer-screenings/223602'],
      ['PERKESO SEHATi — Health screening programme', 'https://sehati.ladesk.com/'],
      ['Media Selangor — Selangor Saring (Jul 2026)', 'https://mediaselangor.com/en/2026/07/382862'],
    ],
    related: ['undiagnosed-diabetes-high-blood-pressure-young-adults', 'medipulih-klinik-seri-pristana-guide', 'world-mental-health-day-2026-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'world-mental-health-day-2026-malaysia',
    title: 'World Mental Health Day 2026: how to check in, and where to call in Malaysia',
    crumb: 'World Mental Health Day 2026',
    seoTitle: 'World Mental Health Day 2026 Malaysia: Helplines (HEAL 15555) & How to Help',
    desc: 'Calls to Malaysia’s Talian HEAL 15555 have more than tripled since 2023. How to check in on yourself and others, Malaysian mental health helplines, and how a GP can help.',
    excerpt: 'Calls to Talian HEAL 15555 have more than tripled since 2023. Simple ways to check in on yourself and others, plus the helplines worth saving.',
    standfirst: 'World Mental Health Day falls on Saturday, 10 October. More Malaysians than ever are reaching out for support, and that is a good thing. Here is how to check in, and where to turn.',
    cat: 'mental-wellbeing', catLabel: 'Mental wellbeing', mins: 6, published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Mental health'],
    image: 'mental-health', imageAlt: 'Letter tiles spelling “mental health” beside a green leaf',
    keyPoints: [
      'Talian HEAL 15555 received 90,981 calls in 2025, more than three times the 2023 total.',
      'About 1 million Malaysians aged 15 and over live with depression (NHMS 2023).',
      'Asking someone “How are you, really?” and listening without judging is a powerful first step.',
      'If someone is in immediate danger, call 999.',
    ],
    sections: [
      { id: 'theme', h: 'This year’s theme', html: `<p>The World Federation for Mental Health has chosen <strong>“Lived Experiences Heard: Real Voices, Real Change”</strong> as the theme for World Mental Health Day 2026. It is a reminder that people who have lived with mental health conditions have a great deal to teach the rest of us about what helps.</p>` },
      { id: 'reaching-out', h: 'More Malaysians are reaching out', html: `<p>The Ministry of Health’s free psychosocial support line, <strong>Talian HEAL 15555</strong>, answered 27,738 calls in 2023, 42,990 in 2024 and 90,981 in 2025. By mid-June 2026 it had already taken 66,442 calls, and more than 230,000 since it launched in October 2022. Most callers are aged 18 to 35.</p>
<p>The national picture shows why. The National Health and Morbidity Survey 2023 estimated that about <strong>1 million people aged 15 and over</strong> have depression, double the 2019 figure, with the highest rate among those aged 16 to 19. Mental health problems among children aged 5 to 15 rose from 7.9% to 16.5%.</p>
<p>There are also signs of progress. Attempted suicide is no longer a criminal offence in Malaysia since 2025, removing a barrier that kept some people from seeking help. The Ministry of Health runs 39 MENTARI community mental health centres, and in September 2026 it launched guidelines on supporting families and communities after a suicide.</p>` },
      { id: 'check-in', h: 'How to check in on someone', html: `<ul>
<li><strong>Pick a quiet moment</strong>: a walk, a drive, a teh tarik.</li>
<li><strong>Ask directly and kindly</strong>: “You’ve seemed a bit down lately. How are you, really?”</li>
<li><strong>Listen more than you talk.</strong> You do not need to fix anything.</li>
<li><strong>Do not judge or rush to advice.</strong> “That sounds really hard” goes a long way.</li>
<li><strong>Encourage support</strong>: a trusted person, a helpline, or a doctor. Offer to help make the call.</li>
<li><strong>Follow up</strong> a few days later.</li>
</ul>
<p>If you are worried that someone might harm themselves, it is okay to ask about suicide directly. Asking does not put the idea in their head, and it can be a relief to be asked.</p>` },
      { id: 'yourself', h: 'Looking after yourself', html: `<p>Small, steady habits help: regular sleep, daylight and movement, time with people who make you feel safe, and breaks from the news and your phone. Try a short breathing practice: breathe in for four counts, hold for four, breathe out for six, and repeat for a few minutes.</p>
${figure('morning-walk', 'A woman walking along a tree-lined path in morning light', 'Even a 10-minute walk outdoors can lift your mood. On haze days, walk indoors instead.')}` },
      { id: 'helplines', h: 'Helplines worth saving', html: `<div class="table-wrap"><table>
<thead><tr><th>Service</th><th>Contact</th><th>Hours</th></tr></thead>
<tbody>
<tr><td>Talian HEAL (Ministry of Health)</td><td><a href="tel:15555">15555</a></td><td>8am to midnight daily</td></tr>
<tr><td>Befrienders Kuala Lumpur</td><td><a href="tel:+60376272929">03-7627 2929</a></td><td>24 hours</td></tr>
<tr><td>Talian Kasih</td><td><a href="tel:15999">15999</a> or WhatsApp 019-261 5999</td><td>24 hours</td></tr>
<tr><td>Emergency</td><td><a href="tel:999">999</a></td><td>24 hours</td></tr>
</tbody></table></div>` },
      { id: 'gp', h: 'How a GP can help', html: `<p>Your family doctor is a good place to start. A GP can talk through how you are feeling, screen for depression and anxiety, check for physical causes such as thyroid problems, start treatment, and refer you to a psychologist, psychiatrist or a MENTARI centre if needed. Several clinics in our directory list mental health counselling among their services.</p>` },
    ],
    clinicsIntro: 'These clinics in our directory list mental health counselling. Call ahead to ask about appointments:',
    faqs: [
      ['What is Talian HEAL 15555?', 'It is the Ministry of Health’s free psychosocial support line, open from 8am to midnight every day, including public holidays.'],
      ['Is there a 24-hour emotional support line in Kuala Lumpur?', 'Befrienders Kuala Lumpur offers confidential emotional support 24 hours a day on 03-7627 2929.'],
      ['Can I see a GP for anxiety or depression?', 'Yes. GPs can assess your symptoms, start treatment and refer you to specialist mental health services if needed.'],
    ],
    sources: [
      ['World Federation for Mental Health — World Mental Health Day 2026 theme (11 Aug 2026)', 'https://wfmh.global/news/2026.26-08-11_world-mental-health-day-2026'],
      ['The Star — Mental health helpline received more than 230,000 calls (9 Jul 2026)', 'https://www.thestar.com.my/news/nation/2026/07/09/malaysias-mental-health-helpline-received-more-than-230000-calls-since-launch-says-health-ministry'],
      ['The Star — Calls to Talian HEAL doubled between 2024 and 2025 (6 Jan 2026)', 'https://www.thestar.com.my/news/nation/2026/01/06/calls-to-talian-heal-doubled-between-2024-and-2025-says-dr-dzul'],
      ['Bernama — Ministry of Health on psychiatric rehabilitation and MENTARI centres (6 Oct 2026)', 'https://www.bernama.com/en/general/news.php?id=2616056'],
      ['Free Malaysia Today — 1 million Malaysians suffer from depression, says survey (16 May 2024)', 'https://www.freemalaysiatoday.com/category/nation/2024/05/16/1-million-malaysians-suffer-from-depression-says-survey'],
      ['Befrienders Kuala Lumpur', 'https://findahelpline.com/organizations/befrienders-kuala-lumpur'],
    ],
    related: ['undiagnosed-diabetes-high-blood-pressure-young-adults', 'clinic-or-emergency-department', 'medipulih-klinik-kelana-jaya-guide'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'undiagnosed-diabetes-high-blood-pressure-young-adults',
    title: 'Most young Malaysians with diabetes or high blood pressure don’t know it',
    crumb: 'Undiagnosed diabetes & high blood pressure',
    seoTitle: 'Undiagnosed Diabetes & High Blood Pressure in Young Malaysians: Free Screening',
    desc: 'Over 80% of Malaysians aged 18–29 with diabetes or hypertension are undiagnosed, the health minister said in October 2026. Why it goes unnoticed, which checks you need, and free screening options.',
    excerpt: 'Over 80% of adults aged 18–29 with diabetes or high blood pressure are undiagnosed. Which simple checks you need, and how to get them free.',
    standfirst: 'Diabetes and high blood pressure rarely cause symptoms in the early years. New figures shared in Parliament show most young adults who have them have no idea, and a few simple checks can change that.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', mins: 6, published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Type 2 diabetes', 'Diabetes'],
    image: 'glucometer', imageAlt: 'Hands using a glucometer to check blood sugar',
    keyPoints: [
      'Over 80% of adults aged 18–29 with diabetes or high blood pressure are undiagnosed (NHMS 2023, cited in Parliament on 6 October 2026).',
      'Nationally, 15.6% of adults have diabetes and 29.2% have high blood pressure.',
      'A blood pressure reading, a blood sugar test and a cholesterol test can pick up most problems early.',
      'PERKESO contributors aged 40–59 can get free screening through the SEHATi app.',
    ],
    sections: [
      { id: 'news', h: 'What the new figures show', html: `<p>On 6 October 2026, the Health Minister told Parliament that, according to the National Health and Morbidity Survey (NHMS) 2023, <strong>more than 80% of adults aged 18 to 29</strong> who have diabetes or high blood pressure do not know it. That is about 192,000 young adults with diabetes and 340,000 with hypertension.</p>
<p>The picture is only slightly better among people in their 30s: around 60% of those with diabetes and over 70% of those with hypertension are undiagnosed. Diabetes is also showing up earlier. By June 2026, 660 new cases had been registered among people under 30, after 1,932 in the whole of 2025.</p>` },
      { id: 'picture', h: 'The bigger picture', html: `<div class="table-wrap"><table>
<thead><tr><th>Condition (adults, NHMS 2023)</th><th>Prevalence</th><th>Undiagnosed</th></tr></thead>
<tbody>
<tr><td>Diabetes</td><td>15.6% (about 3.6 million)</td><td>5.9% of adults</td></tr>
<tr><td>High blood pressure</td><td>29.2% (about 6.7 million)</td><td>11.9% of adults</td></tr>
<tr><td>High cholesterol</td><td>33.3% (about 7.5 million)</td><td>18.1% of adults</td></tr>
<tr><td>Overweight or obese</td><td>54.4%</td><td>–</td></tr>
</tbody></table></div>
<p>Left unchecked for years, these conditions quietly raise the risk of heart attack, stroke, kidney disease and eye problems. Ischaemic heart disease alone caused 17,421 deaths in Malaysia in 2024.</p>` },
      { id: 'why', h: 'Why it goes unnoticed', html: `<p>High blood pressure and early type 2 diabetes usually cause <strong>no symptoms at all</strong>. When symptoms do appear (thirst, passing more urine, tiredness, blurred vision, slow-healing wounds), the condition has often been there for some time. You may be at higher risk if you:</p>
<ul><li>Are overweight, especially around the waist</li><li>Have a parent or sibling with diabetes or high blood pressure</li><li>Had diabetes in pregnancy</li><li>Smoke, sleep poorly, or sit for most of the day</li><li>Drink sweet drinks most days</li></ul>` },
      { id: 'checks', h: 'Three simple checks', html: `<ul>
<li><strong>Blood pressure</strong>: takes two minutes at any clinic or pharmacy. You can also <a href="/articles/check-blood-pressure-at-home/">check it at home</a>.</li>
<li><strong>Blood sugar</strong>: an HbA1c or fasting glucose blood test.</li>
<li><strong>Cholesterol</strong>: a lipid profile blood test, often done at the same time.</li>
</ul>
<p>Your doctor will also look at your weight and waist size. If your results are borderline, small changes now can keep them from rising.</p>
${figure('bp-check-desk', 'A blood pressure monitor on a desk beside a notebook')}` },
      { id: 'free', h: 'How to get screened for free', html: `<ul>
<li><strong>PERKESO Health Screening Programme 2026</strong>: for Malaysians aged 40–59 who are active contributors (at least 12 months of contributions). Book through the SEHATi app. It covers blood count, HbA1c, lipid profile, urine test, a physical exam and a doctor consultation, plus a Pap smear and mammogram for women.</li>
<li><strong>PeKa B40</strong>: free health screening for eligible lower-income Malaysians aged 40 and over.</li>
<li><strong>Klinik kesihatan</strong>: government health clinics offer blood pressure and blood sugar checks at low cost.</li>
</ul>
<p>Under 40 and not eligible? A basic check at a private GP clinic is still quick and affordable, and well worth doing.</p>` },
      { id: 'habits', h: 'Small habits that help', html: `<ul><li>Order <em>kurang manis</em> or <em>kosong</em>, and swap one sweet drink a day for plain water.</li><li>Walk for 30 minutes on most days. Two 15-minute walks count too.</li><li>Add more ulam and vegetables to your plate.</li><li>Aim for seven hours of sleep.</li><li>If you smoke, ask your doctor about help to quit.</li></ul>` },
    ],
    clinicsIntro: 'These neighbourhood clinics in our directory offer health screening and chronic disease follow-up:',
    faqs: [
      ['How do I know if I have high blood pressure?', 'The only way to know is to measure it. Most people with high blood pressure feel completely well.'],
      ['Who can get PERKESO’s free health screening?', 'Malaysians aged 40–59 who are active PERKESO contributors with at least 12 months of contributions. Book through the SEHATi app and check the latest eligibility there.'],
      ['Which blood test checks for diabetes?', 'Usually an HbA1c test, which reflects your average blood sugar over the past two to three months, or a fasting blood glucose test.'],
    ],
    sources: [
      ['Healthcare Asia — More than 80% of young Malaysians with diabetes and hypertension unaware (7 Oct 2026)', 'https://www.healthcareasia.org/2026/more-than-80-of-young-malaysians-with-diabetes-and-hypertension-are-unaware-of-the-condition/'],
      ['The Sun — 660 new diabetes cases among youth in first half of 2026 (16 Jul 2026)', 'https://thesun.my/news/malaysia-news/people-issues/660-new-diabetes-cases-among-malaysian-youth-recorded-in-first-half-of-2026/'],
      ['Institute for Public Health — NHMS 2023 fact sheet', 'https://iku.moh.gov.my/images/nhms2023/fact-sheet-nhms-2023.pdf'],
      ['CodeBlue — Over two million adults live with three NCDs: NHMS 2023 (May 2024)', 'https://codeblue.galencentre.org/2024/05/over-two-million-adults-in-malaysia-live-with-three-ncds-nhms-2023/'],
      ['PERKESO SEHATi — Health screening programme', 'https://sehati.ladesk.com/'],
    ],
    related: ['check-blood-pressure-at-home', 'medipulih-klinik-kelana-jaya-guide', 'breast-cancer-screening-malaysia'],
  },
];
