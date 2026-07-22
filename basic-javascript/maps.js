// Example: Map.groupBy(array, callback)
// Returns a new map where each key is the grouping criterion and each value is an array of elements belonging to that group.

// Example 1: Group items by quantity scale.
const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
  { name: "musambi", quantity: 100 },
];

function CalculateScale({ quantity }) {
  if (quantity > 200) return "high";
  else if (quantity >= 150 && quantity <= 200) return "moderate";
  else return "low";
}

const result = Map.groupBy(fruits, CalculateScale);
console.log(result);

// Example 2: Group Strings by Length - Grouping is done based on returned value of callback.
const words = ["one", "two", "three", "four", "five"];

const byLength = Map.groupBy(words, (word) => word.length);

console.log(byLength.get(3)); // ["one", "two"]
console.log(byLength.get(4)); // ["four", "five"]
console.log(byLength.get(5)); // ["three"]

// Example 3:
// Notice that the keys are objects (restock, sufficient), which is something Object.groupBy() cannot handle.
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };

const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);

console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
console.log(result.get(sufficient));
// [{ name: "asparagus", ...}, { name: "goat", ...}, { name: "cherries", ...}, { name: "fish", ...}]
