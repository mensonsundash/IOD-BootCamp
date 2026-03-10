const calculator = require("../models/calculatorModel");

// CONTROLLER LAYER //handling business logic linking Model and View.
// it handles the request from the client,
// gets data from req.query, sends it to the model,
// and returns the final response back to the client. 

/**
 * Handles additional request
 *  /api/controller/add?num1=10&num2=5
 */
const addNumbers = (req, res) => {
    // destructuring num1 & num2 from query string
    const {num1,num2} = req.query;

    //converting string to number then pass them to the model add
    const result = calculator.add(Number(num1),Number(num2));
    
    //send result back as JSON response
    res.json({ data: result });
}

/**
 * Handles substraction request
 *  /api/controller/substract?num1=10&num2=5
 */
const substractNumbers = (req, res) => {
    //reading value from query parameter
    const {num1,num2} = req.query;
    const result = calculator.substract(Number(num1), Number(num2));
    res.json({ data: result });
}

/**
 * Handles multiplication request
 *  /api/controller/multiply?num1=10&num2=5
 */
const multiplyNumbers = (req, res) => {
    const {num1, num2} = req.query;
    const result = calculator.multiply(Number(num1), Number(num2));
    res.json({ data: result });
}

/**
 * Handles division request
 *  /api/controller/divide?num1=10&num2=5
 */
const divideNumbers = (req, res) => {
    const {num1,num2} = req.query;
    //using try catch to get error response 
    try{
        const result = calculator.divide(Number(num1), Number(num2));
        //sending successful response
        res.json({ data: result });
    } catch(error) {
        //If model throws an error send a 400 Bad Request response with error message
        res.status(400).json({error: error.message})
    }
    
}


// Export all controller functions so they can be used by routes
module.exports= {
    addNumbers,
    substractNumbers,
    multiplyNumbers,
    divideNumbers,
}