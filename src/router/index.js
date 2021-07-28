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
    beforeEnter: (to, from, next) => {
      console.log(to);
      console.log(from);
      if (window.innerWidth < 540) {
        router.push({ name: "OurTeamSmall" });
      }
      next();
    },
  },
  {
    path: "/team_small",
    name: "OurTeamSmall",
    component: () => import("../views/TeamSmall.vue"),
  },
  {
    path: "/team/:id",
    name: "PersonDetails",
    component: () => import("../views/PersonDetails.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
