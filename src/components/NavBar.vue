<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useLoginStore } from "../store/useLoginStore";
import handleLogout from "../composables/handleLogout";

const loginStore = useLoginStore();
const { isLogedIn } = storeToRefs(loginStore);

const router = useRouter();

const logout = async () => {
  const res = await handleLogout({});

  if (res.status) {
    isLogedIn.value = false;
    router.push({ name: "home" });
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <div class="logo-wrapper">
          <img src="../assets/images/logo.png" alt="jobba logo" class="w-100" />
        </div>
      </a>
      <button
        class="navbar-toggler border bg-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item text-black">
            <router-link to="/" class="nav-link text-black">Home</router-link>
          </li>
          <li class="nav-item text-black">
            <router-link to="/job" class="nav-link text-black"
              >Jobs</router-link
            >
          </li>
          <li class="nav-item" v-if="isLogedIn">
            <router-link to="/post-job" class="nav-link text-black"
              >Post a Job</router-link
            >
          </li>
          <li class="nav-item" v-if="!isLogedIn">
            <router-link to="/login" class="nav-link text-black"
              >Login</router-link
            >
          </li>
          <li class="nav-item" v-if="isLogedIn">
            <button to="/login" class="btn btn-warning" @click="logout">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.logo-wrapper {
  width: 100px;
}
</style>
