"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const events_1 = require("events");
class Stack extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.items = [];
    }
    emitEvent(eventName, item) {
        this.emit(eventName, item);
    }
    push(element) {
        this.items.push(element);
        this.emitEvent("push", element);
    }
    pop() {
        const poppedItem = this.items.pop();
        if (poppedItem) {
            this.emitEvent("pop", poppedItem);
        }
        return poppedItem;
    }
    peek() {
        const peekedItem = this.items[this.items.length - 1];
        if (peekedItem) {
            this.emitEvent("peek", peekedItem);
        }
        return peekedItem;
    }
    size() {
        let len = this.items.length;
        return len;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
}
exports.Stack = Stack;
