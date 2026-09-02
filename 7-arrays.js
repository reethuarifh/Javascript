//an "Array" is a special global object designed to store an ordered collection of values under a single variable name.

//Array Mutation vs. Immutability

//Mutating (Modifies the Original)These methods change the array in place, altering your original data. This can lead to bugs if multiple parts of your app share the same array reference.push(), pop(), shift(), unshift(), splice(), reverse(), sort()

//Non-Mutating / Immutable (Creates a Copy)These methods leave the original array untouched and return a brand new array in memory. This is the cornerstone of modern frameworks like React.map(), filter(), slice(), concat(), Spread Operator ([...])

const skills = ["HTML","CSS","Javascript","Reactjs"]
console.log(skills[0], skills[1]); // output: HTML, CSS

//array of objects.
//An array of objects is a data structure that stores multiple objects inside a single list.
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

