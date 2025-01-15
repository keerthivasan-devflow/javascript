var simpleText_In_singleQuotes = 'Hello Keerthi, How are you ?'
var simpleText_In_DoubleQuotes = "Raju is very notorious guy"
var simpleText_In_Backticks = `Charles Babbage is the father of computer`
var singleQuotes_In_DoubleQuotes = "'Computer' is a fast elctronic calcultaing machine"
var singleQuotes_Using_EscapeSequences = '\'Mahatma Gandhiji\' is a hard working guy'
var singleQuotes_In_Bacticks = `'Tajmahal' is one of the seven wonders of the world`

console.log(simpleText_In_singleQuotes)
console.log(simpleText_In_DoubleQuotes)
console.log(simpleText_In_Backticks)
console.log(singleQuotes_In_DoubleQuotes)
console.log(singleQuotes_Using_EscapeSequences)
console.log(singleQuotes_In_Bacticks)

var text_ToFindTextLength = "Banana"
var text_ToFindTextLength_With_EscapeSequence = '\'Laksha\''
var text_ToFindTextLength_EmptyString_withoutSpace = ""
var text_ToFindTextLength_EmptyString_withSpace = " "
console.log("Length of Banana: ", text_ToFindTextLength.length)
console.log("text_ToFindTextLength_With_EscapeSequence: ", text_ToFindTextLength_With_EscapeSequence.length)
console.log("text_ToFindTextLength_EmptyString_withoutSpace: ", text_ToFindTextLength_EmptyString_withoutSpace.length)
console.log("text_ToFindTextLength_EmptyString_withSpace: ", text_ToFindTextLength_EmptyString_withSpace.length)


var long_text_break_Backslash = "Hello \`keerthi\` how are you, \
I am really expecting to meet you soon";
console.log(long_text_break_Backslash)

var long_text_break = "Hello keerthi how are you, " +
"I am really expecting to meet you soon";

var multiline_String = `Hello keerthi
how are you?
what are you doing ?`

console.log(multiline_String)
console.log(long_text_break)

var string_template = `
<div>
<h1>STRING</h1>
<p>String is used for storing and manipulating text.</p>
<ul>
<li>String Templates</li>
<li>String Literals</li>
</ul>
</div>

`;

document.write(string_template)

console.log('A' < 'b')


var accessText_usingIndex = "Orange"
console.log("--------- Using Index ---------")
console.log("accessText_usingIndex[2] : ", accessText_usingIndex[2])
console.log("accessText_usingIndex[-1] : ", accessText_usingIndex[-1])
console.log("accessText_usingIndex[null] : ", accessText_usingIndex[null])
console.log("accessText_usingIndex[true] : ", accessText_usingIndex[true])

console.log("------------ Using charAt() -----------")
console.log("accessText_usingIndex.charAt() : ", accessText_usingIndex.charAt())
console.log("accessText_usingIndex.charAt(2) : ", accessText_usingIndex.charAt(2))
console.log("accessText_usingIndex.charAt(-1) : ", accessText_usingIndex.charAt(-1))
console.log("accessText_usingIndex.charAt(null) : ", accessText_usingIndex.charAt(null))
console.log("accessText_usingIndex.charAt(true) : ", accessText_usingIndex.charAt(true))

console.log("-------- Using at() ----------------")
console.log("accessText_usingIndex.at() : ", accessText_usingIndex.at())
console.log("accessText_usingIndex.at(2) : ", accessText_usingIndex.at(2) )
console.log("accessText_usingIndex.at(-1) : ",accessText_usingIndex.at(-1))
console.log("accessText_usingIndex.at(null) : ", accessText_usingIndex.at(null))
console.log("accessText_usingIndex.at(true) : ", accessText_usingIndex.at(true))

