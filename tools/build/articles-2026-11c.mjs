// Articles published 3 November 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-03';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NOV_2026_C = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'pcos-malaysia',
    title: 'PCOS (PMOS) in Malaysia: symptoms, diagnosis, treatment and fertility',
    crumb: 'PCOS (PMOS)',
    desc: 'PCOS, now also called PMOS: symptoms, how it is diagnosed, long-term health risks, treatment for periods, acne and hair, weight, and getting pregnant in Malaysia.',
    excerpt: 'About 1 in 10 women has PCOS, and most don’t know it. What the symptoms are, how it is diagnosed, why it raises the risk of diabetes, the treatments that help with periods, acne, unwanted hair and weight, and the fertility options in Malaysia.',
    standfirst: 'Polycystic ovary syndrome (PCOS) is one of the most common hormone conditions in women. It can cause irregular periods, acne, unwanted hair and difficulty getting pregnant, and it raises the long-term risk of diabetes. In 2026 it was given a new name, polyendocrine metabolic ovarian syndrome (PMOS), to reflect that it affects the whole body, not just the ovaries.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Polycystic ovary syndrome', 'PMOS', 'Infertility'],
    image: 'yoga-balance', imageAlt: 'A woman holding a yoga balance pose on a rock by the sea',
    keyPoints: [
      'PCOS affects about 10 to 13% of women of reproductive age, and up to 7 in 10 don’t know they have it. Studies in the Klang Valley suggest similar rates in Malaysia.',
      'It is diagnosed when a woman has 2 of 3 features: irregular or absent periods, signs of high male hormones (such as excess hair or acne), and polycystic ovaries on ultrasound or a high AMH blood test.',
      'Despite the name, you don’t need cysts to have PCOS. In May 2026 an international consensus renamed it PMOS.',
      'PCOS raises the risk of type 2 diabetes, high blood pressure, high cholesterol, gestational diabetes and depression, so regular checks matter.',
      'Healthy eating, activity and modest weight loss help most women. The pill, metformin and other treatments manage symptoms, and letrozole is the first-choice medicine to help ovulation.',
    ],
    sections: [
      { id: 'what', h: 'What is PCOS? (PCOS maksud)', tocLabel: 'What it is', html: `<p>PCOS is a long-term hormonal condition in which the ovaries make more androgens (male-type hormones) than usual and often don’t release an egg each month. Insulin resistance, where the body needs more insulin to keep blood sugar normal, plays a big part, which is why PCOS is linked to weight gain and diabetes.</p>
<ul>
<li>The World Health Organization estimates it affects <strong>10 to 13% of women of reproductive age</strong>, and that up to 70% of them are undiagnosed. A 2021 survey in the Klang Valley found 10.5% of women reported having been diagnosed, and nearly half had poor knowledge of the condition.</li>
<li>The ovaries of women with PCOS often have many small follicles, partly developed eggs, which look like “cysts” on a scan. These aren’t true cysts, and some women with PCOS don’t have them.</li>
<li>In <strong>May 2026</strong>, a global consensus published in <em>The Lancet</em> renamed the condition <strong>polyendocrine metabolic ovarian syndrome (PMOS)</strong>, or <em>sindrom ovari metabolik poliendokrin</em> in Malay. The new name is being phased in over several years, so you will see both.</li>
</ul>
<p>PCOS runs in families, and the cause isn’t fully understood. It isn’t caused by anything you did.</p>` },
      { id: 'symptoms', h: 'PCOS symptoms (simptom PCOS)', tocLabel: 'Symptoms', html: `<ul>
<li><strong>irregular, infrequent or absent periods</strong>: cycles shorter than 21 days or longer than 35 days, or fewer than 8 periods a year</li>
<li><strong>excess hair</strong> on the face, chest, tummy or back (hirsutism)</li>
<li><strong>acne</strong> and oily skin, often along the jawline. See our guide to <a href="/articles/acne-malaysia/">acne</a>.</li>
<li>thinning hair on the scalp</li>
<li>weight gain, especially around the waist, and difficulty losing weight</li>
<li>dark, velvety skin in the neck folds or armpits (acanthosis nigricans), a sign of insulin resistance</li>
<li>difficulty getting pregnant</li>
<li>low mood, anxiety and tiredness</li>
</ul>
<p>Symptoms vary a lot. Some women have only irregular periods; others have regular periods but troublesome acne or hair growth. Malaysian doctors report that diagnosis often comes 3 to 5 years after symptoms start, so it is worth seeing a doctor early.</p>` },
      { id: 'diagnosis', h: 'How PCOS is diagnosed', tocLabel: 'Diagnosis', html: `<p>Under the 2023 International Evidence-based Guideline for PCOS, adults are diagnosed when they have <strong>at least 2 of these 3</strong>, after other causes have been ruled out:</p>
<ol>
<li><strong>Irregular or absent ovulation</strong>, shown by irregular periods</li>
<li><strong>High androgens</strong>: symptoms such as excess hair or acne, or high testosterone on a blood test</li>
<li><strong>Polycystic ovaries</strong> on an ultrasound scan (20 or more follicles in an ovary), or a high <strong>AMH</strong> blood test as an alternative</li>
</ol>
<ul>
<li>If you have both irregular periods and high androgens, you don’t need a scan or AMH test.</li>
<li><strong>Teenagers</strong> need both irregular periods and high androgens. Ultrasound and AMH aren’t used to diagnose PCOS within 8 years of the first period, as many young women naturally have polycystic-looking ovaries.</li>
<li><strong>Blood tests</strong> usually include testosterone, and tests to rule out other causes, such as thyroid (TSH), prolactin and other hormones. If you are on the pill, it may affect the results.</li>
</ul>
<p>A GP can start these tests and refer you to a gynaecologist or endocrinologist if needed. See our guide to <a href="/articles/thyroid-hyperthyroidism-hypothyroidism-malaysia/">thyroid problems</a>, which can also cause irregular periods.</p>` },
      { id: 'risks', h: 'Long-term health risks and check-ups', tocLabel: 'Health risks', html: `<p>PCOS is a lifelong condition, and it affects more than the ovaries. Women with PCOS have a higher risk of:</p>
<ul>
<li><strong>type 2 diabetes</strong> and <strong>gestational diabetes</strong> in pregnancy</li>
<li>high blood pressure and high cholesterol</li>
<li>fatty liver and sleep apnoea</li>
<li>thickening of the womb lining, and endometrial cancer, if periods are very infrequent</li>
<li>anxiety, depression and eating problems</li>
</ul>
<p><strong>Recommended checks:</strong></p>
<ul>
<li><strong>blood sugar</strong> at diagnosis, then every 1 to 3 years. An oral glucose tolerance test is the most accurate. See our guide to <a href="/articles/normal-blood-sugar-level-malaysia/">normal blood sugar levels</a>.</li>
<li><strong>cholesterol</strong> at diagnosis</li>
<li><strong>blood pressure</strong> every year</li>
<li>a check on your mood and wellbeing</li>
</ul>
<p>Asian women tend to develop diabetes at a lower weight, so even women with PCOS at a “normal” weight should have their blood sugar checked. Malaysia uses lower BMI cut-offs: see our <a href="/articles/bmi-calculator-malaysia/">BMI calculator</a>.</p>` },
      { id: 'treatment', h: 'PCOS treatment', tocLabel: 'Treatment', html: `<p>There is no cure, but symptoms and risks can be well managed. Treatment depends on what bothers you most and whether you want to get pregnant.</p>
<p><strong>Lifestyle first</strong></p>
<ul>
<li>Healthy eating and regular activity help everyone with PCOS. No single diet is best, so choose one you can keep to: fewer sugary drinks and refined carbohydrates, more vegetables, wholegrains and protein.</li>
<li>Aim for at least 150 minutes of moderate activity a week.</li>
<li>If you are overweight, even <strong>modest weight loss</strong> can bring back regular periods and ovulation. In a 2026 analysis, more than half of women with PCOS who lost weight started ovulating again. A waist of 80 cm or less is a useful target.</li>
</ul>
<p><strong>Medicines</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>Treatment</th><th>Used for</th></tr></thead>
<tbody>
<tr><td>Combined contraceptive pill</td><td>Regular periods, less acne and hair growth, and protecting the womb lining</td></tr>
<tr><td>Progestogen tablets or a hormonal coil</td><td>Protecting the womb lining if you have few periods and can’t take the pill</td></tr>
<tr><td>Metformin</td><td>Insulin resistance, weight and blood sugar, especially with a higher BMI</td></tr>
<tr><td>Anti-androgen medicines</td><td>Excess hair or hair loss, after at least 6 months on the pill, with reliable contraception</td></tr>
<tr><td>Laser hair removal, creams</td><td>Facial and body hair, acne</td></tr>
<tr><td>Weight-loss medicines (such as GLP-1 injections)</td><td>Weight, when lifestyle changes aren’t enough. Not for use when trying to conceive or in pregnancy. See our guide to <a href="/articles/weight-loss-injections-malaysia/">weight-loss injections</a></td></tr>
</tbody></table></div>
<p><strong>Supplements:</strong> inositol is widely marketed for PCOS. The international guideline says it may be considered, but the evidence of benefit is limited, and its use for fertility is experimental. Talk to your doctor before spending on supplements.</p>
${figure('healthy-salad', 'A table of salad, fruit and vegetables in small bowls', 'Healthy eating and activity are the first step in managing PCOS, whatever your weight.')}` },
      { id: 'fertility', h: 'PCOS and getting pregnant', tocLabel: 'Fertility', html: `<p>Many women with PCOS get pregnant naturally or with simple treatment. If you aren’t ovulating regularly:</p>
<ol>
<li><strong>Letrozole</strong> tablets are the first-choice medicine to help you ovulate, ahead of clomiphene.</li>
<li>If that doesn’t work, options include <strong>hormone injections</strong> (gonadotrophins) with close ultrasound monitoring, or a keyhole operation on the ovaries.</li>
<li><strong>IVF</strong> is used if other treatments haven’t worked or there are other fertility problems.</li>
</ol>
<p>See a doctor if you have been trying for 12 months, or 6 months if you are 35 or over, or sooner if your periods are very irregular.</p>
<p><strong>Fertility help in Malaysia:</strong></p>
<ul>
<li>Government hospitals offer ovulation treatment and IVF, although waiting times can be long.</li>
<li>Under LPPKN’s <strong>BuAI programme</strong>, eligible couples can receive up to 2 cycles of IUI (intrauterine insemination) treatment. Priority goes to lower-income households, and couples need to meet age and income conditions.</li>
<li>You can withdraw from EPF Account 2 for fertility treatment, and claim tax relief for it.</li>
</ul>
<p>During pregnancy, women with PCOS have a higher risk of gestational diabetes and high blood pressure, so they should be screened early. See our <a href="/articles/pregnancy-due-date-calculator-malaysia/">pregnancy week-by-week guide</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get checked for PCOS',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can assess your periods and symptoms, arrange blood tests and a scan, check your blood sugar and blood pressure, start treatment and refer you to a gynaecologist or fertility specialist if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What is PCOS?', 'Polycystic ovary syndrome, a common hormone condition that causes irregular periods, high male-type hormones and often polycystic-looking ovaries. In 2026 it was renamed PMOS.'],
      ['What are the first signs of PCOS?', 'Usually irregular or missed periods, often with acne, excess facial or body hair, weight gain or thinning scalp hair.'],
      ['Can I have PCOS without cysts?', 'Yes. You only need 2 of the 3 features to be diagnosed, so many women with PCOS have normal-looking ovaries on a scan.'],
      ['Can PCOS be cured?', 'There is no cure, but symptoms can be well controlled with lifestyle changes and treatment, and many women find symptoms ease with time.'],
      ['Can I get pregnant with PCOS?', 'Yes. Many women with PCOS conceive naturally or with treatment. Letrozole is the first-choice medicine to help ovulation.'],
      ['Does PCOS cause weight gain?', 'PCOS makes weight gain easier and weight loss harder because of insulin resistance. Even modest weight loss can improve periods and fertility.'],
      ['Do inositol supplements work for PCOS?', 'The international guideline says the evidence of benefit is limited. They may be considered, but talk to your doctor first.'],
      ['What does PMOS mean?', 'Polyendocrine metabolic ovarian syndrome, the new name for PCOS agreed in 2026, which reflects that the condition affects hormones and metabolism, not just the ovaries.'],
    ],
    sources: [
      ['World Health Organization — Polycystic ovary syndrome fact sheet (Jan 2026)', 'https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome'],
      ['Teede et al. — Recommendations from the 2023 International Evidence-based Guideline for PCOS (Human Reproduction)', 'https://academic.oup.com/humrep/article/38/9/1655/7242808'],
      ['NHS — Polycystic ovary syndrome (PCOS/PMOS) (reviewed Jun 2026)', 'https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/'],
      ['RANZCOG — Renaming of PCOS to polyendocrine metabolic ovarian syndrome (May 2026)', 'https://ranzcog.edu.au/news/ranzcog-welcomes-polycystic-ovarian-syndrome-pcos-renaming-to-polyendocrine-metabolic-ovarian-syndrome-pmos/'],
      ['Bernama — PMOS: sindrom ovari metabolik poliendokrin (Jun 2026)', 'https://www.bernama.com/radio/news.php?id=2569743'],
      ['Goh et al. — Knowledge of PCOS among women in the Klang Valley (Frontiers in Endocrinology, 2022)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9465311/'],
      ['Ulster University — Ovulatory recovery following weight loss in women with PCOS (Human Reproduction, 2026)', 'https://pure.ulster.ac.uk/en/publications/ovulatory-recovery-following-weight-loss-in-women-with-polycystic/'],
      ['Jean Hailes for Women’s Health — PCOS management and treatment (May 2026)', 'https://www.jeanhailes.org.au/health-a-z/pcos/management-treatment'],
      ['New Straits Times — 47,000 couples to benefit from fertility assistance programme (May 2026)', 'https://www.nst.com.my/amp/news/nation/2026/05/1436584/47000-couples-benefit-fertility-assistance-programme'],
      ['The Star — Govt stepping up efforts to address rising fertility problems (Nov 2025)', 'https://www.thestar.com.my/news/nation/2025/11/25/govt-stepping-up-efforts-to-address-rising-fertility-problems-among-malaysians'],
    ],
    related: ['period-pain-senggugut-malaysia', 'contraception-malaysia', 'normal-blood-sugar-level-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'pneumonia-pneumococcal-vaccine-malaysia',
    title: 'Pneumonia in Malaysia: symptoms, walking pneumonia, when to go to hospital, and the pneumococcal vaccine',
    crumb: 'Pneumonia and the pneumococcal vaccine',
    desc: 'Pneumonia (radang paru-paru) symptoms in adults, older people and children, walking pneumonia, danger signs, treatment and recovery, and who should get the pneumococcal vaccine.',
    excerpt: 'Pneumonia is one of the top two causes of death in Malaysia, and the leading one among people aged 60 and over. The symptoms in adults, older people and children, what walking pneumonia is, the danger signs that need a hospital, and who should get the pneumococcal vaccine.',
    standfirst: 'Pneumonia (radang paru-paru) is an infection that fills the tiny air sacs of the lungs with fluid and pus, making it hard to breathe. Most healthy people recover at home with treatment, but it kills more than 15,000 Malaysians a year, most of them older adults. A vaccine protects against the most common bacterial cause.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Pneumonia', 'Pneumococcal vaccine', 'Radang paru-paru'],
    image: 'stethoscope-desk', imageAlt: 'A stethoscope hanging from a shelf in a clinic',
    keyPoints: [
      'Pneumonia was the 2nd leading cause of medically certified deaths in Malaysia in 2024, with 15,332 deaths, and the leading cause among people aged 60 and over.',
      'Typical symptoms are cough with phlegm, fever, fast or difficult breathing and chest pain on breathing. Older people may simply become confused.',
      'Go to an emergency department for severe breathlessness, blue or grey lips, confusion, coughing up blood, or a baby who is floppy or breathing fast with the chest sucking in.',
      'Bacterial pneumonia is treated with antibiotics. Most people recover in 2 to 4 weeks, but the cough and tiredness can last longer.',
      'Babies get the pneumococcal vaccine free under the National Immunisation Programme. Older adults and people with long-term conditions can get it at private clinics.',
    ],
    sections: [
      { id: 'malaysia', h: 'Pneumonia in Malaysia', tocLabel: 'In Malaysia', html: `<p>According to the Department of Statistics Malaysia, pneumonia caused <strong>15,332 deaths in 2024</strong>, 11.5% of medically certified deaths. It was the leading cause of death in 2023, and in 2024 was second only to heart disease. It remained the leading cause of death among <strong>people aged 60 and over</strong>, among women, and among children aged 14 and under.</p>
<p>Respiratory infections rise at the end of each year and around the festive seasons, when people travel and gather, which is why vaccination before then matters.</p>` },
      { id: 'causes', h: 'What causes pneumonia?', tocLabel: 'Causes', html: `<ul>
<li><strong>Bacteria:</strong> <em>Streptococcus pneumoniae</em> (pneumococcus) is the most common bacterial cause.</li>
<li><strong>Viruses:</strong> including flu, RSV and COVID-19. Viral pneumonia can be followed by a bacterial infection.</li>
<li><strong><em>Mycoplasma pneumoniae</em>:</strong> causes “walking pneumonia”, especially in children and young adults.</li>
</ul>
<p><strong>People at higher risk</strong> include babies and young children, adults over 65, smokers, and people with diabetes, heart, lung (including asthma and COPD), kidney or liver disease, or a weak immune system.</p>` },
      { id: 'symptoms', h: 'Symptoms of pneumonia', tocLabel: 'Symptoms', html: `<p><strong>In adults:</strong></p>
<ul>
<li>a cough, often with yellow, green or bloodstained phlegm</li>
<li>fever, sweating and shivering</li>
<li>fast breathing or feeling breathless, even at rest</li>
<li>sharp chest pain that is worse when you breathe in or cough</li>
<li>tiredness and loss of appetite</li>
</ul>
<p><strong>In older people</strong>, pneumonia may show up as <strong>sudden confusion</strong>, falls or not eating, with fewer chest symptoms.</p>
<p><strong>In babies and young children</strong>, the key signs are <strong>fast breathing</strong> and the lower chest <strong>sucking in</strong> with each breath, along with fever, cough, poor feeding and being unusually sleepy.</p>
<p><strong>Walking pneumonia</strong> is an informal name for a milder pneumonia, usually caused by <em>Mycoplasma</em>, where people often stay up and about. Symptoms start 1 to 4 weeks after exposure, and the cough builds slowly and can last for weeks. It still needs a doctor, as some strains don’t respond to common antibiotics. In 2025, doctors in Kelantan described a group of children who needed oxygen for <em>Mycoplasma</em> pneumonia.</p>` },
      { id: 'when', h: 'When to see a doctor or go to hospital', tocLabel: 'When to get help', html: `<p><strong>Call <a href="tel:999">999</a> or go to an emergency department if:</strong></p>
<ul>
<li>you are struggling to breathe or can’t finish a sentence</li>
<li>your lips, tongue or skin look blue, grey or very pale</li>
<li>you are coughing up blood</li>
<li>someone becomes confused, very drowsy or hard to wake</li>
<li>a baby or child is breathing fast with the chest sucking in, can’t drink or feed, has a fit, or is floppy</li>
</ul>
<p><strong>See a doctor the same day</strong> for a cough with fever and breathlessness, chest pain on breathing, or a cough that has lasted 3 weeks or is getting worse.</p>
<p>The doctor will listen to your chest and check your <strong>oxygen level</strong> with a finger clip (pulse oximeter), and may arrange a <strong>chest X-ray</strong> and blood tests. Malaysian doctors use a simple score called CURB-65, based on confusion, kidney blood test, breathing rate, blood pressure and age 65 or over, to decide who can be treated at home and who needs hospital. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
      { id: 'treatment', h: 'Treatment and recovery', tocLabel: 'Treatment', html: `<ul>
<li><strong>Bacterial pneumonia</strong> is treated with antibiotics. Take the full course as prescribed.</li>
<li><strong>Viral pneumonia</strong> doesn’t respond to antibiotics, although flu may be treated with antiviral medicine if started early. See our guide to <a href="/articles/influenza-a-malaysia/">influenza A</a>.</li>
<li><strong>At home:</strong> rest, drink plenty of fluids, and use paracetamol for fever and pain. Avoid cough suppressants, which stop you clearing phlegm. Don’t smoke.</li>
<li><strong>Go back to the doctor</strong> if you aren’t improving after 2 to 3 days of treatment, or you get worse at any time.</li>
</ul>
<p>Most people feel better within 2 to 4 weeks, but the cough and tiredness can take longer, especially in older people. For a cough that lingers, see our guide to a <a href="/articles/persistent-cough-malaysia/">cough that won’t go away</a>.</p>
${figure('doctor-consultation', 'A doctor talking with a patient in a consultation room', 'A doctor can check your oxygen level and chest, and decide whether you can be treated at home.')}` },
      { id: 'vaccine', h: 'The pneumococcal vaccine', tocLabel: 'Pneumococcal vaccine', html: `<p>Pneumococcal vaccines protect against the bacterium that causes most bacterial pneumonia, as well as meningitis and blood infections. There are two main kinds: <strong>conjugate vaccines</strong> (PCV), which come in versions covering 10 to 21 types of pneumococcus, and a <strong>polysaccharide vaccine</strong> (PPSV23).</p>
<p><strong>Babies:</strong> the pneumococcal conjugate vaccine has been part of Malaysia’s National Immunisation Programme since December 2020, for babies born from 2020. It is given at <strong>4 and 6 months, with a booster at 15 months</strong>, free at government clinics. See our <a href="/articles/baby-vaccination-schedule-malaysia/">baby vaccination schedule</a>.</p>
<p><strong>Adults:</strong> there is no free national programme for adults, and the vaccine is mainly available at <strong>private clinics</strong>. Malaysian recommendations for older adults, published in 2025, advise:</p>
<ul>
<li>a <strong>single dose of a broad conjugate vaccine</strong> (PCV20), or</li>
<li>a <strong>conjugate vaccine followed by PPSV23</strong> a year later</li>
</ul>
<p><strong>Who should consider it:</strong></p>
<ul>
<li>adults aged <strong>60 and over</strong>. The US now recommends it from 50.</li>
<li>younger adults with <strong>diabetes</strong>, chronic heart, lung (including asthma and COPD), kidney or liver disease, smokers, people with heavy alcohol use, and people with a weak immune system or no working spleen</li>
<li>people going on <strong>Hajj or Umrah</strong>, where respiratory infections spread easily</li>
</ul>
<p>Only about 3 in 10 older people in a 2025 Klang Valley study had been vaccinated. Ask your GP which vaccine and schedule suit you, as this depends on your age, health and any previous doses.</p>
<p><strong>Side effects</strong> are usually mild: a sore, red or swollen arm, fever, tiredness, headache or aches for a day or two. It can be given at the same visit as the flu vaccine.</p>` },
      { id: 'prevention', h: 'Other ways to lower your risk', tocLabel: 'Prevention', html: `<ul>
<li>Get a yearly <a href="/articles/flu-vaccine-malaysia/">flu vaccine</a>, especially if you are 60 or over or have a long-term condition. Older adults can also ask about the <a href="/articles/rsv-malaysia/">RSV vaccine</a> and COVID-19 boosters.</li>
<li><strong>Stop smoking and vaping.</strong> Smoking damages the lungs’ defences.</li>
<li>Wash your hands, cover coughs and sneezes, and wear a mask if you have a respiratory infection and must be around older or vulnerable people.</li>
<li>Keep diabetes and other long-term conditions well controlled.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get checked or vaccinated',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check your chest and oxygen level, treat pneumonia that can be managed at home, and give the pneumococcal and flu vaccines. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open 24 hours. Call ahead to check the vaccine is in stock.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What are the first signs of pneumonia?', 'Usually a cough with phlegm, fever, and breathing that is faster or more difficult than normal, sometimes with chest pain when breathing in. Older people may become confused.'],
      ['What is walking pneumonia?', 'An informal name for milder pneumonia, usually caused by Mycoplasma, where people stay up and about. The cough builds slowly and can last for weeks. It still needs a doctor.'],
      ['Is pneumonia contagious?', 'The germs that cause it, such as pneumococcus, flu and Mycoplasma, spread through coughs and sneezes, although not everyone who catches them develops pneumonia.'],
      ['How long does pneumonia take to recover from?', 'Most people feel better in 2 to 4 weeks, but the cough and tiredness can last longer, especially in older people.'],
      ['Who should get the pneumococcal vaccine?', 'Babies under the National Immunisation Programme, adults aged 60 and over, and younger adults with diabetes, heart, lung, kidney or liver disease, smokers and people with a weak immune system.'],
      ['Is the pneumococcal vaccine free for adults in Malaysia?', 'There is no national programme for adults, so it is mainly given at private clinics. Babies get it free under the National Immunisation Programme.'],
      ['Do adults need more than one pneumococcal vaccine?', 'It depends on the vaccine. A single dose of a broad conjugate vaccine may be enough, or a conjugate vaccine may be followed by a second type a year later. Ask your doctor.'],
      ['Can I get the pneumococcal and flu vaccines together?', 'Yes, they can be given at the same visit.'],
    ],
    sources: [
      ['Department of Statistics Malaysia — Statistics on causes of death, Malaysia, 2025 (Dec 2025)', 'https://www.dosm.gov.my/portal-main/release-content/statistics-on-causes-of-death-malaysia-2025'],
      ['The Star — Ischaemic heart disease remains the leading cause of death, says Stats Dept (18 Dec 2025)', 'https://www.thestar.com.my/news/nation/2025/12/18/ischaemic-heart-disease-remains-the-leading-cause-of-death-says-stats-dept'],
      ['World Health Organization — Pneumonia fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/pneumonia'],
      ['NHS — Pneumonia (reviewed Jul 2026)', 'https://www.nhs.uk/conditions/pneumonia/'],
      ['US CDC — About Mycoplasma pneumoniae infection (May 2026)', 'https://www.cdc.gov/mycoplasma/about/index.html'],
      ['Malaysian Journal of Paediatrics and Child Health — Mycoplasma pneumoniae in children, Kelantan case series (Aug 2025)', 'https://www.mpaeds.my/journals/index.php/MJPCH/article/view/330'],
      ['CodeBlue — Malaysia chooses PCV10 pneumococcal vaccine, immunisation starts December (Nov 2020)', 'https://codeblue.galencentre.org/2020/11/malaysia-chooses-pcv10-pneumococcal-vaccine-immunisation-starts-december/'],
      ['Medical Journal of Malaysia — Vaccination strategies in respiratory diseases (2026)', 'https://www.e-mjm.org/2026/v81s1/NCDM-25-S0002.pdf'],
      ['Willingness to accept pneumococcal vaccination among older adults in the Klang Valley (2025)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12530496/'],
      ['US CDC — Pneumococcal vaccine recommendations (Feb 2026)', 'https://www.cdc.gov/pneumococcal/hcp/vaccine-recommendations/index.html'],
    ],
    related: ['flu-vaccine-malaysia', 'persistent-cough-malaysia', 'rsv-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'food-poisoning-gastroenteritis-malaysia',
    title: 'Food poisoning and gastroenteritis (keracunan makanan, cirit-birit): symptoms, rehydration and when to see a doctor',
    crumb: 'Food poisoning and gastroenteritis',
    desc: 'Food poisoning (keracunan makanan) and gastroenteritis: common causes, how soon symptoms start, using oral rehydration salts, safe medicines, danger signs, and food safety tips.',
    excerpt: 'Vomiting and diarrhoea after a meal, a kenduri or a school event? Most food poisoning and stomach bugs settle within a few days with fluids. The common causes, how to rehydrate properly, which medicines are safe, the danger signs that need a doctor, and how to keep food safe in Malaysia’s heat.',
    standfirst: 'Food poisoning (keracunan makanan) and gastroenteritis, often called a stomach bug or stomach flu, cause vomiting, diarrhoea (cirit-birit) and tummy cramps. Most people recover at home within a few days. The main danger is dehydration, especially in babies, young children and older people. Here is how to manage it, and when to get help.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Food poisoning', 'Gastroenteritis', 'Keracunan makanan'],
    image: 'fever-thermometer', imageAlt: 'A digital thermometer showing a fever reading',
    keyPoints: [
      'Malaysia records thousands of food poisoning cases every year, often in outbreaks linked to schools, caterers and events.',
      'Symptoms can start within an hour or two of eating (toxins in food such as rice or pastries left out) or up to several days later (bacteria such as Salmonella).',
      'Most cases settle within a few days. Vomiting usually stops within 1 to 2 days and diarrhoea within 5 to 7 days.',
      'Oral rehydration salts (ORS) are the best way to replace lost fluid. Avoid fizzy drinks and fruit juice. Keep breastfeeding babies.',
      'See a doctor for blood in the stool, high fever, signs of dehydration, vomiting that stops you keeping fluids down, diarrhoea lasting more than 3 days, or if a baby, older person or pregnant woman is unwell.',
    ],
    sections: [
      { id: 'malaysia', h: 'Food poisoning in Malaysia', tocLabel: 'In Malaysia', html: `<p>Food poisoning is a notifiable disease in Malaysia, so doctors must report cases to the Ministry of Health. The national rate rose from 18.4 per 100,000 people in 2021 to <strong>51 per 100,000 in 2023</strong>. Cases then fell: from January to early September 2025 there were 12,821 cases, against 18,034 in the same period of 2024. The ministry aims to keep the rate below 50 per 100,000 by 2030.</p>
<p><strong>Outbreaks</strong> are most often linked to food prepared in bulk, such as at schools and hostels, caterers and events:</p>
<ul>
<li>In September 2026, about 160 students and staff at a boarding school in Lenggong, Perak fell ill after a school programme. The caterer was ordered to close.</li>
<li>In July 2025, 427 college students in Kota Bharu fell ill, and an unlicensed home caterer was shut down.</li>
</ul>
<p>If several people fall ill after the same meal, tell the clinic, so the health office can investigate.</p>` },
      { id: 'causes', h: 'Common causes, and how soon symptoms start', tocLabel: 'Causes', html: `<div class="table-wrap"><table>
<thead><tr><th>Cause</th><th>Typical foods</th><th>Symptoms start</th></tr></thead>
<tbody>
<tr><td><em>Staphylococcus aureus</em> toxin</td><td>Food handled by hand then left out: pastries, sandwiches, kuih, cooked meats</td><td>30 minutes to 8 hours (usually 2 to 4)</td></tr>
<tr><td><em>Bacillus cereus</em></td><td>Cooked <strong>rice</strong> and noodles left at room temperature, such as nasi lemak, fried rice and buffet rice</td><td>1 to 6 hours (vomiting) or 6 to 24 hours (diarrhoea)</td></tr>
<tr><td><em>Vibrio</em></td><td>Raw or undercooked shellfish and seafood</td><td>4 to 30 hours</td></tr>
<tr><td>Norovirus</td><td>Contaminated food or water, or contact with someone ill</td><td>12 to 48 hours</td></tr>
<tr><td><em>Salmonella</em></td><td>Undercooked chicken and eggs, foods made with raw egg</td><td>6 to 48 hours</td></tr>
<tr><td><em>Campylobacter</em></td><td>Undercooked chicken, unpasteurised milk</td><td>2 to 5 days</td></tr>
<tr><td>Some types of <em>E. coli</em></td><td>Undercooked beef, raw vegetables, unclean water</td><td>3 to 4 days</td></tr>
</tbody></table></div>
<p><strong>Rice is a common culprit.</strong> <em>Bacillus cereus</em> spores survive cooking and multiply in rice left warm. Its toxin isn’t destroyed by reheating, so rice that has been left out for hours isn’t made safe by heating it up.</p>
<p><strong>Gastroenteritis</strong> (a “stomach bug” or “stomach flu”) is often caused by viruses such as norovirus, and in young children rotavirus, and spreads easily from person to person. It has nothing to do with influenza. The rotavirus vaccine isn’t part of the National Immunisation Programme but is available at private clinics: see our <a href="/articles/baby-vaccination-schedule-malaysia/">baby vaccination schedule</a>.</p>
<p>A fever lasting several days after eating out may be typhoid rather than ordinary food poisoning. See our guide to the <a href="/articles/typhoid-injection-food-handlers-malaysia/">typhoid injection</a>.</p>` },
      { id: 'symptoms', h: 'Symptoms and how long they last', tocLabel: 'Symptoms', html: `<ul>
<li>nausea and vomiting</li>
<li>diarrhoea (cirit-birit)</li>
<li>tummy cramps</li>
<li>fever, aches and feeling generally unwell</li>
</ul>
<p>Vomiting usually stops within 1 to 2 days and diarrhoea within 5 to 7 days. Most people recover within a week. You can pass a stomach bug on for at least 2 days after the diarrhoea and vomiting stop, so stay home from work or school until then.</p>
<p>Severe, constant tummy pain, especially if it moves to the lower right side, may be something else, such as appendicitis. See our guides to <a href="/articles/stomach-pain-gastric-malaysia/">stomach pain</a> and <a href="/articles/appendicitis-malaysia/">appendicitis</a>.</p>` },
      { id: 'fluids', h: 'Rehydration: the most important treatment', tocLabel: 'Rehydration', html: `<p>Diarrhoea and vomiting drain the body of water and salts. <strong>Oral rehydration salts (ORS)</strong>, sold in sachets at pharmacies, contain the right balance of salts and sugar to replace them:</p>
<ul>
<li>Mix each sachet with the amount of <strong>clean, boiled and cooled water</strong> stated on the pack, often 250 ml. Don’t make it stronger or weaker.</li>
<li>Take <strong>small, frequent sips</strong>, especially if you are vomiting. Try a sip every few minutes, and keep going even if you vomit.</li>
<li>Drink extra after each loose stool.</li>
<li><strong>Avoid fizzy drinks, fruit juice and very sweet drinks</strong>, which can make diarrhoea worse. Sports drinks aren’t a substitute for ORS for children.</li>
<li><strong>Babies:</strong> keep breastfeeding or giving formula as usual, with ORS between feeds if advised.</li>
</ul>
<p><strong>Eating:</strong> start eating normally as soon as you feel able, with plain foods such as rice, porridge (bubur), bread, bananas and soup. There is no need to stop eating for long.</p>
${figure('fresh-vegetables', 'Fresh broccoli, tomatoes, cucumber and red peppers on a wooden board', 'Wash raw vegetables in clean water, and keep raw meat and seafood away from foods that won’t be cooked.')}` },
      { id: 'medicines', h: 'Medicines: what helps and what to avoid', tocLabel: 'Medicines', html: `<ul>
<li><strong>Paracetamol</strong> helps with fever and aches.</li>
<li><strong>Anti-diarrhoea medicine</strong> (loperamide) can reduce diarrhoea for a few hours in adults, for example for travel. Don’t use it if you have <strong>blood or mucus in your stool or a high fever</strong>, and don’t give it to children under 12.</li>
<li><strong>Antibiotics</strong> usually aren’t needed and don’t help viral gastroenteritis. A doctor may prescribe them for some bacterial infections, such as severe or bloody diarrhoea.</li>
<li><strong>Probiotics</strong> probably make little or no difference to how long diarrhoea lasts, according to a Cochrane review.</li>
<li><strong>Activated charcoal</strong> has little evidence for diarrhoea and can stop other medicines from working.</li>
</ul>
<p>Ask a pharmacist or doctor before giving any medicine to a baby or young child.</p>` },
      { id: 'danger', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<p><strong>See a doctor if:</strong></p>
<ul>
<li>there is <strong>blood</strong> in the diarrhoea or vomit</li>
<li>you have a <strong>high fever</strong> (38.9°C or above)</li>
<li>you can’t keep fluids down because of vomiting</li>
<li>diarrhoea lasts <strong>more than 3 days</strong> in adults, or vomiting lasts more than 2 days</li>
<li>you have signs of <strong>dehydration</strong>: passing very little urine, very dark urine, dry mouth, dizziness when standing</li>
<li>the person ill is a <strong>baby under 1 year</strong>, an older person, pregnant, or has diabetes, kidney disease or a weak immune system</li>
</ul>
<p><strong>Go to an emergency department, or call <a href="tel:999">999</a>, if:</strong></p>
<ul>
<li>a child is very drowsy or floppy, has sunken eyes, is drinking poorly, or has far fewer wet nappies than usual</li>
<li>there is green or bloody vomit, or severe, sudden tummy pain</li>
<li>someone is confused, or faints</li>
</ul>
<p>See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>. During and after floods, diarrhoea can also come from contaminated water: see our guide to <a href="/articles/floods-health-risks-malaysia/">floods and your health</a>.</p>` },
      { id: 'prevention', h: 'Preventing food poisoning', tocLabel: 'Prevention', html: `<p>The World Health Organization’s <strong>Five Keys to Safer Food</strong>:</p>
<ol>
<li><strong>Keep clean:</strong> wash your hands with soap for at least 20 seconds before handling food and after using the toilet.</li>
<li><strong>Separate raw and cooked:</strong> use separate boards and knives for raw meat, chicken and seafood.</li>
<li><strong>Cook thoroughly:</strong> especially chicken, eggs and seafood, until piping hot.</li>
<li><strong>Keep food at safe temperatures:</strong> don’t leave cooked food at room temperature for more than 2 hours, or 1 hour in very hot weather. Keep hot food hot and cold food cold, and refrigerate leftovers quickly.</li>
<li><strong>Use safe water and raw materials:</strong> boil or treat drinking water if unsure, and wash fruit and vegetables.</li>
</ol>
<ul>
<li>At kenduri, buffets and events, be wary of rice, curries and kuih that have been sitting out for hours.</li>
<li>If you have diarrhoea or vomiting, don’t prepare food for others until <strong>48 hours</strong> after your symptoms stop.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check for dehydration, give medicine to stop vomiting, test a stool sample if needed, and issue an MC. Food poisoning often strikes at night or at weekends, so our directory lists clinics open 24 hours and late across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['How long does food poisoning last?', 'Usually a few days. Vomiting often stops within 1 to 2 days and diarrhoea within 5 to 7 days. Most people recover within a week.'],
      ['How soon after eating does food poisoning start?', 'Anywhere from 30 minutes to several days. Toxins in food left out, such as rice, can cause vomiting within 1 to 6 hours, while Salmonella usually takes 6 to 48 hours.'],
      ['What is the best drink for diarrhoea?', 'Oral rehydration salts (ORS) mixed with clean water as directed on the pack. Avoid fizzy drinks and fruit juice.'],
      ['Should I take antibiotics for food poisoning?', 'Usually not. Most food poisoning and stomach bugs get better without them. A doctor will prescribe antibiotics if they are needed.'],
      ['Can I take anti-diarrhoea medicine?', 'Adults can take loperamide for a short time, but not if there is blood in the stool or a high fever. It isn’t for children under 12.'],
      ['When should I see a doctor for diarrhoea?', 'If there is blood, high fever, signs of dehydration, vomiting that stops you keeping fluids down, diarrhoea lasting more than 3 days, or if a baby, older person or pregnant woman is ill.'],
      ['What is the difference between food poisoning and gastroenteritis?', 'Gastroenteritis is inflammation of the stomach and gut, often caused by viruses that spread between people. Food poisoning is illness caused by contaminated food. The symptoms are similar.'],
      ['Is reheated rice safe?', 'Only if it was cooled quickly and kept in the fridge. Rice left warm for hours can grow Bacillus cereus, whose toxin isn’t destroyed by reheating.'],
    ],
    sources: [
      ['New Straits Times — Food poisoning cases drop nearly 6,000 this year (Sep 2025)', 'https://www.nst.com.my/amp/news/nation/2025/09/1274452/food-poisoning-cases-drop-nearly-6000-year'],
      ['New Straits Times — What are authorities doing, asks MMA, as food poisoning cases rise (Jul 2024)', 'https://www.nst.com.my/amp/news/nation/2024/07/1082799/what-are-authorities-doing-asks-mma-food-poisoning-cases-rise'],
      ['The Star — Health Ministry accelerates efforts to strengthen food safety control (21 Feb 2026)', 'https://www.thestar.com.my/news/nation/2026/02/21/health-ministry-accelerates-efforts-to-strengthen-food-safety-control-to-achieve-target-by-2030'],
      ['Malay Mail — Perak orders caterer at Lenggong boarding school shut (11 Sep 2026)', 'https://www.malaymail.com/news/malaysia/2026/09/11/perak-orders-caterer-at-lenggong-boarding-school-shut-after-almost-160-students-stuff-fall-sick/234821'],
      ['Malay Mail — MOH shuts down unlicensed Kota Bharu home caterer after 427 college students fall ill (Jul 2025)', 'https://www.malaymail.com/news/malaysia/2025/07/13/we-suspect-chicken-curry-moh-shuts-down-unlicensed-kota-baru-home-caterer-after-427-college-students-fall-ill/183818'],
      ['US CDC — Confirming the cause of foodborne outbreaks (Jul 2025)', 'https://www.cdc.gov/foodborne-outbreaks/php/confirming-cause/index.html'],
      ['US CDC — Food poisoning symptoms (Nov 2025)', 'https://www.cdc.gov/food-safety/signs-symptoms/index.html'],
      ['Centre for Food Safety, Hong Kong — Bacillus cereus and cooked rice (2022)', 'https://cfs.gov.hk/english/multimedia/multimedia_pub/multimedia_pub_fsf_192_03.html'],
      ['NHS — Diarrhoea and vomiting', 'https://www.nhs.uk/conditions/diarrhoea-and-vomiting/'],
      ['World Health Organization — Diarrhoeal disease fact sheet (Mar 2024)', 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease'],
      ['CodeBlue — Raising awareness on the proper use of oral rehydration solutions (Jul 2024)', 'https://codeblue.galencentre.org/2024/07/raising-awareness-on-the-proper-use-of-oral-rehydration-solutions-dr-daniel-cheng-and-prof-long-chiau-ming/'],
      ['Cochrane — Probiotics for treating acute infectious diarrhoea (Dec 2020)', 'https://pubmed.ncbi.nlm.nih.gov/33295643/'],
      ['World Health Organization — Five keys to safer food', 'https://www.who.int/activities/promoting-safe-food-handling/five-key-to-safer-food'],
    ],
    related: ['stomach-pain-gastric-malaysia', 'floods-health-risks-malaysia', 'typhoid-injection-food-handlers-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'kurap-panau-fungal-skin-infection-malaysia',
    title: 'Kurap, panau and other fungal skin infections: how to recognise and treat them',
    crumb: 'Kurap and panau',
    desc: 'Kurap (ringworm), panau, athlete’s foot, jock itch and scalp ringworm: how they look, how they spread, antifungal creams that work, and why steroid creams make kurap worse.',
    excerpt: 'Malaysia’s heat and humidity make fungal skin infections very common. How to recognise kurap (ringworm), panau, athlete’s foot, jock itch and scalp ringworm, how long to use antifungal cream, why steroid creams make it worse, and when you need a doctor.',
    standfirst: 'Fungal skin infections thrive in hot, humid weather and sweaty skin, so they are among the most common skin problems in Malaysia. Most clear with the right cream used for long enough. The commonest mistake is using a steroid cream, which can make kurap spread and harder to treat.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Tinea', 'Kurap', 'Pityriasis versicolor'],
    image: 'doctor-tablet', imageAlt: 'A doctor in a white coat reading notes on a tablet',
    keyPoints: [
      'Kurap (ringworm, or tinea) is caused by fungi, not worms. It usually looks like an itchy, red or dark ring with a scaly, raised edge and a clearer centre.',
      'Panau (pityriasis versicolor) causes pale, pink or brown scaly patches on the chest, back, neck and arms. It is caused by a yeast that lives on everyone’s skin and isn’t contagious.',
      'Antifungal creams such as clotrimazole, miconazole or terbinafine work for most body, groin and foot infections. Keep using them for 1 to 2 weeks after the rash has gone.',
      'Steroid creams and steroid-antifungal combination creams can make kurap spread. A treatment-resistant fungus linked to steroid cream misuse has now been found in Malaysia.',
      'Scalp and nail infections, and rashes that don’t clear in 2 weeks, need a doctor, as they often need antifungal tablets.',
    ],
    sections: [
      { id: 'types', h: 'Types of fungal skin infection', tocLabel: 'Types', html: `<div class="table-wrap"><table>
<thead><tr><th>Infection</th><th>Where</th><th>What it looks like</th></tr></thead>
<tbody>
<tr><td>Ringworm of the body (tinea corporis, <em>kurap</em>)</td><td>Body, arms, legs, face</td><td>An itchy ring or round patch with a scaly, raised edge and a clearer centre. Red on lighter skin, grey or brown on darker skin</td></tr>
<tr><td>Jock itch (tinea cruris)</td><td>Groin and inner thighs</td><td>An itchy, red-brown rash with a clear edge</td></tr>
<tr><td>Athlete’s foot (tinea pedis)</td><td>Between the toes, soles</td><td>Itchy, white, cracked or peeling skin, sometimes blisters</td></tr>
<tr><td>Scalp ringworm (tinea capitis)</td><td>Scalp, mostly children aged 3 to 7</td><td>Scaly patches with broken hair or hair loss, sometimes a painful, swollen, pus-filled lump (kerion)</td></tr>
<tr><td>Fungal nail infection</td><td>Mostly toenails</td><td>Thick, discoloured, crumbly nails</td></tr>
<tr><td><em>Panau</em> (pityriasis versicolor)</td><td>Chest, back, neck, upper arms</td><td>Pale, pink or light brown patches with fine scale, more noticeable after sun</td></tr>
<tr><td>Candida (yeast) intertrigo</td><td>Skin folds: groin, under the breasts, armpits</td><td>Moist, red, raw skin with small spots at the edges</td></tr>
</tbody></table></div>
<p><strong><em>Kayap</em> isn’t a fungal infection.</strong> It is shingles, caused by the chickenpox virus, and needs different treatment. See our guide to <a href="/articles/shingles-kayap-malaysia/">shingles (kayap)</a>.</p>` },
      { id: 'spread', h: 'How kurap spreads', tocLabel: 'How it spreads', html: `<p>Kurap is caused by fungi called dermatophytes, which live on skin, hair and nails. It spreads through:</p>
<ul>
<li>skin contact with an infected person, for example in contact sports</li>
<li>sharing towels, clothes, bedding, shoes or socks</li>
<li>damp floors in gyms, changing rooms and shared bathrooms</li>
<li><strong>pets</strong>, especially cats and kittens. A Hospital Melaka study found that a fungus caught from cats caused more than half of scalp ringworm cases. Take a pet with scaly or hairless patches to the vet (<em>kurap kucing</em> can pass to people).</li>
</ul>
<p>Heat, sweat, tight clothes and shoes, diabetes and a weak immune system all make infection more likely. It usually appears 1 to 3 weeks after contact.</p>
<p><strong>Panau is different.</strong> It is caused by an overgrowth of <em>Malassezia</em>, a yeast that normally lives on everyone’s skin. It flares in heat and sweat and isn’t passed from person to person in the usual way.</p>` },
      { id: 'treatment', h: 'Treatment for kurap (ubat kurap)', tocLabel: 'Treating kurap', html: `<p>For kurap on the body, groin or feet, a pharmacist can recommend an <strong>antifungal cream</strong> such as clotrimazole, miconazole or terbinafine:</p>
<ul>
<li>Wash and dry the area well, then apply the cream thinly to the rash and about 2 cm of normal skin around it, usually once or twice a day.</li>
<li><strong>Keep using it for 1 to 2 weeks after the rash has gone.</strong> Stopping as soon as it looks better is a common reason it comes back.</li>
<li>Most rashes improve within 2 weeks. Treatment can take up to 4 weeks.</li>
<li>Treat athlete’s foot at the same time as jock itch, as the fungus spreads from the feet to the groin, often via a towel or underwear.</li>
</ul>
<p><strong>Antifungal tablets</strong>, prescribed by a doctor, are needed for scalp ringworm (creams can’t reach the hair roots), most nail infections, widespread rashes, and infections that haven’t cleared with cream. Scalp ringworm usually needs at least 4 weeks of tablets, and nail infections up to 6 months.</p>` },
      { id: 'steroids', h: 'Why steroid creams make kurap worse', tocLabel: 'Steroid creams', html: `<p>Steroid creams calm itching and redness, so kurap can seem better at first. But they weaken the skin’s defences and let the fungus spread underneath, leaving a larger, less typical rash that is harder to recognise and treat. Doctors call this <strong>tinea incognito</strong>.</p>
<ul>
<li><strong>Combination creams</strong> containing both an antifungal and a steroid are sold over the counter in Malaysia. Reviews have found they don’t cure the fungus any better than an antifungal alone, so use them only if a doctor advises.</li>
<li>In 2025, researchers at Universiti Malaya reported <strong>Malaysia’s first confirmed cases of <em>Trichophyton indotineae</em></strong>, a fungus behind an epidemic of widespread, treatment-resistant ringworm in South Asia that has been linked to steroid cream misuse. Some of the Malaysian patients had not travelled abroad and had used steroid creams, and some responded poorly to standard treatment.</li>
<li><strong>Check that creams and traditional remedies are registered</strong> with the National Pharmaceutical Regulatory Agency (NPRA). Registered products carry a <strong>MAL number</strong>. The Ministry of Health has repeatedly warned about unregistered products found to contain hidden steroids.</li>
</ul>
<p>If you are unsure whether a rash is fungal, see a doctor before using a steroid cream. Our guide to <a href="/articles/itchy-skin-eczema-hives-malaysia/">itchy skin</a> explains the safe use of steroid creams for eczema.</p>` },
      { id: 'panau', h: 'Treating panau', tocLabel: 'Treating panau', html: `<ul>
<li>Use an antifungal <strong>shampoo or wash</strong> containing <strong>ketoconazole or selenium sulfide</strong> on the affected skin. Leave it on for 5 to 15 minutes, then rinse. A common routine is daily for a week, then once a week for a month. Antifungal creams work for small areas.</li>
<li><strong>The colour takes weeks to months to return</strong> after the yeast has gone, especially pale patches. That doesn’t mean the treatment failed. Sun exposure makes the patches more noticeable.</li>
<li>Panau often comes back in hot weather. Using the wash once or twice a month can help prevent it.</li>
<li>See a doctor if it is widespread or keeps coming back. Antifungal tablets are sometimes used.</li>
</ul>` },
      { id: 'prevention', h: 'Preventing fungal infections', tocLabel: 'Prevention', html: `<ul>
<li><strong>Dry your skin thoroughly</strong> after bathing, especially between the toes, in the groin and in skin folds.</li>
<li>Change out of sweaty clothes and socks promptly, and wear loose cotton clothing and socks.</li>
<li>Don’t share towels, clothes, shoes, combs or hats. Use your own towel for your feet.</li>
<li>Wear slippers in shared showers, gyms and changing rooms.</li>
<li>Wash gym clothes and towels after each use.</li>
<li>Check pets for patchy hair loss, and wash your hands after handling them.</li>
</ul>
${figure('physio-weights', 'A pair of small blue dumbbells, trainers and an exercise ball', 'Damp gym floors and sweaty clothes are a common source of kurap and athlete’s foot.')}` },
      { id: 'doctor', h: 'When to see a doctor', tocLabel: 'When to see a doctor', html: `<ul>
<li>the rash hasn’t improved after <strong>2 weeks</strong> of antifungal cream, or keeps coming back</li>
<li>it is on the <strong>scalp</strong>, or affects the <strong>nails</strong></li>
<li>it is widespread, or you have used a steroid cream on it</li>
<li>you have <strong>diabetes</strong> or a weak immune system</li>
<li>the skin becomes hot, swollen and painful, or you have a fever, which can mean a bacterial infection</li>
<li>you aren’t sure it is fungal. Eczema, psoriasis and other rashes can look like ringworm. See our guide to <a href="/articles/psoriasis-malaysia/">psoriasis</a>.</li>
</ul>
<p>A doctor can often tell by looking, and may gently scrape some scale to test for fungus. For an intensely itchy rash that is worse at night and affects others at home, see our guide to <a href="/articles/scabies-kudis-buta-malaysia/">scabies (kudis buta)</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a skin rash checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can confirm a fungal infection, prescribe antifungal tablets for scalp, nail or stubborn infections, and refer you to a dermatologist if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open in the evening and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is kurap in English?', 'Kurap is ringworm, a fungal skin infection also called tinea. Despite the name, it isn’t caused by a worm.'],
      ['How long does kurap take to go away?', 'Most cases improve within 2 weeks of using an antifungal cream. Keep using it for 1 to 2 weeks after the rash has gone, which can mean up to 4 weeks in total.'],
      ['Can I use a steroid cream on kurap?', 'No, unless a doctor advises it. Steroid creams can make kurap spread and harder to treat, and have been linked to treatment-resistant ringworm.'],
      ['Is panau contagious?', 'No. Panau is caused by a yeast that normally lives on everyone’s skin. It flares in heat and sweat, but isn’t passed between people in the usual way.'],
      ['Why are my panau patches still white after treatment?', 'Skin colour takes weeks to months to return after the yeast has been treated. It doesn’t mean the treatment failed.'],
      ['Can I get kurap from my cat?', 'Yes. Cats and kittens can carry a fungus that causes ringworm in people, especially scalp ringworm in children. Take the pet to a vet and see a doctor for the rash.'],
      ['When does kurap need tablets?', 'For scalp and nail infections, widespread rashes, and infections that haven’t cleared with cream. A doctor can prescribe antifungal tablets.'],
      ['Is kayap a fungal infection?', 'No. Kayap is shingles, caused by the chickenpox virus. It needs antiviral treatment, not antifungal cream.'],
    ],
    sources: [
      ['Journal of Fungi — Dermatophytoses caused by Trichophyton indotineae: first case reports in Malaysia (Jul 2025)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12298097/'],
      ['Medical Journal of Malaysia — Fungi isolated from dermatomycoses at Hospital Melaka (2023)', 'https://pubmed.ncbi.nlm.nih.gov/37271847/'],
      ['DermNet — Tinea corporis', 'https://dermnetnz.org/topics/tinea-corporis'],
      ['DermNet — Pityriasis versicolor', 'https://dermnetnz.org/topics/pityriasis-versicolor'],
      ['DermNet — Tinea incognito', 'https://dermnetnz.org/topics/tinea-incognito'],
      ['DermNet — Tinea capitis', 'https://dermnetnz.org/topics/tinea-capitis'],
      ['US CDC — About ringworm (Oct 2026)', 'https://www.cdc.gov/ringworm/about/index.html'],
      ['US CDC — Antimicrobial-resistant Trichophyton indotineae (MMWR, May 2023)', 'https://www.cdc.gov/mmwr/volumes/72/wr/mm7219a4.htm'],
      ['NHS — Ringworm', 'https://www.nhs.uk/conditions/ringworm/'],
      ['NHS — Athlete’s foot', 'https://www.nhs.uk/conditions/athletes-foot/'],
      ['Cochrane — Topical antifungal treatments for tinea cruris and tinea corporis (2014)', 'https://www.cochrane.org/CD009992/SKIN_topical-antifungal-treatments-tinea-cruris-and-tinea-corporis'],
      ['The Star — Health Ministry warns against unregistered traditional medicine with harmful substances (18 Dec 2025)', 'https://www.thestar.com.my/news/nation/2025/12/18/health-ministry-warns-against-unregistered-traditional-medicine-with-harmful-substances'],
    ],
    related: ['itchy-skin-eczema-hives-malaysia', 'scabies-kudis-buta-malaysia', 'psoriasis-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'blood-test-results-explained-malaysia',
    title: 'Blood test results explained: FBC, CRP, ESR, liver and kidney tests, and what a check-up includes',
    crumb: 'Blood test results explained',
    desc: 'Understand your blood test: full blood count (FBC), CRP and ESR, liver and kidney function, eGFR and more, plus fasting rules and free health screening in Malaysia.',
    excerpt: 'Got your blood test report and not sure what the numbers mean? A plain-language guide to the full blood count, CRP and ESR, liver and kidney tests, which tests need fasting, what a typical medical check-up includes, and where to get screened free in Malaysia.',
    standfirst: 'A routine blood test can pick up anaemia, infection, liver and kidney problems, diabetes and high cholesterol before you feel unwell. But the report can be hard to read. Here is what the common tests measure and what high or low results can mean. Always go by the reference range printed on your own report, as it varies between labs, and ask a doctor to explain your results.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Blood test', 'Full blood count', 'Health screening'],
    image: 'blood-sample', imageAlt: 'A blood sample tube being prepared for testing',
    keyPoints: [
      'Reference ranges differ between labs. A result slightly outside the range is often normal for you, so look at the whole picture with a doctor.',
      'Small red blood cells (low MCV) are common in Malaysia and can mean iron deficiency or thalassaemia trait, which need different treatment.',
      'Raised liver enzymes (ALT) are most often caused by fatty liver, which affects about 3 in 10 Malaysian adults.',
      'About 1 in 7 Malaysian adults has chronic kidney disease, and only 1 in 20 of them knows. People with diabetes or high blood pressure should have yearly kidney tests.',
      'STR recipients aged 40 and over can get free blood tests through PeKa B40, and eligible PERKESO contributors aged 40 to 59 through its health screening programme.',
    ],
    sections: [
      { id: 'fbc', h: 'Full blood count (FBC)', tocLabel: 'Full blood count', html: `<p>The full blood count (FBC, or full blood picture) measures the cells in your blood.</p>
<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>Typical adult range</th><th>What it can mean</th></tr></thead>
<tbody>
<tr><td>Haemoglobin (Hb)</td><td>Men about 130–180 g/L; women about 115–165 g/L</td><td>Low: <strong>anaemia</strong>, for example from iron deficiency, heavy periods, blood loss or thalassaemia</td></tr>
<tr><td>MCV and MCH (red cell size)</td><td>MCV about 80–100 fL; MCH about 27–32 pg</td><td>Low: iron deficiency or <strong>thalassaemia trait</strong>. High: low vitamin B12 or folate, alcohol, liver disease</td></tr>
<tr><td>White cells (WBC)</td><td>About 4–11 ×10⁹/L</td><td>High: infection, inflammation, steroids, rarely leukaemia. Low: some viral infections (such as dengue), medicines</td></tr>
<tr><td>Platelets</td><td>About 150–400 ×10⁹/L</td><td>Low: higher bleeding risk, for example in <a href="/articles/dengue-klang-valley-first-three-days/">dengue</a>. High: inflammation, iron deficiency</td></tr>
</tbody></table></div>
<p>Haemoglobin is sometimes reported in g/dL: divide g/L by 10 (so 130 g/L is 13.0 g/dL).</p>
<p><strong>Small red cells are common in Malaysia.</strong> They can mean iron deficiency, which is treated with iron, or thalassaemia trait, which isn’t, and iron tablets don’t help. A doctor can check your iron levels and arrange a thalassaemia test. See our guide to <a href="/articles/thalassaemia-screening-malaysia/">thalassaemia screening</a>.</p>` },
      { id: 'crp-esr', h: 'CRP and ESR: inflammation markers', tocLabel: 'CRP and ESR', html: `<ul>
<li><strong>CRP (C-reactive protein)</strong> is made by the liver when there is inflammation or infection, and rises within hours. A normal result is usually below about 5 to 10 mg/L, depending on the lab. Very high levels often point to a bacterial infection.</li>
<li><strong>ESR (erythrocyte sedimentation rate)</strong> measures how fast red cells settle in a tube in an hour. It rises more slowly than CRP and is naturally higher in women, older people, pregnancy and anaemia. Typical upper limits are around 15 to 20 mm/hr for men and 20 to 30 mm/hr for women, depending on age.</li>
</ul>
<p>Both are <strong>signals, not diagnoses</strong>: they show that inflammation is present, but not where or why. Doctors use them alongside your symptoms and other tests, and to check whether a condition is improving.</p>
<p>A <strong>high-sensitivity CRP</strong> (hs-CRP) is a different test sometimes used to assess heart disease risk.</p>` },
      { id: 'liver', h: 'Liver function tests (LFT)', tocLabel: 'Liver tests', html: `<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>What it shows</th></tr></thead>
<tbody>
<tr><td>ALT and AST</td><td>Enzymes released when liver cells are damaged. ALT is the more liver-specific of the two</td></tr>
<tr><td>ALP and GGT</td><td>Raised in bile duct problems. GGT also rises with alcohol and some medicines. ALP also comes from bone</td></tr>
<tr><td>Bilirubin</td><td>A yellow pigment. High levels cause jaundice. Mildly raised bilirubin on its own is often harmless (Gilbert’s syndrome)</td></tr>
<tr><td>Albumin</td><td>A protein made by the liver. Low levels can mean long-term liver disease, kidney problems or poor nutrition</td></tr>
</tbody></table></div>
<p><strong>Common causes of raised ALT in Malaysia:</strong></p>
<ul>
<li><strong>fatty liver</strong> (now called MASLD or MAFLD). A 2023 Ministry of Health survey found it in <strong>28.2% of adults</strong>, about 6.7 million people, including 1 in 5 adults aged 18 to 29. It is linked to excess weight, diabetes and high cholesterol. See our <a href="/articles/bmi-calculator-malaysia/">BMI calculator</a>.</li>
<li>alcohol</li>
<li><strong>hepatitis B and C</strong>. See our guide to <a href="/articles/hepatitis-b-malaysia/">hepatitis B</a>.</li>
<li>medicines, and herbal or slimming supplements</li>
<li>a recent illness or very hard exercise, which can cause short-lived rises</li>
</ul>
<p>Mildly raised results are often rechecked after a few weeks, and the doctor may arrange a liver ultrasound.</p>` },
      { id: 'kidney', h: 'Kidney function tests', tocLabel: 'Kidney tests', html: `<ul>
<li><strong>Creatinine</strong> is a waste product from muscles, cleared by the kidneys. A high level suggests the kidneys aren’t filtering well.</li>
<li><strong>eGFR</strong> (estimated glomerular filtration rate) is calculated from creatinine, age and sex. It estimates how well your kidneys filter, in mL/min/1.73m².</li>
<li><strong>Urea</strong> is another waste product, affected by dehydration and diet as well as kidney function.</li>
<li><strong>Urine albumin-to-creatinine ratio (ACR or UACR)</strong> detects protein leaking into the urine, an early sign of kidney damage, especially in diabetes.</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>Stage</th><th>eGFR</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>G1</td><td>90 or more</td><td>Normal filtering. Counts as kidney disease only with other signs of damage, such as protein in the urine</td></tr>
<tr><td>G2</td><td>60–89</td><td>Mildly reduced. Common with age. Kidney disease only with other signs of damage</td></tr>
<tr><td>G3a / G3b</td><td>45–59 / 30–44</td><td>Moderately reduced</td></tr>
<tr><td>G4</td><td>15–29</td><td>Severely reduced</td></tr>
<tr><td>G5</td><td>Below 15</td><td>Kidney failure</td></tr>
</tbody></table></div>
<p>Chronic kidney disease (CKD) is diagnosed when results stay abnormal for more than 3 months. In Malaysia, a national survey found CKD in <strong>15.5% of adults</strong> in 2018, up from 9.1% in 2011, but only about 5% of those affected knew. About 50,000 people were on dialysis in 2023, with more than 10,000 starting each year. <strong>High blood pressure and diabetes</strong> are the main causes, so people with either should have their kidney blood and urine tests at least once a year.</p>` },
      { id: 'others', h: 'Other common tests', tocLabel: 'Other tests', html: `<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>What it checks</th><th>Read more</th></tr></thead>
<tbody>
<tr><td>Fasting glucose and HbA1c</td><td>Diabetes and prediabetes</td><td><a href="/articles/normal-blood-sugar-level-malaysia/">Normal blood sugar levels</a></td></tr>
<tr><td>Lipid profile (cholesterol, LDL, HDL, triglycerides)</td><td>Heart disease and stroke risk</td><td><a href="/articles/blood-pressure-cholesterol-malaysia/">Blood pressure and cholesterol</a></td></tr>
<tr><td>Uric acid</td><td>Gout and kidney stones</td><td><a href="/articles/gout-malaysia/">Gout</a></td></tr>
<tr><td>TSH (thyroid-stimulating hormone)</td><td>Overactive or underactive thyroid</td><td><a href="/articles/thyroid-hyperthyroidism-hypothyroidism-malaysia/">Thyroid problems</a></td></tr>
<tr><td>Urine test (urine FEME)</td><td>Sugar, protein, blood and signs of infection</td><td><a href="/articles/uti-urinary-tract-infection-malaysia/">UTI</a></td></tr>
</tbody></table></div>` },
      { id: 'fasting', h: 'Do I need to fast before a blood test?', tocLabel: 'Fasting', html: `<ul>
<li><strong>Fasting glucose</strong> needs a fast of at least 8 hours, usually overnight.</li>
<li><strong>Cholesterol tests</strong> often don’t need fasting now, but some labs and doctors still ask for a 10 to 12 hour fast, mainly because triglycerides rise after eating. Follow the instructions you are given.</li>
<li><strong>HbA1c, the full blood count, and liver and kidney tests</strong> usually don’t need fasting.</li>
<li>When fasting, you can drink <strong>plain water</strong>. Avoid tea, coffee, sweet drinks and chewing gum.</li>
<li><strong>Take your usual medicines</strong> unless told otherwise, but ask about diabetes medicines and insulin, which may need adjusting while you fast.</li>
<li>Stop <strong>biotin</strong> supplements (often in hair and nail products) 2 days before, as they can distort some results, including thyroid tests.</li>
</ul>
${figure('glucometer', 'A blood glucose meter and test strips on a table', 'Fasting glucose needs an overnight fast. HbA1c and most other tests don’t.')}` },
      { id: 'check-up', h: 'What a medical check-up includes, and free options', tocLabel: 'Check-ups', html: `<p>A typical health screening includes a consultation, blood pressure, weight and waist measurement, and blood and urine tests such as:</p>
<ul>
<li>full blood count</li>
<li>fasting glucose or HbA1c</li>
<li>lipid profile</li>
<li>kidney function (creatinine, eGFR) and urine test</li>
<li>liver function, and sometimes uric acid, thyroid and hepatitis B tests</li>
</ul>
<p><strong>Free and low-cost options:</strong></p>
<ul>
<li><strong>PeKa B40:</strong> STR recipients and their spouses aged 40 and over get free tests at panel clinics: full blood count, kidney profile with eGFR, HbA1c, lipid profile and urine tests, with no fasting needed and a second visit to explain the results. See our <a href="/articles/peka-b40-malaysia/">PeKa B40 guide</a>.</li>
<li><strong>PERKESO Health Screening Programme:</strong> eligible Malaysian contributors aged 40 to 59 get free blood and urine tests at panel clinics.</li>
<li><strong>Klinik Kesihatan:</strong> basic screening for a minimal fee.</li>
<li><strong>Private clinics and labs:</strong> packages range from under RM100 to several hundred ringgit, depending on the tests included.</li>
</ul>
<p>See our guide to <a href="/articles/free-health-screening-malaysia/">free health screening in Malaysia</a>. Whichever you choose, <strong>have a doctor go through your results</strong>, especially any flagged as high or low, rather than relying on the report alone.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a blood test',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Most GP clinics can take blood for a check-up or specific tests and explain the results. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including PeKa B40 panel clinics and clinics open early on Saturdays for fasting tests.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/peka-b40-clinics/', 'PeKa B40 panel clinics']],
    faqs: [
      ['What does a full blood count check?', 'Your red cells (including haemoglobin and cell size), white cells and platelets. It can show anaemia, infection, inflammation and bleeding risks.'],
      ['What is a normal CRP level?', 'Usually below about 5 to 10 mg/L, depending on the lab. A raised CRP shows inflammation or infection but not the cause.'],
      ['What does a high ALT mean?', 'Liver cells may be inflamed or damaged. In Malaysia the most common cause is fatty liver, but alcohol, hepatitis B or C and medicines are also possible. A doctor may repeat the test and arrange an ultrasound.'],
      ['What is a normal eGFR?', '90 or above is normal, and 60 to 89 can be normal, especially with age. Below 60 for more than 3 months means chronic kidney disease.'],
      ['Do I need to fast before a blood test?', 'Only for some tests, mainly fasting glucose and sometimes cholesterol. Drink plain water and take your usual medicines unless told otherwise.'],
      ['Why does my report show results outside the normal range?', 'Ranges cover about 95% of healthy people, so slightly abnormal results are common and often not significant. A doctor will look at the whole picture.'],
      ['Where can I get a free blood test in Malaysia?', 'Through PeKa B40 if you receive STR and are 40 or over, and through PERKESO’s screening programme if you are an eligible contributor aged 40 to 59. Klinik Kesihatan offer basic screening for a minimal fee.'],
      ['How often should I have a blood test?', 'It depends on your age and health. Adults are generally advised to screen for diabetes, cholesterol and kidney problems regularly from 30 or 40, and every year if you have diabetes or high blood pressure. Ask your doctor.'],
    ],
    sources: [
      ['Institute for Public Health — Metabolic dysfunction-associated fatty liver disease in Malaysia (2023)', 'https://iku.nih.gov.my/images/mets-mafld/mafld-2023_eng.pdf'],
      ['BMC Nephrology — Prevalence of chronic kidney disease in Malaysia (Aug 2020)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7427283/'],
      ['The Star — Bid to reduce kidney cases among Malaysians (24 Feb 2025)', 'https://www.thestar.com.my/news/nation/2025/02/24/bid-to-reduce-kidney-cases-among-malaysians'],
      ['ProtectHealth — PeKa B40', 'https://protecthealth.com.my/peka-b40-eng/'],
      ['MyGOV — PeKa B40 (Mar 2026)', 'https://www.malaysia.gov.my/en/categories/aid-welfare-and-assistance/healthcare-aid/peka-b40'],
      ['CodeBlue — The silent surge: why Malaysians keep postponing health screening (Sep 2026)', 'https://codeblue.galencentre.org/2026/09/the-silent-surge-why-malaysians-keep-postponing-health-screening-brittany-richard-johny-kala-raani-chandra-guindan/'],
      ['Gloucestershire Hospitals NHS Trust — Haematology reference ranges', 'https://www.gloshospitals.nhs.uk/our-services/services-we-offer/pathology/haematology/haematology-reference-ranges/'],
      ['Testing.com — C-reactive protein (Aug 2026)', 'https://www.testing.com/tests/c-reactive-protein-crp/'],
      ['Testing.com — Liver panel (Aug 2026)', 'https://www.testing.com/tests/liver-panel/'],
      ['NHS — Chronic kidney disease: diagnosis', 'https://www.nhs.uk/conditions/kidney-disease/diagnosis/'],
      ['NHS — Blood tests', 'https://www.nhs.uk/tests-and-treatments/blood-tests/'],
    ],
    related: ['free-health-screening-malaysia', 'normal-blood-sugar-level-malaysia', 'peka-b40-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'thyroid-hyperthyroidism-hypothyroidism-malaysia',
    title: 'Thyroid problems in Malaysia: overactive and underactive thyroid, goitre and the thyroid blood test',
    crumb: 'Thyroid problems',
    desc: 'Thyroid problems explained: hyperthyroidism and hypothyroidism symptoms, goitre and nodules, the TSH blood test, treatment, pregnancy and iodised salt in Malaysia.',
    excerpt: 'Thyroid problems are the second most common hormone disorder in Malaysia after diabetes, and most people who have one don’t know it. The signs of an overactive and underactive thyroid, goitre and lumps, what the thyroid blood test shows, and how they are treated.',
    standfirst: 'The thyroid is a small, butterfly-shaped gland in the front of the neck. Its hormones set the pace of the body’s metabolism, so too much or too little affects energy, weight, heart rate, mood and periods. Thyroid problems are common, especially in women, are easily checked with a blood test, and are very treatable.',
    cat: 'weight', catLabel: 'Weight & metabolism', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Thyroid disease', 'Hyperthyroidism', 'Hypothyroidism'],
    image: 'clinic-waiting-room', imageAlt: 'A bright clinic waiting room with red sofas and a large potted plant',
    keyPoints: [
      'A nationwide Malaysian study found that about 3 in 100 adults had an overactive thyroid and 2 in 100 an underactive one, counting mild cases, and that most had never been diagnosed.',
      'An overactive thyroid (hyperthyroidism) causes weight loss, a fast heartbeat, shaking, sweating and anxiety. An underactive thyroid (hypothyroidism) causes tiredness, feeling cold, constipation and weight gain.',
      'The main test is TSH. A high TSH usually means an underactive thyroid, and a low TSH an overactive one.',
      'If you take anti-thyroid tablets and get a sore throat, mouth ulcers or fever, stop them and get an urgent blood count.',
      'Most thyroid lumps are harmless, but any new or growing lump should be checked. Malaysia has required table salt to be iodised since 2020 to prevent goitre.',
    ],
    sections: [
      { id: 'malaysia', h: 'Thyroid problems in Malaysia', tocLabel: 'In Malaysia', html: `<p>Thyroid disorders are the second most common hormone (endocrine) disorder in Malaysia after diabetes. In a nationwide study of more than 2,200 adults, reported when Malaysia launched its first clinical practice guidelines on thyroid disorders in 2020:</p>
<ul>
<li>about <strong>3.4%</strong> had an overactive thyroid and <strong>2.1%</strong> an underactive one, including mild (subclinical) cases</li>
<li><strong>9.3%</strong> had a goitre (an enlarged thyroid) and 3.6% had nodules (lumps)</li>
<li><strong>most</strong> of those with an abnormal thyroid had never been diagnosed</li>
</ul>
<p>Thyroid problems are much more common in <strong>women</strong>, and often start between the ages of 20 and 40, or after pregnancy.</p>` },
      { id: 'hyper', h: 'Overactive thyroid (hyperthyroidism)', tocLabel: 'Overactive thyroid', html: `<p><strong>Symptoms:</strong></p>
<ul>
<li>weight loss despite a good appetite</li>
<li>fast or irregular heartbeat (palpitations)</li>
<li>shaky hands, sweating and feeling hot</li>
<li>anxiety, irritability and poor sleep</li>
<li>loose stools, lighter or fewer periods</li>
<li>a swelling in the neck (goitre)</li>
<li>gritty, red or bulging eyes, or double vision (thyroid eye disease)</li>
</ul>
<p><strong>Causes:</strong> about 4 in 5 cases are due to <strong>Graves’ disease</strong>, an autoimmune condition. Others are caused by overactive thyroid nodules, or by inflammation of the thyroid (thyroiditis), which is often temporary, including after pregnancy.</p>
<p><strong>Treatment:</strong></p>
<ul>
<li><strong>Beta-blockers</strong> to ease palpitations and shaking while other treatment takes effect.</li>
<li><strong>Anti-thyroid tablets</strong> (carbimazole, methimazole or, in early pregnancy, propylthiouracil), usually for 12 to 18 months.</li>
<li><strong>Radioactive iodine</strong>, a drink or capsule that shrinks the thyroid. It isn’t used in pregnancy or breastfeeding, and can worsen thyroid eye disease.</li>
<li><strong>Surgery</strong> to remove the thyroid, for example for a large goitre.</li>
</ul>
<div class="box box--pink" role="note"><span class="box__title">Taking anti-thyroid tablets?</span><p>Rarely, they lower the white blood cells that fight infection. If you get a <strong>sore throat, mouth ulcers, fever or flu-like illness</strong>, stop the tablets and see a doctor the same day for a blood count.</p></div>
<p>Smoking makes thyroid eye disease worse, so it is especially important to stop.</p>` },
      { id: 'hypo', h: 'Underactive thyroid (hypothyroidism)', tocLabel: 'Underactive thyroid', html: `<p><strong>Symptoms</strong> come on slowly and are easy to blame on stress or age:</p>
<ul>
<li>tiredness and sluggishness</li>
<li>feeling cold</li>
<li>weight gain, usually modest</li>
<li>constipation</li>
<li>dry skin and hair, hair thinning</li>
<li>low mood, poor memory</li>
<li>heavier or irregular periods, and difficulty getting pregnant</li>
</ul>
<p><strong>Causes:</strong> most often the autoimmune condition <strong>Hashimoto’s thyroiditis</strong>. Others include previous thyroid surgery or radioactive iodine, some medicines (such as lithium and amiodarone), and iodine deficiency.</p>
<p><strong>Treatment</strong> is a daily <strong>levothyroxine</strong> tablet, which replaces the missing hormone:</p>
<ul>
<li>Take it at the same time each day, on an empty stomach, 30 to 60 minutes before breakfast.</li>
<li>Keep it at least 4 hours apart from <strong>calcium, iron and antacids</strong>, which stop it being absorbed.</li>
<li>Your TSH is rechecked <strong>6 to 8 weeks</strong> after starting or changing the dose, then usually once a year once it is stable.</li>
</ul>
<p><strong>Subclinical hypothyroidism</strong>, a raised TSH with normal thyroid hormone, is common and often settles without treatment. Doctors usually repeat the test before deciding on treatment.</p>` },
      { id: 'test', h: 'The thyroid blood test', tocLabel: 'Thyroid blood test', html: `<div class="table-wrap"><table>
<thead><tr><th>Test</th><th>What it shows</th></tr></thead>
<tbody>
<tr><td>TSH (thyroid-stimulating hormone)</td><td>The main screening test. <strong>High</strong> usually means an underactive thyroid; <strong>low</strong> usually means an overactive one. A typical range is about 0.4 to 4.5 mIU/L, but check your lab’s range</td></tr>
<tr><td>Free T4 (and sometimes free T3)</td><td>The thyroid hormones themselves, to confirm and measure the problem</td></tr>
<tr><td>TPO antibodies</td><td>Point to Hashimoto’s thyroiditis</td></tr>
<tr><td>TSH receptor antibodies (TRAb)</td><td>Point to Graves’ disease</td></tr>
</tbody></table></div>
<p>You don’t need to fast. Stop <strong>biotin</strong> supplements, found in many hair and nail products, 2 days before the test, as biotin can give falsely abnormal results.</p>
<p><strong>Ask for a thyroid test</strong> if you have symptoms above, a goitre, a family history of thyroid disease, other autoimmune conditions such as type 1 diabetes, irregular periods or difficulty conceiving, or are planning a pregnancy with a past thyroid problem. See also our guide to <a href="/articles/blood-test-results-explained-malaysia/">blood test results</a>.</p>
${figure('blood-sample', 'A blood sample tube being prepared for testing', 'A TSH blood test is the simplest way to check your thyroid.')}` },
      { id: 'goitre', h: 'Goitre, thyroid lumps and iodine', tocLabel: 'Goitre and lumps', html: `<p>A <strong>goitre</strong> is an enlarged thyroid, seen as a swelling at the front of the neck. A <strong>nodule</strong> is a lump within the thyroid.</p>
<ul>
<li><strong>Thyroid nodules are very common</strong>: about half of people have one by age 60, and more than 9 in 10 are harmless. They are checked with an <strong>ultrasound</strong>, and if needed a fine-needle biopsy.</li>
<li><strong>See a doctor promptly</strong> for a lump that is growing, or a lump with a hoarse voice, difficulty swallowing or breathing.</li>
<li><strong>Thyroid cancer</strong> is the 8th most common cancer in Malaysian women. Most are the papillary type, which, found early, has a 10-year survival of nearly 100%.</li>
</ul>
<p><strong>Iodine:</strong> the thyroid needs iodine to make its hormones. Iodine deficiency has long caused goitre in parts of Malaysia, especially interior Sabah and Sarawak. A national survey found nearly half of children aged 8 to 10 were iodine deficient, so since the end of 2020, <strong>table and fine salt sold in packs of up to 20 kg must be iodised</strong>. In Sarawak, goitre in children fell from 2.9% in 2008 to 0.1% in 2018 after salt iodisation. Use iodised salt at home, but don’t take extra iodine supplements unless advised, as too much can also upset the thyroid.</p>` },
      { id: 'pregnancy', h: 'Thyroid problems and pregnancy', tocLabel: 'In pregnancy', html: `<ul>
<li>Untreated thyroid problems raise the risk of miscarriage, pre-eclampsia and premature birth, and an underactive thyroid can affect the baby’s brain development.</li>
<li><strong>If you take levothyroxine</strong>, the dose usually needs to go up by 20 to 30% as soon as you are pregnant. Tell your doctor straight away and have your TSH checked, then about every 4 weeks in the first half of pregnancy.</li>
<li><strong>If you have an overactive thyroid</strong>, your doctor may switch your medicine before or early in pregnancy. Radioactive iodine must not be used.</li>
<li><strong>Newborn screening:</strong> babies born in Malaysia are tested for congenital hypothyroidism using blood from the umbilical cord, so that it can be treated before it affects development.</li>
</ul>
<p>See our <a href="/articles/pregnancy-due-date-calculator-malaysia/">pregnancy week-by-week guide</a>.</p>` },
      { id: 'weight', h: 'Thyroid and weight', tocLabel: 'Thyroid and weight', html: `<p>An underactive thyroid usually adds only a few kilograms, much of it fluid, and this tends to come off with treatment. If you have gained a lot of weight, the thyroid is rarely the only cause. Thyroid hormone <strong>shouldn’t be used for weight loss</strong>: it can cause heart rhythm problems and bone loss, and the weight returns. See our <a href="/articles/bmi-calculator-malaysia/">BMI calculator</a> and guide to <a href="/articles/weight-loss-injections-malaysia/">weight-loss injections</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get your thyroid checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine your neck, order a thyroid blood test, start treatment for an underactive thyroid and refer you to an endocrinologist or for an ultrasound if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What are the symptoms of thyroid problems?', 'An overactive thyroid causes weight loss, palpitations, shaking, sweating and anxiety. An underactive thyroid causes tiredness, feeling cold, constipation, dry skin and weight gain.'],
      ['What is the difference between hyperthyroidism and hypothyroidism?', 'Hyperthyroidism means the thyroid makes too much hormone, speeding the body up. Hypothyroidism means it makes too little, slowing the body down.'],
      ['What does a high TSH mean?', 'Usually that your thyroid is underactive, as the pituitary gland is working harder to stimulate it. A doctor will check your free T4 to confirm.'],
      ['Is a goitre dangerous?', 'Most goitres and thyroid lumps are harmless, but they should be checked, especially if growing, or with a hoarse voice or difficulty swallowing or breathing.'],
      ['Do I need to fast for a thyroid blood test?', 'No. But stop biotin supplements 2 days before, as they can affect the result.'],
      ['Is thyroid disease curable?', 'An overactive thyroid can often be cured with tablets, radioactive iodine or surgery, although some people then need levothyroxine. An underactive thyroid is usually lifelong but well controlled with a daily tablet.'],
      ['Can thyroid problems cause weight gain?', 'An underactive thyroid can cause modest weight gain, which usually improves with treatment. Large weight gain is rarely due to the thyroid alone.'],
      ['Why is salt iodised in Malaysia?', 'To prevent iodine deficiency, which causes goitre and can affect children’s development. Since the end of 2020, table salt sold in packs of up to 20 kg must be iodised.'],
    ],
    sources: [
      ['The Star — Malaysia launches first clinical guidelines for managing thyroid disorders (3 Oct 2020)', 'https://thestar.com.my/news/nation/2020/10/03/malaysia-launches-first-clinical-guidelines-for-managing-thyroid-disorders'],
      ['IIUM Repository — Prevalence of overt and subclinical thyroid disorders in Malaysia (MyEndo study, 2017)', 'https://irep.iium.edu.my/58583/'],
      ['The Star — Iodine to salt deadline now on Dec 31 (4 Oct 2020)', 'https://www.thestar.com.my/news/nation/2020/10/04/iodine-to-salt-deadline-now-on-dec-31'],
      ['CodeBlue — MOH bans salt without iodine from Sept 30 (Sep 2020)', 'https://codeblue.galencentre.org/2020/09/moh-bans-salt-without-iodine-from-sept-30/'],
      ['NutraIngredients — Malaysian state intervention helps combat iodine deficiency (May 2022)', 'https://www.nutraingredients.com/Article/2022/05/30/malaysian-state-intervention-helps-combat-iodine-deficiency-study/'],
      ['The Star — Thyroid cancer: uncommon but mostly treatable (Feb 2024)', 'https://www.thestar.com.my/lifestyle/health/2024/02/21/thyroid-cancer-uncommon-but-mostly-treatable'],
      ['American Thyroid Association — Hyperthyroidism', 'https://www.thyroid.org/hyperthyroidism/'],
      ['American Thyroid Association — Hypothyroidism', 'https://www.thyroid.org/hypothyroidism/'],
      ['American Thyroid Association — Thyroid function tests', 'https://www.thyroid.org/thyroid-function-tests/'],
      ['American Thyroid Association — Hypothyroidism in pregnancy', 'https://www.thyroid.org/hypothyroidism-in-pregnancy/'],
      ['NHS — Overactive thyroid', 'https://www.nhs.uk/conditions/overactive-thyroid-hyperthyroidism/'],
      ['NHS — Levothyroxine', 'https://www.nhs.uk/medicines/levothyroxine/'],
    ],
    related: ['blood-test-results-explained-malaysia', 'bmi-calculator-malaysia', 'pcos-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'uti-urinary-tract-infection-malaysia',
    title: 'Urinary tract infection (UTI): symptoms, treatment, kidney infection signs and stopping it coming back',
    crumb: 'Urinary tract infection (UTI)',
    desc: 'UTI (jangkitan saluran kencing) symptoms, kidney infection warning signs, urine tests, antibiotic treatment in Malaysia, self-care, and how to prevent UTIs coming back.',
    excerpt: 'Burning when you pass urine, needing to go often, cloudy or bloody urine: the signs of a urinary tract infection. Who needs to see a doctor, the warning signs of a kidney infection, how UTIs are treated in Malaysia, and what actually helps prevent them coming back.',
    standfirst: 'A urinary tract infection (UTI, or jangkitan saluran kencing) is one of the most common reasons women see a GP. Most are bladder infections that clear quickly with a short course of antibiotics. But a UTI can spread to the kidneys, and some groups, including men, pregnant women and children, always need a doctor.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Urinary tract infection', 'Cystitis', 'Jangkitan saluran kencing'],
    image: 'nurse-stethoscope', imageAlt: 'A nurse with a stethoscope in a clinic',
    keyPoints: [
      'Typical UTI symptoms are pain or burning when passing urine, needing to go often and urgently, cloudy or bloody urine, and lower tummy pain.',
      'Fever, shivering, pain in the back or side, or vomiting can mean a kidney infection, which needs a doctor the same day.',
      'Men, pregnant women, children, older people and people with diabetes or a catheter should always see a doctor for a UTI.',
      'In Malaysia, antibiotics need a doctor’s prescription. Common UTI bacteria are increasingly resistant to some antibiotics, so a urine culture is used for repeat or complicated infections.',
      'Drinking enough water and not holding urine help. Cranberry products modestly reduce repeat UTIs in some women. Vaginal oestrogen helps after the menopause.',
    ],
    sections: [
      { id: 'what', h: 'What is a UTI?', tocLabel: 'What it is', html: `<p>A UTI is an infection anywhere in the urinary tract, usually caused by bacteria from the gut, most often <em>E. coli</em>, getting into the urethra.</p>
<ul>
<li><strong>Bladder infection (cystitis)</strong> is the most common type.</li>
<li><strong>Kidney infection (pyelonephritis)</strong> is less common but more serious.</li>
</ul>
<p><strong>Women are much more likely to get UTIs</strong> because the urethra is shorter and closer to the back passage. Risk is higher after sex, in pregnancy, after the menopause, and with a previous UTI.</p>
<p><strong>Other risk factors</strong> include diabetes (some diabetes medicines, called SGLT2 inhibitors, also raise the risk of genital infections), kidney stones, a urinary catheter, not drinking enough, constipation in children, and in men, an <strong>enlarged prostate</strong> that stops the bladder emptying fully.</p>` },
      { id: 'symptoms', h: 'UTI symptoms', tocLabel: 'Symptoms', html: `<ul>
<li>pain, burning or stinging when passing urine (<em>sakit kencing</em>)</li>
<li>needing to pass urine more often or urgently, including at night</li>
<li>cloudy urine, or blood in the urine</li>
<li>pain or pressure in the lower tummy</li>
<li>feeling generally unwell or tired</li>
</ul>
<p><strong>In older people</strong>, a UTI may cause new confusion, agitation, falls or worsening incontinence rather than typical symptoms.</p>
<p><strong>In children</strong>, look for fever, irritability, poor feeding, vomiting, tummy pain or new bedwetting. A <strong>baby under 3 months with a temperature of 38°C or more</strong> needs to see a doctor straight away.</p>
<p>Dark or strong-smelling urine on its own usually means you need to drink more, not an infection. Vaginal itching or discharge points to another cause, such as thrush or a sexually transmitted infection. See our guide to <a href="/articles/syphilis-sti-testing-malaysia/">STI testing</a>.</p>` },
      { id: 'kidney', h: 'Warning signs of a kidney infection', tocLabel: 'Kidney infection', html: `<p><strong>See a doctor the same day if you have UTI symptoms with:</strong></p>
<ul>
<li>a high temperature, or shivering and shaking</li>
<li>pain in your back or side, below the ribs</li>
<li>feeling sick or vomiting</li>
</ul>
<p><strong>Go to an emergency department</strong> if you are confused, very drowsy, have difficulty speaking, have passed no urine all day, or feel very unwell. A kidney infection can lead to sepsis. Pregnant women with these signs need urgent care. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>
<p><strong>Always see a doctor rather than relying on self-care</strong> if you are a man, pregnant, a child, aged 65 or over, have diabetes, a catheter or a weak immune system, have blood in your urine, have UTIs that keep coming back, or aren’t improving within 2 days.</p>` },
      { id: 'tests', h: 'How a UTI is diagnosed', tocLabel: 'Tests', html: `<ul>
<li><strong>Urine dipstick:</strong> a quick test at the clinic for signs of infection. In younger women with typical symptoms, the diagnosis is often clear from symptoms alone. Dipsticks are less reliable in older people and people with catheters, who often have bacteria in their urine without an infection.</li>
<li><strong>Urine culture:</strong> sent to a lab to identify the bacteria and which antibiotics work. It is used in pregnancy, for men, for repeat infections, kidney infections, and when treatment hasn’t worked.</li>
</ul>
<p><strong>How to give a clean (mid-stream) urine sample:</strong> wash your hands, pass the first part of the urine into the toilet, catch the middle part in the sterile container without stopping the flow, then finish in the toilet. Hand it in within 2 hours, or keep it in the fridge. Give the sample <strong>before</strong> starting antibiotics if possible.</p>` },
      { id: 'treatment', h: 'UTI treatment', tocLabel: 'Treatment', html: `<p><strong>Antibiotics:</strong> a simple bladder infection in a woman is usually treated with a <strong>3 to 5 day course</strong>. Under the Ministry of Health’s national antimicrobial guideline, preferred options include nitrofurantoin and amoxicillin-clavulanate, with cephalosporins or a single dose of fosfomycin as alternatives. The choice depends on your history, kidney function and whether you are pregnant. Kidney infections need longer treatment, and sometimes a drip in hospital.</p>
<ul>
<li><strong>Antibiotic resistance is rising.</strong> The guideline advises against some older antibiotics for UTIs because more than 30% of local <em>E. coli</em> are now resistant to them, and resistance to ciprofloxacin rose from about 25% in 2019 to 30% in 2023.</li>
<li><strong>Don’t buy antibiotics without a prescription</strong> or use leftover tablets. In Malaysia, antibiotics are prescription medicines, and the wrong antibiotic or too short a course can lead to a kidney infection or resistant bacteria.</li>
<li>Most people feel better within 1 to 2 days of starting the right antibiotic. Finish the course, and go back if you aren’t improving after 48 hours.</li>
<li><strong>Bacteria in the urine without symptoms</strong> usually aren’t treated, except in pregnancy, where antenatal clinics screen for and treat them.</li>
</ul>
<p><strong>Self-care while you recover:</strong></p>
<ul>
<li>Drink enough water to keep your urine pale.</li>
<li>Take paracetamol for pain. Ibuprofen is an alternative for a simple bladder infection, but avoid it with a kidney infection unless a doctor advises.</li>
<li>Rest, and don’t hold in urine.</li>
<li>Cystitis sachets and cranberry drinks don’t treat an active infection.</li>
</ul>
${figure('gp-consultation', 'A doctor talking with a patient across a desk in a consultation room', 'A GP can test your urine and choose the right antibiotic for you.')}` },
      { id: 'prevention', h: 'Preventing UTIs from coming back', tocLabel: 'Prevention', html: `<p>Recurrent UTI means 2 or more in 6 months, or 3 or more in a year. These steps can help:</p>
<ul>
<li>Drink enough water through the day, and pass urine when you need to rather than holding it.</li>
<li>Pass urine soon after sex.</li>
<li>Wipe from front to back after using the toilet.</li>
<li>Avoid spermicides, and treat constipation.</li>
<li><strong>Cranberry products:</strong> a 2023 Cochrane review of 50 trials found they reduced UTIs by about a quarter in women with recurrent UTIs, and in children. They didn’t help older people in care homes or pregnant women. Avoid them if you take warfarin.</li>
<li><strong>After the menopause</strong>, vaginal oestrogen cream or pessaries reduce repeat UTIs. Ask your doctor.</li>
<li><strong>D-mannose</strong> supplements are popular, but a large 2024 trial found no benefit over placebo.</li>
<li>For frequent infections, a doctor may suggest a non-antibiotic preventive medicine (methenamine), a low-dose antibiotic at night for several months, or a single dose after sex, and may check for an underlying cause with a scan.</li>
</ul>` },
      { id: 'men', h: 'UTIs in men, and “kencing tak lawas”', tocLabel: 'In men', html: `<p>UTIs are less common in men and are always worth checking, as they can involve the prostate or point to a problem with bladder emptying.</p>
<p><strong>Kencing tak lawas</strong>, the feeling that the bladder hasn’t emptied fully, with a weak stream, dribbling and getting up at night to pass urine, is often due to an <strong>enlarged prostate</strong> (benign prostatic hyperplasia) rather than infection. About 1 in 6 Malaysian men aged 40 and over has it, rising to 1 in 3 at 75 and over. It can be treated, so see a doctor. <strong>Being unable to pass urine at all is an emergency.</strong></p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a UTI treated',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can test your urine and prescribe the right antibiotic, often on the same visit. UTIs often flare in the evening or at weekends, so our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What are the symptoms of a UTI?', 'Pain or burning when passing urine, needing to go often or urgently, cloudy or bloody urine and lower tummy pain. Older people may become confused instead.'],
      ['Can a UTI go away on its own?', 'A mild bladder infection in a healthy woman sometimes clears by itself, but see a doctor if symptoms are severe, don’t improve in 2 days, or you are in a group that always needs a doctor.'],
      ['How long does a UTI take to clear with antibiotics?', 'Most people feel better within 1 to 2 days, and a simple bladder infection is usually treated for 3 to 5 days.'],
      ['What are the signs of a kidney infection?', 'Fever, shivering, pain in the back or side below the ribs, and nausea or vomiting, often with UTI symptoms. See a doctor the same day.'],
      ['Can I buy antibiotics for a UTI at a pharmacy in Malaysia?', 'No. Antibiotics are prescription medicines in Malaysia. A pharmacist can advise on pain relief and when to see a doctor.'],
      ['Does cranberry juice help a UTI?', 'It doesn’t treat an active infection. Cranberry products may modestly reduce repeat UTIs in some women and children.'],
      ['Is a UTI in pregnancy dangerous?', 'It needs prompt treatment, as it can spread to the kidneys and affect the pregnancy. Pregnant women are also screened for bacteria in the urine at antenatal checks.'],
      ['What is kencing tak lawas?', 'The feeling that your bladder hasn’t emptied fully. In men it is often due to an enlarged prostate rather than infection. See a doctor to find the cause.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — National Antimicrobial Guideline: urinary tract infections (Jan 2026)', 'https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a17-urinary-tract-infections'],
      ['NHS — Urinary tract infections (Jul 2025)', 'https://www.nhs.uk/conditions/urinary-tract-infections-utis/'],
      ['NHS — Kidney infection (Feb 2025)', 'https://www.nhs.uk/conditions/kidney-infection/'],
      ['UK Health Security Agency — Diagnosis of urinary tract infections: quick reference tool (Jul 2025)', 'https://www.gov.uk/government/publications/urinary-tract-infection-diagnosis/diagnosis-of-urinary-tract-infections-quick-reference-tools-for-primary-care'],
      ['European Association of Urology — Guidelines on urological infections (2026)', 'https://uroweb.org/guidelines/urological-infections/chapter/the-guideline'],
      ['US CDC — Urinary tract infection basics (Sep 2026)', 'https://www.cdc.gov/uti/about/index.html'],
      ['Cochrane — Can cranberries prevent urinary tract infections? (Nov 2023)', 'https://www.cochrane.org/evidence/CD001321_can-cranberries-prevent-urinary-tract-infections'],
      ['D-mannose for prevention of recurrent UTI in women: randomised trial (JAMA Internal Medicine, 2024)', 'https://pubmed.ncbi.nlm.nih.gov/38587819/'],
      ['Asia News Network / The Star — Malaysia faces uphill battle as infections may get harder to cure (May 2025)', 'https://asianews.network/malaysia-faces-uphill-battle-as-infections-may-get-harder-to-cure/'],
      ['Galen Centre — Tackling benign prostate hyperplasia among Malaysian men (Nov 2023)', 'https://ova.galencentre.org/tackling-benign-prostate-hyperplasia-an-unseen-challenge-among-malaysian-men/'],
    ],
    related: ['kidney-stones-batu-karang-malaysia', 'pap-smear-hpv-test-malaysia', 'syphilis-sti-testing-malaysia'],
  },
];
