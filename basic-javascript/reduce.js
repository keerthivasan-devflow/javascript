// If the array only has one element (regardless of position) and no initialValue is provided, 
// or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.
const getMax = (a, b) => Math.max(a, b);
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

// If initialValue is provided and the array is not empty, then the reduce method will 
// always invoke the callback function starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// reduce() skips missing elements in sparse arrays, but it does not skip undefined values.
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN


// Example 1
const fruitsContainer = [
  "apple",
  "orange",
  "apple",
  "banana",
  "orange",
  "apple",
];

const fruitCounts = fruitsContainer.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCounts);

// acc[fruit] is undefined because "apple" hasn’t been seen yet.
// (undefined || 0) becomes 0.
// acc["apple"] = 0 + 1 → acc["apple"] = 1.
// Output: { apple: 3, orange: 2, banana: 1 }

// Example 2
const dataContainer = [
  { key: "a", value: 1 },
  { key: "b", value: 2 },
  { key: "c", value: 3 },
];
const transformedData = dataContainer.reduce((acc, item) => {
  acc[item.key] = item.value;
  return acc;
}, {});
console.log(transformedData); // Output: { a: 1, b: 2, c: 3 }

// 3. Grouping data based on certain object key:values
const person = [
  { name: "John", age: 30, city: "New York" },
  { name: "Jane", age: 25, city: "London" },
  { name: "Jim", age: 35, city: "New York" },
  { name: "Joan", age: 28, city: "London" },
];

const GroupPersonData = person.reduce((acc, curr, index, array) => {
  const key = curr.city;
  console.log(acc[key]);
  if (!acc[key]) {
    acc[key] = [curr];
  } else {
    acc[key].push(curr);
  }
  return acc;
}, {});
console.log(GroupPersonData);

// 4. Grouping array of object values
const data = [
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" },
];

const groupedData = data.reduce((accumulator, currentValue) => {
  const { Phase, Step, Task, Value } = currentValue;
  const key = `${Phase} - ${Task}`;
  //Debugging here
  console.log("Key Generation : ", key);
  if (!accumulator[key]) {
    accumulator[key] = { Phase, Task, TotalValue: 0 };
    //Debugging here
    console.log("Accumulator[key] : ", accumulator[key]);
    console.log("Phase : ", Phase);
    console.log("Task : ", Task);
  }
  accumulator[key].TotalValue += parseInt(Value);
  return accumulator;
}, {});

const resultValue = Object.values(groupedData);
console.log(resultValue);


const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Apple", category: "Food" },
  { name: "Banana", category: "Food" },
  { name: "Watch", category: "Accessories" },
];

const groupedByCategory = products.reduce((acc, currentProduct) => {
  // Get the category from the current product
  const category = currentProduct.category;

  // If the accumulator does not have that category, initialize it with an empty array
  if (!acc[category]) {
    acc[category] = [];
  }

  // Push the current product to the corresponding category
  acc[category].push(currentProduct);

  return acc;
}, {}); // Start with an empty object

console.log(groupedByCategory);

/*
Code explanation of above program:
----------------------------------

This code snippet is part of a reduce() function used to group and sum values in an array of 
objects based on certain criteria. Let's break it down:

accumulator is the variable that accumulates the result as the reduce() function iterates 
over the array of objects. key is a unique identifier that is used to group the objects. In this case, 
it is created by combining the Phase and Step values of each object. Phase and Step are properties 
extracted from the currentValue, which is the current object being processed in the reduce() function.
The code inside the if statement checks if the accumulator object does not already have a property
with the key key (i.e., the group identifier). If such a property does not exist, it creates one 
and initializes it with an object containing the Phase, Step, and TotalValue properties.

Here's a step-by-step explanation of the code:

if (!accumulator[key]): This condition checks if the accumulator object does not have a property 
with the key key. The ! operator negates the result, so the condition is true if accumulator[key] 
is falsy (undefined, null, 0, etc.).

accumulator[key] = { Phase, Step, TotalValue: 0 };: If the condition is true,
 it creates a new property in the accumulator object with the key key and assigns it 
 an object containing the Phase, Step, and TotalValue properties. TotalValue is initialized to 0 for each group.

This code ensures that for each unique Phase and Step combination, there is an entry in the accumulator
 object. If an entry already exists, it skips this step, ensuring that each group is created only once in the accumulator.

*/