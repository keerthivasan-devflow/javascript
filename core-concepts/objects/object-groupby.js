const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// Example 1: Use Object.groupBy() to group inventory items by their existing category.
const GroupedInventoryObject = Object.groupBy(
  inventory,
  ({ type }, index) => type,
);
console.log(GroupedInventoryObject)

// Example 2: Use Object.groupBy() to group inventory items into custom categories based on quantity.
const GroupedInventoryObjectByQuantity = Object.groupBy(
  inventory,
  ({ quantity }) => {
    return quantity > 5 ? "ok" : "restock";
  },
);
console.log(GroupedInventoryObjectByQuantity);


// These are some inputs to be practiced using Object.groupBy() or Map.groupBy()
const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
  { name: "musambi", quantity: 100 },
];
