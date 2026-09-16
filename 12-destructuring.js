//Object and Array Destructuring is a modern JavaScript feature (introduced in ES6) that allows you to unpack values from arrays or properties from objects and assign them to distinct variables in a single, clean line of code.

1. Object Destructuring
---------------------------------
Example:1
---------------------------------
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
---------------------------------
Example:2
---------------------------------
const user = {
    name: "Reethu",
    age: 22,
};
const {name, age, city="hyderabad"} = user;
console.log(city); //output: hyderabad
--------------------------------------------
Example:3  you don't have to keep the same variable name.You can rename them:
--------------------------------------------
const user = {
    name: "Arif",
    age: 36
};
const { name: userName, age: userAge } = user;
console.log(userName, userAge); //output: Arif 36
------------------------------------------------------
Example:4 Nested Object Destructuring
------------------------------------------------------
const user = {
    name: "Arif",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

const {name, address:{city,state}} = user;
console.log(`My name is ${name} and Iam from ${city}`); //output:my name is Arif and Iam from Hyderabad

------------------------------------------
2. Array Destructuring : arrays don't have key names; they rely on order (index positions).
------------------------------------------
Example 1:
------------------------------------------
    
const skills = ["HTML", "CSS", "JavaScript", "React"];
const [first, second] = skills;
console.log(first, second); //output: HTML CSS

----------------------------------------------
Example 2: Skipping Values
----------------------------------------------
    
const skills = ["HTML", "CSS", "JavaScript", "React"];
const [first, ,third] = skills;
console.log(first, third); //output: HTML JavaScript




    
