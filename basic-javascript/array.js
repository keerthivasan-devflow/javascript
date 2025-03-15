//Why do we need array - example:
let shoppingCart = [];
function addToCart(item) {
  shoppingCart.push(item);
  console.log(`${item} added to the cart!`);
  console.log("Current Shopping Cart : ", shoppingCart);
}
addToCart("bag");
addToCart("water bottle");
addToCart("headset");
addToCart("laptop");
addToCart("travel bag");
console.log(shoppingCart);

//1. Deleting only even numbers from the given array elements
let input = [2, 8, 5, 3, 7, 10];
let odd = input.filter((value) => value % 2 != 0);
console.log(odd);

//2. Removing a particular item/element from an array
var number = [10, 20, 30, 40];
var getNumber = 2;
let index = number.indexOf(getNumber);
if (index === -1) {
  console.log("Number doesn't exist!");
} else {
  number.splice(index, 1);
  console.log(number);
}

// 3. Removing Duplicates from array elements.
let colors = ["red", "green", "red", "green", "green", "blue"];

// 3.1. Removing duplicates using Set()
console.log([...new Set(colors)]); 

// 3.2. Removing duplicates using Array.includes()
let addColors = [];
colors.forEach((element) => {
  if (addColors.includes(element)) {
    console.log(`${element} is already exist`);
  } else {
    addColors.push(element);
  }
});
console.log("addColors : ", addColors);

// 3.3. Removing duplicates using Array.filter()
let letters = ["A", "B", "A", "C", "B"];
let uniqueChars = colors.filter(
  (element, index) => letters.indexOf(element) == index
);
console.log("uniqueChars:", uniqueChars);

// 4. Find the occurence of each array element
let arr = [5, 2, 1, 2, 5, 1, 1, 2, 9, 4];
let count = {};
arr.forEach((element) => {
  //Checking the current array element as a key is present or not in the count object
  //if it presents, then count++ ; else count = 1
  if (count[element]) {
    count[element]++;
  } else {
    count[element] = 1;
  }
});
console.log(count);

// 5. Adding up the Value key using Array.reduce()
let list = [
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" },
];
let CalculatedValue = list.reduce((acc, cur, index, arr) => {
  acc = acc + Number(cur.Value);
  return acc;
}, 0);

console.log(CalculatedValue);

// 6. Who has actually completed atleast one task if you've given by list of tasks
// 6.1. Have a list of input fields, suppose if any non-empty values exist, then pls do fill out. (Exercise)
let tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
  { id: 4, title: "Task 4", completed: false },
];

let StatusResult = tasks.some((task) => {
  if (task.completed) {
    return true;
  }
});
console.log(StatusResult);

// 7. Removing Falsy Values using filter() method
const falsyValues = ["keerthi", "", 0, true, 2096938, false, null, undefined];
const truthyValues = falsyValues.filter((value) => value);
console.log(truthyValues);

// 8. To find the totalProductsValue using Array.map() - return object by creating our own key in the return statement
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
const totalProductsValue = products.map((product) => {
  console.log(product);
  //   return [product.name, product.price * product.count];
  return {
    nameOfTheProduct: product.name,
    totalValueOfTheProduct: product.price * product.count,
  };
});

// 10. Grouping objects using Array.map()
const myUsers = [
  { name: "shark", likes: "ocean" },
  { name: "turtle", likes: "pond" },
  { name: "otter", likes: "fish biscuits" },
];
// output should be like this:
[
  { shark: "ocean", age: 50 },
  { turtle: "pond", age: 60 },
  { otter: "fish biscuits", age: 50 },
];

const groupedObjects = myUsers.map((user) => {
  // const container = {};
  // container[item.name] = item.likes;
  // container.age = item.name.length * 10;
  // return container;
  return {
    [user.name]: user.likes,
    ages: user.name.length * 10,
  };
});
console.log(groupedObjects);

// 11. Appending certain text to the existing string using forEach() method
const fruits = ["orange", "apple", "pomegranate"];
fruits.forEach((fruit, index, array) => {
  /*It accesses the array parameter directly to modify the current element. 
  It prepends "Sweet" to each fruit name and assigns it back to the same index in the fruits array. */
  array[index] = "Sweet" + fruit;
});
console.log(fruits);

// 12. checking whether user is available or not
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];
let userToFind = 3;
let UserResult = users.find((user) => {
  if (user.id === userToFind) {
    return user.id;
  }
});
console.log(UserResult);
if (UserResult) {
  console.log(`${UserResult.name} is available now`);
} else {
  console.log("Not a Valid User");
}

//13. Array.slice() method with various conditions
const colorsList = ["Red", "Green", "Blue", "Black", "White", "orange"];
console.log("colorsList.length : ", colorsList.length);
console.log("colorsList.slice() : ", colorsList.slice());
console.log("colorsList.slice(0) : ", colorsList.slice(0));
console.log("colorsList.slice(3) : ", colorsList.slice(3));
console.log("colorsList.slice(-2) : ", colorsList.slice(-2));
console.log("colorsList.slice(2, 5) : ", colorsList.slice(2, 5));
console.log("colorsList.slice(5, 2) : ", colorsList.slice(5, 2));
console.log("colorsList.slice(2,2) : ", colorsList.slice(2, 2));
console.log("colorsList.slice(-2, -5) : ", colorsList.slice(-2, -5));
console.log("colorsList.slice(-5, -2) : ", colorsList.slice(-5, -2));
console.log("colorsList.slice(null, null) : ", colorsList.slice(null, null));
console.log(
  "colorsList.slice(null, undefined) : ",
  colorsList.slice(null, undefined)
);
console.log("colorsList.slice(-2, 5) : ", colorsList.slice(-2, 5));
console.log("colorsList.slice(5, -2) : ", colorsList.slice(5, -2));

//14. Array.indexOf(), Array.lastIndexOf()
console.log("Array using indexOf Method", numbers.indexOf(3));
console.log("Array using indexOf Method", numbers.indexOf(3, 4));
console.log(numbers.lastIndexOf(10, -6));
console.log(numbers.lastIndexOf(10, -8));
console.log(numbers.lastIndexOf(10, -9));
console.log(numbers.lastIndexOf(10, -10));

// 15.
let colorslist = [`red`, `green`, `red`, `green`, `green`, `blue`];
let countColors = {};
colorslist.forEach((element, index, array) => {
  console.log(`Step:${index + 1}\tcountColors: ${JSON.stringify(countColors)}`);
  if (countColors[element]) {
    console.log(
      `Step:${
        index + 1
      }\tElement:"${element.toLocaleUpperCase()}" is exist! Increment++`
    );
    console.log("\n");
    countColors[element]++;
  } else {
    console.log(
      `Step:${
        index + 1
      }\tElement:"${element.toLocaleUpperCase()}" doesn't exist! Initialize it to 1`
    );
    console.log("\n");
    countColors[element] = 1;
  }
});
console.log("Final output: ", countColors);

//16.  Array-Like conversion to array
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // ignored by slice() since length is 3
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3)); // [ 3, 4 ]
