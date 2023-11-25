// # DEFINE AND CALL A FUNCTION
console.log("***".repeat(3), "DEFINE AND CALL A FUNCTION", "***".repeat(3));

function func(){
    console.log("Pranjal Gogoi");
}
func()


// # ARGUMENT AND PARAMETER
console.log("***".repeat(3), "FUNCTION AND PARAMETER", "***".repeat(3));

function sum(num1, num2){
    console.log(num1 + num2);
}
console.log("Sum is : ", sum(1, 2));


// # RETURN IN FUNCTION
console.log("***".repeat(3), "RETURN IN FUNCTION", "***".repeat(3));

function sum2(num1, num2){
    return num1 + num2
    console.log("Not gonna print after return keyword");
}
console.log("Sum is : ", sum2(1, 2));


// # CONDITION IN FUNCTION
console.log("***".repeat(3), "CONDITION IN FUNCTION", "***".repeat(3));

function isLoggedIn(userName){
    if(!userName) return "Enter Your User Name"
    return `${userName} is Looged In`
}
console.log(isLoggedIn("Pranjal Gogoi"));
console.log(isLoggedIn(""));
console.log(isLoggedIn());