import { luckyNums } from "../tasks/luckyNums";


describe("lucky numbers", ()=>{
    test("test 1", ()=> {
        let number = 122333445555;
        expect(luckyNums(number)).toEqual(3);
    })
})