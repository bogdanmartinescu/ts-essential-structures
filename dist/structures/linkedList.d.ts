/// <reference types="node" />
import { EventEmitter } from "events";
interface LinkedListOptions {
    debug?: boolean;
}
declare class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T);
}
export default class LinkedList<T> extends EventEmitter {
    private head;
    private tail;
    private isDebugMode;
    constructor(options?: LinkedListOptions);
    private emitEvent;
    append(value: T): void;
    prepend(value: T): void;
    delete(value: T): void;
    find(value: T): Node<T> | undefined;
    size(): number;
    isEmpty(): boolean;
}
export {};
