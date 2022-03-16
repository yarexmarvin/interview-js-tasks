import { uniqueArrValues } from "../tasks/uniqueArrValues"


test('unique arr values test 1', ()=>{
    expect(uniqueArrValues([1,2,3], [4,1,5], [6,7,8,5])).toEqual([1,2,3,4,5,6,7,8]);
})
test('unique arr values test 2', ()=>{
    expect(uniqueArrValues([1], [2], [3,2,2], [4,1,1,2])).toEqual([1,2,3,4]);
})