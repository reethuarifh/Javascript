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
console.log(userName); // output: undefined, here variable was declared, but value was not initiated.

let employeeDetails={
  name: "Farhana";
}
console.log(employeeDetails.email); //output: undefined, because in employeeDetails object we have not declared email.
  
//"Null" We intentionally say that there is no value. it means intentionally empty
let selectedUser = null;
// selectedUser = "Reethu";
console.log(selectedUser); //output: null, intentionally it was empty


