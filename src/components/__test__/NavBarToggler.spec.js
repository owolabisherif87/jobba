import { mount, shallowMount, RouterLinkStub } from "@vue/test-utils"
import {describe, test, expect, vi, beforeEach} from "vitest"
import NavBar from "../NavBar.vue"
import { createTestingPinia } from '@pinia/testing'

vi.mock("vue-router")
describe("NavBar Component Test", () => {
    test("That the toggler button is visible", async () => {
        const wrapper = mount(NavBar, {
            global: {
                plugins: [createTestingPinia()]
            },
            stubs: ["router-link"]
        })

        const btn = wrapper.find(".navbar-toggler")

        await btn.trigger("click")

        expect(!wrapper.find(".show").exists()).toBe(true)
    })


    test("That the toggler button is not visible", async () => {
        const wrapper = mount(NavBar, {
            global: {
                plugins: [createTestingPinia()]
            },
            stubs: ["router-link"]
        })

        const btn = wrapper.find(".navbar-toggler")

        await btn.trigger("click")

        expect(wrapper.find(".show").exists()).toBe(false)
    })
})
