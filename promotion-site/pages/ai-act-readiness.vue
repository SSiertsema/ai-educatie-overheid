<script setup lang="ts">
useHead({
  title: 'AI Act-readiness · AI-scholing publieke sector',
  meta: [
    {
      name: 'description',
      content: 'Doe de AI Act-check: hoe geletterd is jullie organisatie? Tien vragen, direct resultaat, gepersonaliseerd rapport.'
    }
  ]
})

const what = [
  { title: '10 vragen', body: 'Over jullie AI-gebruik, beleid, training, governance en risico-klassificatie.' },
  { title: 'Direct resultaat', body: 'Een score-band (4 niveaus) met 1-alinea duiding — niet onder de motorkap.' },
  { title: 'Volledig rapport', body: 'Uitgebreid rapport per mail met gepersonaliseerd advies per zwak punt.' }
]
</script>

<template>
  <div>
    <PromoHeroSplit eyebrow="EU AI Act-check" align="center">
      <template #title>Hoe AI-Act-geletterd is jullie organisatie?</template>
      <template #body>
        <p>
          Per februari 2025 is AI-geletterdheid verplicht voor organisaties die met AI werken.
          Met deze check zie je direct waar jullie staan en wat nog ontbreekt.
        </p>
        <p>5 minuten. Anoniem te starten. Volledig rapport per mail.</p>
      </template>
      <template #cta>
        <PromoBtn variant="primary" size="l">Start de check</PromoBtn>
      </template>
    </PromoHeroSplit>

    <PromoProblemMirror
      eyebrow="Wat je krijgt"
      heading="Drie dingen, geen onderdelen meer"
      :problems="what"
    />

    <section class="assessment-placeholder">
      <div class="assessment-placeholder__inner">
        <p class="assessment-placeholder__kicker">Assessment-flow</p>
        <h2 class="assessment-placeholder__title">De vragenlijst-engine komt hier</h2>
        <p class="assessment-placeholder__body">
          In de MVP wordt hier de interactieve vragenlijst-flow ingeladen.
          De vragen en scoring-logica zitten in een JSON-fixture; resultaten gaan via
          een serverless function naar Resend voor de mail.
        </p>
        <ul class="assessment-placeholder__list">
          <li>Welkom-scherm + uitleg + opt-in</li>
          <li>Eén vraag per scherm met progress-bar</li>
          <li>Direct resultaat + score-band</li>
          <li>Mail-form (gated) voor volledig rapport</li>
        </ul>
      </div>
    </section>

    <PromoCTABanner variant="dark" align="split">
      <template #title>Liever direct sparren?</template>
      <template #body>De assessment is een hulpmiddel — een gesprek geeft meer richting.</template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="inverse" size="l">Plan een kennismaking</PromoBtn>
      </template>
    </PromoCTABanner>
  </div>
</template>

<style lang="scss" scoped>
.assessment-placeholder {
  padding: var(--promo-section-y-m) 1.5rem;
  background: var(--surface-canvas);

  &__inner {
    max-width: 44rem;
    margin: 0 auto;
    text-align: center;
    padding: 3rem 2rem;
    border: 2px dashed var(--border-default);
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

  &__title {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 2.5vw, 1.875rem);
    color: var(--text-heading);
    margin: 0 0 1rem;
    font-weight: 600;
  }

  &__body {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0 0 1.5rem;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
    color: var(--text-secondary);
    font-size: 0.9375rem;

    li::before {
      content: '→ ';
      color: var(--promo-cta-default);
      font-weight: 600;
      margin-right: 0.25rem;
    }
  }
}
</style>
