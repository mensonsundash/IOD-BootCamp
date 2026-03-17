"use strict";

const { DataTypes } = require("sequelize");
const { Sequelize } = require("../dbConnect");

// mysql schema generator to create table
const Post = Sequelize.define("post", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING
    }
},{
    timestamps: true
});

module.exports = Post;