"use strict";

const { DataTypes } = require("sequelize");
const { Sequelize } = require("../dbConnect");

// mysql schema generator to create table
const User = Sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.BIGINT,
    },
    address: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

module.exports = User;