var fruitName = "Banana";
var quotedName = "'Laksha'";
var emptyString = "";
var spaceString = " ";

console.log("Length of fruitName: ", fruitName.length);
console.log("Length of quotedName: ", quotedName.length);
console.log("Length of emptyString: ", emptyString.length);
console.log("Length of spaceString: ", spaceString.length);

// 1. Using backslash for line break
var greetingWithBackslash =
  "Hello `keerthi` how are you, \
I am really expecting to meet you soon";
console.log(greetingWithBackslash);

// 2. Concatenating strings
var concatenatedGreeting =
  "Hello keerthi how are you, " + "I am really expecting to meet you soon";

// 3. Multiline string using template literals
var multilineGreeting = `Hello keerthi
how are you?
what are you doing ?`;

console.log(multilineGreeting);
console.log(concatenatedGreeting);

// 4. HTML template string
var htmlStringTemplate = `
<div>
  <h1>STRING</h1>
  <p>String is used for storing and manipulating text.</p>
  <ul>
    <li>String Templates</li>
    <li>String Literals</li>
  </ul>
</div>
`;

document.write(htmlStringTemplate);

// 5. Comparing strings: "A" has a lower Unicode value than "b", so this evaluates to true
console.log("A" < "b");

// Example : String Indexes | str.charAt() | str.at()
var color = "lightgreen";
console.log("color[2] : ", color[2]);
console.log("color[-1] : ", color[-1]);
console.log("color[null] : ", color[null]);
console.log("color[true] : ", color[true]);
console.log("color[undefined] : ", color[undefined]);

console.log("color.charAt() : ", color.charAt());
console.log("color.charAt(2) : ", color.charAt(2));
console.log("color.charAt(-1) : ", color.charAt(-1));
console.log("color.charAt(null) : ", color.charAt(null));
console.log("color.charAt(true) : ", color.charAt(true));
console.log("color.charAt(undefined) : ", color.charAt(undefined));

console.log("color.at() : ", color.at());
console.log("color.at(2) : ", color.at(2));
console.log("color.at(-1) : ", color.at(-1));
console.log("color.at(null) : ", color.at(null));
console.log("color.at(true) : ", color.at(true));
console.log("color.at(undefined) : ", color.at(undefined));

// Example: str.charCodeAt() | str.codePointAt()
const animal = "Elephant";
console.log("animal.charCodeAt(1):", animal.charCodeAt(1)); // '108'
console.log("animal.charCodeAt(-8):", animal.charCodeAt(-8)); // NaN
console.log("animal.charCodeAt(true):", animal.charCodeAt(true)); // index = 1 → '108'
console.log("animal.charCodeAt():", animal.charCodeAt()); // index = 0 → '69'
console.log("animal.charCodeAt(null):", animal.charCodeAt(null)); // index = 0 → '69'
console.log("animal.charCodeAt(undefined):", animal.charCodeAt(undefined)); // index = 0 → '69'

console.log("animal.codePointAt(-8):", animal.codePointAt(-8)); // undefined

// Example : str.slice() | str.substring() | str.substr()
var city = "Bengaluru";
console.log("city.slice() : ", city.slice());
console.log("city.slice(0) : ", city.slice(0));
console.log("city.slice(2) : ", city.slice(2));
console.log("city.slice(20) : ", city.slice(20));
console.log("city.slice(-4) : ", city.slice(-4));
console.log("city.slice(-46) : ", city.slice(-46));
console.log("city.slice(2, 6) : ", city.slice(2, 6));
console.log("city.slice(6, 2): ", city.slice(6, 2));
console.log("city.slice(-6, -1) : ", city.slice(-6, -1));
console.log("city.slice(-1, -6) : ", city.slice(-1, -6));
console.log("city.slice(-1, 6) : ", city.slice(-1, 6));
console.log("city.slice(1, -6) : ", city.slice(1, -6));
console.log("city.slice(true, false) : ", city.slice(true, false));
console.log("city.slice(false, true) : ", city.slice(false, true));
console.log("city.slice(true, undefined) : ", city.slice(true, undefined));
console.log("city.slice(null, undefined) : ", city.slice(null, undefined));
console.log("city.slice(2, undefined) : ", city.slice(2, undefined));
console.log("city.slice(undefined, 2) : ", city.slice(undefined, 2));
console.log(
  "city.slice(undefined, undefined) : ",
  city.slice(undefined, undefined),
);

console.log("city.substring() : ", city.substring());
console.log("city.substring(0) : ", city.substring(0));
console.log("city.substring(6) : ", city.substring(6));
console.log("city.substring(13) : ", city.substring(13));
console.log("city.substring(-5) : ", city.substring(-5));
console.log("city.substring(2,5) : ", city.substring(2, 5));
console.log("city.substring(5,2) : ", city.substring(5, 2));
console.log("city.substring(3,3) : ", city.substring(3, 3));
console.log("city.substring(false, true) : ", city.substring(false, true));
console.log("city.substring(true, false) : ", city.substring(true, false));
console.log("city.substring(undefined, 5) : ", city.substring(undefined, 5));
console.log("city.substring(null, 4) : ", city.substring(null, 4));
console.log("city.substring(-3,-1) : ", city.substring(-3, -1));
console.log("city.substring(-45, 3) : ", city.substring(-45, 3));
console.log("city.substring(3, -45) : ", city.substring(3, -45));
console.log("city.substring(40) : ", city.substring(40));

