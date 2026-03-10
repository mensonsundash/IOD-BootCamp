// Business logics
//Calculator model contains core calculation functions with mathematical operations
// and returns the result to the controller.

/**
 * Add two numbers  
 * returns sum of a & b
 */
const add = (a, b) =>  a + b


/**
 * Substract two numbers  
 * returns Substraction of a & b
 */
const substract = (a, b) => a-b;


/**
 * Multiply two numbers  
 * returns Multiplication of a & b
 */
const multiply = (a,b) => a*b;


/**
 * Divide two numbers  
 * returns Division of a & b
 * throws error when second number is 0 (Division by zero is not allowed)
 */
const divide = (a,b) => {
    // prevent division by zero
    if(b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a/b;
}


/**
 * Export all calculator functions
 * used by controllers
 */
module.exports = {
    add,
    substract,
    multiply,
    divide
}