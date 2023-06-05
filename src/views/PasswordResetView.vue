<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import PasswordService from 'services/password/password.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'
import InputGenericTypes from 'comps/forms/InputGenericTypes.vue'
import InputSubmit from 'comps/forms/InputSubmit.vue'

onBeforeMount(() => {
    const { token } = useRoute().query
    if (String(token).length < 110) return router.push({ name: 'signin' })
})

const password = ref()
const confirmPassword = ref()

async function resetPassword() {
    const { token } = useRoute().query

    const { message, status } = await PasswordService.reset(String(token), {
        password: password.value.data
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
