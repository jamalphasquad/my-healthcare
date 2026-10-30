// Articles published 30 October 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-10-30';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const OCT_2026_F = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'anxiety-malaysia',
    title: 'Anxiety: the signs, how to cope, and when to get help (including exam stress)',
    crumb: 'Anxiety',
    desc: 'What anxiety is and how it differs from normal worry, panic attacks, self-help that works, magnesium, treatment in Malaysia, and coping with SPM exam stress.',
    excerpt: 'Everyone worries, but anxiety that won’t switch off can take over sleep, work and studies. The signs, self-help that works, what the evidence says about magnesium, where to get help in Malaysia, and how to handle exam stress.',
    standfirst: 'Feeling anxious before an exam or a big decision is normal. But when worry is constant, hard to control and starts affecting your sleep, studies or work, it may be an anxiety disorder, one of the most common and most treatable mental health conditions. Here is how to recognise it, what helps, and where to get support in Malaysia.',
    cat: 'mental-wellbeing', catLabel: 'Mental wellbeing', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Anxiety disorder', 'Gangguan kebimbangan'],
    image: 'morning-walk', imageAlt: 'People walking in a park in the morning',
    keyPoints: [
      'Anxiety becomes a disorder when worry is intense, hard to control, lasts for months and affects daily life. About 1 in 17 people worldwide has an anxiety disorder.',
      'Physical symptoms are common: a racing heart, breathlessness, stomach upset, tense muscles and poor sleep.',
      'Regular exercise, sleep, slow breathing, less caffeine and alcohol, and techniques such as “worry time” help many people.',
      'Talking therapy, especially cognitive behavioural therapy (CBT), is the first-line treatment. Medicines can help when therapy isn’t enough.',
      'Help is available through Klinik Kesihatan, MyMinda in MySejahtera, and Talian HEAL 15555. If you are thinking of harming yourself, call 999 or Befrienders on 03-7627 2929.',
    ],
    sections: [
      { id: 'what', h: 'What is anxiety? (Apakah anxiety?)', tocLabel: 'What anxiety is', html: `<p>Anxiety is the body’s natural response to threat or pressure: a feeling of worry, unease or fear. In small doses it is useful, helping you prepare for an exam or stay alert in danger.</p>
<p>It becomes an <strong>anxiety disorder</strong> when the fear and worry are intense, out of proportion, hard to control, and last for months, causing distress or getting in the way of daily life. The World Health Organization estimates that <strong>470 million people</strong>, about 1 in 17 worldwide, live with an anxiety disorder, yet fewer than 3 in 10 who need treatment receive any.</p>
<p>In Malaysia, the National Health and Morbidity Survey 2017 found symptoms of anxiety in about <strong>2 in 5 teenagers</strong> aged 13 to 17. In October 2026, the Health Minister said young people aged 16 to 19 have the highest rate of depression, at 7.9%. Calls to the Ministry’s Talian HEAL helpline more than doubled from 42,990 in 2024 to 90,981 in 2025.</p>` },
      { id: 'types', h: 'Common types of anxiety', tocLabel: 'Types of anxiety', html: `<ul>
<li><strong>Generalised anxiety disorder (GAD):</strong> worrying about many different things, most days, for 6 months or more, and finding it hard to stop.</li>
<li><strong>Panic disorder:</strong> repeated, sudden panic attacks, with a racing heart, chest pain, breathlessness, sweating, trembling, nausea, or a fear of dying or losing control. Attacks usually last 5 to 20 minutes. They are frightening but not dangerous.</li>
<li><strong>Health anxiety:</strong> constant worry about being ill, checking your body, searching symptoms online and seeking reassurance.</li>
<li><strong>Social anxiety:</strong> intense fear of being judged or embarrassed in social situations.</li>
</ul>
<p><strong>What about BPD?</strong> Borderline personality disorder is often searched alongside anxiety, but it is a different condition. It affects how a person manages emotions and relationships, with intense mood swings, impulsive behaviour and unstable relationships. It can occur together with anxiety, and specialised talking therapies help many people improve.</p>` },
      { id: 'symptoms', h: 'Signs and symptoms of anxiety', tocLabel: 'Symptoms', html: `<div class="table-wrap"><table>
<thead><tr><th>In your mind</th><th>In your body</th></tr></thead>
<tbody>
<tr><td>Constant worry, fearing the worst</td><td>Racing or pounding heart</td></tr>
<tr><td>Feeling restless or on edge</td><td>Breathlessness, tight chest</td></tr>
<tr><td>Irritability</td><td>Stomach upset, nausea, needing the toilet</td></tr>
<tr><td>Difficulty concentrating, mind going blank</td><td>Tense muscles, headaches</td></tr>
<tr><td>Avoiding places or situations</td><td>Poor sleep, tiredness, dizziness</td></tr>
</tbody></table></div>
<div class="box box--pink" role="note"><span class="box__title">Panic attack or heart attack?</span><p style="font-size:16px;line-height:1.6">If you have chest pain that feels tight or squeezing, spreads to your arm, neck or jaw, or comes with severe breathlessness, sweating or grey skin, treat it as an emergency and <strong>call 999</strong>, even if you have had panic attacks before. Doctors would much rather check and find it is anxiety. See our guide to <a href="/articles/stroke-heart-attack-kuala-lumpur/">heart attack warning signs</a>.</p></div>` },
      { id: 'self-help', h: 'How to overcome anxiety: self-help that works', tocLabel: 'Self-help', html: `<ul>
<li><strong>Breathe slowly.</strong> Breathe in gently through your nose for a count of 5, then out through your mouth for a count of 5. Practise for 5 minutes a day, not just when anxious.</li>
<li><strong>Move every day.</strong> Regular exercise, even a brisk walk, is one of the most effective ways to reduce anxiety.</li>
<li><strong>Protect your sleep.</strong> Keep regular sleep and wake times, and wind down without screens before bed.</li>
<li><strong>Cut down caffeine and alcohol.</strong> Coffee, energy drinks and alcohol can all make anxiety worse.</li>
<li><strong>Set a “worry time”.</strong> Write worries down when they come, and save them for a set 15-minute slot each day. Many lose their power by then.</li>
<li><strong>Challenge anxious thoughts.</strong> Ask yourself what you would tell a friend who had the same thought.</li>
<li><strong>Face fears gradually.</strong> Avoiding situations keeps anxiety going. Take small, manageable steps towards them.</li>
<li><strong>Ground yourself.</strong> When anxiety rises, name 5 things you can see, 4 you can feel, 3 you can hear, 2 you can smell and 1 you can taste.</li>
</ul>
<p>You can do a confidential self-assessment and find self-care resources in <strong>MyMinda</strong>, the mental health section of the MySejahtera app.</p>
${figure('mental-health', 'Letter tiles spelling “mental health” next to a sprig of green leaves', 'Small daily habits, such as exercise, sleep and slow breathing, make a real difference to anxiety.')}` },
      { id: 'magnesium', h: 'Does magnesium help anxiety and sleep?', tocLabel: 'Magnesium', html: `<p>Magnesium supplements are popular for anxiety and sleep, but the evidence is <strong>weak</strong>. A 2017 review of 18 studies found a possible benefit only in people already prone to anxiety, and rated the quality of the studies as poor. A 2021 analysis in older adults with insomnia found people fell asleep about 17 minutes sooner, but the evidence was low quality.</p>
<p>Magnesium isn’t a substitute for treatment. High doses can cause diarrhoea, and it can interact with some medicines and build up in people with kidney disease. Ask a doctor or pharmacist before taking it.</p>` },
      { id: 'treatment', h: 'Treatment for anxiety', tocLabel: 'Treatment', html: `<ul>
<li><strong>Talking therapy:</strong> cognitive behavioural therapy (CBT) is the first-line treatment for most anxiety disorders. It helps you understand and change the thoughts and habits that keep anxiety going, usually over a set number of sessions.</li>
<li><strong>Medicine:</strong> if therapy alone isn’t enough, doctors may prescribe a daily antidepressant from the SSRI or SNRI group, which also treat anxiety. They take a few weeks to work and shouldn’t be stopped suddenly.</li>
<li><strong>Sedatives</strong> such as benzodiazepines are generally only used briefly in a crisis, because they can cause dependence.</li>
</ul>
<p>Most people with anxiety improve with treatment. The sooner you get help, the easier it usually is.</p>` },
      { id: 'where', h: 'Where to get help in Malaysia', tocLabel: 'Where to get help', html: `<ul>
<li><strong>A GP or Klinik Kesihatan:</strong> a good first step. Government health clinics charge Malaysians a small fee and can screen for anxiety and depression, start treatment and refer you to a psychiatrist or psychologist.</li>
<li><strong>MENTARI community mental health centres:</strong> run by the Ministry of Health in many districts.</li>
<li><strong>Private psychologists, counsellors and psychiatrists:</strong> available in most cities, usually by appointment.</li>
<li><strong>Talian HEAL 15555:</strong> the Ministry of Health’s free psychosocial support line, staffed by counsellors, 8am to midnight every day.</li>
</ul>
<div class="box box--pink" role="note"><span class="box__title">If you are in crisis</span><p style="font-size:16px;line-height:1.6">If you are thinking of harming yourself or ending your life, call <a href="tel:999">999</a> or go to the nearest emergency department. You can also call <strong>Befrienders KL</strong> on <a href="tel:+60376272929">03-7627 2929</a>, free and confidential, 24 hours a day, or <strong>Talian Kasih</strong> on <a href="tel:15999">15999</a>.</p></div>
<p>More helplines are listed in our <a href="/articles/world-mental-health-day-2026-malaysia/">mental health helplines guide</a>.</p>` },
      { id: 'exam-stress', h: 'Exam stress and SPM', tocLabel: 'Exam stress', html: `<p>More than 420,000 students sit the SPM written papers from <strong>23 November to 17 December 2026</strong>. Some stress can help concentration, but too much gets in the way.</p>
<p><strong>For students:</strong></p>
<ul>
<li>Make a realistic revision timetable, with regular short breaks.</li>
<li>Sleep 8 to 10 hours, and avoid all-night cramming. Sleep helps your memory.</li>
<li>Keep moving: a short walk or exercise between study sessions clears the mind.</li>
<li>Go easy on energy drinks and coffee.</li>
<li>Talk to someone: a parent, teacher, school counsellor or friend.</li>
</ul>
<p><strong>For parents:</strong> watch for signs such as worry, headaches or stomach aches, poor sleep, irritability, changes in appetite, low mood or hopelessness. Keep expectations realistic, avoid adding pressure, and make sure your child eats and sleeps well. If anxiety or low mood is severe, lasts after the exams, or your child talks about self-harm, see a doctor promptly.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to talk to a doctor about anxiety',
    clinicsTocLabel: 'Talk to a doctor',
    clinicsIntro: 'A GP is a good first step for anxiety. They can assess how you are feeling, check for physical causes such as thyroid problems, start treatment and refer you for therapy. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open in the evening and at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What is anxiety? (Apakah anxiety?)', 'Anxiety is a feeling of worry, unease or fear. It becomes an anxiety disorder when the worry is intense, hard to control, lasts for months and affects daily life. It is common and treatable.'],
      ['How can I overcome anxiety?', 'Regular exercise, good sleep, slow breathing, cutting down caffeine and alcohol, setting a daily “worry time” and gradually facing feared situations all help. If anxiety is affecting your life, see a doctor about talking therapy such as CBT.'],
      ['Does magnesium help with anxiety and sleep?', 'The evidence is weak. Small, low-quality studies suggest a possible small benefit for some people. It isn’t a substitute for treatment, so ask a doctor or pharmacist before taking supplements.'],
      ['How do I know if it is a panic attack or a heart attack?', 'Panic attacks usually peak within minutes and pass within about 20 minutes. But chest pain that feels tight or squeezing, spreads to the arm, neck or jaw, or comes with severe breathlessness should be treated as an emergency. Call 999.'],
      ['Is BPD the same as anxiety?', 'No. Borderline personality disorder affects how a person manages emotions and relationships. It can occur alongside anxiety, but it is a separate condition with its own treatments.'],
      ['Where can I get free mental health support in Malaysia?', 'Talian HEAL 15555 (8am to midnight daily), Befrienders KL 03-7627 2929 (24 hours), Talian Kasih 15999, and MyMinda in MySejahtera. Government health clinics offer low-cost assessment and referral.'],
    ],
    sources: [
      ['World Health Organization — Anxiety disorders fact sheet (Sep 2026)', 'https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders'],
      ['The Vibes — Young Malaysians record highest rates of depression (22 Oct 2026)', 'https://www.thevibes.com/articles/news/128646/young-malaysians-record-highest-rates-of-depression-dr-dzulkefly'],
      ['The Star — Calls to Talian HEAL doubled between 2024 and 2025 (6 Jan 2026)', 'https://www.thestar.com.my/news/nation/2026/01/06/calls-to-talian-heal-doubled-between-2024-and-2025-says-dr-dzul'],
      ['NHS — Generalised anxiety disorder (Oct 2024)', 'https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/overview/'],
      ['NHS — Panic disorder', 'https://www.nhs.uk/mental-health/conditions/panic-disorder/'],
      ['NHS — Health anxiety', 'https://www.nhs.uk/mental-health/conditions/health-anxiety/'],
      ['NHS — Breathing exercises for stress (Jun 2026)', 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/'],
      ['NHS — Borderline personality disorder', 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/overview/'],
      ['Boyle et al. — Magnesium and subjective anxiety and stress, systematic review (Nutrients, 2017)', 'https://www.mdpi.com/2072-6643/9/5/429'],
      ['Mah & Pitre — Oral magnesium for insomnia in older adults, meta-analysis (2021)', 'https://pubmed.ncbi.nlm.nih.gov/33865376/'],
      ['NHS — Help your child beat exam stress', 'https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/help-your-child-beat-exam-stress/'],
      ['New Straits Times — 420,879 candidates to sit SPM written exams from Nov 23 to Dec 17 (Aug 2026)', 'https://www.nst.com.my/amp/news/nation/2026/08/1513647/updated-420879-candidates-sit-spm-written-exams-nov-23-dec-17'],
      ['Bernama — MENTARI community mental health centres (2024)', 'https://www.bernama.com/en/news.php?id=2322914'],
      ['Befrienders Kuala Lumpur', 'https://www.befrienders.org.my/'],
    ],
    related: ['world-mental-health-day-2026-malaysia', 'clinic-or-emergency-department', 'persistent-cough-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'hiv-malaysia',
    title: 'HIV in Malaysia: symptoms, testing, PrEP and treatment',
    crumb: 'HIV in Malaysia',
    desc: 'Early HIV symptoms and rash, HIV vs AIDS, where to get tested in Malaysia, self-test kits, free PrEP, PEP within 72 hours, treatment, and the premarital HIV test.',
    excerpt: 'Around 3,000 Malaysians are diagnosed with HIV every year, most of them young men. Early symptoms, the difference between HIV and AIDS, where to get tested (including self-tests), free PrEP, and why treatment means a long, healthy life.',
    standfirst: 'HIV is now a manageable long-term condition. With treatment, people with HIV live long, healthy lives and cannot pass the virus on through sex. But many people don’t know they have it, because early symptoms are mild or absent. Here is what to look out for, how and where to get tested in Malaysia, and how PrEP and PEP can prevent infection.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['HIV/AIDS', 'HIV/AIDS'],
    image: 'gp-consultation', imageAlt: 'A doctor holding a patient’s hand during a consultation',
    keyPoints: [
      'Malaysia records around 3,000 to 3,300 new HIV cases a year. In 2024 there were 3,185. 90% were men, most aged 20 to 39, and almost all infections were sexually transmitted.',
      'Early HIV can cause a flu-like illness and rash 2 to 6 weeks after infection, but many people have no symptoms. The only way to know is to get tested.',
      'HIV testing is available at government health clinics, NGO community centres and private clinics. Self-test kits are sold at selected pharmacies and online.',
      'PrEP, a daily pill that prevents HIV, is free at selected government health clinics. PEP must be started within 72 hours after a possible exposure.',
      'With treatment, people with HIV live long, healthy lives. When the virus is undetectable, it isn’t passed on through sex (U=U).',
    ],
    sections: [
      { id: 'malaysia', h: 'HIV in Malaysia today', tocLabel: 'HIV in Malaysia', html: `<p>Malaysia has recorded an average of about <strong>3,170 new HIV cases a year</strong> since 2018, according to the Ministry of Health. There were 3,185 in 2024, and a preliminary 3,004 in 2025. That is less than half the peak of nearly 7,000 a year in the early 2000s.</p>
<ul>
<li><strong>90% of new cases are men</strong>, and three-quarters are aged 20 to 39. In 2023, 44% were in their twenties.</li>
<li><strong>96% of new infections are sexually transmitted</strong>, around two-thirds among men who have sex with men. Infections from sharing needles, once the main route, are now rare.</li>
<li>In 2024, 135 new cases were adolescents aged 10 to 19, and 222 were students in higher education.</li>
<li>An estimated 85,000 people live with HIV in Malaysia. About 16% don’t know they have it.</li>
</ul>
<p>Malaysia was the first country in the Western Pacific to be validated by the WHO for eliminating mother-to-child transmission of HIV, in 2018, and kept that status in October 2026. About 99% of pregnant women with HIV now receive treatment.</p>` },
      { id: 'hiv-aids', h: 'HIV vs AIDS: what is the difference?', tocLabel: 'HIV vs AIDS', html: `<ul>
<li><strong>HIV</strong> (human immunodeficiency virus) is the virus. It attacks CD4 cells, part of the immune system.</li>
<li><strong>AIDS</strong> (acquired immunodeficiency syndrome) is the most advanced stage of untreated HIV. It is diagnosed when the CD4 count falls below 200, or when certain serious infections or cancers develop. The WHO now calls this “advanced HIV disease”.</li>
</ul>
<p>Without treatment, HIV usually takes years to progress to AIDS. With treatment, most people never develop AIDS.</p>
<p><strong>U=U: undetectable = untransmittable.</strong> People with HIV who take their treatment and keep the virus at undetectable levels do not pass HIV on to their sexual partners. This is backed by the WHO and the US CDC.</p>` },
      { id: 'symptoms', h: 'Early HIV symptoms, including the HIV rash', tocLabel: 'Symptoms', html: `<p>Some people get a short, flu-like illness <strong>2 to 6 weeks</strong> after infection, as the body reacts to the virus:</p>
<ul>
<li>Fever, sore throat, tiredness and aching muscles</li>
<li>Swollen glands in the neck, armpits or groin</li>
<li>A <strong>rash</strong>: usually flat and slightly raised red spots spread across the body, lasting a short time</li>
<li>Occasionally mouth or genital ulcers</li>
</ul>
<p>These symptoms usually go away within a few weeks. After that, HIV often causes <strong>no symptoms for many years</strong>, while it slowly damages the immune system.</p>
<p>Early HIV symptoms are the same for men and women, and they look like many other common infections. You can’t tell from symptoms alone. <strong>The only way to know your HIV status is to get tested.</strong></p>` },
      { id: 'testing', h: 'Where and how to get tested in Malaysia', tocLabel: 'Getting tested', html: `<ul>
<li><strong>Government health clinics (Klinik Kesihatan):</strong> HIV screening has been offered free for Malaysians, apart from the registration fee. Results are confidential.</li>
<li><strong>Community and NGO testing:</strong> the Malaysian AIDS Council and partner organisations offer friendly, confidential testing and counselling.</li>
<li><strong>Private clinics and hospitals:</strong> for a fee, usually with fast results.</li>
<li><strong>Self-test kits:</strong> since November 2024, HIV self-test kits have been sold at selected pharmacies and online through the TestNow programme, run with the Ministry of Health and the Malaysian AIDS Foundation. A positive self-test must be confirmed at a clinic.</li>
</ul>
<p><strong>The window period:</strong> a test can miss a very recent infection. According to the US CDC, a laboratory blood test can detect HIV from <strong>18 to 45 days</strong> after exposure, and rapid finger-prick and self-tests from <strong>23 to 90 days</strong>. If you test early, test again after the window period.</p>
${figure('blood-sample', 'A blood sample tube being prepared for testing', 'A laboratory blood test can detect HIV earlier than rapid and self-tests.')}` },
      { id: 'prep-pep', h: 'Preventing HIV: PrEP and PEP', tocLabel: 'PrEP and PEP', html: `<ul>
<li><strong>PrEP (pre-exposure prophylaxis)</strong> is medicine taken by HIV-negative people to prevent infection. Taken as prescribed, it is highly effective. Since 2023, PrEP has been offered free at selected government health clinics. By mid-2025, 35 clinics offered it and more than 9,300 people had started it. It is also available at private clinics.</li>
<li><strong>PEP (post-exposure prophylaxis)</strong> is a 28-day course of HIV medicine taken after a possible exposure, such as condomless sex or sexual assault. It must be started <strong>within 72 hours</strong>, and the sooner the better. It is available at selected government hospitals, university hospitals and private clinics. The Malaysian AIDS Council lists providers on its website. Go straight away rather than waiting.</li>
<li><strong>Condoms</strong> also protect against HIV and other sexually transmitted infections.</li>
</ul>` },
      { id: 'treatment', h: 'Treatment for HIV', tocLabel: 'Treatment', html: `<p>HIV is treated with <strong>antiretroviral therapy (ART)</strong>: a combination of medicines taken every day. ART doesn’t cure HIV, but it stops the virus multiplying, lets the immune system recover, and prevents transmission. Treatment is started as soon as possible after diagnosis.</p>
<p>First-line HIV treatment has been provided free to Malaysian citizens at Ministry of Health facilities since 2006. Around 50,700 people were on treatment in 2024. Taking medicine every day and keeping regular check-ups is the key to staying well.</p>` },
      { id: 'premarital', h: 'The premarital HIV test', tocLabel: 'Premarital HIV test', html: `<p>HIV screening is <strong>compulsory for all Muslim couples</strong> before marriage in Malaysia. It started in Johor in 2001 and has been nationwide since 2009.</p>
<ul>
<li>The test is done at <strong>government health clinics</strong>. You can book an appointment through MySejahtera.</li>
<li>If you apply through the state Islamic religious department, you’ll get a screening form (borang) for your couple. Bring it to the test.</li>
<li>The result is valid for <strong>6 months</strong>.</li>
<li>If the result is positive, you’ll be offered counselling at the health clinic and the religious office.</li>
</ul>
<p>For non-Muslim couples, premarital HIV screening is voluntary, but it is a good idea for both partners.</p>` },
      { id: 'stigma', h: 'Living with HIV, without stigma', tocLabel: 'Stigma and support', html: `<p>HIV can affect anyone, and stigma stops people from getting tested and treated. People with HIV can work, marry, have children who are HIV-negative, and live full lives.</p>
<p>If you face discrimination in a health setting, the Malaysian AIDS Council (MAC) can help, through its MAC CARE service. Complaints about government facilities can also be made through the government’s public complaints system.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get an HIV test',
    clinicsTocLabel: 'Where to get tested',
    clinicsIntro: 'Government health clinics offer free HIV screening for Malaysians, and many private GP clinics offer confidential HIV testing and can refer you for PrEP or treatment. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open in the evening and at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What is the difference between HIV and AIDS?', 'HIV is the virus. AIDS is the most advanced stage of untreated HIV, when the immune system is badly damaged. With treatment, most people with HIV never develop AIDS.'],
      ['What does an HIV rash look like?', 'It is usually a short-lived rash of flat or slightly raised red spots spread across the body, appearing 2 to 6 weeks after infection, often with fever and sore throat. Many other infections look the same, so only a test can tell.'],
      ['What are the symptoms of HIV in men? (Simptom HIV lelaki)', 'Early symptoms are the same for men and women: fever, sore throat, swollen glands, rash, tiredness and aching muscles, 2 to 6 weeks after infection. Many people have no symptoms. The only way to know is to test.'],
      ['Is HIV testing free in Malaysia?', 'HIV screening at government health clinics has been free for Malaysians, apart from the registration fee. Community testing through NGOs is also available. Private clinics charge a fee.'],
      ['How do I do the premarital HIV test? (Borang HIV pra perkahwinan)', 'Muslim couples must be screened at a government health clinic before marriage. Book through MySejahtera, and bring the screening form from your state Islamic religious department. Results are valid for 6 months.'],
      ['Where can I get PrEP in Malaysia?', 'PrEP is free at selected government health clinics, and also available at private clinics. The Malaysian AIDS Council lists providers on its website.'],
    ],
    sources: [
      ['The Star — Average of 3,169 new HIV cases recorded annually since 2018 (22 Jan 2026)', 'https://www.thestar.com.my/news/nation/2026/01/22/average-of-3169-new-hiv-cases-recorded-annually-since-2018'],
      ['CodeBlue — Young men drive most new HIV cases, MOH says (7 Aug 2025)', 'https://codeblue.galencentre.org/2025/08/young-men-drive-most-new-hiv-cases-moh-says-amid-scrutiny-over-outreach-efforts'],
      ['The Star — Malaysia sees 54% drop in new HIV infections over two decades (12 Nov 2025)', 'https://www.thestar.com.my/news/nation/2025/11/12/malaysia-sees-54-drop-in-new-hiv-infections-over-two-decades'],
      ['The Star — Adolescents make up 4.2% of new HIV cases (18 Nov 2025)', 'https://www.thestar.com.my/news/nation/2025/11/18/adolescents-make-up-42-of-new-hiv-cases-last-year-says-dzulkefly'],
      ['Malaysian AIDS Foundation — Snapshot of HIV & AIDS in Malaysia 2023', 'https://maf.org.my/V2/wp-content/uploads/2025/01/HIV-Statistic_2023_Media_Brochure_A4_06012025.pdf'],
      ['CodeBlue — Over 9,000 patients on PrEP (29 Aug 2025)', 'https://codeblue.galencentre.org/2025/08/over-9000-patients-nationwide-on-prep-as-hiv-cases-rise-among-msm/'],
      ['The Star — Malaysia retains WHO validation for eliminating mother-to-child HIV transmission (19 Oct 2026)', 'https://www.thestar.com.my/news/nation/2026/10/19/malaysia-retains-who-validation-for-eliminating-mother-to-child-hiv-syphilis-transmission'],
      ['US CDC — About HIV (Jan 2025)', 'https://www.cdc.gov/hiv/about/index.html'],
      ['World Health Organization — HIV and AIDS fact sheet (Jul 2026)', 'https://www.who.int/news-room/fact-sheets/detail/hiv-aids'],
      ['NHS — Symptoms of HIV (Jul 2025)', 'https://www.nhs.uk/conditions/hiv-and-aids/symptoms/'],
      ['US CDC — Getting tested for HIV (Sep 2026)', 'https://www.cdc.gov/hiv/testing/index.html'],
      ['The Star — HIV self-test kits now available to the public (24 Nov 2024)', 'https://www.thestar.com.my/news/nation/2024/11/24/hiv-self-test-kits-now-available-to-the-public'],
      ['US CDC — Post-exposure prophylaxis (PEP)', 'https://www.cdc.gov/hiv/prevention/pep.html'],
      ['Malaysian AIDS Council — PrEP and PEP', 'https://mac.org.my/v4/prep-pep/'],
      ['MyGOV — Premarital HIV screening (Aug 2026)', 'https://www.malaysia.gov.my/my/topics/ujian-saringan-hiv-praperkahwinan'],
      ['CodeBlue — People living with HIV still face discrimination in hospitals (Apr 2025)', 'https://codeblue.galencentre.org/2025/04/people-living-with-hiv-still-face-discrimination-in-malaysian-hospitals-says-mac'],
    ],
    related: ['hpv-vaccine-malaysia', 'free-health-screening-malaysia', 'anxiety-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'stomach-pain-gastric-malaysia',
    title: 'Stomach pain and “gastric”: what the location can mean, and when it’s an emergency',
    crumb: 'Stomach pain and gastric',
    desc: 'What stomach pain on the left, right or upper middle can mean, what “gastric” really is, H. pylori, pharmacy medicines, foods, children with vomiting, and red flags.',
    excerpt: 'Most stomach aches are harmless, but some need urgent care. What pain in different parts of the tummy can mean, what Malaysians call “gastric”, H. pylori, which medicines help, and the warning signs in adults and children.',
    standfirst: 'Stomach pain is one of the most common reasons people visit a clinic, and “gastric” one of the most common explanations Malaysians give for it. Most tummy aches are caused by indigestion, a stomach bug or constipation and settle on their own. But some, such as appendicitis or an ectopic pregnancy, need urgent care. Here is what the location of the pain can suggest, how to treat indigestion, and the warning signs to know.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Abdominal pain', 'Sakit perut'],
    image: 'doctor-consultation', imageAlt: 'A doctor talking with a patient across a desk',
    keyPoints: [
      'What Malaysians call “gastric” is usually indigestion (dyspepsia) or gastritis: burning or gnawing pain in the upper middle tummy, bloating, early fullness and nausea.',
      'A common cause is the H. pylori bacteria, which is far more common among Malaysians of Indian and Chinese descent than Malays. It can be tested for with a breath test and treated with antibiotics.',
      'Pain that starts around the belly button and moves to the lower right may be appendicitis. One-sided lower pain in a woman who could be pregnant needs urgent assessment.',
      'Antacids and alginates help occasional indigestion. Don’t take pharmacy omeprazole for more than 2 weeks without seeing a doctor.',
      'Call 999 for sudden severe pain, vomiting blood, black stools, or pain with chest pain or breathlessness.',
    ],
    sections: [
      { id: 'gastric', h: 'What is “gastric”? (Apa itu gastrik?)', tocLabel: 'What “gastric” is', html: `<p>In Malaysia, “gastric” (gastrik) is used for several stomach problems that cause similar symptoms:</p>
<ul>
<li><strong>Indigestion (dyspepsia):</strong> pain or burning in the upper middle tummy, bloating, feeling full quickly, burping and nausea. In most people tests find no damage, which doctors call <strong>functional dyspepsia</strong>.</li>
<li><strong>Gastritis:</strong> inflammation of the stomach lining, often caused by H. pylori bacteria, painkillers such as ibuprofen and aspirin, or alcohol.</li>
<li><strong>Stomach (peptic) ulcer:</strong> a sore in the lining of the stomach or duodenum, causing burning pain that is often worse at night.</li>
<li><strong>Acid reflux (GORD):</strong> heartburn, a burning feeling rising from the stomach into the chest, and a sour taste.</li>
</ul>
<p>Indigestion is common in Malaysia: a study in Kuala Lumpur found it in about 1 in 4 adults.</p>` },
      { id: 'causes', h: 'Causes of gastric pain', tocLabel: 'Causes', html: `<ul>
<li><strong>H. pylori:</strong> a bacteria that infects the stomach lining and is the most common cause of chronic gastritis and ulcers. In Malaysian studies it is much more common among people of <strong>Indian and Chinese</strong> descent than Malays. In one Kelantan study, it was found in 29% of Indian, 24% of Chinese and 7% of Malay patients.</li>
<li><strong>Painkillers:</strong> regular use of anti-inflammatory painkillers (NSAIDs) such as ibuprofen, diclofenac and aspirin.</li>
<li><strong>Smoking and alcohol.</strong></li>
<li><strong>Triggers:</strong> large, fatty or spicy meals, coffee, chocolate, being overweight, pregnancy and stress can bring on symptoms. The NHS notes that spicy food and stress don’t cause ulcers, but can make symptoms worse.</li>
</ul>
<p>Skipping meals is often blamed for gastric. Studies have found links between irregular meals and indigestion, but haven’t shown that it is a cause.</p>` },
      { id: 'location', h: 'What the location of the pain can mean', tocLabel: 'Pain by location', html: `<p>The location of pain gives clues, but it isn’t a diagnosis. Many conditions can cause pain in more than one place.</p>
<div class="table-wrap"><table>
<thead><tr><th>Where it hurts</th><th>Possible causes</th></tr></thead>
<tbody>
<tr><td>Upper middle (atas tengah)</td><td>Indigestion, gastritis, ulcer, acid reflux. Less often, pancreatitis (severe pain spreading to the back) or a heart attack</td></tr>
<tr><td>Upper right</td><td>Gallstones (severe pain under the right ribs, lasting up to several hours), liver problems</td></tr>
<tr><td>Upper left</td><td>Gastritis, ulcer, pancreas or spleen problems</td></tr>
<tr><td>Around the belly button, moving to the lower right</td><td>Appendicitis</td></tr>
<tr><td>Lower left (sebelah kiri)</td><td>Constipation, trapped wind, diverticulitis (more common in older adults), kidney stones</td></tr>
<tr><td>Side or back, spreading to the groin</td><td>Kidney stones, kidney infection</td></tr>
<tr><td>Lower tummy, all over</td><td>Stomach bug, irritable bowel syndrome (IBS), urine infection</td></tr>
</tbody></table></div>
<p><strong>In women</strong>, lower tummy pain on one side can also be caused by period pain, ovulation pain, an ovarian cyst, endometriosis, pelvic infection, or an <strong>ectopic pregnancy</strong>. If there is any chance you could be pregnant, one-sided pain, especially with bleeding, dizziness or shoulder-tip pain, needs urgent assessment. See our <a href="/articles/pregnancy-due-date-calculator-malaysia/#ectopic">pregnancy guide</a>.</p>
<div class="box box--pink" role="note"><span class="box__title">Is it gastric or your heart?</span><p style="font-size:16px;line-height:1.6">A heart attack can feel like indigestion: a burning or heavy feeling in the upper tummy or chest, with sweating, nausea, breathlessness, or pain spreading to the arm, neck or jaw. If you have these symptoms, especially with diabetes, high blood pressure or if you smoke, call 999. See our <a href="/articles/stroke-heart-attack-kuala-lumpur/">heart attack guide</a>.</p></div>` },
      { id: 'treatment', h: 'How to ease gastric and indigestion', tocLabel: 'Treatment', html: `<p><strong>Pharmacy medicines (ubat gastrik di farmasi):</strong></p>
<ul>
<li><strong>Antacids and alginates</strong> neutralise acid or form a protective layer. They work quickly for occasional symptoms. Take them with or after food, and don’t rely on them long term.</li>
<li><strong>Acid-reducing medicines</strong> such as omeprazole (a proton pump inhibitor) or famotidine reduce stomach acid. Don’t take omeprazole bought from a pharmacy for more than 2 weeks without seeing a doctor. Long-term use needs medical supervision, and it can hide the symptoms of more serious conditions.</li>
<li><strong>Avoid ibuprofen, diclofenac and aspirin</strong> unless a doctor has prescribed them. Use paracetamol for pain instead.</li>
</ul>
<p><strong>H. pylori: test and treat.</strong> If you have ongoing indigestion, your doctor may test for H. pylori, usually with a <strong>urea breath test</strong>. You need to stop acid-reducing medicines and antibiotics for 2 to 4 weeks beforehand, so ask your doctor. If the test is positive, the Malaysian H. pylori consensus recommends a <strong>14-day course</strong> of an acid-reducing medicine plus antibiotics, followed by a repeat breath test to confirm the infection has gone.</p>
${figure('medications', 'Blister packs of tablets', 'Don’t take pharmacy acid-reducing medicines for more than 2 weeks without seeing a doctor.')}` },
      { id: 'food', h: 'Food and lifestyle for gastric', tocLabel: 'Food and lifestyle', html: `<p>There is no single “gastric diet”. Studies haven’t shown that cutting out particular foods works for everyone. What helps most people:</p>
<ul>
<li>Eat <strong>smaller meals</strong>, and avoid eating 3 to 4 hours before bed.</li>
<li>Notice and avoid <strong>your own trigger foods</strong>, such as spicy, fatty or fried food, coffee or chocolate.</li>
<li>Cut down on alcohol, and stop smoking.</li>
<li>Lose weight if you are overweight.</li>
<li>Raise the head of your bed slightly if you get heartburn at night.</li>
</ul>` },
      { id: 'children', h: 'Children with stomach pain and vomiting', tocLabel: 'Children', html: `<p>In children, stomach pain with vomiting is usually a <strong>stomach bug</strong> (gastroenteritis). Vomiting usually stops within 1 to 2 days and diarrhoea within 5 to 7 days. The main risk is <strong>dehydration</strong>:</p>
<ul>
<li>Give small, frequent sips of water or oral rehydration salts (ORS). Avoid fruit juice and fizzy drinks.</li>
<li>Watch for fewer wet nappies, dark urine, a dry mouth, or a child who is unusually sleepy.</li>
</ul>
<p>In Malaysia, remember <strong>dengue</strong>: severe tummy pain and persistent vomiting are dengue warning signs, often appearing as the fever comes down. See our <a href="/articles/dengue-klang-valley-first-three-days/">dengue guide</a>.</p>
<div class="box box--pink" role="note"><span class="box__title">Get urgent care for a child with</span><ul>
<li>Green, yellow-green or bloody vomit</li>
<li>Pain that moves to the lower right, or gets steadily worse over a few hours, especially with fever</li>
<li>Blood in the stool</li>
<li>Drowsiness, not responding normally, or a stiff neck</li>
<li>Signs of dehydration, or vomiting for more than 2 days</li>
</ul></div>` },
      { id: 'red-flags', h: 'When stomach pain is an emergency', tocLabel: 'Warning signs', html: `<div class="box box--pink" role="note"><span class="box__title">Call 999 or go to an emergency department for</span><ul>
<li>Sudden, severe stomach pain, or pain that suddenly gets much worse</li>
<li>Vomiting blood, or vomit that looks like coffee grounds</li>
<li>Black, sticky stools, or heavy bleeding from the bottom</li>
<li>A hard, swollen tummy that is very painful to touch</li>
<li>Being unable to pass urine, stool or wind, with vomiting</li>
<li>Stomach pain with chest pain or difficulty breathing</li>
<li>Stomach pain during pregnancy</li>
</ul></div>
<p><strong>See a doctor soon</strong> if you have indigestion with unexplained weight loss, difficulty swallowing, persistent vomiting, anaemia, or a family history of stomach cancer, or if new indigestion starts in middle age. Your doctor may arrange an endoscopy, a camera test to look inside the stomach.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get stomach pain checked',
    clinicsTocLabel: 'Where to get checked',
    clinicsIntro: 'A GP can examine your tummy, test for H. pylori, prescribe treatment and refer you for an endoscopy or scan if needed. Stomach pain often strikes at night, so our directory shows clinics open late, at weekends and around the clock across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/open-sunday/', 'Clinics open on Sunday']],
    faqs: [
      ['What is gastric? (Apa itu gastrik?)', 'In Malaysia, “gastric” usually means indigestion or gastritis: burning or gnawing pain in the upper middle tummy, bloating, feeling full quickly and nausea. Common causes include H. pylori bacteria, painkillers such as ibuprofen, smoking and alcohol.'],
      ['Why does the left side of my stomach hurt? (Kenapa perut sakit sebelah kiri?)', 'Common causes include trapped wind, constipation and gastritis. In older adults, diverticulitis can cause lower left pain, and kidney stones cause pain in the side. In women, ovarian cysts or period pain are possible. See a doctor if the pain is severe, persistent, or comes with fever or vomiting.'],
      ['What is the best gastric medicine at a pharmacy?', 'Antacids and alginates give quick relief for occasional symptoms. Acid-reducing medicines such as omeprazole help more persistent symptoms, but shouldn’t be taken for more than 2 weeks without seeing a doctor.'],
      ['What should I eat if I have gastric?', 'There is no single gastric diet. Eat smaller meals, avoid eating late at night, and avoid foods that trigger your own symptoms, such as spicy, fatty or fried food, coffee or alcohol.'],
      ['My child has stomach pain and is vomiting. What should I do?', 'Most cases are a stomach bug. Give small sips of oral rehydration salts and watch for dehydration. Get urgent care for green or bloody vomit, pain moving to the lower right, severe or worsening pain, or a drowsy child.'],
      ['Can gastric pain be a heart attack?', 'Yes, sometimes. A heart attack can feel like indigestion, with burning in the upper tummy or chest. Call 999 if it comes with sweating, breathlessness, or pain spreading to the arm, neck or jaw.'],
    ],
    sources: [
      ['Goh KL et al. — Malaysian consensus on Helicobacter pylori infection (JGH Open, 2023)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10134769/'],
      ['Asian consensus report on functional dyspepsia (2012)', 'https://www.jnmjournal.org/journal/view.html?doi=10.5056/jnm.2012.18.2.150'],
      ['Kaur & Naing — Prevalence of H. pylori in Kelantan by ethnicity (MJMS, 2003)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3561889'],
      ['Lee, Raj & Graham — H. pylori infection and gastric cancer in Malaysia (Helicobacter, 2013)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3974589'],
      ['NHS — Stomach ache (Oct 2026)', 'https://www.nhs.uk/conditions/stomach-ache/'],
      ['NHS — Indigestion', 'https://www.nhs.uk/conditions/indigestion/'],
      ['NHS — Heartburn and acid reflux', 'https://www.nhs.uk/conditions/heartburn-and-acid-reflux/'],
      ['NHS — Stomach ulcer (Aug 2025)', 'https://www.nhs.uk/conditions/stomach-ulcer/'],
      ['NHS — Omeprazole (Sep 2025)', 'https://www.nhs.uk/medicines/omeprazole/'],
      ['NHS — Appendicitis', 'https://www.nhs.uk/conditions/appendicitis/'],
      ['NHS — Acute pancreatitis (Mar 2026)', 'https://www.nhs.uk/conditions/acute-pancreatitis/'],
      ['NHS — Diarrhoea and vomiting', 'https://www.nhs.uk/conditions/diarrhoea-and-vomiting/'],
      ['Cleveland Clinic — Gastritis', 'https://my.clevelandclinic.org/health/diseases/10349-gastritis'],
      ['Cleveland Clinic — Abdominal pain (Nov 2025)', 'https://my.clevelandclinic.org/health/symptoms/4167-abdominal-pain'],
      ['American Academy of Pediatrics — Abdominal pain in children', 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Abdominal-Pain-in-Children.aspx'],
      ['World Health Organization — Dengue and severe dengue (Aug 2025)', 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue'],
      ['Malaysia National Cancer Registry Report 2017–2021 (summary)', 'https://nci.moh.gov.my/images/pdf/SUMMARY-OF-MALAYSIA-NATIONAL-CANCER-REGISTRY-REPORT-2017-2021.pdf'],
    ],
    related: ['clinic-or-emergency-department', 'dengue-klang-valley-first-three-days', 'pregnancy-due-date-calculator-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'headaches-malaysia',
    title: 'Headaches: common types, why they keep coming back, and warning signs',
    crumb: 'Headaches',
    desc: 'Tension headaches, migraine and cluster headaches, pain at the back of the head, why headaches keep coming back, painkillers, koyok and balms, and red flags.',
    excerpt: 'Most headaches are tension headaches or migraine, and are not dangerous. How to tell the types apart, why frequent painkillers can make headaches worse, whether koyok and balms work, and the warning signs that need urgent care.',
    standfirst: 'Almost everyone gets headaches, and about 4 in 10 people worldwide have a headache disorder. Most are tension headaches or migraine, which are uncomfortable but not dangerous. Here is how to tell the common types apart, why headaches can keep coming back, what helps, and the rare warning signs that need a doctor straight away.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Headache', 'Sakit kepala'],
    image: 'medications', imageAlt: 'Blister packs of tablets',
    keyPoints: [
      'Tension headaches feel like a tight band around the head, on both sides. Migraine is usually a throbbing pain, often one-sided, with nausea and sensitivity to light and sound.',
      'Taking painkillers on more than 2 or 3 days a week can cause medication-overuse headache, a common reason headaches keep coming back.',
      'Stress, poor sleep, skipped meals, dehydration, posture, screen time and alcohol are common triggers. A headache diary helps find yours.',
      'Menthol or peppermint balms have some evidence for tension headaches. Cluster headaches need specific treatment from a doctor.',
      'Call 999 for a sudden, extremely severe headache, or a headache with weakness, confusion, slurred speech, a stiff neck and fever, or after a head injury.',
    ],
    sections: [
      { id: 'types', h: 'Common types of headache', tocLabel: 'Types of headache', html: `<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>What it feels like</th><th>How long</th></tr></thead>
<tbody>
<tr><td>Tension-type headache</td><td>Pressing or tight, like a band around the head, on both sides. Mild to moderate. Often with tight neck and shoulder muscles.</td><td>30 minutes to several days</td></tr>
<tr><td>Migraine</td><td>Throbbing, often on one side, moderate to severe, worse with activity. Nausea or vomiting, and sensitivity to light and sound. Some people get an aura first, such as flashing lights.</td><td>4 hours to 3 days</td></tr>
<tr><td>Cluster headache</td><td>Very severe, one-sided pain around or above the eye, with a red, watery eye, runny nose or drooping eyelid on the same side. Restlessness. Comes in “clusters” lasting weeks or months.</td><td>15 minutes to 3 hours, up to several times a day</td></tr>
<tr><td>Medication-overuse headache</td><td>A daily or near-daily headache in someone taking painkillers frequently</td><td>Persistent</td></tr>
</tbody></table></div>
<p>A community study in Malaysia found that about <strong>1 in 4 adults</strong> had tension-type headaches and about <strong>1 in 11</strong> had migraine in a year, more often women.</p>
<p><strong>“Sinus headache” is often migraine.</strong> In one study, most people who believed they had sinus headaches actually met the criteria for migraine. A true sinus infection usually comes with a blocked nose, thick discharge and fever.</p>` },
      { id: 'back-of-head', h: 'Pain at the back of the head and neck', tocLabel: 'Back of the head', html: `<p>Headaches at the back of the head, near the neck, are usually caused by:</p>
<ul>
<li><strong>Tension-type headache</strong>, often with tight neck and shoulder muscles from stress or long hours at a desk or phone.</li>
<li><strong>Neck problems (cervicogenic headache):</strong> pain that starts in the neck, often with stiffness and pain when moving the neck.</li>
<li><strong>Occipital neuralgia:</strong> brief, sharp, shooting or electric pains from the base of the skull, with a tender scalp.</li>
</ul>
<p>A low, firm pillow, regular breaks from screens, stretching, and a warm or cold pack on the neck can help. See a doctor for back-of-head pain after a fall or injury, or with any of the warning signs below.</p>
${figure('doctor-notes', 'A doctor writing notes on a clipboard during a consultation', 'A headache diary helps your doctor work out the type of headache and its triggers.')}` },
      { id: 'why', h: 'Why do I keep getting headaches? (Punca kerap sakit kepala)', tocLabel: 'Why they keep coming back', html: `<p>Common triggers, according to the NHS:</p>
<ul>
<li>Stress, anxiety and poor or irregular sleep</li>
<li>Skipping meals, and not drinking enough water</li>
<li>Poor posture, and long hours looking at screens</li>
<li>Eyesight problems. Get your eyes tested if headaches come with reading or screen use</li>
<li>Alcohol, and too much (or suddenly cutting down) caffeine</li>
<li>Hormonal changes, such as periods and menopause</li>
<li>Colds, flu and sinus infections</li>
</ul>
<p>In the Malaysian study, more than half of people with migraine or tension headaches said sun exposure brought them on.</p>
<div class="box box--mint" role="note"><span class="box__title">Too many painkillers can cause headaches</span><p style="font-size:16px;line-height:1.6">Taking simple painkillers on 15 or more days a month, or combination painkillers or triptans on 10 or more days a month, can cause <strong>medication-overuse headache</strong>, the most common cause of daily headaches. Try to keep painkillers to no more than 2 or 3 days a week. If you are already taking them most days, see a doctor. Stopping, with support, usually brings improvement.</p></div>
<p><strong>Keep a headache diary.</strong> Note when headaches happen, how bad they are, what you were doing, what you ate, how you slept, and what medicine you took. Patterns often appear within a few weeks.</p>` },
      { id: 'relief', h: 'How to get rid of a headache', tocLabel: 'Relief', html: `<ul>
<li><strong>Simple painkillers:</strong> paracetamol, ibuprofen or aspirin work for most tension headaches. Take them early in a migraine attack. Don’t give aspirin to anyone under 16. In pregnancy, paracetamol is the usual first choice.</li>
<li><strong>Rest, water and food:</strong> drink water, eat if you’ve skipped a meal, and rest in a quiet, dark room during a migraine.</li>
<li><strong>Relax your neck and shoulders:</strong> gentle stretches, a warm shower or a warm pack.</li>
<li><strong>Koyok, menthol and peppermint balms:</strong> small studies have found that 10% peppermint oil or menthol applied to the forehead and temples eased tension headaches and migraine better than a placebo. Many patches also contain methyl salicylate, which is similar to aspirin, so avoid them if you are allergic to aspirin, take blood thinners, or on broken skin, and check the label before using them on children.</li>
</ul>
<p><strong>For migraine</strong>, a doctor may prescribe a <strong>triptan</strong>, a specific migraine medicine, and anti-sickness medicine. If you have frequent migraines, daily preventive medicines can reduce how often they happen. Newer injectable preventive treatments exist, and a neurologist can advise whether they suit you.</p>
<p><strong>Cluster headaches</strong> don’t respond to ordinary painkillers. They are treated with high-flow oxygen or a triptan injection or nasal spray, so see a doctor for a diagnosis and a treatment plan.</p>` },
      { id: 'red-flags', h: 'When a headache is an emergency', tocLabel: 'Warning signs', html: `<div class="box box--pink" role="note"><span class="box__title">Call 999 or go to an emergency department for a headache</span><ul>
<li>That comes on <strong>suddenly and is extremely painful</strong>, reaching its worst within a minute (a “thunderclap” headache)</li>
<li>With weakness or numbness of the face, arm or leg, slurred speech, confusion, or difficulty walking or balancing. These can be signs of a stroke.</li>
<li>With a high temperature, stiff neck, sensitivity to light, or a rash that doesn’t fade when pressed with a glass</li>
<li>After a head injury in the last 3 months</li>
<li>With a seizure, drowsiness, or loss of vision</li>
</ul></div>
<p><strong>See a doctor urgently</strong> for a headache that:</p>
<ul>
<li>is new, especially if you are over 50, or different from your usual headaches</li>
<li>is getting steadily worse, wakes you from sleep, or comes with vomiting</li>
<li>gets worse when you cough, sneeze or bend over</li>
<li>comes with eye pain or vision problems, or jaw pain when chewing and a tender scalp</li>
<li>happens when you have a weakened immune system or a history of cancer</li>
</ul>
<p><strong>In pregnancy or after giving birth</strong>, a severe headache with vision problems, pain below the ribs or sudden swelling of the face, hands or feet can be a sign of pre-eclampsia. Contact your clinic or go to hospital straight away.</p>
<p>High blood pressure usually causes no symptoms. It is only very high blood pressure, around 180/120 or above, that can cause a headache, and that is an emergency. See our guide to <a href="/articles/check-blood-pressure-at-home/">checking your blood pressure</a>.</p>` },
      { id: 'children', h: 'Headaches in children', tocLabel: 'Children', html: `<p>Headaches are common in children, often from tiredness, stress, missed meals or a viral illness. Migraine in children may be shorter, and some children with migraine have tummy pain more than headache.</p>
<p>See a doctor promptly if a child’s headache wakes them up or is there when they wake, keeps getting worse, comes with vomiting or a squint, or follows a head injury. Never give aspirin to children under 16.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor about headaches',
    clinicsTocLabel: 'Where to see a doctor',
    clinicsIntro: 'A GP can diagnose most headaches, check your blood pressure and eyesight, review your painkiller use, prescribe migraine treatment and refer you to a neurologist if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['Why do I keep getting headaches? (Punca kerap sakit kepala)', 'Common causes are stress, poor sleep, skipped meals, dehydration, posture, screen time, eyesight problems and alcohol. Taking painkillers too often can also cause frequent headaches. A headache diary helps find your triggers.'],
      ['What causes headaches at the back of the head near the neck?', 'Usually tension-type headaches or neck problems, often from stress and posture. Sharp, shooting pains from the base of the skull may be occipital neuralgia. See a doctor after an injury or if there are warning signs.'],
      ['How do I get rid of a headache quickly? (Cara hilangkan sakit kepala)', 'Take paracetamol or ibuprofen early, drink water, eat if you’ve missed a meal, and rest. For migraine, a quiet, dark room helps. Menthol or peppermint balms may ease tension headaches.'],
      ['What are the symptoms of migraine? (Simptom migrain)', 'A moderate to severe, throbbing headache, often on one side, lasting 4 hours to 3 days, with nausea or vomiting and sensitivity to light and sound. Some people see flashing lights or zigzags (aura) beforehand.'],
      ['What is a cluster headache?', 'A very severe, one-sided headache around the eye, lasting 15 minutes to 3 hours, with a red, watery eye or runny nose on the same side. Attacks come in clusters over weeks or months, and are much more common in men. Ordinary painkillers don’t help, so see a doctor.'],
      ['When is a headache dangerous?', 'Call 999 for a sudden, extremely severe headache, or a headache with weakness, confusion, slurred speech, a stiff neck and fever, a seizure, or after a head injury. See a doctor urgently for a new or worsening headache.'],
    ],
    sources: [
      ['World Health Organization — Headache disorders fact sheet (Oct 2025)', 'https://www.who.int/news-room/fact-sheets/detail/headache-disorders'],
      ['International Classification of Headache Disorders, 3rd edition (ICHD-3)', 'https://ichd-3.org'],
      ['Alders, Hentzen & Tan — Community-based prevalence study of headache in Malaysia (Headache, 1996)', 'https://ghdx.healthdata.org/record/community-based-prevalence-study-headache-malaysia'],
      ['NHS — Headaches (Apr 2024)', 'https://www.nhs.uk/conditions/headaches/'],
      ['NHS — Tension headaches (Aug 2025)', 'https://www.nhs.uk/conditions/tension-headaches/'],
      ['NHS — Migraine (Mar 2026)', 'https://www.nhs.uk/conditions/migraine/'],
      ['NHS — Cluster headaches', 'https://www.nhs.uk/conditions/cluster-headaches/'],
      ['NHS — Pre-eclampsia (Mar 2026)', 'https://www.nhs.uk/conditions/pre-eclampsia/'],
      ['Schreiber et al. — Prevalence of migraine in patients with a history of self-reported sinus headache (Arch Intern Med, 2004)', 'https://pubmed.ncbi.nlm.nih.gov/15364670/'],
      ['Göbel et al. — Peppermint oil in the acute treatment of tension-type headache (Schmerz, 2016)', 'https://pubmed.ncbi.nlm.nih.gov/27106030/'],
      ['Borhani Haghighi et al. — Cutaneous application of menthol 10% for migraine (Int J Clin Pract, 2010)', 'https://pubmed.ncbi.nlm.nih.gov/20456191/'],
    ],
    related: ['vertigo-dizziness-malaysia', 'stroke-heart-attack-kuala-lumpur', 'anxiety-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'acne-malaysia',
    title: 'Acne (jerawat): causes, what spots in different places mean, and treatments that work',
    crumb: 'Acne (jerawat)',
    desc: 'What causes acne, spots on the forehead, around the mouth, back and bottom, “fungal acne”, treatments that work, acne patches, unsafe creams and when to see a doctor.',
    excerpt: 'About two in three Malaysian teenagers get acne, and many adults do too. What causes it, why spots on the back or around the mouth may not be acne at all, which treatments work, and why to avoid creams with hidden steroids.',
    standfirst: 'Acne is one of the most common skin conditions in Malaysia, affecting about two in three teenagers and many adults. Most acne responds well to the right treatment, but it takes time, and some spots that look like acne need different care. Here is what causes it, what different locations can mean, which treatments the evidence supports, and when to see a doctor.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Acne vulgaris', 'Jerawat'],
    image: 'aesthetic-suite', imageAlt: 'A clean aesthetic treatment room with a treatment bed',
    keyPoints: [
      'Acne is caused by oily skin, blocked pores, skin bacteria and inflammation, often driven by hormones. It isn’t caused by dirt, and scrubbing makes it worse.',
      'Itchy, uniform bumps on the back and chest are often “fungal acne” (Malassezia folliculitis), which is common in hot, humid weather and needs antifungal treatment.',
      'A rash of small bumps around the mouth may be perioral dermatitis, often triggered by steroid creams, not acne.',
      'Benzoyl peroxide, topical retinoids and azelaic acid work, but take 8 to 12 weeks. Doctors can add antibiotics, hormonal treatment or isotretinoin.',
      'Avoid unregistered creams: NPRA has cancelled products containing hidden steroids, tretinoin and mercury.',
    ],
    sections: [
      { id: 'what', h: 'What causes acne?', tocLabel: 'Causes', html: `<p>Acne starts in the hair follicles (pores). Four things work together:</p>
<ul>
<li>The skin makes too much oil (sebum), often driven by hormones during puberty, periods, pregnancy or conditions such as polycystic ovary syndrome (PCOS)</li>
<li>Dead skin cells block the pores, forming blackheads and whiteheads</li>
<li>Bacteria that normally live on the skin (<em>Cutibacterium acnes</em>) multiply in the blocked pore</li>
<li>Inflammation turns blocked pores into red spots, pus-filled spots, and deeper nodules or cysts</li>
</ul>
<p>Malaysia’s 2022 acne guidelines report acne in about <strong>two-thirds of teenagers</strong> aged 13 to 17. It usually improves after the teenage years, but adult acne is common, especially in women.</p>
<p><strong>What makes it worse:</strong> stress, picking or squeezing spots, oily cosmetics and hair products, and possibly high-sugar diets and large amounts of milk (the evidence is limited). Acne isn’t caused by dirty skin. The evidence on chocolate is mixed.</p>` },
      { id: 'location', h: 'Spots in different places: what they can mean', tocLabel: 'Spots by location', html: `<div class="table-wrap"><table>
<thead><tr><th>Where</th><th>What it may be</th></tr></thead>
<tbody>
<tr><td>Forehead, hairline, eyebrows</td><td>Acne, often aggravated by oily hair, fringes and hair products. Spots from hair products can take 4 to 6 weeks to clear after stopping the product.</td></tr>
<tr><td>Around the mouth, lips and nose</td><td>Often <strong>perioral dermatitis</strong>: small red bumps that spare the skin right next to the lip. It is commonly triggered by steroid creams, or inhaled and nasal steroids, and can flare when they are stopped. It needs different treatment from acne.</td></tr>
<tr><td>Jawline and chin in adult women</td><td>Often linked to hormones. Acne with irregular periods or excess hair can be a sign of PCOS.</td></tr>
<tr><td>Upper back and chest</td><td>Acne, or <strong>“fungal acne”</strong> (Malassezia folliculitis): small, uniform, <strong>itchy</strong> bumps without blackheads, common in hot, humid weather and in young men. It is treated with antifungal washes or tablets, not acne creams.</td></tr>
<tr><td>Buttocks</td><td>Usually <strong>folliculitis</strong> (inflamed hair follicles) from sweat, friction and tight clothing, rather than true acne</td></tr>
</tbody></table></div>
<p>“Face mapping”, the idea that spots in certain areas reflect problems with particular organs, has no scientific basis.</p>
${figure('facial-treatment', 'A doctor examining facial skin in a clinic', 'A doctor can tell acne apart from look-alikes such as perioral dermatitis and fungal acne.')}` },
      { id: 'treatments', h: 'Acne treatments that work', tocLabel: 'Treatments', html: `<p>These treatments are recommended in Malaysian and international guidelines:</p>
<ul>
<li><strong>Benzoyl peroxide:</strong> kills acne bacteria and reduces inflammation. Available from pharmacies. It can bleach fabrics and cause dryness, so start with a low strength.</li>
<li><strong>Topical retinoids</strong> (adapalene, tretinoin): unblock pores and prevent new spots. They cause dryness at first, make the skin sensitive to sun, and must not be used in pregnancy.</li>
<li><strong>Azelaic acid:</strong> treats spots and helps fade dark marks left by acne.</li>
<li><strong>Salicylic acid:</strong> sold over the counter, with modest benefit for mild acne.</li>
<li><strong>Topical antibiotics</strong> (clindamycin): prescribed, and always used <strong>with</strong> benzoyl peroxide or a retinoid, never alone, to prevent resistance.</li>
<li><strong>Oral antibiotics</strong> (such as doxycycline): for moderate acne, usually for no more than 3 to 4 months, alongside a cream.</li>
<li><strong>Hormonal treatment:</strong> the combined contraceptive pill or spironolactone can help women with hormone-related acne.</li>
<li><strong>Isotretinoin tablets:</strong> very effective for severe, scarring or persistent acne. In Malaysia, guidelines say it should be prescribed by dermatologists. It causes serious birth defects, so women must use contraception during treatment and for a month afterwards, and doctors monitor blood tests and mood.</li>
</ul>
<p><strong>Be patient:</strong> most treatments take <strong>8 to 12 weeks</strong> to work. Use them on the whole area, not just on spots, and keep going after the skin clears to prevent relapse.</p>` },
      { id: 'patches', h: 'Do acne patches work?', tocLabel: 'Acne patches', html: `<p>Hydrocolloid acne patches absorb fluid from a spot and, just as importantly, stop you touching and picking it. They can help a single surfaced whitehead heal, but the research is small, and they don’t treat deep cysts or prevent new acne.</p>` },
      { id: 'donts', h: 'What not to do', html: `<ul>
<li><strong>Don’t pick or squeeze</strong> spots. It spreads inflammation and causes scars and dark marks.</li>
<li><strong>Don’t scrub</strong>, or use toothpaste, lemon or alcohol on spots. Wash twice a day with a gentle cleanser.</li>
<li><strong>Don’t use steroid creams</strong> on the face. They can worsen acne and cause perioral dermatitis.</li>
<li><strong>Avoid unregistered “acne” or “whitening” creams</strong>. The National Pharmaceutical Regulatory Agency (NPRA) has repeatedly cancelled cosmetics found to contain hidden steroids, tretinoin, hydroquinone and mercury, which can thin and damage the skin and harm the kidneys and nerves. Check products on the NPRA website.</li>
</ul>` },
      { id: 'marks', h: 'Dark marks and scars', html: `<p>Dark marks after acne (post-inflammatory hyperpigmentation) are very common in Asian skin, affecting up to 87% of acne patients in some studies, and can last more than a year. Treating acne early, sun protection, and azelaic acid or retinoids help them fade. Acne scars affect many people with acne.</p>
<p>Once acne is controlled, scars can be improved with treatments such as chemical peels, laser resurfacing and microneedling at a doctor-led aesthetic clinic. See our guide to <a href="/articles/pico-laser-melasma-malaysia/">laser treatments and checking a clinic</a>.</p>` },
      { id: 'doctor', h: 'When to see a doctor', html: `<ul>
<li>Painful, deep nodules or cysts, or acne that is leaving scars or dark marks</li>
<li>No improvement after 2 to 3 months of pharmacy treatment</li>
<li>Acne affecting your confidence, mood or daily life</li>
<li>Sudden adult acne with irregular periods or excess hair, which may be PCOS</li>
<li>Itchy bumps on the back and chest that don’t respond to acne treatment</li>
<li>Acne during pregnancy, as some treatments aren’t safe</li>
</ul>
<p>Seek help urgently for acne that suddenly becomes painful and ulcerated with fever, or if acne is making you feel hopeless or think about harming yourself.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get acne treated',
    clinicsTocLabel: 'Where to get treated',
    clinicsIntro: 'A GP can diagnose acne and its look-alikes, prescribe creams and tablets, and refer you to a dermatologist for severe acne. For acne scars, choose a doctor-led aesthetic clinic. Our directory lists GP and aesthetic clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/aesthetic-clinics/', 'Aesthetic clinics'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/bukit-bintang/', 'Clinics in Bukit Bintang']],
    faqs: [
      ['How do I get rid of acne? (Cara hilangkan jerawat)', 'Wash twice daily with a gentle cleanser, don’t pick spots, and use an evidence-based treatment such as benzoyl peroxide, a topical retinoid or azelaic acid for at least 8 to 12 weeks. See a doctor if it doesn’t improve or leaves scars.'],
      ['Why do I get acne on my eyebrows and forehead? (Jerawat di kening)', 'Often from oily skin, oily hair, fringes, and hair or skin products that block pores. Spots caused by hair products can take 4 to 6 weeks to clear after stopping the product.'],
      ['Why do I get spots around my lips? (Jerawat di bibir)', 'Small red bumps around the mouth may be perioral dermatitis rather than acne, often triggered by steroid creams or inhalers. See a doctor, as acne creams can make it worse.'],
      ['Why do I get acne on my bottom? (Jerawat di punggung)', 'Spots on the buttocks are usually folliculitis, inflammation of hair follicles from sweat, friction and tight clothing, rather than acne. Loose cotton clothing and gentle washing help.'],
      ['Do acne patches work? (Patch jerawat)', 'They help single surfaced whiteheads heal and stop you picking, but evidence is limited and they don’t treat deep cysts or prevent new spots.'],
      ['What is fungal acne?', 'Malassezia folliculitis causes small, uniform, itchy bumps on the back and chest, common in hot, humid climates. It is caused by yeast, not acne bacteria, and is treated with antifungals.'],
    ],
    sources: [
      ['Ministry of Health — Clinical Practice Guidelines: Management of Acne Vulgaris, 2nd edition (2022)', 'https://mymahtas2.moh.gov.my/files/e-CPG_Acne-7_4_23.pdf'],
      ['Reynolds et al. — Guidelines of care for the management of acne vulgaris (American Academy of Dermatology, 2024)', 'https://pubmed.ncbi.nlm.nih.gov/38300170/'],
      ['NHS — Acne (Sep 2026)', 'https://www.nhs.uk/conditions/acne/'],
      ['American Academy of Dermatology — Adult acne', 'https://www.aad.org/public/diseases/acne/really-acne/adult-acne'],
      ['American Academy of Dermatology — Hair products and acne', 'https://www.aad.org/public/diseases/acne/causes/hair-products'],
      ['American Academy of Dermatology — Acne scars: diagnosis and treatment', 'https://www.aad.org/public/diseases/acne/derm-treat/scars'],
      ['DermNet — Malassezia folliculitis', 'https://dermnetnz.org/topics/malassezia-folliculitis'],
      ['DermNet — Periorificial dermatitis', 'https://dermnetnz.org/topics/periorificial-dermatitis'],
      ['British Association of Dermatologists — Acne patient information leaflet', 'https://www.skinhealthinfo.org.uk/condition/acne/'],
      ['NPRA — Press release on cancelled cosmetic products (Nov 2025)', 'https://www.npra.gov.my/easyarticles/images/shared/Press%20Release/Press-release-Nov-2025.pdf'],
      ['The Star — Health Ministry bans cosmetic products containing scheduled poisons (2 Apr 2026)', 'https://www.thestar.com.my/news/nation/2026/04/02/health-ministry-bans-cosmetic-products-containing-scheduled-poisons'],
    ],
    related: ['itchy-skin-eczema-hives-malaysia', 'pico-laser-melasma-malaysia', 'skin-boosters-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'bowel-cancer-screening-malaysia',
    title: 'Bowel cancer in Malaysia: symptoms, free stool test screening and colonoscopy',
    crumb: 'Bowel cancer screening',
    desc: 'Bowel (colorectal) cancer is the most common cancer in Malaysian men. Symptoms (kanser usus simptom), risk factors, free iFOBT stool tests from 50 and colonoscopy.',
    excerpt: 'Bowel cancer is the most common cancer in Malaysian men, and 3 in 4 cases are found late. The symptoms to watch for, who is at risk, the free stool test at government clinics from age 50, and what a colonoscopy involves.',
    standfirst: 'Bowel cancer, also called colorectal or colon cancer (kanser usus), is now the most common cancer in Malaysian men and the second most common in women. Three in four cases are found only at a late stage, yet a simple home stool test can pick it up early, when it is far more treatable. Here are the symptoms, who should be screened, and how to get tested in Malaysia.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Colorectal cancer', 'Kanser kolorektal'],
    image: 'nurse-stethoscope', imageAlt: 'A doctor holding a stethoscope',
    keyPoints: [
      'Bowel cancer is the most common cancer in Malaysian men and the second most common in women. Cases rose by more than half between 2012–2016 and 2017–2021.',
      'About 3 in 4 cases are diagnosed at stage 3 or 4. Early bowel cancer often causes no symptoms.',
      'Symptoms include blood in the stool, a change in bowel habit, tummy pain or bloating, unexplained weight loss and tiredness from anaemia.',
      'Adults aged 50 to 75 at average risk should do a stool test (iFOBT), free at government health clinics. A positive result needs a colonoscopy.',
      'If a close relative had bowel cancer, colonoscopy screening usually starts at 40, or earlier.',
    ],
    sections: [
      { id: 'malaysia', h: 'Bowel cancer in Malaysia', tocLabel: 'In Malaysia', html: `<p>According to the Malaysia National Cancer Registry report for 2017–2021:</p>
<ul>
<li>Bowel (colorectal) cancer made up <strong>14.1% of all cancers</strong>, the second most common overall after breast cancer, and the <strong>most common cancer in men</strong>.</li>
<li>About <strong>23,900 people</strong> were diagnosed in those five years, up 54% from 2012–2016. About 15% were under 50.</li>
<li>About <strong>three in four</strong> cases with a known stage were found at <strong>stage 3 or 4</strong>. Only about 6% were caught at stage 1.</li>
<li>The lifetime risk is about <strong>1 in 44 for men</strong> and <strong>1 in 62 for women</strong>, and highest among Chinese Malaysians (1 in 30 men).</li>
</ul>
<p>Finding it early makes a big difference. In US data, about 9 in 10 people whose cancer is found before it spreads are alive 5 years later, compared with about 1 in 7 when it has spread to distant organs.</p>` },
      { id: 'symptoms', h: 'Bowel cancer symptoms (kanser usus simptom)', tocLabel: 'Symptoms', html: `<ul>
<li><strong>Blood in your stool</strong>, which may look red or black, or bleeding from the bottom</li>
<li>A <strong>change in bowel habit</strong>, such as looser stools, constipation or going more often, lasting several weeks</li>
<li>Feeling you need to go even after you have just been</li>
<li>Tummy pain, a lump in the tummy, or bloating</li>
<li>Losing weight without trying</li>
<li>Tiredness or breathlessness from <strong>anaemia</strong> (low blood count)</li>
</ul>
<p>Most people with these symptoms don’t have cancer. Haemorrhoids (piles), for example, are a common cause of bleeding. But you can’t tell the difference yourself, so <strong>always get bleeding from the bottom checked</strong> by a doctor. Malaysian guidelines advise an urgent colonoscopy within 2 weeks for unexplained rectal bleeding with a change in bowel habit or weight loss, or for iron-deficiency anaemia.</p>
<p>Early bowel cancer often causes <strong>no symptoms at all</strong>, which is why screening matters.</p>` },
      { id: 'risk', h: 'Who is at higher risk?', tocLabel: 'Risk factors', html: `<ul>
<li>Being <strong>50 or older</strong>, though younger adults can get it</li>
<li>A <strong>close relative</strong> (parent, brother, sister or child) with bowel cancer, or inherited conditions such as Lynch syndrome</li>
<li>A history of bowel polyps, or inflammatory bowel disease (Crohn’s disease or ulcerative colitis)</li>
<li>Smoking, alcohol, being overweight and being inactive</li>
<li>A diet high in <strong>processed meat</strong> (such as sausages, ham and luncheon meat) and red meat, and low in fruit and vegetables. The WHO’s cancer agency classifies processed meat as a cause of bowel cancer.</li>
</ul>` },
      { id: 'screening', h: 'Free bowel cancer screening: the stool test', tocLabel: 'Free screening', html: `<p>Malaysian guidelines recommend that adults aged <strong>50 to 75</strong> at average risk do an <strong>immunochemical faecal occult blood test (iFOBT)</strong>, also called a FIT test. It detects tiny amounts of blood in the stool that you can’t see.</p>
<ul>
<li><strong>Where:</strong> it is offered <strong>free at government health clinics (Klinik Kesihatan)</strong>, apart from the registration fee. Ask for it at your next visit. Selangor’s Selangor Saring programme has also included the test. Private clinics and pharmacies offer it for a fee.</li>
<li><strong>How:</strong> you collect a small stool sample at home with the kit, and return it to the clinic. There are no diet restrictions.</li>
<li><strong>How often:</strong> the 2017 guidelines recommend yearly testing if negative. Some clinics schedule a repeat every 2 years.</li>
<li><strong>If positive:</strong> you are referred for a colonoscopy. A positive test doesn’t mean you have cancer. Most positives are due to polyps or other causes, but it must be followed up.</li>
</ul>
<p>Too few Malaysians take part. Between 2014 and 2018, only about 55% of people with a positive stool test went on to have the colonoscopy they needed. In Selangor’s screening programme, only 15–27% of people with abnormal results followed up. <strong>If your test is positive, please go for the colonoscopy.</strong></p>
${figure('blood-sample', 'A sample tube being prepared for laboratory testing', 'The stool test is done at home and returned to the clinic for testing.')}` },
      { id: 'family', h: 'If bowel cancer runs in your family', tocLabel: 'Family history', html: `<p>Malaysian guidelines recommend colonoscopy, rather than the stool test, for people with a family history:</p>
<div class="table-wrap"><table>
<thead><tr><th>Family history</th><th>When to start colonoscopy</th></tr></thead>
<tbody>
<tr><td>A parent, brother, sister or child diagnosed before 60, or any relative before 50</td><td>At 40, or 10 years younger than the youngest relative was at diagnosis, whichever is earlier. Repeat every 3 to 5 years.</td></tr>
<tr><td>A parent, brother, sister or child diagnosed at 60 or older</td><td>At 40. Repeat every 10 years.</td></tr>
</tbody></table></div>
<p>Tell your doctor about your family history, including the age your relative was diagnosed.</p>` },
      { id: 'colonoscopy', h: 'What happens during a colonoscopy', tocLabel: 'Colonoscopy', html: `<p>A colonoscopy uses a thin, flexible tube with a camera to look inside the large bowel. It can find cancer early, and <strong>remove polyps</strong> before they turn into cancer.</p>
<ul>
<li><strong>Before:</strong> you follow a special diet and take a strong laxative to empty the bowel.</li>
<li><strong>During:</strong> the test usually takes 30 to 45 minutes. You are usually offered sedation and painkillers. Polyps can be removed and small samples (biopsies) taken.</li>
<li><strong>After:</strong> don’t drive for 24 hours if you had sedation. Slight bleeding for a day or two is common.</li>
<li><strong>Risks:</strong> serious complications are uncommon. In the UK screening programme, a tear in the bowel happens in about 1 in 1,700 colonoscopies.</li>
</ul>` },
      { id: 'treatment', h: 'Treatment', html: `<p>Surgery to remove the cancer is the main treatment and offers the best chance of cure. Chemotherapy and radiotherapy may be used before or after surgery, and newer targeted treatments and immunotherapy help some people with advanced cancer. Treatment is planned by a team of specialists.</p>
<p>You can lower your risk by staying active, keeping a healthy weight, not smoking, limiting alcohol, eating less processed and red meat, and eating more fruit and vegetables.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to ask about bowel cancer screening',
    clinicsTocLabel: 'Where to get screened',
    clinicsIntro: 'Your nearest Klinik Kesihatan offers the free stool test from age 50. Private GP clinics can also arrange a stool test, check symptoms such as bleeding, and refer you for colonoscopy. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What are the symptoms of bowel cancer? (Kanser usus simptom)', 'Blood in the stool or bleeding from the bottom, a change in bowel habit lasting weeks, tummy pain or bloating, unexplained weight loss, and tiredness from anaemia. Early bowel cancer often has no symptoms.'],
      ['Is bowel cancer screening free in Malaysia?', 'Yes. The iFOBT stool test is offered free at government health clinics for adults aged 50 to 75 at average risk, apart from the registration fee. A positive result is followed by a colonoscopy at a government hospital.'],
      ['How is the iFOBT stool test done?', 'You collect a small stool sample at home using the kit and return it to the clinic. It detects hidden blood. There are no diet restrictions.'],
      ['At what age should I start bowel cancer screening?', 'At 50 for most people. If a close relative had bowel cancer, colonoscopy usually starts at 40, or 10 years before the age your relative was diagnosed, if they were under 60.'],
      ['Can bowel cancer affect young people?', 'Yes. About 15% of bowel cancers in Malaysia in 2017–2021 were in people under 50. Don’t ignore symptoms such as bleeding because you are young.'],
      ['Is bleeding from the bottom always cancer?', 'No. Haemorrhoids (piles) and fissures are common causes. But you can’t tell the cause yourself, so always have rectal bleeding checked by a doctor.'],
    ],
    sources: [
      ['Institut Kanser Negara — Summary of Malaysia National Cancer Registry Report 2017–2021 (Jul 2024)', 'https://nci.moh.gov.my/images/pdf/SUMMARY-OF-MALAYSIA-NATIONAL-CANCER-REGISTRY-REPORT-2017-2021.pdf'],
      ['Ministry of Health — Clinical Practice Guidelines: Management of Colorectal Carcinoma (2017), Quick Reference', 'https://mymahtas2.moh.gov.my/files/QR%20Management%20of%20Colorectal%20%20Carcinoma.pdf'],
      ['Ministry of Health — Clinical Practice Guidelines: Management of Colorectal Carcinoma (2017)', 'https://mymahtas2.moh.gov.my/files/CPG%20Management%20of%20Colorectal%20%20Carcinoma.pdf'],
      ['Chandran et al. — Overview of the colorectal cancer screening programme in Malaysia (Med J Malaysia, 2020)', 'https://mail.e-mjm.org/2020/v75n3/colorectal-cancer.pdf'],
      ['PLOS ONE — Colorectal cancer screening in Malaysian primary care (Dec 2022)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9799312/'],
      ['CodeBlue — Selangor Saring reveals reluctance for follow-ups (27 Aug 2025)', 'https://codeblue.galencentre.org/2025/08/selangor-saring-reveals-poor-state-of-peoples-health-reluctance-for-follow-ups/'],
      ['NHS — Bowel cancer symptoms (Sep 2026)', 'https://www.nhs.uk/conditions/bowel-cancer/symptoms/'],
      ['World Health Organization — Colorectal cancer fact sheet (Feb 2026)', 'https://www.who.int/news-room/fact-sheets/detail/colorectal-cancer'],
      ['IARC — Consumption of red meat and processed meat (Oct 2015)', 'https://www.iarc.who.int/wp-content/uploads/2018/07/pr240_E.pdf'],
      ['GOV.UK — Bowel cancer screening: having a colonoscopy (Jun 2025)', 'https://www.gov.uk/government/publications/bowel-cancer-screening-colonoscopy/bowel-cancer-screening-having-a-colonoscopy-fit'],
      ['American Cancer Society — Survival rates for colorectal cancer (Jan 2026)', 'https://www.cancer.org/cancer/types/colon-rectal-cancer/detection-diagnosis-staging/survival-rates.html'],
    ],
    related: ['free-health-screening-malaysia', 'stomach-pain-gastric-malaysia', 'breast-cancer-screening-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'blood-pressure-cholesterol-malaysia',
    title: 'High blood pressure and cholesterol: signs, normal levels, and how to lower them',
    crumb: 'Blood pressure and cholesterol',
    desc: 'Signs and causes of high blood pressure (darah tinggi), normal BP and cholesterol levels, why “lower it in 5 minutes” is a myth, and what medicines do.',
    excerpt: 'Nearly 1 in 3 Malaysian adults has high blood pressure, and 1 in 3 has high cholesterol, often without knowing. Normal levels, causes, what really lowers them and how fast, and what to know about blood pressure and cholesterol medicines.',
    standfirst: 'High blood pressure (darah tinggi) and high cholesterol rarely cause symptoms, yet together they are the main reasons Malaysians have heart attacks and strokes. Here are the normal levels, what causes them to rise, what really brings them down, and what to expect from medicines.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Hypertension', 'Darah tinggi'],
    image: 'bp-check-desk', imageAlt: 'A blood pressure monitor on a desk',
    keyPoints: [
      '29.2% of Malaysian adults have high blood pressure and 33.3% have high cholesterol, according to NHMS 2023. Many don’t know.',
      'High blood pressure usually has no signs. Only a blood pressure check can tell you. A reading of 140/90 or above, on repeated checks, is high.',
      'There is no safe way to lower blood pressure in 5 minutes. Very high blood pressure with chest pain, breathlessness, weakness or vision changes is an emergency: call 999.',
      'Cutting salt to less than 1 teaspoon a day, losing weight, exercise and less alcohol can lower blood pressure by several points each.',
      'Statins lower LDL cholesterol by about 20–55%. True statin side effects are less common than many people think.',
    ],
    sections: [
      { id: 'malaysia', h: 'How common are they in Malaysia?', tocLabel: 'In Malaysia', html: `<p>According to the National Health and Morbidity Survey (NHMS) 2023:</p>
<ul>
<li><strong>29.2%</strong> of adults have high blood pressure, and 11.9% of adults, about 2.7 million people, have it without knowing. Of those who are treated, fewer than half have it under control.</li>
<li><strong>33.3%</strong> have high cholesterol, and <strong>about half</strong> of them don’t know.</li>
<li>More than 60% of adults aged 18 to 39 with diabetes, high blood pressure or high cholesterol were unaware of it.</li>
</ul>
<p>Ischaemic heart disease, which both conditions lead to, is Malaysia’s leading cause of death. See our article on <a href="/articles/undiagnosed-diabetes-high-blood-pressure-young-adults/">undiagnosed conditions in young adults</a>.</p>` },
      { id: 'bp-levels', h: 'Blood pressure levels', tocLabel: 'Blood pressure levels', html: `<p>Blood pressure is written as two numbers: the top (systolic) is the pressure when the heart beats, and the bottom (diastolic) is the pressure between beats. Malaysia’s hypertension guidelines classify it as:</p>
<div class="table-wrap"><table>
<thead><tr><th>Reading (mmHg)</th><th>Category</th></tr></thead>
<tbody>
<tr><td>Below 120/80</td><td>Optimal</td></tr>
<tr><td>120–129 / 80–84</td><td>Normal</td></tr>
<tr><td>130–139 / 85–89</td><td>At risk</td></tr>
<tr><td>140–159 / 90–99</td><td>Stage 1 (mild) hypertension</td></tr>
<tr><td>160–179 / 100–109</td><td>Stage 2 (moderate)</td></tr>
<tr><td>180 / 110 or higher</td><td>Stage 3 (severe)</td></tr>
</tbody></table></div>
<p>One high reading doesn’t mean you have hypertension. Doctors confirm it with repeated readings, often at home. See our guide to <a href="/articles/check-blood-pressure-at-home/">checking your blood pressure at home</a>. On treatment, the target for most people is below 140/90, and lower for some people with diabetes, kidney disease or heart disease.</p>` },
      { id: 'signs', h: 'Signs of high blood pressure (tanda darah tinggi)', tocLabel: 'Signs', html: `<p>High blood pressure is called a <strong>“silent disease”</strong>. Most people feel completely well. Headaches, dizziness or tiredness are not reliable signs, and only a blood pressure check can tell you.</p>
<div class="box box--pink" role="note"><span class="box__title">When high blood pressure is an emergency</span><p style="font-size:16px;line-height:1.6">A reading of <strong>180/110 or higher</strong> needs prompt medical attention. Call <a href="tel:999">999</a> or go to an emergency department straight away if it comes with chest pain, breathlessness, severe headache, confusion, weakness or numbness, difficulty speaking, or vision changes. If you have no symptoms, sit quietly for 5 minutes, recheck, and see a doctor the same day if it is still very high.</p></div>` },
      { id: 'causes', h: 'What causes high blood pressure? (Punca darah tinggi)', tocLabel: 'Causes', html: `<p>Most high blood pressure has no single cause. It builds up with:</p>
<ul>
<li>Too much <strong>salt</strong>. Malaysians eat around 8 to 9.5 g of salt a day, well above the recommended limit</li>
<li>Being overweight, and not being active</li>
<li>Alcohol and smoking</li>
<li>Getting older, and having a family history</li>
<li>Stress</li>
</ul>
<p>Sometimes another condition or medicine is the cause, especially in younger people. Examples include kidney disease, <strong>sleep apnoea</strong> (heavy snoring with daytime sleepiness), thyroid or hormone problems, and medicines such as anti-inflammatory painkillers, steroids, decongestants and the contraceptive pill. Tell your doctor about any traditional or herbal remedies you take, too.</p>` },
      { id: 'lower-bp', h: 'How to lower blood pressure', tocLabel: 'Lowering blood pressure', html: `<p><strong>Can you lower blood pressure in 5 minutes?</strong> No, not safely. Slow, deep breathing may bring it down a little for a short time, and practised regularly it can help a few points. But there is no quick fix, and Malaysian guidelines warn that lowering very high blood pressure too fast can itself cause a stroke or heart attack. If a reading is very high, follow the emergency advice above.</p>
<p>What does work, over weeks to months, according to Malaysia’s hypertension guidelines:</p>
<div class="table-wrap"><table>
<thead><tr><th>Change</th><th>Typical effect on blood pressure</th></tr></thead>
<tbody>
<tr><td>Cut salt to less than 5 g (about 1 teaspoon) a day</td><td>Up to about 8/3 mmHg lower in Asian adults with hypertension</td></tr>
<tr><td>Lose weight</td><td>About 1 mmHg lower per kg lost</td></tr>
<tr><td>A healthy diet rich in fruit, vegetables and low-fat dairy</td><td>Several points lower</td></tr>
<tr><td>150 minutes of moderate exercise a week</td><td>Several points lower</td></tr>
<tr><td>Cut down alcohol</td><td>About 3/2 mmHg lower</td></tr>
</tbody></table></div>
<p>Cooking with less salt, soy sauce and stock cubes, and choosing fewer processed and hawker foods, makes the biggest difference for most Malaysians.</p>` },
      { id: 'bp-medicines', h: 'Blood pressure medicines', tocLabel: 'BP medicines', html: `<p>If lifestyle changes aren’t enough, or your blood pressure is high, your doctor will prescribe one or more medicines. The main groups are ACE inhibitors, angiotensin receptor blockers (ARBs), calcium channel blockers, diuretics and beta blockers. Common side effects to know:</p>
<ul>
<li><strong>ACE inhibitors</strong> (names often end in “-pril”): a dry, persistent cough in some people. Your doctor can switch you to an ARB.</li>
<li><strong>Calcium channel blockers</strong> such as amlodipine: ankle swelling, flushing or headache.</li>
<li><strong>Beta blockers</strong>: tiredness and cold hands and feet.</li>
</ul>
<p>Most people need treatment for life. <strong>Don’t stop your medicine</strong> when your readings become normal, because that usually means the medicine is working. Talk to your doctor about any side effects instead.</p>` },
      { id: 'cholesterol-levels', h: 'Normal cholesterol levels (kadar kolesterol normal)', tocLabel: 'Cholesterol levels', html: `<p>A cholesterol test measures several fats in the blood. You usually don’t need to fast. Malaysian guidelines use these levels to flag a problem:</p>
<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>Flag level (mmol/L)</th></tr></thead>
<tbody>
<tr><td>Total cholesterol</td><td>Above 5.2 is high</td></tr>
<tr><td>LDL (“bad”) cholesterol</td><td>Target depends on your heart risk (see below)</td></tr>
<tr><td>HDL (“good”) cholesterol</td><td>Below 1.0 in men or 1.2 in women is low</td></tr>
<tr><td>Triglycerides</td><td>Above 1.7 is high</td></tr>
</tbody></table></div>
<p><strong>LDL targets depend on your risk.</strong> The higher your risk of a heart attack or stroke, the lower your LDL should be. For people at very high risk, such as after a heart attack or stroke, Malaysia’s 2023 guidelines aim for <strong>1.4 mmol/L or lower</strong> and a reduction of more than half. Your doctor will work out your risk using your age, blood pressure, smoking, diabetes and family history.</p>` },
      { id: 'lower-cholesterol', h: 'How to lower cholesterol', tocLabel: 'Lowering cholesterol', html: `<ul>
<li>Cut down on <strong>saturated fat</strong> (fatty meat, coconut milk and ghee-heavy dishes, butter) and avoid trans fats in fried snacks and baked goods.</li>
<li>Eat more fibre: oats, whole grains, beans, fruit and vegetables. About 3 g of oat beta-glucan a day lowers LDL slightly.</li>
<li>Choose fewer refined carbohydrates, such as large servings of white rice and sweet drinks.</li>
<li>Exercise regularly, lose weight if you are overweight, and stop smoking.</li>
</ul>
<p><strong>How fast?</strong> Diet changes take weeks to months. Statins usually reach their full effect within about a month, and doctors recheck cholesterol 1 to 3 months after starting.</p>
<p><strong>Statins</strong> are the main cholesterol medicine. They lower LDL by about 20 to 55%, depending on the type and dose, and reduce heart attacks and strokes. Other medicines, such as ezetimibe, can be added.</p>` },
      { id: 'statin-side-effects', h: 'Side effects of cholesterol medicine (kesan sampingan ubat kolesterol)', tocLabel: 'Statin side effects', html: `<p>Statins are among the most studied medicines in the world, and serious side effects are rare:</p>
<ul>
<li><strong>Muscle aches:</strong> many people report them, but in trials they happen only slightly more often than with a dummy pill. In one study, people who had stopped statins because of side effects felt almost the same symptoms when taking a placebo. Serious muscle damage is rare. Most people who can’t tolerate one statin do fine on another.</li>
<li><strong>Liver:</strong> a mild rise in liver tests happens in under 3% of people. Liver failure is extremely rare.</li>
<li><strong>Diabetes:</strong> statins slightly increase the chance of developing diabetes, mainly in people already at risk, but the heart benefits are far greater.</li>
</ul>
<p>Don’t stop a statin on your own. If you have side effects, talk to your doctor about changing the dose or type.</p>
${figure('healthy-salad', 'A table of salad, fruit and vegetables in small bowls', 'More vegetables, fruit, oats and beans, and less saturated fat, help lower cholesterol.')}` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get your blood pressure and cholesterol checked',
    clinicsTocLabel: 'Where to get checked',
    clinicsIntro: 'Any GP clinic can check your blood pressure in minutes and arrange a cholesterol test. Government health clinics offer free checks, and many people qualify for free screening. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What are the signs of high blood pressure? (Tanda darah tinggi)', 'Usually none. High blood pressure is a “silent disease”, and only a blood pressure check can tell you. Very high blood pressure with chest pain, breathlessness, severe headache, weakness or vision changes is an emergency.'],
      ['How can I lower my blood pressure quickly? (Cara menurunkan darah tinggi dengan cepat)', 'There is no safe way to lower it within minutes, and lowering very high blood pressure too fast can be dangerous. Over weeks, cutting salt, losing weight, exercise and less alcohol all help. If a reading is 180/110 or higher with symptoms, call 999.'],
      ['What is a normal cholesterol level? (Kadar kolesterol normal)', 'Malaysian guidelines flag total cholesterol above 5.2 mmol/L, HDL below 1.0 (men) or 1.2 (women), and triglycerides above 1.7. Your LDL target depends on your heart risk.'],
      ['What are the side effects of cholesterol medicine? (Kesan ubat kolesterol)', 'Statins can cause muscle aches in some people, mild liver test changes and a slightly higher diabetes risk, but serious side effects are rare. Talk to your doctor rather than stopping it yourself.'],
      ['Can I stop my blood pressure medicine when my readings are normal?', 'No. Normal readings usually mean the medicine is working. Most people need it long term. Talk to your doctor before changing anything.'],
      ['How fast can I lower my cholesterol? (Menurunkan kolesterol dengan cepat)', 'Statins reach their full effect in about a month. Diet changes take weeks to months. Your doctor will usually recheck cholesterol 1 to 3 months after a change.'],
    ],
    sources: [
      ['Ministry of Health — Clinical Practice Guidelines: Management of Hypertension, 5th edition (2018)', 'https://mymahtas2.moh.gov.my/files/CPG%20Maagement%20of%20Hypertension%20CPG%202018%20V3.8%20FA.pdf'],
      ['Ministry of Health — Clinical Practice Guidelines: Management of Dyslipidaemia, 5th edition (2017)', 'https://mymahtas2.moh.gov.my/files/CPG%20Management%20of%20Dyslipidaemia%202017%20(5th%20Edition).pdf'],
      ['Academy of Medicine of Malaysia — Clinical practice guidelines list (incl. Dyslipidaemia, 6th edition, 2023)', 'https://www.acadmed.org.my/index.cfm?menuid=67'],
      ['Institute for Public Health — NHMS 2023 key findings', 'https://iku.nih.gov.my/images/nhms2023/key-findings-nhms-2023.pdf'],
      ['Department of Statistics Malaysia — Statistics on Causes of Death, Malaysia 2025', 'https://www.dosm.gov.my/portal-main/release-content/statistics-on-causes-of-death-malaysia-2025'],
      ['NHS — High blood pressure (Jul 2024)', 'https://www.nhs.uk/conditions/high-blood-pressure-hypertension/'],
      ['NHS — Side effects of amlodipine (Jun 2026)', 'https://www.nhs.uk/medicines/amlodipine/side-effects-of-amlodipine/'],
      ['NHS — Side effects of ramipril (Mar 2026)', 'https://www.nhs.uk/medicines/ramipril/side-effects-of-ramipril/'],
      ['Chaddha et al. — Device and non-device-guided slow breathing to reduce blood pressure (2019)', 'https://pubmed.ncbi.nlm.nih.gov/31331557/'],
      ['American College of Cardiology — SAMSON trial summary (Nov 2020)', 'https://www.acc.org/Latest-in-Cardiology/Articles/2020/11/12/20/28/sun-1028am-SAMSON-aha-2020'],
    ],
    related: ['check-blood-pressure-at-home', 'stroke-heart-attack-kuala-lumpur', 'undiagnosed-diabetes-high-blood-pressure-young-adults'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'vertigo-dizziness-malaysia',
    title: 'Vertigo and dizziness: common causes, exercises that help, and when it’s a stroke',
    crumb: 'Vertigo and dizziness',
    desc: 'Why vertigo happens (sebab vertigo): BPPV, inner ear infections, Ménière’s, low blood pressure. The Epley manoeuvre, medicines such as cinnarizine, and stroke signs.',
    excerpt: 'A brief spin when you roll over in bed is usually BPPV, which a simple head manoeuvre often fixes. The common causes of vertigo and dizziness, exercises that help, what anti-dizziness medicines can and can’t do, and the signs that dizziness is a stroke.',
    standfirst: 'Vertigo, the feeling that you or the room is spinning, is frightening but usually comes from a harmless inner ear problem. The most common cause can often be fixed in minutes with a head manoeuvre. Occasionally, though, sudden vertigo is a sign of a stroke. Here is how to tell the difference, what helps, and when to get urgent help.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Vertigo', 'Vertigo (pening berpusing)'],
    image: 'yoga-balance', imageAlt: 'A woman holding a yoga balance pose on a rock by the sea',
    keyPoints: [
      'Vertigo is a spinning sensation. Dizziness can also mean feeling light-headed, faint or unsteady, which often has different causes.',
      'The most common cause is BPPV: brief spinning, usually under a minute, when you roll over in bed, look up or bend down.',
      'The Epley manoeuvre fixes BPPV in about 7 or 8 in 10 people after one to three treatments. Anti-dizziness tablets aren’t recommended for BPPV.',
      'Medicines such as cinnarizine and betahistine are available from pharmacists in Malaysia, but should only be used for a few days, as they can slow recovery and cause drowsiness.',
      'Call 999 for vertigo with double vision, slurred speech, weakness, numbness, sudden hearing loss or inability to walk. It may be a stroke.',
    ],
    sections: [
      { id: 'what', h: 'Vertigo or dizziness?', tocLabel: 'Vertigo vs dizziness', html: `<ul>
<li><strong>Vertigo:</strong> a false sense that you or your surroundings are <strong>spinning</strong> or moving. It usually comes from the inner ear, and sometimes from the brain.</li>
<li><strong>Light-headedness:</strong> feeling faint or about to pass out, often from low blood pressure, dehydration, low blood sugar or anaemia.</li>
<li><strong>Imbalance:</strong> feeling unsteady on your feet, common in older people.</li>
</ul>
<p>Telling your doctor <strong>what it feels like, how long it lasts, and what brings it on</strong> is the most useful information for working out the cause. About 1 in 13 people have vertigo from an inner ear or balance problem at some point in their lives, more often women and older adults.</p>` },
      { id: 'causes', h: 'Why does vertigo happen? (Sebab vertigo)', tocLabel: 'Causes', html: `<div class="table-wrap"><table>
<thead><tr><th>Cause</th><th>Typical pattern</th></tr></thead>
<tbody>
<tr><td><strong>BPPV</strong> (benign paroxysmal positional vertigo)</td><td>Brief spinning, usually under 1 minute, triggered by rolling over in bed, looking up or bending down. Caused by tiny crystals in the inner ear moving out of place. Hearing is normal. Most common in people in their 50s to 70s, and after head injury.</td></tr>
<tr><td><strong>Vestibular neuritis and labyrinthitis</strong></td><td>Sudden, severe vertigo lasting days, often after a cold or flu, with nausea and vomiting. Labyrinthitis also affects hearing or causes ringing. Balance usually recovers over 2 to 6 weeks.</td></tr>
<tr><td><strong>Ménière’s disease</strong></td><td>Attacks of vertigo, usually lasting 20 minutes to several hours, with hearing loss, ringing (tinnitus) and a feeling of pressure in one ear</td></tr>
<tr><td><strong>Vestibular migraine</strong></td><td>Vertigo lasting minutes to days, often with migraine headaches or sensitivity to light. More common in women.</td></tr>
<tr><td><strong>Low blood pressure on standing</strong></td><td>Light-headedness when getting up quickly, from dehydration, some blood pressure medicines, diabetes or older age</td></tr>
<tr><td><strong>Other causes</strong></td><td>Low blood sugar in diabetes, anaemia, anxiety, heat exhaustion, and new medicines</td></tr>
</tbody></table></div>
<p>In older adults, medicines are a common cause of dizziness. Bring a list of your medicines to your doctor.</p>` },
      { id: 'epley', h: 'Exercises for vertigo at home', tocLabel: 'Exercises', html: `<p><strong>The Epley manoeuvre</strong> is a series of head and body positions that move the loose crystals back to where they belong. It is the recommended treatment for the most common type of BPPV:</p>
<ul>
<li>About 7 or 8 in 10 people improve after one to three treatments.</li>
<li>It works far better than older home exercises (Brandt-Daroff exercises).</li>
<li>You don’t need to sleep upright or restrict head movements afterwards.</li>
</ul>
<p>The manoeuvre depends on which ear is affected, so it is best to have a doctor or physiotherapist confirm the diagnosis and do it the first time. They can then teach you how to repeat it at home if the vertigo comes back.</p>
<p><strong>Vestibular rehabilitation</strong> is a programme of balance and eye-head exercises, guided by a physiotherapist. It helps the brain adapt after vestibular neuritis, and for lasting unsteadiness. Keeping gently active and walking early, rather than staying in bed, also speeds recovery.</p>
${figure('physio-weights', 'Small exercise weights on a mat', 'Balance exercises, guided by a physiotherapist, help the brain adapt after an inner ear problem.')}` },
      { id: 'medicines', h: 'Medicines for vertigo, including cinnarizine', tocLabel: 'Medicines', html: `<p>Anti-dizziness medicines, called vestibular suppressants, can ease severe symptoms for a short time:</p>
<ul>
<li><strong>Cinnarizine</strong>, <strong>dimenhydrinate</strong> and <strong>promethazine</strong> (antihistamines) and <strong>betahistine</strong> can be supplied by a pharmacist in Malaysia without a prescription. <strong>Prochlorperazine</strong>, for severe nausea and vertigo, needs a prescription.</li>
<li><strong>Use them only for a few days.</strong> In vestibular neuritis, taking them for longer than about 3 days can slow the brain’s natural recovery.</li>
<li><strong>They aren’t recommended for BPPV.</strong> They don’t fix the cause, and they increase the risk of falls.</li>
<li><strong>Side effects:</strong> cinnarizine commonly causes drowsiness, so don’t drive or drink alcohol. Rarely, especially in older people with long-term use, it can cause stiff, slow or jerky movements. Betahistine, used mainly for Ménière’s disease, usually doesn’t cause drowsiness.</li>
</ul>
<p>Check with a doctor or pharmacist before using these medicines if you are older, pregnant, or have Parkinson’s disease, glaucoma, or liver or kidney disease.</p>` },
      { id: 'stroke', h: 'When dizziness is a stroke', tocLabel: 'Stroke warning signs', html: `<p>A stroke in the back of the brain can cause sudden vertigo, and sometimes looks just like an inner ear infection. In one study, vertigo was the first symptom in nearly half of people with this type of stroke. A normal CT scan doesn’t rule it out.</p>
<div class="box box--pink" role="note"><span class="box__title">Call 999 if vertigo or dizziness comes with</span><ul>
<li>Double vision or loss of vision</li>
<li>Slurred speech or difficulty speaking</li>
<li>Weakness, numbness or tingling in the face, arm or leg</li>
<li>Clumsiness, or being unable to stand or walk</li>
<li>Sudden hearing loss in one ear</li>
</ul><p style="font-size:16px;line-height:1.6">Remember <strong>BE FAST</strong>: Balance, Eyes, Face, Arm, Speech, Time to call 999.</p></div>
<p>The risk is higher in people over 50, and those with high blood pressure, diabetes, high cholesterol, an irregular heartbeat (atrial fibrillation), a previous mini-stroke, or who smoke. See our <a href="/articles/stroke-heart-attack-kuala-lumpur/">stroke and heart attack guide</a>.</p>` },
      { id: 'safety', h: 'Staying safe, and when to see a doctor', tocLabel: 'Safety and when to see a doctor', html: `<ul>
<li>Sit or lie down as soon as you feel dizzy. Lying still in a quiet, dark room helps during an attack.</li>
<li>Get up slowly, sitting on the edge of the bed for a minute first.</li>
<li>Don’t drive, climb ladders or use machinery while dizzy.</li>
<li>Older people should take extra care to prevent falls. About 1 in 3 adults over 65 falls each year.</li>
</ul>
<p><strong>See a doctor</strong> if vertigo keeps coming back or doesn’t settle, if you aren’t improving after a few days of an inner ear infection, or if dizziness started after a new medicine. Get urgent help for vertigo with a severe headache, vomiting that won’t stop, fever, or sudden hearing loss.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor about vertigo',
    clinicsTocLabel: 'Where to see a doctor',
    clinicsIntro: 'A GP can work out the likely cause of vertigo, perform the Epley manoeuvre for BPPV, check your blood pressure and medicines, and refer you to an ENT specialist or physiotherapist if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What causes vertigo? (Sebab vertigo)', 'The most common cause is BPPV, when tiny crystals in the inner ear move out of place. Others include inner ear infections (vestibular neuritis and labyrinthitis), Ménière’s disease and vestibular migraine. Rarely, it is a stroke.'],
      ['What exercise can I do for vertigo at home?', 'For BPPV, the Epley manoeuvre is the most effective treatment. Have a doctor or physiotherapist confirm which ear is affected and do it the first time, then they can teach you to repeat it at home.'],
      ['Is cinnarizine good for vertigo?', 'Cinnarizine can ease severe vertigo and nausea for a few days, and a pharmacist can supply it in Malaysia. It causes drowsiness, isn’t recommended for BPPV, and long-term use can slow recovery and, rarely, cause movement problems in older people.'],
      ['How long does vertigo last?', 'BPPV attacks last under a minute but can recur for weeks until treated. Vestibular neuritis causes severe vertigo for a few days, with balance recovering over 2 to 6 weeks. Ménière’s attacks last 20 minutes to several hours.'],
      ['How do I know if dizziness is a stroke?', 'Call 999 if dizziness comes with double vision, slurred speech, weakness or numbness, clumsiness, being unable to walk, or sudden hearing loss. Use BE FAST: Balance, Eyes, Face, Arm, Speech, Time.'],
      ['Why do I feel dizzy when I stand up?', 'Usually because blood pressure drops briefly when you stand, especially if you are dehydrated, older, diabetic or on blood pressure medicines. Get up slowly, drink enough fluids, and see a doctor if it keeps happening.'],
    ],
    sources: [
      ['Bhattacharyya et al. — Clinical practice guideline: benign paroxysmal positional vertigo, update (AAO-HNS, 2017)', 'https://doi.org/10.1177/0194599816689667'],
      ['Muncie et al. — Dizziness: approach to evaluation and management (American Family Physician, 2017)', 'https://www.aafp.org/pubs/afp/issues/2017/0201/p154.html'],
      ['NHS — Vertigo', 'https://www.nhs.uk/conditions/vertigo/'],
      ['NHS — Dizziness', 'https://www.nhs.uk/symptoms/dizziness/'],
      ['NHS — Labyrinthitis and vestibular neuritis (Aug 2026)', 'https://www.nhs.uk/conditions/labyrinthitis/'],
      ['NHS — Ménière’s disease (Sep 2026)', 'https://www.nhs.uk/conditions/menieres-disease/'],
      ['NHS — Low blood pressure', 'https://www.nhs.uk/conditions/low-blood-pressure-hypotension/'],
      ['NHS — Cinnarizine (Aug 2026)', 'https://www.nhs.uk/medicines/cinnarizine/'],
      ['NHS — Betahistine (Sep 2026)', 'https://www.nhs.uk/medicines/betahistine/'],
      ['Ministry of Health — Poisons List, First Schedule, Poisons Act 1952', 'https://pharmacy.moh.gov.my/sites/default/files/document-upload/poisons-list_1.pdf'],
      ['NHS — Stroke: causes', 'https://www.nhs.uk/conditions/stroke/causes/'],
    ],
    related: ['stroke-heart-attack-kuala-lumpur', 'headaches-malaysia', 'blood-pressure-cholesterol-malaysia'],
  },
];
