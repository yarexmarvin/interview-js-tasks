import rotate from "../tasks/rotateMatrix";

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

it("rotate matrix", () => {
  expect(rotate(matrix)).toStrictEqual(result);
});