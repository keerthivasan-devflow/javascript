/*
1. Switch will use strict comparison rule which means triple equal scenario.
2. If there is any match for the given input, it will execute the associate block of code.
3. If there is no match, then default case will be executed.
4. if there is no default case, then what statements are there after the switch the block,
   which will get executed.
*/

var condition = 2;

switch (condition) {
  case 1:
    let array = [10, 20, 30, 40];
    let reversedArray = array.toReversed();
    console.log("Original Array : ", array);
    console.log("Reversed Array : ", reversedArray);
    break;

  case 2:
    let number = 8;
    if (number % 2 === 0) {
      console.log(
        "%c The given number is 'even'",
        "color: green; font-weight: bold"
      );
    } else {
      console.log("The given number is an odd number");
    }
    break;
  case 3:
    let text = "He is good boy";
    console.log(text.toUpperCase());
    break;

  default:
    console.log("There is no match, so default case is executed now!");
    break;
}


