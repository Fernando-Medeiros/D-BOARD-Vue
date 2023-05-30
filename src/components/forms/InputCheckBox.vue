<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ label: string }>()

const inputData = ref(false)

defineExpose({ inputData })
</script>

<template>
    <div>
        <input v-model="inputData" type="checkbox" />
        <label :for="label">{{ label }}</label>
    </div>
</template>

<style scoped>
div {
    display: flex;
    gap: 10px;
    width: max-content;
    align-items: center;
}
input {
    height: 1.2rem;
    width: 1.2rem;
}
label {
    font-size: 1rem;
    font-weight: 300;
}
</style>
