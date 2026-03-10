const express = require("express"); // importing framework
const app = express(); // creating express app
const calculatorRoutes = require("./routes/calculatorRoutes")

const path = require('path'); // built-in utility to work with files 

const PORT = 3000;

// Middleware to parse json data
app.use(express.json());

// serves static HTML
//__dirname is a root folder where server.js exists
// working with views (path.join(__dirname, "views") creating absolute path to views/ folder)
app.use(express.static(path.join(__dirname, "views")));
app.get("/", express.static('views')) ;// getting public view UI to work with calculator api

//Testing routes
app.get('/', (req, res) => {
    res.send("Calculator API is running...");
})

app.use("/api/calculator", calculatorRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})