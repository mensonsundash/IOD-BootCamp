const express = require("express");
const app = express.Router();

const controller = require("../controllers/calculatorControllers")

app.get("/add", (req, res) => {
    controller.AddNumbers(req, res);
});

app.get("/substract", (req, res) => {
    controller.SubstractNumbers(req, res);
});

module.exports = app;