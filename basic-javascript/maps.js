const fruits = new Map([
    ["Apples",500],
    [1,"First Product"],
    ["Ravi", true]
])

fruits.set("name","Custard Apple")
console.log([...fruits])
console.log([...fruits][1][1])
console.log(fruits.get("Ravi"))
console.log(fruits.size)
fruits.delete(1)
console.log([...fruits])
for(let [key, value] of fruits.entries()){
    console.log(key, value)
}
console.log(fruits.has("Ravi"))

// Create Objects
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };

// Create a Map
const fruit = new Map();

// Add new Elements to the Map
fruit.set(apples, 500);
fruit.set(bananas, 300);
fruit.set(oranges, 200);

console.log(Array.from(fruit)[0][0].name)

//WEAK MAP
const list = new WeakMap()
const obj1 = {}
const obj2 = {}
const obj3 = {}
list.set(obj1,"Apple")
list.set(obj2,true)
list.set(obj3, 45)
console.log(list)
console.log(list.has(obj2))