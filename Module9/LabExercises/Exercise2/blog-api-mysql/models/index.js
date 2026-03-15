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

/** Associations/ Relationship */

// User -> Post : One to Many relationship
    User.hasMany(Post, { foreignKey: "userId" }); // One to many
    Post.belongsTo(User, { foreignKey: "userId" }) // Many to One
// User -> Comment : One to Many relationship
    User.hasMany(Comment, { foreignKey:"userId" });
    Comment.belongsTo(User, { foreignKey: "userId" });
// User -> Like : One to Many relationship
    User.hasMany(Like, { foreignKey: "userId" });
    Like.belongsTo(User, { foreignKey: "userId" });

// Post -> Comment : One to Many relationship
    Post.hasMany(Comment, { foreignKey: "postId" });
    Comment.belongsTo(Post, { foreignKey: "postId" });
// Post -> Like : One to Many relationship
    Post.hasMany(Like, { foreignKey: "postId" });
    Like.belongsTo(Post, { foreignKey: "postId" });

module.exports = {
    User,
    Post,
    Comment,
    Like
}