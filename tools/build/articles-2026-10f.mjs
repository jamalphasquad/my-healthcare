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
    related: ['stroke-heart-attack-kuala-lumpur', 'anxiety-malaysia', 'check-blood-pressure-at-home'],
  },
];
