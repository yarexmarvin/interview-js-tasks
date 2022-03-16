import { maxNumInArr } from "../tasks/maxNumInArr";

describe("max num", () => {
  let arr = [
    [1, 2, 3, 4],
    [5, 18, 0, 12],
    [3, 5, 12, 5],
    [28, 9, 2, 34],
  ];

  let result = [4, 18, 12, 34];
  test("max num in arr", () => {
    expect(maxNumInArr(arr)).toEqual(result);
  });
});
