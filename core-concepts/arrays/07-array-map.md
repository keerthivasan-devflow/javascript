## Example 1: arr.map(callback, this) — map() does not modify the original array by default.

1. Transformation: used to transform every element in an array and create a new array containing the results.
2. Length: The output array has the same length as the input array.
3. Empty slots: It is not invoked for empty slots (holes) in sparse arrays. A sparse array remains sparse after map().

4. Mapped array contains undefined
   - Use filter() — the simplest approach
   - Use flatMap() method and return an empty array to signify deletion.
5. Using map to reformat objects in an array
6. Extracting properties from objects

## Realtime Applications

1. Extracting product names to display in a dropdown, search suggestions, or product list.
2. Converting API responses into the data structure required by an application.
3. Adding UI flags, default properties, or calculated fields without modifying the original objects.

## Case 1: Mapped array contains undefined

```js
const numbers = [1, 2, 3, 4];
const MappedNumbers = numbers.map((number, index) => {
  if (index < 3) {
    return number;
  }
});
console.log(MappedNumbers);
```

## Case 2: Use filter() — the simplest approach

```js
const FilteredNumbers = numbers.filter((number, index) => {
  if (index < 3) {
    return number;
  }
});
console.log(FilteredNumbers);
```

## Case 3: Use flatMap() and return an empty array to signify deletion.

```js
const FlattenedNumbers = numbers.flatMap((number, index) => {
  if (index < 3) {
    return [number];
  }
  return [];
});
console.log(FlattenedNumbers);
```

## Case 4: Using map() to reformat objects in an array

```js
const aquatics = [
{ name: "shark", likes: "ocean" },
{ name: "turtle", likes: "pond" },
{ name: "otter", likes: "fish biscuits" },
];

Expected output:
const output = [
{ shark: "ocean", age: 50 },
{ turtle: "pond", age: 60 },
{ otter: "fish biscuits", age: 50 },
];

const ReformattedAquatics = aquatics.map((aquatic) => {
return {
[aquatic.name]: aquatic.likes,
age: aquatic.name.length * 10,
};
});

console.log(ReformattedAquatics);
```

## Case 5: As mentioned previously, this is an anti-pattern.

An anti-pattern is a coding practice that may work correctly but is considered a bad approach because there is usually a cleaner, more efficient, or more maintainable way to do the same thing. If you don't use the return value of map(), use forEach() or a for..of loop instead.

```js
const products = [
{ name: "sports car" },
{ name: "laptop" },
{ name: "phone" },
];

products.map((product) => {
product.price = 100;
});

const UpdatedProducts = products.map((product) => {
return { ...product, price: product.name.length * 10 };
});
```

## Case 6: arr.map(callback, this) - Exploring the use of the "this" argument.

It is useful when your callback needs to access properties or methods of a particular object. thisArg can be any type, not just an object. It can be an object, array, function, string, number, boolean, or even null or undefined.

- In a non-strict regular function, primitive values such as numbers and strings are boxed into objects when used as this.
- In strict mode, this retains the primitive value.
- For null or undefined, strict mode preserves that value; In non-strict mode, this defaults to the global object.

```js
// Regular Function
const prices = [100, 200, 300];

const regularDiscount = { percentage: 10 };
const specialDiscount = { percentage: 20 };

function applyDiscount(price) {
console.log(this);
return price - (price * this.percentage) / 100;
}

const regularPrices = prices.map(applyDiscount, regularDiscount);
const specialPrices = prices.map(applyDiscount, specialDiscount);

console.log(regularPrices); // [90, 180, 270]
console.log(specialPrices); // [80, 160, 240]

// Arrow Function
const prices2 = [100, 200, 300];

const regularDiscount2 = { percentage: 10 };
const specialDiscount2 = { percentage: 20 };

const applyDiscount2 = (price, discount) => {
return price - (price * discount.percentage) / 100;
};

const regularPrices2 = prices.map((price) =>
applyDiscount(price, regularDiscount),
);
const specialPrices2 = prices.map((price) =>
applyDiscount(price, specialDiscount),
);

console.log(regularPrices2); // [90, 180, 270]
console.log(specialPrices2); // [80, 160, 240]
```
