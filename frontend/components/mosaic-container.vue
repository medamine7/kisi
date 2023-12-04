<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style module>
  .container {
    display: grid;
    grid-gap: 21px;
  }

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    .container {
      grid-auto-rows: min-content;
    }
  }

  @media screen and (min-width: 1200px) {
    .container {
      grid-template-columns: repeat(12, 1fr);
      grid-auto-rows: 180px;
    }
  }
</style>
