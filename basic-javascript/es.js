//1. DEFAULT FUNCTION PARAMETERS
function test(x = 5, y = 15, z = 25) {
    console.log(x, y, z)
}

test() // 5, 15, 25
test(10) //10, 15, 25
test(10, 20) //10,20,25
test(10, 20, 30) //10,20,30
test(10, undefined, undefined) //10, 15, 25
test(10, undefined, null) //10, 15, null

/* DESTRUCTURING THE ARRAY
----------------------------*/
//1. if we have only 3 destructured array avriables, then only 
// first three variables will be assigned to them
const numbers = [1,2,3,4,5,6,7,8,9,10]
const [firstNumber, secondNumber, thirdNumber] = numbers
console.log(firstNumber,secondNumber, thirdNumber)

//2. Destructuring array w/ undefined holes
const evenNumber = [2,4,6,8,10]
const [firstEvenNumber,,thirdEvenNumber] = evenNumber
console.log(firstEvenNumber, thirdEvenNumber)

//3. If destructured array has more variables than array values, 
//the excessive destructured variables will be assigned as "undefined"
const fruits = ["Apple","Banana", "Dates"]
const [apple, banana, dates, extra_variable] = fruits
console.log(apple, banana, dates, extra_variable)

//4. If we have nested array, what happens while destructuring array
const letters = ["A", ["B", "C"], "D", "E", "F"]
const [A, X, D] = letters
console.log(A, X, D)

//5. Swaping two numbers - using destructuring
var x = 5, y = 3;
[x, y] = [y, x];
console.log(x, y);

//6. Destructuring w/ rest operator
const products = ["Headset", "Computer", "Laptop", "Bags", "Notebooks"]
const [firstProduct, secondProduct, ...thirdProduct] = products
console.log(firstProduct, secondProduct, ...thirdProduct)

//3. DESTRUCTURING THE OBJECTS
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

//4. String templates
//5. Class
//6. for of loop
//7. for in loop
//8. class and methods
//10. Modules
//11. Named Exports & Default Exports
//12. sets, WeakSet, map, WeakMap
//13. Exporting Function and Classes

// 14. Symbols
// i. typeof Symbol is Symbol
// ii. symbols are not iterable in for/in loop, it will be ignored when it is used in object
let s1 = Symbol("First Symbol")
let s2 = Symbol("Second Symbol")
console.log(s1, typeof symbol1)
console.log(s1 == s2)
console.log(s1 === s2)

/* 
S3 symbol wil be created in the global registry when we call Symbol.for() at first time.
if you call the Symbo.for() w/ same description [which is assigned to s3], s3 will be retrieved 
and stored in s4, therefore they will be equal
*/
let s3 = Symbol.for("First Symbol For")
let s4 = Symbol.for("First Symbol For")
console.log(s3)
console.log(s4)
console.log(s3 == s4)
console.log(s3 === s4)
console.log(s4.description)
console.log(Symbol.keyFor(s3))

let students = {
    [s1]: "Keerthivasan",
    [s2]: "Mani",
    age: 25
}
console.log(Object.getOwnPropertyNames(students))
console.log(Object.getOwnPropertySymbols(students))
for(let key in students){
    console.log(students[key])
}

//15. Object Literals
//1. List of variables as objects
const username = 'dipakkr'
const country = 'India'
const password = '123456'
const user = { 
	username,
	country,
	password,
};
console.log(user.username)
console.log(username)

//2. you can directly write function w/o using keyword 'function'
var person = {
    userName: "Keerthivasan",
    age: "30",
    printName(){
        console.log(`My name is : ${userName}`)
    }
}
person.printName()

//3. Computed Property - we can have variable value as property in object
//4. we can add key as words with white spaces - see below "Machine Hours as key"
let machineName = 'machine name';
let machine = {
    [machineName]: 'server',
    'machine hours': 10000
};
console.log(machine[machineName]);
console.log(machine['machine hours']);
console.log(machine["machine name"])

//5. Function with objects
function getLaptop(make, model, year) {
    // return {
    //     make: make,
    //     model: model,
    //     year: year
    // }
    return {
        make,
        model,
        year
    }
}
console.log(getLaptop("Apple", "MacBook", "2015"))

//Shallow Copy and Deep Copy
let originalValue = {
  name: "Keerthi",
  age: 29,
  greet() {
    console.log("welcome to channel");
  },
  address: {
    city: "Trichy",
    pincode: 639101,
  },
};

//way 1, you can add, update but affects both
// let copiedValue = originalValue
// console.log("originalValue: ", originalValue);
// console.log("copiedValue: ", copiedValue);
// copiedValue.dob = "16-04-1997"
// console.log("originalValue: ", originalValue);
// console.log("copiedValue: ", copiedValue);

//way 2
// let copiedValue = JSON.stringify(originalValue) //you cannot add/update, you cannot convert function as string
// let copiedValue = JSON.parse(JSON.stringify(originalValue)) //now you can/update, doesn't affect copiedValue but problem with nested obj
// console.log("originalValue: ", originalValue);
// console.log("copiedValue: ", copiedValue);
// copiedValue.dob = "16-04-1997"
// copiedValue.age = 26
// copiedValue.address.city = "Salem"
// console.log("originalValue: ", originalValue);
// console.log("copiedValue: ", copiedValue);

//way3 affects both original and copied value nested object property but provides partial deep copy
// let copiedValue = Object.assign({}, originalValue)
// copiedValue.address.city = "Salem"
// console.log("originalValue: ", originalValue);
// console.log("copiedValue: ", copiedValue);

//way 4
let copiedValue = { ...originalValue };
console.log("originalValue: ", originalValue);
console.log("copiedValue: ", copiedValue);
// copiedValue.address.city = "Salem" //affect both original and copiedvalue
copiedValue = {
  ...copiedValue,
  address: {
    ...copiedValue.address,
    city: "Salem",
  },
};
console.log("originalValue: ", originalValue);
console.log("copiedValue: ", copiedValue);