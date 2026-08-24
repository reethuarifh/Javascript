//non-primitive datatype
//function comes under non-primitive datatype. A function is a reusable block of code designed to perform a particular task.
//function declaration--->function call--->function execution

//funtion is a "keyword", greet is function name. just declaring a function doesn't execute it.Nothing appears in the console yet. You must call/invoke the function:

//EXAMPLE:1//

function greet(){
  console.log('good morning')
}
greet(); //output: good morning

//EXAMPLE:2//

//function with parameter
function greet(name){
  console.log(`good morning ${name}`)
}
greet("Reethu"); // good morning Reethu

//greet(name).()=These parentheses are where we define parameters.name is a parameter."Reethu" is a argument
//Parameter = placeholder in function definition. Argument = actual value passed during function call.

//EXAMPLE:3//

//function with parameters
function add(a,b){
  console.log(a+b);
}
add(10,20);

//EXAMPLE:4//

//function with "return".The "return" statement stops the execution of a function and sends a specific value back to the code that called it.
function addNumbers(a,b){
  return a+b;// The function stops here and outputs the sum
  console.log("This will never run"); // Unreachable code
}
const result= addNumbers(10,20);
console.log(result); // output: 30

//EXAMPLE:5//

//funtion with "ifelse"

function checkAccess(isLoggedIn){
  if(isLoggedIn){
    return "access success";
  }
  else{
    return "access denied";
  }
}
const access = checkAccess(true);
console.log(access); // output: access success

//EXAMPLE:6

//function expression. function can be stored in a variable

const greet = function(){
  console.log('good morning');
}
greet();//output: good morning

//function expression with parameters.

const calculatePrice = function(price,quantity){
  return price*quantity;
}
const total= calculatePrice(49,6);
console.log(total);//output: 294

//EXAMPLE:7 - function expression

const validate = function(email){
  if(email.includes('@')){
    return "validate email";
  }
   else {
     return "invalid email"
   }     
}
console.log(validate("reethufarhana201@gmail.com"));//output: validate email

//EXAMPLE:8 - Function expressions can be passed around, this is known as callback function.
