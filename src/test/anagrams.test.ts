import { anagrams, wordToObj } from "../tasks/anagrams";

describe("anagrams", () => {
  test("real anagram", () => {
    expect(anagrams("listen", "silent")).toBeTruthy();
  });
  test("not anagram", () => {
    expect(anagrams("car", "rat")).toBeFalsy();
  });
});

describe('converting word to object', () => { 
   let result = {
     "l": 1,
     "i": 1,
     "s": 1,
     "t": 1,
     "e": 1,
     "n": 1
   }
   expect(wordToObj('listen')).toEqual(result)
 })
