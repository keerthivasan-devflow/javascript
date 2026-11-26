// By default, a regular expression looks for a matching sequence of characters, not necessarily an exact whole-word match.
const str = "test testing tester";

console.log(str.match(/test/));
// Note: This also returns all matching occurrences, but without additional match details.
// Output: [ 'test', 'test', 'test' ] → making it less useful.
console.log(str.match(/test/g));
console.log([...str.matchAll(/test/g)]);

// Regular Expression Declaration
let text1 = /Hello/;
let text2 = new RegExp("Hello");
console.log(typeof text1);
console.log(typeof text2);

//RegExp Modifiers and Properties
var pattern = /ain/gim;
var text = "the rain is in spain mainly in \nthe plain";
let position = "";
while (pattern.test(text) == true) {
  position = position + "\nstarts the next search at: " + pattern.lastIndex;
}

console.log("pattern.global : ", pattern.global);
console.log("pattern.multiline : ", pattern.multiline);
console.log("pattern.ignoreCase : ", pattern.ignoreCase);
console.log("pattern.source : ", pattern.source);

