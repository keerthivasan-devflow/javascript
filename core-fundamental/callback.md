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

Main Thread Blocking:
*********************
In JavaScript, the main thread refers to the single thread of execution where your JavaScript code runs. This thread is responsible for executing your JavaScript code, handling events, and updating the user interface (in the case of browser-based JavaScript).

Main thread blocking occurs when a piece of synchronous code takes a long time to execute, effectively blocking the main thread from executing any other code or handling events. This can happen with operations like heavy computation, synchronous AJAX requests, or large loops. During this blocking period, the user interface becomes unresponsive, and the application may appear frozen.

Main thread blocking is a common issue in JavaScript, especially in browser environments, where user interactions and UI updates are crucial for a good user experience. To avoid main thread blocking, it's important to write efficient, non-blocking code, use asynchronous operations for tasks that can be performed asynchronously (such as network requests), and optimize performance where possible.

Callstack:
**********
The call stack is a mechanism used to keep track of function calls in a program. It's a data structure that stores information about the active functions in the current execution context. Whenever a function is called, a new entry (or frame) is added to the top of the call stack, representing the function call. When a function returns, its entry is removed from the call stack, allowing the program to continue executing from where it left off

Callback Queue / Task Queue:
****************************
The callback queue (also known as the task queue or message queue) is a data structure that holds callback functions waiting to be executed. When an asynchronous operation completes, such as a timer expiring, an event occurring, or a promise being fulfilled, the associated callback function is placed in the callback queue.

The callback queue operates on a first-in, first-out (FIFO) basis, meaning that the callback functions are processed in the order they were added to the queue. The event loop, which is a part of the JavaScript runtime, continuously checks the callback queue for any pending callback functions while the call stack is empty. When the call stack is empty, the event loop moves the first callback function from the callback queue to the call stack for execution.

This mechanism allows JavaScript to handle asynchronous operations in a non-blocking manner, ensuring that the program remains responsive and can continue to process user interactions and other events while waiting for asynchronous tasks to complete.

Event Loop:
***********
The event loop is a mechanism in JavaScript that allows the execution of code to be managed efficiently
 in a non-blocking manner. It is the backbone of JavaScript's asynchronous programming model.

The event loop works as follows:

The main thread starts executing the code and pushes function calls onto the call stack. When a long-running 
operation is encountered, the main thread sends the operation to a background task (such as a "Web API" or "timer")
and continues executing the rest of the code.

Once the background task completes, an event is enqueued to be processed by the event loop.

The event loop continuously checks the message queue for any pending events. If there is an event 
in the queue, the event is processed by the main thread and the associated callback function is pushed onto the call stack to be executed.

The event loop repeats this process until there are no more events in the queue and the call stack is empty.
By using the event loop, JavaScript can handle long-running operations without blocking the main thread and maintain a responsive user interface.


Asynchronous:
--------------
An asynchronous function in JavaScript is a function that operates independently of other tasks and allows the program to continue executing other code while it waits for an operation to complete. Asynchronous functions are commonly used for tasks that involve I/O operations (such as fetching data from a server, reading from or writing to files, or waiting for user input) or operations that may take some time to complete.

Here's why asynchronous functions are important and why we need them:

Non-Blocking Execution: Asynchronous functions allow JavaScript programs to perform tasks without blocking the execution of other code. This means that while an asynchronous operation is in progress, the program can continue to execute other tasks, improving the overall responsiveness and efficiency of the application.

Handling I/O Operations: Many tasks in web development involve I/O operations, such as making HTTP requests to fetch data from a server or reading data from a file. These operations can take a significant amount of time to complete, during which the program would otherwise be blocked. Asynchronous functions allow these operations to be performed without blocking the main execution thread, ensuring that the program remains responsive.

Improved Performance: By allowing tasks to be executed concurrently, asynchronous functions can improve the performance of JavaScript programs, especially in web applications where responsiveness is crucial. For example, in a web page that needs to load data from multiple sources, using asynchronous functions to fetch the data concurrently can reduce the overall load time of the page.

Concurrency: Asynchronous functions enable concurrency in JavaScript programs, allowing multiple tasks to be executed simultaneously. This is particularly useful in environments like web servers, where handling multiple client requests concurrently can improve throughput and scalability.

Event-Driven Programming: Asynchronous functions are essential for event-driven programming paradigms, where code execution is driven by events such as user interactions, timer expirations, or I/O events. Asynchronous functions allow event handlers to be registered and executed asynchronously in response to these events, enabling responsive and interactive applications.

Overall, asynchronous functions play a crucial role in modern JavaScript development, enabling efficient handling of I/O-bound tasks, improved performance, and support for event-driven programming paradigms.