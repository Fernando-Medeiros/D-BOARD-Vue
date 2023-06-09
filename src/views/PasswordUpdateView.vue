<script setup lang="ts">
import { ref } from 'vue'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import PasswordService from 'services/password/password.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'

const form = ref()

async function updatePassword() {
    if (form.value.submitForm === false)
        return AlertMessage.showAlertWithTimer(
            'Dados inválidos, preencha corretamente o formulário',
            'warning'
        )

    const { message, status } = await PasswordService.update({ password: form.value.password.data })

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
            @submit.prevent="updatePassword"
            :expose-password="true"
            :exposeConfirmPassword="true"
            :expose-submit="{ label: 'atualizar' }"
        />
    </div>
</template>
