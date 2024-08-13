import { sum, sub, mul, div } from "./index";

describe("test Math", () => {
  test("test sum", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(3, 4)).toBe(7);
  });

  test("test minus", () => {
    expect(sub(3, 2)).toBe(1);
    expect(sub(10, 7)).toBe(3);
  });

  test("test mul", () => {
    expect(mul(2, 3)).toBe(6);
    expect(mul(5, 6)).toBe(30);
  });

  test("test div", () => {
    expect(div(6, 3)).toBe(2);
    expect(div(10, 5)).toBe(2);
  });
});
