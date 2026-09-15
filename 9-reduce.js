//Understand the syntax
array.reduce((accumulator, currentValue) => {
    // logic
}, initialValue);

const numbers = [10,20,30,40,50];
const reduceNum = numbers.reduce((sum, result)=>{
    return sum+result
},0);
console.log(reduceNum)//output:150

//sum      → accumulator
//result   → current value
//0        → initial value

//Example 1: Calculate total:
const cart = [
    { name: "Laptop", price: 70000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

// const totalPrice = cart.reduce((sum,total)=>{
//     return sum+(total.price * total.quantity);
// },0);

//console.log(totalPrice)// output:74000
//or
console.log(cart.reduce((sum,total)=>sum+total.price * total.quantity, 0)) // output:74000

//Example 2: Find Maximum 

const salaries = [30000, 50000, 45000, 80000];
const highsal = salaries.reduce((max, salary)=> {
    return salary > max ? salary:max
}, 0);
console.log(highsal); //output: 80000

//Example 3: Find Maximum 

const products = [
    { name: "Laptop", price: 70000 },
    { name: "Phone", price: 30000 },
    { name: "Mouse", price: 1000 }
];

const highPrice = products.reduce((max, product)=>{
    return product.price > max.price ? product: max
  
  // Because numbers do not have a property named .price, (0).price turns into undefined. Comparing 70000 > undefined evaluates to false, so the ternary operator falls back and returns max (which is 0).
}) 
console.log(highPrice) // output: { name: 'Laptop', price: 70000 }

//Example 4: to Count Items

const fruits = [
    "Apple",
    "Banana",
    "Apple",
    "Orange",
    "Banana",
    "Apple"
];

const count = fruits.reduce((sum, total)=>{
    sum[total] = (sum[total] ?? 0) + 1;
    return sum;
},{});
console.log(count); //output: { Apple: 3, Banana: 2, Orange: 1 }

//Example 5: reduce() to Group Data
const employees = [
    { name: "Rahul", department: "UI" },
    { name: "Reethu", department: "React" },
    { name: "John", department: "UI" },
    { name: "Sam", department: "Testing" }
];

const list = employees.reduce((result, employee)=>{
    const department = employee.department;

    if(!result[department]) {
        result[department] = [];
    }

    result[department].push(employee.name);

    return result; 
},{});

console.log(list) // output: { UI: [ 'Rahul', 'John' ], React: [ 'Reethu' ], Testing: [ 'Sam' ] }

//Example 6: reduce() to Create an Object From an Array
const users = [
    { id: 101, name: "Rahul" },
    { id: 102, name: "Reethu" },
    { id: 103, name: "John" }
];

const result = users.reduce((result, user)=>{
    result[user.id] = user.name;
    return result;
},{})
console.log(result) //output: { '101': 'Rahul', '102': 'Reethu', '103': 'John' }

//Example 7: reduce() to Calculate Average

const marks = [8, 9, 7, 6];
const total = marks.reduce((sum,num)=>sum+num, 0);
const Average = total/marks.length;
console.log(Average); //output: 7.5

//Example 8: Real-Time Cart With Discount 

const cart = [
    { name: "Laptop", price: 70000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];
const subTotal = cart.reduce((sum, item)=> sum + item.price * item.quantity,0);
console.log(`MRP : ${subTotal}`);
const Discount = subTotal * 20/100;
console.log(`Discount: ${Discount}`);
const totalAmount = subTotal-Discount;
console.log(`Total: ${totalAmount}`); // output: MRP : 74000 Discount: 14800 Total: 59200

//Example 9: Calculate the total price of all in-stock products.
const products = [
    { name: "Laptop", price: 70000, inStock: true },
    { name: "Phone", price: 30000, inStock: false },
    { name: "Mouse", price: 1000, inStock: true },
    { name: "Keyboard", price: 2000, inStock: true }
];

const totalPrice = products.filter(product=> product.inStock).reduce((sum,product)=>sum+product.price,0);
console.log(totalPrice); //output: 73000

//Example 10: Another Real-Time Dashboard Example. Suppose an API returns orders:
const orders = [
    { id: 1, status: "Completed", amount: 5021 },
    { id: 2, status: "Pending", amount: 2000 },
    { id: 3, status: "Completed", amount: 3040 },
    { id: 4, status: "Cancelled", amount: 1000 }
];
const completedOrders = orders.filter(order => order.status === "Completed")
.reduce((total, order)=>total+order.amount,0);
console.log(completedOrders);//output: 8061








