<script setup lang="ts">
interface Props {
  role: string
  domain?: string
  pain: string
  wish: string
  hook: string
  caseSnippet?: string
}

defineProps<Props>()
</script>

<template>
  <article class="role-card">
    <header class="role-card__head">
      <p v-if="domain" class="role-card__domain">{{ domain }}</p>
      <h3 class="role-card__role">{{ role }}</h3>
    </header>

    <dl class="role-card__pairs">
      <div class="role-card__pair">
        <dt class="role-card__label">Pijn</dt>
        <dd class="role-card__value">{{ pain }}</dd>
      </div>
      <div class="role-card__pair">
        <dt class="role-card__label">Wens</dt>
        <dd class="role-card__value">{{ wish }}</dd>
      </div>
    </dl>

    <blockquote class="role-card__hook">
      <p>{{ hook }}</p>
    </blockquote>

    <p v-if="caseSnippet" class="role-card__case">
      <span class="role-card__case-label">Casus</span>
      {{ caseSnippet }}
    </p>
  </article>
</template>

<style lang="scss" scoped>
.role-card {
  background: var(--surface-canvas);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-rounded);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform var(--promo-duration-base) var(--promo-ease-out),
              box-shadow var(--promo-duration-base) var(--promo-ease-out),
              border-color var(--promo-duration-base) var(--promo-ease-out);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-m);
    border-color: var(--border-default);
  }

  &__head {
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-subtle);
  }

  &__domain {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--promo-accent-600);
    margin: 0 0 0.5rem;
  }

  &__role {
    font-family: var(--font-display);
    font-size: 1.25rem;
    line-height: 1.25;
    color: var(--text-heading);
    margin: 0;
    font-weight: 600;
  }

  &__pairs {
    margin: 0 0 1.25rem;
    display: grid;
    gap: 0.875rem;
  }

  &__pair {
    display: grid;
    grid-template-columns: 4rem 1fr;
    gap: 0.75rem;
    align-items: baseline;
  }

  &__label {
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 600;
  }

  &__value {
    font-size: 0.9375rem;
    line-height: 1.5;
    color: var(--text-default);
    margin: 0;
  }

  &__hook {
    margin: 0 0 1.25rem;
    padding: 0.875rem 1rem;
    background: var(--brand-subtle);
    border-radius: var(--radius-default);
    border-left: 3px solid var(--promo-cta-default);

    p {
      margin: 0;
      font-size: 0.9375rem;
      line-height: 1.45;
      color: var(--text-heading);
      font-style: italic;
    }
  }

  &__case {
    margin: auto 0 0;
    padding-top: 1rem;
    border-top: 1px dashed var(--border-subtle);
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--text-secondary);
  }

  &__case-label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--promo-accent-600);
    margin-bottom: 0.25rem;
  }
}
</style>
