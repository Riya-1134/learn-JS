// block {} is also known as compound statement
// block is group of statement enclose inside curly braces  or wrapping or group statement together 

// for if expects sinlge statement after (syntax) but what if we need to use multiple statements that's where block comes in 
//Block scope all the car and functions that can be accessed inside the block

var a=10;
let b = 45

{
    var a= 100;
    let b=99;
    // var b=67 // illigal shawdowing let can do let const can do const ; no var can do both ..if not in function 
    console.log(a); // 100 shadows var a=10
    console.log(b); // 99 here it shadows b=45
}
console.log(b); // 45


