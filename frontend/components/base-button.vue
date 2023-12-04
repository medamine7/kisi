<template>
  <button :class="$style.baseButton">
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
  .baseButton {
    background-color: var(--kisi-primary-button-background-color);
    color: var(--kisi-primary-button-text-color);
    border-radius: var(--kisi-primary-button-border-radius);
    padding: var(--kisi-primary-button-padding);
    border: var(--kisi-primary-button-border);
    font-size: var(--kisi-primary-button-font-size);
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--kisi-primary-button-hover-background-color);
    }
  }
</style>
