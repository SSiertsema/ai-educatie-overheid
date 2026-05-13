<script setup lang="ts">
interface Props {
  hasResumeState?: boolean
  resumeIndex?: number
  totalQuestions: number
}

defineProps<Props>()

defineEmits<{
  start: []
  resume: []
  reset: []
}>()
</script>

<template>
  <section class="welcome">
    <div class="welcome__badge" aria-hidden="true">
      <span class="welcome__badge-dot" />
      <span>EU AI Act</span>
    </div>
    <h2 class="welcome__title">Doe de readiness-check</h2>
    <p class="welcome__lead">
      Tien korte vragen over jullie AI-gebruik, beleid en governance.
      Direct na vraag 10 zie je waar jullie staan — uitgebreid rapport via mail.
    </p>

    <ul class="welcome__list">
      <li>
        <span class="welcome__list-icon" aria-hidden="true">⏱</span>
        <span><strong>5 minuten</strong> &middot; één vraag per scherm</span>
      </li>
      <li>
        <span class="welcome__list-icon" aria-hidden="true">⚡</span>
        <span><strong>Direct resultaat</strong> &middot; score-band met duiding</span>
      </li>
      <li>
        <span class="welcome__list-icon" aria-hidden="true">✉</span>
        <span><strong>Volledig rapport</strong> &middot; persoonlijk advies per zwak punt</span>
      </li>
      <li>
        <span class="welcome__list-icon" aria-hidden="true">🔒</span>
        <span><strong>Anoniem starten</strong> &middot; mailadres alleen voor het rapport</span>
      </li>
    </ul>

    <div v-if="hasResumeState" class="welcome__resume">
      <p class="welcome__resume-text">
        We zien dat je een eerder gestarte check hebt (vraag {{ (resumeIndex ?? 0) + 1 }} van {{ totalQuestions }}).
      </p>
      <div class="welcome__actions">
        <PromoBtn variant="primary" size="l" @click="$emit('resume')">Verder waar je was</PromoBtn>
        <PromoBtn variant="ghost" size="l" @click="$emit('reset')">Opnieuw beginnen</PromoBtn>
      </div>
    </div>

    <div v-else class="welcome__actions">
      <PromoBtn variant="primary" size="l" @click="$emit('start')">Start de check</PromoBtn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.welcome {
  max-width: 38rem;
  margin: 0 auto;
  padding: 2.5rem;
  background: var(--surface-canvas);
  border-radius: var(--radius-large);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-s);

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.875rem;
    background: var(--brand-subtle);
    border-radius: var(--radius-pill);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-heading);
    font-weight: 600;
    margin-bottom: 1.25rem;
  }

  &__badge-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: var(--radius-pill);
    background: var(--promo-cta-default);
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(1.625rem, 3vw, 2rem);
    line-height: 1.2;
    color: var(--text-heading);
    margin: 0 0 0.75rem;
    font-weight: 600;
  }

  &__lead {
    font-size: 1.0625rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0 0 1.5rem;
  }

  &__list {
    list-style: none;
    margin: 0 0 1.75rem;
    padding: 0;
    display: grid;
    gap: 0.75rem;
  }

  &__list li {
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    align-items: baseline;
    gap: 0.75rem;
    font-size: 0.9375rem;
    color: var(--text-default);
  }

  &__list-icon {
    font-size: 1.125rem;
  }

  &__resume {
    margin-top: 0.5rem;
    padding: 1rem;
    background: var(--surface-muted);
    border-radius: var(--radius-default);
  }

  &__resume-text {
    margin: 0 0 0.875rem;
    font-size: 0.9375rem;
    color: var(--text-default);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
}
</style>
