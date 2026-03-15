const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
    res.json({message: "Welcome to routes api: V1"});
})


module.exports = app;