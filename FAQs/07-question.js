function LastTwoElementsAtFirstReversed(arr) {
  let firstTwoElements = arr.slice(-2).reverse();
  let nextThreeElements = arr.slice(0, 3);
  let mergedElements = firstTwoElements.concat(nextThreeElements);
  return mergedElements;
}

function swapLastTwoElements(arr) {
  let n = arr.length - 2;
  for (let i = 0; i < arr.length - 1; i++) {
    if (i >= n) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

console.log(LastTwoElementsAtFirstReversed([1, 2, 3, 4, 5]));
console.log(LastTwoElementsAtFirstReversed([92, 45, 120, 78, 63, 23]));
