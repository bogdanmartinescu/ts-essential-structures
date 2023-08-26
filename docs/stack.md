# Stack Documentation

`Stack` is a Last-In-First-Out (LIFO) data structure that provides methods for adding and removing elements.

## Table of Contents

- [Initialization](#initialization)
- [Methods](#methods)
  - [push](#push)
  - [pop](#pop)
  - [peek](#peek)
  - [size](#size)
  - [isEmpty](#isempty)
  - [clear](#clear)
- [Events](#events)
- [Debug Mode](#debug-mode)

## Initialization

To create a new stack, simply initialize the `Stack` class:

```typescript
const stack = new Stack<number>();
```

### Options

The `Stack` class constructor can take an optional configuration object:

#### StackOptions

| Property | Type    | Description                                                     |
| -------- | ------- | --------------------------------------------------------------- |
| `debug`  | boolean | (Optional) Enables or disables debug mode. Defaults to `false`. |

When the `debug` option is set to `true`, the `Stack` will emit events and log actions to the console, aiding in development and debugging.

**Example:**

```typescript
const stack = new Stack<number>({ debug: true });
```

## Methods

### `push`

Adds an element to the top of the stack.

```typescript
stack.push(element: T): void;
```

### `pop`

Removes and returns the top element from the stack.

```typescript
stack.pop(): T | undefined;
```

### `peek`

Returns the top element from the stack without removing it.

```typescript
stack.peek(): T | undefined;
```

### `size`

Returns the number of elements in the stack.

```typescript
stack.size(): number;
```

### `isEmpty`

Checks if the stack is empty.

```typescript
stack.isEmpty(): boolean;
```

### `clear`

Removes all elements from the stack.

```typescript
stack.clear(): void;
```
