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

## Constructor Function

- It's a function that act as a pattern or template for creating objects.
- It instantiates the object and implements inheritance.
- A constructor function can be defined as a regular function or a function expression.

- What does the new() operator do in that context?
- **Important points to remember**:
- 1.  The 'new' keyword creates a fresh empty object (person1).
- 2.  Inside the constructor, 'this' is bound to that newly created object.
- 3.  The constructor implicitly returns 'this', so we don’t need to write 'return this' explicitly.

## Prototypal Inheritance

- In general, prototype is a mechanism through which inheritance is achieved in javascript.
- Prototypal inheritance refers to when an object gains access to the properties and methods of another object.
- Every object in JavaScript has a prototype property.
- Inheritance in JavaScript is accomplished through this prototype property.
- When we create an object in JavaScript, certain properties and methods are automatically added to the object through this prototype mechanism.

## Pass By Value | Pass By Reference

- A single object can have multiple references also in javascript.
- Reference variable - a variable which stores the addresses of an object.

# Object.entries()

`Object.entries()` is best used when you need both keys and values together, especially for iteration, transformation, or converting objects into other structures like arrays or Maps. It’s a powerful bridge between objects and array methods.

---

## Key Use Cases of `Object.entries()`

**1. Iterating over objects** - Cleaner than `for...in` because it avoids prototype properties.

```js
const user = { name: "Keerthivasan", age: 25, city: "Chennai" };
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

**2. Transforming objects** - Use with `map`, `filter`, or `reduce` to reshape data.

```js
const obj = { a: 1, b: 2, c: 3 };
const doubled = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [key, value * 2]),
);
console.log(doubled); // Output - { a: 2, b: 4, c: 6 }
```

**3. Converting to Map** - Useful when you need non-string keys or size tracking.

```js
const obj = { x: 10, y: 20 };
const map = new Map(Object.entries(obj));
console.log(map.get("x")); // Output - 10
```

**4. Filtering properties**

```js
const obj = { a: 1, b: null, c: 3 };
const filtered = Object.fromEntries(
  Object.entries(obj).filter(([_, value]) => value !== null),
);
console.log(filtered); // Output - { a: 1, c: 3 }
```

**5. Normalizing or renaming keys** - converting snake_case to camelCase.

```js
const obj = { first_name: "John", last_name: "Doe" };
const camelCase = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [
    key.replace(/_([a-z])/g, (_, c) => c.toUpperCase()),
    value,
  ]),
);
console.log(camelCase); // Output - { firstName: "John", lastName: "Doe" }
```

## Common Pitfalls

- **Performance cost**: Each call rebuilds arrays of pairs. Cache results if looping multiple times.
- **Numeric keys order**: Integer-like keys are sorted ascending, not insertion order.
- **Map conversion caveat**: Object keys are always strings, so converting back from a Map may lose non-string keys.
