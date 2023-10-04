import { describe, expect, test } from "vitest"
import handleLogIn from "../../composables/handleLogin"
import http from "../../composables/http"


describe("CheckAuth", async () => {

    const res = await handleLogIn({email: "owolabisherif87@gmail.com", password: "password"})

    test("That the user was logged in and logged out.", async () => {
        const isLoggedIn = res.status

        expect(isLoggedIn).toBe(true)

        const loggedOut = await http.post("auth/logout", {}, {headers: {"Authorization": `Bearer ${res.token}`}})

        expect(loggedOut.data.status).toBe(true)
        expect(loggedOut.data.message).toEqual("User Logged Out Successfully")
    })
})