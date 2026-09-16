//Object and Array Destructuring is a modern JavaScript feature (introduced in ES6) that allows you to unpack values from arrays or properties from objects and assign them to distinct variables in a single, clean line of code.

1. Object Destructuring

Example:1
const user = {
    name: "Reethu",
    age: 22,
    city: "Hyderabad"
};
(Without destructuring:)
const name = user.name;
const age = user.age;
const city = user.city;

console.log(name); //output: Reethu
console.log(age); //output: 22
console.log(city); //output: Hyderabad

(with destructuring)
const {name, age, city} = user;
console.log(name); //output: Reethu