console.log(city.substr(5, 3));
console.log(city.substr(0));
console.log(city.substr(-5));
console.log(city.substr(2, 0));
console.log(city.substr(2, -5));

// Example : String Trim Methods
var greetingWithSpaces = "         Hello Rohit!";
var sentenceWithTrailingSpaces = "Rohit is back to play cricket     ";
var messySentence = "    Rohit is      a cricketer      ";

console.log("Original (left spaces):", greetingWithSpaces);
console.log("trimStart():", greetingWithSpaces.trimStart());

console.log("Original (right spaces):", sentenceWithTrailingSpaces);
console.log("trimEnd():", sentenceWithTrailingSpaces.trimEnd());

console.log("Original (both sides spaces):", messySentence);
console.log("trim():", messySentence.trim());

// Example : Remove leading/trailing spaces AND normalize multiple spaces in the middle
var cleanedSentence = messySentence.trim().replace(/\s+/g, " ");
console.log("cleanedSentence : ", cleanedSentence);

// Example : String Search Method
var searchText = "Landslide";
console.log("Search for 'd':", searcText.search("d")); // returns index of first 'd'

// Pseudocode: Behavior of str.indexOf(searchString, fromIndex)
var str = "The dog chased another dog in the park.";
var txt = "Banana";
console.log("str.length : ", str.length);
console.log("txt.length : ", txt.length);

console.log("str.indexOf() : ", str.indexOf());
console.log('str.indexOf("") : ', str.indexOf(""));

console.log('str.indexOf("", 10) : ', str.indexOf("", 10));
console.log('str.indexOf("", 39) : ', str.indexOf("", 39));
console.log('str.indexOf("", 45) : ', str.indexOf("", 45));

console.log('str.indexOf("dog", 17) : ', str.indexOf("dog", 17));
console.log('str.indexOf("dog", 10) : ', str.indexOf("dog", 10));

console.log('str.indexOf("", -20) : ', str.indexOf("", -20));
console.log('str.indexOf(" ", -20) : ', str.indexOf(" ", -20));
console.log('str.indexOf("d", -10) : ', str.indexOf("d", -10));

// Pseudocode: Behavior of str.lastIndexOf(searchString, fromIndex)

// Case 1: fromIndex >= str.length
// if searchString == ""    → return str.length
// else                     → return index of last occurrence of searchString (searching backward from str.length)

// Case 2: fromIndex < str.length
// if searchString == ""    → return fromIndex
// else                     → return index of last occurrence of searchString at or before fromIndex (or -1 if not found)

// Case 3: str.lastIndexOf() with no arguments
// → equivalent to str.lastIndexOf(undefined)
// → returns -1 (since "undefined" is not found)

// Case 4: str.lastIndexOf("") with no arguments
// → returns str.length (empty string is considered to exist at every position, so the last one is at str.length)

// Case 5: Negative fromIndex
// → treated as 0
// if searchString == ""    → return 0
// else                     → return index of last occurrence of searchString at or before 0 (usually -1 unless first char matches)

var txt = "Banana";
console.log("txt.length : ", txt.length);

console.log("txt.lastIndexOf() : ", txt.lastIndexOf());
console.log('txt.lastIndexOf("") : ', txt.lastIndexOf(""));

console.log('txt.lastIndexOf("", 10) : ', txt.lastIndexOf("", 10));
console.log('txt.lastIndexOf("", 6) : ', txt.lastIndexOf("", 6));
console.log('txt.lastIndexOf("a", 10) : ', txt.lastIndexOf("a", 10));

console.log('txt.lastIndexOf("", 4) : ', txt.lastIndexOf("", 4));
console.log('txt.lastIndexOf("a", 4) : ', txt.lastIndexOf("a", 4));

console.log('txt.lastIndexOf("", -20) : ', txt.lastIndexOf("", -20));
console.log('txt.lastIndexOf(" ", -20) : ', txt.lastIndexOf(" ", -20));
console.log('txt.lastIndexOf("d", -10) : ', txt.lastIndexOf("d", -10));

// Example : Replace words in a sentence - str.replace() | str.replaceAll()
const ocean = "The sky is green. The ocean is also green.";
console.log("replace (first occurrence): ", ocean.replace("green", "blue"));
console.log("replace (all occurrences): ", ocean.replaceAll("green", "blue"));
console.log("replace all w/ regex: ", ocean.replaceAll(/green/g, "blue"));

// Example : Check if a phrase exists in a string - str.includes()
const country = "Japan is one of the developed countries.";
console.log("includes 'one': ", country.includes("one")); // true
console.log("includes 'kiki': ", country.includes("kiki")); // false
console.log("includes 'is' starting from index 6: ", country.includes("is", 6)); // true

// Example : Find matches in a string - str.match() | str.matchAll()
const doctor = "He is a nice doctor who is a general doctor, Doctor";
console.log("match first occurrence: ", doctor.match("doctor")); // returns first match
console.log("match all lowercase 'doctor': ", doctor.match(/doctor/g)); // returns array of matches
console.log("match case-insensitive 'doctor': ", doctor.match(/doctor/gi)); // returns all matches regardless of case

const matches1 = doctor.matchAll("doctor");
console.log("matchAll with string:", Array.from(matches1));
const matches2 = doctor.matchAll(/doctor/gi);
console.log("matchAll with regex:", Array.from(matches2));
