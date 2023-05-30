<script setup lang="ts">
import IconBrand from 'comps/icons/IconBrand.vue'
import LinkToRoute from 'comps/links/LinkToRoute.vue'
</script>

<template>
    <header class="nav-bar">
        <IconBrand />
        <nav>
            <LinkToRoute :route="'/signup'" :label="'Inscrever-se'" />
            <LinkToRoute :route="'/'" :label="'Entrar'" />
        </nav>
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
