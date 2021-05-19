import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../src/components/home/index.vue")
const Money = () => import("../src/components/money/index.vue")

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/money",
    name: "money",
    component: Money
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
export default router;