// # THIS KEYWORD

const user = {
  name: "pranjal gogoi",
  price: 999,
  welcomeMessage: function () {
    console.log(this); // user object
    return `${this.name} => Welcome to My World`;
  },
};

console.log(user.welcomeMessage());
console.log(this); // window object

// upadting the name
user.name = "krishna yadav";
console.log(user.welcomeMessage());

// to check this in node environment
function ok() {
  const name = "pranjal";
  console.log(this); // global object
  console.log(this.name); // undefined
}
ok();

// ARROW FUNCTION

// EXPLICIT RETURN
// in a arrow functin this works and it is global object
const arrow = () => {
  console.log("I am arrow");
  console.log(this);
};
arrow();

// IMPLICIT RETURN ARROW FUNCTION

const arrow2 = () => "I AM ARROW";
console.log(arrow2());

// or

const arrow3 = () => ({ name: "pranjal", age: 24 });
console.log(arrow3().age);

// inside an object, if we use arrow function, this. will not work
const obj = {
  name: "pranjal",
  age: 24,
  skills: () => {
    console.log(`${this.name} has many skills`);
  },
};

obj.skills();
