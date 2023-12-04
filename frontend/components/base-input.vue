<template>
  <div :class="$style.wrapper">
    <label v-if="label" :class="$style.label">{{ label }}</label>
    <input v-model="value" :class="$style.input" v-bind="{ ...props }" />
    <span :class="$style.error">{{ error || "" }}</span>
  </div>
</template>

<script lang="ts" setup>
  interface Props {
    label?: string;
    type?: string;
    readonly?: boolean;
    placeholder?: string;
    modelValue: string;
    error?: string;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "update:modelValue", payload: string): void;
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
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e5e5e5;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    background-color: #ffffff;
    height: 42px;
    border-color: #333333;
    background-color: #1d1d1d;
    color: #e3e3e3;
    border-radius: 4px;
  }

  .label {
    color: #dddddd;
    font-size: 12px;
  }

  .error {
    color: rgb(208, 45, 45);
    font-size: 12px;
    min-height: 12px;
    margin-left: auto;
  }
</style>
