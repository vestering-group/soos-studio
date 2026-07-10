# Projectbrief — soos.studio

Dit document beschrijft de uitgangspunten achter de website van soos.studio: het merk, de doelgroep, het aanbod en de structuur van de site. De actuele teksten en prijzen staan in [`src/content/site.ts`](../src/content/site.ts); het designsysteem in [`DESIGN.md`](../DESIGN.md).

## Het merk

**soos.studio** is de persoonlijke contentstudio van Isabella Koper. Isabella helpt lokale bedrijven met hun aanwezigheid op social media: ze maakt foto's en reels op locatie en verzorgt optioneel het plaatsen en de community. Ze werkt bewust alleen, met ruime ervaring op Instagram, TikTok, Facebook en Pinterest.

**Tone of voice:** persoonlijk, nuchter, warm, zonder marketing-jargon — alsof Isabella zelf tegen je praat. De naam wordt altijd klein geschreven: *soos.studio*.

**Kernbelofte:** geen loze garanties op views of volgers — wél consistente, professionele content die je bedrijf online op de kaart zet en klanten binnenhaalt.

## Doelgroep

Lokale ondernemers:

- horeca (café, lunchroom, restaurant)
- kappers, beauty- en nagelstudio's
- boetieks en winkels
- yoga en fitness
- bakkers
- interieur- en woonzaken

## Onderscheidend vermogen

1. **Eén vast, herkenbaar gezicht** — geen bureau met wisselende contactpersonen.
2. **Lokaal, komt langs** — content wordt op locatie geschoten.
3. **Plaatsklare content** — reels met ondertiteling, in de juiste formaten per platform.
4. **Eerlijk** — duidelijk over wat wel en niet beloofd kan worden.

## Aanbod

### Pakketten (excl. btw, maandelijks opzegbaar na de eerste 3 maanden)

| Pakket | Prijs | Inhoud |
|---|---|---|
| Plaatsen | €225 p/m | Klant levert content aan; captions, hashtags, inplannen en plaatsen (±12–16 posts, 1–2 platforms) |
| Shoot ⭐ | €495 p/m | Eén shoot-ochtend per maand op locatie; 6–8 plaatsklare reels + fotoset |
| Ontzorgd | €795 p/m | Alles uit Shoot + plaatsen + communitymanagement (comments & DM's) |

### Losse diensten

- UGC-video's: 1 × €150 · 3 × €395 · 5 × €595
- Bedrijfsfotografie op locatie: dagdeel €425 · hele dag €695
- Extra reel bij een pakket: €85
- Communitymanagement bij pakket Shoot: €125 p/m
- Kickoff- & strategiesessie: eenmalig €150 (gratis bij de Founding Locals-actie)
- Reiskosten: €0,25/km buiten de eigen regio

### Lanceeractie — Founding Locals

Voor de eerste 5 lokale bedrijven: een gratis kennismakingsshoot (één ochtend, 4 plaatsklare reels), gevolgd door 3 maanden pakket Shoot of Ontzorgd met 30% korting. In ruil: portfolio-gebruik van de content, een videotestimonial, review en vermelding. Referral-bonus: wie een ondernemer aanbrengt krijgt (net als de aangebrachte ondernemer) een maand 20% korting.

## Werkwijze

1. **Kennismaken** — bedrijf, stijl en doelen bespreken
2. **Plan & concept** — content en ritme op maat
3. **Shooten op locatie** — één ontspannen ochtend
4. **Monteren** — plaatsklare reels en foto's in de juiste formaten
5. **Goedkeuring** — niets gaat online zonder akkoord van de klant
6. **Plaatsen & reageren** — door de klant zelf of volledig uit handen gegeven

## Sitestructuur

De site is één editorial one-pager (passend bij het magazine-designsysteem) met vaste bottom-bar-navigatie en de secties: hero → voor wie → USP's → Founding Locals → pakketten & losse diensten → werkwijze → portfolio → over Isabella → FAQ → contact/intakeformulier → footer.

## Technische uitgangspunten

- Snel, statisch, mobiel-first (Astro + Tailwind CSS, zie [README](../README.md))
- Content losgekoppeld van code, zodat teksten en prijzen zonder technische kennis aan te passen zijn
- Toegankelijk en SEO-proof: semantische HTML, `lang="nl"`, meta/Open Graph, sitemap
- Placeholders met duidelijke naamgeving totdat het definitieve beeldmateriaal beschikbaar is
