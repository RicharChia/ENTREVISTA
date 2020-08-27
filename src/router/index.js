import Vue from "vue";
import VueRouter from "vue-router";

import Inicio from "../views/Inicio.vue";
import crud from "../views/crud.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio
  },
  {
    path: "/",
    name: "crud",
    component: crud
  },


];

const router = new VueRouter({
  routes
});

export default router;
