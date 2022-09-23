import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import AppModal from "./components/AppModal.vue";

Vue.config.productionTip = false;
Vue.component("app-modal", AppModal);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
