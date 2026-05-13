import questionsData from '~/assets/data/ai-act-questions.json'
import bandsData from '~/assets/data/ai-act-bands.json'

export type AssessmentPhase = 'welcome' | 'questions' | 'result' | 'lead-form' | 'complete'

export interface Option {
  value: string
  label: string
  score: number
}

export interface Question {
  id: string
  topic: string
  prompt: string
  type: 'single' | 'multi'
  options: Option[]
  weakIf: string[]
}

export interface Band {
  id: string
  label: string
  minScore: number
  maxScore: number
  tone: 'warning' | 'info' | 'success'
  headline: string
  summary: string
  topPriorities: string[]
}

export interface LeadData {
  name: string
  email: string
  organization: string
  role: string
  newsletterOptIn: boolean
}

interface PersistedState {
  phase: AssessmentPhase
  currentIndex: number
  answers: Record<string, string[]>
  version: string
}

const STORAGE_KEY = 'assessment:ai-act:v1'
const VERSION = 'v1'

export function useAssessment() {
  const phase = useState<AssessmentPhase>('assessment-phase', () => 'welcome')
  const currentIndex = useState<number>('assessment-current-index', () => 0)
  const answers = useState<Record<string, string[]>>('assessment-answers', () => ({}))
  const submitError = useState<string | null>('assessment-submit-error', () => null)
  const isSubmitting = useState<boolean>('assessment-is-submitting', () => false)

  const questions = questionsData.questions as Question[]
  const bands = bandsData.bands as Band[]
  const topicAdvice = bandsData.topicAdvice as Record<string, string>
  const maxScore = bandsData.maxScore

  const currentQuestion = computed<Question | null>(() =>
    questions[currentIndex.value] ?? null
  )

  const totalQuestions = computed(() => questions.length)

  const score = computed(() => {
    let total = 0
    for (const q of questions) {
      const selected = answers.value[q.id] ?? []
      for (const value of selected) {
        const option = q.options.find((o) => o.value === value)
        if (option) total += option.score
      }
    }
    return total
  })

  const band = computed<Band | null>(() => {
    const s = score.value
    return bands.find((b) => s >= b.minScore && s <= b.maxScore) ?? null
  })

  const weakTopics = computed<string[]>(() => {
    const topics = new Set<string>()
    for (const q of questions) {
      const selected = answers.value[q.id] ?? []
      const hasWeak = selected.some((v) => q.weakIf.includes(v))
      const onlyEmpty = selected.length === 0
      if (hasWeak || onlyEmpty) topics.add(q.topic)
    }
    return Array.from(topics)
  })

  const completionRatio = computed(() => {
    const answered = questions.filter((q) => (answers.value[q.id]?.length ?? 0) > 0).length
    return answered / questions.length
  })

  // --- Actions ---

  function start() {
    phase.value = 'questions'
    persist()
  }

  function setAnswer(questionId: string, values: string[]) {
    answers.value = { ...answers.value, [questionId]: values }
    persist()
  }

  function next() {
    if (currentIndex.value < questions.length - 1) {
      currentIndex.value += 1
    } else {
      phase.value = 'result'
    }
    persist()
  }

  function previous() {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1
      persist()
    } else {
      phase.value = 'welcome'
      persist()
    }
  }

  function goToLeadForm() {
    phase.value = 'lead-form'
    persist()
  }

  function reset() {
    phase.value = 'welcome'
    currentIndex.value = 0
    answers.value = {}
    submitError.value = null
    if (import.meta.client) {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  async function submitLead(lead: LeadData): Promise<boolean> {
    if (isSubmitting.value) return false
    isSubmitting.value = true
    submitError.value = null

    try {
      await $fetch('/api/assessment-report', {
        method: 'POST',
        body: {
          lead,
          answers: answers.value,
          score: score.value,
          band: band.value?.id,
          version: VERSION
        }
      })
      phase.value = 'complete'
      // Bewaar fase, leeg de volledige antwoorden niet — geeft een verleidelijke "andere check"-loop niet weg
      persist()
      return true
    } catch (err: any) {
      submitError.value = err?.data?.message ?? 'Er ging iets mis. Probeer het later opnieuw.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  // --- Persistence ---

  function persist() {
    if (!import.meta.client) return
    const state: PersistedState = {
      phase: phase.value,
      currentIndex: currentIndex.value,
      answers: answers.value,
      version: VERSION
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Stille fail; localStorage niet beschikbaar (privacy-mode etc)
    }
  }

  function restore() {
    if (!import.meta.client) return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as PersistedState
      if (parsed.version !== VERSION) return
      // Niet automatisch terug naar 'complete' — daar moet de gebruiker zelf naartoe via flow
      phase.value = parsed.phase === 'complete' ? 'welcome' : parsed.phase
      currentIndex.value = parsed.currentIndex
      answers.value = parsed.answers
    } catch {
      // Corrupt; negeer
    }
  }

  return {
    // state
    phase,
    currentIndex,
    answers,
    submitError,
    isSubmitting,
    // computed
    questions,
    currentQuestion,
    totalQuestions,
    score,
    maxScore,
    band,
    weakTopics,
    topicAdvice,
    completionRatio,
    // actions
    start,
    setAnswer,
    next,
    previous,
    goToLeadForm,
    reset,
    submitLead,
    restore
  }
}
