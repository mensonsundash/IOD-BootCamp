const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Welcome to max a min number.")
});

router.get('/maxmin', (req, res) => {
    let max = parseInt(req.query.max)
    let min = parseInt(req.query.min)

    if(!min) min = 0; //if min is not provided then default min value = 0

    //gettin random number as provided min and max value
    const result = Math.floor(Math.random() * (max -min + 1) ) + min; // (20-3+1) + 3
    res.status(200).json({data: result});
})


module.exports = router;



