const express = require("express");
const app = express.Router();

const { getAllLike, getLikeById, getLikesByPostId, addLike, removeLike }= require("../../controllers/like.controller")

app.get("/", getAllLike);
app.get("/:id", getLikeById);
app.get("/post/:postId", getLikesByPostId);
app.post("/", addLike);
app.delete("/:id", removeLike);

module.exports = app;