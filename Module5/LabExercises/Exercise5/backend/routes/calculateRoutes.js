// ################## CREATE APP: REQUIRE EXPRESS PACKAGE
const express = require('express');
const router = express.Router(); //getting router module

const controller = require('../controllers/calculateControllers');

router.get('/', (req, res) => {
    res.send('Welcome to Calculation');
});


// functional divide router performing division on req parameters
router.get('/divide', (req, res) => {
    controller.divide(req, res);
});

// functional multiply router performing multiplication on req parameters
router.get('/multiply', (req,res) => {
    controller.multiply(req, res);
});

// functional add router performing addition on req parameters
router.get('/add', (req, res) => {
    controller.add(req, res);
});

// functional substract router performing substraction on req parameters
router.get('/substract', (req,res) => {
    controller.substract(req, res)    
});


module.exports = router;