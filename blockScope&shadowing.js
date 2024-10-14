var a = 100;
let b = 200;
const c = 300;


// {
//     var a = 500;
//     let b = 600;
//     const c = 700;

//     console.log("\t\tPrint values in the block");
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// // var lies in global execution but let and const lies in block so here there values will not be updated..
// console.log("\t\tPrint values outside the block \n");
// console.log(a);  
// console.log(b);
// console.log(c);


console.log("\n\t\t\t Block and lexical scope in Funtion")

function fun(){
    var x = 50;
    let y = 60;
    const z = 70;
    
    fun2();
    function fun2() {
        var x = 5000;
        let y = 6000;
        const z = 7000;
    
        {
           var x = 45;
            let y = 46;
            const z = 47;
            console.log("\t\tPrint values in the block");
            console.log(x);
            console.log(y);
            console.log(z);
        }
    console.log("\t\tPrint values outside the block \n");
    console.log(x);
    console.log(y);
    console.log(z);
    }

    ("\t\tPrint values outside the fun2 \n")
    console.log("\t\tPrint values outside the block \n");
    console.log(x);
    console.log(y);
    console.log(z);

}
fun();




