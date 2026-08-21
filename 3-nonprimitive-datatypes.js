//Different types of datatypes

//2) Non-Primitive datatype

//"Object" which stores data in key-value pairs
const productDetails = {
  name: "iphone",
  price: 78000,
  inStock: true
};
console.log(`Name of the mobile is: ${productDetails.name}, Price is: ${productDetails.price}, In stock: ${productDetails.inStock}`);

//"Array" which stores multiple values in an ordered collection. An array is used to store multiple values in a single variable.
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
console.log(products[0].name, products[1].price); // output: iphone, 59999
