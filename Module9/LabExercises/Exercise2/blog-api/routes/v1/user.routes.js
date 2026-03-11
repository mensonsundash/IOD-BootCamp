const express = require("express");
const app = express.Router();

// importing controller functions available to connect routes
const { userList, createUser, updateUser, deleteUser } = require("../../controllers/user.controller")

// app.get('/', (req, res) => {
//     res.json({message: "This is router api V1: User"});
// })

//RESTful API endpoints
app.get("/", userList);
app.post("/", createUser);
app.put("/:id", updateUser);
app.delete("/:id", deleteUser);

module.exports = app;