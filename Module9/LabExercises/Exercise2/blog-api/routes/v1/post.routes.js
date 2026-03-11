const express = require("express");
const app = express.Router();

// importing controller functions available to connect routes
const { postList, createPost, updatePost, deletePost } = require("../../controllers/post.controller")

// app.get('/', (req, res) => {
//     res.json({message: "This is router api V1: Post"});
// })

//RESTful API endpoints
app.get("/", postList);
app.post("/", createPost);
app.put("/:id", updatePost);
app.delete("/:id", deletePost);

module.exports = app;