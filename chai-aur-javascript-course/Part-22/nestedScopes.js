// # NESTED SCOPES WITH IF BLOCK
if(true){
    const userName = "pranjalgogoi1209"
    if(true){
        console.log(userName)
        const age = 24
    }
    // console.log(age)
}
// console.log(userName)


// # NESTED SCOPES WITH FUNCTION BLOCK
const one = () => {
    const userName = "krishnayadav"
    const two = () => {
        console.log(userName);
        const age = 27
    }
    two()
    // console.log(age);
}
one()
