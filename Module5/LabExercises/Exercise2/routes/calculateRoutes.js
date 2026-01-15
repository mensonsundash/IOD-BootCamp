const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Calculation');
});


// functional add router performing addition on req parameters
router.get('/add', (req, res) => {
    
    const number1= parseInt(req.query.num1);
    const number2= parseInt(req.query.num2);
    let result = number1 + number2;
    
    res.status(200).json({data:result})

});

// functional substract router performing substraction on req parameters
router.get('/substract', (req,res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    let result = number1 - number2;

    res.status(200).json({data: result});
});

// functional divide router performing division on req parameters
router.get('/divide', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    let result = num1/num2;

    res.status(200).json({data:result});
});

// functional multiply router performing multiplication on req parameters
router.get('/multiply', (req,res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    let result = num1 * num2;
    res.status(200).json({data:result});
});

module.exports = router;