<script setup lang="ts">
import { ref } from "vue";
import Alert from "./Alert.vue";
import useNewsletterSubmitter from "../composables/useNewsletterSubmitter";

interface Newsletter {
  name: string;
  email: string;
}

const form = ref<Newsletter>({
  name: "",
  email: "",
});

const alertType = ref<string>("");
const message = ref<string>("");

const submit = async () => {
  if (!form.value.name || !form.value.email) return;

  const res = await useNewsletterSubmitter(form.value);

  if (res?.status) {
    alertType.value = "success";
    message.value = res?.message;

    form.value.name = "";
    form.value.email = "";

    return;
  }

  alertType.value = "danger";
  message.value = res?.message;
};
</script>

<template>
  <div class="px-5 pt-3 mt-5 bg-light">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">
          Subscribe to get the latest jobs as we upload them.
        </h1>
        <p class="col-lg-10 fs-5 text-muted">
          Don't miss a chance to land your dream job. We send out new job
          notifications as soon as it comes online.
        </p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <Alert
          :alert-type="alertType"
          :message="message"
          v-if="message.length"
        />
        <form
          class="p-4 p-md-5 border rounded-3 bg-light"
          @submit.prevent="submit"
        >
          <div class="form-floating mb-3">
            <input type="text" class="form-control" v-model="form.name" />
            <label for="floatingPassword">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="name@example.com"
              v-model="form.email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
