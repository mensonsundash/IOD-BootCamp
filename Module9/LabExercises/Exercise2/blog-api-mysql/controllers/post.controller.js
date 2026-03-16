"use strict";
const Models = require("../models");


// Function to get all posts
async function getAllPost(req, res) {
    try{
        const posts = await Models.Post.findAll({
            include: [{model: Models.User}]
        }); // it will include the constrait to User info related to Post

        res.status(200).json({ message: "Post fetched successfully", data: posts });
    } catch(error) {
        res.status(400).json({message: "Failed to fetch post", errors: error.message})
    }
}


// Function to get post by id
async function getPostById(req, res) {
    try{
        const postId = req.params.id;

        //checking for updated row data post exist
        const post = await Models.Post.findByPk(postId);
        if(!post) res.status(404).json({ message: "Post not found" });
        res.status(200).json({ message: "Post fetched successfully", data: post})
    } catch(error) {
        res.status(400).json({ message: "Failed to fetch post", errors: error.message });
    }
}

// Function to get post by id
async function getPostsByUserId(req, res) {
    try{
        const userId = req.params.userId;
        
        //checking for updated row data post exist
        const posts = await Models.Post.findAll({
            where: {userId: userId},
            include: [{model: Models.User}]
        });// it will include the constraint to User info with Posts
        if(!posts) res.status(404).json({ message: "Posts not found" });
        res.status(200).json({ message: "User Post(s) fetched successfully", data: posts})
    } catch(error) {
        res.status(400).json({ message: "Failed to fetch user posts", errors: error.message });
    }
}
 

// Function to create post
async function createPost(req, res) {
    try{
        const { userId, title, description, imageUrl } = req.body;

        //checking for user exist
        const user = await Models.User.findByPk(userId);
        if(!user) res.status(404).json({ message: "User not found" });

        const result = await Models.Post.create(req.body);

        res.status(200).json({ message: "Post created successfully", data: result });
    } catch(error) {
        res.status(400).json({message: "Failed to create post", errors: error.message});
    }
}

// Function to update Post
async function updatePost(req, res) {
    try {
        const postId = req.params.id;
        
        //checking for updated row dat post exist
        const post = await Models.Post.findByPk(postId);
        if(!post) res.status(404).json({ message: "Post not found" });

        //update post row with post id and replicating body data
        const updatedPost = await Models.Post.update(
            {...req.body},
            { where: {id: post.id} }
        );
        
        res.status(200).json({message: "Post updated successfully", data: updatedPost})
    } catch(error) {
        res.status(400).json({message: "Failed to udpate post", errors: error.message})
    }
}


// function to delete post
async function deletePost(req, res) {
    try{
        const postId = req.params.id;

        //checking for updated row dat post exist
        const post = await Models.Post.findByPk(postId);
        if(!post) res.status(404).json({ message: "Post not found" });

        await Models.Post.destroy({ where: { id: post.id } });

        res.status(200).json({ message: "Post deleted successfully", data: post });

    } catch(error) {
        res.status(400).json({ message: "Failed to delete post" });
    }
}
module.exports = {
    getAllPost,
    getPostById,
    getPostsByUserId,
    createPost,
    updatePost,
    deletePost
}