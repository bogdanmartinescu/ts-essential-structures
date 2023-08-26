import HashMap from "../src/structures/hashMap";

describe("HashMap", () => {
  it("should initialize an empty HashMap", () => {
    const hashMap = new HashMap();
    expect(hashMap.getSize()).toBe(0);
  });

  it("should set and get a value", () => {
    const hashMap = new HashMap<string, number>();
    hashMap.set("key1", 100);
    expect(hashMap.get("key1")).toBe(100);
  });

  it("should overwrite value with the same key", () => {
    const hashMap = new HashMap<string, string>();
    hashMap.set("key1", "value1");
    hashMap.set("key1", "value2");
    expect(hashMap.get("key1")).toBe("value2");
  });

  it("should return null for nonexistent key", () => {
    const hashMap = new HashMap<string, number>();
    expect(hashMap.get("missingKey")).toBeNull();
  });

  it("should handle collision gracefully", () => {
    const hashMap = new HashMap<number, number>(3); // Small capacity to force collision
    hashMap.set(1, 10);
    hashMap.set(4, 40); // Should collide if using mod 3 hash
    hashMap.set(7, 70); // Another collision

    expect(hashMap.get(1)).toBe(10);
    expect(hashMap.get(4)).toBe(40);
    expect(hashMap.get(7)).toBe(70);
  });

  it("should delete a key-value pair", () => {
    const hashMap = new HashMap<string, string>();
    hashMap.set("keyToDelete", "value");
    expect(hashMap.has("keyToDelete")).toBeTruthy();

    hashMap.delete("keyToDelete");
    expect(hashMap.has("keyToDelete")).toBeFalsy();
    expect(hashMap.get("keyToDelete")).toBeNull();
  });

  it("should clear the HashMap", () => {
    const hashMap = new HashMap<number, string>();
    hashMap.set(1, "one");
    hashMap.set(2, "two");
    hashMap.clear();

    expect(hashMap.getSize()).toBe(0);
    expect(hashMap.get(1)).toBeNull();
    expect(hashMap.get(2)).toBeNull();
  });
});
