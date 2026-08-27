// console.log(2>3);
// console.log(2>=3);
// console.log(2<3);
// console.log(2<=3);
// console.log(2==3);


//  // for comparison operator <,>,=<,=>  null beomes 0 
// console.log(null > 0);  // 0>0 false
// console.log(null >= 0);  // 0>=0  true
// console.log(null == 0);  // false



// console.log(null == undefined );  // true 

// console.log(null == 0 );       // f
// console.log(null == false);   // f
// console.log(null == " ");       //f

// console.log(null); 



// console.log(undefined >= 0 );   //f
// console.log(undefined <= 0 );   //f
// console.log(undefined == 0 );       // f
// console.log(undefined == false);   // f
// console.log(undefined == " ");       //f



//to remember null == undefined
//also [comparison operator treat null as 0]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) and heap (Referenece)

let name = "Riya";

let anothername = name;
anothername = "Piya";

console.log(anothername);

let user1 = {
    name: "Joy",
    age: 23

}

let user2 = user1;

user2.age=34;

console.log(user1.age);
console.log(user2.age);

//stack all primitive datatypes goes in stack and give the copy only of values (does not change original values)
// Heap all non primitve  goes here and refer to same values changes affect original values stored in heap