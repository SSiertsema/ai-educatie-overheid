<script setup lang="ts">
useHead({
  title: 'AI-scholing voor de publieke sector'
})
</script>

<template>
  <main class="home">
    <section class="hero">
      <p class="hero__eyebrow">Persona-gebaseerd · publieke sector</p>
      <h1 class="hero__title">
        AI-scholing die écht landt — omdat we je mensen kennen.
      </h1>
      <p class="hero__sub">
        Voor gemeenten, rijk, provincies en uitvoeringsorganisaties.
        Vaardigheid én veranderbereidheid in één traject.
      </p>
      <div class="hero__cta">
        <a href="/kennismaking" class="btn btn--primary">Plan een kennismaking</a>
        <a href="/ai-act-readiness" class="btn btn--ghost">Doe de AI Act-check</a>
      </div>
    </section>

    <section class="placeholder">
      <p>Scaffold staat. Volgende stap: pagina-secties en promo-componenten (zie plan §8a).</p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: var(--surface-canvas);
  color: var(--text-default);
  font-family: var(--font-sans);
}

.hero {
  padding: var(--promo-section-y-l) 1.5rem var(--promo-section-y-m);
  max-width: var(--promo-container);
  margin: 0 auto;

  &__eyebrow {
    font-size: 0.875rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--promo-accent-600);
    margin: 0 0 1rem;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: var(--promo-display-leading-hero);
    letter-spacing: var(--promo-display-tracking-display);
    color: var(--text-heading);
    margin: 0 0 1.5rem;
    max-width: 32ch;
  }

  &__sub {
    font-size: 1.125rem;
    line-height: 1.6;
    max-width: 50ch;
    margin: 0 0 2rem;
    color: var(--text-secondary);
  }

  &__cta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-default);
  font-weight: 500;
  text-decoration: none;
  transition: transform var(--promo-duration-fast) var(--promo-ease-out),
              background var(--promo-duration-fast) var(--promo-ease-out);

  &--primary {
    background: var(--promo-cta-default);
    color: var(--text-inverse);

    &:hover {
      background: var(--promo-cta-hover);
      transform: translateY(-1px);
    }

    &:active {
      background: var(--promo-cta-active);
    }
  }

  &--ghost {
    background: transparent;
    border: 1px solid var(--border-default);
    color: var(--text-default);

    &:hover {
      background: var(--surface-panel);
    }
  }
}

.placeholder {
  padding: var(--promo-section-y-s) 1.5rem var(--promo-section-y-xl);
  max-width: var(--promo-container);
  margin: 0 auto;
  color: var(--text-muted);
  font-style: italic;
}
</style>
