// Articles published 13 November 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-13';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NOV_2026_J = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'sakit-dada-chest-pain-malaysia',
    title: 'Sakit dada sebelah kiri, kanan atau tengah: chest pain causes and when to call 999',
    crumb: 'Sakit dada (chest pain)',
    desc: 'Sakit dada on the left, right or centre of the chest: heart attack signs, other serious causes, common harmless ones such as heartburn and muscle strain, and why you should call 999 if unsure.',
    excerpt: 'Chest pain is often caused by muscle strain, heartburn or anxiety, but it can be a heart attack, and you can’t tell the difference at home. Heart attack signs, why left-sided pain isn’t the only warning, other serious causes, clues to less serious ones, and what to do.',
    standfirst: 'Sakit dada means chest pain. Many causes are not serious, such as a strained muscle, heartburn or a panic attack. But heart disease is the leading cause of death in Malaysia, and heart attack pain isn’t always on the left. Doctors advise treating chest pain as heart-related until proven otherwise. If you are unsure, call 999.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Chest pain', 'Heart attack', 'Sakit dada'],
    image: 'bp-check-desk', imageAlt: 'A blood pressure check at a desk',
    keyPoints: [
      'Heart attack pain is usually in the centre of the chest, not just the left, and can spread to the jaw, either arm, the back or the upper tummy. It often comes with sweating, nausea or breathlessness.',
      'Women, older people and people with diabetes may have only breathlessness, tiredness, dizziness or sweating, without obvious chest pain.',
      'Call 999 for chest pain that is sudden, severe, doesn’t go away, or comes with sweating, breathlessness or feeling faint. Don’t drive yourself.',
      'Malaysia’s heart attack guideline advises chewing one 300mg aspirin tablet straight away if you aren’t already taking aspirin and aren’t allergic.',
      'Pain that gets worse when you press on your chest or move is more likely to be muscular. Burning after meals suggests heartburn. But only tests can rule out the heart.',
    ],
    sections: [
      { id: 'heart', h: 'Is it a heart attack?', tocLabel: 'Heart attack signs', html: `<p>Ischaemic heart disease is the leading cause of death in Malaysia, causing 17,421 deaths in 2024. It is the top cause of death in men and in people aged 41 to 59. Malaysians tend to have heart attacks about 6 years younger than people in international studies.</p>
<p><strong>Typical heart attack pain</strong>, according to Malaysia’s heart attack guideline:</p>
<ul>
<li>usually in the <strong>centre of the chest</strong></li>
<li>feels like pressure, squeezing, tightness or crushing, and may burn like indigestion</li>
<li>may spread to the jaw, neck, either arm, the back or the upper tummy</li>
<li>lasts more than a few minutes and doesn’t go away with rest</li>
<li>often comes with sweating, nausea, breathlessness or feeling faint</li>
</ul>
<p><strong>It isn’t always in the chest.</strong> Older people, women and people with diabetes may have only tiredness, breathlessness, dizziness, sweating or fainting. In a Malaysian study, patients who were women, had unusual symptoms or went to a GP first took longer to reach hospital.</p>
<p>See our guide to <a href="/articles/stroke-heart-attack-kuala-lumpur/">heart attack and stroke</a>.</p>` },
      { id: 'what-to-do', h: 'What to do if you think it’s your heart', tocLabel: 'What to do', html: `<ol>
<li><strong>Call <a href="tel:999">999</a></strong> or get someone to take you to the nearest hospital emergency department. <strong>Don’t drive yourself.</strong></li>
<li><strong>Aspirin:</strong> Malaysia’s heart attack guideline advises chewing and swallowing one 300mg aspirin tablet straight away, if you aren’t already taking aspirin regularly and aren’t allergic to it. Plain aspirin is preferred. Don’t give aspirin to children.</li>
<li>Use your own heart medicines, such as a GTN spray, as your doctor has advised.</li>
<li>Sit down, rest and stay with someone until help arrives.</li>
</ol>
<p>Every minute counts, because treatment works best in the first hours. Hospitals do a heart tracing (ECG) within minutes of arrival, and repeat blood tests (troponin) to look for heart damage.</p>` },
      { id: 'location', h: 'Chest pain on the left, right or centre', tocLabel: 'Left, right or centre', html: `<div class="table-wrap"><table>
<thead><tr><th>Where</th><th>Possible causes</th></tr></thead>
<tbody>
<tr><td><strong>Centre</strong> (tengah)</td><td>Heart attack or angina, heartburn and <a href="/articles/gerd-acid-reflux-malaysia/">GERD</a>, pericarditis, aortic dissection</td></tr>
<tr><td><strong>Left</strong> (kiri)</td><td>Heart, muscle strain, costochondritis, pleurisy, pneumonia, collapsed lung, shingles, <a href="/articles/anxiety-malaysia/">panic attack</a></td></tr>
<tr><td><strong>Right</strong> (kanan)</td><td>Muscle strain or broken rib, pneumonia, pleurisy, pulmonary embolism, collapsed lung, gallstones, shingles</td></tr>
</tbody></table></div>
<p><strong>Location doesn’t rule out the heart.</strong> Heart pain can spread to the right arm as well as the left, and sometimes isn’t in the chest at all. Don’t assume right-sided or central pain is safe.</p>` },
      { id: 'serious', h: 'Other serious causes', tocLabel: 'Other serious causes', html: `<ul>
<li><strong>Pulmonary embolism</strong> (a blood clot in the lung): sudden breathlessness, pain that is worse when you breathe in, coughing up blood, and sometimes a swollen, painful calf. The risk is higher after long journeys of 4 hours or more, and after a hospital stay.</li>
<li><strong>Aortic dissection</strong> (a tear in the main artery): sudden, severe, tearing pain in the chest or upper back, sometimes with fainting or stroke-like weakness. Uncontrolled <a href="/articles/blood-pressure-cholesterol-malaysia/">high blood pressure</a> is a major risk.</li>
<li><strong>Collapsed lung (pneumothorax):</strong> sudden sharp pain on one side with breathlessness, most common in tall, slim young men and smokers.</li>
<li><strong>Pericarditis:</strong> sharp, stabbing pain that is worse when lying down, breathing in or swallowing, and eases when you lean forward.</li>
<li><strong>Pneumonia and pleurisy:</strong> sharp pain when you breathe in or cough, with fever and coloured phlegm. See our guide to <a href="/articles/pneumonia-pneumococcal-vaccine-malaysia/">pneumonia</a>.</li>
</ul>
<p>All of these need emergency care.</p>
${figure('bp-check-desk', 'A blood pressure check at a desk', 'High blood pressure raises the risk of both heart attacks and aortic dissection.')}` },
      { id: 'common', h: 'Common, less serious causes', tocLabel: 'Less serious causes', html: `<ul>
<li><strong>Muscle strain or costochondritis</strong> (inflamed rib cartilage): sharp pain at the front or side of the chest that gets worse when you move, breathe deeply or press on the area, often after exercise or lifting.</li>
<li><strong>Heartburn or reflux:</strong> burning behind the breastbone after eating or when lying down, with a sour taste, regurgitation or bloating.</li>
<li><strong>Anxiety or a panic attack:</strong> sharp chest pain with worry, a fast heartbeat, sweating and fast breathing. See our guides to <a href="/articles/anxiety-malaysia/">anxiety</a> and <a href="/articles/normal-heart-rate-palpitations-malaysia/">palpitations</a>.</li>
<li><strong>Shingles:</strong> burning or tingling on one side of the chest, followed a few days later by a blistering rash. Antiviral medicine works best within 3 days of the rash. See our <a href="/articles/shingles-kayap-malaysia/">shingles guide</a>.</li>
<li><strong>Gallstones:</strong> pain under the right ribs or in the upper tummy, sometimes felt in the lower chest, lasting more than 30 minutes.</li>
</ul>
<p>These clues can help, but <strong>don’t diagnose yourself</strong>. Heart pain can feel like heartburn, and people having a heart attack often feel anxious. If you have risk factors such as diabetes, high blood pressure, smoking or a family history of heart disease, get checked.</p>` },
      { id: 'children', h: 'Chest pain in children and young people', tocLabel: 'Children', html: `<p>Chest pain in children is rarely due to the heart. It is most often caused by the chest wall muscles or cartilage, asthma, pneumonia, reflux or anxiety. See a doctor promptly if a child has chest pain:</p>
<ul>
<li>during exercise, or with fainting or near-fainting</li>
<li>that doesn’t go away</li>
<li>with a heart condition or past Kawasaki disease</li>
<li>with a family history of sudden unexplained death or heart muscle disease</li>
</ul>` },
      { id: 'urgent', h: 'When to call 999', tocLabel: 'When to call 999', html: `<p><strong>Call <a href="tel:999">999</a> for chest pain that:</strong></p>
<ul>
<li>is sudden and doesn’t go away, or lasts more than 10 minutes</li>
<li>feels like pressure, squeezing, tightness or burning</li>
<li>spreads to your arm, neck, jaw, back or stomach</li>
<li>comes with sweating, nausea, breathlessness, light-headedness or fainting</li>
<li>is sudden, severe and tearing, or comes with coughing up blood or a swollen calf</li>
</ul>
<p><strong>See a doctor the same day</strong> for chest pain that comes and goes with exercise and settles with rest, which can be angina, or for any chest pain you are unsure about. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for a heart check',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'For chest pain now, call 999 or go to an emergency department, not a clinic. For a check-up of your heart risk, such as blood pressure, cholesterol, sugar and an ECG, a GP can help. Our directory lists clinics across Malaysia.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['What is sakit dada in English?', 'Chest pain. Sebelah kiri means the left side, sebelah kanan the right side, and tengah the centre.'],
      ['Is left-sided chest pain always the heart?', 'No. It is often muscular or caused by heartburn or anxiety. But heart attack pain is usually central and can spread to either side, so you can’t tell at home. Call 999 if unsure.'],
      ['Can right-sided chest pain be a heart attack?', 'Yes, it is possible. Heart pain can spread to the right arm, and right-sided pain can also be serious lung problems such as a blood clot. Get urgent help if it is severe or comes with breathlessness.'],
      ['Should I take aspirin for chest pain?', 'Malaysia’s heart attack guideline advises chewing one 300mg aspirin tablet straight away for a suspected heart attack, if you aren’t already taking aspirin and aren’t allergic. Call 999 first.'],
      ['How do I know if chest pain is muscular?', 'Muscular pain usually gets worse when you press on the area, move or breathe deeply, often after exercise or lifting. But only tests can rule out the heart.'],
      ['Can gastric pain feel like chest pain?', 'Yes. Reflux causes burning behind the breastbone, especially after meals. But heart attack pain can also feel like indigestion, so don’t assume.'],
      ['When should I go to hospital for chest pain?', 'Straight away for sudden, severe or lasting chest pain, or chest pain with sweating, breathlessness, nausea or fainting. Call 999 and don’t drive yourself.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical practice guideline: management of acute ST segment elevation myocardial infarction (STEMI), 3rd edition (2014)', 'https://extranet.who.int/ncdccs/Data/MYS_D1_CPG%20Mx%20of%20Acute%20ST%20Segment%20Elevation%20MI%20STEMI%203rd%20Edition.pdf'],
      ['Department of Statistics Malaysia — Statistics on causes of death, Malaysia 2025 (Dec 2025)', 'https://dosm.gov.my/portal-main/release-content/statistics-on-causes-of-death-malaysia-2025'],
      ['Lim et al — Prehospital delay in STEMI patients, Malaysian Journal of Medical Sciences (2019)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6419865/'],
      ['NHS — Chest pain (Aug 2023)', 'https://www.nhs.uk/symptoms/chest-pain/'],
      ['NHS — Heart attack treatment (Mar 2026)', 'https://www.nhs.uk/conditions/heart-attack/treatment/'],
      ['healthdirect Australia — Chest pain (Sep 2025)', 'https://www.healthdirect.gov.au/chest-pain'],
      ['CardioSmart (American College of Cardiology) — 2021 chest pain guideline (Oct 2021)', 'https://www.cardiosmart.org/news/2021/10/2021-chest-pain-guideline'],
      ['American College of Cardiology — Ten points to remember: 2021 chest pain guideline', 'https://acc.org/Latest-in-Cardiology/ten-points-to-remember/2021/10/27/14/06/2021-Guideline-for-Chest-Pain-gl_chestpain'],
      ['healthdirect Australia — Aortic dissection (Dec 2023)', 'https://www.healthdirect.gov.au/aortic-dissection'],
      ['NHS — Pulmonary embolism (Oct 2026)', 'https://www.nhs.uk/conditions/pulmonary-embolism/'],
      ['healthdirect Australia — Pneumothorax (Mar 2025)', 'https://www.healthdirect.gov.au/pneumothorax'],
      ['NHS — Pericarditis (Jul 2023)', 'https://www.nhs.uk/conditions/pericarditis/'],
      ['NHS — Pleurisy (Sep 2026)', 'https://www.nhs.uk/conditions/pleurisy/'],
      ['NHS — Costochondritis (Aug 2026)', 'https://www.nhs.uk/conditions/costochondritis/'],
      ['Cleveland Clinic — Right side chest pain (Jun 2023)', 'https://my.clevelandclinic.org/health/symptoms/25070-right-side-chest-pain'],
      ['HealthyChildren.org (AAP) — Chest pain in children (Oct 2020)', 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Chest-Pain-in-Children.aspx'],
    ],
    related: ['tanda-sakit-jantung-heart-disease-signs-malaysia', 'stroke-heart-attack-kuala-lumpur', 'gerd-acid-reflux-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'klinik-pergigian-kerajaan-malaysia',
    title: 'Klinik pergigian kerajaan: government dental clinics in Malaysia, fees, appointments and services',
    crumb: 'Government dental clinics',
    desc: 'A guide to klinik pergigian kerajaan (government dental clinics): official fees for scaling, fillings and extractions, who is treated free, booking through MySejahtera, and specialist care.',
    excerpt: 'Malaysia has more than 1,700 government oral health facilities, with fees of a few ringgit for most treatments. What scaling, fillings, extractions and dentures cost, who is treated free, how to book through MySejahtera, school dental services and specialist referrals.',
    standfirst: 'Klinik pergigian kerajaan are government dental clinics run by the Ministry of Health. Many sit inside a Klinik Kesihatan. Treatment costs a few ringgit for Malaysians, young children are treated free, and you can book through MySejahtera. Here is what the official fee schedule says, and how to get an appointment.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: false,
    about: ['Klinik pergigian', 'Government dental clinic', 'Oral health'],
    image: 'dentist', imageAlt: 'A dentist examining a patient in a dental chair',
    keyPoints: [
      'The Ministry of Health had 1,737 oral health facilities in 2023, including 595 dental clinics inside health clinics, 911 school dental clinics and 40 mobile dental clinics.',
      'For Malaysian outpatients, the official schedule lists scaling at RM2 a visit, extractions at RM1 a tooth and fillings at RM2 a surface.',
      'Children aged 1 to 6 receive free dental treatment, babies under 1 are exempt from fees, and pregnant mothers referred with the pink antenatal book are treated free.',
      'You can book an appointment through MySejahtera, available at 610 clinics by the end of 2023. Dental emergencies may be seen as walk-ins after assessment.',
      'Root canals, braces, dentures and specialist gum or oral surgery care are available, but some have waiting lists.',
    ],
    sections: [
      { id: 'what', h: 'What government dental services are there?', tocLabel: 'Services', html: `<p>In 2023, the Ministry of Health had <strong>1,737 oral health facilities</strong>:</p>
<ul>
<li>595 dental clinics inside <a href="/articles/klinik-kesihatan-malaysia/">Klinik Kesihatan</a> or maternal and child health clinics</li>
<li>63 standalone dental clinics, and 77 in hospitals</li>
<li>911 school dental clinics</li>
<li>26 in urban and rural transformation centres (UTC and RTC)</li>
<li>40 mobile dental clinics, with teams visiting schools, kindergartens, toddlers and older people</li>
</ul>
<p><strong>Services at primary dental clinics</strong> include check-ups, scaling, fillings, extractions, simple root canal treatment at some clinics, dentures, emergency treatment and an oral cancer check for new adult patients.</p>
<p><strong>School dental service:</strong> pupils from Standard 1 to Form 5 in government and government-aided schools get a yearly dental check, with prevention, scaling, fillings and extractions.</p>
<p><strong>Specialist care:</strong> the ministry had 475 dental specialists in 2023, covering orthodontics (braces), gum disease, oral surgery, children’s dentistry, restorative dentistry and special care dentistry. You are usually referred by a government dental officer.</p>` },
      { id: 'fees', h: 'How much does it cost?', tocLabel: 'Fees', html: `<p>Charges are set by the Fees (Medical) Order. These are the official outpatient charges for Malaysian citizens, from the ministry’s Oral Health Programme schedule:</p>
<div class="table-wrap"><table>
<thead><tr><th>Treatment</th><th>Charge</th></tr></thead>
<tbody>
<tr><td>Scaling and polishing</td><td>RM2 per visit</td></tr>
<tr><td>Extraction</td><td>RM1 per tooth</td></tr>
<tr><td>Filling</td><td>RM2 per surface</td></tr>
<tr><td>Root canal treatment</td><td>RM4 per tooth</td></tr>
<tr><td>Crown</td><td>RM3</td></tr>
<tr><td>Partial denture</td><td>RM10, plus RM2 per tooth</td></tr>
<tr><td>Full denture</td><td>RM50 per jaw</td></tr>
<tr><td>Surgical removal of a tooth</td><td>RM15 (simple) to RM50 (complex impacted tooth)</td></tr>
<tr><td>Fixed braces</td><td>RM500 per arch</td></tr>
<tr><td>Removable orthodontic appliance</td><td>RM100 to RM200</td></tr>
</tbody></table></div>
<p>A general outpatient visit costs RM1. Some websites quote higher figures for fillings, so check the current charges at your clinic.</p>
<p><strong>Who is treated free:</strong></p>
<ul>
<li><strong>Babies under 1:</strong> exempt from visit and treatment fees</li>
<li><strong>Children aged 1 to 6:</strong> free dental treatment, apart from orthodontic appliances. Bring a letter from their nursery or kindergarten to waive the visit fee.</li>
<li><strong>Pregnant mothers:</strong> free registration, and free treatment when referred from antenatal care with the pink book (Buku Rekod Ibu). Dentures and orthodontic appliances aren’t covered, and walk-ins without a referral are charged normally.</li>
<li><strong>Civil servants:</strong> exempt from outpatient treatment charges</li>
</ul>
<p><strong>Non-citizens</strong> pay much higher charges, which vary between facilities. Ask at the clinic before treatment.</p>
${figure('dentist', 'A dentist treating a patient', 'Most routine treatment at government dental clinics costs a few ringgit for Malaysians.')}` },
      { id: 'booking', h: 'How to get an appointment', tocLabel: 'How to book', html: `<ul>
<li><strong>MySejahtera:</strong> dental appointments have been bookable nationwide since 15 May 2023. Open <strong>Appointments</strong>, choose the dental service, then pick a clinic, date and time. By the end of 2023, 610 dental clinics were on the system.</li>
<li><strong>Walk-in:</strong> dental emergencies such as a painful tooth may be seen without an appointment after assessment, but routine care is mainly by appointment.</li>
<li><strong>Bring:</strong> your MyKad, your child’s MyKid or birth certificate, the pink book if you are pregnant, and any referral or exemption letter.</li>
<li><strong>Finding a clinic:</strong> the app shows nearby clinics, and the Oral Health Programme and MyGOV websites list government dental clinics by state.</li>
</ul>
<p>Opening hours vary. Most clinics keep government office hours, so check before you go.</p>` },
      { id: 'waits', h: 'Waiting times and when to go private', tocLabel: 'Waiting times', html: `<p>Government dental care is very affordable, but demand is high. The Malaysian Dental Association and industry groups have raised concerns about long waiting times, and in 2026 about contract dental officers whose contracts ended. Waits are usually longest for specialist care such as braces.</p>
<p><strong>A private dentist may suit you better</strong> if you need treatment quickly, after hours or at weekends, or want cosmetic treatment. Private clinics set their own fees, so ask for a quote first.</p>
<p><strong>Go to a hospital emergency department or call <a href="tel:999">999</a></strong> for facial swelling spreading towards the eye or neck, difficulty swallowing or breathing, a high fever with dental pain, or a serious injury to the face or jaw. See our guide to <a href="/articles/sakit-gigi-toothache-malaysia/">toothache (sakit gigi)</a>.</p>` },
      { id: 'health', h: 'Oral health in Malaysia', tocLabel: 'Oral health', html: `<ul>
<li>Of 2.66 million primary school pupils examined in 2023, 38% were free of tooth decay.</li>
<li>Only about a third of Malaysians aged 60 and over have 20 or more natural teeth, against a national target of half by 2030.</li>
<li>Only 1 in 10 adults used government primary dental care in 2023.</li>
<li>Pregnant mothers are referred for a dental check, but in 2023 only 62.5% received one.</li>
</ul>
<p>A yearly check-up helps catch decay and gum disease early, when treatment is simpler and cheaper. Brush twice a day with fluoride toothpaste and cut down on sugary food and drinks.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic near you',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Our directory lists private GP clinics rather than dental clinics. A GP can help with facial swelling, fever or pain relief while you wait for a dental appointment, and many are open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['How much does a government dental clinic charge?', 'For Malaysian outpatients, the official schedule lists scaling at RM2 a visit, extractions at RM1 a tooth, fillings at RM2 a surface and root canal treatment at RM4 a tooth.'],
      ['How do I book a government dental appointment?', 'Use the MySejahtera app: open Appointments, choose the dental service, then pick a clinic, date and time.'],
      ['Is dental treatment free for children?', 'Yes for young children. Babies under 1 are exempt from fees, and children aged 1 to 6 receive free dental treatment, apart from orthodontic appliances. School pupils have yearly checks through the school dental service.'],
      ['Can I walk in to a government dental clinic?', 'Dental emergencies such as toothache may be seen after assessment. Routine treatment is mainly by appointment.'],
      ['Can I get braces at a government clinic?', 'Yes, through a specialist orthodontic referral. Fixed braces are charged at RM500 per arch, and there are often waiting lists.'],
      ['Are dental check-ups free for pregnant women?', 'Yes, when you are referred from antenatal care with the pink book. Dentures and orthodontic appliances aren’t covered.'],
      ['What is the English for klinik pergigian?', 'Dental clinic. Klinik pergigian kerajaan means a government dental clinic.'],
    ],
    sources: [
      ['Oral Health Programme, Ministry of Health Malaysia — Annual report 2023', 'https://hq.moh.gov.my/ohp/images/pdf/1-penerbitan-utama/annual_rpt/annual_rpt23.pdf'],
      ['Oral Health Programme, Ministry of Health Malaysia — Dental charges', 'https://hq.moh.gov.my/ohp/en/services/dental-charges'],
      ['Oral Health Programme, Ministry of Health Malaysia — Lampiran E: caj pergigian', 'https://hq.moh.gov.my/ohp/images/pdf/charge/LampiranE.pdf'],
      ['Oral Health Programme, Ministry of Health Malaysia — Facilities', 'https://hq.moh.gov.my/ohp/en/services/facility'],
      ['Oral Health Programme, Ministry of Health Malaysia — SOP rawatan asas primer (2024)', 'https://hq.moh.gov.my/ohp/images/pdf/publication/sop-rawatan-asas-primer-24.pdf'],
      ['Portal MyGOV — Kesihatan gigi', 'https://www.malaysia.gov.my/categories/kesihatan/kesihatan-gigi'],
    ],
    related: ['klinik-kesihatan-malaysia', 'sakit-gigi-toothache-malaysia', 'peka-b40-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sakit-pinggang-lower-back-pain-malaysia',
    title: 'Sakit pinggang sebelah kiri atau kanan: lower back and side pain, common causes and red flags',
    crumb: 'Sakit pinggang (lower back pain)',
    desc: 'Sakit pinggang on the left or right side: how to tell muscle pain from kidney pain, one-sided causes such as kidney stones, shingles and the sacroiliac joint, self-care and red flags.',
    excerpt: 'Most lower back pain is a strained muscle that gets better within a few weeks. But pain on one side can also come from the kidneys, gallbladder, pancreas or a gynaecological problem. How to tell them apart, what helps, and the warning signs that need urgent care.',
    standfirst: 'Sakit pinggang means pain around the waist and lower back. Most of the time it is a strained muscle or ligament, and it improves within a few weeks if you keep moving. Pain on one side can sometimes come from a kidney or another organ, so it helps to know the differences and the warning signs.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Low back pain', 'Flank pain', 'Sakit pinggang'],
    image: 'physio-weights', imageAlt: 'A person doing a physiotherapy exercise',
    keyPoints: [
      'Most lower back pain comes from muscles or ligaments, and up to 85% of people recover within 6 weeks. Staying active helps more than bed rest.',
      'Muscle pain usually gets worse when you bend, twist or press on the area. Kidney pain is deeper, higher under the ribs, doesn’t change with movement, and often comes with fever or urine symptoms.',
      'One-sided causes include kidney stones, kidney infection, the sacroiliac joint, shingles before the rash, and in women, period pain and endometriosis.',
      'Paracetamol on its own isn’t recommended for lower back pain. Short courses of anti-inflammatory painkillers can help, but avoid them in suspected dengue.',
      'Get emergency help for numbness around the genitals or bottom, bladder or bowel problems, weakness or numbness in both legs, or sudden severe pain with collapse.',
    ],
    sections: [
      { id: 'muscle', h: 'The most common cause: muscle and ligament strain', tocLabel: 'Muscle strain', html: `<p>Most lower back pain is “non-specific”: it comes from the muscles, ligaments and joints of the back, often after lifting, bending, twisting or sitting for long periods. It is common, and becomes more so with age.</p>
<p><strong>Signs that it is muscular:</strong></p>
<ul>
<li>a dull ache or spasm over the lower back, on one or both sides</li>
<li>worse when you bend, twist, lift, cough, sneeze or press on the area</li>
<li>eases when you rest or change position</li>
</ul>
<p>In Malaysian studies, back pain was especially common among nurses, drivers and office workers. Heavy lifting, long hours of sitting or standing, awkward postures, obesity, smoking and stress all increase the risk.</p>` },
      { id: 'side', h: 'Pain on the left or right side: what could it be?', tocLabel: 'Left or right side', html: `<div class="table-wrap"><table>
<thead><tr><th>Cause</th><th>Where and what it feels like</th><th>Other clues</th></tr></thead>
<tbody>
<tr><td><strong>Muscle strain</strong></td><td>Either side, over the muscles beside the spine</td><td>Worse with movement and pressing</td></tr>
<tr><td><strong><a href="/articles/kidney-stones-batu-karang-malaysia/">Kidney stone</a></strong></td><td>Severe cramping pain in the side or back, coming in waves and spreading to the groin</td><td>Blood in the urine, nausea, restlessness</td></tr>
<tr><td><strong>Kidney infection</strong></td><td>Pain in the side or back, just under the ribs</td><td>Fever, shivering, burning or frequent urine. See our <a href="/articles/uti-urinary-tract-infection-malaysia/">UTI guide</a>.</td></tr>
<tr><td><strong>Sacroiliac joint</strong></td><td>Lower back and buttock, one or both sides, sometimes spreading to the hip or thigh</td><td>Worse with long sitting or standing, or turning</td></tr>
<tr><td><strong>Sciatica</strong></td><td>Back or buttock pain with pain, tingling or numbness down one leg</td><td>See our <a href="/articles/slipped-disc-sciatica-malaysia/">slipped disc guide</a></td></tr>
<tr><td><strong>Shingles (kayap)</strong></td><td>Burning or tingling on one side only</td><td>A blistering rash appears a few days later. See our <a href="/articles/shingles-kayap-malaysia/">shingles guide</a>.</td></tr>
<tr><td><strong>Gallbladder</strong> (right)</td><td>Pain under the right ribs or upper tummy, sometimes to the back or right shoulder</td><td>Often after fatty meals; fever or yellow eyes need urgent care</td></tr>
<tr><td><strong>Pancreatitis</strong> (often left or central)</td><td>Sudden severe upper-tummy pain spreading to the back, eased by leaning forward</td><td>Vomiting. An emergency.</td></tr>
<tr><td><strong>Spleen</strong> (left)</td><td>Pain behind the left lower ribs</td><td>After an injury, can mean a ruptured spleen. An emergency.</td></tr>
</tbody></table></div>
<p><strong>Women:</strong> <a href="/articles/period-pain-senggugut-malaysia/">period pain and endometriosis</a> can cause lower back pain. Pelvic girdle pain affects up to 1 in 5 pregnant women, on one or both sides. Ovarian cysts, pelvic infection and ectopic pregnancy can also refer pain to the back. Sudden severe pelvic pain needs urgent care, and if you could be pregnant, take a <a href="/articles/pregnancy-test-early-signs-malaysia/">pregnancy test</a>.</p>
${figure('physio-weights', 'A person doing a guided exercise', 'Keeping active and doing gentle exercises usually helps lower back pain recover faster than resting in bed.')}` },
      { id: 'kidney', h: 'Is it my kidneys or my back?', tocLabel: 'Kidney or back', html: `<ul>
<li><strong>Kidney pain</strong> is felt higher up, under the ribs on one or both sides of the spine, and can spread to the groin. It is a deep, constant ache or sharp pain in waves. It usually doesn’t change when you move, and often comes with fever, nausea, painful urination or blood in the urine.</li>
<li><strong>Back pain</strong> sits lower, over the spine and the muscles beside it, and changes with movement and position.</li>
</ul>
<p>Long-term kidney disease is usually painless, so pain alone isn’t a good guide to kidney health. If you are worried about your kidneys, a urine test and blood test are what count. See our guide to <a href="/articles/kencing-berbuih-kidney-disease-malaysia/">kidney disease</a>.</p>` },
      { id: 'self-care', h: 'What helps muscular back pain', tocLabel: 'Self-care', html: `<ul>
<li><strong>Keep moving.</strong> Carry on with normal activities as much as you can. If you need to rest, keep it to a day or two, as longer bed rest slows recovery.</li>
<li><strong>Heat or ice:</strong> heat for stiffness or spasm, ice for a recent strain.</li>
<li><strong>Gentle exercise:</strong> walking, swimming, stretching and yoga can help, and so can physiotherapy for pain that lasts.</li>
<li><strong>Painkillers:</strong> UK guidance doesn’t recommend paracetamol on its own for lower back pain. A short course of an anti-inflammatory painkiller such as ibuprofen at the lowest effective dose may help, but it isn’t suitable for everyone, including people with stomach ulcers, kidney disease or heart problems. Avoid anti-inflammatories if you might have dengue. See our <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkiller guide</a>.</li>
<li><strong>Back belts and corsets</strong> aren’t recommended.</li>
<li><strong>Massage (urut)</strong> may give short-term relief. Choose a practitioner registered with the Traditional and Complementary Medicine Council, and avoid forceful manipulation, especially if you have numbness or weakness.</li>
</ul>
<p><strong>Scans</strong> aren’t usually needed for ordinary back pain. Doctors consider an MRI if the pain is disabling or lasts more than 6 weeks, after a serious injury, or if there are nerve problems or signs of infection or cancer.</p>` },
      { id: 'red-flags', h: 'When to get help', tocLabel: 'Red flags', html: `<p><strong>Call <a href="tel:999">999</a> or go to an emergency department for back pain with:</strong></p>
<ul>
<li>numbness around the genitals or bottom</li>
<li>new problems controlling your bladder or bowels</li>
<li>weakness, numbness or tingling in both legs</li>
<li>chest pain</li>
<li>pain after a serious fall or accident</li>
<li>sudden, severe tummy or back pain with pale skin, breathlessness or collapse, especially in older men or smokers, as this can be a burst aortic aneurysm</li>
</ul>
<p><strong>See a doctor urgently for:</strong></p>
<ul>
<li>back or side pain with fever or shivering</li>
<li>severe pain that comes in waves, or blood in the urine</li>
<li>sudden severe pain, or pain in pregnancy</li>
</ul>
<p><strong>See a doctor soon if:</strong> you have unexplained weight loss, a history of cancer, a weak immune system, pain that is worse at night or not eased by rest, or pain that isn’t improving after a few weeks.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for back pain',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine your back, test your urine to rule out a kidney problem, prescribe pain relief and refer you for physiotherapy or a scan if needed. Our directory lists clinics across Malaysia, including those open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-sunday/', 'Clinics open on Sunday']],
    faqs: [
      ['What is sakit pinggang in English?', 'Lower back pain, or pain around the waist. Pain on one side is sometimes called flank pain.'],
      ['What causes sakit pinggang sebelah kiri?', 'Usually a muscle strain. Other causes include a kidney stone or infection, the sacroiliac joint, shingles, and less often the pancreas or spleen. In women, period pain and endometriosis can cause it.'],
      ['What causes sakit pinggang sebelah kanan?', 'Usually a muscle strain. A kidney stone or infection, gallbladder problems and, in women, gynaecological causes are also possible.'],
      ['How do I know if back pain is from my kidneys?', 'Kidney pain is higher, under the ribs, doesn’t change with movement, and often comes with fever, urine symptoms or blood in the urine. Muscle pain changes as you move.'],
      ['Should I rest in bed with back pain?', 'No more than a day or two. Staying active helps you recover faster.'],
      ['When is back pain an emergency?', 'With numbness around the genitals or bottom, bladder or bowel problems, weakness in both legs, chest pain, or sudden severe pain with collapse. Call 999.'],
      ['Is urut good for back pain?', 'Massage may give short-term relief. Use a registered practitioner and avoid forceful manipulation, especially if you have numbness or weakness.'],
    ],
    sources: [
      ['NHS — Back pain (Mar 2026)', 'https://www.nhs.uk/conditions/back-pain/'],
      ['NICE — Low back pain and sciatica in over 16s, NG59 (updated Jul 2026)', 'https://tnaqa.mirrorweb.com/ukgwa/20260505171830mp_/http://www.nice.org.uk/guidance/ng59/chapter/Recommendations'],
      ['MSD Manual Consumer Version — Low back pain (Oct 2026)', 'https://www.msdmanuals.com/home/bone-joint-and-muscle-disorders/low-back-and-neck-pain/low-back-pain'],
      ['MSD Manual Professional Version — Overview of neck and back pain (Oct 2026)', 'https://www.msdmanuals.com/professional/musculoskeletal-and-connective-tissue-disorders/neck-and-back-pain/overview-of-neck-and-back-pain'],
      ['Cleveland Clinic — Kidney pain (Feb 2026)', 'https://my.clevelandclinic.org/health/symptoms/17688-kidney-pain'],
      ['Cleveland Clinic — Flank pain (Feb 2024)', 'https://my.clevelandclinic.org/health/symptoms/21541-flank-pain'],
      ['Cleveland Clinic — Sacroiliitis (Aug 2023)', 'https://my.clevelandclinic.org/health/diseases/17736-sacroiliitis'],
      ['NHS — Kidney infection (Feb 2025)', 'https://www.nhs.uk/conditions/kidney-infection/'],
      ['NHS — Shingles (Nov 2023)', 'https://www.nhs.uk/conditions/shingles/'],
      ['NHS — Gallstones (Aug 2025)', 'https://www.nhs.uk/conditions/gallstones/'],
      ['NHS — Acute pancreatitis (Mar 2026)', 'https://www.nhs.uk/conditions/acute-pancreatitis/'],
      ['nidirect — Spleen problems and spleen removal', 'https://www.nidirect.gov.uk/conditions/spleen-problems-and-spleen-removal'],
      ['NHS — Endometriosis (Aug 2024)', 'https://www.nhs.uk/conditions/endometriosis/'],
      ['NHS — Pelvic pain in pregnancy (Dec 2022)', 'https://www.nhs.uk/pregnancy/related-conditions/common-symptoms/pelvic-pain/'],
      ['NHS — Abdominal aortic aneurysm (Jun 2023)', 'https://www.nhs.uk/conditions/abdominal-aortic-aneurysm/'],
      ['Abas et al — Prevalence of low back pain in Malaysia: a systematic review, Malaysian Journal of Medical Sciences (2023)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10325122/'],
      ['Cochrane — Massage for low back pain (2015)', 'https://www.cochrane.org/ms/CD001929/urut-untuk-sakit-pinggang'],
      ['The Star — Ensuring traditional and complementary medicine is safe and professional (Oct 2024)', 'https://www.thestar.com.my/lifestyle/health/2024/10/09/ensuring-traditional-and-complementary-medicine-is-safe-and-professional'],
    ],
    related: ['slipped-disc-sciatica-malaysia', 'kidney-stones-batu-karang-malaysia', 'kencing-berbuih-kidney-disease-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sakit-tumit-heel-pain-plantar-fasciitis-malaysia',
    title: 'Sakit tumit dan tapak kaki (heel and sole pain): plantar fasciitis, stretches and when it’s a sign of something else',
    crumb: 'Sakit tumit (heel pain)',
    desc: 'Sakit tumit and sakit tapak kaki explained: plantar fasciitis symptoms, stretches and footwear that help, injections and other treatments, the heel spur myth, and when burning soles mean diabetes.',
    excerpt: 'A stabbing pain in the heel with your first steps in the morning is usually plantar fasciitis. Most people get better within a year with stretches, good footwear and patience. What helps, what to avoid, other causes of heel and sole pain, and when foot pain is a sign of diabetes.',
    standfirst: 'Sakit tumit means heel pain, and sakit tapak kaki means pain in the sole of the foot. The most common cause in adults is plantar fasciitis, where the thick band of tissue under the foot becomes strained. It is painful, but about 8 in 10 people recover within a year without surgery. Burning or numb soles are different, and can be a sign of nerve damage from diabetes.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Plantar fasciitis', 'Heel pain', 'Diabetic neuropathy'],
    image: 'morning-walk', imageAlt: 'People walking outdoors in the morning',
    keyPoints: [
      'Plantar fasciitis causes a stabbing pain on the inner heel, worst with the first steps in the morning or after resting. It affects about 1 in 10 people at some point.',
      'It is most common between ages 40 and 60, and in people who are overweight, stand for long hours, have tight calves or wear shoes with poor cushioning.',
      'Stretching the calf and the sole, cushioned shoes with arch support, and ice help most. Off-the-shelf insoles work as well as custom-made ones.',
      'Heel spurs are common in people with no pain, and they don’t cause plantar fasciitis. Steroid injections give short-term relief and carry a risk of tearing the fascia.',
      'Burning, tingling or numb soles can mean nerve damage from diabetes or low vitamin B12. People with diabetes should have their feet checked at least once a year.',
    ],
    sections: [
      { id: 'pf', h: 'Plantar fasciitis: the most common cause of heel pain', tocLabel: 'Plantar fasciitis', html: `<p>The plantar fascia is a thick band of tissue running from the heel to the toes, supporting the arch of the foot. When it is overloaded, it becomes painful. Doctors now sometimes call it plantar fasciopathy, because the tissue is worn rather than truly inflamed.</p>
<p><strong>Typical signs:</strong></p>
<ul>
<li>a stabbing pain on the inner part of the heel</li>
<li>worst with the first steps in the morning, or after sitting for a while</li>
<li>eases after a few minutes of walking, then returns by the end of the day or after activity</li>
<li>hurts to climb stairs or raise your toes</li>
</ul>
<p><strong>Who gets it:</strong> it is most common between the ages of 40 and 60, and in people who:</p>
<ul>
<li>are overweight. See our <a href="/articles/bmi-calculator-malaysia/">BMI calculator</a>.</li>
<li>stand or walk for long hours at work, especially on hard floors</li>
<li>run or dance, or have suddenly increased their activity</li>
<li>have tight calf muscles, flat feet or high arches</li>
<li>wear shoes with poor cushioning, or walk barefoot on hard surfaces</li>
</ul>
<p>About 80% of people improve within 12 months without surgery.</p>` },
      { id: 'treatment', h: 'What helps plantar fasciitis', tocLabel: 'Treatment', html: `<ul>
<li><strong>Stretch:</strong> stretching the calf and the sole of the foot is one of the most effective treatments. A common routine is to hold each stretch for about 10 seconds and repeat it several times a day, especially before your first steps in the morning. For the sole, sit down, cross your foot over your knee and gently pull your toes back towards your shin.</li>
<li><strong>Strengthen:</strong> exercises such as slow heel raises worked better than stretching alone in one trial at 3 months.</li>
<li><strong>Footwear:</strong> wear cushioned shoes with good arch support, at home as well as outside. Off-the-shelf insoles or heel cups worked as well as custom-made ones. Avoid flip-flops, backless slippers, high heels and going barefoot on hard floors.</li>
<li><strong>Ice:</strong> roll your foot over a frozen water bottle for up to 20 minutes, a few times a day.</li>
<li><strong>Rest from painful activity:</strong> swap running for cycling or swimming for a while.</li>
<li><strong>Lose weight</strong> if you are overweight.</li>
<li><strong>Painkillers:</strong> paracetamol, or ibuprofen tablets or gel, for short periods. Don’t take anti-inflammatory painkillers for more than a month without seeing a doctor, and avoid them if you might have dengue. See our <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkiller guide</a>.</li>
<li><strong>Physiotherapy</strong> can help, including taping, which gives short-term relief. Evidence for night splints is mixed.</li>
</ul>
<p><strong>If it isn’t getting better:</strong></p>
<ul>
<li><strong>Steroid injections</strong> give short-term relief at best. Repeated injections carry a risk of the fascia tearing and thinning of the heel’s fat pad.</li>
<li><strong>Shockwave therapy</strong> is an option for long-standing cases, with mixed results.</li>
<li><strong>Surgery</strong> is rarely needed, and is usually only considered after 12 months of other treatment.</li>
<li><strong>Scans</strong> are usually only needed if pain lasts more than 3 months despite treatment.</li>
</ul>
${figure('morning-walk', 'People walking outdoors', 'Supportive shoes, daily stretches and a gradual return to activity help most heel pain settle within a year.')}` },
      { id: 'spur', h: 'What about heel spurs?', tocLabel: 'Heel spurs', html: `<p>A heel spur is a small bony growth on the heel bone that shows up on X-rays. Spurs are common in people who have no heel pain at all, and they stay after the pain has gone. Orthopaedic surgeons say the spur doesn’t cause plantar fasciitis pain, so treatment focuses on the fascia, not the spur.</p>` },
      { id: 'other', h: 'Other causes of heel and sole pain', tocLabel: 'Other causes', html: `<div class="table-wrap"><table>
<thead><tr><th>Cause</th><th>What it feels like</th></tr></thead>
<tbody>
<tr><td><strong>Achilles tendinopathy</strong></td><td>Pain and stiffness at the back of the heel, above the heel bone</td></tr>
<tr><td><strong>Heel fat pad bruising</strong></td><td>Deep bruised pain in the middle of the heel, often after walking on hard ground</td></tr>
<tr><td><strong>Stress fracture</strong></td><td>Pain that builds with activity and hurts when you squeeze the heel, often after a sudden increase in walking or running</td></tr>
<tr><td><strong>Tarsal tunnel syndrome</strong></td><td>Burning, tingling or numbness in the sole, from a trapped nerve</td></tr>
<tr><td><strong>Morton’s neuroma</strong></td><td>Sharp, burning pain near the toes, like standing on a stone</td></tr>
<tr><td><strong>Metatarsalgia</strong></td><td>Pain in the ball of the foot</td></tr>
<tr><td><strong>Sever’s disease</strong></td><td>Heel pain in active children, at the growth plate</td></tr>
</tbody></table></div>
<p>Arthritis can also cause foot pain. Pain at night or deep bone pain should be checked by a doctor.</p>` },
      { id: 'diabetes', h: 'Sakit tapak kaki as a sign of disease: diabetes and nerve damage', tocLabel: 'Diabetes and nerves', html: `<p>Pain in the sole that feels like <strong>burning, pins and needles or numbness</strong>, especially in both feet, is different from plantar fasciitis. It can be a sign of nerve damage (peripheral neuropathy).</p>
<ul>
<li><strong><a href="/articles/normal-blood-sugar-level-malaysia/">Diabetes</a></strong> is the most common cause. In Malaysia, about 1 in 6 adults has diabetes, and about 2 in 5 of them don’t know it.</li>
<li><strong>Low vitamin B12</strong> is another cause, more likely with a vegan diet, long-term metformin or acid-reducing medicines (PPIs).</li>
</ul>
<p>Up to half of people with diabetic nerve damage have no symptoms, so the feet can be injured without pain. Malaysia’s diabetic foot guideline recommends that everyone with diabetes has their feet checked for nerve damage and poor circulation when diagnosed and at least once a year.</p>
<p><strong>If you have diabetes, get help within 24 hours for:</strong> a wound or ulcer, signs of infection, black or dark skin, or a foot that is unexpectedly hot, red or swollen. Wear footwear at all times, indoors and outdoors, if your doctor says your feet are at risk.</p>` },
      { id: 'help', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<p><strong>Get urgent help if:</strong></p>
<ul>
<li>you have severe pain after an injury, or heard a snap or pop</li>
<li>you can’t walk or put weight on the foot</li>
<li>your foot looks misshapen</li>
<li>your foot is hot and swollen, or you feel feverish or shivery</li>
<li>you have diabetes and a wound, infection or colour change in your foot</li>
</ul>
<p><strong>See a doctor if:</strong></p>
<ul>
<li>heel pain hasn’t improved after 2 weeks of self-care</li>
<li>you have tingling, burning or loss of feeling in your feet</li>
<li>you have diabetes and any foot pain</li>
<li>you have pain at night or deep bone pain</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for foot pain',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine your foot, check your blood sugar and feeling in your feet, and refer you for physiotherapy or to a specialist if needed. Our directory lists clinics across Malaysia, including those open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What is sakit tumit in English?', 'Heel pain. The most common cause in adults is plantar fasciitis.'],
      ['Why does my heel hurt in the morning?', 'Pain with your first steps in the morning that eases as you walk is typical of plantar fasciitis, a strain of the band of tissue under the foot.'],
      ['How long does plantar fasciitis last?', 'It often takes months. About 8 in 10 people improve within 12 months without surgery, and most get better with stretches and good footwear.'],
      ['What is the best treatment for plantar fasciitis?', 'Calf and sole stretches, cushioned shoes with arch support or insoles, ice, and reducing painful activity. A doctor or physiotherapist can help if it doesn’t improve.'],
      ['Is a heel spur the cause of my pain?', 'Usually not. Heel spurs are common in people without pain and don’t cause plantar fasciitis.'],
      ['Can burning soles be a sign of diabetes?', 'Yes. Burning, tingling or numb feet can be a sign of nerve damage from diabetes or low vitamin B12. See a doctor for a check.'],
      ['Should I walk barefoot at home?', 'If you have heel pain, try not to walk barefoot on hard floors. Wear supportive footwear or cushioned slippers.'],
    ],
    sources: [
      ['Trojian and Tucker — Plantar fasciitis, American Family Physician (2019)', 'https://www.aafp.org/pubs/afp/issues/2019/0615/p744.html'],
      ['AAOS OrthoInfo — Plantar fasciitis and bone spurs', 'https://www.orthoinfo.org/en/diseases--conditions/plantar-fasciitis-and-bone-spurs/'],
      ['NHS — Plantar fasciitis (Feb 2025)', 'https://www.nhs.uk/conditions/plantar-fasciitis/'],
      ['NHS — Heel pain (Oct 2025)', 'https://www.nhs.uk/symptoms/foot-pain/heel-pain/'],
      ['NHS — Pain in the ball of the foot (Nov 2025)', 'https://www.nhs.uk/symptoms/foot-pain/pain-in-the-ball-of-the-foot/'],
      ['NHS — Pain in the bottom of the foot (Sep 2025)', 'https://www.nhs.uk/symptoms/foot-pain/pain-in-the-bottom-of-the-foot/'],
      ['NHS — Peripheral neuropathy', 'https://www.nhs.uk/conditions/peripheral-neuropathy/symptoms/'],
      ['NHS — Vitamin B12 or folate deficiency anaemia: causes', 'https://www.nhs.uk/conditions/vitamin-b12-or-folate-deficiency-anaemia/causes/'],
      ['Ministry of Health Malaysia — Quick reference: management of diabetic foot, 2nd edition', 'https://mymahtas2.moh.gov.my/files/QR%20Management%20of%20Diabetic%20Foot%20%20(Second%20Edition).pdf'],
      ['Malaysian Family Physician — Synopsis of the diabetic foot clinical practice guideline (2021)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8088751'],
      ['CodeBlue — Over two million adults in Malaysia live with three NCDs: NHMS 2023 (May 2024)', 'https://codeblue.galencentre.org/2024/05/over-two-million-adults-in-malaysia-live-with-three-ncds-nhms-2023/'],
      ['WHO — Dengue and severe dengue (Aug 2025)', 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue'],
    ],
    related: ['trigger-finger-carpal-tunnel-malaysia', 'normal-blood-sugar-level-malaysia', 'slipped-disc-sciatica-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sakit-gigi-toothache-malaysia',
    title: 'Sakit gigi (toothache): causes, how to ease the pain until you see a dentist, and when it’s an emergency',
    crumb: 'Sakit gigi (toothache)',
    desc: 'Sakit gigi means toothache. Common causes, the painkiller combination dentists recommend, safe home remedies and ones to avoid, when antibiotics help, abscess warning signs and a knocked-out tooth.',
    excerpt: 'Toothache usually means a tooth needs treatment, and painkillers only buy time. What causes it, the painkillers that work best, why you shouldn’t put aspirin on your gum, when antibiotics do and don’t help, and the swelling that needs emergency care.',
    standfirst: 'Sakit gigi is the Malay word for toothache. It is usually caused by tooth decay, a cracked tooth, gum disease or an infection, and it won’t go away for good until a dentist treats the cause. Until then, the right painkillers and a few simple steps can help. Facial swelling that spreads, or difficulty swallowing or breathing, is an emergency.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Toothache', 'Dental abscess', 'Sakit gigi'],
    image: 'dentist', imageAlt: 'A dentist examining a patient’s teeth',
    keyPoints: [
      'Common causes are tooth decay, an abscess, a cracked tooth or loose filling, gum disease, an infected wisdom tooth, sensitive teeth and grinding.',
      'Dental guidelines recommend an anti-inflammatory painkiller such as ibuprofen, alone or with paracetamol, as the first choice for toothache. But avoid ibuprofen if you might have dengue.',
      'Don’t put aspirin on your gum: it burns the gum and gives little relief. Clove oil is unproven for toothache and dangerous if swallowed by children.',
      'Antibiotics don’t cure toothache. An abscess needs the tooth treated or drained, and antibiotics are used only for spreading infection or fever.',
      'Go to an emergency department for facial swelling spreading to the eye or neck, difficulty swallowing, speaking or breathing, or a high fever.',
    ],
    sections: [
      { id: 'causes', h: 'What causes toothache?', tocLabel: 'Causes', html: `<ul>
<li><strong>Tooth decay</strong> reaching the nerve. In Malaysia, a 2020 national survey found tooth decay in 85% of people aged 15 and over.</li>
<li><strong>A dental abscess:</strong> a pocket of pus from an infected tooth or gum, causing intense throbbing pain, a bad taste, swelling and sometimes fever</li>
<li><strong>A cracked tooth or loose filling</strong></li>
<li><strong>Gum disease</strong>, which affected 38% of Malaysian adults in the 2020 survey</li>
<li><strong>A wisdom tooth</strong> that has only partly come through and become infected (pericoronitis)</li>
<li><strong>Sensitive teeth</strong>, with short sharp pain from hot, cold or sweet food</li>
<li><strong>Grinding or clenching</strong>, which can cause jaw pain and worn or broken teeth</li>
<li><strong>Sinusitis</strong>, which can cause pain that feels like toothache. See our <a href="/articles/allergies-resdung-antihistamines-malaysia/">resdung and sinus guide</a>.</li>
</ul>
<p>Jaw pain together with chest pain can be a heart attack. Call <a href="tel:999">999</a>. See our guide to <a href="/articles/sakit-dada-chest-pain-malaysia/">chest pain</a>.</p>` },
      { id: 'relief', h: 'How to ease toothache until you see a dentist', tocLabel: 'Pain relief', html: `<p><strong>Painkillers:</strong> the American Dental Association’s 2024 guideline recommends an anti-inflammatory painkiller (NSAID) such as ibuprofen, alone or with paracetamol, as the first choice for toothache in adults and teenagers. Studies after wisdom tooth removal found ibuprofen combined with paracetamol worked better than opioid painkillers, with fewer side effects.</p>
<ul>
<li><strong>Ibuprofen</strong> (adults): usually 200 to 400mg up to 3 times a day with food, at least 4 hours apart. It isn’t suitable for everyone, including people with stomach ulcers, some types of asthma, heart, liver or kidney disease, or in pregnancy.</li>
<li><strong>Paracetamol</strong> (adults): 500mg to 1g, at least 4 hours apart, no more than 4g in 24 hours. Many cold remedies also contain paracetamol.</li>
<li><strong>Dengue:</strong> if you have a fever and could have dengue, use paracetamol only and avoid ibuprofen and aspirin.</li>
</ul>
<p>See our <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkiller guide</a>.</p>
<p><strong>Other things that help:</strong></p>
<ul>
<li>rinse with warm salt water (half a teaspoon of salt in a glass of water), but not for young children</li>
<li>eat soft food and chew on the other side</li>
<li>avoid very hot, very cold or sweet food and drink</li>
<li>use a soft toothbrush, and don’t smoke</li>
<li>a pharmacist can suggest a pain-relief mouth gel</li>
</ul>
<p><strong>Avoid:</strong></p>
<ul>
<li><strong>Putting aspirin on the gum.</strong> It dissolves into an acid that burns the gum and gives little or no pain relief.</li>
<li><strong>Relying on clove oil.</strong> There is no good evidence for toothache, and swallowing it can poison young children.</li>
<li><strong>Numbing gels with benzocaine for babies’ teething.</strong> The US FDA warns they can cause a dangerous blood condition.</li>
</ul>
${figure('dentist', 'A dentist examining a patient', 'Painkillers buy time, but most toothache only stops when a dentist treats the cause.')}` },
      { id: 'antibiotics', h: 'Do I need antibiotics?', tocLabel: 'Antibiotics', html: `<p>Usually not. Dental guidelines advise <strong>against</strong> antibiotics for an inflamed tooth nerve, or for an abscess that hasn’t spread, when dental treatment is available. Antibiotics don’t fix the tooth, and the pain returns.</p>
<p>A dental abscess won’t go away on its own. The dentist treats it by draining it, with a root canal treatment or by removing the tooth. Antibiotics are added if the infection is spreading, or if you have a fever or feel unwell.</p>` },
      { id: 'emergency', h: 'Abscess and emergency signs', tocLabel: 'Emergency signs', html: `<p><strong>See a dentist urgently</strong> for intense pain with swelling of the face or jaw, a bad taste, swollen glands in the neck, a fever or difficulty opening your mouth.</p>
<p><strong>Go to an emergency department or call <a href="tel:999">999</a></strong> if you have:</p>
<ul>
<li>difficulty breathing, speaking or swallowing</li>
<li>drooling, or a swollen or raised tongue</li>
<li>swelling around the eye or down the neck, or problems with your vision</li>
<li>a high fever with facial swelling</li>
</ul>
<p>These can be signs of a spreading infection under the tongue and in the neck (Ludwig’s angina), which can block the airway. Don’t drive yourself.</p>
<p><strong>A knocked-out adult tooth:</strong> hold it by the crown, not the root. If it is dirty, rinse it briefly in milk, salt water or saliva, then push it back into the socket and bite on a clean cloth. If you can’t, keep it in milk or in your mouth against your cheek, and see a dentist straight away. Never put a baby tooth back in.</p>` },
      { id: 'children', h: 'Toothache and teething in children', tocLabel: 'Children', html: `<ul>
<li><strong>Teething babies:</strong> a chilled (not frozen) teething ring and gentle gum massage can help. Sugar-free paracetamol can be given from 2 months and ibuprofen from 3 months, at the dose on the pack.</li>
<li><strong>Tooth decay in young children</strong> is very common in Malaysia. In a national survey, 71% of 5-year-olds had decay, most of it untreated.</li>
<li>Children aged 1 to 6 receive free dental treatment at government dental clinics. See our guide to <a href="/articles/klinik-pergigian-kerajaan-malaysia/">government dental clinics</a>.</li>
<li>Brush your child’s teeth twice a day with fluoride toothpaste: a smear for under-3s and a pea-sized amount for ages 3 to 6, with supervision.</li>
</ul>` },
      { id: 'prevention', h: 'Preventing toothache', tocLabel: 'Prevention', html: `<ul>
<li>Brush twice a day for 2 minutes with fluoride toothpaste. Spit out, don’t rinse.</li>
<li>Clean between your teeth with floss or interdental brushes.</li>
<li>Cut down on sugary food and drinks, especially between meals.</li>
<li>Have a dental check-up regularly, even if nothing hurts.</li>
<li>Avoid smoking, betel quid and alcohol, the main risks for <strong>oral cancer</strong>. More than 60% of oral cancers in Malaysia are found late. See a dentist or doctor for any mouth sore that hasn’t healed within 2 to 3 weeks. See our guide to <a href="/articles/mouth-ulcers-cold-sores-malaysia/">mouth ulcers</a>.</li>
</ul>
<p><strong>Water fluoridation</strong> helps protect teeth. About three-quarters of Malaysians had fluoridated water in 2018, but coverage is low in some states, such as Sabah.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find help for toothache',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'For toothache, see a dentist. Our directory lists GP clinics rather than dentists, but a GP can help with pain relief, fever or facial swelling when you can’t reach a dentist, and many are open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What is the best ubat sakit gigi?', 'Dental guidelines recommend ibuprofen, alone or with paracetamol, as the first choice for adults. Avoid ibuprofen if you might have dengue, and see a dentist to treat the cause.'],
      ['How can I stop toothache at night?', 'Take an appropriate painkiller, rinse with warm salt water, and avoid very hot, cold or sweet food. Painkillers only help for a while, so book a dentist.'],
      ['Can I put aspirin on my tooth?', 'No. Aspirin placed on the gum burns it and gives little or no relief. Swallow painkillers as directed instead.'],
      ['Will antibiotics cure my toothache?', 'No. Antibiotics don’t fix the tooth. They are only used when an infection is spreading or you have a fever, along with dental treatment.'],
      ['When is toothache an emergency?', 'When there is swelling spreading to the eye or neck, difficulty swallowing, speaking or breathing, or a high fever. Go to an emergency department.'],
      ['Does clove oil work for toothache?', 'There is no good evidence that it works for toothache, and swallowing it can be dangerous for young children.'],
      ['What should I do with a knocked-out tooth?', 'For an adult tooth, hold it by the crown, rinse it in milk if dirty, put it back and bite on a cloth, or keep it in milk, and see a dentist straight away. Never put a baby tooth back.'],
    ],
    sources: [
      ['NHS — Toothache (Jul 2024)', 'https://www.nhs.uk/conditions/toothache/'],
      ['NHS — Dental abscess (Mar 2026)', 'https://www.nhs.uk/conditions/dental-abscess/'],
      ['ADA News — New ADA guideline recommends NSAIDs to manage dental pain (Feb 2024)', 'https://adanews.ada.org/ada-news/2024/february/new-ada-guideline-recommends-nsaids-to-manage-dental-pain-in-adults-adolescents/'],
      ['American Dental Association — Oral analgesics for acute dental pain (Feb 2024)', 'https://www.ada.org/resources/ada-library/oral-health-topics/oral-analgesics-for-acute-dental-pain'],
      ['US CDC — Dentists: be antibiotics aware (ADA 2019 guideline summary)', 'https://www.cdc.gov/antibiotic-use/pdfs/ada-treatment-guidelines-508.pdf'],
      ['NHS — Ibuprofen for adults (Aug 2025)', 'https://www.nhs.uk/medicines/ibuprofen-for-adults/'],
      ['NHS — How and when to take paracetamol for adults (Mar 2026)', 'https://www.nhs.uk/medicines/paracetamol-for-adults/how-and-when-to-take-paracetamol-for-adults/'],
      ['US CDC — Clinical care of dengue (Apr 2026)', 'https://www.cdc.gov/dengue/hcp/clinical-care/'],
      ['The Pharmaceutical Journal — Oral ulceration: causes and management (2019)', 'https://www.pharmaceutical-journal.com/cpd-and-learning/learning-article/oral-ulceration-causes-and-management/20205786.article'],
      ['US FDA — Safely soothing teething pain in infants and children (Jun 2024)', 'https://www.fda.gov/consumers/consumer-updates/safely-soothing-teething-pain-infants-and-children'],
      ['NHS — Tips for helping your teething baby (Oct 2025)', 'https://www.nhs.uk/baby/babys-development/teething/tips-for-helping-your-teething-baby/'],
      ['UF Health — Ludwig angina (Jan 2025)', 'https://ufhealth.org/conditions-and-treatments/ludwig-angina'],
      ['NHS — Knocked-out tooth (Feb 2025)', 'https://www.nhs.uk/conditions/knocked-out-tooth/'],
      ['NHS — Teeth grinding (Apr 2026)', 'https://www.nhs.uk/conditions/teeth-grinding/'],
      ['Ministry of Health Malaysia — National Oral Health Survey of Adults (NOHSA) 2020 fact sheet', 'https://hq.moh.gov.my/ohp/images/pdf/4-penyelidikan-kesihatan-pergigian/fact-sheet-nohsa-2020.pdf'],
      ['Ministry of Health Malaysia — Guidelines on oral healthcare for preschool children (2019)', 'https://hq.moh.gov.my/ohp/images/pdf/3-klinikal/pra-preschool/guidelines_oral_healthcare_for_preschool_children_2019.pdf'],
      ['Abdul Karim et al — Water fluoridation and oral health in Malaysia, JUMMEC (2020)', 'https://jummec.um.edu.my/article/view/22362'],
      ['Ministry of Health Malaysia — Primary prevention and early detection of oral cancer guidelines (2025)', 'https://hq.moh.gov.my/ohp/images/pdf/publication/gp_primary_malignant_disorders_and_oral_cancers2025.pdf'],
      ['NHS — How to keep your teeth clean (Jun 2025)', 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/how-to-keep-your-teeth-clean/'],
    ],
    related: ['klinik-pergigian-kerajaan-malaysia', 'mouth-ulcers-cold-sores-malaysia', 'painkillers-paracetamol-ibuprofen-malaysia'],
  },
];
