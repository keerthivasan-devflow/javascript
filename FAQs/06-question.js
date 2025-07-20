const firstname = "keerthivasan";
let reversed = "";

// Approach 1
for (let i = 0; i < firstname.length; i++) {
  reversed = firstname[i] + reversed;
}
console.log(reversed);

// Approach 2
// for (let i = firstname.length - 1; i >= 0; i--) {
//   reversed = reversed + firstname[i];
// }
// console.log(reversed);

// Approach 3
// console.log(firstname.split("").reverse("").join(""));
