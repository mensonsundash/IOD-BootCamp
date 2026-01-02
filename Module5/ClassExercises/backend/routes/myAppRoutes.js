const express = require("express");

const myAppRouter  = express.Router();




myAppRouter.get('/', (req ,res) => {
    res.send('Welcome to my backend-1 application.');
});

myAppRouter.get('/about', (req, res) => {
    res.send('This page is developed by Menson as part of web server demo.');
});

myAppRouter.get("/contact", (req, res) => {
    res.send('Please contact 123-1123-1222');
});

myAppRouter.get('/test', (req, res) => {
    res.send('This root is for test purpose.');
});

module.exports = myAppRouter;