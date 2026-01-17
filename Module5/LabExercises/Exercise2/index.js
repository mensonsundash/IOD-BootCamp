// ################## CREATE APP: REQUIRE EXPRESS PACKAGE
const express =  require('express');
const router = express.Router();
//create an app using express
const app = express();
const port = 3000;

//importing routes
const calculateRouter = require('./routes/calculateRoutes.js');
const extraRouter = require('./routes/extraRoutes.js');

// ################## REQ & RES
app.get('/', (req, res) =>{
    const container = `
    <h1>Calculator App</h1>
    <h3>Number1: 6</h3>
    <h3>Number2: 4</h3>
    <div>
            <a href='http://localhost:${port}/calculate/add?num1=6&num2=4'>Add</a>
    </div>
    <div>
            <a href='http://localhost:${port}/calculate/substract?num1=6&num2=4'>Substract</a>
    </div>
    <div>
            <a href='http://localhost:${port}/calculate/multiply?num1=6&num2=4'>Multiply</a>
    </div>
    <div>
            <a href='http://localhost:${port}/calculate/divide?num1=6&num2=4'>Divide</a>
    </div>


    <h2>Extension:</h2>
    <div>
        <a href='http://localhost:${port}/extra/maxmin?max=20'>Click Max</a>
    </div>

    <div>Extend to take query min
        <a href='http://localhost:${port}/extra/maxmin?max=20&min=3'>Click Min</a>
    </div>

    `;
    res.send(container)
});

app.use('/calculate', calculateRouter);
app.use('/extra', extraRouter);

// ################## LISTENING APP
app.listen(port, () =>{
    console.log(`App is listening to port ${port}: http://localhost:${port}`)
})