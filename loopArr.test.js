// loopArr.test.js
import { expect, test } from "vitest";
import { loopArr } from "./kataLoopArr";

test("MyTest", () => {
  expect(loopArr([1, 2, 3, 4], "left", 2)).toStrictEqual([3, 4, 1, 2]);
});

test("Test de codewars", () => {
  expect(loopArr([1, 5, 87, 45, 8, 8], "left", 2)).toStrictEqual([
    87, 45, 8, 8, 1, 5,
  ]);
});

test("Test2 de codewars", () => {
  expect(loopArr([1, 5, 87, 45, 8, 8], "right", 2)).toStrictEqual([
    8, 8, 1, 5, 87, 45,
  ]);
});
