const friends = require('../models/friends')


const getData = (req, res) =>{
    res.json(friends)
}

const getByFilter = (req, res) =>{
    // console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender.toLowerCase() == filterGender.toLowerCase());
    }

    if(filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.toLowerCase().startsWith(filterLetter)) ;
    }
    
    if (matchingFriends.length > 0) {
        // return valid data when the gender matches 
        res.status(200).json(matchingFriends)
    } else {
        // and an error response when there are no matches
        res.status(404).json({error: "No friends matching gender "+filterGender})
    }  
}

const getInfo = (req, res) =>{
    //creating an object info to hold key value pair
    const info = {
        userAgent: req.headers['user-agent'],
        contentType: req.headers['content-type'],
        accept: req.headers['accept']
    }

    // Modify this response to just return info on the user-agent, content-type and accept headers
    res.json(info) 
}


const getById = (req, res) =>{
    console.log(req.params)
    let friendId = Number(req.params.id); // 'id' here will be a value matching anything after the / in the request path
    
    // Modify this function to find and return the friend matching the given ID, or a 404 if not found
    // as we just need to find only one ids data find would return one matching data
    const friend = friends.find(f => f.id == friendId)
    if(!friend) {
        res.status(404).json({error: `Friend with ID ${friendId} not found.`})
    }
    // Modify this response with the matched friend, or a 404 if not found
    // res.json({result: 'Finding friend with ID ' + friendId})
    res.status(200).json(friend)
}

const create = (req, res) =>{
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(400).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    res.status(200).json(friends)
}


const update = (req, res) =>{
        let friendId = Number(req.params.id);
        let updatedFriend = req.body;

        // Replace the old friend data for friendId with the new data from updatedFriend
        //find index of an existing friend
        const index = friends.findIndex(friend => friend.id === friendId)

        //if friend not found
        if(index === -1) {
            return res.status(404).json({
                error:`Friend with ID ${friendId} not found`
            });
        }

        //validation to matches the pattern
        if (!updatedFriend.name || !updatedFriend.gender) {
            res.status(400).json({error: 'Friend object must contain a name and gender'});
            return;
        }

        const finalUpdatedFriend = {
            ...friends[index],      // keep old fields
            ...updatedFriend,       // overwrite with new fields
            id: friendId            // ensure id stays correct type/value
        }

        friends[index] = finalUpdatedFriend;
        
        // Modify this response with the updated friend, or a 404 if not found
        res.status(200).json(friends);
        // res.json({result: 'Updated friend with ID ' + friendId, data: updatedFriend})
}

const deleteById = (req, res) =>{
    let friendId = Number(req.params.id)
    
    // Replace the old friend data for friendId with the new data from updatedFriend
    //find index of an existing friend
    const index = friends.findIndex(friend => friend.id === friendId)

    //if friend not found
    if(index === -1) {
        return res.status(404).json({
            error:`Friend with ID ${friendId} not found`
        });
    }

    // remove the friend from the array
    const deleteFriend  = friends.splice(index, 1)[0];;

    res.status(200).json(friends)
}

module.exports = {getData, getByFilter, getInfo, getById, create, update, deleteById}