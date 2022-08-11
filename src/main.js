import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import "@/assets/css/main.scss";
import BaseTitle from "@/components/ui-kit/BaseTitle.vue";
import EmptyItem from "@/components/ui-kit/EmptyItem.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("BaseTitle", BaseTitle);
app.component("EmptyItem", EmptyItem);

app.mount("#app");
