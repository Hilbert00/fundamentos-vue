<template>
    <h4>Edit {{ originalTitle }}</h4>

    <form action="" class="mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label class="form-label">Page Title</label>
                    <input type="text" class="form-control" v-model="data.page.pageTitle" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Content</label>
                    <textarea type="text" class="form-control" rows="5" v-model="data.page.pageContent"></textarea>
                </div>
            </div>

            <div class="col-md">
                <div class="mb-3">
                    <label class="form-label">Link Text</label>
                    <input type="text" class="form-control" v-model="data.page.link.text" />
                </div>
                <div class="form-check mb-3">
                    <input type="checkbox" class="form-check-input" v-model="data.page.published" />
                    <label class="form-check-label">Published</label>
                </div>
            </div>
        </div>

        <div class="d-flex gap-3 mb-3">
            <button type="submit" class="btn btn-primary" :disabled="isFormInvalid" @click.prevent="submitForm()">
                Confirm Edit
            </button>
            <button type="submit" class="btn btn-secondary" @click.prevent="goToPagesList()">Cancel</button>
            <button type="submit" class="btn btn-danger" @click.prevent="submitDeleteForm()">Delete</button>
        </div>
    </form>
</template>

<script setup>
import { inject, computed, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const bus = inject("$bus");
const pages = inject("$pages");
const { index } = defineProps(["index"]);

const data = reactive({ page: JSON.parse(JSON.stringify(pages.getSinglePage(index))) });
const originalTitle = data.page.pageTitle;

const isFormInvalid = computed(() => {
    return !data.page.pageTitle || !data.page.pageContent || !data.page.link.text;
});

function submitForm() {
    pages.editPage(index, data.page);
    bus.$emit("pagesUpdated");
    goToPagesList();
}

function submitDeleteForm() {
    pages.deletePage(index);
    bus.$emit("pagesUpdated");
    goToPagesList();
}

function goToPagesList() {
    router.push({ path: "/pages" });
}
</script>
