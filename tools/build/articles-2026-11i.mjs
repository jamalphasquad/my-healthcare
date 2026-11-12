// Articles published 12 November 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-12';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NOV_2026_I = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'ubat-batuk-cough-medicine-malaysia',
    title: 'Ubat batuk: which cough medicines work, dry vs chesty cough, children and safety',
    crumb: 'Ubat batuk (cough medicines)',
    desc: 'Ubat batuk explained: what dry and chesty cough medicines contain, what the evidence says, honey, age limits for children, codeine rules in Malaysia, how to check a MAL number, and red flags.',
    excerpt: 'Pharmacy shelves are full of cough syrups, but the evidence that they work is weak. What is in dry and chesty cough medicines, which ones to avoid for children, Malaysia’s rules on codeine, combination product risks, how to check a product is registered, and when a cough needs a doctor.',
    standfirst: 'Ubat batuk means cough medicine. Most coughs from colds clear up on their own within 3 weeks, and research finds little good evidence that over-the-counter cough medicines speed this up. Some can ease symptoms, but they aren’t safe for everyone. Here is what is in them, what to choose, and what to avoid, especially for children.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Cough medicine', 'Cough', 'Codeine'],
    image: 'medications', imageAlt: 'Assorted medicines and tablets on a table',
    keyPoints: [
      'A Cochrane review found no good evidence for or against over-the-counter cough medicines. They may ease a cough a little, but they won’t cure it.',
      'Honey is probably better than no treatment for children’s coughs, and works about as well as dextromethorphan. Never give honey to babies under 1 year.',
      'In Malaysia, liquid cough and cold medicines are labelled not for children under 2, and should only be used for ages 2 to 6 on a doctor’s or pharmacist’s advice. Codeine is not for children under 12.',
      'Codeine cough medicines can only be supplied by a doctor or pharmacist. Misusing cough syrup, including mixing it with ketum, is an offence.',
      'Check combination products so you don’t take paracetamol twice, and avoid decongestants such as pseudoephedrine if you have high blood pressure.',
    ],
    sections: [
      { id: 'types', h: 'Dry cough or chesty cough?', tocLabel: 'Dry or chesty', html: `<div class="table-wrap"><table>
<thead><tr><th>Type of medicine</th><th>Meant for</th><th>Generic names</th></tr></thead>
<tbody>
<tr><td><strong>Cough suppressant</strong></td><td>Dry, tickly cough (batuk kering)</td><td>Dextromethorphan, codeine</td></tr>
<tr><td><strong>Expectorant</strong></td><td>Chesty cough with phlegm (batuk berkahak)</td><td>Guaifenesin</td></tr>
<tr><td><strong>Mucolytic</strong> (loosens phlegm)</td><td>Chesty cough with thick phlegm</td><td>Bromhexine, ambroxol, carbocisteine, acetylcysteine</td></tr>
<tr><td><strong>Sedating antihistamine</strong></td><td>Often added to night-time mixtures</td><td>Chlorpheniramine, diphenhydramine, promethazine</td></tr>
<tr><td><strong>Decongestant</strong></td><td>Blocked nose</td><td>Pseudoephedrine, phenylephrine</td></tr>
</tbody></table></div>
<p>Don’t take a suppressant for a chesty cough, as coughing up phlegm helps clear your chest. Many products combine several of these ingredients, so read the label.</p>` },
      { id: 'evidence', h: 'Do cough medicines work?', tocLabel: 'Evidence', html: `<p>A 2014 Cochrane review of 29 trials with nearly 5,000 people concluded there is <strong>no good evidence for or against</strong> over-the-counter cough medicines:</p>
<ul>
<li><strong>Adults:</strong> results for suppressants were mixed. One of three trials of guaifenesin found a benefit, and so did one mucolytic trial. Antihistamines worked no better than a dummy treatment.</li>
<li><strong>Children:</strong> suppressants, antihistamines and antihistamine-decongestant mixtures worked no better than a dummy treatment.</li>
</ul>
<p>The NHS says cough syrups “may help you cough less” but won’t stop a cough, and that decongestants and codeine cough medicines won’t stop one either. A cough after a cold commonly lasts up to 3 weeks.</p>
<p><strong>Honey:</strong> a 2018 Cochrane review found honey is probably better than no treatment for children’s coughs, works about as well as dextromethorphan, and may work better than diphenhydramine. Try a teaspoon in warm water or on its own. <strong>Don’t give honey to babies under 1 year</strong>, because of the risk of botulism.</p>
<p><strong>Steam:</strong> breathing in steam hasn’t been shown to help, and steam bowls can scald children.</p>
${figure('medications', 'Assorted medicines on a table', 'Read the label: many cough mixtures combine several ingredients, including paracetamol or a decongestant.')}` },
      { id: 'children', h: 'Cough medicines for children', tocLabel: 'Children', html: `<ul>
<li><strong>Under 2 years:</strong> Malaysia’s drug authority requires liquid cough and cold medicines containing antihistamines, cough suppressants or decongestants to be labelled “Not to be used in children below two years of age”.</li>
<li><strong>2 to 6 years:</strong> use these only with caution, on the advice of a doctor or pharmacist. The UK advises no cough and cold medicines at all under 6.</li>
<li><strong>Codeine:</strong> Malaysia’s labelling rules say codeine mustn’t be used for coughs and colds in children under 12, isn’t recommended from 12 to 18 for those with breathing problems, and mustn’t be used by anyone under 18 after tonsil or adenoid removal for sleep apnoea.</li>
<li><strong>Sedating antihistamines</strong> such as promethazine can cause dangerous breathing problems in young children.</li>
<li><strong>Mucolytics:</strong> acetylcysteine and carbocisteine shouldn’t be given to children under 2. In France, some babies produced more mucus instead of less.</li>
<li>Use the measuring device provided, and don’t give two products containing the same ingredient.</li>
</ul>
<p>For most children, rest, fluids and honey (from age 1) are enough. See our guides to <a href="/articles/urti-common-cold-selsema-malaysia/">colds (selsema)</a> and <a href="/articles/fever-in-children-malaysia/">fever in children</a>.</p>` },
      { id: 'codeine', h: 'Codeine cough syrup: Malaysian rules', tocLabel: 'Codeine', html: `<p>Codeine is a controlled medicine under Malaysia’s Poisons Act. Codeine cough products can only be supplied by a <strong>doctor or a pharmacist</strong>. The Ministry of Health has said cough medicines containing scheduled poisons can be sold only for medical purposes.</p>
<p>Codeine and some other cough syrups have been misused in Malaysia, for example mixed with ketum and fizzy drinks. In 2018, the ministry reported seizing more than 100,000 bottles, and the penalty for illegal sale includes a fine of up to RM3,000, up to a year in prison, or both.</p>
<p><strong>Codeine can:</strong></p>
<ul>
<li>cause marked drowsiness, so don’t drive or drink alcohol</li>
<li>slow breathing dangerously, especially in children and in people who break it down unusually fast</li>
<li>pass into breast milk, so Malaysian labelling says not to use it while breastfeeding</li>
<li>be habit-forming</li>
</ul>
<p>The US FDA has limited codeine cough medicines to adults aged 18 and over. Malaysia has also cancelled 14 pholcodine products, after links to severe allergic reactions during general anaesthesia. If you have taken pholcodine in the past, tell your surgical team before an operation.</p>` },
      { id: 'safety', h: 'Safety tips: combinations, blood pressure and pregnancy', tocLabel: 'Safety', html: `<ul>
<li><strong>Paracetamol twice:</strong> many cold and flu products already contain paracetamol. Don’t take extra paracetamol on top. See our guide to <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkillers</a>.</li>
<li><strong>Decongestants:</strong> pseudoephedrine is in 62 registered combination products in Malaysia. NPRA warns of rare but serious brain blood vessel problems. Avoid it with severe or uncontrolled <a href="/articles/blood-pressure-cholesterol-malaysia/">high blood pressure</a> or kidney disease. Stop and get help for a sudden severe headache, confusion, seizures or vision changes. Check with a pharmacist first if you have heart disease, diabetes, glaucoma, thyroid problems or an enlarged prostate.</li>
<li><strong>Antidepressants:</strong> dextromethorphan can interact with some antidepressants and cause serotonin syndrome. Ask a pharmacist.</li>
<li><strong>Drowsiness:</strong> sedating antihistamines and codeine can make you sleepy. Don’t drive or operate machinery.</li>
<li><strong>Pregnancy:</strong> check with a doctor or pharmacist before taking any cough medicine.</li>
<li><strong>Breastfeeding:</strong> guaifenesin is probably fine. Avoid codeine, and note that decongestant tablets may reduce milk supply.</li>
</ul>` },
      { id: 'mal', h: 'Check that a cough product is registered', tocLabel: 'Check MAL number', html: `<p>Registered medicines in Malaysia carry a <strong>MAL number</strong> (MAL followed by 8 digits and a letter) and a hologram security label. The last letter tells you the type:</p>
<ul>
<li><strong>A:</strong> controlled medicine</li>
<li><strong>X:</strong> over-the-counter medicine</li>
<li><strong>T:</strong> traditional product, such as herbal cough remedies</li>
<li><strong>N:</strong> health supplement</li>
</ul>
<p>You can check a product by name or registration number on NPRA’s <a href="https://quest3plus.bpfk.gov.my/pmo2/index.php" target="_blank" rel="noopener">QUEST3+ product search</a>. Registration of a traditional product doesn’t mean it has been proven to work.</p>` },
      { id: 'kahak', h: 'Kahak: does green phlegm mean I need antibiotics?', tocLabel: 'Phlegm colour', html: `<p>No. In a study of more than 3,400 adults with a cough, people with yellow or green phlegm were given antibiotics more often, but the antibiotics didn’t help them recover faster. Most coughs are caused by viruses, which antibiotics don’t treat. For bronchitis, antibiotics shortened the cough by only about half a day, with more side effects.</p>
<p><strong>See a doctor if you have:</strong></p>
<ul>
<li>a cough lasting more than 3 weeks. See our guide to <a href="/articles/persistent-cough-malaysia/">persistent cough</a>.</li>
<li>blood in your phlegm</li>
<li>breathlessness, chest pain or wheezing. See our guide to <a href="/articles/asthma-asma-inhaler-malaysia/">asthma</a>.</li>
<li>a fever lasting more than 5 days</li>
<li>weight loss, night sweats or a long-lasting cough, which can be signs of <a href="/articles/tuberculosis-tb-malaysia/">tuberculosis</a></li>
</ul>
<p><strong>Babies:</strong> whooping cough in babies under 3 months may not cause a whoop. Call <a href="tel:999">999</a> if a baby turns blue or grey or struggles to breathe, and get urgent help for any baby under 6 months with a bad cough.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for a cough',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check your chest, decide whether you need any medicine, and look for causes of a cough that won’t go away. Our directory lists clinics across Malaysia, including those open late, at weekends and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['What is the best ubat batuk?', 'There is no clear winner. For a dry cough, dextromethorphan may help a little. For a chesty cough, guaifenesin may help. Honey is a good option for children over 1. Ask a pharmacist.'],
      ['Which cough medicine is for batuk berkahak?', 'An expectorant such as guaifenesin, or a mucolytic such as bromhexine or carbocisteine. Avoid cough suppressants for a chesty cough.'],
      ['Can I give cough syrup to my baby?', 'No. In Malaysia, liquid cough and cold medicines are labelled not for children under 2. Don’t give honey to babies under 1 year either. See a doctor if a baby has a cough.'],
      ['Is codeine cough syrup available without a prescription?', 'Codeine is controlled and can only be supplied by a doctor or pharmacist. It isn’t for children under 12 and shouldn’t be used while breastfeeding.'],
      ['Does green phlegm mean I need antibiotics?', 'No. Green or yellow phlegm is common with viral infections, and antibiotics don’t speed recovery in most cases.'],
      ['Does honey help a cough?', 'Yes, probably. Studies in children found honey better than no treatment and about as good as dextromethorphan. Don’t give it to babies under 1.'],
      ['How do I check if a cough medicine is registered?', 'Look for a MAL number and hologram on the pack, then search the product on NPRA’s QUEST3+ website.'],
    ],
    sources: [
      ['Cochrane — Over-the-counter medications for acute cough in children and adults (2014)', 'https://www.cochrane.org/CD001831/ARI_over-counter-medications-acute-cough-children-and-adults-community-settings'],
      ['Cochrane — Honey for acute cough in children (2018)', 'https://www.cochrane.org/CD007094/ARI_honey-acute-cough-children'],
      ['Cochrane — Acetylcysteine and carbocysteine for respiratory infections in children (2022)', 'https://www.cochrane.org/CD003124/ARI_acetylcysteine-and-carbocysteine-acute-upper-and-lower-respiratory-tract-infections-children-without-chronic'],
      ['Cochrane — Heated, humidified air for the common cold (2017)', 'https://www.cochrane.org/CD001728/ARI_heated-humidified-air-common-cold'],
      ['Cochrane — Antibiotics for acute bronchitis (2017)', 'https://www.cochrane.org/CD000245/ARI_antibiotics-for-acute-bronchitis'],
      ['NPRA Malaysia — Berita Ubat-Ubatan, Directive 16/2016 on codeine labelling (Dec 2016)', 'https://www.npra.gov.my/images/Publications/Newsletter_Berita_Ubat-ubatan/2016/Berita_Ubat_Ubatan_Dec_vol66_n46.pdf'],
      ['NPRA Malaysia — Pholcodine: risk of anaphylaxis (Mar 2023)', 'https://npra.gov.my/index.php/my/health-professionals-2/kemaskini-terbaru/449-english/safety-alerts-main/safety-alerts-2023/1527471-pholcodine-risk-of-anaphylaxis-to-neuromuscular-blocking-agents-nmbas.html'],
      ['NPRA Malaysia — Pseudoephedrine: risk of PRES and RCVS (Sep 2024)', 'https://npra.gov.my/index.php/en/component/content/article/454-english/safety-alerts-main/safety-alerts-2024/1527656-pseudoephedrine-risk-of-posterior-reversible-encephalopathy-syndrome-pres-and-reversible-cerebral-vasoconstriction-syndrome-rcvs.html'],
      ['NPRA Malaysia — FAQ on traditional and natural products', 'https://www.npra.gov.my/index.php/en/component/sppagebuilder/988-faq-main-thms-and-natural-product.html'],
      ['Pharmaceutical Services Programme, MOH — Poisons List', 'https://pharmacy.moh.gov.my/sites/default/files/document-upload/poisons-list_1.pdf'],
      ['Malay Mail — Only medical practitioners, pharmacists allowed to dispense cough medicines (Mar 2018)', 'https://www.malaymail.com/news/malaysia/2018/03/04/only-medical-practitioners-pharmacists-allowed-to-dispense-cough-medicines/1590281'],
      ['The Star — Cough and cold medicines for children to be limited (Jul 2009)', 'https://www.thestar.com.my/news/nation/2009/07/09/cough-and-cold-medicines-for-children-to-be-limited'],
      ['NHS — Cough (Dec 2023)', 'https://www.nhs.uk/conditions/cough/'],
      ['NHS — Chest infection (Jun 2023)', 'https://www.nhs.uk/conditions/chest-infection/'],
      ['NHS — Pseudoephedrine (Sep 2026)', 'https://www.nhs.uk/medicines/pseudoephedrine/'],
      ['NHS — Whooping cough (Aug 2026)', 'https://www.nhs.uk/conditions/whooping-cough/'],
      ['UK MHRA — Over-the-counter cough and cold medicines for children', 'https://www.gov.uk/drug-safety-update/over-the-counter-cough-and-cold-medicines-for-children'],
      ['UK MHRA — Codeine for cough and cold: restricted use in children (2015)', 'https://www.gov.uk/drug-safety-update/codeine-for-cough-and-cold-restricted-use-in-children'],
      ['US FDA — Should you give kids medicine for coughs and colds? (2024)', 'https://www.fda.gov/consumers/consumer-updates/should-you-give-kids-medicine-coughs-and-colds'],
      ['US FDA — Drug safety communication on opioid cough and cold medicines (Jan 2018)', 'https://www.fda.gov/files/drugs/published/Drug-Safety-Communication--Opioid-Cough-and-Cold-Meds.pdf'],
      ['Breastfeeding Network — Cold remedies and breastfeeding', 'https://www.breastfeedingnetwork.org.uk/cold-remedies/'],
      ['US CDC — Chest cold (acute bronchitis) (Jul 2025)', 'https://www.cdc.gov/acute-bronchitis/about/index.html'],
      ['ScienceDaily — Coloured phlegm and antibiotics, European Respiratory Journal (2011)', 'https://www.sciencedaily.com/releases/2011/03/110324103137.htm'],
    ],
    related: ['persistent-cough-malaysia', 'urti-common-cold-selsema-malaysia', 'painkillers-paracetamol-ibuprofen-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'kencing-berbuih-kidney-disease-malaysia',
    title: 'Kencing berbuih (foamy urine) and kidney disease: early signs, tests and protecting your buah pinggang',
    crumb: 'Kencing berbuih and kidney disease',
    desc: 'When foamy urine (kencing berbuih) is harmless and when it means protein, how chronic kidney disease is found with urine tests and eGFR, who should be screened, and how to protect your kidneys.',
    excerpt: 'Foamy urine is usually harmless, but foam that keeps coming back can mean protein is leaking from the kidneys. Malaysia has one of the world’s fastest-rising rates of kidney failure, and early kidney disease has no symptoms. What the tests mean and how to protect your kidneys.',
    standfirst: 'Kencing berbuih means foamy urine. A little foam after a fast stream is normal. Foam that keeps appearing, needs more than one flush or comes with swelling can be a sign of protein in the urine, an early marker of kidney disease. Most people with early chronic kidney disease (penyakit buah pinggang kronik) feel completely well, so simple urine and blood tests are the only way to find it.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Chronic kidney disease', 'Proteinuria', 'Foamy urine'],
    image: 'stethoscope-desk', imageAlt: 'A stethoscope resting on a desk',
    keyPoints: [
      'Occasional foam that clears with one flush is usually harmless. See a doctor if foamy urine keeps happening, gets worse, or comes with swelling, tiredness or poor appetite.',
      'Chronic kidney disease is usually silent until it is advanced. A Malaysian survey found only 4 in 100 people with it knew they had it.',
      'It is found with a urine test for protein (often an albumin-to-creatinine ratio) and a blood test for eGFR. Results must stay abnormal for more than 3 months to confirm it.',
      'Diabetes and high blood pressure cause more than 8 in 10 new cases of kidney failure in Malaysia. People with either should have their kidneys checked at least once a year.',
      'Protect your kidneys by controlling blood pressure and sugar, avoiding regular anti-inflammatory painkillers and unregistered herbal products, cutting salt, and not smoking.',
    ],
    sections: [
      { id: 'foam', h: 'Kencing berbuih: when is foamy urine a problem?', tocLabel: 'Foamy urine', html: `<p><strong>Usually harmless:</strong></p>
<ul>
<li>a fast, forceful stream</li>
<li>concentrated, dark urine when you haven’t drunk enough</li>
<li>toilet cleaner left in the bowl</li>
</ul>
<p>Occasional foam that clears with one flush is usually normal.</p>
<p><strong>Possibly protein in the urine (proteinuria):</strong> damaged kidneys can let protein leak into the urine, which makes it froth. Diabetes, high blood pressure, lupus and chronic kidney disease can all cause this.</p>
<p><strong>See a doctor if foamy urine:</strong></p>
<ul>
<li>happens regularly or is getting worse</li>
<li>needs more than one flush to clear, or looks thick and white</li>
<li>lasts more than a few days</li>
<li>comes with swollen ankles, feet or hands, unusual tiredness, nausea or poor appetite</li>
</ul>
<p>The first step is a simple urine test. If you also see blood in your urine, see our guide to <a href="/articles/kencing-berdarah-blood-in-urine-malaysia/">kencing berdarah</a>.</p>` },
      { id: 'ckd', h: 'What is chronic kidney disease?', tocLabel: 'Kidney disease', html: `<p>Your kidneys filter about 140 litres of blood a day, removing waste as urine. They also balance fluids and minerals and make hormones that control blood pressure, red blood cell production and bone health.</p>
<p><strong>Chronic kidney disease (CKD)</strong> means the kidneys have been damaged or working less well for more than 3 months. Malaysia’s Ministry of Health calls it “common but silent”. Most people have no symptoms until the disease is advanced.</p>
<p><strong>Later symptoms</strong> can include swollen ankles or feet, tiredness, itchy skin, nausea, poor appetite, changes in how often you pass urine, breathlessness, cramps and weight loss.</p>
<p><strong>Malaysia’s numbers:</strong></p>
<ul>
<li>A national survey estimated that about <strong>15 in 100 adults</strong> had CKD in 2018, up from 9 in 100 in 2011. The health minister said in 2026 that more than 5 million Malaysians have it.</li>
<li>More than <strong>55,000 people</strong> were on dialysis at the end of 2024, and about 9,500 to 10,000 people start dialysis every year.</li>
<li><strong>Diabetes</strong> caused 55% and <strong>high blood pressure</strong> 31% of new cases of kidney failure in 2024.</li>
</ul>` },
      { id: 'tests', h: 'Kidney tests and what the results mean', tocLabel: 'Tests', html: `<p>Malaysia’s guideline on CKD recommends two simple tests:</p>
<ul>
<li><strong>Urine test for protein:</strong> a dipstick test, or a more sensitive <strong>albumin-to-creatinine ratio (ACR)</strong> on an early-morning urine sample, especially if you have diabetes.</li>
<li><strong>Blood test for eGFR</strong> (estimated glomerular filtration rate), worked out from your creatinine level, age and sex. It shows how well your kidneys filter. Creatinine on its own isn’t enough.</li>
</ul>
<p>A positive urine test can be temporary, for example after hard exercise, during a urine infection, fever or a period, or in pregnancy. So abnormal results are <strong>repeated within 3 months</strong> to confirm them.</p>
<div class="table-wrap"><table>
<thead><tr><th>Stage</th><th>eGFR (ml/min/1.73m²)</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>G1</td><td>90 or more</td><td>Normal filtering, but with signs of kidney damage such as protein in the urine</td></tr>
<tr><td>G2</td><td>60 to 89</td><td>Mildly reduced</td></tr>
<tr><td>G3a</td><td>45 to 59</td><td>Mildly to moderately reduced</td></tr>
<tr><td>G3b</td><td>30 to 44</td><td>Moderately to severely reduced</td></tr>
<tr><td>G4</td><td>15 to 29</td><td>Severely reduced</td></tr>
<tr><td>G5</td><td>Below 15</td><td>Kidney failure</td></tr>
</tbody></table></div>
<p><strong>Urine protein (ACR)</strong> is graded as A1 (below 3mg/mmol, normal to mildly raised), A2 (3 to 30mg/mmol, moderately raised) or A3 (above 30mg/mmol, severely raised). The higher the protein and the lower the eGFR, the greater the risk. See our guide to <a href="/articles/blood-test-results-explained-malaysia/">blood test results</a>.</p>
${figure('blood-sample', 'A blood sample tube held for testing', 'A blood test for eGFR and a urine test for protein are the main checks for kidney disease.')}` },
      { id: 'pain', h: 'Sakit buah pinggang: is it kidney pain?', tocLabel: 'Kidney pain', html: `<p>Kidney disease itself is usually painless. Most lower back pain comes from muscles, joints or the spine rather than the kidneys. See our guide to <a href="/articles/slipped-disc-sciatica-malaysia/">back pain and sciatica</a>.</p>
<p>Pain from the kidneys is usually felt in the side or back, just under the ribs. <strong>See a doctor urgently</strong> if this kind of pain comes with fever, shivering, vomiting or blood in the urine, as it may be a kidney infection. Sudden, severe, coming-and-going pain that spreads to the groin is often a <a href="/articles/kidney-stones-batu-karang-malaysia/">kidney stone</a>.</p>` },
      { id: 'screening', h: 'Who should be checked?', tocLabel: 'Who should be checked', html: `<p><strong>At least once a year</strong>, according to Malaysia’s guideline, if you have:</p>
<ul>
<li><a href="/articles/normal-blood-sugar-level-malaysia/">diabetes</a></li>
<li><a href="/articles/blood-pressure-cholesterol-malaysia/">high blood pressure</a></li>
</ul>
<p><strong>Checking may also be worthwhile</strong> if you:</p>
<ul>
<li>are over 65</li>
<li>are obese, or have heart disease or metabolic syndrome</li>
<li>have a family history of kidney disease</li>
<li>have <a href="/articles/gout-malaysia/">gout</a>, lupus, kidney stones or an <a href="/articles/enlarged-prostate-psa-test-malaysia/">enlarged prostate</a></li>
<li>take painkillers or stomach acid medicines (PPIs) long term</li>
<li>have had blood or protein found in your urine by chance</li>
</ul>
<p>Health screening schemes such as <a href="/articles/peka-b40-malaysia/">PeKa B40</a> and the <a href="/articles/free-health-screening-malaysia/">SOCSO health screening programme</a> include blood and urine tests. Check what your scheme covers.</p>` },
      { id: 'protect', h: 'How to protect your kidneys', tocLabel: 'Protect your kidneys', html: `<ul>
<li><strong>Control blood pressure.</strong> Malaysia’s guideline sets lower targets for people with diabetes or protein in the urine, often around 130/80. Your doctor will set yours.</li>
<li><strong>Control blood sugar.</strong> An HbA1c of about 7% is a common target for people with diabetes and kidney disease, adjusted for each person.</li>
<li><strong>Take kidney-protecting medicines if prescribed.</strong> ACE inhibitors or ARBs, and SGLT2 inhibitors, can slow kidney damage in many people with diabetes or protein in the urine. Doctors adjust doses of other medicines to your kidney function.</li>
<li><strong>Avoid regular anti-inflammatory painkillers</strong> such as ibuprofen, naproxen, diclofenac, mefenamic acid and celecoxib. Ask a pharmacist about safer options. See our guide to <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkillers</a>.</li>
<li><strong>Be careful with herbal products.</strong> Some herbs containing aristolochic acid have caused kidney disease, and products can be contaminated with heavy metals. “Natural” doesn’t mean safe for the kidneys.</li>
<li><strong>Cut salt</strong> to less than 2,400mg of sodium a day, about a teaspoon of salt. Avoid very high-protein diets if your kidneys are already affected.</li>
<li><strong>Stop smoking</strong>, stay active and keep to a healthy weight.</li>
</ul>
<p><strong>What about water?</strong> Staying hydrated is sensible, but drinking extra water doesn’t prevent kidney disease, and too much can lower your blood sodium. If you have advanced kidney disease, your doctor may limit how much you drink.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Get your kidneys checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can do a urine test and an eGFR blood test, check your blood pressure and sugar, and refer you to a kidney specialist (nephrologist) if needed. Our directory lists clinics across Malaysia, including those open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/peka-b40-clinics/', 'PeKa B40 clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['Is foamy urine a sign of kidney problems?', 'Occasional foam is usually harmless. Foam that keeps coming back, needs more than one flush or comes with swelling can mean protein in the urine, and should be checked with a urine test.'],
      ['What is the English for kencing berbuih?', 'Foamy or frothy urine.'],
      ['What is a normal eGFR?', 'An eGFR of 90 or more is normal. A result below 60 for more than 3 months means chronic kidney disease, as does a higher eGFR with protein in the urine.'],
      ['Can kidney disease be cured?', 'Chronic kidney disease usually can’t be reversed, but controlling blood pressure and sugar and the right medicines can slow it down and prevent kidney failure.'],
      ['Does drinking more water protect the kidneys?', 'Staying hydrated is sensible, but extra water doesn’t prevent kidney disease, and too much can be harmful. People with advanced kidney disease may need to limit fluids.'],
      ['Do medicines damage the kidneys?', 'Regular anti-inflammatory painkillers and some herbal products can. Many other medicines, including some for blood pressure and diabetes, protect the kidneys. Your doctor adjusts doses to your kidney function.'],
      ['How often should I check my kidneys if I have diabetes?', 'At least once a year, with a urine protein test and an eGFR blood test.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical practice guideline: management of chronic kidney disease in adults, 2nd edition (2018)', 'https://mymahtas2.moh.gov.my/files/CPG%20Management%20of%20Chronic%20Kidney%20%20Disease%20(Second%20Edition).pdf'],
      ['Malaysian Dialysis and Transplant Registry — 32nd report, chapter 1: kidney replacement therapy in Malaysia 2024 (Aug 2025)', 'https://msn.org.my/nrr/wp-content/uploads/2026/08/Chapter-1-All-Kidney-Replacement-in-Malaysia-2024-21-August-2025.pdf'],
      ['Malaysian Dialysis and Transplant Registry — 32nd report, chapter 2: dialysis in Malaysia 2024 (Oct 2025)', 'https://msn.org.my/nrr/wp-content/uploads/2026/08/Chapter-2-Dialysis-in-Malaysia-2024-7-October-2025.pdf'],
      ['Saminathan et al — Prevalence of chronic kidney disease in Malaysia, BMC Nephrology (2020)', 'https://repository.nih.gov.my/entities/publication/8e8adc0e-1d9d-485d-baa1-83751d05448c/full'],
      ['Utusan Malaysia — Lebih lima juta rakyat Malaysia menderita penyakit buah pinggang (Jan 2026)', 'https://www.utusan.com.my/nasional/2026/01/parlimen-lebih-lima-juta-rakyat-malaysia-menderita-penyakit-buah-pinggang/'],
      ['CodeBlue — Malaysia second-fastest rising kidney failures globally (Jan 2020)', 'https://codeblue.galencentre.org/2020/01/malaysia-second-fastest-rising-kidney-failures-globally/'],
      ['Cleveland Clinic — Foamy urine (Sep 2024)', 'https://my.clevelandclinic.org/health/symptoms/foamy-urine'],
      ['NIDDK — What is chronic kidney disease? (Feb 2025)', 'https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/what-is-chronic-kidney-disease'],
      ['NIDDK — Chronic kidney disease tests and diagnosis', 'https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/tests-diagnosis'],
      ['NIDDK — Your kidneys and how they work', 'https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work'],
      ['NHS — Chronic kidney disease symptoms (Mar 2023)', 'https://www.nhs.uk/conditions/kidney-disease/symptoms/'],
      ['NHS — Kidney infection (Feb 2025)', 'https://www.nhs.uk/conditions/kidney-infection/'],
      ['NHS — Back pain (Mar 2026)', 'https://www.nhs.uk/conditions/back-pain/'],
      ['National Kidney Foundation of Malaysia — FAQs', 'https://nkf.org.my/prevention/education-tools-resources/faqs/'],
      ['National Kidney Foundation (US) — 5 common myths about kidney disease prevention (2018)', 'https://www.kidney.org/news-stories/5-common-myths-about-kidney-disease-prevention'],
    ],
    related: ['kencing-berdarah-blood-in-urine-malaysia', 'normal-blood-sugar-level-malaysia', 'blood-pressure-cholesterol-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'asthma-asma-inhaler-malaysia',
    title: 'Asma (asthma) in Malaysia: inhalers, what to do in an attack, and keeping it under control',
    crumb: 'Asma (asthma) and inhalers',
    desc: 'Asthma (asma, lelah) explained: symptoms and triggers including haze, reliever and preventer inhalers, why a blue inhaler alone isn’t enough, inhaler technique, and what to do in an asthma attack.',
    excerpt: 'More than 1.4 million Malaysian adults have been diagnosed with asthma, and many more don’t know they have it. How asthma is diagnosed, the difference between reliever and preventer inhalers, how to use them properly, what to do in an attack, and when to get help.',
    standfirst: 'Asthma (asma, often called lelah) is a long-term condition in which the airways become inflamed and narrow, causing wheezing, coughing, chest tightness and breathlessness. With the right inhalers used the right way, most people can keep it under control. Malaysian and international guidelines now agree that relying on a blue reliever inhaler alone is risky.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Asthma', 'Inhaler', 'Asma'],
    image: 'medic-stethoscope', imageAlt: 'A doctor holding a stethoscope',
    keyPoints: [
      'The 2023 National Health and Morbidity Survey found more than 1.4 million Malaysian adults have diagnosed asthma, and about 3 in 10 people with asthma don’t know they have it.',
      'Malaysia’s 2024 adult guideline says a reliever (SABA, such as salbutamol) shouldn’t be used on its own. Everyone with asthma should have treatment that includes an inhaled steroid.',
      'Using a reliever more than twice a week, or waking at night with asthma, is a sign that your asthma isn’t controlled. See your doctor.',
      'Inhaler technique matters. Shake the inhaler, breathe out fully, press as you start to breathe in, use a spacer, and rinse your mouth after a steroid inhaler.',
      'In an attack, sit up and use your reliever as your action plan says. Call 999 if you aren’t improving, are getting worse, or can’t speak in sentences.',
    ],
    sections: [
      { id: 'what', h: 'What is asthma?', tocLabel: 'What it is', html: `<p>In asthma, the airways in the lungs are sensitive and inflamed. When they react to a trigger, they tighten and produce extra mucus, making it hard to breathe.</p>
<p><strong>Symptoms</strong> come and go, and are often worse at night or during or after exercise:</p>
<ul>
<li>wheezing (a whistling sound when breathing)</li>
<li>coughing, especially at night</li>
<li>chest tightness</li>
<li>shortness of breath (<em>semput</em> or <em>sesak nafas</em>)</li>
</ul>
<p><strong>Common triggers in Malaysia:</strong> colds and other viral infections, house dust mites, pets, haze, smoke, vaping, strong smells such as perfume and cleaning products, exhaust fumes, cold air (including air-conditioning) and exercise.</p>
<p><strong>In Malaysia:</strong> more than 1.4 million adults have diagnosed asthma, and almost half a million children aged 6 to 17. Among children with asthma, 1 in 2 had at least one attack in the past year.</p>` },
      { id: 'diagnosis', h: 'How asthma is diagnosed', tocLabel: 'Diagnosis', html: `<p>Your doctor will ask about your symptoms and listen to your chest. The preferred test is <strong>spirometry</strong>, where you blow hard into a machine that measures how much and how fast you can breathe out. If your breathing improves by a set amount after a reliever inhaler, that supports asthma.</p>
<p>A <strong>peak flow meter</strong> can also help. Readings that vary a lot from day to day, or improve with treatment, point to asthma. Asthma can be missed, so see a doctor if you often cough at night, wheeze or get breathless with colds.</p>` },
      { id: 'inhalers', h: 'Reliever and preventer inhalers', tocLabel: 'Inhalers', html: `<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>What it does</th><th>Generic names</th></tr></thead>
<tbody>
<tr><td><strong>Reliever (SABA)</strong></td><td>Opens the airways within minutes. Doesn’t treat the inflammation.</td><td>Salbutamol, terbutaline</td></tr>
<tr><td><strong>Preventer (inhaled steroid, ICS)</strong></td><td>Calms the inflammation over time, so attacks are less likely. Must be used every day, even when well.</td><td>Budesonide, beclometasone, fluticasone, ciclesonide</td></tr>
<tr><td><strong>Combination (ICS plus long-acting reliever)</strong></td><td>A preventer and a long-acting airway opener in one inhaler. Some can also be used as a reliever.</td><td>Budesonide-formoterol, beclometasone-formoterol, fluticasone-salmeterol</td></tr>
</tbody></table></div>
<p><strong>Why a blue reliever alone isn’t enough:</strong> the Global Initiative for Asthma no longer recommends treating asthma with a short-acting reliever alone, because it raises the risk of severe attacks and death. Using 3 or more reliever canisters a year raises the risk of severe attacks. Malaysia’s 2024 adult guideline agrees that a reliever shouldn’t be used alone and that everyone with asthma should have treatment containing an inhaled steroid.</p>
<p>Many doctors now prescribe a single <strong>budesonide-formoterol or beclometasone-formoterol inhaler</strong> used both as a daily preventer and as a reliever. Others prescribe a daily preventer with a separate reliever. Follow the plan your doctor gives you, and don’t change your inhalers without advice.</p>
${figure('medic-stethoscope', 'A doctor holding a stethoscope', 'A preventer inhaler only works if it is used every day, even when you feel well.')}` },
      { id: 'technique', h: 'How to use your inhaler properly', tocLabel: 'Inhaler technique', html: `<p>Many people use their inhaler incorrectly. Malaysia’s guideline lists the most common mistakes: not breathing out fully first, pressing the canister before breathing in, breathing out into the device, not holding it upright, and not holding the breath for long enough.</p>
<p><strong>Metered-dose inhaler (spray):</strong></p>
<ol>
<li>Shake the inhaler and remove the cap.</li>
<li>Breathe out fully, away from the inhaler.</li>
<li>Seal your lips around the mouthpiece, or the spacer.</li>
<li>Press the canister once as you start to breathe in slowly and deeply.</li>
<li>Hold your breath for up to 10 seconds, or as long as is comfortable.</li>
<li>Wait about 30 seconds before a second puff.</li>
</ol>
<ul>
<li><strong>Use a spacer</strong>, especially with a steroid inhaler. It helps more medicine reach the lungs. If you don’t have one, a homemade spacer made from a plastic bottle can be used in an emergency, although it isn’t as effective.</li>
<li><strong>Dry powder inhalers</strong> need a fast, deep breath in, and shouldn’t be shaken or breathed into.</li>
<li><strong>Rinse your mouth</strong> with water and spit after using a steroid inhaler, to reduce the risk of a sore mouth, hoarse voice and thrush.</li>
<li><strong>Is it empty?</strong> Check the dose counter, or count the doses used. Shaking can be misleading, because propellant remains after the medicine runs out.</li>
</ul>
<p>Ask your doctor, nurse or pharmacist to check your technique at every review.</p>` },
      { id: 'attack', h: 'What to do in an asthma attack', tocLabel: 'Asthma attack', html: `<p><strong>Signs of an attack:</strong> your reliever isn’t helping or you need it more and more, you are wheezing, coughing or very breathless, or you can’t speak, eat or sleep normally.</p>
<p><strong>If you use a blue reliever inhaler</strong> (UK guidance):</p>
<ol>
<li>Sit up straight and try to stay calm.</li>
<li>Take 1 puff of your reliever every 30 to 60 seconds, up to 10 puffs, using a spacer if you have one.</li>
<li><strong>Call <a href="tel:999">999</a></strong> if you feel worse at any point, or don’t feel better after 10 puffs.</li>
<li>If the ambulance hasn’t arrived after 10 minutes, repeat step 2.</li>
</ol>
<p><strong>If you use a combined preventer-and-reliever inhaler</strong> (such as budesonide-formoterol), follow your action plan. UK guidance is 1 puff every 1 to 3 minutes, up to 6 puffs, then call 999 if you aren’t better.</p>
<p><strong>Call <a href="tel:999">999</a> straight away</strong> if the person can only speak in single words, is too breathless to talk, has blue or grey lips, or is drowsy or confused.</p>
<p>Even if you recover at home, see a doctor the same day, as an attack means your treatment needs reviewing.</p>` },
      { id: 'control', h: 'Is your asthma under control?', tocLabel: 'Asthma control', html: `<p>Over the past 4 weeks, have you:</p>
<ul>
<li>had daytime symptoms more than twice a week?</li>
<li>woken at night because of your asthma?</li>
<li>needed your reliever more than twice a week?</li>
<li>had to limit your activities because of your asthma?</li>
</ul>
<p>If you answered yes to any of these, your asthma may not be well controlled. See your doctor. Ask for a <strong>written asthma action plan</strong> that tells you what to take each day, how to spot when you are getting worse, and what to do in an attack. Malaysia’s guideline recommends a review every 3 to 6 months.</p>
<ul>
<li><strong>Haze:</strong> on days when the Air Pollutant Index is unhealthy, stay indoors where possible, keep taking your medicines and see a doctor promptly if your asthma gets worse. See our <a href="/articles/haze-air-quality-klang-valley/">haze guide</a>.</li>
<li><strong>Smoking and vaping</strong> make asthma worse and increase the risk of attacks.</li>
<li><strong>Flu and pneumococcal vaccines</strong> may be recommended. See our guides to the <a href="/articles/flu-vaccine-malaysia/">flu vaccine</a> and <a href="/articles/pneumonia-pneumococcal-vaccine-malaysia/">pneumococcal vaccine</a>.</li>
</ul>` },
      { id: 'children', h: 'Children, pregnancy and common myths', tocLabel: 'Children and myths', html: `<ul>
<li><strong>Children under 6</strong> should use a spacer with a face mask, and older children a spacer with a mouthpiece. The 2024 Malaysian children’s consensus discourages nebulisers at home. Give a copy of the action plan to your child’s school or nursery.</li>
<li><strong>Growth:</strong> low to moderate doses of inhaled steroids are considered safe for children. Children on high doses need their growth monitored.</li>
<li><strong>Pregnancy:</strong> keep taking your preventer. Uncontrolled asthma is a greater risk to you and your baby than the inhaler.</li>
<li><strong>“Inhalers are addictive.”</strong> They aren’t. Using them correctly keeps asthma under control.</li>
<li><strong>“Steroid inhalers are dangerous.”</strong> Used as recommended, inhaled steroids are unlikely to cause lasting side effects, because only a small dose reaches the rest of the body.</li>
<li><strong>“I only need my inhaler when I’m ill.”</strong> A preventer works only if it is used every day, even when you feel well.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for an asthma review',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can confirm asthma, review your inhalers and technique, and write an asthma action plan. For a severe attack, call 999. Our directory lists clinics across Malaysia, including clinics open late and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is asma in English?', 'Asthma. Many Malaysians also call it lelah, although lelah can also mean tiredness.'],
      ['What is the difference between a reliever and a preventer inhaler?', 'A reliever (such as salbutamol) opens the airways quickly during symptoms. A preventer (an inhaled steroid) calms the inflammation over time and must be used every day.'],
      ['Can I use only a blue inhaler for asthma?', 'Current Malaysian and international guidelines say a short-acting reliever shouldn’t be used on its own. Treatment should include an inhaled steroid. Ask your doctor.'],
      ['What should I do in an asthma attack?', 'Sit up and take your reliever as your action plan says. With a blue reliever, UK guidance is 1 puff every 30 to 60 seconds up to 10 puffs. Call 999 if you are not improving or are getting worse.'],
      ['Are steroid inhalers safe?', 'Yes, when used as recommended. Only a small dose reaches the rest of the body. Rinse your mouth afterwards to prevent a sore mouth or thrush.'],
      ['Can asthma go away?', 'Symptoms can improve, and some children grow out of them. Asthma can return, so keep your action plan and get symptoms checked if they come back.'],
      ['How do I know if my inhaler is empty?', 'Check the dose counter, or count the puffs used. Shaking it can be misleading.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical practice guideline: management of asthma in adults, 2nd edition (2024)', 'https://mymahtas2.moh.gov.my/files/e-CPG_Management_of_Asthma_in_Adults_(Second_Edition)_-_11_4_25.pdf'],
      ['Ministry of Health Malaysia — Quick reference: management of asthma in adults, 2nd edition (2025)', 'https://mymahtas2.moh.gov.my/files/QR_Management_of_Asthma_in_Adults_(Second_Edition)_-18_4_25.pdf'],
      ['Malaysian Thoracic Society — Management of childhood asthma: 2024 consensus statement, 4th edition', 'https://irep.iium.edu.my/124702/1/124702_Clinical%20practice%20guidelines%20-%20management%20of%20childhood%20asthma.pdf'],
      ['Institute for Public Health — National Health and Morbidity Survey 2023: key findings', 'https://iku.nih.gov.my/images/nhms2023/key-findings-nhms-2023.pdf'],
      ['Global Initiative for Asthma — Summary guide 2026', 'https://ginasthma.org/wp-content/uploads/2026/07/GINA-Summary-Guide-2026-WEB-WMS.pdf'],
      ['NHS — Asthma attacks (Apr 2025)', 'https://www.nhs.uk/conditions/asthma/asthma-attack/'],
      ['NHS — How and when to use salbutamol inhalers (Feb 2025)', 'https://www.nhs.uk/medicines/salbutamol-inhaler/how-and-when-to-use-salbutamol-inhalers/'],
      ['NHS — Common questions about beclometasone inhalers (2023)', 'https://www.nhs.uk/medicines/beclometasone-inhalers/common-questions-about-beclometasone-inhalers/'],
      ['Asthma + Lung UK — Asthma attacks (Jun 2024)', 'https://www.asthmaandlung.org.uk/conditions/asthma/asthma-attacks'],
      ['Asthma + Lung UK — Steroid preventer inhalers (Apr 2025)', 'https://www.asthmaandlung.org.uk/conditions/asthma/preventer-inhalers'],
      ['National Jewish Health — FAQs about metered-dose inhalers', 'https://www.nationaljewish.org/healthinfo/medications/devices/metered-dose/hfa-propellant'],
      ['Ministry of Health Malaysia, infosihat — Jerebu', 'https://infosihat.moh.gov.my/isu-semasa/51-jerebu.html'],
      ['The Star — Lung issues among top silent killers (Sep 2026)', 'https://www.thestar.com.my/news/nation/2026/09/15/lung-issues-among-top-silent-killers'],
    ],
    related: ['haze-air-quality-klang-valley', 'persistent-cough-malaysia', 'allergies-resdung-antihistamines-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'platelet-count-dengue-malaysia',
    title: 'Platelet count (bacaan platelet): normal range, low platelets and what it means in dengue',
    crumb: 'Platelet count and dengue',
    desc: 'Normal platelet count, what platelet rendah means, causes of low platelets, how platelets change in dengue, NS1 and IgM tests, papaya leaf and other myths, and when to go to hospital.',
    excerpt: 'Worried about a low platelet count? What the numbers mean, the many causes besides dengue, why Malaysian dengue guidelines watch haematocrit more closely than platelets, which dengue test to do when, and the remedies that don’t change the outcome.',
    standfirst: 'Platelets are the blood cells that help your blood clot. A normal count is roughly 150,000 to 400,000 per microlitre, although lab ranges vary. In Malaysia, a falling platelet count is best known as a sign of dengue. But in dengue, the platelet number alone doesn’t predict how ill you will get. Here is how to read the result and what matters more.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Platelet count', 'Thrombocytopenia', 'Dengue'],
    image: 'blood-sample', imageAlt: 'A blood sample tube being held for testing',
    keyPoints: [
      'A normal platelet count is roughly 150,000 to 400,000 per microlitre (shown as 150 to 400 ×10⁹/L), although ranges vary between labs.',
      'Serious spontaneous bleeding is unusual until platelets fall below about 20,000. Above 50,000, the bleeding risk is minimal.',
      'In dengue, platelets usually fall around day 3 to 5 of fever, often as the fever settles. Malaysia’s guideline says the platelet count doesn’t match how severe the illness is. A rising haematocrit with falling platelets is the warning sign.',
      'An NS1 test works best in the first 5 days of fever. IgM antibodies usually show up from day 5, so an early negative IgM doesn’t rule dengue out.',
      'Papaya leaf, crab soup, isotonic drinks and similar remedies have no robust evidence of changing the course of dengue. Fluids and monitoring are what count.',
    ],
    sections: [
      { id: 'normal', h: 'What is a normal platelet count?', tocLabel: 'Normal range', html: `<p>Platelets are tiny cells made in the bone marrow. They stick to damaged blood vessels and clump together to form clots. Each platelet lives about 7 to 10 days.</p>
<p>A normal count is roughly <strong>150,000 to 400,000 per microlitre (µL)</strong> of blood. Lab reports often write this as <strong>150 to 400 ×10⁹/L</strong>, so a result of “90” means 90,000. Reference ranges differ slightly between labs, so compare your result with the range printed on your report.</p>
<div class="table-wrap"><table>
<thead><tr><th>Platelet count (per µL)</th><th>What it generally means</th></tr></thead>
<tbody>
<tr><td>Above about 450,000</td><td>High. Usually a reaction to infection, inflammation, bleeding or low iron</td></tr>
<tr><td>About 150,000 to 400,000</td><td>Normal</td></tr>
<tr><td>50,000 to 150,000</td><td>Low, with minimal bleeding risk</td></tr>
<tr><td>20,000 to 50,000</td><td>Minor bleeding is possible after an injury</td></tr>
<tr><td>Below 20,000</td><td>Spontaneous bleeding is possible</td></tr>
<tr><td>Below 5,000</td><td>Risk of severe, possibly life-threatening bleeding</td></tr>
</tbody></table></div>
<p>Platelet results are one part of a <a href="/articles/blood-test-results-explained-malaysia/">full blood count</a>, and your doctor will read them alongside your other results and how you are.</p>` },
      { id: 'causes', h: 'Causes of a low platelet count (platelet rendah)', tocLabel: 'Causes', html: `<p>A low platelet count is called <strong>thrombocytopenia</strong>. Dengue is a common cause in Malaysia, but there are many others:</p>
<ul>
<li><strong>Other viral infections</strong>, including hepatitis C, HIV, glandular fever (EBV) and flu</li>
<li><strong>Medicines</strong>, such as heparin, quinine, co-trimoxazole, rifampicin and vancomycin. A few vaccines can occasionally cause a temporary drop.</li>
<li><strong>Immune thrombocytopenia (ITP)</strong>, where the immune system destroys platelets</li>
<li><strong>Pregnancy:</strong> a mild drop late in pregnancy (gestational thrombocytopenia) affects about 4 to 12 in 100 pregnancies. It usually stays above 70,000, is harmless to the baby, and resolves within about 6 weeks of birth.</li>
<li><strong>Liver disease</strong>, where an enlarged spleen holds on to platelets, and heavy alcohol use</li>
<li><strong>Low vitamin B12 or folate</strong></li>
<li><strong>Bone marrow conditions</strong>, including leukaemia, lymphoma and aplastic anaemia, and chemotherapy</li>
</ul>
<p><strong>A false low result:</strong> in about 1 in 1,000 samples, platelets clump together in the collection tube and the machine undercounts them. This is called pseudothrombocytopenia. A blood film or a repeat test in a different tube confirms it, and it needs no treatment.</p>
${figure('blood-sample', 'A tube of blood ready for laboratory testing', 'A single low result may need repeating, especially if you feel well.')}` },
      { id: 'dengue', h: 'Platelets in dengue', tocLabel: 'Platelets in dengue', html: `<p>Malaysia’s clinical practice guideline on dengue in adults describes a typical pattern:</p>
<ol>
<li><strong>Early fever:</strong> the white cell count and platelets are usually normal.</li>
<li>The white cell count falls first, then <strong>platelets start to fall</strong>.</li>
<li><strong>The critical phase</strong> often begins after day 3 of fever, or as the fever comes down, and lasts 24 to 48 hours. This is when the blood vessels can leak fluid, and when platelets are usually lowest.</li>
<li>In recovery, platelets <strong>rise again</strong>.</li>
</ol>
<p><strong>Why the platelet number isn’t everything:</strong> the guideline states that there is no correlation between disease severity and platelet count, and that a low count doesn’t predict bleeding. What doctors watch most closely is the <strong>haematocrit</strong> (HCT), which rises when fluid leaks out of the blood vessels. A rising haematocrit together with a rapid fall in platelets is a warning sign.</p>
<ul>
<li><strong>Monitoring:</strong> adults with dengue are usually reviewed daily from day 3 of illness until they have been free of fever for 24 to 48 hours without fever medicine. Children have a daily full blood count until the critical phase is over.</li>
<li><strong>Children:</strong> the Malaysian children’s guideline treats a platelet count falling to 100,000 or below, with a 20% rise in haematocrit, as a warning sign.</li>
<li><strong>Platelet transfusion:</strong> the guidelines say there is no role for routine preventive platelet transfusion in dengue. It is reserved for situations such as surgery or invasive procedures.</li>
</ul>
<p>See our guide to <a href="/articles/dengue-klang-valley-first-three-days/">the first three days of dengue</a> for symptoms and early care.</p>` },
      { id: 'tests', h: 'Dengue tests: NS1, IgM and IgG', tocLabel: 'Dengue tests', html: `<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>Best time</th><th>Good to know</th></tr></thead>
<tbody>
<tr><td><strong>NS1 antigen</strong></td><td>Days 1 to 5 of fever</td><td>Picks up 75 to 97% of first infections, but only 60 to 70% of repeat infections. Less reliable from day 4 to 5.</td></tr>
<tr><td><strong>IgM antibody</strong></td><td>From day 5</td><td>Positive in about 80% after day 5 and 93 to 99% from days 6 to 10. A negative result before day 5 to 7 doesn’t rule dengue out.</td></tr>
<tr><td><strong>IgG antibody</strong></td><td>If IgM is still negative after day 7</td><td>Can suggest a past or repeat infection</td></tr>
<tr><td><strong>Combined rapid test</strong></td><td>As soon as dengue is suspected</td><td>NS1 with IgM and IgG together picks up about 93% of cases. Done with a full blood count.</td></tr>
</tbody></table></div>
<p>A positive test confirms dengue, but a negative early test doesn’t always rule it out. If you still have symptoms, follow your doctor’s advice on repeat tests and daily blood counts.</p>` },
      { id: 'myths', h: 'Papaya leaf, crab soup and other remedies', tocLabel: 'Remedies and myths', html: `<p>Malaysia’s adult dengue guideline lists papaya leaf, cactus, crab or padi frog soup, bitter gourd, porcupine bezoar, tawa-tawa, pegaga and commercial isotonic drinks as remedies <strong>without robust evidence</strong>. It notes that changing the platelet count alone doesn’t alter the course of dengue.</p>
<p>In 2016, the Ministry of Health said local studies found platelets rose after 3 days of papaya leaf juice, and that the juice wasn’t toxic. But ministry hospitals don’t provide it, and it doesn’t treat the leaking blood vessels that make dengue dangerous.</p>
<p><strong>What helps:</strong> drinking enough. The Malaysian guideline advises more than 2 litres a day of fluids such as milk, juice, oral rehydration salts and barley water, not plain water alone.</p>
<p><strong>Avoid:</strong></p>
<ul>
<li>aspirin, mefenamic acid, ibuprofen and other anti-inflammatory painkillers, and steroids</li>
<li>injections, including injections into the muscle</li>
<li>massage and cupping</li>
<li>antibiotics, which don’t work against dengue</li>
</ul>
<p>Use paracetamol for fever, with no more than 4g a day for adults. See our guide to <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkillers</a> and <a href="/articles/normal-body-temperature-fever-adults-malaysia/">fever in adults</a>.</p>` },
      { id: 'hospital', h: 'When to go to hospital', tocLabel: 'When to go to hospital', html: `<p><strong>Go to a hospital emergency department straight away, or call <a href="tel:999">999</a>, if someone with dengue or a low platelet count has:</strong></p>
<ul>
<li>red spots or patches on the skin, nosebleeds or bleeding gums</li>
<li>vomiting blood, or black stools</li>
<li>unusually heavy periods or vaginal bleeding</li>
<li>vomiting or diarrhoea more than 3 times in 24 hours</li>
<li>tummy pain</li>
<li>drowsiness, restlessness or irritability</li>
<li>pale, cold or clammy skin</li>
<li>difficulty breathing</li>
</ul>
<p>Watch most closely <strong>as the fever comes down</strong>, because that is when dengue can become dangerous. If you have a low platelet count without a clear cause, such as dengue, see a doctor to look for the reason.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for a blood test',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can do a dengue test and a full blood count, often with results the same day, and arrange daily checks if you have dengue. Our directory lists clinics across Malaysia, including clinics open late, at weekends and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/open-sunday/', 'Clinics open on Sunday'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['What is a normal platelet count?', 'Roughly 150,000 to 400,000 per microlitre, written as 150 to 400 ×10⁹/L on many reports. Lab ranges vary slightly.'],
      ['What platelet count is dangerous?', 'Serious spontaneous bleeding becomes possible below about 20,000, and the risk is highest below 5,000. Above 50,000, the bleeding risk is minimal.'],
      ['What platelet count needs hospital admission in dengue?', 'There isn’t one number. Malaysian guidelines look at warning signs and a rising haematocrit with falling platelets, rather than the platelet count alone.'],
      ['When do platelets drop in dengue?', 'Usually around day 3 to 5 of fever, often as the fever starts to come down. They rise again during recovery.'],
      ['Does papaya leaf juice help dengue?', 'Some local studies found platelets rose, but Malaysia’s guideline says there is no robust evidence that it changes the course of dengue. Fluids and medical monitoring matter more.'],
      ['When should I do an NS1 test?', 'In the first 5 days of fever. From day 5, an IgM antibody test is more useful.'],
      ['Can I have a low platelet count without dengue?', 'Yes. Other infections, medicines, immune conditions, pregnancy, liver disease and bone marrow problems can all lower platelets. See a doctor to find the cause.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical practice guideline: management of dengue infection in adults, 3rd edition (2015)', 'https://jknjohor.moh.gov.my/jknj/wp-content/uploads/2023/02/CPG-Dengue-Adult.pdf'],
      ['Ministry of Health Malaysia — Clinical practice guideline: management of dengue in children, 2nd edition (2020)', 'https://mymahtas2.moh.gov.my/files/CPG_Management_of_Dengue_in_Children_06072021.pdf'],
      ['iDengue — Signs and treatment', 'https://idengue.mysa.gov.my/ide_v3/sign.html'],
      ['WHO — Dengue and severe dengue (Aug 2025)', 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue'],
      ['MSD Manual Consumer Version — Overview of thrombocytopenia (Jun 2026)', 'https://www.msdmanuals.com/home/blood-disorders/platelet-disorders/overview-of-thrombocytopenia'],
      ['MSD Manual Consumer Version — Overview of platelet disorders (Jun 2026)', 'https://www.msdmanuals.com/home/blood-disorders/platelet-disorders/overview-of-platelet-disorders'],
      ['MSD Manual Professional Version — Overview of platelet disorders (Jun 2026)', 'https://www.msdmanuals.com/professional/hematology-and-oncology/thrombocytopenia-and-platelet-dysfunction/overview-of-platelet-disorders'],
      ['Cleveland Clinic — Thrombocytopenia (2022)', 'https://my.clevelandclinic.org/health/diseases/14430-thrombocytopenia'],
      ['Journal of Clinical Laboratory Analysis — EDTA-dependent pseudothrombocytopenia (2014)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6807034'],
      ['Cureus — Gestational thrombocytopenia: a review on recent updates (2022)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9010930'],
      ['Free Malaysia Today — Papaya leaf juice safe for dengue patients, says govt (Jan 2016)', 'https://www.freemalaysiatoday.com/category/nation/2016/01/30/papaya-leaf-juice-safe-for-dengue-patients-says-govt'],
    ],
    related: ['dengue-klang-valley-first-three-days', 'blood-test-results-explained-malaysia', 'normal-body-temperature-fever-adults-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'maternity-paternity-leave-cuti-bersalin-malaysia',
    title: 'Cuti bersalin: maternity and paternity leave in Malaysia, who qualifies and how it’s paid',
    crumb: 'Maternity and paternity leave',
    desc: 'Cuti bersalin in Malaysia: 98 days of maternity leave, who gets it paid, when it starts, 7 days of paternity leave, Sabah and Sarawak, civil servants, protection from dismissal, and Budget 2027 changes.',
    excerpt: 'How much maternity and paternity leave you are entitled to in Malaysia, who qualifies for pay, when leave can start, what happens after a stillbirth, how the rules differ for civil servants and in Sabah and Sarawak, and what Budget 2027 proposes.',
    standfirst: 'Under the Employment Act, women working in the private sector in Peninsular Malaysia and Labuan get at least 98 days of maternity leave (cuti bersalin), and married fathers get 7 days of paid paternity leave. The rules apply whatever your salary, but there are conditions for pay. Here is how it works, plus the different rules for civil servants and in Sabah and Sarawak.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: false, medical: false,
    about: ['Maternity leave', 'Paternity leave', 'Employment Act 1955'],
    image: 'mother-child', imageAlt: 'A mother holding her young child',
    keyPoints: [
      'Private-sector employees get at least 98 consecutive days of maternity leave for each birth, whatever their salary, since 1 January 2023.',
      'To be paid, you need at least 90 days’ service in the 9 months before the birth, and you must have worked for that employer in the 4 months before it. Without this, you still get the leave, unpaid.',
      'Married fathers get 7 consecutive days of paid paternity leave after 12 months with the same employer, for up to 5 births.',
      'Leave can start up to 30 days before the birth. A stillbirth or birth from 22 weeks of pregnancy counts as a confinement, with full maternity and paternity leave.',
      'Sabah and Sarawak moved to 98 days of maternity and 7 days of paternity leave from 1 May 2025. Budget 2027 announced up to 98 days per birth for civil servants.',
    ],
    sections: [
      { id: 'maternity', h: 'Maternity leave for private-sector employees', tocLabel: 'Maternity leave', html: `<p>These rules come from section 37 of the <strong>Employment Act 1955</strong>, which covers Peninsular Malaysia and Labuan. Since 1 January 2023, they apply to <strong>all female employees, whatever their salary</strong>, including foreign workers.</p>
<div class="table-wrap"><table>
<thead><tr><th>Rule</th><th>What it means</th></tr></thead>
<tbody>
<tr><td><strong>Length</strong></td><td>At least 98 consecutive days for each birth. Rest days and public holidays count within the 98 days.</td></tr>
<tr><td><strong>Earliest start</strong></td><td>30 days before the birth. Days off taken earlier than that don’t count as maternity leave.</td></tr>
<tr><td><strong>Latest start</strong></td><td>The day after the birth</td></tr>
<tr><td><strong>Pay</strong></td><td>Your ordinary rate of pay, if you meet the conditions below</td></tr>
<tr><td><strong>Going back early</strong></td><td>Possible with a doctor’s certificate that you are fit, and your employer’s agreement</td></tr>
</tbody></table></div>
<p><strong>Conditions for pay (maternity allowance):</strong></p>
<ul>
<li>at least <strong>90 days</strong> of service in the 9 months before the birth, and</li>
<li>you must have worked for that employer at some time in the <strong>4 months</strong> before the birth.</li>
</ul>
<p>If you don’t meet these conditions, you still get the 98 days of leave, but unpaid. The allowance also isn’t payable if you already have <strong>5 or more surviving children</strong> at the time of the birth, although you still get the leave. Many employers offer more than the legal minimum, so check your contract.</p>
<p>If a doctor certifies that you can’t work in late pregnancy, your employer can require you to start leave in the 14 days before the birth.</p>` },
      { id: 'notice', h: 'Telling your employer', tocLabel: 'Notice', html: `<ul>
<li>Within the <strong>60 days before</strong> your due date, tell your employer when your leave will start. You can do this verbally or in writing, but writing is easier to prove.</li>
<li>If you don’t give notice, your allowance can be held back until you do. Late notice for a good reason doesn’t cancel it.</li>
<li>If you leave a job knowing you will give birth within 4 months, you must tell that employer first, or you lose the allowance from them.</li>
</ul>` },
      { id: 'paternity', h: 'Paternity leave (cuti paterniti)', tocLabel: 'Paternity leave', html: `<p>Under section 60FA of the Employment Act, fathers get <strong>7 consecutive days of paid paternity leave</strong> for each birth, at their ordinary rate of pay. To qualify, you must:</p>
<ul>
<li>be <strong>married</strong> to the mother</li>
<li>have worked for the same employer for at least <strong>12 months</strong> immediately before the leave</li>
<li>give notice at least <strong>30 days before</strong> the due date, or as soon as possible after the birth</li>
</ul>
<p>Paternity leave is limited to <strong>5 births</strong> in total.</p>` },
      { id: 'loss', h: 'Stillbirth, miscarriage and premature birth', tocLabel: 'Pregnancy loss', html: `<p>The Employment Act defines a confinement as a birth after at least <strong>22 weeks</strong> of pregnancy, whether the baby is born alive or dead. So:</p>
<ul>
<li>a <strong>stillbirth</strong> from 22 weeks gives the mother full maternity leave and allowance, and the father paternity leave</li>
<li>a <strong>premature birth</strong> from 22 weeks starts maternity leave, which can begin no later than the day after the birth</li>
<li>a <strong>miscarriage</strong> before 22 weeks isn’t covered by maternity leave. Time off is usually taken as sick leave with a <a href="/articles/medical-certificate-mc-malaysia/">medical certificate (MC)</a>.</li>
</ul>
<p>Losing a baby at any stage is very hard. Ask your doctor or clinic about support, and talk to your employer about the time you need. See our guide to <a href="/articles/anxiety-malaysia/">anxiety and mental health support</a>.</p>` },
      { id: 'protection', h: 'Protection from dismissal', tocLabel: 'Protection', html: `<ul>
<li>While you are pregnant or ill because of your pregnancy, your employer can only dismiss you for wilful breach of contract, misconduct or closure of the business. The employer must prove the dismissal wasn’t because of your pregnancy.</li>
<li>Dismissing an employee during maternity leave is an offence, unless the business closes.</li>
<li>If a doctor certifies that you are too ill from your pregnancy or the birth to return after your leave, you can’t be dismissed until 90 days after the leave ends.</li>
<li><strong>Flexible working:</strong> you can apply in writing to change your hours, days or place of work. Your employer must reply in writing within 60 days and give reasons if they refuse.</li>
</ul>
<p>Malaysian law doesn’t currently give a right to breastfeeding breaks at work, but many employers allow them. Ask your employer.</p>
<p>If your employer refuses your rights, you can contact the <strong>Labour Department (Jabatan Tenaga Kerja, JTK)</strong>. The ministry recorded 41 complaints about maternity leave and allowance in 2025.</p>` },
      { id: 'other', h: 'Sabah, Sarawak and civil servants', tocLabel: 'Other rules', html: `<p><strong>Sabah and Sarawak:</strong> from 1 May 2025, the state Labour Ordinances were amended to give <strong>98 days</strong> of maternity leave (up from 60) and <strong>7 days</strong> of paternity leave, for all employees regardless of salary. Check the detailed conditions with your employer or the state labour department.</p>
<p><strong>Civil servants (JPA):</strong></p>
<ul>
<li>The current rule is <strong>60 to 90 days</strong> of maternity leave per birth, chosen by the officer, with a lifetime total of 360 days.</li>
<li><strong>Budget 2027</strong>, tabled on 9 October 2026, announced an increase to a maximum of <strong>98 days per birth</strong> and 490 days in total. We haven’t found a JPA circular putting it into effect yet, so check with your HR department.</li>
<li>Officers can also take unpaid childcare leave (cuti menjaga anak).</li>
<li>Since 1 December 2024, fathers in the civil service can take 1 to 20 days of leave when their wife gives birth, from a shared pool of 20 days a year, up to 5 times in their career.</li>
</ul>
<p><strong>Proposed, not yet law:</strong> in May 2026 the government announced a post-maternity leave allowance of 80% of salary for up to 30 extra days, funded through the Employment Insurance System. As of October 2026, it was still being studied.</p>
${figure('mother-child', 'A mother holding her young child', 'Maternity leave also covers your postnatal check-up, usually about a month after the birth.')}` },
      { id: 'health', h: 'Health care during and after pregnancy', tocLabel: 'Health care', html: `<ul>
<li>Register for antenatal care at a <a href="/articles/klinik-kesihatan-malaysia/">Klinik Kesihatan</a> or private clinic before 12 weeks if you can. You will get a pink antenatal record book (Buku Rekod Ibu).</li>
<li>Antenatal screening includes HIV, hepatitis B, syphilis, <a href="/articles/gestational-diabetes-bsp-malaysia/">diabetes</a> and blood pressure. Folic acid, iron and multivitamins are given free at government clinics, and the whooping cough (Tdap) vaccine has been offered since May 2025.</li>
<li>After the birth, nurses carry out home visits, and there is a postnatal check-up about a month later.</li>
<li>If you are unwell during pregnancy before your maternity leave starts, a doctor can give you an MC for sick leave.</li>
</ul>
<p>See our guides to <a href="/articles/pregnancy-test-early-signs-malaysia/">early pregnancy</a> and <a href="/articles/baby-vaccination-schedule-malaysia/">your baby’s vaccination schedule</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for pregnancy care',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can confirm your pregnancy, start antenatal care, and issue an MC if you are unwell before your maternity leave begins. Our directory lists clinics across Malaysia, including those open at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['How many days is maternity leave in Malaysia?', 'At least 98 consecutive days for each birth under the Employment Act, for private-sector employees in Peninsular Malaysia and Labuan. Sabah and Sarawak also moved to 98 days from 1 May 2025.'],
      ['Is maternity leave paid in Malaysia?', 'Yes, at your ordinary rate of pay, if you have at least 90 days’ service in the 9 months before the birth and worked for that employer in the 4 months before it.'],
      ['How many days is paternity leave in Malaysia?', '7 consecutive days of paid leave for married fathers who have worked for the same employer for 12 months, for up to 5 births.'],
      ['When can maternity leave start?', 'No earlier than 30 days before the birth and no later than the day after it.'],
      ['Can I be dismissed while pregnant?', 'Only for wilful breach of contract, misconduct or closure of the business, and your employer must prove it isn’t because of your pregnancy.'],
      ['Do I get maternity leave after a stillbirth?', 'Yes, if the stillbirth happens at 22 weeks of pregnancy or later. The father also gets paternity leave.'],
      ['How long is maternity leave for civil servants?', 'Currently 60 to 90 days per birth. Budget 2027 announced up to 98 days per birth, but check with your HR department for when it takes effect.'],
    ],
    sources: [
      ['Employment Act 1955 (Act 265), sections 2, 37, 40, 41A, 42 and 60FA — LawPlayer (text as at Aug 2023)', 'https://lawplayer.com/my/article/act-265/s-37'],
      ['Rahmat Lim & Partners — All employees to be covered under amended Employment Act 1955 from 1 January 2023 (Sep 2022)', 'https://www.rahmatlim.com/publication/articles/22319/all-employees-irrespective-of-wages-to-be-covered-under-amended-employment-act-1955-from-1-january-2023'],
      ['Azmi & Associates — The coming into force of the Employment (Amendment) Act 2022', 'https://www.azmilaw.com/insights/the-coming-into-force-of-the-employment-amendment-act-2022/'],
      ['Women’s Aid Organisation — FAQ about parental leave (2022)', 'https://wao.org.my/wp-content/uploads/2022/10/WAO-Parental-leave-FAQ.pdf'],
      ['Portal MyGOV — Hak dan manfaat pekerja hamil (Mar 2026)', 'https://www.malaysia.gov.my/en/personas/ibu-hamil/planning-for-pregnancy/hak-dan-manfaat-pekerja-hamil'],
      ['Portal MyGOV — Maternal and women’s health', 'https://www.malaysia.gov.my/en/categories/health/maternal-and-womens-health'],
      ['HR Online — Sabah and Sarawak Labour Ordinance (Amendment) Acts 2025 now in force (May 2025)', 'https://www.humanresourcesonline.net/sabah-sarawak-s-labour-ordinance-amendment-acts-2025-now-in-force-effective-1-may'],
      ['Sinar Harian — Cuti bersalin penjawat awam (Aug 2024)', 'https://www.sinarharian.com.my/ampArticle/678443'],
      ['Universiti Utara Malaysia — Soalan lazim Pekeliling Perkhidmatan Bil. 1 Tahun 2024 (Sep 2024)', 'https://jsm.uum.edu.my/images/SSPA/faq_kemudahan_cuti.pdf'],
      ['Bernama — Belanjawan 2027 (Oct 2026)', 'https://bernama.com/bm/news.php?id=2617797'],
      ['The Star — Budget 2027: increased maternity leave entitlement (Oct 2026)', 'https://www.thestar.com.my/news/nation/2026/10/10/budget-2027-increased-maternity-leave-entitlement-could-help-boost-fertility-rate-says-exco'],
      ['New Straits Times — Govt studying post-maternity leave allowance for working mothers (Jul 2026)', 'https://www.nst.com.my/amp/news/nation/2026/07/1481683/govt-studying-post-maternity-leave-allowance-working-mothers'],
      ['UNICEF Malaysia — Strengthening Malaysia’s extended paid childbirth benefit (Oct 2026)', 'https://www.unicef.org/malaysia/reports/strengthening-malaysias-EPCB'],
      ['Bernama Thoughts — Breastfeeding at the workplace (Aug 2023)', 'https://bernama.com/en/thoughts/news.php?id=2212372'],
    ],
    related: ['medical-certificate-mc-malaysia', 'pregnancy-test-early-signs-malaysia', 'gestational-diabetes-bsp-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'vomiting-muntah-malaysia',
    title: 'Muntah (vomiting) and loya (nausea): causes, muntah darah, medicines and when to see a doctor',
    crumb: 'Muntah (vomiting) and nausea',
    desc: 'Muntah means vomiting and loya means nausea. Common causes, what vomiting blood (muntah darah) or green vomit means, home care, anti-sickness medicines, pregnancy and danger signs.',
    excerpt: 'Most vomiting stops within a day or two. What usually causes it, why vomiting blood or green vomit needs urgent care, how to keep fluids down, which anti-sickness medicines are used and which aren’t for children, and the warning signs.',
    standfirst: 'Muntah is the Malay word for vomiting, and loya means feeling sick (nausea). Most vomiting is caused by a stomach bug and stops within 1 to 2 days. The main jobs are to keep sipping fluids and to know the warning signs. Vomiting blood, green vomit and vomiting with a stiff neck or severe tummy pain always need a doctor straight away.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Vomiting', 'Nausea', 'Haematemesis'],
    image: 'gp-consultation', imageAlt: 'A doctor talking with a patient across a desk in a consultation room',
    keyPoints: [
      'Vomiting usually stops within 1 to 2 days. Take small, frequent sips of oral rehydration salts, keep breastfeeding, and eat when you feel able to.',
      'Vomiting blood (muntah darah) always needs medical help. Call 999 or go to an emergency department if you also feel faint, dizzy, confused or cold and clammy, or have black stools.',
      'Green or yellow-green vomit can mean a blocked bowel and needs hospital care, even if the person doesn’t seem dehydrated.',
      'Anti-sickness medicines aren’t routinely recommended for children with a stomach bug. Domperidone shouldn’t be used under 12 years, and metoclopramide is not for babies under 1 year.',
      'Get urgent help for vomiting with a stiff neck, severe headache or tummy pain, after a head injury, or with dengue warning signs.',
    ],
    sections: [
      { id: 'causes', h: 'What causes vomiting?', tocLabel: 'Causes', html: `<p><strong>Common causes:</strong></p>
<ul>
<li>a stomach bug (gastroenteritis) or <a href="/articles/food-poisoning-gastroenteritis-malaysia/">food poisoning</a>, often with <a href="/articles/diarrhoea-cirit-birit-malaysia/">diarrhoea</a></li>
<li>medicines, including strong painkillers and chemotherapy</li>
<li>alcohol</li>
<li>motion sickness and <a href="/articles/vertigo-dizziness-malaysia/">vertigo</a></li>
<li><a href="/articles/headaches-malaysia/">migraine</a></li>
<li>early <a href="/articles/pregnancy-test-early-signs-malaysia/">pregnancy</a></li>
</ul>
<p><strong>Serious causes</strong> include <a href="/articles/appendicitis-malaysia/">appendicitis</a>, a blocked bowel, pancreatitis, meningitis, a head injury or bleeding in the brain, diabetic ketoacidosis, and liver or kidney failure. Sudden nausea with heavy chest pain, pain spreading to the arm, jaw or back, or breathlessness can be a heart attack. Call <a href="tel:999">999</a>.</p>
<p><strong>In dengue:</strong> vomiting more than 3 times in 24 hours is a warning sign. See our guide to <a href="/articles/platelet-count-dengue-malaysia/">platelets and dengue</a>.</p>` },
      { id: 'blood', h: 'Muntah darah: vomiting blood', tocLabel: 'Vomiting blood', html: `<p>Vomiting blood always needs medical help. The vomit may be bright red, brown or black, or look like <strong>coffee grounds</strong>. Coffee-ground vomit is blood that has been partly digested by stomach acid, which usually means the bleeding has slowed or stopped. Bright red blood suggests faster bleeding that may still be going on.</p>
<p><strong>Call <a href="tel:999">999</a> or go to an emergency department if you vomit blood and also:</strong></p>
<ul>
<li>feel faint, dizzy or confused</li>
<li>are breathing fast</li>
<li>have cold, clammy or pale skin</li>
<li>have tummy pain</li>
<li>have black, tarry stools</li>
</ul>
<p>Don’t drive yourself. If the bleeding has stopped and you have no other symptoms, get an urgent appointment with a doctor the same day.</p>
<p><strong>Common causes:</strong></p>
<ul>
<li>inflammation of the stomach lining (gastritis), stomach ulcers and reflux damage. See our guides to <a href="/articles/stomach-pain-gastric-malaysia/">gastric pain</a> and <a href="/articles/gerd-acid-reflux-malaysia/">GERD</a>.</li>
<li>aspirin, ibuprofen and other anti-inflammatory painkillers, and blood thinners</li>
<li>a tear in the food pipe after forceful retching (a Mallory-Weiss tear)</li>
<li>swollen veins in the food pipe (varices) in people with liver disease, which can bleed heavily</li>
<li>less often, cancer or a bleeding disorder</li>
</ul>
<p><strong>Not always from the stomach:</strong> blood swallowed during a nosebleed can be vomited, and a breastfed baby can swallow blood from a cracked nipple. In hospital, doctors may use a camera test (endoscopy) to find and treat the bleeding, and give acid-reducing medicines.</p>
${figure('gp-consultation', 'A doctor speaking with a patient in a consultation room', 'Vomiting blood always needs a doctor, the same day or as an emergency.')}` },
      { id: 'home', h: 'Home care for vomiting', tocLabel: 'Home care', html: `<ul>
<li><strong>Take small, frequent sips.</strong> Oral rehydration salts (ORS) replace both water and salts. For a child, start with about 1 teaspoon (5ml) every 5 minutes, and increase slowly if they keep it down. See our <a href="/articles/diarrhoea-cirit-birit-malaysia/">diarrhoea guide</a> for how to mix ORS.</li>
<li><strong>Avoid</strong> fizzy drinks, sports drinks and undiluted juice, especially for children.</li>
<li><strong>Babies:</strong> keep breastfeeding, with smaller and more frequent feeds. Never make formula weaker than the instructions say.</li>
<li><strong>Food:</strong> go back to your normal diet once you are keeping fluids down. Plain food is easier at first, and it’s best to avoid fatty or spicy food.</li>
<li><strong>Stay off work or school</strong> for 48 hours after the last episode of vomiting if it was caused by a stomach bug, to avoid spreading it. Wash your hands with soap and water.</li>
</ul>` },
      { id: 'medicines', h: 'Ubat muntah: anti-sickness medicines', tocLabel: 'Medicines', html: `<p>Most vomiting from a stomach bug settles without medicine. If needed, a doctor may prescribe an anti-sickness medicine.</p>
<ul>
<li><strong>Children with gastroenteritis:</strong> the 2026 Malaysian children’s guideline doesn’t recommend routine anti-sickness medicines. It says domperidone, metoclopramide and dimenhydrinate don’t work well enough and cause side effects. A single dose of ondansetron may be considered by a doctor for persistent vomiting in children from 6 months.</li>
<li><strong>Domperidone:</strong> Malaysia’s drug regulator, NPRA, says it shouldn’t be used in children under 12 years or under 35kg. It can cause dangerous heart rhythm problems, so it isn’t suitable for people with heart disease or taking certain other medicines. In Europe, it is limited to a maximum of 30mg a day, usually for no more than a week.</li>
<li><strong>Metoclopramide:</strong> must not be given to babies under 1 year. NPRA has warned about a reaction in which the eyes roll upward uncontrollably (oculogyric crisis), with 241 reports in Malaysia. In children over 1, it is only a second-line choice for limited uses.</li>
<li><strong>Adults:</strong> doctors may use prochlorperazine, promethazine or metoclopramide for mild to moderate vomiting, and ondansetron for severe vomiting or vomiting caused by chemotherapy.</li>
<li><strong>Motion sickness:</strong> tablets such as dimenhydrinate or hyoscine, taken before the journey, can help. Ginger may help some people.</li>
</ul>
<p>Ask a pharmacist or doctor before taking any anti-sickness medicine, especially for a child, in pregnancy, or if you have a heart condition.</p>` },
      { id: 'children', h: 'Vomiting in babies and children', tocLabel: 'Babies and children', html: `<p>A stomach bug is the most common cause. <strong>Get medical help urgently if a child:</strong></p>
<ul>
<li>has <strong>green or yellow-green vomit</strong>, or blood in the vomit</li>
<li>is a baby aged about 3 to 6 weeks who has <strong>forceful (projectile) vomiting</strong> after every feed, stays hungry and isn’t gaining weight. This can be pyloric stenosis, a narrowing at the stomach exit.</li>
<li>has a <strong>bulging soft spot</strong> on the head, a stiff neck, a rash or a high fever</li>
<li>is unusually sleepy, floppy or crying in a way that can’t be settled</li>
<li>has a swollen tummy, or vomiting without diarrhoea that keeps going</li>
<li>has vomited more than 6 to 8 times, or for more than 24 to 48 hours</li>
<li>hasn’t passed urine or has refused to drink for more than 8 hours</li>
</ul>
<p>See our guide to <a href="/articles/fever-in-children-malaysia/">fever in children</a>.</p>` },
      { id: 'pregnancy', h: 'Vomiting in pregnancy', tocLabel: 'Pregnancy', html: `<p>Morning sickness is common and usually settles by 16 to 20 weeks. Rest, small frequent meals, plain starchy snacks and sips of fluid can help. Ask a pharmacist before taking supplements, including ginger. A doctor can prescribe anti-sickness medicines that are considered safe in pregnancy.</p>
<p><strong>Hyperemesis gravidarum</strong> is severe vomiting in pregnancy, affecting 1 to 3 in 100 women. It often needs fluids through a drip in hospital.</p>
<p><strong>See a doctor if you are pregnant and:</strong></p>
<ul>
<li>can’t keep food or fluids down for 24 hours</li>
<li>have dark urine, or haven’t passed urine for 8 hours</li>
<li>feel faint, or have tummy pain or a fever</li>
<li>are losing weight, or vomit blood</li>
</ul>` },
      { id: 'urgent', h: 'When to get urgent help', tocLabel: 'When to get help', html: `<p><strong>Call <a href="tel:999">999</a> or go to an emergency department for vomiting with:</strong></p>
<ul>
<li>blood, or vomit that looks like coffee grounds</li>
<li>green vomit, in adults or children</li>
<li>a stiff neck, a sudden severe headache or a rash that doesn’t fade</li>
<li>sudden or severe tummy pain</li>
<li>confusion or unusual drowsiness</li>
<li>chest pain or breathlessness</li>
</ul>
<p><strong>Get urgent advice the same day if:</strong></p>
<ul>
<li>you have vomited after a head injury</li>
<li>you can’t keep fluids down, or vomiting has lasted more than 2 days</li>
<li>you have signs of dehydration, such as dark urine, passing little urine and dizziness</li>
<li>you have diabetes and are vomiting, especially if your ketones are high. Ask your doctor about a sick day plan.</li>
<li>you have a <a href="/articles/normal-body-temperature-fever-adults-malaysia/">fever</a> in dengue season and are vomiting more than 3 times a day</li>
</ul>
<p><strong>Repeated bouts:</strong> attacks of vomiting that come back again and again with normal health in between can be cyclic vomiting syndrome, which is often linked to migraine. Regular cannabis use can also cause repeated vomiting that only stops when the person stops using it.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check for dehydration, look for the cause, advise on medicines and arrange tests or a hospital referral. Our directory lists clinics across Malaysia, including clinics open late, at weekends and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['What is muntah in English?', 'Muntah means vomiting, or being sick. Loya means nausea, the feeling that you might be sick.'],
      ['Is vomiting blood an emergency?', 'It always needs medical help. Call 999 or go to an emergency department if you also feel faint, dizzy or confused, or have black stools. Otherwise, see a doctor the same day.'],
      ['What does coffee-ground vomit mean?', 'It is blood that has been partly digested by stomach acid, often from a stomach ulcer or gastritis. It needs medical help the same day.'],
      ['What should I drink after vomiting?', 'Small, frequent sips of oral rehydration salts. For children, start with a teaspoon every 5 minutes. Avoid fizzy drinks and sports drinks.'],
      ['Can I give my child medicine for vomiting?', 'Anti-sickness medicines aren’t routinely recommended for children with a stomach bug. Domperidone shouldn’t be used under 12 years. Ask a doctor if vomiting persists.'],
      ['What does green vomit mean?', 'Green or yellow-green vomit can mean a blocked bowel, especially in babies and children. It needs urgent hospital assessment.'],
      ['How long does vomiting last?', 'Vomiting from a stomach bug usually stops within 1 to 2 days. Get advice if it lasts longer, or if you can’t keep fluids down.'],
    ],
    sources: [
      ['NHS — Diarrhoea and vomiting (Dec 2023)', 'https://www.nhs.uk/conditions/diarrhoea-and-vomiting/'],
      ['NHS — Vomiting blood (Aug 2025)', 'https://www.nhs.uk/conditions/vomiting-blood/'],
      ['NHS — Feeling sick (nausea) (Nov 2023)', 'https://www.nhs.uk/conditions/feeling-sick-nausea/'],
      ['NHS — Vomiting and morning sickness (Apr 2024)', 'https://www.nhs.uk/pregnancy/related-conditions/common-symptoms/vomiting-and-morning-sickness/'],
      ['NHS — Severe vomiting in pregnancy (Jan 2023)', 'https://www.nhs.uk/pregnancy/complications/severe-vomiting/'],
      ['NHS — Motion sickness (Jun 2023)', 'https://www.nhs.uk/conditions/motion-sickness/'],
      ['NHS — Head injury and concussion (May 2025)', 'https://www.nhs.uk/conditions/head-injury-and-concussion/'],
      ['NHS — Diabetic ketoacidosis (Jun 2023)', 'https://www.nhs.uk/conditions/diabetic-ketoacidosis/'],
      ['MSD Manual Consumer Version — Nausea and vomiting in adults (Apr 2026)', 'https://www.msdmanuals.com/home/digestive-disorders/symptoms-of-digestive-disorders/nausea-and-vomiting-in-adults'],
      ['MSD Manual Consumer Version — Vomiting in infants and children (Mar 2025)', 'https://www.msdmanuals.com/home/children-s-health-issues/symptoms-in-infants-and-children/vomiting-in-infants-and-children'],
      ['MSD Manual Consumer Version — Gastrointestinal bleeding (Sep 2025)', 'https://www.msdmanuals.com/home/digestive-disorders/gastrointestinal-bleeding/gastrointestinal-bleeding'],
      ['Malaysian Paediatric Association — Guidelines on the management of acute diarrhoea in children, 2nd edition (2026)', 'https://mpaeds.my/wp-content/uploads/2026/06/guideline-on-the-management-of-acute-diarrhoea-in-children-2026-1.pdf'],
      ['NPRA Malaysia — Reminder on the risk of oculogyric crisis with metoclopramide (Jun 2020)', 'https://npra.gov.my/index.php/en/component/content/article/419-english/safety-alerts-main/safety-alerts-2020/1527118-reminder-on-the-risk-of-oculogyric-crisis-with-metoclopramide-use.html'],
      ['NPRA Malaysia — Domperidone: restrictions of use in children under 12 (Jun 2020)', 'https://npra.gov.my/index.php/en/component/content/article/419-english/safety-alerts-main/safety-alerts-2020/1527109-domperidone-restrictions-of-use-in-paediatric-patients-less-than-12-years-old.html'],
      ['European Medicines Agency — Domperidone-containing medicines referral (2014)', 'https://www.ema.europa.eu/en/medicines/human/referrals/domperidone-containing-medicines'],
      ['Cochrane — Interventions for nausea and vomiting in early pregnancy (2015)', 'https://www.cochrane.org/CD007575/PREG_ginger-for-nausea-and-vomiting-in-pregnancy'],
      ['Cleveland Clinic — Cyclic vomiting syndrome (2023)', 'https://my.clevelandclinic.org/health/diseases/14894-cyclic-vomiting-syndrome'],
      ['Cleveland Clinic — Cannabinoid hyperemesis syndrome (2024)', 'https://my.clevelandclinic.org/health/diseases/21665-cannabis-hyperemesis-syndrome'],
    ],
    related: ['diarrhoea-cirit-birit-malaysia', 'food-poisoning-gastroenteritis-malaysia', 'stomach-pain-gastric-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'kencing-berdarah-blood-in-urine-malaysia',
    title: 'Kencing berdarah (blood in urine): causes, tests and when it could be serious',
    crumb: 'Kencing berdarah (blood in urine)',
    desc: 'Kencing berdarah means blood in the urine. Common causes from infection to stones, foods that turn urine red, why blood in urine always needs checking, what tests to expect, and warning signs.',
    excerpt: 'Pink, red or brown urine is alarming, but the cause is often an infection or a stone. Even so, blood in the urine should always be checked, because it can be the first sign of bladder or kidney cancer. Causes, foods that mimic it, the tests involved, and when to get help urgently.',
    standfirst: 'Kencing berdarah means blood in the urine (haematuria). Sometimes you can see it, and sometimes it is found only on a urine test. A urine infection is the most common cause, but stones, an enlarged prostate, kidney conditions and cancers can all cause bleeding. That’s why doctors advise getting it checked, even if it happens only once and stops on its own.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Haematuria', 'Blood in urine', 'Bladder cancer'],
    image: 'doctor-consultation', imageAlt: 'A doctor talking with a patient in a clinic',
    keyPoints: [
      'Blood in the urine can look pink, red or dark brown like weak tea. Beetroot, dragon fruit, food dyes and some medicines can colour urine red without any blood.',
      'A urine infection is the most common cause. Others include kidney stones, an enlarged prostate, kidney inflammation, injury, hard exercise and blood thinners.',
      'Always get visible blood in the urine checked, even if it stops. About 1 in 5 adults with visible blood in the urine is found to have bladder cancer.',
      'In a Malaysian hospital study, the most common causes found were an enlarged prostate, stones and urine infections, and no cause was found in about 1 in 5 people.',
      'Get help urgently for lots of blood or clots, being unable to pass urine, or blood with fever, back or side pain, or vomiting.',
    ],
    sections: [
      { id: 'what', h: 'What does blood in urine look like?', tocLabel: 'What it looks like', html: `<ul>
<li><strong>Visible blood</strong> (gross haematuria): urine that looks pink, red, or dark brown like weak black tea. Sometimes there are clots.</li>
<li><strong>Non-visible blood</strong> (microscopic haematuria): urine looks normal, but blood is found on a dipstick or under a microscope. A positive dipstick is usually confirmed with a laboratory test.</li>
</ul>
<p><strong>Red urine that isn’t blood:</strong></p>
<ul>
<li><strong>Foods:</strong> beetroot, dragon fruit, blackberries, rhubarb and food dyes</li>
<li><strong>Medicines:</strong> rifampicin, used to treat <a href="/articles/tuberculosis-tb-malaysia/">tuberculosis</a>, and nitrofurantoin, used for urine infections</li>
<li><strong>Blood from somewhere else:</strong> a period, or bleeding from the vagina or back passage that mixes with urine</li>
</ul>
<p>If you have eaten dragon fruit or beetroot, the colour should clear within about 48 hours. If it doesn’t, or you haven’t eaten any of these foods, see a doctor.</p>` },
      { id: 'causes', h: 'Causes of kencing berdarah', tocLabel: 'Causes', html: `<ul>
<li><strong><a href="/articles/uti-urinary-tract-infection-malaysia/">Urinary tract infection (UTI)</a>:</strong> the most common cause, usually with burning, needing to pass urine often, or tummy pain</li>
<li><strong><a href="/articles/kidney-stones-batu-karang-malaysia/">Kidney or bladder stones</a> (batu karang):</strong> often with severe pain in the side that spreads to the groin</li>
<li><strong><a href="/articles/enlarged-prostate-psa-test-malaysia/">Enlarged prostate</a>:</strong> common in older men</li>
<li><strong>Kidney inflammation (glomerulonephritis)</strong>, including IgA nephropathy. This often causes visible blood during a sore throat or stomach upset, and mainly affects young adults. See our guide to <a href="/articles/kencing-berbuih-kidney-disease-malaysia/">kidney disease</a>.</li>
<li><strong>Injury</strong> to the kidneys or bladder, or vigorous exercise</li>
<li><strong>Blood-thinning medicines</strong> such as warfarin, apixaban, rivaroxaban, aspirin and clopidogrel, and blood disorders</li>
<li><strong>Infections such as TB</strong>, and schistosomiasis, caught from fresh water in some parts of Africa, Asia and the Middle East</li>
<li><strong>Cancer</strong> of the bladder, kidney or prostate</li>
</ul>
${figure('doctor-consultation', 'A doctor talking with a patient', 'A urine test is the first step, but visible blood often needs a scan and a bladder check as well.')}` },
      { id: 'cancer', h: 'Could it be cancer?', tocLabel: 'Cancer risk', html: `<p>Most blood in the urine isn’t cancer, but it is an important early warning sign of bladder and kidney cancer. UK urologists report that about <strong>1 in 5 adults with visible blood</strong> in the urine, and about 1 in 12 with non-visible blood, are found to have bladder cancer.</p>
<p>In a study of 390 patients at a Malaysian university hospital, the causes found were an enlarged prostate (23%), stones (12%) and urine infections (11%). No cause was found in 22%. New bladder cancer was found in about 5 in 100 people with visible blood. The authors recommend fully investigating visible blood in the urine, especially over the age of 50.</p>
<p><strong>Higher risk:</strong></p>
<ul>
<li><strong>Smoking:</strong> smokers have up to 4 times the risk of bladder cancer, and smoking causes about half of bladder cancers in the UK. It also increases the risk of kidney cancer.</li>
<li>age over 60, and being male</li>
<li>long-term exposure to certain industrial chemicals</li>
<li>past schistosomiasis</li>
</ul>
<p>UK guidance advises urgent investigation for anyone aged 45 or over with visible blood in the urine and no infection, or blood that continues or comes back after an infection is treated. In Malaysia, bladder and kidney cancer were each diagnosed in about 2,000 men between 2017 and 2021.</p>` },
      { id: 'tests', h: 'What tests to expect', tocLabel: 'Tests', html: `<p><strong>At the clinic:</strong></p>
<ul>
<li>questions about your symptoms, smoking, work and medicines</li>
<li>a physical examination and blood pressure check</li>
<li>a urine test for infection, and urine microscopy</li>
<li>blood tests for kidney function, blood count and clotting, and a <a href="/articles/enlarged-prostate-psa-test-malaysia/">PSA test</a> for men where appropriate</li>
</ul>
<p>If an infection is found and treated, the urine is often tested again 6 to 12 weeks later to make sure the blood has gone.</p>
<p><strong>Specialist tests (urologist):</strong></p>
<ul>
<li><strong>Ultrasound</strong> of the kidneys and bladder</li>
<li><strong>CT urogram:</strong> a detailed scan with a contrast injection. Mention any allergies or kidney problems.</li>
<li><strong>Cystoscopy:</strong> a thin camera passed into the bladder. A flexible cystoscopy takes about 10 to 15 minutes with numbing gel, and you can usually go home straight afterwards. A little blood and stinging for a few days afterwards is normal.</li>
<li><strong>Urine cytology:</strong> looking for abnormal cells in the urine</li>
</ul>
<p><strong>On blood thinners?</strong> You still need to be checked. These medicines can make an underlying problem bleed, but they rarely cause bleeding on their own. Don’t stop them without speaking to your doctor.</p>` },
      { id: 'children', h: 'Blood in urine in children and pregnancy', tocLabel: 'Children and pregnancy', html: `<p><strong>Children:</strong> cancer is rare. Common causes are urine infections, kidney inflammation, viral illness, injury and stones. One important cause is <strong>post-infectious glomerulonephritis</strong>, most often at ages 5 to 12, which appears 1 to 2 weeks after a strep throat or a few weeks after a skin infection. Urine looks tea- or cola-coloured, and there may be puffy eyelids in the morning. See a doctor promptly, and urgently if your child is passing less urine or is swelling up.</p>
<p>In newborn babies, orange or pink “brick dust” in the nappy is usually urate crystals rather than blood, but ask your doctor if you are unsure.</p>
<p><strong>Pregnancy:</strong> a urine infection is a common cause of blood in the urine in pregnancy, and needs treatment. Any vaginal bleeding in pregnancy should also be checked. Call <a href="tel:999">999</a> for heavy bleeding, severe pain or feeling faint.</p>` },
      { id: 'urgent', h: 'When to get help', tocLabel: 'When to get help', html: `<p><strong>Go to an emergency department or call <a href="tel:999">999</a> if:</strong></p>
<ul>
<li>there is a lot of blood, or large clots</li>
<li>you can’t pass urine</li>
<li>you have blood in your urine with fever, shivering, pain in your back or side, or vomiting</li>
<li>you have severe tummy pain, or feel faint</li>
</ul>
<p><strong>See a doctor within a few days</strong> for any blood you can see in your urine, even if it has stopped, or if blood has been found on a urine test. Don’t ignore it just because it is painless.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for a urine test',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can test your urine, treat an infection, arrange blood tests and an ultrasound, and refer you to a urologist when needed. Our directory lists clinics across Malaysia, including those open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What is kencing berdarah in English?', 'Blood in the urine, or haematuria. It can be visible, or found only on a urine test.'],
      ['Is blood in urine always serious?', 'Not always. It is often caused by an infection or a stone. But it can be an early sign of bladder or kidney cancer, so always get it checked.'],
      ['Can dragon fruit turn urine red?', 'Yes. Dragon fruit, beetroot and some food dyes can make urine pink or red for up to about 48 hours. If the colour lasts longer, see a doctor.'],
      ['Should I worry if the blood stopped by itself?', 'You should still see a doctor. Bleeding from a bladder or kidney tumour can come and go.'],
      ['Can a UTI cause blood in urine?', 'Yes, a urine infection is the most common cause. Your urine should be retested after treatment to make sure the blood has gone.'],
      ['What test will the urologist do?', 'Usually an ultrasound or CT scan of the kidneys, and a cystoscopy, which is a camera check of the bladder.'],
      ['I take blood thinners. Do I still need checking?', 'Yes. Blood thinners can make an underlying problem bleed, so you still need investigating. Don’t stop them without advice.'],
    ],
    sources: [
      ['NHS — Blood in urine (Sep 2026)', 'https://www.nhs.uk/symptoms/blood-in-urine/'],
      ['NICE — Suspected cancer: recognition and referral, NG12 (updated Apr 2026)', 'https://www.nice.org.uk/guidance/ng12/chapter/Recommendations-organised-by-site-of-cancer'],
      ['British Association of Urological Surgeons — Blood in the urine (haematuria) (Mar 2024)', 'https://www.baus.org.uk/patients/conditions/2/blood_in_the_urine_haematuria'],
      ['Kidney Research UK — Blood in urine', 'https://www.kidneyresearchuk.org/conditions-symptoms/blood-in-urine/'],
      ['Kidney Research UK — IgA nephropathy', 'https://www.kidneyresearchuk.org/conditions-symptoms/iga-nephropathy/'],
      ['healthdirect Australia — Blood in urine (Dec 2025)', 'https://www.healthdirect.gov.au/blood-in-urine'],
      ['O’Connor et al — Assessment and management of haematuria in the general practice setting, Australian Journal of General Practice (2021)', 'https://www1.racgp.org.au/ajgp/2021/july/haematuria-in-the-general-practice-setting'],
      ['Ng et al — Assessment and clinical significance of haematuria in Malaysian patients, Asian Pacific Journal of Cancer Prevention (2012)', 'https://koreascience.kr/article/JAKO201227935975586.view'],
      ['Cleveland Clinic — Beets can turn poop and pee red (Oct 2025)', 'https://health.clevelandclinic.org/beets-turn-poop-and-pee-red'],
      ['Cancer Research UK — Bladder cancer risks and causes (Aug 2026)', 'https://www.cancerresearchuk.org/about-cancer/bladder-cancer/risks-causes'],
      ['NHS — Kidney cancer symptoms (Oct 2026)', 'https://www.nhs.uk/conditions/kidney-cancer/symptoms/'],
      ['NHS — Cystoscopy: how it’s done (Jan 2024)', 'https://www.nhs.uk/tests-and-treatments/cystoscopy/how-its-done/'],
      ['NHS — Schistosomiasis (Jul 2025)', 'https://www.nhs.uk/conditions/schistosomiasis/'],
      ['NHS — Vaginal bleeding in pregnancy (Feb 2026)', 'https://www.nhs.uk/pregnancy/related-conditions/common-symptoms/vaginal-bleeding/'],
      ['Royal Children’s Hospital Melbourne — Haematuria clinical guideline (2021)', 'https://www.rch.org.au/clinicalguide/guideline_index/Haematuria/'],
      ['HealthyChildren.org — Post-infectious glomerulonephritis (2020)', 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Post-Infectious-Glomerulonephritis-PIGN.aspx'],
      ['National Cancer Institute Malaysia — Malaysia National Cancer Registry Report 2017–2021', 'https://nci.moh.gov.my/images/pdf_folder/Malaysia-National-Cancer-Registry-Report-2017-2021.pdf'],
    ],
    related: ['kencing-berbuih-kidney-disease-malaysia', 'uti-urinary-tract-infection-malaysia', 'kidney-stones-batu-karang-malaysia'],
  },
];
