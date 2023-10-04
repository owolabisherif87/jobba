import { describe, expect, test } from "vitest"
import getJobs from "../../composables/getJobs"


describe("getJobs", () => {
    test("That jobs are fetched correctly", async () => {
        const jobs = await getJobs(1, null)

        expect(jobs.data.data.length).toBeGreaterThan(0)
    })
})