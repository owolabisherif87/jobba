<script lang="ts" setup>
export interface Props {
  id?: number;
  title: string;
  text?: string;
  location?: string;
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
      <p class="card-text text-muted mb-0">{{ text }}</p>
      <span class="badge text-bg-success mb-3 rounded-pill">{{
        location
      }}</span>
      <p class="card-text">{{ summary }}</p>

      <router-link :to="`/job/${id}`" class="btn btn-primary" v-if="hasBtn">{{
        btnText
      }}</router-link>
    </div>
  </div>
</template>
