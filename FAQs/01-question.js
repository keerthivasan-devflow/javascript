// All the array elements will be converted as a string and compares each character with adjacent element
// Numbers [0-9] - 48 to 57
// uppercase [A-Z] - 65 to 90
// lowercase [a-z] - 97 to 122

// Therefore numbers will be sorted first
// Then uppercase letters by comparing each charaters
// Finally lowercase letters
let arr = [1, 4, undefined, 2, "apple", "3", "a", 111, "A", null, 19];
arr.sort();
console.log(arr);
