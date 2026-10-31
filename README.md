## Website Sources

1. https://courses.bigbinaryacademy.com/learn-javascript/
2. https://www.w3schools.com/js/
3. https://www.programiz.com/javascript
4. https://javascript.info/
5. https://www.javascripttutorial.net/

## ES6 Features

- https://es6-features.org/#Constants
- https://www.jschallenger.com/overview

## YouTube Tutorials or Channels

1. Tap Academy - To learn javascript from memory point of view
2. Akshay Shaini - Namaste Javascript season 1, 2
3. RoadSideCoder - Interview Questions
4. JAFS Code School Tamil - Regular Expression
5. Code with guruji – WEB API
6. Nisha Singla
7. code.io tamil
8. UNIQ Technologies
9. Velmurugan MG - Debounce Concept
10. Teddy Smith
11. Proacademy Javascript channel
12. Andrew Burgess - Iterators, Generators, Iterables

## Fake API's Lists

1. https://catfact.ninja/
2. https://api.restful-api.dev/objects

## Interview Questions

- https://github.com/sudheerj/javascript-interview-questions
- https://github.com/yangshun/top-javascript-interview-questions
- https://dev.to/mrizwanashiq/primitive-and-non-primitive-56n8 (Primitive vs Non-Primitive Datatypes)
- https://www.javaguides.net/2019/04/javascript-array-copywithin-method.html (Array.copyWithin())

## Callback Function

1. What is a callback function in JavaScript?
2. What is the difference between a callback and a higher‑order function?
3. How do synchronous callbacks differ from asynchronous callbacks?
4. What are the pros and cons of using callbacks?
5. What are some real‑time applications of callbacks?
6. Do callbacks exist in JavaScript even without asynchronous operations?

## Promises

1. What is a Promise object? Is a Promise mutable or immutable?
2. What are the different states of a Promise?
3. What are the key methods of Promises, and how do they work?
4. What is the executor function in a Promise? When is it invoked?
5. What are the resolve() and reject() functions?
6. What is then() and catch()?
7. What is Promise chaining?
8. What happens if catch() and then() are misplaced?
9. Why do we need to pipe data through each then() in Promise chaining?
10. Can a Promise be cancelled once it’s created?

## Async / Await

1. What is an async function?
2. Since an async function always returns a Promise, what happens if you explicitly return another Promise inside it? Does that create a “Promise inside a Promise,” or is it flattened automatically?
3. What is the difference between async/await and Promises in JavaScript

## Read more

- Iterative methods - Example: arr.find()
- Mutating methods - arr.copyWithin(), arr.push(), arr.pop() etc.
- Generic methods - arr.find() method is generic. It only expects the this value to have a length property and integer-keyed properties. Read more about the algorithm like[Prime Number] on the same page.
- Static Properties or Methods
- Instance Properties or Methods

## Segmenter

```js
const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
const text = "👨‍👩‍👧‍👦💩🔥";

const segments = [...segmenter.segment(text)];
console.log(segments.map((s) => s.segment));
console.log([...text]);
console.log(text.split(""));

// ["👨‍👩‍👧‍👦", "💩", "🔥"]
```
