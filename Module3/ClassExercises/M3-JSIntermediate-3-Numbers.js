const billion1 = 1000000000 // 9 zeros - hard to read
const billion2 = 1_000_000_000 // easier to read, underscores ignored
const billion3 = 1e9 // exponential format

console.log(billion1 === billion2) // true
console.log(billion2 === billion3) // true


const microSecs1 = 0.000001 // 6 decimal places - hard to read
const microSecs2 = 0.000_001 // easier to read, underscores ignored
const microSecs3 = 1.e-6 // exponential format

console.log(microSecs1 === microSecs2) // true
console.log(microSecs2 === microSecs3) // true


/*Hexadecimal Numbers*/
// Uses base 16 (0-9 and A-F) instead of base 10 (0-9)
const r = 0xff;
const g = 0xff;
const b = 0xff;

const white = `rgb(${r}, ${g}, ${b})`
console.log(white) // rgb(255, 255, 255)

/* Binary and Octal Numbers*/
// Uses Binary base 2(0-1) and octal base 8 (0-7) 

// const mobile = 041234567; // convert it to string
// console.log(mobile) // 8730999 - decimal equivalent

const binary = 0b11111111 // binary form of 255
const octal = 0o377 // octal form of 255

console.log(binary) // 255
console.log(binary === octal) // true

/* Base conversion*/
const ff = 255
const ee = 238
const dd = 221
console.log(ff.toString(16)); // ff : Conversiont to hexadecimal base 16
console.log(ff.toString(8)); // 377 : conversion to octal base 8
//convert from rgb colour code to hexadecimal
console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`) // #ffeedd


/** Imprecise calculations */
const toobig = 1e350 // 1 * 10350 - overflows storage
if(toobig < Number.MAX_VALUE){
    console.log("Number within range");
}else{
    console.log("Number Not in range");
}
console.log(toobig) // Infinity
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

//tofixed
const point1 = 0.1; const point2 = 0.2;
console.log(`${point1} + ${point2} = ${point1 + point2}`) // 0.1 + 0.2 = 0.30000000000000004

//max safe integers
// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
console.log(9_999_999_999_999_999) // 16 digits, prints as 10000000000000000
console.log(Number.MAX_SAFE_INTEGER) // 9_007_199_254_740_991

/** isNan isFinite*/
let number1 = "123";

if(isNaN(number1)) console.log("Number is not a number");

if(isFinite(number1)) console.log("It's a Finite number");
console.log(isNaN(NaN)) // true
console.log(NaN == NaN) // false

// parseInt parseFloat
console.log( parseInt("150px200") ) // 150 - stops at 'px'
console.log( parseFloat("2.5em") ) // 2.5 - stops at 'em'
console.log( parseFloat("12.34.56") ) // 12.34 - stops at second invalid decimal
console.log( parseInt("a123") ) // NaN - can't parse the 'a' so stops



