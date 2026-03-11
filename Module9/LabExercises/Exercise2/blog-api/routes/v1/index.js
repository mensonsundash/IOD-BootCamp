const express = require("express");

const app = express.Router();
//welcome message to api services
app.get("/", (req, res) => {
    res.json({message: "Welcome to api service: V1"})
})

/** using all other routing -:Connecting Routes to Express App**/

//User module
app.use("/user", require("./user.routes"));

//Post module
app.use("/post", require("./post.routes"));


module.exports = app;