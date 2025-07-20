
Basics
- Function Declaration
    - name
    - optional parameters
    - body of the function(some activity)
    - either return or print something
    - There should not be any statement after the return statement
    - Why do we need a function?
        - DRY principle
- Function Expression
- IIFE
- Arrow Function

Advanced
- Method Definition
- Constructor Function
- First Class Citizens
    - Stored in a variable and can be accessed it anywhere in the program as an another variable
    - can be passed as an argument to an another function
    - A function can be returned as output from another function
    - Example: Objects are FCC | Functions are also FCC
- Higher Order Function
- Closures
- Generator Functions

# Pure Function vs Impure Function
**Pure Function:**
- Always gives the same result for the same input.
- Doesn’t change anything outside the function (like variables or external state).
- Doesn’t cause any side effects.
- Its behavior is predictable and consistent.
- Easier to test, debug, and maintain.
- Can be optimized using memoization, which stores the result to avoid repeating heavy calculations.

**Impure Function:**
- May give different results even for the same input.
- Can change external variables or state.
- Can cause side effects.

1. Why are pure functions important in React?
    React can easily determine whether it needs to re-render the component by comparing the previous and next props (via a shallow comparison). Pure functions are important in React because they help with predictability and optimizing re-renders.

2. What is factory function?
    Factory functions are functions that return objects. They are useful for creating multiple instances of similar objects without the need for constructor functions.

## Closures
Closures are the combination of a function bundled together with references to its surrounding state (lexical environment). *[A closures function gives access to an outer function’s scope from an inner function.]*

**Lexical scope** means that variables defined outside of a function can be accessed inside of another function that was defined after the declaration of the variable. However, variables defined inside a function will not be accessible outside that function

The callbacks, higher-order, and event handler functions can access variables from the outer scope, thanks to closures. To understand closures, one first needs to understand Lexical Environment (or Lexical Scoping).

**Advantages of closures**
1. Wherever we have callbacks / higher order function / event listener function, we have the concept of closures like array methods, timer functions and more.
2. Function currying
3. Emulating private methods - Data Hiding | Encapsulation

**Disadvantages of closures**
- Persistent memory usage - still references to the variables even after execution the outer scoped functions.
- Increased memory usage - because they consumes a lot of memory due to nested functions, which can slow down the application.
- Debugging complexity - can be challenging due to the complexity of the scope chain or multiple layers of nested functions.
- Grabage collection issue - The garbage collector might have difficulty determining when to free up memory occupied by variables captured by closures, potentially leading to performance issues. [Hence the memory cannot be garbage collected as long as the closures are active. For instance, if we utilize closure in ten locations, the memory will be held until all ten processes are completed, resulting in a JavaScript closure memory leak.]