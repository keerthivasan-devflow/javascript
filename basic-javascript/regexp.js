//RegExp Modifiers and Properties
var pattern = /ain/gim;
var text = "the rain is in spain mainly in \nthe plain";
let position = "";
while (pattern.test(text) == true) {
  position = position + "\nstarts the next search at: " + pattern.lastIndex;
}

// console.log("pattern.global : ", pattern.global);
// console.log("pattern.multiline : ", pattern.multiline);
// console.log("pattern.ignoreCase : ", pattern.ignoreCase);
// console.log("pattern.source : ", pattern.source);

let text1 = /Hello/
let text2 = new RegExp("Hello")

console.log(typeof text1)
console.log(typeof text2)