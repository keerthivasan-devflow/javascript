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
- Variables Declaration vs Initialization - Single | Multiple Variables
- Two Types Of Variables - Undeclared | Undefined
- Two Types Of Values - Fixed Literals | Variable Values
- Keywords To Declare a Variable (3) - var | let | const
- Hoisting
- Temporal Dead Zone (TDZ)
- Scope Of Variables
  - Global Scope
  - Function Scope
  - Block or Local Scope
  - Lexical Scope
- Variable Shadowing vs Illegal Shadowing Of Block Scope
- Lexical Environment
- Scope Chain

# Datatypes

- Number
- BigInteger
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

- Integer - Floating Point - Scientic E-Notation
- Binary - Octal - Hexadecimal Representation
- Number Separator
- Number References (Total - 22)
  - Number Properties (10)
  - Number Methods (12) - Instance (6) vs Static (6)
  - Global Javascript Number Methods (3)
- Type Casting

# Strings

- Define String
- Check String Length
- Template Literals / Template String / String Templates
- Compare String
- Sort String
- String Access Through Indexes
- String Comparison
- String Pool vs String Interning
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

- Indexed Array vs Associative Array
- Dense Array vs Sparse Array
- Syntax And Different Ways to Declare an Array
  - Using Array Literal
  - Array Constructor or Array() - w/ or w/o using 'new' keyword
  - Array.of()
- Check Array Length
- Access Elements - Get First or Last Element From an Array
- Change Element
- How to Clear an Array
- Array to String Conversion
  - toString() vs Array.join()
- Iterator or Iterator Object
- Iterables
- Array References (42)

# Objects

- Create an object (6)
  - Object Literal Syntax
  - Object() Constructor - w/ or w/o using 'new' keyword
  - Object.create()
    - Pitfalls of Object.create(null, {...})
  - Object Constructor or Constructor Function or Function Constructor
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

- Function Declaration or Function Statement or Function Definition
- Parameters vs Arguments
- Return Value - Primitive | Non-Primitive
- Function Expression or Anonymous Function
- Named Function Expression
- Blocked-Scope Function Declaration - [w/ strict mode vs w/o strict mode]
- Pure vs Impure Function
- IIFE (Immediately Invoked Function Expression)
- Arrow Function
  - If there is only one parameter - No need of parantheses
  - If there is only statement in the body of the function = No need of curly braces and return keyword
- Method Definition
- Constructor Function
  - How to add a static, instance property and a property directly to a constructor function.
- Factory Function
- First Class Citizens or Function As Objects
- Function Borrowing - call() | apply() | bind()
  - Implicit Binding
  - Explicit Binding
  - new Binding _(Classes / Constructors)_
  - Default Binding
- Higher Order Function
- Callback Function - Synchronous (Array methods) vs Asynchronous callbacks (Timers)
  - Main Thread Blocking
  - Pros vs Cons of Callback Function
  - Callback Hell - Inversion Of Control
  - Callback Alternatives
- Closures
- Function Currying
- Function Composition
- Recursive Function
- Generator Functions
- toString()
- arguments. length property
- Unary Function (or Monadic) – [Validation Testing, Event Handling, Currying]
- Binary vs Polyadic Function
- Static vs Dynamic Function

# Classes

- Instance Property
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
- Memory Segements - Stack | Heap
- Macro Task Queue (Callback Queue)
- Micro Task Queue (Callbacks related to promises will be registered)
  - This will get executed when a macro task queue finsishes the execution before the next macro task queue can begin
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

# Web API

- Document Object Model
- Graphics / Multi-media
- Client-Side Storage
- Device
- Communication
- Timer
- Fetch
- Security
- Other

# ES6 Features

- let / const keyword
- Symbols
- Default Parameters
- Constructor Default Parameters - Arguments as comma separated vs. object
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
- Template Literals / Template String / String Template Literal
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

// -------------------------

// function\* test() {
// let a = 0;
// let b = 1;

// let c = a + b;

// while (true) {
// yield c;
// a = b;
// b = c;
// }
// }

// let gen = test();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
