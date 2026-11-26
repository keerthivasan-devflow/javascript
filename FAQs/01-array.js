// Example 1: Remove target element from an array
let number = [10, 20, 30, 40];

function removeElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      arr.splice(i, 1);
      return arr;
    }
  }
  return -1;
}

console.log(removeElement(number, 30));
console.log(removeElement(number, 10));
console.log(removeElement(number, 10));

// Example 2: Remove duplicates from an array
let colors = ["red", "green", "red", "green", "green", "blue"];

// Approach 1 - Using new Set()
// Time Complexity - O(n)
// Space Complexity - O(n)
function pickUniqueColors(arr) {
  return Array.from(new Set(arr));
}

console.log(pickUniqueColors(colors));

// Approach 2 - Using for() loop with includes()
// Time Complexity - O(n^2) due to for() + includes()
// Space Complexity - O(n)
let uniqueColors = [];

function PickColors(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueColors.includes(arr[i])) {
      uniqueColors.push(arr[i]);
    }
  }
}

PickColors(colors);
console.log(uniqueColors);

// Approach 3 -  using filter() method
let letters = ["A", "B", "A", "C", "B"];
let uniqueChars = colors.filter(
  (element, index) => letters.indexOf(element) == index,
);
console.log("uniqueChars:", uniqueChars);

// Example 4: Remove falsy values from an array using the filter() method.
const falsyValues = [
  "keerthi",
  "",
  0,
  true,
  2096938,
  false,
  null,
  undefined,
  -0,
  NaN,
];
const truthyValues = falsyValues.filter((value) => value);
console.log(truthyValues);

// Example 5: Remove falsy value in an object
const profiles = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

function hasValidID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  return false;
}

const usersWithValidIDs = profiles.filter(hasValidID);
console.log(usersWithValidIDs);

// Example 6: Find the occurence of each array element
let arr = [5, 2, 1, 2, 5, 1, 1, 2, 9, 4];
let count = {};

arr.forEach((element) => {
  if (!count[element]) {
    count[element] = 1;
  } else {
    count[element] = count[element] + 1;
  }
});

console.log(count);
