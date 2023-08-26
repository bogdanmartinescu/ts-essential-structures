interface IStack<T> {
  push(element: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

interface IQueue<T> {
  enqueue(element: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

interface ILinkedList<T> {
  append(element: T): void;
  insert(position: number, element: T): boolean;
  remove(element: T): T | null;
  removeAt(position: number): T | null;
  indexOf(element: T): number;
  isEmpty(): boolean;
  size(): number;
  toString(): string;
}

interface IBinaryTree<T> {
  insert(element: T): void;
  remove(element: T): void;
  find(element: T): boolean;
  inorderTraversal(callback: (node: T) => void): void;
  preorderTraversal(callback: (node: T) => void): void;
  postorderTraversal(callback: (node: T) => void): void;
}

interface IHashMap<K, V> {
  set(key: K, value: V): void;
  get(key: K): V | undefined;
  remove(key: K): boolean;
  has(key: K): boolean;
  keys(): K[];
  values(): V[];
  size(): number;
}

interface IGraph<T> {
  addVertex(vertex: T): void;
  addEdge(v1: T, v2: T): void;
  removeVertex(vertex: T): void;
  removeEdge(v1: T, v2: T): void;
  getAdjacentVertices(vertex: T): T[];
  degree(vertex: T): number;
  size(): number;
}
