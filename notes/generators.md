## Generator Functions

- A simple generator function in JavaScript is a special type of function defined with function\* that can pause execution using yield and resume later when .next() is called. It produces values one at a time, maintaining its internal state across calls.
- Generator function can have both yield and return value.
  - `yield` → produces intermediate values.
  - `return` → produces the final value and closes the generator.

```js
// Example 1: Every time the function will start execution from scratch - Therefore always output is 1
function* counter() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

console.log(counter().next());
console.log(counter().next());
console.log(counter().next());

// Example 2: Create a generator once and yield the value as many times as you would like to.
function* counter() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

let generator = counter();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
```
