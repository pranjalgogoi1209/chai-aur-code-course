const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
// by default it will take var keyword
let accountState; // undefined

// trying to update

// accountId = 2 // not allowed
accountEmail = "gogoipranjal2019@gmail.com";
accountPassword = "21212121";
accountCity = "Banglore";

let array = [accountEmail, accountPassword, accountCity, accountState];
console.table(array);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

// Can't redeclare variable declared using let keyword and const keyword
// Can redeclare varible declared using var keyword

let userName = "pranjal";
// let userName = "krishna" // not allowed

const userId = "1234";
// const userId = "7890"    // not allowed

var userEmail = "declaring@gmail.com";
var userEmail = "redeclaring@gmail.com"; // allowed

console.table([userName, userId, userEmail]);
