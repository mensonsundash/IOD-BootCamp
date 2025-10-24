/** --------------------------
 * Creating Specification functions 
 * to define functions without body
 *  --------------------------
 */
// Specification for Sum a and b
function Sum(a, b) {}
// Specification for Substract a and b
function Substract(a, b) {}
// Specification for Multiply a and b
function Multiply(a, b) {}
// Specification for Divide a and b
function Divide(a, b) {}

/** --------------------------
 * Creating Testing functions Suite
 * with test cases for each Main functions
 *  --------------------------
 */
function runTests() {
    // -- SUM 3 test cases --
    if(Sum(2,6) !== 8){
        throw new Error('Sum Test Failed: positive integers');
    } 
    if(Sum(-12,-7) !== -19){
        throw new Error('Sum Test Failed: negative integers');
    }
    if(Sum(2.5,0.5) !== 3) {
        throw new Error('Sum Test Failed: decimals');
    }

    // --Substract 3 test cases --
    if(Substract(10,4) !== 6){
        throw new Error('Substract Test Failed: positive integers');
    }
    if(Substract(4,10) !== 6){ /*if b is greater then swapping a & b making a always greater and positive*/
        throw new Error('Substract Test Failed: negative to positive converstion failed');
    }
    if(Substract(10.5,4.5) !== 6){
        throw new Error('Substract Test Failed: decimals');
    }

    // -- Multiply 3 test cases --
    if(Multiply(3,7) !== 21){
        throw new Error('Multiply Test Failed: positive integers');
    }
    if(Multiply(3,-7) !== -21){
        throw new Error('Multiply Test Failed: negative integers');
    }
    if(Multiply(2.5,2) !== 5){
        throw new Error('Multiply Test Failed: decimals');
    }

    // -- Divide 4 test cases --
    if(Divide(8,2) !== 4){
        throw new Error('Divide Test Failed: positive integers')
    }
    if(Divide(8,-2) !== -4){
        throw new Error('Divide Test Failed: negative integers')
    }
    if(Divide(5,2) !== 2.5){
        throw new Error('Divide Test Failed: positive integers')
    }
    if(Divide(8,0) !== 0){
        throw new Error('Divide Test Failed: divide by 0 should return 0')
    }

    console.log("All test cases passed!")
}
 
/** --------------------------
 *  Main Functions
 *  Write the Code (Actual Implementation)
 *  --------------------------
 */
//Sum of two numbers a & b
function Sum(a, b){
    let result = a + b;
    return result;
}

//Difference of a and b where a and b will be checked
function Substract(a, b){
    let x,y;
    if(a < b){ //if b is greater, swap greater value to a making always positive
        x = b;
        y = a;
    }else if(a > b){//otherwise normal value
        x = a;
        y = b;
    }   
    let result = x - y;
    return result;
}

//Multiplies a and b
function Multiply(a, b) {
    let result = a * b;
    return result;
}

// Divides a by b (if it makes infinite then result 0)
function Divide(a, b) {
    let x,y;
    if(b === 0){//if b=0 making result of infinite  = 0
        x = 0;
        y = 1;
    }else { //otherwise it is normal value
        x = a;
        y = b;
    }   
    let result = x / y;
    return result;
}


/** --------------------------
 * Executing Test suite
 *  --------------------------
 */
try{
    runTests();//calling test suite
}catch(err){
    console.error("Test case failed", err.message);
}


/* --------------------------
 * Resulting functions on event 
 * --------------------------
 */
// calculate the two numbers according to operation selected
function calculate(){
    let result = 0;
    let numberA = parseFloat(document.getElementById('numA').value.trim());
    let numberB = parseFloat(document.getElementById('numB').value.trim());
    let operation = document.getElementById('op').value;
    

    if(operation === 'add'){
        result = Sum(numberA, numberB);
    }
    if(operation === 'sub'){
        result = Substract(numberA, numberB);
    }
    if(operation === 'mul'){
        result = Multiply(numberA, numberB);
    }
    if(operation === 'div'){
        result = Divide(numberA, numberB);
    }

    document.getElementById('calc-result').innerText = result;
}

// takes input name to give greeting result
function greeting() {
    let name = document.getElementById("name").value.trim();
    document.getElementById('greet-result').innerText = concatinate(name);
}

//concatinate hello string wth input value
function concatinate(name) {
    return `Hello ${name}`;//concatination 'Hello' + namevalue
}

//reset all values of calculator
function reset() {
    document.getElementById('numA').value = 0;
    document.getElementById('numB').value = 0;
    document.getElementById('op').value = "add";
    document.getElementById('calc-result').innerText = 0;

}