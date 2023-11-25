// # TEMPLATE LITERALS :
console.log("***".repeat(3), "TEMPLATE LITERALS", "***".repeat(3));

const name = "pranjal gogoi";
const friend = "krishna yadav";
console.log(`my name is ${name} and my friend's name is ${friend}`);

// # STRING OBJECT :
console.log("***".repeat(3), "STRING OBJECT", "***".repeat(3));

const str = new String("I am Pranjal Gogoi");
console.log(str);

// # STRINGS ARE INDEXED :
console.log("***".repeat(3), "STRINGS ARE INDEXED", "***".repeat(3));

console.log(str[0]);

// # CHECK ALL METHODS OF STRING USING .__proto__ :
console.log(
  "***".repeat(3),
  "CHECK ALL METHODS OF STRING USING .__proto__",
  "***".repeat(3)
);

console.log(str.__proto__);
// use it in browser console

// # LENGTH OF STRING :
console.log("***".repeat(3), "LENGTH OF STRING", "***".repeat(3));

console.log(str.length);

// # TO UPPER CASE :
console.log("***".repeat(3), "TO UPPER CASE", "***".repeat(3));

console.log(str.toUpperCase());

// # CHAR AT :
console.log("***".repeat(3), "CHAR AT", "***".repeat(3));

console.log(str.charAt(5));
console.log(str.charAt(100)); // no char at 100 number

// # INDEX OF :
console.log("***".repeat(3), "INDEX OF", "***".repeat(3));

console.log(str.indexOf("P"));
console.log(str.indexOf("p")); // not in the string

// # SUBSTRING :
console.log("***".repeat(3), "SUBSTRING", "***".repeat(3));

console.log(str.substring(0, 6));
console.log(str.substring(0, -6)); // no output

// # SLICE :
console.log("***".repeat(3), "SLICE", "***".repeat(3));
// I am Pranjal Gogoi

console.log(str.slice(0, 6));
console.log(str.slice(-8, -1));
console.log(str.slice(-8, 15));
console.log(str.slice(2, -1));

// # TRIM :
console.log("***".repeat(3), "TRIM", "***".repeat(3));

newStr = "  PranjAL     gOGOI   ";
trimStr = newStr.trim(newStr);
console.log(trimStr);

// # REPLACE :
console.log("***".repeat(3), "REPLACE", "***".repeat(3));

let url = "https:/www.pranjalgogoi%20world.com/";
console.log(url.replace("%20", "-"));

// # INCLUDES :
console.log("***".repeat(3), "INCLUDES", "***".repeat(3));

console.log(url.includes("gogoi")); // true

// # SPLIT :
console.log("***".repeat(3), "SPLIT", "***".repeat(3));

const des = "I am a Front-end Developer, Expert of React";
console.log(des.split(","));
