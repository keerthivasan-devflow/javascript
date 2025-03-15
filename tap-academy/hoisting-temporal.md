## Hoisting
In JavaScript, the concept of hoisting refers to a feature where variable and function declarations are moved 
to the top of their containing scope during the execution phase. When a JavaScript program starts running, it 
creates different segments in memory, primarily the **stack** and **heap**. The stack is where JavaScript code is 
executed, and within this, a **Global Execution Context** is created. This context consists of two phases: 
the **memory creation phase** and the **code execution phase**.

During the memory creation phase, JavaScript scans for all declarations of variables, functions, classes, and other structures. If a variable is declared and initialized in a single line, JavaScript splits this into two parts: the declaration and the initialization. The declarations are then hoisted to the top of the scope, while the initializations remain in their original position.

For example:
- If you declare `let x;`, JavaScript treats it as `x: undefined` during the memory creation phase.
- If you declare a function like `function greet() { console.log("Welcome"); }`, JavaScript hoists it as `greet: function() { console.log("Welcome"); }`.

## Temporal Dead Zone (TDZ)
**The region from the declaration to the point where it is initialized.**
This refers to the period between the creation of a variable (in the memory creation phase) and its initialization (during the code execution phase) in JavaScript. During this time, if you try to access the variable, a reference error will occur.

The TDZ exists because, in JavaScript, variables declared with let and const are hoisted to the top of their scope, but they are not initialized until the code execution phase reaches the line where they are assigned a value. Accessing them before initialization leads to a ReferenceError.

**Example:**
    let a;
    console.log(a);
    a = 100;
    console.log(a);
