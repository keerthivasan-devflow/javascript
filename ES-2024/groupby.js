const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const groupedObjectInventory = Object.groupBy(inventory, ({ type }) => type);
const groupedMapInventory = Map.groupBy(inventory, ({ type }) => type);

console.log(groupedObjectInventory);
console.log(groupedMapInventory);

// Temporal.PlainDate()
// Temporal.PlainTime()
// Temporal.PlainMonthDay()
// Temporal.PlainYearMonth()
