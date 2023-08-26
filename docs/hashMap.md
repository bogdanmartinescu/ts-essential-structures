# HashMap

A simple implementation of a hash map data structure.

## Table of Contents

- [Constructor](#constructor)
- [Methods](#methods)

## Constructor

### HashMap<K, V>(initialCapacity?: number)

Initializes a new instance of the HashMap class.

- `initialCapacity`: (Optional) Initial capacity of the HashMap. Default is 16.

```typescript
const hashMap = new HashMap<number, string>(32);
```

## Methods

### set(key: K, value: V): void

Sets the value for the key in the HashMap. If the key already exists, the previous value is overwritten.

- `key`: The key to set.
- `value`: The value to set.

```typescript
hashMap.set("name", "John");
```

### get(key: K): V | null

Returns the value to which the specified key is mapped, or `null` if the HashMap contains no mapping for the key.

- `key`: The key whose associated value is to be returned.

```typescript
const name = hashMap.get("name"); // Returns 'John'
```

### delete(key: K): boolean

Removes the mapping for the key from this map if it is present. Returns `true` if the key was deleted successfully, `false` otherwise.

- `key`: The key whose mapping is to be removed from the map.

```typescript
hashMap.delete("name"); // Returns true if 'name' was in the HashMap
```

### has(key: K): boolean

Returns `true` if this map contains a mapping for the specified key.

- `key`: The key whose presence in this map is to be tested.

```typescript
if (hashMap.has("name")) {
  console.log("Name exists in the map!");
}
```

### clear(): void

Removes all of the mappings from this map.

```typescript
hashMap.clear();
```

### getSize(): number

Returns the number of key-value mappings in this map.

```typescript
const size = hashMap.getSize(); // Returns the number of entries in the HashMap
```
