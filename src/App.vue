<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from 'comps/HeaderComp.vue'
import FooterComp from 'comps/FooterComp.vue'
</script>

<template>
    <HeaderComp class="main-container" />
    <RouterView class="main-container" />
    <FooterComp class="main-container" />
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
