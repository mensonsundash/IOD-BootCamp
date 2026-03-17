const express = require("express");
const app = express.Router();
const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require("../../controllers/user.controller")

app.get("/", getAllUser);
app.get("/:id", getUserById);
app.post("/", createUser);
app.put("/:id", updateUser);
app.delete("/:id", deleteUser);

module.exports = app;