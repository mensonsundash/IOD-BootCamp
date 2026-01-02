const AddNumbers = (req, res) =>{
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseInt(num1) + parseInt(num2);
    res.status(200);
    res.json({
        res: result,
    });
} 

const SubstractNumbers = (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseInt(num1) - parseInt(num2);
    res.status(200);
    res.json({
        res: result,
    });
}

module.exports = {AddNumbers, SubstractNumbers};

