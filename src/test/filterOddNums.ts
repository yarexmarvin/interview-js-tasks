import { filterOddNums } from "../tasks/filterOddNums";

test("filter odd nums", () => {
  let numbers = [11, 5, 4, 61, 23, 66, 24, 10, 3, 7];
  let result = [3, 5, 4, 7, 11, 66, 24, 10, 23, 61];

  expect(filterOddNums(numbers)).toEqual(result);
});
