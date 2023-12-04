<template>
  <div :class="$style.card">
    <img :src="data.image.url" alt="" :class="$style.img" />
    <div :class="$style.content">
      <h4 :class="$style.title" class="text-h2">{{ data.title }}</h4>
      <p class="text-body1" :class="$style.description">
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  interface Data {
    title: string;
    description: string;
    image: {
      url: string;
      width: number;
      height: number;
    };
  }

  defineProps<{
    data: Data;
  }>();
</script>

<style lang="scss" module>
  .card {
    width: 100%;
    height: 100%;
    background-size: cover;
    padding: 5%;
    box-sizing: border-box;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    background-color: var(--kisi-primary-color);
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 24px;
      height: 24px;
      background-image: url("/chevron.svg");
      z-index: 1;
      transition: transform 0.2s ease-in-out;
    }

    &:hover {
      .description {
        opacity: 1;
      }

      .img {
        opacity: 0;
      }

      &:after {
        transform: translateX(5px);
      }
    }
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    filter: brightness(0.7);
    transition: opacity 0.2s ease-in-out;
  }

  .title {
    position: relative;
    z-index: 1;
  }

  .description {
    position: relative;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    margin-top: 10%;
  }
</style>
