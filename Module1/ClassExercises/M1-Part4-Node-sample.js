// function definition
function PrintLinesToConsole() {
    console.log("Hello world");
    console.log("This is JavaScript");
}
function Sum(a, b){// a & b are prameters
    let sum = a + b;
    return sum;
}
function Multiply(a, b){
    return a * b;
}
function Substract(a, b) {
    return a - b;
}

function Divide(a, b) {
    return a / b;
}
// function call
PrintLinesToConsole();
Sum(2,45); //2 and 45 are arguments
Sum(11,4);

console.log(Multiply(Sum(4,7), Sum(5,8)));