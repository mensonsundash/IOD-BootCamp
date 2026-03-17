const express = require("express");
const app = express.Router();

const { getAllPost, getPostById, getPostsByUserId, createPost, updatePost, deletePost } = require("../../controllers/post.controller");

app.get("/", getAllPost);
app.get("/:id", getPostById);
app.get("/user/:userId", getPostsByUserId);
app.post("/", createPost);
app.put("/:id", updatePost);
app.delete("/:id", deletePost);

module.exports = app;