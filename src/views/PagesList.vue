<template>
    <div class="d-flex justify-content-between">
        <h4>Pages</h4>
        <router-link to="/pages/create" class="btn btn-primary btn-sm align-self-center">Create</router-link>
    </div>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link Text</th>
                <th>Published</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(page, index) in $pages.getAllPages()" :key="index" @click="goToPage(index)">
                <td>
                    {{ page.pageTitle }}
                </td>
                <td>
                    {{ page.link.text }}
                </td>
                <td>
                    {{ page.published ? "Yes" : "No" }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";

const $pages = inject("$pages");
const router = useRouter();

function goToPage(index) {
    router.push({ path: `pages/edit/${index}` });
}
</script>

<style scoped>
tbody tr:hover {
    cursor: pointer;
}
</style>
