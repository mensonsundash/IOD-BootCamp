// ################## CREATE APP: REQUIRE EXPRESS PACKAGE
const app = require('./app');

const port = 3000;

// ################## LISTENING APP
app.listen(port, () =>{
    console.log(`App is listening to port ${port}: http://localhost:${port}`)
})