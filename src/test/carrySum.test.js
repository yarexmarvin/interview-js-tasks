import { carrySum } from "../tasks/currySum"


describe('carring sum', ()=>{

    test('carry sum test 1', ()=>{

        let result1 = +carrySum(5)(3);
        let result2 = carrySum(5)(3)();

        expect(result1).toEqual(8);
        expect(result2).toEqual(8);
    })
})