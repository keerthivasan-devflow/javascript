## Functions are considered as "First Class Citizens" | Objects are also FCC

- A function can be assigned to a variable and accessed or called wherever that variable is available.
- A function can be passed as an argument to another function. This is called a callback function.
- A function can be returned from another function as its output.

## Parameters vs Arguments

- Parameters - The values that are received inside function declaration are called as "parameters"
- Arguments - The values that are passed inside the function call are called as "arguments".

## Function() Constructor

1. Performance and security - Creating functions this way can be less efficient than defining them normally,
   and using untrusted strings can introduce security vulnerabilities.

2. Prefer ordinary function declarations, function expressions, or arrow functions unless dynamic function
   creation is specifically needed.

3. Normal nested functions can access variables from their surrounding lexical scope. Functions created using
   Function() do not capture that surrounding local scope.

## Constructor Function

- It's a function that act as a pattern or template for creating objects.
- It instantiates the object and implements inheritance.
- A constructor function can be defined as a regular function or a function expression.

- What does the new() operator do in that context?
- **Important points to remember:**
- 1.  The 'new' keyword creates a fresh empty object (person1).
- 2.  Inside the constructor, 'this' is bound to that newly created object.
- 3.  The constructor implicitly returns 'this', so we don’t need to write 'return this' explicitly.

## Prototypal Inheritance

- In general, prototype is a mechanism through which inheritance is achieved in javascript.
- Prototypal inheritance refers to when an object gains access to the properties and methods of another object.
- Every object in JavaScript has a prototype property.
- Inheritance in JavaScript is accomplished through this prototype property.
- When we create an object in JavaScript, certain properties and methods are automatically added to the object through this prototype mechanism.

# Pure Function

- Always gives the same result for the same input.
- Doesn’t change anything outside the function (like variables or external state).
- Doesn’t cause any side effects.
- Its behavior is predictable and consistent.
- Easier to test, debug, and maintain.
- Can be optimized using memoization, which stores the result to avoid repeating heavy calculations.

## Impure Function

- May give different results even for the same input.
- Can change external variables or state.
- Can cause side effects.

**Why are pure functions important in React?**
React can easily determine whether it needs to re-render the component by comparing the previous and next props (via a shallow comparison). Pure functions are important in React because they help with predictability and optimizing re-renders.

## Closures

**When a function returns another function, the inner function retains access to the variables and data of the outer function. This is because those values are preserved in memory through the concept known as lexical scope. Lexical scope refers to the portion of memory that remains accessible even after an outer function has completed execution and its execution context has also been removed. This occurs while inner function wants to access outer scope function variables, it will create a closure.**

An inner function is returned to the outer scope, it also retains references to the outer function's variables.

**Advantages of closures**

1. The callbacks, higher-order, and event handler functions can access variables from the outer scope.
2. Function currying
3. Emulating private methods - Data Hiding | Encapsulation

**Disadvantages of closures**

- Persistent memory usage - still references to the variables even after execution the outer scoped functions.
- Increased memory usage - because they consumes a lot of memory due to nested functions, which can slow down the application.
- Debugging complexity - can be challenging due to the complexity of the scope chain or multiple layers of nested functions.
- Grabage collection issue - The garbage collector might have difficulty determining when to free up memory occupied by variables captured by closures, potentially leading to performance issues. [Hence the memory cannot be garbage collected as long as the closures are active. For instance, if we utilize closure in ten locations, the memory will be held until all ten processes are completed, resulting in a JavaScript closure memory leak.]

## Arrow Function

Special case: Just returning an object

If you go for the shorter alternative explained in 2) and you're trying to return a JavaScript object, you may end up with the following, invalid code:

number => { age: number }; // trying to return an object
This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).

To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

number => ({ age: number }); // wrapping the object in extra parentheses
By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned.

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
