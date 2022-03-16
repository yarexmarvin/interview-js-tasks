import { fibonacci } from "../tasks/fibonacci";


describe("fibonacci", () => {
    test("fibonacci 5", () => {
      expect(fibonacci(5)).toEqual(5);
    });
    test("fibonacci 8", () => {
      expect(fibonacci(8)).toEqual(21);
    });
  });