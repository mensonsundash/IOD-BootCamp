const express = require("express");
const app = express.Router();

const users = [
    {id: 1, name: 'Anthony Albanese', country: 'AU'},
    {id: 2, name: 'Joe Biden', country: 'US'},
    {id: 3, name: 'Chris Hipkins', country: 'NZ'},
    {id: 4, name: 'Lee Hsien Loong', country: 'SG'}
];

//  res.sendStatus(200); // equivalent to res.status(200).send('OK')
// *    res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
// *    res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
// *    res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')

app.get("/headers", (req, res) => {
    res.json(req.headers);
})
app.get('/:id',(req, res) => {
    let userId = req.params.id;
    let user = users.find((user) => user.id == userId);
    if(user){
        res.status(200);
        res.json({res: user});
    }else{
        res.status(404);
        res.json({result: `User ${userId} not found`});
    }

    // user ? res.status(200).json({result: user})
    //     : res.status(404).json({result:
    //     `User ${userId} not found`})
});


app.post('/', (req, res) => {
    console.log(req.body);
    let newUser = req.body;

    if(!newUser.name || !newUser.country){
        res.status(500).json({error: "User must have either name or country to add."});
        return;
    }else if(!newUser.id){
        newUser.id = users.length + 1;
    }   


    users.push(newUser);

    res.status(200).json(newUser);
});

module.exports = app;