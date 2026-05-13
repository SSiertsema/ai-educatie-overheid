<script setup lang="ts">
interface Props {
  href?: string
  to?: string
  variant?: 'primary' | 'ghost' | 'inverse' | 'link'
  size?: 'm' | 'l'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'm'
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="btn"
    :class="[`btn--${variant}`, `btn--size-${size}`]"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    class="btn"
    :class="[`btn--${variant}`, `btn--size-${size}`]"
  >
    <slot />
  </a>
  <button
    v-else
    type="button"
    class="btn"
    :class="[`btn--${variant}`, `btn--size-${size}`]"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: var(--radius-default);
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--promo-duration-fast) var(--promo-ease-out),
              transform var(--promo-duration-fast) var(--promo-ease-out),
              border-color var(--promo-duration-fast) var(--promo-ease-out);

  &:focus-visible {
    outline: 2px solid var(--focus-ring);
    outline-offset: 2px;
  }

  &--size-m {
    padding: 0.75rem 1.25rem;
    font-size: 0.9375rem;
  }

  &--size-l {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }

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
    border-color: var(--border-default);
    color: var(--text-default);

    &:hover {
      background: var(--surface-panel);
      border-color: var(--border-strong);
    }
  }

  &--inverse {
    background: var(--surface-canvas);
    color: var(--text-heading);

    &:hover {
      background: var(--surface-panel);
      transform: translateY(-1px);
    }
  }

  &--link {
    background: transparent;
    color: var(--text-link);
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;

    &:hover {
      color: var(--text-linkHover);
      text-decoration: underline;
    }
  }
}
</style>
