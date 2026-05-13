/**
 * Assessment report endpoint
 * --------------------------------------------------------------
 * Ontvangt lead + assessment-resultaat en stuurt (later) een mail
 * via Resend / Postmark.
 *
 * MVP-status: stub. Valideert payload, logt server-side, geeft 200
 * terug. Echte mail-verzending komt erbij zodra Resend-key ingeregeld
 * is via runtimeConfig.
 */

interface LeadInput {
  name: string
  email: string
  organization: string
  role: string
  newsletterOptIn: boolean
}

interface Payload {
  lead: LeadInput
  answers: Record<string, string[]>
  score: number
  band?: string
  version: string
}

function isEmail(value: unknown): value is string {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isNonEmptyString(value: unknown, min = 2): value is string {
  return typeof value === 'string' && value.trim().length >= min
}

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<Payload>>(event)

  if (!body || typeof body !== 'object') {
    throw createError({ statusCode: 400, statusMessage: 'Invalid payload' })
  }

  const { lead, answers, score, version } = body

  if (!lead) {
    throw createError({ statusCode: 400, statusMessage: 'Missing lead data' })
  }
  if (!isNonEmptyString(lead.name)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid name' })
  }
  if (!isEmail(lead.email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email' })
  }
  if (!isNonEmptyString(lead.organization)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid organization' })
  }
  if (!isNonEmptyString(lead.role)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid role' })
  }
  if (!answers || typeof answers !== 'object') {
    throw createError({ statusCode: 400, statusMessage: 'Missing answers' })
  }
  if (typeof score !== 'number' || score < 0 || score > 100) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid score' })
  }
  if (version !== 'v1') {
    throw createError({ statusCode: 400, statusMessage: 'Unsupported version' })
  }

  // MVP: log server-side. Echte mail-integratie volgt in fase 1.
  console.info('[assessment-report]', {
    timestamp: new Date().toISOString(),
    lead: {
      name: lead.name,
      email: lead.email,
      organization: lead.organization,
      role: lead.role,
      newsletter: !!lead.newsletterOptIn
    },
    score,
    band: body.band,
    answerCount: Object.keys(answers).length
  })

  // TODO: integreer Resend / Postmark via runtimeConfig.resendApiKey
  // const config = useRuntimeConfig(event)
  // await sendReportEmail(config, { lead, score, band, answers })

  return {
    ok: true,
    message: 'Rapport wordt verstuurd.'
  }
})
