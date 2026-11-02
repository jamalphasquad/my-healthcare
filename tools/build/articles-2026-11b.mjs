// Articles published 2 November 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-02';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NOV_2026_B = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'piles-buasir-malaysia',
    title: 'Piles (buasir): symptoms, internal vs external, treatment and when bleeding is serious',
    crumb: 'Piles (buasir)',
    desc: 'Piles (buasir) explained: internal and external piles, the four grades, home treatment that works, clinic and surgical options, and when bleeding could be bowel cancer.',
    excerpt: 'Most piles (buasir) settle within days with more fibre, water and less straining. What internal, external and “prolapsed” piles are, what helps, the treatments a doctor can offer, and why bleeding from the bottom should be checked, especially after 40.',
    standfirst: 'Piles (buasir, haemorrhoids or hemorrhoids) are swollen blood vessels in and around the anus. They are very common, are rarely dangerous, and often settle on their own within a few days. But bleeding from the bottom can also be a sign of bowel cancer, which in Malaysia is often found late. Here is how to tell the difference, what helps, and when to see a doctor.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Haemorrhoids', 'Buasir', 'Rectal bleeding'],
    image: 'doctor-consultation', imageAlt: 'A doctor talking with a patient across a desk',
    keyPoints: [
      'Internal piles sit inside the back passage and are usually painless but can bleed. External piles sit under the skin around the anus and can itch and hurt.',
      'Typical signs are bright red blood on the tissue or in the toilet after a bowel movement, itching, mucus, and a soft lump at the anus.',
      'Most piles improve within a week with more fibre (25–38 g a day), plenty of water, not straining, and warm sitz baths.',
      'Piles that keep coming back can be treated in a clinic with banding, without an operation. Surgery is for large piles that stay outside.',
      'See a doctor about any bleeding from the bottom if you are over 40, if your bowel habit has changed, if the blood is dark, or if you are losing weight or feel tired. These can be signs of bowel cancer.',
    ],
    sections: [
      { id: 'what', h: 'What are piles (buasir)?', tocLabel: 'What piles are', html: `<p>Everyone has cushions of blood vessels in the anal canal. They become piles when they swell and stretch, usually because of pressure from straining.</p>
<ul>
<li><strong>Internal piles (buasir dalam)</strong> form inside the back passage. They are usually <strong>painless</strong>, because the lining there has few pain nerves, but they can bleed and can slip out (prolapse).</li>
<li><strong>External piles (buasir luar)</strong> form under the skin around the anus. They can itch, feel sore and sometimes bleed.</li>
<li>A <strong>thrombosed external pile</strong> is one with a blood clot inside. It appears suddenly as a very painful, purple or bluish lump. The clot stays in the pile and doesn’t travel elsewhere in the body.</li>
</ul>
<p><strong>The four grades of internal piles</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>Grade</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>Grade 1</td><td>Stays inside, may bleed</td></tr>
<tr><td>Grade 2</td><td>Comes out when you pass stool, then goes back by itself</td></tr>
<tr><td>Grade 3</td><td>Comes out (<em>buasir terkeluar</em>) and has to be pushed back with a finger</td></tr>
<tr><td>Grade 4</td><td>Stays outside and can’t be pushed back</td></tr>
</tbody></table></div>` },
      { id: 'symptoms', h: 'Symptoms of piles (tanda buasir)', tocLabel: 'Symptoms', html: `<ul>
<li><strong>bright red blood</strong> on the toilet paper, on the surface of the stool or dripping into the toilet after a bowel movement</li>
<li>itching or irritation around the anus</li>
<li>a soft lump at or outside the anus</li>
<li>mucus in your underwear or on the toilet paper</li>
<li>a feeling that you still need to go after emptying your bowels</li>
<li>pain, mainly with external or thrombosed piles</li>
</ul>
<p>Other conditions cause similar symptoms. An <strong>anal fissure</strong> (a small tear) causes sharp pain during and after passing stool, often with a little bright blood. An <strong>abscess</strong> causes a painful swelling with fever. A doctor can usually tell the difference with a quick examination.</p>` },
      { id: 'causes', h: 'What causes piles? (Punca buasir)', tocLabel: 'Causes', html: `<ul>
<li>straining on the toilet, often because of <strong>constipation</strong> from a low-fibre diet or not drinking enough</li>
<li>sitting on the toilet for a long time, for example scrolling on a phone</li>
<li>long-term diarrhoea</li>
<li>pregnancy and childbirth</li>
<li>being overweight</li>
<li>regular heavy lifting</li>
<li>getting older, as the supporting tissue weakens</li>
</ul>` },
      { id: 'serious', h: 'When bleeding could be something serious', tocLabel: 'When it’s serious', html: `<p>Piles are the most common cause of bright red bleeding, but not the only one. <strong>Bowel (colorectal) cancer</strong> can also cause bleeding, and in Malaysia it is often found late. In a National Cancer Registry study of more than 5,600 patients, about 7 in 10 were diagnosed at stage 3 or 4, and doctors report that symptoms in younger adults are often dismissed as piles.</p>
<p><strong>See a doctor soon if you have bleeding from the bottom and:</strong></p>
<ul>
<li>you are <strong>40 or over</strong>, or have a family history of bowel cancer</li>
<li>your <strong>bowel habit has changed</strong>, such as looser stools or constipation that lasts several weeks</li>
<li>the blood is <strong>dark red or black</strong>, or mixed into the stool</li>
<li>you are <strong>losing weight</strong> without trying, feel very tired or breathless (signs of anaemia), or have tummy pain or a lump</li>
<li>the bleeding continues after your piles have been treated</li>
</ul>
<p>The doctor may examine your bottom and arrange a <strong>colonoscopy</strong> to look inside the bowel. See our guide to <a href="/articles/bowel-cancer-screening-malaysia/">bowel cancer symptoms and free screening</a>.</p>
<p><strong>Go to a hospital emergency department</strong> if you are passing a lot of blood or large clots, the bleeding won’t stop, or you feel faint. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
      { id: 'home', h: 'How to treat piles at home', tocLabel: 'Home treatment', html: `<p>Most piles get better within a few days to a week with simple steps, and these also help stop them coming back:</p>
<ul>
<li><strong>Eat more fibre:</strong> aim for 25–38 g a day from vegetables, fruit, oats, wholemeal bread, brown rice, beans and lentils. Increase it gradually. A fibre supplement such as psyllium (ispaghula) helps if your diet falls short.</li>
<li><strong>Drink plenty of water</strong> so stools stay soft.</li>
<li><strong>Don’t strain</strong>, go when you feel the urge, and don’t sit on the toilet for more than a few minutes. Leave your phone outside.</li>
<li><strong>Sitz bath:</strong> sit in a few inches of warm (not hot) water for 10–20 minutes, once or several times a day, especially after a bowel movement. It soothes pain and itching.</li>
<li><strong>Keep the area clean</strong> with water and pat it dry rather than rubbing with dry tissue.</li>
<li>Use a <strong>cold compress</strong> wrapped in a cloth for swelling.</li>
<li><strong>Pain relief:</strong> paracetamol is usually fine. Avoid painkillers containing codeine, which cause constipation, and avoid ibuprofen if your piles are bleeding.</li>
</ul>
${figure('fresh-vegetables', 'Fresh broccoli, tomatoes, cucumber and red peppers on a wooden board', 'Vegetables, fruit and wholegrains add the fibre that keeps stools soft and stops straining.')}` },
      { id: 'medicines', h: 'Piles creams and medicines (ubat buasir)', tocLabel: 'Ubat buasir', html: `<ul>
<li><strong>Creams, ointments and suppositories</strong> from a pharmacy can ease itching, pain and swelling for a short time. Some contain a mild steroid or a local anaesthetic. Don’t use steroid products for more than a week unless a doctor tells you to, as they can thin the skin.</li>
<li><strong>Flavonoid tablets</strong> (also called phlebotonics, such as micronised purified flavonoid fraction) are widely used in Malaysia. A Cochrane review found they reduced bleeding and itching, although the trials were of limited quality.</li>
<li><strong>Laxatives</strong> that soften the stool, such as fibre supplements, help if you are constipated.</li>
</ul>
<p><strong>Check the product is registered.</strong> Medicines and traditional or herbal products sold in Malaysia must be registered with the National Pharmaceutical Regulatory Agency (NPRA) and carry a <strong>MAL number</strong>. Unregistered products, often sold online with promises of “piles shrinking in days”, have been found to contain hidden prescription drugs. You can check a product on the NPRA website.</p>` },
      { id: 'clinic', h: 'Treatment at a clinic or hospital', tocLabel: 'Clinic treatment', html: `<p>If piles keep bleeding or coming out despite home treatment, a doctor may refer you to a surgeon:</p>
<div class="table-wrap"><table>
<thead><tr><th>Treatment</th><th>What it involves</th><th>Usually for</th></tr></thead>
<tbody>
<tr><td>Rubber band ligation (banding)</td><td>A tight band placed around the base of the pile, which drops off within about a week. Done while you are awake, with no cuts</td><td>Grade 1 to 3 internal piles</td></tr>
<tr><td>Injection (sclerotherapy) or infrared coagulation</td><td>An injection or heat to shrink the pile, done while you are awake</td><td>Small internal piles</td></tr>
<tr><td>Haemorrhoidectomy</td><td>An operation to cut the piles away, usually under general anaesthetic</td><td>Grade 3 and 4 piles, or large internal and external piles</td></tr>
<tr><td>Haemorrhoidal artery ligation or stapling</td><td>Operations that cut off the blood supply to the piles or lift them back into place</td><td>Selected cases; less pain, but piles come back more often</td></tr>
</tbody></table></div>
<ul>
<li><strong>Recovery after a haemorrhoidectomy</strong> usually takes 2 to 4 weeks, and the first bowel movements are the most painful. Stool softeners and sitz baths help.</li>
<li>A <strong>thrombosed external pile</strong> that is very painful can be cut open to remove the clot if you are seen within about 2 to 3 days. After that, it usually settles on its own within a couple of weeks.</li>
<li>Piles can come back after any treatment, so the fibre, water and no-straining habits still matter.</li>
</ul>` },
      { id: 'pregnancy', h: 'Piles in pregnancy and after childbirth', tocLabel: 'In pregnancy', html: `<p>Piles are common in late pregnancy and after giving birth, because of pressure from the baby, hormones, constipation and pushing during labour. In one study of 280 pregnant women, more than 4 in 10 developed piles or a similar problem, mostly in the third trimester or after delivery.</p>
<ul>
<li>Eat plenty of fibre, drink water and stay active to prevent constipation.</li>
<li>Use a cold compress or sitz bath for comfort.</li>
<li><strong>Check with your doctor, midwife or pharmacist</strong> before using any cream or tablet.</li>
</ul>
<p>Piles that start in pregnancy often improve within weeks of the birth.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get piles checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine you, tell piles apart from other causes of bleeding, prescribe treatment and refer you for banding, surgery or a colonoscopy if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open in the evening and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is buasir in English?', 'Buasir is piles, also called haemorrhoids (or hemorrhoids in American English): swollen blood vessels in and around the anus.'],
      ['What are the signs of piles?', 'Bright red blood after a bowel movement, itching, mucus, a soft lump at the anus and, with external piles, pain.'],
      ['How long do piles take to go away?', 'Mild piles often settle within a few days to a week with more fibre, water and less straining. A thrombosed external pile can take a couple of weeks.'],
      ['What is the difference between internal and external piles?', 'Internal piles are inside the back passage and usually painless but may bleed or slip out. External piles are under the skin around the anus and can itch and hurt.'],
      ['Can piles turn into cancer?', 'No, piles don’t turn into cancer. But bowel cancer can cause similar bleeding, so see a doctor about bleeding if you are 40 or over or have other warning signs.'],
      ['Do piles need surgery?', 'Most don’t. Piles that keep bleeding or prolapsing can often be treated with banding in a clinic. Surgery is mainly for large piles that stay outside.'],
      ['Is a sitz bath good for piles?', 'Many people find a warm sitz bath for 10–20 minutes soothes pain and itching, although the evidence for it is limited.'],
      ['Which ubat buasir can I buy at a pharmacy?', 'Pharmacies sell creams, suppositories, fibre supplements and flavonoid tablets for piles. Ask the pharmacist, use steroid creams for no more than a week, and choose products with a MAL registration number.'],
    ],
    sources: [
      ['NHS — Piles (haemorrhoids) (reviewed Apr 2026)', 'https://www.nhs.uk/conditions/piles-haemorrhoids/'],
      ['NHS — Piles treatment (reviewed Apr 2026)', 'https://www.nhs.uk/conditions/piles-haemorrhoids/treatment/'],
      ['Cleveland Clinic — Hemorrhoids (May 2025)', 'https://my.clevelandclinic.org/health/diseases/15120-hemorrhoids'],
      ['American Family Physician — Hemorrhoids: diagnosis and treatment options (2018)', 'https://www.aafp.org/pubs/afp/issues/2018/0201/p172'],
      ['American Family Physician — Management of hemorrhoids: guidelines from the ASCRS (Dec 2025)', 'https://www.aafp.org/pubs/afp/issues/2025/1200/practice-guidelines-hemorrhoids.html'],
      ['Cochrane — Phlebotonics for haemorrhoids', 'https://www.cochrane.org/CD004322'],
      ['Frontiers in Oncology — Colorectal cancer survival among the Malaysian population (2023)', 'https://www.frontiersin.org/articles/10.3389/fonc.2023.1132417'],
      ['The Star — Colorectal cancer in young Malaysians (15 Sep 2026)', 'https://www.thestar.com.my/news/nation/2026/09/15/colorectal-cancer-in-young-malaysians-a-silent-threat-we-can-no-longer-ignore'],
      ['NPRA — Product registration FAQ', 'https://npra.gov.my/index.php/en/component/content/article/37-faq/623-product-registration'],
      ['Poskus et al. — Perianal diseases in pregnancy and after childbirth (BJOG, 2014)', 'https://pubmed.ncbi.nlm.nih.gov/24810254/'],
    ],
    related: ['bowel-cancer-screening-malaysia', 'stomach-pain-gastric-malaysia', 'clinic-or-emergency-department'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'scabies-kudis-buta-malaysia',
    title: 'Scabies (kudis buta): symptoms, how it spreads, treatment and stopping it coming back',
    crumb: 'Scabies (kudis buta)',
    desc: 'Scabies (kudis buta): the night-time itch, where the rash appears, how it spreads, how to use permethrin cream properly, treating the whole household, and washing bedding.',
    excerpt: 'Scabies (kudis buta) is an intensely itchy rash caused by tiny mites. It spreads through close skin contact, often through whole families and hostels. How to recognise it, how to use the treatment properly, why everyone at home must be treated at once, and why the itch lingers.',
    standfirst: 'Scabies (kudis buta) is caused by tiny mites that burrow into the skin. It causes an intense itch that is worst at night and often affects several people in the same home. It isn’t a sign of poor hygiene, and it is easy to treat, but only if the cream is used properly and everyone in close contact is treated at the same time.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Scabies', 'Kudis buta', 'Sarcoptes scabiei'],
    image: 'gp-consultation', imageAlt: 'A doctor talking with a patient across a desk in a consultation room',
    keyPoints: [
      'Scabies is caused by the Sarcoptes scabiei mite. It spreads mainly through prolonged skin-to-skin contact, such as sharing a bed, and only sometimes through bedding or clothes.',
      'The itch is worst at night. Look for small bumps and thin, wavy lines (burrows) between the fingers, on the wrists, elbows, armpits, waist, buttocks and genitals.',
      'The first-choice treatment in Malaysia is permethrin 5% cream, applied to the whole body from the jawline down, left on for 8–12 hours, and repeated after 1 week.',
      'Everyone at home and other close contacts must be treated on the same day, even without symptoms, or the mites spread back.',
      'The itch can last 1–2 weeks or more after successful treatment. That doesn’t mean the treatment failed.',
    ],
    sections: [
      { id: 'what', h: 'What is scabies (kudis buta)?', tocLabel: 'What it is', html: `<p>Scabies is a skin infestation by the mite <em>Sarcoptes scabiei</em>, which is too small to see with the naked eye. Female mites burrow into the top layer of skin to lay eggs. The intense itch is an allergic reaction to the mites, their eggs and their waste.</p>
<p>Scabies is common worldwide, with at least 200 million people affected at any time. In Malaysia, outbreaks are most often seen where people live closely together, such as large households, hostels, welfare homes and detention centres. In early 2026, for example, the Kelantan Health Department reported 279 cases among Orang Asli communities in Gua Musang since the start of 2025.</p>
<p>It is linked to crowding and close contact, not to being dirty. Anyone can get it.</p>` },
      { id: 'spread', h: 'How scabies spreads', tocLabel: 'How it spreads', html: `<ul>
<li><strong>Prolonged skin-to-skin contact</strong> is the main route: sharing a bed, cuddling and caring for children, and sexual contact. A quick handshake or hug is unlikely to pass it on.</li>
<li><strong>Bedding, towels and clothes</strong> are a less common route, because mites survive only 2 to 3 days off the skin. They matter more with crusted scabies (see below).</li>
<li>If it is your <strong>first time</strong>, symptoms take <strong>2 to 6 weeks</strong> to appear, but you can pass it on during that time. If you have had scabies before, itching starts within 1 to 5 days.</li>
</ul>
<p>Pets don’t spread human scabies. Animal mange is caused by a different mite, which may cause a brief itch in people but doesn’t settle in human skin.</p>` },
      { id: 'symptoms', h: 'Symptoms of scabies', tocLabel: 'Symptoms', html: `<ul>
<li><strong>Intense itching, worst at night</strong>, and often several people in the home itching at once</li>
<li><strong>Burrows:</strong> short, thin, wavy grey or silvery lines</li>
<li>a rash of small red bumps or blisters, and scratch marks</li>
</ul>
<p><strong>Where it appears in adults and older children:</strong> between the fingers, the wrists, elbows, armpit folds, around the nipples, the waist and belly button, the buttocks, and the penis and scrotum. The head and neck are usually spared.</p>
<p><strong>In babies and young children</strong>, scabies can also affect the face, scalp, neck, palms and soles, and may cause small blisters. Itchy lumps (nodules) can last for weeks or months after treatment.</p>
<p><strong>Crusted (Norwegian) scabies</strong> is a severe form with thick, crusted skin and huge numbers of mites. It is very contagious. It mainly affects older people, people with a weak immune system, and people with conditions that limit sensation or movement. It may itch surprisingly little, and needs a doctor’s care.</p>
${figure('mother-child', 'A mother and daughter sitting together', 'Scabies often spreads through families, so everyone in the home is treated at the same time.')}` },
      { id: 'complications', h: 'Complications', tocLabel: 'Complications', html: `<p>Scratching breaks the skin and lets bacteria in, causing <strong>impetigo</strong> (crusted sores), boils, cellulitis and, rarely, blood infection. Some of these bacteria can damage the kidneys. See a doctor if sores are spreading, weeping yellow fluid or very painful, or if you have a fever. You may need antibiotics as well as scabies treatment.</p>` },
      { id: 'treatment', h: 'Scabies treatment (ubat kudis buta)', tocLabel: 'Treatment', html: `<p>Under the Ministry of Health’s scabies guideline, the first choice for most people is <strong>permethrin 5% cream</strong>. Other options include benzyl benzoate lotion, sulphur ointment for young babies, and oral ivermectin tablets for some cases. A doctor will choose the right one, especially for babies, pregnant women and crusted scabies.</p>
<p><strong>How to apply permethrin cream properly:</strong></p>
<ol>
<li>Apply it at bedtime to <strong>cool, dry skin</strong>, not straight after a hot bath.</li>
<li>Cover the <strong>whole body from the jawline down</strong>, not just the itchy areas: between the fingers and toes, under the nails, the armpits, the genitals, the buttocks and the soles of the feet. Ask someone to help with your back. For babies and young children, the doctor may also advise treating the face and scalp, avoiding the eyes and mouth.</li>
<li>Leave it on for <strong>8 to 12 hours</strong>, usually overnight, then wash it off.</li>
<li>If you wash your hands during that time, <strong>apply more to your hands</strong>.</li>
<li><strong>Repeat after 1 week</strong> to kill any mites that hatched from eggs.</li>
</ol>
<p>Ask a pharmacist or doctor how much cream you need for everyone at home. Antihistamine tablets and a soothing moisturiser can help with the itch.</p>
<p><strong>Home remedies (petua)</strong> such as soaking in salt water may soothe the skin for a while, but they don’t kill the mites. Scabies needs a scabies treatment.</p>` },
      { id: 'contacts', h: 'Treat everyone at the same time', tocLabel: 'Treat contacts', html: `<p>This is the most common reason scabies keeps coming back. Everyone in your <strong>household</strong>, your sexual partners and anyone else who has had prolonged skin contact with you in the past 2 months should be treated <strong>on the same day</strong>, even if they have no rash or itch. Remember, symptoms can take up to 6 weeks to appear.</p>
<p>In hostels, schools and care homes, the District Health Office can help organise treatment for everyone at once.</p>` },
      { id: 'home', h: 'Cleaning bedding, clothes and the home', tocLabel: 'Bedding and home', html: `<p>On the day you start treatment:</p>
<ul>
<li><strong>Wash</strong> bedding, towels and clothes used in the past 3 days in <strong>hot water (above 50°C)</strong>, and dry them in a hot dryer or in the sun.</li>
<li>Items you can’t wash, such as soft toys or shoes, can be <strong>sealed in a plastic bag for at least 3 days</strong>, after which the mites die.</li>
<li>Vacuum mattresses, sofas and carpets.</li>
</ul>
<p>You don’t need to fumigate or spray insecticide around the home.</p>` },
      { id: 'after', h: 'After treatment: the itch, and when to go back', tocLabel: 'After treatment', html: `<ul>
<li><strong>Itching often continues for 1 to 2 weeks</strong>, sometimes up to 4 weeks, after successful treatment, as the skin reacts to dead mites. This doesn’t mean you need more cream. Using it too often can irritate the skin.</li>
<li><strong>See your doctor again</strong> if new burrows or bumps appear, or the itch is no better after 2 to 4 weeks. The usual reasons treatment fails are missing parts of the body, not repeating after a week, or someone at home not being treated.</li>
<li><strong>School and work:</strong> children and adults can usually go back <strong>24 hours after the first treatment</strong>.</li>
</ul>
<p>For other causes of itchy skin, such as eczema, hives and fungal rashes, see our guide to <a href="/articles/itchy-skin-eczema-hives-malaysia/">itchy skin</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get scabies treated',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can confirm scabies, prescribe enough treatment for the whole household, and treat any infected sores. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open in the evening, when the itch is often worst.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is kudis buta in English?', 'Kudis buta is scabies, an itchy skin infestation caused by the Sarcoptes scabiei mite.'],
      ['What causes kudis buta?', 'Tiny mites that burrow into the skin. They spread mainly through prolonged skin-to-skin contact, such as sharing a bed, and less often through bedding or clothes. It isn’t caused by poor hygiene.'],
      ['How long does scabies take to go away?', 'The mites are usually killed by two treatments a week apart, but the itch can carry on for 1 to 2 weeks, and sometimes up to 4 weeks, afterwards.'],
      ['How do I use permethrin cream for scabies?', 'Apply it to cool, dry skin over the whole body from the jawline down, including between the fingers and toes and under the nails. Leave it on for 8 to 12 hours, wash it off, and repeat after 1 week.'],
      ['Does my family need treatment too?', 'Yes. Everyone in the household and other close contacts should be treated on the same day, even without symptoms, or the scabies is likely to come back.'],
      ['Can scabies go away on its own?', 'No. Without treatment the mites keep breeding, the rash spreads and others get infected.'],
      ['Can I go to work or school with scabies?', 'You can usually go back 24 hours after the first treatment.'],
      ['Does soaking in salt water cure scabies?', 'No. It may soothe the skin, but it doesn’t kill the mites. You need a scabies treatment such as permethrin cream.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Guideline for management of scabies in adults and children (2015)', 'https://www.moh.gov.my/images/04-penerbitan/penerbitan-klinikal/pengurusan-kesihatan-dan-kawalan-penyakit/Guideline_For_Management_Of_Scabies_In_Adults_And_Children.pdf'],
      ['World Health Organization — Scabies fact sheet (May 2023)', 'https://www.who.int/news-room/fact-sheets/detail/scabies'],
      ['NHS — Scabies', 'https://www.nhs.uk/conditions/scabies/'],
      ['US CDC — Treatment of scabies', 'https://www.cdc.gov/scabies/treatment/index.html'],
      ['DermNet — Scabies', 'https://dermnetnz.org/topics/scabies'],
      ['British Association of Dermatologists — Scabies patient information leaflet (Oct 2023)', 'https://www.skinhealthinfo.org.uk/wp-content/uploads/2018/11/Scabies-update-PIL-Oct2023.pdf'],
      ['RTM — 279 jangkitan scabies dikesan dalam komuniti Orang Asli Gua Musang (Feb 2026)', 'https://berita.rtm.gov.my/?p=450501'],
    ],
    related: ['itchy-skin-eczema-hives-malaysia', 'psoriasis-malaysia', 'acne-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'mysalam-malaysia',
    title: 'mySalam 2026: who qualifies, how to check (semakan), benefits and how to claim',
    crumb: 'mySalam',
    desc: 'mySalam 2026 explained: who qualifies through STR, how to check your status (semakan), the RM8,000 critical illness payout, RM50 a day hospital income and how to claim.',
    excerpt: 'mySalam gives STR recipients and their spouses free protection: RM8,000 if diagnosed with one of 50 critical illnesses, RM50 a day for government hospital stays, and help with medical devices. Who qualifies, how to check, and how to make a claim without it being rejected.',
    standfirst: 'mySalam is a free takaful protection scheme for lower-income Malaysians. If you receive Sumbangan Tunai Rahmah (STR), you and your spouse are covered automatically, with no sign-up and nothing to pay. The Budget 2027 speech confirmed it continues next year. Here is what it pays for, how to check your status, and how to claim.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: false,
    about: ['mySalam', 'Sumbangan Tunai Rahmah', 'Takaful'],
    image: 'caring-hands', imageAlt: 'A younger person holding an older woman’s hands',
    keyPoints: [
      'mySalam covers STR recipients aged 18 to 65 and their spouses. Enrolment is automatic through STR data, so there is no registration and no contribution.',
      'It pays RM8,000 once if you are diagnosed with one of 50 critical illnesses, including cancer, heart attack, stroke and, since 2025, some mental illnesses.',
      'It also pays RM50 a day when you are admitted to a government hospital, for up to 14 days (RM700) a year, and helps with some medical devices.',
      'You claim online on the mySalam portal or at mySalam kiosks in government hospitals. Missing documents are the main reason claims are rejected.',
      'About 1.88 million people had received mySalam payouts by the end of 2025, totalling RM1.42 billion.',
    ],
    sections: [
      { id: 'what', h: 'What is mySalam?', tocLabel: 'What it is', html: `<p>mySalam is a national health protection scheme launched in 2019 for the B40 (lower-income) group. It is funded through a trust fund managed by the Ministry of Finance and administered by Great Eastern Takaful Berhad. It doesn’t pay your medical bills. Instead it gives you <strong>cash</strong> when you are diagnosed with a serious illness or admitted to hospital, to help with lost income and other costs.</p>
<p>It is separate from <a href="/articles/peka-b40-malaysia/">PeKa B40</a>, which offers free health screening and other help for STR recipients aged 40 and over, and from <a href="/articles/mediasas-malaysia/">MediAsas</a>, the voluntary medical insurance plan starting in January 2027.</p>` },
      { id: 'who', h: 'Who qualifies for mySalam in 2026?', tocLabel: 'Who qualifies', html: `<ul>
<li><strong>STR recipients aged 18 to 65</strong>, and their <strong>spouses</strong>, are covered. About 9.15 million STR recipients are eligible in 2026.</li>
<li><strong>Coverage is automatic.</strong> mySalam uses the STR records from the Inland Revenue Board (LHDN), so you don’t need to register or pay anything.</li>
<li><strong>If you don’t receive STR</strong>, you aren’t covered. If you think you qualify for STR but haven’t applied, apply for STR first through LHDN.</li>
</ul>
<p>Coverage follows your STR status for the year, so check your status each year rather than assuming you are still covered.</p>` },
      { id: 'benefits', h: 'mySalam benefits', tocLabel: 'Benefits', html: `<div class="table-wrap"><table>
<thead><tr><th>Benefit</th><th>What you get</th></tr></thead>
<tbody>
<tr><td>Critical illness</td><td><strong>RM8,000</strong>, paid once, if you are diagnosed with one of 50 listed critical illnesses</td></tr>
<tr><td>Hospital income</td><td><strong>RM50 a day</strong> when you are admitted to a government hospital, up to 14 days (<strong>RM700</strong>) a year</td></tr>
<tr><td>Medical devices</td><td>Help with the cost of some medical devices, such as heart stents, of up to <strong>RM30,000</strong></td></tr>
</tbody></table></div>
<p><strong>The 50 critical illnesses</strong> include common conditions such as cancer, heart attack, stroke and kidney failure. From 2025, the list was expanded from 45 to 50 illnesses, adding conditions including <strong>schizophrenia, bipolar disorder and major depressive disorder</strong>, thalassaemia major, aplastic anaemia, psoriasis, pemphigus vulgaris, rheumatoid arthritis and some rare diseases. The full list is on the mySalam website.</p>
<p>The hospital income is paid for stays in government hospitals, which reports describe as including military and university hospitals. It is not paid for private hospital stays.</p>` },
      { id: 'semakan', h: 'How to check your mySalam status (semakan)', tocLabel: 'How to check', html: `<ol>
<li>Go to the official mySalam website at <a href="https://www.mysalam.com.my/" target="_blank" rel="noopener">www.mysalam.com.my</a>.</li>
<li>Choose the eligibility check (<em>semakan kelayakan</em>) and enter your <strong>MyKad number</strong>.</li>
<li>The result shows whether you are covered for the year.</li>
</ol>
<p>“mySalam login” refers to your account on the same website, which you sign in to with your MyKad number. You use it to check your status, submit claims, follow a claim and update your bank details.</p>
<p><strong>Beware of fakes.</strong> mySalam is free. Use only the official website, and never pay anyone or share your banking password to “register” or speed up a claim.</p>` },
      { id: 'claim', h: 'How to make a mySalam claim', tocLabel: 'How to claim', html: `<p>You make the claim yourself. The hospital doesn’t submit it for you. You can claim:</p>
<ul>
<li><strong>online</strong> through your account on the mySalam website, or</li>
<li>at a <strong>mySalam kiosk</strong>: there are more than 140 in government hospitals.</li>
</ul>
<p><strong>Documents you need:</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>Claim</th><th>Documents</th></tr></thead>
<tbody>
<tr><td>Critical illness</td><td>The mySalam critical illness form completed by your doctor, and a copy of the front and back of your MyKad</td></tr>
<tr><td>Hospital income</td><td>Your hospital discharge note, and a copy of the front and back of your MyKad</td></tr>
</tbody></table></div>
<p>Upload clear PDF or JPEG copies. Approved payments go into the bank account registered in your mySalam account, so make sure your details are correct.</p>
<p><strong>Deadline:</strong> claims have had to be submitted by <strong>30 June of the following year</strong>. For example, 2025 claims were due by 30 June 2026. Check the website for the current deadline and claim as soon as you can.</p>` },
      { id: 'rejected', h: 'Why mySalam claims are rejected', tocLabel: 'Rejected claims', html: `<p>A November 2025 report found that only about <strong>54%</strong> of claims made from 2019 to 2024 were paid. Common problems include:</p>
<ul>
<li><strong>missing or unclear documents</strong>, such as a blurry discharge note or an incomplete doctor’s form</li>
<li>an illness that isn’t on the list of 50, or doesn’t meet its definition</li>
<li>a stay in a private hospital, which isn’t covered for hospital income</li>
<li>not being an STR recipient, or the spouse of one, in that year</li>
<li>a claim sent after the deadline</li>
</ul>
<p>If your claim is rejected for missing documents, collect them and claim again before the deadline.</p>
${figure('doctor-notes', 'A doctor in blue gloves writing notes on a clipboard', 'For a critical illness claim, ask your doctor to complete the mySalam form when you are diagnosed.')}` },
      { id: 'numbers', h: 'mySalam in numbers', tocLabel: 'In numbers', html: `<p>According to figures given by the government in June 2026, by 31 December 2025:</p>
<ul>
<li>about <strong>1.29 million</strong> people had received hospital income payouts, totalling RM394.9 million</li>
<li><strong>89,085</strong> people had received critical illness payouts, totalling RM712.7 million</li>
<li><strong>13,128</strong> people had received medical device help, totalling RM65.3 million</li>
</ul>
<p>In all, about 1.88 million people had received RM1.42 billion. The scheme was extended into 2026 in Budget 2026, and the Budget 2027 speech in October 2026 said it will continue in 2027.</p>` },
      { id: 'compare', h: 'mySalam, PeKa B40 and MediAsas compared', tocLabel: 'Compared', html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>mySalam</th><th>PeKa B40</th><th>MediAsas</th></tr></thead>
<tbody>
<tr><td>Who</td><td>STR recipients aged 18–65 and spouses</td><td>STR recipients aged 40+ and spouses</td><td>Anyone who signs up (from January 2027)</td></tr>
<tr><td>Cost</td><td>Free, automatic</td><td>Free</td><td>Paid premium; EPF savings can be used</td></tr>
<tr><td>What it gives</td><td>Cash for critical illness and government hospital stays; medical device help</td><td>Free screening, medical device aid, cancer treatment and transport incentives</td><td>Medical insurance for hospital treatment</td></tr>
</tbody></table></div>
<p>If you qualify for both mySalam and PeKa B40, you can use both. PeKa B40’s free screening, at a panel clinic, can pick up conditions such as diabetes, high blood pressure and some cancers early. See our guide to <a href="/articles/free-health-screening-malaysia/">free health screening in Malaysia</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Get screened early at a clinic',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'mySalam pays out after a diagnosis, but catching an illness early matters more. If you receive STR and are 40 or over, you can get free health screening at a PeKa B40 panel clinic. Our directory lists PeKa B40 panel clinics and GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/peka-b40-clinics/', 'PeKa B40 panel clinics'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/near-me/', 'Clinics near me']],
    faqs: [
      ['Who is eligible for mySalam?', 'STR recipients aged 18 to 65 and their spouses. Coverage is automatic through STR records, with no registration or payment.'],
      ['How do I check if I am covered by mySalam?', 'Enter your MyKad number in the eligibility check on the official mySalam website, www.mysalam.com.my.'],
      ['How much does mySalam pay?', 'RM8,000 once for one of 50 critical illnesses, RM50 a day for government hospital stays up to RM700 a year, and help of up to RM30,000 with some medical devices.'],
      ['What is the mySalam RM700?', 'It is the yearly maximum for hospital income: RM50 a day for up to 14 days in a government hospital.'],
      ['Does mySalam cover private hospitals?', 'The hospital income benefit is for stays in government hospitals, including military and university hospitals, not private hospitals.'],
      ['How do I claim mySalam?', 'Online through your account on the mySalam website, or at a mySalam kiosk in a government hospital. You need your doctor’s critical illness form or your discharge note, plus a copy of your MyKad.'],
      ['Is mySalam continuing in 2027?', 'Yes. The Budget 2027 speech in October 2026 said mySalam will continue in 2027.'],
      ['Do I need to pay or register for mySalam?', 'No. It is free and automatic for eligible STR recipients and their spouses. Don’t pay anyone who offers to register you.'],
    ],
    sources: [
      ['The Star — Nearly 1.9 million benefit from mySalam health safety scheme (13 Jun 2026)', 'https://www.thestar.com.my/news/nation/2026/06/13/nearly-19-million-benefit-from-mysalam-health-safety-scheme'],
      ['Malay Mail — Hospitalisation, critical illness and medical device aid among RM1.42b mySalam payouts (12 Jun 2026)', 'https://www.malaymail.com/news/malaysia/2026/06/12/hospitalisation-critical-illness-and-medical-device-aid-among-rm142b-mysalam-payouts-to-malaysians-says-minister/223523'],
      ['RinggitPlus — 9.15 million STR recipients eligible for mySalam coverage this year (Jul 2026)', 'https://ringgitplus.com/en/blog/lifestyle/9-15-million-str-recipients-eligible-for-mysalam-coverage-this-year.html'],
      ['CodeBlue — Report: mySalam paid out 54% of critical illness, hospitalisation claims (Nov 2025)', 'https://codeblue.galencentre.org/2025/11/report-mysalam-paid-out-54-pc-of-critical-illness-hospitalisation-claims/'],
      ['Utusan Malaysia — Parlimen: 1.8 juta individu nikmati inisiatif perlindungan kesihatan mySalam (Nov 2025)', 'https://www.utusan.com.my/terkini/2025/11/parlimen-1-8-juta-individu-nikmati-inisiatif-perlindungan-kesihatan-mysalam/'],
      ['Kosmo — mySalam kini lindungi 50 penyakit kritikal (Apr 2025)', 'https://www.kosmo.com.my/?p=747862'],
      ['SAYS — Healthcare reforms proposed in Budget 2027 (Oct 2026)', 'https://says.com/my/news/list-all-healthcare-reforms-proposed-budget-2027-benefit-you'],
      ['MyGov — PeKa B40', 'https://www.malaysia.gov.my/my/topics/peka-b40'],
    ],
    related: ['peka-b40-malaysia', 'mediasas-malaysia', 'free-health-screening-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'syphilis-sti-testing-malaysia',
    title: 'Syphilis (sifilis) and STI testing in Malaysia: symptoms, tests, treatment and where to get checked',
    crumb: 'Syphilis and STI testing',
    desc: 'Syphilis (sifilis) symptoms by stage, the painless sore and the rash, blood tests and what they mean, treatment, plus gonorrhoea, chlamydia and where to get a confidential STI test.',
    excerpt: 'Syphilis often starts with a painless sore that heals on its own, so many people don’t know they have it. Its stages and symptoms, how the blood tests work, the treatment, the signs of gonorrhoea and chlamydia, and where to get a confidential STI test in Malaysia.',
    standfirst: 'Syphilis (sifilis, sometimes called raja singa) is a bacterial infection spread mainly through sex. It is easy to cure with antibiotics, but its early signs are easy to miss, and untreated it can damage the brain, eyes, heart and an unborn baby. Malaysia recorded more than 4,600 new syphilis cases in 2022. Here is what to look out for, and how to get tested.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Syphilis', 'Sexually transmitted infections', 'Gonorrhoea'],
    image: 'blood-sample', imageAlt: 'A blood sample tube being prepared for testing',
    keyPoints: [
      'Syphilis usually starts with a firm, painless sore where the infection entered, which heals by itself within 3 to 6 weeks even without treatment.',
      'Weeks later, a non-itchy rash can appear, often on the palms and soles, with fever and swollen glands. Then the infection can stay hidden for years.',
      'It is diagnosed with blood tests and cured with penicillin injections. One type of test can stay positive for life even after cure.',
      'Gonorrhoea and chlamydia often cause no symptoms, especially in women, but can cause infertility. They are found with a urine test or swab.',
      'You can get a confidential STI test at government health clinics and private GP clinics. Partners need testing and treatment too.',
    ],
    sections: [
      { id: 'malaysia', h: 'Syphilis and STIs in Malaysia', tocLabel: 'In Malaysia', html: `<p>In 2022, Malaysia recorded <strong>4,669 new cases of syphilis</strong> and <strong>1,819 of gonorrhoea</strong>, according to figures given to Parliament by the Health Minister. About 1 in 15 syphilis cases and more than 1 in 5 gonorrhoea cases were in people under 21. Both are notifiable diseases under the Prevention and Control of Infectious Diseases Act 1988, so doctors must report cases to the Ministry of Health, which keeps them confidential.</p>
<p>Malaysia screens almost all pregnant women for syphilis and HIV. In October 2026 it kept its World Health Organization validation for eliminating mother-to-child transmission of both infections, which it first achieved in 2018, the first country in the Western Pacific to do so.</p>` },
      { id: 'stages', h: 'Syphilis symptoms by stage', tocLabel: 'Symptoms by stage', html: `<p>Symptoms usually start about <strong>3 weeks</strong> after infection, but can take anywhere from 10 days to 3 months.</p>
<div class="table-wrap"><table>
<thead><tr><th>Stage</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>Primary</td><td>A firm, round, usually <strong>painless sore</strong> (chancre) on the penis, vagina, anus or mouth. It is easy to miss and heals by itself in 3 to 6 weeks, but the infection remains.</td></tr>
<tr><td>Secondary</td><td>A few weeks to months later: a <strong>rash that usually doesn’t itch</strong>, often on the palms of the hands and soles of the feet, with fever, tiredness, swollen glands, sore throat or patchy hair loss. It also clears without treatment.</td></tr>
<tr><td>Latent</td><td>No symptoms, sometimes for many years. Many people stay in this stage for life, but can still pass syphilis to a baby during pregnancy.</td></tr>
<tr><td>Tertiary</td><td>10 to 30 years later in some untreated people: damage to the heart, brain, nerves and other organs.</td></tr>
</tbody></table></div>
<p>At <strong>any stage</strong>, syphilis can spread to the brain and nerves (neurosyphilis), the eyes or the ears. Get help urgently for sudden changes in vision or hearing, a severe headache, confusion or weakness.</p>
<p>Syphilis is most infectious in the first two stages, through direct contact with the sore or rash during vaginal, anal or oral sex.</p>` },
      { id: 'testing', h: 'Syphilis tests and what they mean', tocLabel: 'Testing', html: `<p>Syphilis is diagnosed with a <strong>blood test</strong>. Two kinds are used together:</p>
<ul>
<li><strong>Treponemal tests</strong> (such as TPHA, TPPA or an EIA test) detect antibodies to the syphilis bacterium. Once positive, they <strong>usually stay positive for life</strong>, even after successful treatment. A positive result on its own can mean a past, treated infection.</li>
<li><strong>Non-treponemal tests</strong> (VDRL or RPR) measure how active the infection is. The level falls after treatment, so doctors use it to check that treatment has worked.</li>
</ul>
<p><strong>Rapid tests</strong> using a finger-prick of blood give a result within minutes, so treatment can sometimes start on the same visit.</p>
<p><strong>Timing:</strong> antibodies may not show up until a few weeks after infection. If you test soon after a risk and the result is negative, the doctor may ask you to repeat it later. If you have a sore, the doctor may also test the sore itself.</p>
<p>Anyone with syphilis should also be tested for HIV, as the two often go together. See our guide to <a href="/articles/hiv-malaysia/">HIV testing, PrEP and treatment</a>.</p>` },
      { id: 'treatment', h: 'Syphilis treatment', tocLabel: 'Treatment', html: `<p>Under the Ministry of Health’s antibiotic guideline:</p>
<ul>
<li><strong>Early syphilis</strong> (infected within about the past 2 years) is treated with a <strong>single injection of benzathine penicillin</strong>.</li>
<li><strong>Late or latent syphilis</strong> of unknown duration needs <strong>one injection a week for 3 weeks</strong>.</li>
<li>People allergic to penicillin can take <strong>doxycycline tablets</strong> for 2 to 4 weeks, except in pregnancy, when penicillin is needed.</li>
<li>Neurosyphilis is treated in hospital with penicillin through a drip.</li>
</ul>
<p>Some people get a fever, headache and aches within a day of the first injection, as the bacteria die. This settles within a day and isn’t an allergy.</p>
<p><strong>After treatment:</strong></p>
<ul>
<li>Don’t have sex until you and your partner have finished treatment and the sore or rash has gone. The NHS advises waiting 2 weeks after treatment ends.</li>
<li>Go back for <strong>repeat blood tests</strong>, usually at 6 and 12 months, to make sure the infection has cleared.</li>
<li>Recent sexual partners need testing and treatment, even if they feel well. The clinic can help you tell them.</li>
<li>Treatment doesn’t make you immune. You can catch syphilis again.</li>
</ul>` },
      { id: 'others', h: 'Gonorrhoea and chlamydia', tocLabel: 'Gonorrhoea and chlamydia', html: `<p>These are the other common bacterial STIs. Both are often <strong>silent</strong>, especially in women.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Gonorrhoea (kencing nanah)</th><th>Chlamydia</th></tr></thead>
<tbody>
<tr><td>Typical symptoms</td><td>Pus-like discharge from the penis and burning when passing urine in men. Most women have no symptoms, or unusual discharge.</td><td>Often none. Sometimes discharge, burning when passing urine, bleeding after sex or pain in the testicles.</td></tr>
<tr><td>Test</td><td>Urine test for men, or a swab, which women can often take themselves</td><td>Urine test or swab</td></tr>
<tr><td>Treatment</td><td>An antibiotic injection (ceftriaxone)</td><td>A course of antibiotic tablets</td></tr>
</tbody></table></div>
<ul>
<li>Untreated, both can cause <strong>pelvic inflammatory disease</strong>, ectopic pregnancy and <strong>infertility</strong>, and can be passed to a baby at birth.</li>
<li>Throat and rectal infections are common and usually cause no symptoms, so tell the doctor what kind of sex you have had, so they can test the right places.</li>
<li>Gonorrhoea is becoming <strong>resistant to antibiotics</strong>, including in Southeast Asia. Don’t take leftover antibiotics or buy them without a prescription: see a doctor and go back for a test of cure if advised.</li>
</ul>` },
      { id: 'where', h: 'Where to get a confidential STI test in Malaysia', tocLabel: 'Where to get tested', html: `<ul>
<li><strong>Government health clinics (Klinik Kesihatan):</strong> outpatient fees for Malaysians are very low. Many clinics test for syphilis and HIV, and some offer free HIV PrEP.</li>
<li><strong>Private GP clinics:</strong> you can usually be seen quickly, including in the evening. Ask for an “STI screen” and say which infections you want tested.</li>
<li><strong>Community and NGO clinics</strong> offer testing and support in some cities, and HIV self-test kits are sold at pharmacies.</li>
</ul>
<p><strong>Confidentiality:</strong> doctors must keep your medical information confidential. Notifying the Ministry of Health is for public health and isn’t shared with your employer or family.</p>
<p><strong>Who should test, and when:</strong></p>
<ul>
<li>anyone with symptoms such as a sore, rash, discharge or burning</li>
<li>after condomless sex with a new or casual partner</li>
<li>if a partner has an STI</li>
<li>at least yearly if you have several partners, and every 3 to 6 months for men who have sex with men at higher risk</li>
<li>in pregnancy, at the first antenatal visit, which is routine in Malaysia</li>
</ul>
${figure('doctor-notes', 'A doctor in blue gloves writing notes on a clipboard', 'A full STI screen usually means a blood test for syphilis and HIV, plus a urine test or swabs for gonorrhoea and chlamydia.')}` },
      { id: 'prevention', h: 'Prevention', tocLabel: 'Prevention', html: `<ul>
<li><strong>Use condoms</strong> every time, for vaginal, anal and oral sex. They greatly reduce, but don’t remove, the risk of syphilis, as sores can be on skin a condom doesn’t cover.</li>
<li><strong>Test regularly</strong> if you have new or several partners, and encourage partners to test.</li>
<li><strong>HIV PrEP</strong> prevents HIV but not other STIs, so regular STI testing is part of PrEP care.</li>
<li>In May 2026 the World Health Organization recommended <strong>doxy-PEP</strong>, a dose of doxycycline after sex, for some men who have sex with men and transgender women at high risk. It isn’t part of Ministry of Health policy in Malaysia, so discuss it with a doctor rather than self-medicating.</li>
<li>The <strong>hepatitis B</strong> and <strong>HPV</strong> vaccines protect against two other sexually transmitted infections. See our guides to <a href="/articles/hepatitis-b-malaysia/">hepatitis B</a> and the <a href="/articles/hpv-vaccine-malaysia/">HPV vaccine</a>.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get an STI test',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'GP clinics can test for syphilis, HIV, gonorrhoea and chlamydia, and treat most infections on the spot. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends if you’d rather not take time off work.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What are the first signs of syphilis?', 'Usually a firm, painless sore on the genitals, anus or mouth about 3 weeks after infection. It heals on its own, but the infection remains and needs treatment.'],
      ['What does a syphilis rash look like?', 'A rash that usually doesn’t itch, often on the palms and soles, sometimes with fever, swollen glands and patchy hair loss. It appears weeks to months after the sore.'],
      ['Can syphilis be cured?', 'Yes. Penicillin injections cure syphilis. Damage already done in late syphilis may not reverse, which is why early testing matters.'],
      ['What does a positive TPHA test mean?', 'It shows you have had syphilis at some point. It usually stays positive for life, even after cure, so doctors use it together with a VDRL or RPR test to tell whether the infection is active.'],
      ['Where can I get an STI test in Malaysia?', 'At government health clinics, private GP clinics and some community clinics. Testing is confidential.'],
      ['What are the symptoms of gonorrhoea (kencing nanah)?', 'Men often have pus-like discharge and burning when passing urine. Most women have no symptoms. It is diagnosed with a urine test or swab.'],
      ['Can I have chlamydia without symptoms?', 'Yes, most people with chlamydia have no symptoms. Untreated, it can cause infertility, so test after condomless sex with a new partner.'],
      ['Do I need to tell my partner?', 'Yes. Recent partners need testing and treatment, or you can be reinfected. The clinic can help you tell them.'],
    ],
    sources: [
      ['CodeBlue — Youths below 21 comprised 22% of gonorrhoea cases in 2022 in Malaysia (Jun 2023)', 'https://codeblue.galencentre.org/2023/06/youths-below-21-comprised-22-of-gonorrhoea-cases-in-2022-in-malaysia/'],
      ['The Star — Malaysia retains WHO validation for eliminating mother-to-child HIV, syphilis transmission (19 Oct 2026)', 'https://www.thestar.com.my/news/nation/2026/10/19/malaysia-retains-who-validation-for-eliminating-mother-to-child-hiv-syphilis-transmission'],
      ['Ministry of Health Malaysia — National Antimicrobial Guideline: sexually transmitted infections', 'https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a13-sexually-transmitted-infections'],
      ['World Health Organization — Syphilis fact sheet (May 2025)', 'https://www.who.int/news-room/fact-sheets/detail/syphilis'],
      ['US CDC — About syphilis (Jan 2025)', 'https://www.cdc.gov/syphilis/about/index.html'],
      ['US CDC — Laboratory recommendations for syphilis testing (MMWR, Feb 2024)', 'https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm'],
      ['NHS — Syphilis (reviewed Mar 2026)', 'https://www.nhs.uk/conditions/syphilis/'],
      ['World Health Organization — Gonorrhoea fact sheet (Oct 2025)', 'https://www.who.int/news-room/fact-sheets/detail/gonorrhoea-(neisseria-gonorrhoeae-infection)'],
      ['World Health Organization — Chlamydia fact sheet (Nov 2025)', 'https://www.who.int/news-room/fact-sheets/detail/chlamydia'],
      ['World Health Organization — First recommendation on doxycycline post-exposure prophylaxis (28 May 2026)', 'https://www.who.int/news/item/28-05-2026-who-issues-first-recommendation-on-doxycycline-post-exposure-prophylaxis-to-help-prevent-sexually-transmitted-infections'],
    ],
    related: ['hiv-malaysia', 'hepatitis-b-malaysia', 'hpv-vaccine-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'hepatitis-b-malaysia',
    title: 'Hepatitis B in Malaysia: symptoms, test results, the adult vaccine and living with it',
    crumb: 'Hepatitis B',
    desc: 'Hepatitis B explained: how it spreads, symptoms, what HBsAg and anti-HBs results mean, the vaccine for adults, FOMEMA and work, and treatment for chronic hepatitis B.',
    excerpt: 'About 1 million Malaysians live with hepatitis B, and most don’t know it. How it spreads and doesn’t, what your blood test results mean, who should get the adult vaccine, what it means for work, and how chronic hepatitis B is monitored and treated.',
    standfirst: 'Hepatitis B is a virus that infects the liver. Most adults who catch it clear it, but people infected as babies or young children often carry it for life, usually without symptoms, and it is the leading cause of liver cancer in Malaysia. A simple blood test tells you whether you have it or are protected, and a safe vaccine prevents it.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Hepatitis B', 'Hepatitis B vaccine', 'HBsAg'],
    image: 'medic-stethoscope', imageAlt: 'A doctor in blue scrubs and safety glasses holding a stethoscope',
    keyPoints: [
      'About 1 million Malaysians are estimated to live with chronic hepatitis B. In one community study, only about 1 in 8 knew they had it.',
      'It spreads through blood and body fluids: from mother to baby at birth, through sex, and through shared needles, razors or toothbrushes. It doesn’t spread through sharing food, utensils, hugging or coughing.',
      'The HBsAg test shows whether you have the virus now. The anti-HBs test shows whether you are protected.',
      'Babies in Malaysia have been vaccinated since 1989. Adults who aren’t immune can have 3 doses, usually at 0, 1 and 6 months, at a GP clinic.',
      'People with chronic hepatitis B need check-ups every 6 to 12 months. Antiviral tablets, when needed, greatly lower the risk of cirrhosis and liver cancer.',
    ],
    sections: [
      { id: 'what', h: 'What is hepatitis B? (Apa itu hepatitis B)', tocLabel: 'What it is', html: `<p>Hepatitis B is a liver infection caused by the hepatitis B virus (HBV). It can be:</p>
<ul>
<li><strong>acute:</strong> a new infection in the first 6 months. Most healthy adults clear the virus within a few months.</li>
<li><strong>chronic:</strong> when the virus stays for more than 6 months. This happens to about <strong>9 in 10 babies</strong> infected at birth, about 3 in 10 young children, but <strong>fewer than 1 in 20 adults</strong>.</li>
</ul>
<p>Over decades, chronic hepatitis B can scar the liver (<strong>cirrhosis</strong>) and cause <strong>liver cancer</strong>. Hepatitis B is the leading cause of liver cancer in Malaysia.</p>
<p><strong>In Malaysia:</strong> before vaccination began in 1989, about 5 to 7% of people carried the virus. Rates are now much lower among those born after 1989. Even so, an estimated 1 million people live with chronic hepatitis B. Notified cases rose from 3,781 in 2021 to 8,138 in 2025, partly because more people are being tested, and Malaysia aims to eliminate hepatitis B as a public health threat by 2030.</p>` },
      { id: 'spread', h: 'How hepatitis B spreads, and how it doesn’t', tocLabel: 'How it spreads', html: `<div class="table-wrap"><table>
<thead><tr><th>Can spread through</th><th>Doesn’t spread through</th></tr></thead>
<tbody>
<tr><td>Mother to baby at birth</td><td>Sharing food, drinks or utensils</td></tr>
<tr><td>Sex without a condom</td><td>Hugging, kissing or holding hands</td></tr>
<tr><td>Sharing needles or drug equipment</td><td>Coughing or sneezing</td></tr>
<tr><td>Sharing razors, toothbrushes or nail clippers</td><td>Breastfeeding</td></tr>
<tr><td>Unsterile tattoo, piercing or medical equipment</td><td>Food or water</td></tr>
</tbody></table></div>
<p>So people with hepatitis B can work, eat with family and friends, and live normally. Household members and sexual partners should be tested and vaccinated.</p>` },
      { id: 'symptoms', h: 'Symptoms of hepatitis B', tocLabel: 'Symptoms', html: `<p>Many people, especially children, have <strong>no symptoms</strong>. When symptoms of a new infection occur, they usually start about 3 months after exposure:</p>
<ul>
<li>yellowing of the skin and eyes (<strong>jaundice</strong>)</li>
<li>dark urine and pale stools</li>
<li>tiredness, fever, loss of appetite, nausea and vomiting</li>
<li>pain in the upper right tummy, and joint pain</li>
</ul>
<p>Chronic hepatitis B is usually silent for years, which is why testing matters. See a doctor promptly if you develop jaundice.</p>` },
      { id: 'tests', h: 'Hepatitis B tests: what your results mean', tocLabel: 'Test results', html: `<p>The main blood tests are:</p>
<ul>
<li><strong>HBsAg</strong> (hepatitis B surface antigen): positive means you have the virus now.</li>
<li><strong>Anti-HBs</strong> (surface antibody): positive means you are protected, from vaccination or past infection. A level of 10 mIU/mL or more counts as protected.</li>
<li><strong>Anti-HBc</strong> (core antibody): positive means you have been infected at some time.</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>HBsAg</th><th>Anti-HBc</th><th>Anti-HBs</th><th>What it usually means</th></tr></thead>
<tbody>
<tr><td>Negative</td><td>Negative</td><td>Negative</td><td><strong>Not immune</strong>: get vaccinated</td></tr>
<tr><td>Negative</td><td>Negative</td><td>Positive</td><td><strong>Protected by vaccination</strong></td></tr>
<tr><td>Negative</td><td>Positive</td><td>Positive</td><td><strong>Past infection, now cleared</strong>, and protected</td></tr>
<tr><td>Positive</td><td>Positive</td><td>Negative</td><td><strong>Current infection</strong>: acute or chronic, depending on further tests</td></tr>
</tbody></table></div>
<p>If you have hepatitis B, your doctor will also check your <strong>liver function</strong> (ALT), the amount of virus (<strong>HBV DNA</strong>), and HBeAg, and may arrange an ultrasound or a FibroScan to check for liver scarring. Other combinations, such as anti-HBc positive on its own, need a doctor to interpret.</p>
<p><strong>In pregnancy:</strong> antenatal clinics in Malaysia screen pregnant women for hepatitis B. Babies of mothers with hepatitis B are given the vaccine and an immunoglobulin injection soon after birth, and some mothers are given antiviral tablets late in pregnancy, which together prevent most infections in babies.</p>` },
      { id: 'vaccine', h: 'The hepatitis B vaccine', tocLabel: 'The vaccine', html: `<p><strong>Children:</strong> under the National Immunisation Programme, babies get a hepatitis B dose within 24 hours of birth, then the 6-in-1 vaccine at 2, 3 and 5 months with a booster at 18 months. In December 2025 the Ministry of Health confirmed it would keep the universal birth dose. See our <a href="/articles/baby-vaccination-schedule-malaysia/">baby vaccination schedule</a>.</p>
<p><strong>Adults:</strong> if you were born before 1989 or aren’t sure you were vaccinated, ask for a blood test. If you aren’t immune, the usual adult course is:</p>
<ul>
<li><strong>3 doses</strong>, at 0, 1 and 6 months</li>
<li>faster schedules are available, for example before travel or work, with an extra dose at 12 months</li>
<li>a <strong>combined hepatitis A and B vaccine</strong> is also available, usually given at 0, 1 and 6 months</li>
</ul>
<p><strong>Especially recommended for:</strong></p>
<ul>
<li>partners and household members of someone with hepatitis B</li>
<li>healthcare workers, carers and others who may come into contact with blood</li>
<li>people with chronic liver disease, kidney disease or on dialysis, diabetes, HIV or hepatitis C</li>
<li>people who have several sexual partners or an STI, and people who inject drugs</li>
<li>travellers and people moving to areas where hepatitis B is common</li>
</ul>
<p>Protection lasts at least 20 years and probably for life, so healthy people don’t need routine boosters. Healthcare workers and others at ongoing risk usually have an <strong>anti-HBs test 1 to 2 months after the last dose</strong> to confirm they responded. If not, a second course is given. Side effects are usually just a sore arm and, sometimes, a mild fever.</p>
${figure('vaccination', 'A vaccine injection being given in the upper arm', 'The adult hepatitis B vaccine is usually 3 doses over 6 months.')}` },
      { id: 'work', h: 'Hepatitis B, FOMEMA and work', tocLabel: 'Work and FOMEMA', html: `<ul>
<li><strong>Foreign workers:</strong> hepatitis B is one of the conditions tested in the FOMEMA medical exam. A positive HBsAg result currently means the worker is classed as unsuitable for employment in Malaysia. FOMEMA recorded 3,347 hepatitis B cases among foreign workers in 2023. See our guide to the <a href="/articles/fomema-medical-check-up/">FOMEMA medical check-up</a>.</li>
<li><strong>Malaysian workers:</strong> some employers, especially in healthcare, ask for a hepatitis B test or proof of vaccination. Having hepatitis B doesn’t stop you doing most jobs, and international guidance says healthcare workers with hepatitis B shouldn’t automatically be excluded from work.</li>
<li><strong>Food handlers</strong> need a typhoid injection rather than a hepatitis B test, as hepatitis B doesn’t spread through food. See our guide to the <a href="/articles/typhoid-injection-food-handlers-malaysia/">typhoid injection for food handlers</a>.</li>
</ul>` },
      { id: 'living', h: 'Living with chronic hepatitis B', tocLabel: 'Living with it', html: `<ul>
<li><strong>Regular check-ups:</strong> blood tests every 6 to 12 months, and for many people an ultrasound (often with an AFP blood test) every 6 months to look for early liver cancer.</li>
<li><strong>Treatment:</strong> not everyone needs medicine. If the virus is active or the liver is damaged, a specialist may start <strong>antiviral tablets</strong> such as tenofovir or entecavir, usually taken long term. They control the virus and greatly lower the risk of cirrhosis and liver cancer. They are available at government hospitals.</li>
<li><strong>Protect your liver:</strong> avoid alcohol, keep to a healthy weight, and check with your doctor before taking herbal remedies or new medicines.</li>
<li><strong>Protect others:</strong> make sure your partner and family are tested and vaccinated, use condoms with partners who aren’t immune, and don’t share razors or toothbrushes.</li>
<li><strong>Get vaccinated against hepatitis A</strong> if you aren’t immune, as a second infection can harm your liver.</li>
</ul>
<p>Malaysia’s hepatitis services are still reaching only a minority of people with the infection, partly because it causes no symptoms. If you have a family member with hepatitis B, or were born before 1989 and have never been tested, ask your doctor for a test.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get tested or vaccinated',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'GP clinics can test for hepatitis B, give the adult vaccine and refer you to a specialist if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states. Call ahead to check the vaccine is in stock.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/fomema-clinics/', 'FOMEMA clinics']],
    faqs: [
      ['What is hepatitis B?', 'A virus that infects the liver. Most adults clear it, but people infected as babies or young children often carry it for life, which can lead to cirrhosis and liver cancer.'],
      ['How do you get hepatitis B?', 'Through blood and body fluids: from mother to baby at birth, through sex, and by sharing needles, razors or toothbrushes. Not through sharing food, utensils, hugging or coughing.'],
      ['What does a positive HBsAg mean?', 'That you have the hepatitis B virus now. Further tests show whether the infection is new or chronic and whether you need treatment.'],
      ['How many doses of hepatitis B vaccine do adults need?', 'Usually 3 doses, at 0, 1 and 6 months. Faster schedules are available, with an extra dose at 12 months.'],
      ['Do I need a hepatitis B booster?', 'Healthy people who completed the course usually don’t. Healthcare workers and others at ongoing risk may have a blood test to check they responded.'],
      ['Is there a combined hepatitis A and B vaccine?', 'Yes. It is usually given as 3 doses at 0, 1 and 6 months, and protects against both viruses.'],
      ['Can hepatitis B be cured?', 'Chronic hepatitis B usually can’t be cured, but antiviral tablets control it well and greatly lower the risk of liver damage and cancer.'],
      ['Can a foreign worker with hepatitis B work in Malaysia?', 'Under current FOMEMA rules, a worker who tests positive for hepatitis B is classed as unsuitable for employment.'],
    ],
    sources: [
      ['Chronic viral hepatitis in Malaysia: “where are we now?” (2017)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5663777/'],
      ['BMC Gastroenterology — Awareness and treatment of chronic hepatitis B in Malaysia (2022)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9356500/'],
      ['The Star — Good progress against hepatitis (31 Jul 2026)', 'https://www.thestar.com.my/news/nation/2026/07/31/good-progress-against-hepatitis'],
      ['Medical Journal of Malaysia — Antenatal hepatitis B screening in Kedah (Jul 2026)', 'https://mail.e-mjm.org/2026/v81n4/antenatal-hepatitis-B-screening.pdf'],
      ['CodeBlue — MOH maintains universal hepatitis B vaccination for newborns (Dec 2025)', 'https://codeblue.galencentre.org/2025/12/moh-maintains-universal-hepatitis-b-vaccination-for-newborns/'],
      ['CodeBlue — Additional foreign worker medical screening necessary, says MMA (Jan 2024)', 'https://codeblue.galencentre.org/?p=46883'],
      ['World Health Organization — Hepatitis B fact sheet (Jul 2026)', 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-b'],
      ['US CDC — Hepatitis B testing and serology (Aug 2026)', 'https://www.cdc.gov/hepatitis-b/hcp/diagnosis-testing/index.html'],
      ['US CDC — Hepatitis B clinical overview (Aug 2025)', 'https://www.cdc.gov/hepatitis-b/hcp/clinical-overview/index.html'],
      ['NHS — Hepatitis B vaccine', 'https://www.nhs.uk/vaccinations/hepatitis-b-vaccine/'],
    ],
    related: ['fomema-medical-check-up', 'baby-vaccination-schedule-malaysia', 'syphilis-sti-testing-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'pap-smear-hpv-test-malaysia',
    title: 'Pap smear and HPV test in Malaysia: who needs one, how often, what to expect and free options',
    crumb: 'Pap smear and HPV test',
    desc: 'Pap smear and HPV DNA test in Malaysia: who should be screened and how often, what happens during the test, how to prepare, what results mean, and free screening options.',
    excerpt: 'Cervical cancer is one of the most common cancers in Malaysian women, and one of the most preventable. Who should have a Pap smear or HPV test and how often, what happens on the day, what your results mean, and where to get screened free.',
    standfirst: 'A Pap smear and the newer HPV test check the cervix (the neck of the womb) for changes that could turn into cancer years later. Both take only a few minutes. Yet fewer than half of Malaysian women aged 30 to 65 have been screened recently. Here is who needs it, what to expect, and how to get it free or at low cost.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Pap smear', 'HPV test', 'Cervical cancer screening'],
    image: 'treatment-room', imageAlt: 'A clean, empty clinic treatment room with an examination bed',
    keyPoints: [
      'Cervical cancer is the 3rd most common cancer in Malaysian women, with about 2,000 new cases and nearly 1,000 deaths a year. Almost all cases are caused by the human papillomavirus (HPV).',
      'Ministry of Health guidance: sexually active women aged 20 to 65 should have a Pap smear yearly for 2 years, then every 3 years if the results are normal.',
      'The HPV DNA test is more sensitive. It is recommended from age 30, and if it is negative you usually don’t need another for 5 years. You can often take the sample yourself.',
      'Pap smears are free at government health clinics, and free HPV tests are available to eligible women through LPPKN and Program ROSE.',
      'Women who have had the HPV vaccine still need screening.',
    ],
    sections: [
      { id: 'why', h: 'Why cervical screening matters', tocLabel: 'Why it matters', html: `<p>Cervical cancer develops slowly. Long-lasting infection with high-risk types of <strong>HPV</strong>, a very common virus spread through sexual contact, can cause abnormal cells on the cervix. Over 10 to 15 years, some of these can turn into cancer. Screening finds the virus or the abnormal cells early, when simple treatment prevents cancer from developing.</p>
<ul>
<li>International estimates for 2024 put cervical cancer as the <strong>3rd most common cancer in Malaysian women</strong>, with 1,968 new cases and 964 deaths.</li>
<li>Screening coverage is improving but still low: the National Health and Morbidity Survey found that <strong>43.2%</strong> of women aged 30 to 65 had been screened in 2023, up from 23.1% in 2019.</li>
<li>Many cases in Malaysia are still found at a late stage, when treatment is harder.</li>
</ul>` },
      { id: 'who', h: 'Who needs a Pap smear or HPV test, and how often?', tocLabel: 'Who and how often', html: `<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>Who</th><th>How often</th></tr></thead>
<tbody>
<tr><td>Pap smear</td><td>Women aged 20 to 65 who have ever been sexually active</td><td>Yearly for the first 2 years, then every 3 years if normal</td></tr>
<tr><td>HPV DNA test</td><td>Women aged 30 and over (MOH guidance: 30 to 49; LPPKN and Program ROSE offer it to 30 to 65)</td><td>Every 5 years if negative</td></tr>
</tbody></table></div>
<p>Under the Ministry of Health’s HPV testing guideline, women aged 21 to 29 and 50 to 65 are still advised to have Pap smears. The ministry is gradually moving towards HPV testing as the main screening test, so ask the clinic which one suits you.</p>
<ul>
<li><strong>You still need screening if</strong> you have had the HPV vaccine, are in a long-term relationship, or haven’t had sex for some years.</li>
<li><strong>If you have never had any sexual contact</strong>, your risk is very low. Discuss with your doctor whether you need screening.</li>
<li><strong>After a hysterectomy</strong> that removed the cervix for a non-cancer reason, you usually don’t need screening. Check with your doctor if you aren’t sure.</li>
<li><strong>Over 65</strong>, you can usually stop if your recent results have been normal.</li>
<li><strong>If you are pregnant</strong>, tell the doctor or nurse. Routine screening is often postponed until after the birth.</li>
</ul>` },
      { id: 'pap-vs-hpv', h: 'Pap smear vs HPV test: what’s the difference?', tocLabel: 'Pap vs HPV test', html: `<ul>
<li>A <strong>Pap smear</strong> (cervical cytology) looks at cells from the cervix under a microscope for abnormal changes. Malaysia has mostly moved from the conventional smear on a glass slide to <strong>liquid-based cytology</strong>, where the sample is rinsed into a vial of liquid, which gives clearer results.</li>
<li>An <strong>HPV DNA test</strong> looks for the high-risk HPV types that cause almost all cervical cancers. It picks up risk earlier than a Pap smear, so a negative result means you can safely wait 5 years. The sample can be taken by a doctor or nurse, or by you with a soft swab (<strong>self-sampling</strong>).</li>
</ul>
<p>If your HPV test is positive, the same sample or a new one is usually checked with cytology to decide the next step.</p>` },
      { id: 'what-happens', h: 'What happens during a Pap smear', tocLabel: 'What happens', html: `<ol>
<li>You undress from the waist down and lie on the examination bed with your knees bent. You can ask for a female doctor or nurse, or for someone to be with you.</li>
<li>The doctor or nurse gently inserts a <strong>speculum</strong> (sometimes called <em>mulut itik</em>, “duck’s beak”) into the vagina to see the cervix.</li>
<li>A small soft brush is used to collect cells from the cervix. This takes a few seconds.</li>
</ol>
<p>The test itself takes <strong>less than 5 minutes</strong>, and the visit about 10 minutes. It can feel uncomfortable but shouldn’t be painful. Tell the doctor if it hurts. You can ask them to stop at any time, or to use a smaller speculum. Light spotting afterwards is normal.</p>
<p><strong>How to prepare:</strong></p>
<ul>
<li>Book the test for a time when you <strong>aren’t having your period</strong>, ideally in the middle of your cycle.</li>
<li>For 24 to 48 hours before, avoid sex, and don’t use vaginal creams, pessaries, lubricants or douches.</li>
</ul>
${figure('nurse-stethoscope', 'A nurse with a stethoscope in a clinic', 'Screening takes only a few minutes and can be done at government health clinics, LPPKN clinics and private clinics.')}` },
      { id: 'results', h: 'Understanding your results', tocLabel: 'Your results', html: `<div class="table-wrap"><table>
<thead><tr><th>Result</th><th>What it means</th><th>Usual next step</th></tr></thead>
<tbody>
<tr><td>Normal / HPV negative</td><td>No abnormal cells or high-risk HPV found</td><td>Routine screening (3 years for Pap, 5 years for HPV)</td></tr>
<tr><td>Unsatisfactory</td><td>The sample couldn’t be read</td><td>Repeat the test, usually within 3 months</td></tr>
<tr><td>ASC-US or LSIL</td><td>Mild cell changes, usually caused by HPV and often clearing by themselves</td><td>Repeat test, often in 1 year, or colposcopy</td></tr>
<tr><td>ASC-H or HSIL</td><td>More serious cell changes that could become cancer if untreated</td><td>Colposcopy</td></tr>
<tr><td>HPV 16 or 18 positive</td><td>The two highest-risk HPV types</td><td>Colposcopy</td></tr>
<tr><td>Other high-risk HPV positive</td><td>A high-risk type other than 16 or 18</td><td>Cytology on the sample, then a repeat test in 1 year or colposcopy</td></tr>
</tbody></table></div>
<p>An abnormal result <strong>doesn’t mean you have cancer</strong>. Most HPV infections clear within 1 to 2 years. A <strong>colposcopy</strong> is a closer look at the cervix with a magnifying instrument, done in a clinic. If abnormal cells are found, they can be removed with a quick procedure, such as LLETZ (LEEP), which usually prevents cancer.</p>` },
      { id: 'free', h: 'Where to get a free or low-cost Pap smear or HPV test', tocLabel: 'Free options', html: `<ul>
<li><strong>Government health clinics (Klinik Kesihatan):</strong> Pap smears have been free at government facilities since 1998, and some clinics offer HPV testing.</li>
<li><strong>LPPKN (Klinik Nur Sejahtera):</strong> free HPV DNA self-sampling tests for eligible women aged 30 to 65 at participating clinics, under a government subsidy.</li>
<li><strong>Program ROSE:</strong> HPV self-sampling for women aged 30 to 65, free or subsidised depending on nationality and income, with results sent to your phone. It runs with partner hospitals and clinics.</li>
<li><strong>PERKESO Health Screening Programme:</strong> eligible contributors aged 40 and over can have a Pap smear as part of the free screening. See our guide to <a href="/articles/free-health-screening-malaysia/">free health screening in Malaysia</a>.</li>
<li><strong>Private GP and women’s clinics:</strong> you can usually be seen quickly. In January 2026, The Star reported typical private prices of around RM40 for a Pap smear and around RM250 for an HPV DNA test. Prices vary, so ask when you book.</li>
</ul>` },
      { id: 'vaccine', h: 'The HPV vaccine and screening', tocLabel: 'HPV vaccine', html: `<p>Malaysia has vaccinated schoolgirls against HPV since 2010, with coverage above 90%. From 2026 the school programme moved from Form 1 to Year 6 girls. The vaccine prevents most, but not all, cancer-causing HPV infections, and it doesn’t clear an infection you already have. That is why vaccinated women still need screening. See our guide to the <a href="/articles/hpv-vaccine-malaysia/">HPV vaccine in Malaysia</a>.</p>` },
      { id: 'symptoms', h: 'Symptoms that need a doctor', tocLabel: 'Warning symptoms', html: `<p>Screening is for women without symptoms. Don’t wait for your next test if you have:</p>
<ul>
<li>bleeding between periods, after sex, or after the menopause</li>
<li>unusual or smelly vaginal discharge</li>
<li>pain in the pelvis or during sex</li>
</ul>
<p>These are usually caused by something less serious, but they should be checked. Women should also be breast aware: see our guide to <a href="/articles/breast-cancer-screening-malaysia/">breast cancer screening</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get screened',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Many GP clinics offer Pap smears and HPV tests, often with a female doctor available if you ask. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open at weekends. Call ahead to check which tests they offer.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['How often should I have a Pap smear in Malaysia?', 'If you are 20 to 65 and have been sexually active, yearly for the first 2 years, then every 3 years if the results are normal. If you have an HPV test and it is negative, the next one is usually in 5 years.'],
      ['Is a Pap smear painful?', 'It can be uncomfortable but shouldn’t be painful, and takes less than 5 minutes. Tell the doctor if it hurts. You can ask them to stop, or to use a smaller speculum.'],
      ['What is the difference between a Pap smear and an HPV test?', 'A Pap smear looks for abnormal cells on the cervix. An HPV test looks for the high-risk virus that causes those changes, so it picks up risk earlier and is repeated less often.'],
      ['Where can I get a free Pap smear?', 'At government health clinics. Eligible women aged 30 to 65 can also get a free HPV test through LPPKN or Program ROSE, and PERKESO contributors aged 40 and over can have a Pap smear in its free health screening.'],
      ['How much is a Pap smear at a private clinic?', 'Prices vary. In January 2026 The Star reported around RM40 for a Pap smear and around RM250 for an HPV DNA test at private clinics.'],
      ['Can I have a Pap smear during my period?', 'It is best to book for a time when you aren’t having your period, as blood can make the sample harder to read.'],
      ['Do I need a Pap smear if I’ve had the HPV vaccine?', 'Yes. The vaccine doesn’t protect against every cancer-causing HPV type, so vaccinated women still need regular screening.'],
      ['Does an abnormal Pap smear mean cancer?', 'No. Most abnormal results are mild changes caused by HPV that often clear on their own. Some need a closer look (colposcopy) and simple treatment to stop them turning into cancer.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Guidelines for primary HPV testing in cervical cancer screening in Malaysia (2019, edited 2021)', 'https://hq.moh.gov.my/bpkk/images/3.Penerbitan/2.Orang_Awam/5.Kesihatan_Dewasa/2.PDF/3Guidelines_For_Primary_HPV_Testing_In_Cervical_Cancer_Screening_in_Malaysia.pdf'],
      ['International Agency for Research on Cancer — GLOBOCAN Malaysia fact sheet', 'https://gco.iarc.who.int/media/globocan/factsheets/populations/458-malaysia-fact-sheet.pdf'],
      ['World Health Organization — Cervical cancer fact sheet (Jul 2026)', 'https://www.who.int/news-room/fact-sheets/detail/cervical-cancer'],
      ['MyGOV — Program saringan kanser serviks ujian HPV DNA oleh LPPKN (Aug 2026)', 'https://www.malaysia.gov.my/my/topics/program-saringan-kanser-serviks-ujian-hpv-dna-oleh-lppkn'],
      ['Program ROSE — Who should be screened', 'https://www.programrose.org/who-should-be-screened'],
      ['CodeBlue — Late-stage cancer detection rises to 65%: Malaysia’s new cancer registry (Jul 2024)', 'https://codeblue.galencentre.org/2024/07/late-stage-cancer-detection-rises-to-65-malaysias-new-cancer-registry/'],
      ['The Star — Expand HPV DNA testing to strengthen cervical cancer screening (11 Jan 2026)', 'https://www.thestar.com.my/news/focus/2026/01/11/expand-hpv-dna-testing-to-strengthen-cervical-cancer-screening'],
      ['The Star — Year six HPV shots to bolster fight against cancer (11 Jan 2026)', 'https://www.thestar.com.my/news/nation/2026/01/11/year-six-hpv-shots-to-bolster-fight-against-cancer'],
      ['NHS — What happens at your cervical screening appointment (Jun 2025)', 'https://www.nhs.uk/tests-and-treatments/cervical-screening/what-happens/'],
      ['US National Cancer Institute — Understanding abnormal HPV and Pap test results', 'https://www.cancer.gov/types/cervical/understanding-abnormal-hpv-and-pap-test-results'],
    ],
    related: ['hpv-vaccine-malaysia', 'breast-cancer-screening-malaysia', 'free-health-screening-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tetanus-injection-att-malaysia',
    title: 'Tetanus injection (ATT) in Malaysia: when you need one after a cut, rusty nail or bite',
    crumb: 'Tetanus injection (ATT)',
    desc: 'Do you need a tetanus injection (ATT, suntikan tetanus)? When a cut, rusty nail, bite or burn needs a jab, booster intervals, the Malaysian schedule, pregnancy and side effects.',
    excerpt: 'Tetanus is rare in Malaysia but often fatal, and it can follow a small, dirty wound. When a cut, rusty nail, animal bite or burn needs a tetanus injection (ATT), how often adults need a booster, and what vaccines Malaysian children and pregnant women get.',
    standfirst: 'Tetanus is a serious infection that can follow even a small cut, puncture or graze contaminated with soil, dust or rust. It can’t be passed between people, and it is almost entirely preventable with a vaccine. In Malaysia the tetanus jab is often called ATT (anti-tetanus toxoid) or suntikan tetanus. Here is when you need one.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Tetanus', 'Tetanus toxoid', 'Suntikan tetanus'],
    image: 'vaccination', imageAlt: 'A vaccine injection being given in the upper arm',
    keyPoints: [
      'Tetanus is caused by bacteria whose spores live in soil, dust, manure and on rusty or dirty objects. They enter through wounds and make a toxin that causes painful muscle spasms and lockjaw.',
      'After a clean, minor cut, you need a booster if your last tetanus dose was 10 or more years ago. After a dirty or deep wound, you need one if it was 5 or more years ago.',
      'If you have never been fully vaccinated, or don’t know, and the wound is dirty or deep, you may need tetanus immunoglobulin as well as the vaccine.',
      'Malaysian children get 6 tetanus doses: at 2, 3, 5 and 18 months, at 7 years and at 15 years. Adults should have a booster about every 10 years.',
      'Pregnant women get free tetanus-containing vaccines at government clinics, including Tdap, to protect themselves and the baby.',
    ],
    sections: [
      { id: 'what', h: 'What is tetanus?', tocLabel: 'What it is', html: `<p>Tetanus is caused by <em>Clostridium tetani</em>. Its spores are found everywhere in the environment, including <strong>soil, dust, ash and animal and human faeces</strong>, and on rusty or dirty objects such as nails, wire and tools. The rust itself doesn’t cause tetanus; it is the dirt on the object, and the deep puncture it makes, that matter.</p>
<p>When spores get into a wound, especially a deep one with little air, they make a toxin that attacks the nerves. Tetanus doesn’t spread from person to person, and having it <strong>doesn’t make you immune</strong>, so people who recover still need vaccinating.</p>` },
      { id: 'symptoms', h: 'Symptoms of tetanus', tocLabel: 'Symptoms', html: `<p>Symptoms usually start <strong>3 to 21 days</strong> after the injury, most often within 2 weeks, and the wound may already have healed:</p>
<ul>
<li>stiffness and cramping of the jaw (<strong>lockjaw</strong>), so you can’t open your mouth</li>
<li>stiff neck, difficulty swallowing</li>
<li>painful muscle stiffness and spasms that spread down the body, which can be set off by noise or touch</li>
<li>fever, sweating, and changes in blood pressure and heart rate</li>
</ul>
<p>Tetanus is a medical emergency needing intensive care. Even with treatment, it can be fatal, especially in older people. In one case reported by Malaysian doctors in 2024, a 63-year-old man in Seremban who cut his knee after falling into a drain developed lockjaw 8 days later and died despite treatment.</p>
<p><strong>Call <a href="tel:999">999</a> or go to an emergency department</strong> if someone develops jaw stiffness, difficulty swallowing or muscle spasms after an injury.</p>` },
      { id: 'when', h: 'Do I need a tetanus injection after a wound?', tocLabel: 'After a wound', html: `<p>It depends on the type of wound and when you last had a tetanus vaccine:</p>
<div class="table-wrap"><table>
<thead><tr><th>Your vaccination history</th><th>Clean, minor wound</th><th>Dirty, deep or tetanus-prone wound</th></tr></thead>
<tbody>
<tr><td>Fully vaccinated, last dose under 5 years ago</td><td>No jab needed</td><td>No jab needed</td></tr>
<tr><td>Fully vaccinated, last dose 5 to 10 years ago</td><td>No jab needed</td><td><strong>Booster</strong></td></tr>
<tr><td>Fully vaccinated, last dose 10 or more years ago</td><td><strong>Booster</strong></td><td><strong>Booster</strong></td></tr>
<tr><td>Not fully vaccinated, or don’t know</td><td><strong>Vaccine</strong>, and complete the course</td><td><strong>Vaccine and tetanus immunoglobulin</strong>, and complete the course</td></tr>
</tbody></table></div>
<p><strong>Tetanus-prone wounds</strong> include:</p>
<ul>
<li>puncture wounds, such as stepping on a nail or a gardening injury</li>
<li>wounds contaminated with soil, manure, faeces or saliva, including <strong>animal and human bites</strong></li>
<li>wounds with something stuck in them, or with dead or crushed tissue</li>
<li>burns, crush injuries and broken bones that pierce the skin</li>
<li>wounds that weren’t cleaned for several hours</li>
</ul>
<p>Get the jab <strong>as soon as possible</strong>, ideally on the day. If you missed that, it is still worth getting later. <strong>Tetanus immunoglobulin</strong> is an injection of ready-made antibodies for high-risk cases, usually given in a hospital emergency department.</p>
<p>Antibiotics don’t prevent tetanus. For dog and cat bites, a doctor will also check whether you need rabies vaccination.</p>` },
      { id: 'first-aid', h: 'First aid for cuts and puncture wounds', tocLabel: 'First aid', html: `<ol>
<li>Wash your hands, then <strong>rinse the wound well under clean running water</strong> for several minutes and wash around it with soap.</li>
<li>Remove visible dirt. Don’t dig deep for objects that are stuck in. Leave those for a doctor.</li>
<li>Stop bleeding with firm pressure using a clean cloth, then cover with a clean dressing.</li>
<li>See a doctor if the wound is deep, dirty, gaping, caused by a bite or a rusty or dirty object, or you aren’t sure when your last tetanus jab was.</li>
</ol>
<p><strong>Go to an emergency department</strong> for deep or heavily contaminated wounds, bleeding that won’t stop, or wounds that may need stitches or cleaning under anaesthetic. Deep, dirty wounds need proper cleaning as well as the jab. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>
<p><strong>During floods</strong>, the Ministry of Health advises people with open wounds not to wade, bathe or play in floodwater. Clean and cover any cuts quickly, and check your tetanus status. See our guide to <a href="/articles/floods-health-risks-malaysia/">floods and your health</a>.</p>
${figure('treatment-room', 'A clean, white clinic treatment room with an examination couch', 'GP clinics can clean minor wounds and give a tetanus booster. Deep or very dirty wounds may need an emergency department.')}` },
      { id: 'schedule', h: 'Tetanus vaccines in Malaysia’s immunisation schedule', tocLabel: 'Childhood schedule', html: `<p>Under the National Immunisation Programme, children get six doses of tetanus-containing vaccine, free at government clinics and schools:</p>
<div class="table-wrap"><table>
<thead><tr><th>Age</th><th>Vaccine</th></tr></thead>
<tbody>
<tr><td>2, 3 and 5 months</td><td>6-in-1 vaccine (diphtheria, tetanus, whooping cough, polio, hepatitis B and Hib)</td></tr>
<tr><td>18 months</td><td>6-in-1 booster</td></tr>
<tr><td>7 years (Standard 1)</td><td>DT (diphtheria and tetanus)</td></tr>
<tr><td>15 years (Form 3)</td><td>Tetanus booster (ATT)</td></tr>
</tbody></table></div>
<p>Six doses give long-lasting protection. See our <a href="/articles/baby-vaccination-schedule-malaysia/">baby and child vaccination schedule</a>.</p>` },
      { id: 'adults', h: 'Tetanus boosters for adults', tocLabel: 'Adult boosters', html: `<ul>
<li>A booster about <strong>every 10 years</strong> keeps protection up. Doctors may use a vaccine against tetanus alone (ATT), tetanus and diphtheria (Td), or tetanus, diphtheria and whooping cough (Tdap).</li>
<li>If you have <strong>never been vaccinated</strong>, or don’t know, you need a full course of 3 doses, spread over several months. Ask the doctor for the schedule.</li>
<li>Older adults, gardeners, farmers, construction workers and people who travel to remote areas are especially worth checking.</li>
<li>Keep a record of your last dose, for example in your phone, so you can answer the doctor’s question after an injury.</li>
</ul>` },
      { id: 'pregnancy', h: 'Tetanus vaccine in pregnancy', tocLabel: 'In pregnancy', html: `<p>Tetanus vaccination in pregnancy protects both the mother and the newborn baby, as tetanus can infect a baby’s umbilical cord stump after an unclean birth. Malaysia has vaccinated pregnant women against tetanus since 1976.</p>
<ul>
<li>Since <strong>26 May 2025</strong>, the Ministry of Health offers <strong>free Tdap</strong> to pregnant women, which also protects the baby against whooping cough in the first months of life.</li>
<li>According to the government portal, women in their first pregnancy get a tetanus toxoid dose and a Tdap dose, and in later pregnancies a Tdap dose. It is given at Klinik Kesihatan, Klinik Desa and maternal and child health clinics.</li>
<li>Tetanus vaccines are considered safe in pregnancy.</li>
</ul>` },
      { id: 'side-effects', h: 'Side effects of the tetanus injection', tocLabel: 'Side effects', html: `<p>Most people have no problems, or only a <strong>sore, red or swollen arm</strong> for a day or two, sometimes with a small lump at the injection site. Mild fever and tiredness are less common. Serious allergic reactions are very rare. Tell the doctor if you have reacted badly to a vaccine before.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a tetanus injection',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Most GP clinics can clean a minor wound and give a tetanus booster on a walk-in basis. Injuries often happen in the evening or at weekends, so our directory lists clinics open 24 hours and late across Kuala Lumpur, Selangor and other states. For deep or very dirty wounds, go to an emergency department.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['What is an ATT injection?', 'ATT stands for anti-tetanus toxoid, the tetanus vaccine. In Malaysia the term is often used for any tetanus jab given after an injury or as a booster.'],
      ['Do I need a tetanus jab after stepping on a rusty nail?', 'A puncture from a nail counts as a tetanus-prone wound. You need a booster if your last dose was 5 or more years ago, and may also need tetanus immunoglobulin if you were never fully vaccinated.'],
      ['How long does a tetanus injection last?', 'After a full course, protection lasts about 10 years, which is why adults are advised to have a booster every 10 years.'],
      ['How soon after an injury do I need a tetanus injection?', 'As soon as possible, ideally on the same day. If you missed that, it is still worth getting it later.'],
      ['Do I need a tetanus injection after a dog or cat bite?', 'Bites are tetanus-prone wounds, so you may need a booster depending on your last dose. A doctor will also check whether you need rabies vaccination.'],
      ['What are the symptoms of tetanus?', 'Jaw stiffness (lockjaw), a stiff neck, difficulty swallowing and painful muscle spasms, usually 3 to 21 days after the injury. It is an emergency.'],
      ['Is the tetanus vaccine safe in pregnancy?', 'Yes. Malaysia gives pregnant women tetanus-containing vaccines, including free Tdap since May 2025, to protect the mother and baby.'],
      ['Where can I get a tetanus injection?', 'At GP clinics and Klinik Kesihatan. For deep, very dirty or serious wounds, go to a hospital emergency department.'],
    ],
    sources: [
      ['World Health Organization — Tetanus fact sheet (Jul 2026)', 'https://www.who.int/news-room/fact-sheets/detail/tetanus'],
      ['US CDC — Tetanus clinical guidance: wound management (Sep 2026)', 'https://www.cdc.gov/tetanus/hcp/clinical-guidance/index.html'],
      ['US CDC — About tetanus (Sep 2026)', 'https://www.cdc.gov/tetanus/about/index.html'],
      ['UK Health Security Agency — Tetanus: the Green Book, chapter 30 (Jun 2025)', 'https://assets.publishing.service.gov.uk/media/683dceaa81deb72cce2680fc/Tetanus-green_book-chapter-30-02-06-25.pdf'],
      ['MyGOV — Kesihatan ibu hamil (May 2026)', 'https://www.malaysia.gov.my/my/personas/ibu-hamil/fasa-kehamilan/kesihatan-ibu-hamil'],
      ['The Star — Health Ministry offers free Tdap vaccination for pregnant women (26 May 2025)', 'https://www.thestar.com.my/news/nation/2025/05/26/health-ministry-offers-free-tdap-vaccination-for-pregnant-women'],
      ['The Star — Ensure your teenager’s vaccines are up to date (May 2023)', 'https://www.thestar.com.my/lifestyle/health/2023/05/05/ensure-your-teenager039s-vaccines-are-up-to-date'],
      ['Malaysian Orthopaedic Journal — A laceration wound that kills (2024)', 'https://morthoj.org/supplements/moa-2024/Poster/Trauma/ET112.pdf'],
      ['Medical Journal of Malaysia — Neonatal tetanus in Malaysia (2009)', 'https://mail.e-mjm.org/2009/v64n1/Neonatal_Tetanus.pdf'],
      ['New Straits Times — Be prepared for second wave of floods, state health departments told (Nov 2017)', 'https://www.nst.com.my/amp/news/nation/2017/11/300910/be-prepared-second-wave-floods-state-health-depts-told'],
    ],
    related: ['clinic-or-emergency-department', 'floods-health-risks-malaysia', 'baby-vaccination-schedule-malaysia'],
  },
];
