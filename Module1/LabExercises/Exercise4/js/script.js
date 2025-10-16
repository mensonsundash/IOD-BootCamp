// operative functions
function Add(a, b){
    let result = a + b;
    return result;
}

function Substract(a, b){
    let x,y;
    if(a < b){ //interchanging if b to a and a to b to avoid negative value
        x = b;
        y = a;
    }else if(a > b){//otherwise normal value
        x = a;
        y = b;
    }   
    let result = x - y;
    return result;
}

function Multiply(a, b) {
    let result = a * b;
    return result;
}

function Divide(a, b) {
    let x,y;
    if(b === 0){//making result of infinite also 0
        x = 0;
        y = 1;
    }else { //otherwise it is normal value
        x = a;
        y = b;
    }   
    let result = x / y;
    return result;
}

function concatinate(name) {
    return `Hello ${name}`;//concatination 'Hello' + namevalue
}

//reset all value in calculator
function reset() {
    document.getElementById('numA').value = 0;
    document.getElementById('numB').value = 0;
    document.getElementById('op').value = "add";
    document.getElementById('calc-result').innerText = 0;

}


// resulting functions
function calculate(){
    let result = 0;
    let numberA = parseFloat(document.getElementById('numA').value.trim());
    let numberB = parseFloat(document.getElementById('numB').value.trim());
    let operation = document.getElementById('op').value;
    

    if(operation === 'add'){
        result = Add(numberA, numberB);
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

function greeting() {
    let name = document.getElementById("name").value.trim();
    document.getElementById('greet-result').innerText = concatinate(name);
}

