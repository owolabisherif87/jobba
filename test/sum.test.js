import {expect, test, bench} from "vitest"
import { sum } from "./sum"


test("Add the sum of two numbers", () => {
    expect(sum(2, 4)).toBe(6);
})

bench.only('normal sorting', () => {
  const x = [1, 5, 4, 2, 3]
  x.sort((a, b) => {
    return a - b
  })
})