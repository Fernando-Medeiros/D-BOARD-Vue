<script setup lang="ts">
import { ref } from 'vue'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import SessionStorage from 'utils/session.storage'
import SessionService from 'services/session/session.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'
import InputGenericTypes from 'comps/forms/InputGenericTypes.vue'
import InputCheckBoxVue from 'comps/forms/InputCheckBox.vue'
import InputSubmit from 'comps/forms/InputSubmit.vue'
import IconGithub from 'comps/icons/IconGithub.vue'
import IconLinkedin from 'comps/icons/IconLinkedin.vue'
import LinkToRoute from 'comps/links/LinkToRoute.vue'

const email = ref()
const password = ref()
const checkbox = ref()

async function signIn() {
    const { message, status, token } = await SessionService.signIn({
        email: email.value.data,
        password: password.value.data
    })

    if (status === 200) {
        SessionStorage.setToken(token)

        return router.push({ name: 'profile' })
    } else {
        AlertMessage.showAlertWithTimer(message, 'warning')
    }
}
</script>

<template>
    <div>
        <FormTemplate @submit.prevent="signIn">
            <template v-slot:one>
                <InputGenericTypes
                    ref="email"
                    :label="'Email'"
                    :type="'email'"
                    :placeholder="'email@example.com'"
                    :required="true"
                />
            </template>

            <template v-slot:two>
                <InputGenericTypes
                    ref="password"
                    :label="'Senha'"
                    :type="'password'"
                    :placeholder="'*********'"
                    :required="true"
                />
            </template>

            <template v-slot:three>
                <InputCheckBoxVue ref="checkbox" :label="'lembrar'" />
            </template>

            <template v-slot:four>
                <InputSubmit :label="'entrar'" />
            </template>

            <template v-slot:five>
                <div class="form-options">
                    <span class="options-icons">
                        <IconGithub />
                        <IconLinkedin />
                    </span>

                    <span class="options-links">
                        <LinkToRoute :route="'/signup'" :label="'inscrever-se'" />
                        <LinkToRoute :route="'/password/recover'" :label="'esqueceu a senha?'" />
                    </span>
                </div>
            </template>
        </FormTemplate>
    </div>
</template>

<style scoped>
.form-options {
    display: flex;
    align-items: end;
    justify-content: space-between;
}
.options-icons {
    display: flex;
    gap: 1rem;
}
.options-links {
    display: grid;
    gap: 10px;
    text-align: right;
}
</style>
