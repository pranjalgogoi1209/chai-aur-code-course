// # SINGLETON
// Object.create

// # OBJECT LITERALS
console.log("***".repeat(3), "OBJECT LITERALS", "***".repeat(3));

const mySym = Symbol();
const jsUser = {
  name: "pranjal",
  fullName: "pranjal gogoi",
  age: 24,
  location: "assam",
  email: "gogoipranjal2019@gmail.com",
  isLoggedIn: false,
  lastLoggedInDays: ["monday", "thursday"],
  [mySym]: "important for interview purpose",
};

console.log(jsUser.name);
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]);
console.log(jsUser);

// # UPDATING VALUE FROM THE OBJECT
console.log("***".repeat(3), "UPDATING VALUE FROM THE OBJECT", "***".repeat(3));

jsUser.name = "krishna";
jsUser["fullName"] = "krishna yadav";
console.log(jsUser);

// # OBJECT.FREEZE : AFTER USING THIS, WE CAN'T UPDATE AN OBJECT
console.log(
  "***".repeat(3),
  "OBJECT.FREEZE : AFTER USING THIS, WE CAN'T UPDATE AN OBJECT",
  "***".repeat(3)
);

// Object.freeze(jsUser);

jsUser.name = "rahul";
jsUser["fullName"] = "rahul singh";
console.log(jsUser);

// # FUNCTION AS A VALUE IN OBJECT
console.log("***".repeat(3), "FUNCTION AS A VALUE IN OBJECT", "***".repeat(3));

jsUser.greeting = function () {
  console.log("Function as a value in object");
};

jsUser.greetingTwo = function () {
  console.log(`Hello ${this.name}`);
};

console.log(jsUser);
console.log(jsUser.greeting);

jsUser.greeting();
jsUser.greetingTwo();
