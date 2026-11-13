// Articles published 8 November 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-08';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NOV_2026_G = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'bartholin-cyst-ovarian-cyst-fibroids-malaysia',
    title: 'Bartholin cyst, ovarian cysts and fibroids: symptoms, treatment and when to worry',
    crumb: 'Bartholin cyst, ovarian cysts and fibroids',
    desc: 'Bartholin cyst, ovarian cysts and fibroids explained: what causes each lump, home care, drainage and surgery, ovarian cancer warning signs, and when sudden pain is an emergency.',
    excerpt: 'A lump near the vaginal opening, a cyst found on a scan, or fibroids causing heavy periods: most are harmless and treatable. What Bartholin cysts, ovarian cysts and fibroids are, how they are treated, and the signs that need a doctor straight away.',
    standfirst: 'Lumps and cysts are common in women and are usually harmless. A Bartholin cyst is a swelling at the entrance to the vagina. Ovarian cysts are fluid-filled sacs on the ovaries, and most disappear on their own. Fibroids are non-cancerous growths in the womb. Here is how to tell them apart, what treatment involves, and when to get help quickly.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Bartholin cyst', 'Ovarian cyst', 'Uterine fibroids'],
    image: 'nurse-stethoscope', imageAlt: 'A nurse with a stethoscope in a clinic',
    keyPoints: [
      'About 2 in 100 women get a Bartholin cyst. It is usually a painless lump on one side of the vaginal opening. If it becomes infected (an abscess), it gets very painful, red and swollen.',
      'Warm baths can help a small cyst drain. An abscess needs a doctor, who may drain it or fit a small catheter. Women over 40 with a new vulval lump should have it checked for cancer.',
      'Most ovarian cysts are “functional” cysts linked to the menstrual cycle and disappear within a few months. Larger, persistent or post-menopausal cysts need monitoring.',
      'Sudden, severe pelvic pain with vomiting, dizziness or fainting can mean a twisted or burst cyst. Go to an emergency department.',
      'Fibroids affect up to 8 in 10 women by age 50. Many cause no symptoms. Treatment depends on symptoms such as heavy periods, and fibroids almost never become cancer.',
    ],
    sections: [
      { id: 'bartholin', h: 'Bartholin cyst', tocLabel: 'Bartholin cyst', html: `<p>The two Bartholin glands are pea-sized glands on either side of the vaginal opening that produce lubricating fluid. If a gland’s opening becomes blocked, fluid builds up and forms a <strong>cyst</strong>, usually on one side. It is most common between the ages of 20 and 50.</p>
<ul>
<li><strong>Cyst:</strong> a soft, usually painless lump near the vaginal opening, from pea to golf-ball size. It may be uncomfortable when walking, sitting or having sex.</li>
<li><strong>Abscess:</strong> if the cyst becomes infected, it becomes very painful, red, hot and swollen, sometimes with fever or pus. It is usually caused by common skin or gut bacteria, and only occasionally by an STI such as gonorrhoea or chlamydia. See our guide to <a href="/articles/syphilis-sti-testing-malaysia/">STI testing</a>.</li>
</ul>
<p><strong>Home care:</strong> sit in a few inches of warm water (a sitz bath) several times a day for 3 to 4 days, or use a warm compress. This may help a small cyst drain. Take paracetamol or ibuprofen for pain. <strong>Don’t squeeze or try to burst it.</strong></p>
<p><strong>Treatment by a doctor:</strong></p>
<ul>
<li><strong>Antibiotics</strong>, if the cyst is infected or there is an STI</li>
<li><strong>Catheter drainage:</strong> after a small cut under local anaesthetic, a tiny balloon catheter is left in for about 4 weeks so a new opening forms</li>
<li><strong>Marsupialisation:</strong> a minor operation that creates a permanent opening, often used for cysts that keep coming back</li>
</ul>
<p>Cysts can come back after any treatment, about 1 in 10 after marsupialisation and more often after simple drainage. <strong>If you are over 40</strong>, a new vulval lump should be checked, and a small sample (biopsy) may be taken, as Bartholin gland cancer, although rare, needs ruling out.</p>` },
      { id: 'ovarian', h: 'Ovarian cysts (cyst ovari)', tocLabel: 'Ovarian cysts', html: `<p>Ovarian cysts are fluid-filled sacs on or in an ovary. They are very common and usually harmless.</p>
<ul>
<li><strong>Functional cysts</strong> are the most common and are linked to the menstrual cycle: a follicle that doesn’t release its egg, or the sac left after ovulation filling with fluid. They usually disappear within a few weeks to 3 months.</li>
<li><strong>Other types</strong> include dermoid cysts (which can contain hair or skin tissue), endometriomas or “chocolate cysts” caused by endometriosis (see our guide to <a href="/articles/period-pain-senggugut-malaysia/">period pain and endometriosis</a>), and cystadenomas.</li>
<li><strong>PCOS is different:</strong> the “cysts” are many small follicles, not true cysts. See our <a href="/articles/pcos-malaysia/">PCOS (PMOS) guide</a>.</li>
</ul>
<p><strong>Symptoms:</strong> often none. Cysts are frequently found by chance on a scan. Some cause pelvic pain, bloating, pain during sex, needing to pass urine often, period changes or feeling full quickly.</p>
<p><strong>Monitoring and treatment:</strong> a cyst is usually checked with an <strong>ultrasound</strong>, often repeated a few weeks or months later to see if it has gone. UK guidance suggests small simple cysts under 5 cm in women who still have periods usually need no follow-up. Larger, persistent or complex cysts may need an MRI, blood tests or <strong>keyhole surgery</strong> to remove them. <strong>After the menopause</strong>, any cyst should be checked more carefully, with repeat scans and blood tests.</p>
${figure('doctor-tablet', 'A doctor in a white coat reading notes on a tablet', 'Most ovarian cysts are found on an ultrasound and simply rechecked to see if they have gone.')}` },
      { id: 'emergency', h: 'When pelvic pain is an emergency', tocLabel: 'Emergency signs', html: `<p><strong>Go to an emergency department or call <a href="tel:999">999</a> for:</strong></p>
<ul>
<li><strong>sudden, severe pain</strong> in the lower tummy or pelvis, especially on one side, with vomiting, dizziness or fainting. An ovarian cyst may have twisted the ovary (torsion) or burst.</li>
<li>pelvic pain with fever, fast breathing or cold, clammy skin</li>
<li>very heavy vaginal bleeding</li>
<li>severe pain or fainting if you could be pregnant, which may be an ectopic pregnancy. See our guide to <a href="/articles/pregnancy-test-early-signs-malaysia/">early pregnancy warning signs</a>.</li>
</ul>
<p><strong>See a doctor soon</strong> for a Bartholin lump that becomes painful, red or swollen over hours or days, or comes with fever or pus.</p>` },
      { id: 'cancer', h: 'Ovarian cancer warning signs', tocLabel: 'Ovarian cancer', html: `<p>Most ovarian cysts aren’t cancer. But ovarian cancer is the <strong>fifth most common cancer in Malaysian women</strong>, and there is no screening test for it. Malaysian gynaecologists report that about three-quarters of cases are found at an advanced stage.</p>
<p><strong>See a doctor</strong> if you have any of these on most days, roughly 12 or more times a month:</p>
<ul>
<li>persistent bloating, or a swollen tummy</li>
<li>pain in the tummy or pelvis</li>
<li>feeling full quickly, or loss of appetite</li>
<li>needing to pass urine more urgently or often</li>
</ul>
<p>These symptoms are usually caused by something less serious, but they are worth checking, especially if they are new. Regular <a href="/articles/pap-smear-hpv-test-malaysia/">Pap smears and HPV tests</a> check the cervix, not the ovaries.</p>` },
      { id: 'fibroids', h: 'Fibroids', tocLabel: 'Fibroids', html: `<p>Fibroids are non-cancerous growths of muscle in or on the womb. They are very common, affecting between 2 and 8 in 10 women by age 50, and are more common in women of Asian or African background, with obesity or with a family history.</p>
<p><strong>Symptoms:</strong> many women have none. Others have:</p>
<ul>
<li>heavy or painful periods, which can lead to <a href="/articles/anaemia-iron-deficiency-malaysia/">iron-deficiency anaemia</a></li>
<li>pressure or a swollen tummy</li>
<li>needing to pass urine often, or constipation</li>
<li>pain during sex</li>
<li>less often, difficulty getting pregnant or miscarriage</li>
</ul>
<p><strong>Treatment</strong> depends on your symptoms, the size and position of the fibroids, and whether you want children:</p>
<ul>
<li><strong>No treatment</strong> if they cause no problems. Fibroids usually shrink after the menopause.</li>
<li><strong>Medicines:</strong> tranexamic acid and anti-inflammatory painkillers for heavy periods, hormonal contraception or a hormonal coil (see our <a href="/articles/contraception-malaysia/">contraception guide</a>), or injections that shrink fibroids temporarily.</li>
<li><strong>Procedures and surgery:</strong> removing the fibroids while keeping the womb (myomectomy), blocking their blood supply (uterine artery embolisation), or removing the womb (hysterectomy). Some private hospitals in Malaysia also offer focused ultrasound (HIFU) for selected patients.</li>
</ul>
<p>Fibroids don’t turn into cancer. A rare cancer of the womb muscle, leiomyosarcoma, affects fewer than 1 in 1,000 women thought to have fibroids.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine a Bartholin lump, treat an infection, arrange a pelvic ultrasound and refer you to a gynaecologist. Many clinics can arrange for a female doctor if you ask. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is a Bartholin cyst?', 'A fluid-filled swelling of one of the Bartholin glands, which sit either side of the vaginal opening. It is usually painless unless it becomes infected.'],
      ['Will a Bartholin cyst go away on its own?', 'Small cysts often do, and warm baths can help them drain. A painful or infected cyst (abscess) needs a doctor.'],
      ['Is a Bartholin cyst an STI?', 'Usually not. Most infections are caused by common bacteria, although an STI is occasionally involved, so testing may be offered.'],
      ['Are ovarian cysts dangerous?', 'Most are harmless and disappear within a few months. Sudden severe pain with vomiting or fainting needs emergency care, as a cyst may have twisted or burst.'],
      ['Do ovarian cysts need surgery?', 'Only some do, such as large, persistent or unusual cysts. Most are simply rechecked with an ultrasound.'],
      ['What are the symptoms of fibroids?', 'Heavy or painful periods, pressure in the tummy, needing to pass urine often and pain during sex. Many women have no symptoms.'],
      ['Can fibroids turn into cancer?', 'No. Fibroids aren’t cancer and don’t turn into it. A rare cancer of the womb muscle can look similar, but it is very uncommon.'],
      ['What are the warning signs of ovarian cancer?', 'Persistent bloating, pelvic or tummy pain, feeling full quickly and needing to pass urine more often, on most days. See a doctor if these are new.'],
    ],
    sources: [
      ['NHS — Bartholin’s cyst (Apr 2025)', 'https://www.nhs.uk/conditions/bartholins-cyst/'],
      ['American Family Physician — Bartholin duct cyst and gland abscess: office management (Jun 2019)', 'https://www.aafp.org/pubs/afp/issues/2019/0615/p760.html'],
      ['Cleveland Clinic — Bartholin cyst (May 2024)', 'https://my.clevelandclinic.org/health/diseases/17737-bartholin-cyst'],
      ['Sunway Medical Centre Velocity — Lumps in the vulva: a sign of Bartholin’s cyst (Mar 2023)', 'https://www.sunwaymedicalvelocity.com.my/en/blogs/health-lumps-in-vulva-a-sign-of-bartholins-cyst'],
      ['NHS — Ovarian cyst (Jun 2023)', 'https://www.nhs.uk/conditions/ovarian-cyst/'],
      ['Cleveland Clinic — Ovarian cysts (Aug 2026)', 'https://my.clevelandclinic.org/health/diseases/9133-ovarian-cysts'],
      ['Royal College of Obstetricians and Gynaecologists — Ovarian cysts before the menopause', 'https://www.rcog.org.uk/for-the-public/browse-our-patient-information/ovarian-cysts-before-the-menopause/'],
      ['NHS — Ovarian cancer symptoms (Nov 2025)', 'https://www.nhs.uk/conditions/ovarian-cancer/symptoms/'],
      ['New Straits Times — More than 79,000 new cancer cases detected in Malaysia over 2 years (Oct 2025)', 'https://www.nst.com.my/amp/news/nation/2025/10/1293688/more-79000-new-cancer-cases-detected-malaysia-over-2-years'],
      ['New Straits Times — Majority of ovarian cancer cases in Malaysia detected at stage 3 or above (Jun 2022)', 'https://www.nst.com.my/amp/news/nation/2022/06/806894/majority-ovarian-cancer-cases-malaysia-detected-stage-3-or-above'],
      ['NHS — Fibroids (Mar 2026)', 'https://www.nhs.uk/conditions/fibroids/'],
      ['US Office on Women’s Health — Uterine fibroids (Feb 2025)', 'https://www.womenshealth.gov/a-z-topics/uterine-fibroids'],
    ],
    related: ['period-pain-senggugut-malaysia', 'pcos-malaysia', 'pap-smear-hpv-test-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'trigger-finger-carpal-tunnel-malaysia',
    title: 'Trigger finger, carpal tunnel and other hand pain: symptoms, treatment and when to see a doctor',
    crumb: 'Trigger finger and carpal tunnel',
    desc: 'Trigger finger, carpal tunnel syndrome and De Quervain’s: clicking or locking fingers, numb hands at night, splints, steroid injections and surgery, and the diabetes link.',
    excerpt: 'A finger that clicks or locks, or a hand that goes numb at night, are common problems, especially in women over 40 and people with diabetes. What trigger finger, carpal tunnel syndrome and De Quervain’s are, what helps, when surgery is worth it, and when numbness is an emergency.',
    standfirst: 'Trigger finger and carpal tunnel syndrome are two of the most common hand problems. Trigger finger makes a finger catch or lock when you bend it. Carpal tunnel syndrome squeezes a nerve at the wrist, causing numbness and tingling, often at night. Both are more common in people with diabetes, and both usually respond well to treatment.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Trigger finger', 'Carpal tunnel syndrome', 'De Quervain’s tenosynovitis'],
    image: 'caring-hands', imageAlt: 'A younger person holding an older woman’s hands',
    keyPoints: [
      'Trigger finger causes a finger or thumb to catch, click or lock when bent, often worse in the morning, with a tender lump at the base of the finger.',
      'Carpal tunnel syndrome causes numbness, tingling and pain in the thumb, index, middle and ring fingers, often waking you at night.',
      'Both are more common in women aged 40 to 60, in pregnancy and in people with diabetes. Diabetes about doubles the risk of trigger finger.',
      'Splints, rest and steroid injections help many people. A short operation under local anaesthetic usually cures both conditions if other treatment fails.',
      'Sudden numbness or weakness in one arm, with a drooping face or slurred speech, could be a stroke. Call 999.',
    ],
    sections: [
      { id: 'trigger', h: 'Trigger finger', tocLabel: 'Trigger finger', html: `<p>Each finger is bent by a tendon that slides through a tunnel of tough bands at the base of the finger. In <strong>trigger finger</strong>, the tendon or a small lump on it catches on the first band, so the finger gets stuck when you bend it, then clicks or pops straight.</p>
<p><strong>Symptoms:</strong></p>
<ul>
<li>clicking, catching or locking of a finger or thumb</li>
<li>a finger stuck bent that you have to straighten with your other hand</li>
<li>pain and a tender lump on the palm, at the base of the finger</li>
<li>symptoms that are often worse first thing in the morning</li>
</ul>
<p><strong>Who gets it:</strong> it is more common in women aged 40 to 60, and in people with <strong>diabetes</strong> or rheumatoid arthritis. In a large Swedish study, diabetes doubled the risk. Babies and young children can have a different form, “trigger thumb”, which should be seen by a doctor.</p>
<p><strong>Treatment:</strong></p>
<ul>
<li><strong>Rest and splinting:</strong> avoiding activities that cause pain, and a splint that keeps the finger straight, often at night.</li>
<li><strong>Steroid injection</strong> into the tendon sheath works for about 7 in 10 people, though it can take days to weeks. A second injection sometimes helps. It works less well in people with diabetes, and can raise blood sugar for 10 to 14 days in those on insulin, so check your levels.</li>
<li><strong>Surgery</strong> (trigger finger release): a short day-case operation under local anaesthetic to widen the tight band. You can use the hand lightly the same day. The wound heals in a few weeks, though stiffness can take a few months to settle. The problem rarely comes back. A needle release is an alternative some surgeons offer.</li>
</ul>` },
      { id: 'carpal', h: 'Carpal tunnel syndrome (kebas tangan)', tocLabel: 'Carpal tunnel', html: `<p>The median nerve passes through a narrow tunnel in the wrist. In <strong>carpal tunnel syndrome</strong>, it gets squeezed.</p>
<p><strong>Symptoms:</strong></p>
<ul>
<li>numbness, tingling or pins and needles in the <strong>thumb, index, middle and ring fingers</strong>, but not usually the little finger</li>
<li>pain or aching in the hand or wrist</li>
<li>symptoms that are <strong>worse at night</strong> and may wake you, often eased by shaking the hand</li>
<li>a weak grip, clumsiness or dropping things, and in severe cases wasting of the muscle at the base of the thumb</li>
</ul>
<p><strong>Risk factors:</strong> pregnancy, being overweight, diabetes, an underactive thyroid, rheumatoid arthritis, repetitive gripping or wrist bending, and using vibrating tools. In a Malaysian hospital study of patients having surgery, 8 in 10 were women, the average age was 53, and nearly a third had diabetes. See our guide to <a href="/articles/thyroid-hyperthyroidism-hypothyroidism-malaysia/">thyroid problems</a>.</p>
<p><strong>Diagnosis</strong> is usually made by examination. A <strong>nerve conduction test</strong> may be done if the diagnosis is unclear or surgery is being considered.</p>
<p><strong>Treatment:</strong></p>
<ul>
<li><strong>Wrist splint at night</strong> to keep the wrist straight. It can take up to 6 weeks to help.</li>
<li><strong>Steroid injection</strong> can relieve symptoms, though often for a limited time.</li>
<li><strong>Surgery</strong> (carpal tunnel release): about 20 minutes under local anaesthetic, usually without an overnight stay. Night symptoms often ease within a week, most people return to normal activities in about a month, and grip strength returns over 2 to 3 months. Surgery is recommended sooner for constant numbness or muscle wasting, to prevent permanent nerve damage.</li>
<li><strong>In pregnancy</strong>, it often settles within months of the birth.</li>
</ul>
${figure('glucometer', 'A blood glucose meter and test strips on a table', 'Diabetes makes trigger finger and carpal tunnel syndrome more likely, so a blood sugar check is worthwhile.')}` },
      { id: 'dequervain', h: 'De Quervain’s tenosynovitis (thumb and wrist pain)', tocLabel: 'De Quervain’s', html: `<p>De Quervain’s causes pain on the <strong>thumb side of the wrist</strong>, worse when gripping, lifting or twisting, from inflamed tendons. It is common in women in their 40s and 50s, and in <strong>new mothers</strong>, often starting a month or two after the birth, partly from lifting the baby.</p>
<p>A doctor may test it by asking you to tuck your thumb into your fist and bend your wrist towards the little finger, which causes pain. Treatment includes a thumb splint, ice, anti-inflammatory painkillers and a steroid injection. Surgery is an option if it doesn’t improve.</p>` },
      { id: 'numbness', h: 'Other causes of hand numbness', tocLabel: 'Other causes', html: `<ul>
<li><strong>A trapped nerve in the neck</strong>, causing neck pain running down the arm with tingling or weakness. See our guide to <a href="/articles/slipped-disc-sciatica-malaysia/">slipped discs</a>.</li>
<li><strong>The ulnar nerve at the elbow</strong>, causing numbness in the ring and little fingers, worse with the elbow bent. See a doctor if it lasts more than 6 weeks, as muscle weakness can become permanent.</li>
<li><strong>Diabetes</strong>, which can damage nerves in the hands and feet.</li>
<li><strong>Low vitamin B12</strong>. See our guide to <a href="/articles/anaemia-iron-deficiency-malaysia/">anaemia</a>.</li>
</ul>
<p><strong>Call <a href="tel:999">999</a> straight away</strong> for sudden numbness or weakness in an arm or leg, especially on one side, with a drooping face, slurred speech, loss of balance or vision changes, even if it passes. These are signs of a stroke. See our guide to <a href="/articles/stroke-heart-attack-kuala-lumpur/">stroke and heart attack</a>.</p>` },
      { id: 'diabetes', h: 'Check your blood sugar', tocLabel: 'Diabetes link', html: `<p>Hand problems such as trigger finger, carpal tunnel syndrome and <a href="/articles/frozen-shoulder-pain-malaysia/">frozen shoulder</a> are all more common with diabetes. In Malaysia, 15.6% of adults have diabetes, and 2 in 5 of them don’t know it. If you develop any of these, ask for a blood sugar test. See our guide to <a href="/articles/normal-blood-sugar-level-malaysia/">normal blood sugar levels</a>.</p>` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<ul>
<li>a finger that keeps locking, or that you can’t straighten</li>
<li>numbness or tingling that keeps coming back, wakes you at night, or doesn’t improve with a splint</li>
<li>weakness, clumsiness or muscle wasting in your hand</li>
<li>a hot, swollen, red finger or hand, which could be an infection</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get your hand checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine your hand, check your blood sugar, give a steroid injection in some cases, and refer you to an orthopaedic or hand surgeon or for a nerve test. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open on Saturdays.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What causes trigger finger?', 'A tendon or a small lump on it catches on a tight band at the base of the finger. It is more common in women aged 40 to 60 and in people with diabetes or rheumatoid arthritis.'],
      ['Can trigger finger go away on its own?', 'Sometimes, especially with rest and a splint. Many people need a steroid injection, and some need a short operation.'],
      ['How effective is a steroid injection for trigger finger?', 'It works for about 7 in 10 people, but less well in people with diabetes. A second injection is sometimes given.'],
      ['What are the symptoms of carpal tunnel syndrome?', 'Numbness, tingling and pain in the thumb, index, middle and ring fingers, often worse at night, sometimes with a weak grip.'],
      ['Why do my hands go numb at night?', 'Carpal tunnel syndrome is a common cause, as the wrist often bends during sleep. A night splint can help.'],
      ['How long does it take to recover from carpal tunnel surgery?', 'Most people return to normal activities in about a month, and grip strength returns over 2 to 3 months.'],
      ['What is De Quervain’s?', 'Painful, inflamed tendons on the thumb side of the wrist, common in new mothers and in women in their 40s and 50s.'],
      ['When is hand numbness an emergency?', 'When it is sudden and comes with weakness, a drooping face, slurred speech or loss of balance, which may be a stroke. Call 999.'],
    ],
    sources: [
      ['NHS — Trigger finger (Nov 2025)', 'https://www.nhs.uk/conditions/trigger-finger/'],
      ['American Academy of Orthopaedic Surgeons — Trigger finger', 'https://www.orthoinfo.org/en/diseases--conditions/trigger-finger/'],
      ['British Society for Surgery of the Hand — Trigger finger and thumb', 'https://www.bssh.ac.uk/patients/conditions/18/trigger_fingerthumb'],
      ['Löfgren et al. — Diabetes and trigger finger (Frontiers in Clinical Diabetes and Healthcare, 2021)', 'https://www.frontiersin.org/articles/10.3389/fcdhc.2021.708721/full'],
      ['Cochrane — Corticosteroid injection for trigger finger in adults (2022)', 'https://www.cochrane.org/evidence/CD005617_local-corticosteroid-injection-trigger-finger'],
      ['NHS — Carpal tunnel syndrome (Apr 2024)', 'https://www.nhs.uk/conditions/carpal-tunnel-syndrome/'],
      ['American Academy of Orthopaedic Surgeons — Carpal tunnel syndrome', 'https://www.orthoinfo.org/en/diseases--conditions/carpal-tunnel-syndrome/'],
      ['Malaysian Orthopaedic Journal — Demographics of patients undergoing carpal tunnel release in Malaysia (2019)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6915316/'],
      ['Bernama — Watch out for carpal tunnel syndrome (Jan 2026)', 'https://www.bernama.com/tv/news.php?id=2508849'],
      ['American Academy of Orthopaedic Surgeons — De Quervain’s tendinosis', 'https://www.orthoinfo.org/en/diseases--conditions/de-quervains-tendinosis/'],
      ['American Academy of Orthopaedic Surgeons — Ulnar nerve entrapment at the elbow', 'https://www.orthoinfo.org/diseases--conditions/ulnar-nerve-entrapment-at-the-elbow'],
      ['CodeBlue — NHMS 2023: over two million adults live with three NCDs (May 2024)', 'https://codeblue.galencentre.org/2024/05/over-two-million-adults-in-malaysia-live-with-three-ncds-nhms-2023/'],
    ],
    related: ['sakit-tumit-heel-pain-plantar-fasciitis-malaysia', 'frozen-shoulder-pain-malaysia', 'slipped-disc-sciatica-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'gestational-diabetes-bsp-malaysia',
    title: 'Gestational diabetes and the BSP chart: the glucose test, normal blood sugar in pregnancy, and what to do',
    crumb: 'Gestational diabetes and BSP',
    desc: 'Gestational diabetes in Malaysia: who is tested, the MGTT/OGTT glucose test and its cut-offs, BSP (blood sugar profile) targets in pregnancy, diet, medicines and checks after birth.',
    excerpt: 'More than 1 in 4 Malaysian mothers in a 2022 survey reported being told they had diabetes in pregnancy. Who needs the glucose tolerance test, what the results mean, the BSP blood sugar targets, how it is managed with diet, metformin or insulin, and why a check after birth matters.',
    standfirst: 'Gestational diabetes (GDM, or kencing manis semasa mengandung) is high blood sugar that first appears in pregnancy and usually goes away after the birth. It rarely causes symptoms, so it is found by testing. Controlling blood sugar lowers the risks for mother and baby. In Malaysia you will hear about the MGTT (glucose test) and the BSP (blood sugar profile). Here is what they mean.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Gestational diabetes', 'Oral glucose tolerance test', 'Diabetes in pregnancy'],
    image: 'glucometer', imageAlt: 'A blood glucose meter and test strips used for a fingerprick sugar test',
    keyPoints: [
      'In the National Health and Morbidity Survey, the share of Malaysian mothers who said they had been told they had diabetes in pregnancy rose from 12.5% in 2016 to 27.1% in 2022.',
      'Under Ministry of Health guidelines, women with risk factors have a 75 g glucose test (OGTT/MGTT) at booking and again at 24 to 28 weeks. Women aged 25 or over without other risk factors are tested at 24 to 28 weeks.',
      'GDM is diagnosed in Malaysia if fasting glucose is 5.1 mmol/L or more, or the 2-hour result is 7.8 mmol/L or more.',
      'BSP (blood sugar profile) targets: before meals 5.3 or lower, 1 hour after meals 7.8 or lower, 2 hours after meals 6.7 or lower.',
      'About half of women with GDM later develop type 2 diabetes, so have a glucose test about 6 weeks after the birth, then yearly checks.',
    ],
    sections: [
      { id: 'what', h: 'What is gestational diabetes?', tocLabel: 'What it is', html: `<p>During pregnancy, hormones from the placenta make the body less responsive to insulin. Most women make enough extra insulin to cope. In gestational diabetes, the body can’t keep up, and blood sugar rises. It usually develops in the second half of pregnancy and goes away after delivery.</p>
<p>It usually causes <strong>no symptoms</strong>, which is why testing matters. A few women notice more thirst, passing more urine or tiredness, which are also common in normal pregnancy.</p>
<p><strong>In Malaysia,</strong> it is becoming much more common. The share of mothers in the National Health and Morbidity Survey who said they had been told they had diabetes in pregnancy more than doubled between 2016 and 2022, to 27.1%. The risk was higher with older age, overweight, obesity and high blood pressure.</p>` },
      { id: 'risk', h: 'Who should be tested?', tocLabel: 'Who is tested', html: `<p>The Ministry of Health’s guideline on diabetes in pregnancy lists these risk factors:</p>
<ul>
<li><strong>BMI over 27</strong> (see our <a href="/articles/bmi-calculator-malaysia/">BMI calculator</a>)</li>
<li>gestational diabetes in a previous pregnancy</li>
<li>a parent, brother or sister with diabetes</li>
<li>a previous baby weighing more than 4 kg</li>
<li>a previous unexplained stillbirth, baby with birth defects, or difficult birth with the baby’s shoulder stuck</li>
<li>sugar in the urine on two occasions</li>
<li>high blood pressure, too much fluid around the baby, or taking steroid medicines</li>
</ul>
<p><strong>Timing:</strong></p>
<ul>
<li><strong>With a risk factor:</strong> a glucose tolerance test at your first antenatal visit (booking), repeated at 24 to 28 weeks if normal.</li>
<li><strong>Aged 25 or over with no other risk factor:</strong> a test at 24 to 28 weeks.</li>
</ul>
<p>The guideline notes that testing every pregnant woman is ideal where resources allow. HbA1c and random blood sugar tests aren’t used to diagnose gestational diabetes. See our guide to <a href="/articles/pregnancy-test-early-signs-malaysia/">early pregnancy and booking</a>.</p>` },
      { id: 'ogtt', h: 'The glucose test (OGTT / MGTT)', tocLabel: 'The glucose test', html: `<p>In Malaysian clinics, the 75 g oral glucose tolerance test is often called the <strong>MGTT</strong> or MOGTT (modified glucose tolerance test).</p>
<ol>
<li>Fast overnight for at least 8 hours. Plain water is usually allowed.</li>
<li>A blood sample is taken (fasting glucose).</li>
<li>You drink a sweet drink containing 75 g of glucose, within a few minutes.</li>
<li>Rest quietly for 2 hours. Don’t eat, and avoid walking around.</li>
<li>A second blood sample is taken at 2 hours.</li>
</ol>
<div class="table-wrap"><table>
<thead><tr><th>Result (mmol/L)</th><th>Normal</th><th>Gestational diabetes</th></tr></thead>
<tbody>
<tr><td>Fasting</td><td>Below 5.1</td><td>5.1 or more</td></tr>
<tr><td>2 hours after the drink</td><td>Below 7.8</td><td>7.8 or more</td></tr>
</tbody></table></div>
<p>Either result being high is enough for a diagnosis. Much higher results, such as fasting 7.0 or more, may mean diabetes that was already there before pregnancy, and need a repeat test. Malaysia uses a lower 2-hour cut-off than some international criteria. For normal blood sugar outside pregnancy, see our guide to <a href="/articles/normal-blood-sugar-level-malaysia/">blood sugar levels</a>.</p>` },
      { id: 'bsp', h: 'The BSP (blood sugar profile) and targets', tocLabel: 'BSP targets', html: `<p>After diagnosis, your blood sugar is checked several times a day to see how well it is controlled. A <strong>BSP (blood sugar profile)</strong> is a set of these checks, traditionally done at the clinic or in hospital. The guideline prefers <strong>home monitoring</strong> with a fingerprick meter, as it better reflects everyday levels. Where that isn’t possible, a clinic BSP is done about every 2 weeks until delivery.</p>
<div class="table-wrap"><table>
<thead><tr><th>When</th><th>Target (mmol/L)</th></tr></thead>
<tbody>
<tr><td>Fasting and before meals</td><td>5.3 or lower</td></tr>
<tr><td>1 hour after starting a meal</td><td>7.8 or lower</td></tr>
<tr><td>2 hours after starting a meal</td><td>6.7 or lower</td></tr>
</tbody></table></div>
<ul>
<li>Your clinic will tell you whether to test 1 or 2 hours after meals, and how often. If you are on diet alone or one type of medicine, it is usually at least once a day until you reach your targets.</li>
<li>If you take insulin or metformin, keep your readings above 4.0, and learn the signs of low blood sugar: shaking, sweating, hunger or confusion.</li>
<li>Write down every reading, with the time and what you ate, and bring the record, along with your <a href="/articles/pregnancy-test-early-signs-malaysia/">pink book</a>, to every check-up.</li>
</ul>` },
      { id: 'manage', h: 'Managing gestational diabetes', tocLabel: 'Management', html: `<p><strong>Diet</strong> is the first step. The Malaysian guideline recommends a carbohydrate-controlled meal plan, with at least 175 g of carbohydrate a day spread across meals, and low-GI choices:</p>
<ul>
<li>Keep rice, noodles and bread to measured portions. The guideline’s sample menu uses 2 ladles of rice at lunch and dinner.</li>
<li>Choose wholegrains and plenty of vegetables, and include protein with each meal.</li>
<li>Sugar counts towards your carbohydrates. Choose plain water instead of sweetened drinks.</li>
<li>Have smaller, regular meals and snacks rather than large ones.</li>
<li>A dietitian can tailor a plan to the foods you eat.</li>
</ul>
${figure('healthy-salad', 'A table of salad, fruit and vegetables in small bowls', 'Smaller portions of rice and noodles, with more vegetables and protein, help keep blood sugar in range.')}
<p><strong>Activity:</strong> 20 to 30 minutes of moderate exercise on most days, such as brisk walking, swimming or pregnancy yoga, unless your doctor advises otherwise.</p>
<p><strong>Medicines:</strong> if targets aren’t reached within 1 to 2 weeks of diet and exercise, a doctor may start <strong>metformin</strong> tablets, and <strong>insulin</strong> if needed. Insulin is started straight away if fasting sugar is very high. Both are safe in pregnancy, and insulin can usually be started without a hospital stay.</p>
<p><strong>Delivery:</strong> women controlled by diet alone without complications are usually advised to deliver by 40 weeks, and those on medicines between 37 and 39 weeks. Your obstetrician will plan this with you.</p>` },
      { id: 'risks', h: 'Why control matters', tocLabel: 'Risks', html: `<p>Uncontrolled gestational diabetes can lead to:</p>
<ul>
<li>a <strong>large baby</strong>, making birth more difficult, including the baby’s shoulder getting stuck</li>
<li>more need for induction or caesarean birth</li>
<li><strong>pre-eclampsia</strong> (high blood pressure in pregnancy)</li>
<li>premature birth and too much fluid around the baby</li>
<li><strong>low blood sugar and jaundice</strong> in the baby after birth</li>
<li>rarely, stillbirth</li>
</ul>
<p>Treatment works: the Malaysian guideline notes that treating gestational diabetes lowers the risk of pre-eclampsia, shoulder problems at birth and large babies.</p>` },
      { id: 'after', h: 'After the birth', tocLabel: 'After birth', html: `<ul>
<li>Most women can stop insulin or tablets as soon as the baby is born.</li>
<li>Have a <strong>glucose tolerance test about 6 weeks after delivery</strong>, then a check every year. About half of women with gestational diabetes go on to develop type 2 diabetes.</li>
<li><strong>Breastfeeding</strong> for at least 3 months is linked to a lower risk of later diabetes.</li>
<li>Keep active and aim for a healthy weight.</li>
<li>In a future pregnancy, you will have a glucose test early, at booking. Tell your doctor before trying to conceive.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get tested and checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Antenatal clinics at Klinik Kesihatan and private clinics carry out glucose tolerance tests and BSP monitoring. A GP can also check your blood sugar after the birth. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What is a normal BSP in pregnancy?', 'Malaysian targets are 5.3 mmol/L or lower before meals, 7.8 or lower 1 hour after a meal, and 6.7 or lower 2 hours after a meal.'],
      ['What does BSP mean?', 'Blood sugar profile: a series of blood sugar checks through the day, before and after meals, to monitor diabetes in pregnancy.'],
      ['What is the MGTT test?', 'The 75 g oral glucose tolerance test: a fasting blood test, a sugary drink, then another blood test 2 hours later.'],
      ['What result means gestational diabetes?', 'In Malaysia, a fasting glucose of 5.1 mmol/L or more, or a 2-hour result of 7.8 mmol/L or more.'],
      ['When is the glucose test done in pregnancy?', 'At booking if you have risk factors, and at 24 to 28 weeks. Women aged 25 or over without other risk factors are tested at 24 to 28 weeks.'],
      ['Will gestational diabetes harm my baby?', 'Well-controlled gestational diabetes usually leads to a healthy baby. Poor control raises the risk of a large baby, birth complications and low blood sugar after birth.'],
      ['Does gestational diabetes go away after birth?', 'Usually, yes, but about half of women later develop type 2 diabetes, so have a glucose test about 6 weeks after delivery and yearly checks.'],
      ['Can I eat rice with gestational diabetes?', 'Yes, in measured portions as part of a carbohydrate-controlled plan, with plenty of vegetables and protein. A dietitian can help.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Clinical practice guidelines: management of diabetes in pregnancy (2017)', 'https://mymahtas2.moh.gov.my/files/CPG%20Management%20of%20Diabetes%20in%20Pregnancy%20(1).pdf'],
      ['Malaysian Family Physician — Management of diabetes in pregnancy in primary care (2019)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7067506'],
      ['BMC Public Health — Prevalence and factors associated with gestational diabetes in Malaysia, 2016 and 2022 (Oct 2024)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11451086/'],
      ['IIUM Repository — Interpretation of the modified glucose tolerance test among pregnant Malaysian women (2020)', 'https://irep.iium.edu.my/82336/'],
      ['European Journal of Clinical Nutrition — Gestational diabetes in Southeast Asian countries (2021)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8416657/'],
      ['NHS — Gestational diabetes', 'https://www.nhs.uk/conditions/gestational-diabetes/'],
      ['US CDC — Gestational diabetes (May 2024)', 'https://www.cdc.gov/diabetes/about/gestational-diabetes.html'],
    ],
    related: ['maternity-paternity-leave-cuti-bersalin-malaysia', 'normal-blood-sugar-level-malaysia', 'pregnancy-test-early-signs-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'rotavirus-vaccine-malaysia',
    title: 'Rotavirus in babies and children: symptoms, dehydration warning signs, and the rotavirus vaccine',
    crumb: 'Rotavirus and the vaccine',
    desc: 'Rotavirus: severe vomiting and diarrhoea in babies and young children, dehydration signs, oral rehydration, and the rotavirus vaccine, which isn’t in Malaysia’s free programme.',
    excerpt: 'Rotavirus is the leading cause of severe, dehydrating diarrhoea in young children, and is estimated to put about 31,000 Malaysian children in hospital each year. The symptoms, how to keep your child hydrated, the danger signs, and the oral vaccine, which parents in Malaysia currently get privately.',
    standfirst: 'Rotavirus is a highly contagious virus that causes vomiting and watery diarrhoea in babies and young children. Most recover at home within a week, but it can quickly cause dehydration. An oral vaccine given in the first months of life prevents most severe cases. It isn’t yet part of Malaysia’s free National Immunisation Programme, so parents get it at private clinics and hospitals.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Rotavirus', 'Rotavirus vaccine', 'Gastroenteritis'],
    image: 'paediatrician', imageAlt: 'A doctor listening to a baby’s chest with a stethoscope',
    keyPoints: [
      'Rotavirus is the leading cause of severe, dehydrating diarrhoea in children under 5. It is most severe between about 6 months and 2 years.',
      'Symptoms are vomiting, frequent watery diarrhoea, fever and tummy pain, usually lasting 3 to 8 days.',
      'The main danger is dehydration. Keep breastfeeding or formula feeding, and give oral rehydration solution in small, frequent sips.',
      'The vaccine is given as drops by mouth in 2 or 3 doses, starting at about 2 months. The first dose must be given before 15 weeks and all doses before 8 months.',
      'It isn’t in Malaysia’s National Immunisation Programme. Ask your clinic early, as the age limits are strict.',
    ],
    sections: [
      { id: 'what', h: 'What is rotavirus?', tocLabel: 'What it is', html: `<p>Rotavirus infects the gut and causes gastroenteritis (a stomach bug). The World Health Organization calls it the leading cause of severe, dehydrating diarrhoea in children under 5 worldwide.</p>
<ul>
<li><strong>It spreads very easily</strong>, through tiny amounts of stool on hands, toys, surfaces and food. Children can pass it on before they have symptoms and for days after they recover, and the virus survives well on surfaces.</li>
<li><strong>Who gets it:</strong> almost all children catch it at least once by age 5. The most severe illness is in unvaccinated children aged about 3 months to 3 years, and Malaysian health officials have said those aged 6 months to 2 years are most vulnerable.</li>
</ul>
<p><strong>In Malaysia,</strong> a 2016 study estimated that rotavirus causes about 31,000 hospital admissions, 41,000 outpatient visits and 27 deaths each year in children under 5. In hospitals in Kuala Lumpur and Kuala Terengganu, 38% of tested stool samples from young children admitted with gastroenteritis were positive for rotavirus, and the costs were a heavy burden for many families.</p>` },
      { id: 'symptoms', h: 'Symptoms', tocLabel: 'Symptoms', html: `<p>Symptoms usually start about 2 days after exposure:</p>
<ul>
<li>sudden <strong>vomiting</strong>, often first</li>
<li>frequent, <strong>watery diarrhoea</strong></li>
<li>fever</li>
<li>tummy pain and loss of appetite</li>
</ul>
<p>Vomiting and diarrhoea usually last <strong>3 to 8 days</strong>. Other viruses and bacteria cause similar illness. See our guide to <a href="/articles/food-poisoning-gastroenteritis-malaysia/">food poisoning and gastroenteritis</a>.</p>` },
      { id: 'care', h: 'Caring for your child at home', tocLabel: 'Home care', html: `<ul>
<li><strong>Keep breastfeeding</strong>, or keep giving formula made up at its usual strength, in smaller, more frequent feeds.</li>
<li>Give <strong>oral rehydration solution (ORS)</strong> from a pharmacy, mixed exactly as the pack says, in small sips every few minutes, especially after each vomit or loose stool. A spoon or syringe can help.</li>
<li>Avoid fruit juice and fizzy drinks, which can make diarrhoea worse.</li>
<li>Offer food once your child wants to eat.</li>
<li><strong>Don’t give anti-diarrhoea medicine</strong> to children. Paracetamol can help with fever and discomfort. See our guide to <a href="/articles/fever-in-children-malaysia/">fever in children</a>.</li>
</ul>` },
      { id: 'dehydration', h: 'Dehydration warning signs', tocLabel: 'Dehydration signs', html: `<p><strong>See a doctor urgently if your child:</strong></p>
<ul>
<li>has <strong>fewer wet nappies</strong> or passes little urine</li>
<li>has a dry mouth, cries with few or no tears, or has sunken eyes</li>
<li>in babies, has a <strong>sunken soft spot</strong> (fontanelle) on the head</li>
<li>is drowsy, irritable, or drinking poorly</li>
<li>can’t keep fluids down, or has been vomiting for more than 2 days</li>
<li>has blood in the stool, or green vomit</li>
<li>is a young baby, especially under 6 months</li>
</ul>
<p><strong>Go to an emergency department</strong> if your child is very drowsy or hard to wake, is breathing fast, or has pale, blotchy, blue or cold skin. These are signs of severe dehydration. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>
${figure('mother-child', 'A mother and daughter sitting together', 'Keep feeding and give small, frequent sips of oral rehydration solution to prevent dehydration.')}` },
      { id: 'vaccine', h: 'The rotavirus vaccine', tocLabel: 'The vaccine', html: `<p>The rotavirus vaccine is given as <strong>drops into the mouth</strong>, not an injection. There are two types:</p>
<ul>
<li>a <strong>2-dose</strong> vaccine, usually at about 2 and 4 months</li>
<li>a <strong>3-dose</strong> vaccine, usually at about 2, 4 and 6 months</li>
</ul>
<p><strong>Timing is strict:</strong> the first dose should be given before 15 weeks of age, and all doses by 8 months. If your baby misses these windows, they can’t start the course later, so plan ahead with your clinic.</p>
<p><strong>How well it works:</strong> the vaccine prevents about 9 in 10 cases of severe rotavirus illness in countries like the US, with somewhat lower protection in some lower-income settings. It doesn’t prevent every bout of diarrhoea, but makes severe illness and hospital stays much less likely.</p>
<p><strong>Safety:</strong> it is very safe. Mild fussiness or loose stools can follow. There is a very small risk of <strong>intussusception</strong>, where part of the bowel folds into itself, estimated at about 1 in 20,000 to 1 in 100,000 babies, mostly in the week after a dose. The World Health Organization says the benefits far outweigh this risk. <strong>See a doctor urgently</strong> if, after a dose, your baby has bouts of severe crying, pulls their legs up to the chest, vomits repeatedly or has blood in the stool.</p>
<p>The vaccine virus is passed in the stool for a few weeks afterwards, so wash your hands well after nappy changes.</p>` },
      { id: 'malaysia', h: 'The rotavirus vaccine in Malaysia', tocLabel: 'In Malaysia', html: `<ul>
<li>The rotavirus vaccine is <strong>not part of Malaysia’s National Immunisation Programme</strong>, so it isn’t given free at Klinik Kesihatan. Parents usually get it at private clinics and hospitals.</li>
<li>Malaysian paediatricians have long called for it to be added to the national programme, and a university workshop in August 2026 highlighted the gap.</li>
<li>Ask your clinic about it at your baby’s 2-month check, alongside the routine vaccines. See our <a href="/articles/baby-vaccination-schedule-malaysia/">baby vaccination schedule</a>.</li>
</ul>` },
      { id: 'prevention', h: 'Stopping it spreading', tocLabel: 'Prevention', html: `<ul>
<li>Wash hands well with <strong>soap and water</strong> after nappy changes and toilet use, and before preparing food.</li>
<li>Clean toys, changing areas and toilet surfaces often.</li>
<li>Keep children home from nursery or school until <strong>2 days after</strong> the diarrhoea and vomiting have stopped.</li>
<li>Don’t share towels, cups or utensils during the illness.</li>
</ul>
<p>Handwashing helps, but because rotavirus spreads so easily, vaccination is the best protection.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get the vaccine or see a doctor',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Many private GP and children’s clinics offer the rotavirus vaccine, and can check a child with vomiting and diarrhoea for dehydration. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open 24 hours. Call ahead to check the vaccine is in stock.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What are the symptoms of rotavirus?', 'Sudden vomiting, frequent watery diarrhoea, fever and tummy pain, usually lasting 3 to 8 days.'],
      ['How long is rotavirus contagious?', 'From before symptoms start until a few days after recovery. Keep children home until 2 days after the diarrhoea and vomiting stop.'],
      ['How do I treat rotavirus at home?', 'Keep breastfeeding or formula feeding, give oral rehydration solution in small, frequent sips, and watch for dehydration. Don’t give anti-diarrhoea medicine to children.'],
      ['When should I take my child to hospital?', 'If they are very drowsy, have far fewer wet nappies, can’t keep fluids down, have sunken eyes or a sunken soft spot, blood in the stool, or cold, pale or blotchy skin.'],
      ['Is the rotavirus vaccine free in Malaysia?', 'No. It isn’t part of the National Immunisation Programme, so it is available at private clinics and hospitals.'],
      ['When should my baby get the rotavirus vaccine?', 'Usually at 2 and 4 months, or 2, 4 and 6 months depending on the vaccine. The first dose must be before 15 weeks and all doses by 8 months.'],
      ['Is the rotavirus vaccine safe?', 'Yes. There is a very small risk of intussusception, a bowel problem, mostly in the week after a dose. Experts agree the benefits far outweigh this.'],
      ['Can my child get rotavirus more than once?', 'Yes, but later infections are usually milder, and vaccination makes severe illness much less likely.'],
    ],
    sources: [
      ['US CDC — About rotavirus (Apr 2024)', 'https://www.cdc.gov/rotavirus/about/index.html'],
      ['US CDC — Rotavirus vaccine (Jul 2024)', 'https://www.cdc.gov/rotavirus/vaccines/index.html'],
      ['World Health Organization — Rotavirus vaccine standardisation', 'https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards/vaccine-standardization/rotavirus'],
      ['World Health Organization — Diarrhoeal disease fact sheet (Mar 2024)', 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease'],
      ['World Health Organization — Rotavirus vaccines and intussusception', 'https://www.who.int/groups/global-advisory-committee-on-vaccine-safety/topics/rotavirus-vaccines/intussusception'],
      ['NHS — Rotavirus vaccine', 'https://www.nhs.uk/vaccinations/rotavirus-vaccine/'],
      ['NHS — Dehydration (May 2026)', 'https://www.nhs.uk/conditions/dehydration/'],
      ['Loganathan et al. — Hidden burden of rotavirus gastroenteritis in Malaysia (Pediatr Infect Dis J, 2016)', 'https://researchonline.lshtm.ac.uk/id/eprint/2536020'],
      ['Loganathan et al. — Household costs of rotavirus gastroenteritis in Malaysia (PLOS ONE, 2015)', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0125878'],
      ['University of Nottingham Malaysia — Regional experts tackle rotavirus vaccine gaps in Malaysia (Aug 2026)', 'https://www.nottingham.edu.my/NewsEvents/News/2026/UNM-Hosts-Regional-Experts-to-Tackle-Rotavirus-Vaccine-Gaps-in-Malaysia.aspx'],
      ['New Straits Times — Rotavirus: govt urged to protect kids with vaccine (Feb 2017)', 'https://www.nst.com.my/amp/news/nation/2017/02/211628/rotavirus-govt-urged-protect-kids-vaccine'],
      ['UK Health Security Agency — Exclusion periods in children’s settings (Sep 2026)', 'https://www.gov.uk/government/publications/health-protection-in-schools-and-other-childcare-facilities/public-health-exclusion-periods-in-children-and-young-peoples-settings'],
    ],
    related: ['diarrhoea-cirit-birit-malaysia', 'baby-vaccination-schedule-malaysia', 'food-poisoning-gastroenteritis-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'urti-common-cold-selsema-malaysia',
    title: 'URTI and the common cold (selsema): symptoms, what helps, antibiotics, and when to see a doctor',
    crumb: 'URTI and the common cold',
    desc: 'URTI (upper respiratory tract infection) and the common cold (selsema): symptoms, how long they last, remedies with evidence, why antibiotics don’t help, and warning signs.',
    excerpt: 'URTI is one of the most common reasons Malaysians see a GP. Almost all are viral colds that clear in 1 to 2 weeks. What URTI means, the remedies that actually help, why antibiotics don’t, how to treat children safely, and the signs that need a doctor.',
    standfirst: 'URTI (upper respiratory tract infection) is the medical name for infections of the nose, sinuses and throat, most often the common cold (selsema). It is one of the most common diagnoses in Malaysian clinics, and it is almost always caused by viruses. That means antibiotics don’t help, yet about half of URTI patients in a national study were given them. Here is what does help.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Upper respiratory tract infection', 'Common cold', 'Selsema'],
    image: 'gp-consultation', imageAlt: 'A doctor talking with a patient across a desk in a consultation room',
    keyPoints: [
      'URTI covers colds, sore throats, sinusitis and laryngitis. More than 200 viruses cause colds, most often rhinovirus.',
      'Cold symptoms build over 2 to 3 days and usually clear within 1 to 2 weeks. A cough can last 3 to 4 weeks.',
      'Rest, fluids, paracetamol or ibuprofen, saline nose drops and honey for coughs (not under 1 year) help. Zinc and vitamin C have only small or uncertain effects.',
      'Antibiotics don’t help colds and cause side effects in about 1 in 10 people. In a national study of Malaysian clinics, 46% of URTI patients were still given them.',
      'See a doctor for breathing difficulty, fever lasting more than 3 days, symptoms that get better then worse, or a baby under 3 months with a temperature of 38°C or more.',
    ],
    sections: [
      { id: 'what', h: 'What is URTI?', tocLabel: 'What it is', html: `<p>Doctors write <strong>URTI</strong> on MCs and notes to mean an infection of the upper airways: the nose, sinuses, throat and voice box. It includes:</p>
<ul>
<li>the <strong>common cold</strong> (<em>selsema</em>)</li>
<li>sore throat and <a href="/articles/tonsillitis-sore-throat-malaysia/">tonsillitis</a></li>
<li><a href="/articles/allergies-resdung-antihistamines-malaysia/">sinusitis</a></li>
<li>laryngitis (a hoarse or lost voice)</li>
</ul>
<p>More than 200 viruses cause colds, most often <strong>rhinovirus</strong>, as well as common coronaviruses, adenovirus and others. In a 2014 national survey of Malaysian primary care clinics, URTI was the most common diagnosis among patients given antibiotics, accounting for about half of all antibiotic prescriptions.</p>` },
      { id: 'symptoms', h: 'Symptoms and how long they last', tocLabel: 'Symptoms', html: `<ul>
<li>a blocked or runny nose (<em>hidung tersumbat</em>), sneezing</li>
<li>sore or scratchy throat</li>
<li>cough</li>
<li>mild fever, aches and tiredness, especially in children</li>
<li>hoarse voice, and pressure in the ears or face</li>
</ul>
<p>Symptoms build over 2 to 3 days, and most colds clear within <strong>1 to 2 weeks</strong>. A cough can carry on for <strong>3 to 4 weeks</strong>. Green or yellow mucus is normal in a cold and doesn’t mean you need antibiotics.</p>
<p><strong>Cold, flu, COVID-19 or dengue?</strong></p>
<ul>
<li>A cold starts gradually and mainly affects the nose and throat. You can usually carry on.</li>
<li><a href="/articles/influenza-a-malaysia/">Flu</a> comes on within hours, with high fever, aches and exhaustion.</li>
<li>COVID-19 can look very similar to a cold or flu. A test is the only way to tell.</li>
<li><strong><a href="/articles/dengue-klang-valley-first-three-days/">Dengue</a></strong> usually causes a high fever, headache, pain behind the eyes and body aches, often <strong>without</strong> a runny nose. If you have a high fever without cold symptoms, see a doctor.</li>
</ul>` },
      { id: 'help', h: 'What helps (ubat selsema)', tocLabel: 'What helps', html: `<ul>
<li><strong>Rest and drink plenty of fluids.</strong></li>
<li><strong>Paracetamol or ibuprofen</strong> for fever, sore throat and aches. If dengue is possible, use paracetamol only. See our guide to <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkillers</a>.</li>
<li><strong>Saline (salt-water) nose drops or spray</strong> may ease a blocked nose, and are safe for children.</li>
<li><strong>Honey</strong>, alone or in warm water with lemon, can ease a cough. A Cochrane review found it probably helps children’s cough for up to 3 days. <strong>Never give honey to babies under 1.</strong></li>
<li>Gargling with warm salt water can soothe a sore throat in adults.</li>
<li><strong>Decongestant nasal sprays</strong> can give a small improvement in a blocked nose, but don’t use them for more than a week, and not in children under 6.</li>
</ul>
<p><strong>Supplements:</strong></p>
<ul>
<li><strong>Vitamin C</strong> taken regularly doesn’t stop you catching colds, and may only slightly shorten them. Starting it once you are ill shows no consistent benefit.</li>
<li><strong>Zinc</strong> may shorten a cold by about 2 days, but the evidence is weak, and it can cause nausea and taste changes.</li>
<li>Steam inhalation hasn’t been shown to help, and bowls of hot water can scald children.</li>
</ul>
<p><strong>Combination cold remedies:</strong> many contain paracetamol, so don’t take them with separate paracetamol, to avoid an overdose. Antihistamines help a little only in the first 1 to 2 days.</p>
${figure('cold-flu', 'Tissues, nasal spray and a notebook on a desk', 'Most colds clear within 1 to 2 weeks with rest, fluids and simple remedies.')}` },
      { id: 'children', h: 'Colds in children', tocLabel: 'In children', html: `<ul>
<li>Young children often have 6 or more colds a year, especially in nursery or school.</li>
<li>Malaysia’s Drug Control Authority says cough and cold medicines containing antihistamines, decongestants or cough suppressants <strong>shouldn’t be given to children under 2</strong>, and only on a doctor’s or pharmacist’s advice for those aged 2 to 6.</li>
<li>Use saline drops, fluids and paracetamol or ibuprofen, dosed by weight. Don’t give aspirin to children under 16.</li>
<li>Honey is fine from age 1. Avoid throat lozenges under 4, as they are a choking risk.</li>
</ul>
<p>See our guides to <a href="/articles/fever-in-children-malaysia/">fever in children</a> and <a href="/articles/rsv-malaysia/">RSV</a>, which can make babies very unwell.</p>` },
      { id: 'antibiotics', h: 'Why antibiotics don’t help', tocLabel: 'Antibiotics', html: `<p>Colds and most URTIs are caused by viruses, and antibiotics only work on bacteria. A 2025 Cochrane review found antibiotics <strong>don’t help colds</strong>, even with green or yellow mucus, and adults who took them had about 2.6 times the risk of side effects such as diarrhoea, nausea and rash.</p>
<ul>
<li>In a 2014 national survey of Malaysian clinics, <strong>46% of URTI patients</strong> were prescribed antibiotics, 58% at private clinics and 17% at public clinics.</li>
<li>Unnecessary antibiotics fuel <strong>antibiotic resistance</strong>, making future infections harder to treat. Malaysia has a national action plan to reduce this.</li>
<li>If your doctor isn’t sure, they may suggest a <strong>“just in case” prescription</strong> to collect only if you aren’t improving after a few days. Studies show this greatly reduces antibiotic use, with similar recovery.</li>
</ul>
<p>Antibiotics may be needed for some bacterial throat infections, sinus infections that last more than about 10 days, or complications such as <a href="/articles/pneumonia-pneumococcal-vaccine-malaysia/">pneumonia</a>. Your doctor will decide.</p>` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<p><strong>See a doctor if:</strong></p>
<ul>
<li>you have a fever lasting more than 3 days</li>
<li>you are breathless, wheezy, or have chest pain</li>
<li>you get better, then worse again</li>
<li>symptoms haven’t improved after 10 days, or a cough lasts more than 3 weeks (see our guide to a <a href="/articles/persistent-cough-malaysia/">cough that won’t go away</a>)</li>
<li>you have ear pain, or severe pain in the face or forehead</li>
<li>you have a long-term condition such as asthma, diabetes or heart disease, or a weak immune system</li>
<li>you are showing signs of dehydration</li>
</ul>
<p><strong>Get urgent help</strong> for difficulty breathing, coughing up blood, a swollen, painful neck on one side, or a baby under 3 months with a temperature of 38°C or more (3 to 6 months: 39°C or more). See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
      { id: 'spread', h: 'Stopping it spreading', tocLabel: 'Prevention', html: `<ul>
<li>You are infectious from a few days before symptoms until they have gone.</li>
<li>Wash your hands often, use and bin tissues, and cough into your elbow.</li>
<li>Don’t share towels or cups, and stay home if you have a fever.</li>
<li>The yearly <a href="/articles/flu-vaccine-malaysia/">flu vaccine</a> doesn’t prevent colds, but does protect against flu.</li>
</ul>
<p>If you need time off work, see our guide to <a href="/articles/medical-certificate-mc-malaysia/">medical certificates</a>. An MC requires an in-person examination.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic open now',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check you for complications, rule out dengue or flu if needed, advise on symptom relief and issue an MC. Our directory shows which clinics are open now, including clinics open late, at weekends and 24 hours across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What does URTI mean?', 'Upper respiratory tract infection: an infection of the nose, sinuses, throat or voice box, most often a common cold. It is usually caused by a virus.'],
      ['How long does a cold last?', 'Most colds clear within 1 to 2 weeks. A cough can last 3 to 4 weeks.'],
      ['Do I need antibiotics for URTI?', 'Usually not. Most URTIs are viral, and antibiotics don’t help them but can cause side effects and resistance.'],
      ['What is the best medicine for a cold (ubat selsema)?', 'Rest, fluids, paracetamol or ibuprofen, saline nose drops and honey for a cough. Decongestant sprays can help for a few days.'],
      ['Does vitamin C cure a cold?', 'No. Taking it regularly doesn’t prevent colds and may only slightly shorten them. Starting it once ill shows no consistent benefit.'],
      ['Can I give cough and cold medicine to my child?', 'Not under 2, and only on a doctor’s or pharmacist’s advice for ages 2 to 6. Saline drops, fluids and paracetamol are safer choices.'],
      ['Is green mucus a sign of infection needing antibiotics?', 'No. Green or yellow mucus is common in viral colds and doesn’t mean you need antibiotics.'],
      ['When should I see a doctor for a cold?', 'For fever over 3 days, breathlessness or chest pain, getting worse after improving, or symptoms lasting more than 10 days.'],
    ],
    sources: [
      ['US CDC — About the common cold (Feb 2026)', 'https://www.cdc.gov/common-cold/about/index.html'],
      ['US CDC — Common cold treatment (Mar 2026)', 'https://www.cdc.gov/common-cold/treatment/index.html'],
      ['NHS — Common cold (Mar 2024)', 'https://www.nhs.uk/conditions/common-cold/'],
      ['NHS — Cough', 'https://www.nhs.uk/conditions/cough/'],
      ['Ab Rahman, Teng and Sivasampu — Antibiotic prescribing in Malaysian primary care, NMCS 2014 (BMC Infect Dis, 2016)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4869350/'],
      ['Cochrane — Antibiotics for the common cold (Nov 2025)', 'https://www.cochrane.org/CD000247/ARI_antibiotics-for-the-common-cold'],
      ['Cochrane — Delayed antibiotic prescriptions for respiratory infections (2023)', 'https://www.cochrane.org/CD004417/ARI_delayed-antibiotic-prescriptions-respiratory-infections'],
      ['Cochrane — Honey for acute cough in children (2018)', 'https://www.cochrane.org/CD007094/ARI_honey-acute-cough-children'],
      ['Cochrane — Zinc for the common cold (May 2024)', 'https://www.cochrane.org/CD014914/ARI_zinc-prevention-and-treatment-common-cold'],
      ['Cochrane — Vitamin C for preventing and treating the common cold (2013)', 'https://www.cochrane.org/CD000980/ARI_vitamin-c-preventing-and-treating-common-cold'],
      ['The Star — Does taking antibiotics for a cold help you recover faster? (May 2026)', 'https://www.thestar.com.my/news/true-or-not/2026/05/06/quickcheck-does-taking-antibiotics-for-a-cold-actually-help-you-recover-faster'],
      ['The Star — Cough and cold medicines for children to be limited (Jul 2009)', 'https://www.thestar.com.my/news/nation/2009/07/09/cough-and-cold-medicines-for-children-to-be-limited'],
    ],
    related: ['ubat-batuk-cough-medicine-malaysia', 'influenza-a-malaysia', 'persistent-cough-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'normal-heart-rate-palpitations-malaysia',
    title: 'Normal heart rate and palpitations (jantung berdebar): what’s normal, how to check your pulse, and when it’s a problem',
    crumb: 'Heart rate and palpitations',
    desc: 'Normal heart rate for adults and children, how to check your pulse, fast and slow heart rates, palpitations (jantung berdebar), atrial fibrillation, and when to call 999.',
    excerpt: 'A normal resting heart rate for adults is 60 to 100 beats a minute. What changes it, how to take your pulse properly, what palpitations and skipped beats usually mean, why an irregular pulse after 65 should be checked for atrial fibrillation, and the warning signs that need emergency help.',
    standfirst: 'Your heart rate is the number of times your heart beats a minute. It changes all the time with activity, stress, caffeine and illness. Palpitations, a fluttering, pounding or skipping heartbeat (jantung berdebar), are very common and usually harmless. But some heart rhythm problems, especially atrial fibrillation, raise the risk of stroke and are worth finding.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Heart rate', 'Palpitations', 'Atrial fibrillation'],
    image: 'bp-monitor', imageAlt: 'A blood pressure cuff and stethoscope on a white surface',
    keyPoints: [
      'A normal resting heart rate for adults is 60 to 100 beats a minute. Very fit people may be in the 40s or 50s.',
      'Check your pulse at rest: count the beats for 30 seconds and double it, or for a full minute if it feels irregular.',
      'Palpitations are usually caused by caffeine, alcohol, nicotine, stress, poor sleep or exercise, and skipped beats are usually harmless.',
      'An irregular pulse, especially from age 65, can be atrial fibrillation, which makes a stroke about 5 times more likely but can be treated.',
      'Call 999 for palpitations with chest pain, breathlessness, fainting or dizziness, or a heartbeat that won’t settle.',
    ],
    sections: [
      { id: 'normal', h: 'What is a normal heart rate? (Kadar degupan jantung normal)', tocLabel: 'Normal heart rate', html: `<p><strong>Adults:</strong> a normal resting heart rate is <strong>60 to 100 beats per minute (bpm)</strong>. Women tend to be slightly higher than men. Regular exercise lowers your resting rate, and athletes often have rates in the 40s or 50s.</p>
<p><strong>Children</strong> have faster heart rates. Typical ranges from the Royal Children’s Hospital Melbourne are:</p>
<div class="table-wrap"><table>
<thead><tr><th>Age</th><th>Heart rate (bpm)</th></tr></thead>
<tbody>
<tr><td>Newborn</td><td>120–170</td></tr>
<tr><td>1 year</td><td>105–150</td></tr>
<tr><td>2 to 4 years</td><td>80–150</td></tr>
<tr><td>6 to 8 years</td><td>70–140</td></tr>
<tr><td>10 to 12 years</td><td>60–130</td></tr>
<tr><td>14 years and over</td><td>60–115</td></tr>
</tbody></table></div>
<p>These ranges are wide, and a child’s heart rate rises with fever, crying and activity.</p>
<p><strong>What changes your heart rate:</strong> exercise, fever or infection, heat, dehydration, caffeine, alcohol, smoking, stress or anxiety, poor sleep, pregnancy, anaemia, an overactive thyroid and some medicines, including asthma inhalers (which raise it) and beta-blockers (which lower it).</p>` },
      { id: 'pulse', h: 'How to check your pulse', tocLabel: 'Check your pulse', html: `<ol>
<li>Sit quietly for 5 minutes first. Avoid caffeine and smoking beforehand.</li>
<li>Place two fingers (not your thumb) on the inside of your wrist, at the base of your thumb, or on your neck beside your windpipe.</li>
<li>Count the beats for <strong>30 seconds and double it</strong>. If the beat feels irregular, count for a <strong>full 60 seconds</strong>.</li>
<li>Notice whether the rhythm is regular, like a ticking clock, or irregular.</li>
</ol>
<p><strong>Smartwatches</strong> can measure your heart rate and some can alert you to an irregular rhythm. In a large study, only about a third of people who got an irregular-rhythm alert were found to have atrial fibrillation on a follow-up heart monitor. An alert is a reason to see a doctor, not a diagnosis, and no alert doesn’t rule out a problem.</p>
<p>A home blood pressure monitor also shows your pulse. See our guide to <a href="/articles/check-blood-pressure-at-home/">checking your blood pressure at home</a>.</p>` },
      { id: 'fast-slow', h: 'Fast and slow heart rates', tocLabel: 'Fast and slow', html: `<p><strong>Fast (tachycardia): over 100 bpm at rest.</strong> Most often it is a normal response to exercise, fever, anxiety, caffeine, alcohol, dehydration, low blood sugar, anaemia or pregnancy. Sometimes it is a heart rhythm problem such as:</p>
<ul>
<li><strong>SVT (supraventricular tachycardia):</strong> sudden episodes of a very fast, regular heartbeat that start and stop abruptly, lasting minutes to hours. It is usually not serious. A doctor may teach you a breathing-and-straining technique (a modified Valsalva manoeuvre) to stop episodes, which worked in about 4 in 10 people in a UK trial.</li>
<li><strong>Atrial fibrillation:</strong> see below.</li>
</ul>
<p><strong>Slow (bradycardia): under 60 bpm.</strong> It is often normal in fit people and during sleep. A rate of 40 to 60 without symptoms is usually not a worry. It can also be caused by medicines such as beta-blockers, an <a href="/articles/thyroid-hyperthyroidism-hypothyroidism-malaysia/">underactive thyroid</a>, sleep apnoea, ageing or heart conduction problems. A slow rate with dizziness, fainting, breathlessness or tiredness needs checking. A rate below 40 that isn’t normal for you, with symptoms, needs emergency care.</p>` },
      { id: 'palpitations', h: 'Palpitations (jantung berdebar)', tocLabel: 'Palpitations', html: `<p>Palpitations are when you become aware of your heartbeat: pounding, racing, fluttering or skipping. They are very common and <strong>usually harmless</strong>.</p>
<p><strong>Common triggers:</strong></p>
<ul>
<li>caffeine (coffee, tea, energy drinks), alcohol and nicotine, including vapes</li>
<li>stress, anxiety and panic. See our guide to <a href="/articles/anxiety-malaysia/">anxiety</a>.</li>
<li>exercise, and lack of sleep</li>
<li>pregnancy and the menopause</li>
<li>fever, dehydration and low blood sugar</li>
<li>medicines and products such as decongestants in cold remedies, asthma inhalers, thyroid medicines and some supplements</li>
<li><a href="/articles/anaemia-iron-deficiency-malaysia/">anaemia</a> and an overactive thyroid</li>
</ul>
<p><strong>Skipped or extra beats (ectopic beats)</strong> feel like a missed beat followed by a thump. According to the British Heart Foundation, they are usually harmless and don’t damage the heart. They are more noticeable with stress, poor sleep, alcohol and caffeine.</p>
${figure('morning-walk', 'A woman walking along a tree-lined path in morning light', 'Regular exercise lowers your resting heart rate over time.')}` },
      { id: 'af', h: 'Atrial fibrillation', tocLabel: 'Atrial fibrillation', html: `<p>Atrial fibrillation (AF) is the most common heart rhythm problem. The heart beats irregularly and often fast. Some people feel palpitations, breathlessness or tiredness, but many have no symptoms.</p>
<ul>
<li>It becomes more common from age 55, and is more common in men, and in people with high blood pressure or heart disease.</li>
<li><strong>AF makes a stroke about 5 times more likely</strong>, because blood clots can form in the heart. See our guide to <a href="/articles/stroke-heart-attack-kuala-lumpur/">stroke and heart attack</a>.</li>
<li>A Malaysian study found AF in about 0.5% of adults aged 30 and over.</li>
<li>Treatment includes medicines to control the heart rate or rhythm, and <strong>blood-thinning medicines</strong>, which greatly lower stroke risk.</li>
<li>Asia Pacific heart rhythm experts recommend checking the pulse or an ECG opportunistically from age 65, for example at a routine clinic visit.</li>
</ul>` },
      { id: 'tests', h: 'Tests a doctor may do', tocLabel: 'Tests', html: `<ul>
<li>an <strong>ECG</strong> (heart tracing)</li>
<li>a 24 to 48 hour heart monitor (Holter), or a longer patch monitor if symptoms come and go</li>
<li>an <strong>echocardiogram</strong> (heart ultrasound)</li>
<li>blood tests for anaemia, thyroid problems and salts such as potassium. See our guide to <a href="/articles/blood-test-results-explained-malaysia/">blood test results</a>.</li>
</ul>
<p>Try to note when palpitations happen, how long they last, and whether they feel regular or irregular. If you can, record your pulse or an ECG on a smartwatch during an episode.</p>` },
      { id: 'emergency', h: 'When to get help', tocLabel: 'When to get help', html: `<p><strong>Call <a href="tel:999">999</a> or go to an emergency department if palpitations:</strong></p>
<ul>
<li>come with <strong>chest pain</strong>, breathlessness, dizziness, or you faint or nearly faint</li>
<li>don’t stop</li>
<li>start during exercise</li>
</ul>
<p><strong>See a doctor soon if:</strong></p>
<ul>
<li>palpitations keep coming back, or last more than a few minutes</li>
<li>your pulse is often irregular, especially if you are 65 or over</li>
<li>your resting heart rate is regularly above 100 or below 50 with symptoms</li>
<li>you have a heart condition, or a family history of heart problems or sudden death at a young age</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get your heart checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check your pulse and blood pressure, do an ECG, arrange blood tests and a heart monitor, and refer you to a cardiologist if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What is a normal heart rate?', '60 to 100 beats per minute at rest for adults. Very fit people may be lower, in the 40s or 50s.'],
      ['What is a normal heart rate for children?', 'It is faster than in adults and falls with age, from about 120 to 170 in newborns to about 60 to 115 in teenagers.'],
      ['How do I check my pulse?', 'Rest for 5 minutes, place two fingers on your wrist or neck, and count the beats for 30 seconds and double it, or count for 60 seconds if it feels irregular.'],
      ['Are palpitations dangerous?', 'Usually not. Most are caused by caffeine, stress, alcohol or lack of sleep. Get urgent help if they come with chest pain, breathlessness or fainting.'],
      ['What causes skipped heartbeats?', 'Extra (ectopic) beats, which are common and usually harmless, often triggered by stress, poor sleep, caffeine or alcohol.'],
      ['Is a heart rate of 110 at rest normal?', 'It is higher than normal. It is often due to fever, dehydration, anxiety or caffeine, but if it stays high or comes with symptoms, see a doctor.'],
      ['What is atrial fibrillation?', 'An irregular, often fast heart rhythm that raises stroke risk about 5 times. It is treatable with medicines, including blood thinners.'],
      ['Can a smartwatch detect heart problems?', 'It can flag an irregular rhythm, but alerts aren’t a diagnosis. See a doctor for an ECG if you get one.'],
    ],
    sources: [
      ['British Heart Foundation — Your heart rate (Aug 2026)', 'https://www.bhf.org.uk/informationsupport/how-a-healthy-heart-works/your-heart-rate'],
      ['British Heart Foundation — Checking your pulse (Oct 2024)', 'https://www.bhf.org.uk/informationsupport/tests/checking-your-pulse'],
      ['British Heart Foundation — Ectopic beats (Nov 2024)', 'https://www.bhf.org.uk/informationsupport/heart-matters-magazine/medical/ask-the-experts/ectopic-beats'],
      ['Cleveland Clinic — Heart rate (Jun 2026)', 'https://my.clevelandclinic.org/health/diagnostics/heart-rate'],
      ['Cleveland Clinic — Tachycardia (Jan 2025)', 'https://my.clevelandclinic.org/health/diseases/22108-tachycardia'],
      ['Cleveland Clinic — Bradycardia (Nov 2025)', 'https://my.clevelandclinic.org/health/diseases/17841-bradycardia'],
      ['Royal Children’s Hospital Melbourne — Normal ranges for physiological variables', 'https://www.rch.org.au/clinicalguide/guideline_index/Normal_Ranges_for_Physiological_Variables/'],
      ['NHS — Heart palpitations (Mar 2026)', 'https://www.nhs.uk/conditions/heart-palpitations/'],
      ['NHS — Supraventricular tachycardia (Jun 2024)', 'https://www.nhs.uk/conditions/supraventricular-tachycardia-svt/'],
      ['NHS — Atrial fibrillation (Jan 2025)', 'https://www.nhs.uk/conditions/atrial-fibrillation/'],
      ['Asia Pacific Heart Rhythm Society — Atrial fibrillation screening guidance (2021)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8851593'],
      ['Apple Heart Study (NEJM, 2019)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8112605'],
      ['The Bottom Line — REVERT trial summary (Lancet, 2015)', 'https://www.thebottomline.org.uk/summaries/REVERT/'],
      ['Patient.info — Palpitations', 'https://patient.info/heart-health/palpitations-leaflet'],
    ],
    related: ['tanda-sakit-jantung-heart-disease-signs-malaysia', 'blood-pressure-cholesterol-malaysia', 'low-blood-pressure-darah-rendah-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'painkillers-paracetamol-ibuprofen-malaysia',
    title: 'Painkillers explained: paracetamol, ibuprofen, naproxen and mefenamic acid — which to use, safe doses and who should avoid them',
    crumb: 'Painkillers explained',
    desc: 'Paracetamol vs ibuprofen, naproxen and mefenamic acid: safe adult doses, which works best for which pain, who should avoid anti-inflammatories, dengue caution and overdose danger.',
    excerpt: 'Paracetamol and ibuprofen are among the most searched medicines in Malaysia. How they differ, safe adult doses, which works best, who shouldn’t take anti-inflammatory painkillers (including if dengue is possible), the danger of hidden paracetamol, and why unregistered “pain remedies” can contain steroids.',
    standfirst: 'Paracetamol and anti-inflammatory painkillers (NSAIDs) such as ibuprofen, naproxen and mefenamic acid are safe and effective for most people when used correctly. But they aren’t interchangeable. NSAIDs can cause stomach bleeding and kidney problems, aren’t safe in dengue or late pregnancy, and paracetamol overdose can damage the liver even when you feel fine. This is a general guide for adults. Always read the label and ask a pharmacist.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Analgesics', 'Paracetamol', 'Nonsteroidal anti-inflammatory drugs'],
    image: 'medications', imageAlt: 'Blister packs of tablets',
    keyPoints: [
      'Paracetamol: adults usually take 500 mg to 1 g at least 4 hours apart, no more than 4 g (eight 500 mg tablets) in 24 hours. Many cold remedies also contain paracetamol, so count it all.',
      'Ibuprofen and other NSAIDs work well for inflammation-type pain, such as period pain, dental pain and sprains. Take them with food, at the lowest dose for the shortest time.',
      'Avoid NSAIDs if dengue is possible, if you have a stomach ulcer, kidney or heart disease, are taking blood thinners, or are 20 or more weeks pregnant.',
      'Taking paracetamol and ibuprofen together gave good relief for about 7 in 10 people in studies of short-term pain.',
      'A paracetamol overdose needs emergency care even if you feel well. Delaying treatment by more than 24 hours greatly raises the risk of liver damage.',
    ],
    sections: [
      { id: 'which', h: 'Paracetamol or an anti-inflammatory?', tocLabel: 'Which to choose', html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Paracetamol</th><th>NSAIDs (ibuprofen, naproxen, mefenamic acid, diclofenac)</th></tr></thead>
<tbody>
<tr><td>Good for</td><td>Headache, fever, general aches, pain in pregnancy</td><td>Pain with inflammation: period pain, dental pain, sprains and strains, gout, some back pain</td></tr>
<tr><td>Stomach</td><td>Gentle on the stomach</td><td>Can cause indigestion, ulcers and bleeding. Take with food</td></tr>
<tr><td>Main risk</td><td>Liver damage in overdose</td><td>Stomach bleeding, kidney problems, raised blood pressure, heart risks at high doses</td></tr>
<tr><td>Dengue</td><td>The safe choice</td><td>Avoid: increases bleeding risk</td></tr>
<tr><td>Pregnancy</td><td>Usually the preferred painkiller</td><td>Avoid from 20 weeks, unless a doctor advises</td></tr>
</tbody></table></div>
<p><strong>How well they work:</strong> a 2015 Cochrane overview of non-prescription painkillers, mostly tested on pain after dental surgery, found ibuprofen with paracetamol worked for about 7 in 10 people, and fast-acting ibuprofen also worked well. Paracetamol alone was less effective for this type of pain. Adults can take paracetamol and ibuprofen together if needed, as they work differently.</p>` },
      { id: 'paracetamol', h: 'Paracetamol: safe use', tocLabel: 'Paracetamol', html: `<ul>
<li><strong>Usual adult dose:</strong> one or two 500 mg tablets at a time, at least 4 hours apart, and <strong>no more than 8 tablets (4 g) in 24 hours</strong>.</li>
<li>You may need a lower dose if you weigh under 50 kg, have liver or kidney problems, or drink a lot of alcohol. Ask a pharmacist.</li>
<li><strong>Check for hidden paracetamol.</strong> Many cold and flu remedies contain it. Taking them with paracetamol tablets is a common way to overdose by accident.</li>
<li>See a doctor if you still need it after 3 days.</li>
</ul>
<p><strong>Overdose is dangerous even if you feel fine.</strong> Paracetamol overdose can cause liver failure, and symptoms may not appear for a day or more. In a study of more than 1,000 overdose cases at two Kuala Lumpur hospitals, treatment started more than 24 hours after the overdose raised the risk of liver damage about 9-fold. If you have taken too much, <strong>go to an emergency department straight away</strong>. The National Poison Centre (+604 653 6999) can also advise.</p>
<p>For children’s doses, see our guide to <a href="/articles/fever-in-children-malaysia/">fever in children</a>.</p>` },
      { id: 'nsaids', h: 'NSAIDs: ibuprofen, naproxen and mefenamic acid', tocLabel: 'NSAIDs', html: `<div class="table-wrap"><table>
<thead><tr><th>Medicine</th><th>Usual adult dose</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Ibuprofen</td><td>200 to 400 mg up to 3 times a day, at least 4 hours apart. Up to 1,200 mg a day without a doctor’s advice</td><td>See a doctor if needed for more than 10 days</td></tr>
<tr><td>Naproxen</td><td>Commonly 250 mg 3 to 4 times a day for short-term pain, sometimes starting with 500 mg</td><td>Longer-acting</td></tr>
<tr><td>Mefenamic acid</td><td>500 mg three times a day, started when period pain begins</td><td>Used mainly for period pain. Stop if you get diarrhoea</td></tr>
<tr><td>Diclofenac</td><td>As prescribed</td><td>Not for people with heart disease, stroke, poor circulation or heart failure</td></tr>
</tbody></table></div>
<ul>
<li>Take them <strong>with or after food</strong>, at the <strong>lowest dose for the shortest time</strong>.</li>
<li><strong>Don’t take two NSAIDs together</strong>, for example ibuprofen with naproxen.</li>
<li>At high doses (2,400 mg of ibuprofen a day or more), NSAIDs slightly increase the risk of heart attack and stroke. This risk isn’t seen with ibuprofen at up to 1,200 mg a day.</li>
<li><strong>NSAID gels</strong> rubbed on painful joints, such as in knee arthritis, help some people and are an option for those who can’t take tablets.</li>
</ul>
<p>See our guides to <a href="/articles/period-pain-senggugut-malaysia/">period pain</a>, <a href="/articles/gout-malaysia/">gout</a> and <a href="/articles/slipped-disc-sciatica-malaysia/">back pain</a>.</p>` },
      { id: 'avoid', h: 'Who should avoid NSAIDs', tocLabel: 'Who should avoid', html: `<p>Don’t take ibuprofen, naproxen, mefenamic acid or diclofenac without a doctor’s advice if you:</p>
<ul>
<li><strong>might have dengue</strong>. In Malaysia, use paracetamol for any fever until dengue is ruled out. See our <a href="/articles/dengue-klang-valley-first-three-days/">dengue guide</a>.</li>
<li>have or have had a <strong>stomach ulcer</strong> or bleeding. See our guide to <a href="/articles/gerd-acid-reflux-malaysia/">reflux and ulcers</a>.</li>
<li>have <strong>kidney disease</strong>, heart failure, heart disease, or have had a stroke</li>
<li>have high blood pressure that isn’t controlled</li>
<li>take blood-thinning medicines, steroids or some antidepressants</li>
<li>have asthma that gets worse with aspirin or NSAIDs</li>
<li>are <strong>20 or more weeks pregnant</strong>. The US Food and Drug Administration warns NSAIDs at this stage can harm the baby’s kidneys.</li>
<li>are dehydrated, for example with vomiting or diarrhoea</li>
<li>are over 65, without checking with a doctor first</li>
</ul>
<p>A Malaysian national survey found that people who reported kidney disease were more likely to use NSAIDs, suggesting many don’t know they should avoid them.</p>
${figure('doctor-consultation', 'A doctor talking with a patient in a consultation room', 'Tell your doctor or pharmacist about your health conditions and other medicines before taking an NSAID.')}` },
      { id: 'stronger', h: 'Stronger painkillers', tocLabel: 'Stronger painkillers', html: `<p>Painkillers containing <strong>codeine</strong> or <strong>tramadol</strong> are prescription medicines. They commonly cause constipation and drowsiness, and can cause dependence with regular use, so they are used for short periods. Codeine isn’t usually used while breastfeeding. Don’t drive if they make you drowsy.</p>` },
      { id: 'warning', h: 'Be careful with “pain remedies” sold online', tocLabel: 'Unregistered remedies', html: `<p>The Ministry of Health has repeatedly warned about unregistered traditional products, sold for joint or body pain, that were found to contain hidden <strong>steroids</strong> such as dexamethasone, and NSAIDs such as diclofenac. Taken for long periods, hidden steroids can cause high blood sugar and blood pressure, weak bones and other serious problems.</p>
<ul>
<li>Buy medicines and traditional products only if they have a <strong>MAL registration number</strong> and security hologram. You can check a product on the NPRA website.</li>
<li>Ask a pharmacist before buying painkillers online.</li>
</ul>` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<ul>
<li>pain that hasn’t improved after 3 days of paracetamol or 10 days of ibuprofen</li>
<li>you need painkillers most days</li>
<li>you have black stools, vomit blood, or severe stomach pain while taking an NSAID</li>
<li>you have signs of an allergy, such as swelling or difficulty breathing (call 999)</li>
<li>any suspected paracetamol overdose, even if you feel well (go to an emergency department)</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get advice about pain',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can find the cause of ongoing pain, choose a painkiller that is safe with your health conditions and other medicines, and prescribe stronger treatment if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What is the difference between paracetamol and ibuprofen?', 'Paracetamol eases pain and fever and is gentle on the stomach. Ibuprofen is an anti-inflammatory that works well for inflammation-type pain but can irritate the stomach and isn’t safe in dengue.'],
      ['How much paracetamol can I take in a day?', 'For most adults, no more than 4 g (eight 500 mg tablets) in 24 hours, with at least 4 hours between doses. Less if you weigh under 50 kg or have liver problems.'],
      ['Can I take paracetamol and ibuprofen together?', 'Yes, adults can take them together or alternate them, as they work differently. Stick to the maximum dose of each.'],
      ['Can I take ibuprofen for dengue fever?', 'No. Ibuprofen and other NSAIDs increase bleeding risk in dengue. Use paracetamol for any fever until dengue is ruled out.'],
      ['What is mefenamic acid used for?', 'Mainly period pain. The usual adult dose is 500 mg three times a day, taken with food.'],
      ['Is ibuprofen safe in pregnancy?', 'Avoid it from 20 weeks of pregnancy unless a doctor advises. Paracetamol is usually the preferred painkiller in pregnancy.'],
      ['What should I do if I took too much paracetamol?', 'Go to an emergency department straight away, even if you feel well. Liver damage may not show for a day or more, and early treatment works best.'],
      ['Which painkiller is best for toothache or period pain?', 'Anti-inflammatories such as ibuprofen often work best, and combining ibuprofen with paracetamol is very effective, if NSAIDs are safe for you.'],
    ],
    sources: [
      ['NHS — How and when to take paracetamol for adults', 'https://www.nhs.uk/medicines/paracetamol-for-adults/how-and-when-to-take-paracetamol-for-adults/'],
      ['NHS — Ibuprofen for adults', 'https://www.nhs.uk/medicines/ibuprofen-for-adults/'],
      ['NHS — NSAIDs', 'https://www.nhs.uk/medicines/nsaids/'],
      ['Patient.info — Naproxen (Apr 2023)', 'https://patient.info/medicine/naproxen'],
      ['Electronic Medicines Compendium — Mefenamic acid summary of product characteristics', 'https://www.medicines.org.uk/emc/product/12891/smpc/print'],
      ['Cochrane — Oral painkillers available without prescription for acute pain (2015)', 'https://www.cochrane.org/evidence/CD010794_oral-painkillers-available-without-prescription-acute-pain'],
      ['US FDA — Avoid NSAIDs in pregnancy at 20 weeks or later (Oct 2020)', 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic'],
      ['MHRA — Diclofenac: new contraindications and warnings', 'https://www.gov.uk/drug-safety-update/diclofenac-new-contraindications-and-warnings'],
      ['MHRA — High-dose ibuprofen: small increase in cardiovascular risk (2015)', 'https://www.gov.uk/drug-safety-update/high-dose-ibuprofen-2400mg-day-small-increase-in-cardiovascular-risk'],
      ['Marzilawati et al. — Paracetamol overdose in Malaysia (BMC Pharmacol Toxicol, 2012)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3517419/'],
      ['National Poison Centre Malaysia', 'https://prn.usm.my/'],
      ['North Tees and Hartlepool NHS — Paracetamol safety for adults (Mar 2026)', 'https://www.nth.nhs.uk/resources/paracetamol-safety-for-adults/'],
      ['Malaysian Journal of Public Health Medicine — NSAID use among Malaysian adults (2017)', 'https://www.mjphm.org.my/prevalence-of-non-steroidal-anti-inflammatory-drugs-nsaids/'],
      ['The Star — Health Ministry warns against unregistered traditional medicine with harmful substances (Dec 2025)', 'https://www.thestar.com.my/news/nation/2025/12/18/health-ministry-warns-against-unregistered-traditional-medicine-with-harmful-substances'],
    ],
    related: ['fever-in-children-malaysia', 'period-pain-senggugut-malaysia', 'gerd-acid-reflux-malaysia'],
  },
];
