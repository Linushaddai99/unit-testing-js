const string = require('./reverseString')

test('properly reverse a string', () => {
    const newString = 'majesty';
    expect(string(newString)).toBe('ytsejam');
})