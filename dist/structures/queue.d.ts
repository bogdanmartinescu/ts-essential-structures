/// <reference types="node" />
import { EventEmitter } from "events";
interface QueueOptions {
    debug?: boolean;
}
export default class Queue<T> extends EventEmitter implements IQueue<T> {
    private items;
    private isDebugMode;
    constructor(options?: QueueOptions);
    private emitEvent;
    enqueue(element: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    size(): number;
    isEmpty(): boolean;
    clear(): void;
}
export {};
