// Articles published 28 October 2026 (newest first). Same rules as articles-2026-10.mjs:
// education only, no brand promotion, no prices next to medicine or vaccine brand names, and
// the "where to go" section links to directory pages rather than naming clinics (MAB 3.4.3).
const PUB = '2026-10-28';
const AUTHOR = 'HealthcareDirectory.my Editorial Team';
const figure = (name, alt, cap) => `<figure>{{img:${name}|${alt}}}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const OCT_2026_D = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'floods-health-risks-malaysia',
    title: 'Floods and your health: leptospirosis, diarrhoea and other risks during the monsoon',
    crumb: 'Floods and your health',
    desc: 'Monsoon floods bring leptospirosis, diarrhoea, skin and chest infections. Symptoms to watch for, safe water and food, wound care, clean-up and useful contacts.',
    excerpt: 'The Northeast Monsoon has begun, and floods have already hit Penang and Kedah. The illnesses floods bring, the leptospirosis symptoms to watch for, and how to stay safe during and after a flood.',
    standfirst: 'The Northeast Monsoon began on 27 October, and flash floods have already hit Penang and Kedah. Floodwater can carry germs from sewage, rubbish and animal urine, and the weeks after a flood bring their own risks. Here is what to watch for, how to keep your family safe, and when to see a doctor.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Leptospirosis', 'Leptospirosis (kencing tikus)'],
    image: 'kl-street-night', imageAlt: 'Kuala Lumpur’s Petronas Twin Towers under a dark, cloudy evening sky',
    keyPoints: [
      'The Northeast Monsoon runs from 27 October 2026 to March 2027, with 3 to 5 episodes of heavy rain expected between November and January.',
      'Most illnesses in flood relief centres are chest and skin infections, but floodwater can also spread diarrhoea, hepatitis A and leptospirosis.',
      'Leptospirosis (kencing tikus) can start 2 to 30 days after contact with floodwater. See a doctor for fever, headache, muscle aches or red eyes, and mention the flood.',
      'Drink boiled or bottled water, throw away food that touched floodwater, and cover cuts with waterproof plasters.',
      'Never run a generator indoors, never mix bleach with other cleaners, and clear standing water after the flood to stop dengue mosquitoes breeding.',
    ],
    sections: [
      { id: 'now', h: 'The monsoon season has begun', tocLabel: 'This monsoon', html: `<p>MetMalaysia says the 2026/27 Northeast Monsoon began on <strong>27 October 2026</strong> and will last until March 2027. It expects <strong>3 to 5 episodes of continuous heavy rain</strong> between November and January, followed by drier weather from January.</p>
<p>Floods have already started. On 25 October, heavy rain caused flash floods at 10 locations on Penang island, and a 73-year-old resident died in a landslide in Paya Terubong. In Kedah, 202 people from 69 families were in relief centres in Yan on 27 October, and the state has listed 90 flood hotspots. On 28 October, five relief centres were open nationwide, in Kedah and Selangor.</p>
<p>Check river levels on the Department of Irrigation and Drainage’s <a href="https://publicinfobanjir.water.gov.my/" target="_blank" rel="noopener">Public Infobanjir</a> site, and follow MetMalaysia’s weather warnings.</p>` },
      { id: 'illnesses', h: 'Illnesses to watch for during and after floods', tocLabel: 'Flood illnesses', html: `<p>The Ministry of Health and the National Security Council list these as the main flood-related diseases:</p>
<ul>
<li><strong>Diarrhoea and food poisoning</strong>, including dysentery and, rarely, cholera</li>
<li><strong>Hepatitis A and E</strong>, from contaminated water and food</li>
<li><strong>Leptospirosis</strong>, from water or mud contaminated with animal urine</li>
<li><strong>Chest infections</strong> and flu, which spread easily in crowded relief centres</li>
<li><strong>Skin infections</strong> and eye infections (conjunctivitis)</li>
<li><strong>Dengue</strong> and other mosquito-borne diseases, after the water recedes</li>
</ul>
<p>In practice, most people who fall ill in relief centres have chest and skin infections. During the November 2025 floods, health teams treated 2,083 people in relief centres. The most common problems were respiratory infections (376 cases) and skin infections (92), with 15 cases of gastroenteritis. In the larger November–December 2024 floods, there were 6,730 respiratory infections, 3,021 skin infections and 298 cases of gastroenteritis. No outbreaks were declared in either year.</p>` },
      { id: 'lepto', h: 'Leptospirosis: the flood fever to know about', tocLabel: 'Leptospirosis', html: `<p>Leptospirosis, often called <strong>kencing tikus</strong> (rat urine disease), is caused by bacteria in the urine of rats and other animals. The bacteria survive for weeks in water and wet soil, and enter the body through cuts, scratches, the eyes, nose or mouth. Wading or cleaning up in floodwater is a common way to catch it. It has been a notifiable disease in Malaysia since 2010.</p>
<p><strong>Symptoms</strong> usually start 5 to 14 days after exposure, but can appear anywhere from 2 to 30 days:</p>
<ul>
<li>Sudden fever, chills and headache</li>
<li>Muscle aches</li>
<li>Red eyes</li>
<li>Vomiting, diarrhoea, or a rash</li>
</ul>
<p>Most cases are mild, but some people develop a severe form with yellow skin and eyes (jaundice), kidney failure or bleeding in the lungs, which can be fatal.</p>
<div class="box box--pink" role="note"><span class="box__title">See a doctor early</span><p style="font-size:16px;line-height:1.6">If you get a fever within a month of contact with floodwater or mud, see a doctor and <strong>tell them about the flood</strong>. Leptospirosis is treated with antibiotics, which work best when started early. It can look like dengue or flu at first. If you are going into floodwater for rescue or clean-up work, ask your doctor whether preventive antibiotics are suitable for you.</p></div>` },
      { id: 'melioidosis', h: 'Melioidosis: a risk for people with diabetes', tocLabel: 'Melioidosis', html: `<p>Melioidosis is a less well-known infection caused by bacteria that live in soil and muddy water. Cases rise after heavy rain and floods. It mostly affects people with <strong>diabetes</strong>, kidney or liver disease, or thalassaemia. In one Pahang study, about three-quarters of patients had diabetes. Symptoms, which can start 1 to 3 weeks after exposure, include fever, cough, chest pain or abscesses. It needs weeks of hospital antibiotics, so see a doctor early for any fever after a flood if you have diabetes.</p>` },
      { id: 'water-food', h: 'Safe water and food', html: `<ul>
<li><strong>Drink boiled or bottled water</strong> until the authorities say tap water is safe. Bring water to a rolling boil for 1 minute. If it is cloudy, let it settle and filter it through a clean cloth first.</li>
<li><strong>Throw away any food</strong> that touched floodwater, including packaged food that isn’t in a sealed can, and food from a fridge that lost power for a long time.</li>
<li><strong>Don’t wash food, dishes or yourself in floodwater.</strong></li>
<li><strong>Wash your hands</strong> with soap and clean water before eating and after cleaning up.</li>
<li><strong>For diarrhoea,</strong> drink oral rehydration salts (ORS) and plenty of clean fluids. See a doctor for blood in the stool, high fever, or signs of dehydration, especially in children and older people.</li>
</ul>` },
      { id: 'wounds', h: 'Cuts, wounds and tetanus', tocLabel: 'Wounds and tetanus', html: `<ul>
<li>Wear <strong>boots and gloves</strong> in floodwater and mud, and avoid wading where you can.</li>
<li><strong>Cover cuts</strong> with waterproof plasters before going into water.</li>
<li>If you get a cut, wash it well with clean water and soap, and keep it clean and dry.</li>
<li>Flood wounds count as dirty wounds. See a doctor for a <strong>tetanus booster</strong> if your last one was 5 or more years ago, or if you aren’t sure.</li>
<li>See a doctor if a wound becomes red, swollen, hot or painful, or leaks pus.</li>
</ul>` },
      { id: 'clean-up', h: 'Cleaning up safely', html: `<ul>
<li><strong>Turn off electricity</strong> at the main switch before entering a flooded home if you can do so safely, and have wet electrical items checked before use.</li>
<li><strong>Never run a generator indoors</strong>, in a garage or near windows. Keep it at least 6 metres from doors, windows and vents. Generators produce carbon monoxide, which can kill without warning.</li>
<li><strong>Protect yourself</strong> with boots, gloves, goggles and, if there is mould, an N95 mask. Open windows while you clean.</li>
<li><strong>Remove mud first</strong>, then wash hard surfaces with soap and water and disinfect them with diluted bleach: no more than 1 cup (about 240 ml) of household bleach in about 4.5 litres of water.</li>
<li><strong>Never mix bleach</strong> with ammonia or other cleaners. It makes a toxic gas.</li>
<li>Throw away soaked mattresses, carpets and soft items that can’t be dried within 24 to 48 hours, as mould grows quickly.</li>
</ul>` },
      { id: 'dengue', h: 'Dengue after the floods', tocLabel: 'Dengue after floods', html: `<p>As floodwater recedes, it leaves puddles, blocked drains and water-filled containers where <em>Aedes</em> mosquitoes breed. Dengue cases in Malaysia have already passed 78,000 this year. After a flood, walk around your home and empty anything holding water, and use mosquito repellent. See our guide to <a href="/articles/dengue-klang-valley-first-three-days/">dengue warning signs</a>.</p>
${figure('aedes-mosquito', 'A close-up of an Aedes mosquito on skin', 'Clear standing water after a flood to stop Aedes mosquitoes breeding.')}` },
      { id: 'mental', h: 'Looking after your mind', tocLabel: 'Mental health', html: `<p>Losing belongings, being displaced or worrying about the next flood is stressful. Trouble sleeping, irritability and anxiety are common afterwards, and children may become clingy or upset. Talk to someone you trust, keep to routines where you can, and ask for help if it doesn’t ease. The Ministry of Health’s <strong>Talian HEAL 15555</strong> offers free psychosocial support.</p>` },
      { id: 'contacts', h: 'Useful contacts', html: `<div class="table-wrap"><table>
