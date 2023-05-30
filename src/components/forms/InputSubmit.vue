<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
    <div>
        <input type="submit" :value="label" />
    </div>
</template>

<style scoped>
input {
    width: 100%;
    height: 45px;
    align-content: center;
    cursor: pointer;
    text-align: center;
    align-self: center;
    padding: auto;
    font-size: 24px;
    color: white;

    background: linear-gradient(270deg, #42d095 0%, #4250d0 100%);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}
input:hover {
    filter: brightness(1.2);
    transition: all 0.5s;
}
input:disabled {
    filter: grayscale();
    cursor: progress;
}
@media (max-width: 780px) {
    input {
        font-size: 16px;
    }
}
</style>
