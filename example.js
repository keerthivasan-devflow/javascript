const dataContainer = [
  { key: "a", value: 1 },
  { key: "b", value: 2 },
  { key: "c", value: 3 },
];

const result = dataContainer.reduce((acc, curr) => {
  if (!acc[curr.key]) {
    acc[curr.key] = curr.value;
  }
  return acc;
}, {});

console.log(result);

const person = [
  { name: "John", age: 30, city: "New York" },
  { name: "Jane", age: 25, city: "London" },
  { name: "Jim", age: 35, city: "New York" },
  { name: "Joan", age: 28, city: "London" },
];

const groupedCity = person.reduce((acc, curr) => {
  if (!acc[curr.city]) {
    acc[curr.city] = [curr];
  } else {
    acc[curr.city].push(curr);
  }

  return acc;
}, {});

console.log(groupedCity);


const numbers = [100, 200, 200, 100, 100, 300, 200, 300, 400, 500];
const count = {};
numbers.reduce((acc, curr) => {
  if (acc[curr]) acc[curr] = acc[curr] + 1;
  else acc[curr] = 1;
  return acc;
}, count);

console.log(count);


const person2 = {
  firstname: "Keerthivasan",
  lastname: "Mani",
  age: 26,
  location: "trichy",
  dateOfBirth: "16-04-1997",
  children: {
    count: 2,
    names: ["Parvesh", "Laksha"],
  },
  address: {
    doorNo: 272,
    street: "Mariyamman Kovil Street",
    city: "Jeeyapuram",
    district: "Trichy",
  },
  fullname() {
    return `${this.firstname} + ' ' + ${this.lastname}`;
  },
};