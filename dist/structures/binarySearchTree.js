"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (!node.right) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(node, value) {
        if (!node)
            return false;
        if (value < node.value) {
            return this.searchNode(node.left, value);
        }
        else if (value > node.value) {
            return this.searchNode(node.right, value);
        }
        else {
            return true;
        }
    }
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback) {
        if (node) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node, callback) {
        if (node) {
            callback(node.value);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback) {
        if (node) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.value);
        }
    }
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }
    removeNode(node, value) {
        if (!node)
            return null;
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        }
        else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        }
        else {
            // deleting node with one child or no child
            if (!node.left) {
                return node.right;
            }
            else if (!node.right) {
                return node.left;
            }
            // deleting node with two children
            // minNode of the right subtree is stored in node
            node.value = this.findMinNode(node.right).value;
            node.right = this.removeNode(node.right, node.value);
            return node;
        }
    }
    findMinNode(node) {
        if (!node)
            throw new Error("Node must not be null");
        while (node && node.left) {
            node = node.left;
        }
        return node;
    }
}
exports.default = BinarySearchTree;
