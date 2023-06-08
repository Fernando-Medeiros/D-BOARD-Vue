import SessionStorage from 'utils/session.storage'

export default function getAuthorizationHeader() {
    const token = SessionStorage.getToken()
    return {
        authorization: 'bearer '.concat(token)
    }
}
