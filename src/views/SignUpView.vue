<script setup lang="ts">
import { ref } from 'vue'
import router from 'routes/index'
import AlertMessage from 'utils/alert.message'
import CustomerService from 'services/customer/customer.service'
import FormTemplate from 'comps/forms/FormTemplate.vue'
import InputGenericTypes from 'comps/forms/InputGenericTypes.vue'
import InputSubmit from 'comps/forms/InputSubmit.vue'

const firstName = ref()
const lastName = ref()
const email = ref()
const password = ref()
const confirmPassword = ref()

async function signUp() {
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
                />
            </template>

            <template v-slot:two>
                <InputGenericTypes
                    ref="lastName"
                    :label="'Sobrenome'"
                    :type="'name'"
                    :placeholder="'E. Example'"
                />
            </template>

            <template v-slot:three>
                <InputGenericTypes
                    ref="email"
                    :label="'Email'"
                    :type="'email'"
                    :placeholder="'email@example.com'"
                />
            </template>

            <template v-slot:four>
                <InputGenericTypes
                    ref="password"
                    :label="'Senha'"
                    :type="'password'"
                    :placeholder="'*********'"
                />
            </template>

            <template v-slot:five>
                <InputGenericTypes
                    ref="confirmPassword"
                    :label="'Confirme a Senha'"
                    :type="'password'"
                    :placeholder="'*********'"
                />
            </template>

            <template v-slot:six>
                <InputSubmit :label="'inscrever-se'" />
            </template>
        </FormTemplate>
    </div>
</template>

<style scoped></style>
