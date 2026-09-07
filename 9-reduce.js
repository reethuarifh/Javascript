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
