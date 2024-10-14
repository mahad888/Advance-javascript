/* Scope means part a where you can access a specific variable and function in a piece of code

Lexical environment is created when a execution environment is created..
Lexical environment = local memory + lexical environment of lexical parent


If you dont find the variable in a local memory you will search it in the lexical enviornment of parent  */


function a() {
    b();
    function b() {
        console.log(x);
        c();
        function c() {
            console.log(y)
            
        }
    }
}
let x = 10;
let y = 20;
a();

// In above see that y and x are not present in local memory of funtion ..they are also not present in the 
// lexical environment of their parent that is "a" so their value will be get from the global excecution context that is the parent of function "a"..