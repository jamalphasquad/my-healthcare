// Articles published 4 November 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-04';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NOV_2026_D = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'contraception-malaysia',
    title: 'Contraception in Malaysia: the pill (pil perancang), implant, IUD, injection and the morning-after pill',
    crumb: 'Contraception',
    desc: 'Contraception in Malaysia: how well the pill (pil perancang), implant, IUD, injection and condoms work, side effects, the morning-after pill, and where to get it, including LPPKN.',
    excerpt: 'Which contraception works best, and which suits you? How the implant, coil, injection, pill and condoms compare, their side effects, how to use the morning-after pill, the common myths, and where to get contraception in Malaysia, from LPPKN clinics to pharmacies.',
    standfirst: 'There are many safe, effective ways to prevent pregnancy, and the best one is the one that suits your health, your plans and your life. In Malaysia, about 1 in 4 women who want to avoid pregnancy aren’t using an effective method. Here is how the options compare, and where to get them.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Contraception', 'Pil perancang', 'Emergency contraception'],
    image: 'gp-consultation', imageAlt: 'A doctor talking with a patient across a desk in a consultation room',
    keyPoints: [
      'The implant and the coil (IUD) are the most effective methods, at more than 99% in everyday use, because there is nothing to remember.',
      'The pill is more than 99% effective if taken perfectly, but about 91% in everyday use, because pills get missed.',
      'Only condoms protect against sexually transmitted infections, including HIV.',
      'The morning-after pill works best taken as soon as possible after unprotected sex, within 3 to 5 days depending on the type. In Malaysia, a pharmacist can supply levonorgestrel emergency pills without a doctor’s prescription.',
      'LPPKN’s Klinik Nur Sejahtera offer counselling, pills, injections, implants and coils at low fees, as do Klinik Kesihatan and private clinics.',
    ],
    sections: [
      { id: 'compare', h: 'How well each method works', tocLabel: 'Comparing methods', html: `<div class="table-wrap"><table>
<thead><tr><th>Method</th><th>Everyday use</th><th>How long it lasts</th></tr></thead>
<tbody>
<tr><td>Implant</td><td>Over 99%</td><td>3 years</td></tr>
<tr><td>Hormonal coil (IUS)</td><td>Over 99%</td><td>3 to 8 years, depending on type</td></tr>
<tr><td>Copper coil (IUD)</td><td>Over 99%</td><td>5 to 10 years, depending on type</td></tr>
<tr><td>Injection</td><td>94%</td><td>Every 8 to 13 weeks (usually every 3 months)</td></tr>
<tr><td>Combined pill or progestogen-only pill</td><td>91%</td><td>Taken every day</td></tr>
<tr><td>Male condom</td><td>82%</td><td>Each time you have sex</td></tr>
<tr><td>Fertility awareness (tracking your cycle)</td><td>About 76%</td><td>Daily tracking</td></tr>
<tr><td>Withdrawal</td><td>About 78%</td><td>Each time</td></tr>
</tbody></table></div>
<p>“Everyday use” figures, from the NHS and US CDC, allow for real-life mistakes such as missed pills. With perfect use, the pill, injection and condoms all work much better.</p>
<p><strong>In Malaysia:</strong> the national Population and Family Survey found that in 2014 only about a third of married women aged 15 to 49 used a modern method. LPPKN figures for 2022 suggest about 1 in 4 women who want to avoid or delay pregnancy have an unmet need for contraception.</p>` },
      { id: 'long-acting', h: 'Long-acting methods: implant, coil and injection', tocLabel: 'Long-acting methods', html: `<p><strong>Implant</strong></p>
<ul>
<li>A small, flexible rod about the size of a matchstick, placed under the skin of the upper arm through a tiny cut after a local anaesthetic. It takes a few minutes.</li>
<li>Releases a progestogen hormone and is licensed for 3 years. It can be removed at any time, and fertility returns quickly.</li>
<li>The most common side effect is <strong>changes to periods</strong>: they may become lighter, stop, or become irregular or longer. There isn’t good evidence that it causes weight gain.</li>
<li>A 2023 study of Ministry of Health clinics found the implant was the most cost-effective method they offered.</li>
</ul>
<p><strong>Coil (IUD and IUS)</strong></p>
<ul>
<li>A small T-shaped device placed in the womb by a trained doctor or nurse.</li>
<li>The <strong>copper coil</strong> has no hormones, works straight away, lasts 5 to 10 years, and can also be used as emergency contraception. Periods may become heavier or more painful at first.</li>
<li>The <strong>hormonal coil</strong> lasts 3 to 8 years and usually makes periods lighter and less painful. See our guide to <a href="/articles/period-pain-senggugut-malaysia/">period pain</a>.</li>
<li>Fertility returns as soon as it is removed.</li>
</ul>
<p><strong>Injection</strong></p>
<ul>
<li>A progestogen injection every 8 to 13 weeks, usually every 3 months.</li>
<li>Periods often stop. Some people gain weight, and it can thin the bones slightly with long use, which recovers after stopping.</li>
<li>It can take up to a year for fertility to return after stopping, so it may not suit you if you plan to get pregnant soon.</li>
</ul>` },
      { id: 'pill', h: 'The pill (pil perancang)', tocLabel: 'The pill', html: `<p><strong>The combined pill</strong> contains oestrogen and progestogen. It is taken daily, usually for 21 days followed by a 7-day break, or every day with dummy pills. If you start it on day 1 to 5 of your period, it protects you straight away. Otherwise use condoms for the first 7 days.</p>
<ul>
<li><strong>Benefits:</strong> periods are often lighter, more regular and less painful, and it can help acne. It lowers the risk of womb, ovarian and bowel cancer.</li>
<li><strong>Side effects:</strong> spotting, headaches, nausea, sore breasts and mood changes, which often settle within a few months. There is no good evidence that it causes weight gain.</li>
<li><strong>Risks:</strong> a small increased risk of blood clots, and a slight increase in breast and cervical cancer risk while taking it, which returns to normal 10 years after stopping.</li>
<li><strong>It may not suit you if you</strong> smoke and are 35 or over, have migraine with aura, high blood pressure, a history of blood clots, stroke or heart disease, are very overweight, or have had breast cancer. A doctor will check your health and blood pressure before prescribing it.</li>
</ul>
<p><strong>Missed pills:</strong> if you are less than 48 hours late with one combined pill, take it as soon as you remember and carry on. If you have missed two or more, follow the leaflet in your pack, use condoms for 7 days, and ask a pharmacist whether you need emergency contraception.</p>
<p><strong>The progestogen-only pill</strong> (“mini-pill”) has no oestrogen, so it suits more people, including those who are breastfeeding, smoke or can’t take oestrogen. It is taken every day without a break, and needs to be taken at the same time each day.</p>
<p>For women with PCOS, the pill can also help with irregular periods, acne and excess hair: see our guide to <a href="/articles/pcos-malaysia/">PCOS (PMOS)</a>.</p>` },
      { id: 'condoms', h: 'Condoms', tocLabel: 'Condoms', html: `<p>Condoms are the <strong>only</strong> method that also protects against sexually transmitted infections, including HIV, syphilis and gonorrhoea. Many people use them alongside another method for extra protection. Use a new one every time, check the expiry date, and use water-based lubricant with latex condoms. See our guides to <a href="/articles/syphilis-sti-testing-malaysia/">STI testing</a> and <a href="/articles/hiv-malaysia/">HIV and PrEP</a>.</p>` },
      { id: 'emergency', h: 'The morning-after pill and emergency contraception', tocLabel: 'Morning-after pill', html: `<p>If you have had sex without contraception, or your method failed (for example, a split condom or missed pills), emergency contraception can prevent pregnancy:</p>
<div class="table-wrap"><table>
<thead><tr><th>Option</th><th>Take or fit within</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Levonorgestrel pill</td><td>72 hours (3 days)</td><td>Works best the sooner it is taken. May work less well in people weighing more than about 70 kg</td></tr>
<tr><td>Ulipristal pill</td><td>120 hours (5 days)</td><td>More effective than levonorgestrel later in the 5 days</td></tr>
<tr><td>Copper coil</td><td>5 days</td><td>The most effective option, over 99%, and then gives ongoing contraception</td></tr>
</tbody></table></div>
<ul>
<li>Emergency pills work by delaying ovulation. <strong>They don’t cause an abortion</strong> and won’t harm an existing pregnancy.</li>
<li>In Malaysia, levonorgestrel emergency pills are classed so that a <strong>pharmacist can supply them without a doctor’s prescription</strong>, after a short consultation. Ask the pharmacist about other options, which may need a doctor.</li>
<li>If you vomit within a few hours of taking the pill, ask a pharmacist or doctor whether to take another.</li>
<li>Do a pregnancy test if your next period is more than 7 days late or unusually light.</li>
<li>Emergency contraception isn’t meant for regular use. Talk to a doctor or LPPKN clinic about an ongoing method.</li>
</ul>` },
      { id: 'myths', h: 'Common myths', tocLabel: 'Myths', html: `<ul>
<li><strong>“Contraception causes infertility.”</strong> No. Fertility returns soon after stopping the pill, implant or coil. After the injection it can take several months, up to a year.</li>
<li><strong>“The pill makes you fat.”</strong> Studies haven’t shown that the pill causes significant weight gain. The injection is the method most linked to weight gain.</li>
<li><strong>“You don’t need contraception after 40.”</strong> You can still get pregnant until menopause, so contraception is still needed.</li>
<li><strong>“The morning-after pill is an abortion pill.”</strong> No. It prevents or delays ovulation and doesn’t end a pregnancy.</li>
</ul>` },
      { id: 'where', h: 'Where to get contraception in Malaysia', tocLabel: 'Where to get it', html: `<ul>
<li><strong>LPPKN (Klinik Nur Sejahtera):</strong> family planning counselling, pills, injections, implants and coils. Fees are low: for example, RM5 registration and RM10 consultation, with pills from RM5, the injection RM36, and implant insertion RM500, according to LPPKN’s fee list updated in June 2026. LPPKN also gives free contraceptives to eligible B40 women.</li>
<li><strong>Klinik Kesihatan:</strong> government health clinics offer the pill, injection, coil and implant.</li>
<li><strong>Private GP and women’s clinics:</strong> you can usually be seen quickly, including for implant and coil fitting. Call ahead to check which methods they offer.</li>
<li><strong>Pharmacies:</strong> condoms, and emergency contraception after a consultation with the pharmacist. Ongoing pills need a doctor’s assessment first.</li>
<li><strong>FRHAM</strong> (Federation of Reproductive Health Associations, Malaysia) state associations also provide contraception and sexual health services.</li>
</ul>
<p><strong>Unmarried women:</strong> doctors and health researchers say the Ministry of Health has no policy against providing contraception to unmarried women, but some women have reported being turned away or asked for a marriage certificate. Practice varies between clinics, so it may be worth calling ahead.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get contraception advice',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can help you choose a method, check your blood pressure and health, prescribe the pill or injection, and fit or refer you for an implant or coil. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is the most effective contraception?', 'The implant and the coil (hormonal or copper) are more than 99% effective in everyday use, because there is nothing to remember.'],
      ['How effective is the pill?', 'More than 99% if taken perfectly, but about 91% in everyday use, because pills are sometimes missed or taken late.'],
      ['Can I buy the morning-after pill without a prescription in Malaysia?', 'Yes, levonorgestrel emergency pills can be supplied by a pharmacist without a doctor’s prescription, after a short consultation.'],
      ['How long after sex can I take the morning-after pill?', 'Levonorgestrel within 72 hours and ulipristal within 120 hours, but the sooner the better. A copper coil fitted within 5 days is the most effective option.'],
      ['How long does the implant last?', 'It is licensed for 3 years, and can be removed at any time if you want to get pregnant or switch methods.'],
      ['Does contraception cause infertility?', 'No. Fertility returns soon after stopping most methods. After the injection it can take several months, up to a year.'],
      ['Where can I get contraception in Malaysia?', 'At LPPKN’s Klinik Nur Sejahtera, Klinik Kesihatan, private GP and women’s clinics, and, for condoms and emergency pills, pharmacies.'],
      ['Does the pill protect against STIs?', 'No. Only condoms protect against sexually transmitted infections, including HIV.'],
    ],
    sources: [
      ['NHS — How well contraception works at preventing pregnancy (Jan 2024)', 'https://www.nhs.uk/contraception/choosing-contraception/how-well-it-works-at-preventing-pregnancy/'],
      ['US CDC — Contraception: birth control methods (Aug 2024)', 'https://www.cdc.gov/contraception/about/index.html'],
      ['NHS — Contraceptive implant: side effects and risks', 'https://www.nhs.uk/contraception/methods-of-contraception/contraceptive-implant/side-effects-and-risks/'],
      ['NHS — Combined pill: side effects', 'https://www.nhs.uk/contraception/methods-of-contraception/combined-pill/side-effects/'],
      ['NHS — Contraceptive injection: side effects and risks', 'https://www.nhs.uk/contraception/methods-of-contraception/contraceptive-injection/side-effects-and-risks/'],
      ['World Health Organization — Emergency contraception fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/emergency-contraception'],
      ['Ministry of Health Malaysia, Pharmaceutical Services — Group B and C poisons FAQ', 'https://pharmacy.moh.gov.my/en/node/3272'],
      ['LPPKN — Fees and charges (Jun 2026)', 'https://www.lppkn.gov.my/lppkngateway/frontend/web/index.php?r=portal/article&menu=81&id=cm1qUHV4STczRElJRWVic09NZXVrdz09'],
      ['MyGOV — Family planning services at LPPKN (Mar 2026)', 'https://www.malaysia.gov.my/my/categories/institusi-keluarga/merancang-keluarga/mendapatkan-perkhidmatan-perancang-keluarga-di-lppkn'],
      ['Malay Mail — Over one in five Malaysian women opt out of contraceptives, says LPPKN (Sep 2024)', 'https://www.malaymail.com/news/malaysia/2024/09/26/over-one-in-five-malaysian-women-opt-out-of-contraceptives-exposing-risk-of-unplanned-pregnancies-says-lppkn/151711'],
      ['CodeBlue — Making sense of Malaysia’s contraceptive prevalence rate (Dec 2020)', 'https://codeblue.galencentre.org/2020/12/making-sense-of-malaysias-contraceptive-prevalence-rate-dr-john-teo/'],
      ['Galen Centre — Why are unmarried women having difficulty accessing contraceptives? (Mar 2023)', 'https://ova.galencentre.org/why-are-unmarried-women-having-difficulty-accessing-contraceptives-when-moh-has-no-policy-against-it/'],
      ['FRHAM — State member associations', 'https://www.frham.org.my/state-member-associations/'],
    ],
    related: ['pregnancy-test-early-signs-malaysia', 'pcos-malaysia', 'period-pain-senggugut-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'period-pain-senggugut-malaysia',
    title: 'Period pain (senggugut): what’s normal, what helps, and signs of endometriosis or fibroids',
    crumb: 'Period pain (senggugut)',
    desc: 'Period pain (senggugut): what is normal, painkillers and heat that work, hormonal options, warning signs of endometriosis, fibroids and adenomyosis, and normal vs abnormal discharge.',
    excerpt: 'Three in four Malaysian schoolgirls have period pain, and most never see a doctor. What helps (and when to take it), the signs that pain isn’t “normal” and could be endometriosis, fibroids or adenomyosis, and how to tell normal discharge (keputihan) from an infection.',
    standfirst: 'Period pain (senggugut, or dysmenorrhoea) is very common, and for most women it is manageable with the right painkiller taken at the right time, heat and exercise. But period pain that stops you going to school or work, keeps getting worse, or comes with heavy bleeding or pain during sex isn’t something you should just put up with. It can be a sign of a treatable condition such as endometriosis.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Dysmenorrhoea', 'Senggugut', 'Endometriosis'],
    image: 'morning-walk', imageAlt: 'A woman walking along a tree-lined path in morning light',
    keyPoints: [
      'About 3 in 4 secondary schoolgirls in Kuala Lumpur and Kelantan studies had period pain, and more than 1 in 5 of those in Kuala Lumpur missed school because of it. Few saw a doctor.',
      'Anti-inflammatory painkillers (NSAIDs) such as ibuprofen, naproxen or mefenamic acid work best, started at the first sign of a period or a day before. They work better than paracetamol.',
      'Heat, such as a heat pad or hot water bottle, may work about as well as painkillers. Regular exercise also helps.',
      'Hormonal contraception, such as the pill, implant or hormonal coil, can greatly reduce period pain.',
      'See a doctor if pain is getting worse, isn’t helped by painkillers, stops you doing daily activities, or comes with heavy periods, bleeding between periods or pain during sex.',
    ],
    sections: [
      { id: 'what', h: 'What causes period pain?', tocLabel: 'Causes', html: `<ul>
<li><strong>Primary dysmenorrhoea</strong> is ordinary period pain with no underlying disease. It is caused by the womb muscle tightening to shed its lining, driven by chemicals called prostaglandins. It usually starts within a few years of the first period, begins just before or as bleeding starts, and lasts up to 3 days. It often improves with age and after childbirth.</li>
<li><strong>Secondary dysmenorrhoea</strong> is pain caused by a condition such as endometriosis, adenomyosis, fibroids or pelvic infection. It often starts later in life, gets worse over time, or lasts beyond the first days of bleeding. A copper coil can also make periods more painful in the first few months.</li>
</ul>
<p><strong>In Malaysia:</strong> in a study of more than 1,000 secondary schoolgirls in Kuala Lumpur, 74.5% had period pain. Of these, 21.5% missed school and about half found it hard to concentrate in class, yet only 12% had seen a doctor. A similar study in rural Kelantan found 76% had period pain.</p>` },
      { id: 'help', h: 'What helps period pain (cara hilangkan senggugut)', tocLabel: 'What helps', html: `<p><strong>Painkillers (ubat senggugut)</strong></p>
<ul>
<li><strong>Anti-inflammatory painkillers (NSAIDs)</strong>, such as ibuprofen, naproxen or mefenamic acid, block the prostaglandins that cause the pain. A Cochrane review found about half of women got good relief, against 18% with a dummy pill, and NSAIDs worked better than paracetamol.</li>
<li><strong>Timing matters:</strong> start at the first sign of your period, or a day before if your periods are regular, and take them regularly for the first 2 to 3 days rather than waiting until the pain is bad. Take them with food.</li>
<li>Don’t take NSAIDs if you have a stomach ulcer, kidney problems, some types of asthma, or suspected <a href="/articles/dengue-klang-valley-first-three-days/">dengue</a>. Paracetamol is an alternative. Ask a pharmacist if unsure.</li>
</ul>
<p><strong>Heat:</strong> a heat pad, heat patch, hot water bottle or warm bath on the lower tummy or back. A 2026 review of 57 trials found heat may relieve period pain about as well as NSAIDs, with fewer side effects.</p>
<p><strong>Exercise:</strong> regular exercise, such as brisk walking, yoga or aerobics about 3 times a week, reduced period pain in a Cochrane review. Gentle movement during your period can help too.</p>
<p><strong>Other options:</strong> a TENS machine (a small device that sends mild electrical pulses through the skin) may help a little. Ginger has been studied in small trials, with some benefit, but the evidence is weak. Not smoking and cutting down on alcohol can also help.</p>
${figure('medications', 'Blister packs of tablets', 'Anti-inflammatory painkillers work best when started at the very start of your period.')}` },
      { id: 'hormonal', h: 'Hormonal treatment', tocLabel: 'Hormonal treatment', html: `<p>If painkillers and heat aren’t enough, hormonal contraception can make periods lighter and much less painful, and is often a first choice for women who also want contraception:</p>
<ul>
<li>the <strong>combined pill</strong>, which can also be taken back-to-back to have fewer periods</li>
<li>the <strong>hormonal coil</strong> (IUS), which reduces both pain and heavy bleeding</li>
<li>the <strong>implant</strong> or <strong>progestogen-only pill</strong></li>
</ul>
<p>See our guide to <a href="/articles/contraception-malaysia/">contraception in Malaysia</a>. A doctor will usually review how you are doing after about 3 months.</p>` },
      { id: 'warning', h: 'When period pain isn’t “normal”', tocLabel: 'Warning signs', html: `<p><strong>See a doctor if:</strong></p>
<ul>
<li>your periods are becoming <strong>more painful</strong>, heavier or irregular</li>
<li>pain stops you going to school or work, or isn’t helped by painkillers taken properly</li>
<li>you have pain <strong>during or after sex</strong></li>
<li>you have pain passing urine or opening your bowels during your period, or bowel or bladder changes</li>
<li>you have <strong>bleeding between periods or after sex</strong></li>
<li>your periods are <strong>very heavy</strong>: changing a pad every 1 to 2 hours, bleeding for more than 7 days, passing large clots, flooding, or feeling tired and breathless (signs of anaemia)</li>
<li>you have had pelvic infections before, have a family history of endometriosis, or are having difficulty getting pregnant</li>
</ul>
<p><strong>Get urgent help</strong> for sudden, severe pelvic pain, especially with fever, fainting, or if you could be pregnant.</p>` },
      { id: 'endometriosis', h: 'Endometriosis', tocLabel: 'Endometriosis', html: `<p>Endometriosis is when tissue similar to the womb lining grows outside the womb, for example on the ovaries and pelvic lining, causing inflammation, pain and scarring.</p>
<ul>
<li>It affects about <strong>1 in 10</strong> women of reproductive age worldwide, and Malaysian specialists give similar estimates.</li>
<li>Symptoms include very painful periods, pain during sex, pelvic pain at other times, pain opening the bowels, tiredness, and difficulty getting pregnant.</li>
<li>Diagnosis is often delayed by years: worldwide, 4 to 12 years on average. Malaysian patient groups report women being told their pain is normal.</li>
<li>A normal ultrasound or MRI <strong>doesn’t rule it out</strong>. The definite test is a keyhole operation (laparoscopy), which can also remove the tissue.</li>
<li>There is no cure, but treatment with painkillers, hormonal medicines and surgery can control symptoms well, and fertility treatment can help women trying to conceive.</li>
</ul>` },
      { id: 'fibroids', h: 'Fibroids and adenomyosis', tocLabel: 'Fibroids', html: `<ul>
<li><strong>Fibroids</strong> are non-cancerous growths in or on the womb. Many cause no symptoms, but they can cause heavy or painful periods, pressure on the bladder or bowel, and iron-deficiency anaemia.</li>
<li><strong>Adenomyosis</strong> is when the womb lining grows into the muscle wall of the womb. It is more common after 35 and after having children, and causes painful, heavy periods.</li>
</ul>
<p>Both are usually found on an ultrasound. Treatment ranges from painkillers, medicine to reduce bleeding and hormonal treatment to procedures and surgery, depending on your symptoms and whether you want children. Heavy periods can cause anaemia: see our guide to <a href="/articles/blood-test-results-explained-malaysia/">blood test results</a>.</p>
<p>Irregular periods with acne or excess hair may point to <a href="/articles/pcos-malaysia/">PCOS (PMOS)</a> instead.</p>` },
      { id: 'discharge', h: 'Vaginal discharge (keputihan): what’s normal?', tocLabel: 'Keputihan', html: `<p>Some vaginal discharge is normal and healthy. It keeps the vagina clean.</p>
<ul>
<li><strong>Normal:</strong> clear or white, thin and slippery or thick and sticky, with no strong smell. It changes through your cycle and is often wetter and stretchier around ovulation.</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>Change</th><th>Possible cause</th></tr></thead>
<tbody>
<tr><td>Thin, grey-white, fishy smell</td><td>Bacterial vaginosis</td></tr>
<tr><td>Thick, white, like cottage cheese, with itching</td><td>Thrush (yeast infection)</td></tr>
<tr><td>Green, yellow or frothy</td><td>Trichomoniasis</td></tr>
<tr><td>With pelvic pain, bleeding or pain passing urine</td><td>Chlamydia or gonorrhoea</td></tr>
</tbody></table></div>
<p>See a doctor if your discharge changes in colour, smell or amount, or comes with itching, soreness, pain or bleeding. Don’t douche or use perfumed washes inside the vagina, which upset its natural balance. See our guides to <a href="/articles/syphilis-sti-testing-malaysia/">STI testing</a>, <a href="/articles/uti-urinary-tract-infection-malaysia/">UTIs</a> and the <a href="/articles/pap-smear-hpv-test-malaysia/">Pap smear and HPV test</a>.</p>` },
      { id: 'work', h: 'Period pain, school and work', tocLabel: 'School and work', html: `<p>Malaysia has no separate law on menstrual leave. The government said in 2022 that period leave would need further study, and no policy has followed. If period pain stops you working, a doctor can assess you and decide whether to issue an MC. See our guide to <a href="/articles/medical-certificate-mc-malaysia/">medical certificates</a>. If you regularly miss school or work because of period pain, that is a reason to see a doctor, as treatment usually helps.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get period pain checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can advise on the right painkiller, start hormonal treatment, check for anaemia, examine you and arrange an ultrasound, and refer you to a gynaecologist if endometriosis or fibroids are suspected. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is senggugut in English?', 'Senggugut is period pain, also called menstrual cramps or dysmenorrhoea.'],
      ['What is the best medicine for period pain?', 'Anti-inflammatory painkillers (NSAIDs) such as ibuprofen, naproxen or mefenamic acid, started at the first sign of your period and taken regularly for the first 2 to 3 days. Paracetamol is an alternative if you can’t take NSAIDs.'],
      ['How can I relieve period pain without medicine?', 'Heat on the lower tummy or back, such as a heat pad or hot water bottle, gentle exercise, a warm bath and massage. Regular exercise through the month also helps.'],
      ['Is severe period pain normal?', 'Some pain is common, but pain that stops you going to school or work, isn’t helped by painkillers or is getting worse should be checked by a doctor.'],
      ['What are the signs of endometriosis?', 'Very painful periods, pain during sex, pelvic pain at other times, pain opening your bowels during your period, and difficulty getting pregnant.'],
      ['Can the pill help period pain?', 'Yes. The combined pill, hormonal coil and implant can make periods lighter and much less painful.'],
      ['What colour discharge is normal?', 'Clear or white with no strong smell is normal. Grey with a fishy smell, thick and white with itching, or green, yellow or frothy discharge can mean an infection.'],
      ['Can I get an MC for period pain in Malaysia?', 'There is no separate menstrual leave law. A doctor can assess you and decide whether to issue an MC if pain stops you working.'],
    ],
    sources: [
      ['NHS — Period pain (Mar 2026)', 'https://www.nhs.uk/conditions/period-pain/'],
      ['Wong and Khoo — Dysmenorrhoea among secondary schoolgirls in Kuala Lumpur (Int J Gynecol Obstet, 2010)', 'https://knova.um.edu.my/research_publications_2006_2010/4365'],
      ['Wong — Dysmenorrhoea among schoolgirls in rural Kelantan (Aust J Rural Health, 2011)', 'https://knova.um.edu.my/research_publications_2011_2015/114'],
      ['Cochrane — NSAIDs for dysmenorrhoea (2015)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6953236'],
      ['Cochrane — Exercise for dysmenorrhoea (2019)', 'https://www.cochrane.org/evidence/CD004142-exercise-dysmenorrhoea'],
      ['Frontiers in Medicine — Heat therapy for primary dysmenorrhoea: meta-analysis (Jan 2026)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12876241'],
      ['Royal Children’s Hospital Melbourne — Dysmenorrhoea clinical guideline (Oct 2025)', 'https://www.rch.org.au/clinicalguide/guideline_index/Dysmenorrhoea/'],
      ['World Health Organization — Endometriosis fact sheet (Oct 2025)', 'https://www.who.int/news-room/fact-sheets/detail/endometriosis'],
      ['Royal College of Obstetricians and Gynaecologists — Endometriosis (Dec 2023)', 'https://www.rcog.org.uk/for-the-public/browse-our-patient-information/endometriosis/'],
      ['Galen Centre — Cries of pain from women with endometriosis in Malaysia (Jan 2024)', 'https://ova.galencentre.org/cries-of-pain-from-women-with-endometriosis-in-malaysia-fall-on-deaf-ears/'],
      ['NHS — Fibroids (Mar 2026)', 'https://www.nhs.uk/conditions/fibroids/'],
      ['NHS — Adenomyosis (Oct 2026)', 'https://www.nhs.uk/conditions/adenomyosis/'],
      ['NHS — Vaginal discharge (Feb 2024)', 'https://www.nhs.uk/conditions/vaginal-discharge/'],
      ['Human Resources Online — Putrajaya to study period leave before implementing (Jul 2022)', 'https://www.humanresourcesonline.net/putrajaya-has-to-look-into-feasibility-of-period-leave-policies-before-implementing-minister-siti'],
    ],
    related: ['bartholin-cyst-ovarian-cyst-fibroids-malaysia', 'anaemia-iron-deficiency-malaysia', 'pcos-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'kidney-stones-batu-karang-malaysia',
    title: 'Kidney stones (batu karang): symptoms, treatment, and how to stop them coming back',
    crumb: 'Kidney stones (batu karang)',
    desc: 'Kidney stones (batu karang): the pain, when it’s an emergency, how stones are found and treated (ESWL, laser, PCNL), and how much water and salt matter for prevention.',
    excerpt: 'Kidney stone pain is one of the worst pains people describe. The symptoms, the danger signs that need a hospital straight away, which stones pass on their own, the treatments available in Malaysia, and the simple diet changes that cut the chance of another stone.',
    standfirst: 'Kidney stones (batu karang) are hard deposits that form when minerals in the urine crystallise. Small stones often pass on their own, but a stone moving down from the kidney can cause severe pain, and a blocked, infected kidney is an emergency. Malaysia’s hot, humid climate makes dehydration, a major cause, very common.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Kidney stones', 'Batu karang', 'Urolithiasis'],
    image: 'doctor-consultation', imageAlt: 'A doctor talking with a patient across a desk',
    keyPoints: [
      'The typical symptom is severe pain in the side or lower back that comes in waves and spreads to the groin, often with nausea, vomiting or blood in the urine.',
      'Go to an emergency department for stone pain with fever or shivering, pain that painkillers don’t control, or if you can’t pass urine.',
      'About 3 in 4 stones smaller than 5 mm pass on their own, usually within a few weeks. Larger stones may need shock-wave treatment (ESWL), laser removal through a thin scope, or keyhole surgery.',
      'A Sarawak screening study found stones in about 4% of adults, and many people get another within 5 to 10 years.',
      'Drinking 2.5 to 3 litres of fluid a day, cutting salt and keeping a normal calcium intake are the most important ways to prevent stones.',
    ],
    sections: [
      { id: 'what', h: 'What are kidney stones?', tocLabel: 'What they are', html: `<p>Kidney stones form when substances in the urine, such as calcium, oxalate and uric acid, become too concentrated and crystallise. They range from grains of sand to several centimetres across.</p>
<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>How common</th><th>Linked to</th></tr></thead>
<tbody>
<tr><td>Calcium stones (mostly calcium oxalate)</td><td>Most stones</td><td>Low fluid intake, high salt, high urine calcium or oxalate</td></tr>
<tr><td>Uric acid</td><td>About 1 in 10</td><td>Acidic urine, gout, diabetes, obesity. See our guide to <a href="/articles/gout-malaysia/">gout and uric acid</a></td></tr>
<tr><td>Struvite</td><td>Less common</td><td>Repeated urinary infections. They can grow quickly</td></tr>
<tr><td>Cystine</td><td>Rare</td><td>An inherited condition</td></tr>
</tbody></table></div>
<p><strong>In Malaysia:</strong> an ultrasound screening of more than 1,000 adults at clinics in Sarawak found kidney stones in about 4%, and 6.4% had had them at some point. Malaysian urologists point to the hot, humid climate and chronic dehydration as major contributors.</p>
<p><strong>Risk factors</strong> include not drinking enough, a family history of stones, being overweight, diabetes, gout, high blood pressure, bowel disease, repeated urinary infections and some medicines.</p>` },
      { id: 'symptoms', h: 'Symptoms of kidney stones (tanda batu karang)', tocLabel: 'Symptoms', html: `<p>Stones sitting in the kidney often cause no symptoms. Pain starts when a stone moves into the tube between the kidney and the bladder (the ureter):</p>
<ul>
<li><strong>severe pain in the side or lower back</strong>, below the ribs, that comes in waves and may spread to the lower tummy or groin (renal colic)</li>
<li>restlessness: people often can’t lie still</li>
<li>nausea and vomiting</li>
<li><strong>blood in the urine</strong>, which may look pink, red or brown</li>
<li>needing to pass urine often, or burning when you do</li>
</ul>
<p><strong>Go to an emergency department straight away if you have:</strong></p>
<ul>
<li>stone pain with a <strong>fever, chills or shivering</strong>. This can mean an infected, blocked kidney, which needs urgent drainage and antibiotics.</li>
<li>pain that painkillers don’t control, or constant vomiting</li>
<li>no urine, or only one working kidney</li>
</ul>
<p>Pain in the side with fever but no stone can be a kidney infection: see our guide to <a href="/articles/uti-urinary-tract-infection-malaysia/">urinary tract infections</a>. Severe pain on the lower right side may be <a href="/articles/appendicitis-malaysia/">appendicitis</a>.</p>` },
      { id: 'diagnosis', h: 'How kidney stones are diagnosed', tocLabel: 'Diagnosis', html: `<ul>
<li>A <strong>CT scan without contrast</strong> is the most accurate test and shows the size and position of the stone.</li>
<li>An <strong>ultrasound</strong> is used first in pregnancy and in children, and is often used to check the kidneys for blockage.</li>
<li><strong>Urine and blood tests</strong> check for blood, infection and kidney function. See our guide to <a href="/articles/blood-test-results-explained-malaysia/">blood test results</a>.</li>
</ul>
<p>If you pass a stone, try to catch it by passing urine through a sieve or tea strainer, and give it to your doctor. Knowing what it is made of helps prevent the next one.</p>` },
      { id: 'treatment', h: 'Treatment', tocLabel: 'Treatment', html: `<p><strong>Small stones (under 5 mm):</strong> about 3 in 4 pass on their own, and more if they are already low in the ureter. This can take a few weeks.</p>
<ul>
<li><strong>Pain relief:</strong> anti-inflammatory painkillers (NSAIDs) are the first choice, as long as your kidneys are working normally and you can take them safely.</li>
<li>Drink enough to keep your urine pale, but don’t force down huge amounts.</li>
<li>For stones of 5 to 10 mm low in the ureter, a doctor may prescribe a tablet (an alpha-blocker such as tamsulosin) to relax the ureter and help the stone pass. The benefit is modest.</li>
</ul>
<p><strong>Larger stones, or stones that don’t pass:</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>Treatment</th><th>What it involves</th><th>Usually for</th></tr></thead>
<tbody>
<tr><td>Shock-wave lithotripsy (ESWL)</td><td>Shock waves from outside the body break the stone into fragments that pass in the urine. No cuts</td><td>Kidney and some ureteric stones up to about 20 mm</td></tr>
<tr><td>Ureteroscopy with laser (URS / RIRS)</td><td>A thin scope is passed up through the urethra and bladder, and a laser breaks up the stone. Usually same-day discharge</td><td>Ureteric stones, and kidney stones up to about 20 mm</td></tr>
<tr><td>Percutaneous nephrolithotomy (PCNL)</td><td>Keyhole surgery through a small cut in the back to remove the stone. A few days in hospital</td><td>Large kidney stones, over 20 mm</td></tr>
</tbody></table></div>
<p>A small tube (<strong>stent</strong>) is sometimes left between the kidney and bladder for a few weeks after treatment, and removed later. Government hospitals with urology departments, such as Hospital Selayang, offer ESWL and laser treatment by referral.</p>
<p><strong>Be wary of “ubat batu karang”</strong> sold online with claims to dissolve stones. Most stones won’t dissolve, and relying on these can delay treatment while a blocked kidney is damaged. Unregistered products have also been linked to kidney damage. Check for a MAL registration number, and talk to your doctor or pharmacist first.</p>` },
      { id: 'prevention', h: 'How to stop stones coming back', tocLabel: 'Prevention', html: `<p>Stones often come back: by some estimates about half of people get another within 5 to 10 years without prevention. European urology guidelines advise:</p>
<ul>
<li><strong>Drink 2.5 to 3 litres of fluid a day</strong>, mainly water, enough to keep your urine pale. Drink more in hot weather, when working outdoors and after exercise.</li>
<li><strong>Cut down on salt</strong> to 4 to 5 g a day (less than a teaspoon), including salty sauces, processed food and instant noodles.</li>
<li><strong>Don’t cut out calcium.</strong> Normal calcium intake from food, such as milk, yoghurt and tofu, actually lowers the risk of calcium stones.</li>
<li><strong>Moderate animal protein</strong> (meat, chicken, seafood).</li>
<li><strong>Avoid sugary drinks.</strong> Adding fresh lemon or lime juice to water may help.</li>
<li>Keep to a healthy weight. See our <a href="/articles/bmi-calculator-malaysia/">BMI calculator</a>.</li>
<li>Only cut down on high-oxalate foods, such as spinach and nuts, if tests show you have high oxalate levels.</li>
</ul>
<p>People who have had several stones, or are at high risk, may be offered <strong>urine tests over 24 hours</strong> and a stone analysis. Depending on the results, medicines can lower the risk of new stones.</p>
${figure('morning-walk', 'People walking in a park in the morning', 'In Malaysia’s heat, drink more on days you are outdoors or exercising.')}` },
      { id: 'gallstones', h: 'Kidney stones vs gallstones (batu hempedu)', tocLabel: 'Gallstones', html: `<p>Gallstones are a different condition. They form in the <strong>gallbladder</strong>, under the liver, and cause pain in the upper middle or upper right of the tummy, under the ribs, that can last from 30 minutes to several hours. Yellowing of the skin or eyes with gallstone pain needs urgent care. See our guide to <a href="/articles/stomach-pain-gastric-malaysia/">stomach pain</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get help',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'For a first episode of mild stone pain without fever, a GP can examine you, test your urine, give pain relief and arrange a scan or referral to a urologist. Stone pain often strikes at night, so our directory lists clinics open 24 hours and late across Kuala Lumpur, Selangor and other states. For pain with fever, or pain you can’t control, go to an emergency department.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/gp-clinics/', 'GP clinics']],
    faqs: [
      ['What are the symptoms of kidney stones?', 'Severe pain in the side or lower back that comes in waves and spreads to the groin, often with nausea, vomiting, blood in the urine or needing to pass urine often.'],
      ['Can kidney stones pass on their own?', 'Yes, most small ones do. About 3 in 4 stones under 5 mm pass by themselves, usually within a few weeks.'],
      ['When is kidney stone pain an emergency?', 'If you also have a fever, chills or shivering, if painkillers don’t control the pain, if you are vomiting constantly, or if you can’t pass urine.'],
      ['How are large kidney stones removed?', 'With shock-wave treatment (ESWL), a thin scope and laser passed up through the urethra (ureteroscopy), or keyhole surgery through the back (PCNL) for large stones.'],
      ['How much water should I drink to prevent kidney stones?', 'About 2.5 to 3 litres of fluid a day, mostly water, enough to keep your urine pale. More in hot weather or when sweating.'],
      ['Should I avoid calcium if I have kidney stones?', 'No. A normal calcium intake from food lowers the risk of the most common stones. Cut down on salt instead.'],
      ['Do herbal remedies dissolve kidney stones?', 'There is no good evidence that they do, and relying on them can delay treatment. Check any product is registered and ask your doctor first.'],
      ['What is the difference between kidney stones and gallstones?', 'Kidney stones form in the urinary system and cause side or back pain. Gallstones form in the gallbladder and cause pain in the upper right or middle of the tummy.'],
    ],
    sources: [
      ['European Association of Urology — Guidelines on urolithiasis (2026)', 'https://uroweb.org/guidelines/urolithiasis/chapter/guidelines'],
      ['European Association of Urology — Urolithiasis: metabolic evaluation and recurrence prevention (2026)', 'https://uroweb.org/guidelines/urolithiasis/chapter/metabolic-evaluation-and-recurrence-prevention'],
      ['BJUI Compass — Prevalence of urolithiasis in Sarawak, Malaysia (2022)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9766857/'],
      ['NHS — Kidney stones (Sep 2026)', 'https://www.nhs.uk/conditions/kidney-stones/'],
      ['US NIDDK — Definition and facts for kidney stones', 'https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones/definition-facts'],
      ['US NIDDK — Treatment for kidney stones', 'https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones/treatment'],
      ['US NIDDK — Eating, diet and nutrition for kidney stones', 'https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones/eating-diet-nutrition'],
      ['Pantai Hospital Penang — Kidney stones: symptoms and treatment options (May 2026)', 'https://www.pantai.com.my/penang/news/kidney-stones'],
      ['Hospital Selayang — Urology department', 'https://jknselangor.moh.gov.my/hselayang/index.php/en/service/surgery-services/urology'],
      ['RTM — Unregistered medicines linked to kidney disease in Kelantan (May 2024)', 'https://berita.rtm.gov.my/?p=99308'],
      ['NHS — Gallstones (Aug 2025)', 'https://www.nhs.uk/conditions/gallstones/'],
    ],
    related: ['gout-malaysia', 'uti-urinary-tract-infection-malaysia', 'blood-test-results-explained-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'boils-styes-bisul-ketumbit-malaysia',
    title: 'Boils (bisul) and styes (ketumbit): causes, home care, draining, and when to see a doctor',
    crumb: 'Boils and styes',
    desc: 'Boils (bisul), carbuncles and styes (ketumbit): what causes them, warm compresses and home care, why not to squeeze, when they need draining, and recurrent boils and diabetes.',
    excerpt: 'Boils and styes are common, painful and usually harmless. What causes them, how to care for them at home, why you shouldn’t squeeze them, when a doctor needs to drain one, and why boils that keep coming back are a reason to check your blood sugar.',
    standfirst: 'A boil (bisul) is a painful, pus-filled lump that forms when a hair follicle gets infected. A stye (ketumbit) is a similar small infection on the edge of the eyelid. Both are usually caused by Staphylococcus bacteria, and most heal on their own within one to two weeks with warm compresses. Some need a doctor.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Boil', 'Bisul', 'Stye'],
    image: 'medic-stethoscope', imageAlt: 'A doctor in blue scrubs and safety glasses holding a stethoscope',
    keyPoints: [
      'Boils and styes are caused by Staphylococcus aureus bacteria, which about 1 in 5 people carry harmlessly in the nose and on the skin.',
      'A warm, clean compress for about 10 minutes several times a day helps a boil or stye come to a head and drain. Most boils heal in about 10 days, and most styes within a week.',
      'Don’t squeeze, pierce or cut a boil or stye. It can push the infection deeper, especially on the face.',
      'See a doctor for a boil on the face, a large or very painful boil, fever, spreading redness, a cluster of boils (carbuncle), or a stye that affects your vision or causes eyelid swelling.',
      'Boils that keep coming back can be a sign of undiagnosed diabetes. About 2 in 5 Malaysian adults with diabetes don’t know they have it.',
    ],
    sections: [
      { id: 'boils', h: 'What is a boil (bisul)?', tocLabel: 'What a boil is', html: `<p>A boil (furuncle) is a deep infection of a hair follicle. It starts as a tender red lump, which swells and fills with pus over a few days, and usually forms a yellow or white head before bursting and draining. A <strong>carbuncle</strong> is a cluster of boils joined together under the skin, often on the back of the neck, shoulders or thighs. It is more likely to cause fever and needs a doctor.</p>
<p><strong>Cause:</strong> the bacterium <em>Staphylococcus aureus</em>. About 10 to 20% of people carry it, mostly in the nose, armpits and groin. It gets into the skin through small cuts, grazes, insect bites, or friction from tight clothing and sweat.</p>
<p><strong>More likely if you</strong> have diabetes, are overweight, have eczema, a weak immune system or iron deficiency, smoke, or live with someone who gets boils.</p>` },
      { id: 'home', h: 'Caring for a boil at home', tocLabel: 'Home care', html: `<ul>
<li><strong>Warm compress:</strong> hold a clean cloth soaked in warm (not hot) water on the boil for about 10 minutes, up to 4 times a day. This eases the pain and helps it come to a head and drain on its own.</li>
<li><strong>Don’t squeeze, pick or pierce it</strong>, and don’t cut it open yourself. This can push the infection deeper or spread it.</li>
<li>Once it drains, wash gently with soap and water, and cover it with a clean dressing until it heals.</li>
<li>Wash your hands after touching it. Use your own towel, and wash towels, bedding and clothes on a hot wash.</li>
<li>Take paracetamol or ibuprofen for pain if needed.</li>
<li>Avoid swimming pools and shared gym equipment until it has healed.</li>
</ul>
<p>Most boils heal within about 10 days.</p>` },
      { id: 'doctor', h: 'When to see a doctor about a boil', tocLabel: 'When to see a doctor', html: `<p><strong>See a doctor the same day if:</strong></p>
<ul>
<li>the boil is on your <strong>face</strong>, especially around the nose and upper lip. Veins here connect to the inside of the skull, so infection can rarely spread there, and squeezing makes it more likely.</li>
<li>the skin around it is red, hot, swollen and spreading (cellulitis)</li>
<li>you have a <strong>fever</strong>, chills or feel unwell</li>
<li>it is very large or very painful, or you have a carbuncle</li>
<li>you have diabetes or a weak immune system</li>
</ul>
<p><strong>See a GP</strong> if a boil hasn’t got better after 2 weeks, or you keep getting boils.</p>
<p><strong>Treatment:</strong> under the Ministry of Health’s antimicrobial guideline, the main treatment for a boil or abscess full of pus is <strong>drainage</strong>: the doctor numbs the skin, makes a small cut to let the pus out, and dresses the wound. Antibiotics aren’t needed for most simple boils, but are used for large or spreading infections, carbuncles, fever, facial boils, or if drainage alone hasn’t worked. The doctor may send a swab to check which antibiotics work, as some staph bacteria (MRSA) are resistant to common ones.</p>` },
      { id: 'recurrent', h: 'Boils that keep coming back', tocLabel: 'Recurrent boils', html: `<ul>
<li><strong>Check your blood sugar.</strong> Poorly controlled diabetes makes boils more common and slower to heal. In Malaysia, 15.6% of adults have diabetes and about 2 in 5 of them don’t know it. See our guide to <a href="/articles/normal-blood-sugar-level-malaysia/">normal blood sugar levels</a>.</li>
<li><strong>Clearing the bacteria:</strong> for repeated boils, a doctor may suggest an antiseptic nasal ointment and an antiseptic body wash for a few days, sometimes for everyone in the household, along with washing towels and bedding.</li>
<li><strong>Painful lumps that keep coming back in the armpits, groin or under the breasts</strong>, with blackheads and scarring, may be <strong>hidradenitis suppurativa</strong>, a long-term inflammatory skin condition rather than ordinary boils. It needs a doctor or dermatologist.</li>
</ul>
${figure('glucometer', 'A blood glucose meter and test strips on a table', 'Boils that keep coming back are a good reason to have your blood sugar checked.')}` },
      { id: 'stye', h: 'Styes (ketumbit) and chalazion', tocLabel: 'Styes', html: `<ul>
<li>A <strong>stye</strong> (hordeolum, <em>ketumbit</em>) is a painful red lump on the edge of the eyelid, caused by bacteria infecting an eyelash follicle or eyelid gland. It usually goes away within a week.</li>
<li>A <strong>chalazion</strong> is a usually painless, firm lump further back on the eyelid, caused by a blocked oil gland. It can follow a stye and may last for weeks.</li>
</ul>
<p><strong>Home care:</strong></p>
<ul>
<li>Hold a <strong>clean, warm cloth</strong> against the closed eye for 5 to 10 minutes, 3 or 4 times a day, then gently massage the area.</li>
<li><strong>Don’t squeeze or burst it</strong>, and don’t pull out the eyelashes.</li>
<li>Don’t wear eye make-up or contact lenses until it has healed, and throw away old eye make-up.</li>
<li>Keep your eyelids clean, especially if you have dandruff or blepharitis (inflamed eyelid edges), which make styes more likely.</li>
</ul>
<p>Antibiotics usually aren’t needed. A Cochrane review found no good evidence that they help an ordinary stye. A doctor may prescribe them if the infection is spreading.</p>
<p>The old belief that a stye comes from peeking at something you shouldn’t have is just a myth. Styes are caused by bacteria, often carried from the nose to the eye on unwashed fingers.</p>
<p><strong>See a doctor if:</strong> the stye doesn’t improve after a week or two, your vision is affected, the whole eyelid or the skin around the eye becomes red and swollen, the eye itself is red and painful, or styes keep coming back. A chalazion that lasts may need a small procedure to drain it. For a red, sticky eye, see our guide to <a href="/articles/conjunctivitis-red-eyes-malaysia/">conjunctivitis</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a boil or stye checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can drain a boil, prescribe antibiotics if needed, check your blood sugar if boils keep coming back, and refer you to an eye doctor for a stubborn stye or chalazion. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is bisul in English?', 'Bisul is a boil, a painful pus-filled lump caused by a bacterial infection of a hair follicle.'],
      ['How do I get rid of a boil fast?', 'Hold a warm compress on it for about 10 minutes up to 4 times a day to help it drain. Don’t squeeze it. See a doctor if it is large, very painful, on your face, or you have a fever.'],
      ['Should I squeeze a boil?', 'No. Squeezing can push the infection deeper or spread it, especially on the face. A doctor can drain it safely if needed.'],
      ['Do boils need antibiotics?', 'Most simple boils don’t. Large or spreading infections, carbuncles, facial boils, fever, or boils in people with diabetes or a weak immune system may need antibiotics.'],
      ['Why do I keep getting boils?', 'Common reasons include carrying staph bacteria in the nose, diabetes, friction and sweat, or close contact with others who get boils. See a doctor to check your blood sugar and discuss clearing the bacteria.'],
      ['What is ketumbit in English?', 'Ketumbit is a stye, a small painful infection on the edge of the eyelid.'],
      ['How long does a stye last?', 'Usually about a week. Warm compresses help it drain. See a doctor if it lasts longer than a week or two or affects your vision.'],
      ['What is the difference between a stye and a chalazion?', 'A stye is a painful infection at the eyelid edge. A chalazion is a usually painless lump further back on the eyelid from a blocked oil gland, which can last for weeks.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — National Antimicrobial Guideline: skin and soft tissue infections', 'https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a14-skin-soft-tissue-infections'],
      ['NHS — Boils', 'https://www.nhs.uk/conditions/boils/'],
      ['NHS — Stye (Apr 2024)', 'https://www.nhs.uk/conditions/stye/'],
      ['DermNet — Boils', 'https://dermnetnz.org/topics/boil'],
      ['American Academy of Ophthalmology — What are chalazia and styes? (Jan 2026)', 'https://www.aao.org/eye-health/diseases/what-are-chalazia-styes'],
      ['Cochrane — Interventions for acute internal hordeolum (2017)', 'https://www.cochrane.org/evidence/CD007742_interventions-acute-internal-hordeolum'],
      ['Infectious Diseases Society of America — Skin and soft tissue infections guideline (2014)', 'https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/'],
      ['Antibiotics — Staphylococcus aureus infections in Malaysia: a review (2019)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6784215/'],
      ['CodeBlue — NHMS 2023: over two million adults live with three NCDs (May 2024)', 'https://codeblue.galencentre.org/2024/05/over-two-million-adults-in-malaysia-live-with-three-ncds-nhms-2023/'],
      ['NHS — Hidradenitis suppurativa', 'https://www.nhs.uk/conditions/hidradenitis-suppurativa/'],
    ],
    related: ['kurap-panau-fungal-skin-infection-malaysia', 'normal-blood-sugar-level-malaysia', 'conjunctivitis-red-eyes-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'warts-ketuat-malaysia',
    title: 'Warts (ketuat): types, treatment at home and at a clinic, and when to see a doctor',
    crumb: 'Warts (ketuat)',
    desc: 'Warts (ketuat): common warts, verrucas (plantar warts), flat and genital warts, how they spread, salicylic acid and freezing treatment, and when to see a doctor.',
    excerpt: 'Warts are harmless growths caused by a virus, and many disappear on their own. The different types, how they spread, home treatments that work if you stick with them, freezing and other clinic treatments, and the warts you should never treat yourself.',
    standfirst: 'Warts (ketuat, also called kutil) are small, rough growths on the skin caused by the human papillomavirus (HPV). They are very common, especially in children, and are harmless. Many go away by themselves, but treatment can speed things up. Warts on the face or genitals, and anything that bleeds or changes, need a doctor.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Warts', 'Ketuat', 'Plantar wart'],
    image: 'aesthetic-treatment-room', imageAlt: 'A treatment chair in a medical aesthetics room',
    keyPoints: [
      'Warts are caused by HPV entering through small breaks in the skin. They spread by touch and on wet surfaces such as shower floors, but aren’t very contagious.',
      'Half of children’s warts go away within a year and two-thirds within two years without treatment.',
      'Salicylic acid from a pharmacy works if used daily for up to 3 months. Freezing (cryotherapy) at a clinic is another option.',
      'Don’t treat warts on the face or genitals yourself, and check with a doctor first if you have diabetes or poor circulation.',
      'See a doctor if a growth bleeds, changes, hurts or you aren’t sure it is a wart.',
    ],
    sections: [
      { id: 'types', h: 'Types of warts', tocLabel: 'Types', html: `<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>Where</th><th>What it looks like</th></tr></thead>
<tbody>
<tr><td>Common wart</td><td>Fingers, hands, knees, elbows</td><td>Firm, rough, raised bump, often with tiny black dots (clotted blood vessels)</td></tr>
<tr><td>Plantar wart (verruca)</td><td>Soles of the feet</td><td>Flat, hard patch pushed into the skin by walking, often painful, with black dots</td></tr>
<tr><td>Flat (plane) wart</td><td>Face, backs of hands, legs</td><td>Small, smooth, slightly raised, often in groups. Shaving can spread them</td></tr>
<tr><td>Filiform wart</td><td>Face, around the mouth and nose</td><td>Thin, finger-like growth</td></tr>
<tr><td>Periungual wart</td><td>Around the fingernails and toenails</td><td>Rough growths that can affect nail growth</td></tr>
<tr><td>Genital warts</td><td>Genitals and anus</td><td>Small, soft lumps. Caused by different HPV types, mostly passed on through sex</td></tr>
</tbody></table></div>
<p><strong>Plantar wart or corn?</strong> Plantar warts are sometimes called <em>mata ikan</em> because of their black dots. Corns and calluses are thickened skin from pressure or rubbing, often from tight shoes, and aren’t caused by a virus. If the hard skin is gently pared down, a wart shows tiny black dots while a corn doesn’t.</p>` },
      { id: 'spread', h: 'How warts spread', tocLabel: 'How they spread', html: `<ul>
<li>by direct skin contact, or by touching surfaces such as towels, shoes, and wet floors around pools and showers</li>
<li>from one part of your own body to another, for example by picking, biting nails or shaving over warts</li>
<li>more easily when the skin is wet, soft or damaged</li>
</ul>
<p>A wart can take weeks to months to appear after contact. Children and teenagers get them most, as do people with eczema or a weak immune system.</p>
<p><strong>Genital warts</strong> are a sexually transmitted infection, usually caused by HPV types 6 and 11. They spread through skin-to-skin contact during sex, even when no warts are visible, but not through towels or toilet seats. They need a doctor. See our guide to <a href="/articles/syphilis-sti-testing-malaysia/">STI testing</a>.</p>` },
      { id: 'home', h: 'Treating warts at home (ubat ketuat)', tocLabel: 'Home treatment', html: `<p>Treatment isn’t essential, as many warts go away on their own: half of children’s warts within a year, and two-thirds within two years. If a wart is painful, spreading or bothering you, these options from a pharmacy can help:</p>
<p><strong>Salicylic acid</strong> (gel, paint or plaster) is the best-studied home treatment. In a Cochrane review it worked better than a dummy treatment.</p>
<ol>
<li>Soak the wart in warm water for a few minutes, then dry it.</li>
<li>Gently rub away the dead surface skin with a pumice stone or emery board. Use it only for the wart, and don’t share it.</li>
<li>Apply the treatment <strong>only to the wart</strong>, protecting the skin around it, once a day.</li>
<li>Keep going for <strong>up to 12 weeks</strong>. Stopping early is the commonest reason it fails. Take a few days off if the skin becomes sore.</li>
</ol>
<p><strong>Freezing sprays</strong> sold in pharmacies are weaker than clinic freezing and aren’t suitable for young children.</p>
<p><strong>Don’t use home treatments</strong>:</p>
<ul>
<li>on the <strong>face</strong>, genitals or broken skin</li>
<li>if you have <strong>diabetes</strong>, poor circulation or numbness in your feet, without a doctor’s advice</li>
</ul>
<p><strong>Never cut, burn or dig out a wart yourself.</strong> Be careful with “wart remover” products sold online. Check that the product is registered with the National Pharmaceutical Regulatory Agency (NPRA), and stop if it causes pain, bleeding or blistering.</p>` },
      { id: 'clinic', h: 'Clinic treatments', tocLabel: 'Clinic treatment', html: `<div class="table-wrap"><table>
<thead><tr><th>Treatment</th><th>What it involves</th></tr></thead>
<tbody>
<tr><td>Cryotherapy (freezing)</td><td>Liquid nitrogen is applied to freeze the wart. It stings and usually blisters, then the wart falls off within a week or so. Several sessions, 2 to 4 weeks apart, are often needed. Not usually used in young children</td></tr>
<tr><td>Curettage and cautery</td><td>The wart is scraped away under local anaesthetic and the base sealed with heat. Can leave a scar</td></tr>
<tr><td>Laser</td><td>For stubborn warts that haven’t responded to other treatment</td></tr>
<tr><td>Prescription creams and immunotherapy</td><td>Medicines that irritate the wart or stimulate the immune system to clear it, mainly for stubborn or genital warts</td></tr>
</tbody></table></div>
<p>Freezing combined with salicylic acid may work better than salicylic acid alone. All treatments can leave small marks or pale or dark patches, and warts can come back. Freezing near the nails can damage the nail.</p>
<p><strong>Genital warts</strong> are treated by a doctor with prescription creams, freezing or other procedures. Don’t use pharmacy wart products on them.</p>
${figure('treatment-room', 'A clean, white clinic treatment room with an examination couch', 'GP clinics and dermatologists can freeze or remove stubborn warts.')}` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<ul>
<li>the growth <strong>bleeds, changes</strong> in size, shape or colour, itches or hurts</li>
<li>you aren’t sure it is a wart. Some skin cancers and other growths, such as seborrhoeic keratoses, can look similar.</li>
<li>it is on your face or genitals, or you have many warts</li>
<li>it keeps coming back or spreading, or home treatment hasn’t worked after 12 weeks</li>
<li>you have diabetes, poor circulation or a weak immune system</li>
</ul>` },
      { id: 'prevention', h: 'Preventing warts', tocLabel: 'Prevention', html: `<ul>
<li>Don’t pick, scratch or bite warts, and don’t shave over them.</li>
<li>Don’t share towels, shoes or socks.</li>
<li>Wear flip-flops in shared showers and around pools, and cover verrucas with a waterproof plaster when swimming.</li>
<li>Keep your feet dry and change socks daily.</li>
<li>Vaccines covering HPV types 6 and 11 protect against most genital warts, and the HPV vaccine also prevents cervical and other cancers. Ask your doctor which vaccine you are being offered. See our guide to the <a href="/articles/hpv-vaccine-malaysia/">HPV vaccine</a>.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get warts treated',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Many GP clinics can confirm a wart, freeze or remove it, and refer you to a dermatologist for stubborn or unusual growths. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states. Call ahead to check they offer cryotherapy.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/aesthetic-clinics/', 'Aesthetic clinics']],
    faqs: [
      ['What causes ketuat?', 'Warts (ketuat) are caused by the human papillomavirus (HPV), which gets into the skin through small cuts or breaks.'],
      ['Do warts go away on their own?', 'Often, yes. Half of children’s warts disappear within a year and two-thirds within two years. Adults’ warts can take longer.'],
      ['What is the best treatment for warts?', 'Salicylic acid used every day for up to 12 weeks is the best-studied home treatment. Freezing at a clinic is an alternative, and the two can be combined.'],
      ['Are warts contagious?', 'Mildly. They spread by touch and on wet surfaces such as shower floors, and you can spread them on your own body by picking or shaving.'],
      ['What is the difference between a corn and a plantar wart?', 'A corn is thickened skin from pressure. A plantar wart is caused by a virus and shows tiny black dots when the hard skin is pared down.'],
      ['Can I remove a wart myself?', 'You can treat common warts and verrucas with pharmacy products, but never cut or burn them, and don’t treat warts on the face or genitals yourself.'],
      ['Does freezing warts hurt?', 'It stings during the treatment and usually blisters afterwards. Several sessions may be needed.'],
      ['Are genital warts the same as ordinary warts?', 'No. They are caused by different HPV types, are usually sexually transmitted, and need a doctor’s treatment.'],
    ],
    sources: [
      ['Primary Care Dermatology Society — Warts patient information (Jan 2025)', 'https://www.pcds.org.uk/patient-info-leaflets/warts'],
      ['British Association of Dermatologists — Plantar warts (Jun 2022)', 'https://www.bad.org.uk/pils/plantar-warts/'],
      ['NHS — Warts and verrucas (Jul 2023)', 'https://www.nhs.uk/conditions/warts-and-verrucas/'],
      ['NHS — Genital warts (Jul 2023)', 'https://www.nhs.uk/conditions/genital-warts/'],
      ['NHS — Corns and calluses (Jul 2026)', 'https://www.nhs.uk/conditions/corns-and-calluses/'],
      ['DermNet — Viral warts', 'https://dermnetnz.org/topics/viral-warts'],
      ['American Academy of Dermatology — Warts: self-care (May 2025)', 'https://www.aad.org/public/diseases/a-z/warts-self-care'],
      ['American Academy of Dermatology — Warts: diagnosis and treatment (May 2025)', 'https://www.aad.org/public/diseases/a-z/warts-treatment'],
      ['Cochrane — Topical treatments for skin warts (2012)', 'https://www.cochrane.org/CD001781/SKIN_topical-treatments-for-skin-warts'],
    ],
    related: ['skin-tags-keloids-lipomas-moles-malaysia', 'kurap-panau-fungal-skin-infection-malaysia', 'hpv-vaccine-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'fever-in-children-malaysia',
    title: 'Fever in children (demam budak): normal temperature, fever medicine, febrile seizures and when to see a doctor',
    crumb: 'Fever in children',
    desc: 'Fever in children (demam budak): normal temperature, how to measure it, paracetamol and ibuprofen doses, dengue caution, febrile seizures (sawan demam) and danger signs.',
    excerpt: 'Fever is one of the most common reasons parents take a child to the clinic. What counts as a fever, how to take your child’s temperature, how to use paracetamol and ibuprofen safely, why dengue changes the advice in Malaysia, what to do in a febrile seizure, and the signs that need a doctor straight away.',
    standfirst: 'A fever is the body’s normal response to infection, and most fevers in children are caused by viruses that clear up within a few days. How your child looks and behaves matters more than the number on the thermometer. In Malaysia, a fever that lasts more than 2 to 3 days also needs checking for dengue.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Fever', 'Demam', 'Febrile seizure'],
    image: 'paediatrician', imageAlt: 'A doctor listening to a baby’s chest with a stethoscope',
    keyPoints: [
      'A temperature of 38°C or higher is a fever. Most fevers last 1 to 4 days.',
      'Any baby under 3 months with a temperature of 38°C or more, or 3 to 6 months with 39°C or more, needs to see a doctor urgently.',
      'Give paracetamol or ibuprofen if your child is distressed, not just to bring the number down. If dengue is possible, give paracetamol only, not ibuprofen.',
      'See a doctor if a fever lasts more than 2 to 3 days, as a blood test may be needed to check for dengue. Dengue warning signs often appear as the fever goes down.',
      'Febrile seizures (sawan demam) affect 3 to 4 in 100 young children. They are frightening but don’t cause brain damage. Lay the child on their side and call 999 if it lasts more than 5 minutes.',
    ],
    sections: [
      { id: 'temperature', h: 'What is a normal temperature? (Suhu badan normal)', tocLabel: 'Normal temperature', html: `<div class="table-wrap"><table>
<thead><tr><th>Temperature</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>Up to about 37.4°C</td><td>Normal</td></tr>
<tr><td>37.5–37.9°C</td><td>Slightly raised (low-grade)</td></tr>
<tr><td>38°C or higher</td><td><strong>Fever</strong></td></tr>
</tbody></table></div>
<p><strong>How to measure:</strong></p>
<ul>
<li>Use a <strong>digital thermometer</strong>. Feeling the forehead with your hand isn’t reliable. Don’t use mercury thermometers.</li>
<li>For young children, put the thermometer in the <strong>armpit</strong>, with the arm held against the body, until it beeps. Armpit readings are slightly lower than true body temperature.</li>
<li><strong>Ear</strong> thermometers can be used from 6 months, and <strong>under-the-tongue</strong> readings from about 4 years.</li>
<li>Forehead (infrared) thermometers are convenient but can give false readings, for example if the child has been in the sun or a hot room.</li>
<li>Wait a few minutes after a bath or after taking off a blanket before measuring.</li>
</ul>` },
      { id: 'care', h: 'Caring for a child with a fever', tocLabel: 'Home care', html: `<ul>
<li><strong>Give plenty of fluids</strong>, little and often: water, milk, or oral rehydration salts. Keep breastfeeding.</li>
<li>Dress your child in light clothing and use a light sheet. <strong>Don’t over-wrap</strong> them or bundle them in blankets.</li>
<li><strong>Don’t sponge</strong> your child with cold or ice water, or give cold baths. It makes them uncomfortable and doesn’t help.</li>
<li>Let them rest, and offer food if they want it. There is no need to “starve a fever”.</li>
<li>Check on them regularly, including during the night.</li>
<li>Keep them home from school or nursery until they have had no fever for 24 hours without fever medicine.</li>
</ul>` },
      { id: 'medicine', h: 'Fever medicine (ubat demam budak)', tocLabel: 'Fever medicine', html: `<p>Fever itself isn’t harmful. Medicine is to make a distressed child more comfortable. If your child is playing and drinking, they may not need it.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Paracetamol</th><th>Ibuprofen</th></tr></thead>
<tbody>
<tr><td>Usual dose</td><td>15 mg per kg of body weight</td><td>5 to 10 mg per kg of body weight</td></tr>
<tr><td>How often</td><td>Every 4 to 6 hours, no more than 4 doses in 24 hours</td><td>Every 6 to 8 hours, with food or milk</td></tr>
<tr><td>Age</td><td>From 2 months. Ask a doctor first for younger babies</td><td>From 3 months and over 5 kg</td></tr>
<tr><td>Avoid if</td><td>—</td><td>Possible <strong>dengue</strong>, chickenpox, dehydration, or asthma (unless a doctor advises)</td></tr>
</tbody></table></div>
<ul>
<li><strong>Dose by your child’s weight</strong>, not just age, and use the measuring syringe or cup that comes with the medicine. Check the strength on the label, as children’s syrups come in different strengths.</li>
<li><strong>In Malaysia, dengue is a real possibility</strong> with any fever. Ibuprofen and aspirin can raise the risk of bleeding in dengue, so use paracetamol unless a doctor has ruled dengue out.</li>
<li>Don’t routinely alternate paracetamol and ibuprofen unless a doctor advises it.</li>
<li><strong>Never give aspirin</strong> to children under 16.</li>
</ul>` },
      { id: 'danger', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<p><strong>Call <a href="tel:999">999</a> or go to an emergency department if your child:</strong></p>
<ul>
<li>has a rash that doesn’t fade when you press a glass against it</li>
<li>has a stiff neck, or is bothered by bright light</li>
<li>is floppy, very drowsy or hard to wake</li>
<li>is struggling to breathe, breathing very fast, or the chest sucks in with each breath</li>
<li>has blue, grey, pale or blotchy skin or lips, or cold hands and feet</li>
<li>has a fit (seizure) for the first time</li>
</ul>
<p><strong>See a doctor the same day if:</strong></p>
<ul>
<li>your baby is <strong>under 3 months with 38°C or more</strong>, or <strong>3 to 6 months with 39°C or more</strong></li>
<li>your child shows signs of <strong>dehydration</strong>: fewer wet nappies, dry mouth, sunken eyes, no tears</li>
<li>they can’t keep fluids down, or aren’t feeding</li>
<li>the fever has lasted <strong>more than 2 to 3 days</strong>, or 5 days or more at any time</li>
<li>you are worried, or your child seems to be getting worse</li>
</ul>` },
      { id: 'dengue', h: 'Fever and dengue', tocLabel: 'Dengue', html: `<p>Dengue usually causes a high fever for 3 to 5 days. The dangerous stage often starts <strong>as the fever goes down</strong>, when a falling temperature can give false reassurance. Watch for:</p>
<ul>
<li>tummy pain, or vomiting 3 or more times a day</li>
<li>bleeding from the gums or nose, or blood in vomit or stools</li>
<li>being restless, very tired or drowsy</li>
<li>cold, clammy skin, or passing little urine</li>
</ul>
<p>Any of these needs a hospital straight away. If your child has had a fever for 2 to 3 days, see a doctor, who may arrange a blood test. See our guide to <a href="/articles/dengue-klang-valley-first-three-days/">dengue in the first three days</a>.</p>` },
      { id: 'seizures', h: 'Febrile seizures (sawan demam)', tocLabel: 'Febrile seizures', html: `<p>A febrile seizure is a fit triggered by a fever. It affects <strong>3 to 4 in 100</strong> children, usually between 6 months and 5 years old. The child may stiffen, twitch or jerk, roll their eyes and become unresponsive, usually for less than 5 minutes.</p>
<p><strong>What to do:</strong></p>
<ol>
<li>Stay calm and <strong>note the time</strong>.</li>
<li>Lay your child on their side on a safe surface, away from anything hard or sharp.</li>
<li><strong>Don’t put anything in their mouth</strong>, and don’t try to hold them down.</li>
<li>Don’t try to cool them by sponging or undressing them during the seizure.</li>
</ol>
<p><strong>Call <a href="tel:999">999</a> if</strong> it is your child’s first seizure, it lasts more than 5 minutes, it affects only one side of the body, there is more than one seizure in 24 hours, or your child is still very drowsy an hour later.</p>
<p><strong>The good news:</strong> febrile seizures don’t cause brain damage, and very few children go on to have epilepsy. About 3 in 10 have another one with a later fever. Fever medicines don’t prevent febrile seizures, so there is no need to wake your child to give doses.</p>
${figure('mother-child', 'A mother and daughter sitting together', 'Most fevers in children are caused by viruses and settle within a few days.')}` },
      { id: 'causes', h: 'Common causes of fever in Malaysian children', tocLabel: 'Causes', html: `<ul>
<li>colds, flu and other viral infections. See our guides to <a href="/articles/influenza-a-malaysia/">influenza</a> and <a href="/articles/rsv-malaysia/">RSV</a>.</li>
<li><a href="/articles/hfmd-children-malaysia/">hand, foot and mouth disease</a> and <a href="/articles/chickenpox-malaysia/">chickenpox</a></li>
<li><a href="/articles/tonsillitis-sore-throat-malaysia/">tonsillitis</a> and ear infections</li>
<li><a href="/articles/dengue-klang-valley-first-three-days/">dengue</a></li>
<li><a href="/articles/uti-urinary-tract-infection-malaysia/">urinary tract infections</a>, which in babies may cause only fever and irritability</li>
<li>vaccinations: a mild fever within a day or two of a vaccine is common and usually settles within 1 to 2 days. A fever 1 to 2 weeks after the MMR or chickenpox vaccine can also happen. See our <a href="/articles/baby-vaccination-schedule-malaysia/">vaccination schedule guide</a>.</li>
</ul>
<p>For help deciding where to go, see our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic open now',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine your child, find the cause of the fever and arrange a blood test for dengue if needed. Fevers often get worse at night, so our directory shows clinics open 24 hours and late across Kuala Lumpur, Selangor and other states. For danger signs, go straight to an emergency department.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What temperature is a fever in a child?', '38°C or higher. Up to about 37.4°C is normal, and 37.5 to 37.9°C is slightly raised.'],
      ['When should I take my child to the doctor for a fever?', 'Straight away for a baby under 3 months with 38°C or more, or any danger signs such as a rash that doesn’t fade, breathing difficulty or drowsiness. Otherwise, if the fever lasts more than 2 to 3 days, or your child is dehydrated or getting worse.'],
      ['How much paracetamol can I give my child?', 'Usually 15 mg per kg of body weight every 4 to 6 hours, with no more than 4 doses in 24 hours. Check the strength on the label and use the measuring device provided.'],
      ['Can I give ibuprofen for fever in Malaysia?', 'Only from 3 months, and not if dengue is possible, as it can raise the risk of bleeding. Use paracetamol unless a doctor has ruled out dengue.'],
      ['Should I sponge my child with cold water?', 'No. Cold sponging or ice baths make children uncomfortable and don’t help. Dress them lightly and give plenty of fluids.'],
      ['What should I do if my child has a febrile seizure?', 'Note the time, lay them on their side somewhere safe, don’t put anything in their mouth, and call 999 if it is the first one or lasts more than 5 minutes.'],
      ['Do febrile seizures cause brain damage?', 'No. They are frightening, but they don’t cause brain damage, and very few children go on to have epilepsy.'],
      ['When can my child go back to school after a fever?', 'When they have had no fever for 24 hours without fever medicine and are feeling better.'],
    ],
    sources: [
      ['NHS — High temperature (fever) in children (Jan 2024)', 'https://www.nhs.uk/conditions/fever-in-children/'],
      ['Royal Children’s Hospital Melbourne — Fever in children (Mar 2026)', 'https://www.rch.org.au/kidsinfo/fact_sheets/Fever_in_children/'],
      ['Royal Children’s Hospital Melbourne — Pain relief for children (Oct 2025)', 'https://www.rch.org.au/kidsinfo/fact_sheets/Pain_relief_for_children/'],
      ['AMDI USM — Demam pada kanak-kanak: apa yang perlu anda tahu (Dec 2021)', 'https://news.amdi.usm.my/blog/read/demam-pada-kanak-kanak-apa-yang-perlu-anda-tahu'],
      ['American Academy of Pediatrics — How to take a child’s temperature (Apr 2024)', 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/How-to-Take-a-Childs-Temperature.aspx'],
      ['American Academy of Pediatrics — Febrile seizures (Dec 2025)', 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Febrile-Seizures.aspx'],
      ['NHS — Febrile seizures', 'https://www.nhs.uk/conditions/febrile-seizures/'],
      ['World Health Organization — Dengue and severe dengue (Aug 2025)', 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue'],
      ['CodeBlue — Watch out for dengue warning signs (Feb 2024)', 'https://codeblue.galencentre.org/2024/02/watch-out-for-dengue-warning-signs/'],
      ['bpac NZ — Paracetamol dosing (2018)', 'https://bpac.org.nz/2018/paracetamol.aspx'],
    ],
    related: ['normal-body-temperature-fever-adults-malaysia', 'painkillers-paracetamol-ibuprofen-malaysia', 'dengue-klang-valley-first-three-days'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'conjunctivitis-red-eyes-malaysia',
    title: 'Conjunctivitis and red eyes (sakit mata, mata merah): causes, treatment, how long it’s contagious, and emergencies',
    crumb: 'Conjunctivitis (sakit mata)',
    desc: 'Conjunctivitis (sakit mata, mata merah): viral, bacterial and allergic types, home care, when antibiotic drops help, the haze link, school, and red-eye warning signs.',
    excerpt: 'Red, gritty, sticky eyes are usually conjunctivitis, which mostly clears on its own. How to tell viral, bacterial and allergic conjunctivitis apart, what helps, how to stop it spreading at home and school, and the red-eye symptoms that need an eye doctor the same day.',
    standfirst: 'Conjunctivitis (sakit mata or mata merah) is inflammation of the thin, clear layer covering the white of the eye. It makes eyes red, watery, itchy or sticky. Most cases are caused by viruses or allergies and get better without treatment, but some red eyes are an emergency, especially with pain or blurred vision.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Conjunctivitis', 'Sakit mata', 'Red eye'],
    image: 'doctor-notes', imageAlt: 'A doctor in blue gloves writing notes on a clipboard',
    keyPoints: [
      'Viral conjunctivitis is the most common type. It causes watery, red eyes, often with a cold, and usually clears in 1 to 2 weeks without treatment.',
      'Bacterial conjunctivitis causes thick yellow or green sticky discharge. It often clears in a few days, and antibiotic drops help it clear a little faster.',
      'Allergic conjunctivitis causes intense itching in both eyes. It isn’t contagious, and haze can trigger it: during the October 2026 haze, conjunctivitis cases at sentinel clinics rose by about a quarter in a week.',
      'Wash your hands often, don’t share towels or pillows, and stop wearing contact lenses until your eyes are better.',
      'See an eye doctor or go to an emergency department for eye pain, blurred vision, sensitivity to light, a chemical splash, an injury, or a red eye while wearing contact lenses.',
    ],
    sections: [
      { id: 'types', h: 'Types of conjunctivitis', tocLabel: 'Types', html: `<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>Typical signs</th><th>Contagious?</th></tr></thead>
<tbody>
<tr><td>Viral</td><td>Red, watery eyes, gritty feeling, often starts in one eye and spreads to the other, often with a cold or sore throat</td><td>Yes, very</td></tr>
<tr><td>Bacterial</td><td>Red eye with thick yellow or green discharge, eyelids stuck together in the morning</td><td>Yes</td></tr>
<tr><td>Allergic</td><td>Intense itching, watering and puffy eyelids, usually both eyes, often with sneezing</td><td>No</td></tr>
<tr><td>Irritant</td><td>Redness and watering after smoke, haze, dust, chlorine or chemicals</td><td>No</td></tr>
</tbody></table></div>
<p><strong>Acute haemorrhagic conjunctivitis</strong> is a viral type that causes outbreaks in tropical countries, with bright red patches of blood on the white of the eye. A large outbreak in Melaka in 2002 to 2003 affected more than 10,000 people. In 2022, an outbreak in schools in Sri Aman, Sarawak affected 228 students.</p>
<p><strong>Haze</strong> is a common trigger of allergic and irritant conjunctivitis and dry eyes in Malaysia. See our guide to <a href="/articles/haze-air-quality-klang-valley/">protecting your family during haze</a>.</p>` },
      { id: 'treatment', h: 'Treatment (ubat sakit mata)', tocLabel: 'Treatment', html: `<p><strong>For all types:</strong></p>
<ul>
<li>Clean away discharge with cotton wool soaked in cooled boiled water, wiping from the inner to the outer corner, using a fresh piece for each eye.</li>
<li>A <strong>cool, damp cloth</strong> over closed eyes soothes them.</li>
<li><strong>Lubricating eye drops</strong> (artificial tears) from a pharmacy ease grittiness.</li>
<li><strong>Don’t wear contact lenses</strong> until your eyes are back to normal. Throw away disposable lenses and cases you used while infected.</li>
<li>Don’t wear eye make-up, and throw away eye make-up and drops you used since it started.</li>
</ul>
<p><strong>Viral:</strong> there is no specific treatment and antibiotics don’t help. It usually clears in 1 to 2 weeks, sometimes longer.</p>
<p><strong>Bacterial:</strong> mild cases often clear in 2 to 5 days on their own. A Cochrane review found antibiotic eye drops modestly improve the chance of clearing quickly. In Malaysian government clinics the usual first choice is chloramphenicol drops.</p>
<p><strong>Allergic:</strong> avoid triggers where you can, rinse your eyes, and use antihistamine eye drops or tablets from a pharmacy.</p>
<p><strong>Avoid steroid eye drops</strong> unless an eye doctor prescribes them. Used wrongly, they can cause glaucoma and cataracts and make some infections, such as herpes, much worse. Don’t put breast milk, herbs or other home remedies in the eyes.</p>
${figure('cold-flu', 'Tissues, nasal spray and a notebook on a desk', 'Viral conjunctivitis often comes with a cold or sore throat.')}` },
      { id: 'spread', h: 'Stopping it spreading', tocLabel: 'Stopping spread', html: `<ul>
<li>Wash your hands with soap for at least 20 seconds, especially after touching your eyes or putting in drops.</li>
<li>Don’t rub your eyes.</li>
<li>Don’t share towels, pillows, face cloths, eye make-up or eye drops.</li>
<li>Wash pillowcases and towels in hot water.</li>
<li>Avoid swimming pools until your eyes are better.</li>
</ul>
<p><strong>School and work:</strong> advice varies. UK health guidance says there is no need to stay off for conjunctivitis unless you feel unwell, while US advice is to stay home while the eyes are red and discharging if you can’t avoid close contact. Malaysian schools and workplaces may have their own rules, especially during outbreaks, so check with them. Viral conjunctivitis spreads easily while the eyes are red and watery.</p>` },
      { id: 'emergency', h: 'When a red eye is an emergency', tocLabel: 'Emergency signs', html: `<p><strong>Go to an emergency department or see an eye doctor the same day if you have:</strong></p>
<ul>
<li><strong>eye pain</strong>, rather than just grittiness or itch</li>
<li><strong>blurred or reduced vision</strong> that doesn’t clear with blinking</li>
<li>pain when looking at bright light</li>
<li>a very red eye with a severe headache, nausea or vomiting, or rainbow-coloured haloes around lights. These can be signs of acute glaucoma, which can quickly damage sight.</li>
<li>a red, painful eye while wearing <strong>contact lenses</strong>. Take the lenses out. It can be a serious corneal infection (keratitis).</li>
<li>an eye injury, or something stuck in the eye</li>
<li>blisters or a cold sore near the eye</li>
<li>a <strong>newborn baby</strong> (under 4 weeks) with red, sticky eyes</li>
</ul>
<p><strong>Chemical in the eye:</strong> rinse it straight away with lots of clean running water for at least 20 minutes, keep rinsing on the way, and go to an emergency department.</p>
<p>See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>
<p><strong>See a GP</strong> if conjunctivitis hasn’t improved after a week or two, keeps coming back, or you are unsure what is causing it. For a sore lump on the eyelid, see our guide to <a href="/articles/boils-styes-bisul-ketumbit-malaysia/">styes</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get red eyes checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can tell most types of conjunctivitis apart, prescribe drops if needed and refer you to an eye doctor for anything more serious. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What is sakit mata in English?', 'Sakit mata or mata merah usually means conjunctivitis, also called pink eye: inflammation of the thin layer covering the white of the eye.'],
      ['How long is conjunctivitis contagious?', 'Viral and bacterial conjunctivitis can spread while the eyes are red and discharging. Viral conjunctivitis usually lasts 1 to 2 weeks.'],
      ['Do I need antibiotic eye drops?', 'Not for viral or allergic conjunctivitis. For bacterial conjunctivitis, drops help it clear a little faster, but many cases clear on their own within a few days.'],
      ['How do I know if conjunctivitis is viral or bacterial?', 'Viral usually causes watery eyes, often with a cold. Bacterial causes thick yellow or green discharge that sticks the eyelids together. Allergic causes intense itching in both eyes.'],
      ['Can haze cause red eyes?', 'Yes. Haze can trigger allergic and irritant conjunctivitis and dry eyes. Limit time outdoors and use lubricating drops.'],
      ['When is a red eye an emergency?', 'With eye pain, blurred vision, sensitivity to light, a severe headache with vomiting, an injury or chemical splash, or a painful red eye while wearing contact lenses.'],
      ['Can I wear contact lenses with conjunctivitis?', 'No. Stop wearing them until your eyes are back to normal, and throw away disposable lenses and cases you used while infected.'],
      ['Should my child stay home from school with conjunctivitis?', 'Advice differs between countries, and Malaysian schools may have their own rules, especially during outbreaks. Check with the school, and keep the child home if they feel unwell.'],
    ],
    sources: [
      ['NHS — Conjunctivitis (Apr 2024)', 'https://www.nhs.uk/conditions/conjunctivitis/'],
      ['NHS — Red eye (Oct 2025)', 'https://www.nhs.uk/conditions/red-eye/'],
      ['NHS — Eye injuries (Mar 2026)', 'https://www.nhs.uk/conditions/eye-injuries/'],
      ['American Academy of Ophthalmology — What is pink eye? (Jun 2026)', 'https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis'],
      ['US CDC — How to treat pink eye (Apr 2024)', 'https://www.cdc.gov/conjunctivitis/treatment/index.html'],
      ['US CDC — Preventing pink eye (Apr 2024)', 'https://www.cdc.gov/conjunctivitis/prevention/'],
      ['Cochrane — Antibiotics for acute bacterial conjunctivitis (Mar 2023)', 'https://www.cochrane.org/CD001211/EYES_what-are-benefits-and-harms-antibiotics-acute-bacterial-conjunctivitis'],
      ['Ministry of Health Malaysia — National Antimicrobial Guideline: ocular infections', 'https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a7-ocular-infections'],
      ['Malay Mail — Haze sees respiratory infections rise 10.43pc, conjunctivitis 26.47pc (10 Oct 2026)', 'https://www.malaymail.com/news/malaysia/2026/10/10/haze-sees-respiratory-infections-rise-1043pc-conjunctivitis-2647pc/238545'],
      ['The Star — More cases of allergic conjunctivitis and dry eyes recorded (Sep 2019)', 'https://www.thestar.com.my/news/nation/2019/09/18/more-cases-of-allergic-conjunctivitis-and-dry-eyes-recorded'],
      ['Ghazali et al. — Acute haemorrhagic conjunctivitis outbreak in Melaka (Singapore Medical Journal, 2003)', 'https://pubmed.ncbi.nlm.nih.gov/15024454/'],
      ['Journal of Family and Community Medicine — Conjunctivitis outbreak in schools in Sri Aman, Sarawak (2025)', 'https://pubmed.ncbi.nlm.nih.gov/40417616/'],
      ['UK Health Security Agency — Exclusion periods in children’s settings (Sep 2026)', 'https://www.gov.uk/government/publications/health-protection-in-schools-and-other-childcare-facilities/public-health-exclusion-periods-in-children-and-young-peoples-settings'],
    ],
    related: ['haze-air-quality-klang-valley', 'boils-styes-bisul-ketumbit-malaysia', 'clinic-or-emergency-department'],
  },
];
