<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ route: string; label: string }>()
</script>

<template>
    <RouterLink :to="route" class="link-to-route">{{ label }}</RouterLink>
</template>

<style scoped>
.link-to-route {
    text-decoration: none;
}
.link-to-route:hover {
    transition: all 1s;
    text-decoration: underline 2px;
}
.link-to-route.router-link-exact-active {
    text-decoration: underline 3px;
    text-decoration-color: #42d0959f;
}
</style>
