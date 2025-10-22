let arrayValue = ['value1','value2','value3','value4','value5'];
//variable assignment for getting DOM of table rows for Indexes and Values
let rowIndex = document.getElementById('row-index');
let rowValue = document.getElementById('row-value');


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

//function to renderArray into graphical visualization with HTML child append
function renderArray(arrVal){
    //clearing existing cells before creating new one
    while(rowValue.firstChild) { rowValue.removeChild(rowValue.firstChild); }
    while(rowIndex.firstChild) { rowIndex.removeChild(rowIndex.firstChild); }

    //iterating new event driven values with callback to create each column cells of table 
    arrVal.forEach((value, index) => {
        let createValue = document.createElement("td");
        let createIndex = document.createElement("td");

        createValue.textContent = value;
        createIndex.textContent = index;

        //appending td cells into each rows for row: index and its row: values
        rowValue.appendChild(createValue);
        rowIndex.appendChild(createIndex);
    });

}

function resetArray() {
    //calling render with input static value
    renderArray(arrayValue);

    document.getElementById("inputValue1").value = "";
    document.getElementById("inputValue2").value = "";
    document.getElementById("addInputValue").value = "";
    document.getElementById("selectPosition1").value = 1;
    document.getElementById("selectPosition2").value = 4;
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
    renderArray(result);
}

function addValue() {
    let inputValue = document.getElementById('addInputValue').value.trim();
    let newArrayValue = [...arrayValue]
    
    // adding/unshifting to add new element at the beginning of array
    newArrayValue.unshift(inputValue);
    renderArray(newArrayValue);
}

function removeValue() {
    let newArrayValue = [...arrayValue];

    //removing element from end of an array
    newArrayValue.pop();

    renderArray(newArrayValue);
}

renderArray(arrayValue);
document.getElementById("input-value").innerText = arrayValue;
