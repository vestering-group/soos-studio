# Bouwinstructie voor Claude Code — website soos.studio

> Plak dit document (of verwijs ernaar) in Claude Code in de projectmap. Zorg dat je stijlmap van Refero in dezelfde projectmap staat vóór je begint.

---

## 0. Belangrijk: lees eerst de stijl

In deze projectmap staat een map met stijlreferenties die ik uit **Refero** heb gehaald (screenshots/UI-referenties van de look-and-feel die ik wil). 

**Doe dit als eerste, vóór je iets bouwt:**
1. Open en bekijk elk bestand in die stijlmap.
2. Leid daaruit het designsysteem af: kleurenpalet (primair, secundair, accent, neutrals), typografie (koppen + body, gewichten), spacing/witruimte, hoekafrondingen, schaduwen, knopstijlen, en de algehele sfeer (strak/warm/speels/minimalistisch).
3. Leg dit vast in een `DESIGN.md` en in designtokens (CSS-variabelen of Tailwind-config) en gebruik dit consequent op de hele site.
4. Wijk hier niet vanaf met eigen kleurkeuzes — de Refero-map is leidend.

Als iets in de stijlmap onduidelijk is, stel me één gerichte vraag voordat je verder gaat.

---

## 1. Wat we bouwen

Een marketingwebsite voor **soos.studio** — de persoonlijke contentstudio van **Isabella Koper**. Isabella helpt lokale bedrijfjes met hun aanwezigheid op social media: ze maakt foto's en reels op locatie en verzorgt (optioneel) het plaatsen en de community. Ze werkt alleen, met ruime ervaring op Instagram, TikTok, Facebook en Pinterest.

**Doel van de site:** lokale ondernemers overtuigen en laten aanvragen. Warm, persoonlijk, professioneel, vertrouwenwekkend. De site moet snel laden, mobiel-first zijn en makkelijk te onderhouden.

**Domein:** soos.studio

## 2. Techniek

- **Framework:** Next.js (App Router) met TypeScript, óf Astro als je dat schoner vindt voor een contentsite — kies wat het beste past bij een snelle, statische marketingsite. Motiveer je keuze kort in de README.
- **Styling:** Tailwind CSS, met de designtokens uit de Refero-stijlmap in de config.
- **Content:** teksten hieronder zijn definitief — gebruik ze letterlijk, geen lorem ipsum. Structureer content zo dat Isabella het later makkelijk kan aanpassen (bijv. in een `content/` map of losse data-bestanden).
- **Afbeeldingen:** gebruik nette placeholders (met duidelijke naamgeving zoals `reel-placeholder-1.jpg`) waar Isabella later haar echte foto's/reels plaatst. Optimaliseer voor web.
- **Animatie:** subtiel (fade/slide on scroll). Niet druk.
- **Deploy:** klaarmaken voor Vercel of Netlify. Zet build-/deploy-instructies in de README.
- **Toegankelijkheid & SEO:** semantische HTML, alt-teksten, meta tags, Open Graph, sitemap, favicon. Nederlandse `lang="nl"`.

## 3. Merk & tone of voice

- **Naam:** soos.studio (klein geschreven, speels-warm).
- **Toon:** persoonlijk, nuchter, warm, zonder marketing-blabla. Alsof Isabella zelf tegen je praat.
- **Kernbelofte (eerlijk):** geen loze garanties op views of volgers — wél consistente, professionele content die je bedrijf online op de kaart zet en klanten binnenhaalt.
- **Voor wie:** lokale bedrijfjes — horeca (café, lunchroom, restaurant), kappers/beauty/nagelstudio's, boetieks en winkels, yoga/fitness, bakkers, interieur- en woonzaken.
- **USP's:** één vast, herkenbaar gezicht (Isabella); lokaal, komt langs; ervaren op IG/TikTok/Facebook/Pinterest; plaatsklare content zonder gedoe; eigen camera voor pro foto's; eerlijk over wat ze wel/niet belooft.

## 4. Sitestructuur (pagina's & secties)

Bouw als één moderne one-page-plus of losse pagina's — kies wat het beste werkt met de stijl. Aanbevolen indeling:

