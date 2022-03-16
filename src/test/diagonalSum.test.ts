import { diagonalSum, isValidArr } from "../tasks/diagonalSum";

let validArr = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
let invalidArr = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];

describe("diagonal sum", () => {
  test("success sum", () => {
    expect(diagonalSum(validArr)).toEqual(27);
  });

  test("throw arr", () => {
    expect(() => diagonalSum(invalidArr)).toThrow("invalid array");
  });
});

describe("validation arr", () => {
  test("valid arr", () => {
    expect(isValidArr(validArr)).toBeTruthy();
  });

  test("invalid arr", () => {
    expect(isValidArr(invalidArr)).toBeFalsy();
  });
});
