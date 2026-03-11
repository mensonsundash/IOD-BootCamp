const express = require('express');
const app = express.Router();

//welcome to version 1 api service
app.get("/", (req,res)=>{
    res.json({message: "Welcome to api service."})
})

// Version 1 Route api
app.use("/v1", require("./v1"));

module.exports = app;