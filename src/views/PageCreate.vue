<template>
    <form class="mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">Page Title</label>
                    <input type="text" class="form-control" v-model="pageTitle" />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Content</label>
                    <textarea type="text" class="form-control" rows="5" v-model="pageContent"></textarea>
                </div>
            </div>

            <div class="col-md">
                <div class="mb-3">
                    <label for="" class="form-label">Link Text</label>
                    <input type="text" class="form-control" v-model="linkText" />
                </div>
                <div class="form-check mb-3">
                    <input type="checkbox" class="form-check-input" v-model="published" />
                    <label for="" class="form-check-label">Published</label>
                </div>
            </div>
        </div>

        <div class="mb-3">
            <button type="submit" class="btn btn-primary" :disabled="isFormInvalid" @click.prevent="submitForm()">
                Create Page
            </button>
        </div>
    </form>
</template>

<script setup>
import { inject, computed, watch, ref } from "vue";
import { useRouter } from "vue-router";

const bus = inject("$bus");
const pages = inject("$pages");
const router = useRouter();

const pageTitle = ref("");
const pageContent = ref("");
const linkText = ref("");
const published = ref(true);

const isFormInvalid = computed(() => !pageTitle || !pageContent || !linkText);

watch(pageTitle, (newTitle, oldTitle) => {
    if (linkText.value === oldTitle) {
        linkText.value = newTitle;
    }
});

function submitForm() {
    if (!pageTitle.value || !pageContent.value || !linkText.value) {
        alert("Please fill the form");
        return;
    }

    pages.addPage({
        pageTitle: pageTitle.value,
        pageContent: pageContent.value,
        link: {
            text: linkText.value,
        },
        published: published.value,
    });

    bus.$emit("pagesUpdated");

    router.push({ path: "/pages" });
}
</script>

<style scoped>
textarea {
    resize: none !important;
}
</style>
