import App from "./App.vue";
import { createApp } from "vue";
import router from "./routes";
import $pages from "./data";
import $bus from "./utils/Events";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(router);
app.provide("$bus", $bus);
app.provide("$pages", $pages);

app.mount("#app");
