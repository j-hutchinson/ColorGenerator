var randomColor = require('..');

test('randomColor', () => {
    expect(randomColor().length).toBe(7);
});