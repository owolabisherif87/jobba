<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import MiniHero from "../components/MiniHero.vue";

const route = useRoute();

const id = route.params.id;

onMounted(() => {
  console.log(id);
});
</script>

<template>
  <MiniHero
    title="Browse our latest jobs"
    text="Browse through our list of jobs, find your perfect match and apply."
  />
  <div class="container my-5">
    <div class="row g-5">
      <div class="col-md-5 col-lg-4 bg-primary">
        <div>
          <input type="text" class="w-100" />
        </div>
      </div>
      <div class="col-md-7 col-lg-8 bg-success">
        <div>Right</div>
      </div>
    </div>
  </div>
</template>
