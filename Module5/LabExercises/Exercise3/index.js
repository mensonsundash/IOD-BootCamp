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
app.get('/', express.static('public')); //geting public UI page to make req on servers (calculate ...)

app.use('/calculate', calculateRouter);
app.use('/extra', extraRouter);

// ################## LISTENING APP
app.listen(port, () =>{
    console.log(`App is listening to port ${port}: http://localhost:${port}`)
})