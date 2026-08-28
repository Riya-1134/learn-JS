// Primitive string
let name = "Riya";
let repocount = 50;
let age = 22

console.log(name + repocount);

// // old ways:
// console.log(repocount + 35 + name); //  85Riya
// console.log(name + repocount + 35 ); // Riya5035

// //Modern 
// console.log(`My name is ${name} and my age is ${age}` );


//Non primitive string
const s1 = new String("Priya");

console.log(s1.__proto__);  