import Home from "../pages/Home.vue"
import JobDetail from "../pages/JobDetail.vue"
import Job from "../pages/Job.vue"
import PostJob from "../pages/PostJob.vue"

const routes = [
  { path: '/', component: Home, name: "home" },
  { path: '/job', component: Job, name: "job" },
  { path: '/job/:id', component: JobDetail, name: "about" },
  { path: '/post-job', component: PostJob, name: "post-job" },
]

export default routes