<script setup lang="ts">
import { ref } from 'vue'
import { useSessionGlobalState } from 'composable/useGlobalStates'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import SessionService from 'services/session/session.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'

const form = ref()

async function signIn() {
    const { message, status, token } = await SessionService.signIn({
        email: form.value.email.data,
        password: form.value.password.data
    })

    if (status === 200) {
        useSessionGlobalState().value = token

        return router.push({ name: 'profile' })
    } else {
        AlertMessage.showAlertWithTimer(message, 'warning')
    }
}
</script>

<template>
    <div>
        <FormTemplate
            ref="form"
            @submit.prevent="signIn"
            :expose-email="true"
            :expose-password="true"
            :expose-checkbox="true"
            :expose-options-links="true"
            :expose-submit="{ label: 'entrar' }"
        />
    </div>
</template>
