import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue from 'vue'
import { store } from "./store";
// Vue.config.devtools = true
// const app = Vue.createApp(App);
// app.config.devtools = true;

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
