/**
 * Alle teksten, prijzen en instellingen van soos.studio staan in dit bestand.
 * Pas hier iets aan, push naar GitHub, en de site werkt zichzelf bij.
 */

export const site = {
  naam: 'soos.studio',
  domein: 'https://soos.studio',
  beschrijving:
    'soos.studio is de contentstudio van Isabella Koper. Foto’s en reels op locatie voor lokale bedrijven — eerlijk, persoonlijk en plaatsklaar.',

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
    'Ik ben Isabella. Ik maak foto’s en reels op locatie voor lokale bedrijven — en regel als je wilt ook het plaatsen. Geen loze beloftes over views of volgers, wél consistente, professionele content die klanten binnenhaalt.',
  ctaPrimair: 'Plan een kennismaking',
  ctaSecundair: 'Bekijk pakketten',
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
        'Geen bureau met wisselende gezichten. Isabella ként je zaak, je stijl en je klanten — en dat zie je terug in de content.',
    },
    {
      titel: 'Lokaal, komt langs',
      tekst:
        'Geshoot op jouw locatie, in jouw omgeving. Echte mensen, echt licht, echte sfeer — geen stockfoto’s.',
    },
    {
      titel: 'Plaatsklaar, zonder gedoe',
      tekst:
        'Reels met ondertiteling, in de juiste formaten voor Instagram, TikTok, Facebook en Pinterest. Jij hoeft er niets meer aan te doen.',
    },
    {
      titel: 'Eerlijk over wat werkt',
      tekst:
        'Geen garanties op views of volgers — die kan niemand waarmaken. Wel professionele content, consequent gemaakt en geplaatst.',
    },
  ],
};

export const foundingLocals = {
  label: 'Nog 5 plekken',
  kop: 'Founding Locals',
  intro: 'Voor de eerste 5 lokale bedrijven:',
  tekst:
    'Start met een gratis kennismakingsshoot (één ochtend, 4 plaatsklare reels) — zo zie je de kwaliteit zonder risico. Daarna neem je 3 maanden pakket Shoot of Ontzorgd af met 30% launch-korting. In ruil mag Isabella de content in haar portfolio gebruiken en geef je een korte videotestimonial, een review en een vermelding. Zo help je een lokale ondernemer op weg én krijg je zelf topcontent voor een zachte prijs.',
  bonus:
    'Breng een ondernemer aan en jullie krijgen allebei een maand 20% korting.',
  cta: 'Claim jouw kennismakingsshoot',
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
    'Hier komt binnenkort werk van de eerste Founding Locals. Jouw zaak hier ook?',
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
        'Nee — en wees voorzichtig met wie dat wél belooft. Wat ik wel garandeer: consistente, professionele content die je bedrijf online op de kaart zet. Dat is wat op de lange termijn klanten binnenhaalt.',
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
    'Vertel kort iets over je zaak, dan neemt Isabella binnen twee werkdagen contact op. Vrijblijvend — een kop koffie is genoeg om te weten of het klikt.',
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
    'Geen loze beloftes over views of volgers — wél content die je zaak op de kaart zet.',
};
