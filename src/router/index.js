import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactsView from "../views/ContactsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/:id",
      name: "contacts",
      component: ContactsView
    },
    {
      path: "/:notFound(.*)",
      redirect: "/"
    }
  ]
});

export default router;
