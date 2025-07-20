function convertMapToArray(obj) {
  return Object.entries(obj);
}

console.log(convertMapToArray({ 0: "a", 1: "b", 2: "c", 3: "d", 4: "e" }));
