## Website Sources

1. https://courses.bigbinaryacademy.com/learn-javascript/
2. https://www.w3schools.com/js/
3. https://www.programiz.com/javascript
4. https://javascript.info/
5. https://www.javascripttutorial.net/

## ES6 Features

- https://es6-features.org/#Constants
- https://www.jschallenger.com/overview

## YouTube Tutorials / Channels

1. Tap Academy - To learn javascript from memory point of view
2. Akshay Shaini - Namaste Javascript season 1, 2
3. RoadSideCoder - Interview Questions
4. JAFS Code School Tamil - Regular Expression
5. Code with guruji – web API’s
6. Nisha Singla
7. code.io tamil
8. UNIQ Technologies
9. Velmurugan MG - YouTube Channel (Esp'ly for Debounce Concept)
10. Teddy Smith
11. Proacademy Javascript channel

## Interview Questions

- https://github.com/sudheerj/javascript-interview-questions
- https://github.com/yangshun/top-javascript-interview-questions
- https://dev.to/mrizwanashiq/primitive-and-non-primitive-56n8 (Primitive vs Non-Primitive Datatypes)
- https://www.javaguides.net/2019/04/javascript-array-copywithin-method.html (Array.copyWithin())


## Spread operator

Example 1 : Working w/ arrays
let hobbies = ["reading", "cooking"]
let newHobbies = ["playing games"]
let mergedHobbies = [hobbies, newHobbies] - This will create a nested array so we need spread operator to unpack elements
let mergedHobbies = [...hobbies, ...newHobbies]

Example 2 : Working w/ objects
let user = {
username: "kevasan",
password: "keerthi123"
}

let extendedUser = {...user, isAdmin: true}