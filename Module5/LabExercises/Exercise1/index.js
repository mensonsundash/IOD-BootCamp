
//################### require express package
const express = require('express');

//create an app using the express
const app = express(); // MAIN: WEB SERVER-1
const app2 = express(); // WEB SERVER-2

//set the port
const port = 3000; //port for WEB SERVER-1
const port2 = 4000; //port for WEB SERVER-2

//################### request and response
app.get('/', (req, res) => {
    res.send('This is App1 responding');
})

app.get('/test', (req, res) => {
    res.send('This is app1 test')
})

//req res for WEB SERVER-2
app2.get('/', (req, res) =>{
    res.send('This is App2 responding.')
})

//################### listening the hardware/ port
app.listen(port, () => {
    console.log(`App1 is Listening at port ${port} http://localhost:${port}`);
});

app2.listen(port2, () => {
    console.log(`App2 is listening at port ${port2} http://localhost:${port2}`)
});

