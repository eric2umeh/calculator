import operate from './operate';

test("let's test the operate.js", () => {
  expect(operate(2, 7, '+')).toBe('9');
  expect(operate(4, 3, '-')).toBe('1');
  expect(operate(5, 2, 'x')).toBe('10');
  expect(operate(10, 5, '÷')).toBe('2');
  expect(operate(5, 3, '%')).toBe('2');
  expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  expect(operate(8, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});
