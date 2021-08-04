import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { GChart } from "vue-google-charts";

// Bootstrap
import "@/assets/styles/bootstrap.css";
// Основные
import "@/assets/styles/general.scss";
// Побочные
import "@/assets/styles/overflow.scss";
import "@/assets/styles/buttons.scss";

Vue.config.productionTip = false;

Vue.component("GChart", GChart);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
