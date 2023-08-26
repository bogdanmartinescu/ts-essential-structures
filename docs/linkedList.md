# LinkedList Documentation

A `LinkedList` is a data structure consisting of a group of nodes which together represent a sequence. Each node is composed of data and a reference (in other words, a link) to the next node in the sequence.

## Table of Contents

- [Initialization](#initialization)
- [Methods](#methods)
  - [append](#append)
  - [prepend](#prepend)
  - [find](#find)
  - [delete](#delete)
  - [isEmpty](#isempty)
  - [print](#print)

## Initialization

To initialize a new linked list, instantiate the `LinkedList` class:

```typescript
const list = new LinkedList<number>();
```

## Methods

### `append`

Adds an element to the end of the linked list.

```typescript
list.append(value: T): void;
```

### `prepend`

Adds an element to the beginning of the linked list.

```typescript
list.prepend(value: T): void;
```

### `find`

Searches for an element with the given value in the linked list.

```typescript
list.find(value: T): Node<T> | null;
```

### `delete`

Removes an element with the given value from the linked list.

```typescript
list.delete(value: T): void;
```

### `isEmpty`

Checks if the linked list is empty.

```typescript
list.isEmpty(): boolean;
```

### `print`

Returns a string representation of the linked list.

```typescript
list.print(): string;
```
