<script setup lang="ts">
import { ref } from 'vue'
import InputRegex from 'utils/input.regex'
import InputGenericTypes from 'comps/forms/InputGenericTypes.vue'
import InputCheckBox from './InputCheckBox.vue'
import InputSubmit from './InputSubmit.vue'
import IconGithub from 'comps/icons/IconGithub.vue'
import IconLinkedin from 'comps/icons/IconLinkedin.vue'
import LinkToRoute from 'comps/links/LinkToRoute.vue'

defineProps<{
    exposeFirstName?: boolean
    exposeLastName?: boolean
    exposeEmail?: boolean
    exposePassword?: boolean
    exposeConfirmPassword?: boolean
    exposeCheckbox?: boolean
    exposeSubmit: { label: string }
    exposeOptionsLinks?: boolean
}>()

const submitForm = ref(false)

const firstName = ref()
const lastName = ref()
const email = ref()
const checkbox = ref()
const password = ref()
const confirmPassword = ref()

defineExpose({ firstName, lastName, email, checkbox, password, confirmPassword, submitForm })

function firstNameRules(): string {
    const { result, msg } = InputRegex.testFirstName(firstName.value?.data)
    submitForm.value = result
    return firstName.value?.data && result === false ? msg : ''
}

function lastNameRules(): string {
    const { result, msg } = InputRegex.testLastName(lastName.value?.data)
    submitForm.value = result
    return lastName.value?.data && result === false ? msg : ''
}

function emailRules(): string {
    const { result, msg } = InputRegex.testEmail(email.value?.data)
    submitForm.value = result
    return email.value?.data && result === false ? msg : ''
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
    <div class="form-padding">
        <form class="form-login">
            <div v-if="exposeFirstName">
                <InputGenericTypes
                    ref="firstName"
                    :label="'Nome'"
                    :type="'name'"
                    :placeholder="'Example'"
                    :required="true"
                    :rules="firstNameRules"
                />
            </div>

            <div v-if="exposeLastName">
                <InputGenericTypes
                    ref="lastName"
                    :label="'Sobrenome'"
                    :type="'name'"
                    :placeholder="'E. Example'"
                    :required="true"
                    :rules="lastNameRules"
                />
            </div>

            <div v-if="exposeEmail">
                <InputGenericTypes
                    ref="email"
                    :label="'Email'"
                    :type="'email'"
                    :placeholder="'email@example.com'"
                    :required="true"
                    :rules="emailRules"
                />
            </div>

            <div v-if="exposePassword">
                <InputGenericTypes
                    ref="password"
                    :label="'Senha'"
                    :type="'password'"
                    :placeholder="'*********'"
                    :required="true"
                    :rules="passwordRules"
                />
            </div>

            <div v-if="exposeConfirmPassword">
                <InputGenericTypes
                    ref="confirmPassword"
                    :label="'Confirme a Senha'"
                    :type="'password'"
                    :placeholder="'*********'"
                    :autocomplete="'new-password'"
                    :required="true"
                    :rules="confirmPasswordRules"
                />
            </div>

            <div v-if="exposeCheckbox">
                <InputCheckBox ref="checkbox" :label="'lembrar'" />
            </div>

            <div v-if="exposeSubmit">
                <InputSubmit :label="exposeSubmit.label" />
            </div>

            <div v-if="exposeOptionsLinks">
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
            </div>
        </form>
    </div>
</template>

<style scoped>
.form-padding {
    padding: 10px;
}

.form-login {
    display: grid;
    gap: 3rem;
    padding-block: 2rem;
    padding-inline: 1.5rem;
    margin: auto;
    width: 552px;
    border-radius: 40px;
    box-sizing: border-box;
    border: 1px solid rgba(64, 63, 63, 0.01);
    box-shadow: 0px 15px 30px 1px #42d0955d;
}

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

@media (max-width: 780px) {
    .form-login {
        padding-block: 2rem;
        padding-inline: 1rem;
        width: 100%;
    }
}
</style>
