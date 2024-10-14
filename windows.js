/* Windows keyword refers to the global space */

var x = 10;


function add(value) {
    sum = 0;
    var sum = sum + value;
    return sum;
}

console.log(this.x);
console.log(x);
console.log(add(100));
