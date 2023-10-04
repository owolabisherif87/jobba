<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import useJobSubmitter from "../composables/useJobSubmitter";
import { onMounted, ref } from "vue";
import { JobForm } from "../models";
import Alert from "./Alert.vue";
import getJob from "../composables/getJob";

interface Select {
  value: string;
  text: string;
}

const form = ref<JobForm>({
  id: "",
  business: "",
  title: "",
  type: "",
  description: "",
  level: "",
  location: "",
  permit: "",
  salary: 0,
  url: "",
});

const isSubmitting = ref<boolean>(false);
const alertType = ref<string>("success");
const message = ref<string>("");
const route = useRoute();
const router = useRouter();

const prefillForm = (payload: JobForm) => {
  form.value.id = payload.id;
  form.value.business = payload.business;
  form.value.description = payload.description;
  form.value.level = payload.level;
  form.value.location = payload.location;
  form.value.permit = payload.permit;
  form.value.salary = payload.salary as any;
  form.value.title = payload.title;
  form.value.type = payload.type;
  form.value.url = payload.url;
};

const id: any = route.query?.id;

onMounted(async () => {
  if (id) {
    const res = await getJob(id);
    prefillForm(res);
  }
});

const jobTypes = ref<Select[]>([
  {
    value: "onsite",
    text: "Onsite",
  },
  {
    value: "remote",
    text: "Remote",
  },
  {
    value: "hybrid",
    text: "Hybrid (Onsite/Remote)",
  },
]);

const jobLevels = ref<Select[]>([
  {
    value: "junior",
    text: "Junior",
  },
  {
    value: "mid",
    text: "Mid",
  },
  {
    value: "senior",
    text: "senior",
  },
]);

const submit = async () => {
  isSubmitting.value = true;
  const submitted = await useJobSubmitter(form.value);
  isSubmitting.value = false;

  if (submitted && id) {
    router.push(`/job/${id}`);
  }

  if (submitted) {
    alertType.value = "success";
    message.value = id
      ? "Job updated successfully"
      : "Job submitted successfully";
    form.value.business = "";
    form.value.description = "";
    form.value.level = "";
    form.value.location = "";
    form.value.permit = "";
    form.value.salary = 0;
    form.value.title = "";
    form.value.type = "";
    form.value.url = "";
    return;
  }

  alertType.value = "danger";
  message.value = "An error occured";
};
</script>

<template>
  <div>
    <p>
      <span class="fw-semibold">Note: </span>
      <span class="text-danger"
        >Job posted here will be verified and vetted before approval to ensure
        we sanity.</span
      >
    </p>
  </div>
  <div v-if="message?.length">
    <Alert :alert-type="alertType" :message="message" />
  </div>
  <form class="needs-validation mb-5" @submit.prevent="submit">
    <div class="row g-3">
      <div class="col-sm-6">
        <label for="businessName" class="form-label">Business name</label>
        <input
          type="text"
          id="business"
          class="form-control"
          placeholder="Sekani-tech company Ltd."
          v-model="form.business"
          required
        />
      </div>

      <div class="col-sm-6">
        <label for="jobTitle" class="form-label">Job title</label>
        <input
          type="text"
          class="form-control"
          placeholder="Fullstack developer"
          v-model="form.title"
          required
        />
      </div>

      <div class="col-sm-6">
        <label for="jobLocation" class="form-label">Job location</label>
        <input
          type="text"
          class="form-control"
          placeholder="e.g USA"
          required
          v-model="form.location"
        />
      </div>

      <div class="col-sm-6">
        <label for="jobType" class="form-label">Job type</label>
        <select class="form-select" v-model="form.type" required>
          <option selected disabled value="">Select one</option>
          <option :value="typ.value" v-for="typ in jobTypes" :key="typ.value">
            {{ typ.text }}
          </option>
        </select>
      </div>

      <div class="col-sm-12">
        <label for="jobDescription" class="form-label">Job description</label>
        <textarea
          class="form-control"
          placeholder="Enter a description for the job."
          v-model="form.description"
          required
        ></textarea>
      </div>
      <div class="col-sm-6">
        <label for="jobPermit" class="form-label">Job permit</label>
        <input
          type="text"
          class="form-control"
          placeholder="e.g Worldwide"
          v-model="form.permit"
          required
        />
      </div>
      <div class="col-sm-6">
        <label for="jobLevel" class="form-label">Job level</label>
        <select required class="form-select" v-model="form.level">
          <option selected disabled value="">Select one</option>
          <option
            :value="level.value"
            v-for="level in jobLevels"
            :key="level.value"
          >
            {{ level.text }}
          </option>
        </select>
      </div>
      <div class="col-sm-6">
        <label for="jobTitle" class="form-label">Salary</label>
        <input
          type="number"
          class="form-control"
          v-model="form.salary"
          required
        />
      </div>
      <div class="col-sm-6">
        <label for="jobUrl" class="form-label">Job application link</label>
        <input
          type="text"
          class="form-control"
          placeholder="e.g Enter email or url"
          v-model="form.url"
          required
        />
      </div>

      <div class="d-grid d-sm-block mt-5">
        <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
          {{ id ? "UPDATE" : "SUBMIT" }}
        </button>
      </div>
    </div>
  </form>
</template>
