// Articles published 1 November 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-01';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NOV_2026_A = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'bmi-calculator-malaysia',
    title: 'BMI calculator (Malaysia): check your BMI and healthy weight range',
    crumb: 'BMI calculator',
    desc: 'Free BMI calculator using Malaysian cut-offs (kira BMI): find your BMI, your healthy weight for your height (berat badan ideal), and what your waist size means.',
    excerpt: 'Malaysia uses lower BMI cut-offs than many online calculators, because Asians face higher risks of diabetes and heart disease at a lower weight. Check your BMI, your healthy weight range and your waist with our free calculator, and learn what the numbers mean.',
    standfirst: 'Body mass index (BMI) is a quick way to check whether your weight is healthy for your height. Malaysia uses Asian cut-offs, so a BMI of 23 already counts as overweight, not 25 as on many international charts. Enter your height and weight below to check yours.',
    cat: 'weight', catLabel: 'Weight & metabolism', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Body mass index', 'Obesity', 'Berat badan ideal'],
    image: 'waist-measurement', imageAlt: 'A person measuring their waist with a tape measure',
    ld: [{ '@type': 'WebApplication', name: 'BMI calculator (Malaysian cut-offs)', applicationCategory: 'HealthApplication', operatingSystem: 'Any', url: 'https://healthcaredirectory.my/articles/bmi-calculator-malaysia/', offers: { '@type': 'Offer', price: '0', priceCurrency: 'MYR' } }],
    keyPoints: [
      'BMI = your weight in kg divided by your height in metres, squared.',
      'Malaysian (Asian) cut-offs: under 18.5 is underweight, 18.5–22.9 is healthy, 23–27.4 is overweight and 27.5 or more is obese.',
      'International charts use 25 and 30. Malaysia uses lower cut-offs because Asians develop diabetes and heart disease at lower weights.',
      'A waist of 90 cm or more for men, or 80 cm or more for women, signals extra risk even at a healthy BMI.',
      'More than half of Malaysian adults are overweight or obese. Losing just 5–10% of your weight improves blood sugar, blood pressure and cholesterol.',
    ],
    sections: [
      { id: 'calculator', h: 'BMI calculator', tocLabel: 'BMI calculator', html: `<p>Enter your height in centimetres or feet and inches, and your weight in kilograms or pounds: use the small switches beside each label. Add your waist measurement if you know it. The calculator is for adults aged 18 and over.</p>
{{calc:bmi}}` },
      { id: 'categories', h: 'BMI categories for Malaysians', tocLabel: 'BMI categories', html: `<div class="table-wrap"><table>
<thead><tr><th>BMI (kg/m²)</th><th>Malaysian category</th><th>International (WHO) category</th></tr></thead>
<tbody>
<tr><td>Below 18.5</td><td>Underweight</td><td>Underweight</td></tr>
<tr><td>18.5–22.9</td><td>Healthy weight</td><td>Normal</td></tr>
<tr><td>23–24.9</td><td>Overweight</td><td>Normal</td></tr>
<tr><td>25–27.4</td><td>Overweight</td><td>Overweight</td></tr>
<tr><td>27.5–29.9</td><td>Obese</td><td>Overweight</td></tr>
<tr><td>30 and above</td><td>Obese</td><td>Obese</td></tr>
</tbody></table></div>
<p>The Malaysian categories come from the Ministry of Health’s <em>Clinical Practice Guidelines on the Management of Obesity</em> (2nd edition, 2023). They follow a World Health Organization expert review, which found that Asian people have a high risk of type 2 diabetes and heart disease at BMIs below the international cut-off of 25.</p>` },
      { id: 'how', h: 'How to calculate BMI (cara kira BMI)', tocLabel: 'How to calculate', html: `<p><strong>BMI = weight (kg) ÷ height (m) × height (m)</strong></p>
<p>In pounds and inches: <strong>BMI = 703 × weight (lb) ÷ height (in) × height (in)</strong>.</p>
<p><strong>Example:</strong> someone who weighs 70 kg and is 1.65 m tall:</p>
<ol>
<li>Height squared: 1.65 × 1.65 = 2.72</li>
<li>BMI: 70 ÷ 2.72 = <strong>25.7</strong></li>
</ol>
<p>That counts as <strong>overweight</strong> under both the Malaysian and international cut-offs. The difference shows at lower and higher BMIs: a BMI of 24 looks “normal” on an international chart but counts as overweight in Malaysia, and a BMI of 28 counts as obese in Malaysia but only overweight internationally.</p>` },
      { id: 'ideal', h: 'What is my ideal weight? (Berat badan ideal)', tocLabel: 'Ideal weight', html: `<p>There is no single “ideal” weight. A better guide is the <strong>healthy weight range</strong> for your height, which is the weight that gives a BMI between 18.5 and 22.9:</p>
<div class="table-wrap"><table>
<thead><tr><th>Height</th><th>Healthy weight range</th></tr></thead>
<tbody>
<tr><td>150 cm</td><td>41.6–51.5 kg</td></tr>
<tr><td>155 cm</td><td>44.4–55.0 kg</td></tr>
<tr><td>160 cm</td><td>47.4–58.6 kg</td></tr>
<tr><td>165 cm</td><td>50.4–62.3 kg</td></tr>
<tr><td>170 cm</td><td>53.5–66.2 kg</td></tr>
<tr><td>175 cm</td><td>56.7–70.1 kg</td></tr>
<tr><td>180 cm</td><td>59.9–74.2 kg</td></tr>
</tbody></table></div>
<p>The calculator above works out the range for your exact height.</p>` },
      { id: 'waist', h: 'Why your waist matters too', tocLabel: 'Waist size', html: `<p>Fat stored around the tummy is more harmful than fat elsewhere, raising the risk of type 2 diabetes, high blood pressure and heart disease. In Malaysia, a waist circumference of <strong>90 cm or more for men</strong> or <strong>80 cm or more for women</strong> counts as abdominal obesity, even if your BMI is in the healthy range.</p>
<p><strong>How to measure:</strong> stand up straight, breathe out normally, and wrap a tape measure around your middle halfway between your lowest rib and the top of your hip bone, usually around the belly button. Keep the tape snug but not tight.</p>` },
      { id: 'limits', h: 'Limits of BMI', tocLabel: 'Limits of BMI', html: `<p>BMI is a useful first check, but it doesn’t measure body fat directly:</p>
<ul>
<li><strong>Muscular people</strong>, such as athletes, can have a high BMI without excess fat.</li>
<li><strong>Older adults</strong> may have a normal BMI but less muscle and more fat.</li>
<li>It isn’t suitable during <strong>pregnancy</strong>.</li>
<li><strong>Children and teenagers</strong> are assessed with BMI-for-age growth charts, which compare them with others of the same age and sex, not with the adult categories.</li>
</ul>
<p>A doctor can look at your BMI together with your waist, blood pressure, blood sugar and cholesterol for a fuller picture.</p>` },
      { id: 'malaysia', h: 'Overweight and obesity in Malaysia', tocLabel: 'Malaysia’s numbers', html: `<p>The National Health and Morbidity Survey 2024 found that <strong>53.6% of adults</strong> were overweight or obese (30.5% overweight and 23.1% obese), and more than half had abdominal obesity. Among children and teenagers aged 5 to 19, more than 1 in 4 were overweight or obese. These figures use international cut-offs, so more people would count under the Malaysian ones.</p>
${figure('physio-weights', 'A pair of small blue dumbbells, trainers and an exercise ball', 'Regular activity and small, lasting changes to eating habits are the foundation of healthy weight loss.')}` },
      { id: 'next', h: 'What to do if your BMI is high', tocLabel: 'If your BMI is high', html: `<ul>
<li><strong>Aim for 5–10% weight loss first.</strong> For someone weighing 80 kg, that is 4 to 8 kg. Even this much improves blood sugar, blood pressure and cholesterol.</li>
<li><strong>Eat smaller portions</strong>, especially of rice, noodles and bread, fill half your plate with vegetables, and cut down on sugary drinks, including teh tarik and sweetened kopi.</li>
<li><strong>Move more:</strong> aim for at least 150 minutes of moderate activity, such as brisk walking, each week.</li>
<li><strong>Get checked.</strong> A high BMI or waist is a reason to test your blood sugar, blood pressure and cholesterol. See our guides to <a href="/articles/normal-blood-sugar-level-malaysia/">normal blood sugar levels</a> and <a href="/articles/blood-pressure-cholesterol-malaysia/">blood pressure and cholesterol</a>.</li>
</ul>
<p>Lifestyle change is the first step in the Malaysian obesity guideline. For people with a high BMI who haven’t lost enough weight with lifestyle changes alone, doctors may add weight-loss medicines, and bariatric surgery may be considered for a BMI of 37.5 or more, or 32.5 or more with conditions such as diabetes. See our guide to <a href="/articles/weight-loss-injections-malaysia/">weight-loss injections</a>.</p>
<p>If your BMI is <strong>below 18.5</strong>, or you have lost weight without trying, see a doctor to check for an underlying cause.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a weight and health check',
    clinicsTocLabel: 'Get checked',
    clinicsIntro: 'A GP can check your weight, waist, blood pressure, blood sugar and cholesterol, and help you plan safe weight loss. If you receive STR and are 40 or over, the screening may be free through PeKa B40. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/peka-b40-clinics/', 'PeKa B40 panel clinics']],
    faqs: [
      ['What is a normal BMI in Malaysia?', 'For adults, a healthy BMI in Malaysia is 18.5 to 22.9. A BMI of 23 to 27.4 is overweight and 27.5 or more is obese.'],
      ['How do I calculate my BMI?', 'Divide your weight in kilograms by your height in metres squared. For example, 70 kg ÷ (1.65 m × 1.65 m) = 25.7. In pounds and inches, multiply your weight in pounds by 703 and divide by your height in inches squared.'],
      ['Why are Malaysian BMI cut-offs lower than international ones?', 'Asian people tend to carry more body fat at the same BMI and develop diabetes and heart disease at lower weights, so Malaysia uses 23 and 27.5 instead of 25 and 30.'],
      ['What is my ideal weight for my height?', 'The healthy range is the weight that gives a BMI of 18.5 to 22.9. For example, for someone 160 cm tall, that is about 47 to 59 kg.'],
      ['What waist size is too big?', 'In Malaysia, a waist of 90 cm or more for men, or 80 cm or more for women, signals abdominal obesity and a higher risk of diabetes and heart disease.'],
      ['Is BMI accurate?', 'It is a useful first check but doesn’t measure fat directly. It can overestimate fat in muscular people and underestimate it in older people, and isn’t used in pregnancy or for children.'],
      ['How much weight should I lose?', 'Start with 5 to 10% of your current weight. That amount already improves blood sugar, blood pressure and cholesterol.'],
    ],
    sources: [
      ['CodeBlue — Malaysia’s latest obesity management CPG: obesity is chronic (Dec 2023)', 'https://codeblue.galencentre.org/2023/12/malaysias-latest-obesity-management-cpg-obesity-is-chronic/'],
      ['WHO Expert Consultation — Appropriate body-mass index for Asian populations (The Lancet, 2004)', 'https://pubmed.ncbi.nlm.nih.gov/14726171/'],
      ['World Obesity Federation — Malaysia country profile', 'https://data.worldobesity.org/country/malaysia-130/'],
      ['Institute for Public Health — National Health and Morbidity Survey 2024 fact sheet', 'https://iku.nih.gov.my/images/nhms2024/fact_sheet_nhms2024.pdf'],
      ['CodeBlue — NHMS 2023: over half of Malaysian adults overweight or obese (May 2024)', 'https://codeblue.galencentre.org/2024/05/nhms-2023-over-half-of-malaysian-adults-overweight-or-obese/'],
      ['NHS — BMI calculator and what BMI means', 'https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults'],
    ],
    related: ['weight-loss-injections-malaysia', 'normal-blood-sugar-level-malaysia', 'blood-pressure-cholesterol-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'medical-certificate-mc-malaysia',
    title: 'Medical certificates (MC) in Malaysia: sick leave rights, online MCs and the rules',
    crumb: 'Medical certificate (MC)',
    desc: 'Your MC and sick leave rights in Malaysia: 14 to 22 days a year, 60 days hospitalisation, the 48-hour rule, who can issue an MC, online MCs and fake MC penalties.',
    excerpt: 'How many days of paid sick leave you get, the 48-hour rule for telling your employer, which doctors can issue an MC, why MCs from video consultations are no longer allowed, and the penalties for buying a fake MC.',
    standfirst: 'A medical certificate (MC, or “MC chit”) is the doctor’s note that lets you take paid sick leave. Malaysian law sets how many sick days you get and how quickly you must tell your employer, and the Malaysian Medical Council sets the rules for doctors who issue MCs. Here is what employees and employers need to know.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: false,
    about: ['Medical certificate', 'Sick leave', 'Surat cuti sakit'],
    image: 'doctor-notes', imageAlt: 'A doctor in blue gloves writing notes on a clipboard',
    keyPoints: [
      'Under the Employment Act 1955, employees get 14 days of paid sick leave a year with less than 2 years’ service, 18 days with 2 to 5 years, and 22 days with 5 years or more, plus up to 60 days of hospitalisation leave.',
      'Since 1 January 2023, sick leave rights apply to all employees in Peninsular Malaysia and Labuan, whatever their salary.',
      'You must tell your employer within 48 hours of starting sick leave. If you don’t, the absence can be treated as unauthorised.',
      'An MC must be issued after the doctor has examined you. Since 2025, the Malaysian Medical Council doesn’t allow MCs issued only after a video or online consultation.',
      'Buying or using a fake MC is a crime under the Penal Code. Police recorded 33 cases from 2022 to March 2026.',
    ],
    sections: [
      { id: 'what', h: 'What is an MC?', tocLabel: 'What an MC is', html: `<p>An MC (medical certificate, or <em>sijil cuti sakit</em>) is a certificate from a doctor stating that you are unfit for work or school for a set period. In Malaysia it is often called an “MC chit”, meaning a short note. Your employer uses it to approve paid sick leave.</p>
<p>A valid MC should show:</p>
<ul>
<li>your name and MyKad or passport number</li>
<li>the date you were examined, and the dates of the sick leave</li>
<li>the doctor’s signature, name and Malaysian Medical Council registration number</li>
<li>the clinic’s details and a serial number</li>
</ul>
<p>Your diagnosis normally doesn’t need to be written on the MC, and should only be included with your consent.</p>` },
      { id: 'days', h: 'How many days of sick leave do you get?', tocLabel: 'Sick leave days', html: `<p>Under section 60F of the <strong>Employment Act 1955</strong>, as amended in 2022:</p>
<div class="table-wrap"><table>
<thead><tr><th>Length of service</th><th>Paid sick leave a year</th></tr></thead>
<tbody>
<tr><td>Less than 2 years</td><td>14 days</td></tr>
<tr><td>2 to less than 5 years</td><td>18 days</td></tr>
<tr><td>5 years or more</td><td>22 days</td></tr>
<tr><td>When admitted to hospital (or advised hospitalisation)</td><td>Up to 60 days, on top of the above</td></tr>
</tbody></table></div>
<ul>
<li>Since <strong>1 January 2023</strong>, these sick leave rights cover <strong>all employees</strong> in Peninsular Malaysia and Labuan, whatever their salary.</li>
<li>Sick leave certified by a dental surgeon counts within your sick leave days.</li>
<li>Many employers offer more than the legal minimum, so check your contract.</li>
<li>In <strong>Sabah and Sarawak</strong>, sick leave comes under the state Labour Ordinances, which were amended from 1 May 2025 to add 60 days of hospitalisation leave.</li>
</ul>` },
      { id: 'rules', h: 'The 48-hour rule and panel clinics', tocLabel: 'The 48-hour rule', html: `<ul>
<li><strong>Tell your employer within 48 hours</strong> of the start of your sick leave. Under the Employment Act, sick leave that isn’t certified by a doctor, or isn’t notified within 48 hours, is treated as absence without permission. Being absent for more than 2 days in a row without telling your employer can be treated as breaking your contract.</li>
<li><strong>Who can issue the MC:</strong> a registered medical practitioner, including your company’s panel doctor or a government medical officer, or a dental surgeon. The doctor must examine you.</li>
<li><strong>Panel clinics:</strong> if your employer has appointed panel clinics, you are usually expected to use them. Check your company’s policy before seeing another doctor, for example if no panel clinic is open or nearby.</li>
<li><strong>Time slips are not MCs.</strong> A time slip (or attendance letter) only shows you visited a clinic, for example for a check-up. Whether it covers time off depends on your employer’s policy.</li>
<li><strong>Caring for a sick child:</strong> sick leave under the Employment Act is for your own illness. Time off to care for a sick child or family member depends on your employer’s policy, for example emergency or family care leave.</li>
</ul>` },
      { id: 'online', h: 'Are online MCs valid?', tocLabel: 'Online MCs', html: `<p>Not if they are issued only after an online consultation. In a notification dated 23 September 2025, publicised in November 2025, the <strong>Malaysian Medical Council (MMC)</strong> said that issuing a medical certificate solely after a virtual consultation is <strong>not allowed</strong>, and doctors who do so face disciplinary action.</p>
<p>Teleconsultation itself is still allowed: you can get advice, follow-up care and some prescriptions online. But to get an MC, you need to be <strong>examined in person</strong>. Be wary of websites or apps offering an MC through a quick online chat.</p>
<p>MMC rules also say an MC must not be issued without a proper examination, pre-signed, or backdated except in special circumstances. A doctor who issues a false or misleading MC faces disciplinary action.</p>
${figure('gp-consultation', 'A doctor talking with a patient across a desk in a consultation room', 'An MC must be issued after the doctor has examined you in person.')}` },
      { id: 'fake', h: 'Fake MCs: what the law says', tocLabel: 'Fake MCs', html: `<p>Buying, selling or using a fake MC is a criminal offence. Police have charged people under the Penal Code for cheating (section 420), forgery for the purpose of cheating (section 468) and using a forged document as genuine (section 471). These apply to buyers as well as sellers.</p>
<ul>
<li>Bukit Aman recorded <strong>33 fake MC cases and 33 arrests</strong> from 2022 to March 2026, with 10 people charged in court. Most fake MCs were sold online.</li>
<li>In June 2026, a government clinic nurse was among those arrested in Pekan, Pahang, over the sale of fake MCs.</li>
</ul>
<p><strong>For employers:</strong> if you doubt an MC, contact the clinic named on it to check that it was issued. Don’t ask the clinic about the employee’s diagnosis, which is confidential.</p>` },
      { id: 'tips', h: 'Tips for getting an MC', tocLabel: 'Tips', html: `<ul>
<li>See a doctor on the day you fall ill, and bring your MyKad or passport, plus your company’s panel card if you have one.</li>
<li>Ask the clinic for a copy if your employer needs one, and send a photo of the MC to your manager or HR straight away to meet the 48-hour rule.</li>
<li>Many clinics are open in the evenings, at weekends and 24 hours, so you can be seen even if you fall ill outside office hours.</li>
<li>If you are seriously unwell, don’t worry about the MC: go to a hospital emergency department or call <a href="tel:999">999</a>. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic open now',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Feeling unwell and need to see a doctor? Our directory shows which clinics are open right now, with clinics open late, at weekends and 24 hours across Kuala Lumpur, Selangor and other states. Check whether your employer’s panel clinics are listed.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/open-sunday/', 'Clinics open on Sunday']],
    faqs: [
      ['How many days of MC can I take in a year?', 'Under the Employment Act, 14 days with less than 2 years’ service, 18 days with 2 to 5 years and 22 days with 5 years or more, plus up to 60 days if you are hospitalised. Your contract may give more.'],
      ['Do I have to tell my employer about my MC?', 'Yes, within 48 hours of the start of your sick leave. Otherwise the absence can be treated as unauthorised.'],
      ['Is an MC from an online consultation valid in Malaysia?', 'No. The Malaysian Medical Council doesn’t allow doctors to issue an MC solely after a virtual consultation. You need to be examined in person.'],
      ['Can my employer reject an MC from a non-panel clinic?', 'If your employer has panel clinics, you are usually expected to use them. Check your company policy, especially for times when no panel clinic is available.'],
      ['What does MC chit mean?', 'It is an informal Malaysian and Singaporean term for a medical certificate, the doctor’s note that certifies you are unfit for work.'],
      ['Is a time slip the same as an MC?', 'No. A time slip only shows you attended a clinic. It doesn’t certify that you were unfit for work, and how it is treated depends on your employer.'],
      ['What happens if I use a fake MC?', 'It is a criminal offence. People who buy or use fake MCs have been charged under the Penal Code for cheating and forgery, and can also face dismissal.'],
    ],
    sources: [
      ['Malaysian Medical Council — Code of Professional Conduct 2019', 'https://mmc.gov.my/wp-content/uploads/2022/04/Code-of-Professional-Conduct-2019.pdf'],
      ['CodeBlue — MMC bans medical sick certificates issued after teleconsults (Nov 2025)', 'https://codeblue.galencentre.org/2025/11/mmc-bans-medical-sick-certs-issued-after-teleconsults/'],
      ['The Star — No more MC via video call, says MMC (18 Nov 2025)', 'https://www.thestar.com.my/news/nation/2025/11/18/no-more-mc-via-video-call-says-mmc'],
      ['Rahmat Lim & Partners — All employees to be covered under the amended Employment Act 1955 from 1 January 2023', 'https://www.rahmatlim.com/publication/articles/22319/all-employees-irrespective-of-wages-to-be-covered-under-amended-employment-act-1955-from-1-january-2023'],
      ['Rödl & Partner — Amendments to Malaysia’s Employment Act (2022)', 'https://roedl.com/insights/newsflash-asean/2022-03/malaysia-amendments-employment-act-september-2022'],
      ['Baker McKenzie — Key labour law reforms in Sabah and Sarawak (2025)', 'https://insightplus.bakermckenzie.com/bm/employment-compensation/malaysia-key-labour-law-reforms-in-sabah-and-sarawak'],
      ['New Straits Times — Bukit Aman records 33 fake MC cases, 10 charged in court since 2022 (Mar 2026)', 'https://www.nst.com.my/news/nation/2026/03/1405049/bukit-aman-records-33-fake-mc-cases-10-charged-court-2022'],
      ['Malay Mail — Nurse among five remanded in Pekan over sale of fake MCs (Jun 2026)', 'https://www.malaymail.com/news/malaysia/2026/06/16/nurse-among-five-remanded-for-four-days-in-pekan-over-sale-of-fake-mcs/223965'],
    ],
    related: ['clinic-or-emergency-department', 'fomema-medical-check-up', 'peka-b40-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'typhoid-injection-food-handlers-malaysia',
    title: 'Typhoid injection for food handlers in Malaysia: the rules, where to get it and how often',
    crumb: 'Typhoid injection',
    desc: 'Suntikan typhoid for food handlers: who needs it under the Food Hygiene Regulations 2009, fines, how often to repeat it, where to get it, and side effects.',
    excerpt: 'Anyone who prepares or serves food in Malaysia must be vaccinated against typhoid and attend a food handler course. Who counts as a food handler, the penalties, how often the injection is repeated, where to get it, and what to expect.',
    standfirst: 'If you cook, serve or handle food for a business in Malaysia, from a restaurant or stall to a factory or caterer, the law requires you to have a typhoid injection (suntikan typhoid) and a food handler training certificate. Here is what the rules say, how often you need the jab, and where to get it.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Typhoid vaccine', 'Suntikan anti-tifoid', 'Food handler'],
    image: 'vaccination', imageAlt: 'A vaccine injection being given in a person’s upper arm',
    keyPoints: [
      'Under the Food Hygiene Regulations 2009, every food handler must be medically examined and vaccinated, which in practice means the anti-typhoid injection, and must hold a food handler training certificate.',
      'Owners must not employ food handlers who aren’t trained and vaccinated, and must keep the records for inspection. Penalties go up to RM10,000 or 2 years in jail.',
      'Food handlers are usually asked to repeat the injection every 3 years. Some councils and clinics advise every 2 years, so check your local council’s rule.',
      'Private GP clinics give the typhoid injection, and some city councils run their own injection units. Bring your MyKad or passport.',
      'The injection is safe for most people. Side effects are usually a sore arm, mild fever or headache for a day or two.',
    ],
    sections: [
      { id: 'law', h: 'Do food handlers need a typhoid injection? What the law says', tocLabel: 'What the law says', html: `<p>Yes. The <strong>Food Hygiene Regulations 2009</strong>, made under the Food Act 1983, set three requirements:</p>
<ul>
<li><strong>Training (regulation 30):</strong> every food handler must attend a food handler training course and hold a Certificate of Food Handlers Training from a training institution recognised by the Ministry of Health.</li>
<li><strong>Medical examination and vaccination (regulation 31):</strong> every food handler must be medically examined and vaccinated by a registered doctor. The Ministry of Health and local councils apply this as the <strong>anti-typhoid injection</strong>.</li>
<li><strong>Employers (regulation 11):</strong> the owner of food premises must not employ a food handler who hasn’t been trained and vaccinated, and must keep training and vaccination records for inspection.</li>
</ul>
<p>Each of these offences carries a penalty of up to <strong>RM10,000, up to 2 years in jail, or both</strong>, and can be settled with a compound. Food handlers who are ill with, or carry, an infection that can spread through food must report it and stop handling food until a doctor certifies them fit.</p>` },
      { id: 'who', h: 'Who counts as a food handler?', tocLabel: 'Who needs it', html: `<p>Under the regulations, a food handler is anyone who prepares or serves food, or touches food, food equipment or surfaces that food touches, in food premises. That includes:</p>
<ul>
<li>cooks, kitchen helpers and dishwashers in restaurants, cafés and canteens</li>
<li>hawkers, stall and food truck operators</li>
<li>waiters and staff who serve or pack food</li>
<li>workers in food factories, bakeries and catering businesses</li>
</ul>
<p>Local councils check typhoid and training records when you apply for or renew a food business licence, and health inspectors check them during inspections. In January to April 2026, for example, Penang health officers inspected more than 4,000 food premises and found workers without typhoid vaccination at seven of them.</p>` },
      { id: 'how-often', h: 'How often do you need the typhoid injection?', tocLabel: 'How often', html: `<p>The injectable typhoid vaccine protects for about <strong>3 years</strong>, so food handlers are usually asked to repeat it <strong>every 3 years</strong>. This is the interval the Ministry of Health has stated and many councils use. Some clinics and councils ask for a booster every 2 years, which matches international travel advice, so check what your local council requires when you renew your licence.</p>
<p>Keep your <strong>typhoid injection card</strong> or record safe: you will need to show it to your employer and inspectors, and it tells you when the next dose is due.</p>` },
      { id: 'where', h: 'Where to get a typhoid injection', tocLabel: 'Where to get it', html: `<ul>
<li><strong>Private GP clinics:</strong> the most common option. Many give the injection on a walk-in basis and issue a card. It is worth calling ahead to check they have the vaccine in stock.</li>
<li><strong>City council injection units:</strong> some councils run their own service for food handlers, such as Kuala Lumpur City Hall’s (DBKL) injection unit and Johor Bahru City Council’s clinic. Check your council’s website for opening times and payment methods.</li>
<li><strong>Government health clinics:</strong> availability varies, so call your nearest Klinik Kesihatan before going.</li>
</ul>
<p><strong>What to bring:</strong> your MyKad, or passport for foreign workers, and your food handler training certificate if you have one. Some councils also ask for a photo and your premises details.</p>
<p><strong>Cost:</strong> prices vary between clinics and councils, so ask when you call.</p>
${figure('fresh-vegetables', 'Fresh broccoli, tomatoes, cucumber and red peppers on a wooden board', 'Typhoid spreads through food and water contaminated by an infected person, which is why food handlers are vaccinated.')}` },
      { id: 'training', h: 'The food handler course (kursus pengendali makanan)', tocLabel: 'Food handler course', html: `<p>The vaccination goes together with food handler training. The course is run by training schools recognised by the Ministry of Health, covers food hygiene, personal hygiene and food-borne diseases, and usually takes a few hours. Some recognised providers also run it online. Once you pass, you receive a certificate to show your employer and the local council.</p>
<p>Ask your employer or local council which recognised training providers they accept.</p>` },
      { id: 'vaccine', h: 'About the typhoid vaccine: safety and side effects', tocLabel: 'Side effects', html: `<p>The typhoid injection used for food handlers is a single dose given in the upper arm. It can be given from age 2.</p>
<ul>
<li><strong>Common side effects:</strong> pain, redness or swelling where the injection was given, mild fever, headache or feeling unwell for a day or two.</li>
<li><strong>Talk to the doctor first if you</strong> have had an allergic reaction to a vaccine before, are pregnant, or have a weakened immune system. If you are moderately or severely unwell on the day, the injection may be delayed.</li>
<li>The vaccine is not 100% effective, so good hand-washing and food hygiene still matter.</li>
</ul>
<p>Newer typhoid conjugate vaccines, used in some countries from 6 months of age, give longer protection. Ask your doctor what is available.</p>` },
      { id: 'typhoid', h: 'What is typhoid?', tocLabel: 'About typhoid', html: `<p>Typhoid fever is caused by the bacterium <em>Salmonella</em> Typhi, which only lives in humans. It spreads through food or water contaminated with the faeces of an infected person. Some people who recover keep carrying the bacteria and can pass it on through food they handle without feeling ill, which is why food handlers are screened and vaccinated.</p>
<p>Symptoms include a <strong>prolonged high fever</strong>, tiredness, headache, stomach pain, constipation or diarrhoea, and sometimes a rash. Typhoid needs antibiotics, and drug resistance is increasingly common. In Malaysia it is a notifiable disease. Cases are relatively uncommon, but outbreaks have been traced to infected food handlers, such as one in Sabah in 2019 linked to a restaurant worker.</p>
<p>See a doctor if you have a fever lasting more than 3 days, especially after eating from places with poor hygiene or travelling to areas where typhoid is common. For other causes of fever and food-borne illness, see our guides to <a href="/articles/dengue-klang-valley-first-three-days/">dengue</a> and <a href="/articles/stomach-pain-gastric-malaysia/">stomach pain</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for your typhoid injection',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Many GP clinics give the typhoid injection to food handlers. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics that list vaccinations among their services and clinics open at weekends. Call ahead to check the vaccine is in stock.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['Is the typhoid injection compulsory for food handlers in Malaysia?', 'Yes. The Food Hygiene Regulations 2009 require food handlers to be medically examined and vaccinated, which is applied as the anti-typhoid injection, and to attend food handler training.'],
      ['How often do food handlers need a typhoid injection?', 'Usually every 3 years, as the injectable vaccine protects for about 3 years. Some councils and clinics ask for every 2 years, so check with your local council.'],
      ['What is the fine for not having a typhoid injection?', 'Food handlers who aren’t vaccinated, and owners who employ them, can be fined up to RM10,000, jailed for up to 2 years, or both. Offences can be compounded.'],
      ['Where can I get a typhoid injection?', 'At private GP clinics, and at council injection units in some cities, such as DBKL in Kuala Lumpur and MBJB in Johor Bahru. Availability at government health clinics varies, so call ahead.'],
      ['Can foreign workers get the typhoid injection?', 'Yes. Clinics give it to foreign food handlers too. Bring your passport.'],
      ['What are the side effects of the typhoid injection?', 'Usually a sore arm, redness or swelling, and sometimes mild fever or headache for a day or two. Tell the doctor if you are pregnant, have a weak immune system or have had a vaccine allergy.'],
      ['Who counts as a food handler?', 'Anyone who prepares, serves or touches food, food equipment or food-contact surfaces in food premises, including cooks, kitchen helpers, waiters, hawkers and food factory workers.'],
    ],
    sources: [
      ['Food Hygiene Regulations 2009, P.U.(A) 95/2009 (Food Act 1983)', 'https://faolex.fao.org/docs/pdf/mal91581.pdf'],
      ['Kuala Lumpur City Hall (DBKL) — Health and Environment Department', 'https://www.dbkl.gov.my/jabatan/jabatan-kesihatan-dan-alam-sekitar'],
      ['Majlis Bandaraya Johor Bahru — Anti-typhoid injection for traders and food handlers', 'https://www.mbjb.gov.my/ms/info-mbjb/pusat-media/pengumuman/suntikan-anti-tifoid-untuk-para-peniaga-dan-pengendali-makanan-di'],
      ['Perbadanan Labuan — Health certificate for food handlers', 'https://www.pl.gov.my/rakyat/perkhidmatan/kesihatan/sijil-kesihatan/?lang=en'],
      ['Malay Mail — Deputy minister on food poisoning cases and typhoid injections (Oct 2013)', 'https://www.malaymail.com/news/malaysia/2013/10/21/deputy-minister-9777-cases-of-food-poisoning-reported-in-first-nine-months/547217'],
      ['Malay Mail — Penang orders closure of 177 food premises over hygiene violations (Jun 2026)', 'https://www.malaymail.com/news/malaysia/2026/06/16/penang-orders-closure-of-177-food-premises-over-hygiene-violations/224015'],
      ['World Health Organization — Typhoid fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/typhoid'],
      ['US CDC — Typhoid vaccine information statement', 'https://www.cdc.gov/vaccines/hcp/current-vis/typhoid.html'],
    ],
    related: ['clinic-or-emergency-department', 'floods-health-risks-malaysia', 'fomema-medical-check-up'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'rsv-malaysia',
    title: 'RSV in Malaysia: symptoms in babies and adults, danger signs, and the vaccine',
    crumb: 'RSV',
    desc: 'RSV virus symptoms in babies, children and older adults, breathing danger signs, how RSV differs from flu, treatment, and RSV vaccines and baby injections in Malaysia.',
    excerpt: 'Respiratory syncytial virus (RSV) causes cold-like symptoms in most people but can make babies and older adults seriously ill. The symptoms, the breathing signs that need urgent care, how it is treated, and the vaccines and baby injections now available in Malaysia.',
    standfirst: 'RSV is a common virus that almost every child catches by age 2. In most people it is just a cold, but in young babies it can inflame the small airways of the lungs (bronchiolitis) and cause serious breathing problems, and it can be dangerous for older adults too. Here is what to watch for, and how to protect the people most at risk.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Respiratory syncytial virus', 'Bronchiolitis'],
    image: 'paediatrician', imageAlt: 'A doctor listening to a baby’s chest with a stethoscope',
    keyPoints: [
      'RSV spreads through coughs, sneezes, touch and contaminated surfaces. Symptoms start 4 to 7 days after contact, and most people recover in 1 to 2 weeks.',
      'Babies under 6 months, premature babies, children with heart or lung conditions, older adults and people with weak immunity are most at risk of severe illness.',
      'Get urgent help if a baby is breathing fast or with effort, has pauses in breathing, blue or grey lips, is feeding much less or has no wet nappy for 12 hours.',
      'There is no specific medicine for RSV. Treatment is supportive: fluids, fever relief and, in hospital, oxygen.',
      'In Malaysia, RSV vaccines for adults aged 60+ and pregnant women, and a preventive antibody injection for babies, are available privately. They aren’t part of the free national programme.',
    ],
    sections: [
      { id: 'what', h: 'What is RSV?', tocLabel: 'What RSV is', html: `<p><strong>Respiratory syncytial virus (RSV)</strong> infects the nose, throat and lungs. It spreads through droplets from coughs and sneezes, by touching an infected person, and from contaminated hands, toys and surfaces, where it can survive for hours. Nearly all children have had RSV by age 2, and you can catch it again throughout life.</p>
<p>RSV circulates all year in Malaysia, with peaks that often come in the second half of the year. A study of Negeri Sembilan’s government hospitals from 2017 to 2024 found that about 1 in 7 respiratory samples tested positive for RSV, with the usual peak between July and September.</p>` },
      { id: 'symptoms', h: 'RSV symptoms in babies, children and adults', tocLabel: 'Symptoms', html: `<p>Symptoms usually start 4 to 7 days after catching the virus:</p>
<ul>
<li><strong>Most children and adults:</strong> runny or blocked nose, cough, sneezing, sore throat, mild fever and tiredness, like a cold.</li>
<li><strong>Babies:</strong> may be irritable, feed less than usual and have less energy. Not all have a fever. RSV can spread to the small airways (bronchiolitis), causing a worsening cough, wheezing and fast or difficult breathing, often worst around days 3 to 5.</li>
<li><strong>Older adults:</strong> RSV can make heart and lung conditions such as asthma, COPD and heart failure worse, and can cause pneumonia or confusion.</li>
</ul>
<p>Most people recover within 1 to 2 weeks, although a cough can linger longer. See our guide to a <a href="/articles/persistent-cough-malaysia/">cough that won’t go away</a>.</p>
<div class="box box--pink" role="note"><span class="box__title">Get urgent medical help if a baby or child</span><p style="font-size:16px;line-height:1.6">is breathing fast or working hard to breathe, with the skin pulling in under the ribs or at the neck; makes grunting noises or has pauses in breathing; has blue, grey or pale lips or tongue; is floppy, very sleepy or hard to wake; is feeding much less than usual or has had no wet nappy for 12 hours or more; is under 3 months old with a temperature of 38°C or above; or has a fit. Call <a href="tel:999">999</a> or go to an emergency department.</p></div>` },
      { id: 'risk', h: 'Who is at risk of severe RSV?', tocLabel: 'Who is at risk', html: `<ul>
<li>babies under 6 months, especially in their first RSV season</li>
<li>babies born prematurely</li>
<li>children with heart or lung conditions, or a weakened immune system</li>
<li>adults aged 60 or 75 and over, especially with long-term heart or lung disease or diabetes</li>
<li>anyone with a weakened immune system</li>
</ul>` },
      { id: 'flu', h: 'Is RSV the same as flu or COVID-19?', tocLabel: 'RSV, flu or COVID?', html: `<p>No. RSV, influenza and COVID-19 are different viruses, but their symptoms overlap, so only a test can tell them apart. Some clinics and laboratories offer swab tests that check for several viruses at once. Knowing which virus it is can matter for high-risk people, as flu and COVID-19 have antiviral treatments while RSV doesn’t. See our guide to <a href="/articles/influenza-a-malaysia/">influenza A</a>.</p>
${figure('fever-thermometer', 'A digital thermometer showing a high temperature', 'RSV, flu and COVID-19 can all cause fever, cough and a runny nose.')}` },
      { id: 'treatment', h: 'How RSV is treated', tocLabel: 'Treatment', html: `<p>There is no specific antiviral medicine for RSV, and antibiotics don’t work against it. Most people can be cared for at home:</p>
<ul>
<li>Keep babies and children drinking: offer smaller, more frequent feeds.</li>
<li>Use saline drops and gentle suction to clear a blocked nose before feeds.</li>
<li>Give paracetamol (or ibuprofen for children old enough) for fever or discomfort, following the dose for their age. Don’t give aspirin to children under 16.</li>
<li>Keep children away from cigarette smoke.</li>
</ul>
<p>Babies and adults who struggle to breathe or drink may need hospital care for oxygen, fluids and help clearing secretions.</p>` },
      { id: 'prevention', h: 'RSV vaccines and baby injections in Malaysia', tocLabel: 'Vaccines', html: `<p>Several RSV prevention options have become available in Malaysia since 2024. None is yet part of the free National Immunisation Programme, so they are given at private clinics and hospitals.</p>
<div class="table-wrap"><table>
<thead><tr><th>Who</th><th>What is available</th></tr></thead>
<tbody>
<tr><td>Adults aged 60 and over</td><td>RSV vaccines, given as a single dose. The first was approved in Malaysia in 2024.</td></tr>
<tr><td>Pregnant women</td><td>An RSV vaccine given in the third trimester, so the mother passes protective antibodies to her baby for the first months of life. Ask your obstetrician about the right timing.</td></tr>
<tr><td>Babies</td><td>A preventive antibody injection (nirsevimab), given as a single dose before or during a baby’s first RSV season. It has been available in Malaysia since November 2025.</td></tr>
</tbody></table></div>
<p>Doctors’ groups in Malaysia have called for RSV protection for babies to be added to the national programme. Until then, talk to your doctor or paediatrician about whether it is suitable for your family, especially for premature or high-risk babies. Also see our <a href="/articles/baby-vaccination-schedule-malaysia/">baby vaccination schedule</a>.</p>
<p><strong>Everyday prevention:</strong> wash hands often, keep sick people away from young babies, avoid kissing babies on the face when you have a cold, clean toys and surfaces, and keep children with cold symptoms home from nursery.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor about RSV',
    clinicsTocLabel: 'See a doctor',
    clinicsIntro: 'For a baby or older adult with cold symptoms and any breathing difficulty, see a doctor promptly, or go to an emergency department if danger signs appear. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late, at weekends and 24 hours, many of which offer vaccinations.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['What are the symptoms of RSV in babies?', 'A runny nose, cough, poor feeding, irritability and sometimes fever. In some babies it spreads to the lungs, causing wheezing and fast or difficult breathing. Get urgent help for breathing difficulty, pauses in breathing, blue lips or much reduced feeding.'],
      ['How long does RSV last?', 'Most people recover in 1 to 2 weeks, though a cough can last longer. In babies, symptoms are often worst around days 3 to 5.'],
      ['Is RSV the same as flu?', 'No. They are different viruses with similar symptoms, so only a test can tell them apart. Flu has antiviral treatments, while RSV doesn’t.'],
      ['How is RSV treated?', 'There is no specific medicine. Treatment is supportive: fluids, fever relief, clearing a blocked nose and, for severe cases, oxygen and fluids in hospital.'],
      ['Is there an RSV vaccine in Malaysia?', 'Yes. RSV vaccines are available privately for adults aged 60 and over and for pregnant women in the third trimester, and a preventive antibody injection is available for babies. They aren’t part of the free national programme.'],
      ['Is RSV contagious?', 'Yes. It spreads through coughs, sneezes, touch and contaminated surfaces. People are usually infectious for 3 to 8 days, and young babies can spread it for longer.'],
    ],
    sources: [
      ['World Health Organization — Respiratory syncytial virus (RSV) fact sheet (Dec 2025)', 'https://www.who.int/news-room/fact-sheets/detail/respiratory-syncytial-virus-(rsv)'],
      ['NHS — Respiratory syncytial virus (RSV) (reviewed Jul 2024)', 'https://www.nhs.uk/conditions/respiratory-syncytial-virus-rsv/'],
      ['Frontiers in Public Health — RSV in Negeri Sembilan government hospitals, 2017–2024 (Oct 2026)', 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2026.1947126/abstract'],
      ['The Rakyat Post — Paediatrician on RSV, rotavirus and HFMD in Malaysian children (Sep 2026)', 'https://www.therakyatpost.com/trpbm/kesihatan/2026/09/07/eksklusif-kanak-kanak-di-malaysia-dijangkiti-rsv-rotavirus-hfmd-ini-info-penting-oleh-dr-tai-chian-wern'],
      ['Free Malaysia Today — Malaysia approves RSV vaccine for older adults (Sep 2024)', 'https://fmtv5.freemalaysiatoday.com/category/leisure/2024/09/24/malaysia-approves-gsks-arexvy-vaccine-for-rsv'],
      ['CodeBlue — Nirsevimab now available in Malaysia to protect infants against RSV (Nov 2025)', 'https://codeblue.galencentre.org/2025/11/beyfortus-nirsevimab-now-available-in-malaysia-to-protect-all-infants-against-rsv-disease/'],
      ['CodeBlue — Protecting Malaysia’s children from an invisible threat (Jun 2026)', 'https://codeblue.galencentre.org/2026/06/protecting-malaysias-children-from-an-invisible-threat-dr-musa-mohd-nordin-dr-zulkifli-ismail/'],
    ],
    related: ['influenza-a-malaysia', 'baby-vaccination-schedule-malaysia', 'hfmd-children-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'chickenpox-malaysia',
    title: 'Chickenpox (cacar air): symptoms, stages, how long it’s contagious, and the vaccine',
    crumb: 'Chickenpox',
    desc: 'Chickenpox (cacar air) symptoms and rash stages, how long it is contagious, home care, when to see a doctor, pregnancy risks and the chickenpox vaccine in Malaysia.',
    excerpt: 'Chickenpox is usually mild in children but can be serious in adults, pregnant women and newborns. The symptoms and rash stages, how long to stay home, what eases the itch, which medicine to avoid, and the chickenpox vaccine in Malaysia.',
    standfirst: 'Chickenpox (cacar air) is a very contagious virus that causes an itchy, spotty rash. Most children recover within a week or two, but it can be more serious for adults, pregnant women, newborns and people with weak immunity. The vaccine isn’t part of Malaysia’s free programme, so many children still catch it.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Chickenpox', 'Varicella', 'Cacar air'],
    image: 'mother-child', imageAlt: 'A mother and her young daughter walking together in a park',
    keyPoints: [
      'Chickenpox is caused by the varicella-zoster virus. Spots appear 10 to 21 days after contact, usually around 2 weeks.',
      'It is contagious from 1 to 2 days before the rash until every blister has crusted over, usually about 5 days after the spots appear. Stay home until then.',
      'Use paracetamol for fever, and calamine, antihistamines and cool baths for itch. Don’t give ibuprofen unless a doctor advises it, and never give aspirin to children.',
      'Adults, pregnant women, newborns and people with weak immunity should see a doctor early, as antiviral medicine works best within 24 hours of the rash.',
      'The chickenpox vaccine is given as 2 doses from age 12 months. It isn’t in the free National Immunisation Programme, but private clinics offer it.',
    ],
    sections: [
      { id: 'what', h: 'What is chickenpox?', tocLabel: 'What it is', html: `<p>Chickenpox is caused by the <strong>varicella-zoster virus</strong>, a member of the herpes family. It is also known in Malay as <strong>cacar air</strong>, and in some places as jintungan or bertih. It spreads very easily through coughs and sneezes, and by touching or breathing in virus from the fluid in the blisters.</p>
<p>Most people only get chickenpox once and are then immune. But the virus stays in the body, and can wake up years later as <a href="/articles/shingles-kayap-malaysia/">shingles (kayap)</a>.</p>` },
      { id: 'symptoms', h: 'Chickenpox symptoms and rash stages', tocLabel: 'Symptoms and stages', html: `<p>Symptoms appear <strong>10 to 21 days</strong> after contact, usually about 2 weeks. A mild fever, aches, tiredness and loss of appetite often come a day or two before the rash. Then the spots go through stages:</p>
<ol>
<li><strong>Red spots</strong> appear, often first on the face, scalp, chest, tummy or back, then spread over the body, sometimes inside the mouth.</li>
<li>The spots fill with fluid to become <strong>very itchy blisters</strong>, which break within a day or two.</li>
<li>The blisters dry into <strong>scabs</strong>, which fall off over 1 to 2 weeks.</li>
</ol>
<p>New spots keep appearing for a few days, so you often see spots, blisters and scabs at the same time. Chickenpox is usually milder in children and more severe in teenagers and adults, in whom pneumonia is the most common serious complication. In children, the most common complication is a bacterial skin infection from scratching.</p>` },
      { id: 'contagious', h: 'How long is chickenpox contagious?', tocLabel: 'How long contagious', html: `<p>A person with chickenpox can spread it from <strong>1 to 2 days before the rash appears</strong> until <strong>all the blisters have crusted over</strong>, usually about 5 days after the spots first appear.</p>
<p>Keep your child home from nursery, kindergarten (tadika) or school, and stay off work yourself, until every spot has crusted. Keep away from pregnant women, newborn babies and people with weak immunity during this time.</p>` },
      { id: 'care', h: 'Home care: easing the itch and fever', tocLabel: 'Home care', html: `<ul>
<li><strong>Paracetamol</strong> for fever and discomfort.</li>
<li><strong>Don’t give ibuprofen</strong> or other anti-inflammatory painkillers unless a doctor advises it, as they may raise the risk of serious skin infections with chickenpox. <strong>Never give aspirin</strong> to anyone under 16.</li>
<li><strong>Calamine lotion</strong> or cooling gels on the spots, and <strong>antihistamines</strong> from a pharmacy to reduce itching and help sleep.</li>
<li><strong>Bathing is fine and helps.</strong> A cool or lukewarm bath soothes itching. Pat the skin dry rather than rubbing.</li>
<li><strong>Keep nails short</strong>, and put socks or mittens on young children’s hands at night to stop scratching, which can cause infection and scars.</li>
<li><strong>Drink plenty of fluids</strong>, and wear loose cotton clothes.</li>
</ul>
<p>There is no need to follow special food restrictions (pantang). A normal, varied diet and plenty of fluids are best.</p>
${figure('fever-thermometer', 'A digital thermometer showing a high temperature', 'Paracetamol is the safest choice for chickenpox fever. Avoid ibuprofen unless a doctor advises it.')}` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<p><strong>See a doctor within 24 hours of the rash appearing</strong> if you are an adult or teenager, pregnant, have a weakened immune system, or the person is a newborn baby. Antiviral medicine (aciclovir) can make chickenpox milder, but works best when started within 24 hours of the rash.</p>
<div class="box box--pink" role="note"><span class="box__title">Get urgent medical help if</span><p style="font-size:16px;line-height:1.6">the skin around the blisters becomes red, hot, swollen or very painful; there is difficulty breathing or chest pain; a child is very drowsy, confused, has a stiff neck or a fit, or is showing signs of dehydration; or a newborn baby has chickenpox. Call <a href="tel:999">999</a> or go to an emergency department.</p></div>` },
      { id: 'pregnancy', h: 'Chickenpox in pregnancy', tocLabel: 'Pregnancy', html: `<p>Most women are already immune from childhood chickenpox. If you aren’t, chickenpox in pregnancy can cause pneumonia in the mother, and infection in the first 20 weeks carries a small risk (about 1–2%) of birth defects affecting the baby’s limbs, eyes or brain. Chickenpox around the time of delivery can make a newborn seriously ill.</p>
<p>If you are pregnant and have been near someone with chickenpox or shingles, and you aren’t sure you have had chickenpox, <strong>see your doctor straight away</strong>. A blood test can check your immunity, and preventive treatment may be offered. Don’t wait for a rash.</p>` },
      { id: 'vaccine', h: 'The chickenpox vaccine in Malaysia', tocLabel: 'Vaccine', html: `<ul>
<li>The chickenpox (varicella) vaccine is <strong>not part of Malaysia’s free National Immunisation Programme</strong>, but private clinics and hospitals offer it.</li>
<li>It is given as <strong>2 doses, from age 12 months</strong>. Ask your doctor about the interval between doses for your child’s age. Teenagers aged 13 and over and adults who have never had chickenpox also need 2 doses.</li>
<li>Two doses are about 90% effective at preventing chickenpox, and those who still catch it usually have a much milder illness.</li>
<li>Given within 3 to 5 days of contact with chickenpox, the vaccine can prevent or reduce illness in people who aren’t immune.</li>
<li>Healthcare workers who aren’t immune are advised to be vaccinated.</li>
</ul>
<p>Paediatricians in Malaysia have called for the vaccine to be added to the national programme. Some countries have recently added it to their routine schedules, including the UK from January 2026. See also our <a href="/articles/baby-vaccination-schedule-malaysia/">baby vaccination schedule</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor or get the chickenpox vaccine',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Call the clinic before you go if you think you have chickenpox, so staff can keep you away from vulnerable patients. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, many of which offer vaccinations, including clinics open in the evening and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What are the first signs of chickenpox?', 'A mild fever, tiredness, aches and loss of appetite, followed within a day or two by red spots that turn into itchy, fluid-filled blisters, often starting on the face, chest or back.'],
      ['How long is chickenpox contagious?', 'From 1 to 2 days before the rash appears until all the blisters have crusted over, usually about 5 days after the spots first appear.'],
      ['Can I bathe with chickenpox?', 'Yes. A cool or lukewarm bath helps the itch. Pat the skin dry gently afterwards.'],
      ['Can I give ibuprofen for chickenpox?', 'It is best to avoid ibuprofen unless a doctor advises it, as it may raise the risk of serious skin infections. Use paracetamol for fever, and never give aspirin to children.'],
      ['Is the chickenpox vaccine free in Malaysia?', 'No. It isn’t in the National Immunisation Programme, but private clinics and hospitals offer it, given as 2 doses from age 12 months.'],
      ['Can you get chickenpox twice?', 'It is uncommon. Most people are immune after one infection, but the virus stays in the body and can return later as shingles (kayap).'],
      ['Is chickenpox dangerous in pregnancy?', 'It can be, if you aren’t immune. See a doctor straight away if you are pregnant and have been exposed, as preventive treatment may be offered.'],
    ],
    sources: [
      ['Ministry of Health Malaysia (JKN Johor) — Communicable disease detection module for schools (2019)', 'https://jknjohor.moh.gov.my/jknj/wp-content/uploads/2024/06/Modul-Pengesanan-Penyakit-Berjangkit-CDC-Survelan_Edisi-Pertama-2019.pdf'],
      ['NHS — Chickenpox (reviewed Jan 2025)', 'https://www.nhs.uk/conditions/chickenpox/'],
      ['US CDC — Clinical overview of chickenpox (Jul 2024)', 'https://www.cdc.gov/chickenpox/hcp/clinical-overview/index.html'],
      ['US CDC — Chickenpox vaccine considerations (Jul 2024)', 'https://www.cdc.gov/chickenpox/hcp/vaccine-considerations/index.html'],
      ['Malaysian Paediatric Association — Routine childhood immunisation schedule', 'https://mpaeds.my/wp-content/uploads/2018/03/Routine-Childhood-Immunisation-English.pdf'],
      ['CMAJ / SOGC — Management of chickenpox in pregnancy', 'https://www.cmaj.ca/content/cmaj/183/3/E169.full.pdf'],
      ['CodeBlue — Stop normalising chickenpox: it’s time children got the full shot (Jun 2026)', 'https://codeblue.galencentre.org/2026/06/stop-normalising-chickenpox-its-time-children-got-the-full-shot-dr-musa-mohd-nordin-dr-zulkifli-ismail/'],
      ['UK Health Security Agency — Changes to the childhood vaccination schedule from January 2026', 'https://ukhsa.blog.gov.uk/2025/12/30/changes-to-the-childhood-vaccination-schedule-from-january-2026/'],
    ],
    related: ['shingles-kayap-malaysia', 'hfmd-children-malaysia', 'baby-vaccination-schedule-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'shingles-kayap-malaysia',
    title: 'Shingles (kayap): symptoms, is it contagious, treatment, myths and the vaccine',
    crumb: 'Shingles (kayap)',
    desc: 'Shingles (kayap, kayap ular): early symptoms, the one-sided rash, whether it is contagious, antivirals within 72 hours, nerve pain, myths and the vaccine in Malaysia.',
    excerpt: 'Shingles, known in Malay as kayap, is chickenpox virus waking up years later. It causes a painful, one-sided band of blisters. The early signs, why you should see a doctor within 3 days, the truth about “kayap ular”, and the shingles vaccine now available in Malaysia.',
    standfirst: 'Shingles (kayap) is caused by the chickenpox virus reactivating, often decades after childhood chickenpox. It causes a painful band of blisters on one side of the body, and in some people nerve pain that lasts for months. Seeing a doctor early makes a real difference, and a vaccine can now prevent most cases.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Shingles', 'Herpes zoster', 'Kayap'],
    image: 'caring-hands', imageAlt: 'An older person’s hands held gently by another person',
    keyPoints: [
      'Shingles is the chickenpox virus (varicella-zoster) reactivating. Anyone who has had chickenpox can get it, and the risk rises after age 50 and with weak immunity.',
      'It usually starts with burning, tingling or pain on one side of the body, followed a few days later by a band of blisters that doesn’t cross the middle of the body.',
      'See a doctor within 3 days (72 hours) of the rash: antiviral medicine works best early and lowers the risk of long-lasting nerve pain.',
      'You can’t catch shingles, but blister fluid can give chickenpox to someone who isn’t immune. The belief that kayap kills if it “meets” around the body is a myth.',
      'A non-live shingles vaccine, given as 2 doses, has been available in Malaysia since 2024 for adults 50+ and adults 18+ at higher risk.',
    ],
    sections: [
      { id: 'what', h: 'What is shingles (kayap)?', tocLabel: 'What it is', html: `<p>After you have had <a href="/articles/chickenpox-malaysia/">chickenpox</a>, the virus doesn’t leave your body. It lies dormant in nerve roots near the spine, sometimes for decades. If it reactivates, it travels along a nerve to the skin and causes <strong>shingles</strong> (herpes zoster), called <strong>kayap</strong> in Malay.</p>
<p>Anyone who has had chickenpox can get shingles. It becomes more common after <strong>age 50</strong>, and in people whose immunity is weakened by illness, cancer treatment or medicines such as steroids. Stress is often blamed, but age and immunity are the main factors. In the United States, about 1 in 3 people get shingles during their lifetime.</p>` },
      { id: 'symptoms', h: 'Shingles symptoms', tocLabel: 'Symptoms', html: `<ol>
<li><strong>Before the rash:</strong> burning, tingling, itching or sharp pain in one area of skin, sometimes with a headache, fever or feeling unwell. This can last a few days and is easily mistaken for a pulled muscle or, on the chest, heart pain.</li>
<li><strong>The rash:</strong> a red rash that turns into clusters of fluid-filled blisters, in a <strong>band or patch on one side of the body</strong>, most often around the chest or waist. It doesn’t usually cross the middle of the body.</li>
<li><strong>Healing:</strong> the blisters scab over in 7 to 10 days, and the rash usually clears in 2 to 4 weeks.</li>
</ol>
<div class="box box--pink" role="note"><span class="box__title">See a doctor urgently if</span><p style="font-size:16px;line-height:1.6">the rash is on your face near the eye or on the tip of your nose, or you have eye pain, redness or blurred vision, as shingles can damage the eye; you have weakness on one side of your face, ear pain or hearing problems (Ramsay Hunt syndrome); the rash is widespread or on both sides of the body; or you have a weakened immune system.</p></div>` },
      { id: 'myths', h: 'Kayap ular, kayap sambung and other beliefs', tocLabel: 'Kayap myths', html: `<p>Kayap is surrounded by folk beliefs in Malaysia:</p>
<ul>
<li><strong>“Kayap ular”</strong> describes the snake-like band of the rash. It is ordinary shingles, not a different disease.</li>
<li><strong>“If the kayap meets around the body, you will die” (kayap sambung):</strong> a myth. The shingles rash follows a single nerve on one side of the body, so it doesn’t encircle the body. Shingles is painful and troublesome, but in most people it isn’t life-threatening. A rash that spreads widely or appears on both sides is rare and suggests a weakened immune system. It needs prompt medical care for that reason, not because the ends “meet”.</li>
<li><strong>Names such as “kayap api” or “kayap air”</strong> are traditional descriptions, not separate medical conditions.</li>
</ul>
<p>Relying on traditional remedies alone can mean missing the 3-day window for antiviral treatment. Applying pastes or herbs to open blisters can also cause infection. See a doctor first.</p>` },
      { id: 'contagious', h: 'Is shingles contagious?', tocLabel: 'Is it contagious?', html: `<p>You can’t catch shingles from someone with shingles. But the <strong>fluid in the blisters contains the virus</strong>, and can give <strong>chickenpox</strong> to someone who has never had chickenpox or the vaccine.</p>
<ul>
<li>The risk is only while there are open blisters. Once they have scabbed over, you can’t pass it on.</li>
<li>Keep the rash covered, don’t touch or scratch it, and wash your hands often.</li>
<li>Until the blisters have crusted, avoid pregnant women who haven’t had chickenpox, babies under 1 month old and people with weak immunity.</li>
</ul>` },
      { id: 'treatment', h: 'Treatment: why the first 3 days matter', tocLabel: 'Treatment', html: `<p>Antiviral medicines (such as aciclovir, valaciclovir or famciclovir) can shorten the illness and reduce the risk of complications. They work best when started <strong>within 72 hours (3 days)</strong> of the rash appearing, so don’t wait to see if it gets better.</p>
<ul>
<li>Take pain relief as advised by your doctor or pharmacist.</li>
<li>Keep the rash clean and dry, and wear loose cotton clothing.</li>
<li>Cool, damp compresses can ease discomfort.</li>
</ul>
${figure('vaccination', 'A vaccine injection being given in a person’s upper arm', 'A two-dose shingles vaccine has been available in Malaysia since 2024.')}` },
      { id: 'phn', h: 'Nerve pain after shingles (post-herpetic neuralgia)', tocLabel: 'Lasting nerve pain', html: `<p>The most common complication is <strong>post-herpetic neuralgia (PHN)</strong>: burning, stabbing or aching pain in the area of the rash that continues for months, or even years, after the rash heals. It is more likely in people over 50, people with weakened immunity, and those who start antivirals late.</p>
<p>Ordinary painkillers often don’t help nerve pain. Doctors may prescribe medicines for nerve pain, numbing skin patches, or refer you to a pain clinic. Tell your doctor if pain continues after the rash has gone.</p>` },
      { id: 'vaccine', h: 'The shingles vaccine in Malaysia', tocLabel: 'Vaccine', html: `<ul>
<li>A <strong>non-live (recombinant) shingles vaccine</strong> has been available in Malaysia since September 2024.</li>
<li><strong>Who:</strong> adults aged <strong>50 and over</strong>, and adults aged <strong>18 and over</strong> with a higher risk, such as weakened immunity from illness or treatment.</li>
<li><strong>Doses:</strong> 2 injections, given 2 to 6 months apart (1 to 2 months apart for people with weakened immunity).</li>
<li><strong>Protection:</strong> about 97% effective in people aged 50 to 69 and 91% in those 70 and over, with strong protection lasting at least 7 years. It also greatly reduces the risk of post-herpetic neuralgia.</li>
<li>You can have it even if you have had shingles before, once the rash has gone.</li>
</ul>
<p>The shingles vaccine isn’t part of a free government programme, so it is given at private clinics and hospitals. Ask your doctor whether it is right for you.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor about shingles',
    clinicsTocLabel: 'See a doctor',
    clinicsIntro: 'See a GP as soon as the rash appears, ideally within 3 days, so antiviral treatment can start early. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, many of which offer adult vaccinations, including clinics open in the evening and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What are the first signs of shingles (kayap)?', 'Burning, tingling, itching or pain on one side of the body, followed a few days later by a band of red blisters in the same area. Some people also have a headache or fever.'],
      ['Is shingles contagious?', 'You can’t catch shingles itself, but fluid from the blisters can give chickenpox to someone who isn’t immune. Keep the rash covered until the blisters have crusted.'],
      ['Is it true kayap kills if it meets around the body?', 'No. This is a myth. The shingles rash follows one nerve on one side of the body and doesn’t encircle the body. A widespread rash is rare and needs prompt care because it suggests weakened immunity.'],
      ['How soon should I see a doctor for shingles?', 'Within 3 days (72 hours) of the rash appearing, when antiviral medicine works best. See a doctor urgently if the rash is near your eye.'],
      ['How long does shingles last?', 'The blisters crust in 7 to 10 days and the rash usually clears in 2 to 4 weeks. Some people have nerve pain for months afterwards.'],
      ['Is there a shingles vaccine in Malaysia?', 'Yes. A non-live, 2-dose shingles vaccine has been available since 2024 for adults 50 and over and adults 18 and over at higher risk. It is given at private clinics and hospitals.'],
      ['Can you get shingles more than once?', 'Yes, although it is uncommon. The vaccine can be given after a past episode, once the rash has gone.'],
    ],
    sources: [
      ['US CDC — Clinical overview of shingles (Jun 2024)', 'https://www.cdc.gov/shingles/hcp/clinical-overview/index.html'],
      ['US CDC — About shingles (Jan 2025)', 'https://www.cdc.gov/shingles/about/index.html'],
      ['US CDC — Shingles vaccination (Aug 2025)', 'https://www.cdc.gov/shingles/vaccines/index.html'],
      ['NHS — Shingles (reviewed Nov 2023)', 'https://www.nhs.uk/conditions/shingles/'],
      ['New Straits Times — Health: coming of the snake (Jan 2025)', 'https://www.nst.com.my/amp/lifestyle/heal/2025/01/1165059/health-coming-snake'],
      ['Berita RTM — Postherpetic neuralgia: when kayap leaves a painful scar (Mar 2026)', 'https://berita.rtm.gov.my/fokus/perspektif/senarai-berita-fokus/perspektif/senarai-artikel/postherpetic-neuralgia-bila-kayap-meninggalkan-parut-menyakitkan/'],
      ['CodeBlue — Shingles vaccine now available in Malaysia (Sep 2024)', 'https://codeblue.galencentre.org/2024/09/shingles-vaccine-now-available-in-malaysia/'],
      ['Bernama — Shingles vaccine launched in Malaysia (2024)', 'https://www.bernama.com/en/news.php?id=2338964'],
    ],
    related: ['chickenpox-malaysia', 'psoriasis-malaysia', 'flu-vaccine-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'appendicitis-malaysia',
    title: 'Appendicitis: symptoms, which side the appendix is on, and when to go to hospital',
    crumb: 'Appendicitis',
    desc: 'Appendicitis symptoms (tanda appendix), where appendix pain is felt, burst appendix danger signs, how it is diagnosed, surgery or antibiotics, and recovery.',
    excerpt: 'Pain that starts around the belly button and moves to the lower right side can be appendicitis, a common surgical emergency. The signs to watch for, when the appendix can burst, how doctors diagnose it, and what treatment and recovery involve.',
    standfirst: 'Appendicitis is one of the most common reasons for emergency surgery, especially in teenagers and young adults. It usually starts as a vague ache around the belly button that moves to the lower right side of the abdomen and gets steadily worse. Knowing the signs means getting to hospital before the appendix bursts.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Appendicitis', 'Apendisitis'],
    image: 'gp-consultation', imageAlt: 'A doctor talking with a patient across a desk in a consultation room',
    keyPoints: [
      'The appendix is a small pouch attached to the large intestine on the lower right side of the abdomen. About 5 to 9 in 100 people get appendicitis at some point, most often in their teens and 20s.',
      'The classic pattern is pain around the belly button that moves to the lower right within hours, gets worse when you move or cough, with loss of appetite, nausea and fever.',
      'Children, pregnant women and older people often have milder or unusual symptoms.',
      'An inflamed appendix can burst within 1 to 2 days, causing a serious infection. Go to an emergency department if you suspect appendicitis, and call 999 if pain is severe and spreading.',
      'The usual treatment is keyhole surgery to remove the appendix, with recovery in 1 to 2 weeks. You don’t need your appendix to live normally.',
    ],
    sections: [
      { id: 'what', h: 'What is appendicitis?', tocLabel: 'What it is', html: `<p>The <strong>appendix</strong> (apendiks) is a small, finger-shaped pouch attached to the large intestine. <strong>Appendicitis</strong> means it has become inflamed, usually because it is blocked, for example by hardened stool, and then infected.</p>
<p>It is common: about 5 to 9 in every 100 people have appendicitis during their life. It can happen at any age, but is most common in children over 10, teenagers and young adults, and is slightly more common in males. It is rare in babies.</p>` },
      { id: 'side', h: 'Which side is the appendix on?', tocLabel: 'Which side', html: `<p>The appendix is on the <strong>lower right side</strong> of the abdomen (bawah kanan perut), roughly between your belly button and the bony point at the front of your right hip. That is where appendicitis pain usually settles.</p>
<p>Pain on the lower <em>left</em> side is rarely appendicitis. It has other causes, which we cover in our guide to <a href="/articles/stomach-pain-gastric-malaysia/">stomach pain by location</a>. In pregnancy, the growing womb can push the appendix higher, so the pain may be felt higher up on the right.</p>` },
      { id: 'symptoms', h: 'Symptoms of appendicitis (tanda appendix)', tocLabel: 'Symptoms', html: `<p>The classic pattern:</p>
<ol>
<li><strong>Pain starts in the middle</strong>, around the belly button. It may come and go at first.</li>
<li><strong>Within hours it moves</strong> to the lower right side, becomes constant and gets steadily worse.</li>
<li><strong>Moving, coughing, walking or going over bumps</strong> in a car makes it hurt more.</li>
</ol>
<p>Other common symptoms are <strong>loss of appetite</strong>, feeling sick or vomiting, a <strong>fever</strong>, constipation or diarrhoea, and needing to urinate more often.</p>
<p><strong>Not everyone has the classic pattern.</strong> In young children, pregnant women and older people, pain can be milder, come on more slowly or be felt somewhere else. Older people may simply become confused. Children may be unusually quiet, refuse food or not want to walk.</p>
<div class="box box--pink" role="note"><span class="box__title">Call 999 or go to an emergency department now if</span><p style="font-size:16px;line-height:1.6">the pain suddenly spreads across your whole abdomen, or gets much worse after briefly easing; you have a high fever, a fast heartbeat, pale or blotchy skin, or difficulty breathing; or you feel confused or faint. These can be signs that the appendix has burst. Don’t drive yourself.</p></div>` },
      { id: 'burst', h: 'Can the appendix burst?', tocLabel: 'Burst appendix', html: `<p>Yes. If appendicitis isn’t treated, the inflamed appendix can burst (appendix pecah), often within <strong>1 to 2 days</strong> of the first symptoms. This spills infection into the abdomen (peritonitis) and can lead to an abscess or sepsis, which are life-threatening and need more complex surgery and a longer hospital stay.</p>
<p>The pain may ease for a short while when the appendix bursts, as the pressure is released, before becoming severe and spreading. Don’t take an easing of pain as a sign you are getting better.</p>` },
      { id: 'what-to-do', h: 'What to do if you think it’s appendicitis', tocLabel: 'What to do', html: `<ul>
<li><strong>Go to a hospital emergency department</strong> if you have pain that has moved to the lower right side and is getting worse. A GP can assess milder or unclear tummy pain and refer you if needed, but for typical appendicitis symptoms go straight to hospital.</li>
<li><strong>Don’t wait it out</strong> overnight hoping it will settle.</li>
<li><strong>Avoid eating or drinking</strong> until you have been seen, in case you need an operation.</li>
<li>Bring a list of any medicines you take, and tell the doctor if you could be pregnant.</li>
</ul>
<p>Not sure where to go? See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
      { id: 'diagnosis', h: 'How appendicitis is diagnosed', tocLabel: 'Diagnosis', html: `<p>There is no single test for appendicitis. A doctor will:</p>
<ul>
<li>ask about your symptoms and press on your abdomen to find where it is tender</li>
<li>do blood tests (to look for signs of infection) and a urine test (to rule out a urine infection or kidney stone), plus a pregnancy test for women</li>
<li>often arrange an <strong>ultrasound</strong> (commonly used for children and pregnant women) or a <strong>CT scan</strong></li>
</ul>
<p>Doctors may use a scoring system such as the <strong>Alvarado score</strong>, which adds points for symptoms, tenderness and blood results. A low score makes appendicitis unlikely, and a high score makes it probable. If the picture isn’t clear, you may be observed in hospital for a few hours, or up to a day, to see how symptoms change.</p>
${figure('stethoscope-desk', 'A stethoscope hanging in a hospital examination area', 'Diagnosis combines an examination, blood and urine tests, and often a scan.')}` },
      { id: 'treatment', h: 'Treatment: surgery or antibiotics?', tocLabel: 'Treatment', html: `<p>The standard treatment is an operation to remove the appendix, called an <strong>appendicectomy</strong> (appendectomy), usually done as soon as possible. Most are done by <strong>keyhole (laparoscopic) surgery</strong> through a few small cuts, and take about an hour. Open surgery through a larger cut may be needed if the appendix has burst.</p>
<p><strong>Antibiotics instead of surgery?</strong> For some adults with uncomplicated appendicitis confirmed on a scan, antibiotics alone are an option. Large trials found that about 3 in 10 people treated with antibiotics needed their appendix removed within a year, rising to about 4 in 10 within five years, and the risk was higher when a hardened stool stone (appendicolith) was present. Your surgeon will explain whether this is suitable for you.</p>` },
      { id: 'recovery', h: 'Recovery after appendix surgery', tocLabel: 'Recovery', html: `<ul>
<li>After keyhole surgery, many people go home the next day. Recovery after a burst appendix or open surgery takes longer.</li>
<li>Most people need <strong>1 to 2 weeks</strong> off work or school, and should avoid heavy lifting and strenuous sport for a few weeks until fully healed.</li>
<li>Get medical advice if you develop a fever, increasing pain or swelling, redness or discharge from a wound, or vomiting after going home.</li>
</ul>
<p><strong>Can you live without an appendix?</strong> Yes. Removing it doesn’t cause any long-term problems.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get tummy pain checked',
    clinicsTocLabel: 'See a doctor',
    clinicsIntro: 'For pain that has moved to the lower right and is getting worse, go straight to a hospital emergency department. For milder or unclear tummy pain, a GP can examine you and refer you if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late, at weekends and 24 hours.',
    clinicLinks: [['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['What are the first signs of appendicitis?', 'Usually a dull pain around the belly button that moves to the lower right side within hours and gets worse, especially when moving or coughing, with loss of appetite, nausea and sometimes fever.'],
      ['Which side is the appendix on?', 'The lower right side of the abdomen. In pregnancy the pain may be felt higher up on the right, because the womb pushes the appendix upwards.'],
      ['How long before the appendix bursts?', 'It varies, but an inflamed appendix can burst within 1 to 2 days of the first symptoms. That is why suspected appendicitis needs to be seen in hospital the same day.'],
      ['Can appendicitis go away on its own?', 'Pain may ease temporarily, but appendicitis needs medical treatment. Pain that eases suddenly and then returns more widely can mean the appendix has burst.'],
      ['Can appendicitis be treated without surgery?', 'Sometimes. Some adults with uncomplicated appendicitis are treated with antibiotics, but about 3 in 10 still need surgery within a year. Surgery remains the standard treatment.'],
      ['How long is recovery after appendix surgery?', 'Most people recover in 1 to 2 weeks after keyhole surgery. Recovery takes longer after a burst appendix or open surgery.'],
      ['Can you live without an appendix?', 'Yes. Removing the appendix doesn’t cause long-term health problems.'],
    ],
    sources: [
      ['NHS — Appendicitis (reviewed Aug 2024)', 'https://www.nhs.uk/conditions/appendicitis/'],
      ['National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) — Appendicitis definition and facts', 'https://www.niddk.nih.gov/health-information/digestive-diseases/appendicitis/definition-facts'],
      ['Cleveland Clinic — Appendicitis (May 2023)', 'https://my.clevelandclinic.org/health/diseases/8095-appendicitis'],
      ['Radiopaedia — Alvarado score', 'https://radiopaedia.org/articles/48425'],
      ['Salminen et al. — Five-year follow-up of antibiotic therapy for uncomplicated appendicitis, APPAC trial (JAMA, 2018)', 'https://pubmed.ncbi.nlm.nih.gov/30264120'],
      ['CODA Collaborative — A randomised trial comparing antibiotics with appendectomy for appendicitis (NEJM, 2020)', 'https://doi.org/10.1056/NEJMoa2014320'],
    ],
    related: ['stomach-pain-gastric-malaysia', 'clinic-or-emergency-department', 'tonsillitis-sore-throat-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tonsillitis-sore-throat-malaysia',
    title: 'Tonsillitis and sore throat: swollen tonsils, when you need antibiotics, and what helps',
    crumb: 'Tonsillitis & sore throat',
    desc: 'Swollen tonsils (tonsil bengkak) and sore throat: viral or bacterial, when antibiotics are needed, remedies that help, tonsil grades, tonsil stones and danger signs.',
    excerpt: 'Most sore throats and swollen tonsils are caused by viruses and get better within a week without antibiotics. How to tell when it might be strep, what actually eases the pain, what tonsil grades and tonsil stones are, and the warning signs that need urgent care.',
    standfirst: 'A sore throat with red, swollen tonsils (tonsil bengkak) is one of the most common reasons people visit a clinic in Malaysia. Most are caused by viruses and clear up on their own within a week, but some need antibiotics and a few need urgent care. Here is how to tell the difference.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Tonsillitis', 'Pharyngitis', 'Sakit tekak'],
    image: 'doctor-tablet', imageAlt: 'A doctor in a white coat reading notes on a tablet',
    keyPoints: [
      'Most sore throats and tonsillitis are caused by viruses. Group A strep bacteria cause about 5–15% of sore throats in adults and 20–30% in children.',
      'Antibiotics don’t help viral sore throats. Malaysia’s national antibiotic guideline uses a symptom score to decide who needs them.',
      'Paracetamol or ibuprofen, fluids, rest and (for adults) salt-water gargles help most. Medicated lozenges help only a little.',
      'Get urgent help for difficulty breathing, being unable to swallow your saliva, drooling, or swelling on one side of the throat.',
      'Removing the tonsils is only considered for frequent, severe tonsillitis: for example, 7 or more episodes in a year.',
    ],
    sections: [
      { id: 'what', h: 'What is tonsillitis?', tocLabel: 'What it is', html: `<p>The <strong>tonsils</strong> are two pads of tissue at the back of the throat, one on each side, that help fight infection. <strong>Tonsillitis</strong> is when they become infected and inflamed. It often comes together with a sore throat (pharyngitis), and the two are treated in the same way.</p>
<p>Symptoms include a sore throat, pain when swallowing, a fever, red and swollen tonsils, sometimes with white patches or pus, tender swollen glands in the neck, bad breath and earache. Children may also have a tummy ache, vomit or refuse to eat. Most cases get better within <strong>3 to 7 days</strong>.</p>` },
      { id: 'cause', h: 'Virus or bacteria? Do you need antibiotics?', tocLabel: 'Do you need antibiotics?', html: `<p><strong>Viruses cause most sore throats</strong>, including those from colds and flu. Antibiotics don’t work on viruses. The main bacterial cause is <strong>group A streptococcus (“strep throat”)</strong>, which causes about 20–30% of sore throats in children (most often aged 5 to 15) and 5–15% in adults.</p>
<p>Doctors use simple scores to judge the chance of strep. The <strong>Centor score</strong> gives one point each for:</p>
<ul>
<li>white patches or pus on the tonsils</li>
<li>tender, swollen glands at the front of the neck</li>
<li>a fever above 38°C</li>
<li><strong>no</strong> cough</li>
</ul>
<p>Malaysia’s <em>National Antimicrobial Guideline</em> (2024) advises that adults scoring under 3 don’t need antibiotics, only pain and fever relief. A higher score suggests strep, and the doctor may prescribe penicillin or amoxicillin (or another antibiotic if you are allergic) for 5 to 10 days. Children with confirmed strep are usually given a full 10-day course, which also helps prevent rare complications such as rheumatic fever.</p>
<div class="box box--pink" role="note"><span class="box__title">Antibiotics are often given when they aren’t needed</span><p style="font-size:16px;line-height:1.6">A study in Malaysian government clinics found strep in fewer than 3 in 100 adults with a sore throat, yet more than 1 in 5 were given antibiotics. Unneeded antibiotics cause side effects and drive antibiotic resistance. If you are prescribed them, finish the course as directed.</p></div>` },
      { id: 'relief', h: 'What helps a sore throat (ubat sakit tekak)', tocLabel: 'What helps', html: `<ul>
<li><strong>Paracetamol or ibuprofen</strong> for pain and fever. Don’t give aspirin to anyone under 16.</li>
<li><strong>Drink plenty of fluids</strong>, especially if you have a fever. Cool or warm drinks and soft foods are easier to swallow.</li>
<li><strong>Rest.</strong></li>
<li><strong>Salt-water gargles</strong> for adults and older children who can gargle safely: half a teaspoon of salt in a glass of warm water.</li>
<li><strong>Medicated lozenges and throat sprays</strong> from a pharmacy (with a local anaesthetic, anti-inflammatory or antiseptic) may reduce pain slightly. Ordinary sweets and mouthwashes have no proven benefit.</li>
</ul>
<p>Most people feel better within a week. See a doctor if symptoms last longer than a week, keep coming back, or you have a weakened immune system.</p>
${figure('medications', 'Blister packs of tablets and capsules', 'Simple painkillers relieve most sore throats; antibiotics only help bacterial infections.')}` },
      { id: 'danger', h: 'When a sore throat is an emergency', tocLabel: 'Danger signs', html: `<div class="box box--pink" role="note"><span class="box__title">Call 999 or go to an emergency department if</span><p style="font-size:16px;line-height:1.6">you have difficulty breathing or noisy, high-pitched breathing; you can’t swallow, even your own saliva, or are drooling; or your symptoms are getting worse quickly.</p></div>
<p><strong>See a doctor the same day</strong> if you have severe pain with swelling on one side of the throat or roof of the mouth, difficulty opening your mouth or speaking, or a fever with a rash. These can be signs of <strong>quinsy</strong> (a peritonsillar abscess), a pocket of pus beside the tonsil that needs draining and antibiotics in hospital.</p>
<p>Other conditions to know about:</p>
<ul>
<li><strong>Scarlet fever:</strong> caused by strep, mainly in young children. A rough “sandpaper” rash appears 12 to 48 hours after the sore throat and fever, often with a red “strawberry” tongue. It is treated with antibiotics, and children should stay home until 24 hours after starting them.</li>
<li><strong>Glandular fever</strong> (caused by the Epstein–Barr virus): mostly in people aged 15 to 24. It causes a severe sore throat, very swollen glands and tiredness that can last weeks. Antibiotics don’t help.</li>
</ul>` },
      { id: 'grades', h: 'Tonsil grading system: what the grades mean', tocLabel: 'Tonsil grades', html: `<p>Doctors describe tonsil size using the <strong>Brodsky grading scale</strong>, based on how much of the space at the back of the throat the tonsils take up:</p>
<div class="table-wrap"><table>
<thead><tr><th>Grade</th><th>Tonsil size</th></tr></thead>
<tbody>
<tr><td>Grade 0</td><td>Tonsils sit within the tonsil pillars</td></tr>
<tr><td>Grade 1</td><td>Take up less than 25% of the throat width</td></tr>
<tr><td>Grade 2</td><td>26–50%</td></tr>
<tr><td>Grade 3</td><td>51–75%</td></tr>
<tr><td>Grade 4</td><td>More than 75% (the tonsils may almost touch, sometimes called “kissing tonsils”)</td></tr>
</tbody></table></div>
<p>Large tonsils (grade 3 or 4) don’t always cause problems. They matter if they cause snoring with pauses in breathing during sleep, difficulty swallowing, or frequent infections.</p>` },
      { id: 'stones', h: 'Tonsil stones (batu tonsil)', tocLabel: 'Tonsil stones', html: `<p>Tonsil stones are small, hard, whitish-yellow lumps of trapped food, dead cells and bacteria that harden in the pits of the tonsils. They are harmless, but often cause <strong>bad breath</strong> and a feeling that something is stuck in the throat.</p>
<ul>
<li>Gargle with salt water, brush your teeth and tongue, and drink plenty of water.</li>
<li>Many stones come out on their own with coughing or gargling. A water flosser on a low setting can help.</li>
<li>Avoid poking at your tonsils with sharp objects or pressing repeatedly, which can cause bleeding and inflammation.</li>
</ul>
<p>Surgery is rarely needed for tonsil stones alone.</p>` },
      { id: 'tonsillectomy', h: 'When are tonsils removed?', tocLabel: 'Tonsillectomy', html: `<p>Removing the tonsils (tonsillectomy) is considered for frequent, severe tonsillitis that disrupts school or work, usually when there have been:</p>
<ul>
<li><strong>7 or more</strong> episodes in 1 year, or</li>
<li><strong>5 or more</strong> episodes a year for 2 years, or</li>
<li><strong>3 or more</strong> episodes a year for 3 years.</li>
</ul>
<p>It may also be offered for repeated quinsy, or for large tonsils causing breathing problems during sleep. Recovery usually takes about <strong>2 weeks</strong> off school or work. Bleeding can happen up to 2 weeks after surgery, and any bleeding needs urgent medical attention.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor about a sore throat',
    clinicsTocLabel: 'See a doctor',
    clinicsIntro: 'A GP can examine your throat, decide whether you need antibiotics, and refer you to an ear, nose and throat (ENT) specialist for repeated tonsillitis. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open in the evening, at weekends and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['How do I know if my sore throat is viral or bacterial?', 'You can’t be sure from symptoms alone, but strep is more likely with pus on the tonsils, tender neck glands, a fever above 38°C and no cough. A cough and runny nose point to a virus. A doctor can score your symptoms and, if needed, do a throat test.'],
      ['Do I need antibiotics for tonsillitis?', 'Usually not. Most tonsillitis is viral and gets better within a week. Antibiotics are given when bacterial infection is likely, for example a high Centor score, or when strep is confirmed.'],
      ['What is the best remedy for a sore throat (ubat sakit tekak)?', 'Paracetamol or ibuprofen, plenty of fluids, rest and salt-water gargles for adults. Medicated lozenges and sprays from a pharmacy may help a little.'],
      ['How long does tonsillitis last?', 'Most cases improve within 3 to 7 days. See a doctor if it lasts longer than a week or keeps coming back.'],
      ['What do the tonsil grades mean?', 'Grades 0 to 4 describe how much of the throat the tonsils fill, from within the tonsil pillars (0) to more than 75% (4). Large tonsils only need treatment if they cause problems.'],
      ['What are tonsil stones?', 'Small hard lumps of trapped debris in the tonsils that cause bad breath. They are harmless and usually managed with gargling and good oral hygiene.'],
      ['When should tonsils be removed?', 'When tonsillitis is frequent and severe, such as 7 or more episodes in a year, 5 a year for 2 years, or 3 a year for 3 years, or for repeated quinsy or breathing problems during sleep.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — National Antimicrobial Guideline 2024: Otorhinolaryngology infections (adults)', 'https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a10-otorhinolaryngology-infections'],
      ['Ministry of Health Malaysia — National Antimicrobial Guideline 2024: Otorhinolaryngology infections (children)', 'https://sites.google.com/moh.gov.my/nag/contents/section-b-paediatrics/b9-otorhinolaryngology-infections'],
      ['NICE — Sore throat (acute): antimicrobial prescribing (NG84)', 'https://www.nice.org.uk/guidance/ng84'],
      ['US CDC — Clinical guidance for group A streptococcal pharyngitis (Nov 2025)', 'https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html'],
      ['NHS — Tonsillitis (reviewed Mar 2024)', 'https://www.nhs.uk/conditions/tonsillitis/'],
      ['NHS — Sore throat (reviewed Apr 2024)', 'https://www.nhs.uk/conditions/sore-throat/'],
      ['NHS — Scarlet fever (Dec 2024)', 'https://www.nhs.uk/conditions/scarlet-fever/'],
      ['NHS — Glandular fever', 'https://www.nhs.uk/conditions/glandular-fever/'],
      ['Cleveland Clinic — Tonsil stones (Jan 2024)', 'https://my.clevelandclinic.org/health/diseases/21505-tonsil-stones'],
      ['American Academy of Family Physicians — Clinical practice guideline: tonsillectomy in children', 'https://www.aafp.org/pubs/afp/issues/2011/0901/p566.html'],
      ['The Star — Wrong treatment of sore throats is fuelling antimicrobial resistance (Jul 2025)', 'https://www.thestar.com.my/lifestyle/health/2025/07/02/wrong-treatment-of-sore-throats-is-fuelling-antimicrobial-resistance'],
    ],
    related: ['influenza-a-malaysia', 'persistent-cough-malaysia', 'clinic-or-emergency-department'],
  },
];
