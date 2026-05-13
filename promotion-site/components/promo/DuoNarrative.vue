<script setup lang="ts">
interface Half {
  label: string
  title: string
  body: string
  iconGlyph?: string
}

interface Props {
  eyebrow?: string
  heading: string
  intro?: string
  primary: Half
  secondary: Half
  conjunction?: string
}

withDefaults(defineProps<Props>(), {
  conjunction: 'én'
})
</script>

<template>
  <section class="duo-narrative">
    <div class="duo-narrative__inner">
      <header class="duo-narrative__head">
        <p v-if="eyebrow" class="duo-narrative__eyebrow">{{ eyebrow }}</p>
        <h2 class="duo-narrative__heading">{{ heading }}</h2>
        <p v-if="intro" class="duo-narrative__intro">{{ intro }}</p>
      </header>

      <div class="duo-narrative__pair">
        <article class="duo-narrative__half duo-narrative__half--primary">
          <span class="duo-narrative__label">{{ primary.label }}</span>
          <h3 class="duo-narrative__title">{{ primary.title }}</h3>
          <p class="duo-narrative__body">{{ primary.body }}</p>
        </article>

        <div class="duo-narrative__conjunction" aria-hidden="true">
          <span class="duo-narrative__conjunction-word">{{ conjunction }}</span>
        </div>

        <article class="duo-narrative__half duo-narrative__half--secondary">
          <span class="duo-narrative__label">{{ secondary.label }}</span>
          <h3 class="duo-narrative__title">{{ secondary.title }}</h3>
          <p class="duo-narrative__body">{{ secondary.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.duo-narrative {
  padding: var(--promo-section-y-l) 1.5rem;
  background: var(--surface-canvas);
  position: relative;

  &__inner {
    max-width: var(--promo-container);
    margin: 0 auto;
  }

  &__head {
    text-align: center;
    max-width: 42rem;
    margin: 0 auto 3.5rem;
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

  &__pair {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'primary'
      'conjunction'
      'secondary';
    gap: 1.5rem;
    align-items: stretch;

    @media (min-width: 56rem) {
      grid-template-columns: 1fr auto 1fr;
      grid-template-areas: 'primary conjunction secondary';
      gap: 2rem;
    }
  }

  &__half {
    padding: 2.5rem;
    border-radius: var(--radius-large);
    position: relative;
    display: flex;
    flex-direction: column;

    &--primary {
      grid-area: primary;
      background: var(--brand-subtle);
      color: var(--text-heading);
    }

    &--secondary {
      grid-area: secondary;
      background: var(--surface-inverse);
      color: var(--text-inverse);
    }
  }

  &__label {
    display: inline-block;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-pill);
    margin-bottom: 1.25rem;
    align-self: flex-start;

    .duo-narrative__half--primary & {
      background: rgba(23, 50, 77, 0.08);
      color: var(--brand-primary);
    }

    .duo-narrative__half--secondary & {
      background: rgba(255, 255, 255, 0.14);
      color: var(--text-inverse);
    }
  }

  &__title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    line-height: 1.25;
    margin: 0 0 1rem;
    font-weight: 600;
  }

  &__body {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;

    .duo-narrative__half--secondary & {
      color: rgba(255, 255, 255, 0.86);
    }
  }

  &__conjunction {
    grid-area: conjunction;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
  }

  &__conjunction-word {
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    color: var(--promo-cta-default);
    font-weight: 500;
    line-height: 1;
  }
}
</style>
