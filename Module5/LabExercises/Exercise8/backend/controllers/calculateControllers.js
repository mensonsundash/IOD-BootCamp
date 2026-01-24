const Calculate = require("../libraries/Calculate")
const calc =  new Calculate();

const getData = (req, res) => {
    res.send("Welcome to calculator")
}
const divide = (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    let result = calc.divide(num1, num2);

    res.status(200).json({data:result.result});
}

const multiply = (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    let result = calc.multiply(num1, num2);
    res.status(200).json({data:result.result});
}

const add = (req, res) => {
    const num1= parseInt(req.query.num1);
    const num2= parseInt(req.query.num2);
    
    let result = calc.add(num1, num2);
    res.status(200).json({data:result.result})
}

const substract = (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    
    let result = calc.substract(num1, num2);
    res.status(200).json({data:result.result});
}

module.exports = {getData, add, substract, multiply, divide}