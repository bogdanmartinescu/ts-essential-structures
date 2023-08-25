# TSDataStructures

TSDataStructures is a TypeScript-focused library that offers classic, strongly-typed data structures such as Stack, Queue, LinkedList, and more.

## Features

- Strongly-typed implementations.
- Generic support to accommodate various data types.
- Comprehensive unit tests for each data structure.
- Detailed documentation to assist users.
- Emits an event when your data is queried or modified

## Installation

```bash
npm install tsdatastructures --save
```

## Usage

```bash
import { Stack } from 'tsdatastructures';

const numStack = new Stack<number>();
numStack.push(5);
console.log(numStack.peek()); // 5
```

## Documentation

For detailed documentation on each data structure and their methods, check out the docs directory.

## Contributing

We welcome contributions! If you find a bug or have suggestions, please open an issue. If you'd like to contribute code, open a pull request.

## License

MIT
