import { flatArr } from "../tasks/flatArr";

describe("flat arr", () => {
  test("flat arr", () => {
    expect(flatArr([1, [2], [3, [4], 5], 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
