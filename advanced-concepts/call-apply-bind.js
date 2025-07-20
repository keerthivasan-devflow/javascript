let person1 = {
  firstname: "Lakshashree",
  lastname: "Sagayaraja",
  display: function (age, location) {
    return this.firstname +" " + this.lastname + " is " + age + " years old and lives in " + location;
  },
};

let person2 = {
  firstname: "Parvesh",
  lastname: "Sagayaraja",
};

const result1 = person1.display(5, "Chennai")
const result2 = person1.display.call(person2, 8, "Trichy");
const result3 = person1.display.apply(person2, [10, "Salem"]);
const result4 = person1.display.bind(person2, 20, "Erode");

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4())
