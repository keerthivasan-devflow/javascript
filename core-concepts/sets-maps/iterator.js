// Example 1: Iterator Object
let iterator = {
  count: 0,

  next() {
    return {
      value: this.count++,
      done: this.count > 10,
    };
  },
};

let next = iterator.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}

// Example 2: Iterables
let iterables = {
  count: 1,
  [Symbol.iterator]() {
    let current = this.count; // Note: capture starting value otherwise [Symbol.iterator will not recognize the counter value]
    return {
      next() {
        if (current <= 10) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (let index of iterables) {
  console.log(index);
}
