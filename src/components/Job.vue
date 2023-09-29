<script setup lang="ts">
import { ref } from "vue";
import { Job } from "../models";
import Card from "./Card.vue";

export interface Props {
  showHeader: boolean;
  showMoreBtn: boolean;
  limit: number;
}

withDefaults(defineProps<Props>(), {
  showHeader: true,
  showMoreBtn: true,
  limit: 6,
});

const jobs = ref<Job[]>([
  {
    business: { name: "ABC" },
    title: "Senior Fullstack developer",
    location: [{ name: "remote" }],
    description: "Hi! We are NERIS Analytics, the team behind 16Personalities",
    summary: "Hi! We are NERIS Analytics, the team behind 16Personalities",
    permit: "worldwide",
    level: [{ name: "Senior" }],
    url: "https://vuejobs.com/jobs/neris-analytics-limited-senior-frontend-developer-vue-2-3",
  },
  {
    business: { name: "XYZ" },
    title: "Mid Fullstack developer",
    location: [{ name: "remote" }, { name: "onsite" }],
    description:
      "Hi! We are NERIS Analytics, the team behind 16Personalities la la",
    summary:
      "Hi! We are NERIS Analytics, the team behind 16Personalities la la",
    permit: "worldwide",
    level: [{ name: "Mid" }, { name: "Senior" }],
    url: "https://vuejobs.com/jobs/neris-analytics-limited-senior-frontend-developer-vue-2-3",
  },
  {
    business: { name: "ABCXYZ" },
    title: "Senior Frontend developer",
    location: [{ name: "remote" }, { name: "onsite" }],
    description:
      "Hi! We are NERIS Analytics, the team behind 16Personalities la la",
    summary:
      "Hi! We are NERIS Analytics, the team behind 16Personalities la la",
    permit: "worldwide",
    level: [{ name: "Mid" }, { name: "Senior" }],
    url: "https://vuejobs.com/jobs/neris-analytics-limited-senior-frontend-developer-vue-2-3",
  },
  {
    business: { name: "ABC" },
    title: "Senior Fullstack developer",
    location: [{ name: "remote" }],
    description: "Hi! We are NERIS Analytics, the team behind 16Personalities",
    summary: "Hi! We are NERIS Analytics, the team behind 16Personalities",
    permit: "worldwide",
    level: [{ name: "Senior" }],
    url: "https://vuejobs.com/jobs/neris-analytics-limited-senior-frontend-developer-vue-2-3",
  },
  {
    business: { name: "XYZ" },
    title: "Mid Fullstack developer",
    location: [{ name: "remote" }, { name: "onsite" }],
    description:
      "Hi! We are NERIS Analytics, the team behind 16Personalities la la",
    summary:
      "Hi! We are NERIS Analytics, the team behind 16Personalities la la",
    permit: "worldwide",
    level: [{ name: "Mid" }, { name: "Senior" }],
    url: "https://vuejobs.com/jobs/neris-analytics-limited-senior-frontend-developer-vue-2-3",
  },
  {
    business: { name: "ABCXYZ" },
    title: "Senior Frontend developer",
    location: [{ name: "remote" }, { name: "onsite" }],
    description:
      "Hi! We are NERIS Analytics, the team behind 16Personalities la la",
    summary:
      "Hi! We are NERIS Analytics, the team behind 16Personalities la la",
    permit: "worldwide",
    level: [{ name: "Mid" }, { name: "Senior" }],
    url: "https://vuejobs.com/jobs/neris-analytics-limited-senior-frontend-developer-vue-2-3",
  },
]);
</script>

<template>
  <div class="container-fluid bg-white px-5 pt-3">
    <h2 class="my-3" v-if="showHeader">Browse our latest job opportunities.</h2>
    <div class="row">
      <div class="col-sm-12 col-md-4" v-for="(job, index) in jobs">
        <Card
          :title="job.business.name"
          :summary="job.summary"
          :text="job.title"
          btn-text="Learn more"
          :url="job.url"
          :key="index"
        />
      </div>
    </div>
    <div class="d-flex justify-content-end" v-if="showMoreBtn">
      <router-link to="/about" class="btn btn-link">View more jobs</router-link>
    </div>
  </div>
</template>
