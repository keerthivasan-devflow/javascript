function largestOddNumber(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    let digit = parseInt(num[i]);
    if (digit % 2 !== 0) return num.slice(0, i + 1);
  }
}

console.log(largestOddNumber("5688248"));
console.log(largestOddNumber("6163286"));
console.log(largestOddNumber("6163328761"));
