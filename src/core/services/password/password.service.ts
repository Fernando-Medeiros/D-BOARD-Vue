import AxiosMethods from 'libs/axios'
import getAuthorizationHeader from '../utils/headers/authorization.header'

const API = String(import.meta.env.VITE_API_PASSWORD)

export default class PasswordService {
    public static async recover(form: RecoverPasswordDto) {
        return AxiosMethods.post({ url: API, data: form })
    }

    public static async reset(token: string, form: UpdatePasswordDto) {
        return AxiosMethods.put({ url: API.concat('/', token), data: form })
    }

    public static async update(form: UpdatePasswordDto) {
        return AxiosMethods.patch({ url: API, data: form, headers: getAuthorizationHeader() })
    }
}

type RecoverPasswordDto = { email: string }
type UpdatePasswordDto = { password: string }
