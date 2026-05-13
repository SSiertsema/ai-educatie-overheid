<script setup lang="ts">
const isOpen = ref(false)
const route = useRoute()

const links = [
  { to: '/aanpak', label: 'Aanpak' },
  { to: '/voor-wie', label: 'Voor wie' },
  { to: '/voor-bestuurders', label: 'Voor bestuurders' },
  { to: '/inzichten', label: 'Inzichten' },
  { to: '/over-ons', label: 'Over ons' }
]

function isActive(to: string) {
  return route.path === to || route.path.startsWith(to + '/')
}

// Sluit menu bij route-change
watch(() => route.path, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="nav-header">
    <div class="nav-header__inner">
      <NuxtLink to="/" class="nav-header__brand">
        <span class="nav-header__brand-mark" aria-hidden="true">●</span>
        <span class="nav-header__brand-text">AI-scholing publieke sector</span>
      </NuxtLink>

      <button
        type="button"
        class="nav-header__toggle"
        :aria-expanded="isOpen"
        aria-controls="nav-primary"
        :aria-label="isOpen ? 'Sluit menu' : 'Open menu'"
        @click="isOpen = !isOpen"
      >
        <span class="nav-header__toggle-bar"></span>
        <span class="nav-header__toggle-bar"></span>
        <span class="nav-header__toggle-bar"></span>
      </button>

      <nav
        id="nav-primary"
        class="nav-header__nav"
        :class="{ 'nav-header__nav--open': isOpen }"
        aria-label="Hoofdnavigatie"
      >
        <ul class="nav-header__list">
          <li v-for="l in links" :key="l.to">
            <NuxtLink
              :to="l.to"
              class="nav-header__link"
              :class="{ 'nav-header__link--active': isActive(l.to) }"
            >
              {{ l.label }}
            </NuxtLink>
          </li>
        </ul>
        <div class="nav-header__cta">
          <PromoBtn to="/kennismaking" variant="primary" size="m">Plan kennismaking</PromoBtn>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.nav-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--surface-canvas);
  border-bottom: 1px solid var(--border-subtle);
  backdrop-filter: saturate(180%) blur(8px);

  &__inner {
    max-width: var(--promo-container);
    margin: 0 auto;
    padding: 0.875rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: relative;
  }

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--text-heading);
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1rem;
    flex-shrink: 0;
  }

  &__brand-mark {
    color: var(--promo-cta-default);
    font-size: 1.25rem;
    line-height: 1;
  }

  &__brand-text {
    @media (max-width: 30rem) {
      max-width: 12rem;
    }
  }

  &__toggle {
    margin-left: auto;
    background: transparent;
    border: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    padding: 0;

    @media (min-width: 56rem) {
      display: none;
    }

    &:focus-visible {
      outline: 2px solid var(--focus-ring);
      outline-offset: 2px;
      border-radius: var(--radius-default);
    }
  }

  &__toggle-bar {
    display: block;
    width: 1.25rem;
    height: 2px;
    background: var(--text-heading);
    border-radius: var(--radius-pill);
  }

  &__nav {
    display: none;
    width: 100%;

    @media (min-width: 56rem) {
      display: flex;
      align-items: center;
      gap: 2rem;
      width: auto;
      margin-left: auto;
    }

    &--open {
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--surface-canvas);
      border-bottom: 1px solid var(--border-subtle);
      padding: 1rem 1.5rem 1.5rem;
      box-shadow: var(--shadow-m);
    }
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    @media (min-width: 56rem) {
      flex-direction: row;
      gap: 1.5rem;
    }
  }

  &__link {
    display: block;
    padding: 0.5rem 0;
    text-decoration: none;
    color: var(--text-default);
    font-size: 0.9375rem;
    font-weight: 500;
    transition: color var(--promo-duration-fast) var(--promo-ease-out);

    &:hover {
      color: var(--text-heading);
    }

    &--active {
      color: var(--text-heading);
      position: relative;

      @media (min-width: 56rem) {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1.125rem;
          height: 2px;
          background: var(--promo-cta-default);
        }
      }
    }
  }

  &__cta {
    margin-top: 1rem;

    @media (min-width: 56rem) {
      margin-top: 0;
    }
  }
}
</style>
