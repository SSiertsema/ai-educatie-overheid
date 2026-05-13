<template>
  <div class="layout">
    <a href="#main" class="layout__skip">Naar hoofdinhoud</a>
    <PromoNavHeader />
    <main id="main" class="layout__main">
      <slot />
    </main>
    <PromoSiteFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--surface-canvas);
  color: var(--text-default);
  font-family: var(--font-sans);

  &__skip {
    position: absolute;
    top: -3rem;
    left: 1rem;
    z-index: 100;
    padding: 0.5rem 1rem;
    background: var(--promo-cta-default);
    color: var(--text-inverse);
    border-radius: var(--radius-default);
    text-decoration: none;
    transition: top var(--promo-duration-fast) var(--promo-ease-out);

    &:focus-visible {
      top: 1rem;
    }
  }

  &__main {
    flex: 1;
  }
}
</style>
