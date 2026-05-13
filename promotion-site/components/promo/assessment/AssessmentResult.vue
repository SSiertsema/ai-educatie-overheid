<script setup lang="ts">
import type { Band } from '~/composables/useAssessment'

interface Props {
  band: Band
  score: number
  maxScore: number
  weakTopics: string[]
  topicAdvice: Record<string, string>
}

defineProps<Props>()

defineEmits<{
  requestReport: []
  reset: []
}>()
</script>

<template>
  <section class="result" :data-tone="band.tone">
    <div class="result__head">
      <div class="result__score">
        <span class="result__score-value">{{ score }}</span>
        <span class="result__score-divider" aria-hidden="true">/</span>
        <span class="result__score-max">{{ maxScore }}</span>
      </div>
      <div class="result__band">
        <p class="result__band-eyebrow">Jullie score-band</p>
        <h2 class="result__band-label">{{ band.label }}</h2>
      </div>
    </div>

    <p class="result__headline">{{ band.headline }}</p>
    <p class="result__summary">{{ band.summary }}</p>

    <div class="result__priorities">
      <h3 class="result__priorities-title">Top-prioriteiten op basis van deze score</h3>
      <ol class="result__priorities-list">
        <li v-for="(p, i) in band.topPriorities" :key="i">{{ p }}</li>
      </ol>
    </div>

    <div v-if="weakTopics.length > 0" class="result__weak">
      <h3 class="result__weak-title">Onderdelen die extra aandacht vragen</h3>
      <ul class="result__weak-list">
        <li v-for="topic in weakTopics" :key="topic">
          <strong>{{ topic }}.</strong>
          <span>{{ topicAdvice[topic] }}</span>
        </li>
      </ul>
    </div>

    <div class="result__cta">
      <div class="result__cta-copy">
        <h3 class="result__cta-title">Wil je het volledige rapport?</h3>
        <p class="result__cta-body">
          Per zwak punt een concreet advies, plus een vergelijking met andere publieke organisaties.
          Direct via mail.
        </p>
      </div>
      <div class="result__cta-actions">
        <PromoBtn variant="primary" size="l" @click="$emit('requestReport')">Stuur het rapport</PromoBtn>
        <PromoBtn variant="ghost" size="m" @click="$emit('reset')">Opnieuw beginnen</PromoBtn>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.result {
  max-width: 44rem;
  margin: 0 auto;
  padding: 2.5rem;
  background: var(--surface-canvas);
  border-radius: var(--radius-large);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-m);

  // Tone-driven accent (top-strip)
  &::before {
    content: '';
    display: block;
    height: 0.375rem;
    border-radius: var(--radius-pill);
    margin-bottom: 2rem;
    background: var(--promo-cta-default);
  }

  &[data-tone='warning']::before {
    background: var(--feedback-warning);
  }
  &[data-tone='info']::before {
    background: var(--feedback-info);
  }
  &[data-tone='success']::before {
    background: var(--feedback-success);
  }

  &__head {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-subtle);
  }

  &__score {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
    font-family: var(--font-display);
    color: var(--text-heading);
  }

  &__score-value {
    font-size: clamp(3rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1;
  }

  &__score-divider {
    font-size: 2rem;
    color: var(--text-muted);
    margin: 0 0.125rem;
  }

  &__score-max {
    font-size: 1.5rem;
    color: var(--text-muted);
    font-weight: 500;
  }

  &__band-eyebrow {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin: 0 0 0.375rem;
    font-weight: 600;
  }

  &__band-label {
    font-family: var(--font-display);
    font-size: 1.75rem;
    line-height: 1.1;
    color: var(--text-heading);
    margin: 0;
    font-weight: 700;
  }

  &__headline {
    font-size: 1.125rem;
    line-height: 1.5;
    color: var(--text-heading);
    margin: 0 0 1rem;
    font-weight: 500;
  }

  &__summary {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0 0 1.75rem;
  }

  &__priorities {
    margin-bottom: 1.75rem;
    padding: 1.25rem 1.5rem;
    background: var(--surface-panel);
    border-radius: var(--radius-default);
  }

  &__priorities-title {
    font-family: var(--font-display);
    font-size: 1rem;
    color: var(--text-heading);
    margin: 0 0 0.875rem;
    font-weight: 600;
  }

  &__priorities-list {
    margin: 0;
    padding-left: 1.25rem;
    color: var(--text-default);
    line-height: 1.55;
    font-size: 0.9375rem;

    li {
      margin-bottom: 0.375rem;

      &::marker {
        color: var(--promo-cta-default);
        font-weight: 600;
      }
    }
  }

  &__weak {
    margin-bottom: 2rem;
  }

  &__weak-title {
    font-family: var(--font-display);
    font-size: 1rem;
    color: var(--text-heading);
    margin: 0 0 0.875rem;
    font-weight: 600;
  }

  &__weak-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.75rem;
  }

  &__weak-list li {
    padding-left: 1rem;
    border-left: 3px solid var(--promo-accent-500);
    font-size: 0.9375rem;
    line-height: 1.55;
    color: var(--text-default);

    strong {
      color: var(--text-heading);
      margin-right: 0.25rem;
    }
  }

  &__cta {
    margin-top: 2rem;
    padding: 1.5rem;
    background: var(--brand-subtle);
    border-radius: var(--radius-default);
    display: grid;
    gap: 1rem;
    align-items: center;

    @media (min-width: 40rem) {
      grid-template-columns: 1fr auto;
    }
  }

  &__cta-title {
    font-family: var(--font-display);
    font-size: 1.125rem;
    color: var(--text-heading);
    margin: 0 0 0.375rem;
    font-weight: 600;
  }

  &__cta-body {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 1.5;
    color: var(--text-secondary);
  }

  &__cta-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;

    @media (min-width: 40rem) {
      align-items: flex-end;
    }
  }
}
</style>
