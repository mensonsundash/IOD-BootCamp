/**
 * Function to list all posts
 */
async function postList(req, res){
    try{
        const result = "Post Listing Controller" 
        
        //send result back as JSON response
        res.status(200).json({ data: result });
    }catch(error) {
        //If model throws an error send a 400 Bad Request response with error message
        res.statu(400).json({ errors: error });
    }
}

/**
 * Function to create a post
 */
async function createPost(req,res){
    try{
        const result = "Create Post Controller";
        res.status(200).json({ data: result });
    }catch(error) {
        res.statu(400).json({ errors: error });
    }
}

/**
 * Function to update a post
 */
async function updatePost(req,res){
    try{
        const result = "Update Post Controller";
        res.status(200).json({ data: result });
    }catch(error) {
        res.statu(400).json({ errors: error });
    }
}

/**
 * Function to delete a post
 */
async function deletePost(req,res){
    try{
        const result = "Delete Post Controller";
        res.status(200).json({ data: result });
    }catch(error) {
        res.statu(400).json({ errors: error });
    }
}

// Export all controller functions making available to routes
module.exports = {
    postList,
    createPost,
    updatePost,
    deletePost
}