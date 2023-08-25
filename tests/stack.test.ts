import { Stack } from "../src/structures/stack";

describe("Stack", () => {
  it("should push and pop", () => {
    const stack = new Stack<number>();
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });
  // More tests...
});
