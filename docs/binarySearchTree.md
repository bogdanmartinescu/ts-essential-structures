# Binary Search Tree

The Binary Search Tree (BST) is a tree data structure in which each node has at most two children, referred to as the left child and the right child. For each node, all elements in the left subtree are less than the node, and all elements in the right subtree are greater than the node.

## Constructor

```typescript
new BinarySearchTree<T>();
```

Creates a new empty binary search tree.

## Methods

### insert

```typescript
insert(value: T): void;
```

Inserts a new value into the BST.

### search

```typescript
search(value: T): boolean;
```

Searches for a value in the BST. Returns \`true\` if the value exists, otherwise \`false\`.

### remove

```typescript
remove(value: T): void;
```

Removes a value from the BST. If the value does not exist in the BST, the structure remains unchanged.

### inOrderTraverse

```typescript
inOrderTraverse(callback: (value: T) => void): void;
```

Traverses the BST in in-order (ascending) and executes the provided callback function for each value.

### preOrderTraverse

```typescript
preOrderTraverse(callback: (value: T) => void): void;
```

Traverses the BST in pre-order and executes the provided callback function for each value.

### postOrderTraverse

```typescript
postOrderTraverse(callback: (value: T) => void): void;
```

Traverses the BST in post-order and executes the provided callback function for each value.

### min

```typescript
min(): T | null;
```

Returns the minimum value from the BST. If the BST is empty, returns \`null\`.

### max

```typescript
max(): T | null;
```

Returns the maximum value from the BST. If the BST is empty, returns \`null\`.

## Example

```typescript
const bst = new BinarySearchTree\<number\>();
bst.insert(5);
bst.insert(3);
bst.insert(8);
console.log(bst.search(3)); // Outputs: true
bst.remove(3);
console.log(bst.search(3)); // Outputs: false
```

This documentation provides a basic overview of the BinarySearchTree class and its associated methods. For a deeper dive, consult the source code and associated test cases.
