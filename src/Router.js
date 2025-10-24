import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import CicloVidaComponent from "./components/CicloVidaComponent.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";

const myRoutes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/musica",
    component: MusicaComponent,
  },
  {
    path: "/cine",
    component: CineComponent,
  },
  {
    path: "/cicloVida",
    component: CicloVidaComponent,
  },
  {
    path: "/directivas",
    component: DirectivasComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
