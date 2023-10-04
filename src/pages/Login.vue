<script setup lang="ts">
import { onMounted, ref } from "vue";
import handleLogin from "../composables/handleLogin";
import { useLoginStore } from "../store/useLoginStore";
import { useRouter, useRoute } from "vue-router";
import Alert from "../components/Alert.vue";

interface Auth {
  email: string;
  password: string;
}

const processing = ref<boolean>(false);

const auth = ref<Auth>({
  email: "",
  password: "",
});

const router = useRouter();
const route = useRoute();
const message = ref<string>("");

onMounted(() => {
  console.log();
});

const submit = async () => {
  processing.value = true;
  const res = await handleLogin(auth.value);

  const { handleLogIn } = useLoginStore();

  if (res.status) {
    handleLogIn(res);

    const redirect = ref<string | any>(route.query?.redirect);

    redirect.value
      ? router.push({ name: redirect.value })
      : router.push({ name: "post-job" });
  } else message.value = res.message;

  processing.value = false;
};
</script>

<template>
  <div class="container h-100 my-5">
    <div class="row h-100 align-items-center">
      <div class="col-12 col-md-6 offset-md-3">
        <div class="card shadow-sm">
          <div class="card-body">
            <h4 class="text-center">Login</h4>
            <hr />
            <Alert
              alert-type="danger"
              :message="message"
              v-if="message.length"
            />
            <form class="row" method="post" @submit.prevent="submit">
              <div class="form-group col-12 mb-3">
                <label for="email" class="font-weight-bold">Email</label>
                <input
                  type="text"
                  v-model="auth.email"
                  name="email"
                  id="email"
                  class="form-control"
                />
              </div>
              <div class="form-group col-12 mb-3">
                <label for="password" class="font-weight-bold">Password</label>
                <input
                  type="password"
                  v-model="auth.password"
                  name="password"
                  id="password"
                  class="form-control"
                />
              </div>
              <div class="col-12 mb-2">
                <button
                  type="submit"
                  :disabled="processing"
                  class="btn btn-primary btn-block"
                >
                  {{ processing ? "Please wait" : "Login" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
