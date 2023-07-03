import { createWebHistory, createRouter } from "vue-router";
import TodoApp from "../components/TodoApp.vue";
import WeatherApp from "../components/WeatherApp.vue";

const routes = [
  {
    path: "/",
    name: "todo-app",
    component: TodoApp,
  },
  {
    path: "/weather-app",
    name: "weather-app",
    component: WeatherApp,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
