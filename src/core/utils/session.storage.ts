export default class SessionStorage {
    public static getToken(): string {
        return sessionStorage.getItem('token') || ''
    }

    public static setToken(token: string): void {
        sessionStorage.setItem('token', token)
    }

    public static removeToken(): void {
        sessionStorage.removeItem('token')
    }
}
