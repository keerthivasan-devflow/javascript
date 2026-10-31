// Example 1: String access through an index → returns 'undefined' if index is invalid.
var color = "darkgreen";
console.log("color[2] : ", color[2]);
console.log("color[-1] : ", color[-1]);
console.log("color[null] : ", color[null]);
console.log("color[true] : ", color[true]);
console.log("color[undefined] : ", color[undefined]);

// Example 2: str.charAt(index)
console.log("color.charAt() : ", color.charAt());
console.log("color.charAt(2) : ", color.charAt(2));
console.log("color.charAt(-1) : ", color.charAt(-1));
console.log("color.charAt(null) : ", color.charAt(null));
console.log("color.charAt(true) : ", color.charAt(true));
console.log("color.charAt(undefined) : ", color.charAt(undefined));

// Example 3: str.at(index)
console.log("color.at() : ", color.at());
console.log("color.at(2) : ", color.at(2));
console.log("color.at(-1) : ", color.at(-1));
console.log("color.at(null) : ", color.at(null));
console.log("color.at(true) : ", color.at(true));
console.log("color.at(undefined) : ", color.at(undefined));

// Example 4: str.charCodeAt(index) or str.codePointAt(index)
const animal = "Elephant";
console.log("animal.charCodeAt(1):", animal.charCodeAt(1));
console.log("animal.charCodeAt(-8):", animal.charCodeAt(-8));
console.log("animal.charCodeAt(true):", animal.charCodeAt(true));
console.log("animal.charCodeAt():", animal.charCodeAt());
console.log("animal.charCodeAt(null):", animal.charCodeAt(null));
console.log("animal.charCodeAt(undefined):", animal.charCodeAt(undefined));

// Example 5: str.slice(start, end)
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
console.log("city.slice(und, und) : ", city.slice(undefined, undefined));

// Example 5: str.substring(start, end)
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

// Example 6: str.substr(start, length) - deprecated
console.log(city.substr(5, 3));
console.log(city.substr(0));
console.log(city.substr(-5));
console.log(city.substr(2, 0));
console.log(city.substr(2, -5));

// Example 7: str.trim() or str.trimStart() or str.trimEnd()
var leading_space_string = "         Hello Rohit!";
var trailing_space_string = "Rohit is back to play cricket     ";
var sentence = "    Rohit is      a cricketer      ";

console.log("Original (left spaces):", leading_space_string);
console.log("trimStart():", leading_space_string.trimStart());

console.log("Original (right spaces):", trailing_space_string);
console.log("trimEnd():", trailing_space_string.trimEnd());

console.log("Original (both sides spaces):", sentence);
console.log("trim():", sentence.trim());

// Note: Remove leading or trailing spaces AND normalize unnecessary spaces in the middle also.
var trimmedSentence = sentence.trim().replace(/\s+/g, " ");
console.log("Trimmed Sentence : ", trimmedSentence);

// Example 8: str.search(searchString or regexp)
var searchText = "Landslide";
console.log("Search for 'd':", searchText.search("d")); // returns index of first 'd'

// Example 9: str.indexOf(searchString, startIndex)
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

// Example 10: str.lastIndexOf(searchString, fromIndex)

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

// Example 11: str.match(string or regexp) or str.matchAll(string or regexp)
const doctor = "He is a nice doctor who is a general doctor, Doctor";
console.log("match first occurrence: ", doctor.match("doctor")); // returns first match
console.log("match all lowercase 'doctor': ", doctor.match(/doctor/g)); // returns array of matches
console.log("match case-insensitive 'doctor': ", doctor.match(/doctor/gi)); // returns all matches regardless of case

const matches1 = doctor.matchAll("doctor");
console.log("matchAll with string:", Array.from(matches1));
const matches2 = doctor.matchAll(/doctor/gi);
console.log("matchAll with regex:", Array.from(matches2));

const str1 = "All numbers except NaN or Infinity or -Infinity in JavaScript.";
const str2 = "My son is 18 years old and daughter is 13 years old.";
const str3 = "The contract was declared null and void.";
console.log(str1.match("number")); // "number" is a string. returns ["number"]
console.log(str1.match(NaN)); // the type of NaN is the number. returns ["NaN"]
console.log(str1.match(Infinity)); // the type of Infinity is the number. returns ["Infinity"]
console.log(str1.match(-Infinity)); // returns ["-Infinity"]
console.log(str2.match(13)); // returns ["13"]
console.log(str3.match(null)); // returns ["null"]

// Example 12: str.includes(searchString, startIndex)
const js = "javascript is easy and powerful and easy to learn";
console.log(js.includes("javascript")); // true
console.log(js.includes("easy")); // true
console.log(js.includes("easy", 6)); // true
console.log(js.includes("")); // true
console.groupEnd(js.includes()); // Note: Returns true if the string contains the word "undefined"; otherwise false.

// Example 13: str.replace(pattern, replacement) or str.replaceAll(pattern, replacement)
const ocean = "The sky is green. The ocean is also green.";
console.log("replace (first occurrence): ", ocean.replace("green", "blue"));
console.log("replace (all occurrences): ", ocean.replaceAll("green", "blue"));
console.log("replace all w/ regex: ", ocean.replaceAll(/green/g, "blue"));

// Example 14: String.fromCharCode(num1, num2, /* …, */ numN)
// A number between 0 and 65535 (0xFFFF) representing a UTF-16 code unit.

// Example 15: String.fromCodePoint(num1, num2, /* …, */ numN)
// An integer between 0 and 0x10FFFF (inclusive) representing a Unicode code point.
