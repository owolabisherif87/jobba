import Home from "../pages/Home.vue"
// import About from "../pages/About.vue"
import Job from "../pages/Job.vue"
import PostJob from "../pages/PostJob.vue"

const routes = [
  { path: '/', component: Home, name: "home" },
  // { path: '/about', component: About, name: "about" },
  { path: '/job', component: Job, name: "job" },
  { path: '/post-job', component: PostJob, name: "post-job" },
]

export default routes