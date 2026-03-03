import { createMemoryHistory, createRouter } from "vue-router";

import about from "../about.vue";
import MainPage from "../MainPage.vue";

const routes = [
  {
    path: "/",
    name: "Main page",
    component: MainPage,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
