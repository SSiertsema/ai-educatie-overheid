# Website deployen

De documentatie wordt gebouwd met **VitePress** (build-time static site generator). Na een build staat alles in `.vitepress/dist/` als standaard statische HTML/CSS/JS — dat kun je op elke willekeurige hosting zetten.

## Lokaal draaien

```bash
npm install          # eenmalig
npm run docs:dev     # lokale preview met hot reload op http://localhost:5173
```

Tijdens `docs:dev` zie je wijzigingen in de `.md`-bestanden én in `custom.css` direct in de browser.

## Static build

```bash
npm run docs:build   # output in .vitepress/dist/
npm run docs:preview # preview van de productiebuild
```

## Online hosting

Drie veelgebruikte opties met automatische redeploy zodra documentatie verandert:

### Optie 1 — Netlify (aanbevolen voor eenvoud)

1. Push project naar GitHub/GitLab
2. [Netlify dashboard](https://app.netlify.com) → "Add new site" → "Import an existing project"
3. Build-instellingen:
   - **Build command**: `npm run docs:build`
   - **Publish directory**: `.vitepress/dist`
4. Elke push naar main → automatische rebuild en deploy

Gratis voor persoonlijk/klein zakelijk gebruik (100 GB bandwidth/maand).

### Optie 2 — Vercel

1. Push naar GitHub/GitLab
2. [vercel.com/new](https://vercel.com/new) → import repo
3. Framework preset: **Other**
4. Build-instellingen:
   - **Build command**: `npm run docs:build`
   - **Output directory**: `.vitepress/dist`
5. Auto-deploy op elke push

### Optie 3 — GitHub Pages (met Actions)

Maak `.github/workflows/deploy.yml`:

```yaml
name: Deploy VitePress site

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run docs:build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

In repo-instellingen onder **Settings → Pages**: source instellen op "GitHub Actions".

Belangrijk: voor GitHub Pages in een subpath (bijv. `username.github.io/ai-educatie`) moet in `.vitepress/config.mts` de `base` op `/ai-educatie/` gezet worden.

### Optie 4 — Cloudflare Pages

Vergelijkbaar met Netlify/Vercel — via Cloudflare-dashboard een project aanmaken, build command `npm run docs:build`, output directory `.vitepress/dist`.

## Privé delen (niet-openbaar)

Als het nog niet publiek mag:
- **Netlify**: password protection beschikbaar op Pro-plan
- **Basic auth via Cloudflare Access**: gratis voor team-gebruik
- **Intern netwerk**: `npm run docs:build` + upload naar interne server

## Wat gebeurt er bij een wijziging in een `.md`-bestand?

1. Je wijzigt / voegt een `.md`-bestand toe en commit + push
2. Netlify/Vercel/GitHub Actions detecteert de push
3. `npm run docs:build` draait automatisch
4. Nieuwe versie staat binnen 30-90 seconden online

De Markdown-bestanden blijven **de single source of truth**. De website is altijd een gegenereerde weergave ervan.

## Troubleshooting

**Build faalt op Mermaid-diagrammen** — controleer dat de syntax klopt in een Mermaid-playground: https://mermaid.live/

**Broken links** — VitePress heeft `ignoreDeadLinks: true` aanstaan in `config.mts`; haal dat weg als je strikter wil valideren.

**Trage build** — bij veel pagina's: `npm run docs:build -- --minify=false` voor snellere iteratie, of vergroot node-memory via `NODE_OPTIONS="--max-old-space-size=4096" npm run docs:build`.
