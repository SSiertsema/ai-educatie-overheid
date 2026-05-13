<script setup lang="ts">
interface Props {
  eyebrow?: string
  heading: string
  body: string
  durationLabel?: string
  ctaLabel?: string
  ctaHref?: string
}

withDefaults(defineProps<Props>(), {
  durationLabel: '5 minuten',
  ctaLabel: 'Start de check',
  ctaHref: '/ai-act-readiness'
})
</script>

<template>
  <section class="assessment-teaser">
    <div class="assessment-teaser__inner">
      <div class="assessment-teaser__badge" aria-hidden="true">
        <span class="assessment-teaser__badge-dot"></span>
        <span class="assessment-teaser__badge-label">AI Act-check</span>
      </div>
      <div class="assessment-teaser__copy">
        <p v-if="eyebrow" class="assessment-teaser__eyebrow">{{ eyebrow }}</p>
        <h2 class="assessment-teaser__heading">{{ heading }}</h2>
        <p class="assessment-teaser__body">{{ body }}</p>
        <div class="assessment-teaser__meta">
          <span class="assessment-teaser__meta-item">
            <svg class="assessment-teaser__icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5" />
              <path d="M8 4v4l2.5 2.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            {{ durationLabel }}
          </span>
          <span class="assessment-teaser__meta-item">
            <svg class="assessment-teaser__icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Direct resultaat
          </span>
          <span class="assessment-teaser__meta-item">
            <svg class="assessment-teaser__icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <rect x="2" y="3" width="12" height="10" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5" />
              <path d="M2 6l6 4 6-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
            Rapport via mail
          </span>
        </div>
      </div>
      <div class="assessment-teaser__action">
        <a :href="ctaHref" class="assessment-teaser__cta">
          {{ ctaLabel }}
          <span class="assessment-teaser__cta-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.assessment-teaser {
  padding: var(--promo-section-y-m) 1.5rem;
  background: var(--surface-canvas);

  &__inner {
    max-width: var(--promo-container);
    margin: 0 auto;
    padding: 2.5rem;
    background: var(--brand-subtle);
    border-radius: var(--radius-large);
    border: 1px solid var(--border-subtle);
    display: grid;
    gap: 2rem;
    align-items: center;

    @media (min-width: 56rem) {
      grid-template-columns: auto 1fr auto;
      gap: 2.5rem;
      padding: 3rem;
    }
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.875rem;
    background: var(--surface-canvas);
    border-radius: var(--radius-pill);
    box-shadow: var(--shadow-xs);
    align-self: flex-start;

    @media (min-width: 56rem) {
      align-self: center;
    }
  }

  &__badge-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: var(--radius-pill);
    background: var(--promo-cta-default);
  }

  &__badge-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-heading);
    font-weight: 600;
  }

  &__copy {
    min-width: 0;
  }

  &__eyebrow {
    font-size: 0.875rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--promo-accent-600);
    margin: 0 0 0.5rem;
    font-weight: 500;
  }

  &__heading {
    font-family: var(--font-display);
    font-size: clamp(1.375rem, 2.5vw, 1.75rem);
    line-height: 1.25;
    color: var(--text-heading);
    margin: 0 0 0.75rem;
    font-weight: 600;
  }

  &__body {
    font-size: 1rem;
    line-height: 1.55;
    color: var(--text-secondary);
    margin: 0 0 1rem;
    max-width: 50ch;
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
  }

  &__meta-item {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  &__icon {
    color: var(--promo-cta-default);
  }

  &__action {
    @media (min-width: 56rem) {
      justify-self: end;
    }
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: var(--promo-cta-default);
    color: var(--text-inverse);
    border-radius: var(--radius-default);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--promo-duration-fast) var(--promo-ease-out),
                transform var(--promo-duration-fast) var(--promo-ease-out);

    &:hover {
      background: var(--promo-cta-hover);
      transform: translateY(-1px);
    }

    &:active {
      background: var(--promo-cta-active);
    }
  }

  &__cta-arrow {
    transition: transform var(--promo-duration-fast) var(--promo-ease-out);
  }

  &__cta:hover &__cta-arrow {
    transform: translateX(2px);
  }
}
</style>
