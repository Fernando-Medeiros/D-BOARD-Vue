<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2'
import IconMenuContent from './IconMenuContent.vue'

const menu = ref()
const showSideBar = ref(false)

async function showLeftSideBar() {
    showSideBar.value = true

    await Swal.fire({
        position: 'top-left',
        html: menu.value.content,
        background: '#222222',
        showClass: {
            popup: `
                animate__animated
                animate__fadeInLeft
                animate__faster
              `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutLeft
                animate__faster
              `
        },
        grow: 'column',
        width: 200,
        showConfirmButton: false,
        showCloseButton: false
    })
}
</script>

<template>
    <img src="/resources/menu.png" alt="logo" @click="showLeftSideBar" />

    <IconMenuContent ref="menu" v-show="showSideBar" />
</template>

<style scoped>
img {
    width: 33px;
    height: 33px;
}
img:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: rotate(-90deg);
}
</style>
