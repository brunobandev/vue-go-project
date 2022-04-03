import { createRouter, createWebHistory } from "vue-router";
import TheBody from "../components/TheBody.vue";
import LoginScreen from "../components/LoginScreen.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TheBody,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginScreen,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
