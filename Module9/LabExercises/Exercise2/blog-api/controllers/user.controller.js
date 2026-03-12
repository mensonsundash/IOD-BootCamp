'use strict';
let Models = require("../models");


/**
 * Function to get all users
 */
async function getAllUser(req, res){
    try{
        // Find all user documents in the collection
        const users = await Models.User.find({});
        // Send success JSON response with all user
        res.status(200).json({message: "User fetched successfully", data: users})
    }catch(error) {
        // Send error JSON response if fetching fails
        res.statu(400).json({ message: "Failed to fetch user", errors: error });
    }
}

/**
 * Function to get a single user by id
 */
async function getUserById(req, res){
    try{
        // Read user id from router parameter /:id
        const userId = req.params.id;

        //Find one user document by its id
        const user = await Models.User.findById(userId);

        // return 404 if no matching user is found
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        // Send success message with JSON response with found user
        res.status(200).json({message:"User fetched successfully", data: user});

    }catch(error) {
        // Send error JSON response if fetching fails 
        res.status(400).json({message:"Failed to fetch user", errors: error});
    }
}
/**
 * Function to create a user
 */
async function createUser(req,res){
    try{
        // Extracting email from request body for duplicate check
        const {emailId} = req.body;
        console.log(req.body);//quick test

        //check if a user already exists with the same email
        const existingUser = await Models.User.findOne({emailId});
        //if user exist then response with message and stop inserting
        if(existingUser) {
            return res.status(409).json({message: "User already exists with this email"})
        }

        // Create a new User model instance and save it to DB
        const result = await new Models.User(req.body).save();
        
        res.status(200).json({message:"User created successfully", data: result });
    }catch(error) {
        res.status(400).json({ message:"Failed to create user", errors: error });
    }
}

/**
 * Function to update a user
 */
async function updateUser(req,res){
    try{
        const userId = req.params.id;

        const updatedData = {
            ...req.body,
            updatedAt: new Date()
        };

        const updatedUser = await Models.User.findByIdAndUpdate(
            userId,
            updatedData,
            {
                new: true,
                runValidators: true
            }
        );

        if(!updatedUser){
            return res.status(404).json({message: "User not found"})
        }

        res.status(200).json({ message: "User updated successfully", data: updatedUser });
    }catch(error) {
        res.statu(400).json({ message: "Failed to update user", errors: error });
    }
}

/**
 * Function to delete a user
 */
async function deleteUser(req,res){
    try{
        const userId = req.params.id;

        const deletedUser = await Models.User.findByIdAndDelete(userId);

        if(!deletedUser){
            return res.status(404).json({message: "User not found"})
        }
        
        res.status(200).json({ message: "User deleted successfully", data: deletedUser });
    }catch(error) {
        res.statu(400).json({ message: "Failed to delete user", errors: error });
    }
}

// Export all controller functions making available to routes
module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}