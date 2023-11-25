// # ARRAY
console.log("***".repeat(3), "ARRAY", "***".repeat(3)); // [ 54, 23, 0, 'Pranjal', 34, 'gogoi' ]

const arr = [1, 2, "hi", 56, 34];
console.log(arr); // [ 1, 2, 'hi', 56, 34 ]

// # ARRAY OBJECT
console.log("***".repeat(3), "ARRAY OBJECT", "***".repeat(3));

const newArr = new Array(54, 23, 0, "Pranjal", 34);
console.log(newArr); // [ 54, 23, 0, 'Pranjal', 34 ]

// # ARRAY METHODS
console.log("***".repeat(3), "ARRAY METHODS", "***".repeat(3));

newArr.push("gogoi");
console.log(newArr); // [ 54, 23, 0, 'Pranjal', 34, 'gogoi' ]

newArr.pop();
console.log(newArr); // [ 54, 23, 0, 'Pranjal', 34 ]

newArr.unshift("hi");
console.log(newArr); // [ 'hi', 54, 23, 0, 'Pranjal', 34 ]

newArr.shift();
console.log(newArr); // [ 54, 23, 0, 'Pranjal', 34 ]

console.log(newArr.includes(54)); // true
console.log(newArr.includes(100)); // false

console.log(newArr.indexOf("Pranjal")); // 3
console.log(newArr.indexOf("Gogoi")); // -1

console.log(newArr.join("**"));

// slice and splice

const numbers = [34, 45, 23, 78, 23, 45];
const slicedNumbers = numbers.slice(1, 5);
console.log(numbers);
console.log(slicedNumbers);

const splicedNumbers = numbers.splice(2, 2, "twendty three", "Senventy eight");
console.log(splicedNumbers); // spliced array
console.log(numbers); // actual array
