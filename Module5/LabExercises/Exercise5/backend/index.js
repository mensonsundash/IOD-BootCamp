// ################## CREATE APP: REQUIRE EXPRESS PACKAGE
const express =  require('express');
const router = express.Router();

const path = require("path");// built-in utility working with file paths
//create an app using express
const app = express();
const port = 3000;

//importing routes
const calculateRouter = require('./routes/calculateRoutes.js');
const extraRouter = require('./routes/extraRoutes.js');

// ################## REQ & RES
/** extension part on Lab Exercise 3 
 * __dirname:(root project folder) where index.js exist  http://localhost:3000/
 * path.join(__dirname, "public") create an absolute path to public/ folder
 */
app.use(express.static(path.join(__dirname, "public")));

app.get('/', express.static('public')); //geting public UI page to make req on servers (calculate ...)

app.use('/calculate', calculateRouter);
app.use('/extra', extraRouter);

// ################## LISTENING APP
app.listen(port, () =>{
    console.log(`App is listening to port ${port}: http://localhost:${port}`)
})