let arrayValue = ['value1','value2','value3','value4','value5'];

// replacing value at position 1 & 4
arrayValue[1] = 'anotherValue1';
arrayValue[4] = 'anotherValue4';

// adding new value at beginning
arrayValue.unshift('beginAddNewValue')

//removing element from the end
arrayValue.pop();


console.log(arrayValue);
