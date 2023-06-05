import AxiosMethods from 'libs/axios'

const ApiSignIn = String(import.meta.env.VITE_API_SIGNIN)

const ApiRefresh = String(import.meta.env.VITE_API_REFRESH)

export default class SessionService {
    public static async signIn(form: AuthenticateCustomerDto) {
        return AxiosMethods.post<SessionResponseDto>({ url: ApiSignIn, data: form })
    }

    public static async keepSessionWithRefreshToken() {
        return AxiosMethods.post<SessionResponseDto>({ url: ApiRefresh })
    }
}

type AuthenticateCustomerDto = { email: string; password: string }

type SessionResponseDto = { token: string; type: string }
