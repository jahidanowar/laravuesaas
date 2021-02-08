import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

// Checking if the Cookie is authenticated
store.dispatch("auth/user").then(() => {
    //Mounting the app
    createApp(App).use(store).use(router).mount("#app");
});
