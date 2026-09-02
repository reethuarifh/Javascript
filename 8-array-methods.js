//Array
  ↓
//Array Methods
//├── forEach()
//├── map()
//├── filter()
//├── find()
//├── findIndex()
//├── some()
//├── every()
//├── reduce()
//├── includes()
//├── indexOf()
//├── sort()
//├── reverse()
//├── slice()
//└── splice()

//1.foreach() --> Standard Looping
//Executes a callback function once for every element. It does not generate a new array. It is strictly used to trigger actions (like executing a DOM change or printing logs).

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number=>{
    console.log(number)
}) // output: 1 2 3 4 5

//2.map() — The Transformer
//Loops through every item, runs a function on it, and returns a new array with the transformed values.

const numbers = [1,2,3,4,5];
const newNumbers = numbers.map(num=>num+2);
console.log(newNumbers);//output: [ 3, 4, 5, 6, 7 ]

//map() With Objects
const users = [
    { id: 1, name: "Reethu", age: 31 },
    { id: 2, name: "Farhana", age: 32 },
    { id: 3, name: "Arifh", age: 36 }
];
const names = users.map(user=>user.name);
const details = users.map(user=>`${user.name}'s age is ${user.age}`);
console.log(names); //output: [ 'Reethu', 'Farhana', 'Arifh' ]
console.log(details); // output: [ "Reethu's age is 31", "Farhana's age is 32", "Arifh's age is 36" ]

//map() Returning Objects
const users = [
    { id: 1, name: "Reethu", age: 31 },
    { id: 2, name: "Farhana", age: 32 },
    { id: 3, name: "Arifh", age: 36 }
];

const result = users.map(user=>({
    SNo: user.id,
    profile: user.name
}))

console.log(result); //output: [{ SNo: 1, profile: 'Reethu' }, { SNo: 2, profile: 'Farhana' }, { SNo: 3, profile: 'Arifh' }]

//3.filter() — The Cleaner. 
//Loops through your items and keeps only the ones that match a specific condition.

const numbers = [5,10,15,20,25];
const result = numbers.filter(num=>num>=15); //checking greaterthan or equals to
console.log(result); // output: [ 15, 20, 25 ]

//4.find() Searching & Checking Elements
//find()      → gives the object
//Methods used to locate items or check if data meets requirements.
//find() returns the first actual item that passes your condition.

const users = [
    { id: 1, name: "Reethu", age: 31 },
    { id: 2, name: "Farhana", age: 32 },
    { id: 3, name: "Arifh", age: 36 }
];

const test = users.find(user=>user.age===30); // check if data meets requirements
console.log(test)// output: undefined

const result = users.find(user=>user.name==="Reethu");
console.log(result)// output: { id: 1, name: 'Reethu', age: 31 }

//5. findIndex() — Find Position. findIndex() → gives the position
const users = [
    { id: 1, name: "Reethu", age: 31 },
    { id: 2, name: "Farhana", age: 32 },
    { id: 3, name: "Arifh", age: 36 }
];

const test = users.findIndex(user=>user.age=30); // check if data meets requirements
console.log(test)// output: 0

const result = users.findIndex(user=>user.name==="Arifh");
console.log(result)// output: 2

//6. some() — Does At Least One Match?.  checks if at least one item passes a condition.
const age = [10,15,18,20,25];
const adult = age.some(num=>num>=18);
console.log(adult)// output: true

//7. every() checks if all items pass a condition.
const age = [10,15,18,20,25];
const adult = age.every(num=>num>=18);
console.log(adult)// output: false

//8. reduce(). Combines all array items into a single final value (like a total sum).
const numbers = [10,15,18,20,25];
// Add , '0' at the end to set a safe starting point
const result = numbers.reduce((sum, number) => sum + number, 0);
console.log(result) // output: 88

//9. includes() — Check Whether a Value Exists. Checks if a specific value exists in a simple array (returns true or false).
const skills = ["HTML", "CSS", "Javascript", "Bootstrap", "ReactJS"];
console.log(skills.includes("html")); // output: false
console.log(skills.includes("CSS")); // output: true

