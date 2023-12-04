<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Kisi` : "Kisi";
    },
  });
</script>

<style></style>
