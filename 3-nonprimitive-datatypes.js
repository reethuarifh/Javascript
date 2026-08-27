//Different types of datatypes

//2) Non-Primitive datatype

//1-->" Objects ({ })" A collection of key-value pairs used to represent data structures or real-world concepts.

const productDetails = {
  name: "iphone",
  price: 78000,
  inStock: true
};
console.log(`Name of the mobile is: ${productDetails.name}, Price is: ${productDetails.price}, In stock: ${productDetails.inStock}`); // Name of the mobile is: iphone, Price is: 78000, In stock: true

//2--> "Arrays ([ ])" which stores multiple values in an ordered collection. An array is used to store multiple values in a single variable.A specialized type of object used to store ordered, numbered lists of data.

const skills = ["HTML","CSS","Javascript","Reactjs"]
console.log(skills[0], skills[1]); // output: HTML, CSS

const products = [
    {
        name: "iPhone",
        price: 79999
    },
    {
        name: "Samsung",
        price: 59999
    },
    {
        name: "OnePlus",
        price: 39999
    }
];
console.log(products[1]); // output: {name: "Samsung", price: 59999}
console.log(products[0].name); // output: iphone

//3--> Functions (function() {})A specialized type of object containing a block of executable code. Because they are objects, you can pass them into variables, arrays, or other functions (callbacks).

const sayHello = function() {
    return "Hi!";
};
console.log(sayHello()); //output: Hi!
