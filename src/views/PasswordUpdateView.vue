<script setup lang="ts">
import { ref } from 'vue'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import InputRegex from 'utils/input.regex'
import PasswordService from 'services/password/password.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'
import InputGenericTypes from 'comps/forms/InputGenericTypes.vue'
import InputSubmit from 'comps/forms/InputSubmit.vue'

const submitForm = ref(false)
const password = ref()
const confirmPassword = ref()

async function updatePassword() {
    const { message, status } = await PasswordService.update({ password: password.value.data })

    if (status === 204) {
        return router.push({ name: 'signin' })
    } else {
        AlertMessage.showAlertWithTimer(message, 'warning')
    }
}

function passwordRules(): string {
    const { result, msg } = InputRegex.testPassword(password.value?.data)
    submitForm.value = result
    return password.value?.data && result === false ? msg : ''
}

function confirmPasswordRules(): string {
    const result = confirmPassword.value?.data === password.value?.data
    submitForm.value = result
    return confirmPassword.value?.data && result === false
        ? 'Confirme a senha, elas devem ser idênticas.'
        : ''
}
</script>

<template>
    <div>
        <FormTemplate @submit.prevent="updatePassword">
            <template v-slot:one>
                <InputGenericTypes
                    ref="password"
                    :label="'Senha'"
                    :type="'password'"
                    :placeholder="'*********'"
                    :autocomplete="'new-password'"
                    :required="true"
                    :rules="passwordRules"
                />
            </template>

            <template v-slot:two>
                <InputGenericTypes
                    ref="confirmPassword"
                    :label="'Confirme a Senha'"
                    :type="'password'"
                    :placeholder="'*********'"
                    autocomplete="'new-password'"
                    :required="true"
                    :rules="confirmPasswordRules"
                />
            </template>

            <template v-slot:three>
                <InputSubmit :label="'atualizar'" />
            </template>
        </FormTemplate>
    </div>
</template>
