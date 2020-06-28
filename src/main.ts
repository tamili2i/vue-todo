/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import moment from "moment";
import { ValidationProvider, ValidationObserver } from "vee-validate";

/**
 * =========================
 *
 * Plugins
 *
 * =========================
 */

import router from "./router";
import "./plugins/axios";
import "./plugins/bootstrap-vue";
import "./plugins/bootstrap";
import "./plugins/vuex-router-sync";
import "./plugins/ionicons";
import "./plugins/validation";
import "./styles/style.scss";
// /**
//  * Inject mixins that access globally
//  */
// mixins.forEach((mixin: any) => {
//   Vue.mixin(mixin);
// });

// /**
//  * Regestering Pipe filters globally
//  */
// filters.forEach((filter: any) => {
//   Vue.filter(filter.name, filter.process);
// });

// // Regestering basecomponents globally
// baseComponents.forEach((component: any) => {
//   Vue.component(component.name, component);
// });

// Regestering validation components globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

/**
 * Register moment globally so need not to import in every file
 * Moment instance includes while vue instance creation
 */
Vue.prototype.moment = moment;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
