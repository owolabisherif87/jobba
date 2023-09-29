<script lang="ts" setup>
import Job from "../components/Job.vue";
import MiniHero from "../components/MiniHero.vue";
import Newsletter from "../components/Newsletter.vue";
</script>

<template>
  <MiniHero
    title="Browse our latest jobs"
    text="Browse through our list of jobs, find your perfect match and apply."
  />

  <Job :show-header="false" :show-more-btn="false" />

  <Newsletter />
</template>
