## Garbage Object

A garbage object in JavaScript refers to an object that no longer has any references pointing to it. Objects are retained in memory as long as there is a reference to them. Once all references to an object are removed, it is considered garbage and will be automatically deleted.

// Example 1 - GC will eventually reclaim the memory for [1,2,3]
let arr = [1, 2, 3];
arr = null; // no references left

// Example 2 - GC will NOT reclaim it yet
let obj = { name: "Keerthi" };
let ref = obj; // still reachable
obj = null; // but ref keeps it alive

Closures: Variables captured inside functions may keep objects alive longer than expected.
Global variables: If you store something globally, it’s always reachable → never garbage collected.
Circular references: Modern GC handles them fine, but if references remain, memory won’t be freed.

## Pass By Value | Pass By Reference

- A single object or function also can have multiple references also in javascript.
- Reference variable - a variable which stores the addresses of an object.

## Objects' Property Attributes

- value: sets the property's value.
- writable: true - allows the property's value to be changed.
- enumerable: true - allows the property to appear in Object.keys() and Object.entries().
- configurable: true - allows the property to be deleted or its descriptor to be changed.

## Common Pitfalls of Object.entries()

1. Performance cost → Each call rebuilds arrays of pairs. Cache results if looping multiple times.

2. Numeric keys order → Integer-like keys are enumerated first in ascending numeric order. Other string keys generally follow their insertion order, and symbol keys are excluded from Object.entries().

```js
const gadgets = {
  30: "Smartwatch",
  lastname: "kevin",
  10: "Mobile",
  firstname: "mark",
  20: "Laptop",
};

const entries = Object.entries(gadgets);
console.log(entries);
console.log(Object.fromEntries(entries));
```

3. Map conversion caveat → Object keys are always strings, so converting back from a Map may lose non-string keys.

```js
const gadgets = new Map([
  [1, "Mobile"],
  ["1", "Laptop"],
]);
console.log(gadgets.size); // output: 2

const gadgetObject = Object.fromEntries(gadgets);
console.log(gadgetObject); // output: { '1': 'Laptop' }
```

## Object.is()

- Object.is() is not equivalent to the == operator or === operator.
- The only difference between Object.is() and === is in their treatment of signed zeros and NaN values.
- The === operator (and the == operator) treats the number values -0 and +0 as equal, but treats NaN as not equal to each other.

1. both undefined
2. both null
3. both true or both false
4. both strings of the same length with the same characters in the same order
5. both the same object (meaning both values reference the same object in memory)
6. both BigInts with the same numeric value
7. both symbols that reference the same symbol value
8. both +0
9. both -0
10. both NaN
