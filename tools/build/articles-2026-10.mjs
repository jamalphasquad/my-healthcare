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
    related: ['acne-malaysia', 'pico-laser-melasma-malaysia', 'weight-loss-injections-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'weight-loss-injections-malaysia',
    title: 'Weight-loss injections in Malaysia: what Ozempic, Wegovy and Mounjaro can and can’t do',
    crumb: 'Weight-loss injections in Malaysia',
    desc: 'Which weight-loss injections are registered in Malaysia, who they are for, side effects, and why buying pens online is risky. Updated October 2026.',
    excerpt: 'Only some of these injections are registered for weight loss in Malaysia, and they are meant for people with obesity or weight-related conditions. Side effects are common, and “slimming pens” sold online can be fake.',
    standfirst: 'Weight-loss injections are among the most searched health topics in Malaysia. Only some are registered for weight loss here, they are prescription medicines meant for people with obesity, and most people regain weight after stopping. Pens sold online or in salons may be fake.',
    cat: 'weight', catLabel: 'Weight & metabolism', published: PUB, modified: '2026-11-22', author: AUTHOR, news: true, medical: true,
    about: ['Obesity', 'Obesiti'],
    image: 'waist-measurement', imageAlt: 'A man measuring his waist with a tape measure',
    keyPoints: [
      'These are GLP-1 medicines, such as semaglutide, liraglutide and tirzepatide, and they are prescription-only in Malaysia. Only a registered doctor can prescribe them.',
      'Wegovy, Saxenda and Mounjaro are registered for weight management. Ozempic is registered for type 2 diabetes, not weight loss.',
      'They are meant for adults with a BMI of 30 or more, or 27 or more with a weight-related condition, alongside diet and exercise.',
      'Mounjaro (tirzepatide) works on two gut hormones, GIP and GLP-1, and led to more weight loss than semaglutide in a head-to-head trial.',
      'There is no Mounjaro pill, and the weight-loss pills approved in the US are not registered in Malaysia.',
      'Stomach side effects are common, and most people regain weight after stopping.',
      'Never buy “slimming pens” online or from salons. In 2026 MOH raided sellers and removed hundreds of listings.',
    ],
    sections: [
      { id: 'what', h: 'What these injections are', html: `<p>Ozempic, Wegovy and Mounjaro belong to a group of medicines that copy a gut hormone called GLP-1. Tirzepatide, the medicine in Mounjaro, also copies a second one, GIP. They make you feel full sooner, slow down how fast the stomach empties and help control blood sugar. Most are injected once a week with a pre-filled pen.</p>
<p>In Malaysia they are Group B poisons under the Poisons Act 1952. Only a registered doctor can supply them, or a pharmacist with a doctor’s prescription, and selling them any other way is an offence.</p>` },
      { id: 'registered', h: 'Which ones are registered in Malaysia?', tocLabel: 'Which are registered', html: `<p>Every medicine sold legally in Malaysia has a registration number starting with <strong>MAL</strong>, listed by the National Pharmaceutical Regulatory Agency (NPRA). In October 2026 the register showed:</p>
<div class="table-wrap"><table>
<thead><tr><th>Medicine (active ingredient)</th><th>Registered in Malaysia for</th></tr></thead>
<tbody>
<tr><td>Wegovy (semaglutide 2.4 mg)</td><td>Weight management</td></tr>
<tr><td>Saxenda (liraglutide 3 mg)</td><td>Weight management, including some teenagers aged 12+</td></tr>
<tr><td>Mounjaro (tirzepatide)</td><td>Type 2 diabetes, and weight management in adults</td></tr>
<tr><td>Ozempic (semaglutide)</td><td>Type 2 diabetes only, not weight loss</td></tr>
<tr><td>Generic liraglutide</td><td>Weight management (first generic registered in October 2026)</td></tr>
<tr><td>Zepbound (tirzepatide)</td><td>Not registered in Malaysia</td></tr>
</tbody></table></div>
<p>Registrations change, and you can check any product yourself on the NPRA’s <a href="https://quest3plus.bpfk.gov.my/pmo2/index.php" target="_blank" rel="noopener">QUEST3+ product search</a>.</p>` },
      { id: 'who', h: 'Who are they for?', html: `<p>According to the National Health and Morbidity Survey 2023, 54.4% of Malaysian adults are overweight or obese. These medicines aren’t meant for losing a few kilos before a holiday, and the registered labels allow them only for adults with:</p>
<ul><li>a body mass index (BMI) of 30 or more, or</li><li>a BMI of 27 or more with at least one weight-related condition, such as prediabetes or type 2 diabetes, high blood pressure, high cholesterol, sleep apnoea or heart disease.</li></ul>
<p>Malaysia’s Clinical Practice Guidelines on obesity (2023) define obesity in Asians at a lower BMI, 27.5 and above. They recommend medicines only alongside diet, physical activity and behaviour change, with a doctor supervising.</p>
${figure('doctor-notes', 'A doctor writing notes on a clipboard during a consultation', 'A doctor will check your weight history, other conditions and medicines before suggesting any treatment.')}` },
      { id: 'results', h: 'How much weight do people lose?', tocLabel: 'Expected results', html: `<p>In the main clinical trials, adults taking semaglutide 2.4 mg lost about 15% of their body weight on average over 68 weeks, against about 2% on placebo. In the tirzepatide trial, people on the highest dose lost about 21% on average over 72 weeks. Results vary a lot from person to person, and they depend on staying on treatment and keeping up healthy habits.</p>
<p>Weight tends to come back after stopping. In one study, people regained about two-thirds of the weight they had lost within a year of stopping semaglutide. In a tirzepatide study, people switched to placebo regained about 15% of their body weight over the following year, while those who stayed on it kept losing weight. For this reason many doctors treat obesity as a long-term condition, like high blood pressure.</p>` },
      { id: 'mounjaro', h: 'Mounjaro: what it is used for and how it works', tocLabel: 'About Mounjaro', html: `<p>In Malaysia, Mounjaro (tirzepatide) is registered for adults with type 2 diabetes. It is also registered for weight management in adults with a BMI of 30 or more, or 27 to 30 with at least one weight-related condition such as high blood pressure, high cholesterol, sleep apnoea, heart disease, prediabetes or type 2 diabetes.</p>
<p>Most medicines in this group copy one gut hormone, GLP-1. Tirzepatide acts on two, GIP and GLP-1, which together reduce appetite, make you feel full sooner and improve blood sugar control.</p>
<p>It is one injection under the skin once a week. Treatment starts at 2.5 mg and goes up in steps every 4 weeks or more, to a usual maintenance dose of 5, 10 or 15 mg. Raising the dose slowly helps limit stomach side effects.</p>
<p>In the main weight-loss trial, adults on the highest dose lost about 21% of their body weight over 72 weeks, against about 3% on placebo. In a 2025 trial that compared the two directly, people on tirzepatide lost 20.2% of their weight and people on semaglutide lost 13.7%.</p>` },
      { id: 'compare', h: 'Mounjaro vs Wegovy vs Saxenda', tocLabel: 'Mounjaro vs Saxenda', html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Mounjaro</th><th>Wegovy</th><th>Saxenda</th></tr></thead>
<tbody>
<tr><td>Active ingredient</td><td>Tirzepatide</td><td>Semaglutide 2.4 mg</td><td>Liraglutide 3 mg</td></tr>
<tr><td>How it works</td><td>GIP and GLP-1</td><td>GLP-1</td><td>GLP-1</td></tr>
<tr><td>How often</td><td>Once a week</td><td>Once a week</td><td>Once a day</td></tr>
<tr><td>Average weight loss in main trial</td><td>About 21% over 72 weeks (highest dose)</td><td>About 15% over 68 weeks</td><td>8.4 kg vs 2.8 kg on placebo over 56 weeks</td></tr>
<tr><td>Teenagers</td><td>Adults only</td><td>Check with your doctor</td><td>Registered from age 12 (over 60 kg)</td></tr>
</tbody></table></div>
<p>Saxenda is an older, daily injection with smaller average weight loss. Mounjaro is weekly and led to more weight loss in trials. Which suits you depends on your other conditions, how well you tolerate side effects, availability and cost. A generic liraglutide was registered in Malaysia in October 2026, which may bring the price of that option down. The Saxenda label advises stopping if you haven’t lost at least 5% of your weight after 12 weeks on the full dose.</p>` },
      { id: 'pill', h: 'Is there a Mounjaro pill?', tocLabel: 'Is there a pill?', html: `<p>No. Mounjaro comes only as an injection, in pens and vials, and there is no tablet form of tirzepatide.</p>
<p>Weight-loss pills in this group do exist in other countries, but none is registered in Malaysia:</p>
<ul>
<li>Orforglipron, a once-daily GLP-1 pill, was approved in the US in April 2026 for weight management. It is a different medicine from Mounjaro.</li>
<li>A 25 mg semaglutide pill (oral Wegovy) was approved in the US in December 2025.</li>
<li>In Malaysia, oral semaglutide tablets are registered only for type 2 diabetes, at lower doses.</li>
</ul>
<p>Any “Mounjaro pill” or “tirzepatide tablet” sold online is not a registered product, so don’t take it.</p>` },
      { id: 'side-effects', h: 'Side effects and safety', html: `<p>Stomach and gut side effects are the most common, especially when you start or when the dose goes up. In the semaglutide weight-management trials:</p>
<ul><li>Nausea: 44% (vs 16% on placebo)</li><li>Diarrhoea: 30%</li><li>Vomiting: 25%</li><li>Constipation: 24%</li></ul>
<p>Rarer but serious risks include inflammation of the pancreas (pancreatitis), gallstones, hair loss and losing muscle along with fat. These medicines are not for use in pregnancy, and the product information advises stopping them before a planned pregnancy. The US labels say people with a personal or family history of a rare thyroid cancer, medullary thyroid carcinoma, should not use semaglutide or tirzepatide.</p>
<p>Mounjaro’s Malaysian product information lists nausea and diarrhoea as very common. Vomiting, constipation, indigestion, stomach pain, bloating, reduced appetite, tiredness, dizziness, hair loss and reactions where you inject are common. Other things to know:</p>
<ul>
<li>Low blood sugar is more likely if you also take insulin or a sulphonylurea for diabetes, and your doctor may lower those doses.</li>
<li>Dehydration from vomiting or diarrhoea can harm the kidneys, so drink enough fluids.</li>
<li>Tell the doctor you take it before any surgery or sedation, because there is a risk of breathing in stomach contents under anaesthesia.</li>
<li>Use effective contraception during treatment, and stop at least a month before a planned pregnancy. Tirzepatide can lower the level of the contraceptive pill in your blood. The US label advises adding a barrier method for 4 weeks after starting and after each dose increase, so ask your doctor.</li>
</ul>
<div class="box box--pink" role="note"><span class="box__title">See a doctor urgently if you have</span><ul><li>Severe, persistent stomach pain, sometimes spreading to the back</li><li>Repeated vomiting and signs of dehydration</li><li>Yellowing of the skin or eyes</li></ul></div>` },
      { id: 'online', h: 'Why “slimming pens” sold online are risky', tocLabel: 'The risk of buying online', html: `<p>In August 2026, the Ministry of Health warned the public about “pen kurus” sold online that claim to contain retatrutide, an experimental medicine not approved anywhere in the world. Between January and July 2026, its Pharmacy Enforcement Division carried out 30 raids on weight-loss products, 17 of them involving online sales, and seized goods worth RM477,142. It also took down 209 e-commerce listings. In April 2026, customs officers at KLIA seized more than 12,000 units of unregistered injections labelled “Tirzide” and believed to contain tirzepatide.</p>
<p>A pen bought outside a clinic or pharmacy may be fake, unregistered, badly stored or the wrong dose. To protect yourself:</p>
<ul>
<li>Get these medicines only through a doctor who has assessed you.</li>
<li>Check the box has a <strong>MAL registration number</strong>, and look it up on NPRA’s product search.</li>
<li>Check the hologram security label (FarmaTag) with the FarmaChecker feature in the MyUBAT app.</li>
<li>Don’t buy from sellers on social media, e-commerce sites or in beauty salons.</li>
</ul>` },
      { id: 'consultation', h: 'What to expect when you see a doctor', html: `<p>A doctor will usually ask about your weight history, eating habits, activity, sleep and other medicines. They will measure your weight, waist and blood pressure, and may order blood tests for blood sugar, cholesterol, and liver and kidney function. If a medicine suits you, it starts at a low dose and goes up slowly, with follow-up visits to check side effects and progress.</p>
<p>A weight-management plan should also cover food, movement and sleep, and set out what success looks like for you. For some people with a very high BMI, the doctor may discuss bariatric surgery.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to talk to a doctor about your weight',
    clinicsTocLabel: 'Where to see a doctor',
    clinicsIntro: 'Any registered GP can assess your weight and health, check for related conditions such as diabetes and high blood pressure, and discuss whether treatment would suit you. Our directory lists GP clinics across Kuala Lumpur and nearby Selangor, with opening hours and directions.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['Is Ozempic approved for weight loss in Malaysia?', 'No. In Malaysia, Ozempic is registered for type 2 diabetes. Wegovy, which contains a higher dose of the same medicine (semaglutide), is the version registered for weight management.'],
      ['Is Mounjaro available for weight loss in Malaysia?', 'Yes. Mounjaro (tirzepatide) is registered in Malaysia, and its current product information covers weight management as well as type 2 diabetes. It is prescription-only, so a doctor must assess you first.'],
      ['Can I buy weight-loss injections online in Malaysia?', 'You shouldn’t. These medicines are Group B poisons that need a prescription, and in 2026 the Ministry of Health raided sellers and removed online listings. Pens sold online may be fake or unregistered.'],
      ['What is Mounjaro used for?', 'In Malaysia, Mounjaro (tirzepatide) is registered for adults with type 2 diabetes, and for weight management in adults with a BMI of 30 or more, or 27 or more with a weight-related condition. It is a once-weekly injection that needs a prescription.'],
      ['Is there a Mounjaro pill?', 'No. Mounjaro comes only as an injection. Weight-loss pills such as orforglipron and oral semaglutide 25 mg are approved in the US but not registered in Malaysia, so any “Mounjaro pill” sold online is not genuine.'],
      ['Saxenda vs Mounjaro: which is better?', 'Mounjaro is a weekly injection that led to more weight loss in trials (about 21% vs about 8%). Saxenda is a daily injection and is also registered for some teenagers. The right choice depends on your health, side effects and cost, so discuss it with your doctor.'],
      ['What are the side effects of Mounjaro?', 'The most common are nausea, diarrhoea, vomiting, constipation, indigestion and reduced appetite, especially when you start or when the dose goes up. Rarer but serious risks include pancreatitis, gallbladder problems and dehydration that affects the kidneys.'],
      ['Will I regain weight if I stop the injections?', 'Many people do. In studies, much of the weight lost often came back within a year of stopping, which is why doctors pair these medicines with long-term changes to diet and activity.'],
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
      ['NEJM — Tirzepatide as compared with semaglutide for the treatment of obesity (SURMOUNT-5, 2025)', 'https://doi.org/10.1056/NEJMoa2416394'],
      ['NEJM — A randomized, controlled trial of 3.0 mg of liraglutide in weight management (SCALE, 2015)', 'https://www.nejm.org/doi/full/10.1056/NEJMoa1411892'],
      ['Kosmo — Unregistered medicines worth RM7.7 million seized at KLIA (28 Apr 2026)', 'https://www.kosmo.com.my/2026/04/28/akps-tumpas-penyeludupan-ubat-tidak-berdaftar-bernilai-rm7-7-juta/'],
      ['BioSpace — FDA approves orforglipron (1 Apr 2026)', 'https://www.biospace.com/press-releases/fda-approves-lillys-foundayo-orforglipron-the-only-glp-1-pill-for-weight-loss-that-can-be-taken-any-time-of-day-without-food-or-water-restrictions'],
      ['Novo Nordisk — FDA approves oral semaglutide 25 mg for weight management (22 Dec 2025)', 'https://www.novonordisk.com/news-and-media/news-and-ir-materials/news-details.html?id=916472'],
      ['Wilding et al. — Weight regain after withdrawal of semaglutide (STEP 1 extension, 2022)', 'https://discovery.ucl.ac.uk/id/eprint/10149199/'],
      ['NHS — Semaglutide', 'https://www.nhs.uk/medicines/semaglutide/'],
    ],
    related: ['bmi-calculator-malaysia', 'pcos-malaysia', 'thyroid-hyperthyroidism-hypothyroidism-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'flu-vaccine-malaysia',
    title: 'Flu vaccine in Malaysia: who should get it, when, and how to get a free shot',
    crumb: 'Flu vaccine in Malaysia',
    desc: 'Who should get a flu vaccine in Malaysia, the best time, typical private clinic costs, free shots for seniors through MySejahtera, and side effects.',
    excerpt: 'Flu circulates all year in Malaysia, and a yearly vaccine is the simplest protection. Older adults, pregnant women, young children and people with long-term illness benefit most, and many seniors can get it free.',
    standfirst: 'Flu spreads all year round in Malaysia, with surges that close classrooms and fill clinics. A yearly vaccine is the simplest protection. It matters most for older adults, pregnant women, young children and people with long-term illness, and many people aged 50 and over can now get it free through MySejahtera.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: '2026-11-23', author: AUTHOR, news: true, medical: true,
    about: ['Influenza', 'Selesema'],
    image: 'vaccination', imageAlt: 'A doctor giving a vaccine injection in the upper arm',
    keyPoints: [
      'Flu circulates all year in Malaysia. The Ministry of Health advises a yearly vaccine, ideally in March or September.',
      'It matters most for adults aged 60+, pregnant women, young children and anyone with a long-term illness.',
      'News reports said that from 2026 free flu shots cover everyone aged 60+ and people aged 50–59 with a chronic illness. You book through MySejahtera.',
      'Private clinics commonly advertise a flu shot at roughly RM50–RM150.',
      'Side effects are usually mild, such as a sore arm or a low fever for a day or two.',
      'Protection starts about two weeks after the injection and fades over the following months, so you need a new vaccine every year.',
    ],
    sections: [
      { id: 'why', h: 'Why get a flu vaccine?', html: `<p>Influenza is more than a bad cold. It can bring a high fever, body aches and exhaustion that last a week or longer. In older people, young children, pregnant women and people with heart, lung or kidney disease, it can lead to pneumonia and a hospital stay.</p>
<p>Flu circulates all year round in Malaysia, with surges. In late 2025 a wave of flu clusters went through schools, and at the end of October that year flu-like illness still made up about 8% of clinic consultations, with severe respiratory infections about 10% of related hospital admissions. In September 2026, an influenza A cluster made dozens of students ill at a boarding school in Ipoh. Read more about <a href="/articles/influenza-a-malaysia/">influenza A symptoms, how long it lasts and treatment</a>.</p>
${figure('cold-flu', 'Tissues, nasal spray and a notebook on a desk', 'Flu usually comes on suddenly, with fever, chills, aches, a cough and tiredness.')}` },
      { id: 'who', h: 'Who should get vaccinated', html: `<p>The Ministry of Health encourages a yearly flu vaccine, especially for:</p>
<ul>
<li>adults aged 60 and over, particularly those with long-term heart, lung, kidney, liver or nerve conditions, or diabetes</li>
<li>pregnant women, in any trimester. Malaysia’s maternal immunisation guidelines say a vaccine in the third trimester also protects the baby for the first months of life.</li>
<li>children aged 6 months and older. Children under 9 having their first flu vaccine may need two doses a month apart, so ask your doctor.</li>
<li>anyone with a chronic illness or a weakened immune system, or who lives with someone at high risk</li>
<li>healthcare and aged-care workers, travellers and pilgrims</li>
</ul>` },
      { id: 'free', h: 'Free flu vaccines for seniors', html: `<p>In 2025, the government offered free flu vaccines to people aged 60 and over with at least one chronic illness, at 649 selected government health clinics, booked through MySejahtera.</p>
<p>In May 2026, news reports said the programme had widened to everyone aged 60 and over, and to people aged 50–59 with at least one chronic condition such as diabetes, obesity, high blood pressure, high cholesterol, cancer, or heart, lung or kidney disease. You book a slot at a Klinik Kesihatan in MySejahtera, and walk-ins are accepted while stock lasts.</p>
<p>Supply and dates can change during the year, so check MySejahtera or ask your nearest Klinik Kesihatan before you go.</p>` },
      { id: 'how-long', h: 'What the vaccine protects against, and how long it lasts', tocLabel: 'How long it lasts', html: `<p>The flu vaccine protects against influenza, the virus that causes flu. It doesn’t prevent colds or other coughs. Each year’s vaccine covers the strains expected to circulate: two influenza A strains (H1N1 and H3N2) and one influenza B strain. It lowers your chance of catching flu and, more importantly, of becoming seriously ill, needing hospital care or passing it on to vulnerable family members.</p>
<p>Protection starts about two weeks after the injection. It is strongest in the first few months and then fades, which is why one dose a year is recommended. The virus also changes, and the vaccine is updated every year to match, so last year’s vaccine may not cover this year’s strains.</p>
<p>How well it works varies from year to year, depending on how closely the vaccine matches the strains going around. If you still catch flu, the illness is usually milder.</p>
<p>Children can be vaccinated from 6 months of age. Children under 9 having a flu vaccine for the first time usually need two doses at least four weeks apart, then one dose a year after that. Flu spreads quickly in schools and kindergartens, so vaccinating children also helps protect grandparents and babies at home.</p>` },
      { id: 'timing', h: 'When is the best time?', html: `<p>Because flu circulates all year here, any time is better than not at all. The Ministry of Health suggests March or September, ahead of the seasonal peaks. Protection takes about two weeks to build after the injection.</p>
<ul>
<li>If you are travelling to the northern hemisphere for the year-end holidays (Japan, Korea, China, Europe), where flu season runs roughly from November to January, get vaccinated at least two weeks before you fly.</li>
<li>Haj and Umrah pilgrims should be vaccinated at least two weeks before arriving in Saudi Arabia. Check the current year’s requirements, because older pilgrims and high-risk groups have been required to have a flu vaccine.</li>
</ul>` },
      { id: 'cost', h: 'How much does it cost?', html: `<p>Private clinics and hospitals in Malaysia commonly advertise a flu vaccine at roughly RM50 to RM150 per dose, depending on the vaccine and whether a consultation is included. Ask the clinic for the full price before your appointment.</p>
<p>You can claim vaccination costs for yourself, your spouse and your children under the medical expenses tax relief, up to RM1,000 for vaccinations. From the 2026 year of assessment this covers all vaccines registered with the NPRA, so keep your receipt.</p>` },
      { id: 'strains', h: 'Which vaccine will I get?', html: `<p>Flu viruses change every year, so the vaccine is updated every year to match the strains the World Health Organization expects to circulate. One influenza B strain (B/Yamagata) has not been detected anywhere since 2020, so WHO now recommends three-strain (trivalent) vaccines. Malaysia has both trivalent and four-strain (quadrivalent) vaccines registered. Either one protects against the strains currently circulating, and you don’t need to ask for a particular brand.</p>` },
      { id: 'side-effects', h: 'Side effects and who should not have it', tocLabel: 'Side effects', html: `<p>Most people have no problems, or mild effects that pass quickly:</p>
<ul><li>A sore, red or swollen arm (very common)</li><li>Low fever, headache, muscle aches or tiredness for a day or two</li></ul>
<p>Serious reactions are rare. The injected vaccine contains no live virus, so it can’t give you flu. It can be given on the same day as a COVID-19 vaccine.</p>
<p>Don’t have the vaccine if you have had a severe allergic reaction to a previous flu vaccine, and tell your doctor about any serious allergies. Babies under 6 months can’t be vaccinated. People with an egg allergy can usually still have it, so check with your doctor. If you have a high fever on the day, it is usually best to wait until you recover.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a flu vaccine in Kuala Lumpur',
    clinicsTocLabel: 'Where to get vaccinated',
    clinicsIntro: 'If you are eligible for a free vaccine, book through MySejahtera at a government Klinik Kesihatan. Otherwise, most private GP clinics give flu vaccines, but call ahead to check they have stock. Our directory lists GP clinics across Kuala Lumpur and nearby Selangor, including those open in the evening and at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-sunday/', 'Clinics open on Sunday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['Is the flu vaccine free in Malaysia?', 'It can be if you are eligible. In 2026, news reports said free flu vaccines cover everyone aged 60 and over and people aged 50–59 with a chronic illness, booked through MySejahtera at government health clinics. Anyone else can pay for one at a private clinic.'],
      ['How much is a flu vaccine at a private clinic in Malaysia?', 'Private clinics and hospitals commonly advertise flu vaccines at roughly RM50 to RM150 per dose. Prices vary, so ask before your appointment. You can claim the cost under the medical expenses tax relief.'],
      ['When is the best time to get a flu vaccine in Malaysia?', 'The Ministry of Health suggests March or September. Flu circulates all year, so if you missed those months, get vaccinated now, and at least two weeks before any trip.'],
      ['Can I get the flu vaccine and a COVID-19 vaccine together?', 'Yes. They can be given on the same day, usually in different arms.'],
      ['Can I get flu from the flu vaccine?', 'No. The injected flu vaccine contains no live virus. A sore arm or a mild fever for a day or two is a normal response.'],
      ['How long does the flu vaccine last? (Vaksin influenza tahan berapa lama?)', 'Protection starts about two weeks after the injection and fades over the following months. Because protection wanes and flu strains change, you need a new vaccine every year.'],
      ['What is the flu vaccine for? (Vaksin influenza untuk apa?)', 'It protects against influenza, the virus that causes flu, including two influenza A strains and one influenza B strain. It lowers the risk of catching flu and of serious illness, but it doesn’t prevent colds.'],
      ['Can children get the flu vaccine? (Vaksin influenza untuk kanak-kanak)', 'Yes, from 6 months of age. Children under 9 having their first flu vaccine usually need two doses at least four weeks apart, then one dose every year.'],
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
      ['US CDC — Key facts about seasonal flu vaccine (Sep 2026)', 'https://www.cdc.gov/flu/vaccines/keyfacts.html'],
      ['US CDC — Types of influenza viruses (Sep 2025)', 'https://www.cdc.gov/flu/about/viruses-types.html'],
      ['US CDC — Getting flu and COVID-19 vaccines at the same time', 'https://www.cdc.gov/flu/prevent/coadministration.htm'],
    ],
    related: ['umrah-haj-vaccine-meningitis-malaysia', 'pneumonia-pneumococcal-vaccine-malaysia', 'influenza-a-malaysia'],
  },
];
