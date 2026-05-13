<script setup lang="ts">
interface Step {
  title: string
  body: string
  meta?: string
}

interface Props {
  eyebrow?: string
  heading: string
  intro?: string
  steps: Step[]
}

defineProps<Props>()
</script>

<template>
  <section class="process-timeline">
    <div class="process-timeline__inner">
      <header class="process-timeline__head">
        <p v-if="eyebrow" class="process-timeline__eyebrow">{{ eyebrow }}</p>
        <h2 class="process-timeline__heading">{{ heading }}</h2>
        <p v-if="intro" class="process-timeline__intro">{{ intro }}</p>
      </header>

      <ol class="process-timeline__list">
        <li
          v-for="(step, index) in steps"
          :key="index"
          class="process-timeline__step"
        >
          <div class="process-timeline__node" aria-hidden="true">
            <span class="process-timeline__node-number">{{ index + 1 }}</span>
          </div>
          <div class="process-timeline__content">
            <h3 class="process-timeline__title">{{ step.title }}</h3>
            <p class="process-timeline__body">{{ step.body }}</p>
            <p v-if="step.meta" class="process-timeline__meta">{{ step.meta }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.process-timeline {
  padding: var(--promo-section-y-l) 1.5rem;
  background: var(--surface-canvas);

  &__inner {
    max-width: var(--promo-container);
    margin: 0 auto;
  }

  &__head {
    text-align: center;
    max-width: 42rem;
    margin: 0 auto 4rem;
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

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 2.5rem;
    grid-template-columns: 1fr;
    position: relative;

    @media (min-width: 56rem) {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
  }

  &__step {
    display: flex;
    gap: 1.25rem;
    position: relative;

    @media (min-width: 56rem) {
      flex-direction: column;
      gap: 1.25rem;
    }
  }

  // Connector lines between nodes (desktop only)
  @media (min-width: 56rem) {
    &__step:not(:last-child) &__node::after {
      content: '';
      position: absolute;
      left: calc(50% + 1.5rem);
      top: 50%;
      width: calc(100% - 3rem);
      height: 2px;
      background: var(--border-default);
      transform: translateY(-50%);
      z-index: 0;
    }
  }

  &__node {
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    width: 3rem;
    height: 3rem;
    border-radius: var(--radius-pill);
    background: var(--brand-primary);
    color: var(--text-inverse);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-s);
  }

  &__node-number {
    font-family: var(--font-display);
    font-size: 1.125rem;
    font-weight: 600;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 1.125rem;
    line-height: 1.3;
    color: var(--text-heading);
    margin: 0 0 0.5rem;
    font-weight: 600;
  }

  &__body {
    font-size: 0.9375rem;
    line-height: 1.55;
    color: var(--text-secondary);
    margin: 0 0 0.5rem;
  }

  &__meta {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--promo-accent-600);
    margin: 0;
    letter-spacing: 0.02em;
  }
}
</style>
