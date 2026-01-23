// ################## CREATE APP: REQUIRE EXPRESS PACKAGE
const express = require('express');
const router = express.Router(); //getting router module

const { getData , divide, multiply, add, substract } = require("../controllers//calculateControllers")

// routing 
router.get('/', getData); //getData automaticall receives the req, res caling getData controller funcntion
router.get('/divide', divide);
router.get('/multiply', multiply);
router.get('/add', add);
router.get('/substract', substract);


// ################################################################################################
// ############## keeping comment to understand what actually happens in above code. ##############
// ################################################################################################

// const controller = require('../controllers/calculateControllers');// const controller = require('../controllers/calculateControllers');
// router.get('/', (req, res) => {
//     res.send('Welcome to Calculation');
// });
// 
// functional divide router performing division on req parameters
// router.get('/divide', (req, res) => {
//     controller.divide(req, res);
// });


// // functional multiply router performing multiplication on req parameters
// router.get('/multiply', (req,res) => {
//     controller.multiply(req, res);
// });

// // functional add router performing addition on req parameters
// router.get('/add', (req, res) => {
//     controller.add(req, res);
// });

// // functional substract router performing substraction on req parameters
// router.get('/substract', (req,res) => {
//     controller.substract(req, res)    
// });


module.exports = router;