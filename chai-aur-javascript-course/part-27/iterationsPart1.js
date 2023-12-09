// # FOR LOOP
console.log("*** FOR LOOP ***");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// # IF INSIDE FOR LOOP
console.log("*** IF INSIDE FOR LOOP ***");
for (let i = 0; i < 10; i++) {
  if (i == 5) console.log(`${i} is best number`);
  console.log(i);
}

// # NESTED FOR LOOP
console.log("*** NESTED FOR LOOP ***");
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication Table of ${i} =>`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("");
}

// # FOR LOOP INSIDE AN ARRAY
console.log("*** FOR LOOP INSIDE AN ARRAY ***");
const myArray = ["batman", "superman", "flash"];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// # BREAK IN FOR LOOP
console.log("*** BREAK IN FOR LOOP ***");
for (let index = 1; index <= 10; index++) {
  if (index === 5) {
    console.log(`${index} is detected`);
    break;
  }
  console.log(`value of index is : ${index}`);
}

// # CONTINUE IN FOR LOOP
console.log("*** CONTINUE IN FOR LOOP ***");
for (let index = 1; index <= 10; index++) {
  if (index === 5) {
    console.log(`${index} is detected, Now continue...`);
    continue;
  }
  console.log(`value of index is : ${index}`);
}
