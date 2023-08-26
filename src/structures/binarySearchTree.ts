class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export default class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): boolean {
    if (!node) return false;

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  inOrderTraverse(callback: (value: T) => void): void {
    this.inOrderTraverseNode(this.root, callback);
  }

  private inOrderTraverseNode(
    node: TreeNode<T> | null,
    callback: (value: T) => void
  ): void {
    if (node) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.value);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback: (value: T) => void): void {
    this.preOrderTraverseNode(this.root, callback);
  }

  private preOrderTraverseNode(
    node: TreeNode<T> | null,
    callback: (value: T) => void
  ): void {
    if (node) {
      callback(node.value);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback: (value: T) => void): void {
    this.postOrderTraverseNode(this.root, callback);
  }

  private postOrderTraverseNode(
    node: TreeNode<T> | null,
    callback: (value: T) => void
  ): void {
    if (node) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.value);
    }
  }

  remove(value: T): void {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // deleting node with one child or no child
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      // deleting node with two children
      // minNode of the right subtree is stored in node
      node.value = this.findMinNode(node.right).value;
      node.right = this.removeNode(node.right, node.value);
      return node;
    }
  }

  private findMinNode(node: TreeNode<T> | null): TreeNode<T> {
    if (!node) throw new Error("Node must not be null");
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }
}
