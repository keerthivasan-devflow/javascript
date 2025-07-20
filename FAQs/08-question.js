function convertArrayToMap(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[i]) {
      map[i] = arr[i];
    }
  }
  return map;
}

console.log(convertArrayToMap(["a", "b", "c", "d", "e"]));
