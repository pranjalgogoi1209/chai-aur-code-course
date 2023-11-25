"use strict"; // treat all js code as newer version

// alert(3+3); // we are using node js not browser

console.log(3 + 3); // code readability should be high

console.log("Hitesh"); // no need to use semicolon, it reduce readability

// # DATATYPES

// premitive datatypes:

/* 
number => 2 to power 53
bigint
string => ""
boolean => true / false
symbol => unique 
undefined
null => standalone value
*/

// objects datatype:

/* 
object
arr
*/

let name = "hitesh";
let age = 18;
let isLoggedIn = false;
// let state;  // undefined : value is not assgning yet
let state = null; // no value / standalone value

console.log(typeof null); // object

console.log(typeof undefined); // undefined

let obj = { name: "pranjal" };
console.log(typeof obj); // object

let arr = [1, 2];
console.log(typeof arr); // object
