youtube channel - kurimari (javascript tutorial part 20 - callback in js)
Akshay Saini - Callback function
    -- Event Handler w/ callback, Closures demo with event handlers(13.30)

Callback function is a function that passed to an aother function as parameter and this callback function will be
executed after some operation has been completed. callback functions are really super powerful in javascript


When to Use Callback Function in Real-time:
*******************************************
Functions as First-Class Citizens: In JavaScript, functions are treated as first-class citizens, meaning they can be passed around and used just like any other value, such as strings or numbers.

Asynchronous Operations: Callback functions are commonly used to handle asynchronous operations, where the result of the operation is not immediately available. Examples include fetching data from a server, reading files, or handling user interactions. [w/o callback
async operation doesn't exist in js]

Event Handling: In web development, callback functions are frequently used to handle events such as mouse clicks, keypresses, and form submissions. These functions are called when the corresponding event occurs.

Higher-Order Functions: Functions that accept other functions as arguments or return functions are called higher-order functions. Callback functions are often used with higher-order functions to customize their behavior or to perform operations asynchronously.
Code Reusability: Callback functions can be reused in multiple places, making your code more modular and easier to maintain.
Flexibility: Callbacks provide a way to customize the behavior of a function without modifying its source code.

Iterating over Arrays: Callback functions can be used with array methods like forEach, map, filter, and reduce are often used to iterate over arrays and perform operations on their elements.

Timers: Callback functions can be used with timer functions, like setTimeout() and setInterval(), to schedule the execution of code after a specified amount of time.


Disadvantages of Callback Functions:
*************************************
Callback Hell: Nesting callbacks can lead to complex and hard-to-read code, a problem known as "callback hell[ “Pyramid of Doom"]."
Error Handling: Error handling in callback-based code can be cumbersome, as each callback needs its own error-handling logic.
Inversion of control: Managing the flow of control in callback-based code can be challenging, especially when dealing with multiple asynchronous operations.
