<script setup lang="ts">
import type { LeadData } from '~/composables/useAssessment'

const a = useAssessment()

const hasResumeState = ref(false)

onMounted(() => {
  const beforeRestore = {
    phase: a.phase.value,
    index: a.currentIndex.value,
    answeredCount: Object.keys(a.answers.value).length
  }
  a.restore()
  const restoredMidFlow =
    a.phase.value !== 'welcome' &&
    Object.keys(a.answers.value).length > 0
  hasResumeState.value = restoredMidFlow && beforeRestore.answeredCount === 0
  // Force welcome screen visibility when we detect resume — composable already may have changed phase to questions
  if (hasResumeState.value) a.phase.value = 'welcome'
})

function handleStart() {
  hasResumeState.value = false
  a.start()
}

function handleResume() {
  hasResumeState.value = false
  if (Object.keys(a.answers.value).length === a.totalQuestions.value) {
    a.phase.value = 'result'
  } else {
    a.phase.value = 'questions'
  }
}

function handleReset() {
  hasResumeState.value = false
  a.reset()
}

function handleSetAnswer(values: string[]) {
  if (a.currentQuestion.value) {
    a.setAnswer(a.currentQuestion.value.id, values)
  }
}

async function handleSubmit(lead: LeadData) {
  await a.submitLead(lead)
}
</script>

<template>
  <div class="assessment-flow">
    <div class="assessment-flow__container">
      <PromoAssessmentProgress
        v-if="a.phase.value === 'questions'"
        :current="a.currentIndex.value + 1"
        :total="a.totalQuestions.value"
        class="assessment-flow__progress"
      />

      <PromoAssessmentWelcome
        v-if="a.phase.value === 'welcome'"
        :has-resume-state="hasResumeState"
        :resume-index="a.currentIndex.value"
        :total-questions="a.totalQuestions.value"
        @start="handleStart"
        @resume="handleResume"
        @reset="handleReset"
      />

      <PromoAssessmentQuestion
        v-else-if="a.phase.value === 'questions' && a.currentQuestion.value"
        :question="a.currentQuestion.value"
        :selected="a.answers.value[a.currentQuestion.value.id] ?? []"
        :index="a.currentIndex.value"
        :total="a.totalQuestions.value"
        :can-go-back="a.currentIndex.value > 0"
        @change="handleSetAnswer"
        @next="a.next"
        @previous="a.previous"
      />

      <PromoAssessmentResult
        v-else-if="a.phase.value === 'result' && a.band.value"
        :band="a.band.value"
        :score="a.score.value"
        :max-score="a.maxScore"
        :weak-topics="a.weakTopics.value"
        :topic-advice="a.topicAdvice"
        @request-report="a.goToLeadForm"
        @reset="handleReset"
      />

      <PromoAssessmentLeadForm
        v-else-if="a.phase.value === 'lead-form'"
        :is-submitting="a.isSubmitting.value"
        :error-message="a.submitError.value"
        @submit="handleSubmit"
        @cancel="a.phase.value = 'result'"
      />

      <PromoAssessmentComplete
        v-else-if="a.phase.value === 'complete'"
        @reset="handleReset"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.assessment-flow {
  padding: var(--promo-section-y-m) 1.5rem;
  background: var(--surface-panel);
  min-height: 60vh;

  &__container {
    max-width: var(--promo-container);
    margin: 0 auto;
  }

  &__progress {
    max-width: 40rem;
    margin: 0 auto 1.5rem;
  }
}
</style>
