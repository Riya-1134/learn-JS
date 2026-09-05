// Hoisting is JavaScript's behavior of allocating memory for variables and functions before the code execution phase begins.
getName(); 
console.log(getName);

// console.log(x); //  let and const throws Reference error cant access x before it is even intialized => but var x = 5 gives undefined


let x = 5; // if removed and in logging it shows x is not defined

function getName() {
    console.log("Hello World");
}


// // CASES:
// var getName = () => {
//     console.log("Hello World");
// }                            // will behave like a variable using arroow function gives error undefined 


// var getName2 = fucntion () {
// }



