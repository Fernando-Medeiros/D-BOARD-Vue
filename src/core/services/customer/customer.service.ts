import AxiosMethods from 'libs/axios'

const API = String(process.env.VITE_API_CUSTOMER)

export default class CustomerService {
    public static async find(query: QueryOptions) {
        const S = query.sort || 'createdAt'
        const O = query.order || 'desc'
        const L = query.limit || 5

        return AxiosMethods.get({
            url: API.concat('/find', '?sort=' + S, '?order=' + O, '?limit=' + L)
        })
    }

    public static async getOwn() {
        return AxiosMethods.get({ url: API })
    }

    public static async signUp(form: CreateCustomerDto) {
        return AxiosMethods.post({ url: API, data: form })
    }

    public static async update(form: UpdateCustomerDto) {
        return AxiosMethods.patch({ url: API, data: form })
    }

    public static async remove() {
        return AxiosMethods.delete({ url: API })
    }
}

type QueryOptions = {
    limit?: number
    order?: 'asc' | 'desc'
    sort?: 'id' | 'firstName' | 'lastName' | 'email' | 'createdAt'
}

type CreateCustomerDto = {
    firstName: string
    lastName: string
    email: string
    password: string
}

type UpdateCustomerDto = Partial<Omit<CreateCustomerDto, 'password'>>
