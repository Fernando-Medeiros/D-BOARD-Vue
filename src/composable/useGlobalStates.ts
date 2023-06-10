import { createGlobalState, useSessionStorage } from '@vueuse/core'

export const useSessionGlobalState = createGlobalState(() => useSessionStorage('token', null || ''))
