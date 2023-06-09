<script setup lang="ts">
import { ref } from 'vue'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import PasswordService from 'services/password/password.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'

const form = ref()

async function resetPassword() {
    if (form.value.submitForm === false)
        return AlertMessage.showAlertWithTimer(
            'Dados inválidos, preencha corretamente o formulário',
            'warning'
        )

    const { token } = router.currentRoute.value.query

    const { message, status } = await PasswordService.reset(String(token), {
        password: form.value.password.data
    })

    if (status === 204) {
        return router.push({ name: 'signin' })
    } else {
        AlertMessage.showAlertWithTimer(message, 'warning')
    }
}
</script>

<template>
    <div>
        <FormTemplate
            ref="form"
            @submit.prevent="resetPassword"
            :expose-password="true"
            :exposeConfirmPassword="true"
            :expose-submit="{ label: 'redefinir' }"
        />
    </div>
</template>
