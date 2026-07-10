# soos.studio

Marketingwebsite van **soos.studio** — de contentstudio van Isabella Koper. Foto's en reels op locatie voor lokale bedrijven.

**Live:** [vestering-group.github.io/soos-studio](https://vestering-group.github.io/soos-studio) · straks op [soos.studio](https://soos.studio)

## Stack

- **[Astro](https://astro.build)** — gekozen boven Next.js omdat dit een pure contentsite is: Astro levert statische HTML met vrijwel geen JavaScript, wat de snelst mogelijke laadtijd geeft en gratis hosting op GitHub Pages mogelijk maakt.
- **[Tailwind CSS v4](https://tailwindcss.com)** — met de designtokens uit `DESIGN.md` als `@theme` in `src/styles/global.css`.
- **Fonts:** Instrument Serif (substituut voor Beausite) en DM Mono, self-hosted via Fontsource.

## Lokaal draaien

```bash
npm install
npm run dev        # dev-server op http://localhost:4321/soos-studio
npm run build      # productie-build naar dist/
npm run preview    # bekijk de productie-build lokaal
```

## Content aanpassen

Alle teksten, prijzen en instellingen staan in **`src/content/site.ts`** — één bestand, duidelijk gelabeld. Aanpassen, committen, pushen: de site werkt zichzelf bij.

Afbeeldingen vervangen: zet echte foto's/reels in `public/portfolio/` en `public/` met dezelfde bestandsnamen als de placeholders (of pas de lijst in `site.ts` aan).

### Nog in te vullen (TODO's in `site.ts`)

- [ ] Definitief e-mailadres
- [ ] Formspree-ID voor het intakeformulier (tot die tijd toont de site een maillink)
- [ ] Instagram/TikTok-links
- [ ] KvK-nummer
- [ ] Echte foto's en reels (placeholders zijn duidelijk gemarkeerd)

## Deploy

Elke push naar `main` wordt automatisch gebouwd en gedeployed naar GitHub Pages via `.github/workflows/deploy.yml`. Eenmalig instellen: **Settings → Pages → Source: GitHub Actions**.

### Domein soos.studio koppelen

1. Voeg bij je DNS-provider een `CNAME`-record toe: `soos.studio` → `vestering-group.github.io` (of A-records naar de GitHub Pages-IP's voor een apex-domein: 185.199.108.153, .109., .110., .111.).
2. Vul bij **Settings → Pages → Custom domain** `soos.studio` in en zet "Enforce HTTPS" aan.
3. Pas `astro.config.mjs` aan: `site: 'https://soos.studio'`, verwijder `base`, en voeg `public/CNAME` toe met inhoud `soos.studio` (stappen staan ook als comment in dat bestand).

## Design

Het volledige designsysteem (kleuren, typografie, spacing, componentregels) staat in [`DESIGN.md`](DESIGN.md). Kern: bone-paper canvas, warm near-black ink, één lime accent uitsluitend voor de primaire CTA, editorial serif op groot formaat, DM Mono voor UI-labels, alles 2px hoeken, geen schaduwen.
