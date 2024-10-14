
console.log(a);
console.log(b);
console.log(c);

/* here a and b will give reference error because let and const have seprate memory spaces they are not global like  var */

let a = 100;
const b = 300;
var c = 200;


b = 2000; //will give type error because const value cannot be changed..
