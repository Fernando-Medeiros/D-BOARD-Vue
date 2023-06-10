<script setup lang="ts">
import { ref } from 'vue'
import IconBrand from 'comps/icons/IconBrand.vue'
import LinkToRoute from 'comps/links/LinkToRoute.vue'

const content = ref()
defineExpose({ content })
</script>

<template>
    <span ref="content">
        <IconBrand />
        <LinkToRoute :route="'/profile'" :label="'Perfil'" />
        <LinkToRoute :route="'/dashboard'" :label="'Painel'" />
        <LinkToRoute :route="'/tasks'" :label="'Tarefas'" />
        <LinkToRoute :route="'/profile/settings'" :label="'Configurações'" />
        <LinkToRoute :route="'/logout'" :label="'Sair'" />
    </span>
</template>

<style scoped>
span {
    display: grid;
    min-height: 40vh;
    justify-content: center;
    gap: 2rem;
    text-align: left;
}
</style>
