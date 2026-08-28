//An object is a way to store related data together using key-value pairs.

const user = {
  firstName: "Reethu",
  lastName: "Farhana",
  age: 31
}
console.log(`fullname: ${user.firstName} ${user.lastName}\nAge: ${user.age}`); //output:fullname: Reethu Farhana Age: 31
console.log([user.firstName, user.lastName, user.age]); //output: [ 'Reethu', 'Farhana', 31 ]
console.log(user.firstName, user.lastName, user.age); //output: Reethu Farhana 31

//firstName --> key
//"Reethu" --> value
//{} are called object literal syntax.

//user["name"]. "Bracket Notation". Bracket notation becomes especially useful when the property name is stored in a variable.

console.log(user["firstName"], user["lastName"], user["age"]); //output: Reethu Farhana 31

//Adding Properties Dynamically

const products = {}
products.mobile = "iphone";
products.price = "50000";
products["category"] = "electronics";
console.log(products); // output: { mobile: 'iphone', price: '50000', category: 'electronics' }

//Object With Nested Object

const empDetails = {
  fullName: {
    firstName:"Reethu",
    lastName:"Arifh",
  },
  Age: 31,
  Address: {
    city: "hyd",
    state: "telangana"
  }
}
console.log(empDetails); //output: {fullName: { firstName: 'Reethu', lastName: 'Arifh' },Age: 31,Address: { city: 'hyd', state: 'telangana' }}

//Object With Array

const empDetails = {
  fullName: {
    firstName:"Reethu",
    lastName:"Arifh",
  },
  skills: ["Html","CSS","Javascript","ReactJs"]
}
console.log(empDetails); //output: {fullName: { firstName: 'Reethu', lastName: 'Arifh' },skills: [ 'Html', 'CSS', 'Javascript', 'ReactJs' ]}
console.log(empDetails.skills); //output: [ 'Html', 'CSS', 'Javascript', 'ReactJs' ]

//Array of Objects

const users = [
    {
        id: 1,
        name: "Reethu",
        age: 22
    },
    {
        id: 2,
        name: "Farhana",
        age: 28
    },
    {
        id: 3,
        name: "Arifh",
        age: 30
    }
];
console.log(users); // output: [{ id: 1, name: 'Reethu', age: 22 },{ id: 2, name: 'Farhana', age: 28 },{ id: 3, name: 'Arifh', age: 30 }]
console.log(users[1]); //output: { id: 2, name: 'Farhana', age: 28 }
console.log(users[1].name); //output: Farhana

//Property Shorthand
const latitude = 17.385;
const longitude = 78.4867;

const route = {
  latitude,
  longitude,
  system:"GPS"
}
console.log(route);//output: { latitude: 17.385, longitude: 78.4867, system: 'GPS' }

//Computed Property Names. You can dynamically create a property name.
const field = "email";
const userName = "reethufarhana"
const employee = {
  userName,
  [field]: "reethuarifh@gmail.com"
}
console.log(employee);//output: { userName: 'reethufarhana', email: 'reethuarifh@gmail.com' }
console.log(employee[field]); // output: reethuarifh@gmail.com
console.log(employee.email); //output: reethuarifh@gmail.com


//Objects With Functions — Methods. An object can also contain functions.

const userName = {
  name: "Reethu",
  greet: function(){
    return `good morning ${this.name}`;
    //console.log(`hello ${this.name}`);
  }
}
console.log(userName.greet()); //output: good morning Reethu
//userName.greet(); //output: hello Reethu

//Creating Objects with a Function

function createUser(name, age) {
    return {
        name,
        age
    };
}
const user1 = createUser("Reethu", 22);
const user2 = createUser("Arifh", 28);
console.log(user1); //output: { name: 'Reethu', age: 22 }
console.log(user2); //output: { name: 'Arifh', age: 28 }



