# AI-educatie voor Nederlandse gemeenten — exploratie-spoor

> ⚠️ **Status: verkennend**. Deze map bevat een mogelijk spoor: persona-gebaseerd AI-trainingsprogramma voor gemeenten. Als dit spoor doorgaat, promoveren we de inhoud naar de canonical projectstructuur. Tot die tijd staat alles hier.

## Doel

We onderzoeken een AI-educatieprogramma speciaal voor Nederlandse gemeenten. Waar generieke AI-trainingen blijven hangen in theorie, willen wij concrete AI-mogelijkheden vertalen naar het dagelijks werk van een controller, vergunningverlener, beleidsadviseur of crisiscoördinator. Dit traject bouwt in vier sporen de onderbouwing voor een pilot — van business case naar pilotklare propositie, stap voor stap zichtbaar.

## Waar staan we nu

| Status | Mijlpaal | Toelichting |
|:---:|---|---|
| ✅ | Business case lean canvas | [business-case-lean-canvas.md](../business-case-lean-canvas.md) — prijsmodel en markt nog te valideren |
| ✅ | 20 trainee-persona's | [trainees/](../documentatie/business/personas/trainees/) |
| ✅ | 3 trainer-persona's | Mike, Marieke, Ravi — [trainers/](../documentatie/business/personas/trainers/) |
| ✅ | Flow-index (dit bestand) | Leesbaar kompas voor het traject |
| ✅ | Spoor 1.1 — Customer segmentation | 5 segmenten — zie [business/segmentation.md](business/segmentation.md) |
| ✅ | Spoor 1.2 — JTBD (top-3 segmenten) | [jtbd/dossierwerkers.md](business/jtbd/dossierwerkers.md) · [spilfiguren.md](business/jtbd/spilfiguren.md) · [regisseurs.md](business/jtbd/regisseurs.md) |
| ✅ | Spoor 1.3 — Value Proposition Canvas | [value-propositions/dossierwerkers.md](business/value-propositions/dossierwerkers.md) · [spilfiguren.md](business/value-propositions/spilfiguren.md) · [regisseurs.md](business/value-propositions/regisseurs.md) |
| ✅ | Spoor 1.4 — User stories | 36 stories — [user-stories/top-3-segments.md](business/user-stories/top-3-segments.md) |
| ✅ | Spoor 2.1 — Competitive analysis | RADIO, VNG, Dutch-AI, SBO, Xomnia — [strategy/competitive-analysis.md](strategy/competitive-analysis.md) |
| ✅ | Spoor 2.2 — Market sizing | TAM €60-140M / SAM €25-60M / SOM €400k-1.2M — [strategy/market-sizing.md](strategy/market-sizing.md) |
| ✅ | Spoor 2.3 — Stakeholder mapping | [strategy/stakeholder-map.md](strategy/stakeholder-map.md) |
| ✅ | Spoor 2.4 — Validatie-interview-protocol | [strategy/validation-interviews.md](strategy/validation-interviews.md) |
| ✅ | Spoor 3.1 — MVP-scope | Dossierwerkers + Spilfiguren primair — [product/mvp-scope.md](product/mvp-scope.md) |
| ✅ | Spoor 3.2 — Curriculum | [product/curriculum-specs.md](product/curriculum-specs.md) |
| ✅ | Spoor 3.3 — Metrics | Transfer ≥75% binnen 30 dagen — [product/metrics.md](product/metrics.md) |
| ✅ | Spoor 3.4 — Pricing + ROI | 3-tier €8-45k — [product/pricing-roi-model.md](product/pricing-roi-model.md) |
| ✅ | Spoor 3.5 — Pilot-plan | 2-3 pilots, 5 hypothesen — [product/pilot-plan.md](product/pilot-plan.md) |
| ✅ | Spoor 3.6 — Pre-mortem | 30 faalmodes, top-10 kritisch — [product/risk-premortem.md](product/risk-premortem.md) |
| ✅ | Spoor 4.1 — Vision + PR/FAQ | [gtm/vision-prfaq.md](gtm/vision-prfaq.md) |
| ✅ | Spoor 4.2 — Go-to-market | 3-fases, 6 kanalen — [gtm/gtm-plan.md](gtm/gtm-plan.md) |
| ✅ | Spoor 4.3 — Business case v2 | Bijgewerkte lean canvas — [gtm/business-case-v2.md](gtm/business-case-v2.md) |
| 🕒 | **Volgende fase — Execution** | Validatie uitvoeren + pilot-werving starten |
| 🕒 | Spoor 3 — MVP | Curriculum, prijs, pilotplan — na week 5 beslispunt |
| 🕒 | Spoor 4 — GTM | Vision, go-to-market, bijgewerkte business case |
| 🕒 | Eerste pilot | Bij 1-2 gemeenten — doelvenster week 10-14 |

