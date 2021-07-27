import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import VueGoogleCharts from "vue-google-charts";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Основные
import "@/assets/styles/general.scss";
import "@/assets/styles/footer.scss";
import "@/assets/styles/header.scss";
import "@/assets/styles/landing.scss";
// Побочные
import "@/assets/styles/homepage.scss";
import "@/assets/styles/overflow.scss";
import "@/assets/styles/buttons.scss";
import "@/assets/styles/collapse.scss";
import "@/assets/styles/homepage_image.scss";
import "@/assets/styles/contact.scss";
import "@/assets/styles/slider.scss";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueGoogleCharts);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
