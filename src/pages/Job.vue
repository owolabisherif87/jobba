<script lang="ts" setup>
import JobList from "../components/JobList.vue";
import MiniHero from "../components/MiniHero.vue";
import Newsletter from "../components/Newsletter.vue";
</script>

<template>
  <MiniHero
    title="Browse our latest jobs"
    text="Browse through our list of jobs, find your perfect match and apply."
  />

  <JobList
    :show-header="false"
    :show-more-btn="false"
    :show-pagination="true"
  />

  <Newsletter />
</template>
