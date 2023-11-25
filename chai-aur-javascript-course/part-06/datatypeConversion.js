// # DATATYPE CONVERSION TO NUMBER : Number() constructor

let score = "12";
score = Number(score);
console.log(score); // 12

let score2 = "12abcd";
score2 = Number(score2);
console.log(score2); // NaN

let a = null;
a = Number(a);
console.log(a); // 0

let b = undefined;
b = Number(b);
console.log(b); // NaN

let c = true;
c = Number(c);
console.log(c); // true => 1 , false => 0

/* 
"12" => 12
"12abcd" => NaN
"null" => 0
"undefined" => NaN
"true" => 1
"false" => 0
*/

// # DATATYPE CONVERSION TO BOOLEAN : Boolean() constructor
console.log("***".repeat(3), "DATATYPE CONVERSION TO BOOLEAN", "***".repeat(3));

let score3 = "12";
score3 = Boolean(score3);
console.log(score3); // true

let score4 = "12abcd";
score4 = Boolean(score4);
console.log(score4); // true

let d = null;
d = Boolean(d);
console.log(d); // false

let e = undefined;
e = Boolean(e);
console.log(e); // false

let f = "";
f = Boolean(f);
console.log(f); // false

let g = 343;
g = Boolean(g);
console.log(g); // true

// # DATATYPE CONVERSION TO STRING : String() constructor
console.log("***".repeat(3), "DATATYPE CONVERSION TO STRING", "***".repeat(3));

let score5 = "12";
score5 = String(score5);
console.log(score5); // "12"

let score6 = "12abcd";
score6 = String(score6);
console.log(score6); // "12abcd"

let h = null;
h = String(h);
console.log(h); // "null"

let i = undefined;
i = String(i);
console.log(i); // "undefined"

let j = "";
j = String(j);
console.log(j); // ""

let k = 343;
k = String(k);
console.log(k); // "343"

let l = true;
l = String(l);
console.log(l); // "true"

// # DATATYPE CONVERSION TO OBJECT : Object() constructor
console.log("***".repeat(3), "DATATYPE CONVERSION TO OBJECT", "***".repeat(3));

let arr = [1, 2, 3, 4];
arr = Object(arr);
console.log(arr); // [ 1, 2, 3, 4 ]

let score7 = "12abcd";
score7 = Object(score7);
console.log(score7); // [String: '12abcd']

let m = null;
m = Object(m);
console.log(m); // {}

let n = undefined;
n = Object(n);
console.log(n); // {}

let o = "";
o = String(o);
console.log(o); // ""

let p = 343;
p = Object(p);
console.log(p); // [Number: 343]

let q = true;
q = Object(q);
console.log(q); // [Boolean: true]

let r = NaN;
r = Object(r);
console.log(r); // [Number: NaN]
