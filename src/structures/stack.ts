import { EventEmitter } from "events";

interface StackOptions {
  debug?: boolean;
}

export default class Stack<T> extends EventEmitter implements IStack<T> {
  private items: T[] = [];
  private isDebugMode: boolean = false;

  constructor(options?: StackOptions) {
    super();
    if (options && options.debug) this.isDebugMode = options.debug;
  }

  private emitEvent(eventName: string, item: T) {
    if (this.isDebugMode) {
      this.emit(eventName, item);
      // console.warn("Event ", eventName, "has been performed on item ", item);
    }
  }

  push(element: T): void {
    this.items.push(element);
    this.emitEvent("push", element);
  }

  pop(): T | undefined {
    const poppedItem = this.items.pop();
    if (poppedItem) this.emitEvent("pop", poppedItem);
    return poppedItem;
  }

  peek(): T | undefined {
    const peekedItem = this.items[this.items.length - 1];
    if (peekedItem) this.emitEvent("peek", peekedItem);
    return peekedItem;
  }

  size(): number {
    let len = this.items.length;
    return len;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }
}
