let value = 5;
value = -value;
console.log(value);

// OPERATORS
console.log("***".repeat(3), "OPERATORS", "***".repeat(3));

console.log(5 + 6);
console.log(5 - 6);
console.log(5 * 6);
console.log(5 ** 2);
console.log(5 / 6);
console.log(50 % 6);

// operating from the left side
console.log("5" + 5 + "5");
console.log(5 + "5" + "5");
console.log(5 + 5 + "5");
console.log("5" + 5 + 5);

// use paranthasis always
console.log((3 + 4) * (5 % 3));

// # TRICKY CONVERSATIONS : not recommended
console.log("***".repeat(3), "TICKY CONVERSATIONS", "***".repeat(3));

console.log(+true); // 1
console.log(-true); // -1
console.log(+false); // 0
console.log(-false); // -0
console.log(+""); // 0
console.log(-""); // -0

// DEFINE VARIABLE : not recommended

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.table([num1, num2, num3]);

// # INCREMENT OPERATOR

// postfix
let a = 1;
let b = a++;
console.log(`a = ${a} & b = ${b}`); // a = 2 & b = 1

// prefix
let c = 2;
let d = ++c;
console.log(`c = ${c} & d = ${d}`); // c = 3 & d = 3

/* 
The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.
*/
