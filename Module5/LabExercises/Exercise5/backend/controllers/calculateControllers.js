const divide = (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    let result = num1/num2;

    res.status(200).json({data:result});
}

const multiply = (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    let result = num1 * num2;
    res.status(200).json({data:result});
}

const add = (req, res) => {
    const number1= parseInt(req.query.num1);
    const number2= parseInt(req.query.num2);
    let result = number1 + number2;
    
    res.status(200).json({data:result})
}

const substract = (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    let result = number1 - number2;

    res.status(200).json({data: result});
}

module.exports = {add, substract, multiply, divide}