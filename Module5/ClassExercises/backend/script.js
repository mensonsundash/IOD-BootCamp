//require the express package
const express = require('express')

const swaggerui = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

const myAppRouter = require('./routes/myAppRoutes');
const secondRouter = require('./routes/secondAppRoutes');
const calculateRouter= require('./routes/calculatorRoutes');
const userRouter = require('./routes/userRoutes');

const cors = require("cors");
//create an app using the express
// package
const app = express(); //web server 1
const app2 = express(); //web server 2


// set the port to 3000
const port = 3000
const port2 = 3001;

app.use(cors()); //resolve the cors blocking policy
app.use(express.json());//enabling jason format as incoming data

app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

app.use("/", express.static('public'));

app.use("/", myAppRouter);

app2.use("/", secondRouter);
app.use("/calculate", calculateRouter);

app.use("/users", userRouter);





app.listen(port, () => {
    console.log(`Web server started with port: ${port}`);
})

app2.listen(port2, () => {
    console.log(`Web server 2nd started with port ; ${port2}`);
});