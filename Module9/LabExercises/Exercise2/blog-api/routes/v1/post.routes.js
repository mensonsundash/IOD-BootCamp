const express = require("express");
const app = express.Router();

// importing controller functions available to connect routes
const { getAllPosts, getPostById, getPostByUser, createPost, updatePost, deletePost } = require("../../controllers/post.controller")

// app.get('/', (req, res) => {
//     res.json({message: "This is router api V1: Post"});
// })

//RESTful API endpoints
app.get("/", getAllPosts); // get all posts
app.get("/:id", getPostById); //get post by post id i.e details
app.get("/user/:userId", getPostByUser); //get posts by user id
app.post("/", createPost); // create post
app.put("/:id", updatePost); // update post
app.delete("/:id", deletePost); //delete post

module.exports = app;