//an "Array" is a special global object designed to store an ordered collection of values under a single variable name.

//Array Mutation vs. Immutability

//Mutating (Modifies the Original)These methods change the array in place, altering your original data. This can lead to bugs if multiple parts of your app share the same array reference.push(), pop(), shift(), unshift(), splice(), reverse(), sort()

//Non-Mutating / Immutable (Creates a Copy)These methods leave the original array untouched and return a brand new array in memory. This is the cornerstone of modern frameworks like React.map(), filter(), slice(), concat(), Spread Operator ([...])

const arr1 = 
