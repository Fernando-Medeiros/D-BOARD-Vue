<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import InputRegex from 'utils/input.regex'
import PasswordService from 'services/password/password.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'
import InputGenericTypes from 'comps/forms/InputGenericTypes.vue'
import InputSubmit from 'comps/forms/InputSubmit.vue'

onBeforeMount(() => {
    const { token } = router.currentRoute.value.query
    if (String(token).length < 110) return router.push({ name: 'signin' })
})

const submitForm = ref(false)
const password = ref()
const confirmPassword = ref()

async function resetPassword() {
    if (submitForm.value === false)
        return AlertMessage.showAlertWithTimer(
            'Dados inválidos, preencha corretamente o formulário',
            'warning'
        )

    const { token } = router.currentRoute.value.query

    const { message, status } = await PasswordService.reset(String(token), {
        password: password.value.data
    })

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
        <FormTemplate @submit.prevent="resetPassword">
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
                <InputSubmit :label="'redefinir'" />
            </template>
        </FormTemplate>
    </div>
</template>
