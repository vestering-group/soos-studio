/**
 * Alle teksten, prijzen en instellingen van soos.studio staan in dit bestand.
 * Pas hier iets aan, push naar GitHub, en de site werkt zichzelf bij.
 */

export const site = {
  naam: 'soos.studio',
  domein: 'https://soos.studio',
  beschrijving:
    'soos.studio is de contentstudio van Isabella Koper. Reels en foto’s op locatie die lokale bedrijven nieuwe klanten opleveren — plaatsklaar, elke maand.',

  // In te vullen door Isabella:
  email: 'hallo@soos.studio', // TODO: definitief e-mailadres
  telefoon: '', // TODO: telefoonnummer (optioneel)
  kvk: '', // TODO: KvK-nummer
  instagram: 'https://instagram.com/soos.studio', // TODO: controleer handle
  tiktok: '', // TODO: TikTok-link
  // Maak een gratis formulier aan op formspree.io en plak het ID hieronder,
  // bijv. 'https://formspree.io/f/abcdwxyz'. Tot die tijd valt het formulier
  // terug op een e-maillink.
  formspreeEndpoint: '',
};

export const hero = {
  // De kop wordt gesplitst rond [foto] — daar komt de inline foto in de zin.
  kopVoor: 'Content die jouw zaak laat zien',
  kopFotoAlt: 'Isabella aan het werk op locatie',
  kopNa: 'zoals ’ie écht is.',
  subkop:
    'Ik ben Isabella. Eén ochtend per maand sta ik met mijn camera in jouw zaak — en jij krijgt een maand aan plaatsklare reels en foto’s die nieuwe klanten binnenbrengen. Jij runt je zaak, ik regel je socials.',
  ctaPrimair: 'Plan een kennismaking',
  ctaSecundair: 'Bekijk pakketten',
};

export const cijfers = {
  label: 'De kans',
  kop: 'Jouw klanten zitten al op social media.',
  intro:
    'Ze scrollen, zoeken en beslissen daar — élke dag. De enige vraag is wat ze vinden als jouw zaak voorbijkomt.',
  stats: [
    {
      getal: '8,2 mln',
      tekst: 'Nederlanders gebruiken Instagram',
      bron: 'Newcom, Nationale Social Media Onderzoek 2025',
      bronUrl: 'https://www.newcom.nl/nationale-sociale-media-onderzoek/',
    },
    {
      getal: '58%',
      tekst: 'van consumenten ontdekt nieuwe bedrijven via social media',
      bron: 'Sprout Social',
      bronUrl: 'https://sproutsocial.com/insights/social-media-statistics/',
    },
    {
      getal: '74%',
      tekst: 'van gasten beslist via social media waar ze gaan eten',
      bron: 'Tablein',
      bronUrl: 'https://www.tablein.com/blog/restaurant-social-media-marketing-statistics',
    },
    {
      getal: '93%',
      tekst: 'van kleine ondernemers komt er zelf niet goed aan toe',
      bron: 'Simply Measured',
      bronUrl: 'https://www.prnewswire.com/news-releases/93-of-small-businesses-struggle-with-common-social-media-challenges-301238532.html',
    },
  ],
  slot: 'Korte video’s — precies wat Isabella maakt — zijn volgens marketeers hét contentformat met de hoogste ROI. Het enige dat jij nodig hebt, is iemand die ze elke maand voor je maakt.',
  slotBron: 'HubSpot',
  slotBronUrl: 'https://blog.hubspot.com/marketing/video-marketing-statistics',
};

export const voorWie = {
  label: 'Voor wie',
  kop: 'Voor de zaken waar je buurt van houdt.',
  doelgroepen: [
    'cafés, lunchrooms & restaurants',
    'kappers, beauty & nagelstudio’s',
    'boetieks & winkels',
    'yoga & fitness',
    'bakkers',
    'interieur- & woonzaken',
  ],
};

export const usps = {
  label: 'Waarom soos.studio',
  punten: [
    {
      titel: 'Één vast gezicht',
      tekst:
        'Isabella ként je zaak, je stijl en je klanten — en dat zie je terug in élke post. Persoonlijker dan een bureau, professioneler dan zelf doen.',
    },
    {
      titel: 'Geshoot in jouw zaak',
      tekst:
        'Echte mensen, echt licht, échte sfeer. Content waarin jouw klanten zichzelf en hun buurt herkennen — daar stoppen ze voor met scrollen.',
    },
    {
      titel: 'Plaatsklaar, zonder gedoe',
      tekst:
        'Reels met ondertiteling, in de juiste formaten voor Instagram, TikTok, Facebook en Pinterest. Jij hoeft er niets meer aan te doen.',
    },
    {
      titel: 'Consistentie die verkoopt',
      tekst:
        'Op social media wint wie er elke week staat. Isabella zorgt voor een vast ritme, dus jouw zaak blijft in beeld — ook als jij het druk hebt.',
    },
  ],
};

