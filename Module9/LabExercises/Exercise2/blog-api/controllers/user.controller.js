/**
 * Function to list all users
 */
async function userList(req, res){
    try{
        const result = "User Listing Controller" 
        
        //send result back as JSON response
        res.status(200).json({ data: result });
    }catch(error) {
        //If model throws an error send a 400 Bad Request response with error message
        res.statu(400).json({ errors: error });
    }
}

/**
 * Function to create a user
 */
async function createUser(){
    try{
        const result = "Create User Controller";
        res.status(200).json({ data: result });
    }catch(error) {
        res.statu(400).json({ errors: error });
    }
}

/**
 * Function to update a user
 */
async function updateUser(){
    try{
        const result = "Update User Controller";
        res.status(200).json({ data: result });
    }catch(error) {
        res.statu(400).json({ errors: error });
    }
}

/**
 * Function to delete a user
 */
async function deleteUser(){
    try{
        const result = "Delete User Controller";
        res.status(200).json({ data: result });
    }catch(error) {
        res.statu(400).json({ errors: error });
    }
}

// Export all controller functions making available to routes
module.exports = {
    userList,
    createUser,
    updateUser,
    deleteUser
}