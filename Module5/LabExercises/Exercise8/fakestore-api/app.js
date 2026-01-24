// ################## CREATE APP: REQUIRE EXPRESS PACKAGE
const express =  require('express');
const cors = require("cors") // cors policy to handle resources accross different origins
//adding swagger
const swaggerui = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

//create an app using express
const app = express();

app.use(cors())//cors polic config
// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

//importing routes
const productRoutes = require('./routes/productRoutes');

// ################## REQ & RES

app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocument));

app.use('/products', productRoutes);


module.exports = app;