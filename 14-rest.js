What is Rest?
Collect multiple remaining values into a single array/object.
Spread:
[...skills]
      ↓
  expands

Rest:
(...skills)
      ↓
  collects

1)Rest in Function Parameters:
if we don't know how many values will come?
Use rest:

function add(...numbers){
    console.log(numbers)
}
add(10,11,12); //output:[ 10, 11, 12 ]

2)Total of Any Number of Values
function totalCalculate(...prices){
    return prices.reduce((sum,price)=>sum+price, 0);
}
console.log(totalCalculate(10,11,12)) // output: 33

3)Rest With Arrow Functions
const totalCalculate=(...prices)=>{
    return prices.reduce((sum,price)=>sum+price, 0);
}
console.log(totalCalculate(10,11,12)) // output: 33

4)Rest in Array Destructuring
const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];
const [first, ...remaining] = skills;
console.log(first, remaining); //output: HTML [ 'CSS', 'JavaScript', 'React' ]

5)React Props
function EmployeeCard({ name, ...details }) {
    console.log(name);
    console.log(details);

    return (name);
}

const result= EmployeeCard({
    name:"Rahul",
    age:28,
    city:"Hyderabad",
    designation:"UI Developer"
})

console.log(result); //output: Rahul { age: 28, city: 'Hyderabad', designation: 'UI Developer' } Rahul
