getName(); 
console.log(getName);

// console.log(x); // cant access x before it is even intialized => error x is undefined 




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