// # CONCAT METHOD
console.log("***".repeat(3), "CONCAT METHOD", "***".repeat(3));

const marvelHeros = ["spiderman", "ironman", "captain america"];
const dcHeros = ["batman", "superman", "flash"];

// Add to arrays

//console.log(marvelHeros + dcHeros); // it returns string

console.log(marvelHeros.concat(dcHeros));

// # SPREAD METHOD
console.log("***".repeat(3), "SPREAD METHOD", "***".repeat(3));

console.log([...marvelHeros, ...dcHeros]);

// # FLAT METHOD
console.log("***".repeat(3), "FLAT METHOD", "***".repeat(3));

const nestedArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, [10, 11, 12], 13], 14, 15];
console.log(nestedArray.flat(1)); // level 1
console.log(nestedArray.flat(Infinity)); // level infinity

// # ARRAY.ISARRAY METHOD
console.log("***".repeat(3), "ISARRAY METHOD", "***".repeat(3));

console.log(Array.isArray(nestedArray)); // true
console.log(Array.isArray("array")); // false

// # ARRAY.FROM METHOD : TO CONVERT IN AN ARRAY
console.log("***".repeat(3), "ARRAY.FROM METHOD", "***".repeat(3));

console.log(Array.from("PRANJAL"));
console.log(Array.from({ name: "pranjal", age: 24 })); //empty array because js confused between key and value, which js should convert to js: interview

// # ARRAY.OF METHOD : TO CONVERT IN AN ARRAY
console.log("***".repeat(3), "ARRAY.OF METHOD", "***".repeat(3));

const name = "PRANJAL GOGOI";
const age = 24;
const degree = "B.TECH (IT)";

console.log(Array.of(name, age, degree));
console.log(Array.of("KRISHNA YADAV", 27, "B.TECH (CSE)"));
