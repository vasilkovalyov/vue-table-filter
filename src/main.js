import { registerPlugins } from "@/plugins";

import App from "./App.vue";
import store from "./store";

import { createApp } from "vue";

const app = createApp(App);
app.use(store);

registerPlugins(app);

app.mount("#app");
