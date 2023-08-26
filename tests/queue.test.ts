import Queue from "../src/structures/queue";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it("initializes correctly", () => {
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBeTruthy();
  });

  it("enqueues an element", () => {
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it("dequeues an element", () => {
    queue.enqueue(1);
    const item = queue.dequeue();
    expect(item).toBe(1);
    expect(queue.size()).toBe(0);
  });

  it("peeks the front element without dequeuing", () => {
    queue.enqueue(2);
    const item = queue.peek();
    expect(item).toBe(2);
    expect(queue.size()).toBe(1);
  });

  it("checks if the queue is empty", () => {
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(3);
    expect(queue.isEmpty()).toBeFalsy();
  });

  it("clears the queue", () => {
    queue.enqueue(4);
    queue.clear();
    expect(queue.size()).toBe(0);
  });

  it("emits events in debug mode for enqueue", (done) => {
    const debugQueue = new Queue<number>({ debug: true });
    debugQueue.on("enqueue", (item: number) => {
      expect(item).toBe(5);
      done();
    });
    debugQueue.enqueue(5);
  });

  it("emits events in debug mode for dequeue", (done) => {
    const debugQueue = new Queue<number>({ debug: true });
    debugQueue.enqueue(6);
    debugQueue.on("dequeue", (item: number) => {
      expect(item).toBe(6);
      done();
    });
    debugQueue.dequeue();
  });

  it("emits events in debug mode for peek", (done) => {
    const debugQueue = new Queue<number>({ debug: true });
    debugQueue.enqueue(7);
    debugQueue.on("peek", (item: number) => {
      expect(item).toBe(7);
      done();
    });
    debugQueue.peek();
  });

  it("emits events in debug mode for clear", (done) => {
    const debugQueue = new Queue<number>({ debug: true });
    debugQueue.enqueue(8);
    debugQueue.enqueue(9);
    debugQueue.on("clear", () => {
      expect(debugQueue.size()).toBe(0);
      done();
    });
    debugQueue.clear();
  });
});
