<script setup lang="ts">
useHead({
  title: 'Aanpak · AI-scholing publieke sector',
  meta: [
    {
      name: 'description',
      content: 'Persona-mapping, leerpaden op maat, uitvoering en meetbare adoptie. Onze vier-staps-aanpak voor AI-scholing in de publieke sector.'
    }
  ]
})

const steps = [
  {
    title: 'Persona-mapping',
    body: 'We brengen jullie organisatie in kaart per rol en domein. Geen one-size-fits-all — wel een gedeeld vocabulaire over wie wat nodig heeft.',
    meta: 'Week 1–2'
  },
  {
    title: 'Leerpaden op maat',
    body: 'Per persona een leerpad dat aansluit op echt werk en echte casussen. Co-creatie met enkele medewerkers uit jullie eigen organisatie.',
    meta: 'Week 3–4'
  },
  {
    title: 'Uitvoering met begeleiding',
    body: 'Training plus 30 dagen werkvloer-begeleiding. Niet alleen tools — ook houding en durf om het te gebruiken.',
    meta: 'Maand 2–3'
  },
  {
    title: 'Meten en bijstellen',
    body: 'Adoptie-meting op 30, 60 en 90 dagen — pre/post-toets en gedragstoetsing. Bewijs van wat landt, niet alleen wat geleerd is.',
    meta: 'Maand 3–4'
  }
]

const exampleRoles = [
  {
    role: 'Communicatieadviseur',
    domain: 'Communicatie',
    pain: 'Veel content, weinig tijd.',
    wish: 'Sneller productieve content zonder kwaliteitsverlies.',
    hook: '"Contentproductie versnellen met AI — zonder huisstijl-verlies."',
    caseSnippet: 'Persberichten, bewonersbrieven en social-content in 30% van de tijd.'
  },
  {
    role: 'Vergunningverlener',
    domain: 'Vergunningen',
    pain: 'Veel checks, repetitief werk, achterstanden.',
    wish: 'AI helpt bij beoordeling en voorbereiding.',
    hook: '"Eerste beoordeling automatisch, jij focust op de twijfelgevallen."',
    caseSnippet: 'Pilot bij G40-gemeente: doorlooptijd −22% binnen 6 weken.'
  },
  {
    role: 'Beleidsadviseur Sociaal Domein',
    domain: 'Sociaal beleid',
    pain: 'Veel rapporten, weinig tijd voor synthese.',
    wish: 'Sneller relevante kennis distilleren.',
    hook: '"AI die rapporten samenvat — jij houdt de regie."',
    caseSnippet: 'Beleidsnota Wmo in 4 dagen, normaal 3 weken.'
  }
]
</script>

<template>
  <div>
    <PromoHeroSplit eyebrow="Aanpak" align="center">
      <template #title>Persona's, leerpaden, uitvoering, meting.</template>
      <template #body>
        <p>
          Vier stappen van strategie naar adoptie. Niet meer modules dan nodig,
          niet minder begeleiding dan vereist.
        </p>
      </template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="primary" size="l">Plan een kennismaking</PromoBtn>
      </template>
    </PromoHeroSplit>

    <PromoProcessTimeline
      eyebrow="Hoe het werkt"
      heading="In vier stappen van strategie naar adoptie"
      intro="Geen black box. We laten zien wat we doen en wanneer."
      :steps="steps"
    />

    <PromoDuoNarrative
      eyebrow="Wat het anders maakt"
      heading="Vaardigheid én veranderbereidheid"
      intro="Geen concurrent voert deze twee samen op. Wij wel — en dat is waarom het bij ons blijft hangen."
      :primary="{
        label: 'Vaardigheid',
        title: 'Wat AI vandaag in jouw werk doet',
        body: 'Rol-specifieke casussen, prompts en werkstromen. Niet wat AI in theorie kan, maar wat het maandag voor jou doet.'
      }"
      :secondary="{
        label: 'Veranderbereidheid',
        title: 'Durf, houding, verantwoord gebruik',
        body: 'Weerstand, ethiek, AVG, EU AI Act — alles wat het stuck-maakt naast het hoe-doe-je-het.'
      }"
    />

    <PromoRoleCardGrid
      eyebrow="Voor wie het bedoeld is"
      heading="Drie voorbeelden van rol-specifieke uitwerkingen"
      intro="De volledige persona-bibliotheek (20+ rollen) wordt later beschikbaar als interactieve explorer."
      :columns="3"
    >
      <PromoRoleCard v-for="r in exampleRoles" :key="r.role" v-bind="r" />
    </PromoRoleCardGrid>

    <PromoCTABanner variant="dark" align="split">
      <template #title>Past dit bij jullie organisatie?</template>
      <template #body>Plan een kennismaking. We luisteren eerst — geen verkooppraatje.</template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="inverse" size="l">Plan een kennismaking</PromoBtn>
      </template>
    </PromoCTABanner>
  </div>
</template>
