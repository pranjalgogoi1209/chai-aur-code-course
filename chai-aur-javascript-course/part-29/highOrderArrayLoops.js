// # FOR OF LOOP IN ARRAY
console.log("*** FOR OF LOOP IN ARRAY ***");
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// # FOR OF LOOP IN STRING
console.log("*** FOR OF LOOP IN STRING ***");
const greeting = "Hello World...!";
for (const greet of greeting) {
  console.log(`Each char is : ${greet}`);
}

// # MAP
console.log("*** MAP ***");
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "Franch");
map.set("IN", "India"); // IN key is created before
console.log(map);

// FOR OF LOOP IN MAP
console.log("*** FOR OF LOOP IN MAP ***");
// iterator gets an array, so we are destructuring the array
for (const [key, value] of map) {
  console.log(key, value);
}

// FOR OF LOOP IN OBJECT
console.log("*** FOR OF LOOP IN OBJECT ***");
// we cann't use for of in object, so we convert the object into array
const myObj = {
  name: "pranjalgogoi",
  age: 24,
};
for (const key of Object.keys(myObj)) {
  console.log(key, myObj[key]);
}

// FOR IN LOOP IN OBJECT
console.log("***FOR IN LOOP IN OBJECT***");
for (const key in myObj) {
  console.log(key, myObj[key]);
}

// FOR IN LOOP IN ARRAY
console.log("***FOR IN LOOP IN ARRAY***");
const newArray = ["spiderman", "superman", "batman"];
// for in loop in array gives only index number
for (const index in newArray) {
  console.log(index, newArray[index]);
}

// FOR IN LOOP IN MAP
console.log("***FOR IN LOOP IN MAP***");
// for in loop gives us key, and here iterator gets an array, so it will not print anything
for (const key in map) {
  console.log(key);
}

// HIGHER ORDER FUNCTION:
// FOREACH
console.log("***FOREACH***");
newArray.forEach((element, index, array) => {
  console.log(element, index, array);
});
// or
const func = (element, index, array) => {
  console.log(element, index, array);
};
newArray.forEach(func);

// FOREACH LOOP IN ARRAY OF OBJECTS
const myCoding = [
  { languageName: "javascript", languageFileName: "js" },
  { languageName: "java", languageFileName: "java" },
  { languageName: "python", languageFileName: "py" },
];
myCoding.forEach(item => {
  console.log(item.languageName);
});
