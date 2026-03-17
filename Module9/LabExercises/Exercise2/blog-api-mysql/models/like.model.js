"use strict";

const { DataTypes } = require("sequelize");
const { Sequelize } = require("../dbConnect");

// mysql schema generator to create table
const Like = Sequelize.define("like", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: true
});

module.exports = Like;