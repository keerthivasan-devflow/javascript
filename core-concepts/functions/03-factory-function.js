// To demonstrate the difference between constructor functions and factory functions.

// Example 1: Factory Function
// Case 1: The problem is that:
// 1. When employee("Alice" ...) executes, javascript creates an object with its own 'getDetails()' and 'increaseSalary()'.
// 2. When employee("Barb" ...) executes, javascript creates another object with another 'getDetails()' and 'increaseSalary()'.
function employee(name, role, salary) {
  return {
    name,
    role,
    salary,

    getDetails() {
      return `${this.name} works as a ${this.role} and earns ₹${this.salary} per month.`;
    },

    increaseSalary(amount) {
      this.salary += amount;
    },
  };
}

const employee1 = employee("Alice", "Frontend Developer", 40000);
const employee2 = employee("Barb", "UI Designer", 35000);

console.log(employee1.getDetails());
console.log(employee2.getDetails());

employee1.increaseSalary(5000);
console.log(employee1.getDetails());

employee1.getDetails();
employee2.getDetails();
console.log(employee1.getDetails === employee2.getDetails); // returns false.

// Example 2: Constructor Function
// Case 2: The solution is that:
// Note: 'getDetails()' is defined once on Employee.prototype, rather than being created separately inside every object.
function Employee(name) {
  this.name = name;
}

Employee.prototype.getDetails = function () {
  console.log(`${this.name} is our employee.`);
};

const employee3 = new Employee("Calvin");
const employee4 = new Employee("Kate");
console.log(employee3.getDetails === employee4.getDetails); // returns true.

// Example 3: Factory Function w/ prototype property.
// Case 3: The problem is that:
// Employee.prototype.industry = "IT Software Engineering"; is working correctly, but employee1 and employee2 cannot
// access the industry property through their prototype chain.
// The prototype chain of each returned object looks like this: employee1 → Object.prototype
// Notice that Employee.prototype is not part of this chain.

// Example 4: Factory Function with Shared Methods Across Instances. (Part - 1)
// Case 4: The solution is that:
function Employee(name, role, salary) {
  const employee = {
    empName: name,
    empRole: role,
    empSalary: salary,
  };

  Object.setPrototypeOf(employee, Employee.prototype);

  return employee;
}

Employee.prototype.industry = "IT Software";
const emp = new Employee("Hari", "Developer", 75000);
console.log(emp);

// Example 5: Factory Function with Shared Methods Across Instances. (Part - 2)
// Case 5: The solution is that: using call()
function employee(name, role) {
  return {
    name,
    role,
  };
}

function getDetails() {
  console.log(`${this.name} is our employee and working as a ${this.role}`);
}

const employee5 = employee("Carlsberg", "Developer");
const employee6 = employee("Alexander", "Recruiter");

getDetails.call(employee5);
getDetails.call(employee6);
