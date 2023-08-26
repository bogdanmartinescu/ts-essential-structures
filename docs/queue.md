# Queue Documentation

`Queue` is a First-In-First-Out (FIFO) data structure that offers methods to enqueue and dequeue elements.

## Table of Contents

- [Initialization](#initialization)
- [Methods](#methods)
  - [enqueue](#enqueue)
  - [dequeue](#dequeue)
  - [peek](#peek)
  - [size](#size)
  - [isEmpty](#isempty)
  - [clear](#clear)
- [Events](#events)
- [Debug Mode](#debug-mode)

## Initialization

To initialize a new queue, instantiate the `Queue` class:

```typescript
const queue = new Queue<number>();
```

### Options

The `Queue` class constructor can take an optional configuration object:

#### QueueOptions

| Property | Type    | Description                                                     |
| -------- | ------- | --------------------------------------------------------------- |
| `debug`  | boolean | (Optional) Enables or disables debug mode. Defaults to `false`. |

```typescript
const queue = new Queue<number>({ debug: true });
```

## Methods

### `enqueue`

Adds an element to the end of the queue.

```typescript
queue.enqueue(element: T): void;
```

### `dequeue`

Removes and returns the front element from the queue.

```typescript
queue.dequeue(): T | undefined;
```

### `peek`

Returns the front element from the queue without removing it.

```typescript
queue.peek(): T | undefined;
```

### `size`

Returns the number of elements in the queue.

```typescript
queue.size(): number;
```

### `isEmpty`

Checks if the queue is empty.

```typescript
queue.isEmpty(): boolean;
```

### `clear`

Removes all elements from the queue.

```typescript
queue.clear(): void;
```

## Events

The `Queue` class can emit events when in debug mode. Possible emitted events are:

- `enqueue`: When an element is added to the queue.
- `dequeue`: When an element is removed from the queue.
- `peek`: When the front element of the queue is viewed without removal.
- `clear`: When all elements of the queue are cleared.

```typescript
queue.on("enqueue", (item) => {
  console.log("Item enqueued:", item);
});
```

## Debug Mode

When the `debug` option is true, the `Queue` will emit events. This can be helpful for development and debugging.
