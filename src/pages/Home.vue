<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Job from "../components/Job.vue";
import Newsletter from "../components/Newsletter.vue";
import Mentorship from "../components/Mentorship.vue";
</script>

<template>
  <Hero
    title="The leading job board at your beck and call"
    text="Discover companies looking to hire; let's help you connect with them."
    primary-text="Learn more"
    :has-image="true"
  />
  <Job />
  <Newsletter />
  <Mentorship />
</template>
