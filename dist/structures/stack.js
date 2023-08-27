"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class Stack extends events_1.EventEmitter {
    constructor(options) {
        super();
        this.items = [];
        this.isDebugMode = false;
        if (options && options.debug)
            this.isDebugMode = options.debug;
    }
    emitEvent(eventName, item) {
        if (this.isDebugMode) {
            this.emit(eventName, item);
            // console.warn("Event ", eventName, "has been performed on item ", item);
        }
    }
    push(element) {
        this.items.push(element);
        this.emitEvent("push", element);
    }
    pop() {
        const poppedItem = this.items.pop();
        if (poppedItem)
            this.emitEvent("pop", poppedItem);
        return poppedItem;
    }
    peek() {
        const peekedItem = this.items[this.items.length - 1];
        if (peekedItem)
            this.emitEvent("peek", peekedItem);
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
exports.default = Stack;
