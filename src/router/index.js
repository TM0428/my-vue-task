import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/HelloWorld.vue";

// import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home,
        props: {
            msg: "Hello, World!!",
        },
    },
];

const router = new VueRouter({
    routes,
});
/*
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requiresAuth) {
        // このルートはログインされているかどうか認証が必要です。
        // もしされていないならば、ログインページにリダイレクトします。
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                next();
            } else {
                next({
                    path: "/signin",
                    query: { redirect: to.fullPath },
                });
            }
        });
    } else {
        next(); // next() を常に呼び出すようにしてください!
    }
});
*/

export default router;
