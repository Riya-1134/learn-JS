
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

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 5000);

// console.log("C");

// So asynchronous programming allows JavaScript 
// to start a time-consuming operation and continue executing other code instead of blocking everything.

function attacheventlistner(){
        let count = 0;
document.getElementById("clickme").addEventListener("click",function xyz(){
  console.log("Button clicked", ++count);

});

}
attacheventlistner()

//Event listener are heavy required memory as even if the call stack is empty if wont free up the space of variable memory
// system will scope 
// garabage collection and removeeventlistener is must 