// # NORMAL FUNCTION

console.log(addOne(100));
// We can call the normal function before declaration
function addOne(num) {
  return num + 1;
}

// # FUNCTION EXPRESSION

console.log(addTwo(100));
// We cann't call the function expression before declaration
// It's a hoisting concept
const addTwo = function (num) {
  return num + 2;
};
console.log(addOne(100));
// We can call the normal function before declaration
function addOne(num) {
  return num + 1;
}
