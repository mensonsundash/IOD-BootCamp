const express = require("express"); //importing express

const app = express(); //creating express app

const PORT = 3000;

//listening port to test
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})