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

## Arrow Function

Special case: Just returning an object

If you go for the shorter alternative and you're trying to return a JavaScript object, you may end up with the following, invalid code:

number => { age: number }; // trying to return an object
This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).

To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

number => ({ age: number }); // wrapping the object in extra parentheses
By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned.