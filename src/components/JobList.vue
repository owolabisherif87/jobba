<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Job } from "../models";
import Bootstrap5Pagination from "../components/Paginator.vue";
import Card from "./Card.vue";
import Loader from "./Loader.vue";
import getJobs from "../composables/getJobs";

export interface Props {
  showHeader: boolean;
  showMoreBtn: boolean;
  showPagination: boolean;
  truncate?: boolean;
  limit: number;
}

const props = withDefaults(defineProps<Props>(), {
  showHeader: true,
  showMoreBtn: true,
  showPagination: false,
  truncate: true,
  limit: 6,
});

const loading = ref<boolean>(false);

const paginator = ref<object>({
  type: Object,
  default: () => {},
});

const jobs = ref<Job[]>([]);

const paginate = async (page = 1) => {
  loading.value = true;
  const res: any = await getJobs(page, null);

  paginator.value = res.data;
  jobs.value = res?.data.data;

  loading.value = false;
};

onMounted(() => paginate());

const handleJobDescription = (description: string) => {
  return props.truncate ? description.substring(0, 100) + "..." : description;
};
</script>

<template>
  <div class="container-fluid bg-white px-5 pt-3">
    <div v-if="props.showHeader">
      <h2 class="mt-3">Browse our latest job opportunities.</h2>
      <h4 class="lead mb-4 text-success">Get a job on jobba.</h4>
    </div>
    <div class="d-flex justify-content-end my-3" v-if="props.showMoreBtn">
      <router-link to="/job" class="btn btn-primary"
        >View more jobs</router-link
      >
    </div>
    <div class="row">
      <template v-if="jobs.length">
        <div class="col-sm-12 col-md-4" v-for="(job, index) in jobs">
          <Card
            :id="job.id"
            :title="job.business"
            :summary="handleJobDescription(job.description)"
            :location="job.location"
            :text="job.title"
            btn-text="Learn more"
            :url="job.url"
            :key="index"
          />
        </div>
      </template>
      <template v-else-if="loading">
        <Loader />
      </template>
      <template v-else>
        <div class="text-center">
          <h4 class="fw-semibold">No job posted yet, please check back.</h4>
        </div>
      </template>
    </div>
    <div class="d-flex justify-content-center mt-3" v-if="props.showMoreBtn">
      <router-link to="/job" class="btn border">View more jobs</router-link>
    </div>
    <div
      class="d-flex justify-content-center w-100"
      v-if="props.showPagination"
    >
      <Bootstrap5Pagination
        :data="paginator"
        :showDisabled="true"
        @pagination-change-page="paginate"
      ></Bootstrap5Pagination>
    </div>
  </div>
</template>
