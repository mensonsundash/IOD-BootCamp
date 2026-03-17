const express = require("express");
const app = express.Router();

const { getAllComment, getCommentById, getCommentsByPostId, createComment, updateComment, deleteComment} = require("../../controllers/comment.controller")

app.get("/", getAllComment);
app.get("/:id", getCommentById);
app.get("/post/:postId", getCommentsByPostId);
app.post("/", createComment);
app.put("/:id", updateComment);
app.delete("/:id", deleteComment);

module.exports = app;