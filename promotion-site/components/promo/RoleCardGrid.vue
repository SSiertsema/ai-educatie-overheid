<script setup lang="ts">
interface Props {
  eyebrow?: string
  heading?: string
  intro?: string
  columns?: 2 | 3 | 4
}

withDefaults(defineProps<Props>(), {
  columns: 3
})
</script>

<template>
  <section class="role-card-grid">
    <div class="role-card-grid__inner">
      <header v-if="heading || eyebrow || intro" class="role-card-grid__head">
        <p v-if="eyebrow" class="role-card-grid__eyebrow">{{ eyebrow }}</p>
        <h2 v-if="heading" class="role-card-grid__heading">{{ heading }}</h2>
        <p v-if="intro" class="role-card-grid__intro">{{ intro }}</p>
      </header>

      <div class="role-card-grid__grid" :data-columns="columns">
        <slot />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.role-card-grid {
  padding: var(--promo-section-y-m) 1.5rem;
  background: var(--surface-canvas);

  &__inner {
    max-width: var(--promo-container);
    margin: 0 auto;
  }

  &__head {
    text-align: center;
    max-width: 42rem;
    margin: 0 auto 3rem;
  }

  &__eyebrow {
    font-size: 0.875rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--promo-accent-600);
    margin: 0 0 0.75rem;
    font-weight: 500;
  }

  &__heading {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    line-height: 1.2;
    letter-spacing: var(--promo-display-tracking-tight);
    color: var(--text-heading);
    margin: 0 0 1rem;
    font-weight: 600;
  }

  &__intro {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }

  &__grid {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: 1fr;

    @media (min-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    &[data-columns='3'] {
      @media (min-width: 64rem) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &[data-columns='4'] {
      @media (min-width: 64rem) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
}
</style>
