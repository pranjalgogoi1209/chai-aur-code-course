// # REST OPERATOR
console.log("***".repeat(3), "REST OPERATOR", "***".repeat(3));

const calculateCartPrice = (userName, category, ...price) => {
  let sum = null;
  for (let i of price) {
    sum = sum + i;
  }
  console.log(
    `${userName} baught ${sum} amount of products from ${category} category`
  );
};
calculateCartPrice("pranjal gogoi", "grocery", 200, 300, 400, 500, 100);

// # FUNCTION WITH OBJECT
console.log("***".repeat(3), "FUNCTION WITH OBJECT", "***".repeat(3));

const userObj = {
  name: "pranjal gogoi",
  age: 24,
};

const myFunc = anyObj => {
  console.log(anyObj.name, anyObj.age);
};
myFunc(userObj);

// destructuring the object
const func = ({ name, age }) => {
  console.log(name, age);
};
func(userObj);
