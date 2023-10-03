<script lang="ts" setup>
import MiniHero from "../components/MiniHero.vue";
import JobForm from "../components/JobForm.vue";
</script>

<template>
  <MiniHero
    title="You can make it count"
    text="Post legitimate jobs and make the difference in someone's life."
  />
  <main class="container">
    <JobForm />
  </main>
</template>
