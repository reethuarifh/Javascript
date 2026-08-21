/**Variables and how it is declared**/

//var, let, const are "keywords", after keyword whatever written is known as variables technically variable is known as "identifier" , = is known as "assignment operator", whatever is assigned known as "value".

/**Decalarations and Initialization**/
var myName; // this is known as declaration
myName = 'farhana'; // this is known as Initialization

var name = 'reethu'; //it can be redeclared //
name = 'farhana';
console.log(name); //output: farhana, here the value was redeclared

let city = 'hyderabad'; //it cannot be redeclared , here the value can be re-assigned//
//let city = 'gdk'; // here identifier with name city was already declared so again we cannot redeclared the identifier with same name 'city' 
//it shows error as SyntaxError: Identifier 'city' has already been declared
city = 'gdk';
console.log(city);

// Template literals
let fname = 'Reethu';
console.log("Hello" + )

const country = 'india'; //it cannot be redeclared and cannot be re-assigned//
const country = 'usa'; // it cannot be redeclared
country = 'saudi'; // it cannot be re-assigned
console.log(country);
