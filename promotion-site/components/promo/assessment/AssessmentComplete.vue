<script setup lang="ts">
defineEmits<{
  reset: []
}>()
</script>

<template>
  <section class="complete">
    <div class="complete__icon" aria-hidden="true">
      <svg viewBox="0 0 64 64" width="64" height="64">
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" stroke-width="3" />
        <path d="M18 32 L28 42 L46 22" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <h2 class="complete__title">Verzonden — bedankt!</h2>
    <p class="complete__body">
      Het uitgebreide rapport zit binnen een paar minuten in je inbox.
      Check ook even je spam-folder mocht het niet aankomen.
    </p>
    <p class="complete__body">
      Wil je er direct over door-praten? We doen 30-min kennismakings-gesprekken
      zonder verkooppraat.
    </p>
    <div class="complete__actions">
      <PromoBtn to="/kennismaking" variant="primary" size="l">Plan een kennismaking</PromoBtn>
      <PromoBtn variant="ghost" size="m" @click="$emit('reset')">Doe de check opnieuw</PromoBtn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.complete {
  max-width: 36rem;
  margin: 0 auto;
  padding: 2.5rem;
  background: var(--surface-canvas);
  border-radius: var(--radius-large);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-s);
  text-align: center;

  &__icon {
    color: var(--feedback-success);
    margin: 0 auto 1.25rem;
    width: 4rem;
    height: 4rem;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 1.875rem);
    color: var(--text-heading);
    margin: 0 0 1rem;
    font-weight: 600;
  }

  &__body {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0 0 1rem;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }
}
</style>
