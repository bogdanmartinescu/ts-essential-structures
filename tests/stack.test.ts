import Stack from "../src/structures/stack";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it("initializes correctly", () => {
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it("pushes an element onto the stack", () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(1);
  });

  it("pops an element off the stack", () => {
    stack.push(1);
    const item = stack.pop();
    expect(item).toBe(1);
    expect(stack.size()).toBe(0);
  });

  it("peeks the top element without popping", () => {
    stack.push(2);
    const item = stack.peek();
    expect(item).toBe(2);
    expect(stack.size()).toBe(1);
  });

  it("checks if the stack is empty", () => {
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(3);
    expect(stack.isEmpty()).toBeFalsy();
  });

  it("clears the stack", () => {
    stack.push(4);
    stack.clear();
    expect(stack.size()).toBe(0);
  });

  it("emits events in debug mode", (done) => {
    const debugStack = new Stack<number>({ debug: true });
    debugStack.on("push", (item: number) => {
      expect(item).toBe(5);
      done();
    });
    debugStack.push(5);
  });
});
