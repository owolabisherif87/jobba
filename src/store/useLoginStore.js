import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useLoginStore = defineStore("login", () => {
    const isLogedIn = ref(false)
    const token = ref("")

    function handleLogIn(payload) {
        isLogedIn.value = payload?.status
        token.value = payload?.token

        console.log(payload?.token)

        localStorage.setItem("token", JSON.stringify(payload?.token))
    }


    return {isLogedIn, token, handleLogIn}
})