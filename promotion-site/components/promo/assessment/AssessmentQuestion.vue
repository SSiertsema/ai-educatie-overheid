<script setup lang="ts">
import type { Question } from '~/composables/useAssessment'

interface Props {
  question: Question
  selected: string[]
  index: number
  total: number
  canGoBack: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  change: [values: string[]]
  next: []
  previous: []
}>()

const hasAnswer = computed(() => props.selected.length > 0)
const isMulti = computed(() => props.question.type === 'multi')

function toggle(value: string) {
  if (isMulti.value) {
    const next = props.selected.includes(value)
      ? props.selected.filter((v) => v !== value)
      : [...props.selected, value]
    emit('change', next)
  } else {
    emit('change', [value])
  }
}

function isSelected(value: string) {
  return props.selected.includes(value)
}
</script>

<template>
  <section class="question" :aria-label="`Vraag ${index + 1} van ${total}`">
    <div class="question__head">
      <p class="question__topic">{{ question.topic }}</p>
      <h2 class="question__prompt">{{ question.prompt }}</h2>
      <p v-if="isMulti" class="question__hint">Meerdere antwoorden mogelijk.</p>
    </div>

    <ul class="question__options" role="group" :aria-label="question.prompt">
      <li v-for="option in question.options" :key="option.value">
        <button
          type="button"
          class="question__option"
          :class="{ 'question__option--selected': isSelected(option.value) }"
          :aria-pressed="isSelected(option.value)"
          @click="toggle(option.value)"
        >
          <span class="question__option-indicator" :class="`question__option-indicator--${isMulti ? 'check' : 'radio'}`" aria-hidden="true">
            <span class="question__option-indicator-mark" />
          </span>
          <span class="question__option-label">{{ option.label }}</span>
        </button>
      </li>
    </ul>

    <div class="question__actions">
      <PromoBtn
        v-if="canGoBack"
        variant="ghost"
        size="m"
        @click="emit('previous')"
      >
        ← Vorige
      </PromoBtn>
      <PromoBtn
        variant="primary"
        size="m"
        :class="{ 'question__next--disabled': !hasAnswer }"
        @click="hasAnswer && emit('next')"
      >
        {{ index === total - 1 ? 'Bekijk uitkomst' : 'Volgende' }}
        <span v-if="hasAnswer" aria-hidden="true">→</span>
      </PromoBtn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.question {
  max-width: 40rem;
  margin: 0 auto;
  padding: 2.5rem;
  background: var(--surface-canvas);
  border-radius: var(--radius-large);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-s);

  &__head {
    margin-bottom: 1.75rem;
  }

  &__topic {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--promo-accent-600);
    margin: 0 0 0.625rem;
    font-weight: 600;
  }

  &__prompt {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 2.4vw, 1.5rem);
    line-height: 1.3;
    color: var(--text-heading);
    margin: 0 0 0.5rem;
    font-weight: 600;
  }

  &__hint {
    margin: 0;
    font-size: 0.875rem;
    color: var(--text-muted);
    font-style: italic;
  }

  &__options {
    list-style: none;
    margin: 0 0 1.75rem;
    padding: 0;
    display: grid;
    gap: 0.625rem;
  }

  &__option {
    width: 100%;
    background: var(--surface-canvas);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-default);
    padding: 1rem 1.125rem;
    text-align: left;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    gap: 0.875rem;
    font: inherit;
    color: var(--text-default);
    transition: background var(--promo-duration-fast) var(--promo-ease-out),
                border-color var(--promo-duration-fast) var(--promo-ease-out),
                transform var(--promo-duration-fast) var(--promo-ease-out);

    &:hover {
      background: var(--surface-panel);
      border-color: var(--border-strong);
    }

    &:focus-visible {
      outline: 2px solid var(--focus-ring);
      outline-offset: 2px;
    }

    &--selected {
      background: var(--brand-subtle);
      border-color: var(--promo-cta-default);
    }
  }

  &__option-indicator {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid var(--border-strong);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.125rem;
    transition: background var(--promo-duration-fast) var(--promo-ease-out),
                border-color var(--promo-duration-fast) var(--promo-ease-out);

    &--radio {
      border-radius: var(--radius-pill);
    }

    &--check {
      border-radius: var(--radius-subtle);
    }
  }

  &__option-indicator-mark {
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background: var(--promo-cta-default);
    opacity: 0;
    transition: opacity var(--promo-duration-fast) var(--promo-ease-out);

    .question__option-indicator--radio & {
      border-radius: var(--radius-pill);
    }
  }

  &__option--selected &__option-indicator {
    border-color: var(--promo-cta-default);
  }

  &__option--selected &__option-indicator-mark {
    opacity: 1;
  }

  &__option-label {
    line-height: 1.45;
    font-size: 0.9375rem;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-subtle);
  }

  &__next--disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
}
</style>
