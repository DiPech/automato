import { createApp } from "vue";
import { VueMasonryPlugin } from "vue-masonry";
import Popper from "vue3-popper";
import App from "./App.vue";
import Router from "./router";

import "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";

const app = createApp(App);

app.use(Popper);
app.use(Router);
app.use(VueMasonryPlugin);

app.mount("#app");
