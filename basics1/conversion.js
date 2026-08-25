let score = "33";
console.log(typeof(score));  //string



let valueinNumber = Number(score);
console.log(valueinNumber);   //33 
console.log(typeof(valueinNumber)); //number


score = "33abc";
valueinNumber = Number(score);
console.log(valueinNumber);   // Nan  whose type is number
console.log(typeof(valueinNumber));  //number

score = null;
valueinNumber = Number(score);
console.log(valueinNumber);   //  0
console.log(typeof(valueinNumber)); //number

score = undefined;
valueinNumber = Number(score);
console.log(valueinNumber);   //  Nan whose type is number
console.log(typeof(valueinNumber)); //number  

score =  true;  // 0 for false
valueinNumber = Number(score);
console.log(valueinNumber);   //  Nan
console.log(typeof(valueinNumber)); //number 


// summary
// string "33" => 33
// if "53ajnfkfn" => nan (number is datatype)
// null => 0 
// true or false will give 1 0r 0