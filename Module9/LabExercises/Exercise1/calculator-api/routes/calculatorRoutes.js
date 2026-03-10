const express = require("express");

const router = express.Router();

const controller = require("../controllers/calculatorController");

router.get("/add", controller.addNumbers);
router.get("/substract", controller.substractNumbers);
router.get("/multiply", controller.multiplyNumbers);
router.get('/divide', controller.divideNumbers);

module.exports = router;