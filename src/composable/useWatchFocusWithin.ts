import { watch, type Ref } from 'vue'
import { useFocusWithin } from '@vueuse/core'

export default function watchFocusWithin(ref: Ref, callback: CallableFunction) {
    watch(useFocusWithin(ref).focused, (focused) => {
        if (focused) callback()
    })
}
