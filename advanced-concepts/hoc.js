// var radiusValues = [2, 4, 6, 8];
// const area = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log("area(radiusValues) : ", area(radiusValues));

// const circumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// console.log("circumference(radiusValues) : ", circumference(radiusValues));

// const diameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log("diameter(radiusValues) : ", diameter(radiusValues));

//OPTIMIZED CODE HERE:

var radiusValues = [2,4,6,8]

const area = function(radius){
  return Math.PI * radius * radius
}

const circumference = function(radius){
  return 2 * Math.PI * radius
}

const diameter = function(radius){
  return 2 * radius
}

const calculate = function(radius, logic){
  const output = []
  radius.forEach((element) => {
    output.push(logicOfCircle(element));
  });
  return output
}

console.log(calculate(radiusValues, area))
console.log(calculate(radiusValues, circumference))
console.log(calculate(radiusValues, diameter))

// PART - 2 - HOC Implementation
let students = [
  {
    name: "Suresh",
    age: 18,
    location: "trichy",
    interest: ["Cricket", "Volleyball", "Tennis"],
  },
  {
    name: "Prasad",
    age: 23,
    location: "salem",
    interest: ["Hockey"],
  },
  {
    name: "Hariharan",
    age: 21,
    location: "chennai",
    interest: ["Basketball", "Tennis"],
  },
  {
    name: "Suresh",
    age: 19,
    location: "salem",
    interest: ["Cricket", "Badmiton", "Chess"],
  },
];

// function filterByAge(std) {
//   let eligiblePerson = [];
//   for (let i = 0; i < std.length; i++) {
//     if (std[i].age > 18) {
//       eligiblePerson.push(std[i]);
//     }
//   }
//   return eligiblePerson;
// }

// console.log(filterByAge(students));

// function filterByLocation(std) {
//   let eligiblePerson = [];
//   for (let i = 0; i < std.length; i++) {
//     if (std[i].location === "salem") {
//       eligiblePerson.push(std[i]);
//     }
//   }
//   return eligiblePerson;
// }

// console.log(filterByLocation(students));

function filter(std, func) {
  let eligiblePerson = [];
  for (let i = 0; i < std.length; i++) {
    if (func(std[i])) {
      eligiblePerson.push(std[i]);
    }
  }
  return eligiblePerson;
}

console.log(
  filter(students, function (student) {
    return student.age > 18;
  })
);
console.log(
  filter(students, function (student) {
    return student.location === "salem";
  })
);
