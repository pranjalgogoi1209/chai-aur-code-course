// # THIS KEYWORD

const user = {
    name : 'pranjal gogoi',
    price : 999,
    welcomeMessage : function(){
        console.log(this);  // user object
        return (`${this.name} => Welcome to My World`)
    }
}

console.log(user.welcomeMessage());
console.log(this);  // window object

// upadting the name
user.name = 'krishna yadav'
console.log(user.welcomeMessage());


function ok(){
    const name = 'pranjal'
    console.log(this);  // global object
    console.log(this.name); // undefined
}
ok()    


// ARROW FUNCTION

const arrow = () => {
    console.log('I am arrow');
}
arrow()

// IMPLICIT ARROW FUNCTION

const arrow2 = () => 'I AM ARROW'
console.log(arrow2());

// or

const arrow3 = () => (
    {name: 'pranjal', age: 24}
)
console.log(arrow3().age);