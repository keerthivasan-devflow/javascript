
// A. Array Destructuring

// 1. if we have only 3 destructured array avriables, then only first three variables will be assigned to them
const numbers = [1,2,3,4,5,6,7,8,9,10]
const [firstNumber, secondNumber, thirdNumber] = numbers
console.log(firstNumber,secondNumber, thirdNumber)

// 2. Destructuring array w/ undefined holes
const evenNumber = [2,4,6,8,10]
const [firstEvenNumber,,thirdEvenNumber] = evenNumber
console.log(firstEvenNumber, thirdEvenNumber)

// 3. If destructured array has more variables than array values, the excessive destructured variables will be assigned as "undefined"
const fruits = ["Apple","Banana", "Dates"]
const [apple, banana, dates, extra_variable] = fruits
console.log(apple, banana, dates, extra_variable)

// 4. If we have nested array, what happens while destructuring array
const letters = ["A", ["B", "C"], "D", "E", "F"]
const [A, X, D] = letters
console.log(A, X, D)

// 5. Swap two numbers
var x = 5, y = 3;
[x, y] = [y, x];
console.log(x, y);

// 6. Destructuring w/ rest operator
const products = ["Headset", "Computer", "Laptop", "Bags", "Notebooks"]
const [firstProduct, secondProduct, ...thirdProduct] = products
console.log(firstProduct, secondProduct, ...thirdProduct)

// B. Object Destructuring
var person = {
    firstName: "Keerthivasan",
    lastName: "Mani",
    age: 25,
}

var {firstName, lastName, age = 30, salary = 35000.77} = person
console.log(firstName, lastName, age)

var {firstName : fN, lastName: lN, age: aN} = person
console.log(fN, lN, aN)

var {fullName = `${firstName} ${lastName}`} = person
console.log(fullName)