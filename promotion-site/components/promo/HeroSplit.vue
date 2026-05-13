<script setup lang="ts">
interface Props {
  eyebrow?: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  align: 'left'
})
</script>

<template>
  <section class="hero-split" :class="`hero-split--${align}`">
    <div class="hero-split__inner">
      <div class="hero-split__copy">
        <p v-if="eyebrow" class="hero-split__eyebrow">{{ eyebrow }}</p>
        <h1 class="hero-split__title">
          <slot name="title" />
        </h1>
        <div class="hero-split__body">
          <slot name="body" />
        </div>
        <div v-if="$slots.cta" class="hero-split__cta">
          <slot name="cta" />
        </div>
      </div>
      <aside v-if="$slots.visual" class="hero-split__visual" aria-hidden="true">
        <slot name="visual" />
      </aside>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-split {
  padding: var(--promo-section-y-l) 1.5rem var(--promo-section-y-m);
  background: var(--surface-canvas);

  &__inner {
    max-width: var(--promo-container);
    margin: 0 auto;
    display: grid;
    gap: 3rem;
    align-items: center;
  }

  &--left &__inner {
    grid-template-columns: 1fr;

    @media (min-width: 64rem) {
      grid-template-columns: 1.1fr 0.9fr;
    }
  }

  &--center &__inner {
    text-align: center;
    grid-template-columns: 1fr;
    max-width: 56rem;
  }

  &__eyebrow {
    font-size: 0.875rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--promo-accent-600);
    margin: 0 0 1rem;
    font-weight: 500;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(2.25rem, 5.5vw, 3.75rem);
    line-height: var(--promo-display-leading-hero);
    letter-spacing: var(--promo-display-tracking-display);
    color: var(--text-heading);
    margin: 0 0 1.5rem;
    font-weight: 600;
  }

  &__body {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--text-secondary);
    max-width: 52ch;
    margin-bottom: 2rem;

    :deep(p) {
      margin: 0 0 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &--center &__body {
    margin-left: auto;
    margin-right: auto;
  }

  &__cta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  &--center &__cta {
    justify-content: center;
  }

  &__visual {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
