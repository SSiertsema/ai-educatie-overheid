<script setup lang="ts">
import type { LeadData } from '~/composables/useAssessment'

interface Props {
  isSubmitting: boolean
  errorMessage: string | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  submit: [data: LeadData]
  cancel: []
}>()

const form = reactive<LeadData>({
  name: '',
  email: '',
  organization: '',
  role: '',
  newsletterOptIn: false
})

const consentMain = ref(false)

const errors = reactive<Partial<Record<keyof LeadData | 'consent', string>>>({})

function validate(): boolean {
  let ok = true
  for (const key of Object.keys(errors) as (keyof typeof errors)[]) delete errors[key]

  if (form.name.trim().length < 2) {
    errors.name = 'Vul je naam in.'
    ok = false
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Vul een geldig e-mailadres in.'
    ok = false
  }
  if (form.organization.trim().length < 2) {
    errors.organization = 'Vul je organisatie in.'
    ok = false
  }
  if (form.role.trim().length < 2) {
    errors.role = 'Vul je functie in.'
    ok = false
  }
  if (!consentMain.value) {
    errors.consent = 'We hebben je toestemming nodig om het rapport te sturen.'
    ok = false
  }
  return ok
}

function onSubmit() {
  if (props.isSubmitting) return
  if (!validate()) return
  emit('submit', { ...form })
}
</script>

<template>
  <section class="lead-form">
    <h2 class="lead-form__title">Stuur me het rapport</h2>
    <p class="lead-form__lead">
      We sturen het uitgebreide rapport binnen een paar minuten. We bewaren je gegevens
      alleen om het rapport te sturen — geen automatische follow-up.
    </p>

    <form class="lead-form__form" @submit.prevent="onSubmit" novalidate>
      <div class="lead-form__field">
        <label for="lead-name" class="lead-form__label">Naam</label>
        <input
          id="lead-name"
          v-model="form.name"
          type="text"
          autocomplete="name"
          class="lead-form__input"
          :aria-invalid="!!errors.name"
          :aria-describedby="errors.name ? 'err-name' : undefined"
        />
        <p v-if="errors.name" id="err-name" class="lead-form__error">{{ errors.name }}</p>
      </div>

      <div class="lead-form__field">
        <label for="lead-email" class="lead-form__label">E-mailadres</label>
        <input
          id="lead-email"
          v-model="form.email"
          type="email"
          autocomplete="email"
          class="lead-form__input"
          :aria-invalid="!!errors.email"
          :aria-describedby="errors.email ? 'err-email' : undefined"
        />
        <p v-if="errors.email" id="err-email" class="lead-form__error">{{ errors.email }}</p>
      </div>

      <div class="lead-form__field">
        <label for="lead-org" class="lead-form__label">Organisatie</label>
        <input
          id="lead-org"
          v-model="form.organization"
          type="text"
          autocomplete="organization"
          class="lead-form__input"
          :aria-invalid="!!errors.organization"
          :aria-describedby="errors.organization ? 'err-org' : undefined"
        />
        <p v-if="errors.organization" id="err-org" class="lead-form__error">{{ errors.organization }}</p>
      </div>

      <div class="lead-form__field">
        <label for="lead-role" class="lead-form__label">Functie</label>
        <input
          id="lead-role"
          v-model="form.role"
          type="text"
          autocomplete="organization-title"
          class="lead-form__input"
          :aria-invalid="!!errors.role"
          :aria-describedby="errors.role ? 'err-role' : undefined"
        />
        <p v-if="errors.role" id="err-role" class="lead-form__error">{{ errors.role }}</p>
      </div>

      <div class="lead-form__consent">
        <label class="lead-form__checkbox">
          <input v-model="consentMain" type="checkbox" required />
          <span>
            Ik geef toestemming dat mijn gegevens worden gebruikt om dit rapport per mail te sturen.
            <NuxtLink to="/privacy" class="lead-form__link">Privacy</NuxtLink>.
          </span>
        </label>
        <p v-if="errors.consent" class="lead-form__error">{{ errors.consent }}</p>
      </div>

      <div class="lead-form__consent">
        <label class="lead-form__checkbox">
          <input v-model="form.newsletterOptIn" type="checkbox" />
          <span>Hou me ook op de hoogte van nieuwe inzichten via een maandelijkse nieuwsbrief (optioneel).</span>
        </label>
      </div>

      <p v-if="errorMessage" class="lead-form__error-banner" role="alert">
        {{ errorMessage }}
      </p>

      <div class="lead-form__actions">
        <PromoBtn variant="ghost" size="m" @click="$emit('cancel')">← Terug naar uitkomst</PromoBtn>
        <button
          type="submit"
          class="lead-form__submit"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Bezig met versturen…' : 'Verstuur en ontvang rapport' }}
        </button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.lead-form {
  max-width: 36rem;
  margin: 0 auto;
  padding: 2.5rem;
  background: var(--surface-canvas);
  border-radius: var(--radius-large);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-s);

  &__title {
    font-family: var(--font-display);
    font-size: 1.625rem;
    color: var(--text-heading);
    margin: 0 0 0.5rem;
    font-weight: 600;
  }

  &__lead {
    font-size: 0.9375rem;
    color: var(--text-secondary);
    line-height: 1.55;
    margin: 0 0 1.75rem;
  }

  &__form {
    display: grid;
    gap: 1.25rem;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  &__label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-heading);
  }

  &__input {
    padding: 0.75rem 0.875rem;
    border: 1px solid var(--border-default);
    border-radius: var(--radius-default);
    background: var(--surface-canvas);
    font: inherit;
    color: var(--text-default);
    transition: border-color var(--promo-duration-fast) var(--promo-ease-out);

    &:focus-visible {
      outline: 2px solid var(--focus-ring);
      outline-offset: 1px;
      border-color: var(--promo-cta-default);
    }

    &[aria-invalid='true'] {
      border-color: var(--feedback-error);
    }
  }

  &__error {
    font-size: 0.8125rem;
    color: var(--feedback-errorEmphasis);
    margin: 0;
  }

  &__error-banner {
    padding: 0.75rem 1rem;
    background: var(--feedback-errorSubtle);
    color: var(--feedback-errorEmphasis);
    border-radius: var(--radius-default);
    font-size: 0.9375rem;
    margin: 0;
  }

  &__consent {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  &__checkbox {
    display: grid;
    grid-template-columns: 1.25rem 1fr;
    gap: 0.625rem;
    align-items: flex-start;
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--text-default);

    input {
      margin-top: 0.15rem;
      accent-color: var(--promo-cta-default);
    }
  }

  &__link {
    color: var(--text-link);
    text-decoration: underline;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }

  &__submit {
    padding: 0.875rem 1.5rem;
    background: var(--promo-cta-default);
    color: var(--text-inverse);
    border: 0;
    border-radius: var(--radius-default);
    font: inherit;
    font-weight: 500;
    cursor: pointer;
    transition: background var(--promo-duration-fast) var(--promo-ease-out);

    &:hover:not(:disabled) {
      background: var(--promo-cta-hover);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:focus-visible {
      outline: 2px solid var(--focus-ring);
      outline-offset: 2px;
    }
  }
}
</style>
