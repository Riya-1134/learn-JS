// console.log(x); // not defined

// let y; //undefined 

// if(y === undefined){
//     console.log("is undefined");
    
// }
// else {
//     console.log("not undefined");
    
// }

// javascript is loosely tight language and dynamic typed too 


//let and const 
// console.log(x); // gives error as it is not even decalred not defined

console.log(a); // throw error refernce error : not initialized it yet

let a = 6; 

console.log(b); // givess 5

var b = 5;
// both are hoisted : both  are allocated but let is different memory space and var is in different memory space (attachetd to global object)
// in case of var  it does not give error 
// in case of let it gives refernce error because as it can not be asccessed before it is intialized and it is in differnet memory space 
// the phase between hoisting (memory created) till its intialiation (assigning value) is called as temporal dead zone
// and let in this temporal dead zone that's why it cant access it
// it cant be acceses using window or this  this.a window.b 


// let is resrtict with redclaration too
// let c = 45;
// let c = 56 // gives syntax error wont reach a single line of code

//let d =45;
//var d =23     //still gives syntax error atleast not in same scope

// but var is not strict that much can redeclare has function scope 
// let can intialized be later and can be assigned differnet value to it and has blocked scope but cant redelcare gives syntax error
// const meants to be initialized  at the time of declaration otherwise throws SyntaxError
// if const is reinitalized gives typeError as const is a type  which is meant to be delcare and initalized at the same time

// in short let and const both are hoisted 