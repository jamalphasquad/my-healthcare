// Articles published 6 November 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-06';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NOV_2026_F = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'frozen-shoulder-pain-malaysia',
    title: 'Frozen shoulder and shoulder pain (sakit bahu): stages, what helps, and when to see a doctor',
    crumb: 'Frozen shoulder',
    desc: 'Frozen shoulder and sakit bahu: the stages, why diabetes matters, exercises that help, steroid injections and surgery, other causes of shoulder pain, and when it’s an emergency.',
    excerpt: 'A shoulder that gets steadily more painful and stiff, until you can’t reach behind your back, is often frozen shoulder. Who gets it, why diabetes matters, what the evidence says about exercises, injections and surgery, and how to tell it from a rotator cuff problem.',
    standfirst: 'Frozen shoulder (adhesive capsulitis) happens when the capsule around the shoulder joint becomes inflamed, tight and thick, causing pain and stiffness that can last a year or more. It mostly affects people aged 40 to 60, especially women and people with diabetes. Staying gently active helps, and treatment can ease the pain while the shoulder recovers.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Frozen shoulder', 'Adhesive capsulitis', 'Shoulder pain'],
    image: 'treatment-room', imageAlt: 'A clean, empty clinic treatment room with an examination bed',
    keyPoints: [
      'Frozen shoulder affects about 2 to 5% of people, mostly aged 40 to 60, and more often women. Diabetes makes it about 5 times more likely.',
      'It causes pain, often worse at night, and stiffness in every direction, so it becomes hard to reach behind your back or put on a shirt.',
      'It usually goes through a painful freezing stage, a stiff frozen stage and a slow thawing stage, over 1 to 3 years. Some people keep a little stiffness.',
      'Keep the shoulder moving. Gentle exercises, painkillers, physiotherapy and a steroid injection in the early painful stage all help.',
      'In a large UK trial, surgery and manipulation weren’t clearly better than physiotherapy with a steroid injection, so they are usually kept for shoulders that don’t improve.',
    ],
    sections: [
      { id: 'what', h: 'What is frozen shoulder, and who gets it?', tocLabel: 'What it is', html: `<p>The shoulder joint is surrounded by a capsule of tough tissue. In frozen shoulder, the capsule becomes inflamed, then thickens and tightens, leaving less room for the joint to move. The cause is often unclear.</p>
<p><strong>It is more likely if you:</strong></p>
<ul>
<li>are <strong>aged 40 to 60</strong>, especially if you are a woman</li>
<li>have <strong>diabetes</strong>. About 1 in 8 people with diabetes get frozen shoulder, about 5 times the rate in other people, and it can be more stubborn. In Malaysia, 15.6% of adults have diabetes, and 2 in 5 of them don’t know it. If you have frozen shoulder, it is worth <a href="/articles/normal-blood-sugar-level-malaysia/">checking your blood sugar</a>.</li>
<li>have <a href="/articles/thyroid-hyperthyroidism-hypothyroidism-malaysia/">thyroid disease</a>, heart disease or Parkinson’s disease</li>
<li>have had your arm kept still after an injury, fracture or surgery, even a minor wrist or elbow injury in a sling or cast</li>
</ul>
<p>Between 2 and 5% of people develop frozen shoulder, and in up to 3 in 10 it later affects the other shoulder.</p>` },
      { id: 'symptoms', h: 'Symptoms and stages', tocLabel: 'Symptoms and stages', html: `<p>Frozen shoulder causes a dull ache around the outer shoulder and upper arm, <strong>pain at night</strong> that disturbs sleep, and stiffness when moving the arm in any direction, even when someone else moves it for you. Everyday tasks such as fastening a bra, reaching behind your back or into a high cupboard become hard.</p>
<div class="table-wrap"><table>
<thead><tr><th>Stage</th><th>Usually lasts</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>Freezing</td><td>2 to 9 months</td><td>Pain gradually builds, and movement starts to get worse</td></tr>
<tr><td>Frozen</td><td>4 to 12 months</td><td>Pain may ease, but the shoulder is very stiff</td></tr>
<tr><td>Thawing</td><td>6 months to 2 years</td><td>Movement slowly returns</td></tr>
</tbody></table></div>
<p>The whole process can take up to 3 years. These stages overlap, and recovery isn’t always complete: studies suggest many people regain most but not all of their movement, and people with diabetes are more likely to keep some stiffness.</p>
<p><strong>Diagnosis</strong> is usually made by examining the shoulder. An <strong>X-ray</strong> is often normal and is used to rule out other problems such as arthritis. An MRI isn’t usually needed. A doctor may do blood tests to check for diabetes or thyroid disease.</p>` },
      { id: 'treatment', h: 'What helps', tocLabel: 'What helps', html: `<ul>
<li><strong>Keep moving</strong> as much as you can, within your pain. Using a sling or resting the arm for long periods makes stiffness worse.</li>
<li><strong>Painkillers:</strong> paracetamol, then an anti-inflammatory such as ibuprofen if suitable.</li>
<li><strong>Heat:</strong> a heat pack for up to 20 minutes before exercises can help.</li>
<li><strong>Physiotherapy:</strong> usually for at least 6 weeks, with exercises to do at home.</li>
<li><strong>Steroid injection:</strong> an injection into the shoulder joint can ease pain and help movement, especially early on, in the first few months. Adding it to physiotherapy works better than physiotherapy alone. In people with diabetes, it can raise blood sugar for a few days, so check your levels.</li>
</ul>
<p><strong>Two simple exercises</strong> (stop if the pain gets worse):</p>
<ul>
<li><strong>Pendulum:</strong> hold a table with your good arm, bend forward and let the sore arm hang. Swing it gently back and forth, then in small circles, for 2 to 3 minutes, several times a day.</li>
<li><strong>Wall climb:</strong> face a wall and walk your fingers up it as high as you can without too much pain. Hold for 15 to 30 seconds, and repeat 2 to 4 times.</li>
</ul>
<p><strong>If it doesn’t improve:</strong> options include a large-volume injection to stretch the joint (hydrodilatation), which helps mainly in the short term, <strong>manipulation under anaesthetic</strong>, and <strong>keyhole surgery</strong> to release the tight capsule. In the UK FROST trial of 503 people, published in <em>The Lancet</em> in 2020, surgery, manipulation and physiotherapy with a steroid injection all gave similar results at a year, and surgery had more serious complications. So these are usually kept for shoulders that remain painful and stiff despite other treatment.</p>
<p><strong>Be careful with forceful “cracking” or deep massage.</strong> Malaysian specialists warn that forcing a stiff shoulder can cause fractures in weak bones or tear the tendons. See a doctor first.</p>
${figure('physio-weights', 'A pair of small blue dumbbells, trainers and an exercise ball', 'Gentle, regular exercises help keep the shoulder moving while it recovers.')}` },
      { id: 'other', h: 'Other causes of shoulder pain (sakit bahu)', tocLabel: 'Other causes', html: `<div class="table-wrap"><table>
<thead><tr><th>Cause</th><th>Typical signs</th></tr></thead>
<tbody>
<tr><td>Rotator cuff problems</td><td>Pain when lifting the arm out to the side or overhead, weakness, night pain. Movement is usually fine if someone else moves your arm. Most improve with exercises over weeks to months, without surgery</td></tr>
<tr><td>Calcific tendinopathy</td><td>Sudden, severe shoulder pain from calcium deposits in a tendon</td></tr>
<tr><td>Arthritis</td><td>Pain with activity, grinding, stiffness, usually in older adults. Shows on X-ray</td></tr>
<tr><td>A problem in the neck</td><td>Pain spreading from the neck into the shoulder and arm, sometimes with tingling. See our guide to <a href="/articles/slipped-disc-sciatica-malaysia/">slipped discs</a></td></tr>
</tbody></table></div>
<p><strong>Call <a href="tel:999">999</a></strong> if arm or shoulder pain comes with chest pain or tightness, breathlessness or sweating, as it could be a <a href="/articles/stroke-heart-attack-kuala-lumpur/">heart attack</a>. Don’t drive yourself.</p>
<p><strong>Go to an emergency department</strong> if you can’t move your arm after an injury, the shoulder has changed shape, or the arm is numb, hot or cold. Don’t try to put a dislocated shoulder back yourself.</p>` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<ul>
<li>shoulder pain that is getting worse, or hasn’t improved after 2 weeks</li>
<li>you can’t move your arm normally, or pain wakes you at night</li>
<li>both shoulders are affected, or you have a fever</li>
<li>you have diabetes and a stiff shoulder</li>
</ul>
<p>After an injury or surgery, ask when you can start gentle shoulder exercises, to help prevent stiffness.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a shoulder checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine your shoulder, arrange an X-ray and blood sugar test, prescribe pain relief, and refer you for physiotherapy, an injection or to an orthopaedic specialist. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What are the first signs of frozen shoulder?', 'Gradually worsening shoulder pain, often at night, followed by stiffness that makes it hard to reach behind your back or overhead.'],
      ['How long does frozen shoulder last?', 'Usually 1 to 3 years, through freezing, frozen and thawing stages. Treatment can ease pain during this time.'],
      ['Who gets frozen shoulder?', 'Mostly people aged 40 to 60, more often women. People with diabetes or thyroid disease, or whose arm has been kept still after an injury, are at higher risk.'],
      ['Does frozen shoulder go away on its own?', 'It usually improves slowly over time, but some people keep some stiffness. Exercises, physiotherapy and injections can help.'],
      ['Should I rest a frozen shoulder?', 'No. Keep moving it gently, within your pain. Long periods of rest make stiffness worse.'],
      ['Does a steroid injection help frozen shoulder?', 'Yes, particularly in the early, painful stage. It works better alongside physiotherapy.'],
      ['Do I need surgery for frozen shoulder?', 'Most people don’t. A large trial found surgery wasn’t clearly better than physiotherapy with a steroid injection, so it is kept for shoulders that don’t improve.'],
      ['Can shoulder pain be a heart attack?', 'Yes. Call 999 if arm or shoulder pain comes with chest pain or tightness, breathlessness or sweating.'],
    ],
    sources: [
      ['NHS — Frozen shoulder (Jun 2024)', 'https://www.nhs.uk/conditions/frozen-shoulder/'],
      ['NHS — Shoulder pain', 'https://www.nhs.uk/conditions/shoulder-pain/'],
      ['American Academy of Orthopaedic Surgeons — Frozen shoulder', 'https://www.orthoinfo.org/en/diseases--conditions/frozen-shoulder/'],
      ['American Academy of Orthopaedic Surgeons — Rotator cuff tears', 'https://www.orthoinfo.org/en/diseases--conditions/rotator-cuff-tears/'],
      ['Date and Rahman — Frozen shoulder: overview of clinical presentation and review of the current evidence base (Future Science OA, 2020)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7720362/'],
      ['Zreik et al. — Adhesive capsulitis of the shoulder and diabetes: a meta-analysis (2016)', 'https://knowledge.lancashire.ac.uk/id/eprint/26358/'],
      ['Rangan et al. — UK FROST trial (The Lancet, Oct 2020)', 'https://eprints.whiterose.ac.uk/id/eprint/161540/'],
      ['Cochrane — Manual therapy and exercise for adhesive capsulitis (2014)', 'https://www.cochrane.org/evidence/CD011275_manual-therapy-and-exercise-adhesive-capsulitis-frozen-shoulder'],
      ['Alberta Health — Frozen shoulder exercises (Jul 2024)', 'https://myhealth.alberta.ca/Health/aftercareinformation/pages/conditions.aspx?hwid=uf8298'],
      ['Sinar Daily — Women aged 40 to 60 at risk of suffering from frozen shoulder (Jan 2025)', 'https://www.sinardaily.my/article/224607/focus/national/women-aged-40-to-60-at-risk-of-suffering-from-frozen-shoulder'],
      ['Galen Centre — Recognising and treating a frozen shoulder (Jan 2025)', 'https://ova.galencentre.org/recognising-and-treating-a-frozen-shoulder/'],
      ['CodeBlue — NHMS 2023: over two million adults live with three NCDs (May 2024)', 'https://codeblue.galencentre.org/2024/05/over-two-million-adults-in-malaysia-live-with-three-ncds-nhms-2023/'],
    ],
    related: ['trigger-finger-carpal-tunnel-malaysia', 'slipped-disc-sciatica-malaysia', 'normal-blood-sugar-level-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'low-blood-pressure-darah-rendah-malaysia',
    title: 'Low blood pressure (darah rendah): normal readings, symptoms, causes and what to do',
    crumb: 'Low blood pressure',
    desc: 'Low blood pressure (tekanan darah rendah): what reading is too low, symptoms, causes such as dehydration and medicines, feeling faint, what helps, and danger signs of shock.',
    excerpt: 'A blood pressure below 90/60 is usually harmless if you feel well. But if you feel dizzy or faint when you stand up, there may be a cause worth finding. What counts as low, why it happens, what helps, and when low blood pressure is an emergency.',
    standfirst: 'Low blood pressure (tekanan darah rendah, or “darah rendah”) generally means a reading below 90/60 mmHg. For many people, especially the young and fit, it is normal and harmless. It only matters if it causes symptoms such as dizziness or fainting, or if it comes on suddenly. Here is what the numbers mean, why it happens and what to do.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Hypotension', 'Tekanan darah rendah', 'Orthostatic hypotension'],
    image: 'bp-check-desk', imageAlt: 'A blood pressure monitor on a desk',
    keyPoints: [
      'Low blood pressure generally means below 90/60 mmHg. If you feel well, it usually needs no treatment.',
      'Symptoms include dizziness or light-headedness, blurred vision, nausea, weakness and fainting, especially on standing up.',
      'Common causes are dehydration, medicines for blood pressure, depression or Parkinson’s disease, pregnancy, and heat. Sudden low blood pressure can come from bleeding or severe infection.',
      'Stand up slowly, drink more water, eat smaller meals, avoid standing for long, and don’t stop prescribed medicines on your own.',
      'Call 999 for fainting with chest pain, or cold, clammy, pale skin with fast breathing, confusion or heavy bleeding, which can mean shock.',
    ],
    sections: [
      { id: 'readings', h: 'What is a low blood pressure reading? (Bacaan tekanan darah rendah)', tocLabel: 'Readings', html: `<div class="table-wrap"><table>
<thead><tr><th>Category</th><th>Top number (systolic)</th><th>Bottom number (diastolic)</th></tr></thead>
<tbody>
<tr><td>Low</td><td>Below 90</td><td>Below 60</td></tr>
<tr><td>Optimal</td><td>Below 120</td><td>Below 80</td></tr>
<tr><td>Normal</td><td>120 to 129</td><td>80 to 84</td></tr>
</tbody></table></div>
<p>The optimal and normal bands come from Malaysia’s Clinical Practice Guidelines on hypertension, which set no lower limit. The “below 90/60” figure is the commonly used definition of low blood pressure. For high readings and how to measure at home, see our guides to <a href="/articles/blood-pressure-cholesterol-malaysia/">high blood pressure</a> and <a href="/articles/check-blood-pressure-at-home/">checking your blood pressure at home</a>.</p>
<p><strong>Low blood pressure often isn’t a problem.</strong> Fit people and those with a family history of low blood pressure may naturally have low readings and feel completely well.</p>
<p><strong>“Darah rendah” or “kurang darah”?</strong> People sometimes mix these up because the symptoms overlap. <em>Darah rendah</em> means low blood pressure. <em>Kurang darah</em> means anaemia, a low level of haemoglobin in the blood. They are different conditions with different treatments. See our guide to <a href="/articles/anaemia-iron-deficiency-malaysia/">anaemia</a>.</p>` },
      { id: 'symptoms', h: 'Symptoms', tocLabel: 'Symptoms', html: `<ul>
<li>dizziness or light-headedness (see our guide to <a href="/articles/vertigo-dizziness-malaysia/">vertigo and dizziness</a>)</li>
<li>blurred vision</li>
<li>feeling sick</li>
<li>weakness and tiredness</li>
<li>headache or palpitations</li>
<li>confusion</li>
<li>fainting</li>
</ul>
<p><strong>Types of low blood pressure:</strong></p>
<ul>
<li><strong>Postural (orthostatic) hypotension:</strong> blood pressure falls when you stand up, by at least 20 points on the top number or 10 on the bottom within 3 minutes. It causes dizziness on standing and becomes more common with age.</li>
<li><strong>After meals (postprandial):</strong> a fall in blood pressure within 2 hours of eating, mostly in older people.</li>
<li><strong>Vasovagal fainting:</strong> a sudden drop triggered by heat, standing for a long time, pain, stress or the sight of blood, often with nausea, sweating, paleness and tunnel vision first.</li>
</ul>` },
      { id: 'causes', h: 'Causes (punca darah rendah)', tocLabel: 'Causes', html: `<ul>
<li><strong>Dehydration</strong>, from hot weather, not drinking enough, vomiting or diarrhoea. See our guide to <a href="/articles/food-poisoning-gastroenteritis-malaysia/">food poisoning and rehydration</a>.</li>
<li><strong>Medicines</strong>, including blood pressure tablets, water tablets (diuretics), alpha-blockers for the prostate, and some medicines for depression or Parkinson’s disease</li>
<li><strong>Pregnancy:</strong> blood pressure normally dips in the first half of pregnancy, and usually needs no treatment. Lying on your side can help. Fainting in early pregnancy with pain or bleeding needs urgent care. See our guide to <a href="/articles/pregnancy-test-early-signs-malaysia/">early pregnancy warning signs</a>.</li>
<li><strong>Long periods of bed rest</strong></li>
<li><strong>Diabetes</strong> affecting the nerves that control blood pressure, and <strong>Parkinson’s disease</strong></li>
<li><strong>Heart problems</strong>, such as a heart attack or heart failure</li>
<li><strong>Anaemia</strong>, or <strong>blood loss</strong> from an injury or inside the body</li>
<li><strong>Adrenal gland problems</strong> (Addison’s disease)</li>
<li><strong>Severe infection (sepsis)</strong> or a severe allergic reaction (anaphylaxis)</li>
</ul>
<p><strong>Hot weather:</strong> during the 2026 hot spell, the Ministry of Health advised people to avoid being outdoors from 11 am to 4 pm, drink at least 8 glasses of water and limit caffeinated drinks.</p>
<p><strong>Fasting:</strong> older people who fast in Ramadan should review their blood pressure medicines with a doctor beforehand, rehydrate well between iftar and sahur, and take care when standing up.</p>` },
      { id: 'help', h: 'What helps (cara menaikkan tekanan darah rendah)', tocLabel: 'What helps', html: `<ul>
<li><strong>Stand up slowly</strong>, especially first thing in the morning. Sit on the edge of the bed for a minute first.</li>
<li><strong>Drink more water</strong> through the day, unless you have been told to limit fluids.</li>
<li><strong>Eat smaller, more frequent meals</strong>, with fewer heavy carbohydrates, if you feel dizzy after eating.</li>
<li><strong>Avoid standing still for long</strong>, hot baths, and too much alcohol.</li>
<li>Tensing your legs, crossing them or squeezing your thighs helps push blood back up.</li>
<li><strong>Support stockings</strong> may help some people. Ask a doctor first.</li>
<li>Raising the head of your bed slightly can help with dizziness in the morning.</li>
<li><strong>More salt</strong> helps some people, but only on a doctor’s advice, especially if you have heart or kidney disease or high blood pressure.</li>
</ul>
<p><strong>If you feel faint:</strong> lie down and raise your legs, or sit with your head between your knees, until you feel better. Stand up slowly afterwards.</p>
<p><strong>Medicines:</strong> if a medicine may be the cause, your doctor may change it. <strong>Don’t stop prescribed medicines by yourself.</strong> Medicines to raise blood pressure are rarely needed.</p>
<p><strong>Food:</strong> there is no good evidence that particular foods, such as goat meat, cure low blood pressure. Regular meals and enough fluids matter more.</p>
${figure('caring-hands', 'An older person’s hands held gently by another person', 'Dizziness on standing is more common with age and raises the risk of falls.')}` },
      { id: 'older', h: 'Older adults and falls', tocLabel: 'Older adults', html: `<p>Postural hypotension becomes more common with age and is linked to falls, even in people without symptoms. If an older relative feels dizzy on standing, or has had a fall, ask a doctor to check their blood pressure lying down and then standing, and to review their medicines.</p>` },
      { id: 'emergency', h: 'When to get help', tocLabel: 'When to get help', html: `<p><strong>Call <a href="tel:999">999</a> or go to an emergency department if someone:</strong></p>
<ul>
<li>faints and has <strong>chest pain</strong>, an irregular heartbeat, a seizure, or doesn’t wake within a minute</li>
<li>faints during exercise or while lying down</li>
<li>has <strong>pale, cold, clammy skin with fast, shallow breathing</strong>, a weak pulse, or confusion or restlessness. These are signs of <strong>shock</strong>. Lay them down with their legs raised.</li>
<li>has <strong>black, tarry stools</strong>, heavy bleeding or is vomiting blood</li>
<li>has signs of severe dehydration or infection, such as blotchy skin, drowsiness or a high fever</li>
</ul>
<p><strong>See a doctor if</strong> you often feel dizzy or faint, have fallen, or your low readings are new or come with symptoms. A doctor can check your blood pressure lying and standing, and may arrange blood tests and a heart tracing (ECG). See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get your blood pressure checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check your blood pressure lying and standing, look for causes such as dehydration, anaemia or medicines, and adjust your treatment. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What is considered low blood pressure?', 'Generally below 90/60 mmHg. If you feel well, it usually isn’t a problem and needs no treatment.'],
      ['What are the symptoms of low blood pressure?', 'Dizziness, light-headedness, blurred vision, nausea, weakness and fainting, particularly on standing up.'],
      ['What causes low blood pressure?', 'Common causes are dehydration, some medicines, pregnancy, heat and long bed rest. Heart problems, bleeding and severe infections can also cause it.'],
      ['Is darah rendah the same as kurang darah?', 'No. Darah rendah means low blood pressure. Kurang darah means anaemia, or low haemoglobin. They are different conditions.'],
      ['How can I raise low blood pressure quickly?', 'If you feel faint, lie down and raise your legs, or sit with your head between your knees. Drink water, and stand up slowly afterwards.'],
      ['What should I eat for low blood pressure?', 'Regular, smaller meals and enough fluids help most. No particular food is proven to cure it. Check with a doctor before adding extra salt.'],
      ['Is low blood pressure dangerous?', 'Usually not, but fainting can cause injuries, and sudden low blood pressure with chest pain, confusion, or cold, clammy skin is an emergency.'],
      ['Why do I feel dizzy when I stand up?', 'Blood pressure can drop briefly on standing, which is called postural hypotension. It is common with dehydration, some medicines and older age.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical practice guidelines: management of hypertension, 5th edition (2018)', 'https://mymahtas2.moh.gov.my/files/CPG%20Maagement%20of%20Hypertension%20CPG%202018%20V3.8%20FA.pdf'],
      ['NHS — Low blood pressure (hypotension)', 'https://www.nhs.uk/conditions/low-blood-pressure-hypotension/'],
      ['NHS — Fainting (Aug 2026)', 'https://www.nhs.uk/symptoms/fainting/'],
      ['Pantai Hospital — Low blood pressure or hypotension (Aug 2024)', 'https://pantai.com.my/health-pulse/hypotension-low-blood-pressure'],
      ['Cleveland Clinic — Orthostatic hypotension (Feb 2026)', 'https://my.clevelandclinic.org/health/diseases/9385-orthostatic-hypotension'],
      ['Cleveland Clinic — Low blood pressure (hypotension)', 'https://my.clevelandclinic.org/health/diseases/21156-low-blood-pressure-hypotension'],
      ['Gloucestershire Hospitals NHS Trust — Orthostatic hypotension leaflet (Jun 2025)', 'https://www.gloshospitals.nhs.uk/documents/24090/Orthostatic_hypotension_GHPI0720_06_25.pdf'],
      ['Pregnancy, Birth and Baby — Low blood pressure during pregnancy (Feb 2026)', 'https://www.pregnancybirthbaby.org.au/low-blood-pressure-during-pregnancy'],
      ['St John Ambulance — Shock', 'https://www.sja.org.uk/first-aid-advice/shock/'],
      ['The Star — Take precautions during hot weather, urges Health Ministry (25 Mar 2026)', 'https://www.thestar.com.my/news/nation/2026/03/25/take-precautions-during-hot-weather-urges-health-ministry'],
      ['Raffles Medical Group — Fasting during Ramadan: what an older person needs to know', 'https://www.rafflesmedicalgroup.com/health-resources/health-articles/fasting-during-ramadan-what-an-older-person-needs-to-know/'],
    ],
    related: ['seizures-sawan-epilepsy-malaysia', 'normal-heart-rate-palpitations-malaysia', 'blood-pressure-cholesterol-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'mouth-ulcers-cold-sores-malaysia',
    title: 'Mouth ulcers (ulser mulut) and cold sores: causes, what helps, and when to see a doctor',
    crumb: 'Mouth ulcers and cold sores',
    desc: 'Mouth ulcers (ulser mulut) and cold sores: why they happen, what helps the pain, antiviral creams, ulcers in children, and why an ulcer lasting over 2 to 3 weeks needs checking.',
    excerpt: 'Most mouth ulcers heal within 2 weeks, and cold sores within about 10 days. What causes them, what eases the pain, when ulcers that keep coming back need blood tests, and why an ulcer that won’t heal should always be checked for mouth cancer, especially if you smoke or chew sirih.',
    standfirst: 'Mouth ulcers (ulser mulut) are small, painful sores inside the mouth. They are common, aren’t contagious, and usually heal on their own within 1 to 2 weeks. Cold sores are different: they appear on or around the lips, are caused by a virus and are contagious. Occasionally, a sore that won’t heal is something more serious, so it is worth knowing when to get it checked.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Aphthous stomatitis', 'Ulser mulut', 'Herpes labialis'],
    image: 'dentist', imageAlt: 'A dentist wearing magnifying loupes examining a patient’s mouth',
    keyPoints: [
      'Mouth ulcers are usually round and white or yellow, on the inside of the cheeks, lips or tongue. They clear in 1 to 2 weeks and aren’t contagious.',
      'Triggers include biting your cheek, braces, sharp teeth, stress, tiredness, hormonal changes and some foods.',
      'Ulcers that keep coming back can be a sign of low iron, vitamin B12 or folate, or of bowel conditions, and are worth a blood test.',
      'A mouth ulcer that hasn’t healed in 2 to 3 weeks must be checked by a dentist or doctor. In Malaysia, more than 60% of mouth cancers are found late.',
      'Cold sores are caused by the herpes simplex virus. Antiviral cream works best at the first tingle. Keep them away from newborn babies and your eyes.',
    ],
    sections: [
      { id: 'ulcers', h: 'Mouth ulcers (ulser mulut)', tocLabel: 'Mouth ulcers', html: `<p>Common mouth ulcers (recurrent aphthous stomatitis) are shallow, round sores with a white or yellow centre and a red edge, on the inside of the cheeks or lips, or under the tongue. Most are small and heal within 10 to 14 days. Larger ones can take weeks and may scar. They often run in families.</p>
<p><strong>Common triggers (punca ulser mulut):</strong></p>
<ul>
<li>biting your cheek, sharp teeth, braces or dentures that rub, hard brushing, or burns from hot food</li>
<li>stress, tiredness and hormonal changes, such as around periods</li>
<li>stopping smoking</li>
<li>certain foods in some people, such as chocolate, coffee, peanuts, cheese and tomatoes</li>
<li>toothpaste containing sodium lauryl sulphate (SLS). Switching to SLS-free toothpaste may help, but the evidence is limited.</li>
</ul>
<p><strong>If ulcers keep coming back,</strong> see a doctor. Possible causes include low iron, folate or vitamin B12, coeliac disease, Crohn’s disease or ulcerative colitis, Behçet’s disease, a weakened immune system, and some medicines, such as NSAIDs and nicorandil. See our guides to <a href="/articles/anaemia-iron-deficiency-malaysia/">anaemia</a> and <a href="/articles/blood-test-results-explained-malaysia/">blood tests</a>.</p>` },
      { id: 'help', h: 'What helps (cara hilangkan ulser mulut)', tocLabel: 'What helps', html: `<ul>
<li>Use a <strong>soft toothbrush</strong>, and avoid spicy, salty, sour, crunchy or very hot food until it heals.</li>
<li>Have cool drinks through a straw, and soft foods.</li>
<li>Rinse with warm <strong>salt water</strong> (half a teaspoon in a glass of warm water, then spit it out). This is a traditional, low-risk remedy, although it hasn’t been well studied.</li>
<li>Ask a pharmacist about an <strong>antiseptic mouthwash</strong> (such as alcohol-free chlorhexidine), <strong>a numbing gel or spray</strong>, a protective paste, or low-strength steroid lozenges.</li>
<li>A dentist or doctor can prescribe stronger <strong>steroid treatments</strong> for severe or frequent ulcers.</li>
<li><strong>Honey</strong> applied to ulcers shortened healing in some small studies, but it won’t suit everyone. Don’t give honey to babies under 1.</li>
</ul>
<p><strong>Numbing gels and children:</strong> the US Food and Drug Administration warns that benzocaine, a numbing ingredient in some gels, can rarely cause a dangerous blood problem (methaemoglobinaemia), and young children are at particular risk. Ask a pharmacist before using any numbing product on a child.</p>` },
      { id: 'cancer', h: 'When an ulcer could be mouth cancer', tocLabel: 'Mouth cancer', html: `<p><strong>See a dentist or doctor if an ulcer hasn’t healed in 2 weeks</strong>, and don’t leave it beyond 3 weeks. Also get checked for:</p>
<ul>
<li>a red or white patch in the mouth</li>
<li>a lump in the mouth, on the lip or in the neck</li>
<li>numbness in the mouth or lips, or loose teeth with no obvious reason</li>
<li>persistent pain, difficulty swallowing or speaking, or a hoarse voice</li>
</ul>
<p>Most of these aren’t cancer, but mouth cancer is much easier to treat when found early. According to the Ministry of Health’s 2025 oral health guideline, Malaysia had 742 new cases and 403 deaths in 2020, and <strong>more than 60% are detected late</strong>. It is more common in people of Indian origin and among indigenous communities in Sabah and Sarawak.</p>
<p><strong>Main risk factors:</strong> smoking, chewing betel quid (<em>sirih</em>) or tobacco, alcohol, and HPV infection. Betel quid with tobacco raises the risk 3 to 8 times. Regular dental checks can pick up early changes. Government dental clinics examine new patients aged 18 and over for signs of mouth cancer.</p>` },
      { id: 'cold-sores', h: 'Cold sores', tocLabel: 'Cold sores', html: `<p>Cold sores are small blisters on or around the lips, usually caused by the <strong>herpes simplex virus type 1 (HSV-1)</strong>. Most people catch it in childhood, and the virus stays in the body for life, sometimes flaring up.</p>
<ul>
<li>They start with <strong>tingling, itching or burning</strong>, then blisters form within about 2 days, burst, scab over and heal in about 10 days.</li>
<li>Triggers include illness, sun, stress and periods.</li>
<li><strong>Contagious</strong> from the first tingle until fully healed. Avoid kissing and oral sex, and don’t share cups, towels or lip balm.</li>
</ul>
<p><strong>Treatment:</strong> antiviral cream (such as aciclovir) from a pharmacy works best if started at the first tingle. A doctor can prescribe antiviral tablets for large, painful or frequent cold sores. Lip balm with SPF 15 or more can help prevent sun-triggered ones.</p>
<p><strong>Important:</strong></p>
<ul>
<li><strong>Never kiss a newborn baby if you have a cold sore</strong>, and wash your hands. Herpes in a young baby can be very dangerous. A baby with a fever of 38°C or more, poor feeding or sores needs urgent care.</li>
<li><strong>Keep it away from your eyes.</strong> See a doctor urgently for eye pain, redness, blurred vision or sensitivity to light.</li>
<li>See a doctor if a cold sore hasn’t healed after 10 days, or you have a weakened immune system.</li>
</ul>
<p>Sores on the genitals have other causes. See our guide to <a href="/articles/syphilis-sti-testing-malaysia/">STI testing</a>.</p>` },
      { id: 'children', h: 'Mouth sores in children', tocLabel: 'In children', html: `<ul>
<li><strong>Hand, foot and mouth disease:</strong> sores in the mouth with a rash on the hands and feet. See our <a href="/articles/hfmd-children-malaysia/">HFMD guide</a>.</li>
<li><strong>Herpes gingivostomatitis:</strong> a first infection with the cold sore virus, usually at ages 1 to 5, causing fever, swollen, bleeding gums and many mouth sores. It usually clears in about 2 weeks. A doctor can advise whether antiviral treatment is worthwhile.</li>
</ul>
<p>The main risk is <strong>dehydration</strong>, as children refuse to drink because of the pain. Offer cold drinks, ice lollies and oral rehydration fluid, and give paracetamol for pain. Fluids matter more than food. See a doctor urgently if your child refuses all drinks, has far fewer wet nappies or dark urine, or is hard to wake. See our guide to <a href="/articles/fever-in-children-malaysia/">fever in children</a>.</p>` },
      { id: 'doctor', h: 'When to see a doctor or dentist', tocLabel: 'When to get help', html: `<ul>
<li>an ulcer lasting more than 2 to 3 weeks</li>
<li>ulcers that keep coming back, are unusually large, or are spreading or near the throat</li>
<li>ulcers that bleed or become redder and more painful</li>
<li>sores on the skin or genitals as well as in the mouth, or swollen joints</li>
<li>a sharp tooth, brace or denture that keeps rubbing</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a mouth ulcer checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check a persistent ulcer, arrange blood tests for recurrent ulcers, prescribe antiviral or steroid treatment, and refer you to a dentist or oral surgeon if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What causes mouth ulcers?', 'Usually minor injury, such as biting your cheek or braces, stress, tiredness, hormonal changes or some foods. Ulcers that keep returning can be linked to low iron, B12 or folate.'],
      ['How long do mouth ulcers last?', 'Most heal within 1 to 2 weeks. See a dentist or doctor if one hasn’t healed after 2 to 3 weeks.'],
      ['How can I get rid of a mouth ulcer quickly?', 'There is no instant cure, but a soft toothbrush, avoiding spicy or sour food, an antiseptic mouthwash, a numbing gel from a pharmacy and salt-water rinses can ease it while it heals.'],
      ['Which vitamins help mouth ulcers?', 'If you are low in iron, vitamin B12 or folate, treating that may reduce ulcers. Ask a doctor for a blood test rather than guessing.'],
      ['Are mouth ulcers contagious?', 'No, ordinary mouth ulcers aren’t contagious. Cold sores are.'],
      ['Can a mouth ulcer be cancer?', 'Most aren’t, but an ulcer that doesn’t heal in 2 to 3 weeks, especially if you smoke, drink or chew sirih, must be checked.'],
      ['What is the difference between a mouth ulcer and a cold sore?', 'Mouth ulcers are inside the mouth and aren’t contagious. Cold sores are blisters on or around the lips, caused by a virus, and are contagious.'],
      ['How do I treat a cold sore?', 'Use antiviral cream at the first tingle. A doctor can prescribe tablets for severe or frequent cold sores. Avoid kissing babies until it has fully healed.'],
    ],
    sources: [
      ['NHS — Mouth ulcers (Mar 2024)', 'https://www.nhs.uk/conditions/mouth-ulcers/'],
      ['NHS — Cold sores (Feb 2024)', 'https://www.nhs.uk/conditions/cold-sores/'],
      ['Ministry of Health Malaysia, Oral Health Programme — Guidelines on oral potentially malignant disorders and oral cancer (2025)', 'https://hq.moh.gov.my/ohp/images/pdf/publication/gp_primary_malignant_disorders_and_oral_cancers2025.pdf'],
      ['Ministry of Health Malaysia, Oral Health Programme — Kanser mulut flipchart', 'https://hq.moh.gov.my/ohp/images/bahan_pendidikan/Kanser-Mulut-Flipchart.pdf'],
      ['NHS — Mouth cancer symptoms', 'https://www.nhs.uk/conditions/mouth-cancer/symptoms/'],
      ['British and Irish Society for Oral Medicine — Recurrent aphthous stomatitis leaflet', 'https://www.qvh.nhs.uk/download/patient-information-leaflets/bisom-recurrent-apththous-stomatitis'],
      ['Patient.info — Oral ulceration', 'https://patient.info/doctor/Oral-Ulceration'],
      ['Liu et al. — Topical interventions for recurrent aphthous stomatitis: network meta-analysis (2022)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9227309/'],
      ['US FDA — Letter on benzocaine products (May 2018)', 'https://www.fda.gov/files/drugs/published/FDA-Letter-Regarding-Benzocaine.pdf'],
      ['NHS — Neonatal herpes (Jul 2025)', 'https://www.nhs.uk/conditions/neonatal-herpes/'],
      ['NHS — Herpes simplex eye infections (Sep 2026)', 'https://www.nhs.uk/conditions/herpes-simplex-eye-infections/'],
      ['Royal Children’s Hospital Melbourne — Herpes simplex gingivostomatitis', 'https://www.rch.org.au/kidsinfo/fact_sheets/Herpes_simplex_gingivostomatitis/'],
    ],
    related: ['hfmd-children-malaysia', 'anaemia-iron-deficiency-malaysia', 'blood-test-results-explained-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tuberculosis-tb-malaysia',
    title: 'Tuberculosis (TB, tibi, batuk kering) in Malaysia: symptoms, tests, treatment and latent TB',
    crumb: 'Tuberculosis (TB)',
    desc: 'TB (tibi, batuk kering) in Malaysia: cough over 2 weeks and other symptoms, how it spreads, sputum tests and X-rays, 6-month treatment, latent TB, BCG, and advice for contacts.',
    excerpt: 'Malaysia records more than 26,000 TB cases a year. The symptoms to look out for, how TB spreads and doesn’t, the tests, why the 6-month treatment must be finished, what latent TB means, and what to do if someone close to you has it.',
    standfirst: 'Tuberculosis (TB, tibi or batuk kering) is a bacterial infection that usually affects the lungs and spreads through the air. It is curable, but Malaysia still records more than 26,000 cases and 2,500 deaths a year. Clusters in Johor in early 2026 brought it back into the news. If you have a cough lasting more than 2 weeks, get checked.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Tuberculosis', 'Tibi', 'Latent tuberculosis'],
    image: 'stethoscope-desk', imageAlt: 'A stethoscope hanging from a shelf in a clinic',
    keyPoints: [
      'Malaysia recorded 26,183 TB cases and 2,580 deaths in 2024. About 85% of cases are in Malaysians, and Sabah, Selangor and Sarawak have the most.',
      'See a doctor for a cough lasting more than 2 weeks, especially with fever, night sweats, weight loss or coughing up blood.',
      'TB spreads through the air during close, repeated contact. It doesn’t spread through food, drink, handshakes or kissing.',
      'Standard treatment is 6 months of daily tablets. Stopping early can lead to relapse and drug-resistant TB. Most people stop being infectious after about 2 weeks of effective treatment.',
      'Latent TB means you carry the bacteria without being ill or infectious. Close contacts should be checked, and some are offered preventive treatment.',
    ],
    sections: [
      { id: 'malaysia', h: 'TB in Malaysia', tocLabel: 'In Malaysia', html: `<ul>
<li>In <strong>2024</strong>, Malaysia reported <strong>26,183 cases</strong> and <strong>2,580 deaths</strong>, about 77 cases per 100,000 people. The government aims to eliminate TB by 2035.</li>
<li>Up to 6 June <strong>2026</strong>, there were 11,257 cases, 4.4% more than the same period in 2025. The Health Minister attributed the rise to more active case-finding.</li>
<li>In February 2026, a cluster of 37 cases in <strong>Kota Tinggi, Johor</strong>, including students, led to more than 800 contacts being screened and a wave of public concern.</li>
<li>In the first weeks of 2026, Sabah had the most cases, followed by Selangor, Sarawak, Johor and Kuala Lumpur.</li>
<li><strong>About 85% of cases are in Malaysians</strong>, and about 15% in foreigners. Health officials call it a disease of poverty and crowding, and urge people not to shun patients.</li>
</ul>` },
      { id: 'spread', h: 'How TB spreads, and who is at risk', tocLabel: 'How it spreads', html: `<p>TB is caused by the bacterium <em>Mycobacterium tuberculosis</em>. Someone with active TB in the lungs releases it into the air when they cough, sneeze or speak. It spreads more slowly than flu or COVID-19, usually through <strong>prolonged, repeated contact</strong> in shared indoor air, such as at home, in hostels or in crowded workplaces.</p>
<p><strong>TB doesn’t spread</strong> through food or drink, toothbrushes, handshakes or kissing, and only people with active TB can pass it on.</p>
<p><strong>Higher risk:</strong> people with <strong>diabetes</strong>, HIV, poor nutrition, those who smoke or drink heavily, close contacts of someone with TB, and young children. Diabetes matters especially in Malaysia: in a Kelantan study, 28% of TB patients had diabetes, and they were about 3 times more likely to have poor treatment outcomes. That is why every TB patient is screened for diabetes and HIV. See our guide to <a href="/articles/normal-blood-sugar-level-malaysia/">blood sugar</a>.</p>` },
      { id: 'symptoms', h: 'Symptoms of TB', tocLabel: 'Symptoms', html: `<ul>
<li><strong>a cough lasting more than 2 weeks</strong></li>
<li>coughing up blood or phlegm</li>
<li>fever and <strong>night sweats</strong></li>
<li>loss of appetite and <strong>weight loss</strong></li>
<li>tiredness and chest pain</li>
</ul>
<p>TB can also affect other parts of the body, causing swollen glands, joint or back pain, or headaches and confusion if it reaches the brain. In children, it may show as poor weight gain and growth. Some people with TB have few or no symptoms but can still spread it.</p>
<p>For other causes of a lingering cough, see our guide to a <a href="/articles/persistent-cough-malaysia/">cough that won’t go away</a>.</p>` },
      { id: 'tests', h: 'Tests for TB', tocLabel: 'Tests', html: `<ul>
<li><strong>Sputum tests:</strong> two or more samples of phlegm, ideally including an early-morning one, are examined and tested. Molecular tests (Xpert Ultra) used in Ministry of Health facilities find TB quickly and detect some drug resistance.</li>
<li><strong>Chest X-ray</strong></li>
<li><strong>Culture and drug-sensitivity tests</strong> show which medicines will work.</li>
<li><strong>Tuberculin skin test (Mantoux)</strong> and <strong>IGRA blood test</strong> show whether you have been infected. They can’t tell latent from active TB, and may stay negative in the first 8 weeks after exposure.</li>
</ul>
<p>TB is a notifiable disease under the Prevention and Control of Infectious Diseases Act 1988, so doctors must report cases to the health office, which then traces close contacts.</p>
${figure('blood-sample', 'A blood sample tube being prepared for testing', 'Sputum tests, chest X-rays and blood tests are used to find TB.')}` },
      { id: 'treatment', h: 'Treatment', tocLabel: 'Treatment', html: `<p>Under Malaysia’s clinical practice guideline, standard treatment for lung TB takes <strong>6 months</strong>:</p>
<ul>
<li><strong>First 2 months:</strong> four medicines daily (isoniazid, rifampicin, pyrazinamide and ethambutol)</li>
<li><strong>Next 4 months:</strong> two medicines daily (isoniazid and rifampicin)</li>
</ul>
<p>TB of the brain, bones or joints needs longer treatment. Drug-resistant TB can take up to 2 years.</p>
<ul>
<li><strong>Directly observed treatment (DOT):</strong> a health worker, trained family member or volunteer watches you take your medicines. Video DOT is available in some places.</li>
<li><strong>Finish the full course</strong>, even when you feel better. Many people feel well after a few weeks, but stopping early can cause relapse and drug-resistant TB. Researchers report that a substantial share of Malaysian patients don’t complete treatment.</li>
<li><strong>Side effects:</strong> orange or red urine and tears are harmless. See a doctor quickly for yellow eyes or skin, dark urine, vomiting, rash, numbness, or changes in your vision.</li>
<li><strong>Cost:</strong> TB medicines are provided free at government health facilities.</li>
<li><strong>Infectiousness:</strong> most people stop being infectious after about 2 weeks of effective treatment, but your doctor will decide when it is safe to return to work or school.</li>
</ul>` },
      { id: 'latent', h: 'Latent TB', tocLabel: 'Latent TB', html: `<p>About a quarter of people worldwide have been infected with TB bacteria. In <strong>latent TB</strong>, the bacteria are inactive: you feel well, you can’t pass it on, and your chest X-ray is usually normal. About 5 to 10% go on to develop active TB, most often in the first few years, and the risk is higher with a weak immune system, diabetes, or in young children.</p>
<p><strong>Preventive treatment</strong> greatly lowers the risk. Malaysia’s guideline recommends it for groups such as household contacts, people with HIV, people on dialysis or some immune-suppressing medicines, and young children, usually with a 3-month course. Children under 5 who have been in contact with TB are at highest risk and should be checked promptly.</p>` },
      { id: 'contacts', h: 'If someone close to you has TB', tocLabel: 'If you’re a contact', html: `<ul>
<li>Go for screening when the health office contacts you, even if you feel well. Tests may be repeated after 8 weeks.</li>
<li>Keep rooms well ventilated, with windows open and fans on.</li>
<li>The person with TB should cover coughs and wear a mask, especially in the first weeks of treatment.</li>
<li><strong>Support them</strong> to finish treatment. People with TB aren’t dangerous once treated, and stigma stops people from coming forward.</li>
</ul>
<p>The Ministry of Health also advises wearing a mask if you have a cough or are in crowded places.</p>
<p><strong>BCG vaccine:</strong> Malaysian babies get BCG at birth. It protects young children against severe forms of TB, such as TB meningitis. Its protection against lung TB in adults is uncertain, so vaccinated people can still get TB. See our <a href="/articles/baby-vaccination-schedule-malaysia/">baby vaccination schedule</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get checked for TB',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'If you have a cough lasting more than 2 weeks, a GP or Klinik Kesihatan can arrange a chest X-ray and sputum test and refer you for treatment. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/fomema-clinics/', 'FOMEMA clinics']],
    faqs: [
      ['What are the symptoms of TB?', 'A cough lasting more than 2 weeks, coughing up blood, fever, night sweats, loss of appetite and weight loss.'],
      ['How does TB spread?', 'Through the air when someone with active lung TB coughs, sneezes or speaks, usually after prolonged contact. Not through food, drink, handshakes or kissing.'],
      ['Is TB curable?', 'Yes. Standard TB is cured with 6 months of medicines, as long as the full course is finished.'],
      ['How long is TB treatment?', 'Usually 6 months for lung TB: four medicines for 2 months, then two medicines for 4 months. Drug-resistant TB can take up to 2 years.'],
      ['When is someone with TB no longer infectious?', 'Usually after about 2 weeks of effective treatment, but a doctor decides when it is safe to return to work or school.'],
      ['Is TB treatment free in Malaysia?', 'TB medicines are provided free at government health facilities. Check with the clinic about other charges.'],
      ['What is latent TB?', 'An inactive infection with no symptoms. You can’t spread it, but it can turn into active TB, so some people are offered preventive treatment.'],
      ['Does the BCG vaccine prevent TB?', 'It protects young children from severe TB, but its protection against lung TB in adults is uncertain.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical practice guidelines: management of tuberculosis, 4th edition (2021)', 'https://mymahtas2.moh.gov.my/files/CPG-_Management_of_Tuberculosis_(4th_Edition)%20(1).pdf'],
      ['The Star — Health Ministry says committed to end tuberculosis by 2035 (24 Mar 2025)', 'https://www.thestar.com.my/news/nation/2025/03/24/health-ministry-says-committed-to-end-tuberculosis-by-2035'],
      ['Berita Harian — Kes tibi meningkat 4.4 peratus (30 Jun 2026)', 'https://www.bharian.com.my/amp/berita/nasional/2026/06/1580056/kes-tibi-meningkat-44-peratus-kematian-menurun-431-peratus-dr'],
      ['Malay Mail — Facts, risks and response: the tuberculosis outbreak in Johor (11 Feb 2026)', 'https://www.malaymail.com/news/malaysia/2026/02/11/facts-risks-and-response-what-we-know-about-the-tuberculosis-outbreak-in-johor/208744'],
      ['The Star — 85% of TB cases involve Malaysians (19 Feb 2026)', 'https://www.thestar.com.my/news/nation/2026/02/19/85-of-tb-cases-involve-malaysians'],
      ['The Star — TB outbreak: mask up at crowded places, public urged (21 Feb 2026)', 'https://www.thestar.com.my/news/nation/2026/02/21/tb-outbreak-mask-up-at-crowded-places-like-ramadan-bazaars-public-urged'],
      ['The Vibes — 3,161 TB cases recorded (21 Feb 2026)', 'https://www.thevibes.com/articles/news/119817/3161-tb-cases-recorded-596-new-infections-detected'],
      ['World Health Organization — Tuberculosis fact sheet (Mar 2026)', 'https://www.who.int/news-room/fact-sheets/detail/tuberculosis'],
      ['US CDC — How TB spreads', 'https://www.cdc.gov/tb/causes/index.html'],
      ['Universiti Malaya — Tuberculosis in Malaysia: a call for vigilance (Mar 2026)', 'https://spm.um.edu.my/2026/03/06/tuberculosis-in-malaysia-a-call-for-vigilance-and-collective-responsibility/'],
      ['Diabetes and TB treatment outcomes in Kelantan (2020)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7554400'],
      ['NHS — Tuberculosis (Sep 2026)', 'https://www.nhs.uk/conditions/tuberculosis-tb/'],
    ],
    related: ['persistent-cough-malaysia', 'fomema-medical-check-up', 'pneumonia-pneumococcal-vaccine-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'constipation-sembelit-malaysia',
    title: 'Constipation (sembelit): causes, what helps, laxatives, and warning signs',
    crumb: 'Constipation (sembelit)',
    desc: 'Constipation (sembelit): common causes, how much fibre you need, foods that work, which laxatives to use, constipation in children and pregnancy, and when to see a doctor.',
    excerpt: 'Constipation affects about 1 in 10 Malaysians. What counts as constipation, the foods and habits with the best evidence, how the different laxatives work and how quickly, what to do for babies, children and in pregnancy, and the warning signs not to ignore.',
    standfirst: 'Constipation (sembelit) means passing stools less often than usual, or having hard stools that are difficult to pass. It is very common, especially in women, older people and during pregnancy, and it often improves with simple changes. But a new change in your bowel habit, particularly after 50 or with bleeding, should be checked.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Constipation', 'Sembelit', 'Laxatives'],
    image: 'fresh-vegetables', imageAlt: 'Fresh broccoli, tomatoes, cucumber and red peppers on a wooden table',
    keyPoints: [
      'Constipation usually means fewer than 3 bowel movements a week, or hard stools, straining or a feeling of not emptying. About 1 in 10 Malaysian adults in primary care are affected.',
      'Malaysia recommends 20 to 30 g of fibre a day, but most adults fall short. Add fibre gradually with enough water.',
      'Kiwifruit, psyllium and prunes have good evidence. Regular exercise and a set toilet time help too.',
      'Macrogol (PEG) and psyllium are well-supported laxatives. Stimulant laxatives such as senna and bisacodyl work within 6 to 12 hours and are for short-term use. Check with a doctor if you need one for more than a week.',
      'See a doctor for blood in your stool, weight loss, anaemia, a new change in bowel habit after 50, or a family history of bowel cancer. Severe tummy pain with no wind or stool is an emergency.',
    ],
    sections: [
      { id: 'what', h: 'What is constipation?', tocLabel: 'What it is', html: `<p>Everyone’s bowel habit is different. Doctors usually call it constipation if, for several weeks, you have:</p>
<ul>
<li>fewer than 3 bowel movements a week</li>
<li>hard or lumpy stools</li>
<li>straining, or a feeling of not emptying fully or of something blocking the way</li>
</ul>
<p>Worldwide, about 9 to 20% of people are affected, and it is about twice as common in women. Malaysian studies have found it in about 11% of adults attending primary care, and 15% of older clinic patients.</p>` },
      { id: 'causes', h: 'Common causes', tocLabel: 'Causes', html: `<ul>
<li>not eating enough fibre or drinking enough fluids</li>
<li>not moving enough, or long periods of sitting or bed rest</li>
<li>ignoring the urge to go, or a change in routine, such as travel or shift work</li>
<li>stress, and irritable bowel syndrome</li>
<li>pregnancy and older age</li>
<li><strong>Medicines</strong>, including iron tablets, opioid painkillers such as codeine, some antacids, some antidepressants and calcium channel blockers</li>
<li>conditions such as diabetes, an <a href="/articles/thyroid-hyperthyroidism-hypothyroidism-malaysia/">underactive thyroid</a> and Parkinson’s disease</li>
</ul>
<p>Straining can cause <a href="/articles/piles-buasir-malaysia/">piles (buasir)</a> and small tears around the anus.</p>` },
      { id: 'help', h: 'What helps (cara atasi sembelit)', tocLabel: 'What helps', html: `<ul>
<li><strong>Fibre:</strong> Malaysia’s recommended intake is 20 to 30 g a day, but most adults eat less, and Malaysians average under 2 servings each of fruit and vegetables a day. Increase it gradually over a few weeks to avoid bloating.</li>
<li><strong>Foods with the best evidence:</strong> a 2025 British Dietetic Association guideline found good support for <strong>kiwifruit</strong> (2 to 3 a day for at least 4 weeks), <strong>psyllium</strong> fibre, and rye bread. Prunes are also useful. It found less support for a general “high-fibre diet” for long-term constipation, so the type of fibre matters.</li>
<li><strong>Fluids:</strong> drink about 1.5 to 2 litres a day.</li>
<li><strong>Move more:</strong> aim for 150 minutes of activity a week.</li>
<li><strong>Toilet routine:</strong> go when you feel the urge, try after breakfast, and don’t rush. Put your feet on a low stool so your knees are above your hips.</li>
</ul>
${figure('healthy-salad', 'A table of salad, fruit and vegetables in small bowls', 'Most Malaysians eat fewer than the recommended servings of fruit and vegetables.')}` },
      { id: 'laxatives', h: 'Laxatives (ubat sembelit)', tocLabel: 'Laxatives', html: `<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>Examples</th><th>How long to work</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Bulk-forming</td><td>Ispaghula (psyllium)</td><td>Up to 3 days</td><td>Take with plenty of water. A good first choice</td></tr>
<tr><td>Osmotic</td><td>Macrogol (PEG), lactulose</td><td>2 to 3 days</td><td>Draw water into the bowel. Macrogol has strong evidence</td></tr>
<tr><td>Stimulant</td><td>Senna, bisacodyl</td><td>6 to 12 hours</td><td>Make the bowel contract. Can cause cramps. Mainly for short-term use</td></tr>
<tr><td>Softener</td><td>Docusate</td><td>12 hours to 3 days</td><td>Softens the stool</td></tr>
<tr><td>Enemas</td><td>Sodium citrate</td><td>5 to 15 minutes</td><td>For severe constipation, on advice</td></tr>
</tbody></table></div>
<ul>
<li>See a doctor if pharmacy laxatives haven’t helped after 3 days, and don’t use them for more than 7 days without advice.</li>
<li>At recommended doses, stimulant laxatives are unlikely to damage the bowel, but overuse can cause dehydration and low potassium.</li>
</ul>
<p><strong>Be careful with “detox” teas and slimming products.</strong> In 2024 and 2025, Singapore’s food authority found the undeclared laxative sennosides in slimming products made in Malaysia, and the Ministry of Health has warned about unregistered slimming products with hidden drugs. These can cause dehydration and low potassium.</p>` },
      { id: 'children', h: 'Babies and children (sembelit bayi dan kanak-kanak)', tocLabel: 'Babies and children', html: `<ul>
<li><strong>Babies:</strong> breastfed babies may go after every feed or only once a week, and both can be normal if the stool is soft. Bottle-fed babies usually go every 1 to 3 days. If you think a baby under 1 is constipated, see a doctor. Don’t give laxatives or enemas without medical advice.</li>
<li><strong>Children:</strong> signs are fewer than 3 stools a week, hard pellets, pain, or soiling their underwear. Pain makes them hold back, which makes it worse. Encourage them to sit on the toilet after meals with their feet supported, and give fibre and fluids.</li>
<li>Children often need <strong>macrogol</strong> from a doctor, sometimes for several months. See a GP early.</li>
</ul>
<p><strong>See a doctor urgently</strong> if a newborn didn’t pass stool in the first 48 hours, if constipation began in the first weeks of life, or if there is a swollen tummy with vomiting, or leg weakness.</p>` },
      { id: 'pregnancy', h: 'Constipation in pregnancy', tocLabel: 'In pregnancy', html: `<p>Try fibre, fluids and activity first. If needed, bulk-forming laxatives, then lactulose or macrogol, are preferred, as they aren’t absorbed. Senna is used only if those don’t work. Iron tablets can make constipation worse, so ask if a different preparation may help. See our <a href="/articles/pregnancy-due-date-calculator-malaysia/">pregnancy guide</a>.</p>` },
      { id: 'warning', h: 'When to see a doctor', tocLabel: 'Warning signs', html: `<p><strong>See a doctor if you have constipation with:</strong></p>
<ul>
<li><strong>blood in your stool</strong>, or dark stools</li>
<li>unexplained <strong>weight loss</strong> or <strong>anaemia</strong></li>
<li>a new, lasting change in your bowel habit, especially from age 50</li>
<li>a family history of bowel cancer</li>
<li>a lump in your tummy, or constipation that doesn’t improve after several weeks</li>
</ul>
<p>The Ministry of Health’s bowel cancer guideline advises referral for a colonoscopy when such symptoms don’t resolve in 4 to 6 weeks. See our guide to <a href="/articles/bowel-cancer-screening-malaysia/">bowel cancer screening</a>.</p>
<p><strong>Go to an emergency department</strong> for severe tummy pain with a swollen tummy, vomiting, and no wind or stool passing, which can mean a blocked bowel. Don’t eat or drink. See our guide to <a href="/articles/stomach-pain-gastric-malaysia/">stomach pain</a>.</p>
<p><strong>Older people</strong> can develop faecal impaction, where a hard mass of stool blocks the bowel. It can cause confusion, difficulty passing urine, poor appetite, and watery leakage that looks like diarrhoea. Don’t give anti-diarrhoea medicine. See a doctor.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get help',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can look for causes, review your medicines, recommend a suitable laxative, and refer you for a colonoscopy if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What is sembelit in English?', 'Sembelit is constipation: passing stools less often than usual, or hard stools that are difficult to pass.'],
      ['How often should I go to the toilet?', 'It varies from person to person. Fewer than 3 times a week, with hard stools or straining, usually counts as constipation.'],
      ['What foods help constipation?', 'Kiwifruit, prunes, psyllium fibre, and fruit, vegetables and wholegrains generally. Increase fibre gradually and drink enough water.'],
      ['What is the best laxative?', 'Psyllium and macrogol have good evidence for regular use. Stimulant laxatives such as senna or bisacodyl work faster and are mainly for short-term use.'],
      ['Are laxatives safe?', 'Yes, at the recommended dose for short periods. Long-term or heavy use should be supervised by a doctor. Don’t use them for weight loss.'],
      ['How do I help my constipated child?', 'Give fibre and fluids, and have them sit on the toilet after meals with their feet supported. See a GP early, as children often need a laxative for some months.'],
      ['Is constipation in pregnancy normal?', 'Yes, it is common. Try fibre and fluids first, then ask about bulk-forming laxatives, lactulose or macrogol.'],
      ['When is constipation serious?', 'With blood in the stool, weight loss, anaemia, a new change in bowel habit after 50, or severe pain with vomiting and no wind.'],
    ],
    sources: [
      ['NHS — Constipation', 'https://www.nhs.uk/conditions/constipation/'],
      ['NHS — Laxatives (Apr 2026)', 'https://www.nhs.uk/conditions/laxatives/'],
      ['World Gastroenterology Organisation — Constipation guideline (2025)', 'https://www.worldgastroenterology.org/guidelines/constipation/constipation-english'],
      ['Chronic constipation roundtable report, including Malaysian prevalence data (J Neurogastroenterol Motil, 2025)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12780904'],
      ['AGA-ACG — Clinical practice guideline on chronic idiopathic constipation (2023)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10542656/'],
      ['Ministry of Health Malaysia — Recommended nutrient intakes for Malaysia (2017)', 'https://hq.moh.gov.my/nutrition/wp-content/uploads/2023/12/FA-Buku-RNI.pdf'],
      ['Medical Journal of Malaysia — Malaysian Adult Nutrition Survey 2014: fruit and vegetable intake (2015)', 'https://www.e-mjm.org/2015/v70s1/mjm-sept-suppl-2189.html'],
      ['King’s College London — Kiwis could help manage chronic constipation (Oct 2025)', 'https://www.kcl.ac.uk/news/kiwis-could-help-manage-chronic-constipation'],
      ['Ministry of Health Malaysia — Management of colorectal carcinoma: quick reference', 'https://mymahtas2.moh.gov.my/files/QR%20Management%20of%20Colorectal%20%20Carcinoma.pdf'],
      ['Royal Children’s Hospital Melbourne — Constipation (Jul 2025)', 'https://www.rch.org.au/kidsinfo/fact_sheets/constipation/'],
      ['NHS — Constipation in children', 'https://www.nhs.uk/conditions/baby/health/constipation-in-children/'],
      ['UK Teratology Information Service (BUMPS) — Senna in pregnancy (Mar 2026)', 'https://medicinesinpregnancy.org/Medicine--pregnancy/Senna/'],
      ['Singapore Food Agency — Food products found adulterated (Oct 2024)', 'https://www.sfa.gov.sg/news-publications/newsroom/2024/three-food-products-found-to-be-adulterated-with-substances-not-allowed-for-use-in-food'],
      ['healthdirect Australia — Bowel obstruction (Sep 2024)', 'https://healthdirect.gov.au/bowel-obstruction'],
    ],
    related: ['piles-buasir-malaysia', 'bowel-cancer-screening-malaysia', 'stomach-pain-gastric-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'enlarged-prostate-psa-test-malaysia',
    title: 'Enlarged prostate and the PSA test: symptoms, treatment and prostate cancer screening in Malaysia',
    crumb: 'Enlarged prostate and PSA test',
    desc: 'Enlarged prostate (BPH): urinary symptoms, what helps, medicines and surgery, not being able to pass urine, the PSA test explained, and prostate cancer in Malaysia.',
    excerpt: 'Getting up at night to pass urine, a weak stream and dribbling are common in men over 50, and are often caused by an enlarged prostate. What helps, how medicines and surgery compare, what a PSA test can and can’t tell you, and what Malaysian men should know about prostate cancer.',
    standfirst: 'The prostate is a small gland below the bladder that tends to grow with age. An enlarged prostate (benign prostatic hyperplasia, or BPH) isn’t cancer, but it can make passing urine difficult. In Malaysia, about 1 in 6 men aged 40 and over has troublesome symptoms, rising to 1 in 3 at 75 and over. Prostate cancer can cause similar symptoms, and is the third most common cancer in Malaysian men.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Benign prostatic hyperplasia', 'Prostate-specific antigen', 'Prostate cancer'],
    image: 'doctor-consultation', imageAlt: 'A doctor talking with a patient across a desk',
    keyPoints: [
      'Enlarged prostate symptoms include a weak or stop-start stream, straining, dribbling, needing to go often or urgently, and getting up at night.',
      'Being suddenly unable to pass urine is an emergency. Blood in the urine should be checked promptly.',
      'Mild symptoms can be managed with lifestyle changes. Alpha-blockers work within days, and 5-alpha reductase inhibitors shrink the prostate over 6 months or more.',
      'The PSA blood test can pick up prostate cancer early, but a raised PSA doesn’t always mean cancer, and screening has benefits and harms. Men from 50, or 45 with a family history, should discuss it with their doctor.',
      'Prostate cancer is the third most common cancer in Malaysian men, and 63% of cases with staging are found late.',
    ],
    sections: [
      { id: 'what', h: 'What is an enlarged prostate?', tocLabel: 'What it is', html: `<p>The prostate sits just below the bladder, around the tube that carries urine out (the urethra). As men age, it often grows and squeezes the urethra, which makes it harder to pass urine. This is called <strong>benign prostatic hyperplasia (BPH)</strong>. Benign means it isn’t cancer.</p>
<p><strong>In Malaysia:</strong> the National Health and Morbidity Survey 2019 found that 16.3% of men aged 40 and over had probable BPH with moderate to severe symptoms, rising from 10.5% at 40 to 44 to 33.4% at 75 and over.</p>` },
      { id: 'symptoms', h: 'Symptoms', tocLabel: 'Symptoms', html: `<ul>
<li>difficulty starting to pass urine, and straining</li>
<li>a <strong>weak or stop-start stream</strong></li>
<li>dribbling at the end</li>
<li>a feeling that the bladder hasn’t emptied (<em>kencing tak lawas</em>)</li>
<li>needing to go often or urgently</li>
<li>getting up at night to pass urine (<em>kencing malam</em>)</li>
</ul>
<p>Getting up at night has other causes too, such as drinking late in the evening, alcohol, caffeine, diuretics, diabetes, heart failure and sleep apnoea. See also our guide to <a href="/articles/uti-urinary-tract-infection-malaysia/">urinary tract infections</a>.</p>
<p><strong>Go to an emergency department if you can’t pass urine at all</strong>, especially with lower tummy pain. This is acute urinary retention, and needs a catheter. Blood in the urine, fever with urinary symptoms, or side or back pain also need prompt attention. Untreated BPH can lead to infections, bladder stones and kidney damage.</p>` },
      { id: 'assessment', h: 'How it is checked', tocLabel: 'Assessment', html: `<p>A doctor will ask about your symptoms, sometimes using a short score (the International Prostate Symptom Score) and a 3-day bladder diary, and may do:</p>
<ul>
<li>a <strong>rectal examination</strong> with a gloved finger to feel the prostate</li>
<li>a <strong>urine test</strong> for infection and blood</li>
<li><strong>blood tests</strong> for kidney function and PSA, if needed</li>
<li>a <strong>urine flow test</strong> and an ultrasound of the bladder after passing urine</li>
</ul>` },
      { id: 'treatment', h: 'Treatment', tocLabel: 'Treatment', html: `<p><strong>Lifestyle changes,</strong> for mild symptoms:</p>
<ul>
<li>Drink less in the 2 hours before bed, but don’t cut down fluids too much overall.</li>
<li>Limit caffeine and alcohol.</li>
<li>Try “double voiding”: pass urine, wait a moment, then try again.</li>
<li>Treat constipation. See our guide to <a href="/articles/constipation-sembelit-malaysia/">constipation</a>.</li>
<li>Avoid cold remedies containing decongestants or antihistamines, which can make symptoms worse.</li>
</ul>
<p><strong>Medicines:</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>How it works</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Alpha-blockers (such as tamsulosin)</td><td>Relax the muscle around the urethra. Work within days</td><td>Can cause dizziness on standing and ejaculation changes. Tell your eye surgeon before cataract surgery</td></tr>
<tr><td>5-alpha reductase inhibitors (finasteride, dutasteride)</td><td>Shrink the prostate over at least 6 months</td><td>Reduce the risk of retention and surgery. Can lower libido. They halve your PSA reading, so tell your doctor</td></tr>
<tr><td>Combination</td><td>Both of the above</td><td>For larger prostates. More effective, with more side effects</td></tr>
</tbody></table></div>
<p><strong>Surgery and procedures:</strong> for severe symptoms, or complications such as retention. <strong>Transurethral resection of the prostate (TURP)</strong> is the standard operation, removing the central part of the prostate through the urethra. Other options include laser treatment, water vapour therapy and microwave treatment, some of which are offered in Malaysian private hospitals. After TURP, most men have dry orgasms (retrograde ejaculation), and some have new erection problems. Ask your surgeon about the risks of each option.</p>` },
      { id: 'psa', h: 'The PSA test', tocLabel: 'PSA test', html: `<p><strong>PSA (prostate-specific antigen)</strong> is a protein made by the prostate, measured with a blood test. A raised level can mean prostate cancer, but also BPH, a urine infection or inflammation. <strong>It isn’t a cancer test by itself.</strong></p>
<p><strong>Before the test, for 48 hours, avoid:</strong> ejaculation, vigorous exercise, and long cycling. Wait 4 to 6 weeks after a urine infection. You can eat normally.</p>
<p><strong>What screening can and can’t do:</strong></p>
<ul>
<li>The large European ERSPC trial found that, after 23 years, PSA screening cut prostate cancer deaths by 13%. About 1 death was prevented for every 456 men invited.</li>
<li>But many men with a raised PSA don’t have cancer: only about a quarter had it on biopsy. Screening can also find slow-growing cancers that would never cause harm, leading to unnecessary treatment.</li>
<li>That is why guidelines recommend <strong>an informed choice</strong>, not automatic testing. The US task force advises men aged 55 to 69 to decide individually, and not to screen from 70.</li>
<li>European urology guidelines suggest offering a test to informed men <strong>from 50</strong>, or <strong>from 45</strong> with a family history. Some Malaysian urologists recommend yearly tests from these ages.</li>
</ul>
<p>If your PSA is raised, it may be repeated, and you may have an <strong>MRI</strong> before deciding on a biopsy.</p>
${figure('blood-sample', 'A blood sample tube being prepared for testing', 'A raised PSA doesn’t always mean cancer, so results need explaining by a doctor.')}` },
      { id: 'cancer', h: 'Prostate cancer in Malaysia', tocLabel: 'Prostate cancer', html: `<ul>
<li>It is the <strong>third most common cancer in Malaysian men</strong>, with 6,441 cases recorded from 2017 to 2021, up from 4,189 in the previous five years, according to the National Cancer Registry.</li>
<li>Among cases with staging, <strong>63.3% were found at a late stage</strong>.</li>
<li>Lifetime risk is highest in Chinese men (1 in 50), then Indian (1 in 83) and Malay men (1 in 125).</li>
<li>Early prostate cancer often causes <strong>no symptoms</strong>. Advanced cancer can cause bone pain, especially in the back, along with weight loss and tiredness.</li>
<li>Not every prostate cancer needs treatment straight away. Low-risk cancers can be watched closely with PSA tests and MRI scans (<strong>active surveillance</strong>), with treatment if they grow.</li>
</ul>
<p>The PERKESO free health screening doesn’t appear to include PSA as a standard test, so check what your package covers. See our guide to <a href="/articles/free-health-screening-malaysia/">free health screening</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can assess urinary symptoms, test your urine, arrange a PSA test after discussing it with you, start treatment and refer you to a urologist. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What are the symptoms of an enlarged prostate?', 'A weak or stop-start stream, straining, dribbling, needing to go often or urgently, and getting up at night to pass urine.'],
      ['Is an enlarged prostate cancer?', 'No, BPH isn’t cancer. But prostate cancer can cause similar symptoms, so it should be checked.'],
      ['What should I do if I can’t pass urine?', 'Go to an emergency department. Sudden inability to pass urine needs a catheter.'],
      ['What is a normal PSA level?', 'It varies with age, and there is no single safe number. A doctor interprets it alongside your age, examination and other factors.'],
      ['At what age should men have a PSA test?', 'European guidelines suggest discussing it from 50, or from 45 with a family history. It is an informed choice, not an automatic test.'],
      ['Does a high PSA mean I have cancer?', 'Not necessarily. BPH, infection, recent ejaculation or cycling can raise PSA. Only about a quarter of men with a raised PSA in a large trial had cancer on biopsy.'],
      ['Will prostate surgery affect my sex life?', 'After TURP, most men have dry orgasms, and some have erection problems. Discuss risks of each option with your surgeon.'],
      ['Why do I keep waking up at night to pass urine?', 'An enlarged prostate is one cause. Others include evening drinks, caffeine, diabetes, heart failure and sleep apnoea.'],
    ],
    sources: [
      ['CodeBlue — Problems urinating? Check if you have an enlarged prostate (Jul 2022)', 'https://codeblue.galencentre.org/?p=33524'],
      ['National Cancer Institute Malaysia — Malaysia National Cancer Registry Report 2017–2021', 'https://nci.moh.gov.my/images/pdf_folder/Malaysia-National-Cancer-Registry-Report-2017-2021.pdf'],
      ['NHS — Prostate enlargement (Apr 2025)', 'https://www.nhs.uk/conditions/prostate-enlargement/'],
      ['NHS — Prostate enlargement treatment', 'https://www.nhs.uk/conditions/prostate-enlargement/treatment/'],
      ['US NIDDK — Prostate enlargement (BPH) (Jun 2024)', 'https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/prostate-enlargement-benign-prostatic-hyperplasia'],
      ['European Association of Urology — Non-neurogenic male LUTS guidelines: disease management (2026)', 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts/chapter/disease-management'],
      ['European Association of Urology — Prostate cancer guidelines: diagnostic evaluation (2026)', 'https://uroweb.org/guidelines/prostate-cancer/chapter/diagnostic-evaluation'],
      ['NHS — PSA test (Sep 2024)', 'https://www.nhs.uk/tests-and-treatments/psa-test/'],
      ['US Preventive Services Task Force — Prostate cancer screening (May 2018)', 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening'],
      ['Tampere University — Study confirms sustained reduction in prostate cancer mortality with PSA screening (Nov 2025)', 'https://www.tuni.fi/en/news/study-confirms-sustained-reduction-prostate-cancer-mortality-psa-screening'],
      ['Cleveland Clinic — Nocturia (Jul 2026)', 'https://my.clevelandclinic.org/health/symptoms/14510-nocturia'],
      ['Prostate Cancer UK — Active surveillance (May 2026)', 'https://prostatecanceruk.org/prostate-information-and-support/treatments/active-surveillance'],
    ],
    related: ['kencing-berdarah-blood-in-urine-malaysia', 'uti-urinary-tract-infection-malaysia', 'free-health-screening-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'anaemia-iron-deficiency-malaysia',
    title: 'Anaemia and iron deficiency (kurang darah): symptoms, tests, iron tablets and what to eat',
    crumb: 'Anaemia and iron deficiency',
    desc: 'Anaemia (kurang darah): symptoms, normal haemoglobin, causes such as heavy periods and bowel bleeding, thalassaemia, how to take iron tablets, and iron-rich Malaysian foods.',
    excerpt: 'About 3 in 10 Malaysian women of reproductive age have anaemia. How it feels, what your haemoglobin and ferritin mean, why men and older women need their bowel checked, how to take iron tablets properly, and which Malaysian foods are rich in iron.',
    standfirst: 'Anaemia (kurang darah) means you don’t have enough healthy red blood cells or haemoglobin to carry oxygen around the body. The most common cause is iron deficiency, but it isn’t the only one. In Malaysia, thalassaemia trait can look similar, and in men and older women, iron deficiency can be a sign of bleeding from the bowel, so it is worth finding out why you are anaemic.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Anaemia', 'Iron deficiency', 'Kurang darah'],
    image: 'blood-sample', imageAlt: 'A blood sample tube being prepared for testing',
    keyPoints: [
      'Anaemia means haemoglobin below 13 g/dL in men, 12 g/dL in non-pregnant women, or 11 g/dL in pregnancy. About 3 in 10 Malaysian women aged 15 to 49 are affected.',
      'Common symptoms are tiredness, breathlessness, a fast heartbeat, pale skin and headaches.',
      'Iron deficiency is the most common cause, often from heavy periods or pregnancy. Men and women past the menopause with iron deficiency need their stomach and bowel checked.',
      'Get tested before taking iron. Thalassaemia trait causes similar blood results, and needs different advice.',
      'Take iron tablets once a day or on alternate days, away from tea, coffee and milk, and keep them out of children’s reach. An iron overdose can be fatal for children.',
    ],
    sections: [
      { id: 'what', h: 'What is anaemia?', tocLabel: 'What it is', html: `<p>Red blood cells contain haemoglobin, which carries oxygen. In anaemia, haemoglobin (Hb) is too low. The World Health Organization’s cut-offs are:</p>
<div class="table-wrap"><table>
<thead><tr><th>Group</th><th>Anaemia if haemoglobin is below</th></tr></thead>
<tbody>
<tr><td>Men</td><td>13 g/dL</td></tr>
<tr><td>Non-pregnant women</td><td>12 g/dL</td></tr>
<tr><td>Pregnant women</td><td>11 g/dL (10.5 g/dL in the second trimester)</td></tr>
</tbody></table></div>
<p><strong>In Malaysia,</strong> national health surveys have found anaemia in 21.3% of the population in 2019, including <strong>about 3 in 10 women aged 15 to 49</strong>, about 19% of pregnant women in 2022, and about a third of people aged 60 and over.</p>
<p><strong>“Kurang darah” isn’t the same as “darah rendah”.</strong> <em>Darah rendah</em> means low blood pressure. See our guide to <a href="/articles/low-blood-pressure-darah-rendah-malaysia/">low blood pressure</a>.</p>` },
      { id: 'symptoms', h: 'Symptoms', tocLabel: 'Symptoms', html: `<ul>
<li>tiredness and lack of energy</li>
<li>shortness of breath, especially on exertion</li>
<li>a fast or pounding heartbeat</li>
<li>pale skin</li>
<li>headaches and dizziness</li>
<li>less commonly: brittle nails, hair loss, a sore tongue, restless legs, or craving ice or non-food items (pica)</li>
</ul>
<p>Mild anaemia may cause no symptoms and only show up on a blood test.</p>` },
      { id: 'causes', h: 'Causes', tocLabel: 'Causes', html: `<ul>
<li><strong>Iron deficiency</strong>, the most common cause, from:
<ul>
<li><strong>heavy periods</strong> (see our guide to <a href="/articles/period-pain-senggugut-malaysia/">period problems</a>) and pregnancy</li>
<li><strong>bleeding from the stomach or bowel</strong>, from ulcers, long-term NSAID painkillers, piles, or less often bowel or stomach cancer</li>
<li>a diet low in iron, or poor absorption, for example from coeliac disease, H. pylori infection, or long-term acid-reducing medicines</li>
<li>hookworm infection, especially in rural communities</li>
</ul></li>
<li><strong>Vitamin B12 or folate deficiency</strong>, from diet, some medicines or pernicious anaemia</li>
<li><strong>Thalassaemia</strong>, an inherited condition common in Malaysia. Carriers often have small red cells and mild anaemia, with normal iron levels. See our guide to <a href="/articles/thalassaemia-screening-malaysia/">thalassaemia screening</a>.</li>
<li><strong>Long-term conditions</strong>, including kidney disease and inflammatory diseases</li>
</ul>` },
      { id: 'tests', h: 'Tests', tocLabel: 'Tests', html: `<ul>
<li>A <strong>full blood count</strong> shows your haemoglobin and the size of your red cells (MCV). See our guide to <a href="/articles/blood-test-results-explained-malaysia/">blood test results</a>.</li>
<li><strong>Ferritin</strong> is the most useful test for iron stores. Low ferritin confirms iron deficiency, but ferritin can look falsely normal during infection or inflammation, so doctors look at the whole picture.</li>
<li><strong>Vitamin B12, folate</strong> and a <strong>thalassaemia test</strong>, if needed.</li>
</ul>
<p><strong>Why it matters to find the cause:</strong> British gastroenterology guidelines advise that men and women past the menopause with confirmed iron deficiency anaemia should have their stomach and bowel examined by <strong>gastroscopy and colonoscopy</strong>, as bleeding can be the first sign of cancer. Women who still have periods usually don’t need this unless they have other symptoms. See our guide to <a href="/articles/bowel-cancer-screening-malaysia/">bowel cancer</a>.</p>` },
      { id: 'iron', h: 'Iron tablets (ubat tambah darah)', tocLabel: 'Iron tablets', html: `<p><strong>Get tested first.</strong> Taking iron without knowing the cause can hide the problem, and iron won’t correct anaemia caused by thalassaemia trait unless you are also low in iron.</p>
<ul>
<li><strong>Dose:</strong> usually one tablet once a day. If side effects are a problem, your doctor may suggest every other day or a different preparation. Current guidance has moved away from taking it 2 or 3 times a day.</li>
<li><strong>How to take it:</strong> ideally on an empty stomach, 30 minutes before food or 2 hours after. Take it with food if it upsets your stomach.</li>
<li><strong>Keep it 2 hours apart</strong> from tea, coffee, milk, eggs and antacids, which reduce absorption.</li>
<li><strong>Side effects:</strong> constipation, diarrhoea, nausea and dark stools are common. Tarry black or red stools that may contain blood need a doctor straight away. See our guide to <a href="/articles/constipation-sembelit-malaysia/">constipation</a>.</li>
<li><strong>How long:</strong> haemoglobin is usually rechecked within about 4 weeks. Keep taking iron for about 3 months after it returns to normal, to refill your stores.</li>
<li><strong>Iron injections or drips</strong> are used if tablets aren’t tolerated or don’t work, or if iron is needed quickly.</li>
</ul>
<p><strong>Keep iron tablets locked away from children.</strong> An overdose can be fatal for a young child.</p>` },
      { id: 'food', h: 'Iron-rich foods', tocLabel: 'What to eat', html: `<p>Diet helps prevent iron deficiency, but tablets are usually needed to treat it. Malaysia’s Recommended Nutrient Intakes list these sources:</p>
<ul>
<li><strong>Haem iron (best absorbed):</strong> meat, poultry and fish, including liver, lean beef, <em>ikan bilis</em>, cockles and <em>tenggiri</em></li>
<li><strong>Non-haem iron:</strong> leafy greens such as spinach, <em>pucuk paku</em> and <em>kangkung</em>, beans and chickpeas, tofu, eggs, and bread and fortified cereals</li>
</ul>
<ul>
<li>Eating vitamin C-rich fruit and vegetables, or some meat or fish, with a meal helps absorb non-haem iron.</li>
<li><strong>Tea and coffee</strong> reduce absorption. In one study, waiting an hour after a meal halved the effect of tea, so have your teh or kopi between meals rather than with them.</li>
<li>Avoid liver in pregnancy, as it contains high levels of vitamin A.</li>
</ul>
${figure('fresh-vegetables', 'Fresh broccoli, tomatoes, cucumber and red peppers on a wooden board', 'Vitamin C-rich vegetables and fruit help your body absorb iron from plant foods.')}` },
      { id: 'groups', h: 'Pregnancy and children', tocLabel: 'Pregnancy and children', html: `<ul>
<li><strong>Pregnancy:</strong> anaemia is linked to heavy bleeding at delivery, low birth weight and premature birth. Malaysian antenatal clinics give iron and folic acid routinely, free at government clinics. Take them as advised, even if they are unpleasant, and tell the clinic if side effects are a problem. See our guide to <a href="/articles/pregnancy-test-early-signs-malaysia/">early pregnancy</a>.</li>
<li><strong>Babies and children:</strong> a 2022 national survey sample found anaemia in nearly half of children aged 6 to 59 months, although the estimate is uncertain. Anaemia is linked to poorer learning and development. Very large amounts of cow’s milk reduce iron absorption, so offer iron-rich foods. Ask a doctor before giving iron supplements.</li>
</ul>` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<p><strong>See a doctor</strong> if you feel tired or breathless for no clear reason, have very heavy periods, or look pale.</p>
<p><strong>Go to an emergency department</strong> if you have black, tarry stools, vomiting blood, heavy bleeding, chest pain, fainting or severe breathlessness. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a blood test',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check your blood count and iron levels, find out why you are anaemic, start treatment and refer you for further tests. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including PeKa B40 panel clinics.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/peka-b40-clinics/', 'PeKa B40 panel clinics']],
    faqs: [
      ['What is a normal haemoglobin level?', 'At least 13 g/dL in men, 12 g/dL in non-pregnant women and 11 g/dL in pregnancy, according to the World Health Organization. Labs may use slightly different ranges.'],
      ['What are the symptoms of anaemia?', 'Tiredness, shortness of breath, a fast heartbeat, pale skin, headaches and dizziness.'],
      ['What causes iron deficiency?', 'Heavy periods, pregnancy, bleeding from the stomach or bowel, a diet low in iron, or poor absorption.'],
      ['Is kurang darah the same as darah rendah?', 'No. Kurang darah means anaemia. Darah rendah means low blood pressure.'],
      ['How long should I take iron tablets?', 'Usually for about 3 months after your haemoglobin returns to normal, to refill your iron stores. Your doctor will check your progress.'],
      ['How should I take iron tablets?', 'Once a day or on alternate days, ideally on an empty stomach, and 2 hours apart from tea, coffee, milk and antacids.'],
      ['Which foods are high in iron?', 'Meat, liver, fish, ikan bilis and cockles, and plant foods such as spinach, pucuk paku, kangkung, beans and tofu.'],
      ['Should I take iron if I have thalassaemia trait?', 'Only if tests show you are low in iron. Thalassaemia trait causes small red cells, but iron won’t correct it on its own.'],
    ],
    sources: [
      ['World Health Organization — Anaemia fact sheet (Feb 2025)', 'https://www.who.int/news-room/fact-sheets/detail/anaemia'],
      ['Institute for Public Health — National Health and Morbidity Survey 2019 fact sheet', 'https://iku.nih.gov.my/images/IKU/Document/REPORT/NHMS2019/Fact_Sheet_NHMS_2019-English.pdf'],
      ['Institute for Public Health — NHMS 2022 maternal and child health fact sheet', 'https://iku.nih.gov.my/images/nhms-2022/5a.-fact-sheet-nhms-mch-english.pdf'],
      ['Bernama — 21.3% of Malaysians have anaemia, NHMS 2019 (Jul 2021)', 'https://www.bernama.com/en/general/news.php?id=1985914'],
      ['Anaemia among older Malaysians, NHMS 2015', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5949179/'],
      ['British Society of Gastroenterology — Guidelines for iron deficiency anaemia in adults (2021)', 'https://www.bsg.org.uk/getmedia/15dd83b2-0ca5-429b-bd06-5c15887238ea/IRONDE_1.pdf'],
      ['NHS — Iron deficiency anaemia', 'https://www.nhs.uk/conditions/iron-deficiency-anaemia/'],
      ['NHS — How and when to take ferrous sulfate', 'https://www.nhs.uk/medicines/ferrous-sulfate/how-and-when-to-take-ferrous-sulfate/'],
      ['Ministry of Health Malaysia — Recommended nutrient intakes for Malaysia (2017)', 'https://hq.moh.gov.my/nutrition/wp-content/uploads/2023/12/FA-Buku-RNI.pdf'],
      ['Tea and iron absorption study (University of East Anglia repository)', 'https://ueaeprints.uea.ac.uk/id/eprint/65903/1/Accepted_manuscript.pdf'],
      ['Frontiers in Nutrition — Anaemia in pregnancy in Malaysia: a review (Apr 2022)', 'https://www.frontiersin.org/articles/10.3389/fnut.2022.847693/full'],
      ['Medical Journal of Malaysia — Thalassaemia in Malaysia (2010)', 'https://mail.e-mjm.org/2010/v65n4/Thalassemia.pdf'],
    ],
    related: ['blood-test-results-explained-malaysia', 'thalassaemia-screening-malaysia', 'period-pain-senggugut-malaysia'],
  },
];
