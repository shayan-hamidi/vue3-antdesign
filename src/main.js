import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import I18NextVue from "i18next-vue";
import { i18next } from "./i18n";

const app = createApp(App);
app.use(I18NextVue, { i18next });
app.use(Antd).mount("#app");
