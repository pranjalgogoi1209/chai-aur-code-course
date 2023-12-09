// # WHILE LOOP
console.log("*** WHILE LOOP ***");
let i = 1;
while (i <= 10) {
  console.log(`Value of i is : ${i}`);
  i++;
}

// # WHILE LOOP IN AN ARRAY
console.log("*** WHILE LOOP IN AN ARRAY ***");
const myArray = ["batman", "superman", "flash"];
let item = 0;
while (item < myArray.length) {
  console.log(`myArray has ${myArray[item]} in index no. ${item}`);
  item++;
}

// # DO WHILE LOOP
console.log("*** DO WHILE LOOP ***");
// let score = 1;
let score = 11;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
