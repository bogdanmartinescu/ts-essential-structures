/// <reference types="node" />
import { EventEmitter } from "events";
export default class Stack<T> extends EventEmitter implements IStack<T> {
    private items;
    private emitEvent;
    push(element: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
    isEmpty(): boolean;
    clear(): void;
}
