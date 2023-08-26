import BinarySearchTree from "../src/structures/binarySearchTree";

describe("BinarySearchTree", () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree<number>();
  });

  test("should insert values correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(8);

    expect(bst.search(5)).toBeTruthy();
    expect(bst.search(3)).toBeTruthy();
    expect(bst.search(8)).toBeTruthy();
    expect(bst.search(10)).toBeFalsy();
  });

  test("should traverse in-order correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(8);
    bst.insert(1);
    bst.insert(4);
    bst.insert(7);
    bst.insert(10);

    const result: number[] = [];
    bst.inOrderTraverse((value) => result.push(value));

    expect(result).toEqual([1, 3, 4, 5, 7, 8, 10]);
  });

  test("should traverse pre-order correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(8);
    bst.insert(1);
    bst.insert(4);
    bst.insert(7);
    bst.insert(10);

    const result: number[] = [];
    bst.preOrderTraverse((value) => result.push(value));

    expect(result).toEqual([5, 3, 1, 4, 8, 7, 10]);
  });

  test("should traverse post-order correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(8);
    bst.insert(1);
    bst.insert(4);
    bst.insert(7);
    bst.insert(10);

    const result: number[] = [];
    bst.postOrderTraverse((value) => result.push(value));

    expect(result).toEqual([1, 4, 3, 7, 10, 8, 5]);
  });

  test("should remove leaf nodes correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.remove(3);

    expect(bst.search(3)).toBeFalsy();
  });

  test("should remove nodes with one child correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(4);
    bst.remove(3);

    expect(bst.search(3)).toBeFalsy();
    expect(bst.search(4)).toBeTruthy();
  });

  test("should remove nodes with two children correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(8);
    bst.insert(1);
    bst.insert(4);
    bst.insert(7);
    bst.insert(10);

    bst.remove(5);

    expect(bst.search(5)).toBeFalsy();
    expect(bst.search(4)).toBeTruthy();
    expect(bst.search(8)).toBeTruthy();
  });

  test("should return true for existing values and false for non-existing", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(8);

    expect(bst.search(5)).toBeTruthy();
    expect(bst.search(3)).toBeTruthy();
    expect(bst.search(8)).toBeTruthy();
    expect(bst.search(1)).toBeFalsy();
    expect(bst.search(10)).toBeFalsy();
  });
});
