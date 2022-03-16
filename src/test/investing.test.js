import { investing } from "../tasks/investing"


test("maximum profit", ()=>{
    expect(investing([1,2,3,4,5,6])).toBe(15);
})
test("maximum profit", ()=>{
    expect(investing([1,2,4,1,3])).toBe(7);
})