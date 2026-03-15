const express = require("express"); //importing express

const app = express(); //creating express app

//dotenv config import before db connection
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//help to connect database directly as connection function already called inside it
require("./dbConnect");

// parse requests of content-type - application/json
app.use(express.json());

//testing requests
app.get("/", (req, res) => {
    res.json({message: `Blogging API mysql app is running on PORT: ${PORT}`});
});

app.use("/api", require("./routes"));

//listening port to test
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});