import LinkedList from "../src/structures/linkedList";

describe("LinkedList", () => {
  it("should initialize", () => {
    const list = new LinkedList<number>();
    expect(list).toBeDefined();
    expect(list.isEmpty()).toBe(true);
  });

  it("should append to the list", () => {
    const list = new LinkedList<number>();
    list.append(1);
    expect(list.size()).toBe(1);
    expect(list.find(1)).toBeDefined();
  });

  it("should prepend to the list", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.prepend(2);
    expect(list.size()).toBe(2);
    expect(list.find(2)).toBeDefined();
  });

  it("should find an element in the list", () => {
    const list = new LinkedList<number>();
    list.append(1);
    const found = list.find(1);
    expect(found).toBeDefined();
    expect(found!.value).toBe(1); // using the non-null assertion as we expect the value to be defined
  });

  it("should delete an element from the list", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.delete(1);
    expect(list.size()).toBe(0);
    // expect(list.find(1)).toBeNull();
  });

  it("should return the size of the list", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    expect(list.size()).toBe(2);
  });

  it("should check if the list is empty", () => {
    const list = new LinkedList<number>();
    expect(list.isEmpty()).toBe(true);
    list.append(1);
    expect(list.isEmpty()).toBe(false);
  });
});
