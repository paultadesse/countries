import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";

import './index.css'

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router: new VueRouter(routes),
  render: (h) => h(App),
}).$mount("#app");
