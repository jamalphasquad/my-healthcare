// Articles published 5 November 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-11-05';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const NOV_2026_E = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'pregnancy-test-early-signs-malaysia',
    title: 'Pregnancy test and early signs of pregnancy (tanda-tanda hamil): when to test, reading results, and your first antenatal visit',
    crumb: 'Pregnancy test and early signs',
    desc: 'Early signs of pregnancy (tanda-tanda hamil), when to take a pregnancy test, faint lines and false negatives, blood tests, folic acid, and registering at a Klinik Kesihatan.',
    excerpt: 'Think you might be pregnant? The early signs, when a home pregnancy test is accurate, what a faint line means, when a blood test is used, what to do after a positive result in Malaysia, including the pink book, and the warning signs that need urgent care.',
    standfirst: 'A missed period is often the first sign of pregnancy, but early symptoms can feel a lot like a period coming. A home pregnancy test is reliable from the first day of a missed period. If it is positive, the next step in Malaysia is to register at a Klinik Kesihatan before 12 weeks, where folic acid and antenatal checks are provided.',
    cat: 'womens-health', catLabel: "Women's health", published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Pregnancy test', 'Tanda-tanda hamil', 'Antenatal care'],
    image: 'doctor-tablet', imageAlt: 'A doctor in a white coat reading notes on a tablet',
    keyPoints: [
      'Early signs include a missed period, light spotting, nausea, sore breasts, tiredness and needing to pass urine more often. Many can also happen before a period, so a test is the only way to know.',
      'Home pregnancy tests detect the hormone hCG and are about 99% accurate from the first day of a missed period, if used correctly.',
      'A faint line usually still means pregnant. A negative result is more likely to be wrong than a positive one, usually because the test was done too early.',
      'In Malaysia, register at a Klinik Kesihatan before 12 weeks of pregnancy. You will get the pink book (Buku Pink), free folic acid and iron, and checks for HIV, hepatitis B, syphilis, diabetes and blood pressure.',
      'Get emergency care for severe tummy pain on one side, shoulder-tip pain, heavy bleeding, dizziness or fainting, which can be signs of an ectopic pregnancy.',
    ],
    sections: [
      { id: 'signs', h: 'Early signs of pregnancy (tanda-tanda hamil)', tocLabel: 'Early signs', html: `<p>Symptoms usually start around 4 to 6 weeks after the first day of your last period:</p>
<ul>
<li><strong>a missed period</strong>, the most reliable early sign if your cycle is regular</li>
<li><strong>very light spotting</strong> around the time your period is due (implantation bleeding), which can be mistaken for a light period</li>
<li><strong>nausea or vomiting</strong> (morning sickness), which can happen at any time of day</li>
<li><strong>sore, tender or larger breasts</strong></li>
<li><strong>tiredness</strong></li>
<li>needing to pass urine more often</li>
<li>mood changes, a metallic taste, a stronger sense of smell, cravings, more vaginal discharge or constipation</li>
</ul>
<p><strong>Period or pregnancy?</strong> Breast tenderness, tiredness, mood changes and mild cramps can happen before a period too, so symptoms alone can’t tell you whether you are pregnant. Take a test.</p>` },
      { id: 'when', h: 'When to take a pregnancy test', tocLabel: 'When to test', html: `<ul>
<li>Pregnancy tests detect <strong>hCG</strong>, a hormone made once a fertilised egg implants, about 6 days after fertilisation. Levels rise quickly over the following days.</li>
<li><strong>Test from the first day of your missed period.</strong> If you don’t know when your period is due, test at least <strong>21 days after</strong> the last time you had unprotected sex.</li>
<li>Some sensitive tests claim to work a few days before a missed period, but they are more likely to give a false negative that early.</li>
<li>You can use urine from any time of day. If you are testing early, first-morning urine is the most concentrated. Don’t drink a lot of fluid just before testing.</li>
</ul>` },
      { id: 'results', h: 'Reading the result', tocLabel: 'Reading the result', html: `<ul>
<li><strong>Follow the instructions</strong> for how long to wait, and read the result within the time stated, usually within 10 minutes. A faint line that appears much later may be an evaporation line.</li>
<li><strong>A faint line within the reading time usually means you are pregnant.</strong> hCG may still be low early on.</li>
<li><strong>Positive:</strong> a positive result is very likely to be right. Rarely, it can follow a very early pregnancy loss (chemical pregnancy) or some fertility treatments that contain hCG.</li>
<li><strong>Negative but no period:</strong> you may have tested too early. Test again in a few days. If it is still negative and your period hasn’t come, see a doctor.</li>
</ul>
<p><strong>Missed periods without pregnancy</strong> can be caused by stress, sudden weight loss or gain, heavy exercise, breastfeeding, hormonal contraception, thyroid problems or <a href="/articles/pcos-malaysia/">PCOS (PMOS)</a>. See a doctor if you have missed 3 periods in a row. See also our guide to <a href="/articles/thyroid-hyperthyroidism-hypothyroidism-malaysia/">thyroid problems</a>.</p>` },
      { id: 'blood', h: 'Blood pregnancy tests', tocLabel: 'Blood tests', html: `<p>A blood test can detect hCG earlier than a urine test, about 7 to 10 days after conception, and is the only test that measures the exact level. Doctors use it during fertility treatment, if there is bleeding or pain in early pregnancy, or if they suspect a problem such as an ectopic pregnancy. In a healthy early pregnancy, hCG roughly doubles every 2 days, so the test may be repeated to compare. Most women don’t need a blood test to confirm pregnancy.</p>` },
      { id: 'next', h: 'Positive test? Your next steps in Malaysia', tocLabel: 'Next steps', html: `<ol>
<li><strong>Register for antenatal care before 12 weeks of pregnancy</strong> at your nearest Klinik Kesihatan, or with a private doctor. The Ministry of Health counts registration after 12 weeks as late.</li>
<li>At your first visit, you will usually have your pregnancy confirmed, your blood pressure, weight and urine checked, an ultrasound, and blood tests including <strong>haemoglobin, HIV, hepatitis B and syphilis</strong>. You may also be screened for diabetes, depending on your risk.</li>
<li>You will be given the <strong>pink book (Buku Pink)</strong>, your maternal health record. Bring it to every check-up, including at private clinics and hospitals.</li>
<li>Government clinics provide <strong>folic acid, iron and multivitamins</strong> free. Since May 2025, the Tdap vaccine is also offered free in pregnancy. See our guide to the <a href="/articles/tetanus-injection-att-malaysia/">tetanus vaccine</a>.</li>
</ol>
<p><strong>Folic acid:</strong> it helps prevent spina bifida and other neural tube defects. The usual dose is <strong>400 micrograms a day</strong>, ideally from 3 months before pregnancy until 12 weeks. Women with diabetes, those taking some epilepsy medicines, or who have had a previous pregnancy affected by a neural tube defect need a <strong>higher dose</strong> prescribed by a doctor. If you didn’t take it before pregnancy, start as soon as you know.</p>
<p><strong>Also:</strong> stop smoking and vaping, avoid alcohol, and check any medicines with a doctor or pharmacist, but don’t stop prescribed medicines without advice.</p>
<p>Use our <a href="/articles/pregnancy-due-date-calculator-malaysia/">due date calculator and week-by-week guide</a> to work out how far along you are.</p>
${figure('healthy-salad', 'A table of salad, fruit and vegetables in small bowls', 'Leafy greens contain folate, but a folic acid supplement is still recommended in early pregnancy.')}` },
      { id: 'warning', h: 'Warning signs in early pregnancy', tocLabel: 'Warning signs', html: `<p><strong>Go to an emergency department or call <a href="tel:999">999</a> if you have:</strong></p>
<ul>
<li>sudden, severe tummy pain, especially on one side</li>
<li>pain in the tip of your shoulder</li>
<li>heavy bleeding (soaking a pad soon after putting it on)</li>
<li>dizziness or fainting</li>
</ul>
<p>These can be signs of an <strong>ectopic pregnancy</strong>, where the pregnancy grows outside the womb, usually between 4 and 12 weeks. It can cause dangerous internal bleeding.</p>
<p><strong>Get urgent advice</strong> for any bleeding or spotting in pregnancy, even without pain. Bleeding isn’t always serious, but it should be checked.</p>
<p><strong>Severe vomiting:</strong> see a doctor soon if you are vomiting often, can’t keep food or fluids down, or have signs of dehydration such as dark or very little urine and dizziness. This may be hyperemesis gravidarum, which can be treated.</p>` },
      { id: 'support', h: 'Unplanned pregnancy and support', tocLabel: 'Support', html: `<p>If the pregnancy is unplanned or you aren’t sure what to do, you can talk confidentially to a doctor. Other sources of support include:</p>
<ul>
<li><strong>Talian Kasih 15999</strong> (24 hours, or WhatsApp 019-261 5999), the Ministry of Women, Family and Community Development’s helpline for counselling and support</li>
<li>LPPKN’s <strong>KafeTEEN</strong> centres, which offer reproductive health services and counselling for young people</li>
</ul>
<p>For preventing pregnancy in future, see our guide to <a href="/articles/contraception-malaysia/">contraception</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to confirm your pregnancy',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can confirm your pregnancy, check your health, start folic acid and refer you for antenatal care. You can also register directly at your nearest Klinik Kesihatan. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['When can I take a pregnancy test?', 'From the first day of your missed period. If you don’t know when your period is due, wait at least 21 days after unprotected sex.'],
      ['How accurate are home pregnancy tests?', 'About 99% accurate from the first day of a missed period, if used as directed. Negative results are more often wrong than positive ones, usually because the test was done too early.'],
      ['Does a faint line mean I am pregnant?', 'A faint line that appears within the reading time usually means you are pregnant. Lines that appear long after may be evaporation lines.'],
      ['What are the early signs of pregnancy?', 'A missed period, light spotting, nausea, sore breasts, tiredness and needing to pass urine more often, usually from about 4 to 6 weeks.'],
      ['Can I tell if I am pregnant before my period is due?', 'Not reliably. Early symptoms are similar to those before a period, and tests are less accurate before a missed period.'],
      ['When should I go to the clinic after a positive test?', 'Register for antenatal care before 12 weeks of pregnancy at a Klinik Kesihatan or private clinic. Go to an emergency department straight away for severe pain, heavy bleeding or fainting.'],
      ['How much folic acid should I take?', 'Usually 400 micrograms a day from before pregnancy until 12 weeks. Some women, such as those with diabetes or a previous neural tube defect pregnancy, need a higher dose from a doctor.'],
      ['What is the pink book?', 'Buku Pink is your maternal health record in Malaysia, given when you register your pregnancy. Bring it to every antenatal check-up.'],
    ],
    sources: [
      ['MyGOV — Mendaftar kehamilan (May 2026)', 'https://www.malaysia.gov.my/my/topics/mendaftar-kehamilan'],
      ['MyGOV — Kesihatan ibu hamil (May 2026)', 'https://www.malaysia.gov.my/my/topics/kesihatan-ibu-hamil'],
      ['MyGOV — Kesihatan pra-kehamilan (Mar 2026)', 'https://www.malaysia.gov.my/my/topics/kesihatan-pra-kehamilan'],
      ['NHS — Signs and symptoms of pregnancy (Jul 2026)', 'https://www.nhs.uk/pregnancy/trying-for-a-baby/signs-and-symptoms-of-pregnancy/'],
      ['NHS — Doing a pregnancy test', 'https://www.nhs.uk/pregnancy/trying-for-a-baby/doing-a-pregnancy-test/'],
      ['Cleveland Clinic — Pregnancy tests', 'https://my.clevelandclinic.org/health/diagnostics/9703-pregnancy-tests'],
      ['US CDC — About folic acid (Sep 2026)', 'https://www.cdc.gov/folic-acid/about/index.html'],
      ['NHS — Ectopic pregnancy symptoms', 'https://www.nhs.uk/conditions/ectopic-pregnancy/symptoms/'],
      ['NHS — Vaginal bleeding in pregnancy (Feb 2026)', 'https://www.nhs.uk/pregnancy/common-symptoms/vaginal-bleeding/'],
      ['NHS — Stopped or missed periods (Jun 2026)', 'https://www.nhs.uk/conditions/stopped-or-missed-periods/'],
      ['MyGOV — Talian Kasih 15999 (Mar 2026)', 'https://www.malaysia.gov.my/my/topics/talian-kasih-15999'],
    ],
    related: ['pregnancy-due-date-calculator-malaysia', 'contraception-malaysia', 'pcos-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'semut-charlie-paederus-dermatitis-malaysia',
    title: 'Semut charlie (Paederus) rash: what it looks like, first aid, treatment and keeping the beetles away',
    crumb: 'Semut charlie rash',
    desc: 'Semut charlie (semut cali) isn’t an ant and doesn’t bite: its toxin causes a burning, blistering rash. What it looks like, first aid, treatment, eye danger and prevention.',
    excerpt: 'Woke up with a burning red streak or blisters on your neck or arm? It may be semut charlie. The insect doesn’t bite: the rash comes from a toxin released when it is crushed on the skin. What to do straight away, how the rash is treated, why the eyes are at risk, and how to keep the beetles out.',
    standfirst: 'Semut charlie (also called semut cali or semut kayap) is not an ant but a small orange-and-black rove beetle. It doesn’t bite or sting. The painful rash, known as Paederus dermatitis, happens when the beetle is crushed against the skin, often while you sleep, releasing a toxin called pederin. Outbreaks are common in Malaysia in the rainy season, especially in hostels and flats near rice fields and greenery.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Paederus dermatitis', 'Semut charlie', 'Rove beetle'],
    image: 'kl-street-night', imageAlt: 'Kuala Lumpur’s Petronas Twin Towers under a dark, cloudy evening sky',
    keyPoints: [
      'Semut charlie is a rove beetle (Paederus), about 7 to 10 mm long, with an orange body, black head and dark blue wing cases. It is attracted to bright lights at night.',
      'It doesn’t bite. The rash comes from a toxin in its body fluid when it is crushed or rubbed on the skin.',
      'The rash usually appears within 1 to 2 days: a burning red streak or patch, often on the neck, face or arms, which then blisters.',
      'If one lands on you, blow or flick it off rather than crushing it. If it was crushed, wash the skin straight away with soap and water.',
      'Keep it away from your eyes, which can become badly inflamed. See a doctor for any eye symptoms or widespread blisters.',
    ],
    sections: [
      { id: 'what', h: 'What is semut charlie?', tocLabel: 'What it is', html: `<p>Semut charlie is a <strong>rove beetle</strong>, <em>Paederus fuscipes</em>, not an ant. It is about 7 to 10 mm long, with a black head, an orange body, shiny dark blue wing cases and a black tip. When disturbed it may raise its tail, like a scorpion.</p>
<ul>
<li>It lives in rice fields and other vegetation, where it actually helps by eating crop pests.</li>
<li>It flies into homes, especially during heavy rain, floods and the rice harvest, and is strongly attracted to <strong>bright lights</strong> at night. A Universiti Sains Malaysia study in Penang found far more beetles around bright lights than dim ones, and more on higher floors.</li>
<li>It <strong>doesn’t bite or sting</strong>. Its body fluid contains <strong>pederin</strong>, a toxin made by bacteria living inside female beetles. The toxin is released when the beetle is crushed or rubbed against the skin.</li>
</ul>
<p><strong>Outbreaks in Malaysia</strong> have included about 2,000 people in high-rise flats and school hostels in Penang in 2002, 360 cases in university hostels next to an oil palm estate in Selangor in 2010, and 21 cases in Kelantan in mid-2019, mostly in schools.</p>` },
      { id: 'signs', h: 'What the rash looks like', tocLabel: 'The rash', html: `<ul>
<li>It usually appears <strong>within 1 to 2 days</strong> of contact, often noticed on waking.</li>
<li>It starts as a <strong>burning, stinging red streak or patch</strong>, often in a line where the beetle was smeared across the skin (sometimes called a “whiplash” mark).</li>
<li>Blisters and small pus spots form over the next few days, then dry and crust.</li>
<li><strong>“Kissing” lesions</strong> appear where two skin surfaces touch, such as inside the elbow or between the thighs, because the toxin transfers between them.</li>
<li>It most often affects the face, neck, shoulders and arms.</li>
</ul>
<p>The toxin can be spread to other parts of the body on your fingers, including the genitals. The rash is often mistaken for shingles, burns or other rashes. See our guides to <a href="/articles/shingles-kayap-malaysia/">shingles (kayap)</a> and <a href="/articles/itchy-skin-eczema-hives-malaysia/">itchy skin</a>.</p>
<p><strong>The eyes:</strong> rubbing your eyes with contaminated fingers can cause painful swelling of the eyelids and inflammation of the eye (sometimes called “Nairobi eye”), which can temporarily affect vision.</p>` },
      { id: 'first-aid', h: 'First aid', tocLabel: 'First aid', html: `<ol>
<li><strong>Don’t crush or slap the beetle.</strong> Blow it away or flick it off, or pick it up with a tissue.</li>
<li>If it was crushed or crawled on your skin, <strong>wash the area straight away with soap and plenty of water</strong>.</li>
<li><strong>Wash your hands</strong> and keep them away from your eyes.</li>
<li>If any got near your eyes, rinse them gently with clean water.</li>
<li>Wash any clothes or bedding the beetle was crushed on separately.</li>
</ol>` },
      { id: 'treatment', h: 'Treatment', tocLabel: 'Treatment', html: `<ul>
<li><strong>Cool, wet compresses</strong> soothe the burning.</li>
<li>A doctor will usually prescribe a <strong>steroid cream</strong> to calm the inflammation, and an <strong>antihistamine</strong> tablet for itch. See our guide to <a href="/articles/allergies-resdung-antihistamines-malaysia/">antihistamines</a>.</li>
<li><strong>Antibiotics</strong> are only needed if the blisters become infected, with spreading redness, pus or fever.</li>
<li>Don’t scratch, and don’t burst the blisters.</li>
<li>Home remedies such as toothpaste don’t help and can irritate the skin further.</li>
</ul>
<p>Most rashes heal within <strong>1 to 3 weeks</strong>. Dark marks can last for several months, especially on darker skin, and fade slowly.</p>
<p><strong>See a doctor if:</strong></p>
<ul>
<li>your <strong>eye or eyelid</strong> is red, swollen or painful, or your vision is affected</li>
<li>the rash is large, very painful or blistering widely, or on the face or genitals</li>
<li>it looks infected</li>
<li>a child is affected</li>
</ul>
${figure('gp-consultation', 'A doctor talking with a patient across a desk in a consultation room', 'A GP can confirm the rash and prescribe a steroid cream, which helps it settle faster.')}` },
      { id: 'prevention', h: 'Keeping semut charlie away', tocLabel: 'Prevention', html: `<ul>
<li><strong>Switch off lights</strong> you aren’t using at night, especially near open windows, and sleep with the lights off.</li>
<li><strong>Close windows and doors</strong> at night, or fit fine insect screens.</li>
<li>Use warm-coloured or LED lights rather than bright white fluorescent tubes, which attract more beetles.</li>
<li>Use a bed net in hostels and homes where beetles are common.</li>
<li>Shake out bedding, towels and clothes before using them.</li>
<li>Cut back vegetation close to buildings. In outbreaks, local councils and health offices may carry out insecticide spraying.</li>
</ul>
<p>Semut charlie rash isn’t spread from person to person, and it has nothing to do with hygiene. Anyone in an area with the beetles can be affected.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get the rash checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can recognise a semut charlie rash, prescribe a steroid cream and antihistamine, and treat any infection. The rash is often noticed on waking, so our directory lists clinics open early, late and at weekends across Kuala Lumpur, Selangor and other states. For eye symptoms, ask to be seen urgently.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['Does semut charlie bite?', 'No. It doesn’t bite or sting. The rash is caused by a toxin in its body fluid, released when the beetle is crushed or rubbed on the skin.'],
      ['What does a semut charlie rash look like?', 'A burning red streak or patch, often in a line, that appears within 1 to 2 days and then blisters. It is common on the neck, face and arms.'],
      ['What should I do if semut charlie lands on me?', 'Blow or flick it off without crushing it. If it was crushed, wash the skin straight away with soap and water, and wash your hands.'],
      ['How long does a semut charlie rash take to heal?', 'Usually 1 to 3 weeks. Dark marks may take several months to fade.'],
      ['Is semut charlie dangerous for the eyes?', 'Yes. Rubbing the toxin into the eyes can cause painful eyelid swelling and eye inflammation. See a doctor promptly.'],
      ['What cream is used for semut charlie rash?', 'A doctor usually prescribes a steroid cream, sometimes with an antihistamine for itch, and antibiotics only if the blisters get infected.'],
      ['Why are there so many semut charlie at night?', 'They are attracted to bright lights, especially during the rainy season and rice harvest, and fly into homes near fields and vegetation.'],
      ['Is semut charlie rash contagious?', 'No. It comes only from contact with the beetle’s toxin and doesn’t spread from person to person.'],
    ],
    sources: [
      ['Heo et al. — Dermatitis caused by Paederus fuscipes in student hostels in Selangor (SE Asian J Trop Med Public Health, 2013)', 'https://www.tm.mahidol.ac.th/seameo/2013-44-2-full/09-5421-5.pdf'],
      ['Majlis Bandaraya Seberang Perai — Information on the rove beetle (2002)', 'https://www.mbsp.gov.my/buletin/kumbang-rove/roveeng.pdf'],
      ['New Straits Times — Kelantan on alert after 21 reports of rove beetle attacks (Aug 2019)', 'https://www.nst.com.my/amp/news/nation/2019/08/509025/kelantan-alert-after-21-reports-rove-beetle-attacks'],
      ['The Star — A toxic beetle that can cause agonising lesions (Apr 2024)', 'https://www.thestar.com.my/news/nation/2024/04/17/a-toxic-beetle-that-can-cause-agonising-lesions'],
      ['Revista do Instituto de Medicina Tropical de São Paulo — Attraction factors for Paederus fuscipes dispersal in Penang (2017)', 'https://www.scielo.br/j/rimtsp/a/XwKtmV6t5Pf6sZ97XVxTBwC/?lang=en'],
      ['DermNet — Paederus dermatitis (2019)', 'https://dermnetnz.org/topics/paederus-dermatitis'],
      ['Singh and Ali — Paederus dermatitis (Indian J Dermatol Venereol Leprol, 2007)', 'https://ijdvl.com/paederus-dermatitis-2/'],
      ['The Star — Beware of rove beetles (Nov 2016)', 'https://www.thestar.com.my/metro/community/2016/11/16/beware-of-rove-beetles/'],
    ],
    related: ['itchy-skin-eczema-hives-malaysia', 'kurap-panau-fungal-skin-infection-malaysia', 'shingles-kayap-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'skin-tags-keloids-lipomas-moles-malaysia',
    title: 'Skin tags, keloids, lipomas and moles (tahi lalat): what they are, removal options, and which lumps need checking',
    crumb: 'Skin tags, keloids, lipomas and moles',
    desc: 'Skin tags, keloid scars, lipomas and moles (tahi lalat): what causes them, safe removal by a doctor, why keloids come back, and the mole changes that could mean melanoma.',
    excerpt: 'Most skin lumps and bumps are harmless, but some need checking. What skin tags, keloids, lipomas and moles are, how doctors remove them, why you shouldn’t cut them off yourself or have them removed at a beauty salon, and the warning signs of skin cancer.',
    standfirst: 'Skin tags, keloid scars, lipomas and moles are very common and usually harmless. Many people want them removed for comfort or appearance, which a doctor can do safely. But a mole that changes, or a lump that grows, should always be checked, as skin cancer in Asian skin is often found late and in unexpected places, such as the soles of the feet.',
    cat: 'aesthetics', catLabel: 'Aesthetics & skin', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Skin tag', 'Keloid', 'Lipoma'],
    image: 'aesthetic-suite', imageAlt: 'A clean aesthetic treatment room with a treatment bed',
    keyPoints: [
      'Skin tags are small, soft flaps of skin in folds such as the neck and armpits. They are harmless, and are linked to weight, type 2 diabetes and pregnancy.',
      'Keloids are raised scars that grow beyond the original wound. They are more common in Asian skin, and often come back after removal, so treatment usually combines steroid injections and other methods.',
      'Lipomas are soft, movable fatty lumps. See a doctor for any lump that is larger than about 5 cm, hard, fixed, painful or growing.',
      'Check moles using ABCDE: asymmetry, irregular border, several colours, diameter over 6 mm, and evolving (changing). In Asians, melanoma often appears on the soles, palms or under the nails.',
      'In Malaysia, aesthetic procedures must be done by registered, credentialed doctors at licensed clinics, not at beauty salons. Suspicious moles should be cut out and sent to a lab, not lasered.',
    ],
    sections: [
      { id: 'skin-tags', h: 'Skin tags', tocLabel: 'Skin tags', html: `<p>Skin tags are small, soft, skin-coloured or slightly darker growths, from 2 mm to a few centimetres, that hang from the skin on a thin stalk.</p>
<ul>
<li>They form where skin rubs: the <strong>neck, armpits, eyelids, under the breasts, groin</strong> and around the bottom.</li>
<li>They are more common with excess weight, type 2 diabetes or insulin resistance, and in pregnancy. Lots of skin tags can be a reason to check your blood sugar: see our guide to <a href="/articles/normal-blood-sugar-level-malaysia/">normal blood sugar levels</a>.</li>
<li>They are harmless and don’t need removing, but they can catch on clothing or jewellery.</li>
</ul>
<p><strong>Removal:</strong> a doctor can snip them off, freeze them or remove them with heat (cautery), usually in minutes under local anaesthetic. They don’t usually come back, though new ones may form. Removal can leave a small scar or a darker mark, especially on brown skin.</p>
<p><strong>Don’t cut or tie off skin tags yourself</strong>, as they can bleed and become infected. Other growths, such as warts and seborrhoeic keratoses, can look similar. See our guide to <a href="/articles/warts-ketuat-malaysia/">warts</a>. A soft lump around the anus may be a skin tag left after piles: see our guide to <a href="/articles/piles-buasir-malaysia/">piles (buasir)</a>.</p>` },
      { id: 'keloids', h: 'Keloids (parut keloid)', tocLabel: 'Keloids', html: `<p>A keloid is a raised, firm, often shiny scar that keeps growing beyond the edges of the original wound. A <strong>hypertrophic scar</strong> looks similar but stays within the wound and often flattens with time.</p>
<ul>
<li>Keloids are more common in <strong>darker and Asian skin</strong>, usually appear between puberty and 30, and can run in families. DermNet notes they are more common in people of Chinese origin than in those of Malay or Indian origin.</li>
<li>Common sites are the <strong>chest, shoulders, upper back, neck and earlobes</strong>.</li>
<li>They can follow ear piercings, acne, chickenpox, burns, vaccinations or surgery. See our guide to <a href="/articles/acne-malaysia/">acne</a>.</li>
<li>They can be itchy or tender, but aren’t dangerous.</li>
</ul>
<p><strong>Treatment</strong> aims to flatten and soften the scar. No single treatment works best:</p>
<ul>
<li><strong>Steroid injections</strong> into the keloid are the most common, often every 4 to 6 weeks for several months. Up to half come back afterwards.</li>
<li><strong>Silicone gel or sheets</strong> and pressure dressings, used daily for months.</li>
<li><strong>Freezing</strong>, laser or other injections.</li>
<li><strong>Surgery alone often makes the keloid come back bigger</strong>, so it is combined with injections or radiotherapy afterwards.</li>
</ul>
<p><strong>If you are prone to keloids</strong>, avoid tattoos, piercings and cosmetic procedures you don’t need, treat acne early, and tell any doctor before surgery.</p>` },
      { id: 'lipomas', h: 'Lipomas', tocLabel: 'Lipomas', html: `<p>A lipoma is a soft, rubbery, slow-growing lump of fat under the skin that moves slightly when pressed. They are common on the shoulders, back, chest, arms and thighs, and are usually painless and harmless. They are more common in people with high cholesterol, type 2 diabetes or obesity.</p>
<p><strong>Removal</strong> is optional. A doctor can cut it out under local anaesthetic, and it may be sent to a lab to confirm what it is. Liposuction is an option for some, but they come back more often.</p>
<p><strong>See a doctor promptly for a lump that:</strong></p>
<ul>
<li>is <strong>larger than about 5 cm</strong> (a golf ball)</li>
<li>is <strong>growing</strong></li>
<li>is <strong>hard</strong>, fixed, or deep under the muscle</li>
<li>is painful, red or hot</li>
<li>has come back after removal</li>
</ul>
<p>These can occasionally be signs of a rare cancer called a soft tissue sarcoma, and need a scan. Other common lumps include <strong>skin cysts</strong>, which shouldn’t be squeezed, and <a href="/articles/boils-styes-bisul-ketumbit-malaysia/">boils</a>.</p>` },
      { id: 'moles', h: 'Moles (tahi lalat) and the warning signs of melanoma', tocLabel: 'Moles', html: `<p>Most moles are harmless. They are often darker on brown skin, new ones appear in childhood and the teens, and they can darken slightly in pregnancy.</p>
<p><strong>Use ABCDE to check your moles:</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>Sign</th><th>What to look for</th></tr></thead>
<tbody>
<tr><td><strong>A</strong>symmetry</td><td>The two halves look different</td></tr>
<tr><td><strong>B</strong>order</td><td>Ragged, notched or blurred edges</td></tr>
<tr><td><strong>C</strong>olour</td><td>Two or more colours, or uneven shading</td></tr>
<tr><td><strong>D</strong>iameter</td><td>Larger than about 6 mm (a pencil eraser)</td></tr>
<tr><td><strong>E</strong>volving</td><td>Changing in size, shape or colour</td></tr>
</tbody></table></div>
<p>Also see a doctor for a mole that looks different from your others, or that itches, bleeds, crusts or becomes sore.</p>
<p><strong>In Asian skin, look at your feet, hands and nails.</strong> Melanoma on the soles, palms and under the nails (acral melanoma) makes up a larger share of melanomas in Asian people. At Sarawak General Hospital, 62% of melanomas from 2003 to 2009 were acral, mostly on the heel and sole, and most were found at an advanced stage. Check for:</p>
<ul>
<li>a new or changing dark patch on the sole or palm</li>
<li>a <strong>dark streak in a nail</strong> that is wider than 3 mm, uneven or growing, or where the dark colour spreads onto the skin around the nail, not caused by an injury</li>
</ul>
<p>Other skin cancers, basal cell carcinoma and squamous cell carcinoma, often appear as a pearly or scaly lump or a sore that doesn’t heal, usually on the face. In a recent Sarawak study, these were more common than melanoma.</p>
${figure('facial-treatment', 'A doctor examining facial skin in a clinic', 'A doctor can examine a mole with a dermatoscope and decide whether it needs removing and testing.')}` },
      { id: 'removal', h: 'Mole removal: safely, by a doctor', tocLabel: 'Mole removal', html: `<ul>
<li><strong>Suspicious moles are cut out whole</strong> and sent to a laboratory to check for cancer. Lasering or burning away a mole destroys it without testing, which could miss a melanoma.</li>
<li>Harmless raised moles can be shaved off for cosmetic reasons, which may leave a small mark.</li>
<li>Avoid creams or online products that claim to remove moles or skin tags. They can burn the skin and scar, and they leave nothing to test.</li>
</ul>
<p><strong>Choose a registered doctor, not a beauty salon.</strong> Under Malaysian Medical Council and Ministry of Health guidelines, aesthetic medical procedures must be carried out by registered doctors who hold a Letter of Credentialing and Privileging (LCP) for the procedure, at licensed clinics. The Ministry of Health has warned against aesthetic treatments, including lasers, at beauty salons, spas and other unregistered premises, which risk complications and disability. Ask to see the doctor’s practising certificate and credentials.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a lump or mole checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine a lump or mole, remove many skin tags and small lumps, and refer you to a dermatologist or surgeon if needed. Our directory lists GP clinics and aesthetic clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/aesthetic-clinics/', 'Aesthetic clinics']],
    faqs: [
      ['What causes skin tags?', 'Friction where skin rubs together. They are more common with excess weight, type 2 diabetes and in pregnancy, and are harmless.'],
      ['Can I remove a skin tag myself?', 'It isn’t recommended, as it can bleed and get infected. A doctor can remove it quickly by snipping, freezing or cautery.'],
      ['Why do keloids keep coming back?', 'Keloids grow from an overactive healing response. Surgery alone often triggers a bigger keloid, so it is combined with steroid injections or other treatments, and up to half come back.'],
      ['Is a lipoma dangerous?', 'Lipomas are almost always harmless. See a doctor for a lump that is larger than about 5 cm, hard, fixed, painful or growing.'],
      ['How do I know if a mole is cancerous?', 'Use ABCDE: asymmetry, irregular border, several colours, diameter over 6 mm, and evolving. See a doctor for any mole that changes, itches or bleeds.'],
      ['Can melanoma appear on the feet?', 'Yes. In Asian people, melanoma is relatively often found on the soles, palms or under the nails, and is often diagnosed late.'],
      ['Can I have a mole removed at a beauty salon?', 'No. In Malaysia, aesthetic procedures must be done by credentialed doctors at licensed clinics. Suspicious moles should be removed and sent for testing.'],
      ['Should moles be removed by laser?', 'Not if there is any doubt about them. Suspicious moles should be cut out and tested in a lab, which laser removal doesn’t allow.'],
    ],
    sources: [
      ['NHS — Skin tags', 'https://www.nhs.uk/conditions/skin-tags/'],
      ['DermNet — Skin tag', 'https://dermnetnz.org/topics/skin-tag'],
      ['DermNet — Keloid and hypertrophic scar (2022)', 'https://dermnetnz.org/topics/keloid-and-hypertrophic-scar'],
      ['British Association of Dermatologists — Keloids', 'https://www.skinhealthinfo.org.uk/condition/keloids/'],
      ['NHS — Lipoma', 'https://www.nhs.uk/conditions/lipoma/'],
      ['DermNet — Lipoma (Oct 2024)', 'https://dermnetnz.org/topics/lipoma'],
      ['NHS — Melanoma skin cancer: symptoms (Jul 2026)', 'https://www.nhs.uk/conditions/melanoma-skin-cancer/symptoms/'],
      ['American Academy of Dermatology — The ABCDEs of melanoma', 'https://www.aad.org/public/diseases/skin-cancer/find/at-risk/abcdes'],
      ['Melanoma UK — Acral lentiginous melanoma', 'https://melanomauk.org.uk/support/acral-lentiginous-melanoma/'],
      ['Medical Journal of Malaysia — Acral melanoma in Sarawakian patients (2012)', 'https://mail.e-mjm.org/2012/v67n1/Acral_Melanoma.pdf'],
      ['Medical Journal of Malaysia — Cutaneous malignancy at Sarawak General Hospital (2023)', 'https://mail.e-mjm.org/2023/v78s3/PP-87.pdf'],
      ['Malaysian Medical Council — Guidelines on aesthetic medical practice (2015)', 'https://mmc.gov.my/wp-content/uploads/2019/11/MMC-Aesthetic-Guidelines-2015.pdf'],
      ['Malay Mail — Beauty procedures needing an MOH-qualified doctor (Jul 2025)', 'https://www.malaymail.com/news/malaysia/2025/07/31/want-to-get-botox-injections-liposuction-laser-treatments-in-malaysia-heres-the-list-of-beauty-procedures-needing-an-moh-qualified-doctor/185823'],
      ['Malay Mail — Health Ministry cautions public against aesthetic treatments at unregistered premises (Feb 2022)', 'https://www.malaymail.com/news/malaysia/2022/02/10/health-ministry-cautions-public-against-seeking-aesthetic-treatments-at-unr/2040785'],
    ],
    related: ['warts-ketuat-malaysia', 'acne-malaysia', 'skin-boosters-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'gerd-acid-reflux-malaysia',
    title: 'GERD and acid reflux (pedih ulu hati): symptoms, triggers, medicines and when it’s more serious',
    crumb: 'GERD and acid reflux',
    desc: 'GERD and acid reflux (pedih ulu hati): heartburn symptoms, what helps, antacids and PPIs, H. pylori testing, when “gastric” needs a scope, and chest pain that could be the heart.',
    excerpt: 'Burning in the chest after meals, a sour taste or a cough that won’t go away can all be acid reflux. What GERD is, the lifestyle changes with the best evidence, how to use antacids and acid-reducing medicines properly, H. pylori, and the warning signs that need a scope or emergency care.',
    standfirst: 'Gastro-oesophageal reflux disease (GERD) happens when stomach acid flows back up into the food pipe (oesophagus), causing heartburn (pedih ulu hati) and a sour taste. It is becoming more common in Malaysia and Southeast Asia, often alongside rising weight. Most people can control it with lifestyle changes and medicine. But “gastric” symptoms aren’t always reflux, and some need checking.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Gastro-oesophageal reflux disease', 'Heartburn', 'Helicobacter pylori'],
    image: 'medications', imageAlt: 'Blister packs of tablets',
    keyPoints: [
      'Typical GERD symptoms are a burning feeling in the middle of the chest (heartburn) and acid or food coming back up, often after meals or when lying down. Some people have a cough, hoarse voice or sore throat instead.',
      'Chest pain that feels tight or heavy, or spreads to the arm, neck or jaw, could be a heart attack. Call 999.',
      'Losing weight if overweight, not eating 3 hours before bed, raising the head of the bed and stopping smoking all help.',
      'Antacids give quick relief. Proton pump inhibitors (PPIs), taken 30 to 60 minutes before a meal, are the main treatment for frequent symptoms.',
      'See a doctor for difficulty swallowing, weight loss, vomiting blood, black stools, anaemia, or new symptoms after middle age, which may need an endoscopy.',
    ],
    sections: [
      { id: 'what', h: 'What is GERD?', tocLabel: 'What it is', html: `<p>A ring of muscle at the bottom of the food pipe normally stops stomach contents flowing back up. In <strong>GERD</strong>, acid escapes upwards often enough to cause troublesome symptoms or damage. Occasional heartburn after a big meal is common and isn’t GERD.</p>
<p><strong>Symptoms:</strong></p>
<ul>
<li><strong>heartburn</strong> (<em>pedih ulu hati</em>): a burning feeling in the middle of the chest</li>
<li>acid or food coming back up into the throat or mouth (regurgitation), and a sour or bitter taste</li>
<li>symptoms that are worse after eating, when lying down or bending over</li>
<li>a long-lasting cough, hoarse voice, sore throat, hiccups or bad breath</li>
<li>bloating and nausea</li>
</ul>
<p><strong>GERD vs “gastric”:</strong> in Malaysia, “gastric” is often used for any upper tummy discomfort. Doctors call this <strong>dyspepsia</strong>, which can come from reflux, stomach ulcers, H. pylori infection, medicines, or occasionally something more serious. See our guide to <a href="/articles/stomach-pain-gastric-malaysia/">stomach pain and “gastric”</a>.</p>
<p><strong>In Southeast Asia</strong>, a 2021 regional consensus found GERD is becoming more common, but is mostly mild, without visible damage to the food pipe.</p>` },
      { id: 'heart', h: 'Heartburn or heart attack?', tocLabel: 'Heart or heartburn', html: `<p>A heart attack can feel like indigestion or a burning in the chest. <strong>Call <a href="tel:999">999</a></strong> if chest pain:</p>
<ul>
<li>feels tight, heavy or squeezing</li>
<li>spreads to the arm, neck, jaw, back or stomach</li>
<li>comes with breathlessness, sweating, nausea or feeling faint</li>
<li>doesn’t settle quickly, or comes on with exertion</li>
</ul>
<p>Don’t assume it is “gastric”, especially if you have diabetes, high blood pressure, smoke or are older. See our guide to the <a href="/articles/stroke-heart-attack-kuala-lumpur/">warning signs of a heart attack</a>.</p>` },
      { id: 'lifestyle', h: 'Lifestyle changes that help', tocLabel: 'Lifestyle changes', html: `<ul>
<li><strong>Lose weight if you are overweight.</strong> This has the strongest evidence. More than half of Malaysian adults are overweight or obese: see our <a href="/articles/bmi-calculator-malaysia/">BMI calculator</a>.</li>
<li><strong>Don’t eat for 3 hours before bed</strong>, and have smaller meals rather than big ones, especially late at night (including supper).</li>
<li><strong>Raise the head of your bed</strong> by 10 to 20 cm with blocks under the legs, rather than piling up pillows, if symptoms are worse at night.</li>
<li>Sleeping on your <strong>left side</strong> may reduce night-time reflux, though the evidence is limited.</li>
<li><strong>Stop smoking</strong> and cut down on alcohol.</li>
<li><strong>Notice your own triggers.</strong> Common ones include coffee, alcohol, chocolate, tomatoes, fatty and spicy food, but you don’t need to cut out foods that don’t bother you.</li>
<li>Avoid tight belts and waistbands.</li>
</ul>
${figure('morning-walk', 'People walking in a park in the morning', 'Losing weight is the lifestyle change with the strongest evidence for reducing reflux.')}` },
      { id: 'medicines', h: 'Medicines for reflux (ubat gastrik)', tocLabel: 'Medicines', html: `<div class="table-wrap"><table>
<thead><tr><th>Medicine</th><th>How it helps</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Antacids and alginates (liquids, chewable tablets)</td><td>Neutralise acid or form a protective layer on top of the stomach contents. Work within minutes</td><td>Take after meals or when symptoms start. For occasional use. Some contain a lot of sodium, so check with a pharmacist if you have heart or kidney problems</td></tr>
<tr><td>H2 blockers (such as famotidine)</td><td>Reduce acid production</td><td>An alternative for milder or night-time symptoms</td></tr>
<tr><td>Proton pump inhibitors, PPIs (such as omeprazole, esomeprazole, pantoprazole)</td><td>Strongly reduce acid production</td><td>The main treatment for frequent symptoms. Usually a 4 to 8 week course</td></tr>
</tbody></table></div>
<p><strong>Taking PPIs properly:</strong></p>
<ul>
<li>Take them <strong>30 to 60 minutes before breakfast</strong> (or before your evening meal if advised). They work best on an empty stomach before food.</li>
<li>They take a few days to work fully.</li>
<li>After a course, your doctor may try stepping down to the lowest dose that works, or stopping. When you stop, acid symptoms can briefly return (rebound) for a week or two, which doesn’t mean you still need them.</li>
<li>Long-term PPIs are safe for most people who need them. Some studies have linked long-term use to low vitamin B12 and weaker bones, but don’t stop them on your own if a doctor has prescribed them for a reason. Review them with your doctor at least yearly.</li>
<li>Don’t use pharmacy PPIs for more than 2 weeks without seeing a doctor.</li>
</ul>` },
      { id: 'scope', h: 'When you need a scope (endoscopy)', tocLabel: 'Warning signs', html: `<p><strong>See a doctor soon if you have reflux or “gastric” symptoms with:</strong></p>
<ul>
<li>difficulty or pain when swallowing, or food sticking</li>
<li>weight loss without trying</li>
<li>vomiting blood or what looks like coffee grounds, or <strong>black, tarry stools</strong> (go to an emergency department)</li>
<li>anaemia, or feeling very tired and breathless</li>
<li>persistent vomiting</li>
<li><strong>new symptoms starting in middle age</strong>, or a family history of stomach cancer</li>
<li>symptoms that don’t improve with treatment</li>
</ul>
<p>The doctor may refer you for an <strong>endoscopy</strong> (a thin camera passed through the mouth into the stomach). Stomach cancer is more common in Asia than in the West and can occur at a younger age, so Asian experts suggest a lower age threshold for checking new symptoms. Barrett’s oesophagus, a change in the lining of the food pipe caused by long-term reflux, is rare in Southeast Asia.</p>` },
      { id: 'hpylori', h: 'H. pylori', tocLabel: 'H. pylori', html: `<p><em>Helicobacter pylori</em> is a bacterium that infects the stomach lining. It causes most stomach ulcers and is a major risk factor for stomach cancer. Clearing it largely stops ulcers from coming back.</p>
<ul>
<li><strong>In Malaysia</strong>, studies have found infection rates of about 10 to 25% in Malays, 35 to 55% in Chinese, 50 to 60% in Indians, and higher in some indigenous communities in Sabah and Sarawak. Rates have fallen over time.</li>
<li>It is tested with a <strong>breath test</strong> or <strong>stool test</strong>, or a biopsy during endoscopy.</li>
<li><strong>Stop PPIs for at least 2 weeks</strong> and antibiotics for 4 weeks before a breath or stool test, or the result may be falsely negative. Ask your doctor before stopping.</li>
<li>Treatment is a 1 to 2 week course of two antibiotics plus a PPI, followed by a test to confirm it has gone.</li>
</ul>` },
      { id: 'pregnancy', h: 'Reflux in pregnancy', tocLabel: 'In pregnancy', html: `<p>Heartburn is common in pregnancy because of hormones and the growing baby pressing on the stomach. Eat small meals, avoid eating within 3 hours of bed, and raise your head and shoulders at night. Antacids or alginates are often suitable, but check with a pharmacist or doctor first, and take them at least 2 hours apart from iron or folic acid tablets. See our <a href="/articles/pregnancy-due-date-calculator-malaysia/">pregnancy week-by-week guide</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get reflux checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can confirm reflux, prescribe and review acid-reducing medicine, test for H. pylori and refer you for an endoscopy if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is GERD?', 'Gastro-oesophageal reflux disease: stomach acid flowing back into the food pipe often enough to cause heartburn, regurgitation or other symptoms.'],
      ['What does pedih ulu hati mean?', 'It is heartburn: a burning feeling in the middle of the chest or upper tummy, often caused by acid reflux.'],
      ['How can I tell heartburn from a heart attack?', 'You can’t always tell. Chest pain that is tight or heavy, spreads to the arm, neck or jaw, or comes with breathlessness or sweating needs a 999 call.'],
      ['What is the best medicine for GERD?', 'Antacids give quick relief for occasional symptoms. For frequent symptoms, a PPI taken 30 to 60 minutes before a meal for 4 to 8 weeks is the main treatment.'],
      ['Can GERD be cured?', 'Many people control it well with weight loss, meal timing and medicine, and some can stop medicine after a course. It can come back.'],
      ['Is it safe to take PPIs long term?', 'For most people who need them, yes. Have your doctor review them regularly and use the lowest dose that works.'],
      ['How is H. pylori tested?', 'With a breath test, stool test or biopsy during endoscopy. Stop PPIs for 2 weeks before a breath or stool test, after checking with your doctor.'],
      ['When does gastric pain need a scope?', 'With difficulty swallowing, weight loss, vomiting blood, black stools, anaemia, new symptoms in middle age, a family history of stomach cancer, or symptoms that don’t improve.'],
    ],
    sources: [
      ['Goh et al. — Consensus on mild-to-moderate GERD in Southeast Asia (JGH Open, 2021)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8341192/'],
      ['Goh — Epidemiology of Helicobacter pylori infection in Malaysia (Med J Malaysia, 2009)', 'https://mail.e-mjm.org/2009/v64n3/Helicobacter_pylori.pdf'],
      ['American Gastroenterological Association — Clinical practice update on de-prescribing PPIs (2022)', 'https://www.spg.pt/wp-content/uploads/2023/03/AGA-Clinical-Practice-Update-on-De-Prescribing-of-Proton-Pump-Inhibitors-Expert-Review.pdf'],
      ['NHS — Heartburn and acid reflux', 'https://www.nhs.uk/conditions/heartburn-and-acid-reflux/'],
      ['NHS — Omeprazole', 'https://www.nhs.uk/medicines/omeprazole/'],
      ['NHS — Heart attack symptoms', 'https://www.nhs.uk/conditions/heart-attack/symptoms/'],
      ['Patient.info — Helicobacter pylori', 'https://patient.info/digestive-health/dyspepsia-indigestion/helicobacter-pylori'],
      ['World Journal of Clinical Cases — Left lateral sleeping and nocturnal reflux: meta-analysis (2023)', 'https://www.wjgnet.com/2307-8960/abstract/v11/i30/7329.htm'],
      ['CodeBlue — NHMS 2023: over half of Malaysian adults overweight or obese (May 2024)', 'https://codeblue.galencentre.org/2024/05/nhms-2023-over-half-of-malaysian-adults-overweight-or-obese/'],
      ['Sinar Daily — “Gastric” could actually be stomach cancer (2026)', 'https://www.sinardaily.my/article/733571/focus/national/gastric-could-actually-be-stomach-cancer---dr-sou-jing-kimnbsp'],
      ['NHS — Indigestion and heartburn in pregnancy', 'https://www.nhs.uk/pregnancy/related-conditions/common-symptoms/indigestion-and-heartburn/'],
    ],
    related: ['stomach-pain-gastric-malaysia', 'stroke-heart-attack-kuala-lumpur', 'bmi-calculator-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'allergies-resdung-antihistamines-malaysia',
    title: 'Allergies and resdung (allergic rhinitis): antihistamines explained, nasal sprays and sinusitis',
    crumb: 'Allergies, resdung and antihistamines',
    desc: 'Resdung (allergic rhinitis) symptoms and triggers, cetirizine vs loratadine vs chlorpheniramine, steroid nasal sprays, decongestant limits, dust mites and when sinusitis needs a doctor.',
    excerpt: 'Constant sneezing, a runny or blocked nose and itchy eyes are often allergies, and in Malaysia the main culprit is house dust mites. What resdung is, how the common antihistamines compare, why a steroid nasal spray often works better, the decongestant trap, and how to tell sinusitis from allergies.',
    standfirst: 'Allergic rhinitis, often called resdung in Malaysia, is inflammation inside the nose caused by an allergy. In Malaysia’s humid climate it tends to last all year, mainly because of house dust mites. Antihistamines such as cetirizine, loratadine and chlorpheniramine are among the most searched medicines in the country, but they aren’t all the same, and they aren’t always the best treatment.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Allergic rhinitis', 'Resdung', 'Antihistamines'],
    image: 'cold-flu', imageAlt: 'Tissues, nasal spray and a notebook on a desk',
    keyPoints: [
      'Allergic rhinitis causes sneezing, an itchy, runny or blocked nose and itchy, watery eyes. In Malaysia, house dust mites are the most common trigger, followed by cockroaches and pet fur.',
      'Non-drowsy antihistamines such as cetirizine and loratadine work about equally well. Cetirizine is a little more likely to cause sleepiness.',
      'Chlorpheniramine is an older antihistamine that causes drowsiness, so it isn’t recommended for allergic rhinitis by Malaysian allergy specialists. Don’t drive after taking it.',
      'A steroid nasal spray works better than antihistamine tablets for a blocked nose and persistent symptoms, but takes 1 to 2 weeks of regular use for full effect.',
      'Decongestant nasal sprays should be used for no more than 5 to 7 days, or they can make the blockage worse.',
    ],
    sections: [
      { id: 'what', h: 'What is resdung (allergic rhinitis)?', tocLabel: 'What it is', html: `<p>In allergic rhinitis, the immune system overreacts to harmless particles in the air, called allergens, causing inflammation in the nose.</p>
<p><strong>Symptoms</strong> start within minutes of contact:</p>
<ul>
<li>sneezing, often in bouts</li>
<li>an itchy, runny or blocked nose</li>
<li>itchy, red, watery eyes. See our guide to <a href="/articles/conjunctivitis-red-eyes-malaysia/">red eyes</a>.</li>
<li>an itchy throat or roof of the mouth, and a cough from mucus dripping down the throat</li>
<li>tiredness and poor sleep, which can affect work and school</li>
</ul>
<p><strong>In Malaysia</strong>, symptoms often last all year rather than coming in seasons. The Malaysian Society of Allergy and Immunology says the humid climate favours <strong>house dust mites</strong>, and cockroaches and animal fur are also major allergens. In a study of children with rhinitis at Hospital UKM, about 7 in 10 were allergic to house dust mites.</p>
<p>Allergic rhinitis often goes with <strong>asthma and eczema</strong>, and can make asthma harder to control. See our guide to <a href="/articles/itchy-skin-eczema-hives-malaysia/">eczema and hives</a>. Haze and smoke can irritate the nose and make symptoms worse: see our <a href="/articles/haze-air-quality-klang-valley/">haze guide</a>.</p>` },
      { id: 'antihistamines', h: 'Antihistamines compared: cetirizine, loratadine and chlorpheniramine', tocLabel: 'Antihistamines', html: `<p>Antihistamines block histamine, a chemical released during an allergic reaction. They help sneezing, itching, a runny nose and itchy eyes, and also <a href="/articles/itchy-skin-eczema-hives-malaysia/">hives</a>, but they don’t do much for a blocked nose.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Cetirizine</th><th>Loratadine</th><th>Chlorpheniramine</th></tr></thead>
<tbody>
<tr><td>Type</td><td>Non-drowsy (second generation)</td><td>Non-drowsy (second generation)</td><td>Drowsy (first generation)</td></tr>
<tr><td>Usual adult dose</td><td>10 mg once a day</td><td>10 mg once a day</td><td>4 mg every 4 to 6 hours, no more than 24 mg a day</td></tr>
<tr><td>Drowsiness</td><td>Can cause sleepiness in some people, more than loratadine</td><td>Least likely to cause sleepiness</td><td>Often causes drowsiness. Don’t drive or operate machinery</td></tr>
<tr><td>Notes</td><td>Works within about an hour</td><td>Similar effect to cetirizine</td><td>Not recommended for allergic rhinitis by Malaysian allergy specialists</td></tr>
</tbody></table></div>
<ul>
<li>Other non-drowsy antihistamines include <strong>fexofenadine, desloratadine and levocetirizine</strong>. According to the NHS, they all seem to work about as well as each other, so the choice depends on side effects and what suits you.</li>
<li>Avoid alcohol with antihistamines, as it increases drowsiness.</li>
<li><strong>Children:</strong> doses depend on age and weight, and young children usually need a liquid. Malaysia’s Drug Control Authority says cough and cold medicines containing antihistamines shouldn’t be given to children under 2, and only on a doctor’s or pharmacist’s advice for those aged 2 to 6. Ask a pharmacist for the right product and dose.</li>
<li><strong>Pregnancy and breastfeeding:</strong> the NHS considers cetirizine and loratadine reasonable choices, but some manufacturers advise avoiding them, so check with your doctor or pharmacist first.</li>
<li>In Malaysia, these antihistamines are supplied by pharmacists, without a doctor’s prescription.</li>
</ul>` },
      { id: 'sprays', h: 'Nasal sprays and rinses', tocLabel: 'Nasal sprays', html: `<p><strong>Steroid nasal sprays</strong> are the most effective treatment for persistent or moderate to severe allergic rhinitis, and work better than antihistamine tablets for a blocked nose. The Malaysian allergy consensus recommends them as a main treatment.</p>
<ul>
<li>They start working within hours, but give their <strong>full effect after 1 to 2 weeks of daily use</strong>, so keep using them.</li>
<li>Side effects are mostly local, such as dryness and the occasional nosebleed.</li>
<li><strong>How to use:</strong> blow your nose, tilt your head slightly forward, close one nostril, put the nozzle in the other nostril pointing slightly outwards (away from the middle of the nose), spray while breathing in gently, then breathe out through your mouth.</li>
<li>See a doctor if there is no improvement after 1 to 2 weeks.</li>
</ul>
<p><strong>Decongestant nasal sprays</strong> (such as xylometazoline) clear a blocked nose quickly, but <strong>don’t use them for more than 5 to 7 days</strong>. Longer use can cause rebound congestion that makes the blockage worse. They aren’t suitable for young children. Oral decongestant tablets aren’t suitable for young children or in pregnancy, and people with high blood pressure should ask a pharmacist first.</p>
<p><strong>Salt-water (saline) rinses</strong> or sprays wash out allergens and mucus and are safe to use regularly.</p>` },
      { id: 'avoid', h: 'Reducing dust mites and other triggers', tocLabel: 'Avoiding triggers', html: `<ul>
<li>Use allergy-proof covers on mattresses and pillows.</li>
<li>Wash bedding weekly in <strong>hot water (60°C or above)</strong>.</li>
<li>Dust with a damp cloth and vacuum regularly, ideally with a HEPA filter. Reduce soft toys, carpets and clutter in the bedroom.</li>
<li>Keep the home dry and well ventilated, and deal with damp and mould.</li>
<li>Keep pets out of the bedroom, and control cockroaches.</li>
</ul>
<p><strong>Allergy testing</strong> (a skin prick test or blood test) can identify your triggers. For severe allergic rhinitis that doesn’t improve with a steroid spray and antihistamines, specialists may offer <strong>allergen immunotherapy</strong>, injections or tablets under the tongue that gradually reduce the allergy over several years.</p>
${figure('kl-twin-towers-dusk', 'Kuala Lumpur skyline and the Petronas Twin Towers under a hazy sky at dusk', 'Haze doesn’t cause allergies, but it can irritate the nose and make allergic rhinitis worse.')}` },
      { id: 'sinusitis', h: 'Sinusitis or allergies?', tocLabel: 'Sinusitis', html: `<p><strong>Sinusitis</strong> is inflammation of the sinuses, usually after a cold. It causes a blocked nose, thick yellow or green mucus, pain or pressure around the cheeks, eyes or forehead, a reduced sense of smell, and sometimes fever.</p>
<ul>
<li>Most sinusitis is caused by viruses and <strong>clears within 2 to 4 weeks without antibiotics</strong>. Only a small minority of cases are bacterial.</li>
<li>Saline rinses, painkillers and a steroid nasal spray can help.</li>
<li>Antibiotics are considered for severe symptoms, or symptoms lasting more than about 10 days and getting worse.</li>
<li>See a doctor if symptoms last more than 3 weeks or keep coming back. Sinusitis lasting more than 3 months may need an ENT specialist.</li>
</ul>
<p><strong>Get urgent help</strong> for swelling or redness around the eye, double or reduced vision, a severe headache, a stiff neck, confusion or a very high fever.</p>
<p>A cold usually clears in about a week. Allergies tend to cause more sneezing and itching, clear runny mucus, no fever, and last as long as you are exposed to the trigger. See also our guides to <a href="/articles/influenza-a-malaysia/">flu</a> and <a href="/articles/persistent-cough-malaysia/">a cough that won’t go away</a>.</p>` },
      { id: 'anaphylaxis', h: 'Severe allergic reactions (anaphylaxis)', tocLabel: 'Anaphylaxis', html: `<p>Call <a href="tel:999">999</a> immediately for swelling of the lips, tongue or throat, difficulty breathing or wheezing, difficulty swallowing, feeling faint, or pale or blue lips, especially after a food, medicine or insect sting. If the person has an adrenaline auto-injector, use it straight away, then lie them down with their legs raised. Antihistamine tablets are not enough for anaphylaxis.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get allergy advice',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can confirm allergic rhinitis, recommend the right antihistamine or steroid spray, treat sinusitis and refer you for allergy testing or to an ENT specialist. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is resdung in English?', 'Resdung usually refers to allergic rhinitis: sneezing, an itchy, runny or blocked nose caused by an allergy, often to house dust mites.'],
      ['What is cetirizine used for?', 'It is a non-drowsy antihistamine for allergic rhinitis, hives and itchy skin. The usual adult dose is 10 mg once a day.'],
      ['Cetirizine or loratadine: which is better?', 'They work about equally well. Cetirizine is slightly more likely to cause sleepiness, so loratadine may suit people who need to stay alert.'],
      ['Does chlorpheniramine make you sleepy?', 'Yes, it is an older antihistamine that often causes drowsiness. Don’t drive or operate machinery after taking it.'],
      ['What is the best treatment for a blocked nose from allergies?', 'A steroid nasal spray used every day. It takes 1 to 2 weeks to work fully. Antihistamine tablets help less with blockage.'],
      ['How long can I use a decongestant nasal spray?', 'No more than 5 to 7 days. Longer use can cause rebound congestion that makes your nose more blocked.'],
      ['Do I need antibiotics for sinusitis?', 'Usually not. Most sinusitis is viral and clears within 2 to 4 weeks. Antibiotics are considered for severe or worsening symptoms after about 10 days.'],
      ['Can I take antihistamines while pregnant?', 'Some, such as loratadine and cetirizine, are often considered suitable, but check with your doctor or pharmacist first.'],
    ],
    sources: [
      ['Abdullah et al. — Pharmacological management of allergic rhinitis: a consensus statement from the Malaysian Society of Allergy and Immunology (J Asthma Allergy, 2022)', 'https://dovepress.com/pharmacological-management-of-allergic-rhinitis-a-consensus-statement--peer-reviewed-fulltext-article-JAA'],
      ['Gendeh et al. — Atopic sensitisation of children with rhinitis in Malaysia (Med J Malaysia, 2004)', 'https://mail.e-mjm.org/2004/v59n4/Rhinitis.pdf'],
      ['NHS — Allergic rhinitis (Jan 2026)', 'https://www.nhs.uk/conditions/allergic-rhinitis/'],
      ['NHS — Common questions about cetirizine (Feb 2025)', 'https://www.nhs.uk/medicines/cetirizine/common-questions-about-cetirizine/'],
      ['NHS — How and when to take loratadine (Apr 2025)', 'https://www.nhs.uk/medicines/loratadine/how-and-when-to-take-loratadine/'],
      ['NHS — How and when to take chlorphenamine (May 2025)', 'https://www.nhs.uk/medicines/chlorphenamine-including-piriton/how-and-when-to-take-chlorphenamine/'],
      ['NHS — How and when to use beclometasone nasal spray (Oct 2026)', 'https://www.nhs.uk/medicines/beclometasone-nasal-spray/how-and-when-to-use-beclometasone-nasal-spray/'],
      ['The Star — Cough and cold medicines for children to be limited (Jul 2009)', 'https://www.thestar.com.my/news/nation/2009/07/09/cough-and-cold-medicines-for-children-to-be-limited'],
      ['Ministry of Health Malaysia, Pharmaceutical Services — Group B and C poisons FAQ', 'https://pharmacy.moh.gov.my/en/node/3272'],
      ['NHS — Sinusitis (Jan 2024)', 'https://www.nhs.uk/conditions/sinusitis-sinus-infection/'],
      ['Nottinghamshire Area Prescribing Committee — Acute sinusitis guidance, based on NICE NG79 (2025)', 'https://nottsapc.azurewebsites.net/media/i2jdjgxz/acute-sinusitis.pdf'],
      ['NHS — Anaphylaxis', 'https://www.nhs.uk/conditions/anaphylaxis/'],
    ],
    related: ['malay-medical-terms-in-english', 'itchy-skin-eczema-hives-malaysia', 'haze-air-quality-klang-valley'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'slipped-disc-sciatica-malaysia',
    title: 'Slipped disc and sciatica (sakit pinggang): symptoms, what helps, and red flags',
    crumb: 'Slipped disc and sciatica',
    desc: 'Slipped disc and sciatica: symptoms, why staying active beats bed rest, which painkillers help, physiotherapy, injections and surgery, and the red flags that need emergency care.',
    excerpt: 'Back pain that shoots down your leg is often sciatica from a slipped disc. Most people recover within weeks to a few months without surgery. What a slipped disc is, what actually helps, when scans and surgery are needed, the emergency signs not to ignore, and why to avoid unlicensed bone-setting.',
    standfirst: 'A slipped disc happens when the soft centre of one of the cushions between the bones of the spine bulges out and presses on a nerve. In the lower back this causes sciatica: pain, tingling or numbness running down the buttock and leg. It can be very painful, but most people get better within weeks to a few months by staying active, with time and simple treatment.',
    cat: 'guides', catLabel: 'Guides', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Herniated disc', 'Sciatica', 'Low back pain'],
    image: 'physio-weights', imageAlt: 'A pair of small blue dumbbells, trainers and an exercise ball',
    keyPoints: [
      'A slipped (herniated or prolapsed) disc doesn’t actually slip: its soft centre bulges through the tough outer layer. Many people have disc bulges on a scan without any pain.',
      'Sciatica is pain, tingling or numbness down the back of one leg, often worse than the back pain, and worse with coughing or sneezing.',
      'Most people improve within a few weeks to a few months. Keep moving: bed rest doesn’t help.',
      'Scans usually aren’t needed at first. Physiotherapy and exercise are the main treatments, with injections or surgery for severe pain that doesn’t improve.',
      'Go to an emergency department for numbness around the bottom or genitals, problems passing urine or controlling the bladder or bowels, or weakness in both legs.',
    ],
    sections: [
      { id: 'what', h: 'What is a slipped disc?', tocLabel: 'What it is', html: `<p>Between each bone of the spine is a disc, a cushion with a tough outer ring and a soft, jelly-like centre. In a <strong>slipped disc</strong> (also called a herniated or prolapsed disc), the centre bulges or pushes through the outer ring. It most often happens in the lower back, at the two lowest levels, and less often in the neck.</p>
<p>It only causes symptoms if it presses on or irritates a nerve. Disc bulges are very common with age: in one large review of scans, they were seen in 30% of 20-year-olds and 84% of 80-year-olds <strong>with no back pain at all</strong>. So a bulge on a scan doesn’t always explain pain.</p>
<p><strong>Low back pain is very common in Malaysia.</strong> A 2023 review of Malaysian studies found high rates among nurses and drivers in particular, linked to age, weight, heavy lifting, posture and long working hours.</p>` },
      { id: 'symptoms', h: 'Symptoms of a slipped disc and sciatica', tocLabel: 'Symptoms', html: `<ul>
<li>lower back pain, sometimes sudden after lifting or bending</li>
<li><strong>sciatica</strong>: pain in the buttock and down the back of one leg, sometimes into the foot. It can be sharp, shooting or burning, and the leg pain is often worse than the back pain.</li>
<li>tingling, pins and needles or numbness in the leg or foot</li>
<li>weakness in the leg or foot</li>
<li>pain that is worse when coughing, sneezing or sitting for a long time</li>
</ul>
<p>A slipped disc in the <strong>neck</strong> causes neck pain with pain, tingling or weakness down the arm and into the hand.</p>` },
      { id: 'red-flags', h: 'Red flags: when to go to hospital', tocLabel: 'Red flags', html: `<p><strong>Go to an emergency department straight away (don’t drive yourself) if you have back pain with:</strong></p>
<ul>
<li><strong>numbness or tingling around your bottom, genitals or inner thighs</strong> (saddle numbness)</li>
<li>difficulty passing urine, or loss of control of your bladder or bowels</li>
<li>sciatica in <strong>both legs</strong>, or severe or worsening weakness in your legs or feet</li>
<li>back pain after a serious fall or accident</li>
</ul>
<p>These can be signs of <strong>cauda equina syndrome</strong>, where the nerves at the bottom of the spine are badly squashed. It needs emergency surgery to prevent permanent damage.</p>
<p><strong>See a doctor soon</strong> for back pain with fever, unexplained weight loss, a history of cancer, a swelling in the back, or pain that is worse at night or doesn’t ease with rest. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
      { id: 'self-care', h: 'What helps', tocLabel: 'What helps', html: `<ul>
<li><strong>Stay active.</strong> Keep moving and carry on with daily activities as much as you can. Bed rest doesn’t speed recovery and can slow it.</li>
<li><strong>Avoid sitting or lying still for long</strong>. Get up and walk regularly.</li>
<li><strong>Heat</strong>, such as a heat pack or warm shower, can ease muscle spasm.</li>
<li><strong>Gentle exercise and stretches</strong>, and return to work as soon as you can, with adjustments if needed.</li>
</ul>
<p><strong>Painkillers:</strong> the UK’s NICE guideline advises against paracetamol on its own for low back pain, as it doesn’t help much. Anti-inflammatory painkillers (NSAIDs) can help back pain at the lowest dose for the shortest time, though the benefit for sciatica is limited. Avoid long-term strong opioid painkillers. NICE also advises against nerve-pain medicines such as gabapentin and pregabalin for sciatica, as there is no overall evidence of benefit and some evidence of harm. Discuss options with your doctor.</p>
${figure('yoga-balance', 'A woman holding a yoga balance pose on a rock by the sea', 'Staying active and exercising helps recovery more than bed rest.')}` },
      { id: 'treatment', h: 'Physiotherapy, injections and surgery', tocLabel: 'Treatment', html: `<ul>
<li><strong>Scans:</strong> an MRI usually isn’t needed in the first weeks unless there are red flags. It is used if symptoms don’t improve, or if an injection or surgery is being considered.</li>
<li><strong>Physiotherapy and exercise</strong> are the main treatment. Hands-on therapy such as manipulation or massage may help as part of an exercise programme, not on its own. Back belts and corsets aren’t recommended.</li>
<li><strong>Epidural steroid injection:</strong> an injection near the nerve may be considered for severe, acute sciatica.</li>
<li><strong>Surgery</strong> (usually a microdiscectomy, removing the part of the disc pressing on the nerve) is considered when severe leg pain doesn’t improve with other treatment, or urgently for red flags. In a major trial, early surgery relieved leg pain faster, but after a year outcomes were similar to waiting, and most people in both groups had recovered.</li>
</ul>
<p><strong>In Malaysia</strong>, care usually starts with a GP, who can refer you to physiotherapy at a government health clinic or hospital, or to an orthopaedic or spine specialist.</p>
<p><strong>Be cautious with unlicensed bone-setting or forceful manipulation</strong> for a suspected slipped disc. A Malaysian orthopaedic surgeon has warned that patients have been made worse, with a risk of nerve damage. See a doctor first.</p>` },
      { id: 'prevention', h: 'Preventing back problems', tocLabel: 'Prevention', html: `<ul>
<li>Lift with your legs: bend your knees, keep the load close to your body, and avoid twisting.</li>
<li>Take regular breaks from sitting and driving, and use back support when seated.</li>
<li>Stay active and keep to a healthy weight. See our <a href="/articles/bmi-calculator-malaysia/">BMI calculator</a>.</li>
<li>Stop smoking, which is linked to disc problems.</li>
</ul>
<p>Workers injured at work may be covered by PERKESO, which runs rehabilitation and return-to-work services.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get back pain checked',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can examine you, check for red flags, advise on pain relief, issue an MC if needed and refer you for physiotherapy, a scan or a specialist. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What is a slipped disc?', 'A bulge of the soft centre of a spinal disc through its outer layer, which can press on a nerve. It is also called a herniated or prolapsed disc.'],
      ['What are the signs of a slipped disc?', 'Back pain with pain, tingling or numbness running down one leg (sciatica), often worse when coughing, sneezing or sitting.'],
      ['How long does a slipped disc take to heal?', 'Most people improve within a few weeks to a few months without surgery.'],
      ['Should I rest in bed with a slipped disc?', 'No. Staying as active as you can helps more than bed rest. Avoid sitting or lying still for long periods.'],
      ['Do I need an MRI for sciatica?', 'Usually not at first. An MRI is used if there are red flags, if symptoms don’t improve, or before an injection or surgery.'],
      ['When does a slipped disc need surgery?', 'When severe leg pain or weakness doesn’t improve with other treatment, or urgently for red flags such as bladder or bowel problems.'],
      ['When is back pain an emergency?', 'With numbness around the bottom or genitals, problems passing urine or controlling the bladder or bowels, weakness in both legs, or after a serious accident.'],
      ['Is massage or bone-setting good for a slipped disc?', 'Unlicensed bone-setting or forceful manipulation can make things worse. Hands-on therapy may help as part of an exercise programme from a qualified physiotherapist.'],
    ],
    sources: [
      ['NICE — Low back pain and sciatica in over 16s (NG59), UK Government Web Archive copy (updated Jul 2026)', 'https://tnaqa.mirrorweb.com/ukgwa/20260505171830mp_/http://www.nice.org.uk/guidance/ng59/chapter/Recommendations'],
      ['NHS — Slipped disc (Apr 2024)', 'https://www.nhs.uk/conditions/slipped-disc/'],
      ['NHS — Sciatica (Dec 2024)', 'https://www.nhs.uk/conditions/sciatica/'],
      ['American Academy of Orthopaedic Surgeons — Herniated disk in the lower back', 'https://www.orthoinfo.org/en/diseases--conditions/herniated-disk-in-the-lower-back/'],
      ['Cochrane — Advice to rest in bed versus advice to stay active for low back pain and sciatica (2022)', 'https://www.cochrane.org/ms/CD007612/BACK_nasihat-untuk-berehat-di-atas-katil-berbanding-dengan-nasihat-untuk-terus-aktif-bagi-pengidap-sakit'],
      ['Abas et al. — Prevalence and risk factors of low back pain in Malaysia: a scoping review (MJMS, 2023)', 'https://pubmed.ncbi.nlm.nih.gov/37425379/'],
      ['Brinjikji et al. — Imaging features of spine degeneration in people without symptoms (AJNR, 2015)', 'https://pubmed.ncbi.nlm.nih.gov/25430861/'],
      ['Peul et al. — Surgery versus prolonged conservative treatment for sciatica (NEJM, 2007)', 'https://pubmed.ncbi.nlm.nih.gov/17538084/'],
      ['Island Hospital — Slipped discs in Malaysia (Aug 2024)', 'https://islandhospital.com/slipped-disc-malaysia/'],
      ['Utusan Malaysia — Unlicensed bone-setting can cause paralysis (Mar 2025)', 'https://www.utusan.com.my/gaya/2025/03/guna-khidmat-bone-setting-tidak-bertauliah-boleh-sebabkan-lumpuh/'],
      ['The Star — Offering a second chance to injured workers (Apr 2026)', 'https://www.thestar.com.my/lifestyle/health/health-matters/2026/04/27/offering-a-second-chanceto-injured-workers'],
    ],
    related: ['frozen-shoulder-pain-malaysia', 'clinic-or-emergency-department', 'medical-certificate-mc-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'g6pd-deficiency-malaysia',
    title: 'G6PD deficiency in Malaysia: newborn screening, jaundice, what to avoid, and living with it',
    crumb: 'G6PD deficiency',
    desc: 'G6PD deficiency (G6PD maksud): newborn screening in Malaysia, jaundice in babies, the medicines and triggers to avoid such as fava beans and mothballs, food myths, and warning signs.',
    excerpt: 'About 3 in 100 Malaysian babies are born with G6PD deficiency. What it means, why newborns are watched closely for jaundice, which medicines and substances really need avoiding (mothballs and fava beans top the list), which food lists are myths, and the warning signs of a crisis.',
    standfirst: 'G6PD deficiency is an inherited condition in which red blood cells lack enough of an enzyme that protects them. Most of the time people with it are completely well, but certain medicines, chemicals, foods and infections can make the red cells break down suddenly. Every baby born in Malaysia is screened for it at birth.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['G6PD deficiency', 'Neonatal jaundice', 'Haemolysis'],
    image: 'mother-child', imageAlt: 'A mother and daughter sitting together',
    keyPoints: [
      'G6PD deficiency affects about 3 in 100 Malaysian newborns. It is more common in boys, and in Chinese and Malay than Indian families, but girls can be affected too.',
      'All babies in Malaysia are screened using blood from the umbilical cord at birth. The result is recorded in the child’s health record book.',
      'Babies with G6PD deficiency are more likely to develop severe jaundice, so they are monitored closely in the first days of life.',
      'The best-proven triggers are fava beans (broad beans), naphthalene mothballs, henna, infections and a short list of medicines. Many food “avoid lists” circulating online have little evidence.',
      'Tell every doctor and pharmacist that you or your child has G6PD deficiency before taking any new medicine or supplement.',
    ],
    sections: [
      { id: 'what', h: 'What is G6PD deficiency? (G6PD maksud)', tocLabel: 'What it is', html: `<p>G6PD (glucose-6-phosphate dehydrogenase) is an enzyme that protects red blood cells from damage. People with G6PD deficiency have too little of it, so when they are exposed to certain triggers, their red cells can break down quickly. This is called <strong>haemolysis</strong>, and it causes anaemia and jaundice.</p>
<ul>
<li>It is <strong>inherited</strong> through a gene on the X chromosome, so it is more common and usually more severe in boys. Girls who carry the gene can also be affected, sometimes as much as boys.</li>
<li>Worldwide, at least 400 million people have it. In Malaysia, studies put it at about 3 to 4% of newborns, more common in Chinese and Malay than Indian families.</li>
<li>It is lifelong, but it isn’t a disease you “catch”, and most people with it live completely normal, healthy lives.</li>
</ul>` },
      { id: 'screening', h: 'Newborn screening in Malaysia', tocLabel: 'Newborn screening', html: `<ul>
<li>Malaysia has screened newborns for G6PD deficiency since 1986.</li>
<li>Under the Ministry of Health programme, <strong>blood is taken from the umbilical cord right after birth</strong> and tested for G6PD deficiency, together with congenital hypothyroidism.</li>
<li>The result is recorded in your child’s health record book (<em>Buku Rekod Kesihatan Kanak-kanak</em>). Keep it safe and show it to doctors.</li>
<li>The standard screening test can miss <strong>partial deficiency</strong>, which is more common in girls. If a girl has unexplained jaundice or anaemia, or there is a family history, ask the doctor whether more testing is needed.</li>
</ul>` },
      { id: 'jaundice', h: 'G6PD deficiency and jaundice in babies', tocLabel: 'Jaundice in babies', html: `<p>Babies with G6PD deficiency are more likely to develop <strong>severe newborn jaundice</strong>. Untreated, very high levels of bilirubin (the yellow pigment) can cause brain damage (kernicterus) and hearing loss. That is why these babies are watched closely and have their bilirubin checked in the first days of life, and may stay in hospital a little longer. Jaundice is treated with light therapy (phototherapy).</p>
<p><strong>See a doctor urgently if your baby:</strong></p>
<ul>
<li>has yellow skin or eyes that are spreading or getting deeper</li>
<li>is very sleepy, floppy or feeding poorly</li>
<li>looks pale, has dark urine, or has any breathing difficulty or fits</li>
</ul>
<p><strong>For babies with G6PD deficiency:</strong></p>
<ul>
<li>Don’t store the baby’s clothes, or yours, with <strong>mothballs (naphthalene, ubat gegat)</strong>, and don’t use them in the home.</li>
<li>Avoid <strong>henna</strong> on the baby or on a breastfeeding mother.</li>
<li>Check with a doctor before giving the baby, or taking while breastfeeding, any herbal or traditional medicine. Some Chinese herbal medicines, such as those containing huang lian (Coptis), have been linked to severe jaundice in babies with G6PD deficiency.</li>
</ul>
<p>Breastfeeding mothers are generally advised to avoid the same triggers as the baby. See also our guide to <a href="/articles/fever-in-children-malaysia/">fever in children</a>, as infections can also trigger haemolysis.</p>` },
      { id: 'avoid', h: 'What to avoid', tocLabel: 'What to avoid', html: `<p>A 2016 systematic review by a Malaysian-led team found that the triggers with consistent evidence are:</p>
<ul>
<li><strong>Fava beans</strong> (broad beans, sometimes called <em>kacang parang</em>), including foods made from fava bean flour or protein. Cooking doesn’t make them safe. Check labels.</li>
<li><strong>Naphthalene</strong> mothballs</li>
<li><strong>Henna</strong></li>
<li>certain chemical dyes</li>
</ul>
<p><strong>Infections</strong> are also a common trigger, so see a doctor if a person with G6PD deficiency is unwell with a fever.</p>
<p><strong>Medicines:</strong> an international pharmacogenetics guideline (CPIC) lists a small number of medicines as high risk, including <strong>dapsone, primaquine, tafenoquine, rasburicase and methylene blue</strong>, with nitrofurantoin to be used with caution. Many other medicines that appear on older lists, including some antibiotics and antimalarials, are now considered low risk at normal doses, but hospital lists in Malaysia are often more cautious. Always tell your doctor and pharmacist, and let them decide. Don’t avoid a needed medicine on your own.</p>
<p><strong>Food myths:</strong> lists circulating online often tell people with G6PD deficiency to avoid soya, bitter gourd, blueberries, menthol and many other foods. The review found no good evidence for most of these. Vitamin C at normal doses is fine. Only extremely high doses have caused problems.</p>
${figure('blood-sample', 'A blood sample tube being prepared for testing', 'All newborns in Malaysia are screened for G6PD deficiency using cord blood taken at birth.')}` },
      { id: 'crisis', h: 'Signs of a haemolytic crisis', tocLabel: 'Warning signs', html: `<p>After exposure to a trigger, symptoms usually develop within hours to 2 to 3 days:</p>
<ul>
<li>sudden <strong>paleness</strong>, tiredness and weakness</li>
<li><strong>dark, tea- or cola-coloured urine</strong></li>
<li>yellow skin or eyes (jaundice)</li>
<li>a fast heartbeat or breathlessness</li>
<li>tummy or back pain</li>
</ul>
<p>This needs <strong>urgent medical care</strong>. Go to an emergency department, especially for a child. Most people recover fully once the trigger is removed, but some need a blood transfusion. See our guide on <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a>.</p>` },
      { id: 'living', h: 'Living with G6PD deficiency', tocLabel: 'Living with it', html: `<ul>
<li>Most people with G6PD deficiency are healthy and never have a crisis.</li>
<li><strong>Tell every doctor, dentist and pharmacist</strong> before any new medicine, including over-the-counter, herbal and traditional remedies and supplements. Some children carry a G6PD alert card.</li>
<li>Avoid fava beans, mothballs and henna.</li>
<li>Tell your obstetrician in a future pregnancy, so the baby can be monitored.</li>
</ul>
<p>G6PD deficiency is different from thalassaemia, another inherited red blood cell condition common in Malaysia. See our guide to <a href="/articles/thalassaemia-screening-malaysia/">thalassaemia screening</a>.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get advice',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'A GP can check whether a medicine is safe with G6PD deficiency, assess jaundice or anaemia, and refer you to a paediatrician or haematologist if needed. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open 24 hours.',
    clinicLinks: [['/clinics/near-me/', 'Clinics near me'], ['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What does G6PD deficiency mean?', 'It means the red blood cells lack enough of the G6PD enzyme, so they can break down when exposed to certain triggers such as fava beans, mothballs, some medicines or infections.'],
      ['Is G6PD deficiency serious?', 'Most people live normal, healthy lives. The main risks are severe jaundice in newborns and sudden anaemia after a trigger, both of which can be prevented or treated.'],
      ['How is G6PD deficiency tested in Malaysia?', 'All newborns are screened using blood from the umbilical cord at birth, and the result is recorded in the child’s health record book.'],
      ['What foods should someone with G6PD deficiency avoid?', 'Mainly fava beans (broad beans) and foods made from them. Many other foods on online lists have little evidence behind them.'],
      ['Which medicines should be avoided with G6PD deficiency?', 'High-risk medicines include dapsone, primaquine, tafenoquine, rasburicase and methylene blue. Always tell your doctor and pharmacist, who can check any medicine.'],
      ['Are mothballs dangerous for babies with G6PD deficiency?', 'Yes. Naphthalene mothballs can trigger red cell breakdown. Don’t use them at home or store baby clothes with them.'],
      ['Can girls have G6PD deficiency?', 'Yes. It is more common in boys, but girls can be affected, and the standard newborn screening test can miss partial deficiency in girls.'],
      ['What are the signs of a G6PD crisis?', 'Sudden paleness, tiredness, dark tea-coloured urine, yellow skin or eyes, and a fast heartbeat or breathlessness. Seek urgent care.'],
    ],
    sources: [
      ['Ministry of Health Malaysia — Ujian saringan (newborn screening) (Jun 2023)', 'https://hq.moh.gov.my/bpkk/index.php/ujian-saringan'],
      ['Azma et al. — G6PD activity in Malaysian neonates (SE Asian J Trop Med Public Health, 2010)', 'https://www.tm.mahidol.ac.th/seameo/2010-41-4/25-4794.pdf'],
      ['Talib et al. — Prevalence of G6PD deficiency in neonates in Kuantan (Malays J Pathol, 2023)', 'https://irep.iium.edu.my/110875/'],
      ['Lee et al. — G6PD deficiency and neonatal hyperbilirubinaemia (Frontiers in Pediatrics, 2022)', 'https://www.frontiersin.org/articles/10.3389/fped.2022.875877'],
      ['Gammal et al. — Expanded CPIC guideline for medication use in G6PD deficiency (2023)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10281211'],
      ['Lee et al. — What G6PD-deficient individuals should really avoid (Br J Clin Pharmacol, 2016)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5338146'],
      ['Lee, Lai and Chaiyakunapruk — Herbal and dietary supplements in G6PD deficiency (Br J Clin Pharmacol, 2016)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5338162'],
      ['Singapore General Hospital — Neonatal G6PD deficiency leaflet (2024)', 'https://sgh.com.sg/patient-care/specialties-services/Neonatal-and-Developmental-Medicine/Documents/neonatal-g6pd-sgh-2024.pdf'],
      ['Singapore Food Agency — Fava beans and G6PD deficiency (Aug 2023)', 'https://www.sfa.gov.sg/food-safety-tips/food-risk-concerns/risk-at-a-glance/the-arch-enemy-of-g6pd-deficient-individuals-fava-beans'],
      ['Luzzatto — G6PD deficiency (Haematologica)', 'https://haematologica.org/article/view/4170/14370'],
    ],
    related: ['thalassaemia-screening-malaysia', 'fever-in-children-malaysia', 'baby-vaccination-schedule-malaysia'],
  },
];
