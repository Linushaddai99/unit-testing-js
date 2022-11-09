const string = require('./string')

test('proper returns the length of a string', () => {
    const newString = 'majes';
    const newString_length = newString.length;
    expect(string(newString)).toBe(newString_length);
});