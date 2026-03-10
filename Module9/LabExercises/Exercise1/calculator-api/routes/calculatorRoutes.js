const express = require("express"); //import express module

const router = express.Router(); // creating router object from express

//import controller functions
const controller = require("../controllers/calculatorController");

/**
 * These routes listen for GET requests from the client.
 */
router.get("/add", controller.addNumbers); // Route for addition
router.get("/substract", controller.substractNumbers); // Route for substraction
router.get("/multiply", controller.multiplyNumbers); // Route for multiplication
router.get('/divide', controller.divideNumbers); // Route for division

module.exports = router;