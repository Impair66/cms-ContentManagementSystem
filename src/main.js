import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "element-plus/dist/index.css";
import "tailwindcss/tailwind.css";
import "@/assets/styles/input.css";
import "@/assets/styles/index.scss";

import store from "./store";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");
