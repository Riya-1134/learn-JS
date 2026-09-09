// Interview question
// function statement

function a() {
    console.log("function statement");
    
}
a();
// function expression

var b = function () {
    console.log("Function expresxion");
    
}
b(); 

// difference between these is hoisting


// function delcaration aka function statement


//Anonymous function  : dont have their own identity : are used when  functions are used as values

// function () {
    
// }

// Name function expression

var c = function xyz() {
    console.log("Function expresxion");
    
}
// xyz(); // give reference error   

// Difference between parameter and argumenets; // fucntion a(param1 ,param2) there parameter // d(a,b) arguments


// first class function ability tii
// function can be passsed as arguments or value
// function inside another function
// function can also be returned form a function
// to passed as value to a variable
var c = function (param1) {
    console.log(param1);
    
}

c(function () {
    
});

// or function xyz()  {}
// c(xyz);   
// all these 

//arrow function

//will behave even even let or const
// first class citizen 