

// Everything inside javacript happens in Execution Context
// it has 2 components
// Memory components (Variable Enviroments): Everything is stored in Key Value Pair
// Code components (Thread of Execution) : contains all code







//Javascript is synchrnonous single threaded language : it means execute one command at a time in a specific order
// it goes to other line after the current line finish executing



// what happens when a js program is created
// An Execution Context is created has two phases => Memory Creation phase => Code Execution Phase
// 1st Phase : allocation memory to variables (stores a undefined)and function  (whole block of code)

// 2nd Phase : in phase two it places the actual value of identifier or placeholder 
// when a function is invoked a brand new execution context is created 
// after completion of function it return and whole instance of fucntion is deleted (whole new execution contecxt is deleted )
 

// Call Stack : Manages Execution context : there is : Global execution context 
// whenever an exection context is created it is pushed into the stack
// when it is deleted it is popped from the stack