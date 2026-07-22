- How can you convert an array into a string? What are two different ways to do this?
- How to recognize an array - 3 ways

## Memory Representation

- JavaScript arrays are specialized objects with integer-based keys. Internally, an array like `let arr = [10, 20, 30]` is treated as:

```js
  {
    "0": 10,
    "1": 20,
    "2": 30,
    length: 3
  }
```

- JavaScript uses automatic garbage collection. When an array or its elements are no longer referenced, memory is reclaimed.

## Why is it faster to work with the end of an array than with its beginning?

- Methods push/pop run fast, while shift/unshift are slow
- The shift operation must do 3 things
  - Remove the element with the index 0.
  - Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
  - Update the length property.
    **The more elements in the array, the more time to move them, more in-memory operations whereas the pop method does not need to move anything, because other elements keep their indexes. That’s why it’s blazingly fast.**

## A word about “length”

Another interesting thing about the length property is that it’s writable.
If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible
let arr = [1, 2, 3, 4, 5];

    arr.length = 2; // truncate to 2 elements
    console.log( arr ); // [1, 2]

    arr.length = 5; // return length back
    console.log( arr[3] ); // undefined: the values do not return

So, the simplest way to clear the array is: arr.length = 0;
Note: [] returns ""

## Code Snippet: Justify the output for the below

→ They're just object-like properties added to the array. They do not affect the array’s length.
→ Array.from() creates a shallow copy of the array based only on its indexed elements and ignores custom properties.

    let fruits = [];
    fruits[0] = 5;
    fruits[1] = 10;
    fruits.age = 27;
    fruits.name = "orange";

    for (let key in fruits) {
        console.log(fruits[key]);
    }

    console.log(Array.from(fruits)); // Returns [5, 10]
    console.log(Array.from(fruits).length); // Returns 2

## Array 'Const'

- It has become a common practice to declare arrays using const
  - The keyword const is a little misleading
  - It does NOT define a constant array. It defines a constant reference to an array
  - Because of this, we can still change the elements of a constant array

## Array.copyWithin()

https://www.javaguides.net/2019/04/javascript-array-copywithin-method.html

## Array.sort()

```javascript
const fruits = ["banana", "Apple", "cherry"];
fruits.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
// ["Apple", "banana", "cherry"]
```

sensitivity – base, accent, case, variant
Example: a.localeCompare(A, en, { sensitivity: base }) → 0

ignorePunctuation – Ignores punctuation in comparison
Example: a,b.localeCompare(ab, en, { ignorePunctuation: true }) → 0

numeric – Treats numbers naturally
Example: v2.localeCompare(v10, en, { numeric: true }) → -1

caseFirst – upper or lower
Controls whether uppercase sorts before lowercase

Negative number – str comes before compareString
Zero – Strings are considered equal
Positive number – str comes after compareString