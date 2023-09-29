<script setup lang="ts">
export interface Props {
  title: string;
  text: string;
}

defineProps<Props>();
</script>

<template>
  <div class="bg-light p-5 mb-5">
    <h1>{{ title }}</h1>
    <p class="lead">
      {{ text }}
    </p>
  </div>
</template>
