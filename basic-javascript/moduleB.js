import employeeSalary from "./moduleA.js";
import employeeDesignation from "./moduleA.js";
import { employeeID, printfullName, car, bike, fruits } from "./moduleA.js";

console.log("Before modification: ", fruits);
car.carname = "Volvo";
fruits[0] = "Grapes";

printfullName();
console.log("employeeID : ", employeeID);
console.log("Employee Salary : ", employeeSalary.employeeSalary);
console.log(employeeDesignation.employeeDesignation);

console.log(car);
console.log(bike);
console.log("After modififcation: ", fruits);
