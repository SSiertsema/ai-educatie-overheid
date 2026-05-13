<script setup lang="ts">
useHead({
  title: 'Inzichten · AI-scholing publieke sector',
  meta: [
    {
      name: 'description',
      content: 'Artikelen en podcast-afleveringen over AI in de publieke sector — verantwoord, praktisch, met aandacht voor de werkvloer.'
    }
  ]
})
</script>

<template>
  <div>
    <PromoHeroSplit eyebrow="Inzichten" align="center">
      <template #title>Wat we leren uit de praktijk, terug naar het veld.</template>
      <template #body>
        <p>
          Artikelen en podcast-afleveringen over AI in de publieke sector.
          Geen marketing-bombast — wel eerlijke observaties uit trajecten en de bredere markt.
        </p>
      </template>
    </PromoHeroSplit>

    <section class="empty-state">
      <div class="empty-state__inner">
        <p class="empty-state__kicker">Lege state</p>
        <h2 class="empty-state__title">De eerste publicaties komen eraan.</h2>
        <p class="empty-state__body">
          Drie artikelen en een podcast-aflevering worden gepubliceerd bij de launch.
          Schrijf je in voor de nieuwsbrief om als eerste te horen wanneer er nieuws is.
        </p>
        <div class="empty-state__cta">
          <PromoBtn to="/kennismaking" variant="primary" size="l">Plan een kennismaking</PromoBtn>
        </div>
      </div>
    </section>

    <PromoCTABanner variant="subtle" align="center">
      <template #title>Tot die tijd — een gesprek?</template>
      <template #body>30 minuten, online of op locatie. We luisteren wat er bij jullie speelt.</template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="primary" size="l">Plan een kennismaking</PromoBtn>
      </template>
    </PromoCTABanner>
  </div>
</template>

<style lang="scss" scoped>
.empty-state {
  padding: var(--promo-section-y-l) 1.5rem;
  background: var(--surface-canvas);

  &__inner {
    max-width: 40rem;
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
    color: var(--text-muted);
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
    margin: 0 0 1.75rem;
  }

  &__cta {
    display: flex;
    justify-content: center;
  }
}
</style>
