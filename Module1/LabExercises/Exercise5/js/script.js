let arrayValue = ['value1','value2','value3','value4','value5'];

// // replacing value at position 1 & 4
// arrayValue[1] = 'anotherValue1';
// arrayValue[4] = 'anotherValue4';

// // adding new value at beginning
// arrayValue.unshift('beginAddNewValue')

// //removing element from the end
// arrayValue.pop();


// console.log(arrayValue);

/**
 * Functions definition returning on input values
 */

//function to change value at position
function changeValue(value1, value2, position1, position2){
    let newArrayValue = [...arrayValue]; //spread operator to make a new array value without affecting (arrayValue)
        
    newArrayValue[position1] = value1;// replacing values at selected positions
    newArrayValue[position2] = value2;

    return newArrayValue;
}

/**
 * Functions on event actions like button onclick
 */

function replaceValue(){
    let value1 = document.getElementById("inputValue1").value.trim();
    let value2 = document.getElementById("inputValue2").value.trim();

    let position1 = document.getElementById("selectPosition1").value;
    let position2 = document.getElementById("selectPosition2").value;

    let result = changeValue(value1, value2, position1, position2);

    //showing replace result value
    document.getElementById("replaceResult").innerText = result;
}

function addValue() {
    let inputValue = document.getElementById('addInputValue').value.trim();
    let newArrayValue = [...arrayValue]
    
    // adding/unshifting to add new element at the beginning of array
    newArrayValue.unshift(inputValue);
    
    document.getElementById('addResult').innerText = newArrayValue;
}

function removeValue() {
    let newArrayValue = [...arrayValue];

    //removing element from end of an array
    newArrayValue.pop();

    document.getElementById('removeResult').innerText = newArrayValue;
}

let rowValue = document.getElementById('row-value');
let rowIndex = document.getElementById('row-index');


//Showing original value
arrayValue.forEach((value, index) => {
    let createValue = document.createElement("td");
    let createIndex = document.createElement("td");

    createValue.textContent = value;
    createIndex.textContent = index;
    rowValue.appendChild(createValue);
    rowIndex.appendChild(createIndex  );
});
document.getElementById("input-value").innerText = arrayValue;
