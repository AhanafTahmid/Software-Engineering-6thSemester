const {add, subtract} = require('./calculator')
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);//wrong expected value
});

test('adds 1 + 4 to equal 5', () => {
    expect(add(1, 4)).toBe(5);
});
test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('adding positive numbers should not be zero', () => {
    for(let i=1;i<=10;i++){
        expect(add(i, i)).not.toBe(0);
    }
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(4);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});