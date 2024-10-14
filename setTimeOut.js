
function x() {
    setTimeout(function () {
        z();
        console.log("Bye mahad")
    }, 5500);
    console.log("Hello mahad");

}

x();


function y() {
    for (let i = 1; i <= 5; i++){
        setTimeout(function () {
            console.log(i)
        },i * 1000);
    }
}
y();


var z = () =>  console.log(" ");

z();
