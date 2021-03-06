import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
/*
import firebase from "firebase";
import { firebaseConfig } from "@/config.js";
*/
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

new Vue({
    router: router,
    render: (h) => h(App),
}).$mount("#app");
