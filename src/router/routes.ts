import Home from "../pages/Home.vue"
import JobDetail from "../pages/JobDetail.vue"
import Job from "../pages/Job.vue"
import PostJob from "../pages/PostJob.vue"
import Login from "../pages/Login.vue"
import Mentorship from "../pages/Mentorship.vue"

const routes = [
  { path: '/', component: Home, name: "home", meta: {middleware: "guest"} },
  { path: '/job', component: Job, name: "job", meta: {middleware: "guest"} },
  { path: '/job/:id', component: JobDetail, name: "job-details", meta: {middleware: "guest", name: "job-details"}},
  { path: '/post-job', component: PostJob, name: "post-job", meta: {middleware: "auth", name: "post-job"} },
  { path: '/login', component: Login, name: "login", meta: {middleware: "guest", name: "post-job"} },
  { path: '/mentorship-signup', component: Mentorship, name: "mentorship-signup", meta: {middleware: "guest", name: "mentorship-signup"} },
]


export default routes