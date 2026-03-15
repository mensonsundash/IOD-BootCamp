const express = require("express");
const app = express.Router();

// importing controller functions available to connect routes
const { getAllComments, getCommentByPost, createComment, updateComment, deleteComment } = require("../../controllers/comment.controller")

//RESTful API endpoints
app.get("/", getAllComments); // get all comments
app.get("/:postId", getCommentByPost); //get comments by user id
app.post("/", createComment); // create comment
app.put("/:id", updateComment); // update comment
app.delete("/:id", deleteComment); //delete comment

module.exports = app;