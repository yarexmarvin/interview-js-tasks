import { manualFilter } from "../tasks/manualFilter"


test('filter', ()=>{
    expect(manualFilter([1,2,3], n=> n < 3)).toStrictEqual([1,2]);
})