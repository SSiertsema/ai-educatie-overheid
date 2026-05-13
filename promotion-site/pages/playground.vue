<script setup lang="ts">
useHead({
  title: 'Component playground · Promo-site'
})

definePageMeta({
  // Niet in publieke navigatie — alleen voor dev
  layout: false
})

const problems = [
  {
    title: 'Strategie blokkeert op uitvoering',
    body: 'Directie wil AI-impact, maar medewerkers zijn er niet klaar voor. De strategische ambitie strandt op uitvoerend niveau.'
  },
  {
    title: 'Generieke training landt niet',
    body: 'Cursussen "wat AI kan" sluiten niet aan op dagelijkse taken. Transfer naar het werk blijft uit.'
  },
  {
    title: 'Shadow AI als compliance-risico',
    body: 'Ongecontroleerd ChatGPT-gebruik op de werkvloer maakt AVG en EU AI Act-verantwoording lastig.'
  }
]

const steps = [
  { title: 'Persona-mapping', body: 'We brengen jullie organisatie in kaart per rol en domein.', meta: 'Week 1–2' },
  { title: 'Leerpaden op maat', body: 'Per persona een leerpad dat aansluit op echt werk en echte casussen.', meta: 'Week 3–4' },
  { title: 'Uitvoering', body: 'Training plus 30-dagen begeleiding op de werkvloer.', meta: 'Maand 2–3' },
  { title: 'Meten en bijstellen', body: 'Adoptie-meting op 30, 60 en 90 dagen — geen black box.', meta: 'Maand 3–4' }
]

const roles = [
  {
    role: 'Communicatieadviseur',
    domain: 'Communicatie',
    pain: 'Veel content, weinig tijd, consistentie loopt achteruit.',
    wish: 'Sneller productieve content zonder kwaliteitsverlies.',
    hook: '"Contentproductie versnellen met AI — zonder huisstijl-verlies."',
    caseSnippet: 'Een communicatieadviseur produceert nu in 2 uur wat eerst een halve dag kostte, mét tone-of-voice-check.'
  },
  {
    role: 'Beleidsadviseur Sociaal Domein',
    domain: 'Sociaal beleid',
    pain: 'Veel rapporten en onderzoeken om door te ploegen, weinig tijd voor synthese.',
    wish: 'Sneller relevante kennis distilleren voor raadsvoorstellen.',
    hook: '"AI die rapporten samenvat en analyse versnelt — jij houdt de regie."',
    caseSnippet: 'Beleidsnota die normaal 3 weken kost, kreeg een eerste versie in 4 dagen.'
  },
  {
    role: 'Teamleider Klantcontact',
    domain: 'Dienstverlening',
    pain: 'Werkdruk, wachttijden, en boze burgers op de lijn.',
    wish: 'Minder routinevragen, snellere afhandeling.',
    hook: '"30% van vragen automatisch afhandelen — je team houdt tijd over voor de complexe gevallen."',
    caseSnippet: 'Pilot bij een 60K-gemeente: 28% van de eerstelijnsvragen automatisch afgehandeld na 6 weken.'
  }
]
</script>

