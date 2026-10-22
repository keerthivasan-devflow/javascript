// Example: Array of Objects – Iterate using "for...of" or "for...in"

const cars = [
  { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
  { name: "BMW", models: ["320", "X3", "X5"] },
  { name: "Fiat", models: ["500", "Panda"] },
];

for (let k in cars) {
  let models = cars[k].models;
  for (let nk in models) {
    console.log(cars[k].models[nk]);
  }
}

for (let car of cars) {
  for (let model of car.models) {
    console.log(model);
  }
}
