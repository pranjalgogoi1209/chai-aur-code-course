// PROMISE CREATION
const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // db calls, cryptography, network
  setTimeout(() => {
    console.log("***PROMISE CREATION***");
    console.log("async task is complete");
    resolve();
  }, 500);
});
promiseOne.then(num => {
  console.log("promise consumed");
});

// DATA PASSING IN PROMISE
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("***DATA PASSING IN PROMISE***");
    console.log("async task2 is complete");
    resolve({ username: "pranjalgogoi", age: 24 });
  }, 500);
}).then(data => {
  console.log("promise2 consumed", data);
});

// REJECT IN PROMISE
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("***REJECT IN PROMISE***");
    const error = true;
    if (!error) {
      resolve({ username: "krishnayadav", age: 27 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 500);
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// HANDLE PROMISE MULTIPLE TIME
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("***HANDLE PROMISE MULTIPLE TIME***");
    const error = false;
    if (!error) {
      resolve({ username: "upamabora", age: 23 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 500);
})
  .then(data => {
    return data.username;
  })
  .then(username => {
    console.log(username);
  })
  .catch(err => {
    console.log(err);
  });

// FINALLY
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("***FINALLY***");
    const error = true;
    if (!error) {
      resolve({ username: "upamabora", age: 23 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 500);
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either rosolved or rejected");
  });

// PROMISE HANDLE WITH ASYNC-AWAIT and TRY-CATCH
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("***PROMISE HANDLE WITH ASYNC-AWAIT and TRY-CATCH***");
    const error = true;
    if (!error) {
      resolve({ username: "rinkusaikia", age: 40 });
    } else {
      reject("ERROR: js error");
    }
  }, 500);
});

const consumePromise2 = async () => {
  try {
    const response = await promise2;
    console.log(response.username);
  } catch (error) {
    console.log(error);
  }
};

consumePromise2();

// FETCHING DATA FROM API
(async () => {
  const response = await fetch("https://randomuser.me/api/");
  console.log("***FETCHING DATA FROM API***");
  try {
    const data = await response.json();
    // it also takes time
    console.log(data.results[0].gender);
  } catch (err) {
    console.log("err =>", err);
  }
})();
