<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="value" :class="$style.container" @click.self="value = false">
        <div :class="$style.dialog">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
  const emit = defineEmits<{
    (e: "update:modelValue", payload: boolean): void;
  }>();
  const props = defineProps<{
    modelValue: boolean;
  }>();

  const value = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit("update:modelValue", value);
    },
  });
</script>

<style lang="scss" module>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(125, 125, 125, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dialog {
    background-color: #222222;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    animation: fade-in-up 0.3s ease-out;
    width: 100%;
    max-width: 600px;
    border-radius: 3px;
    margin: 20px;
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
