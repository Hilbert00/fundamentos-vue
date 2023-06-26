<template>
    <nav class="navbar navbar-expand-lg sticky-top" :class="[`navbar-${theme}`, `bg-${theme}`]">
        <div class="container-fluid">
            <router-link to="/0" class="navbar-brand">My Vue</router-link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <navbar-link
                    v-for="(page, index) in publishedPages"
                    :key="index"
                    :index="pages.indexOf(page)"
                    :page-link="page.link"
                />

                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        aria-current="page"
                        active-class="active"
                        :to="'/pages'"
                        :title="`This link goes to the page management`"
                        >Pages
                    </router-link>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle</button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";

export default {
    inject: ["$pages", "$bus"],
    components: { NavbarLink },
    computed: {
        publishedPages() {
            return this.pages.filter((e) => e.published);
        },
    },
    methods: {
        changeTheme() {
            if (this.theme === "dark") this.theme = "light";
            else this.theme = "dark";

            this.storeThemeSetting();
        },
        storeThemeSetting() {
            localStorage.setItem("theme", this.theme);
        },
        getThemeSetting() {
            const theme = localStorage.getItem("theme");

            if (theme) this.theme = theme;
        },
    },
    created() {
        this.getThemeSetting();
        this.pages = this.$pages.getAllPages();

        this.$bus.$on("pagesUpdated", () => {
            this.pages = JSON.parse(JSON.stringify(this.$pages.getAllPages()));
        });
    },
    data() {
        return {
            pages: [],
            theme: "dark",
        };
    },
};
</script>
