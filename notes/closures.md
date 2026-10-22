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
