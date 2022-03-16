import { missingNum } from "../tasks/missingNum";

describe("missing num", () => {
  test("missing 8", () => {
    let numbers = [1, 4, 2, 1, 3, 5, 6, 7, 9];
    expect(missingNum(numbers)).toEqual([8]);
  });
});
