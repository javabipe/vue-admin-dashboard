import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/signin",
      name: "Signin",
      component: () => import(/* webpackChunkName: "signin" */ "./views/SignInFlow/Signin.vue")
    },
    {
      path: "/request",
      name: "Request",
      component: () => import(/* webpackChunkName: "request" */ "./views/SignInFlow/Request.vue")
    },
    {
      path: "/recover",
      name: "Recover",
      component: () => import(/* webpackChunkName: "recover" */ "./views/SignInFlow/Recover.vue")
    }
  ]
});