declare class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    constructor(value: T);
}
export default class BinarySearchTree<T> {
    root: TreeNode<T> | null;
    insert(value: T): void;
    private insertNode;
    search(value: T): boolean;
    private searchNode;
    inOrderTraverse(callback: (value: T) => void): void;
    private inOrderTraverseNode;
    preOrderTraverse(callback: (value: T) => void): void;
    private preOrderTraverseNode;
    postOrderTraverse(callback: (value: T) => void): void;
    private postOrderTraverseNode;
    remove(value: T): void;
    private removeNode;
    private findMinNode;
}
export {};
