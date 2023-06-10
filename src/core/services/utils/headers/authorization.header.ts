import { useSessionGlobalState } from 'composable/useGlobalStates'

export default function getAuthorizationHeader() {
    const token = useSessionGlobalState().value
    return {
        authorization: 'bearer '.concat(token)
    }
}