var SliceJackfruit = "Jackfruit";
console.log("SliceJackfruit.slice() : ", SliceJackfruit.slice())
console.log("SliceJackfruit.slice(0) : ", SliceJackfruit.slice(0))
console.log("SliceJackfruit.slice(2) : ", SliceJackfruit.slice(2))
console.log("SliceJackfruit.slice(20) : ", SliceJackfruit.slice(20))
console.log("SliceJackfruit.slice(-4) : ", SliceJackfruit.slice(-4))
console.log("SliceJackfruit.slice(-46) : ", SliceJackfruit.slice(-46))
console.log("SliceJackfruit.slice(2, 6) : ", SliceJackfruit.slice(2, 6))
console.log("SliceJackfruit.slice(6, 2): ", SliceJackfruit.slice(6, 2))
console.log("SliceJackfruit.slice(-6, -1) : ", SliceJackfruit.slice(-6, -1))
console.log("SliceJackfruit.slice(-1, -6) : ", SliceJackfruit.slice(-1, -6))
console.log("SliceJackfruit.slice(-1, 6) : ", SliceJackfruit.slice(-1, 6))
console.log("SliceJackfruit.slice(1, -6) : ", SliceJackfruit.slice(1, -6))
console.log("SliceJackfruit.slice(true, false) : ", SliceJackfruit.slice(true, false))
console.log("SliceJackfruit.slice(false, true) : ", SliceJackfruit.slice(false, true))
console.log("SliceJackfruit.slice(true, undefined) : ", SliceJackfruit.slice(true, undefined))
console.log("SliceJackfruit.slice(null, undefined) : ", SliceJackfruit.slice(null, undefined))
console.log("SliceJackfruit.slice(2, undefined) : ", SliceJackfruit.slice(2, undefined))
console.log("SliceJackfruit.slice(undefined, 2) : ", SliceJackfruit.slice(undefined, 2))

var substringText = "God is great";
console.log("SubString")
console.log("------------------------------------------")
console.log(substringText.substring())
console.log(substringText.substring(0))
console.log(substringText.substring(6))
console.log(substringText.substring(13))
console.log(substringText.substring(-5))
console.log(substringText.substring(2,5))
console.log(substringText.substring(5,2))
console.log(substringText.substring(3,3))
console.log(substringText.substring(false, true))
console.log(substringText.substring(true, false))
console.log(substringText.substring(undefined, 5))
console.log(substringText.substring(null, 4))
console.log(substringText.substring(-3,-1))
console.log(substringText.substring(-45, 3))
console.log(substringText.substring(3, -45))
console.log(substringText.substring(40))

console.log(sliceString.substr(5,3))
console.log(sliceString.substr(0))
console.log(sliceString.substr(-5))
console.log(sliceString.substr(2,0))
console.log(sliceString.substr(2, -5))

var splitText = "He is nice guy"
console.log(splitText.split(""))
console.log(splitText.split(" "))
console.log(splitText.split())

var fruits = "Fruits"
var flowers = "Flowers"
var animals ="Animals"
var birds = "Birds"
console.log(fruits.concat(" ",flowers))
console.log(fruits.concat(" ", flowers, " ", animals))
console.log(fruits.concat(" ", flowers, " ", animals," ", birds))

var trimLeft = "         Hello Trim Left..."
var trimRight  = "Jack is back         "
var trimBoth = "           I am a good guy       "
console.log(trimLeft)
console.log(trimLeft.trimStart())
console.log(trimRight)
console.log(trimRight.trimEnd())
console.log(trimBoth.trim())

var searchText = "I am good guy"
console.log(searchText.search("g"))

/*************** String.indexOf() & String.lastIndexOf() Method *********************/
var string = "dog says bark dog";
var text = "Banana";

console.log("string.length : ", string.length)
console.log("text.length : ", text.length)

console.log('string.indexOf() : ', string.indexOf())
console.log('string.indexOf("") : ', string.indexOf(""))
console.log('text.indexOf(" ") : ', text.indexOf(" "))
console.log('string.indexOf(" ") : ', string.indexOf(" "))

console.log('string.indexOf("",17) : ', string.indexOf("",17))
console.log('string.indexOf("",32) : ', string.indexOf("",32))

console.log('string.indexOf("dog", 17) : ', string.indexOf("dog", 17))
console.log('string.indexOf("dog", 32) : ', string.indexOf("dog", 32))

console.log('string.indexOf("", 10) : ', string.indexOf("", 10))
console.log('string.indexOf("dog", 10) : ', string.indexOf("dog", 10))

console.log('string.indexOf("", -20) : ', string.indexOf("", -20))
console.log('string.indexOf(" ", -20) : ', string.indexOf(" ", -20))
console.log('string.indexOf("d", -10) : ', string.indexOf("d", -10))

console.log('string.lastIndexOf() : ', string.lastIndexOf())
console.log('string.lastIndexOf("") : ', string.lastIndexOf(""))
console.log('text.lastIndexOf(" ") : ', text.lastIndexOf(" "))
console.log('string.lastIndexOf(" ") : ', string.lastIndexOf(" "))

