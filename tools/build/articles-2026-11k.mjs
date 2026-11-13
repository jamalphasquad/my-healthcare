// Articles published 13 November 2026, second batch (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-13';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NOV_2026_K = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'sakit-kepala-sebelah-kiri-kanan-headache-malaysia',
    title: 'Sakit kepala sebelah kanan, kiri atau belakang: what headache location can mean, relief and red flags',
    crumb: 'Sakit kepala by location',
    desc: 'Sakit kepala sebelah kanan, kiri, belakang or depan: what pain in each place can mean, from migraine and tension headache to cluster headache and sinusitis, safe relief, and warning signs.',
    excerpt: 'One-sided throbbing, a tight band, pain behind one eye or at the back of the head: where a headache sits gives clues to its type. What each pattern can mean, how to ease it, how to avoid painkiller-overuse headaches, and the warning signs that need a doctor straight away.',
    standfirst: 'Sakit kepala means headache, and sebelah kanan, sebelah kiri and bahagian belakang mean the right side, left side and back of the head. Where a headache sits gives useful clues, but it isn’t a diagnosis on its own. Most headaches are tension-type headaches or migraines and aren’t dangerous. Here is what each pattern can mean, and the warning signs to know.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Headache', 'Migraine', 'Sakit kepala'],
    image: 'mental-health', imageAlt: 'A person resting their head in their hand',
    keyPoints: [
      'A one-sided throbbing headache with nausea or sensitivity to light is typical of migraine. A tight band on both sides or at the back of the head is typical of a tension-type headache.',
      'Severe pain around one eye with a red, watering eye, lasting 15 minutes to 3 hours, suggests cluster headache. Pain over the cheeks and forehead with a blocked nose suggests sinusitis.',
      'Pain at the back of the head that gets worse when you move your neck may come from the neck. A new headache at the temples in someone over 50 needs checking the same day.',
      'Take painkillers early, but on no more than 2 days a week. Taking them more often can cause medication-overuse headaches. Avoid ibuprofen and aspirin if you might have dengue.',
      'Call 999 for a sudden, severe headache that peaks within seconds or minutes, or a headache with fever and a stiff neck, weakness, confusion, a seizure or loss of vision.',
    ],
    sections: [
      { id: 'map', h: 'Headache by location', tocLabel: 'By location', html: `<div class="table-wrap"><table>
<thead><tr><th>Where</th><th>Common causes</th><th>Clues</th></tr></thead>
<tbody>
<tr><td><strong>One side</strong> (sebelah kanan atau kiri)</td><td>Migraine, hormonal headaches</td><td>Throbbing, worse with movement, nausea, light and noise sensitivity</td></tr>
<tr><td><strong>Around or behind one eye</strong></td><td>Cluster headache</td><td>Very severe, red watering eye, drooping lid, runny nose on the same side</td></tr>
<tr><td><strong>Both sides, like a tight band</strong></td><td>Tension-type headache</td><td>Pressing or tightening, can include the forehead, temples and neck</td></tr>
<tr><td><strong>Back of the head</strong> (bahagian belakang)</td><td>Tension-type, neck-related (cervicogenic) headache, occipital neuralgia</td><td>Worse with neck movement, or sharp electric-shock pain at the base of the skull</td></tr>
<tr><td><strong>Forehead, cheeks, bridge of the nose</strong> (depan)</td><td>Sinusitis, tension-type, eye strain</td><td>Blocked nose, green or yellow mucus, tenderness over the cheeks</td></tr>
<tr><td><strong>Temples</strong>, in people over 50</td><td>Giant cell (temporal) arteritis</td><td>New headache, tender scalp, jaw pain when chewing, vision changes</td></tr>
<tr><td><strong>Face, jaw or teeth on one side</strong></td><td>Trigeminal neuralgia</td><td>Brief electric-shock attacks triggered by touch, eating or wind</td></tr>
<tr><td><strong>Anywhere</strong></td><td>Dehydration, missed meals, caffeine withdrawal, a fever</td><td>Often eases with fluids, food and rest</td></tr>
</tbody></table></div>
<p>Sinus headaches are commonly mistaken for migraine, and a headache can move or change. Use this as a guide only. See our main <a href="/articles/headaches-malaysia/">headaches guide</a> for more on each type.</p>` },
      { id: 'one-side', h: 'Sakit kepala sebelah kanan atau kiri', tocLabel: 'One side', html: `<p><strong>Migraine</strong> is the most common cause of a one-sided headache. About 9 in 100 Malaysians have migraine. Typical features:</p>
<ul>
<li>a throbbing pain, often on one side, that gets worse with movement</li>
<li>nausea or vomiting, and sensitivity to light and sound</li>
<li>attacks lasting 4 hours to 3 days</li>
<li>in about 1 in 10, an aura before the headache, such as zigzag lights, numbness or difficulty speaking, lasting up to an hour</li>
</ul>
<p><strong>Cluster headache</strong> is rarer but extremely painful: always on one side, around or above the eye or at the temple, lasting 15 minutes to 3 hours, up to several times a day, often with restlessness. It is more common in men in their 30s and 40s. Ordinary painkillers don’t work, so see a doctor.</p>
<p><strong>Trigeminal neuralgia</strong> causes sudden electric-shock pain on one side of the face or jaw, lasting seconds, often triggered by eating, brushing teeth, touching the face or air-conditioning. It usually starts after age 50.</p>
${figure('mental-health', 'A person resting their head in their hand', 'Most headaches are tension-type headaches or migraines and aren’t dangerous.')}` },
      { id: 'back', h: 'Sakit kepala bahagian belakang', tocLabel: 'Back of the head', html: `<ul>
<li><strong>Tension-type headache</strong> often starts at the back of the head or neck and spreads forwards, feeling like pressure or a tight band. It lasts from 30 minutes to several days, and is linked to stress, poor posture, tiredness and long hours at a screen.</li>
<li><strong>Neck-related (cervicogenic) headache</strong> usually starts on one side at the base of the skull, may spread to the front or behind the eye, and gets worse when you move your neck.</li>
<li><strong>Occipital neuralgia</strong> causes piercing, burning or electric-shock pain at the back of the head, sometimes spreading behind one eye.</li>
</ul>
<p><strong>High blood pressure</strong> rarely causes headaches unless it is very high, so don’t rely on a headache to tell you your blood pressure is up. Check it with a monitor. See our guide to <a href="/articles/blood-pressure-cholesterol-malaysia/">blood pressure</a>.</p>` },
      { id: 'triggers', h: 'Common triggers', tocLabel: 'Triggers', html: `<ul>
<li>not drinking enough, especially in hot weather, and time in the hot sun</li>
<li>skipping meals</li>
<li>too much or too little sleep</li>
<li>stress, and the “let-down” at weekends</li>
<li>bright lights, screens and eye strain. Get your eyes tested if you often have headaches when reading.</li>
<li>periods and hormonal changes</li>
<li>alcohol, and cutting down suddenly on coffee or tea if you usually drink more than about 2 cups a day</li>
<li>taking painkillers too often</li>
</ul>
<p>Keeping a headache diary can help you spot your triggers.</p>` },
      { id: 'relief', h: 'Cara hilangkan sakit kepala: relief', tocLabel: 'Relief', html: `<ul>
<li><strong>Paracetamol</strong> (adults): 500mg to 1g, at least 4 hours apart, no more than 4g in 24 hours.</li>
<li><strong>Ibuprofen</strong> (adults): 200 to 400mg with food, at least 4 hours apart, no more than 1,200mg a day without a doctor’s advice. Not suitable with stomach ulcers, some types of asthma, kidney or heart disease, or in pregnancy.</li>
<li><strong>Aspirin</strong> (adults only): not for anyone under 16.</li>
<li><strong>Dengue caution:</strong> a severe headache and pain behind the eyes can be dengue. If you have a fever and could have dengue, take paracetamol only and avoid ibuprofen and aspirin.</li>
<li><strong>Migraine:</strong> painkillers work best taken early in an attack. If they don’t help, a doctor can prescribe a triptan.</li>
<li><strong>Rest</strong> in a quiet, dark room, drink water, eat something if you have skipped a meal, and apply a cool or warm compress.</li>
</ul>
<p><strong>Don’t take painkillers too often.</strong> Using simple painkillers on 15 or more days a month, or triptans or codeine-containing painkillers on 10 or more days a month, can cause a medication-overuse headache. Keep painkillers to no more than 2 days a week, and see a doctor if you need them more. See our <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkiller guide</a>.</p>` },
      { id: 'red-flags', h: 'When a headache is an emergency', tocLabel: 'Red flags', html: `<p><strong>Call <a href="tel:999">999</a> or go to an emergency department for a headache that:</strong></p>
<ul>
<li>comes on suddenly and severely, reaching its worst within seconds to minutes (a “thunderclap” headache)</li>
<li>comes with a fever and stiff neck, or a rash that doesn’t fade when pressed</li>
<li>comes with weakness, numbness, slurred speech, confusion, a seizure or loss of vision. See our guide to <a href="/articles/stroke-heart-attack-kuala-lumpur/">stroke</a>.</li>
<li>follows a head injury</li>
</ul>
<p><strong>See a doctor the same day</strong> if you are over 50 with a new headache, scalp tenderness or jaw pain when chewing, especially with vision changes, as giant cell arteritis can cause blindness if untreated. Pregnant women with a severe headache, vision problems or swelling should be seen urgently, as this can be pre-eclampsia.</p>
<p><strong>See a doctor soon</strong> if your headaches are getting more frequent or severe, change pattern, are worse when coughing, sneezing or bending, wake you from sleep, or come with vomiting.</p>
<p><strong>Children:</strong> migraine affects 4 to 10 in 100 children, and attacks are often shorter, sometimes with tummy pain. See a doctor if headaches start before age 7, change pattern, or come with behaviour changes, fits or balance problems.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for headaches',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can work out the type of headache, check your blood pressure and eyes, advise on treatment and prevention, and refer you to a neurologist if needed. Our directory lists clinics across Malaysia, including those open late and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What does sakit kepala sebelah kanan mean?', 'A headache on the right side. It is often a migraine, and less often a cluster headache or a neck-related headache. The same causes apply to the left side.'],
      ['What causes a headache at the back of the head?', 'Usually a tension-type headache, often linked to stress, posture or long screen time. A neck problem or occipital neuralgia can also cause it.'],
      ['Is a one-sided headache serious?', 'Usually not. Migraine is the most common cause. See a doctor urgently if it is sudden and severe, or comes with weakness, confusion or vision loss.'],
      ['How do I get rid of a headache quickly?', 'Take paracetamol or ibuprofen early, drink water, eat if you have skipped a meal, and rest in a quiet, dark room. Avoid ibuprofen if you might have dengue.'],
      ['Can high blood pressure cause headaches?', 'Rarely, unless it is very high. Most people with high blood pressure have no symptoms, so check it with a monitor.'],
      ['Why do I keep getting headaches?', 'Common reasons include stress, poor sleep, dehydration, skipped meals, eye strain and taking painkillers too often. See a doctor if they are frequent or changing.'],
      ['When is a headache an emergency?', 'When it is sudden and severe, or comes with fever and a stiff neck, weakness, confusion, a seizure or loss of vision, or after a head injury. Call 999.'],
    ],
    sources: [
      ['Malaysian Society of Neurosciences — Consensus guidelines on the management of headache (2021)', 'https://neuro.org.my/assets/guideline/Consensus%20guidelines%20on%20the%20management%20of%20headache%202021.pdf'],
      ['Cleveland Clinic — What your headache location means (May 2023)', 'https://health.clevelandclinic.org/why-you-get-headaches-and-where'],
      ['Cleveland Clinic — Cervicogenic headache (Jul 2024)', 'https://my.clevelandclinic.org/health/diseases/cervicogenic-headache'],
      ['Cleveland Clinic — Occipital neuralgia (May 2022)', 'https://my.clevelandclinic.org/health/diseases/23072-occipital-neuralgia'],
      ['NHS — Migraine (Mar 2026)', 'https://www.nhs.uk/conditions/migraine/'],
      ['NHS — Tension headaches (Aug 2025)', 'https://www.nhs.uk/conditions/tension-headaches/'],
      ['NHS — Cluster headaches (Aug 2023)', 'https://www.nhs.uk/conditions/cluster-headaches/'],
      ['NHS — Headaches (Apr 2024)', 'https://www.nhs.uk/conditions/headaches/'],
      ['NHS — Trigeminal neuralgia (Jan 2023)', 'https://www.nhs.uk/conditions/trigeminal-neuralgia/'],
      ['NHS — Giant cell arteritis (Aug 2023)', 'https://www.nhs.uk/conditions/giant-cell-arteritis/'],
      ['MSD Manual Consumer Version — Giant cell arteritis (Dec 2024)', 'https://www.msdmanuals.com/home/bone-joint-and-muscle-disorders/vasculitic-disorders/giant-cell-arteritis'],
      ['NHS — Sinusitis (Jan 2024)', 'https://www.nhs.uk/conditions/sinusitis-sinus-infection/'],
      ['NHS — High blood pressure (Jul 2024)', 'https://www.nhs.uk/conditions/high-blood-pressure/'],
      ['The Migraine Trust — Medication overuse headache', 'https://migrainetrust.org/understand-migraine/types-of-migraine/medication-overuse-headache/'],
      ['Headache Australia — Withdrawal headache (May 2021)', 'https://headacheaustralia.org.au/headachetypes/withdrawal-headache/'],
      ['NHS — How and when to take paracetamol for adults (Mar 2026)', 'https://www.nhs.uk/medicines/paracetamol-for-adults/how-and-when-to-take-paracetamol-for-adults/'],
      ['NHS — How and when to take ibuprofen (Aug 2025)', 'https://www.nhs.uk/medicines/ibuprofen-for-adults/how-and-when-to-take-ibuprofen/'],
      ['WHO — Dengue and severe dengue (Aug 2025)', 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue'],
      ['National Migraine Centre — Migraine in children and adolescents', 'https://www.nationalmigrainecentre.org.uk/understanding-migraine/factsheets-and-resources/migraine-in-children-and-adolescents/'],
    ],
    related: ['headaches-malaysia', 'painkillers-paracetamol-ibuprofen-malaysia', 'vertigo-dizziness-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tanda-tanda-awal-kanser-cancer-signs-malaysia',
    title: 'Tanda-tanda awal kanser: early warning signs of the most common cancers in Malaysia',
    crumb: 'Tanda-tanda awal kanser',
    desc: 'Tanda-tanda awal kanser: early warning signs of breast, colorectal, lung, cervical, womb, ovarian, nasopharyngeal, liver and mouth cancer in Malaysia, when to see a doctor, and free screening.',
    excerpt: 'Two in three cancers in Malaysia are found at a late stage, when they are harder to treat. The early warning signs of the most common cancers, the general symptoms not to ignore, when to see a doctor, and the free and subsidised screening available.',
    standfirst: 'Tanda-tanda awal kanser means early warning signs of cancer. In Malaysia, about 2 in 3 cancers are diagnosed at stage 3 or 4, when treatment is harder. Most of these symptoms turn out to be something less serious, but getting them checked early can make a big difference. Here are the signs to know for the most common cancers in Malaysia.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Cancer symptoms', 'Early detection', 'Tanda kanser'],
    image: 'pink-ribbon', imageAlt: 'A pink ribbon for cancer awareness',
    keyPoints: [
      'Malaysia recorded 168,823 new cancers between 2017 and 2021. The most common are breast, colorectal, lung, lymphoma and liver cancer. About 1 in 8 Malaysians will get cancer in their lifetime.',
      'About 65% of cancers in Malaysia are found at stage 3 or 4. For lung cancer the figure is about 95%, and for colorectal cancer about 75%.',
      'General warning signs include unexplained weight loss, ongoing tiredness, night sweats, a new lump, unexplained bleeding, and a cough, sore or ulcer that doesn’t heal.',
      'See a doctor for a cough lasting more than 3 weeks, a mouth ulcer lasting more than 3 weeks, or any symptom that doesn’t get better, gets worse or keeps coming back.',
      'Free or subsidised screening includes mammograms through LPPKN, HPV self-sampling through Program ROSE, and checks through PeKa B40.',
    ],
    sections: [
      { id: 'malaysia', h: 'Cancer in Malaysia', tocLabel: 'Cancer in Malaysia', html: `<p>The Malaysia National Cancer Registry recorded 168,823 new cancers between 2017 and 2021. About 1 in 8 Malaysians will get cancer during their lifetime.</p>
<div class="table-wrap"><table>
<thead><tr><th>Cancer</th><th>Share of all cancers</th><th>Found at stage 3 or 4</th></tr></thead>
<tbody>
<tr><td>Breast</td><td>17.6%</td><td>About 1 in 2</td></tr>
<tr><td>Colorectal (bowel)</td><td>14.1%</td><td>About 3 in 4</td></tr>
<tr><td>Lung</td><td>10.1%</td><td>About 19 in 20</td></tr>
<tr><td>Liver</td><td>4.9%</td><td>Nearly 9 in 10 in men</td></tr>
<tr><td>Nasopharynx (nose and throat)</td><td>3.1%</td><td>About 3 in 4</td></tr>
<tr><td>Cervix</td><td>Among the top 6 in women</td><td>About 1 in 2</td></tr>
</tbody></table></div>
<p>Late diagnosis is a major reason for poorer survival. For cervical cancer, for example, five-year survival in a Malaysian study was about 75% at stage 1 but 23% at stage 4.</p>` },
      { id: 'general', h: 'General warning signs', tocLabel: 'General signs', html: `<p>See a doctor if you notice any of these, especially if they don’t go away, get worse or keep coming back:</p>
<ul>
<li>unexplained weight loss</li>
<li>tiredness that doesn’t improve</li>
<li>heavy night sweats or unexplained fevers</li>
<li>a new lump anywhere in the body</li>
<li>unexplained bleeding or bruising</li>
<li>a sore, ulcer or rash that won’t heal</li>
<li>ongoing indigestion, bloating or difficulty swallowing</li>
<li>a hoarse voice or cough that won’t go away</li>
<li>yellow skin or eyes (jaundice)</li>
</ul>
<p>Cancer Research UK stresses that most of the time these are caused by something less serious, but they are still worth checking.</p>` },
      { id: 'women', h: 'Breast, cervical, womb and ovarian cancer', tocLabel: 'Women’s cancers', html: `<ul>
<li><strong>Breast cancer (tanda kanser payudara):</strong> a lump in the breast, chest or armpit, dimpled skin like orange peel, a change in breast size or shape, nipple discharge (sometimes bloody), a nipple that turns inwards, or a rash on the nipple. Breast pain alone is not usually a sign. Men can get breast cancer too. See our <a href="/articles/breast-cancer-screening-malaysia/">breast screening guide</a>.</li>
<li><strong>Cervical cancer (tanda kanser servik):</strong> bleeding during or after sex, between periods or after the menopause, changes in vaginal discharge, and pelvic or back pain. See our guide to <a href="/articles/pap-smear-hpv-test-malaysia/">Pap smears and HPV tests</a>.</li>
<li><strong>Womb cancer (tanda kanser rahim):</strong> bleeding after the menopause is the key sign. Unusually heavy periods or bleeding between periods also need checking.</li>
<li><strong>Ovarian cancer:</strong> persistent bloating, tummy or pelvic pain, feeling full quickly and needing to pass urine more often, on most days. See our guide to <a href="/articles/bartholin-cyst-ovarian-cyst-fibroids-malaysia/">ovarian cysts and fibroids</a>.</li>
</ul>
${figure('pink-ribbon', 'A pink ribbon', 'About half of breast cancers in Malaysia are found at a late stage. Knowing the signs and getting screened helps.')}` },
      { id: 'bowel-lung', h: 'Bowel, lung, liver and nasopharyngeal cancer', tocLabel: 'Bowel, lung and more', html: `<ul>
<li><strong>Colorectal cancer (tanda kanser usus):</strong> a change in bowel habit, blood in the stool (red or black), bleeding from the back passage, tummy pain or a lump, bloating, weight loss, and tiredness or breathlessness from anaemia. See our <a href="/articles/bowel-cancer-screening-malaysia/">bowel cancer screening guide</a>.</li>
<li><strong>Lung cancer (tanda kanser paru-paru):</strong> a cough lasting more than 3 weeks, coughing up blood, breathlessness, chest or shoulder pain, repeated chest infections and weight loss. A Malaysian lung specialist group says more than 60% of women with lung cancer have never smoked, so don’t ignore these signs if you don’t smoke.</li>
<li><strong>Nasopharyngeal cancer:</strong> particularly common among Chinese and some Bumiputera communities in Sarawak. Signs include a painless lump in the neck (the most common), nosebleeds, a blocked nose, blood in saliva, a blocked ear or hearing loss on one side, ringing in the ear, headache and facial numbness.</li>
<li><strong>Liver cancer:</strong> often has no early symptoms. Later signs include yellow skin or eyes, weight loss, pain or a lump under the right ribs, and feeling full quickly. Hepatitis B is the leading cause in Malaysia, so get tested and vaccinated. See our <a href="/articles/hepatitis-b-malaysia/">hepatitis B guide</a>.</li>
</ul>` },
      { id: 'other', h: 'Mouth, blood and bone cancers', tocLabel: 'Other cancers', html: `<ul>
<li><strong>Mouth cancer:</strong> a mouth ulcer that lasts more than 3 weeks, a red or white patch, a lump, ongoing pain or hoarseness. Smoking, alcohol and chewing betel quid increase the risk. See our guide to <a href="/articles/mouth-ulcers-cold-sores-malaysia/">mouth ulcers</a>.</li>
<li><strong>Lymphoma:</strong> painless swelling in the neck, armpit or groin, night sweats, fever, itching and weight loss.</li>
<li><strong>Leukaemia:</strong> tiredness, pale skin, breathlessness, easy bruising or bleeding, frequent infections and bone aches. See our guide to <a href="/articles/anaemia-iron-deficiency-malaysia/">anaemia</a>.</li>
<li><strong>Bone cancer (tanda kanser tulang):</strong> bone pain that is often worse at night, swelling and a limp. Bone cancer is rare, and most bone pain has other causes.</li>
<li><strong>Prostate cancer:</strong> often has no early symptoms. See our guide to the <a href="/articles/enlarged-prostate-psa-test-malaysia/">PSA test</a>.</li>
</ul>` },
      { id: 'screening', h: 'When to see a doctor, and free screening', tocLabel: 'Screening', html: `<p><strong>See a doctor</strong> if a symptom doesn’t get better, gets worse or keeps coming back. For a cough or a mouth ulcer, see a doctor if it lasts more than 3 weeks. You aren’t wasting the doctor’s time.</p>
<p><strong>Screening</strong> can find some cancers before symptoms start:</p>
<ul>
<li><strong>Mammogram (LPPKN):</strong> free for women with a household income of RM10,000 or less, with a subsidy for others, at registered centres.</li>
<li><strong>Cervical screening:</strong> Program ROSE offers HPV self-sampling for women aged 30 to 65, free depending on nationality and income, with results by SMS.</li>
<li><strong>Bowel screening:</strong> a stool test (FOBT) is recommended from around age 50. The National Cancer Society Malaysia offers it for a small fee.</li>
<li><strong><a href="/articles/peka-b40-malaysia/">PeKa B40</a>:</strong> includes a clinical breast examination and, for men at risk, a prostate check, for eligible Malaysians aged 40 and over.</li>
</ul>
<p>See our guide to <a href="/articles/free-health-screening-malaysia/">free health screening in Malaysia</a> for more options.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for a check-up',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine you, arrange blood tests, scans or screening, and refer you to a specialist quickly if needed. Our directory lists clinics across Malaysia, including PeKa B40 panel clinics.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/peka-b40-clinics/', 'PeKa B40 clinics']],
    faqs: [
      ['What are the early signs of cancer?', 'Unexplained weight loss, ongoing tiredness, night sweats, a new lump, unexplained bleeding, and a cough, sore or ulcer that doesn’t heal. Most have other causes, but get them checked.'],
      ['What are the signs of breast cancer?', 'A lump in the breast or armpit, dimpled skin, a change in size or shape, nipple discharge or a nipple that turns inwards. Breast pain alone is not usually a sign.'],
      ['What are the signs of bowel cancer?', 'A change in bowel habit, blood in the stool, tummy pain or a lump, weight loss, and tiredness from anaemia.'],
      ['What are the signs of cervical cancer?', 'Bleeding after sex, between periods or after the menopause, and changes in discharge. Regular screening can find changes before cancer develops.'],
      ['Can non-smokers get lung cancer?', 'Yes. In Malaysia, more than 60% of women with lung cancer have never smoked, according to lung specialists. See a doctor for a cough lasting more than 3 weeks or coughing up blood.'],
      ['Is cancer screening free in Malaysia?', 'Some is. LPPKN mammograms are free for lower-income households, Program ROSE offers free HPV self-tests depending on eligibility, and PeKa B40 includes some checks.'],
      ['How common is late diagnosis of cancer in Malaysia?', 'About 65% of cancers are found at stage 3 or 4, including about 95% of lung cancers and 75% of colorectal cancers.'],
    ],
    sources: [
      ['National Cancer Institute Malaysia — Summary of the Malaysia National Cancer Registry Report 2017–2021', 'https://nci.moh.gov.my/images/pdf/SUMMARY-OF-MALAYSIA-NATIONAL-CANCER-REGISTRY-REPORT-2017-2021.pdf'],
      ['CodeBlue — Late-stage cancer detection rises to 65% (Jul 2024)', 'https://codeblue.galencentre.org/2024/07/late-stage-cancer-detection-rises-to-65-malaysias-new-cancer-registry/'],
      ['Malay Mail — Cancer patients still diagnosed late despite screening (Oct 2018)', 'https://www.malaymail.com/news/malaysia/2018/10/14/cancer-patients-still-diagnosed-late-despite-screening-says-health-ministry/1682619'],
      ['Cancer Research UK — Cancer symptoms (Aug 2025)', 'https://www.cancerresearchuk.org/about-cancer/cancer-symptoms'],
      ['NHS — Cancer symptoms (May 2025)', 'https://www.nhs.uk/conditions/cancer/symptoms/'],
      ['NHS — Breast cancer symptoms (Mar 2024)', 'https://www.nhs.uk/conditions/breast-cancer/symptoms/'],
      ['NHS — Breast cancer in men: symptoms (Mar 2024)', 'https://www.nhs.uk/conditions/breast-cancer-in-men/symptoms/'],
      ['NHS — Bowel cancer symptoms (Sep 2026)', 'https://www.nhs.uk/conditions/bowel-cancer/symptoms/'],
      ['NHS — Cervical cancer symptoms (Sep 2024)', 'https://www.nhs.uk/conditions/cervical-cancer/symptoms/'],
      ['NHS — Womb cancer symptoms (Oct 2024)', 'https://www.nhs.uk/conditions/womb-cancer/symptoms/'],
      ['NHS — Ovarian cancer symptoms (Nov 2025)', 'https://www.nhs.uk/conditions/ovarian-cancer/symptoms/'],
      ['NHS — Lung cancer symptoms (Aug 2026)', 'https://www.nhs.uk/conditions/lung-cancer/symptoms/'],
      ['Free Malaysia Today — Lung cancer on the rise among non-smokers, especially women (Dec 2023)', 'https://www.freemalaysiatoday.com/category/leisure/2023/12/18/lung-cancer-on-the-rise-among-non-smokers-especially-women'],
      ['CodeBlue — Nasopharyngeal cancer rates in Sarawak (Oct 2026)', 'https://codeblue.galencentre.org/2026/10/sarawakian-bidayuh-suffer-highest-rates-of-nasopharyngeal-cancer-worldwide-experts/'],
      ['Raihan et al — Hepatocellular carcinoma in Malaysia, Euroasian Journal of Hepato-Gastroenterology (2018)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6024046/'],
      ['NHS — Liver cancer symptoms (Nov 2026)', 'https://www.nhs.uk/conditions/liver-cancer/symptoms/'],
      ['NHS — Mouth cancer symptoms (Nov 2026)', 'https://www.nhs.uk/conditions/mouth-cancer/symptoms/'],
      ['Cancer Research UK — Mouth cancer risks and causes (Aug 2024)', 'https://www.cancerresearchuk.org/about-cancer/mouth-cancer/risks-causes'],
      ['NHS — Bone cancer symptoms (May 2025)', 'https://www.nhs.uk/conditions/bone-cancer/symptoms/'],
      ['NHS — Non-Hodgkin lymphoma symptoms (Mar 2026)', 'https://www.nhs.uk/conditions/non-hodgkin-lymphoma/symptoms/'],
      ['NHS — Acute myeloid leukaemia symptoms (Sep 2026)', 'https://www.nhs.uk/conditions/acute-myeloid-leukaemia/symptoms/'],
      ['LPPKN — Mammogram subsidy programme', 'https://mamogram.lppkn.gov.my/'],
      ['Program ROSE — Who should be screened', 'https://www.programrose.org/who-should-be-screened'],
      ['Portal MyGOV — PeKa B40 (Mar 2026)', 'https://www.malaysia.gov.my/my/topics/peka-b40'],
      ['National Cancer Society Malaysia — Colorectal cancer screening', 'https://cancer.org.my/get-screened/cancer-screening-clinics/colorectal-cancer-screening/'],
    ],
    related: ['breast-cancer-screening-malaysia', 'bowel-cancer-screening-malaysia', 'pap-smear-hpv-test-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tanda-sakit-jantung-heart-disease-signs-malaysia',
    title: 'Tanda sakit jantung: signs of heart disease, from angina to heart failure, and when to get checked',
    crumb: 'Tanda sakit jantung',
    desc: 'Tanda sakit jantung explained: angina, warning signs before a heart attack, heart failure, irregular heartbeat and valve disease, Malaysian risk factors, the tests doctors use, and when to call 999.',
    excerpt: 'Heart disease is Malaysia’s leading cause of death, and many people have warning signs before an emergency. What angina, heart failure and an irregular heartbeat feel like, why women often don’t get chest pain, the risk factors and tests, and when to call 999.',
    standfirst: 'Tanda sakit jantung means signs of heart disease. A heart attack is the best-known emergency, but heart disease often shows itself earlier: chest tightness when you walk uphill, breathlessness, swollen ankles or an irregular pulse. Recognising these signs, and knowing your risk, gives you the chance to get treated before an emergency.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Heart disease', 'Angina', 'Heart failure'],
    image: 'bp-monitor', imageAlt: 'A blood pressure monitor on a table',
    keyPoints: [
      'Ischaemic heart disease was Malaysia’s leading cause of death in 2024, with 17,421 deaths. It is the top cause of death in men and in people aged 41 to 59.',
      'Angina is chest tightness that comes on with exertion or stress and eases with rest, usually within 5 minutes. Angina at rest, or that is getting worse, is an emergency.',
      'In a US study, 95% of women noticed new symptoms such as unusual tiredness, poor sleep or breathlessness in the month before a heart attack, and 43% had no chest pain during it.',
      'Heart failure causes breathlessness on exertion or lying flat, swollen ankles, sudden weight gain and tiredness. An irregular pulse can mean atrial fibrillation, which raises the risk of stroke.',
      'Malaysian guidelines suggest a heart risk check from age 30. A third of Malaysian adults have high cholesterol and nearly a third have high blood pressure.',
    ],
    sections: [
      { id: 'angina', h: 'Angina: chest tightness on exertion', tocLabel: 'Angina', html: `<p>Angina is chest pain or tightness caused by narrowed heart arteries that can’t deliver enough blood when the heart works harder.</p>
<ul>
<li><strong>Stable angina</strong> comes on with exertion, such as walking uphill or climbing stairs, emotional stress, cold weather or a heavy meal. It usually eases with rest within 5 minutes, and feels similar each time.</li>
<li><strong>Unstable angina</strong> happens at rest, is more severe, lasts longer, or doesn’t ease with rest or medicine. <strong>Call <a href="tel:999">999</a>.</strong></li>
</ul>
<p><strong>If you have angina and a GTN spray:</strong> stop and rest, use your GTN, take a second dose after 5 minutes if needed, and call 999 if the pain continues 5 minutes after the second dose. See a doctor if your angina is getting worse, more frequent, longer, or comes on at rest.</p>
<p>Angina means a higher risk of heart attack and stroke, so it should always be assessed. See our guide to <a href="/articles/sakit-dada-chest-pain-malaysia/">chest pain</a>.</p>` },
      { id: 'warning', h: 'Warning signs before a heart attack', tocLabel: 'Early warning signs', html: `<p>A widely cited US study of 515 women who had had a heart attack found that about 95% had noticed new or different symptoms a month or more beforehand:</p>
<ul>
<li>unusual tiredness (71%)</li>
<li>sleep problems (48%)</li>
<li>breathlessness (42%)</li>
<li>indigestion (39%)</li>
<li>anxiety (35%)</li>
</ul>
<p>Fewer than 30% had chest discomfort beforehand, and 43% had no chest pain even during the heart attack. Instead they had breathlessness, weakness, tiredness, a cold sweat and dizziness.</p>
<p><strong>A caution:</strong> these symptoms are common and usually have other causes, and the study couldn’t show they reliably predict a heart attack. Social media posts promising “5 signs before a heart attack” overstate this. The real lesson is that <strong>no chest pain doesn’t mean no heart attack</strong>, especially in women, older people and people with diabetes. If new symptoms worry you, and you have risk factors, see a doctor.</p>
<p>For heart attack symptoms and what to do, see our guide to <a href="/articles/stroke-heart-attack-kuala-lumpur/">heart attack and stroke</a>.</p>
${figure('bp-monitor', 'A blood pressure monitor', 'High blood pressure, diabetes and high cholesterol are the main treatable risks for heart disease.')}` },
      { id: 'failure', h: 'Heart failure', tocLabel: 'Heart failure', html: `<p>Heart failure means the heart isn’t pumping as well as it should. It is often caused by past heart attacks or long-term high blood pressure. Signs include:</p>
<ul>
<li>breathlessness with activity, or when lying flat</li>
<li>tiredness, weakness or dizziness</li>
<li>swollen ankles, legs or tummy</li>
<li>sudden weight gain over a few days</li>
<li>a cough at night, or frothy pink phlegm</li>
</ul>
<p><strong>Call <a href="tel:999">999</a></strong> for severe breathlessness, blue or grey lips, or collapse. Treatment can improve symptoms and help people live longer.</p>` },
      { id: 'rhythm', h: 'Irregular heartbeat and palpitations', tocLabel: 'Irregular heartbeat', html: `<p>A normal resting pulse is steady and usually 60 to 100 beats a minute. See our guide to <a href="/articles/normal-heart-rate-palpitations-malaysia/">normal heart rate (bacaan jantung normal) and palpitations</a>.</p>
<p><strong>Atrial fibrillation (AF)</strong> causes an irregular pulse with no set pattern, sometimes fast, with palpitations, tiredness, breathlessness or dizziness. Some people have no symptoms at all. AF raises the risk of stroke, so doctors use a risk score to decide on blood-thinning medicine.</p>
<p><strong>Call 999</strong> if a fast or irregular heartbeat comes with chest pain, fainting, breathlessness or signs of stroke.</p>` },
      { id: 'other', h: 'Valve disease, cardiomyopathy and young people', tocLabel: 'Other heart conditions', html: `<ul>
<li><strong>Heart valve disease</strong> can cause breathlessness, tiredness, dizziness, palpitations, swollen ankles or chest pain, or no symptoms with only a murmur heard by a doctor.</li>
<li><strong>Cardiomyopathy</strong> (heart muscle disease) is often inherited. It can cause dizziness, chest pain, breathlessness or blackouts, and many people have no symptoms. Relatives can be tested.</li>
<li><strong>Young people:</strong> chest pain, breathlessness, palpitations, light-headedness or fainting, especially with a family history of sudden unexplained death at a young age, should be checked. An ECG can detect many of the conditions involved.</li>
</ul>` },
      { id: 'risk', h: 'Your risk and getting checked', tocLabel: 'Risk and tests', html: `<p><strong>Risk factors in Malaysia</strong> (National Health and Morbidity Survey 2023 and other national data):</p>
<ul>
<li><a href="/articles/bacaan-kolesterol-normal-cholesterol-malaysia/">high cholesterol</a>: 33% of adults</li>
<li><a href="/articles/blood-pressure-cholesterol-malaysia/">high blood pressure</a>: 29%</li>
<li><a href="/articles/normal-blood-sugar-level-malaysia/">diabetes</a>: 16%</li>
<li>overweight or obesity: 54%</li>
<li>smoking: 19% of people aged 15 and over</li>
<li>physical inactivity, and a family history of early heart disease (a parent or sibling affected before 55 in men or 65 in women)</li>
</ul>
<p>Malaysians tend to have heart attacks younger than people in neighbouring countries, with an average age of about 58 to 59 in Malaysian registries.</p>
<p><strong>Getting checked:</strong> Malaysia’s heart disease prevention guideline recommends a risk check from age 30, using a score based on your age, blood pressure, cholesterol, diabetes and smoking. People with high blood pressure or diabetes should have an ECG at their first assessment.</p>
<p><strong>Tests</strong> your doctor may arrange include an ECG (heart tracing), blood tests for cholesterol and sugar, an echocardiogram (heart ultrasound), an exercise stress test, a CT scan of the heart arteries, or an angiogram. Routine stress tests and echocardiograms aren’t recommended for people without symptoms. Free screening is available through some schemes. See our guide to <a href="/articles/free-health-screening-malaysia/">free health screening</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for a heart check',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'For chest pain now, call 999. For a heart risk check, blood pressure, cholesterol, sugar and an ECG, a GP can help and refer you to a cardiologist if needed. Our directory lists clinics across Malaysia, including those open at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What are the signs of heart disease?', 'Chest tightness on exertion that eases with rest (angina), breathlessness, swollen ankles, an irregular or racing pulse, dizziness or fainting, and unusual tiredness.'],
      ['Are there warning signs before a heart attack?', 'Many people, especially women, notice new tiredness, poor sleep, breathlessness or indigestion in the weeks before. These are common and not specific, so see a doctor if you are worried and have risk factors.'],
      ['Can you have a heart attack without chest pain?', 'Yes. In one study, 43% of women had no chest pain during their heart attack. Breathlessness, weakness, sweating and dizziness can be the main signs.'],
      ['What is a normal heart rate?', 'For adults at rest, usually 60 to 100 beats a minute, with a steady rhythm.'],
      ['At what age should I check my heart?', 'Malaysian guidelines suggest a heart risk assessment from age 30, and earlier if you have diabetes, high blood pressure or a strong family history.'],
      ['What tests check for heart disease?', 'An ECG, blood tests for cholesterol and sugar, an echocardiogram, an exercise stress test, a CT scan of the heart arteries or an angiogram, depending on your symptoms.'],
      ['When should I call 999?', 'For chest pain or tightness at rest or lasting more than a few minutes, severe breathlessness, fainting, or a racing or irregular heartbeat with chest pain.'],
    ],
    sources: [
      ['Department of Statistics Malaysia — Statistics on causes of death, Malaysia 2025 (Dec 2025)', 'https://www.dosm.gov.my/portal-main/release-content/statistics-on-causes-of-death-malaysia-2025'],
      ['Ministry of Health Malaysia — Clinical practice guideline: primary and secondary prevention of cardiovascular disease (2017)', 'https://mymahtas2.moh.gov.my/files/CPG%20on%20Primary%20&%20Secondary%20Prevention%20of%20CVD%202017%20(1).pdf'],
      ['National Cardiovascular Disease Database — Acute coronary syndrome registry report 2009–2010: patient characteristics', 'https://www.acrm.org.my/ncvd/documents/report/acsReport_09/ACS_Chapter%202_Patient%20Characteristics.pdf'],
      ['US National Institute of Nursing Research — Women’s symptoms prior to heart attack (Nov 2003)', 'https://www.ninr.nih.gov/sites/default/files/docs/womens-symptoms-prior-to-heart-attack.pdf'],
      ['British Heart Foundation — Angina (Jun 2025)', 'https://www.bhf.org.uk/informationsupport/conditions/angina'],
      ['NHS — Angina (Mar 2025)', 'https://www.nhs.uk/conditions/angina/'],
      ['NHS — Heart failure symptoms (Jun 2026)', 'https://www.nhs.uk/conditions/heart-failure/symptoms/'],
      ['NHS — Atrial fibrillation (Jan 2025)', 'https://www.nhs.uk/conditions/atrial-fibrillation/'],
      ['British Heart Foundation — Atrial fibrillation (Mar 2024)', 'https://www.bhf.org.uk/informationsupport/conditions/atrial-fibrillation'],
      ['NHS — Heart palpitations (Mar 2026)', 'https://www.nhs.uk/conditions/heart-palpitations/'],
      ['NHS — Heart valve disease (Jan 2025)', 'https://www.nhs.uk/conditions/heart-valve-disease/'],
      ['NHS — Cardiomyopathy (May 2023)', 'https://www.nhs.uk/conditions/cardiomyopathy/'],
      ['Cardiac Risk in the Young — Sudden cardiac death', 'https://www.c-r-y.org.uk/sudden-cardiac-death/'],
      ['NHS — Electrocardiogram (Nov 2023)', 'https://www.nhs.uk/conditions/electrocardiogram/'],
      ['NHS — Coronary heart disease diagnosis (Jan 2024)', 'https://www.nhs.uk/conditions/coronary-heart-disease/diagnosis/'],
      ['CodeBlue — Over two million adults in Malaysia live with three NCDs: NHMS 2023 (May 2024)', 'https://codeblue.galencentre.org/2024/05/over-two-million-adults-in-malaysia-live-with-three-ncds-nhms-2023/'],
      ['CodeBlue — NHMS 2023: over half of Malaysian adults overweight or obese (May 2024)', 'https://codeblue.galencentre.org/2024/05/nhms-2023-over-half-of-malaysian-adults-overweight-or-obese/'],
      ['The Star — Govt aims to cut smoking habit among adults (Oct 2024)', 'https://www.thestar.com.my/news/nation/2024/10/04/govt-aims-to-cut-smoking-habit-among-adults-from-19-to-15-by-dec-2025'],
    ],
    related: ['sakit-dada-chest-pain-malaysia', 'stroke-heart-attack-kuala-lumpur', 'normal-heart-rate-palpitations-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'bacaan-kolesterol-normal-cholesterol-malaysia',
    title: 'Bacaan kolesterol normal: cholesterol levels in mmol/L, LDL targets, and how to lower cholesterol',
    crumb: 'Bacaan kolesterol normal',
    desc: 'Bacaan kolesterol normal: total cholesterol, LDL, HDL and triglyceride levels in mmol/L under Malaysian guidelines, LDL targets by risk, fasting, diet, statins and supplements.',
    excerpt: 'A third of Malaysian adults have high cholesterol, and half of them don’t know it. What each number on your lipid test means, the LDL target for your level of risk, whether you need to fast, which foods and lifestyle changes help, and the truth about statins and supplements.',
    standfirst: 'Bacaan kolesterol normal means a normal cholesterol reading. A lipid test reports four numbers: total cholesterol, LDL (“bad”) cholesterol, HDL (“good”) cholesterol and triglycerides. Malaysian guidelines don’t give one “normal” LDL for everyone. Your target depends on your overall risk of heart disease. Here is how to read your results.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Cholesterol', 'LDL cholesterol', 'Dyslipidaemia'],
    image: 'blood-sample', imageAlt: 'A blood sample tube held for testing',
    keyPoints: [
      'Malaysia’s guideline flags total cholesterol above 5.2 mmol/L, HDL below 1.0 in men or 1.2 in women, and triglycerides above 1.7 mmol/L.',
      'There is no single normal LDL. Under the 2017 guideline, people at low or intermediate risk aim for below 3.0 mmol/L. People at high or very high risk aim much lower, and the 2023 update lowered these targets to 1.8 and 1.4 mmol/L.',
      'You usually don’t need to fast for a cholesterol test. Adults should be screened from age 30, or from 18 with a strong family history or diabetes.',
      'A third of Malaysian adults have high cholesterol, and about half of them don’t know it. About 1 in 100 Malaysians has inherited high cholesterol.',
      'Cutting saturated fat (including santan and coconut oil), eating more fibre, exercising and losing weight help. Statins lower LDL by up to about half, and most muscle aches people blame on them aren’t caused by the statin.',
    ],
    sections: [
      { id: 'numbers', h: 'What is a normal cholesterol reading?', tocLabel: 'Normal levels', html: `<p>These are the levels Malaysia’s dyslipidaemia guideline flags as abnormal:</p>
<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>Flagged as abnormal</th><th>In mg/dL</th></tr></thead>
<tbody>
<tr><td><strong>Total cholesterol</strong></td><td>Above 5.2 mmol/L</td><td>Above about 200</td></tr>
<tr><td><strong>HDL (“good”) cholesterol</strong></td><td>Below 1.0 (men) or 1.2 (women)</td><td>Below about 39 or 46</td></tr>
<tr><td><strong>Triglycerides</strong></td><td>Above 1.7 mmol/L</td><td>Above about 150</td></tr>
<tr><td><strong>LDL (“bad”) cholesterol</strong></td><td>Depends on your risk (see below)</td><td>Optimal is below about 100</td></tr>
</tbody></table></div>
<ul>
<li>The guideline describes an LDL of 1.3 to 1.8 mmol/L as physiologically normal, and below 2.6 as optimal for adults.</li>
<li><strong>Non-HDL cholesterol</strong> (total cholesterol minus HDL) is a useful extra measure, especially if you have diabetes or high triglycerides. Its target is your LDL target plus 0.8.</li>
<li>To convert cholesterol from mmol/L to mg/dL, multiply by about 38.7. For triglycerides, multiply by about 88.6.</li>
</ul>
<p>See also our guide to <a href="/articles/blood-test-results-explained-malaysia/">blood test results</a>.</p>` },
      { id: 'targets', h: 'Your LDL target depends on your risk', tocLabel: 'LDL targets', html: `<p>Doctors first decide your risk of a heart attack or stroke. If you already have heart disease, diabetes or kidney disease, you are automatically at high or very high risk. Otherwise, your doctor uses a score based on your age, sex, blood pressure, cholesterol, diabetes and smoking to estimate your 10-year risk.</p>
<div class="table-wrap"><table>
<thead><tr><th>Risk</th><th>LDL target (2017 guideline)</th><th>2023 update</th></tr></thead>
<tbody>
<tr><td>Low (under 10% in 10 years)</td><td>Below 3.0 mmol/L</td><td>Below 3.0 mmol/L</td></tr>
<tr><td>Intermediate (10 to 20%)</td><td>Below 3.0 mmol/L</td><td>Reported as below 2.6 mmol/L</td></tr>
<tr><td>High (over 20%, diabetes, kidney disease)</td><td>2.6 mmol/L, or a 50% reduction</td><td>1.8 mmol/L or less, and at least a 50% reduction</td></tr>
<tr><td>Very high (heart attack, stroke, narrowed arteries)</td><td>Below 1.8 mmol/L, or a 50% reduction</td><td>1.4 mmol/L or less, and at least a 50% reduction</td></tr>
</tbody></table></div>
<p>An LDL above 4.9 mmol/L on its own puts you at high risk. The 2023 targets come from published summaries of the update, so your doctor may use slightly different figures. See our guide to <a href="/articles/tanda-sakit-jantung-heart-disease-signs-malaysia/">signs of heart disease</a>.</p>
${figure('blood-sample', 'A blood sample tube held for testing', 'A non-fasting blood test is fine for most cholesterol checks.')}` },
      { id: 'testing', h: 'Testing: who, when and do I need to fast?', tocLabel: 'Testing', html: `<ul>
<li><strong>Who:</strong> all adults over 30 should have a full lipid profile. Start from age 18 if you have a family history of early heart disease, diabetes, obesity around the waist or a known inherited cholesterol problem.</li>
<li><strong>Fasting:</strong> usually not needed. Results differ by only about 0.2 mmol/L. You may be asked to fast if your triglycerides were very high, or if you are having other tests that need fasting.</li>
<li><strong>How often:</strong> typically every few years if normal. If you start or change treatment, your doctor will recheck in 1 to 3 months, then every 6 to 12 months.</li>
</ul>
<p><strong>In Malaysia:</strong> the 2023 National Health and Morbidity Survey found high cholesterol in a third of adults, about 7.5 million people, and about half didn’t know it. Free screening is available through some schemes. See our guide to <a href="/articles/free-health-screening-malaysia/">free health screening</a>.</p>
<p><strong>Inherited high cholesterol</strong> (familial hypercholesterolaemia) affects about 1 in 100 Malaysians. Suspect it if your LDL is very high, a parent or sibling had heart disease before 55 (men) or 65 (women), or you have fatty lumps on the tendons of your fingers or heels. Family members should be tested too.</p>` },
      { id: 'lifestyle', h: 'How to lower cholesterol with diet and lifestyle', tocLabel: 'Diet and lifestyle', html: `<ul>
<li><strong>Cut saturated fat</strong> to less than 10% of your energy. Santan, coconut oil and palm oil are high in saturated fat, as are fatty meat and fried food. A review of 16 trials found coconut oil raised LDL compared with other vegetable oils.</li>
<li><strong>Avoid trans fats</strong>, found in some biscuits, pastries and fried snacks.</li>
<li><strong>Eat more fibre</strong>: aim for 20 to 30g a day, from vegetables, fruit, beans and whole grains. Oats with 3g of beta-glucan a day lower LDL by about 0.25 mmol/L. Juicing removes fibre, so eat whole fruit.</li>
<li><strong>Reduce refined carbohydrates</strong> such as white rice and sugary drinks, especially if your triglycerides are high.</li>
<li><strong>Exercise:</strong> regular aerobic exercise raises HDL and lowers triglycerides.</li>
<li><strong>Lose weight</strong> if you are overweight. Even 5 to 10% helps. See our <a href="/articles/bmi-calculator-malaysia/">BMI calculator</a>.</li>
<li><strong>Stop smoking</strong>, which raises HDL.</li>
</ul>
<p><strong>Eggs:</strong> cholesterol in food has only a weak effect on blood cholesterol for most people. The American Heart Association says one egg a day is reasonable as part of a healthy diet.</p>` },
      { id: 'medicines', h: 'Statins and other medicines', tocLabel: 'Medicines', html: `<p><strong>Statins</strong> lower LDL by about 21 to 55%, depending on the type and dose. Common generic statins include atorvastatin, rosuvastatin, simvastatin and pravastatin. Other options, such as ezetimibe or injections (PCSK9 inhibitors), may be added if targets aren’t reached.</p>
<ul>
<li><strong>Muscle aches:</strong> in blinded trials, muscle aches were almost as common on placebo (26.6%) as on statins (27.1%), and more than 90% of reported muscle symptoms weren’t caused by the statin. If you do get symptoms, most people can take a different statin.</li>
<li><strong>Liver:</strong> a mild rise in liver tests happens in fewer than 3 in 100 people. Serious liver problems are very rare.</li>
<li><strong>Diabetes:</strong> statins slightly increase the chance of developing diabetes, but the benefit for the heart is much greater.</li>
<li><strong>Pregnancy:</strong> stop statins before trying for a baby, and don’t take them while pregnant or breastfeeding.</li>
<li><strong>Grapefruit</strong> can interact with some statins.</li>
</ul>
<p><strong>Supplements:</strong></p>
<ul>
<li><strong>Red yeast rice</strong> contains monacolin K, which is the same as the statin lovastatin. In Malaysia, these products must be registered, are limited to 10mg of monacolin K a day, and must carry warnings. Don’t take them with a prescribed statin, and check for a MAL number.</li>
<li><strong>Fish oil</strong> at high doses lowers triglycerides, but doesn’t replace statins for LDL.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for a cholesterol test',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check your cholesterol, work out your heart risk, and advise on diet and medicines. Our directory lists clinics across Malaysia, including PeKa B40 panel clinics for eligible Malaysians.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/peka-b40-clinics/', 'PeKa B40 clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What is a normal cholesterol level in Malaysia?', 'Malaysia’s guideline flags total cholesterol above 5.2 mmol/L, HDL below 1.0 (men) or 1.2 (women) and triglycerides above 1.7 mmol/L. The LDL target depends on your heart risk.'],
      ['What is a normal LDL level?', 'An LDL below 2.6 mmol/L is optimal for most adults. People at low or intermediate risk aim for below 3.0, and people at high or very high risk aim much lower, down to 1.4 mmol/L.'],
      ['Do I need to fast for a cholesterol test?', 'Usually not. Your doctor may ask you to fast if your triglycerides were very high before, or for other tests.'],
      ['How can I lower my cholesterol naturally?', 'Cut saturated fat such as santan and fried food, eat more fibre and oats, exercise regularly, lose weight if needed and stop smoking.'],
      ['Are eggs bad for cholesterol?', 'For most people, eating eggs has only a small effect on blood cholesterol. About one egg a day is reasonable as part of a healthy diet.'],
      ['Do statins cause muscle pain?', 'Muscle aches are common whether or not people take statins. Trials found that more than 90% of reported muscle symptoms weren’t caused by the statin.'],
      ['Is red yeast rice safe?', 'It contains the same substance as a statin. Use only registered products with a MAL number, and don’t take it with a prescribed statin.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical practice guideline: management of dyslipidaemia, 5th edition (2017)', 'https://mymahtas2.moh.gov.my/files/CPG%20Management%20of%20Dyslipidaemia%202017%20(5th%20Edition).pdf'],
      ['Academy of Medicine of Malaysia — Clinical practice guidelines listing (dyslipidaemia, 6th edition, 2023)', 'https://www.acadmed.org.my/index.cfm?menuid=67'],
      ['Rosman et al — Risk factor assessments and lipid management in hospitalised patients in Malaysia, Malaysian Journal of Medical Sciences (2025)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13132105/'],
      ['NHS — Cholesterol levels (Mar 2026)', 'https://www.nhs.uk/conditions/high-cholesterol/cholesterol-levels/'],
      ['NHS — Statins (May 2026)', 'https://www.nhs.uk/medicines/statins/'],
      ['The Star — Over half a million Malaysians live with non-communicable diseases (May 2024)', 'https://thestar.com.my/news/nation/2024/05/16/over-half-a-million-malaysians-live-with-non-communicable-diseases-according-to-survey'],
      ['CodeBlue — Over two million adults in Malaysia live with three NCDs: NHMS 2023 (May 2024)', 'https://codeblue.galencentre.org/2024/05/over-two-million-adults-in-malaysia-live-with-three-ncds-nhms-2023/'],
      ['Chua et al — Familial hypercholesterolaemia in the Malaysian community, Journal of Atherosclerosis and Thrombosis (2021)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8560842'],
      ['Cholesterol Treatment Trialists’ Collaboration — Effect of statin therapy on muscle symptoms, The Lancet (2022)', 'https://ora.ox.ac.uk/objects/uuid:fda95810-d9a8-43bc-9d87-b63dacc54d95'],
      ['News-Medical — Coconut oil increases bad cholesterol (Jan 2020)', 'https://www.news-medical.net/news/20200121/Coconut-oil-increases-bad-cholesterol.aspx'],
      ['EurekAlert (American Heart Association) — Dietary cholesterol and eggs (Dec 2019)', 'https://www.eurekalert.org/news-releases/714061'],
      ['Bernama — NPRA on red yeast rice products (Apr 2024)', 'https://www.bernama.com/en/general/news.php?id=2284902'],
    ],
    related: ['blood-pressure-cholesterol-malaysia', 'tanda-sakit-jantung-heart-disease-signs-malaysia', 'blood-test-results-explained-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'prednisolone-steroid-untuk-apa-malaysia',
    title: 'Prednisolone untuk sakit apa? What this steroid treats, how to take it safely, and side effects',
    crumb: 'Prednisolone: untuk apa',
    desc: 'Prednisolone untuk sakit apa: what this steroid tablet treats, how to take it, why you shouldn’t stop suddenly, side effects, interactions, and hidden steroids in unregistered products in Malaysia.',
    excerpt: 'Prednisolone is a steroid medicine used for asthma attacks, allergies, skin, joint and bowel conditions, and more. What it treats, how to take it, why long courses must be tapered, the side effects to watch for, and why steroids hidden in unregistered “ubat sakit urat” products are dangerous.',
    standfirst: 'Prednisolone is a corticosteroid, a steroid medicine that reduces inflammation and calms an overactive immune system. Doctors prescribe it for many conditions, from asthma attacks to arthritis. It works well, but it has side effects, especially with long courses, and it must not be stopped suddenly after more than a few weeks. It isn’t the same as the anabolic steroids some people misuse for bodybuilding.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Prednisolone', 'Corticosteroid', 'Steroid medicine'],
    image: 'medications', imageAlt: 'Assorted tablets and medicines on a table',
    keyPoints: [
      'Prednisolone treats inflammation and immune conditions, including asthma and COPD flare-ups, severe allergies and hives, eczema, rheumatoid arthritis, lupus, inflammatory bowel disease, gout flares and some kidney conditions.',
      'Take it in the morning with or after breakfast. Don’t stop suddenly if you have taken it for more than 3 weeks or at a high dose. Your doctor will reduce the dose gradually.',
      'Short courses usually cause only mild side effects such as a bigger appetite, poor sleep, mood changes and higher blood sugar. Long-term use can weaken bones, raise blood pressure and increase the risk of infection.',
      'Avoid anti-inflammatory painkillers unless your doctor agrees, as together they raise the risk of stomach bleeding. Avoid live vaccines while taking it.',
      'The Ministry of Health has found prednisolone and dexamethasone hidden in unregistered traditional products. Check for a MAL number and hologram before buying any remedy.',
    ],
    sections: [
      { id: 'uses', h: 'Prednisolone untuk sakit apa? What it treats', tocLabel: 'What it treats', html: `<p>Prednisolone is used for conditions where inflammation or the immune system is causing harm, including:</p>
<ul>
<li><strong>Breathing:</strong> flare-ups of <a href="/articles/asthma-asma-inhaler-malaysia/">asthma</a> and COPD</li>
<li><strong>Allergy and skin:</strong> severe allergic reactions and <a href="/articles/itchy-skin-eczema-hives-malaysia/">hives</a>, severe eczema flares, <a href="/articles/psoriasis-malaysia/">psoriasis</a>, and blistering skin conditions</li>
<li><strong>Joints and muscles:</strong> rheumatoid arthritis, polymyalgia rheumatica, and <a href="/articles/gout-malaysia/">gout</a> flares when other painkillers aren’t suitable</li>
<li><strong>Immune conditions:</strong> lupus, vasculitis and sarcoidosis</li>
<li><strong>Bowel:</strong> ulcerative colitis and Crohn’s disease</li>
<li><strong>Kidneys:</strong> nephrotic syndrome, particularly in children</li>
<li><strong>Nerves:</strong> Bell’s palsy, ideally started within 72 hours</li>
<li><strong>Other uses:</strong> preventing transplant rejection, Addison’s disease, and as part of some cancer treatments</li>
</ul>
<p>Courses range from a few days, for an asthma attack, to a year or more, for polymyalgia rheumatica. Prednisolone is a prescription medicine. Never take tablets prescribed for someone else.</p>` },
      { id: 'how', h: 'How to take prednisolone', tocLabel: 'How to take it', html: `<ul>
<li><strong>Take it once a day in the morning</strong>, with or after breakfast, unless your doctor says otherwise. This reduces stomach upset and sleep problems.</li>
<li><strong>Swallow the tablets whole</strong> with water.</li>
<li><strong>Don’t stop suddenly</strong> if you have taken it for more than 3 weeks or at a high dose. Your body stops making its own steroid hormones while you take it, so the dose is lowered gradually. Stopping too fast can cause weakness, fever, muscle pain and dangerously low blood pressure.</li>
<li><strong>Carry a steroid card</strong> if you take it for more than 3 weeks, and tell any doctor, dentist or nurse treating you. People who depend on daily steroids may need a higher dose during serious illness or surgery.</li>
<li><strong>Short courses</strong> of 3 weeks or less are unlikely to cause long-term side effects, and can usually be stopped as prescribed.</li>
</ul>
${figure('medications', 'Tablets and medicines on a table', 'Take prednisolone in the morning with food, and don’t stop a long course suddenly.')}` },
      { id: 'side-effects', h: 'Side effects', tocLabel: 'Side effects', html: `<p><strong>Common, especially with short courses:</strong></p>
<ul>
<li>a bigger appetite and weight gain</li>
<li>difficulty sleeping, mood changes, irritability or anxiety</li>
<li>indigestion, nausea or headache</li>
<li>higher blood sugar, and fluid retention</li>
</ul>
<p><strong>With long-term or high-dose use:</strong></p>
<ul>
<li>a rounder face and weight gain (Cushing’s syndrome)</li>
<li>weaker bones, and slowed growth in children</li>
<li>more infections</li>
<li>high blood pressure and diabetes. See our <a href="/articles/normal-blood-sugar-level-malaysia/">blood sugar guide</a>.</li>
<li>cataracts and glaucoma</li>
<li>thin skin, easy bruising and slow wound healing</li>
</ul>
<p><strong>Get medical help urgently if you have:</strong></p>
<ul>
<li>black, tarry stools, or vomit with blood in it</li>
<li>signs of infection, such as a fever or sore throat</li>
<li>severe mood changes, low mood, or thoughts of harming yourself. About 5 in 100 people have serious mental health effects.</li>
<li>contact with chickenpox, shingles or measles, if you haven’t had chickenpox, while taking prednisolone or within 3 months of stopping. See our guides to <a href="/articles/chickenpox-malaysia/">chickenpox</a> and <a href="/articles/shingles-kayap-malaysia/">shingles</a>.</li>
<li>blurred vision</li>
</ul>` },
      { id: 'cautions', h: 'Other medicines, pregnancy and children', tocLabel: 'Cautions', html: `<ul>
<li><strong>Anti-inflammatory painkillers</strong> such as ibuprofen and diclofenac raise the risk of stomach ulcers and bleeding when taken with prednisolone. Ask your doctor before taking them. See our <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkiller guide</a>.</li>
<li><strong>Diabetes medicines:</strong> prednisolone raises blood sugar, so you may need to check it more often or adjust your treatment.</li>
<li><strong>Warfarin, some antibiotics, liquorice, and traditional or herbal medicines</strong> can interact. Tell your doctor and pharmacist everything you take.</li>
<li><strong>Vaccines:</strong> avoid live vaccines, such as MMR, chickenpox, BCG, yellow fever and oral typhoid, while taking prednisolone. Non-live vaccines such as flu are safe.</li>
<li><strong>Pregnancy and breastfeeding:</strong> prednisolone can be used if needed, and is usually fine while breastfeeding. Your doctor will weigh up the benefits and risks.</li>
<li><strong>Children</strong> can take it, but long-term use may slow growth, so it is monitored.</li>
</ul>` },
      { id: 'hidden', h: 'Hidden steroids in unregistered products', tocLabel: 'Hidden steroids', html: `<p>Steroids are controlled medicines in Malaysia and should only be used with a doctor’s prescription. Dexamethasone and prednisolone are never allowed in traditional medicines. Yet the Ministry of Health has repeatedly found them hidden in unregistered products:</p>
<ul>
<li>In December 2025, the ministry warned that an unregistered powder sold online contained dexamethasone, prednisolone and diclofenac, with risks including kidney damage, diabetes, high blood pressure and hormonal problems.</li>
<li>In 2016, unregistered traditional products sold for joint, back and muscle pain were found to contain dexamethasone, with reports of Cushing’s syndrome (“moon face”) and liver failure.</li>
<li>In May 2026, Singapore’s health authority reported people hospitalised with kidney injury, Cushing’s syndrome and adrenal failure after taking pain relief products laced with steroids.</li>
</ul>
<p><strong>A warning sign:</strong> a remedy that brings unusually fast relief for long-standing pain or skin problems may contain a hidden steroid. Before buying any remedy, check for a <strong>MAL registration number</strong> and the hologram security label, and search it on NPRA’s website. If you have been taking an unregistered product for a long time, <strong>don’t stop it suddenly</strong>. See a doctor, as your body may need the steroid dose reduced gradually.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can explain why you have been prescribed prednisolone, review side effects, check your blood sugar and blood pressure, and advise you if you think you have taken a product with a hidden steroid. Our directory lists clinics across Malaysia.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['Prednisolone 5mg untuk sakit apa?', 'Prednisolone treats inflammation and immune conditions such as asthma flare-ups, severe allergies, eczema, arthritis, lupus, bowel inflammation and gout flares. The dose depends on the condition, and 5mg tablets are combined to make up the prescribed dose.'],
      ['Is prednisolone a painkiller?', 'Not exactly. It reduces inflammation, which can ease pain in conditions such as arthritis or gout, but it isn’t a general painkiller.'],
      ['Should I take prednisolone in the morning or at night?', 'In the morning, with or after breakfast. Taking it at night can cause sleep problems.'],
      ['Can I stop prednisolone suddenly?', 'Not if you have taken it for more than 3 weeks or at a high dose. Your doctor will lower the dose gradually. Short courses can usually be stopped as prescribed.'],
      ['Does prednisolone cause weight gain?', 'It often increases appetite, and long-term use can cause weight gain and a rounder face. Short courses usually have a smaller effect.'],
      ['Can I take ibuprofen with prednisolone?', 'Only if your doctor agrees, because together they raise the risk of stomach ulcers and bleeding. Paracetamol is usually safer.'],
      ['How do I know if a product has hidden steroids?', 'You can’t tell by looking. Buy only registered products with a MAL number and hologram, and be suspicious of remedies that work unusually fast for long-term pain.'],
    ],
    sources: [
      ['NHS — Prednisolone tablets and liquid (Oct 2026)', 'https://www.nhs.uk/medicines/prednisolone/'],
      ['NHS — Side effects of prednisolone (Oct 2026)', 'https://www.nhs.uk/medicines/prednisolone/side-effects-of-prednisolone-tablets-and-liquid'],
      ['NHS — Taking prednisolone with other medicines and herbal supplements (Oct 2026)', 'https://www.nhs.uk/medicines/prednisolone/taking-prednisolone-with-other-medicines-and-herbal-supplements/'],
      ['NHS — Steroids (Jun 2025)', 'https://www.nhs.uk/conditions/steroids/'],
      ['British Association of Dermatologists — Oral treatment with corticosteroids (Mar 2024)', 'https://skinhealthinfo.org.uk/condition/oral-treatment-with-corticosteroids/'],
      ['Cancer Research UK — Steroids (Oct 2026)', 'https://www.cancerresearchuk.org/about-cancer/cancers-in-general/treatment/cancer-drugs/steroids'],
      ['electronic Medicines Compendium — Prednisolone 5mg tablets patient leaflet (2023)', 'https://www.medicines.org.uk/emc/product/2427/xpil/print'],
      ['HealthHub Singapore — Prednisolone (May 2026)', 'https://www.healthhub.sg/a-z/medications/prednisolone'],
      ['NHS — Bell’s palsy (2023)', 'https://www.nhs.uk/conditions/bells-palsy/'],
      ['NHS — Polymyalgia rheumatica (2023)', 'https://www.nhs.uk/conditions/polymyalgia-rheumatica/'],
      ['NHS — Gout treatment (2023)', 'https://www.nhs.uk/conditions/gout/treatment/'],
      ['NHS — Nephrotic syndrome (2022)', 'https://www.nhs.uk/conditions/nephrotic-syndrome/'],
      ['The Star — Health Ministry warns against unregistered traditional medicine with harmful substances (Dec 2025)', 'https://www.thestar.com.my/news/nation/2025/12/18/health-ministry-warns-against-unregistered-traditional-medicine-with-harmful-substances'],
      ['The Vibes — Steroids are controlled medications (Dec 2025)', 'https://www.thevibes.com/articles/lifestyles/117126/steroids-are-controlled-medications-that-should-only-be-used-under-a-doctors-prescription-for-specific-treatments-but-are-often-misused-december-18-2025'],
      ['Health Sciences Authority Singapore — Pain relief products purchased from dubious sources (May 2026)', 'https://www.hsa.gov.sg/announcements/dubious-pain-relief-products/'],
      ['Malay Mail — Health ministry issues warning on TCM products (Apr 2016)', 'https://www.malaymail.com/news/malaysia/2016/04/15/health-ministry-issues-warning-on-tcm-products-dong-mai-tan-and-seven-leave/1100841'],
    ],
    related: ['painkillers-paracetamol-ibuprofen-malaysia', 'asthma-asma-inhaler-malaysia', 'gout-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'pantang-larang-makanan-pesakit-buah-pinggang-kidney-diet-malaysia',
    title: 'Pantang larang makanan pesakit buah pinggang: a kidney disease diet guide for Malaysians',
    crumb: 'Kidney disease diet',
    desc: 'Pantang larang makanan untuk pesakit buah pinggang: salt, potassium, phosphate, protein and fluid advice by stage, high-salt Malaysian sauces, star fruit dangers, and why to see a dietitian.',
    excerpt: 'There is no single kidney diet: what you need to limit depends on your stage, your blood results and whether you are on dialysis. A practical guide to salt, potassium, phosphate, protein and fluids, Malaysian foods to watch, why star fruit is dangerous, and where to get dietitian help.',
    standfirst: 'People with kidney disease are often given long lists of foods to avoid. In fact, what you need to limit depends on your stage of kidney disease, your blood test results and whether you are on dialysis. Cutting salt helps almost everyone. Other limits, on potassium, phosphate, protein or fluid, are only needed for some people, and the wrong restrictions can do harm. A dietitian can tailor the plan to you.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Chronic kidney disease', 'Renal diet', 'Pantang larang makanan'],
    image: 'fresh-vegetables', imageAlt: 'Fresh vegetables on a kitchen counter',
    keyPoints: [
      'There is no one “kidney diet”. Your limits depend on your stage, blood results and whether you are on dialysis, so ask for a dietitian referral.',
      'Malaysia’s kidney guideline advises less than 2,400mg of sodium a day, about a teaspoon of salt. Soy sauce, budu and cencalok contain around 5g of sodium per 100g.',
      'Only limit potassium if your blood tests show it is high. Never use potassium-based salt substitutes if you have kidney disease.',
      'People not on dialysis are usually advised moderate protein (0.6 to 0.8g per kg of body weight a day), while people on dialysis need more (1.0 to 1.2g per kg).',
      'Avoid star fruit (belimbing) and belimbing buluh if you have kidney disease: they can cause confusion, seizures and kidney injury.',
    ],
    sections: [
      { id: 'principle', h: 'There is no one kidney diet', tocLabel: 'The basics', html: `<p>Diet advice for kidney disease depends on:</p>
<ul>
<li>your <strong>stage</strong> of chronic kidney disease. See our guide to <a href="/articles/kencing-berbuih-kidney-disease-malaysia/">kidney disease and its stages</a>.</li>
<li>your <strong>blood test results</strong>, especially potassium and phosphate</li>
<li>whether you are on <strong>dialysis</strong></li>
<li>other conditions, such as <a href="/articles/normal-blood-sugar-level-malaysia/">diabetes</a></li>
</ul>
<p>UK kidney specialists warn that a low-potassium diet is irrelevant for most people with early kidney disease, and that unnecessary limits can lead people to cut out healthy fruit and vegetables. So don’t follow a generic list of “pantang larang” without checking with your doctor or a dietitian.</p>
<p>In a Malaysian study, only about a third of dialysis centres had access to a dietitian, so ask your doctor for a referral, especially at a government hospital.</p>` },
      { id: 'salt', h: 'Salt: the change that helps almost everyone', tocLabel: 'Salt', html: `<p>Malaysia’s kidney disease guideline advises <strong>less than 2,400mg of sodium a day</strong>, about one teaspoon of salt in total, including salt already in food. Malaysian adults eat about 3,400mg a day on average.</p>
<p><strong>Watch out for:</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>Food</th><th>Sodium per 100g (average, Malaysian survey)</th></tr></thead>
<tbody>
<tr><td>Budu and cencalok</td><td>About 5,200mg</td></tr>
<tr><td>Light soy sauce (kicap cair)</td><td>About 5,100mg</td></tr>
<tr><td>Salty soy sauce</td><td>About 4,800mg</td></tr>
<tr><td>Oyster sauce</td><td>About 3,200mg</td></tr>
</tbody></table></div>
<p>Other high-salt foods include instant noodles, salted fish (ikan masin), salted eggs, pickles, sausages, luncheon meat and nuggets, canned soups, MSG, ready-made cooking pastes and chilli sauces.</p>
<ul>
<li>Cook with herbs, spices, lime, garlic and ginger instead of extra salt or sauces.</li>
<li>Taste before adding sauce at the table.</li>
<li>Choose fresh rather than processed or preserved foods.</li>
</ul>
<p><strong>Never use potassium-based salt substitutes</strong> (often sold as “low sodium” or “sodium-free” salt) if you have kidney disease, as they can raise your potassium dangerously.</p>
${figure('fresh-vegetables', 'Fresh vegetables', 'Fresh food cooked with herbs and spices instead of salty sauces is the most useful change for most people with kidney disease.')}` },
      { id: 'potassium', h: 'Potassium: only if your blood test is high', tocLabel: 'Potassium', html: `<p>Potassium only needs limiting if your doctor tells you your blood potassium is high, which is more common in advanced kidney disease and with some medicines. Both high and low potassium can affect the heart.</p>
<p><strong>Foods high in potassium</strong> include bananas, avocado, dried fruit, coconut and coconut products, potatoes and chips, tomato purée, mushrooms, spinach, fruit juices, chocolate and nuts. Many can still be eaten in smaller portions, for example half a banana.</p>
<p><strong>Reducing potassium in vegetables and potatoes:</strong> cut them into small pieces, soak them in plenty of water, boil them in fresh water and throw the cooking water away.</p>
<p><strong>Durian:</strong> it is high in potassium, and there have been reports of serious harm in people on dialysis after eating it. If you are on dialysis or have a high potassium level, ask your team before eating it.</p>` },
      { id: 'phosphate-protein', h: 'Phosphate and protein', tocLabel: 'Phosphate and protein', html: `<p><strong>Phosphate</strong> is usually limited in later stages and on dialysis, when blood tests show it is high. High phosphate weakens bones and can harden blood vessels.</p>
<ul>
<li>Phosphate added to processed food (look for “phos” in the ingredients) is absorbed almost completely, so processed meats, dark colas and some bottled drinks are the first things to cut.</li>
<li>Dairy, sardines, organ meats, nuts and beans are naturally high in phosphate.</li>
<li>If you are prescribed phosphate binders, take them with every meal and snack.</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>Group</th><th>Protein per day</th></tr></thead>
<tbody>
<tr><td>Stages 3 to 5, not on dialysis (Malaysian guideline)</td><td>0.6 to 0.8g per kg of body weight, with a dietitian</td></tr>
<tr><td>Kidney disease caused by diabetes</td><td>About 0.8g per kg</td></tr>
<tr><td>On haemodialysis or peritoneal dialysis</td><td>1.0 to 1.2g per kg</td></tr>
</tbody></table></div>
<p>Too much protein can strain damaged kidneys, but too little can cause malnutrition, especially on dialysis, so don’t cut it drastically on your own. Plant proteins, such as tofu and lentils, may be easier on the kidneys. Avoid protein shakes and supplements unless your dietitian recommends them.</p>` },
      { id: 'fluids', h: 'How much should I drink?', tocLabel: 'Fluids', html: `<p>Most people with early kidney disease don’t need to limit fluids. A large trial found that drinking extra water didn’t slow kidney disease. Drinking more than you need won’t “flush” the kidneys.</p>
<p>In advanced kidney disease and on dialysis, you may be given a daily fluid allowance, depending on how much urine you still pass. Cutting fluids when you haven’t been told to can be harmful. Eating less salt makes it easier to stick to a fluid limit, because salt makes you thirsty.</p>
<p><strong>With diabetes:</strong> control carbohydrates and sugar, as you would anyway. A good diabetes diet suits early kidney disease.</p>` },
      { id: 'avoid', h: 'Foods and remedies to avoid', tocLabel: 'What to avoid', html: `<ul>
<li><strong>Star fruit (belimbing besi):</strong> contains a toxin that people with kidney disease can’t clear. It can cause hiccups, confusion, seizures and death. Avoid it completely if you have kidney disease.</li>
<li><strong>Belimbing buluh (bilimbi):</strong> a Sabah case report described acute kidney injury in a young man with healthy kidneys after eating about 1kg a day, from its oxalate content. People with kidney disease should avoid it, especially as juice or on an empty stomach.</li>
<li><strong>Herbal remedies and supplements:</strong> in a Malaysian study, about two-thirds of dialysis patients used traditional or complementary medicines, and most didn’t tell their doctor. Herbs can build up, raise potassium, cause fluid overload and interact with medicines. Some herbs containing aristolochic acid cause kidney disease. Tell your doctor about everything you take.</li>
<li><strong>Anti-inflammatory painkillers</strong> such as ibuprofen and diclofenac, unless your doctor agrees. See our <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkiller guide</a>.</li>
</ul>
<p><strong>Where to get help:</strong> ask your doctor for a dietitian referral. The Malaysian Dietitians’ Association has kidney-friendly recipe books, including resources from the National Kidney Foundation of Malaysia and Hospital Kuala Lumpur.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check your kidney function, potassium and phosphate levels, review your medicines and refer you to a dietitian or kidney specialist. Our directory lists clinics across Malaysia, including PeKa B40 panel clinics.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/peka-b40-clinics/', 'PeKa B40 clinics']],
    faqs: [
      ['What foods should kidney patients avoid?', 'Most should cut salt and salty sauces, processed meats and instant noodles, and avoid star fruit and herbal remedies. Limits on potassium, phosphate, protein and fluids depend on your stage and blood tests.'],
      ['Can kidney patients eat bananas?', 'Usually yes in early kidney disease. If your blood potassium is high, you may need smaller portions, such as half a banana, or to avoid them. Ask your doctor or dietitian.'],
      ['How much salt can a kidney patient have?', 'Malaysia’s kidney guideline advises less than 2,400mg of sodium a day, about a teaspoon of salt in total.'],
      ['Should kidney patients drink a lot of water?', 'Not necessarily. Most people with early kidney disease don’t need to change how much they drink, and extra water doesn’t protect the kidneys. People on dialysis may need to limit fluids.'],
      ['Why is star fruit dangerous for kidney patients?', 'It contains a toxin that damaged kidneys can’t remove, which can cause hiccups, confusion, seizures and even death.'],
      ['Should kidney patients eat less protein?', 'People with stage 3 to 5 kidney disease not on dialysis are usually advised moderate protein. People on dialysis need more protein. A dietitian can set the right amount.'],
      ['Can I use low-sodium salt?', 'Not if it contains potassium chloride, which most do. It can raise your potassium dangerously.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical practice guideline: management of chronic kidney disease in adults, 2nd edition (2018)', 'https://mymahtas2.moh.gov.my/files/CPG%20Management%20of%20Chronic%20Kidney%20%20Disease%20(Second%20Edition).pdf'],
      ['Lambert et al — CARI commentary on the KDOQI nutrition guideline, Nephrology (2022)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9303594'],
      ['Shahar et al — Sodium content of sauces and salt intake in Malaysia, BMJ Open (2019)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6538051'],
      ['Pantai Hospitals — Salt and sodium intake for Malaysians (Aug 2022)', 'https://www.pantai.com.my/health-pulse/salt-sodium-intake-malaysians'],
      ['Kidney Care UK — Diabetes and kidney disease: what can I eat? (Aug 2026)', 'https://kidneycareuk.org/kidney-disease-information/diabetes-and-kidney-disease/kidney-disease-caused-by-diabetes-your-questions-answered/diabetes-and-kidney-disease-what-can-i-eat/'],
      ['Kidney Care UK — Lowering your potassium levels (2026)', 'https://kidneycareuk.org/get-support/healthy-diet-support/lowering-your-potassium-levels/'],
      ['Kidney Care UK — Managing your fluid levels (2024)', 'https://kidneycareuk.org/get-support/healthy-diet-support/patient-info-managing-your-fluid-levels/'],
      ['National Kidney Foundation Singapore — Potassium education leaflet (Malay) (2026)', 'https://nkfs.org/wp-content/uploads/2026/07/Potassium-Education-Leaflet-Malay.pdf'],
      ['National Kidney Foundation (US) — Phosphorus and your CKD diet (Jul 2024)', 'https://www.kidney.org/kidney-topics/phosphorus-and-your-ckd-diet'],
      ['National Kidney Foundation (US) — Nutrition and kidney disease, stages 1–5', 'https://www.kidney.org/kidney-topics/nutrition-and-kidney-disease-stages-1-5-not-dialysis'],
      ['NephJC — Water intake in CKD trial (CKD WIT) (Jul 2018)', 'https://nephjc.com/news/waterinckd'],
      ['de Oliveira and Aguiar — Star fruit toxicity in kidney disease, Jornal Brasileiro de Nefrologia (2015)', 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:26154645&resultType=core&format=json'],
      ['Wong and Lansing — Acute kidney injury after bilimbi ingestion, BMJ Case Reports (2021)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8728385'],
      ['Zakaria et al — Traditional and complementary medicine use among Malaysian haemodialysis patients, BMC Complementary Medicine and Therapies (2021)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7967981'],
      ['Khor et al — Dietitian access in Malaysian haemodialysis centres, BMC Health Services Research (2018)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6280465'],
      ['Malaysian Dietitians’ Association — Renal recipe books', 'https://www.dietitians.org.my/resources/renal-recipe-book-webpage'],
      ['Kosmo — Pesakit buah pinggang kronik dan durian (Jul 2025)', 'https://www.kosmo.com.my/2025/07/25/3-pesakit-buah-pinggang-kronik-maut-makan-durian/'],
    ],
    related: ['kencing-berbuih-kidney-disease-malaysia', 'normal-blood-sugar-level-malaysia', 'blood-pressure-cholesterol-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cara-hilangkan-sedu-hiccups-malaysia',
    title: 'Cara hilangkan sedu (hiccups): what causes them, remedies to try, babies, and when hiccups need a doctor',
    crumb: 'Cara hilangkan sedu (hiccups)',
    desc: 'Cara hilangkan sedu: what causes hiccups, home remedies to try and what the evidence says, hiccups in babies, and when hiccups lasting more than 48 hours need a doctor.',
    excerpt: 'Hiccups usually stop on their own within minutes. Common triggers, the remedies people swear by and what the evidence says, why baby hiccups are rarely a worry, and the causes and treatment of hiccups that last more than 2 days.',
    standfirst: 'Sedu (also called cegukan) is the Malay word for hiccups. They happen when the diaphragm, the muscle under your lungs, suddenly tightens and the vocal cords snap shut, making the “hic” sound. Most bouts stop on their own within minutes. Hiccups that last more than 2 days are uncommon and worth checking with a doctor.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Hiccups', 'Sedu', 'Diaphragm'],
    image: 'healthy-salad', imageAlt: 'A healthy meal on a table',
    keyPoints: [
      'Hiccups are often triggered by eating too much or too fast, fizzy drinks, alcohol, spicy food, swallowing air, stress or excitement. Often there is no obvious cause.',
      'Popular remedies include holding your breath, sipping ice-cold water, swallowing a spoonful of sugar and pulling your knees to your chest. They are safe to try, but there is no good evidence that any one works best.',
      'Baby hiccups are common and harmless, and usually stop within 5 to 15 minutes.',
      'See a doctor if hiccups last more than 48 hours or keep coming back. Causes include acid reflux, some medicines such as dexamethasone, and rarely nerve or brain problems.',
      'Get urgent help for hiccups with headache, weakness, numbness or loss of balance, or with chest pain or breathlessness.',
    ],
    sections: [
      { id: 'what', h: 'What causes hiccups?', tocLabel: 'Causes', html: `<p>Hiccups are repeated spasms of the diaphragm. Each spasm is followed by the vocal cords closing suddenly, which makes the “hic”. Doctors group them by how long they last:</p>
<ul>
<li><strong>Short-lived:</strong> a few minutes. Almost everyone gets these.</li>
<li><strong>Persistent:</strong> more than 48 hours, up to a month</li>
<li><strong>Intractable:</strong> more than a month</li>
</ul>
<p><strong>Common triggers:</strong></p>
<ul>
<li>eating too much or too quickly</li>
<li>fizzy drinks and alcohol</li>
<li>spicy, very hot or very cold food, or something very cold straight after something hot</li>
<li>swallowing air, for example when chewing gum, smoking or talking while eating</li>
<li>stress, strong emotions or excitement</li>
</ul>` },
      { id: 'remedies', h: 'Cara hilangkan sedu: remedies to try', tocLabel: 'Remedies', html: `<p>These are commonly suggested, including by the NHS. They are generally safe, but there is no good evidence that one works better than another, or that they work for everyone:</p>
<ul>
<li>hold your breath for a short while</li>
<li>sip ice-cold water, or gargle with it</li>
<li>swallow a teaspoon of granulated sugar</li>
<li>bite on a lemon or taste a little vinegar</li>
<li>pull your knees up to your chest and lean forward</li>
<li>breathe into a <strong>paper</strong> bag, keeping it away from your face. Never use a plastic bag.</li>
</ul>
<p><strong>What about special straws?</strong> A 2021 online study of a rigid drinking straw that makes you suck hard and swallow reported success in about 9 out of 10 users. But the study had no comparison group, relied on users’ own reports, and one of the authors invented the device, so better trials are needed.</p>
<p><strong>To prevent hiccups:</strong> eat slowly, have smaller meals, and cut down on fizzy drinks and alcohol.</p>
${figure('healthy-salad', 'A healthy meal', 'Eating more slowly and having smaller meals can help prevent hiccups.')}` },
      { id: 'babies', h: 'Hiccups in babies', tocLabel: 'Babies', html: `<p>Hiccups are very common in babies and are usually harmless. A Malaysian Paediatric Association doctor notes that they often last 5 to 15 minutes, sometimes a couple of hours, and tend to bother parents more than the baby.</p>
<ul>
<li>They are often caused by feeding quickly, swallowing air, or crying for a long time.</li>
<li>Try changing your baby’s position, burping them and helping them relax.</li>
<li>Feed when your baby is calm, check the latch, feed in a more upright position, and keep your baby upright for about 30 minutes after feeds.</li>
</ul>
<p><strong>See a doctor</strong> if hiccups come with frequent forceful vomiting, poor weight gain, crying or arching the back during feeds, or coughing or choking. These can be signs of reflux.</p>` },
      { id: 'persistent', h: 'Hiccups that won’t stop', tocLabel: 'Persistent hiccups', html: `<p>Hiccups lasting more than 2 days are uncommon and usually have a cause. They can make it hard to eat, sleep and talk.</p>
<p><strong>Possible causes:</strong></p>
<ul>
<li><a href="/articles/gerd-acid-reflux-malaysia/">acid reflux (GERD)</a> and gastritis, among the most common</li>
<li>medicines, including the steroid dexamethasone, sleeping tablets (benzodiazepines), strong painkillers and some chemotherapy. See also our guide to <a href="/articles/prednisolone-steroid-untuk-apa-malaysia/">steroid tablets</a>.</li>
<li>recent surgery, especially under general anaesthetic</li>
<li>chest problems such as pneumonia or pleurisy</li>
<li>kidney failure and low calcium levels. See our guide to <a href="/articles/kencing-berbuih-kidney-disease-malaysia/">kidney disease</a>.</li>
<li>shingles</li>
<li>rarely, stroke, a brain tumour, multiple sclerosis, or a tumour in the chest or tummy</li>
</ul>
<p><strong>What doctors do:</strong> blood tests for salts and kidney function, a chest X-ray and an ECG, and sometimes a camera test for reflux or a scan. Treating the cause, for example reflux, often stops the hiccups. Don’t stop a prescribed medicine without talking to your doctor.</p>
<p>If hiccups continue, doctors may try medicines such as baclofen, gabapentin, metoclopramide or chlorpromazine. Evidence for these is limited, and they don’t work for everyone.</p>` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<p><strong>See a GP if:</strong></p>
<ul>
<li>hiccups last more than 48 hours</li>
<li>they keep coming back and affect your daily life, eating or sleep</li>
<li>a baby’s hiccups come with feeding problems or poor weight gain</li>
</ul>
<p><strong>Get urgent help or call <a href="tel:999">999</a> if hiccups come with:</strong></p>
<ul>
<li>headache, weakness, numbness, slurred speech or loss of balance, which can be signs of a stroke</li>
<li>chest pain or sudden breathlessness. See our guide to <a href="/articles/sakit-dada-chest-pain-malaysia/">chest pain</a>.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'For hiccups that last more than 2 days, a GP can look for a cause such as reflux or a medicine, arrange tests and suggest treatment. Our directory lists clinics across Malaysia, including those open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is sedu in English?', 'Hiccups. Sedu is also called cegukan in Malay.'],
      ['How do I stop hiccups fast?', 'Try holding your breath, sipping ice-cold water, swallowing a spoonful of sugar or pulling your knees to your chest. They are safe, but no remedy works for everyone, and most hiccups stop on their own within minutes.'],
      ['Why do I keep getting hiccups?', 'Common triggers are eating too fast, big meals, fizzy drinks, alcohol, spicy food and stress. If they keep coming back or last more than 2 days, see a doctor to check for reflux or a medicine side effect.'],
      ['Are hiccups in babies normal?', 'Yes. They are common and harmless. See a doctor if they come with forceful vomiting, poor weight gain or distress during feeds.'],
      ['How long is too long for hiccups?', 'See a doctor if they last more than 48 hours.'],
      ['Can medicines cause hiccups?', 'Yes. Steroids such as dexamethasone, sleeping tablets, strong painkillers and some chemotherapy can cause hiccups. Don’t stop a medicine without talking to your doctor.'],
    ],
    sources: [
      ['NHS — Hiccups (Jun 2023)', 'https://www.nhs.uk/conditions/hiccups/'],
      ['Cleveland Clinic — Hiccups (Apr 2024)', 'https://my.clevelandclinic.org/health/diseases/17672-hiccups'],
      ['MSD Manual Professional Version — Hiccups (Apr 2026)', 'https://www.msdmanuals.com/professional/gastrointestinal-disorders/symptoms-of-gastrointestinal-disorders/hiccups'],
      ['MSD Manual Consumer Version — Hiccups (Apr 2026)', 'https://www.msdmanuals.com/home/digestive-disorders/symptoms-of-digestive-disorders/hiccups'],
      ['Patient.info — Hiccups (2014)', 'https://patient.info/doctor/history-examination/hiccups'],
      ['Alvarez et al — Effectiveness of the forced inspiratory suction and swallow tool for hiccups, JAMA Network Open (2021)', 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2781196'],
      ['The Star — Parents, don’t panic if your baby has hiccups (Mar 2023)', 'https://thestar.com.my/lifestyle/health/2023/03/31/parents-don039t-panic-if-your-baby-has-hiccups-it039s-usually-harmless'],
      ['HealthyChildren.org (AAP) — Baby burping, hiccups and spit up (Dec 2024)', 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Baby-Burping-Hiccups-and-Spit-Up.aspx'],
    ],
    related: ['gerd-acid-reflux-malaysia', 'stomach-pain-gastric-malaysia', 'clinic-or-emergency-department'],
  },
];
