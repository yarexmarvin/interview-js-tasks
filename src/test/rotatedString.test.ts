import isStringRotated from "../tasks/rotatedString"


it('rotated string', () => {
    expect(isStringRotated('javascript', 'scriptjava')).toBeTruthy();
});
it('rotated string', () => {
    expect(isStringRotated('javascript', 'scriptjavd')).toBeFalsy();
});