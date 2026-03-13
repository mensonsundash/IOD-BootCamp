'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    // Reference to the use who created the post
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    title:{type: String, trim: true, required: true},
    description: {type: String, trim: true, required: true},
    image_url: {type: String, trim: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("post", postSchema);

