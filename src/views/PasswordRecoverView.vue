<script setup lang="ts">
import { ref } from 'vue'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import PasswordService from 'services/password/password.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'
import InputGenericTypes from 'comps/forms/InputGenericTypes.vue'
import InputSubmit from 'comps/forms/InputSubmit.vue'

const email = ref()

async function recoverPassword() {
    const { message, status } = await PasswordService.recover({ email: email.value.data })

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
