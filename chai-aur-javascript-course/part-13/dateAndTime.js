// # DATE
console.log("***".repeat(3), "DATE", "***".repeat(3));

const myDate = new Date();
console.log(myDate); // 2023-10-02T04:03:12.251Z
console.log(myDate.toString()); // Mon Oct 02 2023 09:33:12 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Mon Oct 02 2023
console.log(myDate.toISOString()); // 2023-10-02T04:03:12.251Z
console.log(myDate.toJSON()); // 2023-10-02T04:03:12.251Z
console.log(myDate.toLocaleDateString()); // 10/2/2023
console.log(myDate.toLocaleString()); // 10/2/2023, 9:33:12 AM
console.log(myDate.toLocaleTimeString()); // 9:35:45 AM
console.log(myDate.toTimeString()); // 09:37:04 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); // Mon, 02 Oct 2023 04:07:40 GMT

console.log(typeof myDate); // object

// # CREATED OWN DATE AND TIME
console.log("***".repeat(3), "CREATED OWN DATE AND TIME", "***".repeat(3));

const myCreatedDateTime = new Date(2023, 0, 23);
// const myCreatedDateTime = new Date(2023, 0, 23, 6, 20)
// const myCreatedDateTime = new Date(2023, 0, 23, 6, 20, 30)
// const myCreatedDateTime = new Date("2023-05-25")
console.log(myCreatedDateTime.toLocaleDateString()); // 1/23/2023
// month count from 0 to 11, if we put 12 , it will give next next year's first month
console.log(myCreatedDateTime.toLocaleTimeString());

// # TIME STAMP
console.log("***".repeat(3), "TIME STAMP", "***".repeat(3));

// by default , it is in miliseconds
const myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDateTime.getTime());
// we can compare both

// converting to second
console.log(Math.floor(myTimeStamp / 1000));

// converting to minute
console.log(Math.floor(myTimeStamp / 60000));

// PROPERTIES OF DATE OBJECT
console.log("***".repeat(3), "PROPERTIES OF DATE OBJECT", "***".repeat(3));

const newDate = new Date();

console.log(newDate.getDate());
console.log(newDate.getDay()); // Monday : 1
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

// # CUSTOMIZE TO LOCAL STRING METHOD
console.log(
  "***".repeat(3),
  "CUSTOMIZE TO LOCAL STRING METHOD",
  "***".repeat(3)
);

console.log(
  newDate.toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
);
// ctrl + space => To get recommendations of properties
