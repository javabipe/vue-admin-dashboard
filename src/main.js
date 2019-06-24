import Vue from "vue";
import * as netlifyIdentity from "netlify-identity-widget";

import App from "./App.vue";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

netlifyIdentity.init();

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
