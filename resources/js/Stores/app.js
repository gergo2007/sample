import {computed, ref, watch} from 'vue'
import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', () => {
    /**
     * App device ID.
     *
     * @type {null|string}
     */
    const appId = ref(null)

    return {
        appId,
    }
})
