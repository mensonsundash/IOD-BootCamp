const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
    res.json({message: "Welcome to routes api: V1"});
})

app.use("/user", require("./user.routes")); // routes to user module
app.use("/post", require("./post.routes")); // routes to post module
app.use("/comment", require("./comment.routes")); // routes to comment module
app.use("/like", require("./like.routes")) // routes to like module

module.exports = app;