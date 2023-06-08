import AxiosMethods from 'libs/axios'
import getAuthorizationHeader from '../utils/headers/authorization.header'

const API = String(import.meta.env.VITE_API_CUSTOMER)

export default class CustomerService {
    public static async find(query: QueryOptions) {
        const S = query.sort || 'createdAt'
        const O = query.order || 'desc'
        const L = query.limit || 5

        return AxiosMethods.get<FindCustomerResponseDto>({
            url: API.concat('/find', '?sort=' + S, '?order=' + O, '?limit=' + L),
            headers: getAuthorizationHeader()
        })
    }

    public static async getOwn() {
        return AxiosMethods.get<GetCustomerResponseDto>({
            url: API,
            headers: getAuthorizationHeader()
        })
    }

    public static async signUp(form: CreateCustomerDto) {
        return AxiosMethods.post({ url: API, data: form, headers: getAuthorizationHeader() })
    }

    public static async update(form: UpdateCustomerDto) {
        return AxiosMethods.patch({ url: API, data: form, headers: getAuthorizationHeader() })
    }

    public static async remove() {
        return AxiosMethods.delete({ url: API, headers: getAuthorizationHeader() })
    }
}

type QueryOptions = {
    limit?: number
    order?: 'asc' | 'desc'
    sort?: 'id' | 'firstName' | 'lastName' | 'email' | 'createdAt'
}

type Customer = {
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: Date
}

type CreateCustomerDto = Omit<Customer, 'createdAt'>

type UpdateCustomerDto = Partial<Omit<Customer, 'password' | 'createdAt'>>

type FindCustomerResponseDto = Omit<Customer, 'password' | 'email'>

type GetCustomerResponseDto = Customer
