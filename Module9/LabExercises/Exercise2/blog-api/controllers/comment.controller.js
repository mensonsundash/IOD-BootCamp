'use strict';
let Models = require("../models");


/**
 * Function to get all comments
 */
async function getAllComments(req, res){
    try{
        // Find all comment documents in the collection
        const comments = await Models.Comment.find({});
        // Send success JSON response with all comment
        res.status(200).json({message: "Comment fetched successfully", data: comments})
    }catch(error) {
        // Send error JSON response if fetching fails
        res.statu(400).json({ message: "Failed to fetch comment", errors: error });
    }
}

/**
 * Function to get a single comment by user id
 */
async function getCommentByPost(req, res){
    try{
        // Read comment id from router parameter /:id
        const post_id = req.params.postId;

        //verify user exist
        const user = await Models.User.findById(user_id);
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }

        //Find comments document for this post and include user&post details
        const comments = await Models.Comment.find({postId: post_id}).populate("userId").populate("postId");

        // return 404 if no matching comment is found
        if(!comments) {
            return res.status(404).json({message: "Your Comments not found"});
        }

        // Send success message with JSON response with found comment
        res.status(200).json({message:"Your Comment fetched successfully", data: comments});

    }catch(error) {
        // Send error JSON response if fetching fails 
        res.status(400).json({message:"Failed to fetch your comments", errors: error});
    }
}

/**
 * Function to create a comment
 */
async function createComment(req,res){
    try{
        // Extracting email from request body for duplicate check
        const { userId, postId, comment_text }= req.body;
        console.log(req.body);//quick test

        //check if a referenced user exists
        const user = await Models.User.findById(userId);
        //if user not exist then response with message and stop inserting
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }

        // check if a referenced post exists, if not then response with error and stop
        const post = await Models.Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found"})
        }

        // Create a new Comment model instance and save it to DB
        const result = await new Models.Comment({
            userId,
            postId,
            comment_text
        }).save();
        
        res.status(200).json({message:"Comment created successfully", data: result });
    }catch(error) {
        res.status(400).json({ message:"Failed to create comment", errors: error });
    }
}

/**
 * Function to update a comment
 */
async function updateComment(req,res){
    try{
        const commentId = req.params.id;
        const {  userId, postId, comment_text} = req.body;

        //check if a referenced user exists
        const user = await Models.User.findById(userId);
        //if user not exist then response with message and stop inserting
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }

        // check if a referenced post exists, if not then response with error and stop
        const post = await Models.Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found"})
        }

        const comment = await Models.Comment.findById(commentId);
        if(!comment){
            return res.status(404).json({message: "Comment not found"})
        }

        // set up updated Data to be PUT into same id comment
        const updatedData = {
            ...req.body,
            updatedAt: new Date()
        };

        //update comment and retun latest version of the same id 
        const updatedComment = await Models.Comment.findByIdAndUpdate(
            commentId,
            updatedData,
            {
                new: true,
                runValidators: true
            }
        ).populate("userId").populate("postId");

        res.status(200).json({ message: "Comment updated successfully", data: updatedComment });
    }catch(error) {
        res.statu(400).json({ message: "Failed to update comment", errors: error });
    }
}

/**
 * Function to delete a comment
 */
async function deleteComment(req,res){
    try{
        const commentId = req.params.id;

        const comment = await Models.Comment.findById(commentId);

        //check if a referenced user exists
        const user = await Models.User.findById(userId);
        //if user not exist then response with message and stop inserting
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }

        // check if a referenced post exists, if not then response with error and stop
        const post = await Models.Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found"})
        }

        if(!comment){
            return res.status(404).json({message: "Comment not found"})
        }

        const deletedComment = await Models.Comment.findByIdAndDelete(commentId);

        res.status(200).json({ message: "Comment deleted successfully", data: deletedComment });
    }catch(error) {
        res.statu(400).json({ message: "Failed to delete comment", errors: error });
    }
}

// Export all controller functions making available to routes
module.exports = {
    getAllComments,
    getCommentByPost,
    createComment,
    updateComment,
    deleteComment
}