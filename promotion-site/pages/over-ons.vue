<script setup lang="ts">
useHead({
  title: 'Over ons · AI-scholing publieke sector',
  meta: [
    {
      name: 'description',
      content: 'Wie wij zijn, waar we vandaan komen, en wat ons in deze fase eerlijk te bieden hebben.'
    }
  ]
})

const principes = [
  {
    title: 'Persona vóór tool',
    body: 'We beginnen bij wie iemand is en wat het werk vraagt — pas dan komt de AI-tool in beeld. Andersom werkt het niet.'
  },
  {
    title: 'Adoptie boven completion',
    body: '"Cursus afgerond" is geen succes. Wij meten of het 30, 60 en 90 dagen later nog steeds gebruikt wordt.'
  },
  {
    title: 'Eerlijk over de fase',
    body: 'We bouwen nu onze trackrecord op met de eerste partners. We claimen niet meer dan we kunnen waarmaken.'
  }
]
</script>

<template>
  <div>
    <PromoHeroSplit eyebrow="Over ons" align="center">
      <template #title>Een klein team met een scherp uitgangspunt.</template>
      <template #body>
        <p>
          We werken vanuit jaren ervaring in de publieke sector — bestuurlijk,
          inhoudelijk én technisch. Maar bovenal: vanuit de overtuiging dat AI-scholing
          alleen werkt als je de mensen echt kent voor wie je het maakt.
        </p>
        <p>
          We zijn in de prototype-fase. Eerlijk: dat betekent dat we nu onze
          trackrecord opbouwen met launch-partners. Wat we hebben is een methode,
          een visie, en een netwerk in de publieke sector.
        </p>
      </template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="primary" size="l">Maak kennis met ons</PromoBtn>
      </template>
    </PromoHeroSplit>

    <PromoProblemMirror
      eyebrow="Onze principes"
      heading="Wat ons stuurt, dag in dag uit"
      :problems="principes"
    />

    <section class="team-placeholder">
      <div class="team-placeholder__inner">
        <p class="team-placeholder__kicker">Team</p>
        <h2 class="team-placeholder__heading">De trainers</h2>
        <p class="team-placeholder__body">
          Drie trainers met complementaire profielen: gemeentelijke ervaring,
          technische diepgang, en didactische generalisme. Uitgebreide trainer-profielen
          volgen voor launch.
        </p>
      </div>
    </section>

    <PromoCTABanner variant="dark" align="split">
      <template #title>Liever een gesprek dan een sitebezoek?</template>
      <template #body>30 minuten. We zoomen of zien je op locatie.</template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="inverse" size="l">Plan een kennismaking</PromoBtn>
      </template>
    </PromoCTABanner>
  </div>
</template>

<style lang="scss" scoped>
.team-placeholder {
  padding: var(--promo-section-y-m) 1.5rem;
  background: var(--surface-canvas);

  &__inner {
    max-width: 44rem;
    margin: 0 auto;
    text-align: center;
    padding: 2.5rem 2rem;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-large);
    background: var(--surface-panel);
  }

  &__kicker {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--promo-accent-600);
    margin: 0 0 0.75rem;
  }

  &__heading {
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--text-heading);
    margin: 0 0 1rem;
    font-weight: 600;
  }

  &__body {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }
}
</style>
