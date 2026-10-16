const person = {
  firstname: "Keerthivasan",
  lastname: "Mani",
  age: 26,
  location: "trichy",
  children: {
    count: 2,
    names: ["Parvesh", "Laksha"],
  },
  address: {
    street: "Mariyamman Kovil Street",
    city: "Jeeyapuram",
    district: "Trichy",
  },
  fullname() {
    return `${this.firstname} + ' ' + ${this.lastname}`;
  },
};

for (const key in person) {
  if (typeof person[key] === "object") {
    for (const nestedKey in person[key]) {
      console.log(`[${nestedKey}] => ${person[key][nestedKey]}`);
    }
  } else {
    console.log(`[${key}] => ${person[key]}`);
  }
}
