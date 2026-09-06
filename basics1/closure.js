function a() {
    let a = 7;
    function b() {
        console.log(a);
        
    }
    b();
}
a();

// closure is function bind together with its lexical enviroment
// in js fumction can given to a variablee,can be returned can can be paased as parameter