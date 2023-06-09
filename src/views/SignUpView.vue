<script setup lang="ts">
import { ref } from 'vue'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import InputRegex from 'utils/input.regex'
import CustomerService from 'services/customer/customer.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'
import InputGenericTypes from 'comps/forms/InputGenericTypes.vue'
import InputSubmit from 'comps/forms/InputSubmit.vue'

const submitForm = ref(false)
const firstName = ref()
const lastName = ref()
const email = ref()
const password = ref()
const confirmPassword = ref()

async function signUp() {
    if (submitForm.value === false)
        return AlertMessage.showAlertWithTimer(
            'Dados inválidos, preencha corretamente o formulário',
            'warning'
        )

    const { message, status } = await CustomerService.signUp({
        email: email.value.data,
        firstName: firstName.value.data,
        lastName: lastName.value.data,
        password: password.value.data
    })

    if (status === 201) {
        return router.push({ name: 'signin' })
    } else {
        AlertMessage.showAlertWithTimer(message, 'warning')
    }
}

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
    <div>
        <FormTemplate @submit.prevent="signUp">
            <template v-slot:one>
                <InputGenericTypes
                    ref="firstName"
                    :label="'Nome'"
                    :type="'name'"
                    :placeholder="'Example'"
                    :required="true"
                    :rules="firstNameRules"
                />
            </template>

            <template v-slot:two>
                <InputGenericTypes
                    ref="lastName"
                    :label="'Sobrenome'"
                    :type="'name'"
                    :placeholder="'E. Example'"
                    :required="true"
                    :rules="lastNameRules"
                />
            </template>

            <template v-slot:three>
                <InputGenericTypes
                    ref="email"
                    :label="'Email'"
                    :type="'email'"
                    :placeholder="'email@example.com'"
                    :required="true"
                    :rules="emailRules"
                />
            </template>

            <template v-slot:four>
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

            <template v-slot:five>
                <InputGenericTypes
                    ref="confirmPassword"
                    :label="'Confirme a Senha'"
                    :type="'password'"
                    :placeholder="'*********'"
                    :autocomplete="'new-password'"
                    :required="true"
                    :rules="confirmPasswordRules"
                />
            </template>

            <template v-slot:six>
                <InputSubmit :label="'inscrever-se'" />
            </template>
        </FormTemplate>
    </div>
</template>

<style scoped></style>
