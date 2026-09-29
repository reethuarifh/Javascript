What does Spread mean?
Take the elements/properties from an existing array or object and expand them into a new array/object.
  
1)Spread with Arrays:
-----------------------
const arr = ["html","css","javascript"];
const newArr = [...arr];
console.log(newArr); //output: [ 'html', 'css', 'javascript' ]. They contain the same values, but they are different array objects.
--------------------------

2)Add New Items While Copying:
------------------------------
const arr = ["html","css","javascript"];
const newArr = [...arr,"Bootstrap","ReactJS"];
console.log(newArr); //output: [ 'html', 'css', 'javascript', 'Bootstrap', 'ReactJS' ]
------------------------------

3)Combine Two Arrays:
------------------------------
const arr = ["html","css","javascript"];
const newArr = ["Bootstrap","ReactJS"];
const skills = [arr, newArr];
console.log(skills)//output: [ [ 'html', 'css', 'javascript' ], [ 'Bootstrap', 'ReactJS' ] ]. This is nested array.

console.log(...arr, ...newArr); //output: html css javascript Bootstrap ReactJS. This is Raw Spread Parameters  

const newSkills = [...arr, ...newArr];
console.log(newSkills); //output: [ 'html', 'css', 'javascript', 'Bootstrap', 'ReactJS' ]. Safely Merged Array
-------------------------------

4)Spread With Objects
-------------------------------
const user = {
    name: "Reethu",
    age: 31,
    city: "Hyd"
};
const userDetails = {...user};
console.log(userDetails); //output: { name: 'Reethu', age: '31', city: 'Hyd' }

//It shows error. Because standard JavaScript Objects are NOT iterable, JavaScript does not know how to unpack name, age, and city sequentially into loose function arguments, causing the code to crash.
console.log(...user); 

console.log({...user}); //output: { name: 'Reethu', age: '31', city: 'Hyd' }
----------------------------------

5)Add a New Property
----------------------------------
const user = {
    name: "Reethu",
    age: 31,
    city: "Hyd"
};
const userDetails = {
    ...user,
    designation: "UI Developer"
}
console.log(userDetails); // output: { name: 'Reethu', age: '31', city: 'Hyd', designation: 'UI Developer' }

6)Update an Object Property
-------------------------------
const user = {
    name: "Reethu",
    age: 31,
    city: "Hyd"
};
//JavaScript processes left to right. The later property overrides the earlier one.
const userDetails = {
    ...user,
    age: 30
}
console.log(userDetails); // output: { name: 'Reethu', age: 30, city: 'Hyd' }

const details = {
    age: 30,
    ...user
}
//age will not change but it changes the position
console.log(details); // output: { age: 31, name: 'Reethu', city: 'Hyd' }

7)Nested Object
----------------------------
const user = {
    name: "reethu",
    age: 31,
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
}
const userDetails= {...user};
console.log(userDetails); //output: {name: 'reethu', age: 31,address: { city: 'Hyderabad', state: 'Telangana' }}

const userUpdate = {
    ...user,
    address: {
        ...user.address,
        city: "GDK"
    }
    
}
console.log({...userUpdate}); //output: //output: {name: 'reethu', age: 31,address: { city: 'GDK', state: 'Telangana' }}

8)Spread With Array of Objects
const employees = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Reethu" }
];
const updatedEmployees = [
    ...employees,
    { id: 3, name: "John" }
];
console.log(...updatedEmployees); // output: { id: 1, name: 'Rahul' } { id: 2, name: 'Reethu' } { id: 3, name: 'John' }

9)Remove an Item From an Array
const employees = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Reethu" },
    { id: 3, name: "John" }
];
const employeesUpdate = employees.filter(employee=>employee.id !== 2);
console.log(employeesUpdate); //output: [ { id: 1, name: 'Rahul' }, { id: 3, name: 'John' } ]
