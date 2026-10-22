## Design Patterns in JavaScript

A design pattern in JavaScript is a reusable solution to a commonly occurring problem in software design. It provides a general approach to organizing code so that it is easier to understand, maintain, reuse, and extend.

## Why do we use design patterns?

- Reuse code instead of repeatedly writing similar logic.
- Improve maintainability by organizing code clearly.
- Reduce code duplication by sharing common behavior.
- Improve flexibility so that code can be extended more easily.
- Separate concerns by giving different parts of a program distinct responsibilities.

## Types of design patterns in JavaScript

Design patterns are commonly grouped into three main categories.

1. Creational patterns
   - These deal with how objects are created.
   - Examples: Constructor, Factory, Singleton, Builder, Prototype

2. Structural patterns
   - These deal with how objects and classes are organized or combined.
   - Examples: Module, Adapter, Decorator, Facade, Proxy

3. Behavioral patterns
   - These deal with communication and the distribution of responsibilities between objects.
   - Examples: Observer, Strategy, Iterator, Command, Mediator

## Standard Design Patterns

1. Constructor pattern — understand how objects are created with new.
2. Factory pattern — learn to create objects using regular functions.
3. Module pattern — understand closures and private variables.
4. Singleton pattern — learn how to share a common instance.
5. Observer pattern — understand events and communication between objects.
6. Strategy pattern — learn how to organize interchangeable behaviors.

## Singleton Pattern

Used when an application needs one shared instance of a particular object.

const appConfig = {
theme: "dark",
language: "en",
};

export default appConfig;

When this module is imported by multiple parts of the same JavaScript module graph, they normally receive the same exported object instance.

## Strategy pattern

Used when you have multiple ways to perform an operation and want to select the appropriate approach at runtime.

const paymentMethods = {
  card(amount) {
    return `Paid ₹${amount} using a card`;
  },

  upi(amount) {
    return `Paid ₹${amount} using UPI`;
  },

  cash(amount) {
    return `Paid ₹${amount} in cash`;
  },
};

function makePayment(method, amount) {
  return paymentMethods[method](amount);
}

console.log(makePayment("upi", 500));
// Paid ₹500 using UPI
