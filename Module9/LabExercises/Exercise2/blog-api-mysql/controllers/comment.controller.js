"use strict";
const Models = require("../models");


// Function to get all comments
async function getAllComment(req, res) {
    try{
        // this sql query will join two table together with comment accordint to foreign key indexing
        const comments = await Models.Comment.findAll({
            include:[
                { model: Models.User },
                { model: Models.Post }
            ]
        });
        res.status(200).json({ message: "Comment fetched successfully", data: comments });
    } catch(error) {
        res.status(400).json({message: "Failed to fetch comment", errors: error.message})
    }
}


// Function to get comment by id
async function getCommentById(req, res) {
    try{
        const commentId = req.params.id;

        //checking for updated row data comment exist
        const comment = await Models.Comment.findByPk(commentId);
        if(!comment) res.status(404).json({ message: "Comment not found" });
        res.status(200).json({ message: "Comment fetched successfully", data: comment})
    } catch(error) {
        res.status(400).json({ message: "Failed to fetch comment", errors: error.message });
    }
}

// Function to get comment by id
async function getCommentsByPostId(req, res) {
    try{
        const postId = req.params.postId;
        
        //checking for updated row data comment exist
        const comments = await Models.Comment.findAll({
            where: {postId: postId},
            include: [
                { model: Models.User },
                { model: Models.Post }
            ]
        });
        if(!comments) res.status(404).json({ message: "Comments not found" });
        res.status(200).json({ message: "Comment(s) fetched successfully", data: comments})
    } catch(error) {
        res.status(400).json({ message: "Failed to fetch comment", errors: error.message });
    }
}
 

// Function to create comment
async function createComment(req, res) {
    try{
        const {userId, postId, commentText} = req.body;

        //checking for user exist
        if(userId){
            const user = await Models.User.findByPk(userId);
            if(!user) res.status(404).json({ message: "User not found" });
        }
        
        //checking for post exist
        if(postId){
            const post = await Models.Post.findByPk(postId);
            if(!post) res.status(404).json({ message: "Post not found" });
        }
        
        const result = await Models.Comment.create(req.body);

        res.status(200).json({ message: "Comment created successfully", data: result });
    } catch(error) {
        res.status(400).json({message: "Failed to create comment", errors: error.message});
    }
}

// Function to update Comment
async function updateComment(req, res) {
    try {
        const commentId = req.params.id;

        //checking for updated row dat comment exist
        const comment = await Models.Comment.findByPk(commentId);
        if(!comment) res.status(404).json({ message: "Comment not found" });

        //update comment row with comment id and replicating body data
        const updatedComment = await Models.Comment.update(
            {...req.body},
            { where: {id: comment.id} }
        );
        
        res.status(200).json({message: "Comment updated successfully", data: updatedComment})
    } catch(error) {
        res.status(400).json({message: "Failed to udpate comment", errors: error.message})
    }
}


// function to delete comment
async function deleteComment(req, res) {
    try{
        const commentId = req.params.id;

        //checking for updated row dat comment exist
        const comment = await Models.Comment.findByPk(commentId);
        if(!comment) res.status(404).json({ message: "Comment not found" });

        await Models.Comment.destroy({ where: { id: comment.id } });

        res.status(200).json({ message: "Comment deleted successfully", data: comment });

    } catch(error) {
        res.status(400).json({ message: "Failed to delete comment" });
    }
}
module.exports = {
    getAllComment,
    getCommentById,
    getCommentsByPostId,
    createComment,
    updateComment,
    deleteComment
}