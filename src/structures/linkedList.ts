import { EventEmitter } from "events";

interface LinkedListOptions {
  debug?: boolean;
}

class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export default class LinkedList<T> extends EventEmitter {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private isDebugMode: boolean = false;

  constructor(options?: LinkedListOptions) {
    super();
    if (options && options.debug) {
      this.isDebugMode = options.debug;
    }
  }

  private emitEvent(eventName: string, value?: T) {
    if (this.isDebugMode) {
      this.emit(eventName, value);
    }
  }

  append(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.emitEvent("append", value);
  }

  prepend(value: T): void {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    this.emitEvent("prepend", value);
  }

  delete(value: T): void {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.emitEvent("delete", value);
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.emitEvent("delete", value);
    }

    if (!current.next) {
      this.tail = current;
    }
  }

  find(value: T): Node<T> | undefined {
    if (!this.head) return;

    let current: Node<T> | null = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }

    return current ? current : undefined;
  }

  size(): number {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  isEmpty(): boolean {
    return this.head === null;
  }
}
