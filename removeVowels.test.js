// removeVowels.test.js
import { expect, test } from "vitest";
import { removeVowels } from "./marie";

test("adds 1 + 2 to equal 3", () => {
  expect(removeVowels("bonjour")).toBe("bnjr");
  expect(removeVowels("bonjour")).toBe("bnjr");
});
