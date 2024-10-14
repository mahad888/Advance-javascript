/*Hoisting in JavaScript:
In javaScript before execution memory is allocated.
*/

// here we get undefined because a has not given value;
console.log(a);


console.log(getname); // it will return the whole method

/*here we get undefined because in memory getcity method is undefind.(for arrow methods )
In this case it behaves like a variable*/

console.log(getcity);


var a = 10;
console.log(a);

function getname() {
    console.log("mahad");
}

var getcity = () => {
    console.log("Faisalabad");
}
console.log(getname);
console.log(getcity);

console.log(abc)
let abc= 10

