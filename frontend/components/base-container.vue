<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
      max-width: 80%;
    }

    @media screen and (max-width: 800px) {
      max-width: 100%;
      padding: 20px;
    }
  }
</style>
