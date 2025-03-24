
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