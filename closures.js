/* function along with its lexical scope forms a closure
Closure is a function bundled together with its lexical environment..*/

let a = 500;

function x() {
    let a = 550;
    function y() {

        let b = 500 + a;
        console.log(b);
        

    }
    //y();
    //console.log(y);
    return y;
     
}

let z = x();  /// here z contains the function y because function x is returning y
console.log(z);

//............. i
// if we call function z after hunderd or thousand lines
z();  // gives 1050 because it stores the lexical scope of y .. y remembers its lexial scope

