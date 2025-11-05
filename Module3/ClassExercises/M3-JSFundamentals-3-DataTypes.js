/**
 * Data Types
 */

/* *********************** Primitive Data Types Starts *********************** 
 * which stores single values
 */

//Numbers
console.log(1/0); //Infinity
console.log(-1/0); //-Infinity
console.log("NUmber"/10);//NaN
console.log(10*"Numbers");//NaN

// Mathematics with numbers
let one = 1;
let two = 2;
let three = 3;
console.log(one + (two - three) * (two / one));

//Increment or decrement operators
// three = three + 1;
// three += 1;
three++;
console.log(three);
// two = two - 1;
// two -= 1;
two--;
console.log(two);

//BigInt
const bigint_valid = 1234567890123456789012345n;
const bigint_invalid = 1234567890123456789012345; // too large for standard integers
console.log(bigint_valid);
console.log(bigint_invalid)
if(bigint_valid == bigint_invalid){
    console.log("Both are equal");
}else{
    console.log("Not equal");
}

//Strings
const doubleQuotes = "String that can include 'single quotes'";
const singleQuotes = 'String that can include "double quotes"';
const backTicks = `String that 
can include 
variables - ${singleQuotes}
second - ${ doubleQuotes}
`;
console.log(doubleQuotes);
console.log(singleQuotes);
console.log(backTicks);

// Boolean
let isChecked = false;
let isToggleOn = true;
console.log("isChecked: ", isChecked);
console.log("isToggleOn: ", isToggleOn);
isChecked = !isChecked;
isToggleOn = !isToggleOn
console.log("After isChecked Changed: ", isChecked);
console.log("After isToggleOn Changed: ", isToggleOn);

// Null
let age = null;
console.log("age ->null:", age)
// Undefined
let location;
console.log("location ->Undefined:", location)


if(age == location){
 console.log("age and location are same values");
}

if(age === location){
    console.log("age and location are of same type");
} else{
    console.log("age and location are not of same type");
}

/* *********************** Primitive Data Types End ************************/