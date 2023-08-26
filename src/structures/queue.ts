import { EventEmitter } from "events";

interface QueueOptions {
  debug?: boolean;
}

export default class Queue<T> extends EventEmitter implements IQueue<T> {
  private items: T[] = [];
  private isDebugMode: boolean = false;

  constructor(options?: QueueOptions) {
    super();
    if (options && options.debug) {
      this.isDebugMode = options.debug;
    }
  }

  private emitEvent(eventName: string, item?: T) {
    if (this.isDebugMode) {
      this.emit(eventName, item);
    }
  }

  enqueue(element: T): void {
    this.items.push(element);
    this.emitEvent("enqueue", element);
  }

  dequeue(): T | undefined {
    const dequeuedItem = this.items.shift();
    if (dequeuedItem) {
      this.emitEvent("dequeue", dequeuedItem);
    }
    return dequeuedItem;
  }

  peek(): T | undefined {
    const frontItem = this.items[0];
    if (frontItem) {
      this.emitEvent("peek", frontItem);
    }
    return frontItem;
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
    this.emitEvent("clear"); // No need to send an item as the queue is cleared.
  }
}
