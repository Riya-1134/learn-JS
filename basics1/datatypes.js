"Use strict"// treat all code as newer version

// alert(3+3) // we are using nodejs not browser 
// alert() is not available in Node.js.
// alert() is a browser function. It works when JavaScript runs inside a web browser.

console.log(3+3);  // readable always

let name = "Riya" // stringnod
let age = 22 // number
let isLoggedin = false // Bool
let state; // Undefined
let bignumber = 32520572052n // bigint
let id = Symbol('123')
let anotherid = Symbol('123')

console.log(id === anotherid);   // false






//Javascript is Dynamically types language it means we dont define the datatype of a variable
// PRIMITIVE DATATYPES: 7
// number => 2 to power 53
// bigint => very big numbers
// string => " "
// Boolean => true/false
// null => standalone value 
// undefined => value is not assigned yet
// symbol => unique (for indiviudal components)

//NON PRIMITIVE
// Object => stores data as key value pair
// Array  => store similar data
// Function  => to perform specific task 

console.log(typeof age) // gives 'number'
console.log(typeof null) // gives object
console.log(typeof undefined) // undefined

console.table([typeof age, typeof null, typeof undefined])



//Non Primitive or reference type  : array , object (object function ), function all datatypes is function only 

const heros = ["Apple", "Banana", "Strawberry"] // array


let person = {
    name: "Riya",
    age: 22,
}


const myfunct = function() {
    console.log("Hello World")

}