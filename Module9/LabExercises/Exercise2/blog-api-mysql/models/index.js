"use strict";

const Comment = require("./comment.model");
const Like = require("./like.model");
const Post = require("./post.model");
const User = require("./user.model");

// function to initialize each models
async function init() {
    //sync the models
    await User.sync(); 
    await Post.sync();
    await Comment.sync();
    await Like.sync();
}

//calling initialization function to load all models
init();

module.exports = {
    User,
    Post,
    Comment,
    Like
}