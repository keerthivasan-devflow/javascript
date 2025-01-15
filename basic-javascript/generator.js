function* generator() {
  let result = yield "provide value";
  yield 2;
  yield result;
}

let generatorObject = generator();
console.log(generatorObject.next());
console.log(generatorObject.next(99));
console.log(generatorObject.next());
console.log(generatorObject.next());
