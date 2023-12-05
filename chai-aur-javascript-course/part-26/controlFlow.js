// IF CONDITIONAL STATEMENT =>
if (true) {
  console.log("if condition");
}

const isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("User Logged In");
}

// CONDITIONS : <, >, <=, >=, ==, ===, !=
if (2 != 3) {
  console.log("nOT Equal");
}

if (2 == "2") {
  console.log("sAME NUMBER");
}

if (2 === "2") {
  console.log("sAME NUMBER BUT DIFFERENT TYPE");
}

//  ELSE =>
const temparature = 71;
if (temparature < 50) {
  console.log("Less than 50");
} else {
  console.log("Greater than 50");
}

// IMPLICIT SCOPE =>
if (true) console.log("Implicit scope"); //recommentded for 1 line of code
if (true) console.log("Not recommented"), console.log("Not recommended"); //not recommended for multiple lines of code

// ELSE IF =>
const score = 530;
if (score <= 200) console.log("less than or Equal to 200");
else if (score <= 500) console.log("less than or Equal to 500");
else console.log("Greater than 500");

// AND OPERATOR (BOTH SHOULD BE TRUE)=>
const userLoggedIn = true;
const debitCart = true;
if (userLoggedIn && debitCart && true) console.log("You can do shopping");

// OR OPERATOR =>
const emailLoggedIn = true;
const googleLoggedIn = false;
if (emailLoggedIn || googleLoggedIn || false) console.log("You are logged In");

// SWITCH =>

const month = 11;

switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("mar");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("aug");
    break;
  case 9:
    console.log("sep");
    break;
  case 10:
    console.log("oct");
    break;
  case 11:
    console.log("nov");
    break;
  case 12:
    console.log("dec");
    break;
  default:
    console.log("default case match");
}

// FALSY VALUES =>
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES =>
// everything excluding falsy values are truthy values.
// "0", " ", "false", [], {}, function(){}

// CHECK EMPTY ARRAY =>
const emptyArr = [];
if (emptyArr.length === 0) {
  console.log("empty array");
}

// CHECK EMPTY OBJECT =>
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("empty object");
}

// false === 0 => true
// false === "" => true
// 0 === "" => true

// NULLISH COALESCING OPERATOR (??) : null undefined =>
// when we fetch data from database, some time we use it
let val;
val = 10 ?? 15;
val = undefined ?? 20;
val = null ?? 30;
val = 40 ?? null ?? 10 ?? undefined;
console.log(val);

// if 1st one is true than 2nd one assign to the variable
const hanji = 45 && 0;
console.log(hanji);

// TERNARY OPERATOR =>

4 > 1 ? console.log("greater") : console.log("less");
