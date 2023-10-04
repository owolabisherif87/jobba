<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MiniHero from "../components/MiniHero.vue";
import { storeToRefs } from "pinia";
import { Job } from "../models";
import getJob from "../composables/getJob";
import { useLoginStore } from "../store/useLoginStore";
import Newsletter from "../components/Newsletter.vue";

const loginStore = useLoginStore();
const { isLogedIn } = storeToRefs(loginStore);

const route = useRoute();

const id = route.params.id as number | string;

const job = ref<Job>();

onMounted(async () => {
  const res = await getJob(id);
  job.value = res;
});

const formatDate = (payload: string) => {
  const dt = new Date(payload);

  return dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
};
</script>

<template>
  <MiniHero :title="(job?.title as string)" :text="(job?.business as string)" />
  <div class="container my-5">
    <div class="row g-5">
      <div class="col-md-5 col-lg-4">
        <div class="border rounded p-4 overflow-hidden">
          <div class="mb-3">
            <p class="fw-semibold mb-0">Location</p>
            <p class="text-muted">{{ job?.location }}</p>
          </div>
          <div class="mb-3">
            <p class="fw-semibold mb-0">Work permit</p>
            <p class="text-muted">{{ job?.permit }}</p>
          </div>
          <div class="mb-3">
            <p class="fw-semibold mb-0">Work type</p>
            <p class="text-muted">{{ job?.type }}</p>
          </div>
          <div class="mb-3">
            <p class="fw-semibold mb-0">Work level</p>
            <p class="text-muted">{{ job?.level }}</p>
          </div>
          <div class="mb-3">
            <p class="fw-semibold mb-0">Salary</p>
            <p class="text-muted">
              NGN {{ new Intl.NumberFormat().format(job?.salary as any) }}
            </p>
          </div>
          <div class="mb-3">
            <p class="fw-semibold mb-0">Created</p>
            <p class="text-muted">
              {{ formatDate(job?.created_at) }}
            </p>
          </div>
          <div class="mb-3 d-flex justify-content-between">
            <a class="btn border" :href="job?.url">Apply here</a>
            <div v-if="isLogedIn">
              <router-link
                :to="`/post-job?id=${job?.id}`"
                class="btn btn-success"
                >Edit</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7 col-lg-8">
        <div>
          <h3>Job Description</h3>
          <p v-html="job?.description"></p>
        </div>
      </div>
    </div>
  </div>
  <Newsletter />
</template>
