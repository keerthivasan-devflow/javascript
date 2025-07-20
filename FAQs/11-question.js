let arr = [1, , 3];

console.log(0 in arr);
console.log(1 in arr);
console.log(arr.length);



// Interview Question
const parent = {greet: () => "Hello!"};
const child = Object.create(parent);

console.log("greet" in child); // true
console.log(child.hasOwnProperty("greet")); // false
