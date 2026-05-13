<script setup lang="ts">
useHead({
  title: 'AI Act-readiness · AI-scholing publieke sector',
  meta: [
    {
      name: 'description',
      content: 'Doe de AI Act-check: hoe geletterd is jullie organisatie? Tien vragen, direct resultaat, gepersonaliseerd rapport.'
    }
  ]
})

const what = [
  { title: '10 vragen', body: 'Over jullie AI-gebruik, beleid, training, governance en risico-classificatie.' },
  { title: 'Direct resultaat', body: 'Een score-band (4 niveaus) met duiding — niet onder de motorkap.' },
  { title: 'Volledig rapport', body: 'Uitgebreid rapport per mail met gepersonaliseerd advies per zwak punt.' }
]
</script>

<template>
  <div>
    <PromoHeroSplit eyebrow="EU AI Act-check" align="center">
      <template #title>Hoe AI-Act-geletterd is jullie organisatie?</template>
      <template #body>
        <p>
          Per februari 2025 is AI-geletterdheid wettelijk verplicht voor organisaties die met AI werken.
          Met deze check zie je direct waar jullie staan — en wat nog ontbreekt.
        </p>
        <p>5 minuten. Anoniem te starten. Volledig rapport per mail.</p>
      </template>
    </PromoHeroSplit>

    <PromoProblemMirror
      eyebrow="Wat je krijgt"
      heading="Drie dingen, geen onderdelen meer"
      :problems="what"
    />

    <PromoAssessmentFlow />

    <PromoCTABanner variant="dark" align="split">
      <template #title>Liever direct sparren over wat je net gezien hebt?</template>
      <template #body>30 minuten, geen verkooppraat. We luisteren eerst.</template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="inverse" size="l">Plan een kennismaking</PromoBtn>
      </template>
    </PromoCTABanner>
  </div>
</template>
