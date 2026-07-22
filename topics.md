# Where To

- 3 ways to write javascript code
  - Browser Console
  - HTML Inline Script Tag
  - External Javascript File
- Keywords: async vs defer

# JS Output

# Variables

- Variables Introduction
- Syntax Rules
- Single | Multiple Variable Declaration vs Initialization
- Two Types Of Variables - Undeclared | Undefined
- Two Types Of Values - Fixed Literals | Variable Values
- Keywords To Declare a Variable (3) - var | let | const
- Hoisting In Javascript
- Temporal Dead Zone (TDZ)
- Scope Of Variables - Global | Function | Block or Local | Lexical Scope
- Variable Shadowing vs Illegal Shadowing Of Block Scope
- Lexical Environment
- Scope Chain

# Datatypes

- Number - BigInteger
- String
- Boolean
- Array
- Object
- null
- undefined
- Symbol

# Operators

- Arithmetic
- Assignment
- Relational / Comparison
- Bitwise
- Logical
- Conditional / Ternary
- typeof
- instanceof

# Advanced Operators

- Nullish Coalescing Operator
- Logical AND Operator
- Optional Chaining Operator

# Numbers

- Integer | Floating Point | Scientic E-Notation
- Binary | Octal | Hexadecimal Representation
- Number Separator
- Number References (Total - 22)
  - Number Properties (8)
  - Number Methods (12) - Basic (6) vs Static (6)
  - Number.prototype (1)
  - Number.constructor (1)
  - Global Javascript Numnber Methods (3)

# Strings

- Define String
- Check String Length
- Template Literals / Template String / String Templates
- Compare String
- Sort String
- String Access Through Indexes
- String Comparison
- String Pool vs String Interning
  - For a particular value of a string, there will be only one copy of string that exist in the memory.
  - Benefits - To make string comparison faster and Memory Optimization.
- Whether the string be will created in the stack or heap segment?
- Is there any difference between toString() vs String()?
  - toString() cannot be used on null or undefined, and will throw an error.
- Output: Give the correct answer - What happens in such case?
  - let s1 = "Apple"
  - let s2 = "Apple"
  - let s3 = new String("Apple")
- String References (Total - 38)
  - String Search Methods (8)

# Arrays

- Syntax And Different Ways To Declare An Array
  - Using Array Literal
  - Array Constructor
  - Array()
- Check Array Length
- Access Elements Through Index - Get First / Last Element From An Array
- Change Element Through Index
- How To Clear An Array
- Associative Array vs Indexed Array
- Sparse Array vs Dense Array
- Array To String Conversion
  - toString () vs Array.join()
- Array References (Total - 45)

# Objects

- Creating an object (6)
  - Object Literal Syntax
  - new Object()
  - Object.create()
    - Pitfalls of Object.create(null, {...})
  - Object Constructor / Constructor Function / Function Constructor
  - Factory Function
  - ES6 Class
- Accessing Objects (4)
  - Dot Notation
  - Bracket Notation
  - Object.values() | Object.keys() | Object.entries()
  - JSON.stringify()
  - Loop Through Using for..in Loop
- Object Accessors - setters and getters
- Object Property Attributes / Metadata / Descriptors - Writable | Enumerable | Configurable
- Prototypal Inheritance
  - Prototype Chaining
- Object References
- Pass By Value | Pass By Reference

# Set Datastructure

- Create Set
- Set Methods (Total - 10)
- Set Logical Methods (Total - 7)
- Limitations Of Regular Set
- WeakSet | Purpose Of Weakset - Useful For Preventing Memory Leaks
- WeakSet Methods (Total - 4)
- Difference between Set vs WeakSet
- Set Lookup - O(1) - How?

# Map Datastructure

- Create Map - 2 ways
- Map References (Total - 11)
- WeakMap | Purpose Of WeakMap - Designes For Privacy
- WeakMap References (Total - 4)
- Difference between Map vs WeakMap

# Functions

- Function Declaration | Function Statement | Function Definition
- Parameters vs Arguments
- Function Expression or Anonymous Function
- Named Function Expression
- Blocked-Scope Function Declaration - [w/ strict mode vs w/o strict mode]
- Pure vs Impure Function
- IIFE
- Arrow Function
  - If there is only one parameter - No need of parantheses
  - If there is only statement in the body of the function = No need of curly braces and return keyword
- Method Definition
- Constructor Function
- First Class Citizens | Function As Objects
- call() | apply() | bind()
- Higher Order Function
- Closures
- Callback Function
  - Main Thread Blocking
  - Pros vs Cons of Callback Function
  - Callback Hell - Inversion Of Control
  - Callback Alternatives
- Function Currying
- Factory Function
- Function Composition
- Recursive Function
- Generator Functions
- toString()
- arguments. length property
- Unary function – [validation testing, event handling, currying] Monadic
- Binary Function vs Polyadic Function
- Static | Dynamic function

# Classes

- Static property and methods
- Meta property – new. target
- Computed property
- Inheritance
- What occurs if both base and derived classes have constructors?
- What happens if both base & derived class have same methods?
- Private variables and methods.
- Does javascript support constructor overloading?

# General Concept

- Synchronous Javascript
- Asynchronous Javascript
- Memory Leak
- JS Strict mode
- JS this keyword
- JS Debugging
- JS Browser Object Model
- JS Web API
  - Local storage, Session storage

# Errors

- Syntax Error
- Reference Error
- Type Error
- Range Error
- URI Error
- Aggregate Error
- Eval Error (deprecated)
- Silent Errors

# ES6 Features

- let / const keyword
- Symbols
- Default Parameters
- Arrow Function
- Set / WeakSet
- Map / WeakMap
- Array De-Structuring
- Object De-Structuring
- Spread vs Rest Operator
- Shallow Copy vs Deep Copy
  - JSON.stringify() - Problem w/ functions
  - Object.assign() - Partial Deep Copy
  - Spread Operator - Partial Deep Copy
  - StructuredClone - Best Practice
- Object Literals
  - Variables values can be used as key in objects through computed property.
  - Spaces can be included between words in object keys.
  - Methods can be written in objects without defining function keyword.
  - Incase object keys and values are same, write it once.
- Template Literals / Template String / String Templates
  - String Interpolation
  - Multi-Line String Definition
  - Embed HTML Code
  - Easy way to append single or double quote inside backticks or w/o escape sequence
- Promises
  - Promise.all()
  - Promise.allSettled()
  - Promise.race()
  - Promise.any()
- Async/Await Keyword
  - Promises vs Async/Await
  - Conventional Function vs Async Function
- String Methods
  - str.includes()
  - str.startsWith()
  - str.endsWith()
- Array Helper Methods
  - Array.forEach()
  - Array.map()
  - Array.filter()
  - Array.find()
  - Array.some()
  - Array.every()
  - Array.reduce()
  - Array.from()
- Modules
  - Two ways of export/import – ES6 Features, Common JS
  - ES6 features
    - Named export and import
    - Default export and import
