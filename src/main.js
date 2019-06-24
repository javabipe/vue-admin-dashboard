import Vue from "vue";
import * as netlifyIdentity from "netlify-identity-widget";
import GoTrue from "gotrue-js";

import App from "./App.vue";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

netlifyIdentity.init();

export const auth = new GoTrue({
  APIUrl: "https://vue-admin-dashboard-test.netlify.com/.netlify/identity",
  setCookie: true
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
