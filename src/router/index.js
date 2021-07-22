import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/contact",
    name: "About",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/team",
    name: "OurTeam",
    component: () => import("../views/Team.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
