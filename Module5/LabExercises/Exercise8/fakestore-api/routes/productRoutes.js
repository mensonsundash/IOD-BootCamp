// ################## CREATE APP: REQUIRE EXPRESS PACKAGE
const express = require('express');
const router = express.Router(); //getting router module

const { getAllProducts } = require("../controllers/productControllers")

// routing 
router.get('/', getAllProducts); //getData automaticall receives the req, res caling getAllProducts controller function

module.exports = router;
