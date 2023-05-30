<script setup lang="ts"></script>

<template>
    <div>
        <form class="form-login">
            <slot name="one"></slot>
            <slot name="two"></slot>
            <slot name="three"></slot>
            <slot name="four"></slot>
            <slot name="five"></slot>
            <slot name="six"></slot>
            <slot name="seven"></slot>
            <slot name="eight"></slot>
            <slot name="nine"></slot>
            <slot name="ten"></slot>
        </form>
    </div>
</template>

<style scoped>
div {
    padding: 10px;
}

.form-login {
    display: grid;
    gap: 3rem;
    padding-block: 2rem;
    padding-inline: 1.5rem;
    margin: auto;
    width: 552px;
    border-radius: 40px;
    box-sizing: border-box;
    border: 1px solid rgba(64, 63, 63, 0.01);
    box-shadow: 0px 15px 30px 1px #42d0955d;
}

@media (max-width: 780px) {
    .form-login {
        padding-block: 2rem;
        padding-inline: 1rem;
        width: 100%;
    }
    .form-options {
        padding-inline: 10px;
    }
}
</style>