console.log('string.lastIndexOf("",17) : ', string.lastIndexOf("",17))
console.log('string.lastIndexOf("",32) : ', string.lastIndexOf("",32))

console.log('string.lastIndexOf("dog", 17) : ', string.lastIndexOf("dog", 17))
console.log('string.lastIndexOf("dog", 32) : ', string.lastIndexOf("dog", 32))

console.log('string.lastIndexOf("", 10) : ', string.lastIndexOf("", 10))
console.log('string.lastIndexOf("dog", 10) : ', string.lastIndexOf("bark", 10))

console.log('string.lastIndexOf("", -20) : ', string.lastIndexOf("", -20))
console.log('string.lastIndexOf(" ", -20) : ', string.lastIndexOf(" ", -20))
console.log('string.lastIndexOf("d", -10) : ', string.lastIndexOf("d", -10))

/*****************************************************************************************/

console.log(text.toUpperCase())
console.log(text.toLocaleUpperCase())
console.log(text.toLocaleLowerCase())
console.log(text.toLowerCase())

var replaceText = "dog dog Dog"
console.log(replaceText.replace("d","F"))
console.log(replaceText.replace(/d/g,"F"))
console.log(replaceText.replace(/d/gi,"F"))
console.log(replaceText.replaceAll("d","F"))
console.log(replaceText.replaceAll(/d/gi,"F"))

var includesText = "Japan is one of the country"
console.log(includesText.includes("one"))
console.log(includesText.includes("kiki"))
console.log(includesText.includes("is",6))

var matchText = "He is nice doctor who is general doctor, Doctor"
console.log(matchText.match("doctor"))
console.log(matchText.match(/doctor/g))
console.log(matchText.match(/doctor/gi))

var result_MatchAll_Text = matchText.matchAll("doctor")
var result_MatchAll_Text_Two = matchText.matchAll(/doctor/gi)
console.log(Array.from(result_MatchAll_Text))
console.log(Array.from(result_MatchAll_Text_Two))

var charAccess = "Elephant"
console.log("charAccess.charCodeAt(1) : ",charAccess.charCodeAt(1))
console.log("charAccess.charCodeAt(-8) : ",charAccess.charCodeAt(-8))
console.log("charAccess.charCodeAt(true) : ",charAccess.charCodeAt(true))
console.log("charAccess.charCodeAt() : ",charAccess.charCodeAt())
console.log("charAccess.charCodeAt(null) : ",charAccess.charCodeAt(null))
console.log("charAccess.charCodeAt(undefined) : ",charAccess.charCodeAt(undefined))

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
    let repeat="";
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str.charAt(i) == str.charAt(j) && repeat.indexOf(str.charAt(j)) == -1) {
                repeat += str.charAt(i);
            }
        }
    }
    return repeat;
}
console.log(findDuplicatedChars(sample)); //output: sc


//3. Counting vowels and consonants in a string
var text = "abcdefghijklmnopqrstuvwxyz"
var vowels = 0;
var consonants = 0;

for(i = 0; i< text.length; i++){
  if(text[i].match(/[aeiou]/)){
    vowels++
  }
  else{
    consonants++
  }
}

console.log(vowels, consonants)


//4. Finding the occurence of given letter in a sring
var text = "He is a very nice person"
var count = 0
var givenLetter = "e"

for(let key in text){
  if(text[key].includes(givenLetter)){
    count++
  }
}

console.log(count)

//5. Find the occurence of each character in a string
var str = "Hello World";
var arr = str.split('');
var occ = {};
for(var i=0; i<arr.length; i++){
    if(occ[arr[i]]) {
      occ[arr[i]]++;
      }
    else occ[arr[i]] = 1;
}
for(let i in occ){
    console.log('count of '+i+' -> '+occ[i]); 
}

var counts = str.split('').reduce(function(dst, c) {
  dst[c] = (dst[c] || 0) + 1;
  return dst;
}, {});
console.log(counts)

//6. How to remove specific character from the given string 
var text = "Keerthi"
console.log(text.replace(/[eri]/g,""))

//7. Reverse a string word by word
// input: "I evol uoy os !hcum";
// output: I love you so much!
let input = "I evol uoy os !hcum";
let result = input.split(" ").map((element) => {
  return element.split("").reverse().join("");
});
console.log(result.join(" "));