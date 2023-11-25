// # OBJECT DESTRUCTURING
console.log("***".repeat(3), "OBJECT DESTRUCTURING", "***".repeat(3));

const jsUser = {
    name : "pranjal",
    "fullName" : "pranjal gogoi",
    age : 24,
    location : "assam",
    email : "gogoipranjal2019@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["monday", "thursday", "friday"],
}

// changing the name to userName
const {name:userName, age, location, email, isLoggedIn, lastLoggedInDays} = jsUser

console.table([userName, age, location, email, isLoggedIn, lastLoggedInDays]);


// # JSON

/* 
    {
        "name" : "pranjal gogoi",
        "age" : 24,
        "country" : "india"
    }
*/

/* 
    [
        {
            "name" : "pranjal googi",
            "skill" : {
                "frontend" : "react",
                "backend" : null
            }
        },
        {}
    ]
*/

// JSON FORMATOR : WEBSITE
// JSON RANDOM API  : WEBSITE