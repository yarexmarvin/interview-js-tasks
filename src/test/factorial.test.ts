// const factorial:Factorial = require("./factorial/factorial");

import { factorial } from "../tasks/factorial";

describe("factorial", () => {
  test("factorial 5", () => {
    expect(factorial(5)).toEqual(120);
  });
});
