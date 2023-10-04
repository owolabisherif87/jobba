<script setup lang="ts">
import { ref } from "vue";
import MiniHero from "../components/MiniHero.vue";
import Alert from "../components/Alert.vue";
import useMentorshipSubmitter from "../composables/useMentorshipSubmitter";

interface Mentorship {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const isSubmitting = ref<boolean>(false);
const message = ref<string>("");
const alertType = ref<string>("");

const form = ref<Mentorship>({
  name: "",
  email: "",
  phone: "",
  address: "",
});

const submit = async () => {
  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.phone ||
    !form.value.address
  )
    return;

  const res = await useMentorshipSubmitter(form.value);

  if (res?.status) {
    alertType.value = "success";
    message.value = res?.message;

    form.value.name = "";
    form.value.email = "";
    form.value.phone = "";
    form.value.address = "";

    return;
  }

  alertType.value = "danger";
  message.value = res?.message;
};
</script>

<template>
  <MiniHero
    title="Mentorship Signup"
    text="Sign up for our mentorship service; let's get you ready for the next big thing."
  />
  <div class="h-100 container my-5">
    <div v-if="message.length">
      <Alert :alert-type="alertType" :message="message" />
    </div>
    <div class="card">
      <div class="card-body">
        <form class="needs-validation mb-5" @submit.prevent="submit">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="Name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Sarah Emma."
                v-model="form.name"
                required
              />
            </div>

            <div class="col-sm-6">
              <label for="phone" class="form-label">Phone</label>
              <input
                type="text"
                class="form-control"
                placeholder="07038516890"
                v-model="form.phone"
                required
              />
            </div>

            <div class="col-sm-6">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="e.g owolabisherif87@gmail.com"
                required
                v-model="form.email"
              />
            </div>

            <div class="col-sm-6">
              <label for="email" class="form-label">Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your address"
                required
                v-model="form.address"
              />
            </div>

            <div class="d-grid d-sm-block mt-5">
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="isSubmitting"
              >
                REGISTER
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
