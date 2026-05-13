<script setup lang="ts">
interface Props {
  current: number
  total: number
}

const props = defineProps<Props>()

const percent = computed(() => Math.round((props.current / props.total) * 100))
</script>

<template>
  <div class="assessment-progress" role="group" aria-label="Voortgang">
    <div class="assessment-progress__meta">
      <span class="assessment-progress__count">Vraag {{ current }} van {{ total }}</span>
      <span class="assessment-progress__percent" aria-hidden="true">{{ percent }}%</span>
    </div>
    <progress
      class="assessment-progress__bar"
      :value="current"
      :max="total"
      :aria-valuetext="`Vraag ${current} van ${total}`"
    />
  </div>
</template>

<style lang="scss" scoped>
.assessment-progress {
  width: 100%;

  &__meta {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  &__count {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 600;
  }

  &__percent {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--promo-cta-default);
    font-weight: 600;
  }

  &__bar {
    appearance: none;
    width: 100%;
    height: 6px;
    border: 0;
    border-radius: var(--radius-pill);
    overflow: hidden;
    background: var(--surface-panel);

    &::-webkit-progress-bar {
      background: var(--surface-panel);
      border-radius: var(--radius-pill);
    }

    &::-webkit-progress-value {
      background: var(--promo-cta-default);
      border-radius: var(--radius-pill);
      transition: width var(--promo-duration-base) var(--promo-ease-out);
    }

    &::-moz-progress-bar {
      background: var(--promo-cta-default);
      border-radius: var(--radius-pill);
    }
  }
}
</style>
