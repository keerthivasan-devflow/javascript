- Creating an object in 6 ways
    - Object Literal Syntax
    - new Object()
    - Object.create()
    - Object Constructor / Constructor Function
    - Factory Function
    - ES6 Class
- Accessing Objects in 4 ways
    - Bracket Notation
    - Dot Notation
    - Object.values() | Object.keys() | Object.entries()
    - JSON.stringify()
- Object Accessors - setters and getters
- Object Property Attributes / Metadata - Writable | Enumerable | Configurable
- Prototypal Inheritance
    - Prototype Chain

## Prototypal Inheritance
- Prototypal inheritance refers to when an object gains access to the properties and methods of another object.
- Every object in JavaScript has a prototype property.
- Inheritance in JavaScript is accomplished through this prototype property.
- When we create an object in JavaScript, certain properties and methods are automatically added to the object through this prototype mechanism.

## Constructor Function
- Why do we need a constructor function or object constructor?
- What is a constructor function?
    - It's a function that initializes an object in JavaScript.
    - It serves as a blueprint for creating instances and implementing inheritance.
    - A constructor function can be defined as a regular function or a function expression.

- What does the new() operator do in that context?
    - It just creates an empty object
    - It assigns all the values passed to the constructor
    - Eventually return 'this' internally
    - new() also make sure that the this variable is pointing out the newly created empty object

## Object.create(prototype, propertiesOfObject)
- prototype - This is the object that will be used as the prototype for the newly created object