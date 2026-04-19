# Thema aanpassen

Alle presentatie-opties (kleur, typografie, ritme) zitten in **`.vitepress/theme/custom.css`**. Dat is de enige plek waar je hoeft te kijken om de website er anders uit te laten zien.

## Wat kun je aanpassen?

De bovenste twee blokken van `custom.css` zijn bedoeld als dashboard:

### Blok 1 — Brand-, accent- en neutrale kleuren
```css
--ai-brand-500: #14b8a6;  /* primaire brandkleur */
--ai-brand-600: #0d9488;  /* hover / actief */
--ai-accent-500: #f59e0b; /* warme tegenkleur */
```
De `--ai-brand-*` schaal loopt van licht (50) tot donker (900). Pas de hele schaal aan als je van kleur verandert — handige tool: [tailwindcss.com/docs/customizing-colors](https://tailwindcss.com/docs/customizing-colors) of [uicolors.app](https://uicolors.app).

### Blok 2 — Typografie
```css
--ai-font-sans: 'Inter', ...;
--ai-font-display: 'Space Grotesk', 'Inter', sans-serif;
--ai-font-mono: 'JetBrains Mono', ...;
```
De Google Fonts `@import` bovenaan regelt wat er wordt geladen. Wijzig deze regel mee wanneer je een ander lettertype kiest.

## Na een wijziging

- **Tijdens ontwikkeling** (`npm run docs:dev`): wijzigingen zijn direct zichtbaar in de browser (hot reload)
- **Productie** (`npm run docs:build`): draai opnieuw build zodat de gedeployde site ook de nieuwe stijl heeft

## Verder aanpassen

Onder `COMPONENT-TUNING` in `custom.css` zitten kleinere tweaks voor tabellen, blockquotes, mermaid-diagrammen en navbar. Die kun je vrij aanpassen of verwijderen.

Voor zwaarder maatwerk (eigen componenten, layouts):
- `.vitepress/theme/index.ts` is het entry-point
- VitePress documentatie: [vitepress.dev/guide/custom-theme](https://vitepress.dev/guide/custom-theme)
