<script setup lang="ts">
interface Problem {
  title: string
  body: string
}

interface Props {
  eyebrow?: string
  heading: string
  problems: Problem[]
}

defineProps<Props>()
</script>

<template>
  <section class="problem-mirror">
    <div class="problem-mirror__inner">
      <header class="problem-mirror__head">
        <p v-if="eyebrow" class="problem-mirror__eyebrow">{{ eyebrow }}</p>
        <h2 class="problem-mirror__heading">{{ heading }}</h2>
      </header>
      <ul class="problem-mirror__grid">
        <li
          v-for="(problem, index) in problems"
          :key="index"
          class="problem-mirror__card"
        >
          <div class="problem-mirror__index" aria-hidden="true">
            {{ String(index + 1).padStart(2, '0') }}
          </div>
          <h3 class="problem-mirror__title">{{ problem.title }}</h3>
          <p class="problem-mirror__body">{{ problem.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.problem-mirror {
  padding: var(--promo-section-y-m) 1.5rem;
  background: var(--surface-panel);

  &__inner {
    max-width: var(--promo-container);
    margin: 0 auto;
  }

  &__head {
    text-align: center;
    margin-bottom: 3rem;
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
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
    margin: 0;
    font-weight: 600;
  }

  &__grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;

    @media (min-width: 48rem) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__card {
    background: var(--surface-canvas);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-rounded);
    padding: 2rem 1.75rem;
    transition: transform var(--promo-duration-base) var(--promo-ease-out),
                box-shadow var(--promo-duration-base) var(--promo-ease-out);

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-m);
    }
  }

  &__index {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--promo-accent-600);
    margin-bottom: 1rem;
    letter-spacing: 0.04em;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    line-height: 1.3;
    color: var(--text-heading);
    margin: 0 0 0.75rem;
    font-weight: 600;
  }

  &__body {
    font-size: 1rem;
    line-height: 1.55;
    color: var(--text-secondary);
    margin: 0;
  }
}
</style>
