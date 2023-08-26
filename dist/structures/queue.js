"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class Queue extends events_1.EventEmitter {
    constructor(options) {
        super();
        this.items = [];
        this.isDebugMode = false;
        if (options && options.debug) {
            this.isDebugMode = options.debug;
        }
    }
    emitEvent(eventName, item) {
        if (this.isDebugMode) {
            this.emit(eventName, item);
        }
    }
    enqueue(element) {
        this.items.push(element);
        this.emitEvent("enqueue", element);
    }
    dequeue() {
        const dequeuedItem = this.items.shift();
        if (dequeuedItem) {
            this.emitEvent("dequeue", dequeuedItem);
        }
        return dequeuedItem;
    }
    peek() {
        const frontItem = this.items[0];
        if (frontItem) {
            this.emitEvent("peek", frontItem);
        }
        return frontItem;
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
        this.emitEvent("clear"); // No need to send an item as the queue is cleared.
    }
}
exports.default = Queue;
