<script setup lang="ts">
import { ref } from 'vue'
import FormTemplate from 'comps/forms/FormTemplate.vue'
import InputGenericTypes from 'comps/forms/InputGenericTypes.vue'
import InputSubmit from 'comps/forms/InputSubmit.vue'

const email = ref()

function recoverPassword() {}
</script>

<template>
    <div>
        <FormTemplate @submit.prevent="recoverPassword">
            <template v-slot:one>
                <InputGenericTypes
                    ref="email"
                    :label="'Email'"
                    :type="'email'"
                    :placeholder="'email@example.com'"
                />
            </template>

            <template v-slot:two>
                <InputSubmit :label="'enviar'" />
            </template>
        </FormTemplate>
    </div>
</template>

<style scoped></style>
