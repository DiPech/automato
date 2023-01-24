import { createApp } from "vue";
import { VueMasonryPlugin } from "vue-masonry";
import App from "./App.vue";
import router from "./router";

import "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(VueMasonryPlugin);

app.mount("#app");
