/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router";

Vue.use(VueRouter);

export const router = new VueRouter(routes);

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    next({
      name: "login.index"
    });
  } else {
    next();
  }
});

export default router;
