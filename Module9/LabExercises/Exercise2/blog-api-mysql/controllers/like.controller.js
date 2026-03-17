"use strict";
const Models = require("../models");


// Function to get all likes
async function getAllLike(req, res) {
    try{
        // this sql query will join two table together with like accordint to foreign key indexing
        const likes = await Models.Like.findAll({
            include:[
                { model: Models.User },
                { model: Models.Post }
            ]
        });
        res.status(200).json({ message: "Like fetched successfully", data: likes });
    } catch(error) {
        res.status(400).json({message: "Failed to fetch like", errors: error.message})
    }
}


// Function to get like by id
async function getLikeById(req, res) {
    try{
        const likeId = req.params.id;

        //checking for updated row data like exist
        const like = await Models.Like.findByPk(likeId);
        if(!like) res.status(404).json({ message: "Like not found" });
        res.status(200).json({ message: "Like fetched successfully", data: like})
    } catch(error) {
        res.status(400).json({ message: "Failed to fetch like", errors: error.message });
    }
}

// Function to get like by id
async function getLikesByPostId(req, res) {
    try{
        const postId = req.params.postId;
        
        //checking for updated row data like exist
        const likes = await Models.Like.findAll({
            where: {postId: postId},
            include: [
                { model: Models.User },
                { model: Models.Post }
            ]
        });
        if(!likes) res.status(404).json({ message: "Likes not found" });
        res.status(200).json({ message: "Like(s) fetched successfully", data: likes})
    } catch(error) {
        res.status(400).json({ message: "Failed to fetch like", errors: error.message });
    }
}
 

// Function to create like
async function addLike(req, res) {
    try{
        const {userId, postId } = req.body;

        //checking for user exist
        if(userId){
            const user = await Models.User.findByPk(userId);
            if(!user) return res.status(404).json({ message: "User not found" });
        }
        
        //checking for post exist
        if(postId){
            const post = await Models.Post.findByPk(postId);
            if(!post) return res.status(404).json({ message: "Post not found" });
        }

        const existingLike = await Models.Like.findOne({
            where: { userId, postId }
        });

        if(existingLike) return res.status(404).json({message: "User already liked this post"})
        
        const result = await Models.Like.create(req.body);

        res.status(200).json({ message: "Like added successfully", data: result });
    } catch(error) {
        res.status(400).json({message: "Failed to add like", errors: error.message});
    }
}

// function to remove like
async function removeLike(req, res) {
    try{
        const likeId = req.params.id;

        //checking for updated row dat like exist
        const like = await Models.Like.findByPk(likeId);
        if(!like) res.status(404).json({ message: "Like not found" });

        await Models.Like.destroy({ where: { id: like.id } });

        res.status(200).json({ message: "Like removed successfully", data: like });

    } catch(error) {
        res.status(400).json({ message: "Failed to remove like" });
    }
}
module.exports = {
    getAllLike,
    getLikeById,
    getLikesByPostId,
    addLike,
    removeLike
}