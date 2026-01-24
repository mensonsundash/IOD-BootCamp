// ################## CREATE APP: REQUIRE EXPRESS PACKAGE
const express =  require('express');
// const router = express.Router();

//adding swagger
const swaggerui = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const path = require("path");// built-in utility working with file paths
//create an app using express
const app = express();

//importing routes
const calculateRouter = require('./routes/calculateRoutes.js');
const extraRouter = require('./routes/extraRoutes.js');

// ################## REQ & RES
/** extension part on Lab Exercise 3 
 * __dirname:(root project folder) where index.js exist  http://localhost:3000/
 * path.join(__dirname, "public") create an absolute path to public/ folder
 */

app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocument));

app.use(express.static(path.join(__dirname, "public")));


app.use('/calculate', calculateRouter);
app.use('/extra', extraRouter);


module.exports = app;