1. **Home**
   - Hero: pakkende kop, subkop met de eerlijke belofte, primaire CTA ("Plan een kennismaking") + secundaire CTA ("Bekijk pakketten").
   - "Voor wie" — de doelgroep herkenbaar maken.
   - USP-blok (3–4 kernpunten).
   - Uitgelicht: de **Founding Locals**-actie (zie §7) prominent.
   - Korte pakket-preview met link naar Diensten.
   - Portfolio-teaser (grid van reels/foto's).
   - Over Isabella (kort) + foto.
   - Afsluitende CTA + contact.
2. **Diensten / Pakketten** — de drie pakketten (§5) + losse diensten (§6).
3. **Werkwijze** — hoe het in stappen gaat (§8).
4. **Portfolio / Werk** — grid met plek voor reels en foto's, filterbaar op type indien mogelijk.
5. **Over Isabella** — haar verhaal, ervaring, waarom lokaal.
6. **UGC & fotografie** — losse diensten uitgelicht (kan ook een sectie op Diensten zijn).
7. **Contact / aanvraag** — intakeformulier (naam, bedrijf, e-mail, telefoon, type bedrijf, interesse in welk pakket, bericht) + directe contactgegevens. Formulier mag mailto of een simpele form-handler gebruiken; maak het makkelijk aan te sluiten op bv. Formspree.
8. **FAQ** (optioneel maar aanbevolen) — veelgestelde vragen (o.a. de eerlijke belofte over views/volgers, opzegtermijn, reiskosten, welke platforms).

Navigatie: sticky header met logo (soos.studio) + links naar de secties + CTA-knop. Footer met contact, socials, KvK-plek, en de eerlijke belofte in één zin.

## 5. De pakketten (definitieve copy & prijzen)

Toon dit als drie duidelijke prijskaarten. Alle prijzen **excl. btw**, maandelijks opzegbaar na de eerste 3 maanden. Markeer pakket 2 of 3 als "populair".

**Pakket 1 — Plaatsen · €225 p/m**
Jij levert de content aan, Isabella regelt de rest: captions schrijven, hashtags, inplannen en plaatsen op je kanalen in een vast ritme. Ongeveer 12–16 posts per maand, 1–2 platforms. Consistentie zonder dat jij eraan hoeft te denken.

**Pakket 2 — Shoot · €495 p/m** *(populair)*
Eén ochtend per maand komt Isabella bij je langs en shoot op locatie. Je krijgt 6–8 plaatsklare reels én een set foto's, met ondertiteling en in de juiste formaten voor elk platform. Jij plaatst ze zelf, wanneer het jou uitkomt.

**Pakket 3 — Ontzorgd · €795 p/m**
Alles uit Shoot, én Isabella plaatst alles op je kanalen én doet de community: reageren op comments en DM's. Volledige ontzorging — jij hoeft nergens meer naar om te kijken.

## 6. Losse diensten (op aanvraag)

Toon als aparte sectie/kaartjes:

- **UGC-video's op aanvraag** — 1 video €150 · 3 video's €395 · 5 video's €595.
- **Losse bedrijfsfotografie op locatie** — dagdeel €425 · hele dag €695.
- **Extra reel** bovenop een pakket — €85 per reel.
- **Community management** los toevoegen aan pakket 2 — €125 p/m.
- **Kickoff- & strategiesessie** met kanaaloptimalisatie — eenmalig €150 (gratis bij de Founding Locals-actie).
- Reiskosten €0,25/km buiten de eigen regio.

## 7. Opstartactie — "Founding Locals" (uitlichten op home)

Voor de eerste **5 lokale bedrijven**:

Start met een **gratis kennismakingsshoot** (één ochtend, 4 plaatsklare reels) — zo zie je de kwaliteit zonder risico. Daarna neem je 3 maanden pakket 2 of 3 af met **30% launch-korting**. In ruil mag Isabella de content in haar portfolio gebruiken en geef je een korte videotestimonial, een review en een vermelding. Zo help je een lokale ondernemer op weg én krijg je zelf topcontent voor een zachte prijs.

Plus: **breng een ondernemer aan** en jullie krijgen allebei een maand 20% korting.

Geef dit een duidelijke, urgente maar vriendelijke call-to-action ("Nog 5 plekken · claim jouw kennismakingsshoot").

## 8. Werkwijze (stappen)

Toon als genummerde stappen met iconen:
1. **Kennismaken** — we bespreken je bedrijf, je stijl en je doelen.
2. **Plan & concept** — Isabella bedenkt de content en een ritme dat bij je past.
3. **Shooten op locatie** — één ontspannen ochtend, jij runt je zaak, Isabella filmt en fotografeert.
4. **Monteren** — pakkende, plaatsklare reels en foto's, in de juiste formaten.
5. **Jij keurt goed** — niets gaat online zonder jouw akkoord.
6. **Plaatsen (& reageren)** — jij plaatst zelf, of Isabella doet het én beheert de reacties. Jij bepaalt.

## 9. Designrichtlijnen

- Volg de Refero-stijlmap strikt (kleur, typografie, sfeer).
- Mobiel-first, ruime witruimte, grote leesbare typografie.
- Veel plek voor beeld (reels/foto's zijn het product) — ontwerp mooie beeldgrids en zorg dat verticale reel-ratio's (9:16) er goed uitzien.
- Duidelijke, consistente CTA-knoppen.
- Snelle laadtijd, geoptimaliseerde afbeeldingen, geen zware libraries.
- Subtiele scroll-animaties, niet afleidend.

## 10. Opleverpunten (checklist)

- [ ] `DESIGN.md` met het uit Refero afgeleide designsysteem + tokens in de config.
- [ ] Alle pagina's/secties uit §4 met de definitieve copy uit §5–§8.
- [ ] Responsive (mobiel, tablet, desktop) en toegankelijk.
- [ ] SEO-basis: meta tags, Open Graph, sitemap, favicon, `lang="nl"`.
- [ ] Werkend intakeformulier (makkelijk aan te sluiten op Formspree o.i.d.).
- [ ] Nette placeholders met duidelijke naamgeving voor Isabella's beeld.
- [ ] README met stack-keuze, hoe lokaal te draaien, en hoe te deployen op Vercel/Netlify.
- [ ] Content losgekoppeld zodat Isabella teksten/prijzen makkelijk kan aanpassen.

## 11. Werkwijze voor jou (Claude Code)

1. Bekijk eerst de Refero-stijlmap en leg het designsysteem vast.
2. Stel me maximaal 1–3 gerichte vragen als er iets echt onduidelijk is; anders bouw je door met goede aannames en noteer je die.
3. Zet de projectstructuur op, dan de designtokens, dan pagina voor pagina.
4. Commit in logische stappen met duidelijke berichten.
5. Lever af volgens de checklist in §10 en vat aan het eind kort samen wat er staat en wat Isabella nog moet aanvullen (beeld, socials-links, KvK, e-mailadres voor het formulier).
