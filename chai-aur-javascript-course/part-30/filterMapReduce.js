// RETURN IN FOREACH LOOP
console.log("***RETURN IN FOREACH LOOP***");
const array = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const newArray = array.forEach(item => {
  return item;
});
console.log(newArray);

// FILTER METHOD
console.log("***FILTER METHOD***");
const filteredArray = array.filter(item => {
  return item > 55;
});
console.log(filteredArray);

// USE FOREACH AS A FILTER
console.log("***USE FOREACH AS A FILTER***");
const awesomeArray = [];
array.forEach(item => {
  if (item > 55) awesomeArray.push(item);
});
console.log(awesomeArray);

// FILTER METHOD IN ARRAY OF OBJECTS
console.log("***FILTER METHOD IN ARRAY OF OBJECTS***");
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
const filteredBooks = books.filter(
  book => book.publish >= 1990 && book.genre === "Science"
);
console.log(filteredBooks);

// MAP METHOD
console.log("***MAP METHOD***");
const nums = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const newNums = nums.map(num => num * 2);
console.log(newNums);

// HIGH ORDER FUNCTION CHAINING
console.log("***HIGH ORDER FUNCTION CHAINING***");
const chainNums = nums
  .map(num => num + 10)
  .map(num => num * 100)
  .filter(num => num > 5000);
// [21, 32, 43, 54, 65, 76, 87, 98, 109] => first map
// [2100, 3200,  4300,5400, 6500,  7600, 8700, 9800, 10900] => second map
// [5400, 6500, 7600, 8700, 9800, 10900] => third filter
console.log(chainNums);

// REDUCE METHOD
console.log("***REDUCE METHOD***");
const array1 = [1, 2, 3, 4, 5];
const sum = array1.reduce((acc, cv) => {
  return acc + cv;
});
console.log(sum);

// REDUCE METHOD WITH INITIAL VALUE
console.log("***REDUCE METHOD WITH INITIAL VALUE***");
const initialValue = 0;
const sumWithInitial = array1.reduce((acc, cv) => {
  console.log(`acc=>${acc}, cv=>${cv}`);
  return acc + cv;
}, initialValue);
console.log(sumWithInitial);

// REDUCE IN ARRAY OF OBJECTS
console.log("***REDUCE IN ARRAY OF OBJECTS***");
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
// add all the price in the shopping cart
const total = shoppingCart.reduce((acc, cv) => acc + cv.price, 0);
console.log(total);
