<script setup lang="ts">
const currentYear = new Date().getFullYear()

const columns = [
  {
    title: 'Aanbod',
    links: [
      { to: '/aanpak', label: 'Onze aanpak' },
      { to: '/voor-wie', label: 'Voor wie' },
      { to: '/voor-bestuurders', label: 'Voor bestuurders' },
      { to: '/ai-act-readiness', label: 'AI Act-check' }
    ]
  },
  {
    title: 'Inzichten',
    links: [
      { to: '/inzichten', label: 'Artikelen' },
      { to: '/inzichten', label: 'Podcast' }
    ]
  },
  {
    title: 'Over',
    links: [
      { to: '/over-ons', label: 'Over ons' },
      { to: '/kennismaking', label: 'Kennismaking' }
    ]
  }
]

const legalLinks = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/voorwaarden', label: 'Voorwaarden' },
  { to: '/toegankelijkheid', label: 'Toegankelijkheid' }
]
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <p class="site-footer__brand-name">
            <span class="site-footer__brand-mark" aria-hidden="true">●</span>
            AI-scholing publieke sector
          </p>
          <p class="site-footer__tagline">
            Persona-gebaseerd. Vaardigheid én veranderbereidheid.
          </p>
        </div>

        <nav
          v-for="col in columns"
          :key="col.title"
          class="site-footer__col"
          :aria-label="col.title"
        >
          <p class="site-footer__col-title">{{ col.title }}</p>
          <ul class="site-footer__list">
            <li v-for="l in col.links" :key="l.to + l.label">
              <NuxtLink :to="l.to" class="site-footer__link">{{ l.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="site-footer__bottom">
        <p class="site-footer__copy">© {{ currentYear }} AI-scholing publieke sector. Alle rechten voorbehouden.</p>
        <ul class="site-footer__legal">
          <li v-for="l in legalLinks" :key="l.to">
            <NuxtLink :to="l.to" class="site-footer__legal-link">{{ l.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  background: var(--surface-inverse);
  color: var(--text-inverse);
  padding: var(--promo-section-y-m) 1.5rem 2rem;

  &__inner {
    max-width: var(--promo-container);
    margin: 0 auto;
  }

  &__top {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: 1fr;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);

    @media (min-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 64rem) {
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      gap: 3rem;
    }
  }

  &__brand-name {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1rem;
    margin: 0 0 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__brand-mark {
    color: var(--promo-cta-default);
    font-size: 1.25rem;
    line-height: 1;
  }

  &__tagline {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    max-width: 28ch;
    line-height: 1.5;
  }

  &__col-title {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
    margin: 0 0 1rem;
    font-weight: 600;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  &__link {
    color: var(--text-inverse);
    text-decoration: none;
    font-size: 0.9375rem;
    transition: color var(--promo-duration-fast) var(--promo-ease-out);

    &:hover {
      color: var(--promo-cta-default);
    }
  }

  &__bottom {
    padding-top: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: space-between;

    @media (min-width: 40rem) {
      flex-direction: row;
      align-items: center;
    }
  }

  &__copy {
    margin: 0;
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.55);
  }

  &__legal {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
  }

  &__legal-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.8125rem;
    transition: color var(--promo-duration-fast) var(--promo-ease-out);

    &:hover {
      color: var(--text-inverse);
    }
  }
}
</style>
