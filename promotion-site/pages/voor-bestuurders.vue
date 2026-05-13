<script setup lang="ts">
useHead({
  title: 'Voor bestuurders · AI-scholing publieke sector',
  meta: [
    {
      name: 'description',
      content: 'Voor CIO, CHRO, SG en DG: hoe verbind je AI-ambitie aan uitvoering — zonder de organisatie te overvragen.'
    }
  ]
})

const concerns = [
  {
    title: 'Politieke druk, geen verhaal',
    body: 'Raad en college vragen "waar staan jullie met AI?" en je hebt geen eerlijk antwoord. Strategie staat, uitvoering stokt.'
  },
  {
    title: 'AI Act-aansprakelijkheid',
    body: 'Per februari 2025 is AI-geletterdheid verplicht voor organisaties die AI gebruiken. Hoe toon je dat aan?'
  },
  {
    title: 'Ongelijke adoptie binnen de organisatie',
    body: 'Een paar early adopters lopen weg met AI, de rest haakt af of werkt zonder kader. Cohesie staat onder druk.'
  }
]
</script>

<template>
  <div>
    <PromoHeroSplit eyebrow="Voor bestuurders">
      <template #title>Van AI-ambitie naar uitvoering — zonder de organisatie te overvragen.</template>
      <template #body>
        <p>
          Voor CIO, CHRO, SG en DG van publieke organisaties.
          Een aanpak die je verhaal in de raad én op de werkvloer overeind houdt.
        </p>
        <p>
          Geen training-pitch. Een 30-minuten strategie-sparring waarin we
          eerst luisteren wat er bij jullie speelt.
        </p>
      </template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="primary" size="l">Boek een 30-min sparring</PromoBtn>
        <PromoBtn to="/ai-act-readiness" variant="ghost" size="l">Doe de AI Act-check</PromoBtn>
      </template>
      <template #visual>
        <div class="bestuur-placeholder" aria-hidden="true">
          <span>Illustratie volgt</span>
        </div>
      </template>
    </PromoHeroSplit>

    <PromoProblemMirror
      eyebrow="Drie zorgen die we vaak horen"
      heading="Herken je dit als bestuurder?"
      :problems="concerns"
    />

    <PromoDuoNarrative
      eyebrow="Wat een traject je oplevert"
      heading="Een verhaal dat zowel in de raad als op de werkvloer overeind blijft"
      intro="Twee lagen, één narratief. Geen vertaalproblemen tussen strategie en uitvoering."
      :primary="{
        label: 'Voor de raad',
        title: 'Aantoonbaar en uitlegbaar',
        body: 'Persona-gedreven roadmap, EU AI Act-checklist, governance-kader, en harde adoptiecijfers (30/60/90 dagen).'
      }"
      :secondary="{
        label: 'Voor de werkvloer',
        title: 'Concreet en bruikbaar',
        body: 'Rol-specifieke trainingen met echte casussen, 30 dagen werkvloer-begeleiding, en aandacht voor weerstand en houding.'
      }"
    />

    <PromoAssessmentTeaser
      eyebrow="EU AI Act"
      heading="Hoe AI-Act-geletterd is jullie organisatie?"
      body="Tien vragen. Direct een score-band. Uitgebreid rapport via mail. Anoniem te starten."
    />

    <PromoCTABanner variant="dark" align="split">
      <template #title>30-minuten strategie-sparring</template>
      <template #body>Specifiek voor CIO, CHRO, SG of DG. Wij luisteren eerst — pas dan praten we over aanpak.</template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="inverse" size="l">Boek een sparring</PromoBtn>
      </template>
    </PromoCTABanner>
  </div>
</template>

<style lang="scss" scoped>
.bestuur-placeholder {
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-inverse);
  color: rgba(255, 255, 255, 0.4);
  border-radius: var(--radius-large);
  font-family: var(--font-mono);
  font-size: 0.875rem;
}
</style>
