import axios, { AxiosError, type AxiosResponse } from 'axios'

export default class AxiosMethods {
    public static async get({ url, headers }: Request): Promise<Response> {
        return axios.get(url, { headers }).then(hasThen).catch(hasCatch)
    }

    public static async post({ url, data, headers }: Request): Promise<Response> {
        return axios.post(url, data, { headers }).then(hasThen).catch(hasCatch)
    }

    public static async patch({ url, data, headers }: Request): Promise<Response> {
        return axios.patch(url, data, { headers }).then(hasThen).catch(hasCatch)
    }

    public static async put({ url, data, headers }: Request): Promise<Response> {
        return axios.put(url, data, { headers }).then(hasThen).catch(hasCatch)
    }

    public static async delete({ url, headers }: Request): Promise<Response> {
        return axios.delete(url, { headers }).then(hasThen).catch(hasCatch)
    }
}

function hasThen({ data, status }: AxiosResponse) {
    return { ...data, status }
}

function hasCatch({ response }: AxiosError) {
    return response?.data
}

type Headers = {
    authorization?: string
}

type Response = {
    message: string
    status: 200 | 201 | 204 | 400 | 401 | 403 | 404 | 409 | 500
}

type Request = {
    url: string
    data?: object
    headers?: Headers
}
