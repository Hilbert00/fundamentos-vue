import { createRouter, createWebHistory } from "vue-router";

import Pages from "./views/Pages.vue";
import PagesList from "./views/PagesList.vue";
import PageViewer from "./views/PageViewer.vue";
import PageCreate from "./views/PageCreate.vue";
import PageEdit from "./views/PageEdit.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/:index?", component: PageViewer, props: true },
        {
            path: "/pages",
            component: Pages,
            children: [
                { path: "", component: PagesList },
                { path: "create", component: PageCreate },
                { path: "edit/:index?", component: PageEdit, props: true },
            ],
        },
    ],
});

export default router;
