const score = 12
console.log(score);

const balance = new Number(100)
console.log(balance);

// # NUMBER METHODS
console.log("***".repeat(3), "NUMBER METHODS", "***".repeat(3));

console.log(balance.toString()) // 100
console.log(balance.toFixed(2));    // 100.00

const otherNumber = 123.6573
console.log(otherNumber.toPrecision(3));    // 124
console.log(otherNumber.toPrecision(2));    // 1.2e+2

const hundreds = 100000000
console.log(hundreds.toLocaleString());     //100,000,000 us standard
console.log(hundreds.toLocaleString("en-IN"));     //10,00,00,000  IND standard

// We can check many things about numbers by using Number.methodName in console

console.log(Math)
console.log(Math.abs(-5))   // 5
console.log(Math.round(4.5));   // 5
console.log(Math.ceil(4.5));   // 5
console.log(Math.floor(4.5));   // 4
console.log(Math.min(1,5,2,6));   // 1
console.log(Math.max(2,4,0,7,3));   // 7

console.log(Math.random())


// minimum 10 and maximum 20
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// random value from 0 to 10
console.log(Math.floor(Math.random() * 11))

// random value from 0 to 9
console.log(Math.floor(Math.random() * 10))

// random value from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1)

