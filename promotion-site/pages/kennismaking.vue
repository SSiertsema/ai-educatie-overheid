<script setup lang="ts">
useHead({
  title: 'Kennismaking · AI-scholing publieke sector',
  meta: [
    {
      name: 'description',
      content: 'Plan een 30-minuten kennismaking. We luisteren eerst — geen verkooppraat.'
    }
  ]
})
</script>

<template>
  <div>
    <PromoHeroSplit eyebrow="Kennismaking" align="center">
      <template #title>Een kort, eerlijk gesprek — meer is het niet.</template>
      <template #body>
        <p>
          30 minuten. Online of op locatie. We luisteren wat er bij jullie speelt,
          en jij hoort wat we wel én niet kunnen waarmaken.
        </p>
        <p>Geen verkooppraat. Geen huiswerk vooraf.</p>
      </template>
    </PromoHeroSplit>

    <section class="booking-placeholder">
      <div class="booking-placeholder__inner">
        <div class="booking-placeholder__card">
          <p class="booking-placeholder__kicker">Boekingswidget</p>
          <h2 class="booking-placeholder__title">Cal.com-embed komt hier</h2>
          <p class="booking-placeholder__body">
            In de MVP wordt hier een Cal.com-widget ingeladen waarin je direct
            een tijdslot kiest. Voor nu: stuur een mail naar
            <a href="mailto:hallo@aieducatie.nl" class="booking-placeholder__link">hallo@aieducatie.nl</a>
            of bel ons.
          </p>
        </div>

        <div class="booking-placeholder__form-card">
          <p class="booking-placeholder__kicker">Intake-formulier (placeholder)</p>
          <h3 class="booking-placeholder__sub">Wat we graag voor het gesprek weten</h3>
          <ul class="booking-placeholder__list">
            <li>Organisatie + functie</li>
            <li>Aantal medewerkers</li>
            <li>Waar zit op dit moment de grootste pijn? (multi-select)</li>
            <li>Wanneer komt het gesprek het beste uit?</li>
          </ul>
          <p class="booking-placeholder__note">
            Het echte formulier (Netlify Forms) wordt later toegevoegd.
          </p>
        </div>
      </div>
    </section>

    <PromoCTABanner variant="warm" align="center">
      <template #title>Liever eerst de AI Act-check?</template>
      <template #body>Tien vragen, 5 minuten, gepersonaliseerd rapport.</template>
      <template #cta>
        <PromoBtn to="/ai-act-readiness" variant="primary" size="l">Start de check</PromoBtn>
      </template>
    </PromoCTABanner>
  </div>
</template>

<style lang="scss" scoped>
.booking-placeholder {
  padding: var(--promo-section-y-m) 1.5rem;
  background: var(--surface-canvas);

  &__inner {
    max-width: var(--promo-container);
    margin: 0 auto;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;

    @media (min-width: 56rem) {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  &__card,
  &__form-card {
    padding: 2.5rem;
    border-radius: var(--radius-large);
    border: 1px solid var(--border-subtle);
    background: var(--surface-panel);
  }

  &__card {
    background: var(--brand-subtle);
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
    font-size: 1.5rem;
    color: var(--text-heading);
    margin: 0 0 1rem;
    font-weight: 600;
  }

  &__sub {
    font-family: var(--font-display);
    font-size: 1.25rem;
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

  &__link {
    color: var(--promo-cta-default);
    font-weight: 500;

    &:hover {
      color: var(--promo-cta-hover);
    }
  }

  &__list {
    margin: 0 0 1rem;
    padding-left: 1.25rem;
    color: var(--text-secondary);
    line-height: 1.7;

    li {
      margin-bottom: 0.25rem;
    }
  }

  &__note {
    margin: 0;
    padding-top: 1rem;
    border-top: 1px dashed var(--border-default);
    font-size: 0.8125rem;
    color: var(--text-muted);
    font-style: italic;
  }
}
</style>
