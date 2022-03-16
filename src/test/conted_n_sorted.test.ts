import { counted, counted_n_sorted } from "../tasks/counted_n_sorted";

describe("counted and sorted", () => {
  const fruits = [
    "banana",
    "grapefruit",
    "banana",
    "grapefruit",
    "banana",
    "apple",
    "banana",
    "mango",
    "lemon",
    "mango",
  ];
  const mainResult = ["banana", "grapefruit", "mango", "apple", "lemon"];

  const countResult = {
    banana: 4,
    grapefruit: 2,
    mango: 2,
    apple: 1,
    lemon: 1,
  };

  test("counting", () => {
    expect(counted(fruits)).toStrictEqual(countResult);
  });

  test("main", () => {
    expect(counted_n_sorted(fruits)).toStrictEqual(mainResult);
  });
});
