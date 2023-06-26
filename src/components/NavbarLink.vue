<template>
    <li class="nav-item">
        <router-link
            class="nav-link"
            aria-current="page"
            active-class="active"
            :to="`/${index}`"
            :title="`This link goes to the ${pageLink.text} page`"
            >{{ pageLink.text }}
        </router-link>
    </li>
</template>

<script>
export default {
    props: ["pageLink", "index"],
};
</script>
