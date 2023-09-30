<script setup lang="ts">
export interface Props {
  title: string;
  text: string;
  hasPrimaryLink: boolean;
  hasSecondaryLink: boolean;
  primaryText?: string;
  secondaryText?: string;
  hasImage: boolean;
  imgUrl?: string;
}

withDefaults(defineProps<Props>(), {
  title: "Enter title",
  text: "Enter text",
  hasPrimaryLink: true,
  hasSecondaryLink: false,
  primaryText: "Enter text",
  hasImage: true,
  imgUrl: "logo.png",
});
</script>

<template>
  <div class="px-4 py-5 text-center text-white bg-secondary h-75">
    <div class="w-25 mx-auto d-block mb-3" v-if="hasImage">
      <img class="w-100" src="../assets/images/logo.png" :alt="imgUrl" />
    </div>
    <h1 class="display-5 fw-bold text-white">{{ title }}</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 text-white">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
$blue-800: #01409e;
.hero-bg {
  background-color: $blue-800;
}
</style>