<thead><tr><th>Need</th><th>Where to go</th></tr></thead>
<tbody>
<tr><td>Emergency, rescue or ambulance</td><td>Call <a href="tel:999">999</a> (112 from a mobile)</td></tr>
<tr><td>River and flood levels</td><td><a href="https://publicinfobanjir.water.gov.my/" target="_blank" rel="noopener">Public Infobanjir</a> (Department of Irrigation and Drainage)</td></tr>
<tr><td>Open relief centres (PPS)</td><td><a href="https://infobencanajkmv2.jkm.gov.my/landing/index.php?b=1&amp;a=0" target="_blank" rel="noopener">InfoBencana</a> (Department of Social Welfare)</td></tr>
<tr><td>Weather warnings</td><td>MetMalaysia, hotline 1-300-22-1638</td></tr>
<tr><td>Emotional support</td><td>Talian HEAL <a href="tel:15555">15555</a></td></tr>
</tbody></table></div>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor after a flood',
    clinicsTocLabel: 'Where to see a doctor',
    clinicsIntro: 'See a GP for a fever, diarrhoea, skin infection or wound after contact with floodwater, and mention the flood. Our directory lists GP clinics across Kuala Lumpur, Selangor, Penang, Perak and other states, including clinics open late and at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/george-town/', 'Clinics in George Town'], ['/clinics/open-24-hours/', '24-hour clinics'], ['/clinics/open-sunday/', 'Clinics open on Sunday']],
    faqs: [
      ['What diseases can you get from floodwater?', 'The main risks are diarrhoea and food poisoning, hepatitis A, leptospirosis, skin and eye infections, and chest infections in crowded relief centres. Dengue can rise after the water recedes.'],
      ['What are the symptoms of leptospirosis (kencing tikus)?', 'Sudden fever, headache, chills, muscle aches and red eyes, sometimes with vomiting, diarrhoea or a rash. Symptoms usually start 5 to 14 days after contact with contaminated water, but can take up to 30 days.'],
      ['Is leptospirosis curable?', 'Yes. It is treated with antibiotics, which work best when started early. See a doctor for any fever after contact with floodwater, and tell them about the flood.'],
      ['Is it safe to drink tap water after a flood?', 'Not until the authorities say so. Drink bottled water, or bring tap water to a rolling boil for 1 minute before drinking or cooking with it.'],
      ['Do I need a tetanus jab after a flood injury?', 'If you get a cut or puncture wound in floodwater and your last tetanus booster was 5 or more years ago, or you aren’t sure, see a doctor about a booster.'],
      ['When does the 2026 monsoon season end?', 'MetMalaysia expects the Northeast Monsoon to last from 27 October 2026 to March 2027, with the heaviest rain between November and January.'],
    ],
    sources: [
      ['New Straits Times — Northeast Monsoon to begin Oct 27, bringing 3–5 episodes of heavy rain (23 Oct 2026)', 'https://www.nst.com.my/amp/news/nation/2026/10/1562066/northeast-monsoon-begin-oct-27-bringing-3-5-episodes-heavy-rain'],
      ['Bernama — Northeast Monsoon outlook (Oct 2026)', 'https://www.bernama.com/en/general/news.php?id=2624650'],
      ['The Star — Continuous rain in the north triggers flash floods in Kedah, Penang (26 Oct 2026)', 'https://www.thestar.com.my/news/nation/2026/10/26/continuous-rain-in-the-north-triggers-flash-floods-in-kedah-penang'],
      ['The Star — Floods: 90 areas in Kedah designated as hotspots (27 Oct 2026)', 'https://thestar.com.my/news/nation/2026/10/27/floods-90-areas-in-kedah-designated-as-hotspots'],
      ['Department of Social Welfare — InfoBencana (accessed 28 Oct 2026)', 'https://infobencanajkmv2.jkm.gov.my/landing/index.php?b=1&a=0'],
      ['National Security Council — Infectious diseases caused by floods (30 Nov 2025)', 'https://www.mkn.gov.my/web/ms/2025/11/30/penyakit-berjangkit-akibat-banjir/'],
      ['The Star — Floods affect 49 health facilities, says Dzulkefly (28 Nov 2025)', 'https://www.thestar.com.my/news/nation/2025/11/28/floods-affect-49-health-facilities-says-dzulkefly'],
      ['Free Malaysia Today — Cases of disease in flood-hit states (7 Dec 2024)', 'https://www.freemalaysiatoday.com/category/nation/2024/12/07/10272-cases-of-waterborne-diseases-in-flood-hit-states-says-minister'],
      ['US CDC — About leptospirosis (Feb 2026)', 'https://www.cdc.gov/leptospirosis/about/index.html'],
      ['Singapore Communicable Diseases Agency — Leptospirosis (Aug 2026)', 'https://www.cda.gov.sg/professionals/diseases/leptospirosis/'],
      ['Tropical Biomedicine — Leptospirosis in Malaysia (2025)', 'https://msptm.org/files/Vol42No2/tb-42-2-013-Mohd-Yusof-M-S.pdf'],
      ['US CDC — About melioidosis (Aug 2025)', 'https://www.cdc.gov/melioidosis/about/index.html'],
      ['US CDC — Water emergencies: making water safe', 'https://www.cdc.gov/water-emergency/about/index.html'],
      ['US CDC — Carbon monoxide poisoning', 'https://www.cdc.gov/carbon-monoxide/about/index.html'],
      ['US CDC — Tetanus: clinical guidance', 'https://www.cdc.gov/tetanus/hcp/clinical-guidance/index.html'],
      ['US CDC — Mold clean-up after a disaster', 'https://www.cdc.gov/mold-health/about/clean-up.html'],
    ],
    related: ['dengue-klang-valley-first-three-days', 'haze-air-quality-klang-valley', 'clinic-or-emergency-department'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'hfmd-children-malaysia',
    title: 'HFMD in children: symptoms, how long it’s contagious, home care and warning signs',
    crumb: 'HFMD in children',
    desc: 'Hand, foot and mouth disease (HFMD) symptoms in babies and children, how long it is contagious, home care, warning signs, and how to tell it apart from measles.',
    excerpt: 'Hand, foot and mouth disease spreads fast in taska and tadika. The symptoms in babies and children, how long it stays contagious, how to ease mouth ulcers, the warning signs that need hospital care, and how it differs from measles.',
    standfirst: 'Hand, foot and mouth disease (HFMD, or penyakit tangan, kaki dan mulut) is one of the most common childhood infections in Malaysia, and outbreaks regularly close nurseries and kindergartens. Most children recover at home within 7 to 10 days. Here is what to look for, how to keep your child comfortable and hydrated, and the rare warning signs that need urgent care.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Hand, foot and mouth disease', 'Penyakit tangan, kaki dan mulut'],
    image: 'paediatrician', imageAlt: 'A doctor listening to a baby’s chest with a stethoscope',
    keyPoints: [
      'HFMD usually starts with fever, sore throat and poor appetite, followed by painful mouth ulcers and spots or blisters on the hands, feet and bottom.',
      'It is caused by several viruses, mainly coxsackieviruses and enteroviruses. Most children recover in 7 to 10 days.',
      'It is most contagious in the first week, but the virus can stay in stools for weeks. Handwashing is the best protection.',
      'The main risk is dehydration from painful mouth ulcers. Offer cool drinks and soft food, and give paracetamol for pain.',
      'Seek urgent care for drowsiness, jerking during sleep, weakness, persistent vomiting, breathing difficulty or passing very little urine.',
    ],
    sections: [
      { id: 'malaysia', h: 'HFMD in Malaysia', tocLabel: 'HFMD in Malaysia', html: `<p>HFMD has been a notifiable disease in Malaysia since 2007, and cases rise and fall from year to year. 2025 was a very large year: Malaysia recorded <strong>239,907 cases</strong> by late August, and more than 1,100 childcare centres and kindergartens were ordered to close in the first months of the year to stop the spread.</p>
<p>2026 has been much quieter. The Ministry of Health reported <strong>40,879 cases as of 22 August 2026</strong>, about 83% fewer than in the same period of 2025. Most infections this year were caused by coxsackievirus A6 and other enteroviruses. Enterovirus 71 (EV71), the type more often linked to serious complications, made up only 1.5% of enteroviruses detected.</p>
<p>When there is an outbreak, health officers can order a nursery or kindergarten to close for 10 days, roughly two incubation periods, under the Prevention and Control of Infectious Diseases Act 1988.</p>` },
      { id: 'symptoms', h: 'HFMD symptoms in babies and children', tocLabel: 'Symptoms', html: `<p>Symptoms usually start <strong>3 to 5 days</strong> after a child catches the virus:</p>
<ol>
<li><strong>First 1 to 2 days:</strong> fever, sore throat, tiredness and not wanting to eat or drink.</li>
<li><strong>Then:</strong> painful <strong>mouth ulcers</strong> on the tongue, gums and inside the cheeks, and a spotty <strong>rash</strong> on the palms and soles, sometimes on the bottom, legs or arms. The spots can turn into small blisters. The rash is usually <strong>not itchy</strong>.</li>
</ol>
<p><strong>In babies and toddlers</strong>, you may notice irritability, drooling, refusing feeds or the bottle because the mouth hurts, and fewer wet nappies. Not every child gets all the symptoms. Some have only mouth ulcers or only a rash.</p>
<p>Very rarely, a child’s fingernails or toenails may peel or fall off a few weeks later. They grow back normally.</p>
${figure('mother-child', 'A mother and daughter sitting together', 'Most children with HFMD recover at home within 7 to 10 days.')}` },
      { id: 'contagious', h: 'How long is HFMD contagious?', tocLabel: 'How long it’s contagious', html: `<ul>
<li>A child can spread HFMD a few days <strong>before</strong> symptoms appear.</li>
<li>They are <strong>most contagious in the first week</strong> of illness.</li>
<li>The virus can stay in saliva for days and in <strong>stools for weeks</strong> after the child feels better, and people without symptoms can spread it too.</li>
</ul>
<p>It spreads through saliva, coughs and sneezes, fluid from blisters, and stools, for example during nappy changes, or from shared toys and cups.</p>
<p><strong>When can my child go back to taska or school?</strong> The Ministry of Health advises keeping children with symptoms at home and away from childcare centres and public places. Overseas guidance suggests returning once the child feels well and has no fever or uncontrolled drooling. Many nurseries have their own rules and may ask for a doctor’s letter, so check with them.</p>
<p>Children and adults can catch HFMD <strong>more than once</strong>, because several different viruses cause it.</p>` },
      { id: 'home-care', h: 'Caring for a child with HFMD at home', tocLabel: 'Home care', html: `<p>There is no specific medicine for HFMD, and antibiotics don’t work against it. Care focuses on comfort and fluids:</p>
<ul>
<li><strong>Keep them drinking.</strong> Dehydration is the main risk. Offer small sips often: cool water, milk, or oral rehydration salts. Ice chips or cold drinks can soothe mouth ulcers. Avoid acidic drinks such as orange juice, which sting.</li>
<li><strong>Soft, cool foods</strong> such as yoghurt, porridge, soup and soft rice. Avoid hot, salty and spicy food.</li>
<li><strong>Paracetamol</strong> for fever and mouth pain, dosed by your child’s weight. A pharmacist can suggest a mouth gel suitable for your child’s age. Never give aspirin to children.</li>
<li><strong>Skin:</strong> the rash usually needs no treatment. Keep blisters clean and dry, and let them dry up on their own. Calamine lotion isn’t usually needed. If a spot is itchy, use it only on unbroken skin, never in the mouth or on burst blisters, and ask a doctor first for children under 2.</li>
</ul>
<p>Avoid ibuprofen if your child is dehydrated or if dengue is possible. See our guide to <a href="/articles/persistent-cough-malaysia/#children-fever">fever medicine for children</a>.</p>` },
      { id: 'warning', h: 'Warning signs that need urgent care', tocLabel: 'Warning signs', html: `<p>Serious complications are rare, but some viruses, especially EV71, can affect the brain or heart. Children under 5, and especially under 2, are at highest risk.</p>
<div class="box box--pink" role="note"><span class="box__title">Go to a hospital emergency department or call 999 if your child has</span><ul>
<li>Unusual drowsiness, or is hard to wake or very irritable</li>
<li>Sudden jerking or twitching, especially during sleep</li>
<li>Weakness, unsteadiness or difficulty walking</li>
<li>Persistent vomiting, or a high fever that won’t come down with medicine</li>
<li>Fast or difficult breathing</li>
<li>Signs of dehydration: passing very little urine, a dry mouth, no tears, or very few wet nappies</li>
<li>A seizure</li>
</ul></div>
<p>See a GP sooner if your child is under 6 months old, has a weak immune system, or isn’t improving after 7 to 10 days.</p>` },
      { id: 'prevent', h: 'Preventing HFMD', tocLabel: 'Prevention', html: `<ul>
<li><strong>Wash hands</strong> with soap and water, especially after nappy changes and using the toilet, and before eating. Teach children to do the same.</li>
<li><strong>Clean</strong> toys, toilets and surfaces regularly with soap or a household disinfectant.</li>
<li><strong>Don’t share</strong> cups, cutlery, towels or toothbrushes.</li>
<li><strong>Keep sick children at home</strong> until they are well.</li>
</ul>
<p><strong>Is there an HFMD vaccine?</strong> Not in Malaysia. Vaccines against EV71 are used in China, and an application to bring one to Malaysia for children aged 6 months to 6 years is under review by the NPRA. These vaccines protect only against EV71, not the other viruses that cause most HFMD.</p>` },
      { id: 'measles', h: 'HFMD or measles?', html: `<p>Searches for measles have been rising alongside HFMD. Measles is far more serious, and both cause fever and a rash, so it helps to know the difference:</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>HFMD</th><th>Measles</th></tr></thead>
<tbody>
<tr><td>Early symptoms</td><td>Fever, sore throat, poor appetite</td><td>High fever, cough, runny nose, red watery eyes</td></tr>
<tr><td>Mouth</td><td>Painful ulcers</td><td>Tiny white spots inside the cheeks (Koplik spots)</td></tr>
<tr><td>Rash</td><td>Spots or blisters mainly on palms, soles and bottom</td><td>Red, blotchy rash starting at the hairline and spreading down the whole body</td></tr>
<tr><td>Vaccine</td><td>None in Malaysia</td><td>MMR, free under the National Immunisation Programme</td></tr>
</tbody></table></div>
<p>Malaysia recorded <strong>3,791 measles cases in 2024</strong>, up from 2,002 in 2023, and 3 children died, all unvaccinated. The National Immunisation Programme gives the MMR vaccine at <strong>9 and 12 months</strong>, with an extra early dose in Sabah. The Ministry of Health has extended its free catch-up measles-rubella dose until 31 December 2026 for children who missed it. Book through MySejahtera or ask at a Klinik Kesihatan.</p>
<p>If you think your child has measles, call the clinic before you go, so staff can keep other patients safe.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor for HFMD',
    clinicsTocLabel: 'Where to see a doctor',
    clinicsIntro: 'A GP can confirm HFMD, check your child for dehydration and give a letter for the nursery if needed. Call ahead so the clinic can keep other children from catching it. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, including clinics open at weekends.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-sunday/', 'Clinics open on Sunday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['What are the symptoms of HFMD in children? (Simptom HFMD kanak-kanak)', 'Fever, sore throat and poor appetite, followed by painful mouth ulcers and a spotty rash or small blisters on the palms, soles and sometimes the bottom. Symptoms start 3 to 5 days after infection.'],
      ['What are the signs of HFMD in a baby?', 'Babies may be irritable, drool more, refuse feeds because of mouth ulcers, have a fever, and have spots on the hands, feet or nappy area. Watch for fewer wet nappies, a sign of dehydration.'],
      ['How long is HFMD contagious?', 'A child is most contagious in the first week of illness, but can spread the virus a few days before symptoms appear, and the virus can stay in stools for weeks. Good handwashing is essential.'],
      ['Is calamine lotion good for HFMD?', 'It isn’t usually needed, as the HFMD rash is rarely itchy. If a spot is itchy, calamine can be used on unbroken skin only, never in the mouth or on burst blisters. Ask a doctor first for children under 2.'],
      ['Can adults get HFMD?', 'Yes. Adults can catch HFMD, often from their children, though symptoms are usually milder. You can also get it more than once, because different viruses cause it.'],
      ['Is there a vaccine for HFMD in Malaysia?', 'No. Vaccines against enterovirus 71 are used in China, and one is under review in Malaysia, but they don’t protect against the other viruses that cause most HFMD.'],
    ],
    sources: [
      ['The Vibes — MOH weighs HFMD vaccine strategy as cases plunge 83% (26 Aug 2026)', 'https://www.thevibes.com/articles/lifestyles/126585/moh-weighs-hfmd-vaccine-strategy-as-cases-plunge-83'],
      ['Asia News Network / The Star — HFMD cases hit 40,879 this year (26 Aug 2026)', 'https://asianews.network/malaysias-health-ministry-assessing-hfmd-vaccine-feasibility-as-cases-hit-40879-this-year/'],
      ['The Star — HFMD cases more than triple compared to same period last year (12 May 2025)', 'https://www.thestar.com.my/news/nation/2025/05/12/hfmd-cases-more-than-triple-compared-to-same-period-last-year-says-health-ministry'],
      ['Parliament of Malaysia — Written reply on HFMD premises closures (2016)', 'https://pardocs.sinarproject.org/documents/2016-october-november-parliamentary-session/written-replies-soalan-bertulis/soalan-408.pdf'],
      ['NHS — Hand, foot and mouth disease (reviewed May 2024)', 'https://www.nhs.uk/conditions/hand-foot-mouth-disease/'],
      ['US CDC — Symptoms of hand, foot, and mouth disease (May 2024)', 'https://www.cdc.gov/hand-foot-mouth/signs-symptoms/index.html'],
      ['US CDC — How hand, foot, and mouth disease spreads (May 2024)', 'https://www.cdc.gov/hand-foot-mouth/causes/index.html'],
      ['WHO Western Pacific — Hand, foot and mouth disease', 'https://www.who.int/westernpacific/emergencies/surveillance/archives/hand-foot-and-mouth-disease'],
      ['CodeBlue — MOH launches nationwide measles immunisation campaign (4 Aug 2025)', 'https://codeblue.galencentre.org/2025/08/moh-launches-nationwide-measles-immunisation-campaign-for-third-jab/'],
      ['US CDC — Measles signs and symptoms (Aug 2026)', 'https://www.cdc.gov/measles/signs-symptoms/index.html'],
      ['Cleveland Clinic — Calamine lotion', 'https://my.clevelandclinic.org/health/drugs/23338-calamine-lotion'],
    ],
    related: ['persistent-cough-malaysia', 'influenza-a-malaysia', 'clinic-or-emergency-department'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'persistent-cough-malaysia',
    title: 'Cough that won’t go away? Common causes, cough medicine that helps, and when to see a doctor',
    crumb: 'Cough that won’t go away',
    desc: 'Why a cough lingers after flu or haze, common causes such as allergies, reflux, TB and blood pressure pills, which cough medicines help, and when to see a doctor.',
    excerpt: 'After the haze and flu season, many Malaysians have a cough that lingers for weeks. What usually causes it, which cough medicines actually help, safe fever medicine for children, and the signs that need a doctor.',
    standfirst: 'A cough after a cold, flu or a spell of haze can last for weeks, and most of the time it clears on its own. But a cough that won’t go away can also be a sign of asthma, reflux, a side effect of a blood pressure pill, or tuberculosis. Here is what usually causes it, what helps, and when to get checked.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Cough', 'Batuk'],
    image: 'cold-flu', imageAlt: 'Tissues, nasal spray and a notebook on a desk',
    keyPoints: [
      'Most coughs after a cold or flu clear within 3 to 4 weeks. A cough lasting more than 3 weeks is worth getting checked.',
      'Common causes of a lingering cough include a recent infection, haze, allergies, asthma, acid reflux, smoking and some blood pressure medicines.',
      'In Malaysia, a cough lasting more than 2 weeks, especially with fever, night sweats or weight loss, should be checked for tuberculosis.',
      'Cough syrups have little evidence behind them. Honey (not for babies under 1) and warm drinks are reasonable first steps.',
      'Cough and cold medicines should not be used in children under 2 in Malaysia. For fever in children, use paracetamol by weight, and avoid ibuprofen if dengue is possible.',
    ],
    sections: [
      { id: 'how-long', h: 'How long is too long for a cough?', tocLabel: 'How long is too long', html: `<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>How long it lasts (adults)</th><th>Usual cause</th></tr></thead>
<tbody>
<tr><td>Acute cough</td><td>Less than 3 weeks</td><td>A cold, flu or other infection</td></tr>
<tr><td>Subacute cough</td><td>3 to 8 weeks</td><td>Often a cough that lingers after an infection</td></tr>
<tr><td>Chronic cough</td><td>More than 8 weeks</td><td>Asthma, allergies, reflux, smoking, medicines or lung disease</td></tr>
</tbody></table></div>
<p>The NHS says a cough usually clears up within <strong>3 to 4 weeks</strong>, and advises seeing a doctor if it lasts longer than 3 weeks. In children, US and Australian guidelines treat a cough lasting more than 4 weeks as chronic.</p>
<p>2026 has been hard on Malaysian lungs. Haze pushed air quality into the unhealthy range for weeks, and in the first week of October the Ministry of Health recorded a 10.4% rise in respiratory infections. Flu also circulates all year. Both can leave airways irritated long after the main illness has passed.</p>` },
      { id: 'causes', h: 'Why won’t my cough go away?', tocLabel: 'Common causes', html: `<ul>
<li><strong>After a cold or flu:</strong> the most common cause. The airways stay sensitive for weeks, causing a dry, tickly cough that slowly fades.</li>
<li><strong>Haze and air pollution:</strong> fine particles irritate the airways and can trigger coughing, especially in people with asthma.</li>
<li><strong>Allergies and post-nasal drip:</strong> mucus dripping down the back of the throat from a runny or blocked nose. Often worse at night or in the morning.</li>
<li><strong>Asthma:</strong> sometimes the only symptom is a cough, especially at night, after exercise or in cold air.</li>
<li><strong>Acid reflux:</strong> stomach acid irritating the throat. There may be heartburn or a sour taste, but not always.</li>
<li><strong>Smoking and vaping:</strong> a daily cough is a warning sign of lung damage.</li>
<li><strong>Blood pressure medicines:</strong> ACE inhibitors, common blood pressure pills whose names usually end in “-pril” (such as perindopril), cause a dry cough in about 1 in 10 people or more. It usually goes about a week after stopping. Don’t stop your medicine yourself. Ask your doctor about switching.</li>
<li><strong>Infections that need treatment:</strong> such as whooping cough (pertussis) or tuberculosis (see below).</li>
<li><strong>Rarely, lung cancer:</strong> a cough is rarely a sign of cancer, but it is more likely in smokers and people over 40.</li>
</ul>
${figure('medications', 'Blister packs of tablets', 'Some common blood pressure tablets cause a dry, lingering cough. Your doctor can switch you to another type.')}` },
      { id: 'tb', h: 'Could it be tuberculosis?', tocLabel: 'Tuberculosis', html: `<p>Tuberculosis (TB) is still common in Malaysia. In 2024 there were <strong>26,183 cases and 2,580 deaths</strong>, according to the Ministry of Health, and more than 3,100 cases were reported in the first six weeks of 2026.</p>
<p>The Ministry advises getting checked if you have:</p>
<ul>
<li>a cough lasting <strong>more than 2 weeks</strong></li>
<li>fever, especially in the evening, or night sweats</li>
<li>loss of appetite or weight loss</li>
<li>coughing up blood</li>
</ul>
<p>TB is curable with a course of antibiotics, usually for 6 months, and 85–90% of patients are treated successfully. Diagnosis and treatment at government health facilities are heavily subsidised. Getting tested early also protects your family, because TB spreads through the air.</p>` },
      { id: 'whooping', h: 'Whooping cough in babies', tocLabel: 'Whooping cough', html: `<p>Whooping cough (pertussis) causes long coughing fits, sometimes followed by a “whoop” as the child breathes in, or vomiting. It is most dangerous for <strong>young babies</strong>, who may not whoop at all but stop breathing or turn blue. In 2023, Malaysia recorded 343 cases and 24 deaths by late August, mostly in babies under 5 months old.</p>
<p>Babies are protected by the vaccines in the National Immunisation Programme, and by vaccinating mothers during pregnancy. The government announced free whooping cough (Tdap) vaccination for pregnant women from 2024. Ask at your antenatal clinic.</p>` },
      { id: 'medicine', h: 'Which cough medicine works?', tocLabel: 'Cough medicine', html: `<p>Cough medicines are some of the most popular products at any pharmacy, but there is <strong>little good evidence</strong> that over-the-counter cough syrups help. A Cochrane review of 29 trials found no good evidence for or against them. If you want to try one:</p>
<ul>
<li><strong>Chesty cough with phlegm (batuk berkahak):</strong> expectorants such as guaifenesin are meant to loosen mucus. UK guidance lists them as an option for adults and children aged 12 and over, but the evidence is limited.</li>
<li><strong>Dry, tickly cough:</strong> cough suppressants such as dextromethorphan, for ages 12 and over. Not for a chesty cough, where you need to clear the phlegm.</li>
<li><strong>Allergy-related cough:</strong> antihistamines such as loratadine may help only when allergies or post-nasal drip are the cause. They don’t help an ordinary post-viral cough.</li>
</ul>
<p><strong>Malaysian rules to know:</strong></p>
<ul>
<li>Cough and cold medicines must carry a warning that they <strong>should not be used in children under 2</strong>.</li>
<li>Cough mixtures containing codeine and other controlled ingredients can only be supplied by a doctor or pharmacist.</li>
<li>In 2023, the Ministry of Health cancelled the registration of all cough products containing pholcodine because of a risk of severe allergic reactions during anaesthesia.</li>
<li>Only buy products with a <strong>MAL registration number</strong>. Unregistered cough syrups sold elsewhere in the region have been contaminated with toxic chemicals.</li>
</ul>
<p>Antibiotics don’t help a cough caused by a virus. A doctor will prescribe them only if a bacterial infection is likely.</p>` },
      { id: 'home', h: 'Home remedies that help', html: `<ul>
<li><strong>Honey:</strong> a Cochrane review found honey probably eases coughing and helps children sleep. Try 1 to 2 teaspoons in warm water with lemon. <strong>Never give honey to babies under 1</strong>, because of the risk of infant botulism.</li>
<li><strong>Warm drinks and plenty of fluids</strong> soothe the throat and thin mucus. Don’t give hot drinks to small children.</li>
<li><strong>Rest</strong>, and keep away from cigarette smoke, vapes and smoky kitchens.</li>
<li><strong>On hazy days,</strong> keep windows closed and use an air purifier if you have one. See our <a href="/articles/haze-air-quality-klang-valley/">haze guide</a>.</li>
</ul>` },
      { id: 'children-fever', h: 'Fever medicine for children', tocLabel: 'Children’s fever medicine', html: `<p>Coughs in children often come with fever. For fever medicine (ubat demam budak):</p>
<ul>
<li><strong>Paracetamol</strong> can be used from 2 months of age (if born after 37 weeks and over 4 kg). The dose depends on the child’s <strong>weight</strong>, so check the label or ask a pharmacist. Leave at least 4 hours between doses, give no more than 4 doses in 24 hours, and don’t combine it with other products that also contain paracetamol.</li>
<li><strong>Ibuprofen</strong> can be used from 3 months and over 5 kg, but <strong>avoid it if dengue is possible</strong>, because it increases the risk of bleeding. With dengue so common in Malaysia, paracetamol is the safer first choice for fever. Ibuprofen may also be unsuitable for children with asthma or who are dehydrated.</li>
<li><strong>Never give aspirin</strong> to children under 16.</li>
</ul>
<p>See a doctor if a baby under 3 months has a fever, or if any child with fever seems very unwell, drowsy or dehydrated. See our guide to <a href="/articles/dengue-klang-valley-first-three-days/">dengue warning signs</a>.</p>` },
      { id: 'red-flags', h: 'When to see a doctor', html: `<p>See a GP if:</p>
<ul>
<li>your cough has lasted <strong>more than 3 weeks</strong>, or more than 2 weeks with fever, night sweats or weight loss</li>
<li>you have lost weight without trying</li>
<li>you have a weakened immune system or a long-term condition such as diabetes</li>
<li>you are <strong>over 40 and smoke or used to smoke</strong>, and have a new or changed cough</li>
<li>your child has had a cough for more than 4 weeks, or has coughing fits with a “whoop” or vomiting</li>
</ul>
<div class="box box--pink" role="note"><span class="box__title">Get urgent help or call 999 for</span><ul>
<li>Coughing up blood</li>
<li>Difficulty breathing, or chest pain</li>
<li>Blue or grey lips or skin</li>
<li>A baby who stops breathing, turns blue during coughing fits, or is under 6 months with whooping cough symptoms</li>
<li>A swollen, painful neck, or a cough that is getting worse very quickly</li>
</ul></div>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to get a lingering cough checked',
    clinicsTocLabel: 'Where to get checked',
    clinicsIntro: 'A GP can work out the likely cause of a lingering cough, arrange a chest X-ray or sputum test for TB if needed, and review your medicines. Government health clinics (Klinik Kesihatan) also screen for TB. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-sunday/', 'Clinics open on Sunday']],
    faqs: [
      ['Why won’t my cough go away? (Kenapa batuk berpanjangan?)', 'The most common reason is airways that stay irritated after a cold or flu, which can take 3 to 4 weeks to settle. Other causes include haze, allergies, asthma, acid reflux, smoking and some blood pressure medicines. A cough lasting more than 3 weeks, or 2 weeks with fever or weight loss, should be checked.'],
      ['What is the best cough medicine for adults with phlegm? (Ubat batuk kahak dewasa)', 'Expectorants such as guaifenesin are meant to loosen phlegm, but the evidence is limited. Drinking plenty of fluids and honey in warm water also help. See a doctor if the phlegm is bloody, or the cough lasts more than 3 weeks.'],
      ['How can I get rid of a cough at home? (Petua hilangkan batuk)', 'Try honey with warm water and lemon, plenty of fluids, rest, and avoiding smoke. Don’t give honey to babies under 1. Most coughs clear on their own within a few weeks.'],
      ['When should I worry about a cough?', 'See a doctor for a cough lasting more than 3 weeks, or more than 2 weeks with fever, night sweats or weight loss. Get urgent help for coughing up blood, difficulty breathing, chest pain or blue lips.'],
      ['Can I give cough syrup to my baby?', 'No. In Malaysia, cough and cold medicines carry a warning not to use them in children under 2. Honey should not be given to babies under 1. See a doctor if a baby has a cough with fever or breathing difficulty.'],
      ['What fever medicine is safe for children? (Ubat demam budak)', 'Paracetamol, dosed by the child’s weight, from 2 months of age. Ibuprofen can be used from 3 months but should be avoided if dengue is possible. Never give aspirin to children under 16.'],
    ],
    sources: [
      ['NHS — Cough (reviewed Dec 2023)', 'https://www.nhs.uk/conditions/cough/'],
      ['The Vibes — MOH records increase in haze-related illnesses (10 Oct 2026)', 'https://www.thevibes.com/articles/news/128184/moh-records-increase-in-haze-related-illnesses'],
      ['The Star — Health Ministry committed to end tuberculosis by 2035 (24 Mar 2025)', 'https://www.thestar.com.my/news/nation/2025/03/24/health-ministry-says-committed-to-end-tuberculosis-by-2035'],
      ['Free Malaysia Today — Don’t ignore that persistent cough, TB specialist warns (10 Apr 2026)', 'https://www.freemalaysiatoday.com/category/leisure/2026/04/10/dont-ignore-that-persistent-cough-tb-specialist-warns'],
      ['Medical Journal of Malaysia — Pertussis mortality in Sabah (2026)', 'https://www.e-mjm.org/2026/v81n3/pertussis-mortality.pdf'],
      ['NHS — Whooping cough (reviewed Aug 2026)', 'https://www.nhs.uk/conditions/whooping-cough/'],
      ['Cochrane — Over-the-counter medications for acute cough in children and adults (2014)', 'https://www.cochrane.org/CD001831/ARI_over-counter-medications-acute-cough-children-and-adults-community-settings'],
      ['Cochrane — Honey for acute cough in children (2018)', 'https://www.cochrane.org/CD007094/'],
      ['The Star — Display warnings on cough and cold products (8 Jul 2009)', 'https://www.thestar.com.my/news/nation/2009/07/08/display-warnings-on-cough-and-cold-products'],
      ['Malay Mail — Health ministry cancels and recalls pholcodine products (23 Mar 2023)', 'https://www.malaymail.com/news/malaysia/2023/03/23/health-d-g-ministry-issues-cancellation-recall-products-containing-pholcodine-due-to-safety-risks-for-users/61162'],
      ['The Star — Contaminated guaifenesin syrup not registered in Malaysia (1 May 2023)', 'https://thestar.com.my/news/nation/2023/05/01/contaminated-guaifenesin-cough-syrup-not-registered-in-malaysia-says-health-dg'],
      ['NHS — Paracetamol for children (reviewed Oct 2025)', 'https://www.nhs.uk/medicines/paracetamol-for-children/'],
      ['NHS — Ibuprofen for children (reviewed Aug 2026)', 'https://www.nhs.uk/medicines/ibuprofen-for-children/'],
      ['Ministry of Health — Home care advice for dengue patients', 'https://www2.moh.gov.my/moh/resources/Borang/Denggi/HOME_CARD_ADVICE_FOR_DENGUE_PATIENTS.pdf'],
    ],
    related: ['influenza-a-malaysia', 'haze-air-quality-klang-valley', 'clinic-or-emergency-department'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'influenza-a-malaysia',
    title: 'Influenza A in Malaysia: symptoms, how long it lasts, A vs B, and when you need antiviral medicine',
    crumb: 'Influenza A in Malaysia',
    desc: 'Influenza A symptoms, how long it lasts and how contagious it is, the difference between influenza A and B, antiviral medicine, and warning signs in children.',
    excerpt: 'Influenza A clusters keep closing classrooms in Malaysia. How to tell flu from a cold, how long it lasts and stays contagious, A vs B, who needs antiviral medicine, and the warning signs in children.',
    standfirst: 'Influenza A spreads all year in Malaysia, and clusters in schools and kindergartens send many families to the clinic. Most people recover at home within a week or two, but some need antiviral medicine early, and a few need urgent care. Here is what to expect, how long you are contagious, and when to see a doctor.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Influenza', 'Demam influenza'],
    image: 'fever-thermometer', imageAlt: 'A digital thermometer showing a fever reading',
    keyPoints: [
      'Influenza A is the type of flu virus behind most outbreaks and all flu pandemics. Influenza B usually spreads more slowly but is not always milder, especially in children.',
      'Symptoms start about 2 days after infection, usually suddenly: fever or chills, cough, sore throat, body aches, headache and tiredness.',
      'You are contagious from a day before symptoms start until about 5–7 days after, and longer in young children.',
      'Most people recover within a few days to two weeks with rest, fluids and paracetamol. Antibiotics don’t work against flu.',
      'Antiviral medicine works best within 48 hours and is mainly for high-risk people: young children, older adults, pregnant women and anyone with a long-term illness.',
    ],
    sections: [
      { id: 'situation', h: 'Influenza A in Malaysia', tocLabel: 'Flu in Malaysia', html: `<p>Flu circulates all year round in Malaysia, with surges that are often reported around mid-year and from November to January. Schools and kindergartens are where clusters most often start.</p>
<ul>
<li><strong>October 2025:</strong> flu clusters jumped from 14 to 97 in a single week. About 85% were in schools and kindergartens, and around 6,000 students fell ill. By November, 95.6% of samples tested were influenza A (H3).</li>
<li><strong>Early 2026:</strong> the Ministry of Health’s epidemiology bulletin reported that outbreaks of influenza-like illness in the first 12 weeks of 2026 were 350% higher than in the same period of 2025.</li>
<li><strong>September 2026:</strong> an influenza A cluster at a boarding school in Ipoh left 46 students with flu-like illness. All were reported stable.</li>
</ul>
<p>The Ministry advises parents to check children for fever, runny nose or cough before school, and to keep them at home and seek treatment if they have symptoms.</p>` },
      { id: 'a-vs-b', h: 'What is the difference between influenza A and B?', tocLabel: 'Influenza A vs B', html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Influenza A</th><th>Influenza B</th></tr></thead>
<tbody>
<tr><td>Who it infects</td><td>People, birds and other animals</td><td>Mainly people</td></tr>
<tr><td>Types</td><td>Subtypes such as H1N1 and H3N2</td><td>One main lineage, B/Victoria</td></tr>
<tr><td>How it changes</td><td>Changes quickly; the only type that causes pandemics</td><td>Changes more slowly</td></tr>
<tr><td>Outbreaks</td><td>Causes most large outbreaks</td><td>Smaller outbreaks, often in children</td></tr>
<tr><td>Covered by the vaccine?</td><td>Yes, two A strains</td><td>Yes, one B strain</td></tr>
</tbody></table></div>
<p><strong>Is influenza A worse than B?</strong> Influenza A causes more large outbreaks and often hits older adults hard. But influenza B is not necessarily milder. In children it can be just as severe, and in one US study about a third of children who died from flu had influenza B. The symptoms are the same, and only a lab or rapid test can tell them apart. Treatment is the same for both.</p>` },
      { id: 'symptoms', h: 'Symptoms: flu or a cold?', tocLabel: 'Symptoms', html: `<p>Flu usually starts <strong>suddenly</strong>, often within hours. A cold comes on gradually and is milder.</p>
<div class="table-wrap"><table>
<thead><tr><th>Symptom</th><th>Flu</th><th>Common cold</th></tr></thead>
<tbody>
<tr><td>Onset</td><td>Sudden</td><td>Gradual</td></tr>
<tr><td>Fever or chills</td><td>Common, often high</td><td>Rare or mild</td></tr>
<tr><td>Body aches and tiredness</td><td>Common, often severe</td><td>Mild</td></tr>
<tr><td>Cough and sore throat</td><td>Common</td><td>Common</td></tr>
<tr><td>Runny or blocked nose</td><td>Sometimes</td><td>Common</td></tr>
<tr><td>Headache</td><td>Common</td><td>Uncommon</td></tr>
</tbody></table></div>
<p>Not everyone with flu has a fever. <strong>Children</strong> are more likely to have vomiting or diarrhoea, and very young children may just seem unusually sleepy, irritable or off their food.</p>
${figure('cold-flu', 'Tissues, nasal spray and a notebook on a desk', 'Flu usually hits suddenly, with fever, aches and exhaustion, while a cold builds up slowly.')}` },
      { id: 'how-long', h: 'How long does influenza A last, and is it contagious?', tocLabel: 'How long it lasts', html: `<ul>
<li><strong>Incubation:</strong> symptoms usually start about 2 days after you catch the virus, but anywhere from 1 to 4 days.</li>
<li><strong>Contagious period:</strong> from about 1 day before symptoms start until 5–7 days after. You are most contagious in the first 3 days. Young children and people with weak immune systems can spread it for longer.</li>
<li><strong>How long it lasts:</strong> most people feel better within a few days to two weeks. Fever usually settles first. A cough and tiredness can linger for a week or two after that. See our guide to a <a href="/articles/persistent-cough-malaysia/">cough that won’t go away</a>.</li>
</ul>
<p>Yes, influenza A is <strong>very contagious</strong>. It spreads through droplets when people cough, sneeze or talk, and from hands that touch contaminated surfaces. Stay home while you have a fever, and wear a mask around others if you must go out.</p>
<p><strong>When can children go back to school?</strong> The US CDC advises returning to normal activities once symptoms have been improving and the fever has been gone for at least 24 hours without fever medicine. Ask your doctor for a medical certificate if your child needs one.</p>` },
      { id: 'home-care', h: 'Treating flu at home', tocLabel: 'Home treatment', html: `<ul>
<li><strong>Rest</strong> and stay home from work or school.</li>
<li><strong>Drink plenty of fluids</strong>: water, clear soups or oral rehydration salts, especially if there is vomiting or diarrhoea.</li>
<li><strong>Paracetamol</strong> for fever and aches, at the dose on the label for the person’s age and weight.</li>
<li><strong>Don’t give aspirin to anyone under 16.</strong> It is linked to Reye’s syndrome, a rare but serious illness.</li>
<li><strong>Antibiotics don’t work</strong> against flu, which is caused by a virus. Your doctor may prescribe them only if a bacterial infection develops, such as some pneumonias or ear infections.</li>
</ul>
<p>If you aren’t improving after a week, or you start to feel better and then get worse again, see a doctor.</p>` },
      { id: 'antivirals', h: 'Antiviral medicine for influenza', tocLabel: 'Antiviral medicine', html: `<p>Antiviral medicines attack the flu virus itself. In Malaysia, they include <strong>oseltamivir</strong>, taken as capsules or liquid for 5 days, and <strong>baloxavir</strong>, a single dose for people aged 12 and over. Both need a doctor’s prescription.</p>
<ul>
<li>They work best when started <strong>within 48 hours</strong> of symptoms starting.</li>
<li>In otherwise healthy people, they shorten the illness by about a day. The bigger benefit is lowering the risk of complications in people at high risk.</li>
<li>The most common side effect of oseltamivir is nausea or vomiting. Taking it with food helps.</li>
</ul>
<p>Doctors mainly recommend antivirals for people who are very ill or at higher risk of complications:</p>
<ul>
<li>Children under 5, especially under 2</li>
<li>Adults aged 65 and over</li>
<li>Pregnant women</li>
<li>People with asthma or other lung disease, diabetes, heart disease, kidney or liver disease, or a weakened immune system</li>
</ul>
<p>Most healthy adults and older children with mild flu recover without them. If you or your child is in a high-risk group, see a doctor <strong>early</strong>, rather than waiting to see if it passes. Antivirals at private clinics can be costly, so ask about the price.</p>` },
      { id: 'warning', h: 'Warning signs that need urgent care', tocLabel: 'Warning signs', html: `<div class="box box--pink" role="note"><span class="box__title">Go to an emergency department or call 999 if a child has</span><ul>
<li>Fast or difficult breathing, or the ribs pulling in with each breath</li>
<li>Bluish lips or face</li>
<li>Signs of dehydration: no urine for 8 hours, a dry mouth, or no tears when crying</li>
<li>Not waking up, not alert, or not interacting</li>
<li>A seizure</li>
<li>A fever above 40°C that doesn’t come down with medicine, or any fever in a baby under 12 weeks old</li>
<li>Fever or cough that gets better, then comes back worse</li>
</ul></div>
<div class="box box--pink" role="note"><span class="box__title">In adults, get urgent care for</span><ul>
<li>Difficulty breathing or shortness of breath</li>
<li>Pain or pressure in the chest or abdomen that won’t go away</li>
<li>Persistent dizziness, confusion, or being hard to wake</li>
<li>A seizure, not passing urine, or severe weakness</li>
<li>Symptoms that improve, then return worse</li>
</ul></div>
<p>See our guide to <a href="/articles/clinic-or-emergency-department/">clinic or emergency department</a> if you aren’t sure where to go.</p>` },
      { id: 'prevent', h: 'Preventing influenza A', tocLabel: 'Prevention', html: `<ul>
<li><strong>Get a yearly flu vaccine.</strong> It protects against two influenza A strains (H1N1 and H3N2) and one influenza B strain, and is free for many older adults. See our <a href="/articles/flu-vaccine-malaysia/">flu vaccine guide</a>.</li>
<li><strong>Wash your hands</strong> often with soap and water, and cover coughs and sneezes.</li>
<li><strong>Wear a mask</strong> if you have symptoms and must be around others.</li>
<li><strong>Keep sick children at home</strong>, and avoid crowds while you are unwell.</li>
</ul>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Where to see a doctor for flu',
    clinicsTocLabel: 'Where to see a doctor',
    clinicsIntro: 'Any GP clinic can assess flu symptoms, prescribe antiviral medicine for people at higher risk, and give a medical certificate. Flu often strikes in the evening or at the weekend, so our directory shows clinics open late, at weekends and around the clock.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-sunday/', 'Clinics open on Sunday'], ['/clinics/open-24-hours/', '24-hour clinics']],
    faqs: [
      ['What is the difference between influenza A and B? (Apa beza influenza A dan B?)', 'Influenza A infects people and animals, changes quickly and causes most large outbreaks and all pandemics. Influenza B mainly infects people and changes more slowly. The symptoms and treatment are the same, and the yearly vaccine covers both.'],
      ['Is influenza A contagious?', 'Yes, very. You can spread it from about 1 day before symptoms start until 5–7 days after, and young children can spread it for longer. Stay home while you have a fever.'],
      ['How long does influenza A last? (Influenza A berapa lama?)', 'Most people recover within a few days to two weeks. Fever usually settles in a few days, but a cough and tiredness can last a week or two longer.'],
      ['What medicine is used for influenza A? (Ubat influenza A)', 'Most people only need rest, fluids and paracetamol. Doctors may prescribe antiviral medicine such as oseltamivir for people at high risk or who are very ill, ideally within 48 hours of symptoms starting. Antibiotics don’t work against flu.'],
      ['Is influenza A worse than influenza B?', 'Influenza A causes more outbreaks and is often harder on older adults, but influenza B can be just as severe, especially in children. Both should be taken seriously in high-risk people.'],
      ['What are the signs of influenza in children? (Tanda demam influenza kanak-kanak)', 'Sudden fever, cough, sore throat, runny nose, aches and tiredness. Children are more likely than adults to have vomiting or diarrhoea. Seek urgent care for fast or difficult breathing, bluish lips, dehydration, a seizure or a fever above 40°C.'],
    ],
    sources: [
      ['The Star — 6,000 students down with influenza (13 Oct 2025)', 'https://www.thestar.com.my/news/nation/2025/10/13/6000-students-down-with-influenza-school-told-to-follow-health-ministry-guidelines'],
      ['The Star — Early treatment crucial to prevent severe influenza complications, says Health Ministry (11 Oct 2025)', 'https://www.thestar.com.my/news/nation/2025/10/11/early-treatment-crucial-to-prevent-severe-influenza-complications-says-health-ministry'],
      ['Ministry of Health — Epidemiology Bulletin, EW1–12/2026', 'https://www.moh.gov.my/images/04-penerbitan/buletin/epidemiologi/BULETIN_EPIDEMIOLOGI_BAHAGIAN_KAWALAN_PENYAKIT_BIL.12026_compressed.pdf'],
      ['The Star — Nearly 50 students at Ipoh boarding school suffer flu-like illness (16 Sep 2026)', 'https://www.thestar.com.my/news/nation/2026/09/16/nearly-50-students-at-ipoh-boarding-school-suffer-flu-like-illness'],
      ['CodeBlue — Too few Malaysian adults are protected against influenza (21 May 2026)', 'https://codeblue.galencentre.org/2026/05/too-few-malaysian-adults-are-protected-against-influenza/'],
      ['US CDC — Types of influenza viruses (Sep 2025)', 'https://www.cdc.gov/flu/about/viruses-types.html'],
      ['US CDC — Signs and symptoms of flu', 'https://www.cdc.gov/flu/signs-symptoms/index.html'],
      ['US CDC — How flu spreads', 'https://www.cdc.gov/flu/spread/index.html'],
      ['US CDC — Influenza antiviral medications (Jun 2026)', 'https://www.cdc.gov/flu/treatment/antiviral-drugs.html'],
      ['NHS — Flu (reviewed Feb 2026)', 'https://www.nhs.uk/conditions/flu/'],
      ['WHO — Recommended composition of influenza vaccines for the 2026 southern hemisphere season (26 Sep 2025)', 'https://www.who.int/news/item/26-09-2025-recommendations-announced-for-influenza-vaccine-composition-for-the-2026-southern-hemisphere-influenza-season'],
    ],
    related: ['flu-vaccine-malaysia', 'persistent-cough-malaysia', 'hfmd-children-malaysia'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'stroke-heart-attack-kuala-lumpur',
    title: 'Stroke or heart attack in Kuala Lumpur: the warning signs, what to do, and where to get treated fast',
    crumb: 'Stroke and heart attack in KL',
    desc: 'Stroke and heart attack warning signs (BE FAST), what to do while waiting for 999, the treatment time windows, and which KL hospitals treat stroke and heart attack.',
    excerpt: 'Heart disease is Malaysia’s leading cause of death, and Malaysians have heart attacks younger than people in many countries. How to spot a stroke or heart attack, what to do in the first minutes, and why time matters so much.',
    standfirst: 'Every minute counts in a stroke or heart attack. Treatments that unblock an artery work best in the first few hours, yet many Malaysians reach hospital too late for them. Here is how to recognise the warning signs, what to do while you wait for help, and which hospitals in and around Kuala Lumpur treat stroke and heart attack.',
    cat: 'heart-diabetes', catLabel: 'Heart & diabetes', published: PUB, modified: PUB, author: AUTHOR, news: false, medical: true,
    about: ['Stroke', 'Strok'],
    image: 'caring-hands', imageAlt: 'A younger person holding an older woman’s hands',
    keyPoints: [
      'Heart disease is Malaysia’s leading cause of death, and stroke is consistently among the top three.',
      'Spot a stroke with BE FAST: Balance, Eyes, Face, Arm, Speech, Time to call 999.',
      'Heart attack signs include chest pain or pressure, pain spreading to the arm, jaw or back, breathlessness and sweating. Women, older people and people with diabetes may have no chest pain.',
      'Call 999, or 112 from a mobile, and note the time symptoms started. Clot-busting treatment for stroke must start within 4.5 hours.',
      'Don’t give aspirin for a suspected stroke. For a suspected heart attack, take aspirin only if the 999 operator or a doctor tells you to.',
    ],
    sections: [
      { id: 'why', h: 'Why minutes matter', html: `<p><strong>Ischaemic heart disease is Malaysia’s leading cause of death.</strong> It caused 17,421 deaths in 2024, 13% of medically certified deaths, according to the Department of Statistics. Stroke is consistently among the top three causes, and is estimated to affect more than 50,000 Malaysians a year.</p>
<p>Malaysians also have heart attacks young. In the national heart registry for 2020–2021, the average age at admission with a heart attack or unstable angina was <strong>58.5 years</strong>, and a quarter of patients were under 50.</p>
<p>Most strokes and heart attacks are caused by a blocked artery. In a stroke, about <strong>1.9 million brain cells</strong> die every minute the blockage continues. Yet in a Malaysian stroke study, patients took a median of seven hours or more to reach hospital, too late for the most effective treatments.</p>` },
      { id: 'stroke-signs', h: 'Stroke warning signs: BE FAST', tocLabel: 'Stroke signs', html: `<p>A stroke comes on <strong>suddenly</strong>. Use BE FAST to check, or its Malay version, PeRMATA:</p>
<div class="table-wrap"><table>
<thead><tr><th>BE FAST</th><th>What to look for</th><th>PeRMATA</th></tr></thead>
<tbody>
<tr><td><strong>B</strong>alance</td><td>Sudden dizziness, loss of balance or trouble walking</td><td><strong>Pe</strong>ning</td></tr>
<tr><td><strong>E</strong>yes</td><td>Sudden blurred, double or lost vision</td><td><strong>R</strong>abun</td></tr>
<tr><td><strong>F</strong>ace</td><td>One side of the face droops. Ask them to smile.</td><td><strong>M</strong>uka herot</td></tr>
<tr><td><strong>A</strong>rm</td><td>Weakness or numbness in one arm or leg. Ask them to raise both arms.</td><td><strong>A</strong>ngkat tangan</td></tr>
<tr><td><strong>S</strong>peech</td><td>Slurred speech, or difficulty speaking or understanding</td><td><strong>T</strong>utur</td></tr>
<tr><td><strong>T</strong>ime</td><td>Call 999 now, and note the time symptoms started</td><td><strong>A</strong>ngkat telefon</td></tr>
</tbody></table></div>
<p>Call 999 even if the symptoms go away after a few minutes. This can be a “mini-stroke” (transient ischaemic attack), which is a warning that a major stroke may follow.</p>` },
      { id: 'heart-signs', h: 'Heart attack warning signs', tocLabel: 'Heart attack signs', html: `<ul>
<li><strong>Chest pain, pressure, tightness or squeezing</strong>, lasting more than a few minutes or coming and going</li>
<li>Pain spreading to <strong>one or both arms, the neck, jaw, back or upper stomach</strong></li>
<li>Shortness of breath</li>
<li>Cold sweat, nausea or vomiting, or light-headedness</li>
</ul>
<p><strong>Women, older people and people with diabetes</strong> are more likely to have a heart attack without obvious chest pain. They may feel only breathlessness, nausea, unusual tiredness or discomfort in the back or jaw. Don’t dismiss these as indigestion or “angin”, especially if you have risk factors.</p>
${figure('bp-check-desk', 'A blood pressure monitor on a desk', 'High blood pressure is the main risk factor for both stroke and heart attack, and often has no symptoms.')}` },
      { id: 'what-to-do', h: 'What to do while you wait for help', tocLabel: 'What to do', html: `<ol>
<li><strong>Call 999</strong> (or 112 from a mobile). Say you suspect a stroke or heart attack and give the exact address.</li>
<li><strong>Note the time</strong> symptoms started, or when the person was last seen well. Doctors need this to decide on treatment.</li>
<li><strong>Keep the person still</strong>, sitting or lying in a comfortable position, and loosen tight clothing.</li>
<li><strong>For a suspected stroke:</strong> give nothing to eat or drink, as swallowing may be affected. <strong>Don’t give aspirin</strong>. Some strokes are caused by bleeding, which aspirin can make worse, and only a brain scan can tell.</li>
<li><strong>For a suspected heart attack:</strong> take aspirin only if the 999 operator or a doctor tells you to, and not if you are allergic to it. Use your own heart medicines, such as a GTN spray, as your doctor has advised.</li>
<li><strong>If the person collapses and isn’t breathing normally,</strong> start hands-only CPR: push hard and fast in the centre of the chest, about twice a second, and keep going until help arrives. Ask someone to find an AED (defibrillator) if one is nearby.</li>
<li><strong>Gather</strong> the person’s IC and a list of their medicines.</li>
</ol>
<div class="box box--pink" role="note"><span class="box__title">Don’t go to a GP clinic</span><p style="font-size:16px;line-height:1.6">A GP clinic can’t give clot-busting treatment, and going there first loses precious time. Call 999. If you can’t wait for an ambulance, have someone else drive you straight to a hospital emergency department. Don’t drive yourself.</p></div>` },
      { id: 'ambulance', h: 'Ambulance response times', tocLabel: 'Ambulances', html: `<p>Ambulance response is a known weak spot. In 2025, only <strong>34.01%</strong> of the most urgent (Priority 1) cases were reached within the 15-minute target, against a goal of 50%, the Health Minister told Parliament in October 2026. Budget 2027 funds <strong>400 new ambulances</strong> for Ministry of Health hospitals.</p>
<p>Calling 999 is still the right first step, because it gets trained help on the way. If the ambulance is delayed and the person is stable enough to travel, a family member can drive them to the nearest hospital emergency department.</p>` },
      { id: 'treatment', h: 'Treatments that depend on time', tocLabel: 'Treatment windows', html: `<div class="table-wrap"><table>
<thead><tr><th>Treatment</th><th>What it does</th><th>Time window</th></tr></thead>
<tbody>
<tr><td>Thrombolysis (stroke)</td><td>A clot-busting drug through a drip</td><td>Within 4.5 hours of symptoms starting</td></tr>
<tr><td>Thrombectomy (stroke)</td><td>A thin tube removes a large clot from a brain artery</td><td>Best within 6 hours; up to 24 hours in selected patients</td></tr>
<tr><td>Primary angioplasty (heart attack)</td><td>A balloon and stent reopen the blocked heart artery in a cath lab</td><td>Target: within 90 minutes of arriving at hospital</td></tr>
<tr><td>Thrombolysis (heart attack)</td><td>A clot-busting drug, when angioplasty isn’t quickly available</td><td>Target: within 30 minutes of arriving at hospital</td></tr>
</tbody></table></div>
<p>Malaysian hospitals are getting faster. In the national heart registry for 2020–2021, the median time from arrival to angioplasty was 69.5 minutes, and 63.6% of patients were treated within the 90-minute target. The biggest delay is usually before the patient reaches hospital.</p>` },
      { id: 'hospitals', h: 'Hospitals in and around Kuala Lumpur', tocLabel: 'Hospitals in KL', html: `<p>In an emergency, go to the nearest hospital emergency department, or where the ambulance takes you. Every emergency department can assess you, start treatment and transfer you if a specialist procedure is needed.</p>
<p><strong>Stroke:</strong> these government and university hospitals in the Klang Valley have stroke units and can perform thrombectomy, according to the international Angels Initiative stroke network:</p>
<ul>
<li>Hospital Kuala Lumpur (HKL)</li>
<li>Hospital Sungai Buloh</li>
<li>University Malaya Medical Centre (UMMC)</li>
<li>Hospital Canselor Tuanku Muhriz (HCTM), UKM, Cheras</li>
</ul>
<p>HCTM and Hospital Sultan Abdul Aziz Shah (UPM) in Serdang are certified as advanced stroke centres by the World Stroke Organization.</p>
<p><strong>Heart attack:</strong> the National Heart Institute (IJN) runs a 24-hour heart attack centre for emergency angioplasty, and Hospital Serdang has a large cardiac centre. Major university hospitals and many private hospitals in the Klang Valley also have cath labs and stroke services.</p>
<p>If you have heart disease or have had a stroke, ask your doctor now which hospital you should go to in an emergency, and save the details in your phone.</p>` },
      { id: 'prevention', h: 'Lower your risk', html: `<p>Most strokes and heart attacks are linked to risk factors you can check and treat. Among Malaysian adults, according to the National Health and Morbidity Survey 2023:</p>
<ul>
<li><strong>29.2% have high blood pressure</strong>, and 11.9% have it without knowing.</li>
<li>15.6% have diabetes and 33.3% have high cholesterol.</li>
<li>19.0% smoke, and 29.9% are physically inactive.</li>
</ul>
<p>Check your blood pressure at least once a year from age 18, and your blood sugar and cholesterol from age 30. Many people qualify for <a href="/articles/free-health-screening-malaysia/">free health screening</a>. You can also <a href="/articles/check-blood-pressure-at-home/">check your blood pressure at home</a>. Take medicines as prescribed, stop smoking, and aim for 150 minutes of activity a week.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Check your risk at a GP clinic',
    clinicsTocLabel: 'Check your risk',
    clinicsIntro: 'For prevention, not emergencies: a GP can check your blood pressure, blood sugar and cholesterol, and manage them over time. For stroke or heart attack symptoms, call 999. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-late/', 'Clinics open late'], ['/clinics/open-saturday/', 'Clinics open on Saturday']],
    faqs: [
      ['What are the warning signs of a stroke?', 'Use BE FAST: sudden loss of Balance, blurred or lost vision (Eyes), a drooping Face, weakness in one Arm or leg, slurred Speech. Then it’s Time to call 999. In Malay, the same signs are remembered as PeRMATA.'],
      ['Should I give aspirin to someone having a stroke?', 'No. Some strokes are caused by bleeding in the brain, which aspirin can make worse. Only a brain scan can tell the difference, so give nothing by mouth and call 999.'],
      ['Should I take aspirin during a heart attack?', 'Only if the 999 operator or a doctor tells you to, and not if you are allergic to aspirin. Call 999 first.'],
      ['How long do you have to treat a stroke?', 'Clot-busting treatment must start within 4.5 hours of symptoms starting. Removing a large clot (thrombectomy) works best within 6 hours, and up to 24 hours in selected patients. The sooner, the better.'],
      ['Which hospitals in KL treat stroke?', 'Hospital Kuala Lumpur, Hospital Sungai Buloh, University Malaya Medical Centre and Hospital Canselor Tuanku Muhriz (UKM) have stroke units and can remove clots. In an emergency, call 999 and go to the nearest emergency department.'],
      ['Can women have a heart attack without chest pain?', 'Yes. Women, older people and people with diabetes are more likely to have breathlessness, nausea, unusual tiredness or back or jaw discomfort instead of classic chest pain.'],
    ],
    sources: [
      ['Department of Statistics Malaysia — Statistics on Causes of Death, Malaysia 2025 (18 Dec 2025)', 'https://www.dosm.gov.my/portal-main/release-content/statistics-on-causes-of-death-malaysia-2025'],
      ['Department of Statistics Malaysia — Statistics on Causes of Death, Malaysia 2024', 'https://www.dosm.gov.my/portal-main/release-content/statistics-on-causes-of-death-malaysia-2024'],
      ['National Heart Association of Malaysia — NCVD Acute Coronary Syndrome Registry Report 2020–2021', 'https://www.acrm.org.my/ncvd/documents/report/ACS%20Report%202020-2021_Final.pdf'],
      ['The Star — Nationwide walk of hope celebrates life after stroke (10 Nov 2025)', 'https://www.thestar.com.my/metro/metro-news/2025/11/10/nationwide-walk-of-hope-celebrates-life-after-stroke'],
      ['CodeBlue — Malaysian stroke patients take average seven hours to reach hospital (28 Dec 2022)', 'https://codeblue.galencentre.org/2022/12/28/malaysian-stroke-patients-take-average-seven-hours-for-hospital-arrival/'],
      ['CodeBlue — Experts want better coordination across stroke care in Malaysia (9 Dec 2025)', 'https://codeblue.galencentre.org/2025/12/experts-want-better-coordination-across-stroke-care-in-malaysia/'],
      ['Bernama — PeRMATA stroke awareness campaign (27 Oct 2021)', 'https://www.bernama.com/bm/news.php?id=2017145'],
      ['Saver JL — Time is brain, quantified. Stroke, 2006', 'https://pubmed.ncbi.nlm.nih.gov/16339467/'],
      ['American Heart Association — Warning signs of a heart attack', 'https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack'],
      ['Bernama — Ambulance response times in 2025 (12 Oct 2026)', 'https://bernama.com/en/news.php?id=2618890'],
      ['Angels Initiative — Hospital Kuala Lumpur', 'https://www.angels-initiative.com/organizations/hospital-kuala-lumpur'],
      ['Angels Initiative — Hospital Sungai Buloh', 'https://www.angels-initiative.com/organizations/hospital-sungai-buloh'],
      ['Angels Initiative — University Malaya Medical Centre', 'https://www.angels-initiative.com/organizations/university-malaya-medical-centre'],
      ['Angels Initiative — Hospital Canselor Tuanku Muhriz UKM', 'https://www.angels-initiative.com/organizations/hospital-canselor-tuanku-muhriz-ukm'],
      ['New Straits Times — IJN enhances heart attack emergency service (25 Apr 2019)', 'https://www.nst.com.my/amp/lifestyle/heal/2019/04/482786/ijn-enhances-heart-attack-emergency-service'],
      ['Institute for Public Health — National Health and Morbidity Survey 2023 fact sheet', 'https://iku.moh.gov.my/images/nhms2023/fact-sheet-nhms-2023.pdf'],
    ],
    related: ['clinic-or-emergency-department', 'check-blood-pressure-at-home', 'undiagnosed-diabetes-high-blood-pressure-young-adults'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'thalassaemia-screening-malaysia',
    title: 'Thalassaemia screening in Malaysia: who gets free tests, and what a carrier result means',
    crumb: 'Thalassaemia screening in Malaysia',
    desc: 'About 1 in 20 Malaysians carries thalassaemia. Who gets free screening, including Budget 2027’s expansion, how the blood test works, and what carrier results mean.',
    excerpt: 'About 1 in 20 Malaysians carries a thalassaemia gene, usually without knowing it. Who can get screened for free, how the test works, and what to do if you or your partner is a carrier.',
    standfirst: 'About 1 in 20 Malaysians carries a gene for thalassaemia (also spelled thalassemia), usually without any symptoms. If two carriers have children, each child has a 1 in 4 chance of a serious, lifelong blood disorder. Here is who can be screened for free, including the families newly covered by Budget 2027, how the test works, and what your result means.',
    cat: 'prevention', catLabel: 'Prevention', published: PUB, modified: PUB, author: AUTHOR, news: true, medical: true,
    about: ['Thalassemia', 'Talasemia'],
    image: 'paediatrician', imageAlt: 'A doctor listening to a baby’s chest with a stethoscope',
    keyPoints: [
      'Thalassaemia is an inherited blood disorder. Carriers (thalassaemia trait) are healthy and need no treatment, but can pass the gene to their children.',
      'About 1 in 20 Malaysians is a carrier. Of more than 920,000 Form 4 students screened between 2017 and 2020, 5.8% were carriers.',
      'If both parents are carriers, each pregnancy has a 1 in 4 chance of a child with thalassaemia major.',
      'Free screening is offered to Form 4 students, pregnant women and relatives of carriers. Budget 2027 extends it to husbands and children in at-risk carrier families.',
      'Screening starts with a full blood count. Small red blood cells (MCV below 80 fL or MCH below 27 pg) lead to a haemoglobin analysis.',
    ],
    sections: [
      { id: 'what', h: 'What is thalassaemia?', html: `<p>Thalassaemia is a group of inherited conditions in which the body makes too little normal haemoglobin, the protein in red blood cells that carries oxygen. The main types in Malaysia are <strong>alpha thalassaemia</strong>, <strong>beta thalassaemia</strong> and <strong>haemoglobin E (HbE)</strong>, which can combine with beta thalassaemia.</p>
<p>There is a big difference between carrying the gene and having the disease:</p>
<ul>
<li><strong>Carrier (thalassaemia trait or minor):</strong> one altered gene. Carriers are healthy, may have slightly small red blood cells or mild anaemia, and need no treatment. Most don’t know they are carriers.</li>
<li><strong>Thalassaemia major and other severe forms:</strong> two altered genes. Severe forms need blood transfusions every few weeks for life, plus daily medicine to remove the extra iron that transfusions build up in the body. Milder forms may need transfusions only sometimes.</li>
</ul>
<p>Malaysia’s Ministry of Health now groups patients by whether they depend on regular transfusions (transfusion-dependent thalassaemia) or not.</p>` },
      { id: 'how-common', h: 'How common is it in Malaysia?', tocLabel: 'How common it is', html: `<p>Thalassaemia is one of the most common inherited conditions in Malaysia. Between 2017 and 2020, <strong>924,487 Form 4 students</strong> were screened, and <strong>53,559 (5.8%)</strong> were carriers, about 1 in 17. Rates differ between states and communities. In February 2026, the Health Minister told Parliament that carrier rates were highest in Sabah, Selangor and Kedah.</p>
<p>The Malaysian Thalassaemia Registry’s 2023 report lists <strong>9,554 patients</strong> treated in public hospitals. Lifelong treatment is expensive: the Health Ministry estimates about <strong>RM3 million per patient</strong> from infancy to age 40.</p>
<p>Screening is working. New thalassaemia births fell by about half between 2009 and 2021, and the national programme aims to cut them by up to 75% by 2030.</p>` },
      { id: 'inheritance', h: 'How thalassaemia is passed on', tocLabel: 'How it is passed on', html: `<p>Everyone has two copies of the genes involved, one from each parent. When <strong>both parents are carriers</strong> of the same type, each pregnancy has:</p>
<div class="table-wrap"><table>
<thead><tr><th>Chance</th><th>Child’s result</th></tr></thead>
<tbody>
<tr><td>1 in 4 (25%)</td><td>Thalassaemia major or another severe form</td></tr>
<tr><td>1 in 2 (50%)</td><td>Carrier, like the parents</td></tr>
<tr><td>1 in 4 (25%)</td><td>Not affected and not a carrier</td></tr>
</tbody></table></div>
<p>These chances are the same for every pregnancy. Having one affected child doesn’t make the next one safer. When <strong>only one parent is a carrier</strong>, each child has a 1 in 2 chance of being a carrier, but not of having a severe form from those genes.</p>
<p>This is why screening matters most for couples planning to marry or have children, and for the family of anyone found to be a carrier.</p>
${figure('mother-child', 'A mother and daughter sitting together', 'If one family member is a carrier, parents, brothers, sisters and children may be carriers too.')}` },
      { id: 'budget-2027', h: 'What Budget 2027 changes', tocLabel: 'Budget 2027 changes', html: `<p>Budget 2027, tabled on 9 October 2026, extends <strong>free thalassaemia screening by the Ministry of Health to husbands and children in at-risk carrier families</strong>, to reduce the number of babies born with thalassaemia major.</p>
<p>In practice, this means that if a woman is found to be a carrier, for example during pregnancy, her husband and children can be screened for free. The government has not yet announced a start date or how families will be called for screening. Ask at your Klinik Kesihatan if you think your family qualifies.</p>` },
      { id: 'who', h: 'Who is screened for free', tocLabel: 'Free screening', html: `<ul>
<li><strong>Form 4 students:</strong> the national school programme has offered free screening since 2016, with parents’ written consent. Each student gets a Thalassaemia Screening Card showing their result.</li>
<li><strong>Pregnant women:</strong> screened as part of antenatal care at government clinics since 2009.</li>
<li><strong>Relatives of carriers and patients:</strong> parents, brothers, sisters and children (known as cascade screening).</li>
<li><strong>From 2027:</strong> husbands and children in at-risk carrier families, under Budget 2027.</li>
<li><strong>Anyone who asks:</strong> government health clinics also offer voluntary screening, including for couples planning to marry. Premarital thalassaemia screening is voluntary in Malaysia, unlike HIV screening for Muslim couples.</li>
</ul>
<p>Keep your screening card or result safely. You only need to be screened once, as your genes don’t change.</p>` },
      { id: 'test', h: 'How the test works', tocLabel: 'The test', html: `<ol>
<li><strong>Full blood count (FBC):</strong> a routine blood test. Thalassaemia is suspected if your red blood cells are small, with an MCV below 80 fL or an MCH below 27 pg.</li>
<li><strong>Haemoglobin analysis:</strong> a laboratory test (HPLC or capillary electrophoresis) that identifies beta thalassaemia, HbE and some other types.</li>
<li><strong>DNA analysis:</strong> done when needed, mainly to confirm alpha thalassaemia, which a haemoglobin analysis can miss.</li>
</ol>
<p>You don’t usually need to fast. Some types, including mild alpha thalassaemia and HbE, can show normal red cell sizes, so a normal FBC doesn’t always rule out being a carrier. If thalassaemia runs in your family, tell the doctor.</p>
${figure('blood-sample', 'A blood sample tube being prepared for testing', 'Screening starts with a routine full blood count, the same test used in a health check.')}` },
      { id: 'iron', h: 'Thalassaemia trait or iron deficiency?', tocLabel: 'Trait or low iron?', html: `<p>Both thalassaemia trait and iron deficiency cause small red blood cells, and both are common in Malaysia, so they are easily confused. A doctor can tell them apart with an iron test (ferritin) and a haemoglobin analysis.</p>
<ul>
<li><strong>Don’t start iron tablets</strong> just because a blood test shows small red cells or mild anaemia. Iron doesn’t help thalassaemia trait, and extra iron can build up over time.</li>
<li>Severe iron deficiency can hide beta thalassaemia trait on the haemoglobin analysis. Your doctor may treat the iron deficiency first and repeat the test, although couples at risk should still be fully tested.</li>
</ul>` },
      { id: 'results', h: 'If you or your partner is a carrier', tocLabel: 'If you are a carrier', html: `<ul>
<li><strong>You are healthy.</strong> Being a carrier doesn’t turn into thalassaemia major, and you don’t need treatment.</li>
<li><strong>Tell your family.</strong> Your parents, brothers, sisters and children may also be carriers and can be screened.</li>
<li><strong>Test your partner</strong> before or early in pregnancy. If only one of you is a carrier, your children cannot have a severe form from those genes.</li>
<li><strong>If you are both carriers,</strong> ask for <strong>genetic counselling</strong>. A counsellor will explain your options without pressure. These include testing a pregnancy early by chorionic villus sampling (CVS) or amniocentesis, which carry a small risk of miscarriage, or IVF with genetic testing of embryos before pregnancy. Some of the DNA tests are done by private laboratories, so ask about costs.</li>
</ul>
<div class="box box--pink" role="note"><span class="box__title">See a doctor if a child has</span><ul><li>Pale skin, poor feeding or slow growth</li><li>Unusual tiredness or breathlessness</li><li>A swollen tummy or yellow eyes</li></ul><p style="font-size:16px;line-height:1.6">Severe thalassaemia usually shows in the first two years of life.</p></div>` },
      { id: 'where', h: 'Where to get screened in Kuala Lumpur', tocLabel: 'Where to get screened', html: `<p><strong>Klinik Kesihatan</strong> (government health clinics) offer free walk-in, voluntary and family screening. Bring your MyKad, and if you are a relative of a carrier, their screening card or result.</p>
<p>Private GP clinics can do a full blood count and send blood for haemoglobin analysis at a private laboratory, for a fee. Children with thalassaemia in Kuala Lumpur are treated at government hospitals, including Hospital Tunku Azizah, which also offers stem cell transplants, the only established cure.</p>` },
    ],
    clinicsMode: 'directory',
    clinicsHeading: 'Find a clinic for a blood test',
    clinicsTocLabel: 'Find a clinic',
    clinicsIntro: 'Any GP clinic can do a full blood count and arrange further tests if your red blood cells are small. Our directory lists GP clinics across Kuala Lumpur, Selangor and other states, with opening hours and directions.',
    clinicLinks: [['/clinics/gp-clinics/', 'GP clinics'], ['/clinics/open-saturday/', 'Clinics open on Saturday'], ['/clinics/open-late/', 'Clinics open late']],
    faqs: [
      ['Is thalassaemia screening free in Malaysia?', 'Yes, for Form 4 students, pregnant women, relatives of carriers and patients, and anyone who asks at a government health clinic. Budget 2027 extends free screening to husbands and children in at-risk carrier families.'],
      ['How common is thalassaemia in Malaysia?', 'About 1 in 20 Malaysians is a carrier. Among more than 920,000 Form 4 students screened between 2017 and 2020, 5.8% were carriers.'],
      ['What is the difference between thalassaemia minor and major?', 'Thalassaemia minor (trait) means you carry one altered gene. You are healthy and need no treatment. Thalassaemia major means two altered genes and usually needs regular blood transfusions for life.'],
      ['If both parents are thalassaemia carriers, will the baby have it?', 'Not necessarily. Each pregnancy has a 1 in 4 chance of thalassaemia major, a 1 in 2 chance of being a carrier, and a 1 in 4 chance of being unaffected. Genetic counselling can explain your options.'],
      ['Which blood test detects thalassaemia?', 'Screening starts with a full blood count. If the red cells are small (MCV below 80 fL or MCH below 27 pg), a haemoglobin analysis follows, and sometimes DNA analysis for alpha thalassaemia.'],
      ['Is premarital thalassaemia screening compulsory in Malaysia?', 'No. Premarital thalassaemia screening is voluntary, although it is strongly encouraged. HIV screening is the premarital test that is compulsory for Muslim couples.'],
    ],
    sources: [
      ['MOH / MaHTAS — Clinical Practice Guidelines: Management of Thalassaemia, 2nd edition (2024)', 'https://mymahtas2.moh.gov.my/files/e-CPG%20Thalas-16_8_25.pdf'],
      ['Ministry of Finance — Budget 2027 speech (9 Oct 2026)', 'https://belanjawan.mof.gov.my/pdf/belanjawan2027/ucapan/ub27.pdf'],
      ['Bernama — Health Ministry gets RM47.7 bln to strengthen healthcare services (9 Oct 2026)', 'https://bernama.com/en/general/news.php?id=2617970'],
      ['The Star — Thalassaemia treatment costs RM3mil per patient, Parliament told (23 Feb 2026)', 'https://www.thestar.com.my/news/nation/2026/02/23/thalassemia-treatment-costs-rm3mil-per-patient-parliament-heard'],
      ['Berita RTM — 57,910 students identified as thalassaemia carriers (23 Feb 2026)', 'https://berita.rtm.gov.my/nasional/senarai-berita-nasional/senarai-artikel/57910-murid-dikesan-pembawa-talasemia/'],
      ['MyGOV — Premarital HIV screening (updated Aug 2026)', 'https://www.malaysia.gov.my/my/topics/ujian-saringan-hiv-praperkahwinan'],
    ],
    related: ['budget-2027-health-malaysia', 'free-health-screening-malaysia', 'hpv-vaccine-malaysia'],
  },
];
