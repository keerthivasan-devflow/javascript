## Factory Function

- A factory function is simply a function that creates and returns objects.
- Factory functions are a powerful alternative to constructors when you want flexibility, encapsulation, and composition.

1. No 'new' keyword - Objects are created and returned explicitly using 'return' keyword.
2. Encapsulation - Can hide private variables using closures.
3. Flexibility - Easier to compose and reuse compared to classical inheritance.

## Factor Function vs Constructor Function

- Constructor functions commonly use prototypes to share methods between instances.

```js
// Example: createPerson() is a factory function that produces person objects.
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
  };
}

const person1 = createPerson("Alice", 25);
const person2 = createPerson("Bob", 30);

console.log(person1.greet()); // Hello, my name is Alice and I am 25 years old.
console.log(person2.greet()); // Hello, my name is Bob and I am 30 years old.
```
