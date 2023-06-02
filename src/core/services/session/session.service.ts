import AxiosMethods from 'libs/axios'

const ApiSignIn = String(process.env.VITE_API_SIGNIN)

const ApiRefresh = String(process.env.VITE_API_REFRESH)

export default class SessionService {
    public static async signIn(form: AuthenticateCustomerDto) {
        return AxiosMethods.post({ url: ApiSignIn, data: form })
    }

    public static async keepSessionWithRefreshToken() {
        return AxiosMethods.post({ url: ApiRefresh })
    }
}

type AuthenticateCustomerDto = { email: string; password: string }
