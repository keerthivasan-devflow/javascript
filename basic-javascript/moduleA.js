export let firstname = "Keerthivasan";
export let lastname = "Mani";
export var employeeID = 174640;
var employeeSalary = 7500.112;
var employeeDesignation = "React Developer";
export var fruits = ["Apple", "Banana", "Cucumber"];

let car = {
  carname: "Toyato",
  carmodel: 2017,
  carprice: "25000$",
};

let bike = {
  bikename: "Honda",
  bikemodel: 2019,
  bikeprice: "75000$",
};

export let printfullName = function () {
  console.log("My name is " + firstname + " " + lastname);
};

export default { employeeSalary, employeeDesignation };
export { car, bike };

