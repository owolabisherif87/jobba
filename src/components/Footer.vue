<template>
  <div class="container-fluid bg-footer-dark">
    <footer class="py-3">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item text-white">
          <router-link to="/" class="nav-link text-white">Home</router-link>
        </li>
        <li class="nav-item text-white">
          <router-link to="/job" class="nav-link text-white">Jobs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/post-job" class="nav-link text-white"
            >Post a Job</router-link
          >
        </li>
      </ul>
      <p class="text-center text-white">
        &copy; 2022 Jobba; All right reserved.
      </p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.bg-footer-dark {
  background-color: rgba(3, 31, 93, 0.84);
}
</style>
