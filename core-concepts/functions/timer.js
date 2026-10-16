// Example 1: setInterval() demonstation
function add(number1, number2) {
  let total = number1 + number2;
  console.log("Additon of two number is : " + total);
}

let intervalID = setInterval(add, 2000, 100, 200);
let btn = document.getElementById("stopInterval");
btn.addEventListener("click", () => {
  console.log("clearInterval has been fired");
  clearInterval(intervalID);
});

// Example 2: setTimeout()
// let timerID = setTimeout(add(10, 30), 3000); // It will run immediately - there will be no delay!
let timerID = setTimeout(add, 5000, 10, 30);
let btn = document.getElementById("stopTimeout");
btn.addEventListener("click", () => {
  console.log("clearTimeout has been fired");
  clearTimeout(timerID);
});
