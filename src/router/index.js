import { createRouter, createWebHistory } from "vue-router";
import TheBody from "../components/TheBody.vue";
import LoginScreen from "../components/LoginScreen.vue";
import BooksPage from "../components/BooksPage.vue";
import BookPage from "../components/BookPage.vue";
import BooksAdminPage from "../components/BooksAdminPage.vue";
import BookEditPage from "../components/BookEditPage.vue";
import UsersPage from "../components/UsersPage.vue";
import UserEditPage from "../components/UserEditPage.vue";

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
  {
    path: "/books",
    name: "BooksPage",
    component: BooksPage,
  },
  {
    path: "/books/:bookName",
    name: "BookPage",
    component: BookPage,
  },
  {
    path: "/admin/books",
    name: "BooksAdminPage",
    component: BooksAdminPage,
  },
  {
    path: "/admin/books/:bookId",
    name: "BookEditPage",
    component: BookEditPage,
  },
  {
    path: "/admin/users",
    name: "UsersPage",
    component: UsersPage,
  },
  {
    path: "/admin/users/:userId",
    name: "UserEditPage",
    component: UserEditPage,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
