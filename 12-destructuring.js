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

-------------------------------------------------
Example 3: Rest in Array Destructuring
-------------------------------------------------
    
const skills = ["HTML", "CSS", "JavaScript", "React"];
const [first, ...remaining] = skills;
console.log(first, remaining); //output: HTML [ 'CSS', 'JavaScript', 'React' ]

-------------------------------------------------
Example 4: Real-Time API Example
-------------------------------------------------
const response = {
    status: "success",
    message: "user fetched",
    data:[
        {id:1, name: "Reethu"},
        {id:2, name: "Arif"},
    ]
};
const {status, message, data} = response;
console.log(status, message, data); //output: success user fetched [ { id: 1, name: 'Reethu' }, { id: 2, name: 'Arif' } ]
    
--------------------------------------------------
Example 5: 
--------------------------------------------------
    
const user = {
    name: "Arif",
    age: 36,
    city: "Hyderabad"
};
function displayUser({name, age}) {
    console.log(name);
    console.log(age);
}
displayUser(user); //output: Arif 36

--------------------------------------------------
Example 6: Arrow Function + Object Destructuring
--------------------------------------------------

const userDetails = {
    name: 'Arif',
    age: 36,
    city: 'Hyderabad'
}
const user=({name, age, city})=>{
    return`Hi, I am ${name} my age is ${age} and I am from ${city}`
}
console.log(user(userDetails));//output: Hi, I am Arif my age is 36 and I am from Hyderabad

----------------------------------------------------
Example 7: Array of Objects + map() + Destructuring
----------------------------------------------------
const users = [
    { id: 1, name: "Rahul", city: "Hyderabad" },
    { id: 2, name: "Reethu", city: "Bangalore" }
];
const details = users.map(({name, city})=>({name, city}));
console.log(details); //output: [{ name: 'Rahul', city: 'Hyderabad' },{ name: 'Reethu', city: 'Bangalore' }]

---------------------------------------------------
Example 8:
---------------------------------------------------
const products = [
    { name: "Laptop", price: 70000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

const total = products.map(({price})=> price).filter(product => product > 5000);
console.log(total); //output: [7000]

--------------------------------------------------
Example 9: Destructuring With reduce()
--------------------------------------------------
const cart = [
    { name: "Laptop", price: 70000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

const total = cart.reduce(
    (sum, { price }) => sum + price,
    0
);

console.log(total);
