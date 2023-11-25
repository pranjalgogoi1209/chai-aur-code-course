// #CALL BY VALUE : STACK : PREMITIVE DATATYPE
console.log("***".repeat(3), "CALL BY VALUE : STACK : PREMITIVE DATATYPE", "***".repeat(3));

let user = "Pranjal Gogoi"
let newUser = user  // passing a copy of the value stored in stack memory
console.log(user, newUser);

newUser = "Krishna Yadav"
console.log(user, newUser);


// #CALL BY REFERENCE : HEAP : REFERENCE DATATYPE
console.log("***".repeat(3), "CALL BY REFERENCE : HEAP : REFERENCE DATATYPE", "***".repeat(3));

let obj = {age : 23}
let newObj = obj    // passing a reference of the value stored in heap memory
console.log(obj, newObj);

newObj.age = 27
console.log(obj, newObj);
