//INTERVIEW QUESTIONS
//1. Removing Duplicates in a string
let myString = "Haammmzzzaaa";

myString = myString
  .split("")
  .filter((item, index, array) => array.indexOf(item) === index)
  .join("");

console.log(myString); // "Hamza"

//2. Finding the ducplicated letters
var sample = "success";
function findDuplicatedChars(str) {
  let repeat = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (
        str.charAt(i) == str.charAt(j) &&
        repeat.indexOf(str.charAt(j)) == -1
      ) {
        repeat += str.charAt(i);
      }
    }
  }
  return repeat;
}
console.log(findDuplicatedChars(sample)); //output: sc

//3. Counting vowels and consonants in a string
var text = "abcdefghijklmnopqrstuvwxyz";
var vowels = 0;
var consonants = 0;

for (i = 0; i < text.length; i++) {
  if (text[i].match(/[aeiou]/)) {
    vowels++;
  } else {
    consonants++;
  }
}

console.log(vowels, consonants);

//4. Finding the occurence of given letter in a sring
var text = "He is a very nice person";
var count = 0;
var givenLetter = "e";

for (let key in text) {
  if (text[key].includes(givenLetter)) {
    count++;
  }
}

console.log(count);

//5. Find the occurence of each character in a string
var str = "Hello World";
var arr = str.split("");
var occ = {};
for (var i = 0; i < arr.length; i++) {
  if (occ[arr[i]]) {
    occ[arr[i]]++;
  } else occ[arr[i]] = 1;
}
for (let i in occ) {
  console.log("count of " + i + " -> " + occ[i]);
}

var counts = str.split("").reduce(function (dst, c) {
  dst[c] = (dst[c] || 0) + 1;
  return dst;
}, {});
console.log(counts);

//6. How to remove specific character from the given string
var text = "Keerthi";
console.log(text.replace(/[eri]/g, ""));

//7. Reverse a string word by word
// input: "I evol uoy os !hcum";
// output: I love you so much!
let input = "I evol uoy os !hcum";
let result = input.split(" ").map((element) => {
  return element.split("").reverse().join("");
});
console.log(result.join(" "));