export const foundingLocals = {
  label: 'Nog 5 plekken',
  kop: 'Founding Locals',
  intro: 'Alleen voor de eerste 5 lokale bedrijven:',
  tekst:
    'Je start met een gratis kennismakingsshoot: één ochtend, 4 plaatsklare reels — zie de kwaliteit voordat je iets uitgeeft. Bevalt het? Dan krijg je 3 maanden pakket Shoot of Ontzorgd met 30% launch-korting, plus de kickoff- & strategiesessie (t.w.v. €150) cadeau. In ruil mag Isabella de content in haar portfolio gebruiken en geef je een korte videotestimonial en review.',
  bonus:
    'Breng een ondernemer aan en jullie krijgen allebei een maand 20% korting.',
  cta: 'Claim jouw gratis kennismakingsshoot',
};

export const pakketten = {
  label: 'Pakketten',
  kop: 'Drie manieren om het uit handen te geven.',
  voorwaarden: 'Alle prijzen excl. btw · maandelijks opzegbaar na de eerste 3 maanden',
  items: [
    {
      naam: 'Plaatsen',
      prijs: '€225',
      periode: 'p/m',
      populair: false,
      tekst:
        'Jij levert de content aan, Isabella regelt de rest: captions schrijven, hashtags, inplannen en plaatsen op je kanalen in een vast ritme. Ongeveer 12–16 posts per maand, 1–2 platforms. Consistentie zonder dat jij eraan hoeft te denken.',
    },
    {
      naam: 'Shoot',
      prijs: '€495',
      periode: 'p/m',
      populair: true,
      tekst:
        'Eén ochtend per maand komt Isabella bij je langs en shoot op locatie. Je krijgt 6–8 plaatsklare reels én een set foto’s, met ondertiteling en in de juiste formaten voor elk platform. Jij plaatst ze zelf, wanneer het jou uitkomt.',
    },
    {
      naam: 'Ontzorgd',
      prijs: '€795',
      periode: 'p/m',
      populair: false,
      tekst:
        'Alles uit Shoot, én Isabella plaatst alles op je kanalen én doet de community: reageren op comments en DM’s. Volledige ontzorging — jij hoeft nergens meer naar om te kijken.',
    },
  ],
};

export const losseDiensten = {
  label: 'Losse diensten',
  kop: 'Ook los te boeken.',
  items: [
    { naam: 'UGC-video’s op aanvraag', prijs: '1 video €150 · 3 video’s €395 · 5 video’s €595' },
    { naam: 'Losse bedrijfsfotografie op locatie', prijs: 'dagdeel €425 · hele dag €695' },
    { naam: 'Extra reel bovenop een pakket', prijs: '€85 per reel' },
    { naam: 'Community management bij pakket Shoot', prijs: '€125 p/m' },
    { naam: 'Kickoff- & strategiesessie met kanaaloptimalisatie', prijs: 'eenmalig €150 · gratis bij Founding Locals' },
  ],
  voetnoot: 'Reiskosten €0,25/km buiten de eigen regio.',
};

export const werkwijze = {
  label: 'Werkwijze',
  kop: 'Zo gaat het in z’n werk.',
  stappen: [
    { titel: 'Kennismaken', tekst: 'We bespreken je bedrijf, je stijl en je doelen.' },
    { titel: 'Plan & concept', tekst: 'Isabella bedenkt de content en een ritme dat bij je past.' },
    { titel: 'Shooten op locatie', tekst: 'Eén ontspannen ochtend, jij runt je zaak, Isabella filmt en fotografeert.' },
    { titel: 'Monteren', tekst: 'Pakkende, plaatsklare reels en foto’s, in de juiste formaten.' },
    { titel: 'Jij keurt goed', tekst: 'Niets gaat online zonder jouw akkoord.' },
    { titel: 'Plaatsen & reageren', tekst: 'Jij plaatst zelf, of Isabella doet het én beheert de reacties. Jij bepaalt.' },
  ],
};

