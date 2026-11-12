// Articles published 9 November 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-09';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
const term = (malay, english, note, slug) => `<tr><td><strong>${malay}</strong></td><td>${slug ? `<a href="/articles/${slug}/">${english}</a>` : english}</td><td>${note}</td></tr>`;
const terms = (rows) => `<div class="table-wrap"><table><thead><tr><th>Malay</th><th>English</th><th>Good to know</th></tr></thead><tbody>${rows.map((r) => term(...r)).join('')}</tbody></table></div>`;

export const NOV_2026_H = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'klinik-kesihatan-malaysia',
    title: 'Klinik Kesihatan in Malaysia: waktu operasi, RM1 fees, appointments and services',
    crumb: 'Klinik Kesihatan guide',
    desc: 'A practical guide to Klinik Kesihatan (government clinics): waktu operasi and extended hours, RM1 fees and who gets free treatment, booking through MySejahtera, services and foreigners’ charges.',
    excerpt: 'Malaysia has more than 1,100 government health clinics. When they open, what the RM1 fee covers, who is treated free, how to book through MySejahtera, what services you can get, and when a private GP or a hospital is the better choice.',
    standfirst: 'A Klinik Kesihatan is a government health clinic run by the Ministry of Health. It is the first stop for most public healthcare in Malaysia, from coughs and diabetes care to antenatal check-ups and baby vaccinations. Here is how the opening hours work, what you pay, how to book, and when another kind of clinic may suit you better.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: false,
    about: ['Klinik Kesihatan', 'Government clinic', 'Public healthcare in Malaysia'],
    image: 'clinic-waiting-room', imageAlt: 'Chairs in a clinic waiting room',
    keyPoints: [
      'Malaysia had 1,131 Klinik Kesihatan at the end of 2024, along with Klinik Komuniti, rural clinics and maternal and child health clinics.',
      'Malaysians pay RM1 to see a doctor and RM5 to see a specialist. People aged 60 and over are treated free as outpatients, and other groups may be exempt.',
      'Most Klinik Kesihatan keep government office hours. About 49 have extended hours on weekday evenings and Saturday mornings, and a few are also open on Sundays and public holidays.',
      'You can book through MySejahtera for many services, but walk-ins are still accepted. Booked patients are prioritised, and fever or infectious cases don’t need an appointment.',
      'Non-citizens can attend any government clinic but pay much more, listed by the ministry at RM40 for general outpatient care and RM120 for a specialist, with tests charged extra.',
    ],
    sections: [
      { id: 'what', h: 'What is a Klinik Kesihatan?', tocLabel: 'What it is', html: `<p>A Klinik Kesihatan (KK) is a primary care clinic run by the Ministry of Health (KKM). Ministry data to December 2024 lists <strong>1,131 Klinik Kesihatan</strong>, 1,656 rural clinics (Klinik Desa), 205 Klinik Komuniti and 77 maternal and child health clinics. Klinik Kesihatan range from very large clinics seeing more than 800 patients a day to small ones seeing fewer than 50.</p>
<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>What it offers</th></tr></thead>
<tbody>
<tr><td><strong>Klinik Kesihatan</strong></td><td>Doctors, nurses and a wide range of outpatient, family and chronic disease care</td></tr>
<tr><td><strong>Klinik Komuniti</strong></td><td>Smaller clinics for primary care, some with evening hours</td></tr>
<tr><td><strong>Klinik Desa</strong></td><td>Rural clinics, mainly for basic care</td></tr>
<tr><td><strong>Hospital specialist clinic</strong></td><td>Specialist care, usually with a referral letter</td></tr>
<tr><td><strong>Hospital emergency department</strong></td><td>Emergencies, with no referral needed</td></tr>
<tr><td><strong>Private GP clinic</strong></td><td>Walk-in care, often with longer hours. Each clinic sets its own charges</td></tr>
</tbody></table></div>` },
      { id: 'hours', h: 'Waktu operasi: when are Klinik Kesihatan open?', tocLabel: 'Opening hours', html: `<p>Hours vary by clinic, so <strong>check your own clinic before you go</strong>. We couldn’t find one current national list.</p>
<ul>
<li><strong>Ordinary hours:</strong> Klinik Kesihatan generally keep government office hours on working days. Klinik Kesihatan Jalan Masjid, for example, opens from 8am to 5pm on weekdays.</li>
<li><strong>Kedah, Kelantan and Terengganu</strong> have a Friday and Saturday weekend, so check which days your clinic is open.</li>
<li><strong>Johor</strong> returned to a Saturday and Sunday weekend from 1 January 2025.</li>
<li><strong>Extended hours (waktu lanjutan):</strong> 49 clinics were running extended hours in March 2025, usually on <strong>weekdays from 5pm to 9.30pm</strong> and on <strong>Saturdays from 9am to 1pm</strong>. Hours differ between clinics, and some close at 9pm.</li>
<li><strong>Sundays and public holidays:</strong> six pilot clinics also opened on these days as of March 2025: Bandar Botanik, Ampang, Taman Ehsan, Kuala Lumpur, Greentown and Mahmoodiah.</li>
<li><strong>Penang, October 2026:</strong> some clinics in Seberang Jaya and Bayan Baru open on weekday evenings and Saturday mornings, KK UTC Komtar and KK Penang Sentral open at weekends, and eight Klinik Komuniti open daily from noon to 9pm.</li>
</ul>
<p>If your Klinik Kesihatan is closed and you need a doctor, a private clinic may be open. See our lists of <a href="/clinics/open-sunday/">clinics open on Sunday</a> and <a href="/clinics/open-24-hours/">24-hour clinics</a>.</p>` },
      { id: 'fees', h: 'How much does it cost?', tocLabel: 'Fees', html: `<div class="table-wrap"><table>
<thead><tr><th>Who</th><th>Doctor</th><th>Specialist</th></tr></thead>
<tbody>
<tr><td>Malaysian citizens</td><td>RM1</td><td>RM5</td></tr>
<tr><td>Malaysians aged 60 and over</td><td>Free</td><td>Free</td></tr>
<tr><td>Non-citizens</td><td>RM40</td><td>RM120</td></tr>
</tbody></table></div>
<p><strong>Other groups that may be exempt</strong>, according to ministry statements and hospital notices, include:</p>
<ul>
<li>government staff, with a letter</li>
<li>students or children under 21, with a school letter</li>
<li>babies under 1 year old</li>
<li>antenatal and postnatal mothers</li>
<li>people registered as OKU or receiving welfare help</li>
<li>people with infectious diseases, and blood donors</li>
</ul>
<p>Sources differ on the exact rules for children, so bring your documents and ask at the counter. For non-citizens, the fee covers registration, consultation and medicine, and laboratory tests and other services cost extra. Permanent residents and foreign spouses with a Malaysian marriage certificate have been listed as paying RM5 for a specialist.</p>
${figure('doctor-consultation', 'A doctor speaking with a patient in a clinic', 'Malaysian citizens pay RM1 to see a doctor at a Klinik Kesihatan.')}` },
      { id: 'services', h: 'What services can you get?', tocLabel: 'Services', html: `<ul>
<li>general outpatient care for common illness</li>
<li><a href="/articles/normal-blood-sugar-level-malaysia/">diabetes</a>, <a href="/articles/blood-pressure-cholesterol-malaysia/">high blood pressure</a> and other long-term conditions</li>
<li>antenatal and postnatal care</li>
<li><a href="/articles/baby-vaccination-schedule-malaysia/">baby and child vaccinations</a></li>
<li>family planning and <a href="/articles/contraception-malaysia/">contraception</a></li>
<li>mental health care and help to stop smoking</li>
<li>pre-employment, study, Haj and pre-marital health checks</li>
<li>dental care, at clinics with a dental service</li>
<li>prescription refills through <strong>MyUBAT</strong>, including delivery or drive-through collection at some clinics</li>
</ul>
<p>Not every clinic offers every service. <a href="/articles/peka-b40-malaysia/">PeKa B40</a> health screening is carried out at registered private clinics, according to the government portal.</p>` },
      { id: 'booking', h: 'Temujanji: how to book', tocLabel: 'How to book', html: `<ol>
<li>Update the <strong>MySejahtera</strong> app.</li>
<li>Open <strong>Appointments</strong>, then choose <strong>Book Appointment</strong>.</li>
<li>Choose the service.</li>
<li>Choose the clinic. The app shows clinics near you.</li>
<li>Pick a date and time, then confirm.</li>
</ol>
<p><strong>Can you still walk in?</strong> Yes. In January 2026 the ministry rejected claims that walk-ins had ended. Walk-in patients are assessed first, and those with appointments are prioritised. Emergencies, fever and infectious cases don’t need an appointment.</p>
<p><strong>Bring</strong> your MyKad or passport, any referral letter or screening form, and documents showing that you are exempt from fees. Aim to arrive about 30 minutes early for an appointment.</p>
<p><strong>Waiting times:</strong> the deputy health minister said in 2026 that waits had been up to 3 hours in clinics before a new digital clinic system. After the change, 81% of patients at those clinics saw a doctor within an hour. These figures don’t cover every clinic, and 91 Klinik Kesihatan were operating over capacity in 2025.</p>` },
      { id: 'choose', h: 'Klinik Kesihatan, private clinic or hospital?', tocLabel: 'Which to choose', html: `<ul>
<li><strong>Choose a Klinik Kesihatan</strong> for long-term conditions, pregnancy care, baby vaccinations, and affordable care when you can wait.</li>
<li><strong>Choose a private GP</strong> for a quick visit, or when you need a doctor at night or at a weekend. Your employer’s panel clinic may be free for you.</li>
<li><strong>Go to a hospital emergency department or call <a href="tel:999">999</a></strong> for chest pain, stroke symptoms, severe breathlessness, heavy bleeding or a <a href="/articles/seizures-sawan-epilepsy-malaysia/">seizure</a>. Don’t wait to book. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</li>
</ul>
<p>Doctors at government clinics can issue a <a href="/articles/medical-certificate-mc-malaysia/">medical chit (MC)</a> after examining you, and can refer you to a hospital specialist when needed.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'When your Klinik Kesihatan is closed',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Our directory lists private GP clinics, not Klinik Kesihatan. It is useful when your government clinic is closed or you need to be seen quickly. You can find clinics that are open late, at weekends and 24 hours, along with the charges each one sets.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/open-sunday/', 'Clinics open on Sunday'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What are the opening hours of a Klinik Kesihatan?', 'Most keep government office hours on working days. Some have extended hours on weekday evenings and Saturday mornings, and a few open on Sundays and public holidays. Check your own clinic.'],
      ['How much is a Klinik Kesihatan visit?', 'Malaysian citizens pay RM1 to see a doctor and RM5 to see a specialist. People aged 60 and over are treated free as outpatients.'],
      ['Can I go to a Klinik Kesihatan without an appointment?', 'Yes. Walk-ins are still accepted, although those with appointments are prioritised. Fever, infectious illness and emergencies don’t need an appointment.'],
      ['How do I book a Klinik Kesihatan appointment?', 'In the MySejahtera app, open Appointments, choose Book Appointment, then pick the service, clinic, date and time.'],
      ['Are Klinik Kesihatan open on Saturdays or Sundays?', 'Clinics with extended hours open on Saturday mornings. Only a few pilot clinics have also opened on Sundays and public holidays.'],
      ['Can foreigners go to a Klinik Kesihatan?', 'Yes, but they pay unsubsidised rates, listed at RM40 for general outpatient care and RM120 for a specialist. Tests cost extra.'],
      ['What is the difference between Klinik Kesihatan and Klinik Komuniti?', 'Both are government clinics and are counted separately by the ministry. Klinik Kesihatan are usually larger and offer a wider range of services.'],
      ['Can a Klinik Kesihatan give an MC?', 'Yes. A government medical officer can issue a medical certificate after examining you.'],
    ],
    sources: [
      ['Malay Mail — How cheap can public hospitals get? A how-to guide to receiving care from MOH (Apr 2026)', 'https://www.malaymail.com/news/malaysia/2026/04/29/how-cheap-can-public-hospitals-get-heres-a-how-to-guide-to-receiving-care-from-moh-specialised-institutions/217249'],
      ['CodeBlue — Health minister: 91 Klinik Kesihatan operating beyond capacity (Mar 2025)', 'https://codeblue.galencentre.org/2025/03/health-minister-91-klinik-kesihatan-operating-beyond-capacity/'],
      ['Dewan Rakyat — Soalan lisan 63 on Klinik Komuniti (Jul 2019)', 'https://pardocs.sinarproject.org/documents/2019-july-parliamentary-session/oral-questions-soalan-lisan/2019-07-02-parliamentary-replies/par14p2m2-soalan-lisan-63.pdf'],
      ['Dewan Rakyat — Soalan 81 on outpatient fees (Jun 2015)', 'https://pardocs.sinarproject.org/documents/2015-may-june-parliamentary-session/oral-questions/2015-06-15-parliamentary-replies/soalan-81.pdf'],
      ['Berita RTM/Bernama — Extended hours at Klinik Kesihatan (Mar 2025)', 'https://berita.rtm.gov.my/?p=143255'],
      ['Sinar Harian — KKM tak cadang perluas waktu operasi Klinik Kesihatan (Mar 2025)', 'https://www.sinarharian.com.my/article/716849/berita/nasional/kkm-tak-cadang-perluas-laksana-panjangkan-waktu-operasi-klinik-kesihatan'],
      ['Sarawak Tribune — Klinik Kesihatan Jalan Masjid hours (Feb 2026)', 'https://www.sarawaktribune.com/?p=548034'],
      ['Bernama — Penang clinic hours (Oct 2026)', 'https://bernama.com/en/general/news.php?id=2622636'],
      ['The Star — Johor’s weekend to be Saturday-Sunday from Jan 1, 2025 (Oct 2024)', 'https://www.thestar.com.my/news/nation/2024/10/07/johor039s-weekend-to-be-saturday-sunday-from-jan-1-2025'],
      ['The Star — Friday weekend states (May 2022)', 'https://www.thestar.com.my/news/nation/2022/05/05/lhdn-opens-in-friday-weekend-states-today'],
      ['Sinar Harian — Caj rawatan warga asing (Jun 2026)', 'https://www.sinarharian.com.my/article/783943/berita/semasa/rohingya-tidak-dapat-subsidi-dikenakan-caj-rawatan-seperti-warga-asing-lain---dzulkefly'],
      ['Ministry of Health, Hospital Permai — Notice of charges (2024)', 'https://jknjohor.moh.gov.my/hpermai/wp-content/uploads/2024/09/Caj-WA-HPJB.pdf'],
      ['Free Malaysia Today — No hike in treatment charges at hospitals, govt clinics (Nov 2016)', 'https://www.freemalaysiatoday.com/category/nation/2016/11/09/no-hike-in-treatment-charges-at-hospitals-govt-clinics/'],
      ['Utusan Malaysia — Fi perubatan pesakit warga asing (Mar 2026)', 'https://www.utusan.com.my/terkini/2026/03/kkm-kutip-rm275-9-juta-hasil-fi-perubatan-pesakit-warga-asing/'],
      ['Portal MyGOV — Fasiliti dan kemudahan kesihatan (Oct 2026)', 'https://www.malaysia.gov.my/my/categories/kesihatan/fasiliti-dan-kemudahan-kesihatan'],
      ['Portal MyGOV — Booking an appointment for a health check (Oct 2026)', 'https://www.malaysia.gov.my/en/digital-services/application-for-booking-an-appointment-for-health-check'],
      ['Portal MyGOV — Bantuan kesihatan (Oct 2026)', 'https://www.malaysia.gov.my/my/categories/bantuan-kebajikan--kemudahan/bantuan-kesihatan'],
      ['SAYS — How to book a Klinik Kesihatan appointment via MySejahtera (Jul 2026)', 'https://says.com/my/lifestyle/how-to-book-klinik-kesihatan-appointment-via-mysejahtera'],
      ['SAYS — Digitalisasi kurangkan masa menunggu pesakit (Jul 2026)', 'https://says.com/my/seismik/digitalisasi-berjaya-kurangkan-masa-menunggu-pesakit-daripada-3-jam-kepada-sejam-kkm'],
      ['WeirdKaya — How to book a Klinik Kesihatan appointment using MySejahtera in 2026 (Jan 2026)', 'https://weirdkaya.com/step-by-step-how-to-book-a-klinik-kesihatan-appointment-using-mysejahtera-in-2026'],
      ['Lowyat.NET — MOH on government clinics and walk-in patients (Jan 2026)', 'https://www.lowyat.net/2026/377462/moh-government-clinics-walk-in-patients/'],
      ['Bernama — Klinik Kesihatan appointment rollout (Dec 2022)', 'https://www.bernama.com/en/general/news.php?id=2151725'],
    ],
    related: ['clinic-or-emergency-department', 'peka-b40-malaysia', 'medical-certificate-mc-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'diarrhoea-cirit-birit-malaysia',
    title: 'Cirit birit (diarrhoea): causes, treatment, which medicines work and when to see a doctor',
    crumb: 'Cirit birit (diarrhoea)',
    desc: 'Cirit birit means diarrhoea. Common causes, how to use oral rehydration salts, which ubat cirit birit work and which don’t, what to eat, and danger signs in adults, children and babies.',
    excerpt: 'Most diarrhoea clears up within a week, and replacing fluids matters more than any medicine. How to use oral rehydration salts, which diarrhoea medicines help, why antibiotics usually don’t, and the danger signs in adults, children and babies.',
    standfirst: 'Cirit birit is the Malay term for diarrhoea: passing loose or watery stools three or more times a day. Most cases clear up by themselves within 5 to 7 days. The main danger is dehydration, so replacing fluids and salts comes first. Here is what works, what to avoid, and when to see a doctor.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Diarrhoea', 'Cirit birit', 'Oral rehydration'],
    image: 'medications', imageAlt: 'Assorted medicines and tablets on a table',
    keyPoints: [
      'Diarrhoea means 3 or more loose stools a day. It usually clears up in 5 to 7 days. Diarrhoea that lasts more than 4 weeks is chronic and needs checking.',
      'Oral rehydration salts (ORS) are the most important treatment. Follow the instructions on the packet. Plain water, soft drinks, apple juice and young coconut water aren’t good replacements for ORS in children.',
      'Adults can use loperamide for short-term relief, but not if there is blood in the stool or a high fever. It is not recommended for children with gastroenteritis.',
      'Antibiotics usually don’t help, as most cases are caused by viruses. Kaolin and charcoal have no proven benefit.',
      'See a doctor for blood in the stool, diarrhoea lasting more than 7 days, signs of dehydration, or if you can’t keep fluids down. Babies need help sooner.',
    ],
    sections: [
      { id: 'what', h: 'What is cirit birit?', tocLabel: 'What it is', html: `<p>Cirit birit (also written <em>cirit-birit</em>) means diarrhoea. The World Health Organization defines it as passing <strong>3 or more loose or watery stools a day</strong>, or more often than is normal for you. Soft, pasty stools in breastfed babies are normal.</p>
<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>How long it lasts</th></tr></thead>
<tbody>
<tr><td>Acute</td><td>Usually less than 7 days, and up to 14 days</td></tr>
<tr><td>Persistent</td><td>14 days or more</td></tr>
<tr><td>Chronic</td><td>More than 4 weeks</td></tr>
</tbody></table></div>
<p>In Malaysia, a national survey found that about 4 in 100 children under 5 had diarrhoea in the previous two weeks, with higher rates in homes using untreated water.</p>` },
      { id: 'causes', h: 'Common causes', tocLabel: 'Causes', html: `<ul>
<li><strong>Infections:</strong> viruses such as <a href="/articles/rotavirus-vaccine-malaysia/">rotavirus</a> and norovirus, bacteria and parasites. See our guide to <a href="/articles/food-poisoning-gastroenteritis-malaysia/">food poisoning and gastroenteritis</a>.</li>
<li><strong>Medicines:</strong> antibiotics, metformin, gliptins, magnesium products, anti-inflammatory painkillers and some blood pressure tablets (ACE inhibitors)</li>
<li><strong>Food and drink:</strong> lactose intolerance, artificial sweeteners and alcohol</li>
<li><strong>Bowel conditions:</strong> irritable bowel syndrome, coeliac disease, inflammatory bowel disease and bile acid diarrhoea</li>
<li><strong>Other conditions:</strong> an overactive <a href="/articles/thyroid-hyperthyroidism-hypothyroidism-malaysia/">thyroid</a></li>
<li><strong><a href="/articles/bowel-cancer-screening-malaysia/">Bowel cancer</a>:</strong> loose stools or more frequent stools that continue, especially with blood or weight loss, should be checked</li>
</ul>` },
      { id: 'ors', h: 'Oral rehydration salts: the most important treatment', tocLabel: 'Rehydration', html: `<p>Diarrhoea drains water and salts from the body. <strong>Oral rehydration salts (ORS, or <em>garam rehidrasi oral</em>)</strong> replace both, using the right balance of salt and sugar to help your gut absorb water.</p>
<ul>
<li><strong>Mix it as the packet says.</strong> Sachet sizes differ. The Malaysian Ministry of Health’s training manual uses one sachet in 250ml of cooled boiled water for its product, while WHO-style packets are made up with about 1 litre.</li>
<li>Throw away any mixture after <strong>24 hours</strong>.</li>
<li><strong>Adults:</strong> drink as much as you want, in small frequent sips, especially after each loose stool.</li>
<li><strong>Children without dehydration:</strong> give an extra 50 to 100ml after each loose stool up to age 2, and 100 to 200ml from age 2.</li>
<li><strong>If vomiting:</strong> wait 5 to 10 minutes, then give it more slowly. For a child under 2, give a teaspoon every 1 to 2 minutes.</li>
</ul>
<p><strong>What about other drinks?</strong> The 2026 Malaysian children’s guideline lists cola, apple juice, young coconut water, chicken broth, tea and isotonic sports drinks as unsuitable for treating dehydration. They have much less sodium than ORS, and very sugary drinks can make diarrhoea worse. Healthy adults with mild diarrhoea can usually manage with fluids plus salty food, but ORS is the better choice if you are older, unwell or passing a lot of stool.</p>
${figure('medications', 'Assorted medicines on a table', 'Replacing fluids and salts comes first. Medicines play a smaller part.')}` },
      { id: 'medicines', h: 'Ubat cirit birit: which medicines work?', tocLabel: 'Medicines', html: `<div class="table-wrap"><table>
<thead><tr><th>Medicine</th><th>Does it help?</th></tr></thead>
<tbody>
<tr><td><strong>Loperamide</strong></td><td>Reduces stool frequency in adults. Don’t use with blood in the stool or a high fever.</td></tr>
<tr><td><strong>Bismuth subsalicylate</strong></td><td>Can help adults. Not for under-12s or people with aspirin allergy, gout, kidney problems or on blood thinners. Turns the tongue and stools black.</td></tr>
<tr><td><strong>Probiotics</strong></td><td>A 2020 Cochrane review of 82 studies found probably little or no difference to diarrhoea lasting 48 hours or more. The Malaysian children’s guideline allows selected strains as an add-on.</td></tr>
<tr><td><strong>Zinc (children)</strong></td><td>WHO recommends 10 to 14 days of zinc. The 2026 Malaysian guideline suggests it mainly for malnourished children or those likely to be deficient. Ask your doctor.</td></tr>
<tr><td><strong>Racecadotril and diosmectite (children)</strong></td><td>May be considered by a doctor. Evidence is limited.</td></tr>
<tr><td><strong>Kaolin and charcoal</strong></td><td>Ministry of Health training material says these have no benefit. The Malaysian children’s guideline doesn’t recommend kaolin/pectin.</td></tr>
<tr><td><strong>Antibiotics</strong></td><td>Usually not needed. Doctors use them for specific infections such as cholera, Shigella dysentery and some serious infections.</td></tr>
</tbody></table></div>
<p><strong>Loperamide for adults:</strong> UK guidance is 2 capsules at first, then 1 after each loose stool, with a maximum of 6 capsules in 24 hours when bought without a prescription, for no more than 48 hours. Taking too much can cause dangerous heart rhythm problems. It is available from pharmacists for ages 12 and over under UK rules, but the Malaysian children’s guideline advises against it in children with gastroenteritis, because deaths have been reported, especially under the age of 3. Ask a pharmacist or doctor if you are pregnant or have liver disease.</p>
<p><strong>Antibiotics can harm.</strong> With certain E. coli infections, they can raise the risk of serious kidney complications. Don’t use leftover antibiotics.</p>` },
      { id: 'food', h: 'What to eat', tocLabel: 'What to eat', html: `<ul>
<li><strong>Keep eating</strong> as soon as you feel able to. Children shouldn’t go without food for more than 4 to 6 hours after rehydration has started.</li>
<li>A strict “BRAT” diet (bananas, rice, apple sauce and toast) is no longer needed and is unnecessarily restrictive, though plain foods such as rice porridge may be easier to manage.</li>
<li><strong>Avoid</strong> fatty and spicy food, fizzy drinks, undiluted fruit juice, caffeine and alcohol while you recover.</li>
<li><strong>Babies:</strong> continue breastfeeding. Don’t dilute formula, and there is usually no need to switch to lactose-free milk.</li>
</ul>` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<p><strong>Signs of dehydration:</strong> thirst, dark urine, passing little urine, dizziness, a dry mouth and sunken eyes. In babies, also look for a sunken soft spot on the head, few tears, fewer wet nappies, and drowsiness or irritability.</p>
<p><strong>Adults should see a doctor promptly for:</strong></p>
<ul>
<li>blood in the stool</li>
<li>diarrhoea lasting more than 7 days, or vomiting for more than 2 days</li>
<li>being unable to keep fluids down</li>
<li>signs of dehydration that continue despite ORS</li>
<li>diarrhoea with a high fever, or after recent antibiotics, if it is severe</li>
<li>older age or a weak immune system</li>
</ul>
<p><strong>Children and babies should be seen urgently if:</strong></p>
<ul>
<li>they can’t drink or breastfeed, or are getting sicker</li>
<li>there is blood in the stool or a fever</li>
<li>they keep vomiting, particularly if the vomit is green</li>
<li>they are unusually sleepy, or show signs of dehydration</li>
<li>you are worried about a baby under 12 months, or the baby has stopped feeding</li>
</ul>
<p><strong>Go to an emergency department or call <a href="tel:999">999</a> for:</strong> vomiting blood, severe tummy pain, confusion, a stiff neck, pale, blue or grey skin, severe breathlessness, or a <a href="/articles/seizures-sawan-epilepsy-malaysia/">seizure</a>.</p>
<p><strong>In dengue season,</strong> diarrhoea or vomiting more than 3 times in 24 hours during a <a href="/articles/normal-body-temperature-fever-adults-malaysia/">fever</a> can be a warning sign, and needs to be checked.</p>` },
      { id: 'diabetes', h: 'Diabetes, kidney and heart medicines', tocLabel: 'Sick day rules', html: `<p>If you can’t eat and drink normally, some medicines can become risky, including SGLT2 inhibitors, metformin, sulfonylureas, GLP-1 medicines, water tablets, ACE inhibitors, ARBs and anti-inflammatory painkillers. UK “sick day rules” advise pausing these until you are well. <strong>Never stop insulin.</strong></p>
<p>We didn’t find equivalent Malaysian guidance, so ask your doctor or pharmacist for a plan in advance. Seek help the same day if you take an SGLT2 inhibitor and feel unwell, as a dangerous complication (ketoacidosis) can occur even with normal blood sugar. See our guide to <a href="/articles/normal-blood-sugar-level-malaysia/">blood sugar levels</a>.</p>` },
      { id: 'tests', h: 'Travel, and when stool tests are needed', tocLabel: 'Travel and tests', html: `<p>Most traveller’s diarrhoea is caused by bacteria. Treat it with fluids, and carry ORS if you are travelling. If it lasts more than 2 weeks, a parasite may be the cause. Going on pilgrimage? See our guide to <a href="/articles/umrah-haj-vaccine-meningitis-malaysia/">Umrah and Haj health</a>.</p>
<p>Your doctor may arrange a stool test if there is blood in the stool, severe illness, diarrhoea lasting more than 7 days, a weak immune system, or an outbreak. Chronic diarrhoea may need further tests, such as blood tests or a colonoscopy.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check for dehydration, advise on medicines, arrange a stool test and issue an MC if you need one. Our directory lists clinics across Malaysia, including clinics open late, at weekends and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['What is cirit birit in English?', 'Cirit birit means diarrhoea (spelled diarrhea in American English): passing loose or watery stools 3 or more times a day.'],
      ['What is the best ubat cirit birit?', 'Oral rehydration salts are the most important treatment. Adults can also use loperamide for short-term relief if there is no blood in the stool or high fever. Ask a pharmacist.'],
      ['How do I stop diarrhoea quickly?', 'Replace fluids with ORS and eat as normal when you can. Loperamide can reduce stool frequency in adults. Most diarrhoea clears up within 5 to 7 days.'],
      ['Is coconut water good for diarrhoea?', 'Not as a replacement for ORS. Malaysian children’s guidelines list young coconut water as unsuitable, as it has much less sodium than ORS.'],
      ['Do I need antibiotics for diarrhoea?', 'Usually not, as most cases are viral. Antibiotics are used for specific infections, and can sometimes be harmful.'],
      ['How long is too long for diarrhoea?', 'See a doctor if it lasts more than 7 days in an adult, or sooner with blood, dehydration or a fever. Diarrhoea lasting more than 4 weeks is chronic.'],
      ['Can I give loperamide to my child?', 'It is not recommended for children with gastroenteritis, as deaths have been reported, especially under the age of 3. See a doctor.'],
      ['Should I stop breastfeeding if my baby has diarrhoea?', 'No. Keep breastfeeding, and give extra fluids as your doctor advises.'],
    ],
    sources: [
      ['Malaysian Paediatric Association — Guidelines on the management of acute diarrhoea in children, 2nd edition (2026)', 'https://mpaeds.my/wp-content/uploads/2026/06/guideline-on-the-management-of-acute-diarrhoea-in-children-2026-1.pdf'],
      ['Ministry of Health Malaysia — Training manual on approach to unwell children under 5 years', 'https://hq.moh.gov.my/bpkk/images/3.Penerbitan/2.Orang_Awam/8.Kesihatan_Kanak_Kanak/2.PDF/4_atucu5_training_manual_on_approach_to_unwell_children_under_5_years.pdf'],
      ['WHO — Diarrhoeal disease (Mar 2024)', 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease'],
      ['NHS — Diarrhoea and vomiting (Dec 2023)', 'https://www.nhs.uk/conditions/diarrhoea-and-vomiting/'],
      ['NHS — Loperamide (Apr 2024)', 'https://www.nhs.uk/medicines/loperamide/who-can-and-cannot-take-loperamide/'],
      ['NHS — Dehydration (May 2026)', 'https://www.nhs.uk/conditions/dehydration/'],
      ['NHS — Bowel cancer symptoms (Sep 2026)', 'https://www.nhs.uk/conditions/bowel-cancer/symptoms/'],
      ['Cleveland Clinic — Diarrhea (Apr 2026)', 'https://my.clevelandclinic.org/health/diseases/4108-diarrhea'],
      ['British Society of Gastroenterology — Guidelines for the investigation of chronic diarrhoea in adults, Gut (2018)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6204957/'],
      ['MSF Clinical Guidelines — WHO rehydration plans', 'https://medicalguidelines.msf.org/sites/default/files/Appendix%2B14%2BPlan%2Brehydration%2BWHO.pdf'],
      ['Cochrane — Probiotics for treating acute infectious diarrhoea (Dec 2020)', 'https://www.cochrane.org/CD003048/INFECTN_probiotics-treating-acute-infectious-diarrhoea'],
      ['Cochrane — Oral zinc for treating diarrhoea in children (Dec 2016)', 'https://www.cochrane.org/CD005436/INFECTN_oral-zinc-for-treating-diarrhoea-in-children'],
      ['US CDC Yellow Book — Travelers’ diarrhea (Mar 2026)', 'https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travelers-diarrhea.html'],
      ['US CDC — E. coli treatment (May 2024)', 'https://www.cdc.gov/ecoli/treatment/index.html'],
      ['US CDC MMWR — Managing acute gastroenteritis among children (2003)', 'https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5216a1.htm'],
      ['American Family Physician — Acute diarrhea in adults (Feb 2014)', 'https://www.aafp.org/pubs/afp/issues/2014/0201/p180.html'],
      ['Dorset County Hospital NHS — Sick day rules for people with type 2 diabetes (Mar 2025)', 'https://dchft.nhs.uk/leaflets/sick-day-rules-for-people-with-type-2-diabetes-taking-a-sglt-2-inhibitor/'],
      ['BMC Public Health — Diarrhoea among children under five in Malaysia, NHMS 2016 (2018)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6288967'],
    ],
    related: ['vomiting-muntah-malaysia', 'food-poisoning-gastroenteritis-malaysia', 'rotavirus-vaccine-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'fomema-online-result-check',
    title: 'FOMEMA online result check: how to check status, what each result means and what to do next',
    crumb: 'FOMEMA online result check',
    desc: 'How to check a FOMEMA result online: the free Immigration status page, the employer portal, what Pending, Suitable and Unsuitable mean, how long it takes, and what to do if nothing shows.',
    excerpt: 'Waiting for a FOMEMA result? Workers and employers can check it online for free. Where to check, what each status means, how long results take, why a result may not appear, and what happens after a Suitable or Unsuitable result.',
    standfirst: 'There are two official ways to check a FOMEMA result online. Anyone can use the Immigration Department’s free status page with a passport number or name, and employers and agencies can log in to the FOMEMA portal for the full result. Here is how each one works, what the statuses mean, and what to do if a result doesn’t appear.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: false,
    about: ['FOMEMA', 'Foreign worker medical examination', 'MyIMMs'],
    image: 'doctor-tablet', imageAlt: 'A doctor in a white coat reading results on a tablet',
    keyPoints: [
      'Workers can check for free on the Immigration Department’s MyIMMs “Fomema Status Inquiries” page, using their passport number or name and nationality.',
      'Employers and agencies log in to the FOMEMA portal at portal.fomema.my and open “Medical Result”. This is also where you print the medical report or unsuitable letter.',
      'Under normal circumstances, results reach Immigration headquarters within 7 working days of the examination.',
      'A “Pending” status shows which step is holding things up. If nothing appears at Immigration, the usual cause is a mismatch in the passport number, name, gender, date of birth or nationality.',
      'A result is valid at Immigration for 180 days. Some Unsuitable results can be appealed, but only if FOMEMA emails to say the case is eligible.',
    ],
    sections: [
      { id: 'where', h: 'Where to check a FOMEMA result', tocLabel: 'Where to check', html: `<div class="table-wrap"><table>
<thead><tr><th>Where</th><th>Who can use it</th><th>What you need</th></tr></thead>
<tbody>
<tr><td><a href="https://eservices.imi.gov.my/myimms/FomemaStatus?lang=en" target="_blank" rel="noopener"><strong>MyIMMs: Fomema Status Inquiries</strong></a></td><td>Anyone, including workers. No login needed.</td><td>Passport number and nationality, or name and nationality</td></tr>
<tr><td><a href="https://portal.fomema.my/" target="_blank" rel="noopener"><strong>FOMEMA Online Portal</strong></a></td><td>Employers and agencies</td><td>Employer or agency login</td></tr>
</tbody></table></div>
<p>FOMEMA’s official website is <a href="https://fomema2u.com.my/" target="_blank" rel="noopener">fomema2u.com.my</a>. When we tested older addresses in November 2026, fomema.com.my and fomemaonline.com didn’t work as result checkers.</p>
<p>Checking a result is free. We found no official route that needs a payment or an agent, so be wary of anyone who charges you just to look up a result.</p>` },
      { id: 'worker', h: 'How workers can check (MyIMMs)', tocLabel: 'Workers: MyIMMs', html: `<ol>
<li>Open the <a href="https://eservices.imi.gov.my/myimms/FomemaStatus?lang=en" target="_blank" rel="noopener">Fomema Status Inquiries</a> page on the Immigration Department website.</li>
<li>Fill in one of the two forms: <strong>Passport No</strong> and <strong>Citizen</strong> (your nationality), or <strong>Name</strong> and <strong>Citizen</strong>.</li>
<li>Submit the form to see the status held by Immigration.</li>
</ol>
<p>Enter your details exactly as they appear in your passport. This page shows the status held by Immigration. The full medical report and any unsuitable letter are available through the employer’s portal, so ask your employer or agency for a copy.</p>
<p>Immigration’s systems may change. If the link stops working, check the <a href="https://www.imi.gov.my/" target="_blank" rel="noopener">Immigration Department website</a>.</p>` },
      { id: 'employer', h: 'How employers and agencies can check (FOMEMA portal)', tocLabel: 'Employers: portal', html: `<ol>
<li>Log in to the <a href="https://portal.fomema.my/" target="_blank" rel="noopener">FOMEMA Online Portal</a> as an employer or agency.</li>
<li>Open <strong>Medical Result</strong>.</li>
<li>Enter the worker code or passport number, then choose <strong>Search</strong>. You can search up to 10 workers at a time.</li>
<li>For a medical report, go to <strong>Registration History</strong> and choose <strong>Print Report</strong>. For an Unsuitable result, use <strong>Print Unsuitable Letter</strong>.</li>
</ol>
${figure('doctor-notes', 'A doctor in blue gloves writing notes on a clipboard', 'Workers can check their status on the Immigration page, while employers can see the full result in the FOMEMA portal.')}` },
      { id: 'status', h: 'What each FOMEMA status means', tocLabel: 'What statuses mean', html: `<div class="table-wrap"><table>
<thead><tr><th>Status</th><th>What it means</th></tr></thead>
<tbody>
<tr><td><strong>Pending Select Clinic</strong></td><td>A clinic hasn’t been chosen yet</td></tr>
<tr><td><strong>Pending Examination</strong></td><td>The worker hasn’t attended the examination</td></tr>
<tr><td><strong>Pending Lab and X-ray Transmission</strong></td><td>The laboratory and X-ray results haven’t been sent yet. You may also see Pending Lab or Pending X-ray Transmission.</td></tr>
<tr><td><strong>Pending for Certification</strong></td><td>The clinic hasn’t sent the result to FOMEMA. Check with the clinic.</td></tr>
<tr><td><strong>FOMEMA Review</strong></td><td>The result is under review before release to Immigration</td></tr>
<tr><td><strong>Suitable</strong></td><td>The worker is medically fit, and the employer can go on to renew the permit</td></tr>
<tr><td><strong>Unsuitable</strong></td><td>The worker is not medically fit. The reason appears under “Reason”.</td></tr>
<tr><td><strong>Expired</strong></td><td>The result is more than 180 days old, or the form’s validity has ended. A new form must be bought.</td></tr>
<tr><td><strong>Cancelled</strong></td><td>The employer has asked for a refund</td></tr>
</tbody></table></div>` },
      { id: 'timing', h: 'How long does a FOMEMA result take?', tocLabel: 'How long it takes', html: `<ul>
<li><strong>Result to Immigration:</strong> within 7 working days of the examination, under normal circumstances.</li>
<li><strong>FOMEMA Review:</strong> the final result comes within 5 working days after certification.</li>
<li><strong>Attending the exam:</strong> the registration form is valid for 30 days from payment.</li>
<li><strong>Certification:</strong> if the examination isn’t certified within 30 days of the clinic visit, the status becomes Expired.</li>
<li><strong>Validity:</strong> a result is valid at Immigration for 180 days from the examination date.</li>
<li><strong>Annual exam:</strong> since 16 December 2023, all foreign workers have to be examined every year.</li>
</ul>` },
      { id: 'missing', h: 'What to do if a result doesn’t appear', tocLabel: 'Result not showing', html: `<ol>
<li><strong>Check the status in the FOMEMA portal.</strong> A Pending status tells you which step is holding things up.</li>
<li><strong>If it says Pending for Certification,</strong> contact the clinic that did the examination.</li>
<li><strong>If there is no record at Immigration,</strong> the most common cause is a mismatch in the passport number, name, gender, date of birth or nationality. Employers can correct this under <strong>Register Worker</strong>, using the edit option.</li>
<li><strong>If you can’t correct it,</strong> email <a href="mailto:cs@fomema.com.my">cs@fomema.com.my</a> with the amendment form, passport copies, the permit or approval, and a screenshot. This can take up to 3 working days.</li>
</ol>
<p><strong>Contact FOMEMA:</strong> WhatsApp 03-2782 8777 or email <a href="mailto:cs@fomema.com.my">cs@fomema.com.my</a>, Monday to Friday, 9am to 5pm, except national and Selangor public holidays.</p>` },
      { id: 'after', h: 'What happens after the result?', tocLabel: 'After the result', html: `<p><strong>If the result is Suitable:</strong> the employer can go on to renew the work permit (PLKS). Immigration advises applying 3 months before the permit expires.</p>
<p><strong>If the result is Unsuitable:</strong></p>
<ul>
<li><strong>Appeals</strong> are only possible if FOMEMA emails to say the case is eligible. Register the appeal on the portal within <strong>2 weeks</strong> of certification, and submit any extra test results within 4 weeks of registering the appeal, or the case will be closed.</li>
<li><strong>Not appealable:</strong> tuberculosis confirmed by radiologist audit, malaria, pregnancy, HIV and <a href="/articles/hepatitis-b-malaysia/">hepatitis B</a>.</li>
<li><strong>Syphilis:</strong> FOMEMA’s appeal FAQ says it has been appealable since 20 July 2026, with treatment and 6 months’ monitoring, although another FOMEMA page still lists it as non-appealable. Check with FOMEMA.</li>
<li><strong>Going home:</strong> workers who are not cleared must be sent home. For PLKS holders, the Check Out Memo has been online only since 1 September 2025, through MyPASS@JIM or FWCMS. Immigration counters no longer accept these applications.</li>
</ul>
<p>Some long-term conditions, such as diabetes and high blood pressure, can be cleared through a 6-month monitoring programme. See our <a href="/articles/fomema-medical-check-up/">full guide to the FOMEMA medical check-up</a> for tests, fees and appeals.</p>` },
      { id: 'sabah-sarawak', h: 'Sabah and Sarawak', tocLabel: 'Sabah and Sarawak', html: `<p>FOMEMA covers Peninsular Malaysia and Labuan. Sabah and Sarawak have their own arrangements. In <strong>Sarawak</strong>, foreign worker health screening is run through <a href="https://safhis.sarawak.gov.my/" target="_blank" rel="noopener">SAFHIS</a>, and employers see a fit or unfit result. In <strong>Sabah</strong>, check with the state Immigration office or your appointed medical provider.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a FOMEMA panel clinic',
    clinicsTocLabel: 'FOMEMA clinics',
    clinicsIntro: 'Our directory lists clinics that are on the FOMEMA panel, with opening hours and directions. Panels can change, so check the clinic on the official FOMEMA website before you register a worker.',
    clinicLinks: [['/clinics/fomema-clinics/', 'FOMEMA panel clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['How do I check my FOMEMA result online?', 'Open the Immigration Department’s MyIMMs “Fomema Status Inquiries” page and enter your passport number or name with your nationality. Employers can log in to the FOMEMA portal and open “Medical Result”.'],
      ['Can a worker check their own FOMEMA result?', 'Yes. The MyIMMs page is public and doesn’t need a login. For the full medical report, ask your employer or agency.'],
      ['How long does a FOMEMA result take?', 'Under normal circumstances, the result reaches Immigration within 7 working days of the examination. Cases under FOMEMA Review get a final result within 5 working days after certification.'],
      ['What does Pending for Certification mean?', 'The clinic has not yet sent the result to FOMEMA. Contact the clinic that did the examination.'],
      ['Why is my FOMEMA result not showing?', 'It may still be pending. If there is no record at Immigration, check that the passport number, name, gender, date of birth and nationality match exactly.'],
      ['How long is a FOMEMA result valid?', 'It is valid at Immigration for 180 days from the examination date.'],
      ['Does FOMEMA cover Sabah and Sarawak?', 'No. FOMEMA covers Peninsular Malaysia and Labuan. Sabah and Sarawak have their own screening arrangements.'],
      ['What is the FOMEMA login page?', 'Employers and agencies log in at portal.fomema.my. FOMEMA’s official website is fomema2u.com.my.'],
    ],
    sources: [
      ['Immigration Department of Malaysia — MyIMMs: Fomema Status Inquiries', 'https://eservices.imi.gov.my/myimms/FomemaStatus?lang=en'],
      ['FOMEMA — Online portal', 'https://portal.fomema.my/users/sign_in'],
      ['FOMEMA — Foreign workers’ medical examination FAQ', 'https://fomema2u.com.my/employer-agency/frequent-asked-questions-and-forms/foreign-workers-medical-examination/'],
      ['FOMEMA — Guidelines', 'https://fomema2u.com.my/employer-agency/guidelines/'],
      ['FOMEMA — Appeal process and monitoring programmes FAQ', 'https://fomema2u.com.my/employer-agency/frequent-asked-questions-and-forms/fomema-appeal-process-monitoring-programmes/'],
      ['FOMEMA — Appeal procedure', 'https://www.fomema2u.com.my/employer-agency/appeal-procedure/'],
      ['FOMEMA — Contact us', 'https://www.fomema2u.com.my/corporate/contact-us/'],
      ['Immigration Department of Malaysia — Foreign worker', 'https://www.imi.gov.my/index.php/en/main-services/foreign-worker/'],
      ['Immigration Department of Malaysia — Check Out Memo notice (2025)', 'https://www.imi.gov.my/?p=164407'],
      ['The Star — Unmasking hidden health hazards with annual tests (May 2024)', 'https://www.thestar.com.my/news/nation/2024/05/16/unmasking-hidden-health-hazards-with-annual-tests'],
      ['SAFHIS Sarawak — Employers', 'https://safhis.sarawak.gov.my/employers'],
    ],
    related: ['fomema-medical-check-up', 'tuberculosis-tb-malaysia', 'hepatitis-b-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'normal-body-temperature-fever-adults-malaysia',
    title: 'Normal body temperature (suhu badan normal) and fever in adults: the numbers and when to see a doctor',
    crumb: 'Normal body temperature',
    desc: 'Normal body temperature (suhu badan normal) for adults, what counts as a fever by thermometer type, how to measure it properly, safe treatment with dengue in mind, and danger signs.',
    excerpt: 'Is 37.5°C a fever? Normal body temperature is lower than most people think and changes through the day. What the numbers mean, which thermometer to trust, how to treat a fever safely in Malaysia, and when to see a doctor.',
    standfirst: 'For most adults, normal body temperature is about 36.5°C to 37.5°C, and a reading of 38°C or above by mouth is generally called a fever. The old figure of 37°C is only a rough average. Your temperature changes with the time of day, your age and how you take it. Here is how to read the numbers, and when a fever needs a doctor.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Body temperature', 'Fever', 'Demam'],
    image: 'fever-thermometer', imageAlt: 'A digital thermometer showing a temperature reading',
    keyPoints: [
      'Modern studies put average adult temperature nearer 36.6°C than 37°C. It is lowest in the early morning and can reach 37.7°C by late afternoon.',
      'A temperature of 38°C or above by mouth is generally a fever. An ear reading is about 0.6°C higher than by mouth, and a forehead reading is about 0.6°C lower.',
      'Older people may have a serious infection with little or no fever. New confusion or sudden weakness can be the first sign.',
      'In Malaysia, use paracetamol for fever and avoid aspirin, mefenamic acid and ibuprofen until dengue has been ruled out.',
      'See a doctor if a fever lasts more than 2 days without improving, and urgently for confusion, a stiff neck, purple spots, breathlessness or dengue warning signs. In dengue, you can get worse as the fever falls.',
    ],
    sections: [
      { id: 'normal', h: 'What is a normal body temperature?', tocLabel: 'Normal temperature', html: `<p>The familiar figure of 37°C comes from a German doctor’s measurements in 1851, which were taken in the armpit. Modern studies have found lower averages:</p>
<ul>
<li>A 1992 US study of 148 healthy adults found an average oral temperature of <strong>36.8°C</strong>, with an upper limit of 37.7°C.</li>
<li>A 2017 study of more than 35,000 UK patients found an average of <strong>36.6°C</strong>.</li>
<li>A 2023 US study of nearly 400,000 outpatient visits found that no group had an average as high as 37°C.</li>
</ul>
<p>“Normal” differs from person to person, and it changes with:</p>
<ul>
<li><strong>Time of day:</strong> lowest in the early morning and highest in the late afternoon</li>
<li><strong>Age:</strong> tends to be lower in older people</li>
<li><strong>Menstrual cycle:</strong> about 0.3 to 0.7°C higher in the second half of the cycle</li>
<li><strong>Your thermometer</strong> and where you take the reading</li>
</ul>
<p>Small Malaysian and Japanese comparisons suggest that people living in hot climates may have slightly different resting temperatures, but nothing supports using a different fever threshold in Malaysia.</p>` },
      { id: 'numbers', h: 'What temperature is a fever?', tocLabel: 'Fever numbers', html: `<div class="table-wrap"><table>
<thead><tr><th>Oral reading</th><th>What it generally means</th></tr></thead>
<tbody>
<tr><td>Below 35°C</td><td><strong>Hypothermia.</strong> See a doctor right away</td></tr>
<tr><td>About 36.5 to 37.5°C</td><td>Normal for most adults</td></tr>
<tr><td>37.5 to 37.9°C</td><td>Low-grade fever (there is no agreed range)</td></tr>
<tr><td>38°C and above</td><td><strong>Fever</strong></td></tr>
<tr><td>Above 39.4°C</td><td>Call or see a doctor</td></tr>
<tr><td>Above 40°C</td><td><strong>See a doctor right away</strong></td></tr>
<tr><td>Above 41.5°C</td><td>Hyperpyrexia, a medical emergency</td></tr>
</tbody></table></div>
<p><strong>The site of the reading matters.</strong> As a rough guide, ear and rectal readings are about 0.6°C higher than oral readings, and forehead readings are about 0.6°C lower. That means a forehead reading of about 37.4°C can correspond to an oral reading of 38°C. Armpit readings are the least reliable.</p>
<p>You can feel hot, shivery or unwell with a reading below 38°C. How you feel matters as well as the number.</p>
<p><strong>Older people:</strong> more than half of older long-term care residents with a serious infection don’t develop a typical fever. For them, a temperature above 37.8°C, repeated readings above 37.2°C, or a rise of more than 1.1°C above their usual temperature can be significant. A low temperature can also be a sign of sepsis.</p>
${figure('heat-thermometer', 'A thermometer showing a high temperature', 'Normal temperature varies through the day, so one borderline reading matters less than how you feel and how it changes.')}` },
      { id: 'measure', h: 'How to take your temperature properly', tocLabel: 'How to measure', html: `<ul>
<li><strong>Use a digital thermometer</strong> under the tongue, as the NHS advises. Keep your mouth closed until it beeps.</li>
<li><strong>Wait after hot or cold drinks.</strong> A small study suggested about 15 minutes after a cold drink and 23 minutes after a hot one. Rest after exercise too.</li>
<li><strong>Forehead (infrared) thermometers:</strong> follow the instructions, make sure your forehead is dry and uncovered, and don’t use one in sunlight or a draught. Let it adjust to the room for 10 to 30 minutes if it has been moved. A 2015 review found that home-style thermometers, including ear, forehead, armpit and oral types, missed around a third of fevers, and forehead devices aren’t recommended for detecting one. If you feel ill, go by how you feel as well as the number.</li>
<li><strong>Avoid mercury thermometers.</strong> The WHO has called for them to be phased out, because of the danger if they break.</li>
</ul>` },
      { id: 'treat', h: 'Treating a fever at home', tocLabel: 'Treatment', html: `<p>A fever is part of the body’s response to infection, and it doesn’t always need treating. Medicine is usually unnecessary below about 38.3°C if you feel all right. Take it if you feel unwell.</p>
<ul>
<li><strong>Rest and drink plenty of fluids.</strong> In suspected dengue, the Malaysian guideline advises more than 2 litres a day, and not plain water alone.</li>
<li><strong>Paracetamol:</strong> 500mg to 1g, at least 4 hours apart, with no more than 4g in 24 hours. If you weigh under 50kg, you may need less. Many cold and flu remedies also contain paracetamol, so check the label. See our guide to <a href="/articles/painkillers-paracetamol-ibuprofen-malaysia/">painkillers</a>.</li>
<li><strong>Avoid aspirin, mefenamic acid and ibuprofen</strong> until dengue has been ruled out, because of the risk of bleeding. Guidance from other countries may recommend ibuprofen for fever, but this advice doesn’t account for dengue.</li>
<li><strong>Cooling:</strong> Malaysian dengue guidance lists tepid sponging. Other guidance says extra cooling is only needed for very high temperatures, around 41°C. Don’t use rubbing alcohol.</li>
<li><strong>Antibiotics</strong> don’t treat viral fevers, including dengue, flu and most coughs and colds.</li>
<li><strong>Don’t have injections, massage or cupping</strong> when you have suspected dengue.</li>
</ul>` },
      { id: 'causes', h: 'Common causes of fever in Malaysia', tocLabel: 'Causes', html: `<ul>
<li><a href="/articles/dengue-klang-valley-first-three-days/"><strong>Dengue</strong></a>: fever for 2 to 7 days, with headache, body aches and sometimes a rash</li>
<li><a href="/articles/influenza-a-malaysia/"><strong>Influenza</strong></a>, <a href="/articles/urti-common-cold-selsema-malaysia/">colds</a> and COVID-19</li>
<li><a href="/articles/uti-urinary-tract-infection-malaysia/"><strong>Urinary tract infections</strong></a>, especially with back pain or burning urine</li>
<li><strong>Leptospirosis</strong>, from water or soil contaminated by animal urine, which can cause fever, red eyes and jaundice</li>
<li><strong><a href="/articles/typhoid-injection-food-handlers-malaysia/">Typhoid</a></strong>: prolonged high fever and tummy pain</li>
<li><strong>Malaria</strong>, after time in forest areas of Sabah, Sarawak, Kelantan or Pahang, or travel abroad</li>
<li><strong><a href="/articles/tuberculosis-tb-malaysia/">Tuberculosis</a></strong>: a long-lasting cough, night sweats and weight loss</li>
</ul>
<p><strong>A fever without a clear cause:</strong> doctors use the term “fever of unknown origin” for a temperature above 38.3°C lasting more than 3 weeks, with no cause found after investigation. Infections, cancers and autoimmune conditions can all cause it.</p>
<p><strong>Fever or heat illness?</strong> In hot weather, heat exhaustion causes heavy sweating, cool clammy skin and tiredness, and should improve within 30 minutes of cooling down and drinking. <strong>Heatstroke is an emergency</strong>: look for confusion, seizures or collapse, and call <a href="tel:999">999</a>. Malaysia recorded 45 heat illness cases, including 2 deaths, in early 2024.</p>` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<p><strong>Go to an emergency department or call <a href="tel:999">999</a> for a fever with:</strong></p>
<ul>
<li>confusion, unusual drowsiness or difficulty waking</li>
<li>severe headache with a stiff neck</li>
<li>a purple or dark rash that doesn’t fade</li>
<li>breathlessness or chest pain</li>
<li>a <a href="/articles/seizures-sawan-epilepsy-malaysia/">seizure</a></li>
<li>severe tummy pain</li>
</ul>
<p><strong>Dengue warning signs need hospital care straight away, even if the fever is going down:</strong></p>
<ul>
<li>tummy pain or tenderness</li>
<li>vomiting or diarrhoea more than 3 times in 24 hours</li>
<li>bleeding from the nose or gums, black stools or unusually heavy periods</li>
<li>drowsiness, restlessness or irritability</li>
<li>cold, clammy skin or difficulty breathing</li>
</ul>
<p><strong>See a doctor promptly if:</strong></p>
<ul>
<li>your fever has lasted 24 to 48 hours without improving, and in any case by 3 to 4 days</li>
<li>your temperature is above 39.4°C</li>
<li>you are pregnant, over 65, or have a weakened immune system or a long-term condition such as diabetes</li>
<li>you have recently had a baby or a miscarriage</li>
<li>you have recently been in a forest area or abroad</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for a fever',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'If you have a fever in Malaysia, a GP can check for dengue with a blood test and look for other causes. Our directory lists clinics across Malaysia, including those open late, at weekends and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-sunday/', 'Clinics open on Sunday']],
    faqs: [
      ['What is a normal body temperature for an adult?', 'About 36.5°C to 37.5°C for most adults, although modern studies put the average nearer 36.6°C. It changes through the day.'],
      ['Is 37.5°C a fever?', 'It is usually considered at most a low-grade fever when taken by mouth. A fever is generally 38°C or above. A reading of 37.5°C on the forehead may be closer to 38°C by mouth.'],
      ['Is 38°C a high fever?', 'It is a fever, but there is no agreed definition of a high fever. See a doctor if it lasts more than 2 days, if it goes above 39.4°C, or if you have any danger signs.'],
      ['Is 36°C normal?', 'It can be normal, especially early in the morning or in older people. A reading below 35°C is hypothermia. A low temperature with feeling very unwell may be a sign of serious infection.'],
      ['Which thermometer is the most accurate at home?', 'A digital thermometer used under the tongue is a good choice. Forehead and ear thermometers are convenient, but they can miss fevers.'],
      ['Can I take ibuprofen for a fever in Malaysia?', 'Avoid ibuprofen, aspirin and mefenamic acid until dengue has been ruled out, because they can increase the risk of bleeding. Use paracetamol instead.'],
      ['How many days of fever is too long?', 'See a doctor if a fever lasts more than 24 to 48 hours without improving, and in any case by 3 to 4 days. In dengue season, see a doctor early.'],
    ],
    sources: [
      ['Mackowiak et al — A critical appraisal of 98.6°F, JAMA (1992)', 'https://pubmed.ncbi.nlm.nih.gov/1302471/'],
      ['Obermeyer et al — Individual differences in normal body temperature, BMJ (2017)', 'https://doi.org/10.1136/bmj.j5468'],
      ['Protsiv et al — Decreasing human body temperature in the United States since the Industrial Revolution, eLife (2020)', 'https://elifesciences.org/articles/49555'],
      ['Ley et al — Defining usual oral temperature ranges in outpatients, JAMA Internal Medicine (2023)', 'https://doi.org/10.1001/jamainternmed.2023.4291'],
      ['Niven et al — Accuracy of peripheral thermometers, Annals of Internal Medicine (2015)', 'https://doi.org/10.7326/M15-1150'],
      ['MSD Manual Consumer Version — Fever in adults (May 2026)', 'https://www.msdmanuals.com/home/infections/biology-of-infectious-disease/fever-in-adults'],
      ['MSD Manual Professional Version — Fever (Apr 2026)', 'https://www.msdmanuals.com/professional/infectious-diseases/biology-of-infectious-disease/fever'],
      ['Cleveland Clinic — Fever (2023)', 'https://my.clevelandclinic.org/health/symptoms/10880-fever'],
      ['Cleveland Clinic — Hyperpyrexia (2025)', 'https://my.clevelandclinic.org/health/diseases/hyperpyrexia'],
      ['NHS — High temperature (fever) in adults (Oct 2026)', 'https://www.nhs.uk/symptoms/fever-in-adults/'],
      ['NHS — Hypothermia (2023)', 'https://www.nhs.uk/conditions/hypothermia/'],
      ['NHS — Sepsis (2026)', 'https://www.nhs.uk/conditions/sepsis/'],
      ['NHS — How and when to take paracetamol for adults (2026)', 'https://www.nhs.uk/medicines/paracetamol-for-adults/how-and-when-to-take-paracetamol-for-adults/'],
      ['NHS — Heat exhaustion and heatstroke (2026)', 'https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/'],
      ['NHS — Leptospirosis (2023)', 'https://www.nhs.uk/conditions/leptospirosis/'],
      ['Infectious Diseases Society of America — Evaluation of fever and infection in older adult residents of long-term care facilities (2008)', 'https://academic.oup.com/cid/article/48/2/149/411131'],
      ['Ministry of Health Malaysia — Clinical practice guideline: management of dengue infection in adults, 3rd edition (2015)', 'https://jknjohor.moh.gov.my/jknj/wp-content/uploads/2023/02/CPG-Dengue-Adult.pdf'],
      ['WHO — Dengue and severe dengue (Aug 2025)', 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue'],
      ['WHO — Typhoid (2023)', 'https://www.who.int/news-room/fact-sheets/detail/typhoid'],
      ['WHO — Calls for the phase-out of mercury fever thermometers (2013)', 'https://www.who.int/news/item/11-10-2013-who-calls-for-the-phase-out-of-mercury-fever-thermometers-and-blood-pressure-measuring-devices-by-2020'],
      ['US FDA — Non-contact infrared thermometers (2026)', 'https://www.fda.gov/medical-devices/general-hospital-devices-and-supplies/non-contact-infrared-thermometers'],
      ['HealthDay — Taking your temperature? Lay off the snacking (2006)', 'https://www.healthday.com/health-news/general-health/taking-your-temperature-lay-off-the-snacking-530480.html'],
      ['American Family Physician — Fever of unknown origin (2003)', 'https://www.aafp.org/pubs/afp/issues/2003/1201/p2223.html'],
      ['The Vibes — MOH: 45 heat-related illness cases reported nationwide (Apr 2024)', 'https://www.thevibes.com/articles/news/101627/moh-45-heat-related-illness-cases-reported-nationwide'],
      ['The Star — Malaysia’s current malaria battle front: zoonotic disease (Apr 2026)', 'https://www.thestar.com.my/lifestyle/health/2026/04/26/malaysia039s-current-malaria-battle-front-zoonotic-disease'],
    ],
    related: ['fever-in-children-malaysia', 'dengue-klang-valley-first-three-days', 'painkillers-paracetamol-ibuprofen-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'seizures-sawan-epilepsy-malaysia',
    title: 'Sawan (seizures and fits): first aid, causes and epilepsy in Malaysia',
    crumb: 'Sawan (seizures) and epilepsy',
    desc: 'Sawan means a seizure or fit. What to do when someone has one, what not to do, when to call 999, the common causes, and how epilepsy is diagnosed and treated in Malaysia.',
    excerpt: 'If someone has a fit in front of you, what should you do? Step-by-step seizure first aid, why you should never put a spoon in the mouth, when to call 999, what causes seizures, and how epilepsy is treated in Malaysia.',
    standfirst: 'Sawan is the Malay word for a seizure or fit. Seeing one is frightening, but most stop by themselves within a few minutes, and simple first aid helps keep the person safe. Never put anything in their mouth. Here is what to do, when to call for help, and what happens next if it could be epilepsy.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Seizure', 'Epilepsy', 'Sawan'],
    image: 'caring-hands', imageAlt: 'One person holding another person’s hands in support',
    keyPoints: [
      'During a seizure: time it, move dangerous objects away, cushion the head, and stay with the person. Once the jerking stops, turn them on their side.',
      'Never put a spoon, your fingers or anything else in their mouth. A person can’t swallow their tongue. Don’t hold them down, and don’t give food, water or pills until they are fully awake.',
      'Call 999 if it is a first seizure, it lasts more than 5 minutes, seizures repeat without recovery, the person is injured, or they have trouble breathing.',
      'One seizure isn’t the same as epilepsy. Epilepsy generally means two or more unprovoked seizures, or one with a high risk of more.',
      'Up to 70% of people with epilepsy can become seizure-free with the right treatment. Don’t stop medicines without specialist advice, especially in pregnancy.',
    ],
    sections: [
      { id: 'first-aid', h: 'First aid: what to do if someone has a seizure', tocLabel: 'First aid', html: `<ol>
<li><strong>Stay calm and time it.</strong> Note when the seizure started.</li>
<li><strong>Make the area safe.</strong> Move sharp or hot objects away. Only move the person if they are in danger, such as on a road or near water.</li>
<li><strong>Cushion the head</strong> with something soft, such as a folded jacket, and loosen anything tight around the neck.</li>
<li><strong>When the jerking stops, turn them on their side</strong> in the recovery position, to keep the airway clear.</li>
<li><strong>Stay with them</strong> until they have fully recovered. Speak gently and tell them what happened.</li>
</ol>
<p><strong>What not to do:</strong></p>
<ul>
<li><strong>Don’t put anything in their mouth</strong>, including a spoon, stick, wallet or your fingers. A person can’t swallow their tongue. In Malaysia, doctors still have to warn people against using a spoon. It can break teeth and block the airway.</li>
<li><strong>Don’t hold them down</strong> or try to stop the jerking.</li>
<li><strong>Don’t give food, water or pills</strong> until they are fully awake, as these can enter the lungs.</li>
<li><strong>Don’t crowd them</strong> or try to wake them up.</li>
</ul>
<h3>When to call 999</h3>
<ul>
<li>it is the person’s <strong>first seizure</strong>, or you don’t know whether it is</li>
<li>it lasts <strong>more than 5 minutes</strong>, or longer than is usual for them</li>
<li>another seizure starts without them recovering in between</li>
<li>they don’t recover fully, or they have trouble breathing</li>
<li>they are seriously injured</li>
<li>they have had <strong>three or more seizures in 24 hours</strong></li>
</ul>
<p>A seizure lasting 5 minutes or more is called <strong>status epilepticus</strong> and is a medical emergency.</p>
${figure('caring-hands', 'A person holding someone’s hands in reassurance', 'Stay with the person until they have fully recovered and tell them what happened.')}` },
      { id: 'what', h: 'What is a seizure?', tocLabel: 'What a seizure is', html: `<p>A seizure is a sudden burst of electrical activity in the brain that temporarily affects how it works. Not every seizure involves falling and jerking.</p>
<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>What it looks like</th></tr></thead>
<tbody>
<tr><td><strong>Tonic-clonic</strong></td><td>The person loses consciousness, goes stiff, falls and jerks, then is tired and confused afterwards</td></tr>
<tr><td><strong>Focal</strong></td><td>Starts in one part of the brain. There may be twitching, lip-smacking or strange smells or feelings, and the person may stay aware</td></tr>
<tr><td><strong>Absence</strong></td><td>A few seconds of blankness, more common in children, and easily mistaken for daydreaming</td></tr>
</tbody></table></div>
<p><strong>Seizure or faint?</strong> Someone who has fainted usually wakes within about 30 seconds and recovers quickly. See our guide to <a href="/articles/low-blood-pressure-darah-rendah-malaysia/">low blood pressure and fainting</a>. Call <a href="tel:999">999</a> if someone who has fainted is shaking or jerking, or hasn’t woken within a minute.</p>` },
      { id: 'causes', h: 'What causes seizures?', tocLabel: 'Causes', html: `<ul>
<li><strong>Epilepsy</strong></li>
<li><strong>High fever in young children</strong> (see below)</li>
<li><strong><a href="/articles/normal-blood-sugar-level-malaysia/">Low blood sugar</a></strong>, especially in people taking insulin</li>
<li><strong>Stroke, head injury, a brain tumour</strong> or infections such as meningitis and encephalitis</li>
<li><strong>Alcohol or drug</strong> intoxication or withdrawal</li>
<li><strong>Low sodium or high calcium</strong> levels in the blood</li>
<li><strong>Eclampsia</strong>, a serious complication of pregnancy. A seizure in pregnancy or after birth is always an emergency.</li>
</ul>
<p>Seizures caused by a temporary problem are called “provoked” seizures and may not happen again once that problem is treated. In about half of people with epilepsy worldwide, no cause is found.</p>` },
      { id: 'children', h: 'Febrile seizures (sawan demam) in children', tocLabel: 'Febrile seizures', html: `<p>Febrile seizures are fits triggered by a fever, usually in children aged 6 months to 6 years. They are frightening, but few children go on to develop epilepsy.</p>
<p><strong>Call <a href="tel:999">999</a> or go to an emergency department</strong> if it is the first one, it lasts more than 5 minutes, your child has trouble breathing, the twitching affects only one side, your child is still sleepy after an hour, or it happens again within 24 hours. Don’t try to cool your child by sponging. See our guide to <a href="/articles/fever-in-children-malaysia/">fever in children</a>.</p>` },
      { id: 'epilepsy', h: 'Epilepsy (epilepsi)', tocLabel: 'Epilepsy', html: `<p><strong>Epilepsy</strong> generally means two or more unprovoked seizures, or one seizure with tests showing a high risk of more. A Malaysian community survey estimated that about 8 in 1,000 people have had epilepsy at some time, although that figure rests on a small number of confirmed cases.</p>
<p><strong>Tests:</strong> a detailed account from someone who saw the seizure is very useful, so try to film it if it is safe. Doctors may arrange an EEG (brainwave test), an MRI or CT scan, blood tests and a heart tracing (ECG). A normal EEG doesn’t rule out epilepsy.</p>
<p><strong>Treatment:</strong></p>
<ul>
<li><strong>Anti-seizure medicines</strong> are the main treatment. Generic options include carbamazepine, lamotrigine, levetiracetam, oxcarbazepine and sodium valproate. The choice depends on the type of seizure, your age, and whether you might become pregnant.</li>
<li>Up to <strong>70%</strong> of people can become seizure-free. More than 30% continue to have seizures despite treatment and may be referred to a specialist centre.</li>
<li><strong>Surgery</strong> can help selected people whose seizures start in one area of the brain.</li>
<li><strong>Ketogenic diets</strong>, under medical supervision, can help some people whose seizures don’t respond to medicines.</li>
<li><strong>Stopping medicines:</strong> your doctor may discuss this after at least 2 years without a seizure, but seizures do come back in a substantial proportion of people. Reduce them only under specialist guidance.</li>
</ul>
<p><strong>Rescue medicines:</strong> for long seizures, doctors may prescribe midazolam or rectal diazepam, and train family members in how to use them at home.</p>
<p><strong>SUDEP:</strong> sudden unexpected death in epilepsy happens in about 1 in 1,000 adults with epilepsy each year. The risk is highest in people with uncontrolled tonic-clonic seizures, particularly at night. Taking your medicines reliably is the most important way to reduce it.</p>
<p><strong>Words matter.</strong> The old Malay term <em>gila babi</em> is stigmatising and is no longer used by doctors. The recommended word is <strong>epilepsi</strong>.</p>` },
      { id: 'living', h: 'Living with epilepsy in Malaysia', tocLabel: 'Living with epilepsy', html: `<ul>
<li><strong>Common triggers:</strong> missed medicines, lack of sleep, stress, alcohol and periods. Keep a seizure diary.</li>
<li><strong>Safety at home:</strong> choose showers over baths, or have someone nearby when bathing. Swim only with someone who knows what to do. Avoid ladders and working at heights.</li>
<li><strong>Pregnancy:</strong> Malaysia’s drug regulator warns that sodium valproate carries about a 10% risk of birth defects and up to a 30 to 40% risk of serious developmental problems. It should only be used in women if there is no alternative. Plan pregnancy with your doctor, ask about folic acid, and <strong>don’t stop your medicine without talking to your doctor</strong> first.</li>
<li><strong>Driving:</strong> Malaysian law requires you to declare any condition likely to endanger the public when applying for or holding a licence, and knowingly driving with such a condition is an offence. Malaysian clinical guidelines suggest that driving may be allowed if epilepsy is well controlled and you have been seizure-free for at least a year, but public buses, heavy machinery and commercial flying are not allowed. Ask your neurologist and JPJ about your situation.</li>
<li><strong>Support:</strong> Persatuan Epilepsi Malaysia and the Epilepsy Council of the Malaysian Society of Neurosciences provide information for patients and families.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'After a seizure',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A first seizure needs emergency assessment. Afterwards, a GP can review your medicines, check blood tests and arrange a referral to a neurologist. Our directory lists GP clinics across Malaysia, including those open late and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What is sawan in English?', 'Sawan means a seizure or fit. Sawan demam is a febrile seizure, a fit triggered by a fever in a young child.'],
      ['What should I do if someone has a seizure?', 'Time it, move dangerous objects away, cushion the head, and stay with them. Turn them on their side once the jerking stops. Call 999 if it lasts more than 5 minutes or is a first seizure.'],
      ['Should I put a spoon in someone’s mouth during a seizure?', 'No. Never put anything in their mouth. A person can’t swallow their tongue, and objects can break teeth or block the airway.'],
      ['Does one seizure mean I have epilepsy?', 'Not necessarily. Many single seizures have a temporary cause. Epilepsy generally means two or more unprovoked seizures, or one with a high risk of more.'],
      ['How long can a seizure last before it is an emergency?', 'Call 999 if it lasts more than 5 minutes, or longer than is usual for the person.'],
      ['Can epilepsy be cured?', 'Up to 70% of people become seizure-free with treatment, and many children outgrow it. Some people can eventually stop medicines under specialist guidance.'],
      ['Can you drive with epilepsy in Malaysia?', 'You must declare it. Malaysian clinical guidelines suggest driving may be allowed when epilepsy is well controlled and you have been seizure-free for at least a year. Ask your neurologist and JPJ.'],
      ['Is sawan dangerous?', 'Most seizures stop by themselves within a few minutes. The dangers are injuries, seizures lasting more than 5 minutes, and rarely sudden death, so treatment and first aid both matter.'],
    ],
    sources: [
      ['NHS — What to do if someone has a seizure (fit)', 'https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/'],
      ['NHS — Epilepsy (Mar 2025)', 'https://www.nhs.uk/conditions/epilepsy/'],
      ['NHS — Febrile seizures (Jun 2023)', 'https://www.nhs.uk/conditions/febrile-seizures/'],
      ['NHS — Epilepsy and pregnancy (Feb 2026)', 'https://www.nhs.uk/pregnancy/existing-health-conditions/epilepsy/'],
      ['NHS — Fainting (Aug 2026)', 'https://www.nhs.uk/symptoms/fainting/'],
      ['WHO — Epilepsy fact sheet (Feb 2024)', 'https://www.who.int/news-room/fact-sheets/detail/epilepsy'],
      ['Epilepsy Foundation — Seizure first aid resources', 'https://www.epilepsy.com/recognition/first-aid-resources'],
      ['Epilepsy Society — First aid for seizures', 'https://epilepsysociety.org.uk/about-epilepsy/first-aid-epileptic-seizures'],
      ['Epilepsy Society — Seizure types', 'https://epilepsysociety.org.uk/about-epilepsy/epileptic-seizures/seizure-types'],
      ['Epilepsy Society — SUDEP', 'https://epilepsysociety.org.uk/living-epilepsy/sudep'],
      ['Epilepsy Society — Safety', 'https://epilepsysociety.org.uk/living-epilepsy/safety'],
      ['NICE — Epilepsies in children, young people and adults, NG217 (updated Aug 2026)', 'https://www.nice.org.uk/guidance/ng217/chapter/7-Treating-status-epilepticus-repeated-or-cluster-seizures-and-prolonged-seizures'],
      ['Malaysian Society of Neurosciences — Consensus guidelines on the management of epilepsy, 3rd edition (2017)', 'https://www.neuro.org.my/assets/guideline/2017Epilepsy.pdf'],
      ['Fong et al — Prevalence of epilepsy in Malaysia, Epilepsy Research (2021)', 'https://knova.um.edu.my/research_publications_2021_2025/11343'],
      ['ILAE Epigraph — Changing the term for epilepsy in Malaysia (2024)', 'https://www.ilae.org/journals/epigraph/epigraph-vol-26-issue-4-fall-2024/changing-the-term-for-epilepsy-in-malaysia-why-and-how-dr-chong-tin-tan'],
      ['Utusan Malaysia — Elak kematian mengejut akibat sawan (Nov 2021)', 'https://www.utusan.com.my/gaya/kesihatan/2021/11/elak-kematian-mengejut-akibat-sawan/'],
      ['NPRA Malaysia — Safety alert on sodium valproate in pregnancy (Jan 2020)', 'https://npra.gov.my/index.php/en/component/content/article/419-english/safety-alerts-main/safety-alerts-2020/1527061-new-safety-measure-for-sodium-valproate-i-risk-of-congenital-malformation-in-neonates-and-neurodevelopmental-problems-in-children-exposed-to-sodium-valproate-during-pregnancy-ii-additional-educational-material-for-healthcare-professionals-and-patients-caretakers.html'],
      ['Road Transport Act 1987 (Act 333)', 'https://aipalync.org/document/view/233'],
      ['Persatuan Epilepsi Malaysia', 'https://sites.google.com/site/malaysiansocietyofepilepsy/'],
      ['Epilepsy Council Malaysia', 'https://sites.google.com/view/epilepsycouncilmalaysia'],
    ],
    related: ['fever-in-children-malaysia', 'clinic-or-emergency-department', 'stroke-heart-attack-kuala-lumpur'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'umrah-haj-vaccine-meningitis-malaysia',
    title: 'Umrah and Haj vaccines for Malaysians (vaksin umrah): meningitis jab, certificates and health checks',
    crumb: 'Umrah and Haj vaccines',
    desc: 'Vaksin umrah and Haj vaccines for Malaysians: the meningitis jab rule, when to get it, what the certificate must show, flu and COVID-19 vaccines, the Haj health exam, and staying well.',
    excerpt: 'Going for Umrah or Haj? What Saudi Arabia and the Malaysian Ministry of Health require, when to get the meningitis vaccine, what your certificate must show, how the Haj health exam works, and how to stay well in the heat and crowds.',
    standfirst: 'Saudi Arabia requires pilgrims to be vaccinated against meningococcal meningitis, and the Malaysian Ministry of Health says Malaysian Haj and Umrah pilgrims must have the jab. It needs to be done at least two weeks before you travel, and the certificate has to show the right details. Here is what to arrange, and how to look after your health on the journey.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Meningococcal vaccine', 'Umrah', 'Hajj'],
    image: 'vaccination', imageAlt: 'A healthcare worker giving a vaccination in the upper arm',
    keyPoints: [
      'Saudi Arabia requires a meningococcal ACWY vaccine for Umrah and Haj pilgrims, given at least 10 days before arrival. The Malaysian Ministry of Health advises having it at least two weeks before departure.',
      'A conjugate vaccine is valid for 5 years and a polysaccharide vaccine for 3 years. The certificate must show the vaccine name and date. If the type isn’t shown, it counts as valid for 3 years only.',
      'Saudi Arabia also requires COVID-19 vaccination proof from Umrah pilgrims aged over 65, pregnant women and people with certain chronic conditions, and advises a flu vaccine for all.',
      'Haj pilgrims must pass a health exam before receiving their offer. Saudi rules exclude people with conditions such as kidney failure on dialysis, advanced dementia, or late or high-risk pregnancy.',
      'Heat is one of the biggest dangers. More than 1,300 people died of heat-related causes during Haj 2024. Drink regularly, avoid direct sun and ask your doctor about any water tablets you take.',
    ],
    sections: [
      { id: 'required', h: 'Which vaccines do you need for Umrah and Haj?', tocLabel: 'Vaccines needed', html: `<p>These are Saudi Arabia’s published requirements for the 1447H (2026) season, the latest available at the time of writing. <strong>Check for updates before you travel</strong>, especially for Haj 2027.</p>
<div class="table-wrap"><table>
<thead><tr><th>Vaccine</th><th>Requirement</th><th>Applies to</th></tr></thead>
<tbody>
<tr><td><strong>Meningococcal ACWY</strong></td><td>Required. At least 10 days before arrival.</td><td>All pilgrims</td></tr>
<tr><td><strong>COVID-19</strong></td><td>Proof required for some Umrah pilgrims. Saudi Haj rules refer to “specific groups”.</td><td>For Umrah: over-65s, pregnant women and people with listed chronic conditions</td></tr>
<tr><td><strong>Influenza</strong></td><td>Advised, using the current season’s vaccine</td><td>All pilgrims, especially older people and those with chronic illness</td></tr>
<tr><td><strong>Polio and yellow fever</strong></td><td>Only for travellers from listed countries</td><td>Malaysia isn’t on these lists</td></tr>
<tr><td><strong>Routine vaccines</strong></td><td>Saudi Arabia advises being up to date</td><td>Diphtheria, tetanus, whooping cough, polio, measles, mumps, chickenpox</td></tr>
</tbody></table></div>
<p><strong>In Malaysia:</strong> in May 2024 the Ministry of Health said Malaysian pilgrims “are required to take meningococcal vaccines” for both Haj and Umrah. For the 2025 Haj season, the ministry also made COVID-19 and flu vaccines compulsory for pilgrims aged 65 and over or at high risk. Requirements for 2027 hadn’t been confirmed when this guide was written, so check with Tabung Haji or your Umrah agency.</p>` },
      { id: 'meningitis', h: 'The meningitis jab: timing and your certificate', tocLabel: 'Meningitis jab', html: `<p>Meningococcal disease spreads easily in crowds and can be fatal: about <strong>1 in 6</strong> people with bacterial meningitis die. The World Health Organization reported 11 confirmed cases linked to Umrah between January and March 2025. None of those people had been vaccinated.</p>
<p><strong>When to have it:</strong> Saudi rules say at least <strong>10 days before arrival</strong>. The Malaysian Ministry of Health advises at least <strong>two weeks before departure</strong>. Following the Malaysian advice meets both, and allows time for your body to build protection.</p>
<div class="table-wrap"><table>
<thead><tr><th>Vaccine type</th><th>Accepted for</th></tr></thead>
<tbody>
<tr><td>Conjugate (ACWY or ACWYX)</td><td>5 years</td></tr>
<tr><td>Polysaccharide</td><td>3 years</td></tr>
<tr><td>Type not shown on the certificate</td><td>3 years only</td></tr>
</tbody></table></div>
<p><strong>Your certificate should:</strong></p>
<ul>
<li>clearly show the <strong>vaccine name</strong> and the <strong>date</strong> you had it</li>
<li>have your name spelled as in your passport</li>
<li>be an official vaccination certificate, not just a payment receipt</li>
</ul>
<p>Keep it with your passport and carry it on your trip. Saudi rules differ in how they describe checks for each country, and the WHO advises pilgrims to carry proof. Ask your agency how they will check it. If your earlier vaccine is still within its valid period, you don’t need another dose, as long as your certificate shows this.</p>
${figure('vaccination', 'A healthcare worker giving an injection in the upper arm', 'Have the meningitis vaccine at least two weeks before you travel, and keep the certificate with your passport.')}` },
      { id: 'where', h: 'Where to get the vaccine in Malaysia', tocLabel: 'Where to get it', html: `<ul>
<li><strong>Umrah:</strong> the Ministry of Health said in 2024 that Umrah pilgrims should get the vaccine at private healthcare facilities. Many private GP clinics offer it, but stock varies, so <strong>call first</strong> and ask for the vaccine type and whether a certificate is included.</li>
<li><strong>Haj:</strong> vaccination is available at government facilities or privately. In the 2025 season, the COVID-19 vaccine was free at selected clinics, and the flu vaccine was free at selected government facilities for pilgrims aged 60 and over with a chronic illness. Check the current arrangements with Tabung Haji.</li>
</ul>
<p>Prices at private clinics vary, so ask what is included. Allow several weeks if you are going in a busy period.</p>` },
      { id: 'haj-exam', h: 'The Haj health exam', tocLabel: 'Haj health exam', html: `<p>Malaysian Haj pilgrims must pass a health examination before they can receive their offer. In recent seasons:</p>
<ul>
<li>the exam is done at premises registered with Tabung Haji, and is free at government facilities</li>
<li>you bring your MyKad and offer letter</li>
<li>your status is shown by SMS, THiJARI or MySejahtera</li>
<li>people who don’t meet the standard are advised to postpone</li>
</ul>
<p><strong>Conditions that Saudi Arabia says should not travel</strong> (1447H rules):</p>
<ul>
<li>kidney failure needing dialysis</li>
<li>heart failure with symptoms on minimal effort</li>
<li>lung disease needing oxygen</li>
<li>cirrhosis with liver failure</li>
<li>severe neurological or psychiatric disorders that affect thinking, and dementia</li>
<li>pregnancy in the last trimester, or high-risk pregnancy</li>
<li>active infections such as open tuberculosis</li>
<li>active cancer on chemotherapy, or severe immune-suppressing treatment</li>
</ul>
<p>Stable <a href="/articles/blood-pressure-cholesterol-malaysia/">high blood pressure</a> and <a href="/articles/normal-blood-sugar-level-malaysia/">diabetes</a> don’t automatically rule you out, but get them under control well before the exam. Haj 2027 is expected around mid-May 2027, subject to the sighting of the moon, with the first flights from Malaysia around April.</p>` },
      { id: 'other', h: 'Other vaccines to consider', tocLabel: 'Other vaccines', html: `<ul>
<li><strong><a href="/articles/flu-vaccine-malaysia/">Influenza</a>:</strong> strongly recommended by the US CDC for pilgrims. Respiratory infections are very common during Haj.</li>
<li><strong><a href="/articles/pneumonia-pneumococcal-vaccine-malaysia/">Pneumococcal</a>:</strong> pneumonia is among the most common reasons pilgrims are admitted to hospital. CDC advice covers those aged 65 and over and younger people with chronic illness. Ask your doctor.</li>
<li><strong><a href="/articles/hepatitis-b-malaysia/">Hepatitis B</a>:</strong> worth considering, as sharing razor blades at the end of the pilgrimage carries a risk. Use only licensed barbers and a new blade.</li>
<li><strong><a href="/articles/tetanus-injection-att-malaysia/">Tetanus</a>:</strong> check whether you are up to date.</li>
</ul>` },
      { id: 'safety', h: 'Side effects, pregnancy and who should check first', tocLabel: 'Side effects', html: `<ul>
<li><strong>Common side effects:</strong> a sore or red arm, muscle pain, headache and tiredness, usually lasting a day or two. Serious reactions are rare.</li>
<li><strong>Mild illness</strong> generally doesn’t stop you being vaccinated. If you have a fever or are moderately unwell, ask your doctor whether to wait.</li>
<li><strong>Don’t have the vaccine</strong> if you have had a life-threatening allergic reaction to a previous dose or to one of its ingredients.</li>
<li><strong>Pregnancy:</strong> speak to your doctor. Saudi authorities have advised that pregnant women, children, frail older people and those seriously ill consider postponing.</li>
<li><strong>Children:</strong> Saudi rules don’t set a minimum age, and travel health guidance covers those aged 1 and over. Ask your doctor about the right vaccine for your child.</li>
</ul>` },
      { id: 'staying-well', h: 'Staying well on your trip', tocLabel: 'Staying well', html: `<ul>
<li><strong>Heat:</strong> temperatures can reach 50°C. Drink fluids regularly, avoid direct sun and rest in the shade. If you take water tablets (diuretics), ask your doctor before you go whether they need adjusting. Know your <a href="/articles/normal-body-temperature-fever-adults-malaysia/">temperature numbers and danger signs</a>.</li>
<li><strong>“Haj cough”:</strong> coughs and chest infections spread easily. Wash your hands, and wear a mask in crowds. See a doctor for fever, breathlessness or a cough that is getting worse.</li>
<li><strong>MERS:</strong> avoid camels and raw camel products. About 35% of people with this infection die. Seek medical advice if you develop a fever or cough within 14 days of returning, and tell the doctor you have been to Saudi Arabia.</li>
<li><strong>Medicines:</strong> carry them in their original packaging, with documents listing your conditions and treatment. Malaysian Haj pilgrims have also been registered for an International Patient Summary through MySejahtera.</li>
<li><strong>Diabetes:</strong> pack your medicines, syringes, glucose meter and fast-acting carbohydrate. Ask your doctor how to adjust doses for long walking days.</li>
<li><strong>Feet:</strong> long walks can cause blisters. People with diabetes or numb feet should wear protective footwear and cover any sore.</li>
<li><strong>Tummy upsets:</strong> keep to safe food and drink, and see our guide to <a href="/articles/diarrhoea-cirit-birit-malaysia/">diarrhoea (cirit birit)</a>.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for your vaccine',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Many GP clinics give the meningitis vaccine for Umrah, and can also review your medicines before you travel. Call first to check that the vaccine is in stock and that a certificate is provided. Our directory lists GP clinics across Malaysia, including clinics open at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['Is the meningitis vaccine compulsory for Umrah from Malaysia?', 'Yes. Saudi Arabia requires it for pilgrims, and the Malaysian Ministry of Health said in 2024 that Malaysian Haj and Umrah pilgrims are required to have it.'],
      ['How long before Umrah should I get the vaccine?', 'At least two weeks before you leave, as advised by the Malaysian Ministry of Health. Saudi Arabia’s minimum is 10 days before arrival.'],
      ['How long is the meningitis vaccine valid for Umrah?', 'A conjugate vaccine is accepted for 5 years and a polysaccharide vaccine for 3 years. If the certificate doesn’t show the vaccine type, it is accepted for 3 years only.'],
      ['Can I get the Umrah vaccine at a Klinik Kesihatan?', 'The Ministry of Health said in 2024 that Umrah pilgrims should go to private healthcare facilities. Haj pilgrims can be vaccinated at government facilities.'],
      ['Do I need a flu vaccine for Umrah?', 'Saudi Arabia advises it, and it is especially worthwhile for older people and those with chronic illness. Proof isn’t listed as a requirement for Umrah.'],
      ['Can I perform Umrah while pregnant?', 'Speak to your doctor first. Saudi Haj rules exclude pregnancy in the last trimester or high-risk pregnancy, and authorities have advised pregnant women to consider postponing.'],
      ['What is “Haj cough”?', 'A common term for coughs and chest infections that spread among pilgrims in crowded conditions. See a doctor for fever, breathlessness or a cough that is getting worse.'],
    ],
    sources: [
      ['Saudi Ministry of Health — Health requirements for Umrah, 1447H', 'https://www.moh.gov.sa/en/HealthAwareness/Pilgrims-Health/Documents/Health-Regulations-Umrah-EN.pdf'],
      ['Saudi Ministry of Health — Health requirements for Hajj, 1447H', 'https://www.moh.gov.sa/HealthAwareness/Pilgrims-Health/Documents/Hajj-Health-Requirements-English-language.pdf'],
      ['WHO — Disease outbreak news: invasive meningococcal disease, Kingdom of Saudi Arabia (11 Apr 2025)', 'https://www.who.int/emergencies/disease-outbreak-news/item/2025-DON563'],
      ['WHO — Meningitis fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/meningitis'],
      ['US CDC Yellow Book — Saudi Arabia: Hajj and Umrah pilgrimages (Apr 2026)', 'https://www.cdc.gov/yellow-book/hcp/africa-middle-east/saudi-arabia-hajj-and-umrah-pilgrimages.html'],
      ['US CDC — Meningococcal vaccines (Mar 2026)', 'https://www.cdc.gov/meningococcal/vaccines/index.html'],
      ['TravelHealthPro — Hajj and Umrah (Jun 2026)', 'https://travelhealthpro.org.uk/factsheet/19/hajj-and-umra'],
      ['The Star — Get vaccinated before leaving for haj, umrah, Malaysian pilgrims told (May 2024)', 'https://www.thestar.com.my/news/2024/05/28/get-vaccinated-before-leaving-for-haj-umrah-malaysian-pilgrims-told'],
      ['Malay Mail — MOH: All haj pilgrims must get meningococcal jab, Covid-19 and flu shots for high-risk groups (Feb 2025)', 'https://www.malaymail.com/news/malaysia/2025/02/15/moh-all-haj-pilgrims-must-get-meningococcal-jab-covid-19-and-flu-shots-for-high-risk-groups/166771'],
      ['Berita RTM — Bakal haji wajib ambil vaksin meningococcal (Feb 2025)', 'https://berita.rtm.gov.my/nasional/senarai-berita-nasional/senarai-artikel/bakal-haji-wajib-ambil-vaksin-meningococcal-2/'],
      ['Malay Mail — Malaysia vows to meet Saudi Arabia’s new health protocols for 2026 haj season (Oct 2025)', 'https://www.malaymail.com/news/malaysia/2025/10/21/malaysia-vows-to-meet-saudi-arabias-new-health-protocols-for-2026-haj-season/195426'],
      ['Utusan Malaysia — Surat tawaran haji kepada 31,600 bakal jemaah (Sep 2026)', 'https://www.utusan.com.my/nasional/2026/09/surat-tawaran-haji-kepada-31600-bakal-jemaah-dikeluarkan-mulai-21-sept/'],
      ['Sinar Harian — Panduan jawab tawaran haji (Oct 2025)', 'https://www.sinarharian.com.my/article/754813/sinar-islam/sinarnbspharamain/panduan-jawab-tawaran-haji'],
      ['Sinar Harian — Lebih 31,000 bakal haji didaftarkan dalam International Patient Summary (Apr 2025)', 'https://www.sinarharian.com.my/article/723524/berita/nasional/lebih-31000-bakal-haji-didaftarkan-dalam-international-patient-summary---dr-dzulkefly'],
      ['AkuIslam — Kalendar Haji 1448H (Oct 2026; estimated dates)', 'https://akuislam.com/haji-umrah/kalendar-haji-1448h/'],
    ],
    related: ['flu-vaccine-malaysia', 'pneumonia-pneumococcal-vaccine-malaysia', 'free-health-screening-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'malay-medical-terms-in-english',
    title: 'Malay medical terms in English: what cirit birit, bisul, buasir, sawan and other health words mean',
    crumb: 'Malay medical terms in English',
    desc: 'What common Malay health words mean in English: cirit birit, muntah, bisul, bengkak, buasir, sawan, selsema, kurap and more, with notes on words that have more than one meaning.',
    excerpt: 'A plain guide to the Malay words Malaysians use for common illnesses and symptoms, from cirit birit to kayap, with the English and medical terms, words that have two meanings, and links to our guides.',
    standfirst: 'Malaysians often switch between Malay and English when they talk about their health. This guide gives the English meaning of common Malay health words, along with the medical term where it helps. Some words have more than one meaning, so it is always worth describing your symptoms to the doctor too.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: false,
    about: ['Malay language', 'Medical terminology', 'Common illnesses'],
    image: 'doctor-notes', imageAlt: 'A doctor in blue gloves writing notes on a clipboard',
    keyPoints: [
      'Common words: cirit birit is diarrhoea, muntah is vomiting, loya is nausea, sembelit is constipation and buasir is piles.',
      'Skin words: bisul is a boil, kurap is ringworm, panau is a fungal skin patch, ketuat is a wart, kayap is shingles and nanah is pus.',
      'Some words have two meanings. Pening can mean dizziness or a headache, lelah can mean asthma or tiredness, and batuk kering can mean a dry cough or tuberculosis.',
      'Sawan means a seizure or fit. The old term gila babi for epilepsy is stigmatising, and doctors now use epilepsi.',
      'If you aren’t sure of the right word, describe what you feel and when it started. A doctor can work out the rest.',
    ],
    sections: [
      { id: 'tummy', h: 'Stomach and bowels', tocLabel: 'Stomach and bowels', html: terms([
        ['Cirit birit', 'Diarrhoea', 'Also written cirit-birit', 'diarrhoea-cirit-birit-malaysia'],
        ['Muntah', 'Vomiting', ''],
        ['Loya', 'Nausea, feeling sick', ''],
        ['Sembelit', 'Constipation', '', 'constipation-sembelit-malaysia'],
        ['Buasir', 'Piles (haemorrhoids)', '', 'piles-buasir-malaysia'],
        ['Sakit perut', 'Stomach ache, tummy pain', '', 'stomach-pain-gastric-malaysia'],
        ['Gastrik', 'Gastric pain, gastritis', 'Often used for any upper tummy pain, including reflux and ulcers', 'gerd-acid-reflux-malaysia'],
        ['Kembung perut, angin', 'Bloating, wind', '“Angin” can also describe a traditional idea of illness'],
        ['Keracunan makanan', 'Food poisoning', '', 'food-poisoning-gastroenteritis-malaysia'],
      ]) },
      { id: 'fever', h: 'Fever, coughs and breathing', tocLabel: 'Fever and coughs', html: terms([
        ['Demam', 'Fever', '', 'normal-body-temperature-fever-adults-malaysia'],
        ['Demam panas', 'High fever', 'A description, not the name of a disease'],
        ['Selsema, selesema', 'Common cold', 'Can also refer to influenza', 'urti-common-cold-selsema-malaysia'],
        ['Batuk', 'Cough', '', 'persistent-cough-malaysia'],
        ['Batuk kering', 'Dry cough, or tuberculosis', 'Check which is meant', 'tuberculosis-tb-malaysia'],
        ['Kahak', 'Phlegm (sputum)', ''],
        ['Sakit tekak', 'Sore throat', '', 'tonsillitis-sore-throat-malaysia'],
        ['Resdung', 'Nasal allergy, sinus problems', 'Used for allergic rhinitis and sinusitis', 'allergies-resdung-antihistamines-malaysia'],
        ['Lelah', 'Asthma, or tiredness', 'Context decides which'],
        ['Semput', 'Breathless', 'A symptom. Severe breathlessness is an emergency'],
        ['Sesak nafas', 'Shortness of breath', 'Severe breathlessness is an emergency'],
      ]) },
      { id: 'heart', h: 'Heart, blood and diabetes', tocLabel: 'Heart and diabetes', html: terms([
        ['Darah tinggi', 'High blood pressure (hypertension)', '', 'blood-pressure-cholesterol-malaysia'],
        ['Darah rendah', 'Low blood pressure (hypotension)', 'Not the same as kurang darah', 'low-blood-pressure-darah-rendah-malaysia'],
        ['Kurang darah', 'Anaemia', '', 'anaemia-iron-deficiency-malaysia'],
        ['Kencing manis', 'Diabetes', '', 'normal-blood-sugar-level-malaysia'],
        ['Sakit jantung', 'Heart disease', 'A heart attack is serangan jantung', 'stroke-heart-attack-kuala-lumpur'],
        ['Angin ahmar', 'Stroke', 'A medical emergency', 'stroke-heart-attack-kuala-lumpur'],
      ]) },
      { id: 'head', h: 'Head, nerves and pain', tocLabel: 'Head and nerves', html: terms([
        ['Sawan', 'Seizure, fit', 'Doesn’t always mean epilepsy', 'seizures-sawan-epilepsy-malaysia'],
        ['Epilepsi', 'Epilepsy', 'The old term gila babi is offensive and shouldn’t be used', 'seizures-sawan-epilepsy-malaysia'],
        ['Pening', 'Dizziness, or headache', 'Tell the doctor which you mean', 'vertigo-dizziness-malaysia'],
        ['Sakit kepala', 'Headache', '', 'headaches-malaysia'],
        ['Migrain', 'Migraine', 'Often one-sided, so people may say sakit kepala sebelah', 'headaches-malaysia'],
        ['Pitam', 'Blackout, feeling faint', 'Naik pitam means furious', 'low-blood-pressure-darah-rendah-malaysia'],
        ['Pengsan', 'Fainted, unconscious', 'Call 999 if the person doesn’t wake quickly'],
        ['Kebas', 'Numbness, pins and needles', 'Numb hands at night can be carpal tunnel syndrome', 'trigger-finger-carpal-tunnel-malaysia'],
        ['Kejang', 'Stiffness, cramp', 'For a fit, the word is sawan'],
        ['Sengal', 'Aching, stiff joints', 'Sengal tulang means rheumatic pain'],
        ['Sakit pinggang', 'Lower back pain', '', 'slipped-disc-sciatica-malaysia'],
        ['Sakit sendi', 'Joint pain', '', 'gout-malaysia'],
        ['Urat saraf terkepit', 'Pinched nerve', '', 'slipped-disc-sciatica-malaysia'],
      ]) },
      { id: 'skin', h: 'Skin', tocLabel: 'Skin', html: terms([
        ['Bisul', 'Boil (furuncle)', '', 'boils-styes-bisul-ketumbit-malaysia'],
        ['Nanah', 'Pus', ''],
        ['Kurap', 'Ringworm (tinea)', 'A fungal infection, not a worm', 'kurap-panau-fungal-skin-infection-malaysia'],
        ['Panau', 'Pale or dark skin patches (tinea versicolor)', '', 'kurap-panau-fungal-skin-infection-malaysia'],
        ['Kudis', 'Sores, itchy skin infection', 'Often used for scabies', 'scabies-kudis-buta-malaysia'],
        ['Kudis buta', 'Scabies', '', 'scabies-kudis-buta-malaysia'],
        ['Ketuat', 'Wart', '', 'warts-ketuat-malaysia'],
        ['Kayap', 'Shingles (herpes zoster)', '', 'shingles-kayap-malaysia'],
        ['Cacar air', 'Chickenpox', '', 'chickenpox-malaysia'],
        ['Campak', 'Measles', ''],
        ['Beguk', 'Mumps', 'Some dictionaries also list goitre'],
        ['Jerawat', 'Pimple, acne', '', 'acne-malaysia'],
        ['Ruam', 'Rash', 'Ruam panas is heat rash'],
        ['Ruam lampin', 'Nappy rash', ''],
        ['Gatal', 'Itchy', 'In casual speech, it can also mean flirtatious', 'itchy-skin-eczema-hives-malaysia'],
      ]) },
      { id: 'eyes', h: 'Eyes', tocLabel: 'Eyes', html: terms([
        ['Sakit mata', 'Eye pain or trouble', 'Often used for conjunctivitis, but can mean any eye problem', 'conjunctivitis-red-eyes-malaysia'],
        ['Mata merah', 'Red eye', 'A symptom. Often conjunctivitis', 'conjunctivitis-red-eyes-malaysia'],
        ['Ketumbit', 'Stye', 'Also called tembel', 'boils-styes-bisul-ketumbit-malaysia'],
        ['Rabun', 'Blurred vision', 'Rabun jauh is short-sightedness'],
      ]) },
      { id: 'women', h: 'Women, babies and urinary problems', tocLabel: 'Women and babies', html: terms([
        ['Senggugut', 'Period pain (dysmenorrhoea)', '', 'period-pain-senggugut-malaysia'],
        ['Keputihan', 'Vaginal discharge', ''],
        ['Mengandung', 'Pregnant', '', 'pregnancy-test-early-signs-malaysia'],
        ['Keguguran', 'Miscarriage', ''],
        ['Bayi kuning', 'Newborn jaundice', ''],
        ['Batu karang', 'Kidney or urinary stones', 'Can also be used for gallstones', 'kidney-stones-batu-karang-malaysia'],
        ['Kencing berdarah', 'Blood in the urine (haematuria)', 'Always worth checking', 'uti-urinary-tract-infection-malaysia'],
        ['Kencing tidak lawas', 'Weak flow, difficulty passing urine', 'Common with an enlarged prostate', 'enlarged-prostate-psa-test-malaysia'],
      ]) },
      { id: 'injuries', h: 'Swellings and injuries', tocLabel: 'Injuries', html: terms([
        ['Bengkak', 'Swelling', 'Swollen legs (kaki bengkak) in both legs should be checked'],
        ['Lebam', 'Bruise', ''],
        ['Luka', 'Wound, cut', '', 'tetanus-injection-att-malaysia'],
        ['Melecur', 'Scald, burn blister', ''],
        ['Lemah badan', 'Weakness, feeling weak', ''],
      ]) },
      { id: 'english-to-malay', h: 'English to Malay: common searches', tocLabel: 'English to Malay', html: `<div class="table-wrap"><table>
<thead><tr><th>English</th><th>Malay</th></tr></thead>
<tbody>
<tr><td>Diarrhoea (diarrhea)</td><td>Cirit birit</td></tr>
<tr><td>Constipation</td><td>Sembelit</td></tr>
<tr><td>Nausea</td><td>Loya</td></tr>
<tr><td>Dizzy</td><td>Pening</td></tr>
<tr><td>Fever</td><td>Demam</td></tr>
<tr><td>Cold or flu</td><td>Selsema</td></tr>
<tr><td>Cough</td><td>Batuk</td></tr>
<tr><td>Rash</td><td>Ruam</td></tr>
<tr><td>Bruise</td><td>Lebam</td></tr>
<tr><td>Food poisoning</td><td>Keracunan makanan</td></tr>
<tr><td>Asthma</td><td>Lelah</td></tr>
<tr><td>Kidney stone</td><td>Batu karang</td></tr>
<tr><td>Stroke</td><td>Angin ahmar</td></tr>
<tr><td>Wart</td><td>Ketuat</td></tr>
<tr><td>Piles</td><td>Buasir</td></tr>
</tbody></table></div>
<h3>Talking to your doctor</h3>
<p>You don’t need the medical word. Say what you feel, where it is, when it started, and what makes it better or worse. If a word has two meanings, such as <em>pening</em> or <em>lelah</em>, explain what you mean. If you are more comfortable in another language, ask the clinic if someone can help you, or bring a family member along.</p>
<p>This guide explains language only and doesn’t diagnose illness. If you are concerned about symptoms, see a doctor. Call <a href="tel:999">999</a> for an emergency, and see our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic near you',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Not sure what you have? A GP can examine you and explain it in plain language. Our directory lists clinics across Malaysia, including clinics open late, at weekends and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What is cirit birit in English?', 'Diarrhoea, which means passing loose or watery stools 3 or more times a day.'],
      ['What is bisul in English?', 'A boil, a painful, pus-filled lump under the skin caused by an infected hair follicle.'],
      ['What is buasir in English?', 'Piles, also called haemorrhoids: swollen veins in or around the back passage.'],
      ['What is sawan in English?', 'A seizure or fit. It doesn’t always mean epilepsy.'],
      ['What is bengkak in English?', 'Swelling or swollen.'],
      ['What is selsema in English?', 'The common cold. Selsema or selesema can also be used for influenza.'],
      ['What is muntah in English?', 'Vomiting, or being sick.'],
      ['What is nanah in English?', 'Pus, the thick fluid that can collect in an infected wound or boil.'],
      ['What is kayap in English?', 'Shingles, a painful blistering rash caused by the chickenpox virus becoming active again.'],
      ['What is the meaning of gila babi?', 'It is an old and stigmatising Malay term for epilepsy, and shouldn’t be used. The accepted word is epilepsi.'],
    ],
    sources: [
      ['Dewan Bahasa dan Pustaka — Pusat Rujukan Persuratan Melayu (Kamus Dewan, Kamus Pelajar, Kamus Inggeris-Melayu)', 'https://prpm.dbp.gov.my/'],
      ['Sharp Waves podcast — Changing the term for epilepsy in Malaysia', 'https://sharpwaves.buzzsprout.com/1886660/episodes/15533440-changing-the-term-for-epilepsy-in-malaysia-why-and-how-dr-chong-tin-tan'],
      ['ILAE Epigraph — Changing the term for epilepsy in Malaysia (2024)', 'https://www.ilae.org/journals/epigraph/epigraph-vol-26-issue-4-fall-2024/changing-the-term-for-epilepsy-in-malaysia-why-and-how-dr-chong-tin-tan'],
      ['Prince Court Medical Centre — Gastric pain and gastritis', 'https://princecourt.com/our-services/blogs-and-articles/gastric-pain-and-gastritis'],
      ['DoctorOnCall — Allergic rhinitis (resdung)', 'https://www.doctoroncall.com.my/health-centre/telinga-hidung-tekak/penyakit-hidung/allergic-rhinitis-resdung'],
      ['DoctorOnCall — Kudis buta', 'https://www.doctoroncall.com.my/health-centre/penyakit-parasit/kudis-buta/penyebab-kudis'],
      ['DoctorOnCall — Beguk', 'https://www.doctoroncall.com.my/health-centre/jangkitan/beguk/rawatan-gejala-beguk'],
      ['DoctorOnCall — Kayap', 'https://www.doctoroncall.com.my/health-centre/jangkitan/kayap/penyebab-rawatan-kayap'],
      ['DoctorOnCall — Kencing tak lawas', 'https://www.doctoroncall.com.my/health-centre/kesihatan-saluran-kencing/isu-kesihatan-lain/kencing-tak-lawas'],
      ['DoctorOnCall — Tekanan darah rendah', 'https://www.doctoroncall.com.my/health-centre/kesihatan-jantung/hipotensi/penyebab-tekanan-darah-rendah'],
      ['DoctorOnCall — Konjunktivitis (sakit mata)', 'https://www.doctoroncall.com.my/health-centre/penyakit-mata/konjunktivitis/cara-mengatasi-sakit-mata'],
      ['Sinar Harian — Demam panas sampai macam kena sawan', 'https://www.sinarharian.com.my/article/32557/demam-panas-sampai-macam-kena-sawan'],
    ],
    related: ['diarrhoea-cirit-birit-malaysia', 'seizures-sawan-epilepsy-malaysia', 'boils-styes-bisul-ketumbit-malaysia'],
  },
];
