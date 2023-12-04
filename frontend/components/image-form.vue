<template>
  <div :class="$style.container">
    <h2 :class="$style.header" class="text-h2">Add a new image</h2>
    <form :class="$style.form" @submit.prevent="submit">
      <base-input
        v-model="formData.title"
        type="text"
        label="Title"
        :error="errors.title"
      />
      <base-input
        v-model="formData.description"
        type="text"
        label="Description"
        :error="errors.description"
      />
      <file-input
        v-model="formData.image"
        accept=".png, .jpg, .jpeg"
        label="Image file"
        :error="errors.image"
      />

      <base-button :class="$style.button" type="submit">Submit</base-button>
    </form>
  </div>
</template>

<script lang="ts" setup>
  interface FormData {
    title: string;
    description: string;
    image: File;
  }

  const emit = defineEmits<{
    (e: "submit", data: FormData): void;
  }>();

  const formData = reactive({
    title: "",
    description: "",
    image: null,
  });

  const errors = reactive({
    title: "",
    description: "",
    image: "",
  });

  const validate = () => {
    let isValid = true;

    if (!formData.title) {
      errors.title = "Title is required";
      isValid = false;
    }

    if (!formData.description) {
      errors.description = "Description is required";
      isValid = false;
    }

    if (!formData.image) {
      errors.image = "Image is required";
      isValid = false;
    }

    if (formData.image && (formData.image as File).size > 20 * 1024 * 1024) {
      errors.image = "Image size must be less than 20MB";
      isValid = false;
    }

    return isValid;
  };

  const submit = () => {
    if (!validate()) return;

    emit("submit", {
      title: formData.title,
      description: formData.description,
      image: formData.image as unknown as File,
    });
  };
</script>

<style lang="scss" module>
  .container {
    padding: 40px;

    @media screen and (max-width: 500px) {
      padding: 20px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }

  .button {
    align-self: flex-end;
    margin-top: 20px;
  }

  .header {
    margin-bottom: 30px;
  }
</style>
