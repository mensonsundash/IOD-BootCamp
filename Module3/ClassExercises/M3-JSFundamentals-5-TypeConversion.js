/**
 * Data Types
 */

/* *********************** Type Conversion Starts *********************** 
 * which Converts the type
 */

// String conversion
console.log( String(false) ) // false - string form of boolean
console.log( "1" + 2 + 3 ) // 123 - string ‘1’ is concatenated with number 2 then number 3
console.log( 1 + 2 + "3" ) // 33 - number 1 is added to number 2 then concatenated with string ‘3’

// Explicit Numeric conversion
console.log( Number(" 4 ") ) // 4 - trims spaces
console.log( Number(null) ) // 0 - intentionally empty value converts to 0
console.log( Number(undefined) ) // NaN - non-existent value is unknown
console.log( Number(false) ) // 0 - false converts to 0
console.log( Number(true) ) // 1 - true converts to 1
console.log( Number("") ) // 0 - empty string converts to 0
console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert
console.log( Number("234not a number") ) // NaN - non-empty strings beginning with chars cannot convert

// Implicit Numeric Conversion
console.log("6" / "2") // 3
console.log("6" * "2") // 12
console.log("6" - "2") // 4
console.log(+"6") // 6
console.log("2" + "6") // concatenate it's only thing need a numeric conversion

// Boolean Conversion
console.log( Boolean("") ) // false - empty string
console.log( Boolean(0) ) // false - zero value
console.log( Boolean(null) ) // false - no value
console.log( Boolean(undefined) ) // false - unknown value
console.log( Boolean(NaN) ) // false - not a number
console.log( Boolean("false") ) // true - non-empty string
console.log( Boolean(-1) ) // true - non-zero number

// Implicit boolean conversions via an if condition, conditional statement or negation are far more common:
// Boolean conversion
if ("") console.log('empty string is true') // implicit "" conversion to false - won't print msg
if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg

// Conditional statement:
console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true

// Negation:
console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
console.log( !!"" ) // false - convert value to boolean then negate/toggle twice
/* *********************** Type Conversion end ***********************/

let x = 40;
let y = 30;

let result = 
            x > y ? 
                (
                    Number(x) ? 
                        "x is a number" 
                        : 
                        "X is not number"
                ) 
                : 
                "Y is greater";

console.log(result);