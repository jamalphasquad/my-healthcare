// Articles published October 2026 (newest first). Written as education only: no brand promotion,
// no prices next to medicine names, and the "where to go" section links to directory pages
// rather than naming clinics (MAB guidelines for healthcare facilities, clause 3.4.3).
const PUB = '2026-10-21';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const OCT_2026 = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'skin-boosters-malaysia',
    title: 'Skin boosters in Malaysia: Profhilo, Rejuran, Juvelook and exosomes explained',
    crumb: 'Skin boosters in Malaysia',
    desc: 'What skin boosters like Profhilo, Rejuran and Juvelook are, how many sessions you need, risks, typical costs and how to check a clinic is legal.',
    excerpt: 'What Profhilo, Rejuran, Juvelook and other skin boosters actually do, how many sessions they take, the risks, and how to check a clinic and product are legal.',
    standfirst: 'Skin boosters are one of the most searched aesthetic treatments in Malaysia. Here is what each type does, what the evidence says, what it costs, and how to make sure the doctor, clinic and product are all legal.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    image: 'facial-treatment', imageAlt: 'A facial skin treatment being carried out in a clinic',
    keyPoints: [
      '“Skin booster” covers several different injectables: hyaluronic acid (such as Profhilo), polynucleotides (such as Rejuran) and collagen stimulators (such as Juvelook and Sculptra).',
      'These products are regulated as medical devices. Check that a product is on the Medical Device Authority (MDA) register.',
      'Only a registered doctor with a Letter of Credentialing and Privileging (LCP) may inject them, at an MOH-registered clinic.',
      'No exosome product appears on the MDA register, and cosmetics in Malaysia are for use on the skin only, not injection.',
      'Never have injections at homes, hotels or beauty salons. MOH calls this “checking the 3Ps”: procedure, practitioner and premises.',
    ],
    sections: [
      { id: 'what', h: 'What are skin boosters?', html: `<p>“Skin booster” is a marketing term rather than a medical one. It usually means small amounts of an injectable placed just under the skin to improve hydration, texture, fine lines or firmness, rather than to add volume the way a lip or cheek filler does. The main types work quite differently:</p>
<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>Examples</th><th>How it works</th></tr></thead>
<tbody>
<tr><td>Hyaluronic acid (HA)</td><td>Profhilo, Restylane Skinboosters, NCTF 135 HA</td><td>Hyaluronic acid holds water in the skin, improving hydration and smoothness</td></tr>
<tr><td>Polynucleotides (PN)</td><td>Rejuran</td><td>DNA fragments said to support skin repair; mostly studied in Korea</td></tr>
<tr><td>Collagen stimulators</td><td>Juvelook (PDLLA), Sculptra (PLLA)</td><td>Microparticles trigger the skin to build collagen gradually over months</td></tr>
<tr><td>Exosomes</td><td>Various “exosome” serums</td><td>Not registered as an injectable; see below</td></tr>
</tbody></table></div>
${figure('aesthetic-suite', 'A clean aesthetic treatment room with a treatment bed', 'Injectable treatments should only take place in an MOH-registered clinic.')}` },
      { id: 'sessions', h: 'How many sessions, and how long do results last?', tocLabel: 'Sessions and results', html: `<ul>
<li><strong>Hyaluronic acid boosters:</strong> in one study of Profhilo, women had two treatments four weeks apart, and improvement was still measurable at 16 weeks.</li>
<li><strong>Polynucleotides:</strong> a 2024 review found most studies used three to four sessions about two weeks apart. The authors noted the evidence is still limited and of low-to-moderate quality.</li>
<li><strong>Collagen stimulators:</strong> results build slowly. In the US trial for Sculptra, people had up to four sessions, and many still showed improvement two years later.</li>
</ul>
<p>Results vary between people, and most treatments need top-up sessions to maintain them. Be cautious of any promise of a fixed result or a fixed number of months.</p>` },
      { id: 'legal', h: 'Is it legal? What Malaysian rules say', tocLabel: 'What the rules say', html: `<p>Skin booster injectables are regulated in Malaysia as <strong>medical devices</strong>. Products sold here must be registered with the Medical Device Authority (MDA). As of October 2026, the MDA register lists products including Profhilo, Rejuran, Sculptra, Restylane Skinboosters and NCTF 135 HA. You can search it yourself on the <a href="https://mdar.mda.gov.my/frontend/web/index.php?r=carian" target="_blank" rel="noopener">MDA medical device register</a>.</p>
<p>The Ministry of Health lists filler injections as a minimally invasive aesthetic procedure. They may only be done by a <strong>registered doctor holding a Letter of Credentialing and Privileging (LCP)</strong>, in premises registered under the Private Healthcare Facilities and Services Act 1998.</p>
<p><strong>A note on exosomes:</strong> searching the MDA register for “exosome” returns no products. In Malaysia, cosmetics are legally for use on the outside of the body, so a cosmetic exosome serum is not approved for injection. Doctors have reported cases of skin damage and scarring after exosome products meant for the skin were injected.</p>` },
      { id: 'check', h: 'How to check the doctor, clinic and product (the 3Ps)', tocLabel: 'Check the 3Ps', html: `<p>The Ministry of Health urges the public to “check the 3Ps” before any aesthetic procedure:</p>
<ol>
<li><strong>Practitioner:</strong> look the doctor up on the Malaysian Medical Council’s <a href="https://merits.mmc.gov.my/search" target="_blank" rel="noopener">MeRITS register</a>, and check MOH’s <a href="https://hq.moh.gov.my/medicalprac/statistik-cawangan-perundangan-perubatan/" target="_blank" rel="noopener">national registry of doctors with an LCP</a>.</li>
<li><strong>Premises:</strong> the clinic should be registered with MOH. MOH publishes its list of registered private clinics, including those offering aesthetic services.</li>
<li><strong>Procedure and product:</strong> ask for the product’s name and check it on the MDA register. Make sure the procedure is one MOH allows. Breast and buttock fillers, for example, are illegal in Malaysia.</li>
</ol>
<div class="box box--pink" role="note"><span class="box__title">Avoid injections at homes, hotels or salons</span><p style="font-size:16px;line-height:1.6">In September 2026, raids in Shah Alam, Pandan Perdana and Kepong found unlicensed “therapists” offering aesthetic treatments in rented homes, promoted on TikTok and Instagram. Cheaper prices from unlicensed operators often mean unregistered products and no one to treat complications.</p></div>` },
      { id: 'risks', h: 'Side effects and risks', html: `<p>Common, usually short-lived effects include bruising, redness, swelling, tenderness and small bumps at the injection points, which typically settle within days to a week.</p>
<p>Less common but important risks:</p>
<ul>
<li><strong>Lumps and nodules</strong>, particularly with collagen stimulators. In the Sculptra trial, 17% of patients developed nodules or bumps, sometimes appearing months later. Unlike hyaluronic acid, these cannot be dissolved with an enzyme.</li>
<li><strong>Injection into a blood vessel</strong>. This is rare but serious, and can cause skin damage, vision loss or stroke. It is the main reason injections should only be done by trained doctors who can recognise and treat it immediately.</li>
<li><strong>Infection and allergic reactions.</strong></li>
</ul>
<p>Seek urgent medical care for severe or increasing pain, skin that turns pale, blue or dusky, or any change in your vision after an injection.</p>` },
      { id: 'consultation', h: 'Questions to ask at your consultation', tocLabel: 'Questions to ask', html: `<ul>
<li>Which product will you use, and is it registered with the MDA?</li>
<li>Do you hold an LCP for this procedure?</li>
<li>What results can I realistically expect, and how many sessions?</li>
<li>What are the risks for me, and what happens if there is a complication?</li>
<li>What is the total cost, including follow-up sessions?</li>
</ul>
<p>A careful doctor will review your medical history, medicines and allergies, explain alternatives, and give you time to decide. Be wary of pressure to book on the spot.</p>` },
      { id: 'cost', h: 'How much do skin boosters cost?', tocLabel: 'Typical costs', html: `<p>Prices depend on the product, the amount used and the number of sessions. In October 2026, clinic adverts in Malaysia commonly listed skin booster treatments from <strong>around RM500 to over RM3,000 per session</strong>. Ask for a written quote that includes all planned sessions. A much lower price can be a warning sign of unregistered products or an unlicensed provider.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Finding an aesthetic clinic in Kuala Lumpur',
    clinicsTocLabel: 'Finding a clinic',
    clinicsIntro: 'Our directory lists doctor-led aesthetic clinics in Kuala Lumpur and Petaling Jaya, with addresses, opening hours and directions. Whichever clinic you choose, check the 3Ps above before booking any injectable treatment.',
    clinicLinks: [['/clinics/aesthetic-clinics/', 'Aesthetic clinics'], ['/clinics/bukit-bintang/', 'Clinics in Bukit Bintang'], ['/clinics/petaling-jaya/', 'Clinics in Petaling Jaya']],
    faqs: [
      ['Are skin boosters safe?', 'When a registered product is injected by a trained, LCP-holding doctor in a registered clinic, side effects are usually mild and short-lived, such as bruising and swelling. Serious complications are rare but possible, which is why the doctor and clinic matter.'],
      ['Is exosome injection approved in Malaysia?', 'No exosome product appears on the Medical Device Authority register, and cosmetics in Malaysia are legally for use on the skin, not injection. Ask your doctor exactly what product they plan to use and check its registration.'],
      ['How long do skin boosters last?', 'It depends on the type. Hyaluronic acid boosters are usually repeated every few months, while collagen stimulators work gradually and can last longer. Most people need top-up sessions.'],
      ['Can a beautician do skin booster injections in Malaysia?', 'No. Filler injections are a medical procedure in Malaysia. They may only be done by a registered doctor with a Letter of Credentialing and Privileging (LCP), in an MOH-registered clinic.'],
      ['How much is a skin booster in Malaysia?', 'In October 2026, clinic adverts commonly listed skin boosters from around RM500 to over RM3,000 per session, depending on the product and number of sessions. Ask for a written quote.'],
    ],
    sources: [
      ['Medical Device Authority — Malaysia Medical Device Register', 'https://mdar.mda.gov.my/frontend/web/index.php?r=carian'],
      ['Ministry of Health, Medical Practice Division — Aesthetic medical practice (the 3Ps)', 'https://hq.moh.gov.my/medicalprac/estetik/'],
      ['Ministry of Health — Minimally invasive aesthetic procedures', 'https://hq.moh.gov.my/medicalprac/minamally-invasive/'],
      ['Ministry of Health — Illegal aesthetic procedures', 'https://hq.moh.gov.my/medicalprac/illegal-procedures/'],
      ['Malay Mail — Check the 3Ps: Health Ministry warns of risks from unlicensed aesthetic procedures (5 Sep 2025)', 'https://www.malaymail.com/news/malaysia/2025/09/05/check-the-3ps-health-ministry-warns-of-serious-risks-from-unlicensed-aesthetic-procedures/190140'],
      ['The Star — Seven foreigners nabbed in raids on beauty centres (25 Sep 2026)', 'https://www.thestar.com.my/news/nation/2026/09/25/seven-foreigners-nabbed-in-raids-on-beauty-centres'],
      ['NPRA — Guidelines for Control of Cosmetic Products in Malaysia', 'https://www.npra.gov.my/images/Guidelines_Central/Guidelines_on_Cosmetic/GUIDELINES_FOR_CONTROL_OF_COSMETIC_PRODUCTS_IN_MALAYSIA.pdf'],
      ['US FDA — Dermal fillers (soft tissue fillers)', 'https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers'],
      ['Sparavigna & Tenconi — Hyaluronic acid injectable (Profhilo) study, Clin Cosmet Investig Dermatol (2016)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5044990/'],
      ['Systematic review — Polynucleotides in aesthetic dermatology, J Cosmet Dermatol (2024)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11845969/'],
      ['US FDA — Sculptra summary of safety and effectiveness (2023)', 'https://www.accessdata.fda.gov/cdrh_docs/pdf3/P030050S039B.pdf'],
      ['Case report — Skin necrosis after exosome injection, J Cosmet Dermatol (2025)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12359287/'],
    ],
    related: ['pico-laser-melasma-malaysia', 'weight-loss-injections-malaysia', 'clinic-or-emergency-department'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'weight-loss-injections-malaysia',
    title: 'Weight-loss injections in Malaysia: what Ozempic, Wegovy and Mounjaro can and can’t do',
    crumb: 'Weight-loss injections in Malaysia',
    desc: 'Which weight-loss injections are registered in Malaysia, who they are for, side effects, and why buying pens online is risky. Updated October 2026.',
    excerpt: 'Which injections are actually registered for weight loss in Malaysia, who they’re meant for, the side effects, and why “slimming pens” sold online are risky.',
    standfirst: 'Weight-loss injections are among the most searched health topics in Malaysia. Here is what is registered, who these medicines are meant for, what to expect, and how to stay safe.',
    cat: 'weight', catLabel: 'Weight & metabolism', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Obesity', 'Obesiti'],
    image: 'waist-measurement', imageAlt: 'A man measuring his waist with a tape measure',
    keyPoints: [
      'These medicines (GLP-1 medicines such as semaglutide, liraglutide and tirzepatide) are prescription-only in Malaysia. Only a registered doctor can prescribe them.',
      'Wegovy, Saxenda and Mounjaro are registered for weight management. Ozempic is registered for type 2 diabetes, not weight loss.',
      'They are meant for adults with a BMI of 30 or more, or 27 or more with a weight-related condition, alongside diet and exercise.',
      'Stomach side effects are common, and most people regain weight after stopping.',
      'Never buy “slimming pens” online or from salons. MOH has raided sellers and removed hundreds of listings in 2026.',
    ],
    sections: [
      { id: 'what', h: 'What these injections are', html: `<p>The injections people search for, such as Ozempic, Wegovy and Mounjaro, belong to a group of medicines that copy gut hormones called GLP-1 (and, for tirzepatide, also GIP). They make you feel full sooner, slow down how quickly the stomach empties, and help control blood sugar. Most are injected once a week with a pre-filled pen.</p>
<p>In Malaysia they are <strong>Group B poisons under the Poisons Act 1952</strong>. That means they can only be supplied by a registered doctor, or by a pharmacist with a doctor’s prescription. Selling them any other way is an offence.</p>` },
      { id: 'registered', h: 'Which ones are registered in Malaysia?', tocLabel: 'Which are registered', html: `<p>Every medicine sold legally in Malaysia carries a registration number starting with <strong>MAL</strong>, listed by the National Pharmaceutical Regulatory Agency (NPRA). As of October 2026, the register shows:</p>
<div class="table-wrap"><table>
<thead><tr><th>Medicine (active ingredient)</th><th>Registered in Malaysia for</th></tr></thead>
<tbody>
<tr><td>Wegovy (semaglutide 2.4 mg)</td><td>Weight management</td></tr>
<tr><td>Saxenda (liraglutide 3 mg)</td><td>Weight management, including some teenagers aged 12+</td></tr>
<tr><td>Mounjaro (tirzepatide)</td><td>Type 2 diabetes and, in the current product information, weight management</td></tr>
<tr><td>Ozempic (semaglutide)</td><td>Type 2 diabetes only, not weight loss</td></tr>
<tr><td>Generic liraglutide</td><td>Weight management (first generic registered in October 2026)</td></tr>
<tr><td>Zepbound (tirzepatide)</td><td>Not registered in Malaysia</td></tr>
</tbody></table></div>
<p>Registration can change, so you can always check a product yourself on the NPRA’s <a href="https://quest3plus.bpfk.gov.my/pmo2/index.php" target="_blank" rel="noopener">QUEST3+ product search</a>.</p>` },
      { id: 'who', h: 'Who are they for?', html: `<p>More than half of Malaysian adults (54.4%) are overweight or obese, according to the National Health and Morbidity Survey 2023. But these medicines are not meant for losing a few kilos before a holiday. The registered labels allow them for adults with:</p>
<ul><li>a body mass index (BMI) of <strong>30 or more</strong>, or</li><li>a BMI of <strong>27 or more</strong> with at least one weight-related condition, such as prediabetes or type 2 diabetes, high blood pressure, high cholesterol, sleep apnoea or heart disease.</li></ul>
<p>Malaysia’s Clinical Practice Guidelines on obesity (2023) use lower BMI cut-offs for Asians when defining obesity (27.5 and above). They recommend medicines only <strong>alongside</strong> diet, physical activity and behaviour change, under a doctor’s supervision.</p>
${figure('doctor-notes', 'A doctor writing notes on a clipboard during a consultation', 'A doctor will check your weight history, other conditions and medicines before suggesting any treatment.')}` },
      { id: 'results', h: 'How much weight do people lose?', tocLabel: 'Expected results', html: `<p>In the main clinical trials, adults taking semaglutide 2.4 mg lost about 15% of their body weight on average over 68 weeks, compared with about 2% on placebo. In the tirzepatide trial, average weight loss at the highest dose was about 21% over 72 weeks. Results vary a lot between people, and they depend on staying on treatment and keeping up healthy habits.</p>
<p>The weight tends to come back after stopping. In one study, people regained about two-thirds of the weight they had lost within a year of stopping semaglutide. Many doctors therefore treat obesity as a long-term condition, like high blood pressure.</p>` },
      { id: 'side-effects', h: 'Side effects and safety', html: `<p>Stomach and gut side effects are the most common, especially when starting or increasing the dose. In the semaglutide weight-management trials:</p>
<ul><li>Nausea: 44% (vs 16% on placebo)</li><li>Diarrhoea: 30%</li><li>Vomiting: 25%</li><li>Constipation: 24%</li></ul>
<p>Less common but important risks include inflammation of the pancreas (pancreatitis), gallstones, hair loss and loss of muscle along with fat. They are <strong>not for use in pregnancy</strong>, and the product information advises stopping them before a planned pregnancy. People with a personal or family history of a rare thyroid cancer (medullary thyroid carcinoma) should not use semaglutide or tirzepatide.</p>
<div class="box box--pink" role="note"><span class="box__title">See a doctor urgently if you have</span><ul><li>Severe, persistent stomach pain, sometimes spreading to the back</li><li>Repeated vomiting and signs of dehydration</li><li>Yellowing of the skin or eyes</li></ul></div>` },
      { id: 'online', h: 'Why “slimming pens” sold online are risky', tocLabel: 'The risk of buying online', html: `<p>In August 2026, the Ministry of Health warned the public about “pen kurus” sold online and claiming to contain <strong>retatrutide</strong>, an experimental medicine that is not approved anywhere in the world. Between January and July 2026, its Pharmacy Enforcement Division carried out <strong>30 raids</strong> on weight-loss products, 17 of them involving online sales, and seized goods worth RM477,142. It also took down 209 e-commerce listings.</p>
<p>Pens bought outside a clinic or pharmacy may be fake, unregistered, wrongly stored or the wrong dose. To protect yourself:</p>
<ul>
<li>Only get these medicines through a doctor who has assessed you.</li>
<li>Check the box has a <strong>MAL registration number</strong>, and look it up on NPRA’s product search.</li>
<li>Check the hologram security label (FarmaTag) with the FarmaChecker feature in the MyUBAT app.</li>
<li>Avoid sellers on social media, e-commerce sites and in beauty salons.</li>
</ul>` },
      { id: 'consultation', h: 'What to expect when you see a doctor', html: `<p>A doctor will usually ask about your weight history, eating habits, activity, sleep and other medicines. They will measure your weight, waist and blood pressure, and may arrange blood tests for blood sugar, cholesterol, and liver and kidney function. If a medicine is suitable, it is started at a low dose and increased slowly, with follow-up visits to check side effects and progress.</p>
<p>A good weight-management plan also covers food, movement and sleep, and agrees what success looks like for you. For some people with a very high BMI, the doctor may discuss bariatric surgery.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to talk to a doctor about your weight',
    clinicsTocLabel: 'Where to see a doctor',
    clinicsIntro: 'Any registered GP can assess your weight and health, check for related conditions such as diabetes and high blood pressure, and discuss whether treatment is suitable. Our directory lists GP clinics across Kuala Lumpur and nearby Selangor, with opening hours and directions.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['Is Ozempic approved for weight loss in Malaysia?', 'No. In Malaysia, Ozempic is registered for type 2 diabetes. Wegovy, which contains a higher dose of the same medicine (semaglutide), is the version registered for weight management.'],
      ['Is Mounjaro available for weight loss in Malaysia?', 'Mounjaro (tirzepatide) is registered in Malaysia, and its current product information includes weight management as well as type 2 diabetes. It is prescription-only, so a doctor must assess you first.'],
      ['Can I buy weight-loss injections online in Malaysia?', 'You should not. These medicines are Group B poisons that need a prescription, and the Ministry of Health has raided sellers and removed online listings in 2026. Pens sold online may be fake or unregistered.'],
      ['Will I regain weight if I stop the injections?', 'Many people do. Studies show a large part of the weight lost often returns within a year of stopping, which is why doctors pair medicines with long-term lifestyle changes.'],
    ],
    sources: [
      ['NPRA — QUEST3+ product registration search', 'https://quest3plus.bpfk.gov.my/pmo2/index.php'],
      ['Mounjaro KwikPen — Malaysian package insert (QUEST3+, 2026)', 'https://quest3plus.bpfk.gov.my/front-end/attachment/791/pharma/570618/V_122103_20260921_160844_D3.pdf'],
      ['Wegovy FlexTouch — Malaysian package insert (QUEST3+)', 'https://quest3plus.bpfk.gov.my/front-end/attachment/519/pharma/554730/V_110562_20250811_220637_D3.pdf'],
      ['Ozempic — Malaysian package insert (QUEST3+)', 'https://quest3plus.bpfk.gov.my/front-end/attachment/519/pharma/519413/V_110069_20251204_112708_D3.pdf'],
      ['Saxenda — Malaysian package insert (QUEST3+)', 'https://quest3plus.bpfk.gov.my/front-end/attachment/519/pharma/81508/V_103698_20250219_144117_D3.pdf'],
      ['Ministry of Health — Clinical Practice Guidelines: Management of Obesity, 2nd edition (2023)', 'https://medic.usm.my/images/Anaesthesiology%20and%20Intensive%20Care%20Unit/Guidelines/CPG%20Management%20of%20Obesity%20230518.pdf'],
      ['New Straits Times — More than half of Malaysian adults overweight or obese (NHMS 2023)', 'https://www.nst.com.my/news/nation/2024/05/1051425/more-half-malaysian-adults-either-overweight-obese'],
      ['Free Malaysia Today / Bernama — KKM warns against retatrutide “pen kurus” (28 Aug 2026)', 'https://www.freemalaysiatoday.com/category/bahasa/tempatan/2026/08/28/reta-belum-lulus-di-malaysia-kkm-pesan-jangan-guna-pen-kurus'],
      ['Sinar Daily — Online weight-loss drugs evade Malaysia’s prescription laws (5 Mar 2026)', 'https://www.sinardaily.my/article/734317/focus/exclusives/online-weight-loss-drugs-evade-malaysias-prescription-laws'],
      ['NEJM — Once-weekly semaglutide in adults with overweight or obesity (STEP 1, 2021)', 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183'],
      ['NEJM — Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1, 2022)', 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038'],
      ['Wilding et al. — Weight regain after withdrawal of semaglutide (STEP 1 extension, 2022)', 'https://discovery.ucl.ac.uk/id/eprint/10149199/'],
      ['NHS — Semaglutide', 'https://www.nhs.uk/medicines/semaglutide/'],
    ],
    related: ['world-diabetes-day-2026-kl', 'undiagnosed-diabetes-high-blood-pressure-young-adults', 'check-blood-pressure-at-home'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'flu-vaccine-malaysia',
    title: 'Flu vaccine in Malaysia: who should get it, when, and how to get a free shot',
    crumb: 'Flu vaccine in Malaysia',
    desc: 'Who should get a flu vaccine in Malaysia, the best time, typical private clinic costs, free shots for seniors through MySejahtera, and side effects.',
    excerpt: 'Flu circulates all year in Malaysia. Who should get vaccinated, the best timing, free shots for seniors, typical costs and what to expect.',
    standfirst: 'Flu spreads all year round in Malaysia, with surges that close classrooms and fill clinics. A yearly vaccine is the simplest protection. Here is who needs it, when to get it, and how to get one free if you are eligible.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Influenza', 'Selesema'],
    image: 'vaccination', imageAlt: 'A doctor giving a vaccine injection in the upper arm',
    keyPoints: [
      'Flu circulates all year in Malaysia. The Ministry of Health advises a yearly vaccine, ideally in March or September.',
      'It is especially important for adults aged 60+, pregnant women, young children and anyone with a long-term illness.',
      'From 2026, free flu shots were reported to cover everyone aged 60+ and those aged 50–59 with a chronic illness. Book through MySejahtera.',
      'At private clinics, a flu shot is commonly advertised at roughly RM50–RM150.',
      'Side effects are usually mild, such as a sore arm or low fever for a day or two.',
    ],
    sections: [
      { id: 'why', h: 'Why get a flu vaccine?', html: `<p>Influenza is not just a bad cold. It can cause high fever, body aches and exhaustion that last a week or more. In older people, young children, pregnant women and people with heart, lung or kidney disease, it can lead to pneumonia and hospital stays.</p>
<p>Flu circulates <strong>all year round</strong> in Malaysia, with surges. In late 2025, a wave of flu clusters swept through schools. By the end of October that year, flu-like illness still made up about 8% of clinic consultations, and severe respiratory infections about 10% of related hospital admissions. In September 2026, an influenza A cluster sickened dozens of students at a boarding school in Ipoh.</p>
${figure('cold-flu', 'Tissues, nasal spray and a notebook on a desk', 'Flu symptoms usually come on suddenly: fever, chills, aches, cough and tiredness.')}` },
      { id: 'who', h: 'Who should get vaccinated', html: `<p>The Ministry of Health encourages a yearly flu vaccine, especially for:</p>
<ul>
<li><strong>Adults aged 60 and over</strong>, particularly those with long-term heart, lung, kidney, liver or nerve conditions, or diabetes.</li>
<li><strong>Pregnant women</strong>, in any trimester. A vaccine in the third trimester also passes protection to the baby for the first months of life, according to Malaysia’s maternal immunisation guidelines.</li>
<li><strong>Children aged 6 months and older</strong>. Children under 9 having their first flu vaccine may need two doses a month apart, so ask your doctor.</li>
<li><strong>Anyone with a chronic illness</strong>, a weakened immune system, or who lives with someone at high risk.</li>
<li><strong>Healthcare and aged-care workers</strong>, and <strong>travellers and pilgrims</strong>.</li>
</ul>` },
      { id: 'free', h: 'Free flu vaccines for seniors', html: `<p>In 2025, the government offered free flu vaccines to people aged 60 and over with at least one chronic illness, at 649 selected government health clinics, booked through <strong>MySejahtera</strong>.</p>
<p>In May 2026, news reports said the programme had widened. It now covers <strong>everyone aged 60 and over</strong>, and <strong>people aged 50–59 with at least one chronic condition</strong> such as diabetes, obesity, high blood pressure, high cholesterol, cancer, or heart, lung or kidney disease. You book a slot in MySejahtera at a Klinik Kesihatan, and walk-ins are accepted while stock lasts.</p>
<p>Supply and dates can change during the year, so check MySejahtera or ask your nearest Klinik Kesihatan before you go.</p>` },
      { id: 'timing', h: 'When is the best time?', html: `<p>Because flu circulates all year here, any time is better than not at all. The Ministry of Health suggests <strong>March or September</strong>, ahead of the seasonal peaks.</p>
<ul>
<li>It takes about <strong>two weeks</strong> after the injection to build protection.</li>
<li>If you are <strong>travelling to the northern hemisphere</strong> for the year-end holidays (Japan, Korea, China, Europe), where flu season runs roughly from November to January, get vaccinated at least two weeks before you fly.</li>
<li><strong>Haj and Umrah pilgrims</strong> should be vaccinated at least two weeks before arriving in Saudi Arabia. Check the current year’s requirements, as older pilgrims and high-risk groups have been required to have a flu vaccine.</li>
</ul>` },
      { id: 'cost', h: 'How much does it cost?', html: `<p>At private clinics and hospitals in Malaysia, a flu vaccine is commonly <strong>advertised at roughly RM50 to RM150</strong> per dose, depending on the vaccine and whether a consultation is included. Ask the clinic for the full price before your appointment.</p>
<p><strong>Tax relief:</strong> vaccination costs for yourself, your spouse and your children can be claimed under the medical expenses tax relief, up to RM1,000 for vaccinations. From the 2026 year of assessment, this covers all vaccines registered with the NPRA, so keep your receipt.</p>` },
      { id: 'strains', h: 'Which vaccine will I get?', html: `<p>Flu viruses change every year, so the vaccine is updated every year to match the strains the World Health Organization expects to circulate. Since one influenza B strain (B/Yamagata) has not been detected anywhere since 2020, WHO now recommends <strong>three-strain (trivalent)</strong> vaccines. Malaysia has both trivalent and four-strain (quadrivalent) vaccines registered. Either protects against the strains currently circulating, and you do not need to choose a particular brand.</p>` },
      { id: 'side-effects', h: 'Side effects and who should not have it', tocLabel: 'Side effects', html: `<p>Most people have no problems or mild, short-lived effects:</p>
<ul><li>A sore, red or swollen arm (very common)</li><li>Low fever, headache, muscle aches or tiredness for a day or two</li></ul>
<p>Serious reactions are rare. The flu vaccine <strong>cannot give you flu</strong>, because the injected vaccine contains no live virus. It can be given on the same day as a COVID-19 vaccine.</p>
<p>Do not have the vaccine if you have had a severe allergic reaction to a previous flu vaccine, and tell your doctor about any serious allergies. Babies under 6 months cannot be vaccinated. People with an egg allergy can usually still be vaccinated, so check with your doctor. If you have a high fever on the day, it is usually best to wait until you recover.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a flu vaccine in Kuala Lumpur',
    clinicsTocLabel: 'Where to get vaccinated',
    clinicsIntro: 'If you are eligible for a free vaccine, book through MySejahtera at a government Klinik Kesihatan. Otherwise, most private GP clinics can give flu vaccines. Call ahead to check they have stock. Our directory lists GP clinics across Kuala Lumpur and nearby Selangor, including those open in the evening and at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-sunday/', 'Clinics open on Sunday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['Is the flu vaccine free in Malaysia?', 'It can be if you are eligible. In 2026, free flu vaccines were reported to cover everyone aged 60 and over and people aged 50–59 with a chronic illness, booked through MySejahtera at government health clinics. Others can pay for a vaccine at a private clinic.'],
      ['How much is a flu vaccine at a private clinic in Malaysia?', 'Private clinics and hospitals commonly advertise flu vaccines at roughly RM50 to RM150 per dose. Prices vary, so ask before your appointment. Vaccination costs can be claimed under the medical expenses tax relief.'],
      ['When is the best time to get a flu vaccine in Malaysia?', 'The Ministry of Health suggests March or September. Flu circulates all year, so if you missed those months, get vaccinated now, and at least two weeks before any trip.'],
      ['Can I get the flu vaccine and a COVID-19 vaccine together?', 'Yes. They can be given on the same day, usually in different arms.'],
      ['Can I get flu from the flu vaccine?', 'No. The injected flu vaccine does not contain live virus. A sore arm or mild fever for a day or two is a normal response.'],
    ],
    sources: [
      ['The Star — More Malaysians can get a free flu vaccine (25 May 2026)', 'https://www.thestar.com.my/lifestyle/health/2026/05/25/more-malaysians-can-get-a-free-flu-vaccine'],
      ['CodeBlue — Too few Malaysian adults are protected against influenza (21 May 2026)', 'https://codeblue.galencentre.org/2026/05/too-few-malaysian-adults-are-protected-against-influenza/'],
      ['Bernama — Free influenza vaccination for high-risk senior citizens (10 Feb 2025)', 'https://bernama.com/en/news.php?id=2391235'],
      ['The Star — Free influenza vaccination at selected Health Ministry facilities (20 May 2025)', 'https://www.thestar.com.my/news/nation/2025/05/20/free-influenza-vaccination-for-senior-citizens-at-selected-health-ministry-facilities'],
      ['Bernama — Influenza-like illness consultations decline (1 Nov 2025)', 'https://www.bernama.com/en/news.php?id=2486103'],
      ['Free Malaysia Today — Influenza A cluster detected at Perak boarding school (16 Sep 2026)', 'https://www.freemalaysiatoday.com/category/nation/2026/09/16/influenza-a-cluster-detected-at-perak-boarding-school'],
      ['Malaysian Influenza Working Group — Consensus on influenza vaccination for older adults (BMC Infectious Diseases, 2022)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9756619/'],
      ['OGSM — Malaysian Maternal Immunisation Consensus Guidelines (2024)', 'https://www.ogsm.org.my/docs/MIG%20eBook-min.pdf'],
      ['WHO — Recommended composition of influenza vaccines for the 2027 southern hemisphere season (25 Sep 2026)', 'https://www.who.int/news/item/25-09-2026-recommendations-announced-for-influenza-vaccine-composition-for-the-2027-southern-hemisphere-influenza-season'],
      ['Ministry of Finance — Budget 2026 tax measures (vaccination relief)', 'https://belanjawan.mof.gov.my/pdf/belanjawan2026/ucapan/tax-measures.pdf'],
      ['US CDC — Key facts about seasonal flu vaccine', 'https://www.cdc.gov/flu/vaccines/keyfacts.html'],
      ['US CDC — Getting flu and COVID-19 vaccines at the same time', 'https://www.cdc.gov/flu/prevent/coadministration.htm'],
    ],
    related: ['dengue-vaccine-qdenga-malaysia', 'haze-air-quality-klang-valley', 'clinic-or-emergency-department'],
  },
];
