<template>
    <div v-if="page" class="container">
        <h1>{{ page.pageTitle }}</h1>
        <p>{{ page.pageContent }}</p>
    </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    props: ["index"],
    inject: ["$pages", "$bus"],
    watch: {
        index(newIndex, _oldIndex) {
            this.page = this.$pages.getSinglePage(newIndex);
        },
    },
    created() {
        if (this.index === "") this.router.push("/0");
        this.page = this.$pages.getSinglePage(this.index);
    },
    data() {
        return {
            page: null,
            router: useRouter(),
        };
    },
};
</script>
