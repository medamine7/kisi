<template>
  <base-container>
    <mosaic-container>
      <mosaic-item size="wide" :class="$style.header">
        <h1 class="text-h1">Connect people & spaces</h1>
      </mosaic-item>

      <template v-for="(item, index) in data" :key="index">
        <mosaic-item :size="getImageSize(item.image)">
          <image-card v-if="item" :data="item" />
        </mosaic-item>
      </template>
    </mosaic-container>
    <div :class="$style.buttonWrapper">
      <base-button @click="showModal = true">Add image</base-button>
    </div>
  </base-container>

  <base-modal v-model="showModal">
    <image-form @submit="upload" />
  </base-modal>
</template>

<script lang="ts" setup>
  const showModal = ref(false);

  const { $api } = useNuxtApp();
  const { data, refresh } = await useAsyncData("images", $api.images.getAll);

  const upload = async (data: {
    title: string;
    description: string;
    image: File;
  }) => {
    if (!data.image) return;

    showModal.value = false;
    await $api.images.create(data);

    refresh();
  };
</script>

<style lang="scss" module>
  .header {
    align-self: end;
    min-height: unset;
  }

  .buttonWrapper {
    margin: 40px 0 40px auto;
    margin-left: auto;
  }
</style>
