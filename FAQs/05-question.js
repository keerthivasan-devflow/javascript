const firstname = "keerthivasan";
age = 28;

console.log(delete firstname);
console.log(delete age);

// variables declared with var/let/const keyword becomes non-configurable property so we cannot delete
// variables that are not declared with no keywords becomes window global objct attributes, such attributes can be deleted
