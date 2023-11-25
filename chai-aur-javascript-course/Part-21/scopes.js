let a = 1
const b = 2
var c = 3
let name = "pranjal gogoi"

if(true){
    let a = 11  // let is a block scope
    const b = 22  // const is a block scope
    var c = 33
    name = "krishna yadav"  // updation is possible
}

console.log(a);
console.log(b);
console.log(c);
console.log(name);