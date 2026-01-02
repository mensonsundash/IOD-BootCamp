const express = require("express");

const secondRouter = express.Router();


secondRouter.get("/", (req, res) => {
    res.send("Welcome to backend-2");
});

module.exports = secondRouter;
