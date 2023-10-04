<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { useLoginStore } from "./store/useLoginStore";
import { onMounted } from "vue";

const { handleLogIn } = useLoginStore();

onMounted(() => {
  const isLogedIn: any = localStorage.getItem("token");
  const token = JSON.parse(isLogedIn);

  if (token) handleLogIn({ token: token, status: true });
});
</script>

<template>
  <NavBar />
  <router-view />
  <Footer />
</template>
