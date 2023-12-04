<template>
  <input
    ref="uploadRef"
    type="file"
    :name="name"
    hidden
    :accept="accept"
    @change="getFile"
  />
  <div :class="$style.inputWrapper">
    <base-input
      v-model="fileName"
      :label="label"
      :readonly="true"
      placeholder="Choose file"
      :error="error"
      @click="triggerUpload"
    />
  </div>
</template>

<script lang="ts" setup>
  interface Props {
    label?: string;
    accept: string;
    name?: string;
    modelValue: File | null;
    error?: string;
  }

  defineProps<Props>();
  const emit = defineEmits<{
    (e: "update:modelValue", payload: File): void;
  }>();

  const uploadRef = ref<HTMLInputElement>();
  const image = ref<File | null>(null);

  const triggerUpload = () => {
    uploadRef.value?.click();
  };

  const fileName = computed(() => {
    if (!image.value) return "";

    return image.value.name;
  });

  const getFile = () => {
    const file = uploadRef.value?.files?.[0];
    if (!file) return;

    image.value = file;
    emit("update:modelValue", file);
  };
</script>

<style lang="scss" module>
  .inputWrapper {
    cursor: pointer;
    width: 100%;
    display: flex;
    position: relative;

    input {
      cursor: pointer;
      padding-left: 50px;
    }

    &:before {
      content: "";
      width: 24px;
      height: 24px;
      background: url("/image.svg") no-repeat center center;
      position: absolute;
      left: 10px;
      bottom: 29px;
    }
  }
</style>
