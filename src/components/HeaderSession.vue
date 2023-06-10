<script setup lang="ts">
import IconMenu from './icons/sidebar/IconMenu.vue'
</script>

<template>
    <header class="nav-bar">
        <IconMenu />
        <nav></nav>
    </header>
</template>

<style scoped>
.nav-bar {
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #363636;

    margin-bottom: 4rem;
}
.nav-bar nav {
    display: flex;
    gap: 2rem;
}
</style>
