'use strict';
let Models = require("../models");


/**
 * Function to get all posts
 */
async function getAllPosts(req, res){
    try{
        // Find all post documents in the collection
        const posts = await Models.Post.find({});
        // Send success JSON response with all post
        res.status(200).json({message: "Post fetched successfully", data: posts})
    }catch(error) {
        // Send error JSON response if fetching fails
        res.statu(400).json({ message: "Failed to fetch post", errors: error });
    }
}

/**
 * Function to get a single post by id
 */
async function getPostById(req, res){
    try{
        // Read post id from router parameter /:id
        const postId = req.params.id;

        //Find one post document by its id
        const post = await Models.Post.findById(postId);

        // return 404 if no matching post is found
        if(!post) {
            return res.status(404).json({message: "Post not found"});
        }

        // Send success message with JSON response with found post
        res.status(200).json({message:"Post fetched successfully", data: post});

    }catch(error) {
        // Send error JSON response if fetching fails 
        res.status(400).json({message:"Failed to fetch post", errors: error});
    }
}


/**
 * Function to get a single post by user id
 */
async function getPostByUser(req, res){
    try{
        // Read post id from router parameter /:id
        const user_id = req.params.userId;

        //verify user exist
        const existingUser = await Models.User.findById(user_id);
        if(!existingUser) {
            return res.status(404).json({message: "User not found"})
        }

        //Find posts document for this user and include user details
        const posts = await Models.Post.find({userId: user_id}).populate("userId");

        // return 404 if no matching post is found
        if(!posts) {
            return res.status(404).json({message: "Your Posts not found"});
        }

        // Send success message with JSON response with found post
        res.status(200).json({message:"Your Post fetched successfully", data: posts});

    }catch(error) {
        // Send error JSON response if fetching fails 
        res.status(400).json({message:"Failed to fetch your posts", errors: error});
    }
}

/**
 * Function to create a post
 */
async function createPost(req,res){
    try{
        // Extracting email from request body for duplicate check
        const { userId, title, description, image_url } = req.body;
        console.log(req.body);//quick test

        //check if a referenced user exists before creating the post
        const existingUser = await Models.User.findById(userId);
        //if user not exist then response with message and stop inserting
        if(!existingUser) {
            return res.status(404).json({message: "User not found for the provided Users ID"})
        }

        // Create a new Post model instance and save it to DB
        const result = await new Models.Post({
            userId,
            title,
            description,
            image_url
        }).save();
        
        res.status(200).json({message:"Post created successfully", data: result });
    }catch(error) {
        res.status(400).json({ message:"Failed to create post", errors: error });
    }
}

/**
 * Function to update a post
 */
async function updatePost(req,res){
    try{
        const postId = req.params.id;

        const updatedData = {
            ...req.body,
            updatedAt: new Date()
        };

        // verify user exists if userId being changed
        if(updatedData.userId){
            const existingUser = await Models.User.findById(updatedData.userId);
            if(!existingUser){
                return res.status(404).json({message: "User not found fo the provided user ID"})
            }
        }

        //update post and retun latest version
        const updatedPost = await Models.Post.findByIdAndUpdate(
            postId,
            updatedData,
            {
                new: true,
                runValidators: true
            }
        ).populate("userId");

        if(!updatedPost){
            return res.status(404).json({message: "Post not found"})
        }

        res.status(200).json({ message: "Post updated successfully", data: updatedPost });
    }catch(error) {
        res.statu(400).json({ message: "Failed to update post", errors: error });
    }
}

/**
 * Function to delete a post
 */
async function deletePost(req,res){
    try{
        const postId = req.params.id;

        const deletedPost = await Models.Post.findByIdAndDelete(postId);

        if(!deletedPost){
            return res.status(404).json({message: "Post not found"})
        }
        
        res.status(200).json({ message: "Post deleted successfully", data: deletedPost });
    }catch(error) {
        res.statu(400).json({ message: "Failed to delete post", errors: error });
    }
}

// Export all controller functions making available to routes
module.exports = {
    getAllPosts,
    getPostById,
    getPostByUser,
    createPost,
    updatePost,
    deletePost
}