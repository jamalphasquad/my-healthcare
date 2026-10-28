// Articles published 28 October 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-10-28';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const OCT_2026_D = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'stroke-heart-attack-kuala-lumpur',
    title: 'Stroke or heart attack in Kuala Lumpur: the warning signs, what to do, and where to get treated fast',
    crumb: 'Stroke and heart attack in KL',
    desc: 'Stroke and heart attack warning signs (BE FAST), what to do while waiting for 999, the treatment time windows, and which KL hospitals treat stroke and heart attack.',
    excerpt: 'Heart disease is Malaysia’s leading cause of death, and Malaysians have heart attacks younger than people in many countries. How to spot a stroke or heart attack, what to do in the first minutes, and why time matters so much.',
    standfirst: 'Every minute counts in a stroke or heart attack. Treatments that unblock an artery work best in the first few hours, yet many Malaysians reach hospital too late for them. Here is how to recognise the warning signs, what to do while you wait for help, and which hospitals in and around Kuala Lumpur treat stroke and heart attack.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Stroke', 'Strok'],
    image: 'caring-hands', imageAlt: 'A younger person holding an older woman’s hands',
    keyPoints: [
      'Heart disease is Malaysia’s leading cause of death, and stroke is consistently among the top three.',
      'Spot a stroke with BE FAST: Balance, Eyes, Face, Arm, Speech, Time to call 999.',
      'Heart attack signs include chest pain or pressure, pain spreading to the arm, jaw or back, breathlessness and sweating. Women, older people and people with diabetes may have no chest pain.',
      'Call 999, or 112 from a mobile, and note the time symptoms started. Clot-busting treatment for stroke must start within 4.5 hours.',
      'Don’t give aspirin for a suspected stroke. For a suspected heart attack, take aspirin only if the 999 operator or a doctor tells you to.',
    ],
    sections: [
      { id: 'why', h: 'Why minutes matter', html: `<p><strong>Ischaemic heart disease is Malaysia’s leading cause of death.</strong> It caused 17,421 deaths in 2024, 13% of medically certified deaths, according to the Department of Statistics. Stroke is consistently among the top three causes, and is estimated to affect more than 50,000 Malaysians a year.</p>
<p>Malaysians also have heart attacks young. In the national heart registry for 2020–2021, the average age at admission with a heart attack or unstable angina was <strong>58.5 years</strong>, and a quarter of patients were under 50.</p>
<p>Most strokes and heart attacks are caused by a blocked artery. In a stroke, about <strong>1.9 million brain cells</strong> die every minute the blockage continues. Yet in a Malaysian stroke study, patients took a median of seven hours or more to reach hospital, too late for the most effective treatments.</p>` },
      { id: 'stroke-signs', h: 'Stroke warning signs: BE FAST', tocLabel: 'Stroke signs', html: `<p>A stroke comes on <strong>suddenly</strong>. Use BE FAST to check, or its Malay version, PeRMATA:</p>
<div class="table-wrap"><table>
<thead><tr><th>BE FAST</th><th>What to look for</th><th>PeRMATA</th></tr></thead>
<tbody>
<tr><td><strong>B</strong>alance</td><td>Sudden dizziness, loss of balance or trouble walking</td><td><strong>Pe</strong>ning</td></tr>
<tr><td><strong>E</strong>yes</td><td>Sudden blurred, double or lost vision</td><td><strong>R</strong>abun</td></tr>
<tr><td><strong>F</strong>ace</td><td>One side of the face droops. Ask them to smile.</td><td><strong>M</strong>uka herot</td></tr>
<tr><td><strong>A</strong>rm</td><td>Weakness or numbness in one arm or leg. Ask them to raise both arms.</td><td><strong>A</strong>ngkat tangan</td></tr>
<tr><td><strong>S</strong>peech</td><td>Slurred speech, or difficulty speaking or understanding</td><td><strong>T</strong>utur</td></tr>
<tr><td><strong>T</strong>ime</td><td>Call 999 now, and note the time symptoms started</td><td><strong>A</strong>ngkat telefon</td></tr>
</tbody></table></div>
<p>Call 999 even if the symptoms go away after a few minutes. This can be a “mini-stroke” (transient ischaemic attack), which is a warning that a major stroke may follow.</p>` },
      { id: 'heart-signs', h: 'Heart attack warning signs', tocLabel: 'Heart attack signs', html: `<ul>
<li><strong>Chest pain, pressure, tightness or squeezing</strong>, lasting more than a few minutes or coming and going</li>
<li>Pain spreading to <strong>one or both arms, the neck, jaw, back or upper stomach</strong></li>
<li>Shortness of breath</li>
<li>Cold sweat, nausea or vomiting, or light-headedness</li>
</ul>
<p><strong>Women, older people and people with diabetes</strong> are more likely to have a heart attack without obvious chest pain. They may feel only breathlessness, nausea, unusual tiredness or discomfort in the back or jaw. Don’t dismiss these as indigestion or “angin”, especially if you have risk factors.</p>
${figure('bp-check-desk', 'A blood pressure monitor on a desk', 'High blood pressure is the main risk factor for both stroke and heart attack, and often has no symptoms.')}` },
      { id: 'what-to-do', h: 'What to do while you wait for help', tocLabel: 'What to do', html: `<ol>
<li><strong>Call 999</strong> (or 112 from a mobile). Say you suspect a stroke or heart attack and give the exact address.</li>
<li><strong>Note the time</strong> symptoms started, or when the person was last seen well. Doctors need this to decide on treatment.</li>
<li><strong>Keep the person still</strong>, sitting or lying in a comfortable position, and loosen tight clothing.</li>
<li><strong>For a suspected stroke:</strong> give nothing to eat or drink, as swallowing may be affected. <strong>Don’t give aspirin</strong>. Some strokes are caused by bleeding, which aspirin can make worse, and only a brain scan can tell.</li>
<li><strong>For a suspected heart attack:</strong> take aspirin only if the 999 operator or a doctor tells you to, and not if you are allergic to it. Use your own heart medicines, such as a GTN spray, as your doctor has advised.</li>
<li><strong>If the person collapses and isn’t breathing normally,</strong> start hands-only CPR: push hard and fast in the centre of the chest, about twice a second, and keep going until help arrives. Ask someone to find an AED (defibrillator) if one is nearby.</li>
<li><strong>Gather</strong> the person’s IC and a list of their medicines.</li>
</ol>
<div class="box box--pink" role="note"><span class="box__title">Don’t go to a GP clinic</span><p style="font-size:16px;line-height:1.6">A GP clinic can’t give clot-busting treatment, and going there first loses precious time. Call 999. If you can’t wait for an ambulance, have someone else drive you straight to a hospital emergency department. Don’t drive yourself.</p></div>` },
      { id: 'ambulance', h: 'Ambulance response times', tocLabel: 'Ambulances', html: `<p>Ambulance response is a known weak spot. In 2025, only <strong>34.01%</strong> of the most urgent (Priority 1) cases were reached within the 15-minute target, against a goal of 50%, the Health Minister told Parliament in October 2026. Budget 2027 funds <strong>400 new ambulances</strong> for Ministry of Health hospitals.</p>
<p>Calling 999 is still the right first step, because it gets trained help on the way. If the ambulance is delayed and the person is stable enough to travel, a family member can drive them to the nearest hospital emergency department.</p>` },
      { id: 'treatment', h: 'Treatments that depend on time', tocLabel: 'Treatment windows', html: `<div class="table-wrap"><table>
<thead><tr><th>Treatment</th><th>What it does</th><th>Time window</th></tr></thead>
<tbody>
<tr><td>Thrombolysis (stroke)</td><td>A clot-busting drug through a drip</td><td>Within 4.5 hours of symptoms starting</td></tr>
<tr><td>Thrombectomy (stroke)</td><td>A thin tube removes a large clot from a brain artery</td><td>Best within 6 hours; up to 24 hours in selected patients</td></tr>
<tr><td>Primary angioplasty (heart attack)</td><td>A balloon and stent reopen the blocked heart artery in a cath lab</td><td>Target: within 90 minutes of arriving at hospital</td></tr>
<tr><td>Thrombolysis (heart attack)</td><td>A clot-busting drug, when angioplasty isn’t quickly available</td><td>Target: within 30 minutes of arriving at hospital</td></tr>
</tbody></table></div>
<p>Malaysian hospitals are getting faster. In the national heart registry for 2020–2021, the median time from arrival to angioplasty was 69.5 minutes, and 63.6% of patients were treated within the 90-minute target. The biggest delay is usually before the patient reaches hospital.</p>` },
      { id: 'hospitals', h: 'Hospitals in and around Kuala Lumpur', tocLabel: 'Hospitals in KL', html: `<p>In an emergency, go to the nearest hospital emergency department, or where the ambulance takes you. Every emergency department can assess you, start treatment and transfer you if a specialist procedure is needed.</p>
<p><strong>Stroke:</strong> these government and university hospitals in the Klang Valley have stroke units and can perform thrombectomy, according to the international Angels Initiative stroke network:</p>
<ul>
<li>Hospital Kuala Lumpur (HKL)</li>
<li>Hospital Sungai Buloh</li>
<li>University Malaya Medical Centre (UMMC)</li>
<li>Hospital Canselor Tuanku Muhriz (HCTM), UKM, Cheras</li>
</ul>
<p>HCTM and Hospital Sultan Abdul Aziz Shah (UPM) in Serdang are certified as advanced stroke centres by the World Stroke Organization.</p>
<p><strong>Heart attack:</strong> the National Heart Institute (IJN) runs a 24-hour heart attack centre for emergency angioplasty, and Hospital Serdang has a large cardiac centre. Major university hospitals and many private hospitals in the Klang Valley also have cath labs and stroke services.</p>
<p>If you have heart disease or have had a stroke, ask your doctor now which hospital you should go to in an emergency, and save the details in your phone.</p>` },
      { id: 'prevention', h: 'Lower your risk', html: `<p>Most strokes and heart attacks are linked to risk factors you can check and treat. Among Malaysian adults, according to the National Health and Morbidity Survey 2023:</p>
<ul>
<li><strong>29.2% have high blood pressure</strong>, and 11.9% have it without knowing.</li>
<li>15.6% have diabetes and 33.3% have high cholesterol.</li>
<li>19.0% smoke, and 29.9% are physically inactive.</li>
</ul>
<p>Check your blood pressure at least once a year from age 18, and your blood sugar and cholesterol from age 30. Many people qualify for <a href="/articles/free-health-screening-malaysia/">free health screening</a>. You can also <a href="/articles/check-blood-pressure-at-home/">check your blood pressure at home</a>. Take medicines as prescribed, stop smoking, and aim for 150 minutes of activity a week.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Check your risk at a GP clinic',
    clinicsTocLabel: 'Check your risk',
    clinicsIntro: 'For prevention, not emergencies: a GP can check your blood pressure, blood sugar and cholesterol, and manage them over time. For stroke or heart attack symptoms, call 999. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What are the warning signs of a stroke?', 'Use BE FAST: sudden loss of Balance, blurred or lost vision (Eyes), a drooping Face, weakness in one Arm or leg, slurred Speech. Then it’s Time to call 999. In Malay, the same signs are remembered as PeRMATA.'],
      ['Should I give aspirin to someone having a stroke?', 'No. Some strokes are caused by bleeding in the brain, which aspirin can make worse. Only a brain scan can tell the difference, so give nothing by mouth and call 999.'],
      ['Should I take aspirin during a heart attack?', 'Only if the 999 operator or a doctor tells you to, and not if you are allergic to aspirin. Call 999 first.'],
      ['How long do you have to treat a stroke?', 'Clot-busting treatment must start within 4.5 hours of symptoms starting. Removing a large clot (thrombectomy) works best within 6 hours, and up to 24 hours in selected patients. The sooner, the better.'],
      ['Which hospitals in KL treat stroke?', 'Hospital Kuala Lumpur, Hospital Sungai Buloh, University Malaya Medical Centre and Hospital Canselor Tuanku Muhriz (UKM) have stroke units and can remove clots. In an emergency, call 999 and go to the nearest emergency department.'],
      ['Can women have a heart attack without chest pain?', 'Yes. Women, older people and people with diabetes are more likely to have breathlessness, nausea, unusual tiredness or back or jaw discomfort instead of classic chest pain.'],
    ],
    sources: [
      ['Department of Statistics Malaysia — Statistics on Causes of Death, Malaysia 2025 (18 Dec 2025)', 'https://www.dosm.gov.my/portal-main/release-content/statistics-on-causes-of-death-malaysia-2025'],
      ['Department of Statistics Malaysia — Statistics on Causes of Death, Malaysia 2024', 'https://www.dosm.gov.my/portal-main/release-content/statistics-on-causes-of-death-malaysia-2024'],
      ['National Heart Association of Malaysia — NCVD Acute Coronary Syndrome Registry Report 2020–2021', 'https://www.acrm.org.my/ncvd/documents/report/ACS%20Report%202020-2021_Final.pdf'],
      ['The Star — Nationwide walk of hope celebrates life after stroke (10 Nov 2025)', 'https://www.thestar.com.my/metro/metro-news/2025/11/10/nationwide-walk-of-hope-celebrates-life-after-stroke'],
      ['CodeBlue — Malaysian stroke patients take average seven hours to reach hospital (28 Dec 2022)', 'https://codeblue.galencentre.org/2022/12/28/malaysian-stroke-patients-take-average-seven-hours-for-hospital-arrival/'],
      ['CodeBlue — Experts want better coordination across stroke care in Malaysia (9 Dec 2025)', 'https://codeblue.galencentre.org/2025/12/experts-want-better-coordination-across-stroke-care-in-malaysia/'],
      ['Bernama — PeRMATA stroke awareness campaign (27 Oct 2021)', 'https://www.bernama.com/bm/news.php?id=2017145'],
      ['Saver JL — Time is brain, quantified. Stroke, 2006', 'https://pubmed.ncbi.nlm.nih.gov/16339467/'],
      ['American Heart Association — Warning signs of a heart attack', 'https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack'],
      ['Bernama — Ambulance response times in 2025 (12 Oct 2026)', 'https://bernama.com/en/news.php?id=2618890'],
      ['Angels Initiative — Hospital Kuala Lumpur', 'https://www.angels-initiative.com/organizations/hospital-kuala-lumpur'],
      ['Angels Initiative — Hospital Sungai Buloh', 'https://www.angels-initiative.com/organizations/hospital-sungai-buloh'],
      ['Angels Initiative — University Malaya Medical Centre', 'https://www.angels-initiative.com/organizations/university-malaya-medical-centre'],
      ['Angels Initiative — Hospital Canselor Tuanku Muhriz UKM', 'https://www.angels-initiative.com/organizations/hospital-canselor-tuanku-muhriz-ukm'],
      ['New Straits Times — IJN enhances heart attack emergency service (25 Apr 2019)', 'https://www.nst.com.my/amp/lifestyle/heal/2019/04/482786/ijn-enhances-heart-attack-emergency-service'],
      ['Institute for Public Health — National Health and Morbidity Survey 2023 fact sheet', 'https://iku.moh.gov.my/images/nhms2023/fact-sheet-nhms-2023.pdf'],
    ],
    related: ['clinic-or-emergency-department', 'check-blood-pressure-at-home', 'undiagnosed-diabetes-high-blood-pressure-young-adults'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'thalassaemia-screening-malaysia',
    title: 'Thalassaemia screening in Malaysia: who gets free tests, and what a carrier result means',
    crumb: 'Thalassaemia screening in Malaysia',
    desc: 'About 1 in 20 Malaysians carries thalassaemia. Who gets free screening, including Budget 2027’s expansion, how the blood test works, and what carrier results mean.',
    excerpt: 'About 1 in 20 Malaysians carries a thalassaemia gene, usually without knowing it. Who can get screened for free, how the test works, and what to do if you or your partner is a carrier.',
    standfirst: 'About 1 in 20 Malaysians carries a gene for thalassaemia (also spelled thalassemia), usually without any symptoms. If two carriers have children, each child has a 1 in 4 chance of a serious, lifelong blood disorder. Here is who can be screened for free, including the families newly covered by Budget 2027, how the test works, and what your result means.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Thalassemia', 'Talasemia'],
    image: 'paediatrician', imageAlt: 'A doctor listening to a baby’s chest with a stethoscope',
    keyPoints: [
      'Thalassaemia is an inherited blood disorder. Carriers (thalassaemia trait) are healthy and need no treatment, but can pass the gene to their children.',
      'About 1 in 20 Malaysians is a carrier. Of more than 920,000 Form 4 students screened between 2017 and 2020, 5.8% were carriers.',
      'If both parents are carriers, each pregnancy has a 1 in 4 chance of a child with thalassaemia major.',
      'Free screening is offered to Form 4 students, pregnant women and relatives of carriers. Budget 2027 extends it to husbands and children in at-risk carrier families.',
      'Screening starts with a full blood count. Small red blood cells (MCV below 80 fL or MCH below 27 pg) lead to a haemoglobin analysis.',
    ],
    sections: [
      { id: 'what', h: 'What is thalassaemia?', html: `<p>Thalassaemia is a group of inherited conditions in which the body makes too little normal haemoglobin, the protein in red blood cells that carries oxygen. The main types in Malaysia are <strong>alpha thalassaemia</strong>, <strong>beta thalassaemia</strong> and <strong>haemoglobin E (HbE)</strong>, which can combine with beta thalassaemia.</p>
<p>There is a big difference between carrying the gene and having the disease:</p>
<ul>
<li><strong>Carrier (thalassaemia trait or minor):</strong> one altered gene. Carriers are healthy, may have slightly small red blood cells or mild anaemia, and need no treatment. Most don’t know they are carriers.</li>
<li><strong>Thalassaemia major and other severe forms:</strong> two altered genes. Severe forms need blood transfusions every few weeks for life, plus daily medicine to remove the extra iron that transfusions build up in the body. Milder forms may need transfusions only sometimes.</li>
</ul>
<p>Malaysia’s Ministry of Health now groups patients by whether they depend on regular transfusions (transfusion-dependent thalassaemia) or not.</p>` },
      { id: 'how-common', h: 'How common is it in Malaysia?', tocLabel: 'How common it is', html: `<p>Thalassaemia is one of the most common inherited conditions in Malaysia. Between 2017 and 2020, <strong>924,487 Form 4 students</strong> were screened, and <strong>53,559 (5.8%)</strong> were carriers, about 1 in 17. Rates differ between states and communities. In February 2026, the Health Minister told Parliament that carrier rates were highest in Sabah, Selangor and Kedah.</p>
<p>The Malaysian Thalassaemia Registry’s 2023 report lists <strong>9,554 patients</strong> treated in public hospitals. Lifelong treatment is expensive: the Health Ministry estimates about <strong>RM3 million per patient</strong> from infancy to age 40.</p>
<p>Screening is working. New thalassaemia births fell by about half between 2009 and 2021, and the national programme aims to cut them by up to 75% by 2030.</p>` },
      { id: 'inheritance', h: 'How thalassaemia is passed on', tocLabel: 'How it is passed on', html: `<p>Everyone has two copies of the genes involved, one from each parent. When <strong>both parents are carriers</strong> of the same type, each pregnancy has:</p>
<div class="table-wrap"><table>
<thead><tr><th>Chance</th><th>Child’s result</th></tr></thead>
<tbody>
<tr><td>1 in 4 (25%)</td><td>Thalassaemia major or another severe form</td></tr>
<tr><td>1 in 2 (50%)</td><td>Carrier, like the parents</td></tr>
<tr><td>1 in 4 (25%)</td><td>Not affected and not a carrier</td></tr>
</tbody></table></div>
<p>These chances are the same for every pregnancy. Having one affected child doesn’t make the next one safer. When <strong>only one parent is a carrier</strong>, each child has a 1 in 2 chance of being a carrier, but not of having a severe form from those genes.</p>
<p>This is why screening matters most for couples planning to marry or have children, and for the family of anyone found to be a carrier.</p>
${figure('mother-child', 'A mother and daughter sitting together', 'If one family member is a carrier, parents, brothers, sisters and children may be carriers too.')}` },
      { id: 'budget-2027', h: 'What Budget 2027 changes', tocLabel: 'Budget 2027 changes', html: `<p>Budget 2027, tabled on 9 October 2026, extends <strong>free thalassaemia screening by the Ministry of Health to husbands and children in at-risk carrier families</strong>, to reduce the number of babies born with thalassaemia major.</p>
<p>In practice, this means that if a woman is found to be a carrier, for example during pregnancy, her husband and children can be screened for free. The government has not yet announced a start date or how families will be called for screening. Ask at your Klinik Kesihatan if you think your family qualifies.</p>` },
      { id: 'who', h: 'Who is screened for free', tocLabel: 'Free screening', html: `<ul>
<li><strong>Form 4 students:</strong> the national school programme has offered free screening since 2016, with parents’ written consent. Each student gets a Thalassaemia Screening Card showing their result.</li>
<li><strong>Pregnant women:</strong> screened as part of antenatal care at government clinics since 2009.</li>
<li><strong>Relatives of carriers and patients:</strong> parents, brothers, sisters and children (known as cascade screening).</li>
<li><strong>From 2027:</strong> husbands and children in at-risk carrier families, under Budget 2027.</li>
<li><strong>Anyone who asks:</strong> government health clinics also offer voluntary screening, including for couples planning to marry. Premarital thalassaemia screening is voluntary in Malaysia, unlike HIV screening for Muslim couples.</li>
</ul>
<p>Keep your screening card or result safely. You only need to be screened once, as your genes don’t change.</p>` },
      { id: 'test', h: 'How the test works', tocLabel: 'The test', html: `<ol>
<li><strong>Full blood count (FBC):</strong> a routine blood test. Thalassaemia is suspected if your red blood cells are small, with an MCV below 80 fL or an MCH below 27 pg.</li>
<li><strong>Haemoglobin analysis:</strong> a laboratory test (HPLC or capillary electrophoresis) that identifies beta thalassaemia, HbE and some other types.</li>
<li><strong>DNA analysis:</strong> done when needed, mainly to confirm alpha thalassaemia, which a haemoglobin analysis can miss.</li>
</ol>
<p>You don’t usually need to fast. Some types, including mild alpha thalassaemia and HbE, can show normal red cell sizes, so a normal FBC doesn’t always rule out being a carrier. If thalassaemia runs in your family, tell the doctor.</p>
${figure('blood-sample', 'A blood sample tube being prepared for testing', 'Screening starts with a routine full blood count, the same test used in a health check.')}` },
      { id: 'iron', h: 'Thalassaemia trait or iron deficiency?', tocLabel: 'Trait or low iron?', html: `<p>Both thalassaemia trait and iron deficiency cause small red blood cells, and both are common in Malaysia, so they are easily confused. A doctor can tell them apart with an iron test (ferritin) and a haemoglobin analysis.</p>
<ul>
<li><strong>Don’t start iron tablets</strong> just because a blood test shows small red cells or mild anaemia. Iron doesn’t help thalassaemia trait, and extra iron can build up over time.</li>
<li>Severe iron deficiency can hide beta thalassaemia trait on the haemoglobin analysis. Your doctor may treat the iron deficiency first and repeat the test, although couples at risk should still be fully tested.</li>
</ul>` },
      { id: 'results', h: 'If you or your partner is a carrier', tocLabel: 'If you are a carrier', html: `<ul>
<li><strong>You are healthy.</strong> Being a carrier doesn’t turn into thalassaemia major, and you don’t need treatment.</li>
<li><strong>Tell your family.</strong> Your parents, brothers, sisters and children may also be carriers and can be screened.</li>
<li><strong>Test your partner</strong> before or early in pregnancy. If only one of you is a carrier, your children cannot have a severe form from those genes.</li>
<li><strong>If you are both carriers,</strong> ask for <strong>genetic counselling</strong>. A counsellor will explain your options without pressure. These include testing a pregnancy early by chorionic villus sampling (CVS) or amniocentesis, which carry a small risk of miscarriage, or IVF with genetic testing of embryos before pregnancy. Some of the DNA tests are done by private laboratories, so ask about costs.</li>
</ul>
<div class="box box--pink" role="note"><span class="box__title">See a doctor if a child has</span><ul><li>Pale skin, poor feeding or slow growth</li><li>Unusual tiredness or breathlessness</li><li>A swollen tummy or yellow eyes</li></ul><p style="font-size:16px;line-height:1.6">Severe thalassaemia usually shows in the first two years of life.</p></div>` },
      { id: 'where', h: 'Where to get screened in Kuala Lumpur', tocLabel: 'Where to get screened', html: `<p><strong>Klinik Kesihatan</strong> (government health clinics) offer free walk-in, voluntary and family screening. Bring your MyKad, and if you are a relative of a carrier, their screening card or result.</p>
<p>Private GP clinics can do a full blood count and send blood for haemoglobin analysis at a private laboratory, for a fee. Children with thalassaemia in Kuala Lumpur are treated at government hospitals, including Hospital Tunku Azizah, which also offers stem cell transplants, the only established cure.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for a blood test',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Any GP clinic can do a full blood count and arrange further tests if your red blood cells are small. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, with opening hours and directions.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['Is thalassaemia screening free in Malaysia?', 'Yes, for Form 4 students, pregnant women, relatives of carriers and patients, and anyone who asks at a government health clinic. Budget 2027 extends free screening to husbands and children in at-risk carrier families.'],
      ['How common is thalassaemia in Malaysia?', 'About 1 in 20 Malaysians is a carrier. Among more than 920,000 Form 4 students screened between 2017 and 2020, 5.8% were carriers.'],
      ['What is the difference between thalassaemia minor and major?', 'Thalassaemia minor (trait) means you carry one altered gene. You are healthy and need no treatment. Thalassaemia major means two altered genes and usually needs regular blood transfusions for life.'],
      ['If both parents are thalassaemia carriers, will the baby have it?', 'Not necessarily. Each pregnancy has a 1 in 4 chance of thalassaemia major, a 1 in 2 chance of being a carrier, and a 1 in 4 chance of being unaffected. Genetic counselling can explain your options.'],
      ['Which blood test detects thalassaemia?', 'Screening starts with a full blood count. If the red cells are small (MCV below 80 fL or MCH below 27 pg), a haemoglobin analysis follows, and sometimes DNA analysis for alpha thalassaemia.'],
      ['Is premarital thalassaemia screening compulsory in Malaysia?', 'No. Premarital thalassaemia screening is voluntary, although it is strongly encouraged. HIV screening is the premarital test that is compulsory for Muslim couples.'],
    ],
    sources: [
      ['MOH / MaHTAS — Clinical Practice Guidelines: Management of Thalassaemia, 2nd edition (2024)', 'https://mymahtas2.moh.gov.my/files/e-CPG%20Thalas-16_8_25.pdf'],
      ['Ministry of Finance — Budget 2027 speech (9 Oct 2026)', 'https://belanjawan.mof.gov.my/pdf/belanjawan2027/ucapan/ub27.pdf'],
      ['Bernama — Health Ministry gets RM47.7 bln to strengthen healthcare services (9 Oct 2026)', 'https://bernama.com/en/general/news.php?id=2617970'],
      ['The Star — Thalassaemia treatment costs RM3mil per patient, Parliament told (23 Feb 2026)', 'https://www.thestar.com.my/news/nation/2026/02/23/thalassemia-treatment-costs-rm3mil-per-patient-parliament-heard'],
      ['Berita RTM — 57,910 students identified as thalassaemia carriers (23 Feb 2026)', 'https://berita.rtm.gov.my/nasional/senarai-berita-nasional/senarai-artikel/57910-murid-dikesan-pembawa-talasemia/'],
      ['MyGOV — Premarital HIV screening (updated Aug 2026)', 'https://www.malaysia.gov.my/my/topics/ujian-saringan-hiv-praperkahwinan'],
    ],
    related: ['budget-2027-health-malaysia', 'free-health-screening-malaysia', 'hpv-vaccine-malaysia'],
  },
];
