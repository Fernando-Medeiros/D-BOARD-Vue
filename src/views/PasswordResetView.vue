<script setup lang="ts">
import { ref } from 'vue'
import FormTemplate from 'comps/forms/FormTemplate.vue'
import InputGenericTypes from 'comps/forms/InputGenericTypes.vue'
import InputSubmit from 'comps/forms/InputSubmit.vue'

const password = ref()
const confirmPassword = ref()

function resetPassword() {}
</script>

<template>
    <div>
        <FormTemplate @submit.prevent="resetPassword">
            <template v-slot:one>
                <InputGenericTypes
                    ref="password"
                    :label="'Senha'"
                    :type="'password'"
                    :placeholder="'*********'"
                />
            </template>

            <template v-slot:two>
                <InputGenericTypes
                    ref="confirmPassword"
                    :label="'Confirme a Senha'"
                    :type="'password'"
                    :placeholder="'*********'"
                />
            </template>

            <template v-slot:three>
                <InputSubmit :label="'redefinir'" />
            </template>
        </FormTemplate>
    </div>
</template>

<style scoped></style>
