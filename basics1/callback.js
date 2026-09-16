
// setTimeout(() => {
//     console.log("timer");
    
// }, 5000);





// function x(y) {
//     console.log("function x");
//     y();
// }

// x(function y() {
//     console.log("function y");
    
    
// }


// )


// javascript just have 1 call stack and you can call it a main thread. everythingg that is executing in the web is through call  stack only
// instead of blocking main thread (call stack) we use async operation

console.log("A");

setTimeout(() => {
    console.log("B");
}, 5000);

console.log("C");

// So asynchronous programming allows JavaScript 
// to start a time-consuming operation and continue executing other code instead of blocking everything.