Legenda: ✅ klaar · 🔄 loopt · 🕒 gepland

## De flow

Vier sporen, deels parallel, samenkomend in een verkoopbare pilotpropositie. Elk spoor wordt stap voor stap uitgevoerd met een passende skill en levert een afzonderlijk document op.

```
Week 1-2    Week 3-4         Week 5        Week 6-8         Week 7-9
───────────────────────────────────────────────────────────────────────
[1.1]────▶ [1.2]──▶ [1.3]──▶ [1.4]───┐
                                      │
[2.1]────▶ [2.2]──▶ [2.3]──▶ [2.4]───┼──▶  [3.1]──▶[3.2]──▶[3.3]
                                      │        │      │      │
                     [4.1]◀────────── ┘        ▼      ▼      ▼
                      │                    [3.4]─▶[3.5]─▶[3.6]
                      │
                      └──────────────────────▶[4.2]──▶[4.3]

                                         ▲
                             Beslispunt week 5: go / pivot / no-go
```

### 🎯 Spoor 1 — Waardepropositie & leerinhoud

> Wat leveren we, voor welke "job" huurt de klant ons in, en hoe vertalen we dat naar leerdoelen?

| Stap | Skill | Waarom nu | Output |
|---|---|---|---|
| 1.1 | `customer-segmentation` | 23 persona's zijn te veel om per stuk te bedienen — we clusteren eerst | [business/segmentation.md](business/segmentation.md) |
| 1.2 | `jtbd-analysis` | Onder pijn/wens ligt een diepere drijfveer — die vinden we per segment | [business/jtbd/](business/jtbd/) |
| 1.3 | `value-proposition-canvas` | Pains → pain relievers, gains → gain creators per segment koppelen | [business/value-propositions/](business/value-propositions/) |
| 1.4 | `user-story-generator` | Leerverhalen per persona als brug naar curriculummodules | [business/user-stories/](business/user-stories/) |

### 🔍 Spoor 2 — Markt, concurrentie & validatie

> Is er betalende vraag? Wie moeten we verslaan? Wie beslist bij de klant?

| Stap | Skill | Waarom nu | Output |
|---|---|---|---|
| 2.1 | `competitive-analysis` | VNG Realisatie, RijksAcademie, commerciële AI-trainers — waar is witte ruimte? | [strategy/competitive-analysis.md](strategy/competitive-analysis.md) |
| 2.2 | `market-sizing` | TAM / SAM / SOM op 342 Nederlandse gemeenten | [strategy/market-sizing.md](strategy/market-sizing.md) |
| 2.3 | `stakeholder-mapping` | CIO, CHRO, gemeentesecretaris, innovatiemanager — wie koopt? | [strategy/stakeholder-map.md](strategy/stakeholder-map.md) |
| 2.4 | `problem-solution-fit` / `survey-design` | 5-8 validatiegesprekken vóór MVP-investering | [strategy/validation-interviews.md](strategy/validation-interviews.md) |

**🚦 Beslispunt na week 5**: minimaal 5 bevestigende signalen (probleemherkenning + betalingsbereidheid + autoriteit) — anders eerst propositie bijstellen.

### 🛠️ Spoor 3 — MVP-scope, curriculum & pilot

> Wat gaan we concreet leveren, voor welke prijs, hoe meten we succes en hoe draaien we de eerste pilot?

