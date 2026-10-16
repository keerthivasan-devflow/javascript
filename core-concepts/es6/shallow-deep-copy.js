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
// let copiedValue = originalValue;
// copiedValue.age = 28;
// console.log("After making changes");
// console.log("originalValue : ", originalValue);
// console.log("copiedValue : ", copiedValue);

//way 2
// let copiedValue = JSON.stringify(originalValue) //you cannot add/update, you cannot convert function as string
// let copiedValue = JSON.parse(JSON.stringify(originalValue)) //now you can update, doesn't affect copiedValue but problem with nested obj
// console.log("Before making changes");
// console.log("copiedValue : ", copiedValue);
// copiedValue.age = 28;
// copiedValue.address.city = "salem";
// console.log("After making changes");
// console.log("copiedValue : ", copiedValue);

//way3 affects both original and copied value nested object property but provides partial deep copy
// let copiedValue = Object.assign({}, originalValue);
// copiedValue.address.city = "Salem";
// copiedValue.age = 32;
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
