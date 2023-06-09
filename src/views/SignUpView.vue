<script setup lang="ts">
import { ref } from 'vue'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import CustomerService from 'services/customer/customer.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'

const form = ref()

async function signUp() {
    if (form.value.submitForm === false)
        return AlertMessage.showAlertWithTimer(
            'Dados inválidos, preencha corretamente o formulário',
            'warning'
        )

    const { message, status } = await CustomerService.signUp({
        email: form.value.email.data,
        firstName: form.value.firstName.data,
        lastName: form.value.lastName.data,
        password: form.value.password.data
    })

    if (status === 201) {
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
            @submit.prevent="signUp"
            :exposeFirstName="true"
            :exposeLastName="true"
            :expose-email="true"
            :expose-password="true"
            :exposeConfirmPassword="true"
            :expose-submit="{ label: 'inscrever-se' }"
        />
    </div>
</template>
