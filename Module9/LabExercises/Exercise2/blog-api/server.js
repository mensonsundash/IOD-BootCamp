const express = require("express"); //importing express

const app = express(); //creating express app

const PORT = 3000;
//Testing ROUTES
app.get("/", (req,res) => {
    res.json({message: `Blogging Api app is running on PORT:${PORT}`})
});

//Main API Routes (Pathway to all routes) -:Connecting Routes to Express App
app.use("/api", require("./routes"))

//listening port to test
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})