console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// # COMPARE WITH STRING : Don't use
console.log("***".repeat(3), "COMPARE WITH STRING", "***".repeat(3));

console.log("string" > 1); // false
console.log("2" > 1); // true : value converts the string 2 to number 2

// # COMARE WITH NULL : Don't use
console.log("***".repeat(3), "COMARE WITH NULL", "***".repeat(3));

console.log(null > 5); // false
console.log(null < 5); // true
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true : NULL converts to 0

// # COMARE WITH UNDEFINED : always false : Don't use
console.log("***".repeat(3), "COMARE WITH UNDEFINED", "***".repeat(3));

console.log(undefined > 5); // false
console.log(undefined < 5); // false
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false

// # STRICT CHECK WITH === : Checking value and type
console.log("***".repeat(3), "STRICT CHECK WITH ===", "***".repeat(3));

console.log("5" == 5); // true : only check value
console.log("5" === 5); // false : check value and type
