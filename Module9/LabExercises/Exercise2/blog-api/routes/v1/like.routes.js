const express = require("express");
const app = express.Router();

// importing controller functions available to connect routes
const { getAllLikes, getLikeByPost, addLike, removeLike } = require("../../controllers/like.controller")

//RESTful API endpoints
app.get("/", getAllLikes); //get all posts likes
app.get("/:postId", getLikeByPost); //get comments by user id
app.post("/", addLike); // create commentnt
app.delete("/", removeLike); //delete comment

module.exports = app;