| Stap | Skill | Waarom nu | Output |
|---|---|---|---|
| 3.1 | `prioritization` | Van 4-6 segmenten naar 2 MVP-segmenten (RICE / Value-Effort) | [product/mvp-scope.md](product/mvp-scope.md) |
| 3.2 | `functional-specifications` | Curriculummodules, leerpaden, werkvormen, trainer-inzet | [product/curriculum-specs.md](product/curriculum-specs.md) |
| 3.3 | `metric-definition` | Succes-KPI's (adoptie, transfer, NPS, wederinkoop) | [product/metrics.md](product/metrics.md) |
| 3.4 | `cost-estimation` + `roi-modeling` | Kosten, prijspunt én ROI-case voor de klant | [product/pricing-roi-model.md](product/pricing-roi-model.md) |
| 3.5 | `rapid-prototyping` + `ab-hypothesis-framing` | Pilotopzet met falsifieerbare hypotheses | [product/pilot-plan.md](product/pilot-plan.md) |
| 3.6 | `pre-mortem` | Wat kan misgaan? Demo-crash, IT-blokkade, lage adoptie | [product/risk-premortem.md](product/risk-premortem.md) |

### 📣 Spoor 4 — Verhaal & go-to-market

> Een pakkend verhaal en een werkend verkoopkanaal naar gemeenten.

| Stap | Skill | Waarom nu | Output |
|---|---|---|---|
| 4.1 | `vision-crafting` | 1-zins verhaal + PR/FAQ voor pitches, website, proposals | [gtm/vision-prfaq.md](gtm/vision-prfaq.md) |
| 4.2 | `go-to-market` | ICP, positioning, messaging, kanalen, launch-plan | [gtm/gtm-plan.md](gtm/gtm-plan.md) |
| 4.3 | `business-case-management` | Bijgewerkte lean canvas na validatie + pricing | [gtm/business-case-v2.md](gtm/business-case-v2.md) |

## Navigatie

### 📚 Canonical documenten (projectroot)
- [Business case lean canvas](../business-case-lean-canvas.md)
- [Target persona's (bron)](../target-personas.md)
- [Bronafbeelding persona's](../personas.jpeg)

### 📚 Canonical persona's (documentatie/)
- [Trainee-persona's (20)](../documentatie/business/personas/trainees/)
- [Trainer-persona's (3)](../documentatie/business/personas/trainers/)
- [Persona's README](../documentatie/business/personas/README.md)

### 🗺️ Exploratie-output (deze temp/)
- `business/` — segmenten, JTBD, VPC's, user stories (spoor 1)
- `strategy/` — concurrentie, markt, stakeholders, validatie (spoor 2)
- `product/` — MVP, curriculum, metrics, kosten, pilot, risico's (spoor 3)
- `gtm/` — vision, go-to-market, business case v2 (spoor 4)

## Beslispunten

| Wanneer | Wat | Criterium |
|---|---|---|
| Na week 2 | Segmentmatrix + concurrentiekaart review | Werkbare clustering? Witte ruimte zichtbaar? |
| Na week 4 | VPC's + vision review | Scherp genoeg om aan een beslisser te tonen? |
| **Na week 5** | **Go / pivot / no-go** | **≥ 5 bevestigende validatiesignalen** |
| Na week 8 | MVP-curriculum review | Akkoord van ≥ 1 trainer en ≥ 2 beoogde klantgemeenten |
| Na week 9 | GTM-plan + business case v2 compleet | Eerste pilotafspraak ingepland |
| Pilot-einde | Meetplan uitgevoerd | Transfer < 30 dagen, NPS, KPI-beweging, wederinkoopbereidheid |

## Werkwijze

Dit spoor groeit organisch. Elke stap levert een Markdown-document op de voorgestelde locatie binnen `temp/`. Elke subfolder krijgt zijn eigen korte README zodra er inhoud is.

Bij beslispunten stoppen we om te reviewen. Als een spoor doorgaat, promoveren we de relevante documenten uit `temp/` naar de canonical `documentatie/`-structuur.

## Promotiecriteria (temp → canonical)

Een document promoveert uit `temp/` naar `documentatie/` wanneer:

1. Het bijbehorende beslispunt met "go" is gepasseerd
2. De content is gereviewed door minimaal één betrokkene
3. Alle referenties in het document stabiel zijn (geen placeholders meer)

Tot die tijd blijft het hier staan als exploratiemateriaal.
