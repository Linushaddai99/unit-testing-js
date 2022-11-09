const capitalize = require('./capitalize');

test('to properly capitalize the firs letter of a word', () => {
    expect(capitalize('seko')).toBe('Seko');
    expect(capitalize('linus')).toBe('Linus');
    expect(capitalize('shaddai')).toBe('Shaddai');
});