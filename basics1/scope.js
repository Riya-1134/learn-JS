// let name = "Riya";
// function a(){
//     console.log(name); // accesible
    
// }



// function b(){

//     let name1 = "piya";
// } 

// console.log(name1); // not accesible

// scope depends on lexical enviroment
// whenever an execution contxext is create a lexical enviroment is also created
// lexical enviroment is the local memory along with refernce of local enviroment of its parent
// lexical means in c oorder or in sequence or in heirarchy ...in terms of code ..where

// whole chain of lexical enviroment along with the wref to parents is called as scope chain
//scope means the area of your code where a variable can be accessed or used.


function a()
{
    let b = 10;
    c();
    function c(){
        console.log(b);
        
    }
}

a();

// global a c