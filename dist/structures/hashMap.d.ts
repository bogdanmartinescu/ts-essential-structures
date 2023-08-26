declare class HashMap<K, V> {
    private buckets;
    private capacity;
    private size;
    constructor(capacity?: number);
    private hash;
    private getStringKeyHash;
    set(key: K, value: V): void;
    get(key: K): V | null;
    delete(key: K): boolean;
    has(key: K): boolean;
    getSize(): number;
    clear(): void;
}
export default HashMap;
