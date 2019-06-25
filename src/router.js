import Vue from "vue";
import Router from "vue-router";
import * as netlifyIdentity from "netlify-identity-widget";

import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/team",
      name: "Team",
      // route level code-splitting
      // this generates a separate chunk (team.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "team" */ "./views/Team.vue"),
      meta: {
        requiresAuth: true
      }
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

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentity.currentUser();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("/signin");
  } else {
    next();
  }
});

export default router;
