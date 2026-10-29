## Array or Array-Like Object

The loop `for..in` statement iterates over user-defined properties in addition to the array elements.

There are so-called "array-like" objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The `for..in` loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

```js
const profile = {
  0: "Virat Kohli",
  1: "Cricketer",
  2: "RCB Team",
  length: 3,
  age: 37,
  country: "India",
};

for (let key in profile) {
  console.log(key, profile[key]);
}
```

The `for..in` loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast.

Generally, we shouldn’t use `for..in` for arrays.

## Objects

But that’s actually a bad idea. There are potential problems with it:

The loop `for..of` is cleaner than `for..in` because it avoids prototype properties.

```js
const user = { name: "Keerthivasan", age: 25, city: "Chennai" };
Object.prototype.extra = "polluted!";
```

## Examples

The in operator in JavaScript checks whether a specified property exists in an object. For arrays, it checks whether a particular index exists, not whether a particular value exists. It also checks inherited properties, not just an object's own properties.

```js
// Example 1: To check whether an index exist or not in a sparse array.
const numbers = [10, , 30];
console.log(0 in numbers); // true
console.log(1 in numbers); // false
console.log(2 in numbers); // true

// Example 2: To check inherited properties exist or not.
function Person(name) {
  this.name = name;
}

Person.prototype.age = 30;
const alice = new Person("Alice");

console.log("name" in alice); // true
console.log("age" in alice); // true
```

## Difference between for..of vs for..in

- `for..in` can iterate over an array's enumerable user-defined properties as well as its indexes, whereas `for..of` iterates over the array's values only.
- `for..in` provides property keys as strings (array indexes are string values), whereas `for..of` provides element values directly, without providing indexes.
- `for..in` iterates over enumerable string-keyed properties.
- `for..in` skips iteration for each hole in a sparse array, whereas `for..of` iterates over those holes and returns `undefined`.