<template>
  <main class="playground">
    <header class="playground__header">
      <div class="playground__container">
        <p class="playground__kicker">/playground · dev only</p>
        <h1 class="playground__title">Promo-componenten showcase</h1>
        <p class="playground__intro">
          Alle MVP-componenten in isolatie. Elke sectie kan in productie 1-op-1 op een pagina.
        </p>
      </div>
    </header>

    <section class="playground__section">
      <h2 class="playground__label">PromoHeroSplit</h2>
      <PromoHeroSplit eyebrow="Persona-gebaseerd · publieke sector">
        <template #title>AI-scholing die écht landt — omdat we je mensen kennen.</template>
        <template #body>
          <p>Voor gemeenten, rijk, provincies en uitvoeringsorganisaties.</p>
          <p>Vaardigheid én veranderbereidheid in één traject.</p>
        </template>
        <template #cta>
          <PromoBtn href="/kennismaking" variant="primary" size="l">Plan een kennismaking</PromoBtn>
          <PromoBtn href="/ai-act-readiness" variant="ghost" size="l">Doe de AI Act-check</PromoBtn>
        </template>
        <template #visual>
          <div class="visual-placeholder">[ illustratie ]</div>
        </template>
      </PromoHeroSplit>
    </section>

    <section class="playground__section">
      <h2 class="playground__label">PromoProblemMirror</h2>
      <PromoProblemMirror
        eyebrow="Herken je dit?"
        heading="De drie blokkades die elke publieke organisatie nu raakt"
        :problems="problems"
      />
    </section>

    <section class="playground__section">
      <h2 class="playground__label">PromoDuoNarrative (signature)</h2>
      <PromoDuoNarrative
        eyebrow="Onze aanpak"
        heading="Vaardigheid én veranderbereidheid"
        intro="Tooltraining alleen is niet genoeg. Niemand combineert deze twee zichtbaar — wij wel."
        :primary="{
          label: 'Vaardigheid',
          title: 'AI praktisch leren toepassen op echt werk',
          body: 'Rol-specifieke casussen, prompts en werkstromen. Wat AI vandaag in jouw werk doet, niet wat het in theorie kan.'
        }"
        :secondary="{
          label: 'Veranderbereidheid',
          title: 'Durf en houding om het te gebruiken',
          body: 'Weerstand, ethiek, verantwoord gebruik — adressering van wat het stuck-maakt, naast het hoe-doe-je-het.'
        }"
      />
    </section>

    <section class="playground__section">
      <h2 class="playground__label">PromoProcessTimeline</h2>
      <PromoProcessTimeline
        eyebrow="Aanpak"
        heading="In vier stappen van strategie naar adoptie"
        intro="Geen black box. Geen training-en-klaar. We meten of het landt."
        :steps="steps"
      />
    </section>

    <section class="playground__section">
      <h2 class="playground__label">PromoRoleCardGrid + PromoRoleCard</h2>
      <PromoRoleCardGrid
        eyebrow="Voor wie"
        heading="Voorbeelden van rollen waar dit landt"
        intro="MVP: drie statische voorbeelden. De interactieve persona-explorer volgt in v1.2."
        :columns="3"
      >
        <PromoRoleCard v-for="r in roles" :key="r.role" v-bind="r" />
      </PromoRoleCardGrid>
    </section>

    <section class="playground__section">
      <h2 class="playground__label">PromoAssessmentTeaser</h2>
      <PromoAssessmentTeaser
        eyebrow="EU AI Act"
        heading="Hoe AI-Act-geletterd is jullie organisatie?"
        body="Tien vragen, gepersonaliseerd rapport. Anoniem te starten."
      />
    </section>

    <section class="playground__section">
      <h2 class="playground__label">PromoCTABanner (dark, split)</h2>
      <PromoCTABanner variant="dark" align="split">
        <template #title>Klaar voor een verkennend gesprek?</template>
        <template #body>30 minuten. We luisteren eerst. Geen verkooppraat.</template>
        <template #cta>
          <PromoBtn href="/kennismaking" variant="inverse" size="l">Plan een kennismaking</PromoBtn>
        </template>
      </PromoCTABanner>
    </section>

    <section class="playground__section">
      <h2 class="playground__label">PromoCTABanner (warm, center)</h2>
      <PromoCTABanner variant="warm" align="center">
        <template #title>Voor bestuurders: 30-min strategie-sparring</template>
        <template #body>Specifiek voor CIO, CHRO, SG of DG. Geen training-pitch.</template>
        <template #cta>
          <PromoBtn href="/voor-bestuurders" variant="primary" size="l">Lees meer</PromoBtn>
        </template>
      </PromoCTABanner>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.playground {
  background: var(--surface-canvas);
  color: var(--text-default);
  font-family: var(--font-sans);

  &__header {
    padding: 3rem 1.5rem 2rem;
    background: var(--surface-muted);
    border-bottom: 1px solid var(--border-subtle);
  }

  &__container {
    max-width: var(--promo-container);
    margin: 0 auto;
  }

  &__kicker {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--promo-accent-600);
    margin: 0 0 0.5rem;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 2rem;
    color: var(--text-heading);
    margin: 0 0 0.5rem;
  }

  &__intro {
    font-size: 1rem;
    color: var(--text-secondary);
    margin: 0;
  }

  &__section {
    padding-top: 1rem;
    border-top: 4px dashed var(--border-subtle);

    &:first-of-type {
      border-top: none;
    }
  }

  &__label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin: 1.5rem 1.5rem 0;
    padding: 0.25rem 0.625rem;
    background: var(--surface-panel);
    border-radius: var(--radius-default);
    display: inline-block;
    max-width: var(--promo-container);
  }
}

.visual-placeholder {
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--brand-subtle);
  border: 2px dashed var(--border-default);
  border-radius: var(--radius-large);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.875rem;
}
</style>
