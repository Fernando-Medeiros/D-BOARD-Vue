<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ label: string; placeholder: string; type: string }>()

const data = ref()

defineExpose({ data })
</script>

<template>
    <span>
        <label :for="label">{{ label }}</label>
        <input
            v-model="data"
            :type="type"
            :autocomplete="type"
            :placeholder="placeholder"
            :required="true"
        />
    </span>
</template>

<style scoped>
span {
    display: grid;
    gap: 1.5rem;
}
input {
    width: 100%;
    height: 40px;
    font-size: 1.1rem;
    padding-inline: 5px;
    box-sizing: border-box;
    border: 1px solid;
    border-radius: 5px;
    border-color: #42d09559;
}
input:focus {
    color: black;
    background-color: #d9d9d9;
}

@media (max-width: 780px) {
}
</style>
