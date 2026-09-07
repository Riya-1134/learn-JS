// function a() {
//     let x = 7;
//     function b() {
//         console.log(x);
        
//     }
//     return b;
// }
// var c = a(); // the is refer to the inner function b 
// c();

// So even after function a has finished ..the b function still remember the x variable





// closure is when function bind together with its lexical enviroment + variable
// In JavaScript, a closure happens when a function remembers and can access variables from the scope where it was created, even after that outer function has finished executing.

// in js fumction can given to a variablee,can be returned can can be paased as parameter

//uses: module desgin pattern , currying , funnction like once ,  memoize , maintaining state in async  world , serTimeouts , iterators

// set time out 

function x() {
       for(let i=0;i<=5;i++){
        setTimeout(() => {
            console.log(i);
            
        }, i*1000);
       }


}
x();


// the loop run so fast at it finishes first till the the  value of i is already became 6 
// var is function-scoped: All callbacks share the same i. When the loop ends, i = 6, so all print 6


//let is block-scoped: In a for loop, each iteration gets a new i, so callbacks print 0, 1, 2, 3, 4, 5.

//Closure lets each callback remember its outer variable. var makes them remember the same variable; let gives each iteration a separate one.








// using var

// function x() {
//        for(var i=0;i<=5;i++){
//     function close(i) {
//         setTimeout(() => {
//             console.log(i);
            
//         }, i*1000);
//        }
        
//     close(i);


// }
// }
// x();

// Because close(i) creates a new local variable (parameter) every time the function is called.