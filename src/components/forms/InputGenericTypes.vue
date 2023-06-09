<script setup lang="ts">
import type { Fn } from '@vueuse/shared'
import { ref } from 'vue'

defineProps<{
    label: string
    type: string
    placeholder: string
    required?: boolean
    autocomplete?: string
    rules?: Fn
}>()

const data = ref('')

defineExpose({ data })
</script>

<template>
    <div>
        <label :for="label">{{ label }}</label>

        <input
            v-model="data"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            :autocomplete="autocomplete ?? type"
        />

        <span v-if="rules">{{ rules() }}</span>
    </div>
</template>

<style scoped>
div {
    display: grid;
    gap: 0.5rem;
}
span {
    color: tomato;
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
</style>
