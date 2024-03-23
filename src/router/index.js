// index.js

import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "@/views/LoginView.vue";
import ProductsView from "@/views/ProductsView.vue"; // Import ProductsView
import InventoryView from "@/views/InventoryView.vue"; // Import InventoryView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LoginForm",
      component: LoginForm,
    },
    {
      path: "/productsview",
      name: "productsview",
      component: ProductsView,
      meta: { requiresAuth: true },
    },
    {
      path: "/inventory",
      name: "inventory",
      component: InventoryView,
      meta: { requiresAuth: true }, // Add meta if authentication is required
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (
      !localStorage.getItem("username") ||
      !localStorage.getItem("password")
    ) {
      next({ name: "LoginForm" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
