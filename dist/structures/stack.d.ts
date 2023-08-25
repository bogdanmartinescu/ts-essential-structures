/// <reference types="node" />
import { EventEmitter } from "events";
export declare class Stack<T> extends EventEmitter implements IDataStructure<T> {
    private items;
    private emitEvent;
    push(element: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
    isEmpty(): boolean;
    clear(): void;
}
