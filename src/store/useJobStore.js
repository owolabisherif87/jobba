import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useJobStore = defineStore("job", () => {
    const jobs = ref([])

    function handleUpdateJobStore(payload) {
       jobs.value  = payload
    }

    return {jobs, handleUpdateJobStore}
})