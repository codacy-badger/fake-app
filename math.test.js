const sum = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(sum.sum(1, 2)).toBe(3);
});

test('mutilple 5 x 6 to equal 30', () => {
    expect(sum.multiple(5, 6)).toBe(30);
});