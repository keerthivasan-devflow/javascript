## Closures
Closures are the combination of a function bundled together with references to its surrounding state (lexical environment). *[A closures function gives access to an outer function’s scope from an inner function.]*

**Lexical scope** in JavaScript means that variables defined outside of a function can be accessed inside of another function that was defined after the declaration of the variable. However, variables defined inside a function will not be accessible outside that function

The callbacks, higher-order, and event handler functions can access variables from the outer scope, thanks to closures. To understand closures, one first needs to understand Lexical Environment (or Lexical Scoping).

**Advantages of closures**
1. Wherever we have callbacks / higher order function / event listener function, we have the concept of closures like array methods, timer functions and more.
2. Function currying
3. Emulating private methods - Data Hiding | Encaopsulation

**Disadvantages of closures**
Closures consume a lot of memory. Creating a function within a function causes memory duplication, which slows down the application.

Closures are not garbage collected when functions are internally connected. Hence the memory cannot be garbage collected as long as the closures are active. For instance, if we utilize closure in ten locations, the memory will be held until all ten processes are completed, resulting in a JavaScript closure memory leak.

function createCounter() {
    // Private variable `count`
    let count = 0;

    // The returned function forms a closure over `count`
    return function() {
        count++;
        console.log(count);  // This can access `count` even after the function has finished executing
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();  // Output: 1
counter1();  // Output: 2
counter2();  // Output: 1
counter2();  // Output: 2