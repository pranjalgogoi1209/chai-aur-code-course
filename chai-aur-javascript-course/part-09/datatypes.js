// # PREMITIVE DATATYPE
console.log("***".repeat(3), "PREMITIVE DATATYPE", "***".repeat(3));

let score = 34; // number
let scoreValue = 45.3; // number
let isLoggedIn = true; // boolean
let userName = "Pranjal Gogoi"; // string
let temperature = null; // object
console.log(typeof temperature); // object
// let winner = undefined
let winner; // undefined
let bigNumber = 93527509205932095205720n;
console.log(typeof bigNumber); // bigint

let unique = Symbol("123");
console.log(typeof unique); // symbol
let anotherUnique = Symbol("123");

console.log(unique, anotherUnique);
console.log(unique === anotherUnique);

// # REFERENCE DATATYPE
console.log("***".repeat(3), "REFERENCE DATATYPE", "***".repeat(3));

let arr = [1, 2, 3, 4, 5, 6];
console.log(typeof arr); // object

let obj = { name: "pranjal" };
console.log(typeof obj); // object

let myfunc = () => "hi";
console.log(typeof myfunc); // function object
