let rose = {
  name: "Rose",
  color: "yellow",
};

let lotus = {
  name: "Lotus",
  color: "pink",
};

function display(price, country) {
  return `${this.name} is in ${this.color} color at costs ₹${price} and originates from ${country}.`;
}

console.log(display.call(rose, 20, "India"));
console.log(display.call(lotus, 80, "France"));
