## Synchronous Javascript

- Javascript executes code sequentially
- One piece of code will block another piece of code
- Realtime Applications
  - Payment Authorization on UPI
  - Online Purchasing through Flipkart or Amazon
  - ATM Withdraw

## Asynchronous Javascript

- Handling API data | Data Retrieval
- Handling user input - Event Listeners | User interaction
- To load media like images, videos
- Timers and intervals

## Callback Function

Callback function is a function that passed as a parameter to an another function and this callback function will be
executed after some operation has been performed.

## When to Use Callback Function in Real-time:

Functions as First-Class Citizens: In JavaScript, functions are treated as first-class citizens, meaning they can be passed around and used just like any other value, such as strings or numbers.

Asynchronous Operations (Managing time based and delayed operations - HTTP Requests): Callback functions are commonly used to handle asynchronous operations, where the result of the operation is not immediately available. Examples include fetching data from a server, reading files, or handling user interactions. [w/o callback async operation doesn't exist in js]

Event Handling (Responding to user actions): In web development, callback functions are frequently used to handle events such as mouse clicks, keypresses, and form submissions. These functions are called when the corresponding event occurs.

Higher-Order Functions: Functions that accept other functions as arguments or return functions are called higher-order functions. Callback functions are often used with higher-order functions to customize their behavior or to perform operations asynchronously.
Code Reusability: Callback functions can be reused in multiple places, making your code more modular and easier to maintain.
Flexibility: Callbacks provide a way to customize the behavior of a function without modifying its source code.

Iterating over Arrays (Array operations): Callback functions can be used with array methods like forEach, map, filter, and reduce are often used to iterate over arrays and perform operations on their elements.

Timers: Callback functions can be used with timer functions, like setTimeout() and setInterval(), to schedule the execution of code after a specified amount of time.

## Cons of Callback Function

1. Callback Hell - Deeply nested callbacks make code unreadable and difficult to maintain. [Pyramid Of Doom!]
2. Error Handling - Error handling can be cumbersome, as each callback needs its own error-handling logic.
3. Inversion of control - Managing the flow of control can be challenging, especially when dealing with multiple asynchronous operations.

## Analogy

Synchronous: You cook at home → you wait until it’s done → then eat. No callback needed.

Asynchronous: You order from a restaurant → you don’t stand frozen at the counter → you go do other things. The restaurant calls you (callback) when the food is ready.

## Key Takeaway

If your functions are instant/synchronous, you can use the traditional sequential way.
If your functions involve delays/asynchronous work, callbacks (or Promises/async/await) are essential to control the order of execution.

In short: callbacks aren’t mandatory for synchronous tasks — they’re only needed when you want to handle asynchronous operations.

## Why Network Requests Take Time

1. Physical distance: Data has to travel across cables, routers, satellites, etc. Even at the speed of light, crossing continents introduces latency.

2. Server processing: The remote server (bank, API, etc.) must authenticate, query databases, and prepare a response. That adds processing delay.

3. Congestion: Multiple users may be hitting the same server. Requests are queued and processed in order.

4. Protocol overhead: Network communication involves handshakes, encryption, headers, retries — all of which add milliseconds or seconds.
