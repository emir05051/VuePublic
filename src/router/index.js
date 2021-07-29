import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "About",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/structure",
    name: "Structure",
    component: () => import("../views/Structure.vue"),
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
