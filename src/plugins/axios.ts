/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue from "vue";
import Axios from "axios";
import router from "@/plugins/vue-router";

const getBaseUrl = () => {
  const {
    VUE_APP_API_PROTOCOL,
    VUE_APP_API_HOST,
    VUE_APP_BASE_URL
  } = process.env;
  return `${VUE_APP_API_PROTOCOL}${VUE_APP_API_HOST}${VUE_APP_BASE_URL}`;
};

Axios.defaults.baseURL = getBaseUrl();
Axios.defaults.headers.common.Accept = "application/json";
Axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      router.push({
        name: "login.index"
      });
    }
    return Promise.reject(error);
  }
);

// Bind Axios to Vue.
Vue.prototype.$http = Axios;
Vue.prototype.$baseUrl = getBaseUrl;

Object.defineProperties(Vue.prototype, {
  $baseUrl: {
    get() {
      return getBaseUrl();
    }
  },
  $http: {
    get() {
      return Axios;
    }
  }
});

export default {
  getBaseUrl
};
