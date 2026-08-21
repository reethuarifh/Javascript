//Different types of datatypes

//1) Primitive datatypes:
// "String" A string is a text
const userName = 'Reethu';
console.log(`Hello ${userName}`, typeof userName);

//"Number" is used for intergers and decimals
let age = 31;
let rating = 4.5;

const productPrice = 999;
const productQuantity = 3;
const total = productPrice * productQuantity;
console.log(`Total amount is ${total}`, typeof total)

//"Boolean" has only two values. True , False. Mainly it is used for decisions
const ifLoggedIn = true;
if(ifLoggedIn) {
console.log("show dashboard");
}

//"Undefined" A variable exists, but value was not assigned.
let userName;
console.log(userName); // output: undefined

let employeeDetails={
  name: "Farhana";
}
console.log(employeeDetails.email); //output: undefined, because in employeeDetails we have not declared email.
  
