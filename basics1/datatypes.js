"Use strict"// treat all code as newer version

// alert(3+3) // we are using nodejs not browser 
// alert() is not available in Node.js.
// alert() is a browser function. It works when JavaScript runs inside a web browser.

console.log(3+3);  // readable always

let name = "Riya" // stringnod
let age = 22 // number
let isLoggedin = false // Bool
let state; // Undefined

// PRIMITIVE DATATYPES:
// number => 2 to power 53
// bigint => very big numbers
// string => " "
// Boolean => true/false
// null => standalone value 
// undefined => value is not assigned yet
// symbol => unique (for indiviudal components)


// OBJECT:

console.log(typeof age) // gives 'number'
console.log(typeof null) // gives object
console.log(typeof undefined) // undefined

console.table([typeof age, typeof null, typeof undefined])