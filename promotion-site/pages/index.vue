<script setup lang="ts">
useHead({
  title: 'AI-scholing voor de publieke sector',
  meta: [
    {
      name: 'description',
      content: 'Persona-gebaseerde AI-scholing voor gemeenten, rijk, provincies en uitvoeringsorganisaties. Vaardigheid én veranderbereidheid.'
    }
  ]
})

const problems = [
  {
    title: 'Strategie blokkeert op uitvoering',
    body: 'Directie wil AI-impact, maar medewerkers zijn er niet klaar voor. De strategische ambitie strandt op uitvoerend niveau.'
  },
  {
    title: 'Generieke training landt niet',
    body: 'Cursussen "wat AI kan" sluiten niet aan op dagelijkse taken. Transfer naar het werk blijft uit.'
  },
  {
    title: 'Shadow AI als compliance-risico',
    body: 'Ongecontroleerd ChatGPT-gebruik maakt AVG- en EU AI Act-verantwoording lastig — zonder kader oncontroleerbaar.'
  }
]

const steps = [
  {
    title: 'Persona-mapping',
    body: 'We brengen jullie organisatie in kaart per rol en domein — geen one-size-fits-all.',
    meta: 'Week 1–2'
  },
  {
    title: 'Leerpaden op maat',
    body: 'Per persona een leerpad dat aansluit op echt werk en echte casussen.',
    meta: 'Week 3–4'
  },
  {
    title: 'Uitvoering met begeleiding',
    body: 'Training plus 30-dagen werkvloer-begeleiding. Niet alleen tools — ook houding en durf.',
    meta: 'Maand 2–3'
  },
  {
    title: 'Meten en bijstellen',
    body: 'Adoptie-meting op 30, 60 en 90 dagen — bewijs van wat landt, niet alleen wat geleerd is.',
    meta: 'Maand 3–4'
  }
]

const roles = [
  {
    role: 'Communicatieadviseur',
    domain: 'Communicatie',
    pain: 'Veel content, weinig tijd, consistentie loopt achteruit.',
    wish: 'Sneller productieve content zonder kwaliteitsverlies.',
    hook: '"Contentproductie versnellen met AI — zonder huisstijl-verlies."'
  },
  {
    role: 'Beleidsadviseur Sociaal Domein',
    domain: 'Sociaal beleid',
    pain: 'Veel rapporten om door te ploegen, weinig tijd voor synthese.',
    wish: 'Sneller relevante kennis distilleren voor raadsvoorstellen.',
    hook: '"AI die rapporten samenvat en analyse versnelt — jij houdt de regie."'
  },
  {
    role: 'Teamleider Klantcontact',
    domain: 'Dienstverlening',
    pain: 'Werkdruk, wachttijden, en boze burgers op de lijn.',
    wish: 'Minder routinevragen, snellere afhandeling.',
    hook: '"30% van vragen automatisch afhandelen — je team houdt tijd voor de complexe gevallen."'
  }
]
</script>

<template>
  <div>
    <PromoHeroSplit eyebrow="Persona-gebaseerd · publieke sector">
      <template #title>AI-scholing die écht landt — omdat we je mensen kennen.</template>
      <template #body>
        <p>Voor gemeenten, rijk, provincies en uitvoeringsorganisaties met meer dan 1000 medewerkers.</p>
        <p>Vaardigheid én veranderbereidheid in één traject. Geen generieke cursus.</p>
      </template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="primary" size="l">Plan een kennismaking</PromoBtn>
        <PromoBtn to="/ai-act-readiness" variant="ghost" size="l">Doe de AI Act-check</PromoBtn>
      </template>
      <template #visual>
        <div class="hero-placeholder" aria-hidden="true">
          <span>Illustratie volgt</span>
        </div>
      </template>
    </PromoHeroSplit>

    <PromoProblemMirror
      eyebrow="Herken je dit?"
      heading="De drie blokkades die elke publieke organisatie nu raakt"
      :problems="problems"
    />

    <PromoDuoNarrative
      eyebrow="Onze aanpak"
      heading="Vaardigheid én veranderbereidheid"
      intro="Tooltraining alleen is niet genoeg. Concurrenten kiezen één van de twee — wij combineren ze."
      :primary="{
        label: 'Vaardigheid',
        title: 'AI praktisch leren toepassen op echt werk',
        body: 'Rol-specifieke casussen, prompts en werkstromen. Wat AI vandaag in jouw werk doet, niet wat het in theorie kan.'
      }"
      :secondary="{
        label: 'Veranderbereidheid',
        title: 'Durf en houding om het te gebruiken',
        body: 'Weerstand, ethiek, verantwoord gebruik — adressering van wat het stuck-maakt, naast het hoe-doe-je-het.'
      }"
    />

    <PromoProcessTimeline
      eyebrow="Hoe het werkt"
      heading="In vier stappen van strategie naar adoptie"
      intro="Geen black box, geen training-en-klaar. We meten of het landt."
      :steps="steps"
    />

    <PromoRoleCardGrid
      eyebrow="Voor wie"
      heading="Drie voorbeelden uit jullie organisatie"
      intro="De volledige persona-bibliotheek (20+ rollen) komt interactief beschikbaar in een volgende fase."
      :columns="3"
    >
      <PromoRoleCard v-for="r in roles" :key="r.role" v-bind="r" />
    </PromoRoleCardGrid>

    <PromoAssessmentTeaser
      eyebrow="EU AI Act"
      heading="Hoe AI-Act-geletterd is jullie organisatie?"
      body="Tien vragen, gepersonaliseerd rapport. Anoniem te starten — uitgebreid rapport via mail."
    />

    <PromoCTABanner variant="dark" align="split">
      <template #title>Klaar voor een verkennend gesprek?</template>
      <template #body>30 minuten. We luisteren eerst. Geen verkooppraat.</template>
      <template #cta>
        <PromoBtn to="/kennismaking" variant="inverse" size="l">Plan een kennismaking</PromoBtn>
      </template>
    </PromoCTABanner>
  </div>
</template>

<style lang="scss" scoped>
.hero-placeholder {
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--brand-subtle);
  border: 2px dashed var(--border-default);
  border-radius: var(--radius-large);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.875rem;
}
</style>
