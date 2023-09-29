<script lang="ts" setup>
export interface Props {
  title: string;
  text?: string;
  url: string;
  summary: string;
  hasBtn?: boolean;
  btnText?: string;
}

withDefaults(defineProps<Props>(), {
  title: "Enter title",
  text: "Enter text",
  hasBtn: true,
  btnText: "Enter btn text",
});
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title mb-0">{{ title }}</h5>
      <p class="card-text text-muted">{{ text }}</p>
      <p class="card-text">{{ summary }}</p>
      <a :href="url" class="btn btn-primary" v-if="hasBtn">{{ btnText }}</a>
    </div>
  </div>
</template>
