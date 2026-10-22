// Example 1 - Regular Set
let set = new Set();

let obj = { firstname: "virat", lastname: "kohli" };
set.add(obj);

// When you do obj = null, you’re not deleting the object itself. You’re only cutting the link
// between the variable (obj) and the object stored in a heap memory.
obj = null;

// However, the object is still reachable through the "set" variable which holds the reference strongly.
// It means that once you put something inside a Set(), JavaScript will keep that value in memory until you
// explicitly remove it with .delete() or .clear(). Even if your program does not use that value anywhere else,
// the Set() itself is still a reference — so the garbage collector cannot free up the memory space.

// Therefore, the output will be : { firstname: "virat", lastname: "kohli" }.
console.log(set);

// Example 2 - WeakSet
let weakset = new WeakSet();

let cricketer = { firstname: "virat", lastname: "kohli" };
set.add(cricketer);

// A WeakSet does not hold strong references. If you set cricketer = null and no other references exist, the garbage collector sees the object as "unreachable"
// and frees the memory. The entry disappears from the WeakSet() automatically.
cricketer = null;

console.log(weakset); // Expected Output: {}
