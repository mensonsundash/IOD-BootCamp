'use strict';
let Models = require("../models");


/**
 * Function to get all posts likes 
 */
async function getAllLikes(req, res){
    try{
        // Find all like documents in the collection
        const likes = await Models.Like.find({});
        // Send success JSON response with all posts likes
        res.status(200).json({message: "Posts Likes fetched successfully", data: likes})
    }catch(error) {
        // Send error JSON response if fetching fails
        res.statu(400).json({ message: "Failed to fetch post", errors: error });
    }
}

/**
 * Function to get a single like by user id
 */
async function getLikeByPost(req, res){
    try{
        // Read like id from router parameter /:id
        const post_id = req.params.postId;

        //Find likes document for this post and include user&post details
        const likes = await Models.Like.find({postId: post_id}).populate("userId").populate("postId");

        // return 404 if no matching like is found
        if(!likes) {
            return res.status(404).json({message: "Your Likes not found"});
        }

        // Send success message with JSON response with found like
        res.status(200).json({message:"Your Like fetched successfully", data: likes});

    }catch(error) {
        // Send error JSON response if fetching fails 
        res.status(400).json({message:"Failed to fetch your likes", errors: error});
    }
}

/**
 * Function to create a like
 */
async function addLike(req,res){
    try{
        // Extracting email from request body for duplicate check
        const { userId, postId }= req.body;
        
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
        // Prevent duplicate like by same user on same post
        const existingLike = await Models.Like.findOne({userId, postId});
        if(existingLike){
            return res.status(404).json({message: "User already liked this post"})
        }
        // Create a new Like model instance and save it to DB
        const result = await new Models.Like({
            userId,
            postId,
        }).save();
        console.log("result-->",result)
        res.status(200).json({message:"Like added successfully", data: result });
    }catch(error) {
        res.status(400).json({ message:"Failed to add like", errors: error });
    }
}

/**
 * Function to delete a like
 */
async function removeLike(req,res){
    try{
        const { userId, postId } = req.body;

        const removedLike = await Models.Like.findOneAndDelete({userId, postId});
        if(!removedLike) {
            return res.status(404).json({ message: "Like not found"})
        }


        res.status(200).json({ message: "Like removed successfully", data: removedLike });
    }catch(error) {
        res.statu(400).json({ message: "Failed to remove like", errors: error });
    }
}

// Export all controller functions making available to routes
module.exports = {
    getAllLikes,
    getLikeByPost,
    addLike,
    removeLike
}