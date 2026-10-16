let student = {
  name: "Heidi Kennedy",
  age: 21,
  grade: "A",
  subjects: ["Math", "Science", "English"],
  marks: {
    Maths: 95,
    Science: 100,
  },
};

// Method: Object.preventExtension() - No addition but allows modification and deletion.
Object.preventExtensions(student);
student.locality = "Colorado";
student.name = "Putnam Derek";
delete student.subjects;
console.log("Object.preventExtension() : ", student);
console.log("Object.isExtensible(student) : ", Object.isExtensible(student));

// Method: Object.seal() - No addition and deletion but allows modification.
Object.seal(student);
student.email = "rick@gmail.com";
student.grade = "B";
delete student.subjects;
console.log("Object.seal() : ", student);
console.log("Object.isSealed() : ", Object.isSealed(student));

// Method: Object.freeze() - No addition, modification and deletion.
Object.freeze(student);
student.email = "rick@gmail.com";
student.grade = "B";
delete student.grade;
console.log("Object.freeze() : ", student);
console.log("Object.isFrozen() : ", Object.isFrozen(student));

// Example: Deep freeze of an object
for (let key in student) {
  if (typeof student[key] === "object") {
    Object.freeze(student[key]);
  } else {
    Object.freeze(student);
  }
}

student.name = "Keerthi";
student.marks.Maths = "100";
student.subjects[1] = "Javascript";
console.log(student);
