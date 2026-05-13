<script setup lang="ts">
useHead({
  title: 'Voor wie · AI-scholing publieke sector',
  meta: [
    {
      name: 'description',
      content: 'Voor publieke organisaties met meer dan 1000 medewerkers. Beslissers: CIO, CHRO, SG, DG, directeur L&D.'
    }
  ]
})

const segments = [
  {
    title: 'De Bewuste Middenklasser',
    body: 'Gemeenten van 50–100K inwoners met een startende AI-praktijk, gemotiveerd bestuur, en intact opleidingsbudget. Onze primaire focus jaar 1.'
  },
  {
    title: 'De AI-Voorloper',
    body: 'G40-gemeenten en grote uitvoeringsorganisaties met eigen AI-team. Voor governance, advanced tracks en validatie van interne aanpak.'
  },
  {
    title: 'De Regionale Cluster',
    body: 'Samenwerkingsverbanden van kleinere gemeenten (25–50K). Regionaal gebundelde inkoop, lagere drempel, gedeelde leerkring.'
  }
]

const buyers = [
  {
    role: 'Gemeentesecretaris of SG/DG',
    domain: 'Bestuurlijk',
    pain: 'Politieke druk, raads/college-vragen over AI, geen geïntegreerd verhaal.',
    wish: 'Vertrouwd kader voor strategie én uitvoering.',
    hook: '"Een aanpak die ook de uitvoerende laag écht meekrijgt."'
  },
  {
    role: 'CIO of Directeur ICT',
    domain: 'Informatie',
    pain: 'Shadow AI, AVG-risico, integratievraagstukken.',
    wish: 'Verantwoord en gestructureerd AI-gebruik in alle teams.',
    hook: '"AI-geletterdheid borgen vóór de Act-deadline knelt."'
  },
  {
    role: 'CHRO of Directeur L&D',
    domain: 'HR / Ontwikkeling',
    pain: 'Generieke trainingen landen niet, ROI lastig aantoonbaar.',
    wish: 'Maatwerk per rol, met meetbare adoptie.',
    hook: '"30/60/90-dagen adoptiemeting in plaats van bezoekers-statistiek."'
  }
]
</script>

<template>
  <div>
    <PromoHeroSplit eyebrow="Voor wie" align="center">
      <template #title>Voor publieke organisaties die het serieus aanpakken.</template>
      <template #body>
        <p>
          Vanaf 1000 medewerkers. Gemeenten, rijk, provincies, uitvoeringsorganisaties.
          Met een bestuur dat wil dat het landt — niet alleen dat het er staat.
        </p>
      </template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="primary" size="l">Past dit bij ons?</PromoBtn>
      </template>
    </PromoHeroSplit>

    <PromoProblemMirror
      eyebrow="Drie segmenten"
      heading="Welk profiel past bij jullie organisatie?"
      :problems="segments"
    />

    <PromoRoleCardGrid
      eyebrow="Beslissers in de inkoop"
      heading="De drie beslisser-profielen die we vaak tegelijk aan tafel zien"
      intro="Onze gesprekken slagen het beste als deze drie samen aan tafel zitten. Wie ontbreekt, lopen we tegenaan."
      :columns="3"
    >
      <PromoRoleCard v-for="b in buyers" :key="b.role" v-bind="b" />
    </PromoRoleCardGrid>

    <PromoCTABanner variant="warm" align="center">
      <template #title>Niet zeker of het past?</template>
      <template #body>Een eerste gesprek kost je 30 minuten. We zijn eerlijk over de match.</template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="primary" size="l">Plan een kennismaking</PromoBtn>
      </template>
    </PromoCTABanner>
  </div>
</template>
