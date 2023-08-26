type HashNode<K, V> = {
  key: K;
  value: V;
  next: HashNode<K, V> | null;
};

class HashMap<K, V> {
  private buckets: Array<HashNode<K, V> | null>;
  private capacity: number;
  private size: number;

  constructor(capacity: number = 32) {
    this.buckets = new Array<HashNode<K, V> | null>(capacity).fill(null);
    this.capacity = capacity;
    this.size = 0;
  }

  // Hash function to convert key into a bucket index
  private hash(key: K): number {
    return (
      (typeof key === "number" ? key : this.getStringKeyHash(key)) %
      this.capacity
    );
  }

  private getStringKeyHash(key: K): number {
    // Convert the string into a hash using a simple algorithm
    let hash = 0;
    if (typeof key === "string") {
      for (let i = 0; i < key.length; i++) {
        const character = key.charCodeAt(i);
        hash = (hash << 5) - hash + character;
        hash |= 0; // Convert to a 32-bit integer
      }
    }
    return hash;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    let node = this.buckets[index];

    if (!node) {
      this.buckets[index] = { key, value, next: null };
      this.size++;
      return;
    }

    let prev = null;
    while (node) {
      if (node.key === key) {
        node.value = value; // Update the existing key's value
        return;
      }
      prev = node;
      node = node.next;
    }

    // Key wasn't found in the chain, so add a new node at the end
    prev!.next = { key, value, next: null };
    this.size++;
  }

  get(key: K): V | null {
    const index = this.hash(key);
    let node = this.buckets[index];

    while (node) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
    return null;
  }

  delete(key: K): boolean {
    const index = this.hash(key);
    let node = this.buckets[index];
    let prev = null;

    while (node) {
      if (node.key === key) {
        if (prev) {
          prev.next = node.next;
        } else {
          this.buckets[index] = node.next;
        }
        this.size--;
        return true;
      }
      prev = node;
      node = node.next;
    }
    return false;
  }

  has(key: K): boolean {
    return this.get(key) !== null;
  }

  getSize(): number {
    return this.size;
  }

  clear(): void {
    this.buckets = new Array<HashNode<K, V> | null>(this.capacity).fill(null);
    this.size = 0;
  }
}

export default HashMap;
