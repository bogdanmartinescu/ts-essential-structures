"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class LinkedList extends events_1.EventEmitter {
    constructor(options) {
        super();
        this.head = null;
        this.tail = null;
        this.isDebugMode = false;
        if (options && options.debug) {
            this.isDebugMode = options.debug;
        }
    }
    emitEvent(eventName, value) {
        if (this.isDebugMode) {
            this.emit(eventName, value);
        }
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.emitEvent("append", value);
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.emitEvent("prepend", value);
    }
    delete(value) {
        if (!this.head)
            return;
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
    find(value) {
        if (!this.head)
            return;
        let current = this.head;
        while (current && current.value !== value) {
            current = current.next;
        }
        return current ? current : undefined;
    }
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    isEmpty() {
        return this.head === null;
    }
}
exports.default = LinkedList;
