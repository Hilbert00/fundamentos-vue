<template>
    <navbar />
    <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    inject: ["$bus", "$pages"],
    components: { Navbar },
};
</script>
