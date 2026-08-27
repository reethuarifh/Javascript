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

//The 5 patterns should memorize in arrow function

//Pattern 1 — No parameters

const greet=()=>{
  console.log("good morning");
}
greet();//output:good morning

const greeting=()=>{
  return "good afternoon";
}
console.log(greeting());//output:good afternoon

//Pattern 2 — One parameter

const user=(name)=>{
  console.log(`good morning ${name}`);
}
user("reethu");//output: good morning reethu

const userName=(names)=>{
  return `good afternoon ${names}`;
}
console.log(userName("Arif"));//output: good afternoon Arif

//Pattern 3 — Multiple parameters

const adding=(a,b)=>{
  console.log(a*b);
}
adding(2,4); // output: 8

const addNum=(x,y)=>{
  return x*y;
}
console.log(addNum(3,5)); // output: 15

const validateMail=(mailId, password)=>{
  if(mailId && password){
    return "login success";
  }
  else {
    return "invalid"
  }
}
console.log(validateMail("ARF", 12345)); // output: login success

//Pattern 4 — Implicit return

const subNum = (a,b) => a-b;
console.log(subNum(6,4)); // output: 2

//Pattern 5 — Object return

const createUser = (name, age, city) => ({
    name,
    age,
    city
});
const userdetails = createUser("Arif", 36, "Hyderabad");
console.log(userdetails); // output: { name: 'Arif', age: 36, city: 'Hyderabad' }

//Real-time API data transformation
const userDetails = {
  firstName: 'Reethu',
  lastName: 'Farhana',
  age: 31
}

const userInfo = (user)=>({
  FullName:`${user.firstName} ${user.lastName}`,
  Age: `${user.age}`
})

console.log(userInfo(userDetails)); //output: { FullName: 'Reethu Farhana', Age: '31' }
