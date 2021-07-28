import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BButton } from "bootstrap-vue";
import { CardPlugin, CollapsePlugin } from "bootstrap-vue";

import { GChart } from "vue-google-charts";

// Bootstrap
// import "@/assets/styles/bootstrap.scss";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// Основные
import "@/assets/styles/general.scss";
// Побочные
import "@/assets/styles/overflow.scss";
import "@/assets/styles/buttons.scss";

Vue.config.productionTip = false;

Vue.use(CardPlugin);
Vue.use(CollapsePlugin);
Vue.component("BButton", BButton);

Vue.component("GChart", GChart);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
