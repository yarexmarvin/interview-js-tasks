import { walkFor10min } from "../tasks/walkFor10min"


test('valid walk', ()=>{
    expect(walkFor10min(['n','s','n','s','n','s','n','s','n','s'])).toBeTruthy;
})
test('valid walk', ()=>{
    expect(walkFor10min(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBeFalsy;
})
test('valid walk', ()=>{
    expect(walkFor10min(['n','n','n','s','n','s','n','s','n','s'])).toBeFalsy;
})