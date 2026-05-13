<script setup lang="ts">
interface Props {
  variant?: 'dark' | 'warm' | 'subtle'
  align?: 'center' | 'split'
}

withDefaults(defineProps<Props>(), {
  variant: 'dark',
  align: 'split'
})
</script>

<template>
  <section class="cta-banner" :class="[`cta-banner--${variant}`, `cta-banner--${align}`]">
    <div class="cta-banner__inner">
      <div class="cta-banner__copy">
        <h2 v-if="$slots.title" class="cta-banner__title">
          <slot name="title" />
        </h2>
        <p v-if="$slots.body" class="cta-banner__body">
          <slot name="body" />
        </p>
      </div>
      <div v-if="$slots.cta" class="cta-banner__actions">
        <slot name="cta" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta-banner {
  padding: var(--promo-section-y-m) 1.5rem;

  &--dark {
    background: var(--surface-inverse);
    color: var(--text-inverse);
  }

  &--warm {
    background: var(--brand-subtle);
    color: var(--text-heading);
  }

  &--subtle {
    background: var(--surface-panel);
    color: var(--text-default);
  }

  &__inner {
    max-width: var(--promo-container);
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    align-items: center;
  }

  &--split &__inner {
    grid-template-columns: 1fr;

    @media (min-width: 56rem) {
      grid-template-columns: 1fr auto;
      gap: 3rem;
    }
  }

  &--center &__inner {
    grid-template-columns: 1fr;
    text-align: center;
    max-width: 42rem;
  }

  &__copy {
    min-width: 0;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2.125rem);
    line-height: 1.2;
    letter-spacing: var(--promo-display-tracking-tight);
    margin: 0 0 0.75rem;
    font-weight: 600;

    .cta-banner--dark & {
      color: var(--text-inverse);
    }
  }

  &__body {
    font-size: 1.0625rem;
    line-height: 1.55;
    margin: 0;
    max-width: 50ch;

    .cta-banner--dark & {
      color: rgba(255, 255, 255, 0.82);
    }

    .cta-banner--warm &, .cta-banner--subtle & {
      color: var(--text-secondary);
    }
  }

  &--center &__body {
    margin-left: auto;
    margin-right: auto;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  &--center &__actions {
    justify-content: center;
  }
}
</style>
