two/**
 * Data Types
 */

/* *********************** Objects Data Types Starts *********************** 
 * which stores collections of data, key-value pairs
 */

// Objects
const tv = { // object starts here
    brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
    size: "55-inch", // values can be any data type
    model: 2023, // multiple key-value pairs are separated by commas
    resolution: "4K" // the comma on the last key-value pair can be omitted
} // object ends here. All data is stored in tv variable.
console.log(tv.brand);
console.log(tv['model']);
delete tv.model;
tv.serial = "IIhj45";
console.log(tv);

// typeof()
console.log("undefined: ", typeof undefined); // undefined
console.log("number: ", typeof  0); // number
console.log("bigint: ", typeof  10n); // bigint
console.log("boolean: ", typeof  true); // boolean
console.log("string: ", typeof  'text'); // string
console.log("symbol: ", typeof  Symbol('id')) // symbol
console.log("object: ", typeof  Math); // object
console.log("object: ", typeof  null); // object
console.log("function: ", typeof  console.log); // function

// Type conversion



/* *********************** Objects Data Types end ***********************/