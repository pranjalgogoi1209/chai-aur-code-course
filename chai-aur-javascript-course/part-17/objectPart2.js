// const user = Object()
const user = new Object();
console.log(user);
// singleton object

const newUser = {};
console.log(newUser);

// # ADDING ELEMENTS IN USER OBJECT
console.log("***".repeat(3), "ADDING ELEMENT IN USER OBJECT", "***".repeat(3));

user.name = "pranjal";
user.id = 111;

console.log(user);

// # NESTED OBJECT
console.log("***".repeat(3), "NESTED OBJECT", "***".repeat(3));

const fullName = {
  userFullName: {
    name: "pranjal googi",
    skills: {
      frontend: ["react", "javascript", "tailwind css", "css", "html"],
      backend: ["python"],
    },
  },
};
console.log(fullName.userFullName.skills.frontend[0]);

// # ADD MULTIPLE OBJECTS
console.log("***".repeat(3), "ADD MULTIPLE OBJECTS", "***".repeat(3));

const obj1 = { name: "pranjal gogoi", isValid: false };

const obj2 = { age: 24, gender: "male", name: "krishna yadav" };

// const newObj = {obj1, obj2, obj3}

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
// obj2.name is overwriting the obj1.name

const newObj = { ...obj1, ...obj2 };
console.log(newObj);

// # OBJECT METHODS

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// # CHECK PROPERTY OF AN OBJECT

console.log(user.hasOwnProperty("id"));
