<template>
  <div :class="[$style.item, size && $style[size]]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  type Size = "large" | "medium" | "wide" | "tall";

  defineProps<{
    size?: Size;
  }>();
</script>

<style lang="scss" module>
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 400px;
  }

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    .item {
      grid-column: span 1;
      min-height: auto;
      grid-row: span 2;

      &.wide {
        grid-column: span 3;
        grid-row: span 2;
      }

      &.medium {
        grid-column: span 2;
      }

      &.large {
        grid-column: span 4;
        min-height: 400px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .item {
      grid-column: span 2;
      min-height: auto;

      &.wide {
        grid-column: span 4;
      }

      &.medium {
        grid-column: span 4;
        grid-row: span 2;
      }

      &.tall {
        grid-column: span 1;
        grid-row: span 2;
      }

      &.large {
        grid-column: span 6;
        grid-row: span 2;
      }
    }
  }
</style>