export const portfolio = {
  label: 'Werk',
  kop: 'Recent werk.',
  tekst:
    'Hier komt het werk van de eerste Founding Locals. Eén van deze plekken kan van jouw zaak zijn.',
  // Tijdelijke mockup-beelden (Unsplash, vrij te gebruiken). Vervang ze in
  // /public/portfolio/ door echte reels en foto's met dezelfde bestandsnamen,
  // of pas de lijst hieronder aan.
  items: [
    { src: 'portfolio/reel-placeholder-1.jpg', alt: 'Reel: gerecht in een restaurant', type: 'reel' },
    { src: 'portfolio/foto-placeholder-1.jpg', alt: 'Foto: interieur van een lunchroom', type: 'foto' },
    { src: 'portfolio/reel-placeholder-2.jpg', alt: 'Reel: koffie proosten in een café', type: 'reel' },
    { src: 'portfolio/reel-placeholder-3.jpg', alt: 'Reel: nagelstudio aan het werk', type: 'reel' },
    { src: 'portfolio/foto-placeholder-2.jpg', alt: 'Foto: interieur van een boetiek', type: 'foto' },
    { src: 'portfolio/reel-placeholder-4.jpg', alt: 'Reel: yoga bij zonsondergang', type: 'reel' },
  ],
};

export const overIsabella = {
  label: 'Over Isabella',
  kop: 'Eén gezicht achter je content.',
  fotoAlt: 'Portret van Isabella Koper',
  tekst: [
    'soos.studio is de studio van Isabella Koper. Ze werkt alleen — bewust. Zo weet je precies wie er in je zaak staat, wie je appt en wie je content maakt.',
    'Isabella heeft ruime ervaring op Instagram, TikTok, Facebook en Pinterest en shoot met haar eigen camera, dus je krijgt professionele foto’s én reels uit één hand.',
    'Ze werkt lokaal en komt gewoon bij je langs. Want de beste content ontstaat niet in een studio, maar op de plek waar jouw klanten al van houden.',
  ],
};

export const faq = {
  label: 'FAQ',
  kop: 'Veelgestelde vragen.',
  items: [
    {
      vraag: 'Garandeer je views of volgers?',
      antwoord:
        'Niemand kan specifieke aantallen garanderen — wees voorzichtig met wie dat wél belooft. Wat ik garandeer: elke maand professionele, plaatsklare content en een consistent ritme op je kanalen. Dat is precies wat op social media het verschil maakt tussen onzichtbaar zijn en gevonden worden.',
    },
    {
      vraag: 'Kan ik maandelijks opzeggen?',
      antwoord:
        'Ja, na de eerste 3 maanden zijn alle pakketten maandelijks opzegbaar. Die eerste periode is nodig om ritme en herkenbaarheid op te bouwen.',
    },
    {
      vraag: 'Op welke platforms werk je?',
      antwoord:
        'Instagram, TikTok, Facebook en Pinterest. Alle content wordt geleverd in de juiste formaten per platform, inclusief ondertiteling bij reels.',
    },
    {
      vraag: 'Rekent je reiskosten?',
      antwoord:
        'Binnen de eigen regio niet. Daarbuiten €0,25 per kilometer.',
    },
    {
      vraag: 'Wat als ik de content niet goed vind?',
      antwoord:
        'Niets gaat online zonder jouw akkoord. Je keurt alles eerst goed — dat is een vaste stap in de werkwijze.',
    },
  ],
};

export const contact = {
  label: 'Contact',
  kop: 'Zullen we kennismaken?',
  tekst:
    'Vertel kort iets over je zaak, dan hoor je binnen twee werkdagen van Isabella. Vrijblijvend — één kop koffie en je weet of het klikt. En wie weet sta jij volgende maand als eerste Founding Local online.',
  typeBedrijfOpties: [
    'Horeca (café, lunchroom, restaurant)',
    'Kapper / beauty / nagelstudio',
    'Boetiek / winkel',
    'Yoga / fitness',
    'Bakker',
    'Interieur / wonen',
    'Anders',
  ],
  pakketOpties: [
    'Founding Locals-actie',
    'Pakket Plaatsen (€225 p/m)',
    'Pakket Shoot (€495 p/m)',
    'Pakket Ontzorgd (€795 p/m)',
    'Losse dienst (UGC / fotografie)',
    'Weet ik nog niet',
  ],
};

export const footer = {
  belofte:
    'Elke maand professionele, plaatsklare content die jouw zaak op de kaart zet.',
};
