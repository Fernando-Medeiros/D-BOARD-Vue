<script setup lang="ts">
import { ref } from 'vue'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import PasswordService from 'services/password/password.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'

const form = ref()

async function recoverPassword() {
    const { message, status } = await PasswordService.recover({ email: form.value.email.data })

    if (status === 200) {
        AlertMessage.showAlertWithTimer(message, 'success')
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
            @submit.prevent="recoverPassword"
            :expose-email="true"
            :expose-submit="{ label: 'enviar' }"
        />
    </div>
</template>
