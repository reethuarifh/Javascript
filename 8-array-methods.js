//Array
  ↓
//Array Methods
//├── forEach()
//├── map()
//├── filter()
//├── find()
//├── findIndex()
// ├── some()
// ├── every()
// ├── reduce()
// ├── includes()
// ├── indexOf()
// ├── sort()
// ├── reverse()
// ├── slice()
// └── splice()

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

