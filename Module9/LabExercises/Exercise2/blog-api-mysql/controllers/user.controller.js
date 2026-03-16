"use strict";
const Models = require("../models");


// Function to get all users
async function getAllUser(req, res) {
    try{
        const users = await Models.User.findAll();
        res.status(200).json({ message: "User fetched successfully", data: users });
    } catch(error) {
        res.status(400).json({message: "Failed to fetch user", errors: error.message})
    }
}

// Function to get user by id
async function getUserById(req, res) {
    try{
        const userId = req.params.id;

        //checking for updated row dat user exist
        const user = await Models.User.findByPk(userId);
        if(!user) res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User fetched successfully", data: user})
    } catch(error) {
        res.status(400).json({ message: "Failed to fetch user", errors: error.message });
    }
}
 
// Fucntion to create user
async function createUser(req, res) {
    try{
        const {emailId} = req.body;

        // check for existing user
        const existingUser = await Models.User.findOne({
            where: { emailId }
        });

        if(existingUser){
            return res.status(409), json({ message: "User already exist with this email."})
        }

        const result = await Models.User.create(req.body);

        res.status(200).json({ message: "User created successfully", data: result });
    } catch(error) {
        res.status(400).json({message: "Failed to create user", errors: error.message});
    }
}

// Function to update User
async function updateUser(req, res) {
    try {
        const userId = req.params.id;
        const { emailId } = req.body;
 
        //checking for updated row dat user exist
        const user = await Models.User.findByPk(userId);
        if(!user) res.status(404).json({ message: "User not found" });

        // if email is being updated used by another user// preventing duplicates
        if(emailId){
            const existingUser = await Models.User.findOne({ where: {emailId: emailId}});
            if(existingUser && existingUser.id !== Number(userId)) {
                return res.status(409).json({message: "Another user exists with same email"})
            }
        }

        //update user row with user id and replicating body data
        const updatedUser = await Models.User.update(
            {...req.body},
            { where: {id: user.id} }
        );
        
        res.status(200).json({message: "User updated successfully", data: updatedUser})
    } catch(error) {
        res.status(400).json({message: "Failed to udpate user", errors: error.message})
    }
}


// function to delete user
async function deleteUser(req, res) {
    try{
        const userId = req.params.id;

        //checking for updated row dat user exist
        const user = await Models.User.findByPk(userId);
        if(!user) res.status(404).json({ message: "User not found" });

        await Models.User.destroy({ where: { id: user.id } });

        res.status(200).json({ message: "User deleted successfully", data: user });

    } catch(error) {
        res.status(400).json({ message: "Failed to delete user" });
    }
}
module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}