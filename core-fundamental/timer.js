//JS timings
function add(number1, number2) {
  let result = number1 + number2;
  console.log("Additon of two number is : " + result);
}

// setTimeout(add(10,30), 3000)
// let timerID = setTimeout(add, 5000, 1500)

// let timer = document.getElementById("clearTimeout");
// timer.addEventListener("click", () => {
//   console.log("clearTimeout has been fired");
//   clearTimeout(timerID)
// });

let clearID = setInterval(add, 2000, 45, 60);
let clearIntervalID = document.getElementById("clearInterval");
clearIntervalID.addEventListener("click", () => {
  console.log("clearTimeout has been fired");
  clearInterval(clearID);
});
