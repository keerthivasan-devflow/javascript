// Example 1: Removing a specific item from an array
var number = [10, 20, 30, 40];
var givenNumber = 2;
let index = number.indexOf(givenNumber);
if (index === -1) {
  console.log("Number doesn't exist!");
} else {
  number.splice(index, 1);
}

// Example 2: Removing Duplicate elements from an array.
// A. Set() can be used to remove duplicates from an array
let colors = ["red", "green", "red", "green", "green", "blue"];
console.log([...new Set(colors)]);

// B. Create a new array using arr.forEach()
let addColors = [];
colors.forEach((element) => {
  if (addColors.includes(element)) {
    console.log(`${element} is already exist`);
  } else {
    addColors.push(element);
  }
});
console.log("addColors : ", addColors);

// C. arr.filter() removes duplicate from an array.
let letters = ["A", "B", "A", "C", "B"];
let uniqueChars = colors.filter(
  (element, index) => letters.indexOf(element) == index,
);
console.log("uniqueChars:", uniqueChars);

// Example 3: Find the occurence of each array element
let arr = [5, 2, 1, 2, 5, 1, 1, 2, 9, 4];
let count = {};
arr.forEach((element) => {
  // Check whether the current array element already exists as a key in the count object.
  // If it does, increment its count; otherwise, initialize it to 1.
  if (count[element]) {
    count[element] = count[element] + 1;
  } else {
    count[element] = 1;
  }
});
console.log(count);

// Example 4: Removing falsy values from an array using the filter() method.
const falsyValues = ["keerthi", "", 0, true, 2096938, false, null, undefined];
const truthyValues = falsyValues.filter((value) => value);
console.log(truthyValues);

// Example 5: Calculate sum of each product.
const products = [
  {
    name: "laptop",
    price: 5000,
    count: 2,
  },
  {
    name: "Headset",
    price: 1500,
    count: 5,
  },
  {
    name: "Watch",
    price: 1200,
    count: 3,
  },
];
const total = products.map((product) => {
  //   return [product.name, product.price * product.count];
  return {
    product_name: product.name,
    total_product_cost: product.price * product.count,
  };
});

console.log(total);
