<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSessionGlobalState } from 'composable/useGlobalStates'
import HeaderDefault from 'comps/HeaderDefault.vue'
import HeaderSession from 'comps/HeaderSession.vue'
import FooterGlobal from 'comps/FooterGlobal.vue'
</script>

<template>
    <HeaderDefault class="main-container" v-if="!useSessionGlobalState().value" />
    <HeaderSession class="main-container" v-else />
    <RouterView class="main-container" />
    <FooterGlobal class="main-container" />
</template>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    font-weight: normal;
}

* {
    margin: 0;
    padding: 0;
    color: #8c8d8d;
}

input {
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: transparent;
}

#app {
    background: #1a1a1a;
    background-image: url(/resources/brand-background.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-attachment: fixed;

    transition: color 0.5s, background-color 0.5s;
    line-height: 1.6;
    font-family: 'Varela round', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    min-height: 100vh;
}

.main-container {
    max-width: 1400px;
    margin: auto;
}
</style>
