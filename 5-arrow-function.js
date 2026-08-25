//Basic Arrow Function Syntax

const greet = () => {
  console.log("Good Morning")
}
greet();

//Arrow Function with one parameter

const userName = (name)=>{
  return `Hello ${name}`;
}
console.log(userName("reethu"));// output: Hello reethu

//Arrow Function with parameters
const add = (a, b) =>{
  return a+b;
}
console.log(add(2, 2));

//If the function contains only one expression to return, you can remove:{ }, return. This is called an "implicit return"

const add = (a, b) => a + b;
console.log(add(2,2)); //output: 4

const totalCalculate = (price, quantity) => price*quantity;
console.log(`Total amount is: ${totalCalculate(4,6)}`); //output: 24

//If there is more than one statement we need to use {} in arrow function

const userLogin = (userName, password) =>{
  if (userName && password) {
    return "Login sucess";
  }
  else {
    return "enter details";
  }
}
console.log(userLogin("reethu", 12345)); // output: Login sucess

