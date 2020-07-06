import Vue from "vue";
import { Button, message, Input, Checkbox, Card } from "ant-design-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import AppButton from './components/AppButton.vue';

import "ant-design-vue/dist/antd.css";
import "./scss/style.scss";

Vue.prototype.$message = message;

Vue.component('AppButton', AppButton);

Vue.use(Button);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Card);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
