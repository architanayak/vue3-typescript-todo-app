import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/Home.vue";
import AddTask from "@/views/AddTask/AddTask.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add_task",
    name: "AddTask",
    component: AddTask
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

console.log("history", process.env.BASE_URL)

export default router;
